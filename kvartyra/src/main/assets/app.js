(()=>{var ef=0,yh=1,nf=2;var Pu=1,wc=2,jn=3,Hn=0,Be=1,Ye=2,xi=0,Ss=1,Ra=2,Mh=3,Ca=4,sf=5,zi=100,rf=101,af=102,of=103,lf=104,cf=200,hf=201,uf=202,df=203,rl=204,al=205,ff=206,pf=207,mf=208,gf=209,xf=210,_f=211,vf=212,yf=213,Mf=214,ol=0,ll=1,cl=2,As=3,hl=4,ul=5,dl=6,fl=7,Lu=0,bf=1,Sf=2,_i=0,Ef=1,wf=2,Tf=3,Af=4,Rf=5,Cf=6,Tc=7;var Du=300,Rs=301,Cs=302,pl=303,ml=304,eo=306,Is=1e3,Hi=1001,gl=1002,dn=1003,If=1004;var Zr=1005;var zn=1006,Ao=1007;var Vi=1008;var ii=1009,Uu=1010,Nu=1011,Mr=1012,Ac=1013,Gi=1014,kn=1015,Pr=1016,Rc=1017,Cc=1018,Ps=1020,Fu=35902,Ou=1021,Bu=1022,Pn=1023,zu=1024,ku=1025,Es=1026,Ls=1027,Ic=1028,Pc=1029,Hu=1030,Lc=1031;var Dc=1033,Sa=33776,Ea=33777,wa=33778,Ta=33779,xl=35840,_l=35841,vl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Il=37814,Pl=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Aa=36492,Bl=36494,zl=36495,Vu=36283,kl=36284,Hl=36285,Vl=36286;var Ia=2300,Gl=2301,Ro=2302,bh=2400,Sh=2401,Eh=2402;var Pf=3200,Lf=3201;var Gu=0,Df=1,mi="",qe="srgb",Hs="srgb-linear",no="linear",fe="srgb";var is=7680;var wh=519,Uf=512,Nf=513,Ff=514,Wu=515,Of=516,Bf=517,zf=518,kf=519,Wl=35044;var Th="300 es",ti=2e3,Pa=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,_r=Math.PI/180,Ds=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function Uc(i,t){return(i%t+t)%t}function Hf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vf(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function Gf(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function Wf(i,t=1){return t-Math.abs(Uc(i,t*2)-t)}function Xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $f(i,t){return i+Math.random()*(t-i)}function Zf(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kf(i){return i*_r}function Qf(i){return i*Ds}function jf(i){return(i&i-1)===0&&i!==0}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Un={DEG2RAD:_r,RAD2DEG:Ds,generateUUID:ei,clamp:je,euclideanModulo:Uc,mapLinear:Hf,inverseLerp:Vf,lerp:vr,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:$f,randFloatSpread:Zf,seededRandom:Jf,degToRad:Kf,radToDeg:Qf,isPowerOfTwo:jf,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:ue,denormalize:In},Gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],_=s[4],b=s[7],D=s[2],R=s[5],I=s[8];return r[0]=a*x+o*w+l*D,r[3]=a*m+o*_+l*R,r[6]=a*p+o*b+l*I,r[1]=c*x+h*w+u*D,r[4]=c*m+h*_+u*R,r[7]=c*p+h*b+u*I,r[2]=d*x+f*w+g*D,r[5]=d*m+f*_+g*R,r[8]=d*p+f*b+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new qt;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){let i=La("canvas");return i.style.display="block",i}var Rh={};function gr(i){i in Rh||(Rh[i]=!0,console.warn(i))}function sp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ap(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?no:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ch=[.64,.33,.3,.6,.15,.06],Ih=[.2126,.7152,.0722],Ph=[.3127,.329],Lh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Hs]:{primaries:Ch,whitePoint:Ph,transfer:no,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:Ih,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Ch,whitePoint:Ph,transfer:fe,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:Ih,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var ss,Xl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=La("canvas")),ss.width=t.width,ss.height=t.height;let n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},op=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Io(s[a].image)):r.push(Io(s[a]))}else r=Io(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Io(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lp=0,rn=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hi,s=Hi,r=zn,a=Vi,o=Pn,l=ii,c=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ei(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Du;rn.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(f+1)/2,D=(p+1)/2,R=(h+d)/4,I=(u+x)/4,U=(g+m)/4;return _>b&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=I/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=U/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=I/r,s=U/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),R=Math.atan2(D,p*w);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}let b=o*w;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new C,Uh=new Ln,ri=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Kr.subVectors(this.max,rr),rs.subVectors(t.a,rr),as.subVectors(t.b,rr),os.subVectors(t.c,rr),ci.subVectors(as,rs),hi.subVectors(os,as),Li.subVectors(rs,os);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Li.z,Li.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Li.z,0,-Li.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Li.y,Li.x,0];return!Lo(e,rs,as,os,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,rs,as,os,Kr))?!1:(Qr.crossVectors(ci,hi),e=[Qr.x,Qr.y,Qr.z],Lo(e,rs,as,os,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,Jr=new ri,rs=new C,as=new C,os=new C,ci=new C,hi=new C,Li=new C,rr=new C,Kr=new C,Qr=new C,Di=new C;function Lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cp=new ri,ar=new C,Do=new C,yi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Do)),this.expandByPoint(ar.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new C,Uo=new C,jr=new C,ui=new C,No=new C,ta=new C,Fo=new C,br=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Uo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=ui.dot(this.direction),l=-ui.dot(jr),c=ui.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(jr,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),ta.subVectors(n,t),Fo.crossVectors(No,ta);let a=this.direction.dot(Fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let l=o*this.direction.dot(ta.crossVectors(ui,ta));if(l<0)return null;let c=o*this.direction.dot(No.cross(ui));if(c<0||l+c>a)return null;let h=-o*ui.dot(Fo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hp,t,up)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),di.crossVectors(n,hn),di.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),di.crossVectors(n,hn)),di.normalize(),ea.crossVectors(hn,di),s[0]=di.x,s[4]=ea.x,s[8]=hn.x,s[1]=di.y,s[5]=ea.y,s[9]=hn.y,s[2]=di.z,s[6]=ea.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],_=n[7],b=n[11],D=n[15],R=s[0],I=s[4],U=s[8],E=s[12],v=s[1],L=s[5],F=s[9],H=s[13],$=s[2],Q=s[6],V=s[10],st=s[14],X=s[3],et=s[7],lt=s[11],Ct=s[15];return r[0]=a*R+o*v+l*$+c*X,r[4]=a*I+o*L+l*Q+c*et,r[8]=a*U+o*F+l*V+c*lt,r[12]=a*E+o*H+l*st+c*Ct,r[1]=h*R+u*v+d*$+f*X,r[5]=h*I+u*L+d*Q+f*et,r[9]=h*U+u*F+d*V+f*lt,r[13]=h*E+u*H+d*st+f*Ct,r[2]=g*R+x*v+m*$+p*X,r[6]=g*I+x*L+m*Q+p*et,r[10]=g*U+x*F+m*V+p*lt,r[14]=g*E+x*H+m*st+p*Ct,r[3]=w*R+_*v+b*$+D*X,r[7]=w*I+_*L+b*Q+D*et,r[11]=w*U+_*F+b*V+D*lt,r[15]=w*E+_*H+b*st+D*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,R=e*w+n*_+s*b+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=w*I,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*I,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*I,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*I,t[4]=_*I,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*I,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*I,t[8]=b*I,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*I,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*I,t[12]=D*I,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*I,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,w=l*c,_=l*h,b=l*u,D=n.x,R=n.y,I=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+b)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+_)*I,s[9]=(m-w)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),a=ls.set(s[4],s[5],s[6]).length(),o=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ti){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ti){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===ti)g=(a+r)*u,x=-2*u;else if(o===Pa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new C,An=new te,hp=new C(0,0,0),up=new C(1,1,1),di=new C,ea=new C,hn=new C,Nh=new te,Fh=new Ln,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,Oh=new C,cs=new Ln,Jn=new te,na=new C,or=new C,fp=new C,pp=new Ln,Bh=new C(1,0,0),zh=new C(0,1,0),kh=new C(0,0,1),Hh={type:"added"},mp={type:"removed"},hs={type:"childadded",child:null},Oo={type:"childremoved",child:null},De=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Vn,n=new Ln,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new qt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(or,na,this.up):Jn.lookAt(na,or,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Jn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hh),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mp),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new C,Kn=new C,Bo=new C,Qn=new C,us=new C,ds=new C,Vh=new C,zo=new C,ko=new C,Ho=new C,Vo=new pe,Go=new pe,Wo=new pe,gi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Kn.subVectors(n,e),Bo.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(Kn),l=Rn.dot(Bo),c=Kn.dot(Kn),h=Kn.dot(Bo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Go,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Kn.subVectors(t,e),Rn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),zo.subVectors(t,n);let l=us.dot(zo),c=ds.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);let h=us.dot(ko),u=ds.dot(ko);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);Ho.subVectors(t,r);let f=us.dot(Ho),g=ds.dot(Ho);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ds,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Uc(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ie.fromWorkingColorSpace(Xe.copy(this),t),Math.round(je(Xe.r*255,0,255))*65536+Math.round(je(Xe.g*255,0,255))*256+Math.round(je(Xe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=qe){ie.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(ia);let n=vr(fi.h,ia.h,e),s=vr(fi.s,ia.s,e),r=vr(fi.l,ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Ht;Ht.NAMES=qu;var gp=0,ai=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ei(),this.name="",this.blending=Ss,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pe=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new C,sa=new Gt,Ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}};var Na=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},xp=0,xn=new te,qo=new De,fs=new C,un=new ri,lr=new ri,Oe=new C,Le=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Fa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(un.min,lr.min),un.expandByPoint(Oe),Oe.addVectors(un.max,lr.max),un.expandByPoint(Oe)):(un.expandByPoint(lr.min),un.expandByPoint(lr.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Oe.add(fs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;let c=new C,h=new C,u=new C,d=new Gt,f=new Gt,g=new Gt,x=new C,m=new C;function p(U,E,v){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[U].add(x),o[E].add(x),o[v].add(x),l[U].add(m),l[E].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,E=w.length;U<E;++U){let v=w[U],L=v.start,F=v.count;for(let H=L,$=L+F;H<$;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new C,b=new C,D=new C,R=new C;function I(U){D.fromBufferAttribute(s,U),R.copy(D);let E=o[U];_.copy(E),_.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(R,E);let L=b.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,L)}for(let U=0,E=w.length;U<E;++U){let v=w[U],L=v.start,F=v.count;for(let H=L,$=L+F;H<$;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new te,Ui=new br,ra=new yi,Wh=new C,aa=new C,oa=new C,la=new C,Yo=new C,ca=new C,Xh=new C,ha=new C,St=class extends De{constructor(t=new Le,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Yo.fromBufferAttribute(u,t),a?ca.addScaledVector(Yo,h):ca.addScaledVector(Yo.sub(e),h))}e.add(ca)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(ra.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ra,Wh)===null||Ui.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,D=_;b<D;b+=3){let R=o.getX(b),I=o.getX(b+1),U=o.getX(b+2);s=ua(this,p,t,n,c,h,u,R,I,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=ua(this,a,t,n,c,h,u,w,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,D=_;b<D;b+=3){let R=b,I=b+1,U=b+2;s=ua(this,p,t,n,c,h,u,R,I,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,_=m+1,b=m+2;s=ua(this,a,t,n,c,h,u,w,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _p(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hn,o),l===null)return null;ha.copy(o),ha.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ha);return c<e.near||c>e.far?null:{distance:c,point:ha.clone(),object:i}}function ua(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,aa),i.getVertexPosition(l,oa),i.getVertexPosition(c,la);let h=_p(i,t,e,n,aa,oa,la,Xh);if(h){let u=new C;gi.getBarycoord(Xh,aa,oa,la,u),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,u,new Gt)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,u,new Gt)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};gi.getNormal(aa,oa,la,d.normal),h.face=d,h.barycoord=u}return h}var Te=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(x,m,p,w,_,b,D,R,I,U,E){let v=b/I,L=D/U,F=b/2,H=D/2,$=R/2,Q=I+1,V=U+1,st=0,X=0,et=new C;for(let lt=0;lt<V;lt++){let Ct=lt*L-H;for(let zt=0;zt<Q;zt++){let Kt=zt*v-F;et[x]=Kt*w,et[m]=Ct*_,et[p]=$,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[p]=R>0?1:-1,h.push(et.x,et.y,et.z),u.push(zt/I),u.push(1-lt/U),st+=1}}for(let lt=0;lt<U;lt++)for(let Ct=0;Ct<I;Ct++){let zt=d+Ct+Q*lt,Kt=d+Ct+Q*(lt+1),J=d+(Ct+1)+Q*(lt+1),ot=d+(Ct+1)+Q*lt;l.push(zt,Kt,ot),l.push(Kt,J,ot),X+=6}o.addGroup(f,X,E),f+=X,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let s in n)t[s]=n[s]}return t}function vp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var yp={clone:Us,merge:Qe},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oa=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new C,qh=new Gt,Yh=new Gt,He=class extends Oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,$l=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new He(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new He(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new He(ps,ms,t,e);o.layers=this.layers,this.add(o);let l=new He(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new He(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends rn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zl=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Te(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:xi});r.uniforms.tEquirect.value=e;let a=new St(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=zn),new $l(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},$o=new C,Sp=new C,Ep=new qt,Cn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ep.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new yi,da=new C,Er=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+w).normalize(),n[3].setComponents(l-a,d-h,m-g,b-w).normalize(),n[4].setComponents(l-o,d-u,m-x,b-_).normalize(),e===ti)n[5].setComponents(l+o,d+u,m+x,b+_).normalize();else if(e===Pa)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*d-a;for(let _=0;_<c;_++){let b=_*u-r;g.push(b,-w,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let _=w+c*p,b=w+c*(p+1),D=w+1+c*(p+1),R=w+1+c*p;f.push(_,b,R),f.push(b,D,R)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Ip,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Qp,displacementmap_vertex:jp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:vm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:bm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Em,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Qm,opaque_fragment:jm,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:x0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:b0,uv_vertex:S0,worldpos_vertex:E0,background_vert:w0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:I0,depth_vert:P0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:k0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:K0,meshtoon_frag:Q0,points_vert:j0,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Bn={basic:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Qe([mt.common,mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Qe([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Bn.physical={uniforms:Qe([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var fa={r:0,b:0,g:0},Fi=new Vn,rg=new te;function ag(i,t,e,n,s,r,a){let o=new Ht(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function x(w){let _=!1,b=g(w);b===null?p(o,l):b&&b.isColor&&(p(b,1),_=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===eo)?(h===void 0&&(h=new St(new Te(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Us(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(_.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Fi)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==fe,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new St(new tn(2,2),new fn({name:"BackgroundMaterial",uniforms:Us(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,_){w.getRGB(fa,Yu(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m}}function og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,L,F,H,$){let Q=!1,V=u(H,F,L);r!==V&&(r=V,c(r.object)),Q=f(v,H,F,$),Q&&g(v,H,F,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(v,L,F,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,F){let H=F.wireframe===!0,$=n[v.id];$===void 0&&($={},n[v.id]=$);let Q=$[L.id];Q===void 0&&(Q={},$[L.id]=Q);let V=Q[H];return V===void 0&&(V=d(l()),Q[H]=V),V}function d(v){let L=[],F=[],H=[];for(let $=0;$<e;$++)L[$]=0,F[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,L,F,H){let $=r.attributes,Q=L.attributes,V=0,st=F.getAttributes();for(let X in st)if(st[X].location>=0){let lt=$[X],Ct=Q[X];if(Ct===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Ct=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Ct=v.instanceColor)),lt===void 0||lt.attribute!==Ct||Ct&&lt.data!==Ct.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function g(v,L,F,H){let $={},Q=L.attributes,V=0,st=F.getAttributes();for(let X in st)if(st[X].location>=0){let lt=Q[X];lt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));let Ct={};Ct.attribute=lt,lt&&lt.data&&(Ct.data=lt.data),$[X]=Ct,V++}r.attributes=$,r.attributesNum=V,r.index=H}function x(){let v=r.newAttributes;for(let L=0,F=v.length;L<F;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){let F=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;F[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),$[v]!==L&&(i.vertexAttribDivisor(v,L),$[v]=L)}function w(){let v=r.newAttributes,L=r.enabledAttributes;for(let F=0,H=L.length;F<H;F++)L[F]!==v[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function _(v,L,F,H,$,Q,V){V===!0?i.vertexAttribIPointer(v,L,F,$,Q):i.vertexAttribPointer(v,L,F,H,$,Q)}function b(v,L,F,H){x();let $=H.attributes,Q=F.getAttributes(),V=L.defaultAttributeValues;for(let st in Q){let X=Q[st];if(X.location>=0){let et=$[st];if(et===void 0&&(st==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),st==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let lt=et.normalized,Ct=et.itemSize,zt=t.get(et);if(zt===void 0)continue;let Kt=zt.buffer,J=zt.type,ot=zt.bytesPerElement,Rt=J===i.INT||J===i.UNSIGNED_INT||et.gpuType===Ac;if(et.isInterleavedBufferAttribute){let pt=et.data,Ut=pt.stride,Nt=et.offset;if(pt.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let kt=0;kt<X.locationSize;kt++)_(X.location+kt,Ct/X.locationSize,J,lt,Ut*ot,(Nt+Ct/X.locationSize*kt)*ot,Rt)}else{if(et.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt,et.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let pt=0;pt<X.locationSize;pt++)_(X.location+pt,Ct/X.locationSize,J,lt,Ct*ot,Ct/X.locationSize*pt*ot,Rt)}}else if(V!==void 0){let lt=V[st];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}w()}function D(){U();for(let v in n){let L=n[v];for(let F in L){let H=L[F];for(let $ in H)h(H[$].object),delete H[$];delete L[F]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let F in L){let H=L[F];for(let $ in H)h(H[$].object),delete H[$];delete L[F]}delete n[v.id]}function I(v){for(let L in n){let F=n[L];if(F[v.id]===void 0)continue;let H=F[v.id];for(let $ in H)h(H[$].object),delete H[$];delete F[v.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function lg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let U=I===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ii&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==kn&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:D,maxSamples:R}}function hg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Cn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,_=w*4,b=p.clippingState||null;l.value=b,b=h(g,d,_,f);for(let D=0;D!==_;++D)b[D]=e[D];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)a.copy(u[_]).applyMatrix4(w,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ug(i){let t=new WeakMap;function e(a,o){return o===pl?a.mapping=Rs:o===ml&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pl||o===ml)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Zl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var za=class extends Oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,$h=[.125,.215,.35,.446,.526,.582],ki=20,Zo=new za,Zh=new Ht,Jo=null,Ko=0,Qo=0,jo=!1,Bi=(1+Math.sqrt(5))/2,gs=1/Bi,Jh=[new C(-Bi,gs,0),new C(Bi,gs,0),new C(-gs,0,Bi),new C(gs,0,Bi),new C(0,Bi,-gs),new C(0,Bi,gs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Ko,Qo),this._renderer.xr.enabled=jo,t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Pr,format:Pn,colorSpace:Hs,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,t,e)}return s}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,s){let o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=_i,h.autoClear=!1;let f=new Pe({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new St(new Te,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Zh),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;pa(s,w*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(s-r-1)%Jh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],w=0;for(let I=0;I<ki;++I){let U=I/x,E=Math.exp(-U*U/2);p.push(E),I===0?w+=E:I<m&&(w+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],D=3*b*(s>_-bs?s-_+bs:0),R=4*(this._cubeSize-b);pa(e,D,R,3*b,2*b),l.setRenderTarget(e),l.render(u,Zo)}};function dg(i){let t=[],e=[],n=[],s=i,r=i-bs+1+$h.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=$h[a-i+bs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,U=R>2?0:-1,E=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];w.set(E,x*g*R),_.set(d,m*g*R);let v=[R,R,R,R,R,R];b.set(v,p*g*R)}let D=new Le;D.setAttribute("position",new Ve(w,x)),D.setAttribute("uv",new Ve(_,m)),D.setAttribute("faceIndex",new Ve(b,p)),t.push(D),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){let n=new si(i,t,e);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fg(i,t,e){let n=new Float32Array(ki),s=new C(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function jh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pl||l===ml,h=l===Rs||l===Cs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ns(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ns(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let _=0,b=w.length;_<b;_+=3){let D=w[_+0],R=w[_+1],I=w[_+2];d.push(D,R,R,I,I,D)}}else if(g!==void 0){let w=g.array;x=g.version;for(let _=0,b=w.length/3-1;_<b;_+=3){let D=_+0,R=_+1,I=_+2;d.push(D,R,R,I,I,D)}}else return;let m=new(Xu(d)?Fa:Na)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function xg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let b=o.attributes.position.count*_,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*D*4*u),I=new Ua(R,b,D,u);I.type=kn,I.needsUpdate=!0;let U=_*4;for(let v=0;v<u;v++){let L=m[v],F=p[v],H=w[v],$=b*D*4*v;for(let Q=0;Q<L.count;Q++){let V=Q*U;f===!0&&(s.fromBufferAttribute(L,Q),R[$+V+0]=s.x,R[$+V+1]=s.y,R[$+V+2]=s.z,R[$+V+3]=0),g===!0&&(s.fromBufferAttribute(F,Q),R[$+V+4]=s.x,R[$+V+5]=s.y,R[$+V+6]=s.z,R[$+V+7]=0),x===!0&&(s.fromBufferAttribute(H,Q),R[$+V+8]=s.x,R[$+V+9]=s.y,R[$+V+10]=s.z,R[$+V+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Gt(b,D)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ka=class extends rn{constructor(t,e,n,s,r,a,o,l,c,h=Es){if(h!==Es&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Gi),n===void 0&&h===Ls&&(n=Ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zu=new rn,tu=new ka(1,1),Ju=new Ua,Ku=new Yl,Qu=new Ba,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Ne(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Ne(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Ne(e,n)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=Wu,r=tu):r=Zu,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ku,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ju,s)}function kg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Ig;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Hg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gg(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yg(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function tx(i,t){i.uniform3uiv(this.addr,t)}function ex(i,t){i.uniform4uiv(this.addr,t)}function nx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zu,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ku,r[a])}function sx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function rx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ju,r[a])}function ax(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return Qg;case 36294:return jg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}},Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},Ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function au(i,t){i.seq.push(t),i.map[t.id]=t}function ox(i,t,e){let n=i.name,s=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),a=tl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){au(e,c===void 0?new Jl(o,i,t):new Kl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ql(o),au(e,u)),e=u}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ox(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,cx=0;function hx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lu=new qt;function ux(i){ie._getMatrix(lu,ie.workingColorSpace,i);let t=`mat3( ${lu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case no:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hx(i.getShaderSource(t),a)}else return s}function dx(i,t){let e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fx(i,t){let e;switch(t){case Ef:e="Linear";break;case wf:e="Reinhard";break;case Tf:e="Cineon";break;case Af:e="ACESFilmic";break;case Cf:e="AgX";break;case Tc:e="Neutral";break;case Rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ma=new C;function px(){ie.getLuminanceCoefficients(ma);let i=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xr(i){return i!==""}function hu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(_x,yx)}var vx=new Map;function yx(i,t){let e=Jt[t];if(e===void 0){let n=vx.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(Mx,bx)}function bx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ex(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Cs&&(t="ENVMAP_MODE_REFRACTION"),t}function Tx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case bf:t="ENVMAP_BLENDING_MIX";break;case Sf:t="ENVMAP_BLENDING_ADD";break}return t}function Ax(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Sx(e),c=Ex(e),h=wx(e),u=Tx(e),d=Ax(e),f=mx(e),g=gx(r),x=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Jt.tonemapping_pars_fragment:"",e.toneMapping!==_i?fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=jl(a),a=hu(a,e),a=uu(a,e),o=jl(o),o=hu(o,e),o=uu(o,e),a=du(a),o=du(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=w+m+a,b=w+p+o,D=ou(s,s.VERTEX_SHADER,_),R=ou(s,s.FRAGMENT_SHADER,b);s.attachShader(x,D),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(D).trim(),$=s.getShaderInfoLog(R).trim(),Q=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,R);else{let st=cu(s,D,"vertex"),X=cu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+st+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||$==="")&&(V=!1);V&&(L.diagnostics={runnable:Q,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(D),s.deleteShader(R),U=new Ts(s,x),E=xx(s,x)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,lx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}var Cx=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ec(t),e.set(t,n)),n}},ec=class{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}};function Ix(i,t,e,n,s,r,a){let o=new Sr,l=new tc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,L,F,H){let $=F.fog,Q=H.geometry,V=E.isMeshStandardMaterial?F.environment:null,st=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),X=st&&st.mapping===eo?st.image.height:null,et=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let lt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=lt!==void 0?lt.length:0,zt=0;Q.morphAttributes.position!==void 0&&(zt=1),Q.morphAttributes.normal!==void 0&&(zt=2),Q.morphAttributes.color!==void 0&&(zt=3);let Kt,J,ot,Rt;if(et){let he=Bn[et];Kt=he.vertexShader,J=he.fragmentShader}else Kt=E.vertexShader,J=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),Rt=l.getFragmentShaderID(E);let pt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,ne=!!E.map,jt=!!E.matcap,me=!!st,A=!!E.aoMap,Ot=!!E.lightMap,Et=!!E.bumpMap,vt=!!E.normalMap,at=!!E.displacementMap,Bt=!!E.emissiveMap,ft=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,W=E.clearcoat>0,j=E.dispersion>0,nt=E.iridescence>0,M=E.sheen>0,P=E.transmission>0,O=y&&!!E.anisotropyMap,B=W&&!!E.clearcoatMap,it=W&&!!E.clearcoatNormalMap,G=W&&!!E.clearcoatRoughnessMap,K=nt&&!!E.iridescenceMap,rt=nt&&!!E.iridescenceThicknessMap,dt=M&&!!E.sheenColorMap,ut=M&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,wt=!!E.specularColorMap,yt=!!E.specularIntensityMap,N=P&&!!E.transmissionMap,ct=P&&!!E.thicknessMap,Z=!!E.gradientMap,tt=!!E.alphaMap,_t=E.alphaTest>0,Mt=!!E.alphaHash,Wt=!!E.extensions,ge=_i;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Ge={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:J,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:Rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Hs,alphaToCoverage:!!E.alphaToCoverage,map:ne,matcap:jt,envMap:me,envMapMode:me&&st.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:Ot,bumpMap:Et,normalMap:vt,displacementMap:d&&at,emissiveMap:Bt,normalMapObjectSpace:vt&&E.normalMapType===Df,normalMapTangentSpace:vt&&E.normalMapType===Gu,metalnessMap:ft,roughnessMap:T,anisotropy:y,anisotropyMap:O,clearcoat:W,clearcoatMap:B,clearcoatNormalMap:it,clearcoatRoughnessMap:G,dispersion:j,iridescence:nt,iridescenceMap:K,iridescenceThicknessMap:rt,sheen:M,sheenColorMap:dt,sheenRoughnessMap:ut,specularMap:Vt,specularColorMap:wt,specularIntensityMap:yt,transmission:P,transmissionMap:N,thicknessMap:ct,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Ss&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:Mt,combine:E.combine,mapUv:ne&&x(E.map.channel),aoMapUv:A&&x(E.aoMap.channel),lightMapUv:Ot&&x(E.lightMap.channel),bumpMapUv:Et&&x(E.bumpMap.channel),normalMapUv:vt&&x(E.normalMap.channel),displacementMapUv:at&&x(E.displacementMap.channel),emissiveMapUv:Bt&&x(E.emissiveMap.channel),metalnessMapUv:ft&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:O&&x(E.anisotropyMap.channel),clearcoatMapUv:B&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(E.sheenRoughnessMap.channel),specularMapUv:Vt&&x(E.specularMap.channel),specularColorMapUv:wt&&x(E.specularColorMap.channel),specularIntensityMapUv:yt&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:ct&&x(E.thicknessMap.channel),alphaMapUv:tt&&x(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(ne||tt),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:zt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===fe,decodeVideoTextureEmissive:Bt&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ye,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(E){let v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)v.push(L),v.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(w(v,E),_(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function w(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function _(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){let v=g[E.type],L;if(v){let F=Bn[v];L=yp.clone(F.uniforms)}else L=E.uniforms;return L}function D(E,v){let L;for(let F=0,H=h.length;F<H;F++){let $=h[F];if($.cacheKey===v){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Rx(i,v,E,r),h.push(L)),L}function R(E){if(--E.usedTimes===0){let v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:U}}function Px(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Lx),n.length>1&&n.sort(d||pu),s.length>1&&s.sort(d||pu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mu,i.set(n,[a])):s>=r.length?(a=new mu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ht};break;case"SpotLight":e={position:new C,direction:new C,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fx=0;function Ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bx(i){let t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,_=0,b=0,D=0,R=0,I=0;c.sort(Ox);for(let E=0,v=c.length;E<v;E++){let L=c[E],F=L.color,H=L.intensity,$=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H,u+=F.g*H,d+=F.b*H;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],H);I++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,X=e.get(L);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=V,f++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(H),V.distance=$,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let st=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,st.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=st.matrix,L.castShadow){let X=e.get(L);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Q,b++}x++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(F).multiplyScalar(H),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let st=L.shadow,X=e.get(L);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=V,g++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(H),V.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==_||U.numSpotShadows!==b||U.numSpotMaps!==D||U.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=_,U.numSpotShadows=b,U.numSpotMaps=D,U.numLightProbes=I,n.version=Fx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let _=c[p];if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(_.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function gu(i){let t=new Bx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function zx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gu(i),t.set(s,[o])):r>=a.length?(o=new gu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nc=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ic=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vx(i,t,e){let n=new Er,s=new Gt,r=new Gt,a=new pe,o=new nc({depthPacking:Lf}),l=new ic,c={},h=e.maxTextureSize,u={[Hn]:Be,[Be]:Hn,[Ye]:Ye},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let p=this.type;this.render=function(R,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==jn&&this.type===jn,$=p===jn&&this.type!==jn;for(let Q=0,V=R.length;Q<V;Q++){let st=R[Q],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let et=X.getFrameExtents();if(s.multiply(et),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,X.mapSize.y=r.y)),X.map===null||H===!0||$===!0){let Ct=this.type!==jn?{minFilter:dn,magFilter:dn}:{};X.map!==null&&X.map.dispose(),X.map=new si(s.x,s.y,Ct),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let lt=X.getViewportCount();for(let Ct=0;Ct<lt;Ct++){let zt=X.getViewport(Ct);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),F.viewport(a),X.updateMatrices(st,Ct),n=X.getFrustum(),b(I,U,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&w(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,L)};function w(R,I){let U=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,U,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,U,f,x,null)}function _(R,I,U,E){let v=null,L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)v=L;else if(v=U.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=v.uuid,H=I.uuid,$=c[F];$===void 0&&($={},c[F]=$);let Q=$[H];Q===void 0&&(Q=v.clone(),$[H]=Q,I.addEventListener("dispose",D)),v=Q}if(v.visible=I.visible,v.wireframe=I.wireframe,E===jn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=U}return v}function b(R,I,U,E,v){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let H=t.update(R),$=R.material;if(Array.isArray($)){let Q=H.groups;for(let V=0,st=Q.length;V<st;V++){let X=Q[V],et=$[X.materialIndex];if(et&&et.visible){let lt=_(R,et,E,v);R.onBeforeShadow(i,R,I,U,H,lt,X),i.renderBufferDirect(U,null,H,lt,R,X),R.onAfterShadow(i,R,I,U,H,lt,X)}}}else if($.visible){let Q=_(R,$,E,v);R.onBeforeShadow(i,R,I,U,H,Q,null),i.renderBufferDirect(U,null,H,Q,R,null),R.onAfterShadow(i,R,I,U,H,Q,null)}}let F=R.children;for(let H=0,$=F.length;H<$;H++)b(F[H],I,U,E,v)}function D(R){R.target.removeEventListener("dispose",D);for(let U in c){let E=c[U],v=R.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}var Gx={[ol]:ll,[cl]:dl,[hl]:fl,[As]:ul,[ll]:ol,[dl]:cl,[fl]:hl,[ul]:As};function Wx(i,t){function e(){let N=!1,ct=new pe,Z=null,tt=new pe(0,0,0,0);return{setMask:function(_t){Z!==_t&&!N&&(i.colorMask(_t,_t,_t,_t),Z=_t)},setLocked:function(_t){N=_t},setClear:function(_t,Mt,Wt,ge,Ge){Ge===!0&&(_t*=ge,Mt*=ge,Wt*=ge),ct.set(_t,Mt,Wt,ge),tt.equals(ct)===!1&&(i.clearColor(_t,Mt,Wt,ge),tt.copy(ct))},reset:function(){N=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,Z=null,tt=null,_t=null;return{setReversed:function(Mt){if(ct!==Mt){let Wt=t.get("EXT_clip_control");ct?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let ge=_t;_t=null,this.setClear(ge)}ct=Mt},getReversed:function(){return ct},setTest:function(Mt){Mt?pt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!N&&(i.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(ct&&(Mt=Gx[Mt]),tt!==Mt){switch(Mt){case ol:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){_t!==Mt&&(ct&&(Mt=1-Mt),i.clearDepth(Mt),_t=Mt)},reset:function(){N=!1,Z=null,tt=null,_t=null,ct=!1}}}function s(){let N=!1,ct=null,Z=null,tt=null,_t=null,Mt=null,Wt=null,ge=null,Ge=null;return{setTest:function(he){N||(he?pt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(he){ct!==he&&!N&&(i.stencilMask(he),ct=he)},setFunc:function(he,En,qn){(Z!==he||tt!==En||_t!==qn)&&(i.stencilFunc(he,En,qn),Z=he,tt=En,_t=qn)},setOp:function(he,En,qn){(Mt!==he||Wt!==En||ge!==qn)&&(i.stencilOp(he,En,qn),Mt=he,Wt=En,ge=qn)},setLocked:function(he){N=he},setClear:function(he){Ge!==he&&(i.clearStencil(he),Ge=he)},reset:function(){N=!1,ct=null,Z=null,tt=null,_t=null,Mt=null,Wt=null,ge=null,Ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,b=null,D=null,R=null,I=new Ht(0,0,0),U=0,E=!1,v=null,L=null,F=null,H=null,$=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,st=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=st>=2);let et=null,lt={},Ct=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Kt=new pe().fromArray(Ct),J=new pe().fromArray(zt);function ot(N,ct,Z,tt){let _t=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(N,Mt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Z;Wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ct+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return Mt}let Rt={};Rt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(As),Et(!1),vt(yh),pt(i.CULL_FACE),A(xi);function pt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ut(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Nt(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function kt(N,ct){let Z=f,tt=!1;if(N){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));let _t=N.textures;if(Z.length!==_t.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Wt=_t.length;Mt<Wt;Mt++)Z[Mt]=i.COLOR_ATTACHMENT0+Mt;Z.length=_t.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function ne(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let jt={[zi]:i.FUNC_ADD,[rf]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};jt[of]=i.MIN,jt[lf]=i.MAX;let me={[cf]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[xf]:i.SRC_ALPHA_SATURATE,[mf]:i.DST_COLOR,[ff]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[gf]:i.ONE_MINUS_DST_COLOR,[pf]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function A(N,ct,Z,tt,_t,Mt,Wt,ge,Ge,he){if(N===xi){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),N!==sf){if(N!==m||he!==E){if((p!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,b=zi),he)switch(N){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,_=null,D=null,R=null,I.set(0,0,0),U=0,m=N,E=he}return}_t=_t||ct,Mt=Mt||Z,Wt=Wt||tt,(ct!==p||_t!==b)&&(i.blendEquationSeparate(jt[ct],jt[_t]),p=ct,b=_t),(Z!==w||tt!==_||Mt!==D||Wt!==R)&&(i.blendFuncSeparate(me[Z],me[tt],me[Mt],me[Wt]),w=Z,_=tt,D=Mt,R=Wt),(ge.equals(I)===!1||Ge!==U)&&(i.blendColor(ge.r,ge.g,ge.b,Ge),I.copy(ge),U=Ge),m=N,E=!1}function Ot(N,ct){N.side===Ye?Ut(i.CULL_FACE):pt(i.CULL_FACE);let Z=N.side===Be;ct&&(Z=!Z),Et(Z),N.blending===Ss&&N.transparent===!1?A(xi):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;o.setTest(tt),tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function vt(N){N!==ef?(pt(i.CULL_FACE),N!==L&&(N===yh?i.cullFace(i.BACK):N===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),L=N}function at(N){N!==F&&(V&&i.lineWidth(N),F=N)}function Bt(N,ct,Z){N?(pt(i.POLYGON_OFFSET_FILL),(H!==ct||$!==Z)&&(i.polygonOffset(ct,Z),H=ct,$=Z)):Ut(i.POLYGON_OFFSET_FILL)}function ft(N){N?pt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+Q-1),et!==N&&(i.activeTexture(N),et=N)}function y(N,ct,Z){Z===void 0&&(et===null?Z=i.TEXTURE0+Q-1:Z=et);let tt=lt[Z];tt===void 0&&(tt={type:void 0,texture:void 0},lt[Z]=tt),(tt.type!==N||tt.texture!==ct)&&(et!==Z&&(i.activeTexture(Z),et=Z),i.bindTexture(N,ct||Rt[N]),tt.type=N,tt.texture=ct)}function W(){let N=lt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function M(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(N){Kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Kt.copy(N))}function ut(N){J.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function Vt(N,ct){let Z=c.get(ct);Z===void 0&&(Z=new WeakMap,c.set(ct,Z));let tt=Z.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(ct,N.name),Z.set(N,tt))}function wt(N,ct){let tt=c.get(ct).get(N);l.get(ct)!==tt&&(i.uniformBlockBinding(ct,tt,N.__bindingPointIndex),l.set(ct,tt))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,lt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,b=null,D=null,R=null,I=new Ht(0,0,0),U=0,E=!1,v=null,L=null,F=null,H=null,$=null,Kt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Ut,bindFramebuffer:Nt,drawBuffers:kt,useProgram:ne,setBlending:A,setMaterial:Ot,setFlipSided:Et,setCullFace:vt,setLineWidth:at,setPolygonOffset:Bt,setScissorTest:ft,activeTexture:T,bindTexture:y,unbindTexture:W,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:K,texImage3D:rt,updateUBOMapping:Vt,uniformBlockBinding:wt,texStorage2D:it,texStorage3D:G,texSubImage2D:M,texSubImage3D:P,compressedTexSubImage2D:O,compressedTexSubImage3D:B,scissor:dt,viewport:ut,reset:yt}}function xu(i,t,e,n){let s=Xx(n);switch(e){case Ou:return i*t;case zu:return i*t;case ku:return i*t*2;case Ic:return i*t/s.components*s.byteLength;case Pc:return i*t/s.components*s.byteLength;case Hu:return i*t*2/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case Bu:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case Dc:return i*t*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case vl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Aa:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vu:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xx(i){switch(i){case ii:case Uu:return{byteLength:1,components:1};case Mr:case Nu:case Pr:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case Gi:case Ac:case kn:return{byteLength:4,components:1};case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):La("canvas")}function x(T,y,W){let j=1,nt=ft(T);if((nt.width>W||nt.height>W)&&(j=W/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let M=Math.floor(j*nt.width),P=Math.floor(j*nt.height);u===void 0&&(u=g(M,P));let O=y?g(M,P):u;return O.width=M,O.height=P,O.getContext("2d").drawImage(T,0,0,M,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+M+"x"+P+")."),O}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,y,W,j,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let M=y;if(y===i.RED&&(W===i.FLOAT&&(M=i.R32F),W===i.HALF_FLOAT&&(M=i.R16F),W===i.UNSIGNED_BYTE&&(M=i.R8)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(M=i.R8UI),W===i.UNSIGNED_SHORT&&(M=i.R16UI),W===i.UNSIGNED_INT&&(M=i.R32UI),W===i.BYTE&&(M=i.R8I),W===i.SHORT&&(M=i.R16I),W===i.INT&&(M=i.R32I)),y===i.RG&&(W===i.FLOAT&&(M=i.RG32F),W===i.HALF_FLOAT&&(M=i.RG16F),W===i.UNSIGNED_BYTE&&(M=i.RG8)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(M=i.RG8UI),W===i.UNSIGNED_SHORT&&(M=i.RG16UI),W===i.UNSIGNED_INT&&(M=i.RG32UI),W===i.BYTE&&(M=i.RG8I),W===i.SHORT&&(M=i.RG16I),W===i.INT&&(M=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(M=i.RGB8UI),W===i.UNSIGNED_SHORT&&(M=i.RGB16UI),W===i.UNSIGNED_INT&&(M=i.RGB32UI),W===i.BYTE&&(M=i.RGB8I),W===i.SHORT&&(M=i.RGB16I),W===i.INT&&(M=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(M=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(M=i.RGBA16UI),W===i.UNSIGNED_INT&&(M=i.RGBA32UI),W===i.BYTE&&(M=i.RGBA8I),W===i.SHORT&&(M=i.RGBA16I),W===i.INT&&(M=i.RGBA32I)),y===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(M=i.RGB9_E5),y===i.RGBA){let P=nt?no:ie.getTransfer(j);W===i.FLOAT&&(M=i.RGBA32F),W===i.HALF_FLOAT&&(M=i.RGBA16F),W===i.UNSIGNED_BYTE&&(M=P===fe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(M=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(M=i.RGB5_A1)}return(M===i.R16F||M===i.R32F||M===i.RG16F||M===i.RG32F||M===i.RGBA16F||M===i.RGBA32F)&&t.get("EXT_color_buffer_float"),M}function b(T,y){let W;return T?y===null||y===Gi||y===Ps?W=i.DEPTH24_STENCIL8:y===kn?W=i.DEPTH32F_STENCIL8:y===Mr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Ps?W=i.DEPTH_COMPONENT24:y===kn?W=i.DEPTH_COMPONENT32F:y===Mr&&(W=i.DEPTH_COMPONENT16),W}function D(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){let y=T.target;y.removeEventListener("dispose",R),U(y),y.isVideoTexture&&h.delete(y)}function I(T){let y=T.target;y.removeEventListener("dispose",I),v(y)}function U(T){let y=n.get(T);if(y.__webglInit===void 0)return;let W=T.source,j=d.get(W);if(j){let nt=j[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(W)}n.remove(T)}function E(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let W=T.source,j=d.get(W);delete j[y.__cacheKey],a.memory.textures--}function v(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let nt=0;nt<y.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=T.textures;for(let j=0,nt=W.length;j<nt;j++){let M=n.get(W[j]);M.__webglTexture&&(i.deleteTexture(M.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(T)}let L=0;function F(){L=0}function H(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function $(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Q(T,y){let W=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,T,y);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function V(T,y){let W=n.get(T);if(T.version>0&&W.__version!==T.version){J(W,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function st(T,y){let W=n.get(T);if(T.version>0&&W.__version!==T.version){J(W,T,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function X(T,y){let W=n.get(T);if(T.version>0&&W.__version!==T.version){ot(W,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let et={[Is]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},lt={[dn]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ct={[Uf]:i.NEVER,[kf]:i.ALWAYS,[Nf]:i.LESS,[Wu]:i.LEQUAL,[Ff]:i.EQUAL,[zf]:i.GEQUAL,[Of]:i.GREATER,[Bf]:i.NOTEQUAL};function zt(T,y){if(y.type===kn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===Ao||y.magFilter===Zr||y.magFilter===Vi||y.minFilter===zn||y.minFilter===Ao||y.minFilter===Zr||y.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==Zr&&y.minFilter!==Vi||y.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(T,y){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));let j=y.source,nt=d.get(j);nt===void 0&&(nt={},d.set(j,nt));let M=$(y);if(M!==T.__cacheKey){nt[M]===void 0&&(nt[M]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[M].usedTimes++;let P=nt[T.__cacheKey];P!==void 0&&(nt[T.__cacheKey].usedTimes--,P.usedTimes===0&&E(y)),T.__cacheKey=M,T.__webglTexture=nt[M].texture}return W}function J(T,y,W){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Kt(T,y),M=y.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+W);let P=n.get(M);if(M.version!==P.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);let O=ie.getPrimaries(ie.workingColorSpace),B=y.colorSpace===mi?null:ie.getPrimaries(y.colorSpace),it=y.colorSpace===mi||O===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let G=x(y.image,!1,s.maxTextureSize);G=Bt(y,G);let K=r.convert(y.format,y.colorSpace),rt=r.convert(y.type),dt=_(y.internalFormat,K,rt,y.colorSpace,y.isVideoTexture);zt(j,y);let ut,Vt=y.mipmaps,wt=y.isVideoTexture!==!0,yt=P.__version===void 0||nt===!0,N=M.dataReady,ct=D(y,G);if(y.isDepthTexture)dt=b(y.format===Ls,y.type),yt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,dt,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,dt,G.width,G.height,0,K,rt,null));else if(y.isDataTexture)if(Vt.length>0){wt&&yt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,Vt[0].width,Vt[0].height);for(let Z=0,tt=Vt.length;Z<tt;Z++)ut=Vt[Z],wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,K,rt,ut.data):e.texImage2D(i.TEXTURE_2D,Z,dt,ut.width,ut.height,0,K,rt,ut.data);y.generateMipmaps=!1}else wt?(yt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,G.width,G.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,K,rt,G.data)):e.texImage2D(i.TEXTURE_2D,0,dt,G.width,G.height,0,K,rt,G.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){wt&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,dt,Vt[0].width,Vt[0].height,G.depth);for(let Z=0,tt=Vt.length;Z<tt;Z++)if(ut=Vt[Z],y.format!==Pn)if(K!==null)if(wt){if(N)if(y.layerUpdates.size>0){let _t=xu(ut.width,ut.height,y.format,y.type);for(let Mt of y.layerUpdates){let Wt=ut.data.subarray(Mt*_t/ut.data.BYTES_PER_ELEMENT,(Mt+1)*_t/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Mt,ut.width,ut.height,1,K,Wt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,G.depth,K,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,dt,ut.width,ut.height,G.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,G.depth,K,rt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,dt,ut.width,ut.height,G.depth,0,K,rt,ut.data)}else{wt&&yt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,Vt[0].width,Vt[0].height);for(let Z=0,tt=Vt.length;Z<tt;Z++)ut=Vt[Z],y.format!==Pn?K!==null?wt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,K,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,K,rt,ut.data):e.texImage2D(i.TEXTURE_2D,Z,dt,ut.width,ut.height,0,K,rt,ut.data)}else if(y.isDataArrayTexture)if(wt){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,dt,G.width,G.height,G.depth),N)if(y.layerUpdates.size>0){let Z=xu(G.width,G.height,y.format,y.type);for(let tt of y.layerUpdates){let _t=G.data.subarray(tt*Z/G.data.BYTES_PER_ELEMENT,(tt+1)*Z/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,G.width,G.height,1,K,rt,_t)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,K,rt,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,G.width,G.height,G.depth,0,K,rt,G.data);else if(y.isData3DTexture)wt?(yt&&e.texStorage3D(i.TEXTURE_3D,ct,dt,G.width,G.height,G.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,K,rt,G.data)):e.texImage3D(i.TEXTURE_3D,0,dt,G.width,G.height,G.depth,0,K,rt,G.data);else if(y.isFramebufferTexture){if(yt)if(wt)e.texStorage2D(i.TEXTURE_2D,ct,dt,G.width,G.height);else{let Z=G.width,tt=G.height;for(let _t=0;_t<ct;_t++)e.texImage2D(i.TEXTURE_2D,_t,dt,Z,tt,0,K,rt,null),Z>>=1,tt>>=1}}else if(Vt.length>0){if(wt&&yt){let Z=ft(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ct,dt,Z.width,Z.height)}for(let Z=0,tt=Vt.length;Z<tt;Z++)ut=Vt[Z],wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,K,rt,ut):e.texImage2D(i.TEXTURE_2D,Z,dt,K,rt,ut);y.generateMipmaps=!1}else if(wt){if(yt){let Z=ft(G);e.texStorage2D(i.TEXTURE_2D,ct,dt,Z.width,Z.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,rt,G)}else e.texImage2D(i.TEXTURE_2D,0,dt,K,rt,G);m(y)&&p(j),P.__version=M.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ot(T,y,W){if(y.image.length!==6)return;let j=Kt(T,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let M=n.get(nt);if(nt.version!==M.__version||j===!0){e.activeTexture(i.TEXTURE0+W);let P=ie.getPrimaries(ie.workingColorSpace),O=y.colorSpace===mi?null:ie.getPrimaries(y.colorSpace),B=y.colorSpace===mi||P===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let it=y.isCompressedTexture||y.image[0].isCompressedTexture,G=y.image[0]&&y.image[0].isDataTexture,K=[];for(let tt=0;tt<6;tt++)!it&&!G?K[tt]=x(y.image[tt],!0,s.maxCubemapSize):K[tt]=G?y.image[tt].image:y.image[tt],K[tt]=Bt(y,K[tt]);let rt=K[0],dt=r.convert(y.format,y.colorSpace),ut=r.convert(y.type),Vt=_(y.internalFormat,dt,ut,y.colorSpace),wt=y.isVideoTexture!==!0,yt=M.__version===void 0||j===!0,N=nt.dataReady,ct=D(y,rt);zt(i.TEXTURE_CUBE_MAP,y);let Z;if(it){wt&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Vt,rt.width,rt.height);for(let tt=0;tt<6;tt++){Z=K[tt].mipmaps;for(let _t=0;_t<Z.length;_t++){let Mt=Z[_t];y.format!==Pn?dt!==null?wt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,Mt.width,Mt.height,dt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Vt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,Mt.width,Mt.height,dt,ut,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Vt,Mt.width,Mt.height,0,dt,ut,Mt.data)}}}else{if(Z=y.mipmaps,wt&&yt){Z.length>0&&ct++;let tt=ft(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(G){wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,K[tt].width,K[tt].height,dt,ut,K[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,K[tt].width,K[tt].height,0,dt,ut,K[tt].data);for(let _t=0;_t<Z.length;_t++){let Wt=Z[_t].image[tt].image;wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Wt.width,Wt.height,dt,ut,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Vt,Wt.width,Wt.height,0,dt,ut,Wt.data)}}else{wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,dt,ut,K[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,dt,ut,K[tt]);for(let _t=0;_t<Z.length;_t++){let Mt=Z[_t];wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,dt,ut,Mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Vt,dt,ut,Mt.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),M.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Rt(T,y,W,j,nt,M){let P=r.convert(W.format,W.colorSpace),O=r.convert(W.type),B=_(W.internalFormat,P,O,W.colorSpace),it=n.get(y),G=n.get(W);if(G.__renderTarget=y,!it.__hasExternalTextures){let K=Math.max(1,y.width>>M),rt=Math.max(1,y.height>>M);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,M,B,K,rt,y.depth,0,P,O,null):e.texImage2D(nt,M,B,K,rt,0,P,O,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,G.__webglTexture,0,Et(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,G.__webglTexture,M),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let j=y.depthTexture,nt=j&&j.isDepthTexture?j.type:null,M=b(y.stencilBuffer,nt),P=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=Et(y);vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,M,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,M,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,M,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,T)}else{let j=y.textures;for(let nt=0;nt<j.length;nt++){let M=j[nt],P=r.convert(M.format,M.colorSpace),O=r.convert(M.type),B=_(M.internalFormat,P,O,M.colorSpace),it=Et(y);W&&vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,B,y.width,y.height):vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,B,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,B,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);let nt=j.__webglTexture,M=Et(y);if(y.depthTexture.format===Es)vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Ls)vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Nt(T){let y=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=j}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ut(y.__webglFramebuffer,T)}else if(W){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[j],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,M=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,M),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,M)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,y,W){let j=n.get(T);y!==void 0&&Rt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Nt(T)}function ne(T){let y=T.texture,W=n.get(T),j=n.get(y);T.addEventListener("dispose",I);let nt=T.textures,M=T.isWebGLCubeRenderTarget===!0,P=nt.length>1;if(P||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,a.memory.textures++),M){W.__webglFramebuffer=[];for(let O=0;O<6;O++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[O]=[];for(let B=0;B<y.mipmaps.length;B++)W.__webglFramebuffer[O][B]=i.createFramebuffer()}else W.__webglFramebuffer[O]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let O=0;O<y.mipmaps.length;O++)W.__webglFramebuffer[O]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(P)for(let O=0,B=nt.length;O<B;O++){let it=n.get(nt[O]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&vt(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let O=0;O<nt.length;O++){let B=nt[O];W.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[O]);let it=r.convert(B.format,B.colorSpace),G=r.convert(B.type),K=_(B.internalFormat,it,G,B.colorSpace,T.isXRRenderTarget===!0),rt=Et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,K,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,W.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(M){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,y);for(let O=0;O<6;O++)if(y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)Rt(W.__webglFramebuffer[O][B],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,B);else Rt(W.__webglFramebuffer[O],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(P){for(let O=0,B=nt.length;O<B;O++){let it=nt[O],G=n.get(it);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),zt(i.TEXTURE_2D,it),Rt(W.__webglFramebuffer,T,it,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),m(it)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let O=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(O=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,j.__webglTexture),zt(O,y),y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)Rt(W.__webglFramebuffer[B],T,y,i.COLOR_ATTACHMENT0,O,B);else Rt(W.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,O,0);m(y)&&p(O),e.unbindTexture()}T.depthBuffer&&Nt(T)}function jt(T){let y=T.textures;for(let W=0,j=y.length;W<j;W++){let nt=y[W];if(m(nt)){let M=w(T),P=n.get(nt).__webglTexture;e.bindTexture(M,P),p(M),e.unbindTexture()}}}let me=[],A=[];function Ot(T){if(T.samples>0){if(vt(T)===!1){let y=T.textures,W=T.width,j=T.height,nt=i.COLOR_BUFFER_BIT,M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=n.get(T),O=y.length>1;if(O)for(let B=0;B<y.length;B++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let B=0;B<y.length;B++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,P.__webglColorRenderbuffer[B]);let it=n.get(y[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,nt,i.NEAREST),l===!0&&(me.length=0,A.length=0,me.push(i.COLOR_ATTACHMENT0+B),T.depthBuffer&&T.resolveDepthBuffer===!1&&(me.push(M),A.push(M),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let B=0;B<y.length;B++){e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,P.__webglColorRenderbuffer[B]);let it=n.get(y[B]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Et(T){return Math.min(s.maxSamples,T.samples)}function vt(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Bt(T,y){let W=T.colorSpace,j=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==Hs&&W!==mi&&(ie.getTransfer(W)===fe?(j!==Pn||nt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function ft(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=vt}function Yx(i,t){function e(n,s=mi){let r,a=ie.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===Bu)return i.RGB;if(n===Pn)return i.RGBA;if(n===zu)return i.LUMINANCE;if(n===ku)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===Hu)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===Sa||n===Ea||n===wa||n===Ta)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===_l||n===vl||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Bl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===kl||n===Hl||n===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sc=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},$x={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($x)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new rc,m=e.getContextAttributes(),p=null,w=null,_=[],b=[],D=new Gt,R=null,I=new He;I.viewport=new pe;let U=new He;U.viewport=new pe;let E=[I,U],v=new sc,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=_[J];return ot===void 0&&(ot=new yr,_[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=_[J];return ot===void 0&&(ot=new yr,_[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=_[J];return ot===void 0&&(ot=new yr,_[J]=ot),ot.getHandSpace()};function H(J){let ot=b.indexOf(J.inputSource);if(ot===-1)return;let Rt=_[ot];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,c||a),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<_.length;J++){let ot=b[J];ot!==null&&(b[J]=null,_[J].disconnect(ot))}L=null,F=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new si(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Rt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ls:Es,Rt=m.stencil?Ps:Gi);let Ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new si(d.textureWidth,d.textureHeight,{format:Pn,type:ii,depthTexture:new ka(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(J){for(let ot=0;ot<J.removed.length;ot++){let Rt=J.removed[ot],pt=b.indexOf(Rt);pt>=0&&(b[pt]=null,_[pt].disconnect(Rt))}for(let ot=0;ot<J.added.length;ot++){let Rt=J.added[ot],pt=b.indexOf(Rt);if(pt===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=b.length){b.push(Rt),pt=Nt;break}else if(b[Nt]===null){b[Nt]=Rt,pt=Nt;break}if(pt===-1)break}let Ut=_[pt];Ut&&Ut.connect(Rt)}}let V=new C,st=new C;function X(J,ot,Rt){V.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(Rt.matrixWorld);let pt=V.distanceTo(st),Ut=ot.projectionMatrix.elements,Nt=Rt.projectionMatrix.elements,kt=Ut[14]/(Ut[10]-1),ne=Ut[14]/(Ut[10]+1),jt=(Ut[9]+1)/Ut[5],me=(Ut[9]-1)/Ut[5],A=(Ut[8]-1)/Ut[0],Ot=(Nt[8]+1)/Nt[0],Et=kt*A,vt=kt*Ot,at=pt/(-A+Ot),Bt=at*-A;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Bt),J.translateZ(at),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ut[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let ft=kt+at,T=ne+at,y=Et-Bt,W=vt+(pt-Bt),j=jt*ne/T*ft,nt=me*ne/T*ft;J.projectionMatrix.makePerspective(y,W,j,nt,ft,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function et(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ot=J.near,Rt=J.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),v.near=U.near=I.near=ot,v.far=U.far=I.far=Rt,(L!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,F=v.far),I.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,v.layers.mask=I.layers.mask|U.layers.mask;let pt=J.parent,Ut=v.cameras;et(v,pt);for(let Nt=0;Nt<Ut.length;Nt++)et(Ut[Nt],pt);Ut.length===2?X(v,I,U):v.projectionMatrix.copy(I.projectionMatrix),lt(J,v,pt)};function lt(J,ot,Rt){Rt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Ct=null;function zt(J,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let pt=!1;Rt.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let Nt=0;Nt<Rt.length;Nt++){let kt=Rt[Nt],ne=null;if(f!==null)ne=f.getViewport(kt);else{let me=u.getViewSubImage(d,kt);ne=me.viewport,Nt===0&&(t.setRenderTargetTextures(w,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(w))}let jt=E[Nt];jt===void 0&&(jt=new He,jt.layers.enable(Nt),jt.viewport=new pe,E[Nt]=jt),jt.matrix.fromArray(kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ne.x,ne.y,ne.width,ne.height),Nt===0&&(v.matrix.copy(jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(jt)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Nt=u.getDepthInformation(Rt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let Rt=0;Rt<_.length;Rt++){let pt=b[Rt],Ut=_[Rt];pt!==null&&Ut!==void 0&&Ut.update(pt,ot,c||a)}Ct&&Ct(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let Kt=new $u;Kt.setAnimationLoop(zt),this.setAnimationLoop=function(J){Ct=J},this.dispose=function(){}}},Oi=new Vn,Kx=new te;function Qx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),_=w.envMap,b=w.envMapRotation;_&&(m.envMap.value=_,Oi.copy(b),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Oi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){let b=_.program;n.uniformBlockBinding(w,b)}function c(w,_){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",m));let D=_.program;n.updateUBOMapping(w,D);let R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){let _=u();w.__bindingPointIndex=_;let b=i.createBuffer(),D=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let _=s[w.id],b=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,I=b.length;R<I;R++){let U=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,v=U.length;E<v;E++){let L=U[E];if(f(L,R,E,D)===!0){let F=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],$=0;for(let Q=0;Q<H.length;Q++){let V=H[Q],st=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+$,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,$),$+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,_,b,D){let R=w.value,I=_+"_"+b;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{let U=D[I];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return D[I]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(w){let _=w.uniforms,b=0,D=16;for(let I=0,U=_.length;I<U;I++){let E=Array.isArray(_[I])?_[I]:[_[I]];for(let v=0,L=E.length;v<L;v++){let F=E[v],H=Array.isArray(F.value)?F.value:[F.value];for(let $=0,Q=H.length;$<Q;$++){let V=H[$],st=x(V),X=b%D,et=X%st.boundary,lt=X+et;b+=et,lt!==0&&D-lt<st.storage&&(b+=D-lt),F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=st.storage}}}let R=b%D;return R>0&&(b+=D-R),w.__size=b,w.__cache={},this}function x(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){let _=w.target;_.removeEventListener("dispose",m);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ha=class{constructor(t={}){let{canvas:e=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=_i,this.toneMappingExposure=1;let b=this,D=!1,R=0,I=0,U=null,E=-1,v=null,L=new pe,F=new pe,H=null,$=new Ht(0),Q=0,V=e.width,st=e.height,X=1,et=null,lt=null,Ct=new pe(0,0,V,st),zt=new pe(0,0,V,st),Kt=!1,J=new Er,ot=!1,Rt=!1,pt=new te,Ut=new te,Nt=new C,kt=new pe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function me(){return U===null?X:1}let A=n;function Ot(S,z){return e.getContext(S,z)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),A===null){let z="webgl2";if(A=Ot(z,S),A===null)throw Ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Et,vt,at,Bt,ft,T,y,W,j,nt,M,P,O,B,it,G,K,rt,dt,ut,Vt,wt,yt,N;function ct(){Et=new mg(A),Et.init(),wt=new Yx(A,Et),vt=new cg(A,Et,t,wt),at=new Wx(A,Et),vt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Bt=new _g(A),ft=new Px,T=new qx(A,Et,at,ft,vt,wt,Bt),y=new ug(b),W=new pg(b),j=new wp(A),yt=new og(A,j),nt=new gg(A,j,Bt,yt),M=new yg(A,nt,j,Bt),dt=new vg(A,vt,T),G=new hg(ft),P=new Ix(b,y,W,Et,vt,yt,G),O=new Qx(b,ft),B=new Dx,it=new zx(Et),rt=new ag(b,y,W,at,M,f,l),K=new Vx(b,M,vt),N=new jx(A,Bt,vt,at),ut=new lg(A,Et,Bt),Vt=new xg(A,Et,Bt),Bt.programs=P.programs,b.capabilities=vt,b.extensions=Et,b.properties=ft,b.renderLists=B,b.shadowMap=K,b.state=at,b.info=Bt}ct();let Z=new ac(b,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(V,st,!1))},this.getSize=function(S){return S.set(V,st)},this.setSize=function(S,z,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,st=z,e.width=Math.floor(S*X),e.height=Math.floor(z*X),q===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(V*X,st*X).floor()},this.setDrawingBufferSize=function(S,z,q){V=S,st=z,X=q,e.width=Math.floor(S*q),e.height=Math.floor(z*q),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,z,q,Y){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,z,q,Y),at.viewport(L.copy(Ct).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,z,q,Y){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,z,q,Y),at.scissor(F.copy(zt).multiplyScalar(X).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(S){at.setScissorTest(Kt=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,z=!0,q=!0){let Y=0;if(S){let k=!1;if(U!==null){let ht=U.texture.format;k=ht===Dc||ht===Lc||ht===Pc}if(k){let ht=U.texture.type,bt=ht===ii||ht===Gi||ht===Mr||ht===Ps||ht===Rc||ht===Cc,It=rt.getClearColor(),Pt=rt.getClearAlpha(),Xt=It.r,$t=It.g,Lt=It.b;bt?(g[0]=Xt,g[1]=$t,g[2]=Lt,g[3]=Pt,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Xt,x[1]=$t,x[2]=Lt,x[3]=Pt,A.clearBufferiv(A.COLOR,0,x))}else Y|=A.COLOR_BUFFER_BIT}z&&(Y|=A.DEPTH_BUFFER_BIT),q&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),B.dispose(),it.dispose(),ft.dispose(),y.dispose(),W.dispose(),M.dispose(),yt.dispose(),N.dispose(),P.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",dh),Z.removeEventListener("sessionend",fh),Pi.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let S=Bt.autoReset,z=K.enabled,q=K.autoUpdate,Y=K.needsUpdate,k=K.type;ct(),Bt.autoReset=S,K.enabled=z,K.autoUpdate=q,K.needsUpdate=Y,K.type=k}function Mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wt(S){let z=S.target;z.removeEventListener("dispose",Wt),ge(z)}function ge(S){Ge(S),ft.remove(S)}function Ge(S){let z=ft.get(S).programs;z!==void 0&&(z.forEach(function(q){P.releaseProgram(q)}),S.isShaderMaterial&&P.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,q,Y,k,ht){z===null&&(z=ne);let bt=k.isMesh&&k.matrixWorld.determinant()<0,It=Qd(S,z,q,Y,k);at.setMaterial(Y,bt);let Pt=q.index,Xt=1;if(Y.wireframe===!0){if(Pt=nt.getWireframeAttribute(q),Pt===void 0)return;Xt=2}let $t=q.drawRange,Lt=q.attributes.position,re=$t.start*Xt,xe=($t.start+$t.count)*Xt;ht!==null&&(re=Math.max(re,ht.start*Xt),xe=Math.min(xe,(ht.start+ht.count)*Xt)),Pt!==null?(re=Math.max(re,0),xe=Math.min(xe,Pt.count)):Lt!=null&&(re=Math.max(re,0),xe=Math.min(xe,Lt.count));let ye=xe-re;if(ye<0||ye===1/0)return;yt.setup(k,Y,It,q,Pt);let sn,oe=ut;if(Pt!==null&&(sn=j.get(Pt),oe=Vt,oe.setIndex(sn)),k.isMesh)Y.wireframe===!0?(at.setLineWidth(Y.wireframeLinewidth*me()),oe.setMode(A.LINES)):oe.setMode(A.TRIANGLES);else if(k.isLine){let Dt=Y.linewidth;Dt===void 0&&(Dt=1),at.setLineWidth(Dt*me()),k.isLineSegments?oe.setMode(A.LINES):k.isLineLoop?oe.setMode(A.LINE_LOOP):oe.setMode(A.LINE_STRIP)}else k.isPoints?oe.setMode(A.POINTS):k.isSprite&&oe.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Dt=k._multiDrawStarts,Yn=k._multiDrawCounts,le=k._multiDrawCount,wn=Pt?j.get(Pt).bytesPerElement:1,ns=ft.get(Y).currentProgram.getUniforms();for(let cn=0;cn<le;cn++)ns.setValue(A,"_gl_DrawID",cn),oe.render(Dt[cn]/wn,Yn[cn])}else if(k.isInstancedMesh)oe.renderInstances(re,ye,k.count);else if(q.isInstancedBufferGeometry){let Dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Yn=Math.min(q.instanceCount,Dt);oe.renderInstances(re,ye,Yn)}else oe.render(re,ye)};function he(S,z,q){S.transparent===!0&&S.side===Ye&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,$r(S,z,q),S.side=Hn,S.needsUpdate=!0,$r(S,z,q),S.side=Ye):$r(S,z,q)}this.compile=function(S,z,q=null){q===null&&(q=S),p=it.get(q),p.init(z),_.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==q&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Y=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ht=k.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){let It=ht[bt];he(It,q,k),Y.add(It)}else he(ht,q,k),Y.add(ht)}),_.pop(),p=null,Y},this.compileAsync=function(S,z,q=null){let Y=this.compile(S,z,q);return new Promise(k=>{function ht(){if(Y.forEach(function(bt){ft.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){k(S);return}setTimeout(ht,10)}Et.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let En=null;function qn(S){En&&En(S)}function dh(){Pi.stop()}function fh(){Pi.start()}let Pi=new $u;Pi.setAnimationLoop(qn),typeof self!="undefined"&&Pi.setContext(self),this.setAnimationLoop=function(S){En=S,Z.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},Z.addEventListener("sessionstart",dh),Z.addEventListener("sessionend",fh),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,z,U),p=it.get(S,_.length),p.init(z),_.push(p),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(Ut),Rt=this.localClippingEnabled,ot=G.init(this.clippingPlanes,Rt),m=B.get(S,w.length),m.init(),w.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ht=b.xr.getDepthSensingMesh();ht!==null&&To(ht,z,-1/0,b.sortObjects)}To(S,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(et,lt),jt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,jt&&rt.addToRenderList(m,S),this.info.render.frame++,ot===!0&&G.beginShadows();let q=p.state.shadowsArray;K.render(q,S,z),ot===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ht=z.cameras;if(k.length>0)for(let bt=0,It=ht.length;bt<It;bt++){let Pt=ht[bt];mh(Y,k,S,Pt)}jt&&rt.render(S);for(let bt=0,It=ht.length;bt<It;bt++){let Pt=ht[bt];ph(m,S,Pt,Pt.viewport)}}else k.length>0&&mh(Y,k,S,z),jt&&rt.render(S),ph(m,S,z);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(b,S,z),yt.resetDefaultState(),E=-1,v=null,_.pop(),_.length>0?(p=_[_.length-1],ot===!0&&G.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function To(S,z,q,Y){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){Y&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ut);let bt=M.update(S),It=S.material;It.visible&&m.push(S,bt,It,q,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){let bt=M.update(S),It=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),kt.copy(bt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(Ut)),Array.isArray(It)){let Pt=bt.groups;for(let Xt=0,$t=Pt.length;Xt<$t;Xt++){let Lt=Pt[Xt],re=It[Lt.materialIndex];re&&re.visible&&m.push(S,bt,re,q,kt.z,Lt)}}else It.visible&&m.push(S,bt,It,q,kt.z,null)}}let ht=S.children;for(let bt=0,It=ht.length;bt<It;bt++)To(ht[bt],z,q,Y)}function ph(S,z,q,Y){let k=S.opaque,ht=S.transmissive,bt=S.transparent;p.setupLightsView(q),ot===!0&&G.setGlobalState(b.clippingPlanes,q),Y&&at.viewport(L.copy(Y)),k.length>0&&Yr(k,z,q),ht.length>0&&Yr(ht,z,q),bt.length>0&&Yr(bt,z,q),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function mh(S,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new si(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Pr:ii,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ht=p.state.transmissionRenderTarget[Y.id],bt=Y.viewport||L;ht.setSize(bt.z,bt.w);let It=b.getRenderTarget();b.setRenderTarget(ht),b.getClearColor($),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),jt&&rt.render(q);let Pt=b.toneMapping;b.toneMapping=_i;let Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ot===!0&&G.setGlobalState(b.clippingPlanes,Y),Yr(S,q,Y),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht),Et.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Lt=0,re=z.length;Lt<re;Lt++){let xe=z[Lt],ye=xe.object,sn=xe.geometry,oe=xe.material,Dt=xe.group;if(oe.side===Ye&&ye.layers.test(Y.layers)){let Yn=oe.side;oe.side=Be,oe.needsUpdate=!0,gh(ye,q,Y,sn,oe,Dt),oe.side=Yn,oe.needsUpdate=!0,$t=!0}}$t===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht))}b.setRenderTarget(It),b.setClearColor($,Q),Xt!==void 0&&(Y.viewport=Xt),b.toneMapping=Pt}function Yr(S,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ht=S.length;k<ht;k++){let bt=S[k],It=bt.object,Pt=bt.geometry,Xt=Y===null?bt.material:Y,$t=bt.group;It.layers.test(q.layers)&&gh(It,z,q,Pt,Xt,$t)}}function gh(S,z,q,Y,k,ht){S.onBeforeRender(b,z,q,Y,k,ht),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(b,z,q,Y,S,ht),k.transparent===!0&&k.side===Ye&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,b.renderBufferDirect(q,z,Y,k,S,ht),k.side=Hn,k.needsUpdate=!0,b.renderBufferDirect(q,z,Y,k,S,ht),k.side=Ye):b.renderBufferDirect(q,z,Y,k,S,ht),S.onAfterRender(b,z,q,Y,k,ht)}function $r(S,z,q){z.isScene!==!0&&(z=ne);let Y=ft.get(S),k=p.state.lights,ht=p.state.shadowsArray,bt=k.state.version,It=P.getParameters(S,k.state,ht,z,q),Pt=P.getProgramCacheKey(It),Xt=Y.programs;Y.environment=S.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(S.isMeshStandardMaterial?W:y).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Xt===void 0&&(S.addEventListener("dispose",Wt),Xt=new Map,Y.programs=Xt);let $t=Xt.get(Pt);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===bt)return _h(S,It),$t}else It.uniforms=P.getUniforms(S),S.onBeforeCompile(It,b),$t=P.acquireProgram(It,Pt),Xt.set(Pt,$t),Y.uniforms=It.uniforms;let Lt=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=G.uniform),_h(S,It),Y.needsLights=tf(S),Y.lightsStateVersion=bt,Y.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function xh(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function _h(S,z){let q=ft.get(S);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Qd(S,z,q,Y,k){z.isScene!==!0&&(z=ne),T.resetTextureUnits();let ht=z.fog,bt=Y.isMeshStandardMaterial?z.environment:null,It=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Hs,Pt=(Y.isMeshStandardMaterial?W:y).get(Y.envMap||bt),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$t=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,xe=!!q.morphAttributes.color,ye=_i;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ye=b.toneMapping);let sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=sn!==void 0?sn.length:0,Dt=ft.get(Y),Yn=p.state.lights;if(ot===!0&&(Rt===!0||S!==v)){let gn=S===v&&Y.id===E;G.setState(Y,S,gn)}let le=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Yn.state.version||Dt.outputColorSpace!==It||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Pt||Y.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==G.numPlanes||Dt.numIntersection!==G.numIntersection)||Dt.vertexAlphas!==Xt||Dt.vertexTangents!==$t||Dt.morphTargets!==Lt||Dt.morphNormals!==re||Dt.morphColors!==xe||Dt.toneMapping!==ye||Dt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Dt.__version=Y.version);let wn=Dt.currentProgram;le===!0&&(wn=$r(Y,z,k));let ns=!1,cn=!1,ir=!1,Me=wn.getUniforms(),On=Dt.uniforms;if(at.useProgram(wn.program)&&(ns=!0,cn=!0,ir=!0),Y.id!==E&&(E=Y.id,cn=!0),ns||v!==S){at.buffers.depth.getReversed()?(pt.copy(S.projectionMatrix),rp(pt),ap(pt),Me.setValue(A,"projectionMatrix",pt)):Me.setValue(A,"projectionMatrix",S.projectionMatrix),Me.setValue(A,"viewMatrix",S.matrixWorldInverse);let oi=Me.map.cameraPosition;oi!==void 0&&oi.setValue(A,Nt.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&Me.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Me.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,cn=!0,ir=!0)}if(k.isSkinnedMesh){Me.setOptional(A,k,"bindMatrix"),Me.setOptional(A,k,"bindMatrixInverse");let gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Me.setValue(A,"boneTexture",gn.boneTexture,T))}k.isBatchedMesh&&(Me.setOptional(A,k,"batchingTexture"),Me.setValue(A,"batchingTexture",k._matricesTexture,T),Me.setOptional(A,k,"batchingIdTexture"),Me.setValue(A,"batchingIdTexture",k._indirectTexture,T),Me.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&Me.setValue(A,"batchingColorTexture",k._colorsTexture,T));let sr=q.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&dt.update(k,q,wn),(cn||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,Me.setValue(A,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(On.envMap.value=Pt,On.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(On.envMapIntensity.value=z.environmentIntensity),cn&&(Me.setValue(A,"toneMappingExposure",b.toneMappingExposure),Dt.needsLights&&jd(On,ir),ht&&Y.fog===!0&&O.refreshFogUniforms(On,ht),O.refreshMaterialUniforms(On,Y,X,st,p.state.transmissionRenderTarget[S.id]),Ts.upload(A,xh(Dt),On,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ts.upload(A,xh(Dt),On,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Me.setValue(A,"center",k.center),Me.setValue(A,"modelViewMatrix",k.modelViewMatrix),Me.setValue(A,"normalMatrix",k.normalMatrix),Me.setValue(A,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let gn=Y.uniformsGroups;for(let oi=0,li=gn.length;oi<li;oi++){let vh=gn[oi];N.update(vh,wn),N.bind(vh,wn)}}return wn}function jd(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function tf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,z,q){ft.get(S.texture).__webglTexture=z,ft.get(S.depthTexture).__webglTexture=q;let Y=ft.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){let q=ft.get(S);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,q=0){U=S,R=z,I=q;let Y=!0,k=null,ht=!1,bt=!1;if(S){let Pt=ft.get(S);if(Pt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Pt.__hasExternalTextures)T.rebindTextures(S,ft.get(S.texture).__webglTexture,ft.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Lt=S.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&ft.has(Lt)&&(S.width!==Lt.image.width||S.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Xt=S.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);let $t=ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray($t[z])?k=$t[z][q]:k=$t[z],ht=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?k=ft.get(S).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[q]:k=$t,L.copy(S.viewport),F.copy(S.scissor),H=S.scissorTest}else L.copy(Ct).multiplyScalar(X).floor(),F.copy(zt).multiplyScalar(X).floor(),H=Kt;if(at.bindFramebuffer(A.FRAMEBUFFER,k)&&Y&&at.drawBuffers(S,k),at.viewport(L),at.scissor(F),at.setScissorTest(H),ht){let Pt=ft.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,q)}else if(bt){let Pt=ft.get(S.texture),Xt=z||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,q||0,Xt)}E=-1},this.readRenderTargetPixels=function(S,z,q,Y,k,ht,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){at.bindFramebuffer(A.FRAMEBUFFER,It);try{let Pt=S.texture,Xt=Pt.format,$t=Pt.type;if(!vt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-Y&&q>=0&&q<=S.height-k&&A.readPixels(z,q,Y,k,wt.convert(Xt),wt.convert($t),ht)}finally{let Pt=U!==null?ft.get(U).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,z,q,Y,k,ht,bt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){let Pt=S.texture,Xt=Pt.format,$t=Pt.type;if(!vt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=S.width-Y&&q>=0&&q<=S.height-k){at.bindFramebuffer(A.FRAMEBUFFER,It);let Lt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.bufferData(A.PIXEL_PACK_BUFFER,ht.byteLength,A.STREAM_READ),A.readPixels(z,q,Y,k,wt.convert(Xt),wt.convert($t),0);let re=U!==null?ft.get(U).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,re);let xe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await sp(A,xe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ht),A.deleteBuffer(Lt),A.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,z=null,q=0){S.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1]);let Y=Math.pow(2,-q),k=Math.floor(S.image.width*Y),ht=Math.floor(S.image.height*Y),bt=z!==null?z.x:0,It=z!==null?z.y:0;T.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,q,0,0,bt,It,k,ht),at.unbindTexture()},this.copyTextureToTexture=function(S,z,q=null,Y=null,k=0){S.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],z=arguments[2],k=arguments[3]||0,q=null);let ht,bt,It,Pt,Xt,$t,Lt,re,xe,ye=S.isCompressedTexture?S.mipmaps[k]:S.image;q!==null?(ht=q.max.x-q.min.x,bt=q.max.y-q.min.y,It=q.isBox3?q.max.z-q.min.z:1,Pt=q.min.x,Xt=q.min.y,$t=q.isBox3?q.min.z:0):(ht=ye.width,bt=ye.height,It=ye.depth||1,Pt=0,Xt=0,$t=0),Y!==null?(Lt=Y.x,re=Y.y,xe=Y.z):(Lt=0,re=0,xe=0);let sn=wt.convert(z.format),oe=wt.convert(z.type),Dt;z.isData3DTexture?(T.setTexture3D(z,0),Dt=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Dt=A.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Dt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);let Yn=A.getParameter(A.UNPACK_ROW_LENGTH),le=A.getParameter(A.UNPACK_IMAGE_HEIGHT),wn=A.getParameter(A.UNPACK_SKIP_PIXELS),ns=A.getParameter(A.UNPACK_SKIP_ROWS),cn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ye.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ye.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,$t);let ir=S.isDataArrayTexture||S.isData3DTexture,Me=z.isDataArrayTexture||z.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let On=ft.get(S),sr=ft.get(z),gn=ft.get(On.__renderTarget),oi=ft.get(sr.__renderTarget);at.bindFramebuffer(A.READ_FRAMEBUFFER,gn.__webglFramebuffer),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let li=0;li<It;li++)ir&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ft.get(S).__webglTexture,k,$t+li),S.isDepthTexture?(Me&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ft.get(z).__webglTexture,k,xe+li),A.blitFramebuffer(Pt,Xt,ht,bt,Lt,re,ht,bt,A.DEPTH_BUFFER_BIT,A.NEAREST)):Me?A.copyTexSubImage3D(Dt,k,Lt,re,xe+li,Pt,Xt,ht,bt):A.copyTexSubImage2D(Dt,k,Lt,re,xe+li,Pt,Xt,ht,bt);at.bindFramebuffer(A.READ_FRAMEBUFFER,null),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Me?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Dt,k,Lt,re,xe,ht,bt,It,sn,oe,ye.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,k,Lt,re,xe,ht,bt,It,sn,ye.data):A.texSubImage3D(Dt,k,Lt,re,xe,ht,bt,It,sn,oe,ye):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,k,Lt,re,ht,bt,sn,oe,ye.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,k,Lt,re,ye.width,ye.height,sn,ye.data):A.texSubImage2D(A.TEXTURE_2D,k,Lt,re,ht,bt,sn,oe,ye);A.pixelStorei(A.UNPACK_ROW_LENGTH,Yn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,le),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ns),A.pixelStorei(A.UNPACK_SKIP_IMAGES,cn),k===0&&z.generateMipmaps&&A.generateMipmap(Dt),at.unbindTexture()},this.copyTextureToTexture3D=function(S,z,q=null,Y=null,k=0){return S.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],z=arguments[3],k=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,z,q,Y,k)},this.initRenderTarget=function(S){ft.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){R=0,I=0,U=null,at.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Va=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wr=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},oc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new C,Ga=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tr=class extends ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,cr=new C,_s=new C,vs=new C,ys=new Gt,hr=new Gt,ju=new te,ga=new C,ur=new C,xa=new C,_u=new Gt,el=new Gt,vu=new Gt,Wa=class extends De{constructor(t=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oc(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Ga(n,3,0,!1)),xs.setAttribute("uv",new Ga(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_a(ga.set(-.5,-.5,0),vs,a,_s,s,r),_a(ur.set(.5,-.5,0),vs,a,_s,s,r),_a(xa.set(.5,.5,0),vs,a,_s,s,r),_u.set(0,0),el.set(1,0),vu.set(1,1);let o=t.ray.intersectTriangle(ga,ur,xa,!1,cr);if(o===null&&(_a(ur.set(-.5,.5,0),vs,a,_s,s,r),el.set(0,1),o=t.ray.intersectTriangle(ga,xa,ur,!1,cr),o===null))return;let l=t.ray.origin.distanceTo(cr);l<t.near||l>t.far||e.push({distance:l,point:cr.clone(),uv:gi.getInterpolation(cr,ga,ur,xa,_u,el,vu,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*ys.x-s*ys.y,hr.y=s*ys.x+r*ys.y):hr.copy(ys),i.copy(t),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(ju)}var lc=class extends rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new te,yu=new te,va=[],Mu=new ri,t_=new te,dr=new St,fr=new yi,Fs=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Mu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),fr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),yu.multiplyMatrices(n,Ms),dr.matrixWorld=yu,dr.raycast(t,va);for(let a=0,o=va.length;a<o;a++){let l=va[a];l.instanceId=r,l.object=this,e.push(l)}va.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lc(new Float32Array(s*this.count),s,this.count,Ic,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ar=class extends ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new C,Ya=new C,bu=new te,pr=new br,ya=new yi,nl=new C,Su=new C,cc=class extends De{constructor(t=new Le,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qa.fromBufferAttribute(e,s-1),Ya.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;bu.copy(s).invert(),pr.copy(t.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),_=Ma(this,t,pr,l,p,w);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Ma(this,t,pr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ma(this,t,pr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Ma(this,t,pr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ma(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(qa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),e.distanceSqToSegment(qa,Ya,nl,Su)>n)return;nl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nl);if(!(l<t.near||l>t.far))return{distance:l,point:Su.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Eu=new C,wu=new C,$a=class extends cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),wu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(wu);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ze=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function w(){let b=new C,D=new C,R=0,I=(e-t)/n;for(let U=0;U<=r;U++){let E=[],v=U/r,L=v*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,$=H*l+o,Q=Math.sin($),V=Math.cos($);D.x=L*Q,D.y=-v*n+m,D.z=L*V,u.push(D.x,D.y,D.z),b.set(Q,I,V).normalize(),d.push(b.x,b.y,b.z),f.push(H,1-v),E.push(g++)}x.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){let v=x[E][U],L=x[E+1][U],F=x[E+1][U+1],H=x[E][U+1];(t>0||E!==0)&&(h.push(v,L,H),R+=3),(e>0||E!==r-1)&&(h.push(L,F,H),R+=3)}c.addGroup(p,R,0),p+=R}function _(b){let D=g,R=new Gt,I=new C,U=0,E=b===!0?t:e,v=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let $=F/s*l+o,Q=Math.cos($),V=Math.sin($);I.x=E*V,I.y=m*v,I.z=E*Q,u.push(I.x,I.y,I.z),d.push(0,v,0),R.x=Q*.5+.5,R.y=V*.5*v+.5,f.push(R.x,R.y),g++}for(let F=0;F<s;F++){let H=D+F,$=L+F;b===!0?h.push($,$+1,H):h.push($+1,$,H),U+=3}c.addGroup(p,U,b===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bs=class i extends ze{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hc=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let _=new C,b=new C,D=new C;for(let R=0;R<e.length;R+=3)f(e[R+0],_),f(e[R+1],b),f(e[R+2],D),l(_,b,D,w)}function l(w,_,b,D){let R=D+1,I=[];for(let U=0;U<=R;U++){I[U]=[];let E=w.clone().lerp(b,U/R),v=_.clone().lerp(b,U/R),L=R-U;for(let F=0;F<=L;F++)F===0&&U===R?I[U][F]=E:I[U][F]=E.clone().lerp(v,F/L)}for(let U=0;U<R;U++)for(let E=0;E<2*(R-U)-1;E++){let v=Math.floor(E/2);E%2===0?(d(I[U][v+1]),d(I[U+1][v]),d(I[U][v])):(d(I[U][v+1]),d(I[U+1][v+1]),d(I[U+1][v]))}}function c(w){let _=new C;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(w),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let w=new C;for(let _=0;_<r.length;_+=3){w.x=r[_+0],w.y=r[_+1],w.z=r[_+2];let b=m(w)/2/Math.PI+.5,D=p(w)/Math.PI+.5;a.push(b,1-D)}g(),u()}function u(){for(let w=0;w<a.length;w+=6){let _=a[w+0],b=a[w+2],D=a[w+4],R=Math.max(_,b,D),I=Math.min(_,b,D);R>.9&&I<.1&&(_<.2&&(a[w+0]+=1),b<.2&&(a[w+2]+=1),D<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,_){let b=w*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){let w=new C,_=new C,b=new C,D=new C,R=new Gt,I=new Gt,U=new Gt;for(let E=0,v=0;E<r.length;E+=9,v+=6){w.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),R.set(a[v+0],a[v+1]),I.set(a[v+2],a[v+3]),U.set(a[v+4],a[v+5]),D.copy(w).add(_).add(b).divideScalar(3);let L=m(D);x(R,v+0,w,L),x(I,v+2,_,L),x(U,v+4,b,L)}}function x(w,_,b,D){D<0&&w.x===1&&(a[_]=w.x-1),b.x===0&&b.z===0&&(a[_]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Za=class i extends hc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ja=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new Gt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let w=p+m,_=w,b=w+n+1,D=w+n+2,R=w+1;o.push(_,b,R),o.push(b,D,R)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],_=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+b,1-_),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let _=h[p][w+1],b=h[p][w],D=h[p+1][w],R=h[p+1][w+1];(p!==0||a>0)&&f.push(_,b,R),(p!==n-1||l<Math.PI)&&f.push(b,D,R)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mi=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qt=class extends ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function e_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uc=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sh:r=t,o=2*e-n;break;case Eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:a=t,l=2*n-e;break;case Eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+w*a[c+D]+_*a[l+D]+b*a[u+D];return r}},dc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},fc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&e_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Gl;var Wi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ia;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends Dn{};pc.prototype.ValueTypeName="color";var mc=class extends Dn{};mc.prototype.ValueTypeName="number";var gc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends Dn{InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ia;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Dn{};xc.prototype.ValueTypeName="vector";var _c=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},n_=new _c,vc=class{constructor(t){this.manager=t!==void 0?t:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Qa=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},il=new te,Tu=new C,Au=new C,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yc=class extends Rr{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ds*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ja=class extends ks{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ru=new te,mr=new C,sl=new C,Mc=class extends Rr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),sl.copy(n.position),sl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sl),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},to=class extends ks{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bc=class extends Rr{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fc="\\[\\]\\.:\\/",i_=new RegExp("["+Fc+"]","g"),Oc="[^"+Fc+"]",s_="[^"+Fc.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Oc),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),c_=new RegExp("^"+r_+a_+o_+l_+"$"),h_=["material","materials","bones","map"],Sc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(t){let e=c_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Sc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _v=new Float32Array(1);var Cu=new te,Ir=class{constructor(t,e,n=0,s=1/0){this.ray=new br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return Ec(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ec(t[s],this,n,e);return n.sort(Iu),n}};function Iu(i,t){return i.distance-t.distance}function Ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ec(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var qi={width:10.29,depth:7.7,depthWithBalcony:8.97,height:2.62,officialArea:"77,3",winSill:.05,winTop:2.42,walls:[{axis:"x",t1:-.3,t2:0,from:-.3,to:10.59,ext:1,holes:[{a:6.2,b:7.2,type:"door"}]},{axis:"x",t1:7.7,t2:8,from:-.3,to:10.59,ext:1,holes:[{a:1.09,b:2.91,type:"win"},{a:4.74,b:6.51,type:"win"},{a:7.85,b:8.65,type:"balcony"},{a:8.65,b:9.66,type:"fixed"}]},{axis:"z",t1:-.3,t2:0,from:0,to:7.7,ext:1},{axis:"z",t1:10.29,t2:10.59,from:0,to:7.7,ext:1},{axis:"z",t1:4.05,t2:4.17,from:2.83,to:7.7},{axis:"z",t1:7.17,t2:7.29,from:2.83,to:7.7},{axis:"x",t1:2.83,t2:2.95,from:4.05,to:10.29,holes:[{a:5.77,b:6.6,type:"door"},{a:7.42,b:8.25,type:"door"}]},{axis:"z",t1:8.47,t2:8.59,from:0,to:2.83,holes:[{a:.26,b:.9,type:"door"},{a:1.75,b:2.43,type:"door"}]},{axis:"x",t1:1,t2:1.12,from:8.59,to:10.29}],doors:[{x:7.2,z:-.15,w:.95,angle:150,entry:1},{x:5.77,z:2.89,w:.8,angle:-35},{x:7.42,z:2.89,w:.8,angle:-35},{x:8.53,z:.26,w:.62,angle:-125},{x:8.53,z:2.43,w:.66,angle:125},{x:7.88,z:7.85,w:.75,angle:35,white:1}],rooms:[{name:"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F",area:31.18,floor:"oak",rects:[[0,0,4.05,7.7]],label:[2,3.9]},{name:"\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439",area:12.62,floor:"stone",rects:[[4.05,0,8.47,2.83]],label:[6.2,1.5]},{name:"\u041A\u0456\u043C\u043D\u0430\u0442\u0430",area:14.2,floor:"light",rects:[[4.17,2.95,7.17,7.7]],label:[5.67,5.3]},{name:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",area:14.25,floor:"walnut",rects:[[7.29,2.95,10.29,7.7]],label:[8.8,5.3]},{name:"\u0412\u0430\u043D\u043D\u0430",area:2.8,floor:"tile",rects:[[8.59,1.12,10.29,2.83]],label:[9.2,2]},{name:"\u0422\u0443\u0430\u043B\u0435\u0442",area:1.65,floor:"tile",rects:[[8.59,0,10.29,1]],label:[9.2,.5]},{name:"\u0411\u0430\u043B\u043A\u043E\u043D",area:2.13,floor:"stone",rects:[[7.79,8,9.89,8.870000000000001]],label:[8.84,8.45]}],balcony:[[7.69,8,7.79,8.97],[9.89,8,9.99,8.97],[7.69,8.870000000000001,9.99,8.97]],fixtures:[{type:"counter",r:[0,0,4.05,.6],sink:[1.32,1.88],hob:[2.52,3.08]},{type:"fridge",r:[0,.6,.6,1.2]},{type:"tall",r:[0,1.2,.6,1.8]},{type:"vent",r:[4.05,0,4.3,.66]},{type:"panel",r:[7.4,0,7.75,.08]},{type:"bath",r:[9.52,1.15,10.29,2.8]},{type:"washer",r:[8.86,1.15,9.3,1.75]},{type:"sink",r:[8.8,2.35,9.43,2.83]},{type:"toilet",r:[9.6,.24,10.29,.68],back:[10.08,.24,10.29,.68]}],power:[{x:2,z:0,f:"S",k:"kitchen"},{x:3.2,z:0,f:"S",k:"kitchen"},{x:2.8,z:0,f:"S",k:"hood"},{x:0,z:3.24,f:"E",k:"socket"},{x:0,z:5.31,f:"E",k:"socket2"},{x:0,z:6.7,f:"E",k:"socket"},{x:4.05,z:3.3,f:"W",k:"switch"},{x:6.05,z:0,f:"S",k:"intercom"},{x:6.05,z:0,f:"S",k:"switch2"},{x:8,z:0,f:"S",k:"net"},{x:4.17,z:4.2,f:"E",k:"socket"},{x:4.17,z:6.33,f:"E",k:"socket2"},{x:7.17,z:5.27,f:"W",k:"socket"},{x:6.75,z:2.95,f:"S",k:"switch"},{x:5.4,z:2.95,f:"S",k:"net"},{x:10.29,z:3.97,f:"W",k:"socket"},{x:10.29,z:6.11,f:"W",k:"socket2"},{x:7.29,z:5.1,f:"E",k:"socket"},{x:8.4,z:2.95,f:"S",k:"switch"},{x:9.2,z:2.95,f:"S",k:"ac"},{x:9.9,z:1.12,f:"S",k:"boiler"},{x:8.59,z:2.6,f:"E",k:"km"},{x:8.47,z:1.3,f:"W",k:"switch2"}],lamps:[[2,1.7],[2,5.3],[6.3,1.4],[5.67,5.3],[8.8,5.3],[9.4,2],[9.4,.5]],start:[6.7,.9,3.7]},u_={x1:4.17,x2:6.08,z2:1.59,wall:.1,door:[.35,1.15]};function td(i){let t=u_,e=t.x2+t.wall,n=t.z2+t.wall;i.closet=t,i.walls.push({axis:"z",t1:4.05,t2:t.x1,from:.66,to:t.z2},{axis:"x",t1:t.z2,t2:n,from:4.05,to:e},{axis:"z",t1:t.x2,t2:e,from:0,to:t.z2,holes:[{a:t.door[0],b:t.door[1],type:"door"}]}),i.doors.push({x:(t.x2+e)/2,z:t.door[0],w:t.door[1]-t.door[0],angle:-125});let s=i.rooms.find(r=>r.name==="\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439");s.rects=[[e,0,8.47,2.83],[4.05,n,e,2.83]],s.area=0,s.label=[7.25,1.5],i.rooms.splice(i.rooms.indexOf(s)+1,0,{name:"\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u0430",floor:s.floor,floorAs:"\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439",rects:[[t.x1,0,t.x2,t.z2]],label:[5.25,1.05]});for(let r of[s,i.rooms[i.rooms.indexOf(s)+1]])r.area=r.rects.reduce((a,[o,l,c,h])=>a+(c-o)*(h-l),0);for(let r of i.power)r.x===6.05&&r.z===0&&(r.x=e,r.z=t.door[1]+.25,r.f="E");return i.lamps.push([5.2,1.1]),i}function d_(i,t,e,n,s=2){let r=s*2+1;n=Math.max(5e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4));let a=new Te(1,1,1,r,r,r).toNonIndexed(),o=a.attributes.position.array,l=a.attributes.normal.array,c=new C(i/2-n,t/2-n,e/2-n),h=new C,u=new C,d=.5/r;for(let f=0;f<o.length;f+=3)h.fromArray(o,f),u.copy(h),u.x-=Math.sign(u.x)*d,u.y-=Math.sign(u.y)*d,u.z-=Math.sign(u.z)*d,u.normalize(),o[f]=c.x*Math.sign(h.x)+u.x*n,o[f+1]=c.y*Math.sign(h.y)+u.y*n,o[f+2]=c.z*Math.sign(h.z)+u.z*n,l[f]=u.x,l[f+1]=u.y,l[f+2]=u.z;return a.deleteAttribute("uv"),a.attributes.position.needsUpdate=!0,a}var ed=new Map;function so(i,t,e,n){let s=[i,t,e,n].map(a=>Math.round(a*1e3)).join(":"),r=ed.get(s);return r||(r=d_(Math.abs(i),Math.abs(t),Math.abs(e),n,n>.03?3:2),r.userData.cached=!0,ed.set(s,r)),r}function ro(i,t,e,n){let s=Math.min(Math.abs(i),Math.abs(t),Math.abs(e));return s<.012?0:n?Math.min(.08,s*.45):Math.min(.018,s*.3)}var ao=[{id:"raw",short:"\u042F\u043A \u0454",name:"\u042F\u043A \u0454",sub:"\u0437\u0430\u0440\u0430\u0437: \u0441\u0442\u044F\u0436\u043A\u0430, \u0431\u0456\u043B\u0456 \u0441\u0442\u0456\u043D\u0438, \u0431\u0435\u0437 \u0434\u0432\u0435\u0440\u0435\u0439"},{id:"base",short:"\u0420\u0435\u043C\u043E\u043D\u0442",name:"\u0420\u0435\u043C\u043E\u043D\u0442",sub:"\u043F\u0435\u0440\u0448\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043D\u0442: \u043F\u0456\u0434\u043B\u043E\u0433\u0430, \u043A\u0443\u0445\u043D\u044F, \u0432\u0430\u043D\u043D\u0430"},{id:"scandi",short:"\u0421\u043A\u0430\u043D\u0434\u0456",name:"\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u044C\u043A\u0438\u0439",sub:"\u0441\u0432\u0456\u0442\u043B\u0438\u0439 \u0434\u0443\u0431, \u0431\u0456\u043B\u0435, \u0441\u0456\u0440\u0435 \u0439 \u0433\u0456\u0440\u0447\u0438\u0447\u043D\u0435",wall:16250610,door:15921386,cabinet:16052972,counter:13215612,upper:16052972,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"ash",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"ash",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"ash",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"ash",\u0412\u0430\u043D\u043D\u0430:"tileWhite",\u0422\u0443\u0430\u043B\u0435\u0442:"tileWhite",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:15262680,bedroom:12174527,room:15789024},sofa:12106685,cushion:14263870,wood:13939852,metal:1974050,rug:15328474,rug2:13617339,bed:15855593,duvet:14475232,throw:14263870,textile:15987180,plants:3,shade:16777215,lamp:16769712},{id:"japandi",short:"Japandi",name:"Japandi",sub:"\u0442\u0435\u043F\u043B\u0438\u0439 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0437\u043C: \u0431\u0435\u0436, \u0433\u043E\u0440\u0456\u0445, \u043E\u043B\u0438\u0432\u043A\u0430",wall:15525079,door:12032632,cabinet:8357218,counter:15327956,upper:15327956,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"oakWarm",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"oakWarm",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"oakWarm",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"oakWarm",\u0412\u0430\u043D\u043D\u0430:"tileSand",\u0422\u0443\u0430\u043B\u0435\u0442:"tileSand",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:14273461,bedroom:13350810,room:14931908},sofa:14208184,cushion:11887935,wood:7031346,metal:2762274,rug:13483942,rug2:12167304,bed:7031346,duvet:15196112,throw:9080682,textile:14997958,plants:2,shade:15853263,lamp:16765850,low:!0},{id:"loft",short:"\u041B\u043E\u0444\u0442",name:"\u041B\u043E\u0444\u0442",sub:"\u0433\u0440\u0430\u0444\u0456\u0442, \u0433\u043E\u0440\u0456\u0445, \u043A\u043E\u043D\u044C\u044F\u0447\u043D\u0430 \u0448\u043A\u0456\u0440\u0430 \u0439 \u0447\u043E\u0440\u043D\u0438\u0439 \u043C\u0435\u0442\u0430\u043B",wall:15329509,door:2829616,cabinet:2500651,counter:9267786,upper:2500651,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"walnutDark",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"polished",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"walnutDark",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"walnutDark",\u0412\u0430\u043D\u043D\u0430:"tileDark",\u0422\u0443\u0430\u043B\u0435\u0442:"tileDark",\u0411\u0430\u043B\u043A\u043E\u043D:"polished"},accent:{living:10132638,bedroom:6119524,room:10724775},sofa:9064234,cushion:14209734,wood:5913382,metal:1381912,rug:6053731,rug2:4079684,bed:2829616,duvet:12567236,throw:9064234,textile:9409430,plants:2,shade:1381912,lamp:16760944},{id:"lviv",short:"\u041A\u043B\u0430\u0441\u0438\u043A\u0430",name:"\u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u043B\u0430\u0441\u0438\u043A\u0430",sub:"\u0441\u043C\u0430\u0440\u0430\u0433\u0434, \u044F\u043B\u0438\u043D\u043A\u0430-\u043F\u0430\u0440\u043A\u0435\u0442, \u043B\u0430\u0442\u0443\u043D\u044C \u0456 \u043E\u043A\u0441\u0430\u043C\u0438\u0442",wall:16052198,door:16052198,cabinet:3099199,counter:15525853,upper:16052198,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"herring",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"herring",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"herring",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"herring",\u0412\u0430\u043D\u043D\u0430:"tileGreen",\u0422\u0443\u0430\u043B\u0435\u0442:"tileGreen",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:3099199,bedroom:7027263,room:3030876},sofa:3030876,cushion:13214026,wood:7162415,metal:12095818,rug:9190196,rug2:14271644,bed:7027263,duvet:15920610,throw:13214026,textile:15195336,plants:3,shade:15853263,lamp:16765066,classic:!0},{id:"avtor",short:"\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0439",name:"\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0439",sub:"\u0433\u043B\u0438\u043D\u0430 \u0439 \u0447\u043E\u0440\u043D\u0438\u043B\u044C\u043D\u0430 \u044F\u043B\u0438\u043D\u0430, \u043B\u0430\u0442\u0443\u043D\u044C, \u044F\u043B\u0438\u043D\u043A\u0430-\u043F\u0430\u0440\u043A\u0435\u0442",wall:15722975,door:14933197,cabinet:2766382,counter:14274492,upper:15722975,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"herring",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"herring",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"herring",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"herring",\u0412\u0430\u043D\u043D\u0430:"tileSand",\u0422\u0443\u0430\u043B\u0435\u0442:"tileSand",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:11101247,bedroom:3096903,room:13350805},sofa:15064785,cushion:11753263,wood:6243632,metal:11570519,rug:13221028,rug2:10391154,bed:6243632,duvet:15327956,throw:12618302,textile:15261904,plants:3,shade:15721679,lamp:16767392,low:!0}];function nd(i,t,e,n){return{herring:()=>i(512,512,(a,o,l)=>{let c=n(41),h=128,u=32;a.fillStyle="#7a5434",a.fillRect(0,0,o,l);for(let d=-2;d<12;d++)for(let f=-2;f<10;f++)for(let g of[0,1]){a.save(),a.translate(f*2*u*1.414+(g?u*1.414:0),d*h*.707*.7+0),a.rotate(g?-Math.PI/4:Math.PI/4);let x=(c()-.5)*16;a.fillStyle=`hsl(${28+(c()-.5)*6},45%,${36+x}%)`,a.fillRect(0,0,h,u),a.strokeStyle="rgba(30,15,5,.45)",a.lineWidth=1.5,a.strokeRect(0,0,h,u),a.restore()}},.9,.9),polished:()=>i(512,512,(a,o,l)=>{let c=n(9);a.fillStyle="#b4b3ae",a.fillRect(0,0,o,l);for(let h=0;h<6e3;h++){let u=150+c()*60|0;a.fillStyle=`rgba(${u},${u},${u},${.03+c()*.05})`;let d=1+c()*5;a.fillRect(c()*o,c()*l,d,d)}},.4,.4),ash:()=>t([38,30,76],51),oakWarm:()=>t([30,42,60],61),walnutDark:()=>t([24,35,30],71),tileWhite:()=>e("#f2f3f3","#eceeee",3),tileSand:()=>e("#d8ccb6","#d2c5ae",3),tileDark:()=>e("#4a4d51","#45484c",3),tileGreen:()=>e("#5d7d6c","#577665",5)}}function id(i,t,e,n={}){let s=new ae,r=new Map,a=(M,P=.7,O=0)=>{let B=M+":"+P+":"+O;return r.has(B)||r.set(B,new Qt({color:M,roughness:P,metalness:O})),r.get(B)},o=(M,P,O,B,it,G,K,rt)=>{let dt=Math.abs(O-M),ut=G-it,Vt=Math.abs(B-P),wt=ro(dt,ut,Vt,K.roughness>=.9&&K.metalness===0),yt=new St(wt>0?so(dt,ut,Vt,wt):new Te(dt,ut,Vt),K);return yt.position.set((M+O)/2,(it+G)/2,(P+B)/2),yt.castShadow=!0,yt.receiveShadow=!0,yt.userData.y1=it,yt.userData.h=ut,s.add(yt),rt&&e.push([Math.min(M,O),Math.min(P,B),Math.max(M,O),Math.max(P,B),2]),yt},l=(M,P,O,B,it,G,K,rt=16)=>{let dt=new St(new ze(O,B,G-it,rt),K);return dt.position.set(M,(it+G)/2,P),dt.castShadow=!0,s.add(dt),dt},c=(M,P,O,B,it)=>{let G=new St(new pn(B,14,10),it);return G.position.set(M,P,O),G.castShadow=!0,s.add(G),G},h=t.width,u=t.depth,d=2.95,f=a(i.wood,.6),g=a(i.metal,.4,.6),x=a(i.sofa,.95),m=a(i.cushion,.95),p=a(i.textile,.95),w=a(16448250,.5),_=i.low?.05:.14,b=(M,P,O,B,it)=>{let G=new Qt({color:it,roughness:.9});n.addWallAO&&n.addWallAO(G);let K=o(M,P,O,B,0,t.height-.01,G);K.userData.wallLike=!0,K.castShadow=!1};b(.001,2.6,.012,u,i.accent.living),b(h-.012,d+.02,h-.001,u,i.accent.bedroom),b(4.18,d+.02,4.19,u,i.accent.room);let D=4.05,R=.65,I=(D-R)/5,U=n.addDepth?n.addDepth(new Qt({color:i.upper,roughness:.55})):a(i.upper,.55);U.userData.own=!0,o(R,0,D,.36,1.45,2.25,U),o(R+.02,.36,D-.02,.365,1.47,2.23,a(i.upper,.4));for(let M=R+I;M<D-.05;M+=I)o(M-.004,.362,M+.004,.37,1.47,2.23,a(2236962,.6));let E=a(12172996,.25,.9);for(let M=R+I/2;M<D;M+=I)o(M-.09,.37,M+.09,.39,1.5,1.515,E),o(M-.09,.6,M+.09,.625,.78,.795,E);for(let M=R+I;M<D-.05;M+=I)o(M-.003,.598,M+.003,.606,.12,.84,a(3355443,.6));l(1.6,.1,.022,.026,.9,1.18,E);{let M=new St(new Mi(.11,.016,8,16,Math.PI),E);M.position.set(1.6,1.18,.21),M.rotation.y=Math.PI/2,s.add(M)}for(let[M,P,O]of[[2.65,.18,.09],[2.95,.18,.07],[2.65,.42,.07],[2.95,.42,.09]]){let B=new St(new Mi(O,.006,6,28),a(5592405,.5));B.rotation.x=Math.PI/2,B.position.set(M,.908,P),s.add(B)}{let M=a(1184792,.1,.35),P=a(1776928,.3),O=a(12765132,.22,.85),B=a(2500651,.35),it=.6;o(it,.66,it+.02,.69,.25,2.05,O),o(it,.6,it+.006,1.2,1.28,1.31,a(2042404,.5));let G=1.26,K=1.74;o(it,G,it+.025,K,.82,1.42,M),o(it+.012,G+.03,it+.02,K-.03,.9,1.3,P),o(it+.025,G,it+.035,K,1.34,1.4,B),o(it+.035,G+.05,it+.045,K-.05,1.355,1.37,O),o(it,G,it+.025,K,1.47,1.8,M),o(it+.012,G+.03,it+.02,K-.22,1.52,1.74,P),o(it+.012,K-.2,it+.02,K-.04,1.54,1.76,B),o(it+.035,G+.05,it+.045,K-.05,1.78,1.792,O),o(2.42,0,3.18,.4,1.36,1.5,a(i.upper,.5),!1),o(2.47,.36,3.13,.5,1.28,1.42,M),o(2.5,.05,3.1,.38,1.345,1.36,O),c(2.8,1.375,.3,.028,new Pe({color:16773590}))}let v=((n.layout|0)%8+8)%8,L=(M,P,O)=>{let B=i.id==="scandi"?a(15921386,.6):i.id==="loft"?a(9064234,.8):i.classic?a(i.sofa,.95):f;o(M-.21,P-.21,M+.21,P+.21,.44,.48,B);for(let[G,K]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])o(M+G-.015,P+K-.015,M+G+.015,P+K+.015,0,.44,i.id==="loft"?g:f);let it=M-O*.2;o(it-.02,P-.2,it+.02,P+.2,.48,.9,B)},F=(M,P)=>{if(o(M-1.1,P-.9,M+1.1,P+.9,.001,.011,a(i.rug2,1)),i.classic)l(M,P,.55,.55,.72,.76,f,32),l(M,P,.06,.12,0,.72,f),e.push([M-.55,P-.55,M+.55,P+.55,2]);else{o(M-.7,P-.42,M+.7,P+.42,.72,.76,f,!0);for(let[O,B]of[[-.62,-.34],[.62,-.34],[-.62,.34],[.62,.34]])o(M+O-.025,P+B-.025,M+O+.025,P+B+.025,0,.72,i.id==="loft"?g:f)}L(M-.95,P-.2,1),L(M-.95,P+.25,1),L(M+.95,P-.2,-1),L(M+.95,P+.25,-1),l(M,P,.05,.07,.76,.97,a(10133642,.5));for(let[O,B,it]of[[.06,1.06,.02],[-.05,1.12,-.03],[.01,1.18,.05]])c(M+O,B,P+it,.045,a(6126938,.9));for(let O of i.classic?[0]:[-.4,.4]){o(M+O-.004,P-.004,M+O+.004,P+.004,1.75,2.7,g);let B=new St(new Bs(i.classic?.32:.17,.22,24,1,!0),a(i.shade,.6,i.id==="loft"?.5:0));B.material.side=Ye,B.position.set(M+O,1.68,P),s.add(B),c(M+O,1.6,P,.05,new Pe({color:i.lamp}))}},H=(M,P,O,B,it)=>{o(M,P,O,B,_,_+.3,x,!0),o(M,P,M+.24,B,_+.3,_+.78,x),o(M,P,O,P+.18,_+.3,_+.55,x),o(M,B-.18,O,B,_+.3,_+.55,x);let G=Math.max(2,Math.round((B-P-.3)/.8)),K=(B-P-.3)/G;for(let rt=0;rt<G;rt++){let dt=P+.15+K*(rt+.5);o(M+.24,dt-K/2+.03,O-.04,dt+K/2-.03,_+.3,_+.42,x)}if(o(M+.24,P+.3,M+.36,P+.75,_+.42,_+.82,m),o(M+.24,B-.75,M+.36,B-.3,_+.42,_+.82,m),o(M+.26,B-.88,O-.05,B-.32,_+.43,_+.475,a(i.throw,.95)),o(O-.05,B-.88,O+.04,B-.32,_+.08,_+.44,a(i.throw,.95)),!i.low)for(let[rt,dt]of[[M+.06,P+.06],[O-.06,P+.06],[M+.06,B-.06],[O-.06,B-.06]])o(rt-.02,dt-.02,rt+.02,dt+.02,0,_,g);it&&(o(M,B-.02,O+.78,B+.9,_,_+.3,x,!0),o(M,B+.72,O+.78,B+.9,_+.3,_+.55,x))},$=(M,P)=>{if(i.low||i.classic)l(M,P,.45,.45,.32,.36,f,32),l(M,P,.36,.36,0,.32,f,32),e.push([M-.4,P-.4,M+.4,P+.4,2]);else{o(M-.4,P-.5,M+.4,P+.5,.36,.4,i.id==="loft"?a(5913382,.5):f,!0);for(let[G,K]of[[M-.37,P-.47],[M+.37,P-.47],[M-.37,P+.47],[M+.37,P+.47]])o(G-.015,K-.015,G+.015,K+.015,0,.36,g)}let O=i.low||i.classic?.365:.405,B=o(M-.3,P-.32,M-.02,P-.1,O,O+.022,a(3030876,.7));B.rotation.y=.16;let it=o(M-.27,P-.3,M-.05,P-.12,O+.022,O+.04,a(13214026,.7));it.rotation.y=-.09,c(M,.45,P,.07,a(i.cushion,.5))},Q=(M,P)=>{o(3.62,M,4.04,P,i.low?0:.2,.55,i.id==="loft"?g:f,!0),o(3.99,(M+P)/2-.6,4.04,(M+P)/2+.6,1,1.68,a(789775,.25,.3))},V=null,st=()=>{if(V)return V;if(!n.canvasTex)return V=a(i.rug,1);let M=O=>"#"+O.toString(16).padStart(6,"0"),P=n.canvasTex(256,256,(O,B,it)=>{O.fillStyle=M(i.rug),O.fillRect(0,0,B,it),O.strokeStyle=M(i.rug2),O.lineWidth=2,O.globalAlpha=.4;for(let G=3;G<it;G+=7)O.beginPath(),O.moveTo(0,G),O.lineTo(B,G),O.stroke();O.globalAlpha=.14;for(let G=3;G<B;G+=7)O.beginPath(),O.moveTo(G,0),O.lineTo(G,it),O.stroke()},1.6,1.6);return V=new Qt({map:P,roughness:1}),V.userData.own=!0,V},X=(M,P,O,B)=>{o(M,P,O,B,.002,.012,st()),i.classic&&o(M+.15,P+.15,O-.15,B-.15,.0125,.014,a(i.rug2,1))},et=(M,P)=>{o(M-.4,P-.4,M+.4,P+.4,_,_+.32,m,!0),o(M-.4,P+.22,M+.4,P+.4,_+.32,_+.8,m)},lt=()=>{let M=a(i.cabinet,.5),P=a(i.counter,.35);o(1.2,1.2,2.8,1.92,0,.86,M,!0),o(1.12,1.12,2.88,2.06,.86,.9,P);for(let O of[1.5,2,2.5])l(O,2.3,.18,.21,.58,.62,a(i.id==="loft"?9064234:i.wood,.6),20),l(O,2.3,.02,.02,0,.58,g);e.push([1.2,1.2,2.8,2.5,2])},Ct=(M,P,O,B)=>{o(M,P,O,B,_,_+.3,x,!0),o(M,P,O,P+.24,_+.3,_+.78,x),o(M,P,M+.18,B,_+.3,_+.55,x),o(O-.18,P,O,B,_+.3,_+.55,x);let it=Math.max(2,Math.round((O-M-.3)/.8)),G=(O-M-.3)/it;for(let K=0;K<it;K++){let rt=M+.15+G*(K+.5);o(rt-G/2+.03,P+.24,rt+G/2-.03,B-.04,_+.3,_+.42,x)}if(o(M+.3,P+.24,M+.75,P+.36,_+.42,_+.82,m),o(O-.75,P+.24,O-.3,P+.36,_+.42,_+.82,m),o(O-.88,P+.26,O-.32,B-.05,_+.43,_+.475,a(i.throw,.95)),o(O-.88,B-.05,O-.32,B+.04,_+.08,_+.44,a(i.throw,.95)),!i.low)for(let[K,rt]of[[M+.06,P+.06],[O-.06,P+.06],[M+.06,B-.06],[O-.06,B-.06]])o(K-.02,rt-.02,K+.02,rt+.02,0,_,g)},zt=(M,P,O,B)=>{o(M,P,O,B,_,_+.3,x,!0),o(O-.24,P,O,B,_+.3,_+.78,x),o(M,P,O,P+.18,_+.3,_+.55,x),o(M,B-.18,O,B,_+.3,_+.55,x);let it=Math.max(2,Math.round((B-P-.3)/.8)),G=(B-P-.3)/it;for(let K=0;K<it;K++){let rt=P+.15+G*(K+.5);o(M+.04,rt-G/2+.03,O-.24,rt+G/2-.03,_+.3,_+.42,x)}if(o(O-.36,P+.3,O-.24,P+.75,_+.42,_+.82,m),o(O-.36,B-.75,O-.24,B-.3,_+.42,_+.82,m),o(M+.05,B-.88,O-.26,B-.32,_+.43,_+.475,a(i.throw,.95)),o(M-.04,B-.88,M+.05,B-.32,_+.08,_+.44,a(i.throw,.95)),!i.low)for(let[K,rt]of[[M+.06,P+.06],[O-.06,P+.06],[M+.06,B-.06],[O-.06,B-.06]])o(K-.02,rt-.02,K+.02,rt+.02,0,_,g)},Kt=(M,P)=>{o(M-.5,P-.28,M+.5,P+.28,.72,.75,f,!0);for(let[O,B]of[[M-.46,P-.24],[M+.46,P-.24],[M-.46,P+.24],[M+.46,P+.24]])o(O-.02,B-.02,O+.02,B+.02,0,.72,i.id==="loft"?g:f);o(M-.22,P+.22,M+.22,P+.25,.75,1.22,a(789775,.3)),o(M-.06,P+.2,M+.06,P+.24,.75,.9,g),o(M-.22,P-.78,M+.22,P-.36,.44,.48,m),o(M-.22,P-.78,M+.22,P-.74,.48,.86,m),e.push([M-.55,P-.85,M+.55,P+.3,2])};v===0?(X(.6,4,3.2,6.7),H(.02,4.2,.95,6.5,!1),$(1.8,5.35),Q(4.4,6.3),et(3.15,6.75),F(2,2.15)):v===1?(F(2,6.5),X(.6,2.55,3.2,5.05),H(.02,2.7,.95,5,!1),$(1.8,3.85),Q(2.95,4.8),et(3.45,6.95),lt()):v===2?(X(.6,3.9,3.5,6.9),H(.02,4,.95,6.4,!0),$(2.15,5),Q(4.4,6.3),F(2,2.15)):v===3?(X(.6,4.4,3.5,7),Ct(.9,4.65,3.3,5.6),$(2.1,6.15),et(.6,6.55),et(3.4,6.55),Q(3,4.4),F(2,2.15)):v===4?(X(.55,3.6,3.5,6.2),H(.02,3.7,.9,6,!1),zt(3.15,3.7,4.03,6),$(2,4.85),F(2,2.15)):v===5?(X(.6,4,3.2,6.1),H(.02,4.2,.95,6.5,!1),$(1.8,5.35),Q(4.4,6.3),Kt(3.3,7.05),F(2,2.15)):v===6?(lt(),X(.6,4.1,3.4,6.7),Ct(.9,4.3,3,5.2),$(1.95,5.7),Q(3.6,5.2)):((()=>{let M=a(i.cabinet,.5),P=a(i.counter,.35);o(0,1.82,.72,3.5,0,.86,M,!0),o(0,1.78,.8,3.56,.86,.9,P);for(let O of[2.35,3.05])l(.98,O,.18,.21,.58,.62,a(i.id==="loft"?9064234:i.wood,.6),20),l(.98,O,.02,.02,0,.58,g);e.push([0,1.82,1.2,3.5,2])})(),X(.7,3.8,3.4,6.3),H(.02,3.75,.9,6,!1),$(1.7,4.85),Q(4,5.6),F(2.6,6.4));let ot=[[.45,6.95],[.45,6.95],[3.5,7],[2.05,7.25],[2,6.9],[.45,6.95],[2,6.95],[3.6,6.9]],[Rt,pt]=ot[v]||[.45,6.95];l(Rt,pt,.14,.16,0,.03,g),l(Rt,pt,.012,.012,.03,1.5,g);let Ut=new St(new ze(.16,.22,.28,24,1,!0),a(i.shade,.8));Ut.material.side=Ye,Ut.position.set(Rt,1.6,pt),s.add(Ut);let Nt=new Qt({color:i.textile,roughness:1,side:Ye}),kt=(M,P,O)=>{let B=t.height-.12,it=new tn(O,B,30,1),G=it.attributes.position,K=Math.max(3,Math.round(O/.085));for(let dt=0;dt<G.count;dt++){let ut=G.getX(dt)/O+.5;G.setZ(dt,Math.sin(ut*Math.PI*2*K)*.03+Math.sin(ut*9.4+M)*.012)}it.computeVertexNormals();let rt=new St(it,Nt);rt.position.set(M,.02+B/2,P+.05),rt.castShadow=!0,rt.receiveShadow=!0,rt.userData.wallLike=!0,rt.userData.y1=.02,rt.userData.h=B,s.add(rt)},ne=(M,P)=>{o(M,u-.225,P,u-.205,t.height-.1,t.height-.08,g).userData.wallLike=!0};kt(.85,u-.26,.42),kt(3.15,u-.26,.42),ne(.55,3.45),kt(4.5,u-.26,.34),kt(6.8,u-.26,.34),ne(4.28,7.05),kt(7.6,u-.26,.34),kt(9.9,u-.26,.42),ne(7.4,10.18),o(R,.001,D,.012,.9,1.45,a(i.id==="loft"?3816512:i.id==="lviv"?15328470:15987180,.18));let jt=o(3.22,.14,3.68,.46,.905,.925,a(9071176,.7));jt.rotation.y=.12,l(1.55,.3,.1,.12,.9,1.08,a(i.id==="loft"?2829616:14209734,.35,.4)),c(1.55,1.1,.3,.04,g),l(2.2,.3,.16,.1,.9,.99,a(i.counter,.5));for(let[M,P]of[[2.13,.26],[2.27,.31],[2.2,.37]])c(M,1,P,.05,a(14257980,.6));let me=M=>"#"+M.toString(16).padStart(6,"0"),A=(M,P,O,B,it,G,K)=>{if(!n.canvasTex)return;let rt=n.canvasTex(256,Math.round(256*it/B),(wt,yt,N)=>{let ct=K,Z=()=>(ct=ct*16807%2147483647)/2147483647,tt=[i.cushion,i.sofa,i.wood,i.accent.bedroom,i.throw].map(me);wt.fillStyle=me(i.id==="loft"?14210768:16052454),wt.fillRect(0,0,yt,N);for(let _t=0;_t<5;_t++){wt.globalAlpha=.82,wt.fillStyle=tt[(_t+K)%tt.length],wt.beginPath();let Mt=yt*(.18+Z()*.64),Wt=N*(.3+Z()*.45),ge=N*(.16+Z()*.22);_t%2?wt.arc(Mt,Wt,ge,Math.PI,Math.PI*2):wt.ellipse(Mt,Wt,ge*1.2,ge*.75,Z()*3,0,7),wt.fill()}wt.globalAlpha=1,wt.strokeStyle="#26282b",wt.lineWidth=2,wt.beginPath(),wt.moveTo(yt*.08,N*.78),wt.bezierCurveTo(yt*.35,N*.5,yt*.6,N*.95,yt*.93,N*.62),wt.stroke(),wt.fillStyle=me(i.cushion),wt.beginPath(),wt.arc(yt*.78,N*.24,N*.07,0,7),wt.fill()},1,1),dt=new Qt({map:rt,roughness:.85});dt.userData.own=!0;let ut=new St(new tn(B,it),dt);ut.position.set(M+G*.024,P,O),ut.rotation.y=G*Math.PI/2,ut.userData.hideLow=!0,s.add(ut);let Vt=o(Math.min(M,M+G*.022),O-B/2-.025,Math.max(M,M+G*.022),O+B/2+.025,P-it/2-.025,P+it/2+.025,i.classic?a(i.metal,.35,.8):i.id==="loft"?g:f);Vt.userData.hideLow=!0,Vt.castShadow=!1};A(.013,1.62,5.35,1.35,.85,1,5),A(4.192,1.6,5.2,.7,.95,1,9),A(h-.013,1.9,5.6,1.1,.6,-1,13),o(4.19,4.2,5.05,6.2,_,_+.36,p,!0),o(4.19,4.2,4.4,6.2,_+.36,_+.8,p),o(4.42,4.35,4.55,4.85,_+.36,_+.75,m),o(4.42,5.55,4.55,6.05,_+.36,_+.75,m),o(6.45,5.5,7.16,7,.72,.75,f,!0);for(let[M,P]of[[6.48,5.53],[7.13,5.53],[6.48,6.97],[7.13,6.97]])o(M-.02,P-.02,M+.02,P+.02,0,.72,g);o(7.1,5.95,7.14,6.55,.98,1.36,a(789775,.3)),o(7,6.2,7.08,6.3,.75,.98,g),o(6,6,6.4,6.4,.45,.5,a(i.cushion,.8)),o(5.97,6,6,6.4,.5,.95,a(i.cushion,.8)),l(6.2,6.2,.02,.02,0,.45,g),o(4.19,3.15,4.55,3.95,0,2.1,f,!0);let Ot=(()=>{let M=7;return()=>(M=M*16807%2147483647)/2147483647})(),Et=[9190196,3030876,13214026,6126956,15195336,3815994];for(let M=0;M<5;M++){let P=.05+M*.41;o(4.2,3.17,4.55,3.93,P,P+.02,a(i.wood,.6));let O=3.2;for(;O<3.85;){let B=.03+Ot()*.04,it=.22+Ot()*.1;o(4.25,O,4.5,O+B,P+.02,P+.02+it,a(Et[Ot()*6|0],.8)),O+=B+.005}}o(4.6,4,6.3,6.4,.002,.012,a(i.rug2,1));let vt=h-.01,at=vt-2.05,Bt=4.8,ft=6.4;o(at,Bt,vt,ft,i.low?0:.12,.34,a(i.bed,.8),!0),o(at+.04,Bt+.04,vt-.05,ft-.04,.34,.56,w),o(at+.02,Bt+.02,vt-.55,ft-.02,.56,.6,a(i.duvet,.95)),o(at+.02,Bt+.02,at+.5,ft-.02,.6,.63,a(i.throw,.95)),o(vt-.5,Bt+.1,vt-.12,Bt+.75,.56,.7,w),o(vt-.5,ft-.75,vt-.12,ft-.1,.56,.7,w),o(vt-.1,Bt-.1,vt,ft+.1,0,i.classic?1.35:1.1,a(i.classic?i.sofa:i.bed,.9));for(let M of[Bt-.5,ft+.05])o(vt-.45,M,vt-.02,M+.45,i.low?0:.12,.5,f,!0),l(vt-.22,M+.22,.07,.09,.5,.75,a(i.shade,.6)),c(vt-.22,.8,M+.22,.03,new Pe({color:i.lamp}));o(7.8,4.3,9.6,7,.002,.012,a(i.rug,1)),o(8.52,2.96,h-.01,3.56,0,2.25,a(i.id==="scandi"?16052972:i.id==="loft"?2500651:i.id==="lviv"?16052198:14273461,.6),!0);for(let M of[9.11,9.7])o(M-.003,3.56,M+.003,3.57,.05,2.2,a(3355443,.6));for(let M of[9,9.22,9.59,9.81])o(M-.008,3.57,M+.008,3.6,.95,1.35,a(12172996,.25,.9));if(t.closet){let M=t.closet,P=a(i.id==="loft"?2500651:i.id==="lviv"?16052198:i.upper,.55),O=a(12172996,.25,.9),B=[i.sofa,i.textile,i.throw,i.cushion,i.duvet,3028032,14275786,8030874].map(yt=>a(yt,.95)),it=3,G=()=>(it=it*16807%2147483647)/2147483647,K=M.x1+.02,rt=M.x2-.38,dt=.56;for(let yt of[K,(K+rt)/2-.25,(K+rt)/2+.25,rt-.02])o(yt-.01,.01,yt+.01,dt,0,2.3,P,!0);o(K,.01,rt,dt,2.28,2.3,P),o(K,.01,rt,dt,0,.06,P);for(let[yt,N]of[[K+.01,(K+rt)/2-.26],[(K+rt)/2+.26,rt-.03]]){o(yt,.01,N,dt,1.9,1.92,P),o(yt,dt/2-.01,N,dt/2+.01,1.78,1.8,O);for(let ct=yt+.05;ct<N-.04;ct+=.045+G()*.03){let Z=.65+G()*.35;o(ct-.012,.07,ct+.012,dt-.05,1.78-Z,1.77,B[G()*B.length|0])}o(yt+.02,.05,N-.02,dt-.05,.12,.14,P);for(let ct=yt+.1;ct<N-.1;ct+=.22)o(ct-.08,.1,ct+.08,.36,.14,.24,B[5])}for(let yt=.4;yt<2.2;yt+=.36)o((K+rt)/2-.25,.01,(K+rt)/2+.25,dt,yt,yt+.02,P);for(let yt=.42;yt<2.2;yt+=.36)o((K+rt)/2-.2,.08,(K+rt)/2+.2,dt-.08,yt,yt+.18,B[G()*4|0]);let ut=M.x1+.42,Vt=dt+.02,wt=M.z2-.02;o(M.x1+.01,Vt,ut,Vt+.02,0,2.3,P,!0),o(M.x1+.01,wt-.02,ut,wt,0,2.3,P,!0);for(let yt=.05;yt<2.35;yt+=.45)o(M.x1+.01,Vt,ut,wt,yt,yt+.02,P,!0);for(let yt=.07;yt<2.2;yt+=.45)for(let N=Vt+.06;N<wt-.3;N+=.36)G()>.25&&o(M.x1+.05,N,ut-.04,N+.3,yt,yt+.2+G()*.12,a([14272680,15262940,i.cushion,10133670][G()*4|0],.85));o(M.x2-.012,M.door[1]+.1,M.x2-.002,M.z2-.05,.3,2,new Qt({color:13621470,roughness:.05,metalness:.9}))}else{o(4.35,.01,5.95,.6,0,2.5,a(i.id==="loft"?2500651:i.upper,.55),!0);for(let M of[4.75,5.15,5.55])o(M-.003,.6,M+.003,.61,.05,2.45,a(3355443,.6))}o(7.78,.02,8.12,.4,0,.45,f,!0);let T=new St(new ze(.35,.35,.02,40),new Qt({color:13621470,roughness:.05,metalness:.9}));T.rotation.x=Math.PI/2,T.position.set(7.95,1.25,.012),T.scale.set(.7,1,.7),s.add(T);let y=new St(new Mi(.36,.015,8,40),g);y.position.copy(T.position),y.position.z+=.005,y.scale.set(.7,.7,1),s.add(y);let W=a(5208650,.9),j=a(4155965,.9),nt=(M,P,O)=>{l(M,P,.16,.12,0,.32,a(i.id==="loft"?2829616:i.classic?12095818:15327956,.7));for(let B=0;B<7;B++){let it=B*.9,G=.08+B%3*.05;c(M+Math.cos(it)*G,.32+O*(.45+B%4*.15),P+Math.sin(it)*G,.14+B%2*.05,B%2?W:j)}e.push([M-.2,P-.2,M+.2,P+.2,2])};return nt(.4,7.35,1),i.plants>1&&nt(9.95,7.3,.8),i.plants>2&&nt(4.6,7.05,.7),s}var Sv=new te,sd=new qt,bi=new C;function Bc(i){let t=0;for(let a of i)t+=a.geo.index?a.geo.index.count:a.geo.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=0;for(let{geo:a,matrix:o}of i){let l=a.attributes.position,c=a.attributes.normal,h=a.index;sd.getNormalMatrix(o);let u=h?h.count:l.count;for(let d=0;d<u;d++){let f=h?h.getX(d):d;bi.fromBufferAttribute(l,f).applyMatrix4(o),e[s]=bi.x,e[s+1]=bi.y,e[s+2]=bi.z,bi.fromBufferAttribute(c,f).applyMatrix3(sd).normalize(),n[s]=bi.x,n[s+1]=bi.y,n[s+2]=bi.z,s+=3}}let r=new Le;return r.setAttribute("position",new Ve(e,3)),r.setAttribute("normal",new Ve(n,3)),r}function en(i,t){i.updateWorldMatrix(!0,!0);let e=new te().copy(i.matrixWorld).invert(),n=new Map,s=[],r=a=>{for(let o of a.children){let l=o.userData;if(!(!t&&(l.keep||l.wallLike||l.openable||l.hideLow||!o.visible)))if(o.isMesh&&!o.isInstancedMesh&&!Array.isArray(o.material)&&!o.material.map&&o.geometry.attributes.normal&&!o.children.length){let c=o.material.uuid+":"+(o.castShadow?1:0)+(o.receiveShadow?1:0)+":"+o.layers.mask+":"+o.renderOrder;n.has(c)||n.set(c,{sample:o,items:[]}),n.get(c).items.push({geo:o.geometry,matrix:new te().multiplyMatrices(e,o.matrixWorld)}),s.push(o)}else!o.isMesh&&!o.isLight&&!o.isLine&&!o.isLineSegments&&!o.isSprite&&r(o)}};r(i);for(let a of s)a.parent.remove(a);for(let{sample:a,items:o}of n.values()){let l=new St(Bc(o),a.material);l.castShadow=a.castShadow,l.receiveShadow=a.receiveShadow,l.layers.mask=a.layers.mask,l.renderOrder=a.renderOrder,i.add(l)}return i}var f_=49.84,p_=24.03,Gn=Math.PI/180;function kc(i,t,e,n){let s=c=>{let h=new Date(Date.UTC(i,c+1,0));return h.getUTCDate()-h.getUTCDay()},r=t*100+e,a=200+s(2),o=900+s(9),l=r>a&&r<o?3:r===a?n>=3?3:2:r===o&&n<4?3:2;return new Date(Date.UTC(i,t,e)+(n-l)*36e5)}function Hc(i,t=f_,e=p_){let n=i.getTime()/864e5-10957.5,s=(357.529+.98560028*n)*Gn,a=(280.459+.98564736*n+1.915*Math.sin(s)+.02*Math.sin(2*s))*Gn,o=(23.439-36e-8*n)*Gn,l=Math.atan2(Math.cos(o)*Math.sin(a),Math.cos(a)),c=Math.asin(Math.sin(o)*Math.sin(a)),u=((18.697374558+24.06570982441908*n)%24*15+e)*Gn-l,d=t*Gn,f=Math.asin(Math.sin(d)*Math.sin(c)+Math.cos(d)*Math.cos(c)*Math.cos(u));return{az:(Math.atan2(Math.sin(u),Math.cos(u)*Math.sin(d)-Math.tan(c)*Math.cos(d))/Gn+180+360)%360,el:f/Gn}}function Vc(i,t,e){let n=(i-e)*Gn,s=Math.cos(t*Gn);return new C(-Math.sin(n)*s,Math.sin(t*Gn),Math.cos(n)*s)}function oo(i,t,e,n,s){let r=null,a=null,o=null,l=null;for(let c=3;c<=22.5;c+=1/30){let h=Hc(kc(i,t,e,c));h.el>0&&(o==null&&(o=c),l=c);let u=(h.az-n+540)%360-180;h.el>0&&Math.abs(u)<85&&h.el>s(u)&&(r==null&&(r=c),a=c)}return{from:r,to:a,rise:o,set:l}}var _n=i=>i==null?"\u2014":`${Math.floor(i)}:${String(Math.round(i%1*60)%60).padStart(2,"0")}`,Gs=new Te(1,1,1),Fe=class{constructor(t,e=!0){this.mat=t,this.m=[],this.cast=e}add(t,e,n,s,r,a){let o=new te().compose(new C((t+s)/2,(e+r)/2,(n+a)/2),new Ln,new C(Math.abs(s-t)||.001,Math.abs(r-e)||.001,Math.abs(a-n)||.001));this.m.push(o)}mesh(){let t=new Fs(Gs,this.mat,this.m.length);return this.m.forEach((e,n)=>t.setMatrixAt(n,e)),t.castShadow=this.cast,t.receiveShadow=!0,t}},ad=[],be=(i,t=.85,e=0)=>{let n=new Qt({color:i,roughness:t,metalness:e});return ad.push(n),n},zc=new Map,m_=i=>(zc.has(i)||zc.set(i,be(i,.92)),zc.get(i));function od(i){for(let t of ad)t.userData.keepEmissive||t.emissive.copy(t.color).multiplyScalar(i)}function rd(i,t,e){let{x0:n,x1:s,fz:r,dir:a,y0:o,floors:l,fh:c,seed:h}=e,u=13,d=h,f=()=>(d=d*16807%2147483647)/2147483647,g=[15986922,14468774,11186392,15986922,15195596],x=o+.45+l*c,m=n,p=h%3;for(;m<s-.5;){let w=Math.min(s-m,9+f()*7),_=g[p++%g.length],b=(p%2?0:.18)*a,D=r+b,R=D-a*u,I=new St(Gs,m_(_)),U=x-(e.drop||0);I.scale.set(w,U-o,u),I.position.set(m+w/2,(U+o)/2,(D+R)/2),I.castShadow=!0,I.receiveShadow=!0,i.add(I),e.drop?t.slab.add(m,U,Math.min(D,R),m+w,U+.05,Math.max(D,R)):t.parapet.add(m,x,Math.min(D,R),m+w,x+.12,Math.max(D,R)),t.plinth.add(m,o,D-a*.03,m+w,o+.45,D+a*.02);let E=Math.max(2,Math.round(w/2.9)),v=w/E;for(let L=0;L<E;L++){let F=m+v*(L+.5),H=1.25+L%2*.35,$=(L+p)%3===0&&w>10;for(let Q=0;Q<l;Q++){let V=o+.45+Q*c,st=V+.12,X=V+2.45,et=D+a*.005;if(Q===0&&L===Math.floor(E/2)&&p%3===1){t.glass.add(F-.8,V,et,F+.8,V+2.4,et+a*.02),t.frame.add(F-.85,V+2.4,et,F+.85,V+2.5,et+a*.06),t.frame.add(F-.02,V,et,F+.02,V+2.4,et+a*.06),t.slab.add(F-1.2,V+2.7,et,F+1.2,V+2.82,et+a*1.2),t.lamp.add(F-.05,V+2.62,et+a*.6,F+.05,V+2.68,et+a*.7);continue}if(t.glass.add(F-H/2,st,et,F+H/2,X,et+a*.01),t.frame.add(F-H/2-.06,st,et,F-H/2,X,et+a*.07),t.frame.add(F+H/2,st,et,F+H/2+.06,X,et+a*.07),t.frame.add(F-H/2-.06,X,et,F+H/2+.06,X+.06,et+a*.07),t.frame.add(F-H/2-.06,st-.05,et,F+H/2+.06,st,et+a*.09),t.frame.add(F-.03+H*.1,st,et,F+.03+H*.1,X,et+a*.06),t.frame.add(F-H/2,st+.95,et,F+H/2,st+1,et+a*.06),f()<.25&&t.curtain.add(F-H/2+.05,st+.1,et-a*.05,F-H/2+.35,X-.05,et-a*.04),Q>0&&$){let lt=H+.5,Ct=1.05,zt=D,Kt=D+a*Ct;t.slab.add(F-lt/2,V-.05,zt,F+lt/2,V+.13,Kt),t.bar.add(F-lt/2,V+1.05,Kt-a*.02,F+lt/2,V+1.09,Kt),t.bar.add(F-lt/2,V+1.05,zt,F-lt/2+.04,V+1.09,Kt),t.bar.add(F+lt/2-.04,V+1.05,zt,F+lt/2,V+1.09,Kt);for(let J=-lt/2+.05;J<=lt/2-.04;J+=.11)t.bar.add(F+J-.01,V+.13,Kt-a*.02,F+J+.01,V+1.05,Kt-a*0);for(let J=.12;J<Ct-.05;J+=.11)t.bar.add(F-lt/2,V+.13,D+a*J,F-lt/2+.02,V+1.05,D+a*(J+.02)),t.bar.add(F+lt/2-.02,V+.13,D+a*J,F+lt/2,V+1.05,D+a*(J+.02))}else if(Q>0&&f()<.18){let lt=F+H/2+.25;t.ac.add(lt,V+.4,D,lt+.75,V+.95,D+a*.3)}}}m+=w}return x}function ld(i,t){let e=new ae,n=i.width,s=i.depth,r=t.below,a=t.gap,o=t.floors,l=3,c=-r,h=s+.3,u=h+a,d=n/2-38,f=n/2+38,g=()=>({glass:new Fe((()=>{let A=be(3885658,.15,.45);return A.emissive.set(1911352),A.userData.keepEmissive=!0,A})(),!1),frame:new Fe(be(3159098,.5,.3)),slab:new Fe(be(10329499,.9)),bar:new Fe(be(1842721,.5,.5)),ac:new Fe(be(15856111,.6)),parapet:new Fe(be(9409174,.8)),plinth:new Fe(be(7303797,.9)),curtain:new Fe(be(15327956,1),!1),lamp:new Fe(new Pe({color:16773584}),!1),curb:new Fe(be(12433840,.9),!1),fence:new Fe(be(1842721,.5,.5)),hedge:new Fe(be(4155957,1)),bench:new Fe(be(13081186,.7)),benchF:new Fe(be(2829875,.5,.5)),pole:new Fe(be(2829875,.5,.5)),line:new Fe(be(15658730,.8),!1)}),x=g(),m=g();m.glass=x.glass,m.glass=new Fe(x.glass.mat,!1);let p=new ae;e.add(p),rd(e,x,{x0:d+8,x1:f-8,fz:h,dir:1,y0:c,floors:2,fh:l,seed:11,drop:.08});let _=rd(p,m,{x0:d,x1:f,fz:u,dir:-1,y0:c,floors:o,fh:l,seed:7}),b=be(7309909,1),D=be(11052187,.95),R=be(4079942,.95),I=(A,Ot,Et,vt,at,Bt=0)=>{let ft=new St(new tn(Et-A,Math.abs(vt-Ot)),at);return ft.rotation.x=-Math.PI/2,ft.position.set((A+Et)/2,c+Bt,(Ot+vt)/2),ft.receiveShadow=!0,e.add(ft),ft};I(n/2-90,h-30,n/2+90,u+40,b,-.01);let U=a/18,E=h+3*U,v=E+2*U,L=u-7*U,F=L+2*U;I(d-10,E,f+10,v,D,.02),I(d-10,L,f+10,F,D,.02),I(d-10,v,f+10,L,R,.015);for(let A=d-10;A<f+10;A+=6)x.line.add(A,c+.02,(v+L)/2-.06,A+3,c+.025,(v+L)/2+.06);x.curb.add(d-10,c,v-.08,f+10,c+.15,v+.04),x.curb.add(d-10,c,L-.04,f+10,c+.15,L+.08);for(let[A,Ot]of[[E-.15,E-.75],[F+.15,F+.75]]){x.fence.add(d,c+.95,A-.02,f,c+1,A+.02),x.fence.add(d,c+.1,A-.015,f,c+.14,A+.015);for(let Et=d;Et<f;Et+=.14)x.fence.add(Et-.008,c,A-.008,Et+.008,c+1,A+.008);x.hedge.add(d,c,Math.min(Ot,A)-.3,f,c+.85,Math.min(Ot,A)+.3+Math.abs(Ot-A)-.6+.35)}for(let A=d+4;A<f;A+=14){x.pole.add(A-.05,c,F-.4,A+.05,c+4.2,F-.3),x.pole.add(A-.25,c+4.15,F-.45,A+.25,c+4.3,F-.25),x.lamp.add(A-.2,c+4.1,F-.42,A+.2,c+4.15,F-.28);let Ot=A+6,Et=F-1;for(let vt=0;vt<4;vt++)x.bench.add(Ot-.9,c+.45+(vt<3?0:.2),Et-.25+vt*.13*(vt<3?1:.6),Ot+.9,c+.48+(vt<3?0:.35),Et-.15+vt*.13*(vt<3?1:.6));x.benchF.add(Ot-.85,c,Et-.3,Ot-.8,c+.9,Et+.2),x.benchF.add(Ot+.8,c,Et-.3,Ot+.85,c+.9,Et+.2)}let H=[9051940,14277339,2832981,4540492,10134443],$=5,Q=()=>($=$*16807%2147483647)/2147483647,V=be(1710618,.8),st=new ze(.33,.33,.24,14);for(let A=0;A<6;A++){let Ot=d+6+A*11+Q()*4,Et=A%2?L-1.2:v+1.2,vt=be(H[A%H.length],.35,.5),at=new ae,Bt=new St(Gs,vt);Bt.scale.set(4.3,.7,1.8),Bt.position.y=.55,at.add(Bt);let ft=new St(Gs,vt);ft.scale.set(2.3,.55,1.6),ft.position.set(-.2,1.15,0),at.add(ft);let T=new St(Gs,x.glass.mat);T.scale.set(2.2,.45,1.62),T.position.set(-.2,1.15,0),at.add(T);for(let[y,W]of[[-1.35,-.85],[1.35,-.85],[-1.35,.85],[1.35,.85]]){let j=new St(st,V);j.rotation.x=Math.PI/2,j.position.set(y,.33,W),at.add(j)}at.position.set(Ot,c,Et),at.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),e.add(at)}let X=[5208650,6130256,6983486].map(A=>be(A,.9)),et=be(5981750,1),lt=be(3103290,.95),Ct=[],zt=new ae,Kt=new ze(.02,.05,1.3,5),J=new Za(1,1);zt.userData.keep=!0,e.add(zt);let ot=X.map(A=>{let Ot=new St(new Le,A);return Ot.castShadow=!0,Ot.userData.keep=!0,Ot.frustumCulled=!1,e.add(Ot),Ot}),Rt=-1,pt=A=>{A!==Rt&&(Rt=A,ot.forEach((Ot,Et)=>{let vt=Ct.filter(at=>at.mi===Et).map(at=>({geo:J,matrix:new te().compose(new C(at.c[0]+at.o[0]*A,at.c[1]+at.o[1]*A,at.c[2]+at.o[2]*A),new Ln,new C(at.r*A,at.r*A,at.r*A))}));Ot.geometry.dispose(),Ot.geometry=Bc(vt)}))},Ut=3,Nt=()=>(Ut=Ut*16807%2147483647)/2147483647,kt=(A,Ot,Et)=>{let vt=new St(new ze(.08,.14,Et,7),et);vt.position.set(A,c+Et/2,Ot),vt.castShadow=!0,e.add(vt);for(let at=0;at<5;at++){let Bt=at*1.3+Nt(),ft=at?.55:0,T=.7+Nt()*.4;Ct.push({c:[A,c+Et,Ot],o:[Math.cos(Bt)*ft,.4+(at?Nt()*.6:.9),Math.sin(Bt)*ft],r:T,mi:at%3})}for(let at=0;at<5;at++){let Bt=new St(Kt,et),ft=at*1.25+Nt();Bt.position.set(A+Math.cos(ft)*.35,c+Et+.3,Ot+Math.sin(ft)*.35),Bt.rotation.set(Math.sin(ft)*.6,0,-Math.cos(ft)*.6),zt.add(Bt)}};for(let A=d+2;A<f;A+=8+Nt()*3)kt(A,E+.6,2.6+Nt()*1.2),kt(A+4,F-.6-.9,2.8+Nt()*1.4);for(let A of[n/2-12,n/2+17]){let Ot=new St(new Bs(.9,3.2,10),lt);Ot.position.set(A,c+1.9,u+2),Ot.castShadow=!0,e.add(Ot);let Et=new St(new ze(.1,.12,.6,6),et);Et.position.set(A,c+.3,u+2),e.add(Et)}let ne=new St(Gs,be(16054266,.9));ne.scale.set(f-d,.1,12.6),ne.position.set((d+f)/2,_+.13,u+6.5),ne.userData.keep=!0,p.add(ne);for(let A of Object.values(x))A.m.length&&e.add(A.mesh());for(let A of Object.values(m))A.m.length&&p.add(A.mesh());p.userData.keep=!0,en(p),en(zt),en(e),p.traverse(A=>A.layers.set(1));let jt=[[15331058,null,0,1],[14936298,null,0,1],[9083482,null,0,0],[9286490,[11917706,15910614,10275941],.8,0],[8366421,[8172354,9159498,6987582],1,0],[7314e3,[5208650,6130256,6983486],1,0],[7309909,[4879172,5603144,6588988],1,0],[8030802,[5208650,6983486,8359738],1,0],[8358485,[9411130,14262842,6983486],1,0],[9077845,[14715438,13194798,15119162],.95,0],[8223322,[10511662,9067054,11565626],.55,0],[14673384,null,0,1]];function me(A){let[Ot,Et,vt,at]=jt[A];b.color.set(Ot),D.color.set(at?14278113:11052187),ot.forEach(Bt=>{Bt.visible=!!Et}),Et&&pt(vt),Et&&X.forEach((Bt,ft)=>Bt.color.set(Et[ft])),zt.visible=!Et||vt<.7,ne.visible=!!at}return{group:e,top:_,setSeason:me}}var xt=i=>document.getElementById(i),de=new URLSearchParams(location.search),cd=window.Kvartyra||null,Yt={get(i,t){try{let e=localStorage.getItem("kv."+i);return e==null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("kv."+i,JSON.stringify(t))}catch{}}},Re=qi.height,zr=de.get("layout")||Yt.get("layout","plan");zr==="closet"&&td(qi);var Ce=new Ha({antialias:!0,powerPreference:"high-performance"}),nh=window.devicePixelRatio||1,po=Math.min(nh,1.5),Ri=de.get("q")||Yt.get("q","auto"),Ki=Ri==="lite"||Ri==="auto"&&Yt.get("autoLite",!1),Md=()=>Math.min(nh,Ki?1.5:2,Math.sqrt(52e5/Math.max(1,innerWidth*innerHeight))),on=Ri==="high"?po:Math.max(.6,Math.min(po,Yt.get("movePR",Math.min(nh,1.25)))),Gc=po,mo=Md();Ce.setPixelRatio(mo);Ce.shadowMap.enabled=!0;Ce.shadowMap.autoUpdate=!1;var $i=3,co=!0,Xc=0;function Sn(i){$i=Math.max($i,2),Xc=performance.now(),i&&(co=!0)}Ce.shadowMap.type=wc;Ce.toneMapping=Tc;Ce.toneMappingExposure=1.12;document.body.prepend(Ce.domElement);var Ae=new wr,ce=new He(50,1,.05,200),ho=new Qa(15855854,11050640,1.2);Ae.add(ho);var ke=new Cr(16773596,2.4);ke.castShadow=!0;ke.shadow.mapSize.set(2048,2048);ke.shadow.radius=4;Object.assign(ke.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:100});ke.shadow.bias=-6e-4;ke.shadow.normalBias=.02;ke.shadow.camera.layers.enable(1);Ae.add(ke,ke.target);var Ci=qi.width/2,Vr=qi.depth/2;ke.target.position.set(Ci,0,Vr);var kr=new Cr(15921386,0);kr.position.set(Ci,2.2,qi.depth+4);kr.target.position.set(Ci,.2,0);Ae.add(kr,kr.target);function er(i,t,e,n,s){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let a=new Os(r);return a.wrapS=a.wrapT=Is,a.repeat.set(n,s),a.colorSpace=qe,a.anisotropy=4,a}function go(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function uo(i,t){return er(1024,1024,(e,n,s)=>{let r=go(t),a=128;for(let o=0;o<s;o+=a){let l=-r()*600;for(;l<n;){let c=520+r()*420,h=(r()-.5)*11,u=i[0]+(r()-.5)*5,d=i[1]+(r()-.5)*6;e.save(),e.beginPath(),e.rect(l,o,c,a),e.clip(),e.fillStyle=`hsl(${u},${d}%,${i[2]+h}%)`,e.fillRect(l,o,c,a);for(let g=0;g<26;g++){let x=o+r()*a,m=r()>.35;e.globalAlpha=.03+r()*.07,e.strokeStyle=m?"#3a2412":"#fff3dc",e.lineWidth=.6+r()*1.6,e.beginPath(),e.moveTo(l,x),e.bezierCurveTo(l+c*.3,x+(r()-.5)*10,l+c*.7,x+(r()-.5)*10,l+c,x+(r()-.5)*6),e.stroke()}if(r()>.55){let g=l+c*(.25+r()*.5),x=o+a*(.35+r()*.3);e.strokeStyle="#3a2412",e.lineWidth=1.2;for(let m=1;m<6;m++)e.globalAlpha=.05+.012*m,e.beginPath(),e.ellipse(g,x,m*(26+r()*10),m*5.5,0,0,7),e.stroke()}if(r()>.86){let g=l+c*r(),x=o+a*(.2+r()*.6),m=e.createRadialGradient(g,x,0,g,x,9);m.addColorStop(0,"rgba(50,28,12,.55)"),m.addColorStop(1,"rgba(50,28,12,0)"),e.globalAlpha=1,e.fillStyle=m,e.fillRect(g-10,x-10,20,20)}let f=e.createLinearGradient(0,o,0,o+a);f.addColorStop(0,"rgba(0,0,0,.07)"),f.addColorStop(.5,"rgba(255,255,255,.04)"),f.addColorStop(1,"rgba(0,0,0,.09)"),e.globalAlpha=1,e.fillStyle=f,e.fillRect(l,o,c,a),e.restore(),e.fillStyle="rgba(30,18,8,.42)",e.fillRect(l,o,2,a),l+=c}e.fillStyle="rgba(30,18,8,.42)",e.fillRect(0,o,n,2),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(0,o+2,n,1)}},.7,.7)}function qc(i,t,e){return er(512,512,(n,s,r)=>{let a=s/e,o=go(7);for(let l=0;l<e;l++)for(let c=0;c<e;c++){n.fillStyle=(l+c)%2?i:t,n.fillRect(l*a,c*a,a,a),n.globalAlpha=.03+o()*.05,n.fillStyle=o()>.5?"#fff":"#000",n.fillRect(l*a,c*a,a,a),n.globalAlpha=1;for(let h=0;h<3;h++){let u=n.createRadialGradient(0,0,0,0,0,1);u.addColorStop(0,o()>.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.05)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.save(),n.beginPath(),n.rect(l*a,c*a,a,a),n.clip(),n.translate(l*a+o()*a,c*a+o()*a),n.scale(a*.6,a*.35),n.fillStyle=u,n.fillRect(-1,-1,2,2),n.restore()}}n.strokeStyle="rgba(70,70,68,.35)",n.lineWidth=3;for(let l=0;l<=e;l++)n.beginPath(),n.moveTo(l*a,0),n.lineTo(l*a,r),n.moveTo(0,l*a),n.lineTo(s,l*a),n.stroke();n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=1;for(let l=0;l<=e;l++)n.beginPath(),n.moveTo(l*a+2.5,0),n.lineTo(l*a+2.5,r),n.moveTo(0,l*a+2.5),n.lineTo(s,l*a+2.5),n.stroke()},1.6,1.6)}function g_(){return er(512,512,(i,t,e)=>{let n=go(5);i.fillStyle="#a3a29d",i.fillRect(0,0,t,e);for(let s=0;s<9e3;s++){let r=140+n()*50|0;i.fillStyle=`rgba(${r},${r},${r-3},${.04+n()*.06})`;let a=1+n()*7;i.fillRect(n()*t,n()*e,a,a)}for(let s=0;s<40;s++){let r=120+n()*70|0,a=i.createRadialGradient(0,0,0,0,0,1);a.addColorStop(0,`rgba(${r},${r},${r},.10)`),a.addColorStop(1,"rgba(0,0,0,0)"),i.save(),i.translate(n()*t,n()*e),i.scale(40+n()*90,40+n()*90),i.fillStyle=a,i.fillRect(-1,-1,2,2),i.restore()}},.4,.4)}var Yc={concrete:g_,oak:()=>uo([32,45,58],11),light:()=>uo([36,40,70],23),walnut:()=>uo([26,38,44],37),tile:()=>qc("#d9dde0","#cfd4d8",4),stone:()=>qc("#bfb6aa","#b5ab9e",3)};Object.assign(Yc,nd(er,uo,qc,go));var hd={},x_=i=>hd[i]||(hd[i]=(Yc[i]||Yc.oak)()),Tt={wall:new Qt({color:16316404,roughness:.92}),wallTop:new Qt({color:3882826,roughness:.8}),ext:new Qt({color:15130064,roughness:.95}),glass:new Qt({color:13625077,transparent:!0,opacity:.2,roughness:.03,metalness:0,depthWrite:!1,envMapIntensity:2.2}),base:new Qt({color:15987438,roughness:.55}),frame:new Qt({color:16448250,roughness:.5}),door:new Qt({color:9071180,roughness:.6}),entry:new Qt({color:4869976,roughness:.5,metalness:.3}),white:new Qt({color:16777215,roughness:.25}),counter:new Qt({color:14209736,roughness:.4}),cabinet:new Qt({color:7305836,roughness:.6}),steel:new Qt({color:10133670,roughness:.3,metalness:.7}),ground:new Qt({color:6253397,roughness:1})},nn=new ae;Ae.add(nn);var bn=new ae;nn.add(bn);var we=[],ih=[];function Zt(i,t,e,n,s,r,a,o,l={}){let c=e-i,h=n-t,u=r-s,d=l.round||o&&o.userData.round?ro(c,u,h,!1):0,f=new St(d>0?so(c,u,h,d):new Te(c,u,h),a);return f.position.set((i+e)/2,(s+r)/2,(t+n)/2),f.castShadow=l.cast!==!1,f.receiveShadow=!0,(o||bn).add(f),f}function __(i,t,e,n,s,r,a){r=(r||[]).slice().sort((h,u)=>h.a-u.a);let o=(h,u,d,f,g)=>i==="x"?Zt(h,t,u,e,d,f,g):Zt(t,h,e,u,d,f,g),l=(h,u,d)=>{let f=i==="x"?[h,t,u,e]:[t,h,e,u];we.push(f),d&&ih.push(f)},c=n;for(let h of r){h.a>c&&(o(c,h.a,0,Re,a),l(c,h.a,!0));let u=h.type==="win"||h.type==="balcony"||h.type==="fixed"?Ft.winTop:2.1,d=Ft.winSill;if(o(h.a,h.b,u,Re,a),h.type==="fixed"){o(h.a,h.b,0,d,a),l(h.a,h.b);let f=(t+e)/2,g=d+.95;Zt(h.a,f-.01,h.b,f+.01,d,u,Tt.glass).castShadow=!1,Zt(h.a,t-.02,h.b,e+.02,d-.03,d,Tt.frame),Zt(h.a,f-.04,h.b,f+.04,g-.03,g+.03,Tt.frame),Zt(h.a,f-.04,h.b,f+.04,u-.04,u,Tt.frame),Zt(h.b-.05,f-.04,h.b,f+.04,d,u,Tt.frame)}if(h.type==="win"){o(h.a,h.b,0,d,a),l(h.a,h.b);let f=(t+e)/2,g=h.b-(h.b-h.a)*.6,x=d+.95;if(i==="x"){Zt(g,f-.01,h.b,f+.01,d,u,Tt.glass).castShadow=!1,Zt(h.a,f-.01,g,f+.01,d,x,Tt.glass).castShadow=!1;let m=g-h.a-.05,p=u-x-.03,w=new ae;w.position.set(h.a+.02,x+.03,t+.03);let _=new St(new Te(m,p-.06,.02),Tt.glass);_.position.set(m/2,p/2,0);let b=new ae;for(let[R,I,U,E]of[[m,.05,m/2,.025],[m,.05,m/2,p-.025],[.05,p,.025,p/2],[.05,p,m-.025,p/2]]){let v=new St(new Te(R,I,.06),Tt.frame);v.position.set(U,E,0),v.castShadow=!0,b.add(v)}let D=new St(new Te(.14,.03,.05),Tt.steel);D.position.set(m/2,p-.12,-.05),w.add(_,b,D),bn.add(w),w.traverse(R=>{R.userData.openable=w}),Ii.push({g:w,kind:"win",axis:"x",a0:0,a1:-.14,open:!1,cur:0}),Zt(h.a,t-.02,h.b,e+.02,d-.03,d,Tt.frame),Zt(g-.035,f-.04,g+.035,f+.04,d,u,Tt.frame),Zt(h.a,f-.04,h.b,f+.04,x-.03,x+.03,Tt.frame),Zt(h.a,f-.04,h.b,f+.04,u-.04,u,Tt.frame)}else Zt(f-.01,h.a,f+.01,h.b,d,u,Tt.glass).castShadow=!1;i!=="x"&&Zt(t-.02,h.a,e+.02,h.b,d-.03,d,Tt.frame)}c=h.b}s>c&&(o(c,s,0,Re,a),l(c,s,!0))}var Ii=[];function v_(i,t,e,n,s,r,a){let o=new ae,l;if(a){l=new ae;let h=Ft.winTop-.03;for(let[d,f,g,x]of[[e,.08,e/2,.04],[e,.08,e/2,h-.04],[.08,h,.04,h/2],[.08,h,e-.04,h/2],[e,.06,e/2,Ft.winSill+.95]]){let m=new St(new Te(d,f,.06),Tt.frame);m.position.set(g,x,0),m.castShadow=!0,l.add(m)}let u=new St(new Te(e-.12,h-.12,.02),Tt.glass);u.position.set(e/2,h/2,0),l.add(u)}else l=new St(new Te(e,2.05,r||.04),s||Tt.door),l.position.set(e/2,1.025,0),l.castShadow=!0,l.receiveShadow=!0;let c=new St(new pn(.03,10,8),Tt.steel);return c.position.set(e-.08,1,.04),o.add(l,c),o.position.set(i,0,t),o.rotation.y=n,bn.add(o),o}var Ft=qi;for(let i of Ft.walls)__(i.axis,i.t1,i.t2,i.from,i.to,i.holes,i.ext?Tt.ext:Tt.wall);var bd=[];for(let i of Ft.doors){let t=i.angle*Math.PI/180,e=Math.round(t/(Math.PI/2))*(Math.PI/2)||0,n=!i.entry,s=v_(i.x,i.z,i.w,n?t:e,i.entry?Tt.entry:i.white?Tt.frame:Tt.door,i.entry?.07:.04,!!i.white);!i.entry&&!i.white&&bd.push(s);let r=i.x+Math.cos(e)*i.w,a=i.z-Math.sin(e)*i.w,o=[Math.min(i.x,r)-.03,Math.min(i.z,a)-.03,Math.max(i.x,r)+.03,Math.max(i.z,a)+.03,3],l={g:s,kind:"door",a0:e,a1:t,open:n,cur:n?1:0,block:o,inner:!i.entry&&!i.white};n||we.push(o),s.traverse(c=>{c.userData.openable=s}),Ii.push(l)}function Sd(i){if(i.open=!i.open,i.block){let t=we.indexOf(i.block);i.open&&t>=0&&we.splice(t,1),!i.open&&t<0&&we.push(i.block)}}function y_(i){let t=!1;for(let e of Ii){let n=e.open?1:0;if(e.cur===n)continue;t=!0,e.cur+=Math.sign(n-e.cur)*Math.min(Math.abs(n-e.cur),i*1.6);let s=e.cur*e.cur*(3-2*e.cur);e.g.rotation[e.axis||"y"]=e.a0+(e.a1-e.a0)*s}return t}function M_(i,t){wi.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Fn.setFromCamera(wi,ce);let e=Ii.filter(r=>r.g.visible&&r.g.parent&&r.g.parent.visible).map(r=>r.g),n=Fn.intersectObjects(e,!0)[0];if(!n||ee==="walk"&&n.distance>5)return!1;let s=Ii.find(r=>r.g===n.object.userData.openable);return!s||s.inner&&yn?!1:(Sd(s),!0)}var Ks=[],Ed=[];for(let i of Ft.rooms){for(let[e,n,s,r]of i.rects){let a=new St(new tn(s-e,r-n),Tt.wall);Ed.push({m:a,room:i.name,as:i.floorAs,w:s-e,h:r-n,key:i.floor}),a.rotation.x=-Math.PI/2,a.position.set((e+s)/2,.001,(n+r)/2),a.receiveShadow=!0,nn.add(a)}let t=i.area||i.rects.reduce((e,[n,s,r,a])=>e+(r-n)*(a-s),0);Ks.push({name:i.name,area:t,pos:new C(i.label[0],.05,i.label[1])})}var ud=new Qt({color:2040358,roughness:.5,metalness:.4}),b_=new Qt({color:16185076,roughness:.45}),$c=[],Hr=new ae;Hr.userData.round=!0;nn.add(Hr);for(let i of Ft.balcony){let[t,e,n,s]=i,r=n-t>s-e,a=(t+n)/2,o=(e+s)/2,l=r?n-t:s-e,c=.02,h=(d,f,g,x,m)=>r?Zt(d,o-m,f,o+m,g,x,ud,bn,{cast:!1}):Zt(a-m,d,a+m,f,g,x,ud,bn,{cast:!1}),u=r?t:e;h(u,u+l,1,1.05,.025),h(u,u+l,.1,.13,c);for(let d=u+.06;d<u+l-.03;d+=.12)h(d-.009,d+.009,0,1,.009);we.push(i)}for(let i of Ft.walls)for(let t of i.holes||[]){if(t.type!=="win"&&t.type!=="fixed"||i.axis!=="x"||i.t1<1)continue;let e=t.type==="fixed"?(t.a+t.b)/2+.05:t.b-(t.b-t.a)*.3,n=Math.min(1,t.type==="fixed"?t.b-t.a-.25:(t.b-t.a)*.6-.15);Zt(e-n/2,i.t1-.17,e+n/2,i.t1-.07,.12,.62,b_,Hr);for(let s=e-n/2+.03;s<e+n/2-.02;s+=.05)$c.push([s,i.t1-.175]);Zt(e-.015,i.t1-.12,e+.015,i.t1-.07,0,.12,Tt.steel,Hr),we.push([e-n/2,i.t1-.17,e+n/2,i.t1-.07])}{let i=new Fs(new Te(.012,.44,.008),new Qt({color:14606046,roughness:.5}),$c.length),t=new te;$c.forEach(([e,n],s)=>{t.makeTranslation(e,.37,n),i.setMatrixAt(s,t)}),nn.add(i)}var Qs=new ae;bn.add(Qs);for(let i of Ft.walls)if(!i.ext){for(let t of i.holes||[])if(t.type==="door")for(let[e,n]of[[i.t1-.014,i.t1],[i.t2,i.t2+.014]]){let s=(r,a,o,l)=>i.axis==="x"?Zt(r,e,a,n,o,l,Tt.frame,Qs,{round:!0}):Zt(e,r,n,a,o,l,Tt.frame,Qs,{round:!0});s(t.a-.07,t.a,0,2.17),s(t.b,t.b+.07,0,2.17),s(t.a-.07,t.b+.07,2.1,2.17)}}var ve=new ae;ve.userData.round=!0;nn.add(ve);for(let i of Ft.fixtures){let[t,e,n,s]=i.r;if(i.type==="kitchen"){Zt(t,e,n,s,0,.86,Tt.cabinet,ve),Zt(t-.02,e,n+.02,s+.02,.86,.9,Tt.counter,ve);let r=e+(s-e)*.7,a=e+(s-e)*.25;Zt((t+n)/2-.2,r-.2,(t+n)/2+.2,r+.2,.9,.91,Tt.steel,ve,{cast:!1}),Zt((t+n)/2-.25,a-.25,(t+n)/2+.25,a+.25,.9,.905,new Qt({color:1382170,roughness:.2}),ve,{cast:!1}),we.push([t,e,n,s,1])}else if(i.type==="counter")Zt(t,e,n,s,.1,.86,Tt.cabinet,ve),Zt(t,e+.04,n,s-.04,0,.1,Tt.wallTop,ve,{cast:!1}),Zt(t,e,n,s+.02,.86,.9,Tt.counter,ve),i.sink&&Zt(i.sink[0],e+.08,i.sink[1],s-.1,.9,.905,Tt.steel,ve,{cast:!1}),i.hob&&Zt(i.hob[0],e+.06,i.hob[1],s-.06,.9,.906,new Qt({color:1382170,roughness:.2}),ve,{cast:!1}),we.push([t,e,n,s,1]);else if(i.type==="tall"||i.type==="fridge")Zt(t,e,n,s,0,2.25,Tt.cabinet,ve),we.push([t,e,n,s,1]);else if(i.type==="washer")Zt(t,e,n,s,0,.85,Tt.white,ve),we.push([t,e,n,s,1]);else if(i.type==="vent")Zt(t,e,n,s,0,Re,Tt.wall),we.push([t,e,n,s]),ih.push([t,e,n,s]);else if(i.type==="bath")Zt(t,e,n,s,0,.56,Tt.white,ve),Zt(t+.08,e+.08,n-.08,s-.08,.4,.565,new Qt({color:13625071,roughness:.1}),ve,{cast:!1}),we.push([t,e,n,s,1]);else if(i.type==="toilet"){let r=(t+n)/2-.05,a=(e+s)/2,o=new St(new pn(.2,24,16),Tt.white);o.scale.set(1.35,.95,.95),o.position.set(r,.32,a),o.castShadow=!0,ve.add(o);let l=new St(new Mi(.17,.035,10,28),Tt.white);l.rotation.x=Math.PI/2,l.scale.set(1.3,1,1),l.position.set(r,.43,a),ve.add(l);let c=i.back;Zt(c[0],c[1],c[2],c[3],.2,1.15,Tt.white,ve),Zt(c[0]-.012,a-.12,c[0],a+.12,.95,1.1,Tt.steel,ve),we.push([t,e,n,s,1])}else if(i.type==="sink"){Zt(t,e,n,s,.15,.8,Tt.cabinet,ve),Zt(t,e,n,s,.8,.86,Tt.white,ve);let r=new St(new pn(.17,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),new Qt({color:15331056,roughness:.15,side:Ye}));r.scale.set(1.1,.5,.9),r.position.set((t+n)/2,.865,(e+s)/2),ve.add(r);let a=Math.abs(s-e)<Math.abs(n-t)?s>2?s-.05:e+.05:(e+s)/2,o=new St(new ze(.015,.02,.2,10),Tt.steel);o.position.set((t+n)/2,.96,a),ve.add(o),we.push([t,e,n,s,1])}else i.type==="panel"&&Zt(t,e,n,s,1.35,1.85,Tt.frame,bn)}var sh=[],Zc=new Pe({color:9211020}),S_=new Qt({color:16053232,roughness:.5}),xo=new ae,_o=new ae,vo=new ae;nn.add(xo,_o,vo);var E_=er(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,236,200,1)"),e.addColorStop(.25,"rgba(255,214,160,.45)"),e.addColorStop(1,"rgba(255,200,140,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)},1,1),w_=new Tr({map:E_,blending:Ra,depthWrite:!1,transparent:!0,opacity:.85,fog:!1});for(let[i,t]of Ft.lamps){let e=new to(16765594,0,6,1.6);e.position.set(i,Re-.3,t),nn.add(e);let n=new St(new ze(.19,.2,.012,32),Zc);n.position.set(i,Re-.062,t);let s=new St(new ze(.2,.2,.055,32,1,!0),S_);s.position.set(i,Re-.03,t),xo.add(n,s);let r=new St(new pn(.045,12,8),Zc);r.position.set(i,Re-.3,t);let a=new St(new ze(.004,.004,.26,5),Tt.entry);a.position.set(i,Re-.13,t),_o.add(r,a);let o=new Wa(w_);o.scale.setScalar(1.1),o.position.set(i,Re-.16,t),vo.add(o),sh.push({l:e})}en(xo);en(_o);var rh={socket:{h:.3,c:16777215,name:"\u0420\u043E\u0437\u0435\u0442\u043A\u0430",note:"30 \u0441\u043C"},socket2:{h:.3,c:16777215,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430",note:"30 \u0441\u043C"},kitchen:{h:1,c:15905884,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E",note:"100 \u0441\u043C"},net:{h:.3,c:6080744,name:"\u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442",note:"30 \u0441\u043C"},intercom:{h:1.3,c:10189808,name:"\u0414\u043E\u043C\u043E\u0444\u043E\u043D",note:"130 \u0441\u043C"},hood:{h:2.1,c:15235676,name:"\u0412\u0438\u0442\u044F\u0436\u043A\u0430",note:"210 \u0441\u043C"},boiler:{h:2.1,c:15228042,name:"\u0411\u043E\u0439\u043B\u0435\u0440",note:"210 \u0441\u043C"},ac:{h:2.4,c:6088880,name:"\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440",note:"240 \u0441\u043C"},switch:{h:.9,c:13202234,name:"\u0412\u0438\u043C\u0438\u043A\u0430\u0447",note:"90 \u0441\u043C"},switch2:{h:.9,c:13202234,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0438\u0439 \u0432\u0438\u043C\u0438\u043A\u0430\u0447",note:"90 \u0441\u043C"},km:{h:.3,c:10133670,name:"\u041C\u043E\u043D\u0442\u0430\u0436\u043D\u0430 \u043A\u043E\u0440\u043E\u0431\u043A\u0430",note:"30 \u0441\u043C"},panel:{h:1.6,c:7831434,name:"\u0429\u0438\u0442\u043E\u043A \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u0438\u0439",note:"160 \u0441\u043C"}},Gr=new ae;Gr.visible=!1;nn.add(Gr);var js=!1,Ws=!1,wd={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},T_=new Te(.09,.09,.015),A_=new pn(.032,12,8),R_=new Qt({color:16777215,roughness:.4}),dd={};for(let i of Ft.power){let t=rh[i.k],[e,n]=wd[i.f],s=new St(T_,R_);(i.k==="socket2"||i.k==="kitchen"||i.k==="switch2")&&(s.scale.x=1.9),s.position.set(i.x+e*.008,t.h,i.z+n*.008),e&&(s.rotation.y=Math.PI/2);let a=new St(A_,dd[t.c]||(dd[t.c]=new Pe({color:t.c})));a.position.set(i.x+e*.06,t.h,i.z+n*.06),Gr.add(s,a)}var Td=[],Ad=null;for(let i of Ft.walls)if(i.ext&&i.axis==="x"&&i.t1>1){for(let t of i.holes||[])if(t.type!=="door"){let e=(t.a+t.b)/2,n=new ja(15987180,0,5.5,1.15,1,2.1);n.position.set(e,1.5,i.t1-.12),n.target.position.set(e,.4,i.t1-4),nn.add(n,n.target),Td.push({L:n,w:t.b-t.a})}}{let i=new Pe({colorWrite:!1,depthWrite:!1}),t=(e,n,s,r,a,o)=>{let l=new St(new Te(s-e,o-a,r-n),i);return l.position.set((e+s)/2,(a+o)/2,(n+r)/2),l.castShadow=!0,l.layers.set(2),Ae.add(l),l};Ad=t(-40,-16,Ft.width+40,Ft.depth+.3,Re+.001,Re+3.6),t(-40,-16,-.3,Ft.depth+.3,0,Re+.001),t(Ft.width+.3,-16,Ft.width+40,Ft.depth+.3,0,Re+.001),t(-.3,-16,Ft.width+.3,-.3,0,Re+.001),ke.shadow.camera.layers.enable(2)}var Wr=new St(new tn(Ft.width+.6,Ft.depth+.6),new Qt({color:16513783,roughness:1,envMapIntensity:1.7}));Wr.rotation.x=Math.PI/2;Wr.position.set(Ci,Re,Vr);Wr.visible=!1;nn.add(Wr);var Xr=new St(new tn(80,80),Tt.ground);Xr.rotation.x=-Math.PI/2;Xr.position.set(Ci,-.02,Vr);Xr.receiveShadow=!0;Xr.visible=!1;Ae.add(Xr);var yo=new ae;nn.add(yo);{let i=(a,o)=>ih.some(([l,c,h,u])=>a>l&&a<h&&o>c&&o<u),s=(a,o,l,c)=>Zt(Math.min(a,l),Math.min(o,c),Math.max(a,l),Math.max(o,c),0,.07,Tt.base,yo,{cast:!1}),r=(a,o,l,c,h)=>{let u=null;for(let d=o;d<=l+.02;d+=.02){let f=d+.01,g=f<l&&(c?i(f,a+h*.04):i(a+h*.04,f));g&&u==null&&(u=d),!g&&u!=null&&(d-u>.06&&(c?s(u,a,Math.min(d,l),a-h*.012):s(a,u,a-h*.012,Math.min(d,l))),u=null)}};for(let a of Ft.rooms)if(a.name!=="\u0411\u0430\u043B\u043A\u043E\u043D")for(let[o,l,c,h]of a.rects)r(l,o,c,!0,-1),r(h,o,c,!0,1),r(o,l,h,!1,-1),r(c,l,h,!1,1);for(let a of Ft.fixtures)if(a.type==="vent"){let[o,l,c,h]=a.r;s(c,l,c+.012,h+.012),s(o,h,c,h+.012)}}for(let i of Ii)en(i.g,!0),i.g.traverse(t=>{t.userData.openable=i.g});en(yo);en(Hr);en(Qs);Qs.userData.keep=!0;en(ve);en(Gr);en(bn);var Rd={value:0},ah={value:0},fd=Ft.depth,Cd=`diffuseColor.rgb *= 1.0 - uDepth * 0.42 * clamp((${fd.toFixed(2)} - vKvZ) / ${fd.toFixed(2)}, 0.0, 1.0);`;function Id(i){return i.onBeforeCompile=t=>{t.uniforms.uCeil=Rd,t.uniforms.uDepth=ah,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vKvY;
varying float vKvZ;`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 _kvW = modelMatrix * vec4(transformed, 1.0);
vKvY = _kvW.y;
vKvZ = _kvW.z;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vKvY;
varying float vKvZ;
uniform float uCeil;
uniform float uDepth;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.16 * exp(-max(vKvY, 0.0) * 6.0) - uCeil * 0.24 * exp(-max(${Re.toFixed(2)} - vKvY, 0.0) * 5.0);
${Cd}`)},i}Id(Tt.wall);function Mo(i){return i.onBeforeCompile=t=>{t.uniforms.uDepth=ah,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vKvZ;`).replace("#include <project_vertex>",`#include <project_vertex>
vKvZ = (modelMatrix * vec4(transformed, 1.0)).z;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vKvZ;
uniform float uDepth;`).replace("#include <color_fragment>",`#include <color_fragment>
${Cd}`)},i}Mo(Tt.cabinet);Mo(Tt.counter);Mo(Tt.white);var qs=48,an={x0:-.3,z0:-.3,x1:Ft.width+.3,z1:Ft.depth+.3};function Pd(i,t){let e=i.getContext("2d"),n=4e3;e.shadowColor="transparent",e.fillStyle="#fff",e.fillRect(0,0,i.width,i.height);let s=(r,a,o,l,c,h,u)=>{e.shadowColor=`rgba(0,0,0,${h})`,e.shadowBlur=c,e.shadowOffsetX=n,e.fillStyle="#000",e.fillRect((r-u-an.x0)*qs-n,(a-u-an.z0)*qs,(o-r+u*2)*qs,(l-a+u*2)*qs)};for(let r of we)r[4]!==3&&(r[4]?t&&!js&&!(r[4]===1&&yn)&&s(r[0],r[1],r[2],r[3],13,.42,.01):s(r[0],r[1],r[2],r[3],24,.5,.03))}function Ld(i,t){let e=document.createElement("canvas");e.width=Math.round((an.x1-an.x0)*qs),e.height=Math.round((an.z1-an.z0)*qs);let n=new Os(e);n.colorSpace=qe;let s=new St(new tn(an.x1-an.x0,an.z1-an.z0),new Pe({map:n,blending:Ca,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,side:t}));return s.rotation.x=-Math.PI/2,s.position.set((an.x0+an.x1)/2,i,(an.z0+an.z1)/2),s.renderOrder=2,nn.add(s),{c:e,t:n,m:s}}var pd=Ld(.004,Hn),bo=Ld(Re-.003,Be);Pd(bo.c,!1);bo.t.needsUpdate=!0;bo.m.visible=!1;function Dd(){Pd(pd.c,!0),pd.t.needsUpdate=!0}var Ur={top:{value:new Ht},hor:{value:new Ht},sunDir:{value:new C(0,1,0)},sunK:{value:0}},qr=new St(new pn(150,32,16),new fn({uniforms:Ur,side:Be,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
    void main(){ vec3 d = normalize(vDir); float h = d.y;
      vec3 c = mix(hor, top, pow(clamp(h, 0.0, 1.0), 0.55)); c = mix(c, hor * 0.92, smoothstep(0.0, -0.3, h));
      float s = max(dot(d, sunDir), 0.0);
      c += vec3(1.0, 0.86, 0.66) * sunK * (pow(s, 600.0) * 4.0 + pow(s, 24.0) * 0.28 + pow(s, 4.0) * 0.08);
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}));qr.renderOrder=10;qr.frustumCulled=!1;Ae.add(qr);var Ud=!1,Jc=null;try{if(!Ce.capabilities.isWebGL2||!(Ce.extensions.has("EXT_color_buffer_float")||Ce.extensions.has("EXT_color_buffer_half_float")))throw new Error("no float targets");let i=new Ns(Ce),t=new wr;t.add(new St(new pn(20,24,12),new fn({side:Be,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; void main(){ vec3 d = normalize(vDir);
      vec3 c = mix(vec3(0.5, 0.47, 0.43), vec3(0.78, 0.77, 0.75), smoothstep(-0.5, 0.2, d.y)); c = mix(c, vec3(0.98, 0.97, 0.95), smoothstep(0.35, 0.9, d.y));
      c *= 0.75 + 0.35 * smoothstep(-0.6, 0.8, d.z);
      gl_FragColor = vec4(c, 1.0); }`})));let e=new St(new tn(8,3.4),new Pe({color:new Ht().setRGB(4.6,4.8,5.1),side:Ye}));e.position.set(0,1.2,9),t.add(e),Jc=i.fromScene(t,.03).texture,i.dispose(),Ud=!0}catch{}var gt={orient:Yt.get("orient",150),gap:Yt.get("gap",18),live:!0,y:0,m:0,d:0,h:12};Yt.get("sunV",0)<2&&(gt.orient=150,gt.gap=18,Yt.set("orient",150),Yt.set("gap",18),Yt.set("sunV",2));var Zi=null;function Nd(){Zi&&(Ae.remove(Zi.group),Zi.group.traverse(i=>{i.geometry&&i.geometry.dispose()})),Zi=ld(Ft,{below:6.45,gap:gt.gap,floors:4}),Ae.add(Zi.group),Sn(!0)}Nd();function Nr(){let i=new Date,t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Kyiv",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hourCycle:"h23"});try{let e=Object.fromEntries(t.formatToParts(i).map(n=>[n.type,n.value]));return{y:+e.year,m:+e.month-1,d:+e.day,h:+e.hour+ +e.minute/60}}catch{return{y:i.getFullYear(),m:i.getMonth(),d:i.getDate(),h:i.getHours()+i.getMinutes()/60}}}Object.assign(gt,Nr());if(de.get("date")){let[i,t,e]=de.get("date").split("-").map(Number);Object.assign(gt,{y:i,m:t-1,d:e,live:!1})}de.get("hour")&&(gt.h=+de.get("hour"),gt.live=!1);de.get("orient")&&(gt.orient=+de.get("orient"));var oh=i=>Math.atan2(Zi.top-1.2,gt.gap/Math.max(.2,Math.cos(i*Math.PI/180)))*180/Math.PI,ee=de.get("mode")||Yt.get("mode","doll"),Ei=Yt.get("low",!1),Nn=de.get("night")?!0:Yt.get("evening",!1),se={yaw:Yt.get("yaw",-.5),pitch:.95,dist:15,tx:Ci,tz:Vr+.3},At={x:Ft.start[0],z:Ft.start[1],yaw:Ft.start[2],pitch:-.05,bob:0,goal:null};de.get("yaw")&&(se.yaw=+de.get("yaw"));de.get("wx")&&(At.x=+de.get("wx"),At.z=+de.get("wz"),At.yaw=+(de.get("wyaw")||0));function lh(){let i=ee==="walk"?1:Ei?.42:1;bn.scale.y=i,Wr.visible=bo.m.visible=ee==="walk",Rd.value=ah.value=ee==="walk"?1:0;let t=ee==="walk"||!Ei;Ad.visible=ee!=="plan"&&t,vn&&vn.traverse(e=>{e.userData.wallLike&&(e.scale.y=i,e.position.y=(e.userData.y1+e.userData.h/2)*i),e.userData.hideLow&&(e.visible=t)}),xo.visible=t&&!yn,_o.visible=t&&yn,vo.visible=t&&Fd,Sn(!0)}var mn=de.get("look")||(de.get("raw")==="0"?"base":de.get("raw")==="1"?"raw":null)||Yt.get("look",Yt.get("raw",!0)?"raw":"base");ao.some(i=>i.id===mn)||(mn="raw");var Ji=de.get("arr")!=null?+de.get("arr"):+Yt.get("arr",0);Ji>=0&&Ji<=7||(Ji=0);var C_=[["\u0412\u0437\u0434\u043E\u0432\u0436 \u0441\u0442\u0456\u043D\u0438","\u0434\u0438\u0432\u0430\u043D \u043F\u0456\u0434 \u0441\u0442\u0456\u043D\u043E\u044E, \u0422\u0412 \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438"],["\u0407\u0434\u0430\u043B\u044C\u043D\u044F \u0431\u0456\u043B\u044F \u0432\u0456\u043A\u043D\u0430","\u043E\u0431\u0456\u0434 \u0443 \u0441\u0432\u0456\u0442\u043B\u0456 + \u043A\u0443\u0445\u043D\u044F-\u043E\u0441\u0442\u0440\u0456\u0432 (\u041F)"],["\u041A\u0443\u0442\u043E\u0432\u0438\u0439 \u0434\u0438\u0432\u0430\u043D","\u0413-\u043F\u043E\u0434\u0456\u0431\u043D\u0438\u0439 \u043B\u0430\u0443\u043D\u0436 \u0443 \u043A\u0443\u0442\u043A\u0443"],["\u0414\u0438\u0432\u0430\u043D \u0434\u043E \u0432\u0456\u043A\u043D\u0430","\u043B\u0430\u0443\u043D\u0436 \u043D\u0430 \u043A\u0440\u0430\u0454\u0432\u0438\u0434, \u0434\u0432\u0430 \u043A\u0440\u0456\u0441\u043B\u0430"],["\u0414\u0432\u0430 \u0434\u0438\u0432\u0430\u043D\u0438","\u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u043E\u043B\u0438\u043A, \u0432\u0456\u043A\u043D\u043E \u044F\u043A \u0444\u043E\u043A\u0443\u0441"],["\u0420\u043E\u0431\u043E\u0447\u0438\u0439 \u043A\u0443\u0442","\u0434\u0438\u0432\u0430\u043D \u043F\u0456\u0434 \u0441\u0442\u0456\u043D\u043E\u044E + \u0441\u0442\u0456\u043B-\u043E\u0444\u0456\u0441 \u0431\u0456\u043B\u044F \u0432\u0456\u043A\u043D\u0430"],["\u041E\u0441\u0442\u0440\u0456\u0432 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443","\u0457\u043C\u043E \u0437\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u043C, \u043B\u0430\u0443\u043D\u0436 \u0434\u043E \u0432\u0456\u043A\u043E\u043D"],["\u0413-\u043A\u0443\u0445\u043D\u044F, \u043F\u0456\u0432\u043E\u0441\u0442\u0440\u0456\u0432","\u0441\u0442\u0456\u0439\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0442\u0430\u0454 \u0432\u043D\u0438\u0437, \u043E\u0431\u0456\u0434 \u0431\u0456\u043B\u044F \u0432\u0456\u043A\u043D\u0430"]],yn=mn==="raw",vn=null,Fd=!1,lo={wall:Tt.wall.color.getHex(),door:Tt.door.color.getHex(),cabinet:Tt.cabinet.color.getHex(),counter:Tt.counter.color.getHex()},Wc=new Map;function I_(i,t){let e=t+":"+i.w.toFixed(2)+":"+i.h.toFixed(2);if(!Wc.has(e)){let n=t==="polished"||t==="concrete",s=x_(t).clone();s.repeat.set(i.w*(n?.4:.7),i.h*(n?.4:.7)),s.needsUpdate=!0,Wc.set(e,new Qt({map:s,roughness:t.startsWith("tile")?.22:t==="polished"?.32:t==="concrete"?.95:t==="stone"?.6:.5,envMapIntensity:t==="concrete"?.6:1}))}return Wc.get(e)}function Kc(){let i=ao.find(e=>e.id===mn);yn=mn==="raw";let t=!!i.wall;for(let e of Ed)e.m.material=I_(e,yn?"concrete":t?i.floors[e.room]||i.floors[e.as]||"oak":e.key);ve.visible=!yn&&!js,Qs.visible=yo.visible=!yn;for(let e of bd)e.visible=!yn;if(yn)for(let e of Ii)e.inner&&!e.open&&Sd(e);Tt.wall.color.set(t?i.wall:lo.wall),Tt.door.color.set(t?i.door:lo.door),Tt.cabinet.color.set(t?i.cabinet:lo.cabinet),Tt.counter.color.set(t?i.counter:lo.counter),vn&&(nn.remove(vn),vn.traverse(e=>{e.geometry&&!e.geometry.userData.cached&&e.geometry.dispose(),e.material&&e.material.userData.own&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),vn=null);for(let e=we.length-1;e>=0;e--)we[e][4]===2&&we.splice(e,1);t&&(vn=id(i,Ft,we,{canvasTex:er,addWallAO:Id,addDepth:Mo,layout:Ji}),en(vn),vn.visible=!js,nn.add(vn)),Dd();for(let e of sh)e.l.color.set(t?i.lamp:16765594);xt("vFinish").textContent=i.short,xt("bFinish").classList.toggle("on",mn!=="raw"),lh()}function P_(){let i=xt("styles");if(!i.hidden){i.hidden=!0;return}let t=[["plan","\u042F\u043A \u0443 \u0437\u0430\u0431\u0443\u0434\u043E\u0432\u043D\u0438\u043A\u0430","\u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439 \u043F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439"],["closet","\u0417 \u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u043E\u044E","\u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u0430 \u0431\u0456\u043B\u044F \u043A\u0443\u0445\u043D\u0456, \u043F\u0440\u043E\u0445\u0456\u0434 114 \u0441\u043C"]];i.innerHTML='<div class="sec">\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F</div>'+t.map(([e,n,s])=>`<button class="chip${e===zr?" on":""}" data-layout="${e}"><b>${n}</b><span>${s}</span></button>`).join("")+`<div class="sec">\u0406\u043D\u0442\u0435\u0440'\u0454\u0440</div>`+ao.map(e=>`<button class="chip${e.id===mn?" on":""}" data-id="${e.id}"><b>${e.name}</b><span>${e.sub}</span></button>`).join("")+'<div class="sec">\u0420\u043E\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432</div>'+C_.map(([e,n],s)=>`<button class="chip${s===Ji?" on":""}" data-arr="${s}"><b>${e}</b><span>${n}</span></button>`).join(""),i.querySelectorAll("[data-layout]").forEach(e=>e.addEventListener("click",()=>{if(e.dataset.layout===zr){i.hidden=!0;return}Yt.set("layout",e.dataset.layout),location.reload()})),i.querySelectorAll(".chip[data-id]").forEach(e=>e.addEventListener("click",()=>{mn=e.dataset.id,Yt.set("look",mn),Kc(),i.hidden=!0})),i.querySelectorAll("[data-arr]").forEach(e=>e.addEventListener("click",()=>{Ji=+e.dataset.arr,Yt.set("arr",Ji),(mn==="raw"||mn==="base")&&(mn="scandi",Yt.set("look",mn)),Kc(),i.hidden=!0})),i.hidden=!1}var L_=new Ht(13623534),D_=new Ht(15250570),U_=new Ht(922146),N_=new Ht(5214168),F_=new Ht(6123422),O_=new Ht(263694);function ln(){let i=Hc(kc(gt.y,gt.m,gt.d,gt.h)),t=Nn?-20:i.el,e=Un.smoothstep(t,-6,12),n=U_.clone().lerp(D_,Un.smoothstep(t,-8,2)).lerp(L_,Un.smoothstep(t,2,18));Ae.background=n,Ae.fog?Ae.fog.color.copy(n):Ae.fog=new Va(n,60,160);let s=Un.smoothstep(t,-8,2),r=Un.smoothstep(t,2,18);Ur.hor.value.copy(n),Ur.top.value.copy(O_).lerp(F_,s).lerp(N_,r),Ur.sunDir.value.copy(Vc(i.az,i.el,gt.orient)),Ur.sunK.value=Nn?0:Un.smoothstep(i.el,-3,5);let a=ee==="walk",o=Ud&&!Ki;Ae.environment!==(o?Jc:null)&&(Ae.environment=o?Jc:null),ho.intensity=a?.05+.08*e:.1+.5*e,Ae.environmentIntensity=a?.05+.12*e:.08+.3*e,kr.intensity=Nn?0:(a?1.35:.45)*e,o||(ho.intensity=a?.1+.6*e:.2+.8*e),ho.groundColor.set(o?11050640:14078150);for(let{L:h,w:u}of Td)h.intensity=Nn?0:(a?4:3)*u*e,h.visible=!Ki&&h.intensity>.02;od(a?.22*e:.04*e);let l=Nn||t<-4;document.body.classList.toggle("night",l),ke.intensity=t>0?2.8*Un.smoothstep(t,0,10):0,ke.visible=ke.intensity>.02,ke.color.setHSL(.09,.9,.55+.4*Un.smoothstep(t,0,25)),ke.position.copy(Vc(i.az,Math.max(t,1),gt.orient).multiplyScalar(45)).add(ke.target.position);let c=Nn||t<2;Fd=c;for(let{l:h}of sh)h.intensity=c?3.2:0,h.visible=c;Zc.color.set(c?16773846:12171444),vo.visible=c&&(a||!Ei),xt("bLight").classList.toggle("on",Nn),xt("vLight").textContent=Nn?"\u0412\u0435\u0447\u0456\u0440":"\u0414\u0435\u043D\u044C",xt("vSun").textContent=_n(gt.h),xt("bSun").title=gt.d+" "+Qc[gt.m],Zi.setSeason(gt.m),xt("sunp").hidden||(k_(i),xt("sunYear")&&(xt("sunYear").innerHTML=G_(),xt("sunYear").querySelectorAll("[data-m]").forEach(h=>h.onclick=()=>{gt.m=+h.dataset.m,gt.d=21,gt.live=!1,W_(),ln(),Fr()}))),xt("sunFacts")&&(xt("sunFacts").innerHTML=H_()),Sn(!0)}var ch=[["\u041F\u043D",0],["\u041F\u043D\u0421\u0445",45],["\u0421\u0445",90],["\u041F\u0434\u0421\u0445",135],["\u041F\u0434",180],["\u041F\u0434\u0417\u0445",225],["\u0417\u0445",270],["\u041F\u043D\u0417\u0445",315]],md=[["\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",null],["\u0412\u0435\u0441\u043D\u0430",[3,20]],["\u041B\u0456\u0442\u043E",[6,15]],["\u041E\u0441\u0456\u043D\u044C",[9,15]],["\u0417\u0438\u043C\u0430",[0,20]]],Qc=["\u0441\u0456\u0447\u043D\u044F","\u043B\u044E\u0442\u043E\u0433\u043E","\u0431\u0435\u0440\u0435\u0437\u043D\u044F","\u043A\u0432\u0456\u0442\u043D\u044F","\u0442\u0440\u0430\u0432\u043D\u044F","\u0447\u0435\u0440\u0432\u043D\u044F","\u043B\u0438\u043F\u043D\u044F","\u0441\u0435\u0440\u043F\u043D\u044F","\u0432\u0435\u0440\u0435\u0441\u043D\u044F","\u0436\u043E\u0432\u0442\u043D\u044F","\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043D\u044F"],B_=(i,t)=>Math.round((Date.UTC(2026,i,t)-Date.UTC(2026,0,1))/864e5)+1,z_=i=>{let t=new Date(Date.UTC(2026,0,i));return[t.getUTCMonth(),t.getUTCDate()]};function k_(i){let t=oo(gt.y,gt.m,gt.d,gt.orient,oh),e=ch.reduce((n,s)=>Math.abs((gt.orient-s[1]+540)%360-180)<Math.abs((gt.orient-n[1]+540)%360-180)?s:n)[0];xt("sunInfo").innerHTML=`\u0421\u0445\u0456\u0434 ${_n(t.rise)} \xB7 \u0437\u0430\u0445\u0456\u0434 ${_n(t.set)}<br>`+(t.from!=null?`\u041F\u0440\u044F\u043C\u0435 \u0441\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445: <b>${_n(t.from)}\u2013${_n(t.to)}</b>`:"\u0426\u044C\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u0440\u044F\u043C\u0435 \u0441\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430 \u043D\u0435 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u0454")+`<br><small>\u0412\u0456\u043A\u043D\u0430 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0430 ${gt.orient}\xB0 (${e}); \u0431\u0443\u0434\u0438\u043D\u043E\u043A \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438 \u2014 4 \u043F\u043E\u0432\u0435\u0440\u0445\u0438, ${gt.gap} \u043C. \u0417\u0430\u0440\u0430\u0437 \u0441\u043E\u043D\u0446\u0435: \u0432\u0438\u0441\u043E\u0442\u0430 ${i.el.toFixed(0)}\xB0, \u0430\u0437\u0438\u043C\u0443\u0442 ${i.az.toFixed(0)}\xB0.</small>`}function H_(){let i=ch.reduce((n,s)=>Math.abs((gt.orient-s[1]+540)%360-180)<Math.abs((gt.orient-n[1]+540)%360-180)?s:n)[0],t=(n,s)=>`<div class="row"><span>${n}</span><b>${s}</b></div>`,e=(n,s)=>{let r=oo(gt.y,n,s,gt.orient,oh);return r.from!=null?_n(r.from)+"\u2013"+_n(r.to):"\u043D\u0435\u043C\u0430\u0454"};return t("\u0412\u0456\u043A\u043D\u0430 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F",`${i}, ${gt.orient}\xB0`)+t("\u041F\u043E\u0432\u0435\u0440\u0445","3-\u0439, \u22486,4 \u043C \u043D\u0430\u0434 \u0437\u0435\u043C\u043B\u0435\u044E")+t("\u0411\u0443\u0434\u0438\u043D\u043E\u043A \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438",`4 \u043F\u043E\u0432\u0435\u0440\u0445\u0438, \u2248${gt.gap} \u043C`)+t("\u0421\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445 21 \u0447\u0435\u0440\u0432\u043D\u044F",e(5,21))+t("21 \u0431\u0435\u0440\u0435\u0437\u043D\u044F / 23 \u0432\u0435\u0440\u0435\u0441\u043D\u044F",e(2,21)+" / "+e(8,23))+t("21 \u0433\u0440\u0443\u0434\u043D\u044F",e(11,21))}var V_=["\u0421\u0456\u0447","\u041B\u044E\u0442","\u0411\u0435\u0440","\u041A\u0432\u0456","\u0422\u0440\u0430","\u0427\u0435\u0440","\u041B\u0438\u043F","\u0421\u0435\u0440","\u0412\u0435\u0440","\u0416\u043E\u0432","\u041B\u0438\u0441","\u0413\u0440\u0443"];function G_(){return V_.map((i,t)=>{let e=oo(gt.y,t,21,gt.orient,oh),n=e.from!=null?e.to-e.from:0;return`<div data-m="${t}" class="${t===gt.m?"on":""}"><span>${i}</span><i style="width:${Math.round(n/11*100)}%"></i><b>${e.from!=null?_n(e.from)+"\u2013"+_n(e.to):"\u043D\u0435\u043C\u0430\u0454"}</b></div>`}).join("")}function W_(){xt("sunp").hidden=!0}function Fr(){let i=xt("sunp");if(!i.hidden){i.hidden=!0;return}xt("styles").hidden=!0;let t=Nr();i.innerHTML=`<b class="ttl">\u0421\u043E\u043D\u0446\u0435 \u043D\u0430\u0434 \u041B\u044C\u0432\u043E\u0432\u043E\u043C</b>
    <div class="row2">${md.map(([e,n],s)=>`<button class="mini${(n?n[0]===gt.m&&n[1]===gt.d:gt.m===t.m&&gt.d===t.d)?" on":""}" data-date="${s}">${e}</button>`).join("")}</div>
    <label class="lab">\u0414\u0430\u0442\u0430: <b id="sunD">${gt.d} ${Qc[gt.m]}</b></label>
    <input type="range" id="sunDay" min="1" max="365" step="1" value="${B_(gt.m,gt.d)}">
    <label class="lab">\u0427\u0430\u0441: <b id="sunT">${_n(gt.h)}</b> <button class="mini" id="sunNow">\u0417\u0430\u0440\u0430\u0437</button></label>
    <input type="range" id="sunH" min="4" max="22" step="0.0833" value="${gt.h}">
    <label class="lab">\u041A\u0443\u0434\u0438 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u0456\u043A\u043D\u0430</label>
    <div class="row2">${ch.map(([e,n])=>`<button class="mini${Math.abs(gt.orient-n)<23?" on":""}" data-or="${n}">${e}</button>`).join("")}</div>
    <input type="range" id="sunO" min="0" max="359" step="1" value="${gt.orient}">
    <label class="lab">\u0414\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443 \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438: <b id="sunGv">${gt.gap} \u043C</b></label>
    <input type="range" id="sunG" min="12" max="50" step="1" value="${gt.gap}">
    <div id="sunInfo" class="info"></div>
    <label class="lab">\u0421\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u043A\u0443</label>
    <div id="sunYear" class="year"></div>`,i.hidden=!1,i.querySelectorAll("[data-date]").forEach(e=>e.onclick=()=>{let n=md[+e.dataset.date][1],s=Nr();gt.y=s.y,n?(gt.m=n[0],gt.d=n[1]):(gt.m=s.m,gt.d=s.d),gt.live=!1,i.hidden=!0,ln(),Fr()}),i.querySelectorAll("[data-or]").forEach(e=>e.onclick=()=>{gt.orient=+e.dataset.or,Yt.set("orient",gt.orient),i.hidden=!0,ln(),Fr()}),xt("sunDay").oninput=e=>{let[n,s]=z_(+e.target.value);gt.m=n,gt.d=s,gt.live=!1,xt("sunD").textContent=s+" "+Qc[n],ln()},xt("sunH").oninput=e=>{gt.h=+e.target.value,gt.live=!1,xt("sunT").textContent=_n(gt.h),ln()},xt("sunO").oninput=e=>{gt.orient=+e.target.value,Yt.set("orient",gt.orient),ln()},xt("sunG").oninput=e=>{gt.gap=+e.target.value,Yt.set("gap",gt.gap),xt("sunGv").textContent=gt.gap+" \u043C",Nd(),ln()},xt("sunNow").onclick=()=>{Object.assign(gt,Nr(),{live:!0}),i.hidden=!0,ln(),Fr()},ln()}setInterval(()=>{gt.live&&(Object.assign(gt,Nr()),ln())},6e4);function So(i){ee=i,Yt.set("mode",i),document.body.classList.toggle("walking",i==="walk"),document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t.dataset.mode===i)),xt("joy").hidden=i!=="walk",xt("bWalls").hidden=i==="walk",i==="plan"?(se.tx=Ci+.6,se.tz=Ft.depthWithBalcony/2-.3):i==="doll"&&(se.tx=Ci,se.tz=Vr+.3),lh(),Yd(),ln(),ev&&nr()}function X_(){if(ee==="walk"?ce.layers.enable(1):ce.layers.disable(1),ee==="walk"){ce.fov=70;let i=1.6+Math.sin(At.bob)*.025;ce.position.set(At.x,i,At.z);let t=Math.cos(At.pitch);ce.lookAt(At.x+Math.sin(At.yaw)*t,i+Math.sin(At.pitch),At.z-Math.cos(At.yaw)*t)}else{let i=ee==="plan"?Math.PI/2-.001:se.pitch,t=ee==="plan"?0:se.yaw;ce.fov=ee==="plan"?30:45;let e=ee==="plan"?Od():se.dist;ce.position.set(se.tx+Math.sin(t)*Math.cos(i)*e,Math.sin(i)*e,se.tz+Math.cos(t)*Math.cos(i)*e),ce.lookAt(se.tx,0,se.tz)}ce.updateProjectionMatrix(),qr.position.copy(ce.position)}function Od(){let i=ce.aspect,t=Math.tan(Un.degToRad(30/2));return Math.max((Ft.depthWithBalcony+2.4)/2/t,(Ft.width+3.2)/2/t/i)+Re}var gd=.22;function Ys(i,t){if(i<-.05||t<-.05||i>Ft.width+.05||t>Ft.depthWithBalcony)return!0;for(let[e,n,s,r,a]of we){if(a&&yn)continue;let o=Math.max(e,Math.min(i,s)),l=Math.max(n,Math.min(t,r));if((i-o)**2+(t-l)**2<gd*gd)return!0}return!1}function xd(i,t){let e=At.x+i,n=At.z+t;Ys(e,n)?Ys(e,At.z)?Ys(At.x,n)||(At.z=n):At.x=e:(At.x=e,At.z=n)}var Qi=Ce.domElement,Xn=new Map,Mn=null;Qi.addEventListener("pointerdown",i=>{Qi.setPointerCapture(i.pointerId),Xn.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()}),hh()});Qi.addEventListener("pointermove",i=>{let t=Xn.get(i.pointerId);if(!t)return;let e=i.clientX-t.x,n=i.clientY-t.y;if(Xn.size===1)ee==="walk"?(At.yaw+=e*.005,At.pitch=Math.max(-1.1,Math.min(1.1,At.pitch-n*.004))):ee==="doll"?(se.yaw-=e*.006,se.pitch=Math.max(.25,Math.min(1.45,se.pitch+n*.004))):_d(e,n);else if(Xn.size===2&&ee!=="walk"){let[s,r]=[...Xn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);t.x=i.clientX,t.y=i.clientY;let o=Math.hypot(s.x-r.x,s.y-r.y);ee==="doll"&&(se.dist=Math.max(4,Math.min(28,se.dist*a/Math.max(1,o)))),_d(e/2,n/2);return}t.x=i.clientX,t.y=i.clientY});function _d(i,t){let e=(ee==="plan"?Od():se.dist)*.0016,n=ee==="plan"?0:se.yaw,s=Math.sin(n),r=Math.cos(n);se.tx-=(r*i+s*t)*e,se.tz-=(-s*i+r*t)*e,se.tx=Math.max(-2,Math.min(Ft.width+2,se.tx)),se.tz=Math.max(-2,Math.min(Ft.depthWithBalcony+2,se.tz))}function q_(i){let t=Xn.get(i.pointerId);Xn.delete(i.pointerId),t&&performance.now()-t.t<300&&Math.hypot(i.clientX-t.sx,i.clientY-t.sy)<8&&Y_(i.clientX,i.clientY),Sn()}Qi.addEventListener("pointerup",q_);Qi.addEventListener("pointercancel",i=>Xn.delete(i.pointerId));Qi.addEventListener("wheel",i=>{se.dist=Math.max(4,Math.min(28,se.dist*(1+i.deltaY*.001))),Sn()},{passive:!0});for(let i of["click","input","keydown","keyup"])addEventListener(i,()=>Sn(!0),!0);window.resumeAll=()=>Sn(!0);var $s=xt("joy"),Bd=xt("knob");$s.addEventListener("pointerdown",i=>{i.stopPropagation(),$s.setPointerCapture(i.pointerId);let t=$s.getBoundingClientRect();Mn={id:i.pointerId,cx:t.left+t.width/2,cy:t.top+t.height/2,x:0,y:0},kd(i)});$s.addEventListener("pointermove",i=>{Mn&&Mn.id===i.pointerId&&kd(i)});var zd=()=>{Mn=null,Bd.style.transform=""};$s.addEventListener("pointerup",zd);$s.addEventListener("pointercancel",zd);function kd(i){let t=i.clientX-Mn.cx,e=i.clientY-Mn.cy,n=Math.hypot(t,e),s=46;n>s&&(t*=s/n,e*=s/n),Mn.x=t/s,Mn.y=e/s,Bd.style.transform=`translate(${t}px,${e}px)`}var Wn=new Set;addEventListener("keydown",i=>Wn.add(i.key));addEventListener("keyup",i=>Wn.delete(i.key));var Fn=new Ir,wi=new Gt,jc=new Cn(new C(0,1,0),0);function Y_(i,t){if(es){hv(i,t);return}if(M_(i,t))return;if(ee==="walk"){wi.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Fn.setFromCamera(wi,ce);let s=new C;if(!Fn.ray.intersectPlane(jc,s)||s.distanceTo(ce.position)>14)return;At.goal={x:s.x,z:s.z,stuck:0},J_(s.x,s.z);return}wi.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Fn.setFromCamera(wi,ce);let e=new C;if(!Fn.ray.intersectPlane(jc,e))return;let n=Ft.rooms.find(s=>s.rects.some(([r,a,o,l])=>e.x>=r&&e.x<=o&&e.z>=a&&e.z<=l));n&&Z_(i,t,n,e)}var $_=null,Dr=null;function Z_(i,t,e,n){let s=xt("tip");$_=e,Dr=n.clone();let r=Ks.find(a=>a.name===e.name);s.innerHTML=`<b>${e.name}</b><span>${r.area.toFixed(2).replace(".",",")} \u043C\xB2</span><button id="goIn">\u0417\u0430\u0439\u0442\u0438 \u0441\u044E\u0434\u0438</button>`,s.hidden=!1,s.style.left=Math.min(innerWidth-190,i+10)+"px",s.style.top=Math.max(10,t-90)+"px",xt("goIn").onclick=()=>{Ys(Dr.x,Dr.z)?(At.x=e.label[0],At.z=e.label[1]):(At.x=Dr.x,At.z=Dr.z),At.yaw=Math.PI,At.pitch=-.05,hh(),So("walk")}}function hh(){xt("tip").hidden=!0}var ji=new St(new Ja(.16,.22,32),new Pe({color:13202234,transparent:!0,opacity:.85,depthWrite:!1}));ji.rotation.x=-Math.PI/2;ji.visible=!1;Ae.add(ji);function J_(i,t){ji.position.set(i,.02,t),ji.visible=!0}function fo(){ji.visible=!1}var Ti=xt("minimap"),Ee=Ti.getContext("2d"),tr=8;function Hd(){let i=Ti.getBoundingClientRect();return{w:i.width,h:i.height,k:Math.min((i.width-tr*2)/(Ft.width+.6),(i.height-tr*2)/(Ft.depthWithBalcony+.6))}}function K_(){let i=ee==="walk";if(Ti.hidden=!i,!i)return;let{w:t,h:e,k:n}=Hd(),s=Math.min(2,devicePixelRatio||1);Ti.width!==Math.round(t*s)&&(Ti.width=Math.round(t*s),Ti.height=Math.round(e*s)),Ee.setTransform(s,0,0,s,0,0),Ee.clearRect(0,0,t,e);let r=tr+.3*n,a=tr+.3*n,o=d=>r+d*n,l=d=>a+d*n;for(let d of Ft.rooms)for(let[f,g,x,m]of d.rects){let p=At.x>=f&&At.x<=x&&At.z>=g&&At.z<=m;Ee.fillStyle=p?"rgba(201,115,58,.28)":"rgba(255,255,255,.55)",Ee.fillRect(o(f),l(g),(x-f)*n,(m-g)*n)}Ee.fillStyle="#3a3f4a";for(let[d,f,g,x,m]of we)m||Ee.fillRect(o(d),l(f),Math.max(1,(g-d)*n),Math.max(1,(x-f)*n));let c=o(At.x),h=l(At.z),u=At.yaw;Ee.fillStyle="rgba(201,115,58,.35)",Ee.beginPath(),Ee.moveTo(c,h),Ee.arc(c,h,26,u-Math.PI/2-.6,u-Math.PI/2+.6),Ee.closePath(),Ee.fill(),Ee.fillStyle="#c9733a",Ee.beginPath(),Ee.arc(c,h,5,0,7),Ee.fill(),Ee.strokeStyle="#fff",Ee.lineWidth=2,Ee.stroke(),At.goal&&(Ee.strokeStyle="#c9733a",Ee.beginPath(),Ee.arc(o(At.goal.x),l(At.goal.z),4,0,7),Ee.stroke())}Ti.addEventListener("pointerdown",i=>{i.stopPropagation();let t=Ti.getBoundingClientRect(),{k:e}=Hd(),n=(i.clientX-t.left-tr)/e-.3,s=(i.clientY-t.top-tr)/e-.3;for(let r=0;r<1;r+=.05)for(let a=0;a<12;a++){let o=n+Math.cos(a*.52)*r,l=s+Math.sin(a*.52)*r;if(!Ys(o,l)){At.x=o,At.z=l,At.goal=null,fo(),Sn();return}}});var Or=i=>i.toFixed(2).replace(".",","),Vd=[],Eo=new ae;Eo.visible=!1;Ae.add(Eo);var Q_=new Ar({color:13202234});function Br(i,t,e){let n=[i,t];if(e)for(let r of[i,t])n.push(r.clone().add(e),r.clone().sub(e));let s=new Le().setFromPoints(n.length>2?[i,t,n[2],n[3],n[4],n[5]]:n);Eo.add(new $a(s,Q_))}function Zs(i,t,e){let n=document.createElement("div");n.className="tag "+e,n.innerHTML=t,xt("tags").appendChild(n),Vd.push({pos:i,el:n,kind:e})}for(let i of Ft.rooms){let[t,e,n,s]=i.rects[0],r=.03;if(Br(new C(t+.05,r,e+.25),new C(n-.05,r,e+.25),new C(0,0,.08)),Zs(new C((t+n)/2,r,e+.25),Or(n-t)+" \u043C","dims"),Br(new C(t+.25,r,e+.05),new C(t+.25,r,s-.05),new C(.08,0,0)),Zs(new C(t+.25,r,(e+s)/2),Or(s-e)+" \u043C","dims"),i.name!=="\u0411\u0430\u043B\u043A\u043E\u043D"){let a=n-.3,o=s-.3;Br(new C(a,0,o),new C(a,Re,o),new C(.08,0,0)),Zs(new C(a,Re/2,o),"\u0441\u0442\u0435\u043B\u044F "+Or(Re)+" \u043C","dims")}}for(let i of Ft.walls)for(let t of i.holes||[]){let e=t.type==="win"||t.type==="fixed",n=e||t.type==="balcony"?Ft.winTop:2.1,s=e?Ft.winSill:0,r=(i.t1+i.t2)/2,a=i.ext?i.t1>1?-.1:.1:0,o=(c,h)=>i.axis==="x"?new C(c,h,r+a*1.5):new C(r+a*1.5,h,c);Br(o(t.a+.02,n+.06),o(t.b-.02,n+.06),new C(0,.05,0)),Br(o(t.a+.12,s),o(t.a+.12,n),i.axis==="x"?new C(.05,0,0):new C(0,0,.05));let l=t.type==="door"?i.ext?"\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456":"\u0434\u0432\u0435\u0440\u0456":t.type==="balcony"?"\u0431\u0430\u043B\u043A\u043E\u043D\u043D\u0456 \u0434\u0432\u0435\u0440\u0456":"\u0432\u0456\u043A\u043D\u043E";Zs(o((t.a+t.b)/2,n+.14),`${l} ${Or(t.b-t.a)} \xD7 ${Or(n-s)} \u043C`,"dims")}for(let i of Ft.power){let t=rh[i.k],[e,n]=wd[i.f];Zs(new C(i.x+e*.12,t.h+.08,i.z+n*.12),`${t.name.replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E","\u0420\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E")} \xB7 <b>${t.note}</b>`,"elec")}Zs(new C(7.57,1.95,.15),"\u0429\u0438\u0442\u043E\u043A \xB7 <b>160 \u0441\u043C</b>","elec");var Js=new Ir,j_=0,Ai=null;function tv(i){let t=ee==="walk"&&(i||j_++%8===0);t&&!Ai&&(Ai=[],bn.traverse(e=>{e.isMesh&&e.material!==Tt.glass&&Ai.push(e)}));for(let e of Vd){if(!(e.kind==="dims"?Ws:js)){e.el.style.display="none";continue}let s=e.pos.distanceTo(ce.position);if(ee==="walk"&&s>7){e.el.style.display="none";continue}if(t&&(Js.set(ce.position,e.pos.clone().sub(ce.position).normalize()),Js.far=s-.2,e.hid=Js.intersectObjects(Ai,!1).length>0),ee==="walk"&&e.hid){e.el.style.display="none";continue}if(Ze.copy(e.pos).project(ce),Ze.z>1||Math.abs(Ze.x)>1.1||Math.abs(Ze.y)>1.1){e.el.style.display="none";continue}e.el.style.display="",e.el.style.transform=`translate(${(Ze.x+1)/2*innerWidth}px,${(1-Ze.y)/2*innerHeight}px) translate(-50%,-50%)`}}var Gd="tape."+zr,ev=!0,ts=new ae;Ae.add(ts);var nv=(()=>{let i=document.createElement("canvas");i.width=64,i.height=16;let t=i.getContext("2d");t.fillStyle="#f3c623",t.fillRect(0,0,64,16),t.fillStyle="#1e2128",t.fillRect(0,0,3,16),t.fillRect(32,0,2,7);let e=new Os(i);return e.wrapS=Is,e.colorSpace=qe,e.anisotropy=4,e})(),Wd=new Pe({color:13202234}),Xd=new Pe({color:13202234,transparent:!0,opacity:.35,depthTest:!1}),iv=new pn(1,16,10),sv=new ze(1,1,1,10,1,!0),es=!1,$e=null,Je=[],Si=[],Xs=i=>Math.round(i*100);function rv(){let i=[],t=e=>{for(let n=e;n;n=n.parent)if(!n.visible)return!1;return!0};return Ae.traverse(e=>{if(!e.isMesh||e===qr||e===ji||e.parent===ts||ts.children.includes(e.parent))return;let n=e.material;!n||Array.isArray(n)||n.isShaderMaterial||n.depthWrite===!1||n.transparent&&n.opacity<.2&&n!==Tt.glass||!e.layers.test(ce.layers)||!t(e)||i.push(e)}),i}function av(i,t){wi.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Fn.setFromCamera(wi,ce),Fn.layers.mask=ce.layers.mask;let e=Fn.intersectObjects(rv(),!1).find(s=>s.distance>.05&&s.distance<60);if(Fn.layers.set(0),!e){let s=new C;return Fn.ray.intersectPlane(jc,s)?s:null}let n=e.point.clone();return e.face&&n.add(e.face.normal.clone().transformDirection(e.object.matrixWorld).multiplyScalar(.012)),n}function ov(i,t){let e=t.clone().sub(i),n=e.length();if(n<.001)return t;for(let s of["x","y","z"])if(Math.abs(e[s])/n>Math.cos(Un.degToRad(7))){let r=i.clone();return r[s]=t[s],r}return t}function lv(i,t){let e=t.clone().sub(i),n=e.length(),s=[],r=`<b>${Xs(n)} \u0441\u043C</b>`,a=Math.hypot(e.x,e.z),o=Math.abs(e.y);return a>.03&&o>.03?s.push(`\u2194 ${Xs(a)}`,`\u2195 ${Xs(o)}`):Math.abs(e.x)>.03&&Math.abs(e.z)>.03&&s.push(`${Xs(Math.abs(e.x))} \xD7 ${Xs(Math.abs(e.z))}`),r+(s.length?`<small>${s.join(" \xB7 ")}</small>`:"")}function vd(i,t,e){let n=new ae,s=i.distanceTo(t),r=ee==="walk"?.008:.018;if(s>.005){let a=e?Xd:new Pe({map:nv.clone()});e||(a.map.needsUpdate=!0,a.map.repeat.set(1,s/.1),a.map.rotation=Math.PI/2,a.map.center.set(.5,.5));let o=new St(sv,a);o.scale.set(r,s,r),o.position.copy(i).lerp(t,.5),o.quaternion.setFromUnitVectors(new C(0,1,0),t.clone().sub(i).normalize()),o.renderOrder=20,n.add(o)}for(let a of s>.005?[i,t]:[i]){let o=new St(iv,Wd);o.scale.setScalar(r*2.4),o.position.copy(a),o.renderOrder=21,n.add(o)}return n}function cv(i){i.g.traverse(t=>{t.material&&t.material!==Wd&&t.material!==Xd&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),ts.remove(i.g),i.el&&i.el.remove()}function nr(){for(;Si.length;)cv(Si.pop());for(let i of Je){let t=new C(...i.a),e=new C(...i.b),n=document.createElement("div");n.className="tag tape",n.innerHTML=lv(t,e),xt("tags").appendChild(n),Si.push({g:vd(t,e),el:n,mid:t.clone().lerp(e,.5)}),ts.add(Si[Si.length-1].g)}if($e){let i={g:vd($e,$e,!0),el:null,mid:$e};ts.add(i.g),Si.push(i)}Yt.set(Gd,Je),uv(),Sn()}function hv(i,t){let e=av(i,t);if(e){if(ee==="plan"&&(e.y=.015),!$e)$e=e;else{let n=ov($e,e);n.distanceTo($e)>.02&&(Je.push({a:$e.toArray().map(s=>+s.toFixed(3)),b:n.toArray().map(s=>+s.toFixed(3))}),Je.length>12&&Je.shift()),$e=null}nr()}}function uv(){let i=xt("tapebar");if(i.hidden=!es,!es)return;let t=Je[Je.length-1];xt("tapeMsg").innerHTML=$e?"\u0422\u0435\u043F\u0435\u0440 \u0442\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F <b>\u0434\u0440\u0443\u0433\u043E\u0457 \u0442\u043E\u0447\u043A\u0438</b>":t?`\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0432\u0438\u043C\u0456\u0440: <b>${Xs(new C(...t.a).distanceTo(new C(...t.b)))} \u0441\u043C</b> \xB7 \u0442\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F, \u0449\u043E\u0431 \u043C\u0456\u0440\u044F\u0442\u0438 \u0449\u0435`:"\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F <b>\u043F\u0435\u0440\u0448\u043E\u0457 \u0442\u043E\u0447\u043A\u0438</b> \u2014 \u0441\u0442\u0456\u043D\u0438, \u043F\u0456\u0434\u043B\u043E\u0433\u0438 \u0447\u0438 \u043C\u0435\u0431\u043B\u0456\u0432",xt("tapeUndo").hidden=!Je.length&&!$e,xt("tapeClear").hidden=Je.length<2}function wo(i){es=i,xt("bTape").classList.toggle("on",i),i||($e=null),hh(),nr(),document.body.classList.toggle("taping",i)}function dv(){let i=es||Je.length;ts.visible=!!i;let t=[];for(let e=Si.length-1;e>=0;e--){let n=Si[e];if(!n.el)continue;if(!i){n.el.style.display="none";continue}if(ee==="walk"){Ai||(Ai=[],bn.traverse(c=>{c.isMesh&&c.material!==Tt.glass&&Ai.push(c)}));let l=n.mid.distanceTo(ce.position);if(Js.set(ce.position,n.mid.clone().sub(ce.position).normalize()),Js.far=l-.05,l>10||Js.intersectObjects(Ai,!1).length){n.el.style.display="none";continue}}if(Ze.copy(n.mid).project(ce),Ze.z>1||Math.abs(Ze.x)>1.1||Math.abs(Ze.y)>1.1){n.el.style.display="none";continue}n.el.style.display="";let s=n.el.offsetWidth||70,r=n.el.offsetHeight||34,a=(Ze.x+1)/2*innerWidth,o=(1-Ze.y)/2*innerHeight-r*1.3;for(let l=0;l<8;l++){let c=t.find(h=>Math.abs(h.x-a)<(h.w+s)/2+4&&Math.abs(h.y-o)<(h.h+r)/2+3);if(!c)break;o=c.y+(c.h+r)/2+4}t.push({x:a,y:o,w:s,h:r}),n.el.style.transform=`translate(${a-s/2}px,${o-r/2}px)`}}xt("bTape").addEventListener("click",()=>wo(!es));xt("tapeUndo").addEventListener("click",()=>{$e?$e=null:Je.pop(),nr()});xt("tapeClear").addEventListener("click",()=>{Je=[],$e=null,nr()});xt("tapeDone").addEventListener("click",()=>wo(!1));try{Je=(Yt.get(Gd,[])||[]).filter(i=>i&&i.a&&i.b&&i.a.length===3&&i.b.length===3)}catch{Je=[]}de.get("tape")&&(Je=de.get("tape").split(";").map(i=>i.split(",").map(Number)).filter(i=>i.length===6&&i.every(isFinite)).map(i=>({a:i.slice(0,3),b:i.slice(3)})));var fv=Ks.map(i=>{let t=document.createElement("div");return t.className="lbl",t.innerHTML=`${i.name}<small>${i.area.toFixed(2).replace(".",",")} \u043C\xB2</small>`,xt("labels").appendChild(t),t}),Ze=new C;function pv(){let i=ee!=="walk"&&xt("bLabels").classList.contains("on");if(Ks.forEach((t,e)=>{let n=fv[e];if(!i){n.style.display="none";return}if(Ze.copy(t.pos).project(ce),Ze.z>1){n.style.display="none";return}n.style.display="",n.style.transform=`translate(${(Ze.x+1)/2*innerWidth}px,${(1-Ze.y)/2*innerHeight}px) translate(-50%,-50%)`}),ee==="walk"){let t=Ft.rooms.find(e=>e.rects.some(([n,s,r,a])=>At.x>=n&&At.x<=r&&At.z>=s&&At.z<=a));xt("where").textContent=t?t.name:""}else xt("where").textContent=""}document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>So(i.dataset.mode)));xt("bWalls").addEventListener("click",()=>{Ei=!Ei,Yt.set("low",Ei),xt("bWalls").classList.toggle("on",Ei),lh()});xt("bFinish").addEventListener("click",()=>{xt("sunp").hidden=!0,P_()});xt("bSun").addEventListener("click",Fr);xt("bLight").addEventListener("click",()=>{Nn=!Nn,Yt.set("evening",Nn),ln()});xt("bLabels").addEventListener("click",()=>{xt("bLabels").classList.toggle("on"),Yt.set("labels",xt("bLabels").classList.contains("on"))});function qd(i){js=i,Gr.visible=i,Yt.set("power",i),xt("bPower").classList.toggle("on",i),xt("legend").hidden=!i,vn&&(vn.visible=!i),ve.visible=!yn&&!i,Dd(),Sn(!0)}xt("bPower").addEventListener("click",()=>qd(!js));xt("bDims").addEventListener("click",()=>{Ws=!Ws,Eo.visible=Ws,Yt.set("dims",Ws),xt("bDims").classList.toggle("on",Ws)});(Yt.get("power",!1)||de.get("power"))&&qd(!0);(Yt.get("dims",!1)||de.get("dims"))&&xt("bDims").click();xt("legend").innerHTML=Object.values(rh).filter((i,t,e)=>e.findIndex(n=>n.c===i.c&&n.h===i.h)===t).map(i=>`<div><i style="background:#${i.c.toString(16).padStart(6,"0")}"></i>${i.name.replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E","\u0420\u043E\u0437\u0435\u0442\u043A\u0438 \u043A\u0443\u0445\u043D\u0456").replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430","\u0420\u043E\u0437\u0435\u0442\u043A\u0430")}<em>${i.note}</em></div>`).join("");xt("bMore").addEventListener("click",()=>xt("panel").classList.add("open"));xt("close").addEventListener("click",()=>xt("panel").classList.remove("open"));xt("bWalls").classList.toggle("on",Ei);xt("bLabels").classList.toggle("on",Yt.get("labels",!0));function mv(){let i=(window.CHANGELOG||[]).slice().sort((n,s)=>s.day-n.day);xt("diary").innerHTML=i.map(n=>`<div class="entry"><span class="d">\u0414\u0415\u041D\u042C ${n.day} \xB7 ${n.date.split("-").reverse().join(".")}</span><b>${n.title}</b><p>${n.text}</p></div>`).join(""),i.length&&(xt("dayline").textContent=`\u0414\u0435\u043D\u044C ${i[0].day} \xB7 \u0449\u043E\u0440\u0430\u043D\u043A\u0443 \u0449\u043E\u0441\u044C \u043D\u043E\u0432\u0435`);let t=cd?cd.version():"";t&&(xt("foot").textContent=`\u0412\u0435\u0440\u0441\u0456\u044F ${t} \xB7 \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u044F Claude`);let e=Ks.reduce((n,s)=>n+s.area*(s.name==="\u0411\u0430\u043B\u043A\u043E\u043D"?.3:1),0);xt("facts").innerHTML=Ks.map(n=>`<div class="row"><span>${n.name}</span><b>${n.area.toFixed(2).replace(".",",")} \u043C\xB2</b></div>`).join("")+`<div class="row sum"><span>\u0420\u0430\u0437\u043E\u043C (\u0431\u0430\u043B\u043A\u043E\u043D \xD7 0,3)</span><b>${e.toFixed(1).replace(".",",")} \u043C\xB2</b></div><div class="row"><span>\u0417\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C</span><b>${Ft.officialArea} \u043C\xB2</b></div>`}function Yd(){Ce.setSize(innerWidth,innerHeight,!1),ce.aspect=innerWidth/innerHeight,ee==="doll"&&(se.dist=Math.max(se.dist,ce.aspect<1?17:13)),Sn()}addEventListener("resize",Yd);So(ee);ln();Kc();mv();nr();de.get("tapeon")&&wo(!0);zr==="closet"&&(document.querySelector(".title p").textContent="77,3 \u043C\xB2 \xB7 \u0434\u0432\u0456 \u043A\u0456\u043C\u043D\u0430\u0442\u0438 \xB7 \u0437 \u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u043E\u044E");de.get("dist")&&(se.dist=+de.get("dist"));var yd=performance.now(),th=0,Yi=16,eh=0;function gv(i){++th<6||(Yi+=(Math.min(i,100)-Yi)*.08,!(++eh<45)&&(eh=0,Ri!=="high"&&(Yi>24&&on>.6?(Gc=on*.97,on=Math.max(.6,on*.87),Yt.set("movePR",on),Yi=18):Yi>30&&Ri==="auto"&&!Ki&&++$d>=3?(Yt.set("autoLite",!0),uh("auto")):Yi<17.8&&on<Gc-.02&&(on=Math.min(Gc,on*1.07),Yt.set("movePR",on)))))}var $d=0;function uh(i,t){Ri=i,t||(Yt.set("q",i),i!=="auto"&&Yt.set("autoLite",!1)),Ki=i==="lite"||i==="auto"&&Yt.get("autoLite",!1),i==="high"?on=po:i==="lite"&&(on=Math.min(on,1)),$d=0,Yi=16,eh=0,document.querySelectorAll("[data-q]").forEach(e=>e.classList.toggle("on",e.dataset.q===i)),xt("qNote").textContent=i==="auto"?Ki?"\u0410\u0432\u0442\u043E: \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0443 \u0431\u0443\u043B\u043E \u0432\u0430\u0436\u043A\u043E, \u0442\u043E\u0436 \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E \u043B\u0435\u0433\u0448\u0438\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A.":"\u0410\u0432\u0442\u043E: \u043F\u043E\u043A\u0438 \u0440\u0443\u0445\u0430\u0454\u0448\u0441\u044F \u2014 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0442\u0440\u043E\u0445\u0438 \u043F\u0440\u043E\u0441\u0442\u0456\u0448\u0438\u0439, \u0437\u0443\u043F\u0438\u043D\u0438\u0448\u0441\u044F \u2014 \u0441\u0442\u0430\u0454 \u0447\u0456\u0442\u043A\u0438\u043C. \u0421\u0430\u043C\u0435 \u043F\u0456\u0434\u043B\u0430\u0448\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u0456\u0434 \u043F\u043B\u0430\u043D\u0448\u0435\u0442.":i==="lite"?"\u041B\u0435\u0433\u043A\u0430: \u0431\u0435\u0437 \u0432\u0456\u0434\u0431\u043B\u0438\u0441\u043A\u0456\u0432 \u0456 \u043C'\u044F\u043A\u043E\u0433\u043E \u0441\u0432\u0456\u0442\u043B\u0430 \u0437 \u0432\u0456\u043A\u043E\u043D \u2014 \u0434\u043B\u044F \u0441\u043B\u0430\u0431\u043A\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0430 \u0430\u0431\u043E \u0449\u043E\u0431 \u043C\u0435\u043D\u0448\u0435 \u0433\u0440\u0456\u0432\u0441\u044F.":"\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0430: \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0441\u043F\u0440\u043E\u0449\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u0432\u0456\u0442\u044C \u0443 \u0440\u0443\u0441\u0456.",ln()}document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>uh(i.dataset.q)));var Zd=0;function Jd(i){requestAnimationFrame(Jd);let t=i-yd,e=Math.min(.05,t/1e3);yd=i;let n=Xn.size>0||!!Mn;if(ee==="walk"){let r=0,a=0;if(Mn&&(r=Mn.x,a=Mn.y),(Wn.has("w")||Wn.has("ArrowUp"))&&(a=-1),(Wn.has("s")||Wn.has("ArrowDown"))&&(a=1),(Wn.has("a")||Wn.has("ArrowLeft"))&&(r=-1),(Wn.has("d")||Wn.has("ArrowRight"))&&(r=1),r||a){At.goal=null,fo(),n=!0;let o=1.6*e,l=Math.sin(At.yaw),c=Math.cos(At.yaw);xd((c*r-l*a)*o,(l*r+c*a)*o),At.bob+=e*9*Math.min(1,Math.hypot(r,a))}else if(At.goal){n=!0;let o=At.goal,l=o.x-At.x,c=o.z-At.z,h=Math.hypot(l,c),d=(Math.atan2(l,-c)-At.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;if(At.yaw+=d*Math.min(1,e*5),h<.15)At.goal=null,fo();else{let f=Math.min(h,1.4*e)*(Math.abs(d)>1.2?.3:1),g=At.x,x=At.z;xd(l/h*f,c/h*f),At.bob+=e*9,Math.hypot(At.x-g,At.z-x)<f*.2?++o.stuck>20&&(At.goal=null,fo()):o.stuck=0}}}else ee==="doll"&&!Xn.size&&!es&&de.get("still")==null&&xv(i)&&(se.yaw+=e*.04,n=!0);y_(e)&&(n=!0,co=!0),n&&(Xc=i);let s=i-Xc<200?on:Md();if(Math.abs(s-mo)>.01&&(mo=s,Ce.setPixelRatio(s),$i=Math.max($i,1)),!n&&$i<=0){th=0;return}$i>0&&$i--,n?gv(t):th=0,X_(),co&&(Ce.shadowMap.needsUpdate=!0,co=!1),Ce.render(Ae,ce),Zd++,pv(),tv(!n),dv(),K_()}var Kd=0;Qi.addEventListener("pointerdown",()=>Kd=performance.now());var xv=i=>i-Kd>8e3;uh(Ri,!0);requestAnimationFrame(Jd);setInterval(()=>Yt.set("yaw",se.yaw),5e3);window.__kv={setTape:wo,tapes:()=>Je,setMode:So,walker:At,orbit:se,solids:we,P:Ft,openables:Ii,stats:()=>({calls:Ce.info.render.calls,tris:Ce.info.render.triangles,geos:Ce.info.memory.geometries,tex:Ce.info.memory.textures,progs:Ce.info.programs.length,frames:Zd,free:(i,t)=>!Ys(i,t),pr:mo,movePR:on,quality:Ri,lite:Ki}),invalidate:Sn,renderer:Ce,scene:Ae,sun:ke};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
