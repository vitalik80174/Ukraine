// «Пісочниця» — drawing, glow, fingers, tools, sound, saves and menus. The simulation lives in sim.js.
"use strict";
const app = window.Pisok || null;
const store = {
  get(k,d){ try{ const v=localStorage.getItem("pisok."+k); return v===null?d:JSON.parse(v); }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem("pisok."+k, JSON.stringify(v)); return true; }catch(e){ return false; } }
};
const $=id=>document.getElementById(id);
const lerp=(a,b,t)=>a+(b-a)*t;
const pack=(r,g,b)=>(255<<24)|((b<0?0:b>255?255:b)<<16)|((g<0?0:g>255?255:g)<<8)|(r<0?0:r>255?255:r);

/* ================= canvas ================= */
const cv=$("c"), ctx=cv.getContext("2d");
let off, offCtx, img, buf, eCv, eCtx, eImg, ebuf, bg, bgs, nCv, nCtx, nImg, nbuf, lCv, lCtx, lImg, lbuf, LW, LH, LA, LB2, LT, STAR, MOON;
function makeWorld(){
  undoStack=[];
  const w=innerWidth, h=innerHeight, cell=Math.max(3, Math.floor(Math.min(w,h)/150));
  makeArrays(Math.ceil(w/cell), Math.ceil(h/cell));
  cv.width=GW; cv.height=GH;
  off=document.createElement("canvas"); off.width=GW; off.height=GH; offCtx=off.getContext("2d");
  img=offCtx.createImageData(GW,GH); buf=new Uint32Array(img.data.buffer);
  eCv=document.createElement("canvas"); eCv.width=GW; eCv.height=GH; eCtx=eCv.getContext("2d");
  eImg=eCtx.createImageData(GW,GH); ebuf=new Uint32Array(eImg.data.buffer);
  // sky rows for day, dusk and night (dusk and night get darkened again by the light map)
  bgs=[0,1,2].map(m=>{ const a=new Uint32Array(GH); for(let y=0;y<GH;y++){ const t=y/GH;
    a[y]= m===0 ? pack(lerp(14,24,t)|0,lerp(16,22,t)|0,lerp(26,30,t)|0)
        : m===1 ? pack(lerp(58,215,t*t)|0,lerp(46,120,t*t)|0,lerp(104,96,t)|0)
        :         pack(lerp(26,40,t)|0,lerp(34,46,t)|0,lerp(70,78,t)|0); } return a; });
  bg=bgs[0];
  nCv=document.createElement("canvas"); nCv.width=GW; nCv.height=GH; nCtx=nCv.getContext("2d");
  nImg=nCtx.createImageData(GW,GH); nbuf=new Uint32Array(nImg.data.buffer);
  // the light map is kept at half resolution: emission is summed into 2×2 blocks, blurred near and far, then stretched smoothly
  LW=Math.ceil(GW/2); LH=Math.ceil(GH/2);
  lCv=document.createElement("canvas"); lCv.width=LW; lCv.height=LH; lCtx=lCv.getContext("2d");
  lImg=lCtx.createImageData(LW,LH); lbuf=new Uint32Array(lImg.data.buffer);
  LA=[0,1,2].map(()=>new Float32Array(LW*LH)); LB2=[0,1,2].map(()=>new Float32Array(LW*LH)); LT=new Float32Array(Math.max(LW,LH)*LW);
  // a fixed starry sky and a pixel moon
  STAR=new Uint8Array(GW*GH); MOON=new Uint8Array(GW*GH);
  for(let i=0;i<GW*GH*.62|0;i++) if (Math.random()<.006) STAR[i]=60+(Math.random()*195|0);
  const mx=Math.round(GW*.82), my=Math.round(GH*.17), mr=Math.max(4,Math.round(GH*.045));
  for(let dy=-mr;dy<=mr;dy++) for(let dx=-mr;dx<=mr;dx++){ const d=Math.hypot(dx,dy); if (d>mr+.3) continue; const x=mx+dx, y=my+dy; if (x<0||y<0||x>=GW||y>=GH) continue;
    const shadow=Math.hypot(dx+mr*.55,dy-mr*.2)<mr*.95;                               // a thin bite of shadow on the left: a waning gibbous
    const crater=((dx*7+dy*13)&15)===0||Math.hypot(dx-mr*.3,dy+mr*.25)<mr*.22;
    MOON[y*GW+x]= shadow&&d>mr*.25&&dx<-mr*.35 ? 40 : crater ? 170 : 225; }
}
function blur1(src,dst,w,h,r,horiz){ // running box blur along rows (horiz) or columns, edges clamped
  const n=horiz?w:h, m=horiz?h:w, st=horiz?1:w, inv=1/(2*r+1);
  for(let a=0;a<m;a++){ const o=horiz?a*w:a, last=o+(n-1)*st; let acc=0;
    for(let k=-r;k<=r;k++) acc+=src[o+Math.max(0,Math.min(n-1,k))*st];
    for(let k=0,p=o;k<n;k++,p+=st){ dst[p]=acc*inv; const ad=k+r+1, rm=k-r; acc+=src[ad<n?o+ad*st:last]-src[rm>0?o+rm*st:o]; } }
}

/* ================= drawing ================= */
let view=0; // 0 normal, 1 pressure, 2 temperature
const settings={ glow:store.get("glow",true), sound:store.get("sound",true), vibro:store.get("vibro",true), over:false };
function ramp(stops,v){ v=Math.max(0,Math.min(.999,v))*(stops.length-1); const k=v|0, f=v-k, a=stops[k], b=stops[k+1]; return [lerp(a[0],b[0],f),lerp(a[1],b[1],f),lerp(a[2],b[2],f)]; }
const PRAMP=[[30,58,138],[34,195,238],[250,204,21],[239,68,68],[255,255,255]];
function tcol(h){ // temperature colour: icy blue below room temperature, dark at 20°, then yellow → red → white
  if (h<20) return ramp([[40,40,52],[60,140,255],[200,240,255]],(20-h)/100);
  return ramp([[40,40,52],[250,200,40],[240,70,30],[255,255,255]],Math.pow(Math.min(1,(h-20)/1200),.6));
}
const SKY_AMB=[null,[150,108,132],[42,50,86]];
function render(){
  const tick=frame, glow=settings.glow, sk=view?0:skyNow(), lit=sk>0, emit=glow||lit;
  bg=bgs[sk];
  if (emit) ebuf.fill(0);
  if (lit){ nbuf.fill(0); for(const a of LA) a.fill(0); }
  const night=sk===2;
  for(let y=0;y<GH;y++){ const row=y*GW, b=bg[y], br=b&255, bgc=(b>>8)&255, bb=(b>>16)&255;
    for(let x=0;x<GW;x++){ const i=row+x, t=T[i];
      let r,g,bl, er=0, eg=0, eb=0;
      if (t===E){ if (!view){ buf[i]=b;
          if (night){ const mo=MOON[i]; if (mo) nbuf[i]=pack(mo,mo,mo*.92|0); else { const st=STAR[i]; if (st){ const k=st*(.7+.3*Math.sin(tick*.04+i)); nbuf[i]=pack(k*.9|0,k*.92|0,k|0); } } }
          continue; } r=br; g=bgc; bl=bb; }
      else { const s=(S[i]-128)/128, m=MAT[t], c=m.col, v=m.v;
        switch(t){
          case FIRE:{ const l=Math.min(1,L[i]/70); r=255; g=lerp(70,230,l)+s*20; bl=lerp(20,90,l*l); er=255; eg=g*.7; eb=30; break; }
          case LAVA:{ const f=.5+.5*Math.sin(tick*.08+S[i]*.1), cool=Math.max(0,Math.min(1,(1100-H[i])/400)); r=lerp(255,120,cool); g=lerp(70+f*60+s*20,40,cool); bl=lerp(20+f*20,30,cool); er=r*.8; eg=g*.5; eb=10; break; }
          case SPARK:{ r=220; g=235; bl=255; er=170; eg=210; eb=255; break; }
          case CLOUD:{ const a=.55+s*.2; r=lerp(br,c[0],a); g=lerp(bgc,c[1],a); bl=lerp(bb,c[2],a); if (H[i]<0){ r+=10; g+=15; bl+=25; } break; }
          case STEAM: case SMOKE: case GAS:{ const a=t===GAS?.5:Math.min(1,L[i]/(t===STEAM?300:60))*(t===STEAM?.55:.7); r=lerp(br,c[0],a); g=lerp(bgc,c[1],a); bl=lerp(bb,c[2],a); break; }
          case GLASS:{ const a=.42+s*.08; r=lerp(br,c[0],a); g=lerp(bgc,c[1],a); bl=lerp(bb,c[2],a); break; }
          case FLOWER:{ const f=FLOWERS[S[i]%FLOWERS.length]; r=f[0]; g=f[1]; bl=f[2]; break; }
          case PLANT:{ const stem=S[i]>=40&&S[i]<70; r=stem?70+s*10:c[0]+s*v; g=stem?130+s*10:c[1]+s*v; bl=stem?60:c[2]+s*v; break; }
          case CLONE:{ const f=.5+.5*Math.sin(tick*.1+x*.2); r=lerp(150,220,f); g=lerp(90,140,f); bl=lerp(190,240,f); break; }
          case VOID:{ const f=.5+.5*Math.sin(tick*.15+(x+y)*.4); r=10+f*30; g=6; bl=20+f*40; break; }
          case LAMP:{ if (L[i]){ r=255; g=236; bl=170; er=255; eg=220; eb=140; } else { r=c[0]+s*v; g=c[1]+s*v; bl=c[2]+s*v; } break; }
          case BATTERY:{ const on=((tick+S[i])%32)<4; r=on?255:c[0]+s*v; g=on?170:c[1]+s*v; bl=on?60:c[2]+s*v; if (on){ er=180; eg=100; } break; }
          case MOLTEN:{ const f=.5+.5*Math.sin(tick*.1+S[i]*.1), k=Math.max(0,Math.min(1,(H[i]-1400)/400)); r=255; g=lerp(120,230,k)+f*20; bl=lerp(40,170,k); er=255; eg=g*.7; eb=bl*.5; break; }
          case FIREFLY:{ const k=Math.max(0,1-L[i]/FLY_FLASH), q=k*k; r=lerp(c[0],215,q); g=lerp(c[1],255,q); bl=lerp(c[2],90,q);
            if (q>0){ er=200*q; eg=255*q; eb=60*q;
              if (lit){ nbuf[i]=pack(190*q|0,240*q|0,70*q|0); const h=pack(70*q|0,95*q|0,25*q|0);       // a little cross-shaped sparkle
                if (x>0) nbuf[i-1]=h; if (x<GW-1) nbuf[i+1]=h; if (y>0) nbuf[i-GW]=h; if (y<GH-1) nbuf[i+GW]=h;
                const k=(y>>1)*LW+(x>>1); LA[0][k]+=300*q; LA[1][k]+=380*q; LA[2][k]+=90*q; } } break; }
          case BIRD:{ const up=((tick>>2)+S[i])&1; r=up?235:160; g=up?238:166; bl=up?245:180; break; }
          case HEATER:{ const f=.5+.5*Math.sin(tick*.05+x*.3); r=200+f*40; g=80+f*30; bl=40; er=120*f; eg=40*f; break; }
          case COOLER:{ r=c[0]+s*v; g=c[1]+s*v; bl=c[2]+s*v; break; }
          default:{ r=c[0]+s*v; g=c[1]+s*v; bl=c[2]+s*v;
            if (t===WATER||t===SALTWATER||t===ACID||t===OIL||t===NITRO||t===MERCURY){ const w=Math.sin(tick*.05+x*.3+y*.2)*(t===OIL?3:6); r+=w; g+=w; bl+=w;
              if (y>0 && T[i-GW]===E){ r+=t===OIL?20:40; g+=t===OIL?18:40; bl+=t===OIL?10:30; } }
            if ((t===WOOD||t===COAL) && L[i]>0){ const f=.5+.5*Math.sin(tick*.3+S[i]); r=lerp(r,255,.5+f*.3); g=lerp(g,110,.5); bl=lerp(bl,30,.6); er=200; eg=80; eb=10; }
            if (t===FISH && (tick>>3)%2) { r+=20; g+=20; } }
        }
        // heat glow: anything solid glows as it gets hot
        if (H[i]>380 && t!==FIRE && t!==LAVA && t!==SPARK && t!==MOLTEN && !GASK[t]){ const k=Math.min(1,(H[i]-380)/900); r=lerp(r,255,k*.8); g=lerp(g,k>.6?200:90,k*.7); bl=lerp(bl,40,k*.8); er=Math.max(er,255*k); eg=Math.max(eg,110*k); eb=Math.max(eb,20*k); }
        // electricity
        if (L[i] && CONDUCT[t] && t!==LAMP){ const k=Math.pow(L[i]/HEAD,2); r=lerp(r,140,k); g=lerp(g,230,k); bl=lerp(bl,255,k); er=90*k; eg=200*k; eb=255*k; }
      }
      if (view===1 && !WALL[t]){ const h=ramp(PRAMP,P[i]/1.4), a=t===E?.75:.35; r=lerp(r,h[0],a); g=lerp(g,h[1],a); bl=lerp(bl,h[2],a); }
      else if (view===2){ const h=tcol(H[i]), a=t===E?.7:.6; r=lerp(r,h[0],a); g=lerp(g,h[1],a); bl=lerp(bl,h[2],a); }
      buf[i]=pack(r|0,g|0,bl|0);
      if (emit && (er||eg||eb)){ ebuf[i]=pack(er|0,eg|0,eb|0);
        if (lit){ const k=(y>>1)*LW+(x>>1); LA[0][k]+=er; LA[1][k]+=eg; LA[2][k]+=eb; } }
    }
  }
  offCtx.putImageData(img,0,0);
  ctx.globalCompositeOperation="source-over"; ctx.filter="none";
  ctx.drawImage(off,0,0);
  if (lit){ lightMap(SKY_AMB[sk]); ctx.globalCompositeOperation="multiply"; ctx.imageSmoothingEnabled=true; ctx.drawImage(lCv,0,0,LW*2,LH*2);
    nCtx.putImageData(nImg,0,0); ctx.globalCompositeOperation="lighter"; ctx.drawImage(nCv,0,0); ctx.globalCompositeOperation="source-over"; }
  if (glow||lit){ eCtx.putImageData(eImg,0,0); ctx.globalCompositeOperation="lighter"; ctx.filter="blur(2.5px)"; ctx.globalAlpha=.85; ctx.drawImage(eCv,0,0); ctx.filter="blur(6px)"; ctx.globalAlpha=.5; ctx.drawImage(eCv,0,0); ctx.globalAlpha=1; ctx.filter="none"; ctx.globalCompositeOperation="source-over"; }
}

function lightMap(amb){ // light = ambient + what fire, lava, lamps and fireflies throw around them (soft near, wide far)
  const n=LW*LH;
  for(let c=0;c<3;c++){ const src=LA[c], far=LB2[c];
    blur1(src,LT,LW,LH,4,true); blur1(LT,far,LW,LH,4,false); blur1(far,LT,LW,LH,4,true); blur1(LT,far,LW,LH,4,false);
    blur1(src,LT,LW,LH,1,true); blur1(LT,src,LW,LH,1,false); }               // src now holds the near light
  const ar=amb[0], ag=amb[1], ab=amb[2];
  for(let k=0;k<n;k++){
    const vr=LA[0][k]*.016+LB2[0][k]*.05, vg=LA[1][k]*.016+LB2[1][k]*.05, vb=LA[2][k]*.016+LB2[2][k]*.05;
    lbuf[k]=pack(ar+(255-ar)*(1-Math.exp(-vr))|0, ag+(255-ag)*(1-Math.exp(-vg))|0, ab+(255-ab)*(1-Math.exp(-vb))|0); }
  lCtx.putImageData(lImg,0,0);
}

/* ================= time of day ================= */
// 0 day, 1 dusk, 2 night, 3 "як надворі": follows the real sun over Lviv
const SKIES=[["☀","День"],["◒","Вечір"],["☾","Ніч"],["◷","Як надворі"]];
let skyMode=store.get("sky",0), skyAuto=0, skyCheck=0;
function realSky(){
  const d=new Date(), doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5), lat=49.84*Math.PI/180;
  const decl=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+doy)/365), cosH=-Math.tan(lat)*Math.tan(decl);
  const half=Math.acos(Math.max(-1,Math.min(1,cosH)))*12/Math.PI, noon=12-d.getTimezoneOffset()/60-24.03/15;
  const h=d.getHours()+d.getMinutes()/60, rise=noon-half, set=noon+half;
  return (h>rise+.6 && h<set-.6) ? 0 : (h>rise-.8 && h<set+.8) ? 1 : 2;
}
function skyNow(){ if (skyMode<3) return skyMode; if (Date.now()-skyCheck>30000){ skyCheck=Date.now(); skyAuto=realSky(); } return skyAuto; }
function setSky(m,quiet){ skyMode=m; store.set("sky",m); skyCheck=0; buildTop();
  if (!quiet) toast(m===0?"День":m===1?"Вечір: світло тепліє й гасне":m===2?"Ніч: світять лише вогонь, лава, лампи, розжарене й світлячки":"Як надворі: день і ніч за справжнім сонцем над Львовом"); }

/* ================= palette ================= */
const CATS=[
  {id:"powder",name:"Сипке",items:[SAND,WETSAND,CLAY,SALT,SNOW,ASH,COAL,POWDER,THERMITE]},
  {id:"liquid",name:"Рідини",items:[WATER,SALTWATER,OIL,ACID,LAVA,MERCURY,MOLTEN,NITRO,CEMENT]},
  {id:"gas",name:"Гази",items:[STEAM,SMOKE,GAS,CLOUD]},
  {id:"solid",name:"Тверде",items:[STONE,BRICK,METAL,GLASS,ICE,WOOD]},
  {id:"energy",name:"Енергія",items:[FIRE,SPARK,"bolt",BATTERY,LAMP,HEATER,COOLER,"hot","cold"]},
  {id:"life",name:"Живе",items:[SEED,PLANT,FLOWER,ANT,FISH,BIRD,FIREFLY]},
  {id:"special",name:"Особливе",items:[CLONE,VOID]},
  {id:"tools",name:"Інструменти",items:["erase","wind","probe"]}
];
const TOOLS={
  erase:{name:"Гумка",sw:"repeating-linear-gradient(45deg,#3a3f52 0 4px,#262a38 4px 8px)"},
  wind:{name:"Вітер",sw:"linear-gradient(135deg,#9fd3ff,#e8f4ff)",icon:"≋"},
  probe:{name:"Термометр",sw:"linear-gradient(180deg,#ff6b4a,#5aa8ff)",icon:"🌡"},
  bolt:{name:"Блискавка",sw:"linear-gradient(135deg,#2a3560,#cfe6ff)",icon:"ϟ"},
  hot:{name:"Нагріти",sw:"radial-gradient(#ffd27a,#e0502c)",icon:"+"},
  cold:{name:"Охолодити",sw:"radial-gradient(#e8f6ff,#4f9ae0)",icon:"−"}
};
let cat=store.get("cat","powder"), current=store.get("cur",SAND);
const SIZES=[1,2,4,7,11]; let sizeIx=store.get("size",2);
const SPEEDS=[.5,1,2]; let speedIx=1, paused=false;
function itemName(it){ return typeof it==="number" ? MAT[it].name : TOOLS[it].name; }
function swatch(it){ if (typeof it==="string") return TOOLS[it].sw; if (it===FLOWER) return "conic-gradient(#e84860,#facc3c,#f696c8,#a06ee6,#e84860)"; if (it===FIREFLY) return "radial-gradient(circle at 60% 60%,#efff8a 0 22%,#9fd04a 34%,#2a2c22 72%)"; return `rgb(${MAT[it].col})`; }
function buildDock(){
  const tabs=$("tabs"); tabs.innerHTML="";
  for(const c of CATS){ const b=document.createElement("button"); b.className="tab"+(c.id===cat?" on":""); b.textContent=c.name; b.setAttribute("aria-pressed",c.id===cat);
    b.onclick=()=>{ cat=c.id; store.set("cat",cat); buildDock(); }; tabs.appendChild(b); }
  const mats=$("mats"); mats.innerHTML="";
  const c=CATS.find(c=>c.id===cat)||CATS[0];
  for(const it of c.items){ const b=document.createElement("button"); b.className="mat"+(it===current?" on":""); b.setAttribute("aria-pressed",it===current);
    const ic=typeof it==="string"&&TOOLS[it].icon ? `<u>${TOOLS[it].icon}</u>` : "";
    b.innerHTML=`<i style="background:${swatch(it)}">${ic}</i>${itemName(it)}`;
    b.onclick=()=>{ current=it; store.set("cur",typeof it==="number"?it:it); buildDock(); hint(it); tick(6); };
    mats.appendChild(b); }
  $("size").innerHTML=`<b style="--d:${4+sizeIx*4}px"></b>`;
  $("size").setAttribute("aria-label","Розмір пензля: "+SIZES[sizeIx]);
}
const HINTS={bolt:"Торкніться — з неба вдарить блискавка",wind:"Проведіть пальцем — вітер понесе пісок, воду й дим",probe:"Торкніться, щоб дізнатись матеріал, температуру й тиск",
  hot:"Тримайте палець — усе під ним нагрівається",cold:"Тримайте палець — усе під ним холоне",[CLONE]:"Клонер копіює перше, що його торкнеться, і створює це безкінечно",
  [VOID]:"Чорна діра поглинає все, що торкається",[SPARK]:"Іскра запускає струм по металу й воді",[SEED]:"Насіння проростає на мокрому піску чи попелі",
  [CEMENT]:"Цемент тече, а за кілька секунд твердне в камінь",[NITRO]:"Нітро вибухає від тепла чи іскри — дуже сильно",[CLOUD]:"Хмара пливе й поливає дощем, а в мороз — снігом",[BATTERY]:"Батарейка двічі на секунду шле струм у дроти, що її торкаються",[LAMP]:"Лампа світиться, коли через неї йде струм",[MERCURY]:"Ртуть — важка рідина, що проводить струм",[THERMITE]:"Терміт горить при 2600°, плавить метал і лишає рідке залізо",[WETSAND]:"Мокрий пісок тримає форму — можна ліпити замки",[CLAY]:"Глина ліпиться, а в жарі понад 500° випікається в цеглу",[BIRD]:"Птахи літають, тримаються над землею й клюють насіння",[FIREFLY]:"Світлячки блимають, а сусіди поступово підлаштовуються — і зграя починає блимати разом. Найкраще видно вночі",[MOLTEN]:"Рідкий метал застигає нижче 1400° і підпалює все навколо",[SALT]:"Сіль розчиняється у воді й топить лід"};
function hint(it){ if (HINTS[it]) toast(HINTS[it]); }

/* ================= fingers ================= */
const pointers=new Map();
function toCell(e){ return [Math.floor(e.clientX/innerWidth*GW), Math.floor(e.clientY/innerHeight*GH)]; }
function stamp(cx,cy){
  const it=current, r=SIZES[sizeIx];
  for(let dy=-r;dy<=r;dy++) for(let dx=-r;dx<=r;dx++){
    if (dx*dx+dy*dy>r*r+r*.8) continue; const x=cx+dx, y=cy+dy; if (x<0||y<0||x>=GW||y>=GH) continue;
    const i=y*GW+x;
    if (it==="erase"){ T[i]=E; L[i]=0; H[i]=20; continue; }
    if (it==="hot"){ H[i]=Math.min(2000,H[i]+30); continue; }
    if (it==="cold"){ H[i]=Math.max(-120,H[i]-25); continue; }
    if (typeof it!=="number") continue;
    if (it===SPARK && CONDUCT[T[i]]){ if (!L[i]) L[i]=HEAD; continue; }
    if (T[i]!==E && !WALL[it] && !settings.over) continue;
    if (Math.random()<MAT[it].fill) put(i,it);
  }
}
function line(a,b){ const n=Math.max(1,Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/Math.max(1,SIZES[sizeIx]*.6)));
  for(let k=0;k<=n;k++) stamp(Math.round(lerp(a[0],b[0],k/n)), Math.round(lerp(a[1],b[1],k/n))); }
function wind(cx,cy,dx,dy){
  const r=SIZES[sizeIx]+4, len=Math.hypot(dx,dy); if (len<.5) return;
  const ux=dx/len, uy=dy/len;
  for(let k=0;k<2;k++) for(let oy=-r;oy<=r;oy++) for(let ox=-r;ox<=r;ox++){
    if (ox*ox+oy*oy>r*r) continue; const x=cx+ox, y=cy+oy; if (x<0||y<0||x>=GW||y>=GH) continue;
    const i=y*GW+x, t=T[i]; if (!MOVES[t] || Math.random()<.4) continue;
    const s=1+(Math.random()*Math.min(4,len)|0), tx=Math.round(x+ux*s), ty=Math.round(y+uy*s-(GASK[t]?0:.3));
    if (tx<0||ty<0||tx>=GW||ty>=GH) continue; const j=ty*GW+tx; if (T[j]===E) swap(i,j);
  }
}
function probe(e){
  const [x,y]=toCell(e); if (x<0||y<0||x>=GW||y>=GH) return;
  const i=y*GW+x, t=T[i], tip=$("tip");
  let txt=`<b>${MAT[t].name}</b> · ${Math.round(H[i])}°C`;
  if (!WALL[t]) txt+=` · тиск ${P[i].toFixed(2)}`;
  if ((t===WOOD||t===COAL)&&L[i]) txt+=" · горить"; if (CONDUCT[t]&&L[i]) txt+=" · під струмом";
  if (t===CLONE&&L[i]) txt+=` · копіює: ${MAT[L[i]-1].name.toLowerCase()}`;
  tip.innerHTML=txt; tip.hidden=false;
  tip.style.left=Math.min(innerWidth-tip.offsetWidth-8, Math.max(8, e.clientX-tip.offsetWidth/2))+"px";
  tip.style.top=Math.max(8, e.clientY-64)+"px";
}
cv.addEventListener("pointerdown",e=>{
  sfx.unlock(); cv.setPointerCapture(e.pointerId);
  const p=toCell(e); pointers.set(e.pointerId,{p,e});
  if (current!=="probe" && pointers.size===1) snap();
  if (current==="bolt"){ lightning(p[0],p[1]); flashScreen(); return; }
  if (current==="probe"){ probe(e); return; }
  if (current!=="wind") stamp(p[0],p[1]);
});
cv.addEventListener("pointermove",e=>{
  const st=pointers.get(e.pointerId); if(!st) return; const p=toCell(e);
  if (current==="probe") probe(e);
  else if (current==="wind") wind(p[0],p[1],p[0]-st.p[0],p[1]-st.p[1]);
  else if (current!=="bolt") line(st.p,p);
  st.p=p; st.e=e;
});
const up=e=>{ pointers.delete(e.pointerId); if (current==="probe") $("tip").hidden=true; };
cv.addEventListener("pointerup",up); cv.addEventListener("pointercancel",up);
function flashScreen(){ const f=$("flash"); f.style.transition="none"; f.style.opacity=.55; requestAnimationFrame(()=>{ f.style.transition="opacity .5s"; f.style.opacity=0; }); }

/* ================= undo ================= */
let undoStack=[];
function snap(){ undoStack.push({T:T.slice(),S:S.slice(),L:L.slice(),H:H.slice(),w:GW}); if (undoStack.length>12) undoStack.shift(); $("btnUndo").disabled=false; }
function undo(){
  const h=undoStack.pop(); if (!h || h.w!==GW){ toast("Нема що повертати"); return; }
  T.set(h.T); S.set(h.S); L.set(h.L); H.set(h.H); P.fill(0);
  $("btnUndo").disabled=!undoStack.length; tick(8);
}

/* ================= sound ================= */
const sfx=(()=>{
  let ac=null, noise=null;
  const ensure=()=>{ if (ac) return true; try{ ac=new (window.AudioContext||window.webkitAudioContext)(); const n=ac.sampleRate*2; noise=ac.createBuffer(1,n,ac.sampleRate); const d=noise.getChannelData(0); for(let i=0;i<n;i++) d[i]=Math.random()*2-1; return true; }catch(e){ return false; } };
  function nz(dur,freq,vol,q=.7,type="lowpass",sweep=0){
    if (!settings.sound||!ensure()) return;
    const s=ac.createBufferSource(); s.buffer=noise; s.playbackRate.value=.8+Math.random()*.4;
    const f=ac.createBiquadFilter(); f.type=type; f.frequency.value=freq; f.Q.value=q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(30,freq*sweep), ac.currentTime+dur);
    const g=ac.createGain(); g.gain.setValueAtTime(vol,ac.currentTime); g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+dur);
    s.connect(f); f.connect(g); g.connect(ac.destination); s.start(0, Math.random()); s.stop(ac.currentTime+dur);
  }
  return {
    unlock(){ if (ensure() && ac.state==="suspended") ac.resume(); },
    boom(k){ nz(1.2,500,.6+k*.4,.8,"lowpass",.1); },
    crack(){ nz(.15,3000,.5,1,"highpass"); nz(1.4,300,.7,.7,"lowpass",.2); },
    glass(){ nz(.35,5200,.18,5,"bandpass",1.3); },
    sizzle(k){ nz(.25,4200,.04+k*.08,1.5,"highpass"); },
    crackle(k){ nz(.03,2200+Math.random()*2000,.05+k*.12,2,"bandpass"); },
    zap(){ nz(.08,1800,.12,8,"bandpass"); }
  };
})();
function tick(ms){ if (app && settings.vibro) try{ app.tick(ms); }catch(e){} }
function sounds(){
  if (EV.boom){ sfx.boom(EV.boom); tick(30); }
  if (EV.crack){ sfx.crack(); tick(40); }
  if (EV.glass && Math.random()<.5) sfx.glass();
  if (EV.sizzle && Math.random()<.25) sfx.sizzle(Math.min(1,EV.sizzle/40));
  if (EV.fire && Math.random()<Math.min(.6,EV.fire/150)) sfx.crackle(Math.min(1,EV.fire/600));
  if (EV.zap && Math.random()<.3) sfx.zap();
  for (const k in EV) EV[k]=0;
}

/* ================= gravity & tilt ================= */
const GMODES=[["↓","Вниз",0,1],["←","Вліво",-1,0],["↑","Вгору",0,-1],["→","Вправо",1,0],["⟲","Нахил",0,1]];
let gmode=store.get("gmode",0), tiltSeen=0, tiltDir=[0,1];
function applyGravity(){ const m=GMODES[gmode]; if (gmode<4) setGravity(m[2],m[3]); else setGravity(tiltDir[0],tiltDir[1]); buildTop(); }
addEventListener("devicemotion",e=>{
  const a=e.accelerationIncludingGravity; if (!a || a.x===null) return; tiltSeen=Date.now();
  if (gmode!==4) return;
  // gravity in the device's natural portrait frame (y down), then turned to match how the screen is rotated
  let gx=-a.x, gy=a.y; const ang=-((screen.orientation&&screen.orientation.angle)||window.orientation||0)*Math.PI/180;
  const sx=gx*Math.cos(ang)-gy*Math.sin(ang), sy=gx*Math.sin(ang)+gy*Math.cos(ang);
  if (Math.hypot(sx,sy)<4) return;                                       // lying flat: keep what we had
  const nd= Math.abs(sx)>Math.abs(sy)*1.25 ? [Math.sign(sx),0] : Math.abs(sy)>Math.abs(sx)*1.25 ? [0,Math.sign(sy)] : tiltDir;
  if (nd[0]!==tiltDir[0]||nd[1]!==tiltDir[1]){ tiltDir=nd; setGravity(nd[0],nd[1]); buildTop(); tick(10); }
});
$("btnGrav").onclick=()=>{ gmode=(gmode+1)%GMODES.length; store.set("gmode",gmode); applyGravity();
  toast(gmode===4 ? "Нахиляйте планшет — усе посиплеться туди, куди він нахилений" : "Гравітація: "+GMODES[gmode][1].toLowerCase());
  if (gmode===4) setTimeout(()=>{ if (Date.now()-tiltSeen>1500) toast("Датчик нахилу не відповідає — оберіть напрям кнопкою"); },1800); };

/* ================= top controls ================= */
const VIEWS=[["Звичайний",""],["Тиск","pressure"],["Температура","heat"]];
function buildTop(){
  const gm=GMODES[gmode], arrow= gmode<4 ? gm[0] : ({"0,1":"↓","-1,0":"←","0,-1":"↑","1,0":"→"})[tiltDir.join()];
  $("btnGrav").innerHTML=`<b>${arrow}</b>${gmode<4?"Гравітація":"Нахил"}`; $("btnGrav").classList.toggle("on",gmode>0);
  $("btnSky").innerHTML=`<b>${SKIES[skyMode][0]}</b>${SKIES[skyMode][1]}`; $("btnSky").classList.toggle("on",skyMode>0);
  $("btnView").innerHTML=`<b>◐</b>${VIEWS[view][0]}`; $("btnView").classList.toggle("on",view>0);
  $("btnSpeed").innerHTML=`<b>${SPEEDS[speedIx]===.5?"½":SPEEDS[speedIx]}×</b>Швидкість`;
  $("btnPause").innerHTML=paused?"<b>▶</b>Далі":"<b>❚❚</b>Пауза"; $("btnPause").classList.toggle("on",paused);
  const lg=$("legend"); lg.hidden=!view;
  if (view===1){ lg.innerHTML=`Тиск<i style="background:linear-gradient(90deg,#1e3a8a,#22c3ee,#facc15,#ef4444,#fff)"></i><span><em>атмосфера</em><em>розрив</em></span>`; }
  if (view===2){ lg.innerHTML=`Температура<i style="background:linear-gradient(90deg,#c8f0ff,#3c8cff,#282834,#fac828,#f0461e,#fff)"></i><span><em>−80°</em><em>20°</em><em>300°</em><em>1200°</em></span>`; }
}
$("btnView").onclick=()=>{ view=(view+1)%3; buildTop(); };
$("btnSky").onclick=()=>setSky((skyMode+1)%SKIES.length);
$("btnSpeed").onclick=()=>{ speedIx=(speedIx+1)%SPEEDS.length; buildTop(); };
$("btnPause").onclick=()=>{ paused=!paused; buildTop(); };
$("btnUndo").onclick=undo;
$("btnClear").onclick=()=>{ if (Date.now()-clearArmed<2500){ snap(); clearAll(); clearArmed=0; toast("Чисто"); saveWorld(); return; } clearArmed=Date.now(); toast("Торкніться ще раз, щоб очистити"); };
let clearArmed=0;
$("btnMore").onclick=()=>{ renderSlots(); $("panel").classList.add("open"); };
$("close").onclick=()=>$("panel").classList.remove("open");
$("size").onclick=()=>{ sizeIx=(sizeIx+1)%SIZES.length; store.set("size",sizeIx); buildDock(); };
$("over").onclick=()=>{ settings.over=!settings.over; $("over").classList.toggle("on",settings.over); toast(settings.over?"Малюю поверх усього":"Малюю лише в порожнечі"); };
function toast(t){ const el=$("toast"); el.textContent=t; el.style.opacity=1; clearTimeout(toast.h); toast.h=setTimeout(()=>el.style.opacity=0,2600); }

/* ================= panel: scenes, saves, settings, diary ================= */
function buildScenes(){
  const box=$("scenes"); box.innerHTML="";
  for(const [id,name,desc] of SCENE_LIST){ const b=document.createElement("button"); b.className="scene"; b.innerHTML=`<b>${name}</b><span>${desc}</span>`;
    b.onclick=()=>{ snap(); loadScene(id); saveWorld(); $("panel").classList.remove("open"); toast(name); if (sceneSky!==null && skyNow()!==sceneSky) setSky(sceneSky,true); }; box.appendChild(b); }
}
function newWorld(biome){
  snap(); const w=genWorld(0,biome); saveWorld(); $("panel").classList.remove("open");
  toast(`${w.name} · світ №${w.seed}. ${w.desc}`); tick(12);
}
function buildGens(){
  const box=$("gens"); box.innerHTML="";
  const any=document.createElement("button"); any.className="scene gen"; any.innerHTML="<b>⚄ Будь-який</b><span>Сюрприз: щоразу інший краєвид</span>"; any.onclick=()=>newWorld(); box.appendChild(any);
  for(const id of BIOME_IDS){ const B=BIOMES[id], b=document.createElement("button"); b.className="scene"; b.innerHTML=`<b>${B.name}</b><span>${B.desc}</span>`;
    b.onclick=()=>newWorld(id); box.appendChild(b); }
}
$("btnGen").onclick=()=>newWorld();
function b64(u8){ let s=""; for(let i=0;i<u8.length;i+=0x8000) s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000)); return btoa(s); }
function unb64(s){ const b=atob(s), u=new Uint8Array(b.length); for(let i=0;i<b.length;i++) u[i]=b.charCodeAt(i); return u; }
function snapshot(){ // types + whatever per-cell state matters across a save (clone memory, plant growth)
  const extra=new Uint8Array(GW*GH); for(let i=0;i<extra.length;i++){ const t=T[i]; if (t===CLONE||t===PLANT||t===ANT) extra[i]=Math.min(255,L[i]); }
  return {w:GW,h:GH,t:b64(T),x:b64(extra)};
}
function restore(s){
  if (!s || s.w!==GW || s.h!==GH) return false;
  try{ const t=unb64(s.t), x=s.x?unb64(s.x):null; clearAll(); for(let i=0;i<t.length;i++) if (t[i] && t[i]<N){ put(i,t[i]); if (x && x[i]) L[i]=x[i]; } return true; }catch(e){ return false; }
}
window.saveWorld=function(){ store.set("world",snapshot()); };
function thumb(){ const c=document.createElement("canvas"), w=160, h=Math.round(160*GH/GW); c.width=w; c.height=h; const g=c.getContext("2d"); g.imageSmoothingEnabled=false; g.drawImage(cv,0,0,w,h); return c.toDataURL("image/png"); }
function renderSlots(){
  const slots=store.get("slots",[]), box=$("slots"); box.innerHTML="";
  const add=document.createElement("button"); add.className="slot add"; add.innerHTML="<b>+</b><span>Зберегти цей світ</span>";
  add.onclick=()=>{ const all=store.get("slots",[]); const d=new Date(); all.unshift({...snapshot(),img:thumb(),date:`${d.getDate()}.${String(d.getMonth()+1).padStart(2,"0")} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`});
    while(all.length>8) all.pop();
    if (!store.set("slots",all)){ all.pop(); store.set("slots",all); toast("Місця мало — найстаріший світ видалено"); } else toast("Світ збережено");
    renderSlots(); };
  box.appendChild(add);
  slots.forEach((s,k)=>{ const el=document.createElement("div"); el.className="slot";
    const ok=s.w===GW&&s.h===GH;
    el.innerHTML=`<img alt="" src="${s.img}"><span>${s.date}${ok?"":" · інший екран"}</span><div><button class="ld">Відкрити</button><button class="rm" aria-label="Видалити">×</button></div>`;
    el.querySelector(".ld").onclick=()=>{ if (restore(s)){ saveWorld(); $("panel").classList.remove("open"); toast("Світ відкрито"); } else toast("Цей світ збережено при іншому розмірі екрана"); };
    el.querySelector(".rm").onclick=()=>{ const all=store.get("slots",[]); all.splice(k,1); store.set("slots",all); renderSlots(); };
    box.appendChild(el); });
}
for (const [id,key] of [["optGlow","glow"],["optSound","sound"],["optVibro","vibro"]]){ const el=$(id); el.checked=settings[key]; el.onchange=()=>{ settings[key]=el.checked; store.set(key,el.checked); }; }
function renderDiary(){
  const log=(window.CHANGELOG||[]).slice().sort((a,b)=>b.day-a.day);
  $("diary").innerHTML=log.map(e=>`<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");
  if (log.length) $("dayline").textContent=`День ${log[0].day} · щоранку щось нове`;
  const v=app?app.version():""; if (v) $("foot").textContent=`Версія ${v} · Лабораторія Claude`;
  const seen=store.get("seenDay",0); if (log.length && log[0].day>seen){ store.set("seenDay",log[0].day); if (seen) setTimeout(()=>toast(`Нове: ${log[0].title}`),1200); }
}

/* ================= start ================= */
const Q=new URLSearchParams(location.search);
function start(){ makeWorld(); if (Q.get("gen")) genWorld(+Q.get("gen"),Q.get("biome")); else if (Q.get("scene")) loadScene(Q.get("scene")); else if (!restore(store.get("world",null))) loadScene("demo"); }
let resizeT; addEventListener("resize",()=>{ clearTimeout(resizeT); resizeT=setTimeout(()=>{ saveWorld(); start(); },300); });
document.addEventListener("visibilitychange",()=>{ if (document.hidden) saveWorld(); });
setInterval(saveWorld,15000);
start(); if (Q.get("view")) view=+Q.get("view"); if (Q.get("sky")) skyMode=+Q.get("sky");
buildDock(); applyGravity(); buildScenes(); buildGens(); renderDiary(); $("btnUndo").disabled=true;
let acc=0;
function loop(){
  requestAnimationFrame(loop);
  for (const st of pointers.values()){
    if (current==="hot"||current==="cold"||(typeof current==="number")) stamp(st.p[0],st.p[1]);
    if (current==="probe" && st.e) probe(st.e);
  }
  if (!paused){ acc+=SPEEDS[speedIx]; while(acc>=1){ step(); acc-=1; } }
  render(); sounds();
}
requestAnimationFrame(loop);
