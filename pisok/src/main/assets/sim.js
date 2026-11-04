// «Пісочниця» — the world: materials, heat, pressure, electricity, life. Drawing and UI live in ui.js.
"use strict";

/* ================= materials ================= */
const E=0, SAND=1, WATER=2, STONE=3, FIRE=4, PLANT=5, LAVA=6, STEAM=7, SNOW=8, SMOKE=9, METAL=10, GLASS=11, OIL=12, ACID=13,
      POWDER=14, ICE=15, SALT=16, SALTWATER=17, ASH=18, SEED=19, WOOD=20, COAL=21, GAS=22, NITRO=23, CEMENT=24, CLONE=25,
      VOID=26, SPARK=27, ANT=28, FISH=29, FLOWER=30, HEATER=31, COOLER=32, CLOUD=33, BATTERY=34, LAMP=35, MERCURY=36,
      WETSAND=37, THERMITE=38, MOLTEN=39, CLAY=40, BRICK=41, BIRD=42;
const N=43;
// kind: p powder, l liquid, g gas, w wall (static, pressure-tight), s static (porous)
const MAT=[];
function def(id,name,kind,col,v,dens,cond,extra={}){ MAT[id]=Object.assign({id,name,kind,col,v,dens,cond,fill:.5,t0:null,ign:null},extra); }
def(E,"Повітря","g",[0,0,0],0,0,.04);
def(SAND,"Пісок","p",[232,192,119],18,3,.15,{fill:.35});
def(SALT,"Сіль","p",[236,236,240],10,2.8,.2,{fill:.35});
def(SNOW,"Сніг","p",[238,244,255],8,1.4,.12,{fill:.25,t0:-6});
def(ASH,"Попіл","p",[120,116,112],16,1.2,.05,{fill:.35});
def(COAL,"Вугілля","p",[40,38,40],14,2.2,.2,{fill:.4,ign:320});
def(POWDER,"Порох","p",[70,68,74],22,2.5,.1,{fill:.45,ign:170});
def(SEED,"Насіння","p",[176,138,72],22,1.3,.1,{fill:.08,ign:150});
def(WATER,"Вода","l",[62,143,214],10,1,.35);
def(SALTWATER,"Солона вода","l",[78,150,196],10,1.05,.35);
def(OIL,"Олія","l",[92,64,34],8,.8,.15,{ign:180});
def(ACID,"Кислота","l",[150,236,62],16,1.1,.3);
def(LAVA,"Лава","l",[255,96,36],24,2.6,.12,{t0:1200});
def(NITRO,"Нітро","l",[214,232,110],10,1.3,.2,{ign:110});
def(CEMENT,"Цемент","l",[150,150,146],10,2,.3,{fill:.6});
def(STEAM,"Пара","g",[205,214,228],8,.2,.1,{fill:.4,t0:110});
def(SMOKE,"Дим","g",[74,74,84],10,.1,.05);
def(GAS,"Газ","g",[150,190,120],8,.05,.05,{fill:.4,ign:120});
def(CLOUD,"Хмара","s",[214,218,228],10,9,.05,{fill:.5,t0:10});
def(FIRE,"Вогонь","g",[255,138,61],0,.3,.4,{t0:700});
def(SPARK,"Іскра","g",[200,230,255],0,.1,.5,{fill:.25,t0:900});
def(STONE,"Камінь","w",[92,96,110],12,9,.25,{fill:1});
def(METAL,"Метал","w",[150,156,170],7,9,.9,{fill:1});
def(GLASS,"Скло","w",[176,226,240],6,9,.2,{fill:1});
def(ICE,"Лід","w",[178,222,246],12,9,.4,{fill:1,t0:-20});
def(WOOD,"Дерево","w",[134,92,52],14,9,.1,{fill:1,ign:260});
def(HEATER,"Нагрівач","w",[190,74,46],8,9,.9,{fill:1,t0:400});
def(COOLER,"Холодильник","w",[90,170,230],8,9,.9,{fill:1,t0:-80});
def(CLONE,"Клонер","w",[200,120,220],10,9,0,{fill:1});
def(VOID,"Чорна діра","w",[16,10,24],6,9,0,{fill:1});
def(PLANT,"Рослина","s",[93,176,90],26,9,.1,{fill:.6,ign:200});
def(FLOWER,"Квітка","s",[230,90,130],20,9,.1,{fill:.5,ign:200});
def(ANT,"Мураха","p",[74,34,24],10,1.5,.1,{fill:.04});
def(FISH,"Риба","p",[255,140,40],20,1.02,.2,{fill:.05});
def(BIRD,"Птах","p",[44,48,64],10,.5,.1,{fill:.02});
def(BATTERY,"Батарейка","w",[70,72,84],6,9,.3,{fill:1});
def(LAMP,"Лампа","w",[110,104,84],6,9,.4,{fill:1});
def(MERCURY,"Ртуть","l",[188,194,206],8,13.6,.5);
def(MOLTEN,"Рідкий метал","l",[255,206,140],10,7,.9,{t0:1700});
def(WETSAND,"Мокрий пісок","p",[160,124,74],14,3.1,.3,{fill:.35});
def(CLAY,"Глина","p",[176,140,118],12,2.4,.2,{fill:.5});
def(BRICK,"Цегла","w",[172,80,58],14,9,.2,{fill:1});
def(THERMITE,"Терміт","p",[150,72,60],20,2.6,.15,{fill:.4,ign:600});

const tbl=(f)=>{ const a=new Array(N); for(let i=0;i<N;i++) a[i]=f(MAT[i]); return a; };
const DENS=tbl(m=>m.dens), COND=tbl(m=>m.cond), KIND=tbl(m=>m.kind), IGN=tbl(m=>m.ign);
// heat capacity: how much heat it takes to change the temperature (lava and water hold a lot)
const ICAP=tbl(m=>1/({[LAVA]:6,[WATER]:2.5,[SALTWATER]:2.5,[STONE]:1.5,[ICE]:2,[CEMENT]:2,[WOOD]:1.5})[m.id]||1);
const FLUID=tbl(m=>m.id===E||m.kind==="l"||m.kind==="g");
const WALL=tbl(m=>m.kind==="w");
const GASK=tbl(m=>m.kind==="g"&&m.id!==E);
const MOVES=tbl(m=>(m.kind==="p"||m.kind==="l"||m.kind==="g")&&m.id!==E ? (m.id===LAVA||m.id===CEMENT?.3:1) : 0);
const CONDUCT=tbl(m=>m.id===METAL||m.id===WATER||m.id===SALTWATER||m.id===MERCURY||m.id===LAMP||m.id===MOLTEN);
const ACIDEATS=tbl(m=>({[STONE]:.05,[SAND]:.08,[PLANT]:.15,[METAL]:.03,[ICE]:.1,[SNOW]:.2,[POWDER]:.1,[WOOD]:.08,[SALT]:.2,[ASH]:.2,[COAL]:.1,[CEMENT]:.05,[FLOWER]:.2,[SEED]:.2,[ANT]:.3,[FISH]:.3,[BIRD]:.3,[BRICK]:.03,[CLAY]:.1,[WETSAND]:.08,[THERMITE]:.1,[BATTERY]:.02,[LAMP]:.05})[m.id]||0);
const FLOWERS=[[232,72,96],[250,206,60],[246,150,200],[245,245,245],[160,110,230],[255,140,60]];

/* ================= world state ================= */
let GW=0, GH=0, T, S, L, M, H, P, Pn;
const rnd=Math.random;
function makeArrays(w,h){
  GW=w; GH=h; const n=w*h;
  T=new Uint8Array(n); S=new Uint8Array(n); L=new Uint16Array(n); M=new Uint8Array(n);
  H=new Float32Array(n).fill(20); P=new Float32Array(n); Pn=new Float32Array(n);
}
function put(i,t){ // a fresh cell from the brush or a spawn: default temperature
  T[i]=t; S[i]=(rnd()*256)|0;
  L[i]= t===FIRE?40+rnd()*50 : t===STEAM?500+rnd()*400 : t===SMOKE?40+rnd()*60 : t===GAS?1500+rnd()*800 : t===SPARK?3+rnd()*4 : t===ANT?(rnd()<.5?1:2) : t===CLOUD?12+rnd()*24 : t===BIRD?(rnd()*60|0) : 0;
  const t0=MAT[t].t0; H[i]= t0===null ? 20 : t0;
}
function conv(i,t){ // a cell turning into something else keeps its heat
  T[i]=t; L[i]= t===FIRE?30+rnd()*40 : t===STEAM?500+rnd()*400 : t===SMOKE?40+rnd()*60 : 0; M[i]=1;
  if (t===FIRE && H[i]<600) H[i]=600;
}
const at=(x,y)=> (x<0||y<0||x>=GW||y>=GH) ? STONE : T[y*GW+x];
const outside=(x,y)=> x<0||y<0||x>=GW||y>=GH;
// gravity: (GX,GY) points "down", (PX,PY) runs sideways. The tilt of the tablet can turn it.
let GX=0, GY=1, PX=1, PY=0;
function setGravity(gx,gy){ GX=gx; GY=gy; PX=gy?1:0; PY=gx?1:0; }
function swap(i,j){
  let a=T[i]; T[i]=T[j]; T[j]=a; a=S[i]; S[i]=S[j]; S[j]=a; a=L[i]; L[i]=L[j]; L[j]=a;
  const h=H[i]; H[i]=H[j]; H[j]=h; M[i]=1; M[j]=1;
}
function sinks(t,x,y){ if (x<0||x>=GW||y<0||y>=GH) return false; const u=T[y*GW+x]; return u===E || (FLUID[u] && DENS[t]>DENS[u]); }
function rises(t,x,y){ if (x<0||x>=GW||y<0||y>=GH) return false; const u=T[y*GW+x]; return u===E || (KIND[u]==="l") || (GASK[u] && DENS[u]>DENS[t]); }
const NB4=[[1,0],[-1,0],[0,1],[0,-1]], NB8=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];
function each4(x,y,f){ for(const [dx,dy] of NB4){ const nx=x+dx, ny=y+dy; if (nx>=0&&ny>=0&&nx<GW&&ny<GH) f(ny*GW+nx,nx,ny); } }
function rnb(x,y){ const [dx,dy]=NB4[rnd()*4|0]; const nx=x+dx, ny=y+dy; return (nx<0||ny<0||nx>=GW||ny>=GH) ? -1 : ny*GW+nx; }
function count8(x,y,t){ let c=0; for(const [dx,dy] of NB8) if (at(x+dx,y+dy)===t) c++; return c; }

/* ================= events for sound & haptics (ui.js listens) ================= */
const EV={boom:0,crack:0,glass:0,sizzle:0,fire:0,zap:0};

/* ================= heat ================= */
function heat(){
  for(let y=0;y<GH;y++){ const row=y*GW;
    for(let x=0;x<GW;x++){ const i=row+x, t=T[i], ki=COND[t];
      if (t===E) H[i]+=(20-H[i])*.006;                            // open air slowly returns to room temperature
      else if (t===HEATER) H[i]=400; else if (t===COOLER) H[i]=-80;
      if (ki===0) continue;
      if (x<GW-1){ const j=i+1, k=Math.min(ki,COND[T[j]]); if (k>0){ const f=(H[j]-H[i])*k*.24; H[i]+=f*ICAP[t]; H[j]-=f*ICAP[T[j]]; } }
      if (y<GH-1){ const j=i+GW, k=Math.min(ki,COND[T[j]]); if (k>0){ let f=(H[j]-H[i])*k*.24; if (f>0 && (t===E||GASK[t])) f*=1.8; H[i]+=f*ICAP[t]; H[j]-=f*ICAP[T[j]]; } }
    }
  }
}

/* ================= pressure ================= */
let LAB, STK;
function pressure(){
  for(let it=0;it<3;it++){
    for(let y=0;y<GH;y++){ const row=y*GW;
      for(let x=0;x<GW;x++){ const i=row+x;
        if (WALL[T[i]]){ Pn[i]=0; continue; }
        let sum=P[i], n=1;
        if (x===0) n++; else if (!WALL[T[i-1]]) { sum+=P[i-1]; n++; }
        if (x===GW-1) n++; else if (!WALL[T[i+1]]) { sum+=P[i+1]; n++; }
        if (y===0) n++; else if (!WALL[T[i-GW]]) { sum+=P[i-GW]; n++; }
        if (y<GH-1 && !WALL[T[i+GW]]) { sum+=P[i+GW]; n++; }
        Pn[i]=.9996*sum/n;
      }
    }
    const tmp=P; P=Pn; Pn=tmp;
  }
  equalize();
}
function equalize(){ // sealed pockets share one pressure; pockets touching the screen edge are open to the air
  const n=GW*GH; if (!LAB || LAB.length!==n){ LAB=new Int32Array(n); STK=new Int32Array(n); }
  LAB.fill(-1); let id=0;
  for(let s0=0;s0<n;s0++){
    if (LAB[s0]!==-1 || WALL[T[s0]]) continue;
    let sp=0, sum=0, cnt=0, open=false; STK[sp++]=s0; LAB[s0]=id;
    while(sp){ const i=STK[--sp], x=i%GW, y=(i/GW)|0; sum+=P[i]; cnt++;
      if (x===0||x===GW-1||y===0) open=true;
      if (x>0 && LAB[i-1]===-1 && !WALL[T[i-1]]){ LAB[i-1]=id; STK[sp++]=i-1; }
      if (x<GW-1 && LAB[i+1]===-1 && !WALL[T[i+1]]){ LAB[i+1]=id; STK[sp++]=i+1; }
      if (y>0 && LAB[i-GW]===-1 && !WALL[T[i-GW]]){ LAB[i-GW]=id; STK[sp++]=i-GW; }
      if (y<GH-1 && LAB[i+GW]===-1 && !WALL[T[i+GW]]){ LAB[i+GW]=id; STK[sp++]=i+GW; } }
    if (!open){ const avg=sum/cnt; sp=0; STK[sp++]=s0; LAB[s0]=-2;
      while(sp){ const i=STK[--sp], x=i%GW, y=(i/GW)|0; P[i]=avg;
        if (x>0 && LAB[i-1]===id){ LAB[i-1]=-2; STK[sp++]=i-1; }
        if (x<GW-1 && LAB[i+1]===id){ LAB[i+1]=-2; STK[sp++]=i+1; }
        if (y>0 && LAB[i-GW]===id){ LAB[i-GW]=-2; STK[sp++]=i-GW; }
        if (y<GH-1 && LAB[i+GW]===id){ LAB[i+GW]=-2; STK[sp++]=i+GW; } } }
    id++;
  }
}
const pAt=(i,j,x,y)=> (x<0||y<0||x>=GW||y>=GH) ? (y>=GH?P[i]:0) : (WALL[T[j]]?P[i]:P[j]);
function push(i,x,y,t){
  const gx=pAt(i,i-1,x-1,y)-pAt(i,i+1,x+1,y), gy=pAt(i,i-GW,x,y-1)-pAt(i,i+GW,x,y+1);
  const ax=Math.abs(gx), ay=Math.abs(gy), g=ax+ay;
  if (g<.04 || rnd()>Math.min(.95,(g-.04)*(GASK[t]?9:5)*MOVES[t])) return;
  let dx=0, dy=0; if (ax>ay) dx=gx>0?1:-1; else dy=gy>0?1:-1;
  const nx=x+dx, ny=y+dy; if (nx<0||ny<0||nx>=GW||ny>=GH) return;
  const j=ny*GW+nx, u=T[j];
  if (u===E || (GASK[u] && !GASK[t]) || (FLUID[u] && !GASK[t] && DENS[t]>DENS[u])) swap(i,j);
}
function explode(cx,cy,power){
  const r=Math.round(3+power*2);
  for(let dy=-r;dy<=r;dy++) for(let dx=-r;dx<=r;dx++){ const d=Math.hypot(dx,dy); if (d>r) continue;
    const x=cx+dx, y=cy+dy; if (x<0||y<0||x>=GW||y>=GH) continue; const j=y*GW+x;
    if (!WALL[T[j]]) P[j]+=power*1.6*(1-d/(r+1)); pActive=360;
    H[j]+=power*500*(1-d/(r+1));
    if (d<r*.5 && (T[j]===E||T[j]===SMOKE) && rnd()<.5) put(j,FIRE); }
  const R=r+3, cells=[];                                    // the blast flings loose stuff outward
  for(let dy=-R;dy<=R;dy++) for(let dx=-R;dx<=R;dx++){ const d=Math.hypot(dx,dy); if (d<1||d>R) continue;
    const x=cx+dx, y=cy+dy; if (x<0||y<0||x>=GW||y>=GH) continue; const t=T[y*GW+x];
    if (MOVES[t] && !GASK[t] && t!==POWDER && t!==NITRO) cells.push([d,dx,dy]); }
  cells.sort((a,b)=>b[0]-a[0]);
  for(const [d,dx,dy] of cells){ const x=cx+dx, y=cy+dy, i=y*GW+x, k=Math.round((R+2-d)*power*1.3);
    for(let s=k;s>=1;s--){ const tx=Math.round(x+dx/d*s), ty=Math.round(y+dy/d*s-s*.4);
      if (tx<0||ty<0||tx>=GW||ty>=GH) continue; const j=ty*GW+tx; if (T[j]===E){ swap(i,j); break; } } }
  EV.boom=Math.max(EV.boom,Math.min(1,.3+power*.4));
}
let pActive=0;                 // pressure is only simulated for a while after something adds to it
function addP(i,v){ P[i]+=v; pActive=360; }

/* ================= the step ================= */
let frame=0;
function step(){
  M.fill(0); frame++;
  if (frame&1) heat();
  if (pActive>0){ if (--pActive===0) P.fill(0); else pressure(); }
  const ltr=frame&1;
  if (GY){ for(let o=0;o<GH;o++){ const y=GY>0?GH-1-o:o; for(let k=0;k<GW;k++) cell(ltr?k:GW-1-k,y); } }   // start from the "floor"
  else   { for(let o=0;o<GW;o++){ const x=GX>0?GW-1-o:o; for(let k=0;k<GH;k++) cell(x,ltr?k:GH-1-k); } }
}
function cell(x,y){
      const i=y*GW+x, t=T[i];
      if (t===E || M[i]) return;
      // things catch fire or blow up when hot enough
      const ig=IGN[t];
      if (ig!==null && H[i]>ig && !(t===WOOD||t===COAL||t===THERMITE)){
        if (t===POWDER){ conv(i,FIRE); L[i]=25; explode(x,y,.45); return; }
        if (t===NITRO){ conv(i,FIRE); L[i]=40; explode(x,y,1.5); return; }
        if (t===GAS){ conv(i,FIRE); L[i]=20; explode(x,y,.25); return; }
        if (t===SEED){ conv(i,ASH); return; }
        if (t===BIRD){ conv(i,ASH); return; }
        conv(i,FIRE); if (t===OIL) L[i]=110+rnd()*80; return;
      }
      switch(t){
        case SAND: if (H[i]>1100 && rnd()<.02){ conv(i,GLASS); break; } powder(i,x,y,t,.5); break;
        case SALT: salt(i,x,y); break;
        case ASH: powder(i,x,y,t,.3); break;
        case COAL: if (burning(i,x,y,t)) break; powder(i,x,y,t,.5); break;
        case POWDER: powder(i,x,y,t,.5); break;
        case SEED: seed(i,x,y); break;
        case SNOW: if (H[i]>0 && rnd()<.04){ conv(i,WATER); break; } if (rnd()<.55) break; powder(i,x,y,t,.2); break;
        case WATER: water(i,x,y,false); break;
        case SALTWATER: water(i,x,y,true); break;
        case OIL: flow(i,x,y,OIL,3); break;
        case ACID: acid(i,x,y); break;
        case LAVA: lava(i,x,y); break;
        case NITRO: flow(i,x,y,NITRO,3); break;
        case CEMENT: if (++L[i]>480){ conv(i,STONE); break; } if (rnd()<.4) flow(i,x,y,CEMENT,1); break;
        case FIRE: fire(i,x,y); break;
        case SPARK: spark(i,x,y); break;
        case STEAM: if (H[i]<90 && rnd()<.02){ conv(i,WATER); break; } gas(i,x,y,true); break;
        case SMOKE: gas(i,x,y,false); break;
        case GAS: gas(i,x,y,false); break;
        case PLANT: plant(i,x,y); break;
        case FLOWER: if (H[i]<-10 && rnd()<.002) conv(i,ASH); break;
        case METAL: if (H[i]>1500 && rnd()<.05){ conv(i,MOLTEN); break; } conductor(i,x,y); break;
        case ICE: if (H[i]>0 && rnd()<.03){ conv(i,WATER); break; } crack(i,x,y,.8,.3); break;
        case GLASS: if (H[i]>1500 && rnd()<.01){ conv(i,LAVA); break; } crack(i,x,y,.5,.6); break;
        case STONE: if (H[i]>1150 && rnd()<.004){ conv(i,LAVA); break; } if ((frame+i)%5===0) crack(i,x,y,5,.15); break;
        case WOOD: burning(i,x,y,t); break;
        case CLONE: clone(i,x,y); break;
        case VOID: each4(x,y,(j)=>{ if (T[j]!==VOID && T[j]!==CLONE){ T[j]=E; L[j]=0; } }); break;
        case ANT: ant(i,x,y); break;
        case FISH: fish(i,x,y); break;
        case CLOUD: cloud(i,x,y); break;
        case THERMITE: if (burning(i,x,y,t)) break; powder(i,x,y,t,.5); break;
        case WETSAND: if (H[i]>70 && rnd()<.02){ conv(i,SAND); break; } clump(i,x,y,t); break;
        case CLAY: if (H[i]>500 && rnd()<.01){ conv(i,BRICK); break; } clump(i,x,y,t); break;
        case MERCURY: if (H[i]>357 && rnd()<.05){ conv(i,SMOKE); break; } if (H[i]<-39 && rnd()<.02){ conv(i,METAL); break; } if (L[i]) electric(i,x,y); flow(i,x,y,MERCURY,2); break;
        case MOLTEN: if (H[i]<1400 && rnd()<.03){ conv(i,METAL); break; } molten(i,x,y); break;
        case BATTERY: battery(i,x,y); break;
        case LAMP: if (L[i]){ electric(i,x,y); if (H[i]<60) H[i]+=.5; } break;
        case BIRD: bird(i,x,y); break;
      }
      if (pActive && MOVES[T[i]] && !M[i]) push(i,x,y,T[i]);
}

/* ================= behaviours ================= */
function powder(i,x,y,t,slowInFluid){
  const bx=x+GX, by=y+GY;
  if (sinks(t,bx,by)){ const j=by*GW+bx; if (T[j]!==E && rnd()<slowInFluid) return true; swap(i,j); return true; }
  const d=rnd()<.5?-1:1;
  for (const sd of [d,-d]){ const nx=bx+PX*sd, ny=by+PY*sd; if (sinks(t,nx,ny) && !WALL[at(x+PX*sd,y+PY*sd)]){ swap(i,ny*GW+nx); return true; } }
  return false;
}
function clump(i,x,y,t){ // wet sand and clay stick together: they fall straight and only rarely slump sideways
  const bx=x+GX, by=y+GY;
  if (sinks(t,bx,by)){ swap(i,by*GW+bx); return true; }
  if (rnd()<.006) return powder(i,x,y,t,.5);
  return false;
}
function flow(i,x,y,t,disp){
  const bx=x+GX, by=y+GY;
  if (sinks(t,bx,by)){ swap(i,by*GW+bx); return true; }
  const d=rnd()<.5?-1:1;
  for (const sd of [d,-d]){ const nx=bx+PX*sd, ny=by+PY*sd; if (sinks(t,nx,ny)){ swap(i,ny*GW+nx); return true; } }
  for (const dir of [d,-d]){
    let last=-1;
    for(let k=1;k<=disp;k++){ const nx=x+PX*dir*k, ny=y+PY*dir*k; if (outside(nx,ny)) break; const u=T[ny*GW+nx]; if (u!==E && !GASK[u]) break; last=ny*GW+nx; }
    if (last>=0){ swap(i,last); return true; }
  }
  return false;
}
function water(i,x,y,salty){
  const boil=salty?102:100, freeze=salty?-20:0;
  if (H[i]>boil && rnd()<.25){ EV.sizzle++; if (salty && rnd()<.5){ conv(i,SALT); return; } conv(i,STEAM); addP(i,1.6); return; }
  if (H[i]<freeze && rnd()<(count8(x,y,ICE)?.2:.02)){ conv(i,ICE); return; }
  const j=rnb(x,y);
  if (j>=0){ const u=T[j];
    if (u===FIRE){ conv(j, rnd()<.6?STEAM:SMOKE); H[i]+=40; EV.sizzle++; }
    else if (u===LAVA){ if (H[j]>300){ H[j]-=40; H[i]+=200; } EV.sizzle++; }
    else if (!salty && u===SALT && rnd()<.06){ T[j]=E; conv(i,SALTWATER); return; }
    else if (salty && (u===ICE||u===SNOW) && rnd()<.05){ conv(j,SALTWATER); }
    else if (u===SAND && rnd()<.05){ conv(j,WETSAND); if (rnd()<.5){ T[i]=E; L[i]=0; return; } }
    else if ((u===MOLTEN) && rnd()<.5){ conv(i,STEAM); addP(i,1.2); H[j]-=60; EV.sizzle++; return; } }
  if (L[i]) electric(i,x,y);
  flow(i,x,y,T[i],4);
}
function salt(i,x,y){
  const j=rnb(x,y);
  if (j>=0 && (T[j]===ICE||T[j]===SNOW) && rnd()<.05){ conv(j,SALTWATER); if (rnd()<.3){ T[i]=E; return; } }
  if (H[i]>800 && rnd()<.01){ conv(i,SALTWATER); return; }
  powder(i,x,y,SALT,.6);
}
function acid(i,x,y){
  if (H[i]>110 && rnd()<.05){ conv(i,SMOKE); return; }
  const j=rnb(x,y);
  if (j>=0){ const u=T[j];
    if (ACIDEATS[u] && rnd()<ACIDEATS[u]){ if (rnd()<.3) conv(j,SMOKE); else { T[j]=E; L[j]=0; } M[j]=1; H[i]+=15; if (rnd()<.35){ T[i]=E; return; } }
    else if ((u===WATER||u===SALTWATER) && rnd()<.01){ conv(i,WATER); return; } }
  flow(i,x,y,ACID,3);
}
function lava(i,x,y){
  if (H[i]<650 && rnd()<.02){ conv(i,STONE); return; }
  const ux=x-GX, uy=y-GY; if (!outside(ux,uy) && T[uy*GW+ux]===E && rnd()<.003){ put(uy*GW+ux,FIRE); M[uy*GW+ux]=1; }
  if (rnd()<.5) flow(i,x,y,LAVA,2);
}
function fire(i,x,y){
  L[i] -= (at(x+GX,y+GY)===E ? 3 : 1);
  if (H[i]<700) H[i]=700;
  EV.fire++;
  if (L[i]<=0 || L[i]>1000){ if (rnd()<.35) conv(i,SMOKE); else { T[i]=E; L[i]=0; } return; }
  const j=rnb(x,y);
  if (j>=0){ const u=T[j];
    if (IGN[u]!==null) H[j]+=60;                                  // flames lick whatever they touch
    if (u===PLANT||u===FLOWER){ if (rnd()<.04) conv(j,FIRE); }
    else if (u===OIL && rnd()<.12){ conv(j,FIRE); L[j]=110+rnd()*80; } }
  if (rnd()<.45){ const d=(rnd()*3|0)-1; const nx=x-GX+PX*d, ny=y-GY+PY*d;
    if (!outside(nx,ny) && T[ny*GW+nx]===E) swap(i,ny*GW+nx); }
}
function burning(i,x,y,t){ // wood and coal smoulder for a long time; L is the fuel left while alight
  if (L[i]===0){ if (H[i]>IGN[t]) { L[i]= t===WOOD ? 500+rnd()*500 : t===COAL ? 1200+rnd()*600 : 90+rnd()*60; } else return false; }
  const hot= t===WOOD?650 : t===COAL?900 : 2600; if (H[i]<hot) H[i]=hot;
  EV.fire++;
  if (--L[i]<=1){ conv(i, t===THERMITE?MOLTEN:ASH); return true; }        // thermite leaves a puddle of molten iron
  const j=rnb(x,y);
  if (j>=0){ const u=T[j], down=(y+GY)*GW+x+GX;
    if (u===E && rnd()<(t===THERMITE?.3:.12) && j!==down){ put(j, t===THERMITE&&rnd()<.5?SPARK:FIRE); M[j]=1; }
    else if (t!==THERMITE && (u===WATER||u===SALTWATER)){ L[i]=0; H[i]=90; conv(j,STEAM); EV.sizzle++; return true; } }
  return t===WOOD;
}
function gas(i,x,y,steam){
  if (--L[i]<=0 || L[i]>5000){ if (steam && rnd()<.45) conv(i,WATER); else { T[i]=E; L[i]=0; } return; }
  if (steam && outside(x-GX,y-GY) && rnd()<.012){ conv(i,WATER); return; }
  const t=T[i], d=(rnd()*3|0)-1, up=t===GAS?.45:.75, ux=x-GX+PX*d, uy=y-GY+PY*d;
  if (rnd()<up && rises(t,ux,uy)) { swap(i,uy*GW+ux); return; }
  const sd=rnd()<.5?-1:1, sx=x+PX*sd, sy=y+PY*sd; if (!outside(sx,sy) && T[sy*GW+sx]===E) swap(i,sy*GW+sx);
}
function spark(i,x,y){
  if (H[i]<900) H[i]=900;
  each4(x,y,(j)=>{ const u=T[j]; if (CONDUCT[u] && L[j]===0){ L[j]=HEAD; M[j]=1; } else zapTouch(j,u); });
  if (--L[i]<=0 || L[i]>100){ T[i]=E; L[i]=0; }
}
function zapTouch(j,u){ // what electricity does to its neighbour
  if (u===GAS||u===POWDER||u===NITRO||u===OIL||u===PLANT||u===WOOD||u===COAL||u===FLOWER||u===SEED) H[j]+=400;
  else if (u===FISH||u===ANT) conv(j,ASH);
}
const HEAD=30;
function electric(i,x,y){ // conductors carry pulses: head (30) → a long rest (29…1) so a wave never feeds on itself → ready (0)
  if (L[i]===HEAD){ each4(x,y,(j)=>{ const u=T[j]; if (CONDUCT[u] && L[j]===0){ L[j]=HEAD; M[j]=1; } else if (u!==T[i]) zapTouch(j,u); }); H[i]+=T[i]===METAL?6:2; EV.zap++; }
  L[i]--;
}
function conductor(i,x,y){ if (L[i]) electric(i,x,y); }
function plant(i,x,y){
  if (L[i]>0){ // a growing stem
    if (rnd()>.06) return;
    const r=rnd(), sd=r<.5?0:r<.75?1:-1, nx=x-GX+PX*sd, ny=y-GY+PY*sd;
    if (outside(nx,ny)) { L[i]=0; return; }
    const j=ny*GW+nx;
    if (T[j]===E||T[j]===WATER){
      if (L[i]===1){ put(j, rnd()<.6?FLOWER:PLANT); } else { put(j,PLANT); L[j]=L[i]-1; S[j]=40+(rnd()*30|0); }
      M[j]=1;
      if (rnd()<.12 && L[i]>4){ const sd2=rnd()<.5?-1:1, bx=x-GX+PX*sd2, by=y-GY+PY*sd2; if (!outside(bx,by) && T[by*GW+bx]===E){ const b=by*GW+bx; put(b,PLANT); L[b]=L[i]>>1; M[b]=1; } }
      L[i]=0;
    } else if (rnd()<.2) L[i]=0;
    return;
  }
  if (rnd()>.004) return;                                           // roots slowly drink: water beside or below becomes plant
  const j=rnb(x,y); if (j<0 || j<i-1) return;
  if (T[j]===WATER && at(x-GX,y-GY)!==WATER){ put(j,PLANT); M[j]=1; }
  else if (T[j]===SALTWATER && rnd()<.3) conv(i,ASH);
}
function seed(i,x,y){
  if (powder(i,x,y,SEED,.3)) return;
  const below=at(x+GX,y+GY), wet=below===WETSAND||count8(x,y,WATER)||count8(x+GX,y+GY,WATER)||count8(x+2*GX,y+2*GY,WATER);
  if ((below===SAND||below===ASH||below===WETSAND) && wet && rnd()<(below===SAND?.012:.03)){
    conv(i,PLANT); L[i]=12+(rnd()*26|0); S[i]=40;
  }
}
function clone(i,x,y){
  if (!L[i]){ each4(x,y,(j)=>{ const u=T[j]; if (!L[i] && u!==E && u!==CLONE && u!==VOID) L[i]=u+1; }); return; }
  const t0=MAT[L[i]-1].t0; if (t0!==null) each4(x,y,(j)=>{ H[j]+=(t0-H[j])*.2; });   // a lava clone keeps its mouth molten, an ice clone keeps it frozen
  if (rnd()<.25){ const j=rnb(x,y); if (j>=0 && T[j]===E){ put(j,L[i]-1); M[j]=1; } }
}
function ant(i,x,y){
  if (H[i]>70 || H[i]<-15){ conv(i,ASH); return; }
  const wet=count8(x,y,WATER)+count8(x,y,SALTWATER);
  if (wet>5 && rnd()<.004){ conv(i,ASH); return; }
  if (rnd()<.45) return;
  if (sinks(ANT,x+GX,y+GY) && at(x+GX,y+GY)===E){ swap(i,(y+GY)*GW+x+GX); return; }
  const dir=L[i]===2?-1:1, fx=x+PX*dir, fy=y+PY*dir;
  if (rnd()<.01){ L[i]=3-L[i]; return; }
  const f=at(fx,fy);
  if (f===E){ if (at(fx+GX,fy+GY)===E && at(x+GX,y+GY)!==E && rnd()<.7){ L[i]=3-L[i]; return; } swap(i,fy*GW+fx); return; }
  if ((f===SAND||f===ASH||f===SALT||f===WETSAND||f===CLAY) && rnd()<.12){ swap(i,fy*GW+fx); return; }   // dig a tunnel
  if (f===SEED && rnd()<.05){ const j=fy*GW+fx; put(j,ANT); L[j]=3-L[i]; M[j]=1; return; }              // eat a seed, hatch a friend
  if (at(fx-GX,fy-GY)===E && at(x-GX,y-GY)===E){ swap(i,(fy-GY)*GW+fx-GX); return; }                    // climb a step
  L[i]=3-L[i];
}
function fish(i,x,y){
  const wet=count8(x,y,WATER)+count8(x,y,SALTWATER);
  if (H[i]>45 || H[i]<-2){ conv(i,ASH); return; }
  if (!wet){ if (++L[i]>220){ conv(i,ASH); return; } if (rnd()<.3) powder(i,x,y,FISH,0); return; }
  L[i]=0;
  for(const [dx,dy] of NB4){ const u=at(x+dx,y+dy); if ((u===WATER||u===SALTWATER) && L[(y+dy)*GW+x+dx]) { conv(i,ASH); return; } }
  if (rnd()<.35){ const dir=(S[i]&1)?1:-1, dy=rnd()<.25?(rnd()<.5?-1:1):0, dx=dy?0:dir, nx=x+dx, ny=y+dy;
    const u=at(nx,ny);
    if (u===WATER||u===SALTWATER) swap(i,ny*GW+nx); else if (!dy) S[i]^=1; }
  if (rnd()<.0004 && count8(x,y,FISH)){ const j=rnb(x,y); if (j>=0 && T[j]===WATER){ put(j,FISH); M[j]=1; } }
}
function cloud(i,x,y){ // drifts a little and rains until its water runs out; snows when it is freezing
  const bx=x+GX, by=y+GY;
  if (rnd()<.006 && !outside(bx,by) && T[by*GW+bx]===E){ const j=by*GW+bx; put(j, H[i]<0?SNOW:WATER); H[j]=Math.min(H[j],H[i]); M[j]=1; if (--L[i]<=0){ T[i]=E; return; } }
  if (H[i]>200){ conv(i,STEAM); return; }
  if (rnd()<.015){ const d=((frame>>9)&1?1:-1)*(rnd()<.8?1:-1), nx=x+PX*d, ny=y+PY*d; if (!outside(nx,ny)&&T[ny*GW+nx]===E) swap(i,ny*GW+nx); }
}
function molten(i,x,y){ // glowing liquid iron: sets things alight, bursts water into steam, cools back into metal
  const j=rnb(x,y); if (j>=0 && IGN[T[j]]!==null) H[j]+=80;
  if (L[i]) electric(i,x,y);
  if (rnd()<.6) flow(i,x,y,MOLTEN,2);
}
function battery(i,x,y){ // sends a pulse into touching wires about twice a second
  if ((frame+S[i])%32) return;
  each4(x,y,(j)=>{ if (CONDUCT[T[j]] && L[j]===0){ L[j]=HEAD; M[j]=1; } });
}
function bird(i,x,y){ // flies about, keeps off the ground, pecks at seeds
  if (H[i]>60 || H[i]<-30){ conv(i,ASH); return; }
  const wet=count8(x,y,WATER); if (wet>4 && rnd()<.02){ conv(i,ASH); return; }
  if (rnd()<.35) return;
  let dir=(S[i]&1)?1:-1;
  let dy=rnd()<.3?-1:rnd()<.5?1:0;
  for(let k=1;k<=4;k++) if (at(x,y+k)!==E){ dy=-1; break; }                     // too low: climb
  if (y<GH*.08) dy=1;
  if (rnd()<.01) dir=-dir;
  const nx=x+dir, ny=y+dy, u=at(nx,ny);
  if (u===E){ swap(i,ny*GW+nx); S[ny*GW+nx]=(S[ny*GW+nx]&~1)|(dir>0?1:0); }
  else { S[i]^=1; if (u===SEED && rnd()<.3){ T[ny*GW+nx]=E; } }
}
function maxP(x,y){ let m=0; for(const [dx,dy] of NB4){ const nx=x+dx, ny=y+dy; if(nx<0||ny<0||nx>=GW||ny>=GH) continue; const j=ny*GW+nx; if(!WALL[T[j]] && P[j]>m) m=P[j]; } return m; }
function crack(i,x,y,limit,rate){
  if (!pActive) return;
  const p=maxP(x,y); if (p<limit || rnd()>(p-limit)*rate) return;
  if (T[i]===GLASS){ if (rnd()<.35) conv(i,SAND); else { T[i]=E; L[i]=0; }
    if (p>limit*1.3) for(const [dx,dy] of NB4) if (at(x+dx,y+dy)===GLASS && rnd()<.7){ const j=(y+dy)*GW+x+dx; T[j]=E; M[j]=1; P[j]=p; }
    EV.glass++; }
  else conv(i, T[i]===ICE ? SNOW : SAND);
  M[i]=1; P[i]=p*.8; pActive=360;
}

/* ================= lightning ================= */
function lightning(cx,cy){ // a jagged bolt from the sky that homes in on the touched point and strikes the first solid thing
  let x=Math.max(0,Math.min(GW-1,cx+((rnd()-.5)*GW*.25|0))), y=0;
  while (y<GH){
    const i=y*GW+x, u=T[i];
    if (u!==E && !GASK[u]){ H[i]+=900; if (CONDUCT[u]) L[i]=HEAD; else zapTouch(i,u); explode(x,Math.max(0,y-1),.3); break; }
    put(i,SPARK); L[i]=5+(rnd()*5|0);
    const left=Math.max(1,cy-y);
    x+=Math.round((cx-x)/left*(y<cy?1:0)) + (rnd()<.35?(rnd()<.5?-1:1):0);
    x=Math.max(0,Math.min(GW-1,x)); y++;
  }
  EV.crack=1;
}

/* ================= scenes ================= */
function rect(x0,y0,x1,y1,t,fill=1){ for(let y=Math.max(0,y0|0);y<Math.min(GH,y1|0);y++) for(let x=Math.max(0,x0|0);x<Math.min(GW,x1|0);x++) if (rnd()<fill) put(y*GW+x,t); }
function clouds(x0,y0,x1,y1,fill,drops){ for(let y=y0;y<y1;y++) for(let x=x0;x<x1;x++) if (rnd()<fill){ const i=y*GW+x; put(i,CLOUD); L[i]=1+(rnd()*drops*2|0); } }
function floor(h){ rect(0,GH-h,GW,GH,STONE); }
function clearAll(){ T.fill(0); P.fill(0); L.fill(0); H.fill(20); }
const SCENES={
  demo(){
    const ground=x=>Math.round(GH*(.63 - .07*Math.sin(x/GW*Math.PI*2.2+.6) - .03*Math.sin(x/GW*17)));
    for(let x=0;x<GW;x++){ for(let y=ground(x);y<GH;y++) put(y*GW+x,STONE); }
    const pool=Math.round(GW*.62), pw=40, depth=18, lvl=ground(pool)-2;
    for(let x=pool-pw;x<pool+pw;x++){ const d=Math.round(depth*Math.sqrt(Math.max(0,1-((x-pool)/pw)**2))); for(let y=0;y<lvl+d&&y<GH;y++) if (y>=ground(x)-1||y<ground(x)) { if (y>=Math.min(ground(x),lvl)) T[y*GW+x]=E; } }
    for(let x=pool-pw;x<pool+pw;x++){ const d=Math.round(depth*Math.sqrt(Math.max(0,1-((x-pool)/pw)**2))); for(let y=lvl;y<lvl+d;y++) if (T[y*GW+x]===E) put(y*GW+x,WATER); }
    for(let k=0;k<7;k++){ const x=pool-25+(rnd()*50|0), y=lvl+3+(rnd()*8|0); if (T[y*GW+x]===WATER) put(y*GW+x,FISH); }
    for(let k=0;k<4;k++){ const x=pool-20+(rnd()*40|0); let y=lvl; while(y<GH-1&&T[(y+1)*GW+x]===WATER) y++; put(y*GW+x,PLANT); L[y*GW+x]=8+(rnd()*8|0); }
    for(let x=Math.round(GW*.12);x<GW*.34;x++){ const h=Math.round(22-Math.abs(x-GW*.23)*.8); for(let y=ground(x)-h;y<ground(x);y++) if(y>0) put(y*GW+x,SAND); }
    for(const fx of [.38,.44,.88,.94]){ const cx=Math.round(GW*fx), g=ground(cx); put((g-1)*GW+cx,PLANT); L[(g-1)*GW+cx]=24+(rnd()*10|0); }
    for(let k=0;k<6;k++){ const x=Math.round(GW*(.18+k*.02)), y=ground(x)-30; put(y*GW+x,ANT); }
    for(let k=0;k<3;k++){ const x=Math.round(GW*(.06+k*.02)), y=ground(x)-1; put(y*GW+x,WOOD); }
  },
  boiler(){ floor(Math.round(GH*.2)); const g=GH-Math.round(GH*.2), cx=GW>>1;
    const w=Math.round(GW*.22), h=Math.round(GH*.32), x0=cx-(w>>1), y0=g-h-10;
    rect(x0-6,g-12,x0+w+6,g,STONE); rect(x0-3,g-10,x0+w+3,g,LAVA);
    rect(x0,y0,x0+w,y0+h,METAL); rect(x0+3,y0,x0+w-3,y0+h-3,E);
    rect(x0+3,y0+Math.round(h*.45),x0+w-3,y0+h-3,WATER);
    rect(x0-1,y0-3,x0+w+1,y0,GLASS);
    rect(x0-30,y0-14,x0-10,y0+h,SAND,.9); rect(x0+w+10,y0+h-16,x0+w+30,y0+h,SNOW,.6); },
  fuse(){ floor(Math.round(GH*.2)); const g=GH-Math.round(GH*.2), x0=Math.round(GW*.12), x1=Math.round(GW*.62);
    rect(x0,g-2,x1,g,POWDER); rect(x1,g-22,x1+22,g,POWDER); rect(x1+28,g-50,x1+34,g,STONE); rect(x1+40,g-30,x1+80,g,SAND,.9); rect(x0-4,g-8,x0,g,FIRE); },
  oil(){ floor(Math.round(GH*.2)); const g=GH-Math.round(GH*.2), x0=Math.round(GW*.2), x1=Math.round(GW*.8);
    rect(x0-3,g-40,x0,g,STONE); rect(x1,g-40,x1+3,g,STONE); rect(x0,g-26,x1,g,WATER); rect(x0,g-34,x1,g-26,OIL); rect(x0+10,g-60,x0+20,g-52,LAVA); },
  acid(){ floor(Math.round(GH*.2)); const g=GH-Math.round(GH*.2), x0=Math.round(GW*.25), w=34;
    rect(x0,g-44,x0+3,g,GLASS); rect(x0+w,g-44,x0+w+3,g,GLASS); rect(x0,g-3,x0+w+3,g,GLASS); rect(x0+3,g-30,x0+w,g-3,ACID);
    const x1=Math.round(GW*.6); rect(x1,g-44,x1+3,g,STONE); rect(x1+w,g-44,x1+w+3,g,STONE); rect(x1,g-3,x1+w+3,g,STONE); rect(x1+3,g-30,x1+w,g-3,ACID);
    rect(x1+60,g-30,x1+66,g,METAL); rect(x1+56,g-50,x1+70,g-40,ACID); },
  volcano(){ const g=GH-Math.round(GH*.12); floor(Math.round(GH*.12)); const cx=GW>>1, h=Math.round(GH*.5);
    for(let y=g-h;y<g;y++){ const half=Math.round((y-(g-h))*1.25)+4; rect(cx-half,y,cx+half,y+1,STONE); }
    rect(cx-4,g-h,cx+4,g-6,E); rect(cx-14,g-14,cx+14,g-4,LAVA); rect(cx-4,g-h+6,cx+4,g-14,LAVA);
    for(let y=g-h;y<g;y++) for(let x=cx-10;x<cx+10;x++){ const i=y*GW+x; if (T[i]===STONE) H[i]=950; }
    rect(cx-4,g-h,cx+4,g-14,LAVA);
    for(let x=cx-2;x<cx+2;x++){ const i=(g-h-1)*GW+x; put(i,CLONE); L[i]=LAVA+1; }                 // the crater keeps pouring out lava
    rect(4,g-26,Math.round(GW*.22),g,WATER); rect(0,g-30,4,g,STONE);
    for(const fx of [.3,.72,.8]){ const x=Math.round(GW*fx), y=g-1; put(y*GW+x,PLANT); L[y*GW+x]=20; } },
  aquarium(){ floor(Math.round(GH*.15)); const g=GH-Math.round(GH*.15), x0=Math.round(GW*.15), x1=Math.round(GW*.85), top=Math.round(GH*.25);
    rect(x0-3,top,x0,g,GLASS); rect(x1,top,x1+3,g,GLASS); rect(x0-3,g-3,x1+3,g,GLASS);
    rect(x0,g-12,x1,g-3,SAND); rect(x0,top+10,x1,g-12,WATER);
    for(let k=0;k<14;k++){ const x=x0+4+(rnd()*(x1-x0-8)|0), y=top+16+(rnd()*(g-top-34)|0); put(y*GW+x,FISH); }
    for(let k=0;k<7;k++){ const x=x0+8+(rnd()*(x1-x0-16)|0), y=g-13; put(y*GW+x,PLANT); L[y*GW+x]=10+(rnd()*20|0); }
    rect(x1-24,g-30,x1-20,g-12,STONE); },
  ants(){ floor(Math.round(GH*.1)); const g=GH-Math.round(GH*.1), top=Math.round(GH*.55);
    rect(0,top,GW,g,SAND); rect(0,top-2,GW,top,ASH,.6);
    for(let k=0;k<12;k++){ const x=(rnd()*GW)|0; put((top-3)*GW+x,ANT); }
    for(let k=0;k<30;k++){ const x=(rnd()*GW)|0; put((top-6-(rnd()*10|0))*GW+x,SEED); }
    clouds(Math.round(GW*.62),4,Math.round(GW*.95),12,.3,5); },
  electric(){ floor(Math.round(GH*.15)); const g=GH-Math.round(GH*.15), wy=g-30;
    rect(Math.round(GW*.08),wy,Math.round(GW*.6),wy+2,METAL); rect(Math.round(GW*.08),Math.round(GH*.15),Math.round(GW*.08)+2,wy,METAL);
    const x0=Math.round(GW*.6), x1=Math.round(GW*.9);
    rect(x0,wy-30,x1,wy-27,STONE); rect(x0,wy+2,x1,wy+5,STONE); rect(x1,wy-30,x1+3,wy+5,STONE); rect(x0,wy-27,x0+3,wy,STONE);
    rect(x0+3,wy-27,x1,wy+2,GAS); rect(x0,wy,x0+3,wy+2,METAL);
    rect(Math.round(GW*.2),wy+10,Math.round(GW*.45),g,WATER); rect(Math.round(GW*.2)-3,wy+8,Math.round(GW*.2),g,STONE); rect(Math.round(GW*.45),wy+8,Math.round(GW*.45)+3,g,STONE);
    for(let k=0;k<6;k++){ const x=Math.round(GW*.22)+(rnd()*GW*.2|0), y=wy+14+(rnd()*12|0); put(y*GW+x,FISH); }
    rect(Math.round(GW*.3),wy+2,Math.round(GW*.3)+2,wy+11,METAL); },
  winter(){ floor(Math.round(GH*.15)); const g=GH-Math.round(GH*.15);
    rect(Math.round(GW*.1),g-24,Math.round(GW*.9),g,WATER); rect(Math.round(GW*.1)-3,g-28,Math.round(GW*.1),g,STONE); rect(Math.round(GW*.9),g-28,Math.round(GW*.9)+3,g,STONE);
    rect(Math.round(GW*.1),g-3,Math.round(GW*.45),g,COOLER); rect(Math.round(GW*.55),g-3,Math.round(GW*.9),g,HEATER);
    for(let k=0;k<10;k++){ const x=Math.round(GW*.12)+(rnd()*GW*.76|0), y=g-12+(rnd()*8|0); put(y*GW+x,FISH); }
    rect(0,0,GW,2,SNOW,.25); },
  garden(){ floor(Math.round(GH*.1)); const g=GH-Math.round(GH*.1);
    rect(0,g-14,GW,g,SAND); rect(0,g-16,GW,g-14,ASH,.7);
    for(let k=0;k<40;k++){ const x=(rnd()*GW)|0; put((g-20-(rnd()*20|0))*GW+x,SEED); }
    clouds(Math.round(GW*.05),4,Math.round(GW*.45),12,.35,4); clouds(Math.round(GW*.55),6,Math.round(GW*.95),13,.35,4);
    rect(Math.round(GW*.47),g-40,Math.round(GW*.53),g-14,WOOD); }
};
SCENES.circuit=function(){ floor(Math.round(GH*.15)); const g=GH-Math.round(GH*.15), y=Math.round(GH*.35), x0=Math.round(GW*.1), x1=Math.round(GW*.9);
  rect(x0,y-4,x0+6,y+4,BATTERY);
  rect(x0+6,y-1,x1,y+1,METAL);                                                      // the main wire
  for(let k=0;k<6;k++){ const x=x0+20+k*Math.round((x1-x0-30)/6); rect(x,y+1,x+2,y+10,METAL); rect(x-3,y+10,x+5,y+15,LAMP); }
  const px=Math.round(GW*.35), pw=Math.round(GW*.3);
  rect(px-3,g-22,px,g,GLASS); rect(px+pw,g-22,px+pw+3,g,GLASS); rect(px-3,g-3,px+pw+3,g,GLASS);
  rect(px,g-10,px+pw,g-3,MERCURY); rect(px,g-20,px+pw,g-10,WATER);
  rect(x1-13,g-14,x1-10,g,STONE); rect(x1+6,g-14,x1+9,g,STONE); rect(x1-10,g-12,x1+6,g,POWDER); rect(x1-2,y+1,x1,g-4,METAL);   // a wire into a box of powder
  const lx=px+(pw>>1)+7; rect(lx,y+1,lx+2,g-6,METAL);                                // a lead dipping into the mercury
  for(let k=0;k<5;k++){ const x=px+4+(rnd()*(pw-8)|0); put((g-15)*GW+x,FISH); } };
SCENES.thermite=function(){ floor(Math.round(GH*.12)); const g=GH-Math.round(GH*.12), cx=GW>>1, y=Math.round(GH*.45);
  rect(cx-40,y,cx+40,y+4,METAL); rect(cx-44,y,cx-40,g,STONE); rect(cx+40,y,cx+44,g,STONE);
  rect(cx-12,y-8,cx+12,y,THERMITE); for(let x=cx-2;x<cx+2;x++) H[(y-8)*GW+x]=900;   // lit at the top
  rect(cx-36,g-20,cx+36,g,WATER); rect(cx-60,g-30,cx-48,g,CLAY); rect(cx+48,g-30,cx+60,g,WETSAND); };
SCENES.birds=function(){ const ground=x=>Math.round(GH*(.7-.05*Math.sin(x/GW*6.3))); 
  for(let x=0;x<GW;x++) for(let y=ground(x);y<GH;y++) put(y*GW+x, y<ground(x)+5?WETSAND:STONE);
  for(let k=0;k<16;k++){ const x=(rnd()*GW)|0, y=Math.round(GH*(.15+rnd()*.3)); put(y*GW+x,BIRD); }
  for(let k=0;k<30;k++){ const x=(rnd()*GW)|0; put((ground(x)-1)*GW+x,SEED); }
  for(const fx of [.2,.5,.8]){ const cx=Math.round(GW*fx); const g=ground(cx); for(let y=g-30;y<g;y++) put(y*GW+cx,WOOD); put((g-31)*GW+cx,PLANT); L[(g-31)*GW+cx]=14; }
  clouds(Math.round(GW*.3),5,Math.round(GW*.7),11,.3,4); };
const SCENE_LIST=[
  ["demo","Пагорби й ставок","Початкова сцена: пісок, ставок із рибками, мурахи й рослини"],
  ["boiler","Котел під тиском","Вода в металевому баку над лавою, зверху скляна кришка"],
  ["volcano","Вулкан","Лава ллється з кратера, стікає схилом і шипить в озері"],
  ["electric","Блискавка і газ","Торкніться «Блискавкою» дроту — струм дійде до газу й рибок"],
  ["aquarium","Акваріум","Скло, водорості та зграйка рибок"],
  ["ants","Мурашник","Мурахи риють ходи в піску й їдять насіння"],
  ["garden","Сад","Насіння на попелі, дерево і дощові хмари"],
  ["winter","Зима й літо","Холодильник морозить один бік озера, нагрівач гріє інший"],
  ["fuse","Порохова доріжка","Гніт, бочка пороху і кам'яна стіна"],
  ["oil","Нафта на воді","Олія плаває, а від іскри — горить"],
  ["acid","Кислота в склянці","Скло тримає кислоту, а камінь — ні"],
  ["circuit","Ланцюг із лампами","Батарейка живить лампи, струм іде в ртуть і до пороху"],
  ["thermite","Терміт","Горить при 2600°, плавить сталеву балку, рідкий метал капає у воду"],
  ["birds","Птахи","Зграя над пагорбами з мокрого піску, насіння й дерева"]
];
function loadScene(name){ clearAll(); (SCENES[name]||SCENES.demo)(); }
