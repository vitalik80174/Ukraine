// «Вікно» — the living city on top of the painted Lviv: birds, people, the cat, real stars, the ISS,
// aurora, festivals, legends and what happens when you touch things. Loaded before the main script;
// everything here runs only once the main script has built `world`.
"use strict";
var SNOWC=0, SUNGLOW=0, METEOR_RATE=1, SMOKE_TINT=null;   // read by the painter in vikno.html

const LIFE={ wet:0, pig:null, crows:null, swal:null, bats:null, geese:null, leaves:[], drips:[], fw:[], dragon:null, dragonNext:30,
  shadows:null, kp:0, iss:null, issT:0, tapped:{}, ringUntil:0, ringAt:null, catFoundPop:0, toasts:{} };
const LQ=new URLSearchParams(location.search);
const dayKey=d=>`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
const md=d=>(d.getMonth()+1)*100+d.getDate();                       // 1225 = 25 December
const inRange=(v,a,b)=> a<=b ? v>=a&&v<=b : v>=a||v<=b;
function once(key,fn){ const k="once."+key; if (store.get(k,0)) return; store.set(k,1); fn(); }

/* ================= window lights through the day: a slow morning wave, a busy evening ================= */
function windowShare(hh,night){
  if (night<.45) return 0;
  if (hh>=5 && hh<9) return clamp((hh-5.2)/1.6)*.5;                 // the city wakes up window by window
  if (hh>=9 && hh<17) return .3;
  if (hh>=17 && hh<22) return .6;
  if (hh>=22 || hh<1) return lerp(.6,.25,((hh+24-22)%24)/3);
  return .07;                                                         // deep night
}

/* ================= setup ================= */
function lifeInit(){
  SNOWC=+(LQ.get("snowc")||store.get("snowc",0)); LIFE.wet=store.get("wet",0);
  const so=$("optSound"); if (so){ so.checked=store.get("sound",true); so.onchange=e=>store.set("sound",e.target.checked); }
  renderLifePanel();
  loadKp(); setInterval(loadKp,30*60*1000);
  setInterval(()=>{ store.set("snowc",SNOWC); store.set("wet",LIFE.wet); },60000);
  const d=now();
  setTimeout(()=>{ const f=factOfDay(d); once("fact."+dayKey(d),()=>{ toast(f.short); LIFE.ringAt=f.at; LIFE.ringUntil=tsec+7; }); },2500);
  const fest=festival(d); if (fest) setTimeout(()=>once("fest."+dayKey(d),()=>toast(fest.toast)),6000);
  const ms=meteorShower(d); if (ms) setTimeout(()=>once("meteor."+dayKey(d),()=>toast(`Цієї ночі — ${ms}: більше падаючих зірок`)),9000);
}

/* ================= weather memory: snow on the roofs and wet tin after rain ================= */
function weatherMemory(dt,W_,S){
  if (LQ.get("snowc")) return;
  if (W_.snow>0) SNOWC=Math.min(1,SNOWC+dt/(900/(.4+W_.snow)));            // about ten minutes of snowfall covers the roofs
  else if (W_.temp>0 && SNOWC>0) SNOWC=Math.max(0,SNOWC-dt*(W_.temp/2400)*(1+S.day*1.5));
  if (W_.rain>0) LIFE.wet=Math.min(1,LIFE.wet+dt/60);
  else LIFE.wet=Math.max(0,LIFE.wet-dt/(S.day>.5?1500:5400));
}

/* ================= the sky layer (behind the city) ================= */
function lifeSky(dt,d,S,W_,sp,mp,starA,night){
  weatherMemory(dt,W_,S);
  const ms=meteorShower(d); METEOR_RATE= ms ? 9 : 1;
  if (starA>.05) constellations(d,starA);
  if (starA>.1) iss(dt,d,starA);
  aurora(d,S,W_,night);
  geese(dt,d,S,W_);
  dragon(dt,d,S,mp,night);
  fireworks(dt,d,night);
}

/* ---- real bright stars and constellations over Lviv (we look south: azimuth 90…270 across the window) ---- */
const STARS=[ // name, RA (hours), Dec (degrees), magnitude
 ["Бетельгейзе",5.919,7.41,.5],["Рігель",5.242,-8.2,.1],["Беллатрікс",5.418,6.35,1.6],["Мінтака",5.533,-.3,2.2],["Альнілам",5.603,-1.2,1.7],["Альнітак",5.679,-1.94,1.8],["Саїф",5.796,-9.67,2.1],
 ["Альдебаран",4.599,16.51,.9],["Сіріус",6.752,-16.72,-1.4],["Кастор",7.577,31.89,1.6],["Поллукс",7.755,28.03,1.1],["Капелла",5.278,46,.1],["Процион",7.655,5.22,.4],
 ["Регул",10.139,11.97,1.4],["Альгіеба",10.333,19.84,2],["Зосма",11.235,20.52,2.6],["Денебола",11.818,14.57,2.1],["Шертан",11.237,15.43,3.3],
 ["Арктур",14.261,19.18,-.05],["Спіка",13.42,-11.16,1],["Антарес",16.49,-26.43,1],["Джубба",16.005,-22.62,2.3],["Акраб",16.09,-19.8,2.6],["Шаула",17.56,-37.1,1.6],["Сарган",17.62,-43,1.9],
 ["Вега",18.616,38.78,0],["Денеб",20.69,45.28,1.3],["Садр",20.37,40.26,2.2],["Альбірео",19.51,27.96,3.1],["Гієна",20.77,33.97,2.5],["Дельта Лебедя",19.75,45.13,2.9],
 ["Альтаїр",19.846,8.87,.8],["Таразед",19.77,10.61,2.7],["Альшаїн",19.92,6.41,3.7],
 ["Маркаб",23.08,15.2,2.5],["Шеат",23.06,28.08,2.4],["Альгеніб",.22,15.18,2.8],["Альферац",.14,29.09,2.1],
 ["Каус Австраліс",18.4,-34.38,1.8],["Нункі",18.92,-26.3,2],["Каус Медіа",18.35,-29.83,2.7],["Каус Бореаліс",18.47,-25.42,2.8],["Аскелла",19.04,-29.88,2.6],["Тау Стрільця",19.12,-27.67,3.3],["Фі Стрільця",18.76,-26.99,3.2],["Альнасл",18.1,-30.42,3]
];
const CONST=[ // Ukrainian name, line pairs by star names
 ["Оріон",[["Бетельгейзе","Беллатрікс"],["Бетельгейзе","Альнітак"],["Беллатрікс","Мінтака"],["Мінтака","Альнілам"],["Альнілам","Альнітак"],["Альнітак","Саїф"],["Мінтака","Рігель"]]],
 ["Близнята",[["Кастор","Поллукс"]]],
 ["Лев",[["Регул","Альгіеба"],["Альгіеба","Зосма"],["Зосма","Денебола"],["Денебола","Шертан"],["Шертан","Регул"]]],
 ["Скорпіон",[["Акраб","Джубба"],["Джубба","Антарес"],["Антарес","Шаула"],["Шаула","Сарган"]]],
 ["Лебідь",[["Денеб","Садр"],["Садр","Альбірео"],["Гієна","Садр"],["Садр","Дельта Лебедя"]]],
 ["Орел",[["Таразед","Альтаїр"],["Альтаїр","Альшаїн"]]],
 ["Пегас",[["Маркаб","Шеат"],["Шеат","Альферац"],["Альферац","Альгеніб"],["Альгеніб","Маркаб"]]],
 ["Стрілець",[["Каус Австраліс","Каус Медіа"],["Каус Медіа","Каус Бореаліс"],["Каус Медіа","Фі Стрільця"],["Фі Стрільця","Нункі"],["Нункі","Тау Стрільця"],["Тау Стрільця","Аскелла"],["Аскелла","Каус Австраліс"],["Альнасл","Каус Медіа"],["Альнасл","Каус Австраліс"]]]
];
function altaz(raH,dec,date){
  const rad=Math.PI/180, n=date.getTime()/86400000+2440587.5-2451545.0;
  const gmst=(18.697374558+24.06570982441908*n)%24, lst=(gmst*15+LON)*rad, ha=lst-raH*15*rad, la=LAT*rad, de=dec*rad;
  const el=Math.asin(Math.sin(la)*Math.sin(de)+Math.cos(la)*Math.cos(de)*Math.cos(ha));
  const az=Math.atan2(-Math.sin(ha), Math.tan(de)*Math.cos(la)-Math.sin(la)*Math.cos(ha));
  return {el:el/rad, az:(az/rad+360)%360};
}
const skyXY=(p)=>({x:W*clamp((p.az-90)/180,-.2,1.2), y:H*(.5-p.el/80)});
function constellations(d,a){
  const pos={};
  for(const [name,ra,dec,mag] of STARS){ const p=altaz(ra,dec,d); if (p.el<2.5||p.az<75||p.az>285) continue; const q=skyXY(p); pos[name]=q;
    const r=Math.max(.8,2.6-mag*.6), tw=.75+.25*Math.sin(tsec*2+ra*7);
    ctx.fillStyle=`rgba(255,248,232,${Math.min(1,a*tw)})`; ctx.beginPath(); ctx.arc(q.x,q.y,r,0,7); ctx.fill(); }
  ctx.lineWidth=1; ctx.font="11px Roboto,system-ui,sans-serif";
  for(const [cname,lines] of CONST){ let n=0, cx=0, cy=0;
    ctx.strokeStyle=`rgba(190,210,255,${a*.22})`; ctx.beginPath();
    for(const [s1,s2] of lines){ const p1=pos[s1], p2=pos[s2]; if (!p1||!p2) continue; ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y); n++; cx+=p1.x+p2.x; cy+=p1.y+p2.y; }
    ctx.stroke();
    if (n>=1){ ctx.fillStyle=`rgba(200,215,255,${a*.38})`; ctx.fillText(cname, cx/(2*n)+8, cy/(2*n)-8); } }
  // the Pleiades
  const pl=altaz(3.79,24.1,d); if (pl.el>3 && pl.az>75 && pl.az<285){ const q=skyXY(pl); ctx.fillStyle=`rgba(220,230,255,${a*.85})`;
    for(const [dx,dy] of [[0,0],[4,-2],[7,1],[3,4],[-3,3],[6,-5]]) ctx.fillRect(q.x+dx,q.y+dy,1.4,1.4); }
}

/* ---- the International Space Station, live: visible only when it is sunlit above a dark Lviv ---- */
async function fetchIss(){
  try{ const r=await fetch("https://api.wheretheiss.at/v1/satellites/25544"); const j=await r.json();
    const prev=LIFE.iss; LIFE.iss={lat:j.latitude, lon:j.longitude, alt:j.altitude, vis:j.visibility, t:Date.now(), dlat:0, dlon:0};
    if (prev){ const dtt=(LIFE.iss.t-prev.t)/1000; if (dtt>0&&dtt<60){ LIFE.iss.dlat=(j.latitude-prev.lat)/dtt; let dl=j.longitude-prev.lon; if (dl>180) dl-=360; if (dl<-180) dl+=360; LIFE.iss.dlon=dl/dtt; } }
  }catch(e){}
}
function issTopo(lat,lon,alt){
  const rad=Math.PI/180, R=6371, f=lat*rad, l=lon*rad, f0=LAT*rad, l0=LON*rad;
  const s=[(R+alt)*Math.cos(f)*Math.cos(l),(R+alt)*Math.cos(f)*Math.sin(l),(R+alt)*Math.sin(f)];
  const o=[R*Math.cos(f0)*Math.cos(l0),R*Math.cos(f0)*Math.sin(l0),R*Math.sin(f0)];
  const dv=[s[0]-o[0],s[1]-o[1],s[2]-o[2]], dn=Math.hypot(...dv);
  const up=[Math.cos(f0)*Math.cos(l0),Math.cos(f0)*Math.sin(l0),Math.sin(f0)], east=[-Math.sin(l0),Math.cos(l0),0], north=[-Math.sin(f0)*Math.cos(l0),-Math.sin(f0)*Math.sin(l0),Math.cos(f0)];
  const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
  return {el:Math.asin(dot(dv,up)/dn)/rad, az:(Math.atan2(dot(dv,east),dot(dv,north))/rad+360)%360};
}
function iss(dt,d,a){
  if (LQ.get("iss")){ const t=(tsec%40)/40; drawIss(W*(.1+t*.8),H*(.32-Math.sin(t*Math.PI)*.15),a); return; }
  LIFE.issT-=dt; if (LIFE.issT<=0){ LIFE.issT=6; fetchIss(); }
  const s=LIFE.iss; if (!s || s.vis!=="daylight") return;
  const k=(Date.now()-s.t)/1000, p=issTopo(s.lat+s.dlat*k, s.lon+s.dlon*k, s.alt);
  if (p.el<10 || p.az<80 || p.az>280) return;
  const q=skyXY(p); drawIss(q.x,q.y,a);
}
function drawIss(x,y,a){
  const g=ctx.createRadialGradient(x,y,0,x,y,9); g.addColorStop(0,`rgba(255,255,245,${a})`); g.addColorStop(1,"rgba(255,255,245,0)");
  ctx.fillStyle=g; ctx.fillRect(x-9,y-9,18,18); ctx.fillStyle=`rgba(255,255,250,${a})`; ctx.beginPath(); ctx.arc(x,y,2.4,0,7); ctx.fill();
  ctx.font="11px Roboto,system-ui,sans-serif"; ctx.fillStyle=`rgba(230,236,255,${a*.6})`; ctx.fillText("МКС",x+8,y-6);
}

/* ---- meteor showers by date ---- */
function meteorShower(d){
  const v=md(d), list=[[103,104,"Квадрантиди"],[421,423,"Ліриди"],[505,506,"Ета-Аквариди"],[810,813,"Персеїди"],[1020,1022,"Оріоніди"],[1116,1118,"Леоніди"],[1212,1214,"Гемініди"]];
  for (const [a,b,n] of list) if (v>=a&&v<=b) return n;
  return LQ.get("meteors") ? "Персеїди" : null;
}

/* ---- aurora when the geomagnetic storm is strong enough to reach Lviv (Kp ≥ 7) ---- */
async function loadKp(){
  try{ const r=await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json"); const j=await r.json(); const last=j[j.length-1]; LIFE.kp=parseFloat(last[1])||0; }catch(e){}
}
function aurora(d,S,W_,night){
  const strong= LIFE.kp>=7 || LQ.get("aurora");
  if (!strong || night<.75 || W_.cloud>.7) return;
  once("aurora."+dayKey(d),()=>toast("Над Львовом північне сяйво!"));
  const k=(night-.75)*4*(1-W_.cloud);
  for(let b=0;b<3;b++){ const base=H*(.47-b*.03);
    for(let x=0;x<W;x+=6){ const f=x/W, h=H*(.12+.08*Math.sin(f*7+tsec*.3+b)+.04*Math.sin(f*23-tsec*.7)), a=k*(.10+.06*Math.sin(f*40+tsec*1.3+b*2));
      const g=ctx.createLinearGradient(0,base-h,0,base); g.addColorStop(0,`rgba(200,60,120,0)`); g.addColorStop(.35,`rgba(120,255,170,${a*.6})`); g.addColorStop(1,`rgba(80,255,150,${a})`);
      ctx.fillStyle=g; ctx.fillRect(x,base-h,6,h); } }
}

/* ---- migrating geese: south in autumn, north in spring ---- */
function geese(dt,d,S,W_){
  const m=md(d), autumn=inRange(m,1001,1110), spring=inRange(m,301,410);
  if (!(autumn||spring||LQ.get("geese")) || S.day<.6 || W_.rain) { LIFE.geese=null; return; }
  if (!LIFE.geese && Math.random()<dt/(LQ.get("geese")?3:300)) LIFE.geese={dir: autumn?-1:1, x: autumn?1.15:-.15, y:.12+Math.random()*.12, n:9+(Math.random()*8|0)};
  const g=LIFE.geese; if (!g) return;
  g.x+=g.dir*.018*dt; if (g.x<-.4||g.x>1.4){ LIFE.geese=null; return; }
  ctx.strokeStyle="rgba(40,44,56,.75)"; ctx.lineWidth=1.3;
  for(let i=0;i<g.n;i++){ const side=i%2?1:-1, k=Math.ceil(i/2), x=(g.x-g.dir*k*.014)*W, y=(g.y+side*k*.012)*H, f=Math.sin(tsec*6+i)*3;
    ctx.beginPath(); ctx.moveTo(x-5,y-f); ctx.lineTo(x,y); ctx.lineTo(x+5,y-f); ctx.stroke(); }
}

/* ---- the dragon of the High Castle flies by on full-moon nights ---- */
function dragon(dt,d,S,mp,night){
  const ph=moonPhase(d), full=Math.abs(ph-.5)<.035 && mp.el>3 && night>.8;
  if (!full && !LQ.get("dragon")){ LIFE.dragon=null; return; }
  if (LQ.get("dragon")&&LIFE.dragonNext>6) LIFE.dragonNext=1; LIFE.dragonNext-=dt;
  if (!LIFE.dragon && LIFE.dragonNext<=0){ LIFE.dragon={x:1.2, y:.2+Math.random()*.1, t:0}; LIFE.dragonNext=LQ.get("dragon")?6:420+Math.random()*300; }
  const g=LIFE.dragon; if (!g) return;
  g.t+=dt; g.x-=.05*dt; if (g.x<-.3){ LIFE.dragon=null; return; }
  const x=g.x*W, y=(g.y+Math.sin(g.t*.8)*.03)*H, s=H*.03, flap=Math.sin(g.t*5);
  ctx.fillStyle="rgba(70,78,108,.95)"; ctx.shadowColor="rgba(200,215,255,.55)"; ctx.shadowBlur=6;
  for(let k=0;k<14;k++){ const bx=x+k*s*.32, by=y+Math.sin(g.t*3-k*.6)*s*.25, r=s*(.28-k*.016); ctx.beginPath(); ctx.arc(bx,by,Math.max(1,r),0,7); ctx.fill(); }
  ctx.beginPath(); ctx.moveTo(x-s*.3,y); ctx.lineTo(x-s*.7,y-s*.12); ctx.lineTo(x-s*.35,y+s*.12); ctx.fill();              // head
  for(const side of [-1,1]){ ctx.beginPath(); ctx.moveTo(x+s*.6,y); ctx.quadraticCurveTo(x+s*1.1,y-s*(1.4*flap*side+.2),x+s*1.9,y-s*1.1*flap*side); ctx.lineTo(x+s*1.4,y); ctx.fill(); }
  ctx.shadowBlur=0;
  if (Math.sin(g.t*1.3)>.92){ const fx=x-s*.7; const gr=ctx.createRadialGradient(fx-s*.5,y,0,fx-s*.5,y,s*.8); gr.addColorStop(0,"rgba(255,200,90,.9)"); gr.addColorStop(1,"rgba(255,90,30,0)"); ctx.fillStyle=gr; ctx.fillRect(fx-s*1.4,y-s*.8,s*1.6,s*1.6); }
}

/* ---- New Year fireworks over the old town ---- */
function fireworks(dt,d,night){
  const v=md(d), hh=d.getHours()+d.getMinutes()/60, ny=(v===1231&&hh>=23.9)||(v===101&&hh<.75);
  if (!(ny||LQ.get("fw")) && !LIFE.fw.length) return;
  if ((ny||LQ.get("fw")) && Math.random()<dt*1.6){ const x=.15+Math.random()*.7, col=[[255,90,90],[255,210,80],[120,200,255],[170,255,140],[255,140,230],[255,255,255]][Math.random()*6|0];
    LIFE.fw.push({kind:"rocket",x:x*W,y:H*.9,vy:-H*(.55+Math.random()*.2),col,life:.9+Math.random()*.4}); }
  for(const p of LIFE.fw){
    p.life-=dt;
    if (p.kind==="rocket"){ p.y+=p.vy*dt; p.vy+=H*.35*dt; ctx.fillStyle="rgba(255,230,180,.9)"; ctx.fillRect(p.x,p.y,2,6);
      if (p.life<=0){ for(let k=0;k<46;k++){ const a=k/46*Math.PI*2, sp=H*(.12+Math.random()*.08); LIFE.fw.push({kind:"spark",x:p.x,y:p.y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,col:p.col,life:1.2+Math.random()*.6,max:1.8}); } } }
    else { p.x+=p.vx*dt; p.y+=p.vy*dt; p.vx*=.985; p.vy=p.vy*.985+H*.06*dt; const a=Math.max(0,p.life/p.max);
      ctx.fillStyle=rgb(p.col,a); ctx.fillRect(p.x,p.y,2.2,2.2); }
  }
  LIFE.fw=LIFE.fw.filter(p=>p.life>0);
}

/* ================= the town layer (on the roofs and the tower) ================= */
function lifeTown(dt,d,S,W_,sp,mp,night,season){
  if (!world.roofs) return;
  const fest=festival(d); SMOKE_TINT= fest ? fest.smoke : null;
  cloudShadows(dt,S,W_);
  wetRoofs(S,night);
  moonGlints(d,mp,night);
  windowStories(d,S,night);
  sunsetGlints(S);
  icicles(dt,W_,S,night);
  laundry(d,S,W_);
  crows(dt,d,S,W_);
  tourists(d,S,W_,night);
  lion(d,night);
  ghost(d,night,W_);
  pigeons(dt,d,S,W_,night);
  cat(d,S,W_,night);
  carolers(d,night);
  xmasTree(d,night);
  if (typeof trumpeterDraw==="function") trumpeterDraw(dt,d,night);
  landmarkRing();
}

function cloudShadows(dt,S,W_){
  if (S.day<.5 || W_.cloud<.15 || W_.cloud>.85 || W_.rain || W_.snow) return;
  if (!LIFE.shadows) LIFE.shadows=Array.from({length:6},()=>({x:Math.random()*1.4-.2,y:.55+Math.random()*.4,r:.12+Math.random()*.12}));
  for(const c of LIFE.shadows){ c.x+=(.003+W_.wind*.02)*dt; if (c.x>1.3) c.x=-.3;
    const x=c.x*W, y=c.y*H, rx=c.r*W, g=ctx.createRadialGradient(x,y,0,x,y,rx); const a=.13*S.day*(1-Math.abs(W_.cloud-.5));
    g.addColorStop(0,`rgba(20,26,44,${a})`); g.addColorStop(1,"rgba(20,26,44,0)"); ctx.fillStyle=g;
    ctx.save(); ctx.translate(x,y); ctx.scale(1,.35); ctx.translate(-x,-y); ctx.fillRect(x-rx,y-rx,rx*2,rx*2); ctx.restore(); }
}
function wetRoofs(S,night){
  const w=LIFE.wet; if (w<.05 || SNOWC>.5) return;
  for(const r of world.roofs){ const a=w*(.1+.14*S.day)*(r.tin?1.4:.8);
    const g=ctx.createLinearGradient(0,r.top-r.rd,0,r.top); g.addColorStop(0,`rgba(225,235,255,${a})`); g.addColorStop(1,`rgba(225,235,255,${a*.2})`);
    ctx.fillStyle=g; ctx.fillRect(r.x0+r.w*.15,r.top-r.rd,r.w*.7,r.rd);
    if (night>.6) { ctx.fillStyle=`rgba(255,205,140,${w*.25})`; ctx.fillRect(r.x0+r.w*.4,r.top-r.rd*.4,Math.max(1,r.w*.05),r.rd*.3); } }
}
function moonGlints(d,mp,night){
  if (night<.7 || mp.el<3) return; const k=Math.max(0,1-Math.abs(moonPhase(d)-.5)*4); if (k<.1) return;
  for(const r of world.roofs){ if (!r.tin) continue; ctx.fillStyle=`rgba(210,222,255,${k*.32})`; ctx.fillRect(r.x0+r.w*.2,r.top-r.rd*.82,r.w*.6,Math.max(1,r.rd*.08)); }
}
function sunsetGlints(S){
  if (SUNGLOW<.15 || !world.wins) return;
  for(let i=0;i<world.wins.length;i+=7){ const w=world.wins[i]; const a=SUNGLOW*(.5+.5*Math.sin(tsec*.8+i))*.85;
    ctx.fillStyle=`rgba(255,214,140,${a})`; ctx.fillRect(w.x,w.y,w.w,w.h); }
}

/* ---- stories in the windows ---- */
function storyWins(){ const n=world.wins.length; if (!n) return null; const r=rng(seed+99), pick=()=>(r()*n)|0;
  return {tv:[pick(),pick(),pick()], baker:pick(), student:pick(), baby:pick(), mystery:pick()}; }
function windowStories(d,S,night){
  if (!world.wins || !world.wins.length) return;
  if (!LIFE.story || LIFE.storyN!==world.wins.length){ LIFE.story=storyWins(); LIFE.storyN=world.wins.length; }
  const st=LIFE.story, hh=d.getHours()+d.getMinutes()/60, m=d.getMonth()+1;
  const paint=(i,col,a=1)=>{ const w=world.wins[i]; if (!w) return; ctx.fillStyle=rgb(col,a); ctx.fillRect(w.x,w.y,w.w,w.h); };
  if (night>.5){
    if (hh>=19||hh<1) for(const i of st.tv){ const f=.5+.5*Math.sin(tsec*7+i)*Math.sin(tsec*2.3+i*3); paint(i,mix([120,150,255],[200,220,255],f)); }
    if (hh>=3&&hh<6) paint(st.baker,[255,236,180]);
    if ((m===1||m===6) && (hh>=20||hh<2)) paint(st.student,[230,240,255]);
    if (hh>=20||hh<7) paint(st.baby,[255,170,200],.8);
  }
  // the mystery window is always lit
  paint(st.mystery, night>.5?[255,186,160]:[255,214,190]);
  if (S.day>.5){ const w=world.wins[st.mystery]; if (w){ ctx.fillStyle="rgba(220,60,70,.9)"; ctx.fillRect(w.x+w.w*.3,w.y+w.h-2,w.w*.4,2); } }  // a red geranium on the sill
  for(const k in LIFE.tapped){ if (LIFE.tapped[k]<tsec) { delete LIFE.tapped[k]; continue; } paint(+k,[255,214,140]); }
}

/* ---- icicles on the eaves in frost, dripping in a thaw ---- */
function icicles(dt,W_,S,night){
  if (SNOWC<.3) return;
  const col=night>.6?"rgba(170,190,230,.75)":"rgba(220,236,255,.85)";
  ctx.fillStyle=col;
  for(const r of world.roofs){ if (r.sc<.6) continue; const step=Math.max(4,r.w/8);
    for(let x=r.x0+step*.5;x<r.x0+r.w;x+=step){ const h=(3+((x*7)%5))*r.sc*1.4*Math.min(1,SNOWC*1.5);
      ctx.beginPath(); ctx.moveTo(x-1.4,r.top); ctx.lineTo(x+1.4,r.top); ctx.lineTo(x,r.top+h); ctx.fill();
      if (W_.temp>0 && Math.random()<dt*.05) LIFE.drips.push({x,y:r.top+h,v:0}); } }
  for(const p of LIFE.drips){ p.v+=H*.8*dt; p.y+=p.v*dt; ctx.fillRect(p.x-.6,p.y,1.2,3); }
  LIFE.drips=LIFE.drips.filter(p=>p.y<H);
}

/* ---- laundry on a line on dry sunny days ---- */
function laundry(d,S,W_){
  if (S.day<.6 || W_.cloud>.6 || W_.rain || W_.snow || W_.temp<4) return;
  const near=world.roofs.filter(r=>r.sc>.85&&r.x0>W*.62&&r.x0<W*.9);
  if (near.length<2) return; const a=near[0], b=near[1];
  const x1=a.x0+a.w*.7, x2=b.x0+b.w*.3, y=Math.min(a.top,b.top)+H*.035;
  ctx.strokeStyle="rgba(60,60,70,.7)"; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(x1,y); ctx.quadraticCurveTo((x1+x2)/2,y+6,x2,y); ctx.stroke();
  const cols=[[220,60,60],[250,250,250],[70,130,220],[250,200,60],[120,190,120],[240,140,190]], n=Math.max(3,Math.floor((x2-x1)/14));
  for(let k=0;k<n;k++){ const t=(k+.5)/n, x=lerp(x1,x2,t), yy=y+Math.sin(t*Math.PI)*5, sw=Math.sin(tsec*(2+W_.wind*4)+k)*(1+W_.wind*5);
    ctx.fillStyle=rgb(mix(cols[k%cols.length],[0,0,0],(1-S.day)*.5)); ctx.beginPath(); ctx.moveTo(x-4,yy); ctx.lineTo(x+4,yy); ctx.lineTo(x+4+sw,yy+10); ctx.lineTo(x-4+sw,yy+10); ctx.fill(); }
}

/* ---- crows sitting on chimneys in winter ---- */
function crows(dt,d,S,W_){
  const m=d.getMonth()+1; if (!(m>=11||m<=2) || S.day<.4 || !world.chimneys) { return; }
  if (!LIFE.crows){ const r=rng(seed+5); LIFE.crows=Array.from({length:5},()=>({c:(r()*world.chimneys.length)|0,hop:0})); }
  ctx.fillStyle="rgba(16,16,22,.95)";
  for(const c of LIFE.crows){ const ch=world.chimneys[c.c%world.chimneys.length]; if (!ch) continue;
    if (Math.random()<dt*.15) c.hop=.4; c.hop=Math.max(0,c.hop-dt); const y=ch[1]-3-Math.sin(c.hop/.4*Math.PI)*5;
    ctx.beginPath(); ctx.ellipse(ch[0],y,4,3,0,0,7); ctx.fill(); ctx.beginPath(); ctx.arc(ch[0]-3.5,y-2.5,2,0,7); ctx.fill(); ctx.fillRect(ch[0]+2,y,5,1.4); }
}

/* ---- the City Hall tower: tourists, the lion, the ghost, pigeons ---- */
function tourists(d,S,W_,night){
  const t=world.tower; if (!t) return; const hh=d.getHours()+d.getMinutes()/60;
  if (night>.5 || hh<10 || hh>20.5 || W_.rain || W_.snow>.5) return;
  const m=d.getMonth()+1, n=(m>=5&&m<=9?7:4)+((d.getDay()===0||d.getDay()===6)?2:0), r=rng(seed+d.getDate());
  for(let k=0;k<n;k++){ const base=t.cx-t.tw/2+t.tw*(.08+.84*r()), x=base+Math.sin(tsec*.2+k*2)*t.tw*.04, y=t.topY;
    const col=[[200,60,60],[60,90,170],[230,200,80],[90,150,90],[240,240,240],[120,80,150]][(r()*6)|0];
    ctx.fillStyle=rgb(mix(col,[30,30,40],.15)); ctx.fillRect(x-2,y-7,4,7); ctx.fillStyle="rgb(232,196,160)"; ctx.beginPath(); ctx.arc(x,y-9,2,0,7); ctx.fill(); }
}
function lion(d,night){
  const t=world.tower; if (!t) return; const s=H*.024, x=t.cx-t.tw/2-s*.1, y=t.topY;
  const c=mix([226,204,150],[40,40,56],night*.7), dark=mix([150,120,80],[20,20,30],night*.6);
  const cyc=tsec%45, turn=cyc>30&&cyc<34 ? Math.sin((cyc-30)/4*Math.PI) : 0, yawn=cyc>38&&cyc<40.5;
  ctx.fillStyle=rgb(c); ctx.beginPath(); ctx.ellipse(x+s*.15,y-s*.3,s*.42,s*.3,0,0,7); ctx.fill();           // body
  ctx.beginPath(); ctx.arc(x-s*.18+turn*s*.12,y-s*.72,s*.32,0,7); ctx.fill();                                   // mane
  ctx.fillStyle=rgb(dark); ctx.beginPath(); ctx.arc(x-s*.25+turn*s*.2,y-s*.72,s*.16,0,7); ctx.fill();          // face
  if (yawn){ ctx.fillStyle="rgb(120,30,30)"; ctx.beginPath(); ctx.ellipse(x-s*.27+turn*s*.2,y-s*.64,s*.07,s*.06,0,0,7); ctx.fill(); }
  ctx.strokeStyle=rgb(c); ctx.lineWidth=Math.max(1,s*.08); ctx.beginPath(); ctx.moveTo(x+s*.5,y-s*.3); ctx.quadraticCurveTo(x+s*.8,y-s*.5-Math.sin(tsec)*s*.15,x+s*.7,y-s*.8); ctx.stroke();
}
function ghost(d,night,W_){
  const t=world.tower; if (!t) return;
  const on=(d.getHours()===3 && d.getMinutes()<20) || LQ.get("ghost"); if (!on || night<.7) return;
  const a=W_.fog?.55:.32, ph=(tsec%40)/40, x=t.cx-t.tw/2+t.tw*(.5+.42*Math.sin(ph*Math.PI*2)), y=t.topY;
  const g=ctx.createRadialGradient(x+6,y-10,0,x+6,y-10,22); g.addColorStop(0,`rgba(255,200,120,${a*1.4})`); g.addColorStop(1,"rgba(255,200,120,0)"); ctx.fillStyle=g; ctx.fillRect(x-20,y-34,52,48);
  ctx.fillStyle=`rgba(220,230,255,${a})`; ctx.beginPath(); ctx.moveTo(x-4,y); ctx.quadraticCurveTo(x-5,y-12,x,y-15); ctx.quadraticCurveTo(x+5,y-12,x+4,y); ctx.fill();
  ctx.beginPath(); ctx.arc(x,y-16,3,0,7); ctx.fill();
  ctx.fillStyle=`rgba(255,220,150,${Math.min(1,a*2)})`; ctx.fillRect(x+5,y-12,3,4);
}
function pigeons(dt,d,S,W_,night){
  const t=world.tower; if (!t) return;
  if (!LIFE.pig){ LIFE.pig=Array.from({length:16},(_,k)=>({home:(k+.5)/16, a:Math.random()*6.3, r:.7+Math.random()*.6, sp:.5+Math.random()*.4, fly:0, ret:0})); LIFE.pigNext=60; }
  LIFE.pigNext-=dt;
  if (LIFE.pigNext<=0 && S.day>.5 && !W_.rain){ pigeonsUp(); LIFE.pigNext=120+Math.random()*180; }
  if (d.getMinutes()===0 && d.getSeconds()<2 && S.day>.4 && !LIFE.hourFlight){ LIFE.hourFlight=1; pigeonsUp(); } if (d.getMinutes()!==0) LIFE.hourFlight=0;
  const cx=t.cx, cy=t.topY-H*.06;
  for(const p of LIFE.pig){
    const hx=t.cx-t.tw/2+t.tw*p.home, hy=t.topY-2;
    let x=hx, y=hy;
    if (p.fly>0){ p.fly-=dt; p.a+=dt*p.sp*1.6; const ox=cx+Math.cos(p.a)*W*.2*p.r, oy=cy+Math.sin(p.a)*H*.07*p.r;
      const k=Math.min(1,(22-p.fly)/1.5, p.fly/1.5); x=lerp(hx,ox,Math.max(0,k)); y=lerp(hy,oy,Math.max(0,k)); }
    const flying=p.fly>0, c=mix([150,154,166],[40,44,60],night*.75);
    ctx.fillStyle=rgb(c); ctx.strokeStyle=rgb(c); ctx.lineWidth=1.3;
    if (flying){ const f=Math.sin(tsec*14+p.a*3)*3; ctx.beginPath(); ctx.moveTo(x-5,y-f); ctx.lineTo(x,y); ctx.lineTo(x+5,y-f); ctx.stroke(); }
    else if (night<.7){ ctx.beginPath(); ctx.ellipse(x,y-1.5,2.6,1.8,0,0,7); ctx.fill(); ctx.beginPath(); ctx.arc(x-2,y-3.4,1.2,0,7); ctx.fill(); }
  }
}
function pigeonsUp(){ if (!LIFE.pig) return; for(const p of LIFE.pig) if (p.fly<=0){ p.fly=20+Math.random()*8; p.a=Math.random()*6.3; } }

/* ---- the cat: hides on a different roof every day; find it and touch it ---- */
function catSpot(d){
  const t=world.tower, roofs=world.roofs.filter(r=>r.sc>.55&&r.sc<1.15&&r.x0>W*.04&&r.x0+r.w<W*.96&&Math.abs(r.x0+r.w/2-t.cx)>t.tw*1.2&&!(r.x0<W*.32&&r.top>H*.66)&&r.top<H*.8); if (!roofs.length) return null;
  const r=rng(d.getFullYear()*400+d.getMonth()*31+d.getDate()+seed%97), roof=roofs[(r()*roofs.length)|0];
  return {x:roof.x0+roof.w*(.2+r()*.6), y:roof.top-roof.rd*(.3+r()*.4), s:H*.018*roof.sc, coat:(r()*4)|0};
}
function cat(d,S,W_,night){
  if (!world.tower) return;
  const c=catSpot(d); if (!c) return; LIFE.cat=c;
  const coats=[[226,140,60],[30,30,34],[150,150,158],[140,110,80]], col=mix(coats[c.coat],[20,22,34],night*.75), s=c.s;
  ctx.fillStyle=rgb(col);
  ctx.beginPath(); ctx.ellipse(c.x,c.y-s*.45,s*.42,s*.5,0,0,7); ctx.fill();                       // body
  ctx.beginPath(); ctx.arc(c.x-s*.05,c.y-s*1.08,s*.3,0,7); ctx.fill();                              // head
  for(const sx of [-1,1]){ ctx.beginPath(); ctx.moveTo(c.x-s*.05+sx*s*.08,c.y-s*1.3); ctx.lineTo(c.x-s*.05+sx*s*.28,c.y-s*1.45); ctx.lineTo(c.x-s*.05+sx*s*.28,c.y-s*1.15); ctx.fill(); }
  ctx.strokeStyle=rgb(col); ctx.lineWidth=Math.max(1.2,s*.12); ctx.lineCap="round";
  ctx.beginPath(); ctx.moveTo(c.x+s*.35,c.y-s*.15); ctx.quadraticCurveTo(c.x+s*.9,c.y-s*.2,c.x+s*.8,c.y-s*(.7+.25*Math.sin(tsec*1.6))); ctx.stroke();
  if (night>.6){ ctx.fillStyle="rgba(200,255,120,.95)"; ctx.fillRect(c.x-s*.17,c.y-s*1.12,1.6,1.6); ctx.fillRect(c.x+s*.04,c.y-s*1.12,1.6,1.6); }
  if (LIFE.catFoundPop>tsec){ const k=LIFE.catFoundPop-tsec; ctx.fillStyle=`rgba(255,120,140,${k/2})`; ctx.font=`${Math.round(14+ (2-k)*6)}px Roboto,sans-serif`; ctx.fillText("♥",c.x-5,c.y-s*1.6-(2-k)*14); }
}

/* ---- Christmas: carolers walking along the roofs with a star, and the tree on Rynok Square ---- */
const xmas=d=>{ const v=md(d); return inRange(v,1206,119) || LQ.get("xmas"); };
function carolers(d,night){
  const v=md(d), hh=d.getHours()+d.getMinutes()/60;
  if (!((inRange(v,1224,119) && hh>=16.5 && hh<21.5) || LQ.get("xmas"))) return;
  const row=world.roofs.filter(r=>r.sc>.7&&r.sc<1); if (!row.length) return;
  const ph=(tsec%90)/90, x0=W*(-.05+ph*1.1);
  for(let k=0;k<5;k++){ const x=x0-k*H*.018, r=row.find(q=>x>=q.x0&&x<=q.x0+q.w); if (!r) continue; const y=r.top-r.rd+1;
    ctx.fillStyle=night>.5?"rgba(30,30,44,.95)":"rgba(60,40,40,.95)"; ctx.fillRect(x-2.2,y-9,4.4,9); ctx.beginPath(); ctx.arc(x,y-11,2.3,0,7); ctx.fill();
    if (k===0){ ctx.fillRect(x+3,y-22,1.2,16); const sx=x+3.6, sy=y-24, rot=tsec*1.2;
      ctx.fillStyle="rgba(255,214,90,1)"; ctx.beginPath(); for(let j=0;j<10;j++){ const a=rot+j*Math.PI/5, rr=j%2?2.4:5.5; ctx.lineTo(sx+Math.cos(a)*rr,sy+Math.sin(a)*rr); } ctx.fill();
      if (night>.5){ const g=ctx.createRadialGradient(sx,sy,0,sx,sy,18); g.addColorStop(0,"rgba(255,214,120,.45)"); g.addColorStop(1,"rgba(255,214,120,0)"); ctx.fillStyle=g; ctx.fillRect(sx-18,sy-18,36,36); } } }
}
function xmasTree(d,night){
  if (!xmas(d)) return;
  const x=W*.2, base=H*.8, h=H*.2, w=h*.5;                      // in a square of the old town, clear of the clock
  ctx.fillStyle=rgb(mix([30,90,50],[8,24,20],night*.6));
  for(let k=0;k<4;k++){ const y=base-h*.12-k*h*.2, ww=w*(1-k*.22); ctx.beginPath(); ctx.moveTo(x-ww/2,y); ctx.lineTo(x,y-h*.32); ctx.lineTo(x+ww/2,y); ctx.fill(); }
  const cols=[[255,80,80],[255,210,90],[120,190,255],[250,250,255]];
  for(let k=0;k<44;k++){ const t=k/44, y=base-h*.12-t*h*.82, ww=w*(1-t)*.92, x2=x+Math.sin(k*2.4)*ww/2, on=.4+.6*Math.abs(Math.sin(tsec*1.5+k));
    ctx.fillStyle=rgb(cols[k%4],night>.4?on:.6); ctx.beginPath(); ctx.arc(x2,y,night>.4?2.2:1.4,0,7); ctx.fill(); }
  const sy=base-h*1.0; ctx.fillStyle="rgba(255,214,90,1)"; ctx.beginPath(); for(let j=0;j<10;j++){ const a=-Math.PI/2+j*Math.PI/5, rr=j%2?4:9; ctx.lineTo(x+Math.cos(a)*rr,sy+Math.sin(a)*rr); } ctx.fill();
  if (night>.4){ const g=ctx.createRadialGradient(x,sy,0,x,sy,40); g.addColorStop(0,"rgba(255,214,120,.5)"); g.addColorStop(1,"rgba(255,214,120,0)"); ctx.fillStyle=g; ctx.fillRect(x-40,sy-40,80,80); }
}

/* ================= the front layer (over everything): morning fog, swallows, bats, falling leaves ================= */
function lifeFront(dt,d,S,W_,sp,night,season){
  if (!world.roofs) return;
  morningFog(d,S,W_);
  swallows(dt,d,S,W_);
  bats(dt,d,S,night);
  leaves(dt,d,W_,season,night);
}
function morningFog(d,S,W_){
  const hh=d.getHours()+d.getMinutes()/60, m=d.getMonth()+1;
  let k = (m>=9||m<=4) && W_.temp<12 && W_.wind<.35 && !W_.rain ? clamp((hh-4.5)/1)*clamp((9.5-hh)/2) : 0;
  if (LQ.get("mfog")) k=1; if (k<.02 || W_.fog) return;
  for(let i=0;i<4;i++){ const y=H*(.53+i*.08)+Math.sin(tsec*.07+i)*6, g=ctx.createLinearGradient(0,y-H*.07,0,y+H*.07);
    const c=mix(S.hor,[235,232,226],.5);
    g.addColorStop(0,rgb(c,0)); g.addColorStop(.5,rgb(c,.55*k)); g.addColorStop(1,rgb(c,0)); ctx.fillStyle=g; ctx.fillRect(0,y-H*.07,W,H*.14); }
}
function swallows(dt,d,S,W_){
  const m=d.getMonth()+1, hh=d.getHours(); if (!(m>=5&&m<=8) || S.day<.6 || hh<6 || hh>21 || W_.rain) return;
  if (!LIFE.swal) LIFE.swal=Array.from({length:7},()=>({x:Math.random(),y:.45+Math.random()*.2,vx:(Math.random()<.5?-1:1)*(.15+Math.random()*.1),vy:0}));
  const low=W_.cloud>.7?.1:0;                                    // before rain they fly low
  ctx.strokeStyle="rgba(24,26,40,.9)"; ctx.lineWidth=1.4;
  for(const b of LIFE.swal){ if (Math.random()<dt*.8){ b.vx=-b.vx*(.8+Math.random()*.4); } b.vy+=(Math.random()-.5)*dt*.6; b.vy*=.96;
    b.x+=b.vx*dt; b.y=clamp(b.y+b.vy*dt,.4+low,.62+low); if (b.x<-.05) b.x=1.05; if (b.x>1.05) b.x=-.05;
    const x=b.x*W, y=b.y*H, dir=Math.sign(b.vx); ctx.beginPath(); ctx.moveTo(x-6*dir,y-4); ctx.lineTo(x,y); ctx.lineTo(x-6*dir,y+3); ctx.moveTo(x,y); ctx.lineTo(x+4*dir,y); ctx.stroke(); }
}
function bats(dt,d,S,night){
  const m=d.getMonth()+1, hh=d.getHours(); if (!(m>=6&&m<=8) || night<.6 || !(hh>=20||hh<1)) return;
  if (!LIFE.bats) LIFE.bats=Array.from({length:5},()=>({x:Math.random(),y:.35+Math.random()*.2,p:Math.random()*6}));
  ctx.fillStyle="rgba(10,10,18,.95)";
  for(const b of LIFE.bats){ b.p+=dt; b.x+=Math.sin(b.p*1.7)*dt*.12+dt*.02; b.y+=Math.cos(b.p*2.3)*dt*.05; if (b.x>1.05) b.x=-.05;
    const x=b.x*W, y=b.y*H, f=Math.sin(b.p*20)*3; ctx.beginPath(); ctx.moveTo(x-6,y-f); ctx.lineTo(x-2,y); ctx.lineTo(x,y-1); ctx.lineTo(x+2,y); ctx.lineTo(x+6,y-f); ctx.lineTo(x,y+2); ctx.fill(); }
}
function leaves(dt,d,W_,season,night){
  const v=md(d); if (!(inRange(v,915,1120) || LQ.get("leaves")) || !world.treeSpots || !world.treeSpots.length) { LIFE.leaves.length=0; return; }
  if (LIFE.leaves.length<70 && Math.random()<dt*(4+W_.wind*20)){ const t=world.treeSpots[(Math.random()*world.treeSpots.length)|0];
    LIFE.leaves.push({x:t.x+(Math.random()-.5)*t.r,y:t.y,vy:H*.02,p:Math.random()*6,c:[[214,140,50],[196,80,40],[230,190,70],[160,110,50]][(Math.random()*4)|0],life:6+Math.random()*4}); }
  for(const l of LIFE.leaves){ l.life-=dt; l.p+=dt*3; l.y+=l.vy*dt; l.x+=(Math.sin(l.p)*12+W_.wind*60)*dt;
    ctx.fillStyle=rgb(mix(l.c,[20,22,34],night*.7),Math.min(1,l.life)); ctx.save(); ctx.translate(l.x,l.y); ctx.rotate(Math.sin(l.p)*1.2); ctx.fillRect(-2.5,-1.3,5,2.6); ctx.restore(); }
  LIFE.leaves=LIFE.leaves.filter(l=>l.life>0&&l.y<H);
}

/* ================= festivals ================= */
function festival(d){
  const v=md(d);
  if (inRange(v,915,1015)) return {name:"Свято кави", smoke:[150,112,84], toast:"Львів святкує каву: з димарів тягне кавою"};
  if (inRange(v,201,214)) return {name:"Свято шоколаду", smoke:[122,84,62], toast:"У Львові свято шоколаду: дим із димарів пахне какао"};
  return null;
}

/* ================= fact of the day and the mystery window ================= */
const FACTS=[
 ["tower","Вежа Ратуші сягає 65 метрів, і на її оглядовий майданчик ведуть понад 400 сходинок."],
 ["tower","Годинник на Ратуші — один із найстаріших механізмів міста: його привезли з Сілезії у XIX столітті."],
 ["tower","Ратушу охороняють кам'яні леви — символ Львова: їх у місті понад кілька тисяч."],
 ["tv","Телевежа на Високому Замку має близько 192 метрів і видно її майже з будь-якого даху."],
 ["hill","Високий Замок — найвища точка історичного центру; колись тут стояв замок короля Данила."],
 ["hill","Насип на Високому Замку насипали вручну у XIX столітті на честь Люблінської унії."],
 ["dom","Домініканський собор збудовано у XVIII столітті; його великий купол — один із символів старого міста."],
 ["dom","Біля Домініканського собору щодня працює книжковий ринок просто неба."],
 ["roofs","Площа Ринок майже квадратна: 142 на 129 метрів, і по її периметру стоять 44 кам'яниці."],
 ["roofs","Історичний центр Львова внесено до Списку світової спадщини ЮНЕСКО у 1998 році."],
 ["roofs","Під Львовом тече річка Полтва — її сховали в колектор ще у XIX столітті."],
 ["roofs","У старих кам'яницях на Ринку вікна вузькі не просто так: колись податок рахували за шириною фасаду."],
 ["tower","На Ратуші щодня о 12:00 лунає сигнал сурмача."],
 ["roofs","Львівський трамвай — один із найстаріших в Україні: перший кінний трамвай поїхав 1880 року."],
 ["hill","З Високого Замку в ясну погоду видно передмістя за десятки кілометрів."],
 ["roofs","У Львові понад сто храмів, і багато їхніх дзвонів можна почути з центру."],
 ["tower","Прапор над Ратушею видно з багатьох районів міста — він тут майорить і вдень, і вночі."],
 ["roofs","Кава в Львові — ціла культура: перші кав'ярні тут відкрилися ще у XIX столітті."]
];
function factOfDay(d){ const start=new Date(d.getFullYear(),0,0), day=Math.floor((d-start)/86400000), [k,t]=FACTS[day%FACTS.length];
  return {at:k, text:t, short:t.length>90?t.slice(0,t.indexOf(":")>20?t.indexOf(":"):88)+"…":t}; }
const MYSTERY=[
 "Вікно світиться навіть тоді, коли все місто спить.",
 "На підвіконні — червона герань. Хтось поливає її щоранку о сьомій.",
 "Інколи там видно силует людини в окулярах, що схиляється над столом.",
 "Сусіди кажуть, що звідти чутно тихе цокання — десятки годинників.",
 "Щонеділі власник вікна піднімається на вежу Ратуші. Туристи думають, що він гід.",
 "Він знає кожну шестерню великого годинника на вежі.",
 "Колись його дід доглядав за годинником Ратуші, а ще раніше — прадід.",
 "Світло не гасне, бо майстер щоночі звіряє свої годинники з дзвоном Ратуші.",
 "На столі в нього стоїть маленька копія вежі з крихітним прапором.",
 "Учора він помахав рукою комусь у вікні навпроти. Може, вам?",
 "Він пише книжку про всі годинники Львова — розділ на кожну вежу.",
 "Кіт, якого ви шукаєте на дахах, заходить до нього на сніданок.",
 "Найбільше він любить тиху годину о третій ночі, коли місто ніби зупиняється.",
 "Кажуть, саме він першим помічає, коли годинник на вежі спізнюється хоч на секунду.",
 "Він ніколи не запізнюється. Ніколи.",
 "Тепер ви знаєте: у тому вікні живе годинникар, який береже час Львова."
];
function mysteryHints(){ const born=store.get("born",Date.now()), days=Math.floor((Date.now()-born)/86400000)+1; return MYSTERY.slice(0,Math.min(MYSTERY.length,days)); }
function renderLifePanel(){
  const d=now(), f=factOfDay(d); if ($("fact")) $("fact").textContent=f.text;
  const hints=mysteryHints(); if ($("mystery")) $("mystery").innerHTML=hints.map(h=>`<li>${h}</li>`).join("");
  const n=store.get("catCount",0), today=store.get("catDay","")===dayKey(d);
  if ($("catInfo")) $("catInfo").innerHTML=`Щодня на якомусь даху ховається кіт. Знайдіть і торкніться його.<br><b>Знайдено: ${n}</b>${today?" · сьогодні вже знайшли":""}`;
}
function landmarkRing(){
  if (LIFE.ringUntil<tsec || !LIFE.ringAt) return;
  const t=world.tower, at={tower:[t&&t.cx,H*.6],tv:[world.tv&&world.tv.x,world.tv&&(world.tv.top+world.tv.base)/2],hill:[W*.7,H*.43],dom:[W*.915,H*.6],roofs:[W*.62,H*.78]}[LIFE.ringAt];
  if (!at || at[0]==null) return; const k=(LIFE.ringUntil-tsec)/7, r=H*(.05+.02*Math.sin(tsec*4));
  ctx.strokeStyle=`rgba(255,214,140,${.7*k})`; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(at[0],at[1],r,0,7); ctx.stroke();
}

/* ================= touching the town ================= */
function bell(n){
  if (!store.get("sound",true)) return;
  try{ const ac=LIFE.ac||(LIFE.ac=new (window.AudioContext||window.webkitAudioContext)()); if (ac.state==="suspended") ac.resume();
    for(let s=0;s<n;s++){ const t0=ac.currentTime+s*1.6;
      for(const [mul,vol,dec] of [[1,.35,3.5],[2,.18,2.4],[2.76,.12,1.8],[5.4,.06,1]]){ const o=ac.createOscillator(), g=ac.createGain(); o.type="sine"; o.frequency.value=196*mul;
        g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(vol,t0+.01); g.gain.exponentialRampToValueAtTime(.0005,t0+dec); o.connect(g); g.connect(ac.destination); o.start(t0); o.stop(t0+dec); } }
  }catch(e){}
}
function lifeTap(x,y){
  if (!world || !world.tower) return false;
  const c=LIFE.cat;
  if (c && Math.hypot(x-c.x,y-(c.y-c.s*.7))<Math.max(26,c.s*2)){
    const d=now(), k=dayKey(d);
    if (store.get("catDay","")!==k){ store.set("catDay",k); store.set("catCount",store.get("catCount",0)+1); toast(`Кота знайдено! Уже ${store.get("catCount",0)} разів. Завтра він сховається деінде`); }
    else toast("Мяу! Сьогодні ви вже мене знайшли");
    LIFE.catFoundPop=tsec+2; if (app) try{ app.brightness; }catch(e){} renderLifePanel(); return true;
  }
  if (LIFE.story){ const w=world.wins[LIFE.story.mystery]; if (w && x>w.x-8&&x<w.x+w.w+8&&y>w.y-8&&y<w.y+w.h+8){ const h=mysteryHints(); toast(h[h.length-1]); return true; } }
  const t=world.tower;
  if (Math.abs(x-t.cx)<t.tw*.8 && y>t.topY-H*.22 && y<t.topY+H*.12){ bell(1+(now().getHours()%3)); pigeonsUp(); toast("Дзень-дзелень!"); return true; }
  if (world.wins){ for(let i=0;i<world.wins.length;i++){ const w=world.wins[i]; if (x>w.x-4&&x<w.x+w.w+4&&y>w.y-4&&y<w.y+w.h+4){ LIFE.tapped[i]=tsec+600; return true; } } }
  return false;
}
