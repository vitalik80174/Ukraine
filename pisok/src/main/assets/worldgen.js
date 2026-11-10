// «Пісочниця» — the random world generator: hills, mountains, caves, lakes, islands, deserts and volcanoes.
// Every world comes from one number (the seed), so the same number always grows the same landscape.
"use strict";

function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function makeNoise(R){
  const V=new Float32Array(1024), PM=new Uint16Array(1024);
  for(let i=0;i<1024;i++){ V[i]=R(); PM[i]=i; }
  for(let i=1023;i>0;i--){ const j=R()*(i+1)|0, t=PM[i]; PM[i]=PM[j]; PM[j]=t; }
  const sm=f=>f*f*(3-2*f), mix=(a,b,t)=>a+(b-a)*t;
  const v2=(i,j)=>V[(PM[i&1023]+j)&1023];
  return {
    n1(x){ const i=Math.floor(x); return mix(V[i&1023],V[(i+1)&1023],sm(x-i)); },
    n2(x,y){ const i=Math.floor(x), j=Math.floor(y), u=sm(x-i), v=sm(y-j);
      return mix(mix(v2(i,j),v2(i+1,j),u), mix(v2(i,j+1),v2(i+1,j+1),u), v); },
    f1(x,oct){ let s=0, a=1, n=0; for(let o=0;o<oct;o++){ s+=this.n1(x+o*37.1)*a; n+=a; a*=.5; x*=2; } return s/n; },
    f2(x,y,oct){ let s=0, a=1, n=0; for(let o=0;o<oct;o++){ s+=this.n2(x+o*17.3,y+o*9.7)*a; n+=a; a*=.5; x*=2; y*=2; } return s/n; }
  };
}

// each landscape: where the ground lies, how much is under water, what grows and lives there
const BIOMES={
  hills:   {name:"Зелені пагорби", desc:"Луки, гаї й озера з рибками", base:.60, amp:.24, freq:2.2, sea:.66, top:WETSAND, sub:CLAY, caves:.028, trees:.7, grass:.45, life:["fish","birds","ants"], clouds:2},
  mountains:{name:"Гори", desc:"Засніжені вершини тануть і стікають струмками, у печерах — підземне озеро й лава", base:.50, amp:.62, freq:1.6, sea:.80, top:WETSAND, sub:STONE, snow:.36, caves:.04, lava:.82, trees:.45, grass:.3, life:["fish","birds"], clouds:2, coldClouds:true},
  islands: {name:"Архіпелаг", desc:"Піщані острови з пальмами посеред моря", base:.80, amp:.06, freq:2.6, sea:.62, top:SAND, sub:WETSAND, caves:.0, trees:.8, palms:true, grass:.1, life:["fish","fish","birds"], clouds:1},
  desert:  {name:"Пустеля", desc:"Дюни, оаза, кактуси, а під піском — нафта", base:.62, amp:.12, freq:3.2, sea:.0, top:SAND, sub:SAND, caves:.03, oil:true, cacti:true, oasis:true, life:["ants"], clouds:0},
  volcano: {name:"Вулканічний острів", desc:"Вулкан ллє лаву в море, вона шипить і застигає", base:.74, amp:.10, freq:2, sea:.70, top:ASH, sub:STONE, caves:.02, volcano:true, trees:.25, grass:.15, life:["fish","birds"], clouds:1},
  caves:   {name:"Підземелля", desc:"Печери з вугіллям і рудою, підземні озера, лава й світлячки", base:.30, amp:.08, freq:2, sea:.0, top:WETSAND, sub:CLAY, caves:.045, chambers:true, lava:.9, ore:2, trees:.3, grass:.4, life:["fireflies","fish"], clouds:0}
};
const BIOME_IDS=Object.keys(BIOMES);
let lastWorld=null;

function genWorld(seed, biomeId){
  seed=(seed>>>0)||((Math.random()*999999|0)+1);
  const R=mulberry32(seed), NZ=makeNoise(R), B=BIOMES[biomeId]||BIOMES[BIOME_IDS[R()*BIOME_IDS.length|0]];
  const id=biomeId&&BIOMES[biomeId]?biomeId:BIOME_IDS.find(k=>BIOMES[k]===B);
  clearAll(); sceneSky=null;
  const ri=(a,b)=>a+(R()*(b-a+1)|0);
  const set=(x,y,t)=>{ if (x>=0&&y>=0&&x<GW&&y<GH) put(y*GW+x,t); };
  const get=(x,y)=>at(x,y);

  /* ---- the skyline ---- */
  const G=new Int16Array(GW), sea=Math.round(GH*B.sea);
  const vx=Math.round(GW*(.3+R()*.4)), vh=GH*.42, vw=GW*.2;                       // the volcano's cone
  const ox=Math.round(GW*(.25+R()*.5));                                           // the oasis
  const isl=[]; { const n=ri(3,4); for(let k=0;k<n;k++) isl.push([(k+.5+(R()-.5)*.5)/n, .045+R()*.04, .22+R()*.1]); }
  for(let x=0;x<GW;x++){ const u=x/GW;
    let h=B.base-(NZ.f1(u*B.freq*4+3,4)-.5)*B.amp*2;
    if (id==="mountains") h-=Math.pow(Math.max(0,NZ.f1(u*3+11,3)-.45),1.5)*.9;   // a few sharp peaks
    if (id==="desert") h+=Math.sin(u*Math.PI*7+NZ.n1(u*5)*4)*.025;                 // rippled dunes
    if (id==="islands") for(const [c,w,k] of isl){ const d=(u-c)/w; h-=k*Math.exp(-d*d*d*d)*(.9+.2*NZ.n1(u*30)); }   // islands rise from the sea floor
    if (B.volcano){ const d=Math.abs(x-vx)/vw; if (d<1) h=Math.min(h, B.base+.06-(1-d)*(vh/GH)); }
    if (B.oasis){ const d=Math.abs(x-ox)/(GW*.07); if (d<1) h+=(1-d*d)*.06; }
    G[x]=Math.max(4,Math.min(GH-6,Math.round(h*GH))); }

  /* ---- rock, soil, caves, veins ---- */
  const snowY=B.snow?Math.round(GH*B.snow):-1;
  for(let x=0;x<GW;x++){ const g=G[x], topT=2+(NZ.n1(x*.2+50)*3|0), subT=topT+4+(NZ.n1(x*.1+70)*6|0);
    for(let y=g;y<GH;y++){ const d=y-g;
      let t= d<topT ? B.top : d<subT ? B.sub : STONE;
      if (snowY>0 && g<snowY && d<topT+((snowY-g)>>2)) t=d<2?SNOW:ICE;            // snow caps that turn to ice deeper down
      if (id==="islands" && g>sea-2 && d<topT+2) t=SAND;                          // beaches and the sea floor
      if (B.volcano && Math.abs(x-vx)<vw && d<topT+6) t= d<2?ASH:STONE;
      if (B.oasis && Math.abs(x-ox)<GW*.08 && d<topT+3) t=CLAY;                   // clay keeps the oasis from soaking into the sand
      // tunnels follow the "ridges" of the noise; chambers are its high spots
      if (d>5 && y<GH-3 && B.caves){
        const c=NZ.f2(x/16,y/9,3), w=B.caves*(.6+Math.min(1,d/30));
        let hole=Math.abs(c-.5)<w;
        if (B.chambers && NZ.f2(x/24+40,y/14+40,2)>.7) hole=true;
        if (hole) t=E; }
      if (t===STONE && d>8){                                                      // coal and ore
        const k=NZ.f2(x/5+90,y/5+90,2), ore=B.ore||1;
        if (k>.80-ore*.03) t=COAL; else if (d>22 && k<.15+ore*.02) t=METAL; else if (NZ.f2(x/9+20,y/7,2)>.80) t=CLAY; }
      if (t!==E){ set(x,y,t); if (t===SNOW||t===ICE) H[y*GW+x]=-70; } }
  }

  /* ---- water: seas and lakes up to the sea line, pools and oil in the caves, lava at the bottom ---- */
  if (sea>0) for(let x=0;x<GW;x++) for(let y=Math.min(sea,G[x]);y<G[x];y++) set(x,y,id==="mountains"&&y<GH*.5?E:WATER);
  for(let x=0;x<GW;x++) for(let y=G[x]+6;y<GH-1;y++){ const i=y*GW+x; if (T[i]!==E) continue;
    if (B.lava && y>GH*B.lava){ put(i,LAVA); continue; }
    const reg=NZ.f2(x/40+7,y/30+7,2);
    if (y>GH*.55 && reg>.55){ put(i, B.oil&&reg>.6 ? OIL : WATER); } }
  if (B.oasis){ for(let x=ox-(GW*.07|0);x<ox+(GW*.07);x++){ const g=G[x|0]; if (g===undefined) continue; const lvl=G[ox]-Math.round(GH*.05); for(let y=lvl;y<g;y++) set(x|0,y,WATER); } }

  /* ---- the volcano: a chamber of lava, a vent and a crater that keeps pouring ---- */
  if (B.volcano){ const top=G[vx], base=Math.round(GH*(B.base+.06));
    for(let y=top;y<GH-4;y++) for(let x=vx-2;x<=vx+2;x++){ if (y<top+3) continue; set(x,y,LAVA); }
    for(let y=base;y<GH-3;y++) for(let x=vx-14;x<vx+14;x++){ const dx=(x-vx)/14, dy=(y-(base+GH*.12))/(GH*.1); if (dx*dx+dy*dy<1) set(x,y,LAVA); }
    for(let y=top;y<GH;y++) for(let x=vx-9;x<vx+9;x++){ const i=y*GW+x; if (x>=0&&x<GW&&T[i]===STONE) H[i]=950; }
    for(let x=vx-1;x<=vx+1;x++){ const i=top*GW+x; put(i,CLONE); L[i]=LAVA+1; }
    for(let k=0;k<6;k++) set(vx+ri(-12,12), top-ri(3,10), SMOKE); }

  /* ---- what grows ---- */
  const dry=x=>{ const g=G[x]; return g<GH && T[(g-1)*GW+x]===E && T[g*GW+x]!==E && T[g*GW+x]!==WATER; };
  const flat=x=>x>2&&x<GW-3&&Math.abs(G[x-2]-G[x+2])<4;
  if (B.trees){ for(let x=ri(4,12);x<GW-6;x+=ri(9,22)){
      if (R()>B.trees || !flat(x) || !dry(x) || get(x,G[x])===SNOW || get(x,G[x])===ICE || G[x]>sea-1&&sea>0) continue;
      const g=G[x], th=ri(B.palms?10:7,B.palms?16:15), wide=th>12&&!B.palms;
      let tx=x;
      for(let k=1;k<=th;k++){ if (B.palms && k>th*.4 && R()<.25) tx+=1; set(tx,g-k,WOOD); if (wide) set(tx+1,g-k,WOOD); }
      if (B.palms){ palm(tx,g-th); continue; }
      const cy=g-th, rx=B.palms?6:ri(4,7), ry=B.palms?2:ri(3,5), apple=R()<.35;
      for(let dy=-ry;dy<=ry;dy++) for(let dx=-rx;dx<=rx+(wide?1:0);dx++){
        const q=B.palms ? (Math.abs(dy-(Math.abs(dx)/rx)*2)<1.1?0:2) : (dx*dx)/(rx*rx)+(dy*dy)/(ry*ry);
        if (q>1 || R()>.85) continue; const xx=tx+dx, yy=cy+dy-(B.palms?0:1);
        if (get(xx,yy)!==E) continue; set(xx,yy, apple&&R()<.06?FLOWER:PLANT); } } }
  function palm(x,y){ // drooping fronds: each one rises a little, then hangs down
    for(const [dir,len,lift] of [[-1,7,1],[1,7,1],[-1,5,2],[1,5,2],[-1,8,0],[1,8,0]]){
      for(let k=0;k<=len;k++){ const yy=y-lift+Math.round(k*k/(len*1.6))-(k<2?lift:0); if (get(x+dir*k,yy)===E) set(x+dir*k,yy,PLANT); } }
    set(x,y-1,PLANT); set(x,y-2,PLANT); if (R()<.6){ set(x-1,y+1,WOOD); set(x+1,y+1,WOOD); }   // coconuts
  }
  if (B.cacti){ for(let x=ri(8,20);x<GW-8;x+=ri(16,34)){ if (!dry(x)||Math.abs(x-ox)<GW*.08) continue; const g=G[x], h=ri(5,9);
      for(let k=1;k<=h;k++) set(x,g-k,PLANT);
      if (h>6){ const a=ri(3,h-2); set(x-1,g-a,PLANT); set(x-2,g-a,PLANT); set(x-2,g-a-1,PLANT); set(x-2,g-a-2,PLANT); }
      if (R()<.5) set(x,g-h-1,FLOWER); } }
  if (B.oasis) for(const dx of [-1,1]){ const x=ox+dx*Math.round(GW*.085); if (x>2&&x<GW-3){ const g=G[x]; for(let k=1;k<=12;k++) set(x,g-k,WOOD); palm(x,g-12); } }
  if (B.grass) for(let x=1;x<GW-1;x++){ if (!dry(x) || R()>B.grass) continue; const g=G[x], under=get(x,g);
    if (under===SNOW||under===ICE||under===SAND&&!B.palms) continue;
    const i=(g-1)*GW+x; if (R()<.06) put(i,FLOWER); else { put(i,PLANT); L[i]=ri(1,5); } }
  // moss and little sprouts on cave floors
  if (B.caves>.05) for(let x=1;x<GW-1;x++) for(let y=G[x]+8;y<GH*.8;y++){ const i=y*GW+x;
    if (T[i]===E && T[i+GW]!==E && T[i+GW]!==WATER && T[i+GW]!==LAVA && R()<.12){ put(i,PLANT); L[i]=R()<.3?ri(1,3):0; } }

  /* ---- who lives here ---- */
  const water=[]; for(let i=0;i<GW*GH;i+=3) if (T[i]===WATER) water.push(i);
  const air=(n,f)=>{ for(let k=0,tries=0;k<n&&tries<n*40;tries++){ const x=ri(2,GW-3), y=f(x); if (y>2&&y<GH&&T[y*GW+x]===E){ set(x,y,f.t); k++; } } };
  for(const who of B.life){
    if (who==="fish" && water.length){ for(let k=0;k<Math.min(16,4+water.length/250);k++){ const i=water[R()*water.length|0]; if (T[i]===WATER) put(i,FISH); } }
    if (who==="birds"){ const f=x=>Math.round(GH*(.12+R()*.2)); f.t=BIRD; air(ri(5,10),f); }
    if (who==="ants"){ const f=x=>G[x]-ri(1,5); f.t=ANT; air(ri(5,9),f); const s=x=>G[x]-ri(2,9); s.t=SEED; air(ri(8,16),s); }
    if (who==="fireflies"){ let n=0; for(let k=0;k<6000&&n<70;k++){ const x=ri(2,GW-3), y=ri(G[x]+8,GH-4), i=y*GW+x; if (T[i]===E && y<GH*.85){ put(i,FIREFLY); n++; } }
      const f=x=>G[x]-ri(3,14); f.t=FIREFLY; air(20,f); }
  }
  for(let c=0;c<B.clouds;c++){ const x0=ri(0,GW-40), y0=ri(Math.round(GH*.06),Math.round(GH*.14)), w=ri(24,46);
    clouds(x0,y0,Math.min(GW,x0+w),y0+ri(4,7),.3,3);
    if (B.coldClouds) for(let y=y0;y<y0+8;y++) for(let x=x0;x<x0+w&&x<GW;x++){ const i=y*GW+x; if (T[i]===CLOUD) H[i]=-15; } }

  lastWorld={seed,id,name:B.name,desc:B.desc};
  return lastWorld;
}
SCENES.random=function(){ genWorld(0); };
