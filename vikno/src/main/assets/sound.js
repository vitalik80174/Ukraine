// «Вікно» — звуки міста. Усе синтезується на льоту (без файлів і без інтернету): дощ і вітер з шуму,
// синиці й горобці, цвіркуни влітку, далекий трамвай, краплі з бляшаних дахів після дощу, грім після
// блискавки, бій годинника Ратуші щогодини й сурмач опівдні. Loaded after life.js, before the main script;
// it reads the main script's globals (now, wx, sunPos, skyColors, world, store, tsec) only once running.
"use strict";

const SND = { ac:null, out:null, wet:null, layers:null, next:{}, lastStrike:"", trumpetUntil:0, trumpetFrom:0, notes:[], hintShown:false };
const SQ = new URLSearchParams(location.search);
const sndAmbientOn = ()=> store.get("ambient", true) && !SQ.get("dream");
const sndVol = ()=> store.get("volume", .6);

function sndCtx(){
  if (SND.ac) return SND.ac;
  try{
    const AC = window.AudioContext||window.webkitAudioContext; if (!AC) return null;
    const ac = SND.ac = LIFE.ac || new AC(); LIFE.ac = ac;          // share one context with the tap bell
    SND.out = ac.createGain(); SND.out.gain.value = sndVol(); SND.out.connect(ac.destination);
    // a little stone-town echo: a generated impulse response, no files
    const len = ac.sampleRate*2.4|0, ir = ac.createBuffer(2,len,ac.sampleRate);
    for(let c=0;c<2;c++){ const d=ir.getChannelData(c); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3.2)*.6; }
    const conv = ac.createConvolver(); conv.buffer = ir; SND.wet = ac.createGain(); SND.wet.gain.value = .32;
    SND.wet.connect(conv); conv.connect(SND.out);
    SND.white = noiseBuf(ac,"white"); SND.brown = noiseBuf(ac,"brown");
  }catch(e){ SND.ac=null; }
  return SND.ac;
}
function noiseBuf(ac,kind){
  const len=ac.sampleRate*4|0, b=ac.createBuffer(1,len,ac.sampleRate), d=b.getChannelData(0); let last=0;
  for(let i=0;i<len;i++){ const w=Math.random()*2-1; if (kind==="brown"){ last=(last+.02*w)/1.02; d[i]=last*3.5; } else d[i]=w; }
  return b;
}
// a sound goes to the dry output and a share of it to the echo
function route(node, pan=0, echo=.3){
  const ac=SND.ac, p=ac.createStereoPanner ? ac.createStereoPanner() : null;
  if (p){ p.pan.value=clamp(pan,-1,1); node.connect(p); node=p; }
  node.connect(SND.out); if (echo>0){ const s=ac.createGain(); s.gain.value=echo; node.connect(s); s.connect(SND.wet); }
}

/* ---------- continuous layers: rain, wind, the far hum of the city ---------- */
function loopNoise(buf, filters, pan=0, echo=.1){
  const ac=SND.ac, src=ac.createBufferSource(); src.buffer=buf; src.loop=true; src.loopStart=Math.random();
  let n=src; for(const [type,f,q] of filters){ const fl=ac.createBiquadFilter(); fl.type=type; fl.frequency.value=f; if(q) fl.Q.value=q; n.connect(fl); n=fl; }
  const g=ac.createGain(); g.gain.value=0; n.connect(g); route(g,pan,echo); src.start(ac.currentTime+Math.random()*.1);
  return {g, f:n};
}
function sndLayers(){
  if (SND.layers) return SND.layers;
  SND.layers = {
    rainL: loopNoise(SND.white, [["highpass",450],["lowpass",5200]], -.5, .05),
    rainR: loopNoise(SND.white, [["highpass",500],["lowpass",4600]],  .5, .05),
    rainLow: loopNoise(SND.brown, [["lowpass",900]], 0, .1),
    wind: loopNoise(SND.brown, [["bandpass",420,.9]], .2, .2),
    city: loopNoise(SND.brown, [["lowpass",260]], -.2, .3)
  };
  return SND.layers;
}
function setG(layer, v, tc=1.5){ layer.g.gain.setTargetAtTime(v, SND.ac.currentTime, tc); }

/* ---------- small voices ---------- */
// a tone that glides through [time, frequency] points with a short envelope
function chirp(t0, pts, vol, pan, type="sine", echo=.35){
  const ac=SND.ac, o=ac.createOscillator(), g=ac.createGain(); o.type=type;
  o.frequency.setValueAtTime(pts[0][1], t0); for(const [t,f] of pts.slice(1)) o.frequency.linearRampToValueAtTime(f, t0+t);
  const end=t0+pts[pts.length-1][0];
  g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(vol,t0+.008); g.gain.setValueAtTime(vol,Math.max(t0+.01,end-.02)); g.gain.linearRampToValueAtTime(0,end);
  o.connect(g); route(g,pan,echo); o.start(t0); o.stop(end+.05);
}
function titmouse(t, pan){ // велика синиця: «ці-фі, ці-фі, ці-фі»
  const v=.035+Math.random()*.02, hi=5000+Math.random()*700, lo=hi*.74, n=2+(Math.random()*3|0);
  for(let k=0;k<n;k++){ const s=t+k*.36; chirp(s,[[0,hi],[.08,hi*.98]],v,pan); chirp(s+.13,[[0,lo],[.12,lo*.97]],v*.9,pan); }
}
function sparrow(t, pan){ // горобець: кілька швидких «цвірінь»
  const v=.03+Math.random()*.02, n=2+(Math.random()*4|0);
  for(let k=0;k<n;k++){ const s=t+k*(.14+Math.random()*.12), f=2600+Math.random()*900; chirp(s,[[0,f],[.03,f*1.45],[.07,f*1.05]],v,pan); }
}
function songbird(t, pan){ // весняний спів: короткі переливи
  const v=.03, n=6+(Math.random()*7|0); let s=t;
  for(let k=0;k<n;k++){ const f=2200+Math.random()*2600, d=.05+Math.random()*.09; chirp(s,[[0,f],[d*.5,f*(.8+Math.random()*.5)],[d,f*(.9+Math.random()*.3)]],v,pan); s+=d+.02+Math.random()*.05; }
}
function pigeon(t, pan){ // голуб на карнизі: «ву-ррру»
  const ac=SND.ac, o=ac.createOscillator(), g=ac.createGain(), lfo=ac.createOscillator(), lg=ac.createGain();
  o.type="triangle"; o.frequency.setValueAtTime(340,t); o.frequency.linearRampToValueAtTime(400,t+.25); o.frequency.linearRampToValueAtTime(330,t+.9);
  lfo.frequency.value=22; lg.gain.value=.5; lfo.connect(lg); const am=ac.createGain(); am.gain.value=.5; lg.connect(am.gain);
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.05,t+.12); g.gain.linearRampToValueAtTime(.035,t+.6); g.gain.linearRampToValueAtTime(0,t+.95);
  o.connect(am); am.connect(g); route(g,pan,.25); o.start(t); lfo.start(t); o.stop(t+1); lfo.stop(t+1);
}
function cricket(t, pan, f){ // цвіркун: три короткі імпульси
  for(let k=0;k<3;k++) chirp(t+k*.045,[[0,f],[.022,f]],.018,pan,"sine",.15);
}
function drip(t, pan){ // крапля з бляшаного даху
  const f=1700+Math.random()*1600; chirp(t,[[0,f],[.04,f*.62],[.11,f*.6]],.035,pan,"sine",.5);
}
function noiseHit(t, dur, filters, env, pan, echo){
  const ac=SND.ac, src=ac.createBufferSource(); src.buffer=SND.brown; src.loopStart=Math.random()*2; src.loop=true;
  let n=src; const fl=[]; for(const [type,f,q] of filters){ const b=ac.createBiquadFilter(); b.type=type; b.frequency.value=f; if(q) b.Q.value=q; n.connect(b); n=b; fl.push(b); }
  const g=ac.createGain(); g.gain.setValueAtTime(0,t); for(const [dt,v] of env) g.gain.linearRampToValueAtTime(v,t+dt);
  n.connect(g); route(g,pan,echo); src.start(t, Math.random()*2); src.stop(t+dur+.1); return fl;
}
function tram(t){ // далекий трамвай: гуркіт, що наростає й минає, і два дзвоники
  const dir=Math.random()<.5?-1:1;
  noiseHit(t,11,[["lowpass",150]],[[3,.22],[6,.3],[9,.15],[11,0]],dir*-.5,.2);
  const sq=noiseHit(t,11,[["bandpass",1900,18]],[[4,0],[5.5,.035],[7,0]],dir*.1,.3);
  for(const s of [4.6,5.0]){ const ac=SND.ac;
    for(const [m,v,dec] of [[1,.05,.9],[2.01,.025,.6],[3.2,.012,.4]]){ const o=ac.createOscillator(), g=ac.createGain(); o.type="sine"; o.frequency.value=1250*m;
      g.gain.setValueAtTime(0,t+s); g.gain.linearRampToValueAtTime(v,t+s+.005); g.gain.exponentialRampToValueAtTime(.0003,t+s+dec); o.connect(g); route(g,dir*.1,.45); o.start(t+s); o.stop(t+s+dec); } }
}
function thunder(t, near){ // грім: далекий гуркіт кількома хвилями
  const v=near?.9:.5, env=[[.05,v*.3],[.2,v],[.6,v*.5],[1.1,v*.8],[2,v*.35],[3.2,v*.5],[5.5,0]];
  const f=noiseHit(t,5.6,[["lowpass",near?420:220]],env,(Math.random()-.5)*.8,.4);
  f[0].frequency.setValueAtTime(near?420:220,t); f[0].frequency.exponentialRampToValueAtTime(70,t+5.5);
}
window.sndThunder = function(){ // called by the lightning in vikno.html
  if (!sndAmbientOn() || !sndCtx() || SND.ac.state!=="running") return;
  sndLayers(); const d=.6+Math.random()*3; thunder(SND.ac.currentTime+d, d<1.4);
};

/* ---------- the City Hall: hourly strikes and the noon trumpeter ---------- */
function brass(t, f, dur, vol, pan){
  const ac=SND.ac, g=ac.createGain(), lp=ac.createBiquadFilter(); lp.type="lowpass"; lp.Q.value=1.2;
  const vib=ac.createOscillator(), vg=ac.createGain(); vib.frequency.value=5.2; vg.gain.setValueAtTime(0,t); vg.gain.linearRampToValueAtTime(f*.006,t+Math.min(.35,dur*.6));
  vib.connect(vg);
  for(const det of [-4,4]){ const o=ac.createOscillator(); o.type="sawtooth"; o.frequency.value=f; o.detune.value=det; vg.connect(o.frequency); o.connect(lp); o.start(t); o.stop(t+dur+.15); }
  lp.frequency.setValueAtTime(f*1.2,t); lp.frequency.linearRampToValueAtTime(f*5.5,t+.06); lp.frequency.linearRampToValueAtTime(f*3.4,t+dur);
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.045); g.gain.linearRampToValueAtTime(vol*.8,t+dur*.7); g.gain.linearRampToValueAtTime(0,t+dur+.1);
  lp.connect(g); route(g,pan,.7); vib.start(t); vib.stop(t+dur+.15);
}
// an original little fanfare (not a known tune), played to two sides of the tower: the second time it faces away
const FANFARE=[[392,.35],[523,.35],[659,.35],[784,.9],[0,.12],[659,.25],[784,.25],[880,.7],[784,.35],[659,.35],[523,.35],[587,.6],[392,.45],[523,1.5]];
function trumpeter(t){
  let s=t; for(const side of [1,.45]){ for(const [f,d] of FANFARE){ if (f) brass(s,f,d*.92,.07*side,-.15); s+=d; } s+=2.2; }
  return s-t;
}
function strikeHours(n){ if (typeof bell==="function") bell(n); }

/* ---------- the conductor: every half a second decide who sounds ---------- */
function sndTick(){
  if (!world) return;
  const d=now(), hh=d.getHours()+d.getMinutes()/60, m=d.getMonth()+1;
  const bellsOn=store.get("sound",true), quiet=hh<8||hh>=22;
  // the City Hall keeps the hours (and at noon the trumpeter plays instead of twelve strikes)
  const key=`${d.getDate()}-${d.getHours()}`;
  if (d.getMinutes()===0 && SND.lastStrike!==key){ SND.lastStrike=key;
    if (d.getHours()===12) startTrumpeter(); else if (bellsOn && !quiet && sndCtx()) strikeHours(d.getHours()%12||12); }
  if (SQ.get("trumpet") && !SND.trumpetFrom) startTrumpeter();
  if (!sndAmbientOn()){ if (SND.layers) for(const k in SND.layers) setG(SND.layers[k],0,.5); return; }
  const ac=sndCtx(); if (!ac || ac.state!=="running") return;
  const L=sndLayers(), W_=wx(), sp=sunPos(d), S=skyColors(sp.el,W_), t=ac.currentTime, N=SND.next;
  const v=sndVol(); SND.out.gain.setTargetAtTime(v,t,.3);
  // rain and wind follow the real weather; the city hums by day
  setG(L.rainL, W_.rain*.32); setG(L.rainR, W_.rain*.32); setG(L.rainLow, W_.rain*.5 + (W_.storm?.2:0));
  const gust=.5+.5*Math.sin(t*.13)+.35*Math.sin(t*.37+1)*Math.sin(t*.05);
  setG(L.wind, (.025+W_.wind*.32)*(.55+.45*gust)*(W_.snow?.8:1), 2.5);
  L.wind.f.frequency.setTargetAtTime(260+W_.wind*500+gust*220, t, 3);
  const busy=hh>=6.5&&hh<23 ? (hh>=8&&hh<20?1:.55) : .2;
  setG(L.city, .05*busy, 4);
  const wet=W_.rain>0, rnd=Math.random, pan=()=>rnd()*1.6-.8;
  // birds: tits and sparrows all year, songbirds on spring and summer mornings
  const morning=hh>=4.5&&hh<10, warm=m>=4&&m<=7;
  if (S.day>.35 && !wet && W_.wind<.7){
    if (!(N.bird>t)){ const kind=rnd(); (warm&&morning&&kind<.45 ? songbird : kind<.6 ? titmouse : sparrow)(t+.1,pan());
      N.bird=t+(morning?4:12)/(warm?1.6:1)+rnd()*(morning?8:25); }
    if (!(N.pig>t)){ if (hh>8&&hh<19) pigeon(t+.2,pan()*.6); N.pig=t+40+rnd()*80; }
  }
  // crickets on warm summer nights
  if (m>=6&&m<=8 && S.day<.4 && W_.temp>13 && !wet){
    if (!SND.crickets) SND.crickets=[0,1,2].map(()=>({f:4100+rnd()*900,p:pan(),n:0}));
    for(const c of SND.crickets) if (!(c.n>t)){ cricket(t+.05,c.p,c.f); c.n=t+.55+rnd()*.5; }
  }
  // drops from the tin roofs after the rain
  if (!wet && LIFE.wet>.15 && !(N.drip>t)){ drip(t+.05,pan()); N.drip=t+(.4+rnd()*2.5)/LIFE.wet; }
  // a far tram now and then, by day
  if (hh>=5.8&&hh<23.5 && !(N.tram>t)){ if (N.tram) tram(t+.2); N.tram=t+70+rnd()*150; }
}
function startTrumpeter(){
  SND.trumpetFrom=tsec; SND.trumpetUntil=tsec+30;
  if (store.get("sound",true) && sndCtx() && SND.ac.state==="running"){ const dur=trumpeter(SND.ac.currentTime+.3); SND.trumpetUntil=tsec+dur+2; }
  if (typeof pigeonsUp==="function") pigeonsUp();
  if (typeof toast==="function") toast("Полудень: на Ратуші грає сурмач");
}

/* ---------- the trumpeter on the gallery (seen even when the sound is off) ---------- */
function trumpeterDraw(dt,d,night){
  const t=world.tower; if (!t) return;
  const noon=d.getHours()===12 && d.getMinutes()<2;
  if (!(noon || tsec<SND.trumpetUntil)) return;
  const playing=tsec<SND.trumpetUntil, s=H*.03, x=t.cx+t.tw*.3, y=t.topY;
  const coat=mix([150,34,40],[40,20,30],night*.7), gold=mix([240,196,90],[120,96,60],night*.5), skin=mix([236,200,166],[70,60,70],night*.6);
  const lift=playing ? .15+.08*Math.sin(tsec*1.3) : 0;
  ctx.fillStyle=rgb(coat); ctx.beginPath(); ctx.moveTo(x-s*.22,y); ctx.lineTo(x-s*.18,y-s*.7); ctx.lineTo(x+s*.18,y-s*.7); ctx.lineTo(x+s*.22,y); ctx.fill();
  ctx.fillStyle=rgb(skin); ctx.beginPath(); ctx.arc(x,y-s*.85,s*.15,0,7); ctx.fill();
  ctx.fillStyle=rgb(mix(coat,[0,0,0],.4)); ctx.fillRect(x-s*.17,y-s*1.05,s*.34,s*.12);                     // a cap
  ctx.save(); ctx.translate(x+s*.1,y-s*.82); ctx.rotate(-lift);
  ctx.strokeStyle=rgb(gold); ctx.lineWidth=Math.max(1.4,s*.07); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(s*.75,0); ctx.stroke();
  ctx.fillStyle=rgb(gold); ctx.beginPath(); ctx.moveTo(s*.7,0); ctx.lineTo(s*.95,-s*.13); ctx.lineTo(s*.95,s*.13); ctx.fill();
  ctx.restore();
  // golden notes drift away from the bell of the trumpet
  if (playing){ SND.noteT=(SND.noteT||0)+dt; if (SND.noteT>.45){ SND.noteT=0; SND.notes.push({x:x+s*1.05,y:y-s*.95-s*lift*3,a:1,j:Math.random()*6,g:Math.random()<.5?"♪":"♫"}); } }
  ctx.font=`${Math.round(s*.7)}px serif`; ctx.textAlign="center";
  for(const n of SND.notes){ n.x+=dt*H*.03; n.y-=dt*H*.025+Math.sin(tsec*3+n.j)*.3; n.a-=dt*.28;
    ctx.fillStyle=rgb(mix([255,222,130],[255,240,200],night*.5),Math.max(0,n.a)*.95); ctx.fillText(n.g,n.x,n.y); }
  SND.notes=SND.notes.filter(n=>n.a>0); ctx.textAlign="start";
}

/* ---------- start, pause, settings ---------- */
function sndWake(){ const ac=sndCtx(); if (ac && ac.state==="suspended") ac.resume().catch(()=>{}); }
function soundInit(){
  const a=$("optAmbient"), vol=$("optVolume");
  if (a){ a.checked=store.get("ambient",true); a.onchange=e=>{ store.set("ambient",e.target.checked); if (e.target.checked) sndWake(); }; }
  if (vol){ vol.value=Math.round(sndVol()*100); vol.oninput=e=>{ store.set("volume",e.target.value/100); if (SND.out) SND.out.gain.setTargetAtTime(e.target.value/100,SND.ac.currentTime,.1); }; }
  addEventListener("pointerdown", sndWake, {passive:true});
  document.addEventListener("visibilitychange", ()=>{ if (!SND.ac) return; if (document.hidden) SND.ac.suspend().catch(()=>{}); else SND.ac.resume().catch(()=>{}); });
  if (sndAmbientOn()) sndWake();
  setInterval(()=>{ try{ sndTick(); }catch(e){ console.warn("sound", e); } }, 500);
}
window.onAppPause = ()=>{ if (SND.ac) SND.ac.suspend().catch(()=>{}); };
