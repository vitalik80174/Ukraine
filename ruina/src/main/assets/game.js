(()=>{var Af=Object.defineProperty;var Tf=(s,t,e)=>t in s?Af(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>Tf(s,typeof t!="symbol"?t+"":t,e);var Cf=0,Gh=1,Rf=2;var Ku=1,Ql=2,ui=3,Vi=0,Je=1,An=2,Ui=0,Xs=1,Cr=2,qh=3,Xh=4,Pf=5,rs=100,If=101,Bf=102,Lf=103,Nf=104,Ff=200,Df=201,Uf=202,Of=203,Ic=204,Bc=205,zf=206,Vf=207,kf=208,Hf=209,Wf=210,Gf=211,qf=212,Xf=213,Yf=214,Lc=0,Nc=1,Fc=2,js=3,Dc=4,Uc=5,Oc=6,zc=7,td=0,Zf=1,$f=2,Oi=0,jf=1,Jf=2,Qf=3,Kl=4,Kf=5,tp=6,ep=7;var ed=300,Js=301,Qs=302,Vc=303,kc=304,ma=306,Rr=1e3,as=1001,Hc=1002,vn=1003,np=1004;var co=1005;var qn=1006,Qa=1007;var cs=1008;var pi=1009,nd=1010,id=1011,Pr=1012,th=1013,ls=1014,Xn=1015,zr=1016,eh=1017,nh=1018,Ks=1020,sd=35902,rd=1021,od=1022,On=1023,ad=1024,cd=1025,Ys=1026,tr=1027,ih=1028,sh=1029,ld=1030,rh=1031;var oh=1033,Uo=33776,Oo=33777,zo=33778,Vo=33779,Wc=35840,Gc=35841,qc=35842,Xc=35843,Yc=36196,Zc=37492,$c=37496,jc=37808,Jc=37809,Qc=37810,Kc=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,cl=37820,ll=37821,ko=36492,hl=36494,ul=36495,hd=36283,dl=36284,fl=36285,pl=36286;var Ho=2300,ml=2301,Ka=2302,Yh=2400,Zh=2401,$h=2402;var ip=3200,sp=3201;var ud=0,rp=1,Fi="",an="srgb",sr="srgb-linear",ga="linear",ue="srgb";var As=7680;var jh=519,op=512,ap=513,cp=514,dd=515,lp=516,hp=517,up=518,dp=519,gl=35044,Vr=35048;var Jh="300 es",di=2e3,Wo=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var tc=Math.PI/180,yl=180/Math.PI;function zi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function cn(s,t,e){return Math.max(t,Math.min(e,s))}function fp(s,t){return(s%t+t)%t}function ec(s,t,e){return(1-e)*s+e*t}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Nt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],y=n[8],g=i[0],m=i[3],p=i[6],x=i[1],_=i[4],v=i[7],P=i[2],w=i[5],T=i[8];return r[0]=o*g+a*x+c*P,r[3]=o*m+a*_+c*w,r[6]=o*p+a*v+c*T,r[1]=l*g+h*x+d*P,r[4]=l*m+h*_+d*w,r[7]=l*p+h*v+d*T,r[2]=u*g+f*x+y*P,r[5]=u*m+f*_+y*w,r[8]=u*p+f*v+y*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,y=e*d+n*u+i*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return t[0]=d*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nc.makeScale(t,e)),this}rotate(t){return this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nc=new kt;function fd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pp(){let s=Go("canvas");return s.style.display="block",s}var Qh={};function Er(s){s in Qh||(Qh[s]=!0,console.warn(s))}function mp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Kh=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],eu=[.3127,.329],nu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[sr]:{primaries:Kh,whitePoint:eu,transfer:ga,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Kh,whitePoint:eu,transfer:ue,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});var Ts,xl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=Go("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xp=0,qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ic(i[o].image)):r.push(ic(i[o]))}else r=ic(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ic(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vp=0,ln=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=as,i=as,r=qn,o=cs,a=On,c=pi,l=s.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=zi(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ed;ln.DEFAULT_ANISOTROPY=1;var fe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],y=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(y+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,P=(p+1)/2,w=(h+u)/4,T=(d+g)/4,B=(y+m)/4;return _>v&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=T/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=B/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=B/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-y)*(m-y)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(d-g)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xo=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],y=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=y,t[e+3]=g;return}if(d!==g||c!==u||l!==f||h!==y){let m=1-a,p=c*u+l*f+h*y+d*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),w=Math.atan2(P,p*x);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let v=a*x;if(c=c*m+u*v,l=l*m+f*v,h=h*m+y*v,d=d*m+g*v,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],y=r[o+3];return t[e]=a*y+h*d+c*f-l*u,t[e+1]=c*y+h*u+l*d-a*f,t[e+2]=l*y+h*f+a*u-c*d,t[e+3]=h*y-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),y=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d-u*f*y;break;case"YXZ":this._x=u*h*d+l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d+u*f*y;break;case"ZXY":this._x=u*h*d-l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d-u*f*y;break;case"ZYX":this._x=u*h*d-l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d+u*f*y;break;case"YZX":this._x=u*h*d+l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d-u*f*y;break;case"XZY":this._x=u*h*d-l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d+u*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new L,su=new hn,gi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),ho.subVectors(this.max,mr),Cs.subVectors(t.a,mr),Rs.subVectors(t.b,mr),Ps.subVectors(t.c,mr),Ri.subVectors(Rs,Cs),Pi.subVectors(Ps,Rs),Qi.subVectors(Cs,Ps);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!rc(e,Cs,Rs,Ps,ho)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,Cs,Rs,Ps,ho))?!1:(uo.crossVectors(Ri,Pi),e=[uo.x,uo.y,uo.z],rc(e,Cs,Rs,Ps,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,lo=new gi,Cs=new L,Rs=new L,Ps=new L,Ri=new L,Pi=new L,Qi=new L,mr=new L,ho=new L,uo=new L,Ki=new L;function rc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ki.fromArray(s,r);let a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _p=new gi,gr=new L,oc=new L,Hi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_p.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(oc)),this.expandByPoint(gr.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new L,ac=new L,fo=new L,Ii=new L,cc=new L,po=new L,lc=new L,Ir=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ac.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=Ii.dot(this.direction),c=-Ii.dot(fo),l=Ii.lengthSq(),h=Math.abs(1-o*o),d,u,f,y;if(h>0)if(d=o*c-a,u=o*a-c,y=r*h,d>=0)if(u>=-y)if(u<=y){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-y?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=y?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ac).addScaledVector(fo,u),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){cc.subVectors(e,t),po.subVectors(n,t),lc.crossVectors(cc,po);let o=this.direction.dot(lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let c=a*this.direction.dot(po.crossVectors(Ii,po));if(c<0)return null;let l=a*this.direction.dot(cc.cross(Ii));if(l<0||c+l>o)return null;let h=-a*Ii.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=y,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+y*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=y+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,y=l*h,g=l*d;e[0]=u+g*a,e[4]=y*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-y,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,y=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=y+f*a,e[1]=f+y*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=y*l-f,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=f*l-y,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=y*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+y,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*c,f=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-y,e[2]=y*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,Mp)}lookAt(t,e,n){let i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Bi.crossVectors(n,yn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Bi.crossVectors(n,yn)),Bi.normalize(),mo.crossVectors(yn,Bi),i[0]=Bi.x,i[4]=mo.x,i[8]=yn.x,i[1]=Bi.y,i[5]=mo.y,i[9]=yn.y,i[2]=Bi.z,i[6]=mo.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],y=n[2],g=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],P=n[15],w=i[0],T=i[4],B=i[8],M=i[12],S=i[1],R=i[5],O=i[9],U=i[13],D=i[2],G=i[6],H=i[10],W=i[14],N=i[3],$=i[7],j=i[11],gt=i[15];return r[0]=o*w+a*S+c*D+l*N,r[4]=o*T+a*R+c*G+l*$,r[8]=o*B+a*O+c*H+l*j,r[12]=o*M+a*U+c*W+l*gt,r[1]=h*w+d*S+u*D+f*N,r[5]=h*T+d*R+u*G+f*$,r[9]=h*B+d*O+u*H+f*j,r[13]=h*M+d*U+u*W+f*gt,r[2]=y*w+g*S+m*D+p*N,r[6]=y*T+g*R+m*G+p*$,r[10]=y*B+g*O+m*H+p*j,r[14]=y*M+g*U+m*W+p*gt,r[3]=x*w+_*S+v*D+P*N,r[7]=x*T+_*R+v*G+P*$,r[11]=x*B+_*O+v*H+P*j,r[15]=x*M+_*U+v*W+P*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],y=t[3],g=t[7],m=t[11],p=t[15];return y*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+g*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],y=t[12],g=t[13],m=t[14],p=t[15],x=d*m*l-g*u*l+g*c*f-a*m*f-d*c*p+a*u*p,_=y*u*l-h*m*l-y*c*f+o*m*f+h*c*p-o*u*p,v=h*g*l-y*d*l+y*a*f-o*g*f-h*a*p+o*d*p,P=y*d*c-h*g*c-y*a*u+o*g*u+h*a*m-o*d*m,w=e*x+n*_+i*v+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=x*T,t[1]=(g*u*r-d*m*r-g*i*f+n*m*f+d*i*p-n*u*p)*T,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*T,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*T,t[4]=_*T,t[5]=(h*m*r-y*u*r+y*i*f-e*m*f-h*i*p+e*u*p)*T,t[6]=(y*c*r-o*m*r-y*i*l+e*m*l+o*i*p-e*c*p)*T,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*T,t[8]=v*T,t[9]=(y*d*r-h*g*r-y*n*f+e*g*f+h*n*p-e*d*p)*T,t[10]=(o*g*r-y*a*r+y*n*l-e*g*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(h*g*i-y*d*i+y*n*u-e*g*u-h*n*m+e*d*m)*T,t[14]=(y*a*i-o*g*i-y*n*c+e*g*c+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,y=r*d,g=o*h,m=o*d,p=a*d,x=c*l,_=c*h,v=c*d,P=n.x,w=n.y,T=n.z;return i[0]=(1-(g+p))*P,i[1]=(f+v)*P,i[2]=(y-_)*P,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(y+_)*T,i[9]=(m-x)*T,i[10]=(1-(u+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Is.set(i[0],i[1],i[2]).length(),o=Is.set(i[4],i[5],i[6]).length(),a=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Fn.copy(this);let l=1/r,h=1/o,d=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,e.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=di){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,y;if(a===di)f=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Wo)f=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=di){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h,y,g;if(a===di)y=(o+r)*d,g=-2*d;else if(a===Wo)y=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Is=new L,Fn=new se,bp=new L(0,0,0),Mp=new L(1,1,1),Bi=new L,mo=new L,yn=new L,ru=new se,ou=new hn,Yn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,au=new L,Bs=new hn,ci=new se,go=new L,yr=new L,wp=new L,Ep=new hn,cu=new L(1,0,0),lu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},Ap={type:"removed"},Ls={type:"childadded",child:null},hc={type:"childremoved",child:null},He=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Yn,n=new hn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(yr,go,this.up):ci.lookAt(go,yr,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(ci),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new L,li=new L,uc=new L,hi=new L,Ns=new L,Fs=new L,du=new L,dc=new L,fc=new L,pc=new L,mc=new fe,gc=new fe,yc=new fe,Di=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Dn.subVectors(i,e),li.subVectors(n,e),uc.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(li),c=Dn.dot(uc),l=li.dot(li),h=li.dot(uc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,y=(o*h-a*c)*u;return r.set(1-f-y,y,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return mc.setScalar(0),gc.setScalar(0),yc.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,n),yc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(mc,r.x),o.addScaledVector(gc,r.y),o.addScaledVector(yc,r.z),o}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),li.subVectors(t,e),Dn.cross(li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Dn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ns.subVectors(i,n),Fs.subVectors(r,n),dc.subVectors(t,n);let c=Ns.dot(dc),l=Fs.dot(dc);if(c<=0&&l<=0)return e.copy(n);fc.subVectors(t,i);let h=Ns.dot(fc),d=Fs.dot(fc);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ns,o);pc.subVectors(t,r);let f=Ns.dot(pc),y=Fs.dot(pc);if(y>=0&&f<=y)return e.copy(r);let g=f*l-c*y;if(g<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(Fs,a);let m=h*y-f*d;if(m<=0&&d-h>=0&&f-y>=0)return du.subVectors(r,i),a=(d-h)/(d-h+(f-y)),e.copy(i).addScaledVector(du,a);let p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Ns,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},yo={h:0,s:0,l:0};function xc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=fp(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ne.fromWorkingColorSpace($e.copy(this),t),Math.round(cn($e.r*255,0,255))*65536+Math.round(cn($e.g*255,0,255))*256+Math.round(cn($e.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=an){ne.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(yo);let n=ec(Li.h,yo.h,e),i=ec(Li.s,yo.s,e),r=ec(Li.l,yo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Lt;Lt.NAMES=pd;var Tp=0,yi=class extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=zi(),this.name="",this.blending=Xs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Bc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hs=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new L,xo=new Nt,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}};var Yo=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zo=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cp=0,En=new se,vc=new He,Ds=new L,xn=new gi,xr=new gi,Ve=new L,en=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?Zo:Yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(xn.min,xr.min),xn.expandByPoint(Ve),Ve.addVectors(xn.max,xr.max),xn.expandByPoint(Ve)):(xn.expandByPoint(xr.min),xn.expandByPoint(xr.max))}xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(t,l),Ve.add(Ds)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new L,c[B]=new L;let l=new L,h=new L,d=new L,u=new Nt,f=new Nt,y=new Nt,g=new L,m=new L;function p(B,M,S){l.fromBufferAttribute(n,B),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,B),f.fromBufferAttribute(r,M),y.fromBufferAttribute(r,S),h.sub(l),d.sub(l),f.sub(u),y.sub(u);let R=1/(f.x*y.y-y.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-y.x).multiplyScalar(R),a[B].add(g),a[M].add(g),a[S].add(g),c[B].add(m),c[M].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let B=0,M=x.length;B<M;++B){let S=x[B],R=S.start,O=S.count;for(let U=R,D=R+O;U<D;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new L,v=new L,P=new L,w=new L;function T(B){P.fromBufferAttribute(i,B),w.copy(P);let M=a[B];_.copy(M),_.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(w,M);let R=v.dot(c[B])<0?-1:1;o.setXYZW(B,_.x,_.y,_.z,R)}for(let B=0,M=x.length;B<M;++B){let S=x[B],R=S.start,O=S.count;for(let U=R,D=R+O;U<D;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let y=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,y=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)u[y++]=l[f++]}return new ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new se,ts=new Ir,vo=new Hi,pu=new L,_o=new L,bo=new L,Mo=new L,_c=new L,So=new L,mu=new L,wo=new L,Xt=class extends He{constructor(t=new en,e=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(_c.fromBufferAttribute(d,t),o?So.addScaledVector(_c,h):So.addScaledVector(_c.sub(e),h))}e.add(So)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(vo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(vo,pu)===null||ts.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=_;v<P;v+=3){let w=a.getX(v),T=a.getX(v+1),B=a.getX(v+2);i=Eo(this,p,t,n,l,h,d,w,T,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=y,p=g;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=Eo(this,o,t,n,l,h,d,x,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=_;v<P;v+=3){let w=v,T=v+1,B=v+2;i=Eo(this,p,t,n,l,h,d,w,T,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=y,p=g;m<p;m+=3){let x=m,_=m+1,v=m+2;i=Eo(this,o,t,n,l,h,d,x,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Rp(s,t,e,n,i,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Vi,a),c===null)return null;wo.copy(a),wo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(wo);return l<e.near||l>e.far?null:{distance:l,point:wo.clone(),object:s}}function Eo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,_o),s.getVertexPosition(c,bo),s.getVertexPosition(l,Mo);let h=Rp(s,t,e,n,_o,bo,Mo,mu);if(h){let d=new L;Di.getBarycoord(mu,_o,bo,Mo,d),i&&(h.uv=Di.getInterpolatedAttribute(i,a,c,l,d,new Nt)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,c,l,d,new Nt)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Di.getNormal(_o,bo,Mo,u.normal),h.face=u,h.barycoord=d}return h}var Wi=class s extends en{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,i,o,2),y("x","z","y",1,-1,t,n,-e,i,o,3),y("x","y","z",1,-1,t,e,n,i,r,4),y("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function y(g,m,p,x,_,v,P,w,T,B,M){let S=v/T,R=P/B,O=v/2,U=P/2,D=w/2,G=T+1,H=B+1,W=0,N=0,$=new L;for(let j=0;j<H;j++){let gt=j*R-U;for(let Tt=0;Tt<G;Tt++){let rt=Tt*S-O;$[g]=rt*x,$[m]=gt*_,$[p]=D,l.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[p]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(Tt/T),d.push(1-j/B),W+=1}}for(let j=0;j<B;j++)for(let gt=0;gt<T;gt++){let Tt=u+gt+G*j,rt=u+gt+G*(j+1),J=u+(gt+1)+G*(j+1),nt=u+(gt+1)+G*j;c.push(Tt,rt,nt),c.push(rt,J,nt),N+=6}a.addGroup(f,N,M),f+=N,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){let t={};for(let e=0;e<s.length;e++){let n=er(s[e]);for(let i in n)t[i]=n[i]}return t}function Pp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function md(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Ip={clone:er,merge:tn},Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},$o=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new L,gu=new Nt,yu=new Nt,je=class extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,gu,yu),e.subVectors(yu,gu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Us=-90,Os=1,bl=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new je(Us,Os,t,e);i.layers=this.layers,this.add(i);let r=new je(Us,Os,t,e);r.layers=this.layers,this.add(r);let o=new je(Us,Os,t,e);o.layers=this.layers,this.add(o);let a=new je(Us,Os,t,e);a.layers=this.layers,this.add(a);let c=new je(Us,Os,t,e);c.layers=this.layers,this.add(c);let l=new je(Us,Os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},jo=class extends ln{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ml=class extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Ui});r.uniforms.tEquirect.value=e;let o=new Xt(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=qn),new bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},bc=new L,Np=new L,Fp=new kt,Un=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=bc.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fp.getNormalMatrix(t),i=this.coplanarPoint(bc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Hi,Ao=new L,Lr=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,r=new Un,o=new Un){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],y=i[9],g=i[10],m=i[11],p=i[12],x=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+o,u+h,m+y,v+x).normalize(),n[3].setComponents(c-o,u-h,m-y,v-x).normalize(),n[4].setComponents(c-a,u-d,m-g,v-_).normalize(),e===di)n[5].setComponents(c+a,u+d,m+g,v+_).normalize();else if(e===Wo)n[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ao.x=i.normal.x>0?t.max.x:t.min.x,Ao.y=i.normal.y>0?t.max.y:t.min.y,Ao.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Dp(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,y)=>f.start-y.start);let u=0;for(let f=1;f<d.length;f++){let y=d[u],g=d[f];g.start<=y.start+y.count+1?y.count=Math.max(y.count,g.start+g.count-y.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,y=d.length;f<y;f++){let g=d[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var us=class s extends en{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],y=[],g=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let _=0;_<l;_++){let v=_*d-r;y.push(v,-x,0),g.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let _=x+l*p,v=x+l*(p+1),P=x+1+l*(p+1),w=x+1+l*p;f.push(_,v,w),f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new Se(y,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Dm=`
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,l0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Up,alphahash_pars_fragment:Op,alphamap_fragment:zp,alphamap_pars_fragment:Vp,alphatest_fragment:kp,alphatest_pars_fragment:Hp,aomap_fragment:Wp,aomap_pars_fragment:Gp,batching_pars_vertex:qp,batching_vertex:Xp,begin_vertex:Yp,beginnormal_vertex:Zp,bsdfs:$p,iridescence_fragment:jp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:cm,displacementmap_pars_vertex:lm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:ym,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:vm,fog_vertex:_m,fog_pars_vertex:bm,fog_fragment:Mm,fog_pars_fragment:Sm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Em,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Tm,lights_pars_begin:Cm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Bm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Dm,lights_fragment_maps:Um,lights_fragment_end:Om,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Hm,map_fragment:Wm,map_pars_fragment:Gm,map_particle_fragment:qm,map_particle_pars_fragment:Xm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Zm,morphinstance_vertex:$m,morphcolor_vertex:jm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:Km,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:cg,iridescence_pars_fragment:lg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:vg,shadowmap_vertex:_g,shadowmask_pars_fragment:bg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:wg,skinnormal_vertex:Eg,specularmap_fragment:Ag,specularmap_pars_fragment:Tg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Rg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Bg,uv_pars_vertex:Lg,uv_vertex:Ng,worldpos_vertex:Fg,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Og,backgroundCube_frag:zg,cube_vert:Vg,cube_frag:kg,depth_vert:Hg,depth_frag:Wg,distanceRGBA_vert:Gg,distanceRGBA_frag:qg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:Zg,linedashed_frag:$g,meshbasic_vert:jg,meshbasic_frag:Jg,meshlambert_vert:Qg,meshlambert_frag:Kg,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:o0,meshphysical_frag:a0,meshtoon_vert:c0,meshtoon_frag:l0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},at={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Wn={basic:{uniforms:tn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:tn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:tn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:tn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:tn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:tn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:tn([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:tn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:tn([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:tn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:tn([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:tn([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:tn([at.lights,at.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Wn.physical={uniforms:tn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var To={r:0,b:0,g:0},ns=new Yn,g0=new se;function y0(s,t,e,n,i,r,o){let a=new Lt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function y(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function g(x){let _=!1,v=y(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){let v=y(_);v&&(v.isCubeTexture||v.mapping===ma)?(h===void 0&&(h=new Xt(new Wi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:er(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(ns)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new us(2,2),new _n({name:"BackgroundMaterial",uniforms:er(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(To,md(s)),n.buffers.color.setClear(To.r,To.g,To.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:g,addToRenderList:m}}function x0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(S,R,O,U,D){let G=!1,H=d(U,O,R);r!==H&&(r=H,l(r.object)),G=f(S,U,O,D),G&&y(S,U,O,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(S,R,O,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,R,O){let U=O.wireframe===!0,D=n[S.id];D===void 0&&(D={},n[S.id]=D);let G=D[R.id];G===void 0&&(G={},D[R.id]=G);let H=G[U];return H===void 0&&(H=u(c()),G[U]=H),H}function u(S){let R=[],O=[],U=[];for(let D=0;D<e;D++)R[D]=0,O[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,R,O,U){let D=r.attributes,G=R.attributes,H=0,W=O.getAttributes();for(let N in W)if(W[N].location>=0){let j=D[N],gt=G[N];if(gt===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),j===void 0||j.attribute!==gt||gt&&j.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function y(S,R,O,U){let D={},G=R.attributes,H=0,W=O.getAttributes();for(let N in W)if(W[N].location>=0){let j=G[N];j===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));let gt={};gt.attribute=j,j&&j.data&&(gt.data=j.data),D[N]=gt,H++}r.attributes=D,r.attributesNum=H,r.index=U}function g(){let S=r.newAttributes;for(let R=0,O=S.length;R<O;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){let O=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;O[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),D[S]!==R&&(s.vertexAttribDivisor(S,R),D[S]=R)}function x(){let S=r.newAttributes,R=r.enabledAttributes;for(let O=0,U=R.length;O<U;O++)R[O]!==S[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function _(S,R,O,U,D,G,H){H===!0?s.vertexAttribIPointer(S,R,O,D,G):s.vertexAttribPointer(S,R,O,U,D,G)}function v(S,R,O,U){g();let D=U.attributes,G=O.getAttributes(),H=R.defaultAttributeValues;for(let W in G){let N=G[W];if(N.location>=0){let $=D[W];if($===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){let j=$.normalized,gt=$.itemSize,Tt=t.get($);if(Tt===void 0)continue;let rt=Tt.buffer,J=Tt.type,nt=Tt.bytesPerElement,yt=J===s.INT||J===s.UNSIGNED_INT||$.gpuType===th;if($.isInterleavedBufferAttribute){let ot=$.data,Ct=ot.stride,Ot=$.offset;if(ot.isInstancedInterleavedBuffer){for(let Yt=0;Yt<N.locationSize;Yt++)p(N.location+Yt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Yt=0;Yt<N.locationSize;Yt++)m(N.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Yt=0;Yt<N.locationSize;Yt++)_(N.location+Yt,gt/N.locationSize,J,j,Ct*nt,(Ot+gt/N.locationSize*Yt)*nt,yt)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<N.locationSize;ot++)p(N.location+ot,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<N.locationSize;ot++)m(N.location+ot);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ot=0;ot<N.locationSize;ot++)_(N.location+ot,gt/N.locationSize,J,j,gt*nt,gt/N.locationSize*ot*nt,yt)}}else if(H!==void 0){let j=H[W];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(N.location,j);break;case 3:s.vertexAttrib3fv(N.location,j);break;case 4:s.vertexAttrib4fv(N.location,j);break;default:s.vertexAttrib1fv(N.location,j)}}}}x()}function P(){B();for(let S in n){let R=n[S];for(let O in R){let U=R[O];for(let D in U)h(U[D].object),delete U[D];delete R[O]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let O in R){let U=R[O];for(let D in U)h(U[D].object),delete U[D];delete R[O]}delete n[S.id]}function T(S){for(let R in n){let O=n[R];if(O[S.id]===void 0)continue;let U=O[S.id];for(let D in U)h(U[D].object),delete U[D];delete O[S.id]}}function B(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function v0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let y=0;y<d;y++)f+=h[y];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<l.length;y++)o(l[y],h[y],u[y]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let y=0;for(let g=0;g<d;g++)y+=h[g]*u[g];e.update(y,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==On&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let B=T===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==pi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!B)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:y,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:P,maxSamples:w}}function b0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Un,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let y=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||y===null||y.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,_=x*4,v=p.clippingState||null;c.value=v,v=h(y,u,_,f);for(let P=0;P!==_;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,y){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,y!==!0||m===null){let p=f+g*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==g;++_,v+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function M0(s){let t=new WeakMap;function e(o,a){return a===Vc?o.mapping=Js:a===kc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vc||a===kc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ml(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Jo=class extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qs=4,xu=[.125,.215,.35,.446,.526,.582],os=20,Mc=new Jo,vu=new Lt,Sc=null,wc=0,Ec=0,Ac=!1,ss=(1+Math.sqrt(5))/2,zs=1/ss,_u=[new L(-ss,zs,0),new L(ss,zs,0),new L(-zs,0,ss),new L(zs,0,ss),new L(0,ss,-zs),new L(0,ss,zs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,wc,Ec),this._renderer.xr.enabled=Ac,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:zr,format:On,colorSpace:sr,depthBuffer:!1},i=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(r)),this._blurMaterial=w0(r,t,e)}return i}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,i){let a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(vu),h.toneMapping=Oi,h.autoClear=!1;let f=new hs({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),y=new Xt(new Wi,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(vu),g=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Co(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Js||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(i-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Xt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),g=r/y,m=isFinite(r)?1+Math.floor(h*g):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],x=0;for(let T=0;T<os;++T){let B=T/g,M=Math.exp(-B*B/2);p.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=y,u.mipInt.value=_-n;let v=this._sizeLods[i],P=3*v*(i>_-qs?i-_+qs:0),w=4*(this._cubeSize-v);Co(e,P,w,3*v,2*v),c.setRenderTarget(e),c.render(d,Mc)}};function S0(s){let t=[],e=[],n=[],i=s,r=s-qs+1+xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-qs?c=xu[o-s+qs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,y=6,g=3,m=2,p=1,x=new Float32Array(g*y*f),_=new Float32Array(m*y*f),v=new Float32Array(p*y*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,B=w>2?0:-1,M=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];x.set(M,g*y*w),_.set(u,m*y*w);let S=[w,w,w,w,w,w];v.set(S,p*y*w)}let P=new en;P.setAttribute("position",new ke(x,g)),P.setAttribute("uv",new ke(_,m)),P.setAttribute("faceIndex",new ke(v,p)),t.push(P),i>qs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(s,t,e){let n=new mi(s,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function w0(s,t,e){let n=new Float32Array(os),i=new L(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Mu(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Su(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function E0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Vc||c===kc,h=c===Js||c===Qs;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Qo(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Qo(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function A0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function T0(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let y in u.attributes)t.remove(u.attributes[y]);for(let y in u.morphAttributes){let g=u.morphAttributes[y];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let y in u)t.update(u[y],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let y in f){let g=f[y];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,y=d.attributes.position,g=0;if(f!==null){let x=f.array;g=f.version;for(let _=0,v=x.length;_<v;_+=3){let P=x[_+0],w=x[_+1],T=x[_+2];u.push(P,w,w,T,T,P)}}else if(y!==void 0){let x=y.array;g=y.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let P=_+0,w=_+1,T=_+2;u.push(P,w,w,T,T,P)}}else return;let m=new(fd(u)?Zo:Yo)(u,1);m.version=g;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function C0(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,y){y!==0&&(s.drawElementsInstanced(n,f,r,u*o,y),e.update(f,n,y))}function h(u,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,y);let m=0;for(let p=0;p<y;p++)m+=f[p];e.update(m,n,1)}function d(u,f,y,g){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,y);let p=0;for(let x=0;x<y;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function R0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P0(s,t,e){let n=new WeakMap,i=new fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let v=a.attributes.position.count*_,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*P*4*d),T=new Xo(w,v,P,d);T.type=Xn,T.needsUpdate=!0;let B=_*4;for(let S=0;S<d;S++){let R=m[S],O=p[S],U=x[S],D=v*P*4*S;for(let G=0;G<R.count;G++){let H=G*B;f===!0&&(i.fromBufferAttribute(R,G),w[D+H+0]=i.x,w[D+H+1]=i.y,w[D+H+2]=i.z,w[D+H+3]=0),y===!0&&(i.fromBufferAttribute(O,G),w[D+H+4]=i.x,w[D+H+5]=i.y,w[D+H+6]=i.z,w[D+H+7]=0),g===!0&&(i.fromBufferAttribute(U,G),w[D+H+8]=i.x,w[D+H+9]=i.y,w[D+H+10]=i.z,w[D+H+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Nt(v,P)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let y=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function I0(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ko=class extends ln{constructor(t,e,n,i,r,o,a,c,l,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=ls),n===void 0&&h===tr&&(n=Ks),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yd=new ln,wu=new Ko(1,1),xd=new Xo,vd=new _l,_d=new jo,Eu=[],Au=[],Tu=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function rr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Eu[i];if(r===void 0&&(r=new Float32Array(i),Eu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ya(s,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function B0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function L0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function N0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function D0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Fe(e,n))return;Ru.set(n),s.uniformMatrix2fv(this.addr,!1,Ru),De(e,n)}}function U0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Fe(e,n))return;Cu.set(n),s.uniformMatrix3fv(this.addr,!1,Cu),De(e,n)}}function O0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Fe(e,n))return;Tu.set(n),s.uniformMatrix4fv(this.addr,!1,Tu),De(e,n)}}function z0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function V0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function W0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function X0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function Y0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wu.compareFunction=dd,r=wu):r=yd,e.setTexture2D(t||r,i)}function Z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vd,i)}function $0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_d,i)}function j0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xd,i)}function J0(s){switch(s){case 5126:return B0;case 35664:return L0;case 35665:return N0;case 35666:return F0;case 35674:return D0;case 35675:return U0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return V0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return W0;case 36294:return G0;case 36295:return q0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return j0}}function Q0(s,t){s.uniform1fv(this.addr,t)}function K0(s,t){let e=rr(t,this.size,2);s.uniform2fv(this.addr,e)}function ty(s,t){let e=rr(t,this.size,3);s.uniform3fv(this.addr,e)}function ey(s,t){let e=rr(t,this.size,4);s.uniform4fv(this.addr,e)}function ny(s,t){let e=rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function iy(s,t){let e=rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sy(s,t){let e=rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ry(s,t){s.uniform1iv(this.addr,t)}function oy(s,t){s.uniform2iv(this.addr,t)}function ay(s,t){s.uniform3iv(this.addr,t)}function cy(s,t){s.uniform4iv(this.addr,t)}function ly(s,t){s.uniform1uiv(this.addr,t)}function hy(s,t){s.uniform2uiv(this.addr,t)}function uy(s,t){s.uniform3uiv(this.addr,t)}function dy(s,t){s.uniform4uiv(this.addr,t)}function fy(s,t,e){let n=this.cache,i=t.length,r=ya(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||yd,r[o])}function py(s,t,e){let n=this.cache,i=t.length,r=ya(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vd,r[o])}function my(s,t,e){let n=this.cache,i=t.length,r=ya(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_d,r[o])}function gy(s,t,e){let n=this.cache,i=t.length,r=ya(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xd,r[o])}function yy(s){switch(s){case 5126:return Q0;case 35664:return K0;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return cy;case 5125:return ly;case 36294:return hy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yy(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Pu(s,t){s.seq.push(t),s.map[t.id]=t}function xy(s,t,e){let n=s.name,i=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),o=Tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Pu(e,l===void 0?new Sl(a,s,t):new wl(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new El(a),Pu(e,d)),e=d}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);xy(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Iu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vy=37297,_y=0;function by(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bu=new kt;function My(s){ne._getMatrix(Bu,ne.workingColorSpace,s);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case ga:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+by(s.getShaderSource(t),o)}else return i}function Sy(s,t){let e=My(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wy(s,t){let e;switch(t){case jf:e="Linear";break;case Jf:e="Reinhard";break;case Qf:e="Cineon";break;case Kl:e="ACESFilmic";break;case tp:e="AgX";break;case ep:e="Neutral";break;case Kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ro=new L;function Ey(){ne.getLuminanceCoefficients(Ro);let s=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Ty(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ar(s){return s!==""}function Nu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(s){return s.replace(Ry,Iy)}var Py=new Map;function Iy(s,t){let e=Gt[t];if(e===void 0){let n=Py.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(s){return s.replace(By,Ly)}function Ly(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ny(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Fy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dy(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Qs&&(t="ENVMAP_MODE_REFRACTION"),t}function Uy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case td:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case $f:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zy(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ny(e),l=Fy(e),h=Dy(e),d=Uy(e),u=Oy(e),f=Ay(e),y=Ty(r),g=i.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(m=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?wy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Sy("linearToOutputTexel",e.outputColorSpace),Ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=Al(o),o=Nu(o,e),o=Fu(o,e),a=Al(a),a=Nu(a,e),a=Fu(a,e),o=Du(o),a=Du(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+o,v=x+p+a,P=Iu(i,i.VERTEX_SHADER,_),w=Iu(i,i.FRAGMENT_SHADER,v);i.attachShader(g,P),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(R){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(P).trim(),D=i.getShaderInfoLog(w).trim(),G=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,P,w);else{let W=Lu(i,P,"vertex"),N=Lu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+W+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||D==="")&&(H=!1);H&&(R.diagnostics={runnable:G,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(P),i.deleteShader(w),B=new $s(i,g),M=Cy(i,g)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,vy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_y++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=w,this}var Vy=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}};function ky(s,t,e,n,i,r,o){let a=new Br,c=new Tl,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,O,U){let D=O.fog,G=U.geometry,H=M.isMeshStandardMaterial?O.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),N=W&&W.mapping===ma?W.image.height:null,$=y[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=j!==void 0?j.length:0,Tt=0;G.morphAttributes.position!==void 0&&(Tt=1),G.morphAttributes.normal!==void 0&&(Tt=2),G.morphAttributes.color!==void 0&&(Tt=3);let rt,J,nt,yt;if($){let le=Wn[$];rt=le.vertexShader,J=le.fragmentShader}else rt=M.vertexShader,J=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),yt=c.getFragmentShaderID(M);let ot=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,Yt=U.isBatchedMesh===!0,Me=!!M.map,te=!!M.matcap,Pe=!!W,k=!!M.aoMap,Sn=!!M.lightMap,Jt=!!M.bumpMap,Qt=!!M.normalMap,Pt=!!M.displacementMap,ge=!!M.emissiveMap,Rt=!!M.metalnessMap,I=!!M.roughnessMap,E=M.anisotropy>0,q=M.clearcoat>0,K=M.dispersion>0,et=M.iridescence>0,Q=M.sheen>0,wt=M.transmission>0,ht=E&&!!M.anisotropyMap,xt=q&&!!M.clearcoatMap,ee=q&&!!M.clearcoatNormalMap,it=q&&!!M.clearcoatRoughnessMap,vt=et&&!!M.iridescenceMap,It=et&&!!M.iridescenceThicknessMap,Bt=Q&&!!M.sheenColorMap,_t=Q&&!!M.sheenRoughnessMap,Kt=!!M.specularMap,Wt=!!M.specularColorMap,pe=!!M.specularIntensityMap,F=wt&&!!M.transmissionMap,lt=wt&&!!M.thicknessMap,Z=!!M.gradientMap,tt=!!M.alphaMap,mt=M.alphaTest>0,dt=!!M.alphaHash,zt=!!M.extensions,Ce=Oi;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=s.toneMapping);let Ye={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:J,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:sr,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:te,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:Sn,bumpMap:Jt,normalMap:Qt,displacementMap:u&&Pt,emissiveMap:ge,normalMapObjectSpace:Qt&&M.normalMapType===rp,normalMapTangentSpace:Qt&&M.normalMapType===ud,metalnessMap:Rt,roughnessMap:I,anisotropy:E,anisotropyMap:ht,clearcoat:q,clearcoatMap:xt,clearcoatNormalMap:ee,clearcoatRoughnessMap:it,dispersion:K,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:It,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:_t,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:pe,transmission:wt,transmissionMap:F,thicknessMap:lt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:dt,combine:M.combine,mapUv:Me&&g(M.map.channel),aoMapUv:k&&g(M.aoMap.channel),lightMapUv:Sn&&g(M.lightMap.channel),bumpMapUv:Jt&&g(M.bumpMap.channel),normalMapUv:Qt&&g(M.normalMap.channel),displacementMapUv:Pt&&g(M.displacementMap.channel),emissiveMapUv:ge&&g(M.emissiveMap.channel),metalnessMapUv:Rt&&g(M.metalnessMap.channel),roughnessMapUv:I&&g(M.roughnessMap.channel),anisotropyMapUv:ht&&g(M.anisotropyMap.channel),clearcoatMapUv:xt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(M.sheenRoughnessMap.channel),specularMapUv:Kt&&g(M.specularMap.channel),specularColorMapUv:Wt&&g(M.specularColorMap.channel),specularIntensityMapUv:pe&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:lt&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Me||tt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(S,M),_(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let S=y[M.type],R;if(S){let O=Wn[S];R=Ip.clone(O.uniforms)}else R=M.uniforms;return R}function P(M,S){let R;for(let O=0,U=h.length;O<U;O++){let D=h[O];if(D.cacheKey===S){R=D,++R.usedTimes;break}}return R===void 0&&(R=new zy(s,S,M,r),h.push(R)),R}function w(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:B}}function Hy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Wy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ou(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,y,g,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,y,g,m){let p=o(d,u,f,y,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,y,g,m){let p=o(d,u,f,y,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Wy),n.length>1&&n.sort(u||Ou),i.length>1&&i.sort(u||Ou)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Gy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new zu,s.set(n,[o])):i>=r.length?(o=new zu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function qy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Xy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Yy=0;function Zy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $y(s){let t=new qy,e=Xy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new se,o=new se;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,y=0,g=0,m=0,p=0,x=0,_=0,v=0,P=0,w=0,T=0;l.sort(Zy);for(let M=0,S=l.length;M<S;M++){let R=l[M],O=R.color,U=R.intensity,D=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*U,d+=O.g*U,u+=O.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);T++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,N=e.get(R);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=H,f++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(U),H.distance=D,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[g]=H;let W=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,W.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=W.matrix,R.castShadow){let N=e.get(R);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=G,v++}g++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(O).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let W=R.shadow,N=e.get(R);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,n.pointShadow[y]=N,n.pointShadowMap[y]=G,n.pointShadowMatrix[y]=R.shadow.matrix,_++}n.point[y]=H,y++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let B=n.hash;(B.directionalLength!==f||B.pointLength!==y||B.spotLength!==g||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==x||B.numPointShadows!==_||B.numSpotShadows!==v||B.numSpotMaps!==P||B.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,B.directionalLength=f,B.pointLength=y,B.spotLength=g,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=x,B.numPointShadows=_,B.numSpotShadows=v,B.numSpotMaps=P,B.numLightProbes=T,n.version=Yy++)}function c(l,h){let d=0,u=0,f=0,y=0,g=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Vu(s){let t=new $y(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Vu(s),t.set(i,[a])):r>=o.length?(a=new Vu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rl=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`;function Ky(s,t,e){let n=new Lr,i=new Nt,r=new Nt,o=new fe,a=new Rl({depthPacking:sp}),c=new Pl,l={},h=e.maxTextureSize,d={[Vi]:Je,[Je]:Vi,[An]:An},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Jy,fragmentShader:Qy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let y=new en;y.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xt(y,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(w,T,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Ui),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let U=p!==ui&&this.type===ui,D=p===ui&&this.type!==ui;for(let G=0,H=w.length;G<H;G++){let W=w[G],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let $=N.getFrameExtents();if(i.multiply($),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||U===!0||D===!0){let gt=this.type!==ui?{minFilter:vn,magFilter:vn}:{};N.map!==null&&N.map.dispose(),N.map=new mi(i.x,i.y,gt),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();let j=N.getViewportCount();for(let gt=0;gt<j;gt++){let Tt=N.getViewport(gt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),O.viewport(o),N.updateMatrices(W,gt),n=N.getFrustum(),v(T,B,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&x(N,B),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,R)};function x(w,T){let B=t.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,B,u,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,B,f,g,null)}function _(w,T,B,M){let S=null,R=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=B.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=S.uuid,U=T.uuid,D=l[O];D===void 0&&(D={},l[O]=D);let G=D[U];G===void 0&&(G=S.clone(),D[U]=G,T.addEventListener("dispose",P)),S=G}if(S.visible=T.visible,S.wireframe=T.wireframe,M===ui?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=s.properties.get(S);O.light=B}return S}function v(w,T,B,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ui)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);let U=t.update(w),D=w.material;if(Array.isArray(D)){let G=U.groups;for(let H=0,W=G.length;H<W;H++){let N=G[H],$=D[N.materialIndex];if($&&$.visible){let j=_(w,$,M,S);w.onBeforeShadow(s,w,T,B,U,j,N),s.renderBufferDirect(B,null,U,j,w,N),w.onAfterShadow(s,w,T,B,U,j,N)}}}else if(D.visible){let G=_(w,D,M,S);w.onBeforeShadow(s,w,T,B,U,G,null),s.renderBufferDirect(B,null,U,G,w,null),w.onAfterShadow(s,w,T,B,U,G,null)}}let O=w.children;for(let U=0,D=O.length;U<D;U++)v(O[U],T,B,M,S)}function P(w){w.target.removeEventListener("dispose",P);for(let B in l){let M=l[B],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var tx={[Lc]:Nc,[Fc]:Oc,[Dc]:zc,[js]:Uc,[Nc]:Lc,[Oc]:Fc,[zc]:Dc,[Uc]:js};function ex(s,t){function e(){let F=!1,lt=new fe,Z=null,tt=new fe(0,0,0,0);return{setMask:function(mt){Z!==mt&&!F&&(s.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){F=mt},setClear:function(mt,dt,zt,Ce,Ye){Ye===!0&&(mt*=Ce,dt*=Ce,zt*=Ce),lt.set(mt,dt,zt,Ce),tt.equals(lt)===!1&&(s.clearColor(mt,dt,zt,Ce),tt.copy(lt))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,Z=null,tt=null,mt=null;return{setReversed:function(dt){if(lt!==dt){let zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let Ce=mt;mt=null,this.setClear(Ce)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ot(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!F&&(s.depthMask(dt),Z=dt)},setFunc:function(dt){if(lt&&(dt=tx[dt]),tt!==dt){switch(dt){case Lc:s.depthFunc(s.NEVER);break;case Nc:s.depthFunc(s.ALWAYS);break;case Fc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Uc:s.depthFunc(s.GEQUAL);break;case Oc:s.depthFunc(s.GREATER);break;case zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=dt}},setLocked:function(dt){F=dt},setClear:function(dt){mt!==dt&&(lt&&(dt=1-dt),s.clearDepth(dt),mt=dt)},reset:function(){F=!1,Z=null,tt=null,mt=null,lt=!1}}}function i(){let F=!1,lt=null,Z=null,tt=null,mt=null,dt=null,zt=null,Ce=null,Ye=null;return{setTest:function(le){F||(le?ot(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(le){lt!==le&&!F&&(s.stencilMask(le),lt=le)},setFunc:function(le,Bn,si){(Z!==le||tt!==Bn||mt!==si)&&(s.stencilFunc(le,Bn,si),Z=le,tt=Bn,mt=si)},setOp:function(le,Bn,si){(dt!==le||zt!==Bn||Ce!==si)&&(s.stencilOp(le,Bn,si),dt=le,zt=Bn,Ce=si)},setLocked:function(le){F=le},setClear:function(le){Ye!==le&&(s.clearStencil(le),Ye=le)},reset:function(){F=!1,lt=null,Z=null,tt=null,mt=null,dt=null,zt=null,Ce=null,Ye=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,p=null,x=null,_=null,v=null,P=null,w=null,T=new Lt(0,0,0),B=0,M=!1,S=null,R=null,O=null,U=null,D=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=W>=2);let $=null,j={},gt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),rt=new fe().fromArray(gt),J=new fe().fromArray(Tt);function nt(F,lt,Z,tt){let mt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(F,dt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Z;zt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(lt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return dt}let yt={};yt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(js),Jt(!1),Qt(Gh),ot(s.CULL_FACE),k(Ui);function ot(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Ct(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Ot(F,lt){return d[F]!==lt?(s.bindFramebuffer(F,lt),d[F]=lt,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Yt(F,lt){let Z=f,tt=!1;if(F){Z=u.get(lt),Z===void 0&&(Z=[],u.set(lt,Z));let mt=F.textures;if(Z.length!==mt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,zt=mt.length;dt<zt;dt++)Z[dt]=s.COLOR_ATTACHMENT0+dt;Z.length=mt.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function Me(F){return y!==F?(s.useProgram(F),y=F,!0):!1}let te={[rs]:s.FUNC_ADD,[If]:s.FUNC_SUBTRACT,[Bf]:s.FUNC_REVERSE_SUBTRACT};te[Lf]=s.MIN,te[Nf]=s.MAX;let Pe={[Ff]:s.ZERO,[Df]:s.ONE,[Uf]:s.SRC_COLOR,[Ic]:s.SRC_ALPHA,[Wf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[zf]:s.DST_ALPHA,[Of]:s.ONE_MINUS_SRC_COLOR,[Bc]:s.ONE_MINUS_SRC_ALPHA,[Hf]:s.ONE_MINUS_DST_COLOR,[Vf]:s.ONE_MINUS_DST_ALPHA,[Gf]:s.CONSTANT_COLOR,[qf]:s.ONE_MINUS_CONSTANT_COLOR,[Xf]:s.CONSTANT_ALPHA,[Yf]:s.ONE_MINUS_CONSTANT_ALPHA};function k(F,lt,Z,tt,mt,dt,zt,Ce,Ye,le){if(F===Ui){g===!0&&(Ct(s.BLEND),g=!1);return}if(g===!1&&(ot(s.BLEND),g=!0),F!==Pf){if(F!==m||le!==M){if((p!==rs||v!==rs)&&(s.blendEquation(s.FUNC_ADD),p=rs,v=rs),le)switch(F){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cr:s.blendFunc(s.ONE,s.ONE);break;case qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,_=null,P=null,w=null,T.set(0,0,0),B=0,m=F,M=le}return}mt=mt||lt,dt=dt||Z,zt=zt||tt,(lt!==p||mt!==v)&&(s.blendEquationSeparate(te[lt],te[mt]),p=lt,v=mt),(Z!==x||tt!==_||dt!==P||zt!==w)&&(s.blendFuncSeparate(Pe[Z],Pe[tt],Pe[dt],Pe[zt]),x=Z,_=tt,P=dt,w=zt),(Ce.equals(T)===!1||Ye!==B)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Ye),T.copy(Ce),B=Ye),m=F,M=!1}function Sn(F,lt){F.side===An?Ct(s.CULL_FACE):ot(s.CULL_FACE);let Z=F.side===Je;lt&&(Z=!Z),Jt(Z),F.blending===Xs&&F.transparent===!1?k(Ui):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function Qt(F){F!==Cf?(ot(s.CULL_FACE),F!==R&&(F===Gh?s.cullFace(s.BACK):F===Rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),R=F}function Pt(F){F!==O&&(H&&s.lineWidth(F),O=F)}function ge(F,lt,Z){F?(ot(s.POLYGON_OFFSET_FILL),(U!==lt||D!==Z)&&(s.polygonOffset(lt,Z),U=lt,D=Z)):Ct(s.POLYGON_OFFSET_FILL)}function Rt(F){F?ot(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function I(F){F===void 0&&(F=s.TEXTURE0+G-1),$!==F&&(s.activeTexture(F),$=F)}function E(F,lt,Z){Z===void 0&&($===null?Z=s.TEXTURE0+G-1:Z=$);let tt=j[Z];tt===void 0&&(tt={type:void 0,texture:void 0},j[Z]=tt),(tt.type!==F||tt.texture!==lt)&&($!==Z&&(s.activeTexture(Z),$=Z),s.bindTexture(F,lt||yt[F]),tt.type=F,tt.texture=lt)}function q(){let F=j[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(F){rt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function _t(F){J.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function Kt(F,lt){let Z=l.get(lt);Z===void 0&&(Z=new WeakMap,l.set(lt,Z));let tt=Z.get(F);tt===void 0&&(tt=s.getUniformBlockIndex(lt,F.name),Z.set(F,tt))}function Wt(F,lt){let tt=l.get(lt).get(F);c.get(lt)!==tt&&(s.uniformBlockBinding(lt,tt,F.__bindingPointIndex),c.set(lt,tt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,j={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,p=null,x=null,_=null,v=null,P=null,w=null,T=new Lt(0,0,0),B=0,M=!1,S=null,R=null,O=null,U=null,D=null,rt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Ot,drawBuffers:Yt,useProgram:Me,setBlending:k,setMaterial:Sn,setFlipSided:Jt,setCullFace:Qt,setLineWidth:Pt,setPolygonOffset:ge,setScissorTest:Rt,activeTexture:I,bindTexture:E,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:vt,texImage3D:It,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:ee,texStorage3D:it,texSubImage2D:Q,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Bt,viewport:_t,reset:pe}}function ku(s,t,e,n){let i=nx(n);switch(e){case rd:return s*t;case ad:return s*t;case cd:return s*t*2;case ih:return s*t/i.components*i.byteLength;case sh:return s*t/i.components*i.byteLength;case ld:return s*t*2/i.components*i.byteLength;case rh:return s*t*2/i.components*i.byteLength;case od:return s*t*3/i.components*i.byteLength;case On:return s*t*4/i.components*i.byteLength;case oh:return s*t*4/i.components*i.byteLength;case Uo:case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zo:case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gc:case Xc:return Math.max(s,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(s,8)*Math.max(t,8)/2;case Yc:case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ko:case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hd:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fl:case pl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nx(s){switch(s){case pi:case nd:return{byteLength:1,components:1};case Pr:case id:case zr:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case ls:case th:case Xn:return{byteLength:4,components:1};case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ix(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,E){return f?new OffscreenCanvas(I,E):Go("canvas")}function g(I,E,q){let K=1,et=Rt(I);if((et.width>q||et.height>q)&&(K=q/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let Q=Math.floor(K*et.width),wt=Math.floor(K*et.height);d===void 0&&(d=y(Q,wt));let ht=E?y(Q,wt):d;return ht.width=Q,ht.height=wt,ht.getContext("2d").drawImage(I,0,0,Q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+wt+")."),ht}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,E,q,K,et=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=E;if(E===s.RED&&(q===s.FLOAT&&(Q=s.R32F),q===s.HALF_FLOAT&&(Q=s.R16F),q===s.UNSIGNED_BYTE&&(Q=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.R8UI),q===s.UNSIGNED_SHORT&&(Q=s.R16UI),q===s.UNSIGNED_INT&&(Q=s.R32UI),q===s.BYTE&&(Q=s.R8I),q===s.SHORT&&(Q=s.R16I),q===s.INT&&(Q=s.R32I)),E===s.RG&&(q===s.FLOAT&&(Q=s.RG32F),q===s.HALF_FLOAT&&(Q=s.RG16F),q===s.UNSIGNED_BYTE&&(Q=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RG8UI),q===s.UNSIGNED_SHORT&&(Q=s.RG16UI),q===s.UNSIGNED_INT&&(Q=s.RG32UI),q===s.BYTE&&(Q=s.RG8I),q===s.SHORT&&(Q=s.RG16I),q===s.INT&&(Q=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),q===s.UNSIGNED_INT&&(Q=s.RGB32UI),q===s.BYTE&&(Q=s.RGB8I),q===s.SHORT&&(Q=s.RGB16I),q===s.INT&&(Q=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),q===s.UNSIGNED_INT&&(Q=s.RGBA32UI),q===s.BYTE&&(Q=s.RGBA8I),q===s.SHORT&&(Q=s.RGBA16I),q===s.INT&&(Q=s.RGBA32I)),E===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),E===s.RGBA){let wt=et?ga:ne.getTransfer(K);q===s.FLOAT&&(Q=s.RGBA32F),q===s.HALF_FLOAT&&(Q=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Q=wt===ue?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(I,E){let q;return I?E===null||E===ls||E===Ks?q=s.DEPTH24_STENCIL8:E===Xn?q=s.DEPTH32F_STENCIL8:E===Pr&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ls||E===Ks?q=s.DEPTH_COMPONENT24:E===Xn?q=s.DEPTH_COMPONENT32F:E===Pr&&(q=s.DEPTH_COMPONENT16),q}function P(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),B(E),E.isVideoTexture&&h.delete(E)}function T(I){let E=I.target;E.removeEventListener("dispose",T),S(E)}function B(I){let E=n.get(I);if(E.__webglInit===void 0)return;let q=I.source,K=u.get(q);if(K){let et=K[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(I),Object.keys(K).length===0&&u.delete(q)}n.remove(I)}function M(I){let E=n.get(I);s.deleteTexture(E.__webglTexture);let q=I.source,K=u.get(q);delete K[E.__cacheKey],o.memory.textures--}function S(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let et=0;et<E.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(E.__webglFramebuffer[K][et]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=I.textures;for(let K=0,et=q.length;K<et;K++){let Q=n.get(q[K]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(I)}let R=0;function O(){R=0}function U(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function D(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function G(I,E){let q=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,I,E);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function H(I,E){let q=n.get(I);if(I.version>0&&q.__version!==I.version){J(q,I,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function W(I,E){let q=n.get(I);if(I.version>0&&q.__version!==I.version){J(q,I,E);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function N(I,E){let q=n.get(I);if(I.version>0&&q.__version!==I.version){nt(q,I,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}let $={[Rr]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[Hc]:s.MIRRORED_REPEAT},j={[vn]:s.NEAREST,[np]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[Qa]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},gt={[op]:s.NEVER,[dp]:s.ALWAYS,[ap]:s.LESS,[dd]:s.LEQUAL,[cp]:s.EQUAL,[up]:s.GEQUAL,[lp]:s.GREATER,[hp]:s.NOTEQUAL};function Tt(I,E){if(E.type===Xn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===Qa||E.magFilter===co||E.magFilter===cs||E.minFilter===qn||E.minFilter===Qa||E.minFilter===co||E.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,$[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,$[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,$[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,j[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==co&&E.minFilter!==cs||E.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function rt(I,E){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let K=E.source,et=u.get(K);et===void 0&&(et={},u.set(K,et));let Q=D(E);if(Q!==I.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[Q].usedTimes++;let wt=et[I.__cacheKey];wt!==void 0&&(et[I.__cacheKey].usedTimes--,wt.usedTimes===0&&M(E)),I.__cacheKey=Q,I.__webglTexture=et[Q].texture}return q}function J(I,E,q){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);let et=rt(I,E),Q=E.source;e.bindTexture(K,I.__webglTexture,s.TEXTURE0+q);let wt=n.get(Q);if(Q.version!==wt.__version||et===!0){e.activeTexture(s.TEXTURE0+q);let ht=ne.getPrimaries(ne.workingColorSpace),xt=E.colorSpace===Fi?null:ne.getPrimaries(E.colorSpace),ee=E.colorSpace===Fi||ht===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=g(E.image,!1,i.maxTextureSize);it=ge(E,it);let vt=r.convert(E.format,E.colorSpace),It=r.convert(E.type),Bt=_(E.internalFormat,vt,It,E.colorSpace,E.isVideoTexture);Tt(K,E);let _t,Kt=E.mipmaps,Wt=E.isVideoTexture!==!0,pe=wt.__version===void 0||et===!0,F=Q.dataReady,lt=P(E,it);if(E.isDepthTexture)Bt=v(E.format===tr,E.type),pe&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,vt,It,null));else if(E.isDataTexture)if(Kt.length>0){Wt&&pe&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],Wt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,It,_t.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,vt,It,_t.data);E.generateMipmaps=!1}else Wt?(pe&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,it.width,it.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,vt,It,it.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,vt,It,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Bt,Kt[0].width,Kt[0].height,it.depth);for(let Z=0,tt=Kt.length;Z<tt;Z++)if(_t=Kt[Z],E.format!==On)if(vt!==null)if(Wt){if(F)if(E.layerUpdates.size>0){let mt=ku(_t.width,_t.height,E.format,E.type);for(let dt of E.layerUpdates){let zt=_t.data.subarray(dt*mt/_t.data.BYTES_PER_ELEMENT,(dt+1)*mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,dt,_t.width,_t.height,1,vt,zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,it.depth,vt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,it.depth,vt,It,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,_t.width,_t.height,it.depth,0,vt,It,_t.data)}else{Wt&&pe&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],E.format!==On?vt!==null?Wt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,It,_t.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,vt,It,_t.data)}else if(E.isDataArrayTexture)if(Wt){if(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Bt,it.width,it.height,it.depth),F)if(E.layerUpdates.size>0){let Z=ku(it.width,it.height,E.format,E.type);for(let tt of E.layerUpdates){let mt=it.data.subarray(tt*Z/it.data.BYTES_PER_ELEMENT,(tt+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,vt,It,mt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,It,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,vt,It,it.data);else if(E.isData3DTexture)Wt?(pe&&e.texStorage3D(s.TEXTURE_3D,lt,Bt,it.width,it.height,it.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,It,it.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,vt,It,it.data);else if(E.isFramebufferTexture){if(pe)if(Wt)e.texStorage2D(s.TEXTURE_2D,lt,Bt,it.width,it.height);else{let Z=it.width,tt=it.height;for(let mt=0;mt<lt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Bt,Z,tt,0,vt,It,null),Z>>=1,tt>>=1}}else if(Kt.length>0){if(Wt&&pe){let Z=Rt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Bt,Z.width,Z.height)}for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],Wt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,vt,It,_t):e.texImage2D(s.TEXTURE_2D,Z,Bt,vt,It,_t);E.generateMipmaps=!1}else if(Wt){if(pe){let Z=Rt(it);e.texStorage2D(s.TEXTURE_2D,lt,Bt,Z.width,Z.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,It,it)}else e.texImage2D(s.TEXTURE_2D,0,Bt,vt,It,it);m(E)&&p(K),wt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,q){if(E.image.length!==6)return;let K=rt(I,E),et=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);let Q=n.get(et);if(et.version!==Q.__version||K===!0){e.activeTexture(s.TEXTURE0+q);let wt=ne.getPrimaries(ne.workingColorSpace),ht=E.colorSpace===Fi?null:ne.getPrimaries(E.colorSpace),xt=E.colorSpace===Fi||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let ee=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!ee&&!it?vt[tt]=g(E.image[tt],!0,i.maxCubemapSize):vt[tt]=it?E.image[tt].image:E.image[tt],vt[tt]=ge(E,vt[tt]);let It=vt[0],Bt=r.convert(E.format,E.colorSpace),_t=r.convert(E.type),Kt=_(E.internalFormat,Bt,_t,E.colorSpace),Wt=E.isVideoTexture!==!0,pe=Q.__version===void 0||K===!0,F=et.dataReady,lt=P(E,It);Tt(s.TEXTURE_CUBE_MAP,E);let Z;if(ee){Wt&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Kt,It.width,It.height);for(let tt=0;tt<6;tt++){Z=vt[tt].mipmaps;for(let mt=0;mt<Z.length;mt++){let dt=Z[mt];E.format!==On?Bt!==null?Wt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,dt.width,dt.height,Bt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,dt.width,dt.height,Bt,_t,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,dt.width,dt.height,0,Bt,_t,dt.data)}}}else{if(Z=E.mipmaps,Wt&&pe){Z.length>0&&lt++;let tt=Rt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Wt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Bt,_t,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,vt[tt].width,vt[tt].height,0,Bt,_t,vt[tt].data);for(let mt=0;mt<Z.length;mt++){let zt=Z[mt].image[tt].image;Wt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,zt.width,zt.height,Bt,_t,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,zt.width,zt.height,0,Bt,_t,zt.data)}}else{Wt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,_t,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Bt,_t,vt[tt]);for(let mt=0;mt<Z.length;mt++){let dt=Z[mt];Wt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Bt,_t,dt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,Bt,_t,dt.image[tt])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),Q.__version=et.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function yt(I,E,q,K,et,Q){let wt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),xt=_(q.internalFormat,wt,ht,q.colorSpace),ee=n.get(E),it=n.get(q);if(it.__renderTarget=E,!ee.__hasExternalTextures){let vt=Math.max(1,E.width>>Q),It=Math.max(1,E.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,xt,vt,It,E.depth,0,wt,ht,null):e.texImage2D(et,Q,xt,vt,It,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Qt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,it.__webglTexture,0,Jt(E)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,it.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(I,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){let K=E.depthTexture,et=K&&K.isDepthTexture?K.type:null,Q=v(E.stencilBuffer,et),wt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Jt(E);Qt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Q,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,I)}else{let K=E.textures;for(let et=0;et<K.length;et++){let Q=K[et],wt=r.convert(Q.format,Q.colorSpace),ht=r.convert(Q.type),xt=_(Q.internalFormat,wt,ht,Q.colorSpace),ee=Jt(E);q&&Qt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,xt,E.width,E.height):Qt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let et=K.__webglTexture,Q=Jt(E);if(E.depthTexture.format===Ys)Qt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(E.depthTexture.format===tr)Qt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(I){let E=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=K}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,I)}else if(q){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(E.__webglDepthbuffer[K],I,!1);else{let et=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ot(E.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(I,E,q){let K=n.get(I);E!==void 0&&yt(K.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ot(I)}function Me(I){let E=I.texture,q=n.get(I),K=n.get(E);I.addEventListener("dispose",T);let et=I.textures,Q=I.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let xt=0;xt<E.mipmaps.length;xt++)q.__webglFramebuffer[ht][xt]=s.createFramebuffer()}else q.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)q.__webglFramebuffer[ht]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,xt=et.length;ht<xt;ht++){let ee=n.get(et[ht]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Qt(I)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let xt=et[ht];q.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);let ee=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),vt=_(xt.internalFormat,ee,it,xt.colorSpace,I.isXRRenderTarget===!0),It=Jt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,vt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)yt(q.__webglFramebuffer[ht][xt],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else yt(q.__webglFramebuffer[ht],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,xt=et.length;ht<xt;ht++){let ee=et[ht],it=n.get(ee);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Tt(s.TEXTURE_2D,ee),yt(q.__webglFramebuffer,I,ee,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(ee)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),Tt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)yt(q.__webglFramebuffer[xt],I,E,s.COLOR_ATTACHMENT0,ht,xt);else yt(q.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,ht,0);m(E)&&p(ht),e.unbindTexture()}I.depthBuffer&&Ot(I)}function te(I){let E=I.textures;for(let q=0,K=E.length;q<K;q++){let et=E[q];if(m(et)){let Q=x(I),wt=n.get(et).__webglTexture;e.bindTexture(Q,wt),p(Q),e.unbindTexture()}}}let Pe=[],k=[];function Sn(I){if(I.samples>0){if(Qt(I)===!1){let E=I.textures,q=I.width,K=I.height,et=s.COLOR_BUFFER_BIT,Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(I),ht=E.length>1;if(ht)for(let xt=0;xt<E.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<E.length;xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let ee=n.get(E[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,q,K,0,0,q,K,et,s.NEAREST),c===!0&&(Pe.length=0,k.length=0,Pe.push(s.COLOR_ATTACHMENT0+xt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Pe.push(Q),k.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<E.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let ee=n.get(E[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Jt(I){return Math.min(i.maxSamples,I.samples)}function Qt(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ge(I,E){let q=I.colorSpace,K=I.format,et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==sr&&q!==Fi&&(ne.getTransfer(q)===ue?(K!==On||et!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Rt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=N,this.rebindTextures=Yt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Qt}function sx(s,t){function e(n,i=Fi){let r,o=ne.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return s.BYTE;if(n===id)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===th)return s.INT;if(n===ls)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===zr)return s.HALF_FLOAT;if(n===rd)return s.ALPHA;if(n===od)return s.RGB;if(n===On)return s.RGBA;if(n===ad)return s.LUMINANCE;if(n===cd)return s.LUMINANCE_ALPHA;if(n===Ys)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===ih)return s.RED;if(n===sh)return s.RED_INTEGER;if(n===ld)return s.RG;if(n===rh)return s.RG_INTEGER;if(n===oh)return s.RGBA_INTEGER;if(n===Uo||n===Oo||n===zo||n===Vo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Gc||n===qc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yc||n===Zc||n===$c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yc||n===Zc)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===Jc||n===Qc||n===Kc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hd||n===dl||n===fl||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Il=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tn=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},rx={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,y=.005;l.inputState.pinching&&u>f+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ln,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:ox,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,y=null,g=new Bl,m=e.getContextAttributes(),p=null,x=null,_=[],v=[],P=new Nt,w=null,T=new je;T.viewport=new fe;let B=new je;B.viewport=new fe;let M=[T,B],S=new Il,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=_[J];return nt===void 0&&(nt=new Tr,_[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=_[J];return nt===void 0&&(nt=new Tr,_[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=_[J];return nt===void 0&&(nt=new Tr,_[J]=nt),nt.getHandSpace()};function U(J){let nt=v.indexOf(J.inputSource);if(nt===-1)return;let yt=_[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,l||o),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let J=0;J<_.length;J++){let nt=v[J];nt!==null&&(v[J]=null,_[J].disconnect(nt))}R=null,O=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new mi(f.framebufferWidth,f.framebufferHeight,{format:On,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,yt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?tr:Ys,yt=m.stencil?Ks:ls);let Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new mi(u.textureWidth,u.textureHeight,{format:On,type:pi,depthTexture:new Ko(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(J){for(let nt=0;nt<J.removed.length;nt++){let yt=J.removed[nt],ot=v.indexOf(yt);ot>=0&&(v[ot]=null,_[ot].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){let yt=J.added[nt],ot=v.indexOf(yt);if(ot===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=v.length){v.push(yt),ot=Ot;break}else if(v[Ot]===null){v[Ot]=yt,ot=Ot;break}if(ot===-1)break}let Ct=_[ot];Ct&&Ct.connect(yt)}}let H=new L,W=new L;function N(J,nt,yt){H.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(yt.matrixWorld);let ot=H.distanceTo(W),Ct=nt.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,Yt=Ct[14]/(Ct[10]-1),Me=Ct[14]/(Ct[10]+1),te=(Ct[9]+1)/Ct[5],Pe=(Ct[9]-1)/Ct[5],k=(Ct[8]-1)/Ct[0],Sn=(Ot[8]+1)/Ot[0],Jt=Yt*k,Qt=Yt*Sn,Pt=ot/(-k+Sn),ge=Pt*-k;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(Pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Rt=Yt+Pt,I=Me+Pt,E=Jt-ge,q=Qt+(ot-ge),K=te*Me/I*Rt,et=Pe*Me/I*Rt;J.projectionMatrix.makePerspective(E,q,K,et,Rt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,yt=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),S.near=B.near=T.near=nt,S.far=B.far=T.far=yt,(R!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,O=S.far),T.layers.mask=J.layers.mask|2,B.layers.mask=J.layers.mask|4,S.layers.mask=T.layers.mask|B.layers.mask;let ot=J.parent,Ct=S.cameras;$(S,ot);for(let Ot=0;Ot<Ct.length;Ot++)$(Ct[Ot],ot);Ct.length===2?N(S,T,B):S.projectionMatrix.copy(T.projectionMatrix),j(J,S,ot)};function j(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let gt=null;function Tt(J,nt){if(h=nt.getViewerPose(l||o),y=nt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ot=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Ot=0;Ot<yt.length;Ot++){let Yt=yt[Ot],Me=null;if(f!==null)Me=f.getViewport(Yt);else{let Pe=d.getViewSubImage(u,Yt);Me=Pe.viewport,Ot===0&&(t.setRenderTargetTextures(x,Pe.colorTexture,u.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(x))}let te=M[Ot];te===void 0&&(te=new je,te.layers.enable(Ot),te.viewport=new fe,M[Ot]=te),te.matrix.fromArray(Yt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Yt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Me.x,Me.y,Me.width,Me.height),Ot===0&&(S.matrix.copy(te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(te)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Ot=d.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(t,Ot,i.renderState)}}for(let yt=0;yt<_.length;yt++){let ot=v[yt],Ct=_[yt];ot!==null&&Ct!==void 0&&Ct.update(ot,nt,l||o)}gt&&gt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),y=null}let rt=new gd;rt.setAnimationLoop(Tt),this.setAnimationLoop=function(J){gt=J},this.dispose=function(){}}},is=new Yn,cx=new se;function lx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,md(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),y(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,is.copy(v),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(is)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=i[x.id];v===void 0&&(y(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));let P=_.program;n.updateUBOMapping(x,P);let w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){let _=d();x.__bindingPointIndex=_;let v=s.createBuffer(),P=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let _=i[x.id],v=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,T=v.length;w<T;w++){let B=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=B.length;M<S;M++){let R=B[M];if(f(R,w,M,P)===!0){let O=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],D=0;for(let G=0;G<U.length;G++){let H=U[G],W=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+D,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,v,P){let w=x.value,T=_+"_"+v;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{let B=P[T];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return P[T]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function y(x){let _=x.uniforms,v=0,P=16;for(let T=0,B=_.length;T<B;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,R=M.length;S<R;S++){let O=M[S],U=Array.isArray(O.value)?O.value:[O.value];for(let D=0,G=U.length;D<G;D++){let H=U[D],W=g(H),N=v%P,$=N%W.boundary,j=N+$;v+=$,j!==0&&P-j<W.storage&&(v+=P-j),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=W.storage}}}let w=v%P;return w>0&&(v+=P-w),x.__size=v,x.__cache={},this}function g(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var ta=class{constructor(t={}){let{canvas:e=pp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let y=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Oi,this.toneMappingExposure=1;let v=this,P=!1,w=0,T=0,B=null,M=-1,S=null,R=new fe,O=new fe,U=null,D=new Lt(0),G=0,H=e.width,W=e.height,N=1,$=null,j=null,gt=new fe(0,0,H,W),Tt=new fe(0,0,H,W),rt=!1,J=new Lr,nt=!1,yt=!1,ot=new se,Ct=new se,Ot=new L,Yt=new fe,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function Pe(){return B===null?N:1}let k=n;function Sn(A,z){return e.getContext(A,z)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),k===null){let z="webgl2";if(k=Sn(z,A),k===null)throw Sn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,Qt,Pt,ge,Rt,I,E,q,K,et,Q,wt,ht,xt,ee,it,vt,It,Bt,_t,Kt,Wt,pe,F;function lt(){Jt=new A0(k),Jt.init(),Wt=new sx(k,Jt),Qt=new _0(k,Jt,t,Wt),Pt=new ex(k,Jt),Qt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),ge=new R0(k),Rt=new Hy,I=new ix(k,Jt,Pt,Rt,Qt,Wt,ge),E=new M0(v),q=new E0(v),K=new Dp(k),pe=new x0(k,K),et=new T0(k,K,ge,pe),Q=new I0(k,et,K,ge),Bt=new P0(k,Qt,I),it=new b0(Rt),wt=new ky(v,E,q,Jt,Qt,pe,it),ht=new lx(v,Rt),xt=new Gy,ee=new jy(Jt),It=new y0(v,E,q,Pt,Q,f,c),vt=new Ky(v,Q,Qt),F=new hx(k,ge,Qt,Pt),_t=new v0(k,Jt,ge),Kt=new C0(k,Jt,ge),ge.programs=wt.programs,v.capabilities=Qt,v.extensions=Jt,v.properties=Rt,v.renderLists=xt,v.shadowMap=vt,v.state=Pt,v.info=ge}lt();let Z=new Ll(v,k);this.xr=Z,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(H,W,!1))},this.getSize=function(A){return A.set(H,W)},this.setSize=function(A,z,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,W=z,e.width=Math.floor(A*N),e.height=Math.floor(z*N),X===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*N,W*N).floor()},this.setDrawingBufferSize=function(A,z,X){H=A,W=z,N=X,e.width=Math.floor(A*X),e.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,z,X,Y){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,z,X,Y),Pt.viewport(R.copy(gt).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,z,X,Y){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,z,X,Y),Pt.scissor(O.copy(Tt).multiplyScalar(N).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){Pt.setScissorTest(rt=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(A=!0,z=!0,X=!0){let Y=0;if(A){let V=!1;if(B!==null){let st=B.texture.format;V=st===oh||st===rh||st===sh}if(V){let st=B.texture.type,ft=st===pi||st===ls||st===Pr||st===Ks||st===eh||st===nh,bt=It.getClearColor(),Mt=It.getClearAlpha(),Ut=bt.r,Vt=bt.g,St=bt.b;ft?(y[0]=Ut,y[1]=Vt,y[2]=St,y[3]=Mt,k.clearBufferuiv(k.COLOR,0,y)):(g[0]=Ut,g[1]=Vt,g[2]=St,g[3]=Mt,k.clearBufferiv(k.COLOR,0,g))}else Y|=k.COLOR_BUFFER_BIT}z&&(Y|=k.DEPTH_BUFFER_BIT),X&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),ee.dispose(),Rt.dispose(),E.dispose(),q.dispose(),Q.dispose(),pe.dispose(),F.dispose(),wt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Dh),Z.removeEventListener("sessionend",Uh),Ji.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=ge.autoReset,z=vt.enabled,X=vt.autoUpdate,Y=vt.needsUpdate,V=vt.type;lt(),ge.autoReset=A,vt.enabled=z,vt.autoUpdate=X,vt.needsUpdate=Y,vt.type=V}function dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zt(A){let z=A.target;z.removeEventListener("dispose",zt),Ce(z)}function Ce(A){Ye(A),Rt.remove(A)}function Ye(A){let z=Rt.get(A).programs;z!==void 0&&(z.forEach(function(X){wt.releaseProgram(X)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,Y,V,st){z===null&&(z=Me);let ft=V.isMesh&&V.matrixWorld.determinant()<0,bt=Sf(A,z,X,Y,V);Pt.setMaterial(Y,ft);let Mt=X.index,Ut=1;if(Y.wireframe===!0){if(Mt=et.getWireframeAttribute(X),Mt===void 0)return;Ut=2}let Vt=X.drawRange,St=X.attributes.position,ie=Vt.start*Ut,me=(Vt.start+Vt.count)*Ut;st!==null&&(ie=Math.max(ie,st.start*Ut),me=Math.min(me,(st.start+st.count)*Ut)),Mt!==null?(ie=Math.max(ie,0),me=Math.min(me,Mt.count)):St!=null&&(ie=Math.max(ie,0),me=Math.min(me,St.count));let ye=me-ie;if(ye<0||ye===1/0)return;pe.setup(V,Y,bt,X,Mt);let on,oe=_t;if(Mt!==null&&(on=K.get(Mt),oe=Kt,oe.setIndex(on)),V.isMesh)Y.wireframe===!0?(Pt.setLineWidth(Y.wireframeLinewidth*Pe()),oe.setMode(k.LINES)):oe.setMode(k.TRIANGLES);else if(V.isLine){let Et=Y.linewidth;Et===void 0&&(Et=1),Pt.setLineWidth(Et*Pe()),V.isLineSegments?oe.setMode(k.LINES):V.isLineLoop?oe.setMode(k.LINE_LOOP):oe.setMode(k.LINE_STRIP)}else V.isPoints?oe.setMode(k.POINTS):V.isSprite&&oe.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Et=V._multiDrawStarts,ri=V._multiDrawCounts,ae=V._multiDrawCount,Ln=Mt?K.get(Mt).bytesPerElement:1,Es=Rt.get(Y).currentProgram.getUniforms();for(let gn=0;gn<ae;gn++)Es.setValue(k,"_gl_DrawID",gn),oe.render(Et[gn]/Ln,ri[gn])}else if(V.isInstancedMesh)oe.renderInstances(ie,ye,V.count);else if(X.isInstancedBufferGeometry){let Et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ri=Math.min(X.instanceCount,Et);oe.renderInstances(ie,ye,ri)}else oe.render(ie,ye)};function le(A,z,X){A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,ao(A,z,X),A.side=Vi,A.needsUpdate=!0,ao(A,z,X),A.side=An):ao(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),p=ee.get(X),p.init(z),_.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==X&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Y=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let st=V.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){let bt=st[ft];le(bt,X,V),Y.add(bt)}else le(st,X,V),Y.add(st)}),_.pop(),p=null,Y},this.compileAsync=function(A,z,X=null){let Y=this.compile(A,z,X);return new Promise(V=>{function st(){if(Y.forEach(function(ft){Rt.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){V(A);return}setTimeout(st,10)}Jt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Bn=null;function si(A){Bn&&Bn(A)}function Dh(){Ji.stop()}function Uh(){Ji.start()}let Ji=new gd;Ji.setAnimationLoop(si),typeof self!="undefined"&&Ji.setContext(self),this.setAnimationLoop=function(A){Bn=A,Z.setAnimationLoop(A),A===null?Ji.stop():Ji.start()},Z.addEventListener("sessionstart",Dh),Z.addEventListener("sessionend",Uh),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,B),p=ee.get(A,_.length),p.init(z),_.push(p),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,yt),m=xt.get(A,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&Ja(st,z,-1/0,v.sortObjects)}Ja(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,j),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&It.addToRenderList(m,A),this.info.render.frame++,nt===!0&&it.beginShadows();let X=p.state.shadowsArray;vt.render(X,A,z),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){let st=z.cameras;if(V.length>0)for(let ft=0,bt=st.length;ft<bt;ft++){let Mt=st[ft];zh(Y,V,A,Mt)}te&&It.render(A);for(let ft=0,bt=st.length;ft<bt;ft++){let Mt=st[ft];Oh(m,A,Mt,Mt.viewport)}}else V.length>0&&zh(Y,V,A,z),te&&It.render(A),Oh(m,A,z);B!==null&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(v,A,z),pe.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ja(A,z,X,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Y&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let ft=Q.update(A),bt=A.material;bt.visible&&m.push(A,ft,bt,X,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){let ft=Q.update(A),bt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Yt.copy(ft.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(bt)){let Mt=ft.groups;for(let Ut=0,Vt=Mt.length;Ut<Vt;Ut++){let St=Mt[Ut],ie=bt[St.materialIndex];ie&&ie.visible&&m.push(A,ft,ie,X,Yt.z,St)}}else bt.visible&&m.push(A,ft,bt,X,Yt.z,null)}}let st=A.children;for(let ft=0,bt=st.length;ft<bt;ft++)Ja(st[ft],z,X,Y)}function Oh(A,z,X,Y){let V=A.opaque,st=A.transmissive,ft=A.transparent;p.setupLightsView(X),nt===!0&&it.setGlobalState(v.clippingPlanes,X),Y&&Pt.viewport(R.copy(Y)),V.length>0&&oo(V,z,X),st.length>0&&oo(st,z,X),ft.length>0&&oo(ft,z,X),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function zh(A,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new mi(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?zr:pi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let st=p.state.transmissionRenderTarget[Y.id],ft=Y.viewport||R;st.setSize(ft.z,ft.w);let bt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(D),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),te&&It.render(X);let Mt=v.toneMapping;v.toneMapping=Oi;let Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),nt===!0&&it.setGlobalState(v.clippingPlanes,Y),oo(A,X,Y),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let St=0,ie=z.length;St<ie;St++){let me=z[St],ye=me.object,on=me.geometry,oe=me.material,Et=me.group;if(oe.side===An&&ye.layers.test(Y.layers)){let ri=oe.side;oe.side=Je,oe.needsUpdate=!0,Vh(ye,X,Y,on,oe,Et),oe.side=ri,oe.needsUpdate=!0,Vt=!0}}Vt===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}v.setRenderTarget(bt),v.setClearColor(D,G),Ut!==void 0&&(Y.viewport=Ut),v.toneMapping=Mt}function oo(A,z,X){let Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,st=A.length;V<st;V++){let ft=A[V],bt=ft.object,Mt=ft.geometry,Ut=Y===null?ft.material:Y,Vt=ft.group;bt.layers.test(X.layers)&&Vh(bt,z,X,Mt,Ut,Vt)}}function Vh(A,z,X,Y,V,st){A.onBeforeRender(v,z,X,Y,V,st),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,z,X,Y,A,st),V.transparent===!0&&V.side===An&&V.forceSinglePass===!1?(V.side=Je,V.needsUpdate=!0,v.renderBufferDirect(X,z,Y,V,A,st),V.side=Vi,V.needsUpdate=!0,v.renderBufferDirect(X,z,Y,V,A,st),V.side=An):v.renderBufferDirect(X,z,Y,V,A,st),A.onAfterRender(v,z,X,Y,V,st)}function ao(A,z,X){z.isScene!==!0&&(z=Me);let Y=Rt.get(A),V=p.state.lights,st=p.state.shadowsArray,ft=V.state.version,bt=wt.getParameters(A,V.state,st,z,X),Mt=wt.getProgramCacheKey(bt),Ut=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?q:E).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",zt),Ut=new Map,Y.programs=Ut);let Vt=Ut.get(Mt);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===ft)return Hh(A,bt),Vt}else bt.uniforms=wt.getUniforms(A),A.onBeforeCompile(bt,v),Vt=wt.acquireProgram(bt,Mt),Ut.set(Mt,Vt),Y.uniforms=bt.uniforms;let St=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(St.clippingPlanes=it.uniform),Hh(A,bt),Y.needsLights=Ef(A),Y.lightsStateVersion=ft,Y.needsLights&&(St.ambientLightColor.value=V.state.ambient,St.lightProbe.value=V.state.probe,St.directionalLights.value=V.state.directional,St.directionalLightShadows.value=V.state.directionalShadow,St.spotLights.value=V.state.spot,St.spotLightShadows.value=V.state.spotShadow,St.rectAreaLights.value=V.state.rectArea,St.ltc_1.value=V.state.rectAreaLTC1,St.ltc_2.value=V.state.rectAreaLTC2,St.pointLights.value=V.state.point,St.pointLightShadows.value=V.state.pointShadow,St.hemisphereLights.value=V.state.hemi,St.directionalShadowMap.value=V.state.directionalShadowMap,St.directionalShadowMatrix.value=V.state.directionalShadowMatrix,St.spotShadowMap.value=V.state.spotShadowMap,St.spotLightMatrix.value=V.state.spotLightMatrix,St.spotLightMap.value=V.state.spotLightMap,St.pointShadowMap.value=V.state.pointShadowMap,St.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function kh(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=$s.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Hh(A,z){let X=Rt.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Sf(A,z,X,Y,V){z.isScene!==!0&&(z=Me),I.resetTextureUnits();let st=z.fog,ft=Y.isMeshStandardMaterial?z.environment:null,bt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:sr,Mt=(Y.isMeshStandardMaterial?q:E).get(Y.envMap||ft),Ut=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),St=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,me=!!X.morphAttributes.color,ye=Oi;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ye=v.toneMapping);let on=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=on!==void 0?on.length:0,Et=Rt.get(Y),ri=p.state.lights;if(nt===!0&&(yt===!0||A!==S)){let wn=A===S&&Y.id===M;it.setState(Y,A,wn)}let ae=!1;Y.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ri.state.version||Et.outputColorSpace!==bt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Mt||Y.fog===!0&&Et.fog!==st||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==Vt||Et.morphTargets!==St||Et.morphNormals!==ie||Et.morphColors!==me||Et.toneMapping!==ye||Et.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Et.__version=Y.version);let Ln=Et.currentProgram;ae===!0&&(Ln=ao(Y,z,V));let Es=!1,gn=!1,fr=!1,xe=Ln.getUniforms(),Hn=Et.uniforms;if(Pt.useProgram(Ln.program)&&(Es=!0,gn=!0,fr=!0),Y.id!==M&&(M=Y.id,gn=!0),Es||S!==A){Pt.buffers.depth.getReversed()?(ot.copy(A.projectionMatrix),gp(ot),yp(ot),xe.setValue(k,"projectionMatrix",ot)):xe.setValue(k,"projectionMatrix",A.projectionMatrix),xe.setValue(k,"viewMatrix",A.matrixWorldInverse);let Ti=xe.map.cameraPosition;Ti!==void 0&&Ti.setValue(k,Ot.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&xe.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,gn=!0,fr=!0)}if(V.isSkinnedMesh){xe.setOptional(k,V,"bindMatrix"),xe.setOptional(k,V,"bindMatrixInverse");let wn=V.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),xe.setValue(k,"boneTexture",wn.boneTexture,I))}V.isBatchedMesh&&(xe.setOptional(k,V,"batchingTexture"),xe.setValue(k,"batchingTexture",V._matricesTexture,I),xe.setOptional(k,V,"batchingIdTexture"),xe.setValue(k,"batchingIdTexture",V._indirectTexture,I),xe.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(k,"batchingColorTexture",V._colorsTexture,I));let pr=X.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Bt.update(V,X,Ln),(gn||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,xe.setValue(k,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Hn.envMap.value=Mt,Hn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Hn.envMapIntensity.value=z.environmentIntensity),gn&&(xe.setValue(k,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&wf(Hn,fr),st&&Y.fog===!0&&ht.refreshFogUniforms(Hn,st),ht.refreshMaterialUniforms(Hn,Y,N,W,p.state.transmissionRenderTarget[A.id]),$s.upload(k,kh(Et),Hn,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($s.upload(k,kh(Et),Hn,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(k,"center",V.center),xe.setValue(k,"modelViewMatrix",V.modelViewMatrix),xe.setValue(k,"normalMatrix",V.normalMatrix),xe.setValue(k,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let wn=Y.uniformsGroups;for(let Ti=0,Ci=wn.length;Ti<Ci;Ti++){let Wh=wn[Ti];F.update(Wh,Ln),F.bind(Wh,Ln)}}return Ln}function wf(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ef(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,z,X){Rt.get(A.texture).__webglTexture=z,Rt.get(A.depthTexture).__webglTexture=X;let Y=Rt.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let X=Rt.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){B=A,w=z,T=X;let Y=!0,V=null,st=!1,ft=!1;if(A){let Mt=Rt.get(A);if(Mt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(Mt.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Mt.__hasExternalTextures)I.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let St=A.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(A.width!==St.image.width||A.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);let Vt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?V=Vt[z][X]:V=Vt[z],st=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?V=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[X]:V=Vt,R.copy(A.viewport),O.copy(A.scissor),U=A.scissorTest}else R.copy(gt).multiplyScalar(N).floor(),O.copy(Tt).multiplyScalar(N).floor(),U=rt;if(Pt.bindFramebuffer(k.FRAMEBUFFER,V)&&Y&&Pt.drawBuffers(A,V),Pt.viewport(R),Pt.scissor(O),Pt.setScissorTest(U),st){let Mt=Rt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,X)}else if(ft){let Mt=Rt.get(A.texture),Ut=z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mt.__webglTexture,X||0,Ut)}M=-1},this.readRenderTargetPixels=function(A,z,X,Y,V,st,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){Pt.bindFramebuffer(k.FRAMEBUFFER,bt);try{let Mt=A.texture,Ut=Mt.format,Vt=Mt.type;if(!Qt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&X>=0&&X<=A.height-V&&k.readPixels(z,X,Y,V,Wt.convert(Ut),Wt.convert(Vt),st)}finally{let Mt=B!==null?Rt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(k.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(A,z,X,Y,V,st,ft){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){let Mt=A.texture,Ut=Mt.format,Vt=Mt.type;if(!Qt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-Y&&X>=0&&X<=A.height-V){Pt.bindFramebuffer(k.FRAMEBUFFER,bt);let St=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.bufferData(k.PIXEL_PACK_BUFFER,st.byteLength,k.STREAM_READ),k.readPixels(z,X,Y,V,Wt.convert(Ut),Wt.convert(Vt),0);let ie=B!==null?Rt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(k.FRAMEBUFFER,ie);let me=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await mp(k,me,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,st),k.deleteBuffer(St),k.deleteSync(me),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,X=0){A.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-X),V=Math.floor(A.image.width*Y),st=Math.floor(A.image.height*Y),ft=z!==null?z.x:0,bt=z!==null?z.y:0;I.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,ft,bt,V,st),Pt.unbindTexture()},this.copyTextureToTexture=function(A,z,X=null,Y=null,V=0){A.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],z=arguments[2],V=arguments[3]||0,X=null);let st,ft,bt,Mt,Ut,Vt,St,ie,me,ye=A.isCompressedTexture?A.mipmaps[V]:A.image;X!==null?(st=X.max.x-X.min.x,ft=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Mt=X.min.x,Ut=X.min.y,Vt=X.isBox3?X.min.z:0):(st=ye.width,ft=ye.height,bt=ye.depth||1,Mt=0,Ut=0,Vt=0),Y!==null?(St=Y.x,ie=Y.y,me=Y.z):(St=0,ie=0,me=0);let on=Wt.convert(z.format),oe=Wt.convert(z.type),Et;z.isData3DTexture?(I.setTexture3D(z,0),Et=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),Et=k.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),Et=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let ri=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ln=k.getParameter(k.UNPACK_SKIP_PIXELS),Es=k.getParameter(k.UNPACK_SKIP_ROWS),gn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Mt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ut),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Vt);let fr=A.isDataArrayTexture||A.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Hn=Rt.get(A),pr=Rt.get(z),wn=Rt.get(Hn.__renderTarget),Ti=Rt.get(pr.__renderTarget);Pt.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Pt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ci=0;Ci<bt;Ci++)fr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,V,Vt+Ci),A.isDepthTexture?(xe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.get(z).__webglTexture,V,me+Ci),k.blitFramebuffer(Mt,Ut,st,ft,St,ie,st,ft,k.DEPTH_BUFFER_BIT,k.NEAREST)):xe?k.copyTexSubImage3D(Et,V,St,ie,me+Ci,Mt,Ut,st,ft):k.copyTexSubImage2D(Et,V,St,ie,me+Ci,Mt,Ut,st,ft);Pt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Et,V,St,ie,me,st,ft,bt,on,oe,ye.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Et,V,St,ie,me,st,ft,bt,on,ye.data):k.texSubImage3D(Et,V,St,ie,me,st,ft,bt,on,oe,ye):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,St,ie,st,ft,on,oe,ye.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,St,ie,ye.width,ye.height,on,ye.data):k.texSubImage2D(k.TEXTURE_2D,V,St,ie,st,ft,on,oe,ye);k.pixelStorei(k.UNPACK_ROW_LENGTH,ri),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,Es),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gn),V===0&&z.generateMipmaps&&k.generateMipmap(Et),Pt.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X=null,Y=null,V=0){return A.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],z=arguments[3],V=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,X,Y,V)},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Pt.unbindTexture()},this.resetState=function(){w=0,T=0,B=null,Pt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var ea=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new L,ia=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nr=class extends yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vs,vr=new L,ks=new L,Hs=new L,Ws=new Nt,_r=new Nt,bd=new se,Po=new L,br=new L,Io=new L,Hu=new Nt,Cc=new Nt,Wu=new Nt,sa=class extends He{constructor(t=new Nr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nl(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new ia(n,3,0,!1)),Vs.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),bd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Bo(Po.set(-.5,-.5,0),Hs,o,ks,i,r),Bo(br.set(.5,-.5,0),Hs,o,ks,i,r),Bo(Io.set(.5,.5,0),Hs,o,ks,i,r),Hu.set(0,0),Cc.set(1,0),Wu.set(1,1);let a=t.ray.intersectTriangle(Po,br,Io,!1,vr);if(a===null&&(Bo(br.set(-.5,.5,0),Hs,o,ks,i,r),Cc.set(0,1),a=t.ray.intersectTriangle(Po,Io,br,!1,vr),a===null))return;let c=t.ray.origin.distanceTo(vr);c<t.near||c>t.far||e.push({distance:c,point:vr.clone(),uv:Di.getInterpolation(vr,Po,br,Io,Hu,Cc,Wu,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Bo(s,t,e,n,i,r){Ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(_r.x=r*Ws.x-i*Ws.y,_r.y=i*Ws.x+r*Ws.y):_r.copy(Ws),s.copy(t),s.x+=_r.x,s.y+=_r.y,s.applyMatrix4(bd)}var Fl=class extends ln{constructor(t=null,e=1,n=1,i,r,o,a,c,l=vn,h=vn,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ra=class extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new se,Gu=new se,Lo=[],qu=new gi,ux=new se,Mr=new Xt,Sr=new Hi,oa=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),qu.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Sr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),Gu.multiplyMatrices(n,Gs),Mr.matrixWorld=Gu,Mr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){let c=Lo[o];c.instanceId=r,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fl(new Float32Array(i*this.count),i,this.count,ih,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Dl=class extends yi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xu=new se,Ul=new Ir,No=new Hi,Fo=new L,aa=class extends He{constructor(t=new en,e=new Dl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Xu.copy(i).invert(),Ul.copy(t.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let y=u,g=f;y<g;y++){let m=l.getX(y);Fo.fromBufferAttribute(d,m),Yu(Fo,m,c,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let y=u,g=f;y<g;y++)Fo.fromBufferAttribute(d,y),Yu(Fo,y,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yu(s,t,e,n,i,r,o){let a=Ul.distanceSqToPoint(s);if(a<e){let c=new L;Ul.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fr=class extends ln{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class s extends en{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],y=0,g=[],m=n/2,p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function x(){let v=new L,P=new L,w=0,T=(e-t)/n;for(let B=0;B<=r;B++){let M=[],S=B/r,R=S*(e-t)+t;for(let O=0;O<=i;O++){let U=O/i,D=U*c+a,G=Math.sin(D),H=Math.cos(D);P.x=R*G,P.y=-S*n+m,P.z=R*H,d.push(P.x,P.y,P.z),v.set(G,T,H).normalize(),u.push(v.x,v.y,v.z),f.push(U,1-S),M.push(y++)}g.push(M)}for(let B=0;B<i;B++)for(let M=0;M<r;M++){let S=g[M][B],R=g[M+1][B],O=g[M+1][B+1],U=g[M][B+1];(t>0||M!==0)&&(h.push(S,R,U),w+=3),(e>0||M!==r-1)&&(h.push(R,O,U),w+=3)}l.addGroup(p,w,0),p+=w}function _(v){let P=y,w=new Nt,T=new L,B=0,M=v===!0?t:e,S=v===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),y++;let R=y;for(let O=0;O<=i;O++){let D=O/i*c+a,G=Math.cos(D),H=Math.sin(D);T.x=M*H,T.y=m*S,T.z=M*G,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=G*.5+.5,w.y=H*.5*S+.5,f.push(w.x,w.y),y++}for(let O=0;O<i;O++){let U=P+O,D=R+O;v===!0?h.push(D,D+1,U):h.push(D+1,D,U),B+=3}l.addGroup(p,B,v===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class s extends ds{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ol=class s extends en{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new L,v=new L,P=new L;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],v),f(e[w+2],P),c(_,v,P,x)}function c(x,_,v,P){let w=P+1,T=[];for(let B=0;B<=w;B++){T[B]=[];let M=x.clone().lerp(v,B/w),S=_.clone().lerp(v,B/w),R=w-B;for(let O=0;O<=R;O++)O===0&&B===w?T[B][O]=M:T[B][O]=M.clone().lerp(S,O/R)}for(let B=0;B<w;B++)for(let M=0;M<2*(w-B)-1;M++){let S=Math.floor(M/2);M%2===0?(u(T[B][S+1]),u(T[B+1][S]),u(T[B][S])):(u(T[B][S+1]),u(T[B+1][S+1]),u(T[B+1][S]))}}function l(x){let _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new L;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=m(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;o.push(v,1-P)}y(),d()}function d(){for(let x=0;x<o.length;x+=6){let _=o[x+0],v=o[x+2],P=o[x+4],w=Math.max(_,v,P),T=Math.min(_,v,P);w>.9&&T<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,_){let v=x*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function y(){let x=new L,_=new L,v=new L,P=new L,w=new Nt,T=new Nt,B=new Nt;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),B.set(o[S+4],o[S+5]),P.copy(x).add(_).add(v).divideScalar(3);let R=m(P);g(w,S+0,x,R),g(T,S+2,_,R),g(B,S+4,v,R)}}function g(x,_,v,P){P<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},ca=class s extends Ol{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Dr=class s extends en{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],y=[],g=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let w=P/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+_*a),y.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(w+v,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let _=h[p][x+1],v=h[p][x],P=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&f.push(_,v,w),(p!==n-1||c<Math.PI)&&f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new Se(y,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var la=class s extends en{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let y=0;y<=i;y++){let g=y/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(y/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=i;y++){let g=(i+1)*f+y-1,m=(i+1)*(f-1)+y-1,p=(i+1)*(f-1)+y,x=(i+1)*f+y;o.push(g,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ie=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Do(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function dx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ir=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends ir{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-n;break;case $h:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,c=2*n-e;break;case $h:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,y=(n-e)/(i-e),g=y*y,m=g*y,p=-u*m+2*u*g-u*y,x=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*y+1,_=(-1-f)*m+(1.5+f)*g+.5*y,v=f*m-f*g;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+x*o[l+P]+_*o[c+P]+v*o[d+P];return r}},Vl=class extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},kl=class extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&dx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let y=0;y!==n;++y){let g=e[d+y];if(g!==e[u+y]||g!==e[f+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ml;var fs=class extends zn{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ho;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends zn{};Hl.prototype.ValueTypeName="color";var Wl=class extends zn{};Wl.prototype.ValueTypeName="number";var Gl=class extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ha=class extends zn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends zn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ho;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends zn{};ql.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],y=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return y}return null}}},fx=new Xl,Yl=class{constructor(t){this.manager=t!==void 0?t:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ua=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rc=new se,Zu=new L,$u=new L,da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),$u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($u),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ju=new se,wr=new L,Pc=new L,Zl=class extends da{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(wr),Pc.copy(n.position),Pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pc),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}},Or=class extends Ur{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$l=class extends da{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fa=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ch="\\[\\]\\.:\\/",px=new RegExp("["+ch+"]","g"),lh="[^"+ch+"]",mx="[^"+ch.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",lh),yx=/(WCOD+)?/.source.replace("WCOD",mx),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),_x=new RegExp("^"+gx+yx+xx+vx+"$"),bx=["material","materials","bones","map"],jl=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(px,"")}static parseTrackName(t){let e=_x.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=jl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fb=new Float32Array(1);var Ju=new se,pa=class{constructor(t,e,n=0,i=1/0){this.ray=new Ir(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(Qu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Jl(t[i],this,n,e);return n.sort(Qu),n}};function Qu(s,t){return s.distance-t.distance}function Jl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Jl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Zn=class s{constructor(t=[0,0,0,0,0,0,0,0,0]){C(this,"elements");this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t=new b){let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e=new b){let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e=new s){let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],y=n[8],g=i[0],m=i[1],p=i[2],x=i[3],_=i[4],v=i[5],P=i[6],w=i[7],T=i[8];return r[0]=o*g+a*x+c*P,r[1]=o*m+a*_+c*w,r[2]=o*p+a*v+c*T,r[3]=l*g+h*x+d*P,r[4]=l*m+h*_+d*w,r[5]=l*p+h*v+d*T,r[6]=u*g+f*x+y*P,r[7]=u*m+f*_+y*w,r[8]=u*p+f*v+y*T,e}scale(t,e=new s){let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e=new b){let r=[],o,a;for(o=0;o<12;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+4*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+4*o]===0){for(a=o+1;a<l;a++)if(r[o+4*a]!==0){h=d;do u=d-h,r[u+4*o]+=r[u+4*a];while(--h);break}}if(r[o+4*o]!==0)for(a=o+1;a<l;a++){let f=r[o+4*a]/r[o+4*o];h=d;do u=d-h,r[u+4*a]=u<=o?0:r[u+4*a]-r[u+4*o]*f;while(--h)}}while(--c);if(e.z=r[11]/r[10],e.y=(r[7]-r[6]*e.z)/r[5],e.x=(r[3]-r[2]*e.z-r[1]*e.y)/r[0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t=new s){let i=Sx,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+6*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,h=6,d;do{if(r=c-a,i[r+6*r]===0){for(o=r+1;o<c;o++)if(i[r+6*o]!==0){l=h;do d=h-l,i[d+6*r]+=i[d+6*o];while(--l);break}}if(i[r+6*r]!==0)for(o=r+1;o<c;o++){let u=i[r+6*o]/i[r+6*r];l=h;do d=h-l,i[d+6*o]=d<=r?0:i[d+6*o]-i[d+6*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=i[r+6*o]/i[r+6*r];l=6;do d=6-l,i[d+6*o]=i[d+6*o]-i[d+6*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/i[r+6*r];l=6;do d=6-l,i[d+6*r]=i[d+6*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[3+o+6*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,y=i*c,g=r*o,m=r*a,p=r*c,x=this.elements;return x[0]=1-(u+y),x[1]=h-p,x[2]=d+m,x[3]=h+p,x[4]=1-(l+y),x[5]=f-g,x[6]=d-m,x[7]=f+g,x[8]=1-(l+u),this}transpose(t=new s){let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Sx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var nn=class nn{constructor(t=0,e=0,n=0){C(this,"x");C(this,"y");C(this,"z");this.x=t,this.y=e,this.z=n}cross(t,e=new nn){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new nn(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new nn(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Zn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t=new nn){let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e=new nn){let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e=new nn){return e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n=new nn){return n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t=new nn){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=wx,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=Ex;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e=1e-6){return!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t=1e-6){return!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Md),Md.almostEquals(t,e)}clone(){return new nn(this.x,this.y,this.z)}};C(nn,"ZERO"),C(nn,"UNIT_X"),C(nn,"UNIT_Y"),C(nn,"UNIT_Z");var b=nn;b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);var wx=new b,Ex=new b,Md=new b;var Ue=class s{constructor(t={}){C(this,"lowerBound");C(this,"upperBound");this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Sd),l=Sd),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=wd,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=wd,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),y=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(y<0||f>y)}},Sd=new b,wd=[new b,new b,new b,new b,new b,new b,new b,new b];var kr=class{constructor(){C(this,"matrix");this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}};var or=class{constructor(){C(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}};var we=class s{constructor(t=0,e=0,n=0,i=1){C(this,"x");C(this,"y");C(this,"z");C(this,"w");this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t=new b){this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Ax,i=Tx;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e=new s){let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t=new s){let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t=new s){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e=new b){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,f=-o*n-a*i-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e="YZX"){let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i="XYZ"){let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n=new s){let i=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,y,g,m;return f=i*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),y=Math.sin(u),g=Math.sin((1-e)*u)/y,m=Math.sin(e*u)/y):(g=1-e,m=e),n.x=g*i+m*c,n.y=g*r+m*l,n.z=g*o+m*h,n.w=g*a+m*d,n}integrate(t,e,n,i=new s){let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}},Ax=new b,Tx=new b;var Cx={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Hr=class Hr{constructor(t={}){C(this,"id");C(this,"type");C(this,"boundingSphereRadius");C(this,"collisionResponse");C(this,"collisionFilterGroup");C(this,"collisionFilterMask");C(this,"material");C(this,"body");this.id=Hr.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};C(Hr,"idCounter",0),C(Hr,"types",Cx);var ct=Hr;var jt=class s{constructor(t={}){C(this,"position");C(this,"quaternion");this.position=new b,this.quaternion=new we,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e=new b){return this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i=new b){return n.vsub(t,i),e.conjugate(Ed),Ed.vmult(i,i),i}static pointToWorldFrame(t,e,n,i=new b){return e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n=new b){return t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i=new b){return e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Ed=new we;var ar=class s extends ct{constructor(e={}){let{vertices:n=[],faces:i=[],normals:r=[],axes:o,boundingSphereRadius:a}=e;super({type:ct.types.CONVEXPOLYHEDRON});C(this,"vertices");C(this,"faces");C(this,"faceNormals");C(this,"worldVertices");C(this,"worldVerticesNeedsUpdate");C(this,"worldFaceNormals");C(this,"worldFaceNormalsNeedsUpdate");C(this,"uniqueAxes");C(this,"uniqueEdges");this.vertices=n,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,n=this.vertices,i=this.uniqueEdges;i.length=0;let r=new b;for(let o=0;o!==e.length;o++){let a=e[o],c=a.length;for(let l=0;l!==c;l++){let h=(l+1)%c;n[a[l]].vsub(n[a[h]],r),r.normalize();let d=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(r)||i[u].almostEquals(r)){d=!0;break}d||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);let n=this.faceNormals[e]||new b;this.getFaceNormal(e,n),n.negate(n),this.faceNormals[e]=n;let i=this.vertices[this.faces[e][0]];if(n.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,n){let i=this.faces[e],r=this.vertices[i[0]],o=this.vertices[i[1]],a=this.vertices[i[2]];s.computeNormal(r,o,a,n)}static computeNormal(e,n,i,r){let o=new b,a=new b;n.vsub(e,a),i.vsub(n,o),o.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,n,i,r,o,a,c,l,h){let d=new b,u=-1,f=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){d.copy(i.faceNormals[g]),o.vmult(d,d);let m=d.dot(a);m>f&&(f=m,u=g)}let y=[];for(let g=0;g<i.faces[u].length;g++){let m=i.vertices[i.faces[u][g]],p=new b;p.copy(m),o.vmult(p,p),r.vadd(p,p),y.push(p)}u>=0&&this.clipFaceAgainstHull(a,e,n,y,c,l,h)}findSeparatingAxis(e,n,i,r,o,a,c,l){let h=new b,d=new b,u=new b,f=new b,y=new b,g=new b,m=Number.MAX_VALUE,p=this,x=0;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){i.vmult(p.uniqueAxes[_],h);let v=p.testSepAxis(h,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(h))}else{let _=c?c.length:p.faces.length;for(let v=0;v<_;v++){let P=c?c[v]:v;h.copy(p.faceNormals[P]),i.vmult(h,h);let w=p.testSepAxis(h,e,n,i,r,o);if(w===!1)return!1;w<m&&(m=w,a.copy(h))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){o.vmult(e.uniqueAxes[_],d),x++;let v=p.testSepAxis(d,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(d))}else{let _=l?l.length:e.faces.length;for(let v=0;v<_;v++){let P=l?l[v]:v;d.copy(e.faceNormals[P]),o.vmult(d,d),x++;let w=p.testSepAxis(d,e,n,i,r,o);if(w===!1)return!1;w<m&&(m=w,a.copy(d))}}for(let _=0;_!==p.uniqueEdges.length;_++){i.vmult(p.uniqueEdges[_],f);for(let v=0;v!==e.uniqueEdges.length;v++)if(o.vmult(e.uniqueEdges[v],y),f.cross(y,g),!g.almostZero()){g.normalize();let P=p.testSepAxis(g,e,n,i,r,o);if(P===!1)return!1;P<m&&(m=P,a.copy(g))}}return r.vsub(n,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(e,n,i,r,o,a){let c=this;s.project(c,e,i,r,hh),s.project(n,e,o,a,uh);let l=hh[0],h=hh[1],d=uh[0],u=uh[1];if(l<u||d<h)return!1;let f=l-u,y=d-h;return f<y?f:y}calculateLocalInertia(e,n){let i=new b,r=new b;this.computeLocalAABB(r,i);let o=i.x-r.x,a=i.y-r.y,c=i.z-r.z;n.x=1/12*e*(2*a*2*a+2*c*2*c),n.y=1/12*e*(2*o*2*o+2*c*2*c),n.z=1/12*e*(2*a*2*a+2*o*2*o)}getPlaneConstantOfFace(e){let n=this.faces[e],i=this.faceNormals[e],r=this.vertices[n[0]];return-i.dot(r)}clipFaceAgainstHull(e,n,i,r,o,a,c){let l=new b,h=new b,d=new b,u=new b,f=new b,y=new b,g=new b,m=new b,p=this,x=[],_=r,v=x,P=-1,w=Number.MAX_VALUE;for(let R=0;R<p.faces.length;R++){l.copy(p.faceNormals[R]),i.vmult(l,l);let O=l.dot(e);O<w&&(w=O,P=R)}if(P<0)return;let T=p.faces[P];T.connectedFaces=[];for(let R=0;R<p.faces.length;R++)for(let O=0;O<p.faces[R].length;O++)T.indexOf(p.faces[R][O])!==-1&&R!==P&&T.connectedFaces.indexOf(R)===-1&&T.connectedFaces.push(R);let B=T.length;for(let R=0;R<B;R++){let O=p.vertices[T[R]],U=p.vertices[T[(R+1)%B]];O.vsub(U,h),d.copy(h),i.vmult(d,d),n.vadd(d,d),u.copy(this.faceNormals[P]),i.vmult(u,u),n.vadd(u,u),d.cross(u,f),f.negate(f),y.copy(O),i.vmult(y,y),n.vadd(y,y);let D=T.connectedFaces[R];g.copy(this.faceNormals[D]);let G=this.getPlaneConstantOfFace(D);m.copy(g),i.vmult(m,m);let H=G-m.dot(n);for(this.clipFaceAgainstPlane(_,v,m,H);_.length;)_.shift();for(;v.length;)_.push(v.shift())}g.copy(this.faceNormals[P]);let M=this.getPlaneConstantOfFace(P);m.copy(g),i.vmult(m,m);let S=M-m.dot(n);for(let R=0;R<_.length;R++){let O=m.dot(_[R])+S;if(O<=o&&(console.log(`clamped: depth=${O} to minDist=${o}`),O=o),O<=a){let U=_[R];if(O<=1e-6){let D={point:U,normal:m,depth:O};c.push(D)}}}}clipFaceAgainstPlane(e,n,i,r){let o,a,c=e.length;if(c<2)return n;let l=e[e.length-1],h=e[0];o=i.dot(l)+r;for(let d=0;d<c;d++){if(h=e[d],a=i.dot(h)+r,o<0)if(a<0){let u=new b;u.copy(h),n.push(u)}else{let u=new b;l.lerp(h,o/(o-a),u),n.push(u)}else if(a<0){let u=new b;l.lerp(h,o/(o-a),u),n.push(u),n.push(h)}l=h,o=a}return n}computeWorldVertices(e,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);let i=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(i[o],r[o]),e.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,n){let i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){let o=i[r];o.x<e.x?e.x=o.x:o.x>n.x&&(n.x=o.x),o.y<e.y?e.y=o.y:o.y>n.y&&(n.y=o.y),o.z<e.z?e.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(e){let n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new b);let i=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)e.vmult(i[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,n=this.vertices;for(let i=0;i!==n.length;i++){let r=n[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,n,i,r){let o=this.vertices,a,c,l,h,d,u,f=new b;for(let y=0;y<o.length;y++){f.copy(o[y]),n.vmult(f,f),e.vadd(f,f);let g=f;(a===void 0||g.x<a)&&(a=g.x),(h===void 0||g.x>h)&&(h=g.x),(c===void 0||g.y<c)&&(c=g.y),(d===void 0||g.y>d)&&(d=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}i.set(a,c,l),r.set(h,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e=new b){let n=this.vertices;for(let i=0;i<n.length;i++)e.vadd(n[i],e);return e.scale(1/n.length,e),e}transformAllPoints(e,n){let i=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<i;o++){let a=r[o];n.vmult(a,a)}for(let o=0;o<this.faceNormals.length;o++){let a=this.faceNormals[o];n.vmult(a,a)}}if(e)for(let o=0;o<i;o++){let a=r[o];a.vadd(e,a)}}pointIsInside(e){let n=this.vertices,i=this.faces,r=this.faceNormals,o=null,a=new b;this.getAveragePointLocal(a);for(let c=0;c<this.faces.length;c++){let l=r[c],h=n[i[c][0]],d=new b;e.vsub(h,d);let u=l.dot(d),f=new b;a.vsub(h,f);let y=l.dot(f);if(u<0&&y>0||u>0&&y<0)return!1}return o?1:-1}static project(e,n,i,r,o){let a=e.vertices.length,c=Rx,l=Px,h=0,d=0,u=Ix,f=e.vertices;u.setZero(),jt.vectorToLocalFrame(i,r,n,l),jt.pointToLocalFrame(i,r,u,u);let y=u.dot(l);d=h=f[0].dot(l);for(let g=1;g<a;g++){let m=f[g].dot(l);m>h&&(h=m),m<d&&(d=m)}if(d-=y,h-=y,d>h){let g=d;d=h,h=g}o[0]=h,o[1]=d}},hh=[],uh=[],Rx=new b,Px=new b,Ix=new b;var qi=class s extends ct{constructor(e){super({type:ct.types.BOX});C(this,"halfExtents");C(this,"convexPolyhedronRepresentation");this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,n=this.halfExtents.y,i=this.halfExtents.z,r=b,o=[new r(-e,-n,-i),new r(e,-n,-i),new r(e,n,-i),new r(-e,n,-i),new r(-e,-n,i),new r(e,-n,i),new r(e,n,i),new r(-e,n,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],c=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new ar({vertices:o,faces:a,axes:c});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,n=new b){return s.calculateInertia(this.halfExtents,e,n),n}static calculateInertia(e,n,i){let r=e;i.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,n){let i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==i.length;o++)n.vmult(i[o],i[o]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,n,i){let r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let a=0;a<o.length;a++)Gi.set(o[a][0],o[a][1],o[a][2]),n.vmult(Gi,Gi),e.vadd(Gi,Gi),i(Gi.x,Gi.y,Gi.z)}calculateWorldAABB(e,n,i,r){let o=this.halfExtents;$n[0].set(o.x,o.y,o.z),$n[1].set(-o.x,o.y,o.z),$n[2].set(-o.x,-o.y,o.z),$n[3].set(-o.x,-o.y,-o.z),$n[4].set(o.x,-o.y,-o.z),$n[5].set(o.x,o.y,-o.z),$n[6].set(-o.x,o.y,-o.z),$n[7].set(o.x,-o.y,o.z);let a=$n[0];n.vmult(a,a),e.vadd(a,a),r.copy(a),i.copy(a);for(let c=1;c<8;c++){let l=$n[c];n.vmult(l,l),e.vadd(l,l);let h=l.x,d=l.y,u=l.z;h>r.x&&(r.x=h),d>r.y&&(r.y=d),u>r.z&&(r.z=u),h<i.x&&(i.x=h),d<i.y&&(i.y=d),u<i.z&&(i.z=u)}}},Gi=new b,$n=[new b,new b,new b,new b,new b,new b,new b,new b];var dh={DYNAMIC:1,STATIC:2,KINEMATIC:4},fh={AWAKE:0,SLEEPY:1,SLEEPING:2},Ht=class Ht extends or{constructor(e={}){super();C(this,"id");C(this,"index");C(this,"world");C(this,"vlambda");C(this,"collisionFilterGroup");C(this,"collisionFilterMask");C(this,"collisionResponse");C(this,"position");C(this,"previousPosition");C(this,"interpolatedPosition");C(this,"initPosition");C(this,"velocity");C(this,"initVelocity");C(this,"force");C(this,"mass");C(this,"invMass");C(this,"material");C(this,"linearDamping");C(this,"type");C(this,"allowSleep");C(this,"sleepState");C(this,"sleepSpeedLimit");C(this,"sleepTimeLimit");C(this,"timeLastSleepy");C(this,"wakeUpAfterNarrowphase");C(this,"torque");C(this,"quaternion");C(this,"initQuaternion");C(this,"previousQuaternion");C(this,"interpolatedQuaternion");C(this,"angularVelocity");C(this,"initAngularVelocity");C(this,"shapes");C(this,"shapeOffsets");C(this,"shapeOrientations");C(this,"inertia");C(this,"invInertia");C(this,"invInertiaWorld");C(this,"invMassSolve");C(this,"invInertiaSolve");C(this,"invInertiaWorldSolve");C(this,"fixedRotation");C(this,"angularDamping");C(this,"linearFactor");C(this,"angularFactor");C(this,"aabb");C(this,"aabbNeedsUpdate");C(this,"boundingRadius");C(this,"wlambda");C(this,"isTrigger");this.id=Ht.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;let n=typeof e.mass=="number"?e.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=n<=0?Ht.STATIC:Ht.DYNAMIC,typeof e.type==typeof Ht.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep!="undefined"?e.allowSleep:!0,this.sleepState=Ht.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit!="undefined"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit!="undefined"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new we,this.initQuaternion=new we,this.previousQuaternion=new we,this.interpolatedQuaternion=new we,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Zn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Zn,this.fixedRotation=typeof e.fixedRotation!="undefined"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping!="undefined"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ue,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=Ht.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ht.SLEEPING&&this.dispatchEvent(Ht.wakeupEvent)}sleep(){this.sleepState=Ht.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let n=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Ht.AWAKE&&i<r?(this.sleepState=Ht.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ht.sleepyEvent)):n===Ht.SLEEPY&&i>r?this.wakeUp():n===Ht.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ht.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ht.SLEEPING||this.type===Ht.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,n=new b){return e.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(e,n=new b){return this.quaternion.conjugate().vmult(e,n),n}pointToWorldFrame(e,n=new b){return this.quaternion.vmult(e,n),n.vadd(this.position,n),n}vectorToWorldFrame(e,n=new b){return this.quaternion.vmult(e,n),n}addShape(e,n,i){let r=new b,o=new we;return n&&r.copy(n),i&&o.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let n=this.shapes.indexOf(e);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,n=this.shapeOffsets,i=e.length,r=0;for(let o=0;o!==i;o++){let a=e[o];a.updateBoundingSphereRadius();let c=n[o].length(),l=a.boundingSphereRadius;c+l>r&&(r=c+l)}this.boundingRadius=r}updateAABB(){let e=this.shapes,n=this.shapeOffsets,i=this.shapeOrientations,r=e.length,o=Bx,a=Lx,c=this.quaternion,l=this.aabb,h=Nx;for(let d=0;d!==r;d++){let u=e[d];c.vmult(n[d],o),o.vadd(this.position,o),c.mult(i[d],a),u.calculateWorldAABB(o,a,h.lowerBound,h.upperBound),d===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!e)){let i=Fx,r=Dx,o=Ux;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(n,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,n=new b){if(this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();let i=Ox;n.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,n=new b){if(this.type!==Ht.DYNAMIC)return;let i=zx,r=Vx;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyForce(i,r)}applyTorque(e){this.type===Ht.DYNAMIC&&(this.sleepState===Ht.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,n=new b){if(this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();let i=n,r=kx;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);let o=Hx;i.cross(e,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(e,n=new b){if(this.type!==Ht.DYNAMIC)return;let i=Wx,r=Gx;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyImpulse(i,r)}updateMassProperties(){let e=qx;this.invMass=this.mass>0?1/this.mass:0;let n=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),qi.calculateInertia(e,this.mass,n),this.invInertia.set(n.x>0&&!i?1/n.x:0,n.y>0&&!i?1/n.y:0,n.z>0&&!i?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,n){let i=new b;return e.vsub(this.position,i),this.angularVelocity.cross(i,n),this.velocity.vadd(n,n),n}integrate(e,n,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ht.DYNAMIC||this.type===Ht.KINEMATIC)||this.sleepState===Ht.SLEEPING)return;let r=this.velocity,o=this.angularVelocity,a=this.position,c=this.force,l=this.torque,h=this.quaternion,d=this.invMass,u=this.invInertiaWorld,f=this.linearFactor,y=d*e;r.x+=c.x*y*f.x,r.y+=c.y*y*f.y,r.z+=c.z*y*f.z;let g=u.elements,m=this.angularFactor,p=l.x*m.x,x=l.y*m.y,_=l.z*m.z;o.x+=e*(g[0]*p+g[1]*x+g[2]*_),o.y+=e*(g[3]*p+g[4]*x+g[5]*_),o.z+=e*(g[6]*p+g[7]*x+g[8]*_),a.x+=r.x*e,a.y+=r.y*e,a.z+=r.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),n&&(i?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};C(Ht,"idCounter",0),C(Ht,"COLLIDE_EVENT_NAME","collide"),C(Ht,"DYNAMIC",dh.DYNAMIC),C(Ht,"STATIC",dh.STATIC),C(Ht,"KINEMATIC",dh.KINEMATIC),C(Ht,"AWAKE",fh.AWAKE),C(Ht,"SLEEPY",fh.SLEEPY),C(Ht,"SLEEPING",fh.SLEEPING),C(Ht,"wakeupEvent",{type:"wakeup"}),C(Ht,"sleepyEvent",{type:"sleepy"}),C(Ht,"sleepEvent",{type:"sleep"});var Ft=Ht,Bx=new b,Lx=new we,Nx=new Ue,Fx=new Zn,Dx=new Zn,Ux=new Zn,Ox=new b,zx=new b,Vx=new b,kx=new b,Hx=new b,Wx=new b,Gx=new b,qx=new b;var ms=class{constructor(){C(this,"world");C(this,"useBoundingBoxes");C(this,"dirty");this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ft.STATIC)!==0||t.sleepState===Ft.SLEEPING)&&((e.type&Ft.STATIC)!==0||e.sleepState===Ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=Xx;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=Yx,i=Zx,r=$x,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new b;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Xx=new b,TM=new b,CM=new we,RM=new b,Yx={keys:[]},Zx=[],$x=[],PM=new b;var DM=new b,UM=new b;var xa=class extends ms{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n=[]){for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}};var xi=class{constructor(){C(this,"rayFromWorld");C(this,"rayToWorld");C(this,"hitNormalWorld");C(this,"hitPointWorld");C(this,"hasHit");C(this,"shape");C(this,"body");C(this,"hitFaceIndex");C(this,"distance");C(this,"shouldStop");this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}};var ph={CLOSEST:1,ANY:2,ALL:4},dn=class dn{constructor(t=new b,e=new b){C(this,"from");C(this,"to");C(this,"direction");C(this,"precision");C(this,"checkCollisionResponse");C(this,"skipBackfaces");C(this,"collisionFilterMask");C(this,"collisionFilterGroup");C(this,"mode");C(this,"result");C(this,"hasHit");C(this,"callback");this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=dn.ANY,this.result=new xi,this.hasHit=!1,this.callback=n=>{}}get[ct.types.SPHERE](){return this._intersectSphere}get[ct.types.PLANE](){return this._intersectPlane}get[ct.types.BOX](){return this._intersectBox}get[ct.types.CYLINDER](){return this._intersectConvex}get[ct.types.CONVEXPOLYHEDRON](){return this._intersectConvex}get[ct.types.HEIGHTFIELD](){return this._intersectHeightfield}get[ct.types.TRIMESH](){return this._intersectTrimesh}intersectWorld(t,e){return this.mode=e.mode||dn.ANY,this.result=e.result||new xi,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask!="undefined"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup!="undefined"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse!="undefined"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ad),mh.length=0,t.broadphase.aabbQuery(t,Ad,mh),this.intersectBodies(mh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=jx,r=Jx;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(fv(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new b(0,0,1);e.vmult(l,l);let h=new b;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let y=new b,g=new b,m=new b;o.vsub(n,y);let p=-l.dot(y)/f;c.scale(p,g),o.vadd(g,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){let o=t.data,a=t.elementSize,c=Qx;c.from.copy(this.from),c.to.copy(this.to),jt.pointToLocalFrame(n,e,c.from,c.from),jt.pointToLocalFrame(n,e,c.to,c.to),c.updateDirection();let l=Kx,h,d,u,f;h=d=0,u=f=t.data.length-1;let y=new Ue;c.getAABB(y),t.getIndexOfPosition(y.lowerBound.x,y.lowerBound.y,l,!0),h=Math.max(h,l[0]),d=Math.max(d,l[1]),t.getIndexOfPosition(y.upperBound.x,y.upperBound.y,l,!0),u=Math.min(u,l[0]+1),f=Math.min(f,l[1]+1);for(let g=h;g<u;g++)for(let m=d;m<f;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(g,m,y),!!y.overlapsRay(c)){if(t.getConvexTrianglePillar(g,m,!1),jt.pointToWorldFrame(n,e,t.pillarOffset,va),this._intersectConvex(t.pillarConvex,e,va,i,r,Td),this.result.shouldStop)return;t.getConvexTrianglePillar(g,m,!0),jt.pointToWorldFrame(n,e,t.pillarOffset,va),this._intersectConvex(t.pillarConvex,e,va,i,r,Td)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=tv,y=ev;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1);else{let g=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=iv,c=nv,l=Cd,h=sv,d=o&&o.faceList||null,u=t.faces,f=t.vertices,y=t.faceNormals,g=this.direction,m=this.from,p=this.to,x=m.distanceTo(p),_=-1,v=d?d.length:u.length,P=this.result;for(let w=0;!P.shouldStop&&w<v;w++){let T=d?d[w]:w,B=u[T],M=y[T],S=e,R=n;l.copy(f[B[0]]),S.vmult(l,l),l.vadd(R,l),l.vsub(m,l),S.vmult(M,c);let O=g.dot(c);if(Math.abs(O)<this.precision)continue;let U=c.dot(l)/O;if(!(U<0)){g.scale(U,un),un.vadd(m,un),Vn.copy(f[B[0]]),S.vmult(Vn,Vn),R.vadd(Vn,Vn);for(let D=1;!P.shouldStop&&D<B.length-1;D++){jn.copy(f[B[D]]),Jn.copy(f[B[D+1]]),S.vmult(jn,jn),S.vmult(Jn,Jn),R.vadd(jn,jn),R.vadd(Jn,Jn);let G=un.distanceTo(m);!(dn.pointInTriangle(un,Vn,jn,Jn)||dn.pointInTriangle(un,jn,Vn,Jn))||G>x||this.reportIntersection(c,un,r,i,T)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=rv,c=uv,l=dv,h=Cd,d=ov,u=av,f=cv,y=hv,g=lv,m=t.indices,p=t.vertices,x=this.from,_=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(e),jt.vectorToLocalFrame(n,e,v,d),jt.pointToLocalFrame(n,e,x,u),jt.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let P=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let w=0,T=c.length;!this.result.shouldStop&&w!==T;w++){let B=c[w];t.getNormal(B,a),t.getVertex(m[B*3],Vn),Vn.vsub(u,h);let M=d.dot(a),S=a.dot(h)/M;if(S<0)continue;d.scale(S,un),un.vadd(u,un),t.getVertex(m[B*3+1],jn),t.getVertex(m[B*3+2],Jn);let R=un.distanceSquared(u);!(dn.pointInTriangle(un,jn,Vn,Jn)||dn.pointInTriangle(un,Vn,jn,Jn))||R>P||(jt.vectorToWorldFrame(e,a,g),jt.pointToWorldFrame(n,e,un,y),this.reportIntersection(g,y,r,i,B))}c.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r!="undefined"?r:-1,this.mode){case dn.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case dn.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case dn.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,gs),n.vsub(e,Wr),t.vsub(e,gh);let r=gs.dot(gs),o=gs.dot(Wr),a=gs.dot(gh),c=Wr.dot(Wr),l=Wr.dot(gh),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};C(dn,"CLOSEST",ph.CLOSEST),C(dn,"ANY",ph.ANY),C(dn,"ALL",ph.ALL);var Cn=dn,Ad=new Ue,mh=[],Wr=new b,gh=new b,jx=new b,Jx=new we,un=new b,Vn=new b,jn=new b,Jn=new b,JM=new b,QM=new xi,Td={faceList:[0]},va=new b,Qx=new Cn,Kx=[];var tv=new b,ev=new b,nv=new b,iv=new b,sv=new b,Cd=new b,rv=new b,ov=new b,av=new b,cv=new b,lv=new b,hv=new b,KM=new Ue,uv=[],dv=new jt,gs=new b,_a=new b;function fv(s,t,e){e.vsub(s,gs);let n=gs.dot(t);return t.scale(n,_a),_a.vadd(s,_a),e.distanceTo(_a)}var ba=class s extends ms{constructor(e){super();C(this,"axisList");C(this,"world");C(this,"axisIndex");C(this,"_addBodyHandler");C(this,"_removeBodyHandler");this.axisList=[],this.world=null,this.axisIndex=0;let n=this.axisList;this._addBodyHandler=i=>{n.push(i.body)},this._removeBodyHandler=i=>{let r=n.indexOf(i.body);r!==-1&&n.splice(r,1)},e&&this.setWorld(e)}static checkBounds(e,n,i){let r,o;i===0?(r=e.position.x,o=n.position.x):i===1?(r=e.position.y,o=n.position.y):i===2&&(r=e.position.z,o=n.position.z);let a=e.boundingRadius,c=n.boundingRadius,l=r+a;return o-c<l}static insertionSortX(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortY(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortZ(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)e[o+1]=e[o];e[o+1]=r}return e}setWorld(e){this.axisList.length=0;for(let n=0;n<e.bodies.length;n++)this.axisList.push(e.bodies[n]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,n,i){let r=this.axisList,o=r.length,a=this.axisIndex,c,l;for(this.dirty&&(this.sortList(),this.dirty=!1),c=0;c!==o;c++){let h=r[c];for(l=c+1;l<o;l++){let d=r[l];if(this.needBroadphaseCollision(h,d)){if(!s.checkBounds(h,d,a))break;this.intersectionTest(h,d,n,i)}}}}sortList(){let e=this.axisList,n=this.axisIndex,i=e.length;for(let r=0;r!==i;r++){let o=e[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?s.insertionSortX(e):n===1?s.insertionSortY(e):n===2&&s.insertionSortZ(e)}autoDetectAxis(){let e=0,n=0,i=0,r=0,o=0,a=0,c=this.axisList,l=c.length,h=1/l;for(let y=0;y!==l;y++){let g=c[y],m=g.position.x;e+=m,n+=m*m;let p=g.position.y;i+=p,r+=p*p;let x=g.position.z;o+=x,a+=x*x}let d=n-e*e*h,u=r-i*i*h,f=a-o*o*h;d>u?d>f?this.axisIndex=0:this.axisIndex=2:u>f?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,n,i=[]){this.dirty&&(this.sortList(),this.dirty=!1);let r=this.axisIndex,o="x";r===1&&(o="y"),r===2&&(o="z");let a=this.axisList,c=n.lowerBound[o],l=n.upperBound[o];for(let h=0;h<a.length;h++){let d=a[h];d.aabbNeedsUpdate&&d.updateAABB(),d.aabb.overlaps(n)&&i.push(d)}return i}};var Xi=class{static defaults(t={},e){for(let n in e)n in t||(t[n]=e[n]);return t}};var Ma=class Ma{constructor(t,e,n={}){C(this,"equations");C(this,"bodyA");C(this,"bodyB");C(this,"id");C(this,"collideConnected");n=Xi.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=Ma.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};C(Ma,"idCounter",0);var Gr=Ma;var qr=class{constructor(){C(this,"spatial");C(this,"rotational");this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}};var wa=class wa{constructor(t,e,n=-1e6,i=1e6){C(this,"id");C(this,"minForce");C(this,"maxForce");C(this,"bi");C(this,"bj");C(this,"si");C(this,"sj");C(this,"a");C(this,"b");C(this,"eps");C(this,"jacobianElementA");C(this,"jacobianElementB");C(this,"enabled");C(this,"multiplier");this.id=wa.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new qr,this.jacobianElementB=new qr,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,Rd),a.scale(h,Pd),n.invInertiaWorldSolve.vmult(o,Id),i.invInertiaWorldSolve.vmult(c,Bd),t.multiplyVectors(Rd,Id)+e.multiplyVectors(Pd,Bd)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,Sa),l+=Sa.dot(t.rotational),c.vmult(e.rotational,Sa),l+=Sa.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=pv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};C(wa,"idCounter",0);var vi=wa,Rd=new b,Pd=new b,Id=new b,Bd=new b,Sa=new b,pv=new b;var ys=class extends vi{constructor(e,n,i=1e6){super(e,n,0,i);C(this,"restitution");C(this,"ri");C(this,"rj");C(this,"ni");this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=mv,h=gv,d=r.velocity,u=r.angularVelocity,f=r.force,y=r.torque,g=o.velocity,m=o.angularVelocity,p=o.force,x=o.torque,_=yv,v=this.jacobianElementA,P=this.jacobianElementB,w=this.ni;a.cross(w,l),c.cross(w,h),w.negate(v.spatial),l.negate(v.rotational),P.spatial.copy(w),P.rotational.copy(h),_.copy(o.position),_.vadd(c,_),_.vsub(r.position,_),_.vsub(a,_);let T=w.dot(_),B=this.restitution+1,M=B*g.dot(w)-B*d.dot(w)+m.dot(h)-u.dot(l),S=this.computeGiMf();return-T*n-M*i-e*S}getImpactVelocityAlongNormal(){let e=xv,n=vv,i=_v,r=bv,o=Mv;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,n),e.vsub(n,o),this.ni.dot(o)}},mv=new b,gv=new b,yv=new b,xv=new b,vv=new b,_v=new b,bv=new b,Mv=new b;var TS=new b,CS=new b;var LS=new b,NS=new b;var HS=new b,WS=new b;var Ea=class extends Gr{constructor(e,n,i,r=1e6){super(e,n);C(this,"distance");C(this,"distanceEquation");typeof i=="undefined"&&(i=e.position.distanceTo(n.position)),this.distance=i;let o=this.distanceEquation=new ys(e,n);this.equations.push(o),o.minForce=-r,o.maxForce=r}update(){let e=this.bodyA,n=this.bodyB,i=this.distanceEquation,r=this.distance*.5,o=i.ni;n.position.vsub(e.position,o),o.normalize(),o.scale(r,i.ri),o.scale(-r,i.rj)}};var KS=new b,tw=new b;var dw=new b,fw=new b;var Xr=class extends vi{constructor(e,n,i){super(e,n,-i,i);C(this,"ri");C(this,"rj");C(this,"t");this.ri=new b,this.rj=new b,this.t=new b}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=Sv,h=wv,d=this.t;a.cross(d,l),c.cross(d,h);let u=this.jacobianElementA,f=this.jacobianElementB;d.negate(u.spatial),l.negate(u.rotational),f.spatial.copy(d),f.rotational.copy(h);let y=this.computeGW(),g=this.computeGiMf();return-y*i-e*g}},Sv=new b,wv=new b;var Ta=class Ta{constructor(t,e,n){C(this,"id");C(this,"materials");C(this,"friction");C(this,"restitution");C(this,"contactEquationStiffness");C(this,"contactEquationRelaxation");C(this,"frictionEquationStiffness");C(this,"frictionEquationRelaxation");n=Xi.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ta.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};C(Ta,"idCounter",0);var Aa=Ta;var Ra=class Ra{constructor(t={}){C(this,"name");C(this,"id");C(this,"friction");C(this,"restitution");let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ra.idCounter++,this.friction=typeof t.friction!="undefined"?t.friction:-1,this.restitution=typeof t.restitution!="undefined"?t.restitution:-1}};C(Ra,"idCounter",0);var Ca=Ra;var Aw=new b,Tw=new b,Cw=new b,Rw=new b,Pw=new b,Iw=new b,Bw=new b,Lw=new b,Nw=new b,Fw=new b,Dw=new b;var Ww=new b,Gw=new b;var Qw=new b,Kw=new b,t1=new b,e1=new b,n1=new b,i1=new b,s1=new Cn,r1=new b,o1=new b,a1=new b,c1=[new b(1,0,0),new b(0,1,0),new b(0,0,1)],l1=new b;var h1=new b,u1=new b,d1=new b;var f1=new b,p1=new b,m1=new b,g1=new b;var y1=new b,x1=new b,v1=new b;var Yi=class extends ct{constructor(e){super({type:ct.types.SPHERE});C(this,"radius");if(this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,n=new b){let i=2*e*this.radius*this.radius/5;return n.x=i,n.y=i,n.z=i,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,n,i,r){let o=this.radius,a=["x","y","z"];for(let c=0;c<a.length;c++){let l=a[c];i[l]=e[l]-o,r[l]=e[l]+o}}};var B1=new b,L1=new b;var U1=new b,O1=new b,z1=new b,V1=new b,k1=new b,H1=new b,W1=new b;var nE=new b;var lE=new b,hE=new b,uE=new b,dE=new b,fE=new b,pE=new b,mE=new b,gE=new b,yE=new b;var ME=new b,SE=new Ue;var BE=new b,LE=new Ue,NE=new b,FE=new b,DE=new b,UE=new b,OE=new b,zE=new b,VE=new b,kE=new Ue,HE=new b,WE=new jt,GE=new Ue;var Yr=class{constructor(){C(this,"equations");this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}};var Pa=class extends Yr{constructor(){super();C(this,"iterations");C(this,"tolerance");this.iterations=10,this.tolerance=1e-7}solve(e,n){let i=0,r=this.iterations,o=this.tolerance*this.tolerance,a=this.equations,c=a.length,l=n.bodies,h=l.length,d=e,u,f,y,g,m,p,x;if(c!==0)for(let w=0;w!==h;w++)l[w].updateSolveMassProperties();let _=Av,v=Tv,P=Ev;_.length=c,v.length=c,P.length=c;for(let w=0;w!==c;w++){let T=a[w];P[w]=0,v[w]=T.computeB(d),_[w]=1/T.computeC()}if(c!==0){for(let B=0;B!==h;B++){let M=l[B],S=M.vlambda,R=M.wlambda;S.set(0,0,0),R.set(0,0,0)}for(i=0;i!==r;i++){m=0;for(let B=0;B!==c;B++){let M=a[B];f=v[B],y=_[B],x=P[B],p=M.computeGWlambda(),g=y*(f-p-M.eps*x),x+g<M.minForce?g=M.minForce-x:x+g>M.maxForce&&(g=M.maxForce-x),P[B]+=g,m+=g>0?g:-g,M.addToWlambda(g)}if(m*m<o)break}for(let B=0;B!==h;B++){let M=l[B],S=M.velocity,R=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),S.vadd(M.vlambda,S),M.wlambda.vmul(M.angularFactor,M.wlambda),R.vadd(M.wlambda,R)}let w=a.length,T=1/d;for(;w--;)a[w].multiplier=P[w]*T}return i}},Ev=[],Av=[],Tv=[];var tA=Ft.STATIC;var Ia=class{constructor(){C(this,"objects",[]);C(this,"type",Object)}release(...t){let e=t.length;for(let n=0;n!==e;n++)this.objects.push(t[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}};var Ba=class extends Ia{constructor(){super(...arguments);C(this,"type",b)}constructObject(){return new b}};var ve={sphereSphere:ct.types.SPHERE,spherePlane:ct.types.SPHERE|ct.types.PLANE,boxBox:ct.types.BOX|ct.types.BOX,sphereBox:ct.types.SPHERE|ct.types.BOX,planeBox:ct.types.PLANE|ct.types.BOX,convexConvex:ct.types.CONVEXPOLYHEDRON,sphereConvex:ct.types.SPHERE|ct.types.CONVEXPOLYHEDRON,planeConvex:ct.types.PLANE|ct.types.CONVEXPOLYHEDRON,boxConvex:ct.types.BOX|ct.types.CONVEXPOLYHEDRON,sphereHeightfield:ct.types.SPHERE|ct.types.HEIGHTFIELD,boxHeightfield:ct.types.BOX|ct.types.HEIGHTFIELD,convexHeightfield:ct.types.CONVEXPOLYHEDRON|ct.types.HEIGHTFIELD,sphereParticle:ct.types.PARTICLE|ct.types.SPHERE,planeParticle:ct.types.PLANE|ct.types.PARTICLE,boxParticle:ct.types.BOX|ct.types.PARTICLE,convexParticle:ct.types.PARTICLE|ct.types.CONVEXPOLYHEDRON,cylinderCylinder:ct.types.CYLINDER,sphereCylinder:ct.types.SPHERE|ct.types.CYLINDER,planeCylinder:ct.types.PLANE|ct.types.CYLINDER,boxCylinder:ct.types.BOX|ct.types.CYLINDER,convexCylinder:ct.types.CONVEXPOLYHEDRON|ct.types.CYLINDER,heightfieldCylinder:ct.types.HEIGHTFIELD|ct.types.CYLINDER,particleCylinder:ct.types.PARTICLE|ct.types.CYLINDER,sphereTrimesh:ct.types.SPHERE|ct.types.TRIMESH,planeTrimesh:ct.types.PLANE|ct.types.TRIMESH},Fa=class{constructor(t){C(this,"contactPointPool");C(this,"frictionEquationPool");C(this,"result");C(this,"frictionResult");C(this,"v3pool");C(this,"world");C(this,"currentContactMaterial");C(this,"enableFrictionReduction");this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ba,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}get[ve.sphereSphere](){return this.sphereSphere}get[ve.spherePlane](){return this.spherePlane}get[ve.boxBox](){return this.boxBox}get[ve.sphereBox](){return this.sphereBox}get[ve.planeBox](){return this.planeBox}get[ve.convexConvex](){return this.convexConvex}get[ve.sphereConvex](){return this.sphereConvex}get[ve.planeConvex](){return this.planeConvex}get[ve.boxConvex](){return this.boxConvex}get[ve.sphereHeightfield](){return this.sphereHeightfield}get[ve.boxHeightfield](){return this.boxHeightfield}get[ve.convexHeightfield](){return this.convexHeightfield}get[ve.sphereParticle](){return this.sphereParticle}get[ve.planeParticle](){return this.planeParticle}get[ve.boxParticle](){return this.boxParticle}get[ve.convexParticle](){return this.convexParticle}get[ve.cylinderCylinder](){return this.convexConvex}get[ve.sphereCylinder](){return this.sphereConvex}get[ve.planeCylinder](){return this.planeConvex}get[ve.boxCylinder](){return this.boxConvex}get[ve.convexCylinder](){return this.convexConvex}get[ve.heightfieldCylinder](){return this.heightfieldCylinder}get[ve.particleCylinder](){return this.particleCylinder}get[ve.sphereTrimesh](){return this.sphereTrimesh}get[ve.planeTrimesh](){return this.planeTrimesh}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new ys(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let y=this.frictionEquationPool,g=y.length?y.pop():new Xr(n,i,u*f),m=y.length?y.pop():new Xr(n,i,u*f);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-u*f,g.maxForce=m.maxForce=u*f,g.ri.copy(t.ri),g.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(g.t,m.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.enabled=m.enabled=t.enabled,e.push(g,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];xs.setZero(),cr.setZero(),lr.setZero();let r=e.bi,o=e.bj;for(let c=0;c!==t;c++)e=this.result[this.result.length-1-c],e.bi!==r?(xs.vadd(e.ni,xs),cr.vadd(e.ri,cr),lr.vadd(e.rj,lr)):(xs.vsub(e.ni,xs),cr.vadd(e.rj,cr),lr.vadd(e.ri,lr));let a=1/t;cr.scale(a,n.ri),lr.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),xs.normalize(),xs.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=Pv,l=Iv,h=Cv,d=Rv;for(let u=0,f=t.length;u!==f;u++){let y=t[u],g=e[u],m=null;y.material&&g.material&&(m=n.getContactMaterial(y.material,g.material)||null);let p=y.type&Ft.KINEMATIC&&g.type&Ft.STATIC||y.type&Ft.STATIC&&g.type&Ft.KINEMATIC||y.type&Ft.KINEMATIC&&g.type&Ft.KINEMATIC;for(let x=0;x<y.shapes.length;x++){y.quaternion.mult(y.shapeOrientations[x],c),y.quaternion.vmult(y.shapeOffsets[x],h),h.vadd(y.position,h);let _=y.shapes[x];for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],d),d.vadd(g.position,d);let P=g.shapes[v];if(!(_.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+P.boundingSphereRadius)continue;let w=null;_.material&&P.material&&(w=n.getContactMaterial(_.material,P.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;let T=_.type|P.type,B=this[T];if(B){let M=!1;_.type<P.type?M=B.call(this,_,P,h,d,c,l,y,g,_,P,p):M=B.call(this,P,_,d,h,l,c,g,y,_,P,p),M&&p&&(n.shapeOverlapKeeper.set(_.id,P.id),n.bodyOverlapKeeper.set(y.id,g.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,La),u.ni.scale(u.ni.dot(La),Fd),La.vsub(Fd,u.rj),-La.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,y=u.rj;f.vadd(n,f),f.vsub(a.position,f),y.vadd(i,y),y.vsub(c.position,y),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}sphereBox(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool,f=i_;n.vsub(i,Na),e.getSideNormals(f,o);let y=t.radius,g=[],m=!1,p=r_,x=o_,_=a_,v=null,P=0,w=0,T=0,B=null;for(let W=0,N=f.length;W!==N&&m===!1;W++){let $=t_;$.copy(f[W]);let j=$.length();$.normalize();let gt=Na.dot($);if(gt<j+y&&gt>0){let Tt=e_,rt=n_;Tt.copy(f[(W+1)%3]),rt.copy(f[(W+2)%3]);let J=Tt.length(),nt=rt.length();Tt.normalize(),rt.normalize();let yt=Na.dot(Tt),ot=Na.dot(rt);if(yt<J&&yt>-J&&ot<nt&&ot>-nt){let Ct=Math.abs(gt-j-y);if((B===null||Ct<B)&&(B=Ct,w=yt,T=ot,v=j,p.copy($),x.copy(Tt),_.copy(rt),P++,d))return!0}}}if(P){m=!0;let W=this.createContactEquation(a,c,t,e,l,h);p.scale(-y,W.ri),W.ni.copy(p),W.ni.negate(W.ni),p.scale(v,p),x.scale(w,x),p.vadd(x,p),_.scale(T,_),p.vadd(_,W.rj),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}let M=u.get(),S=s_;for(let W=0;W!==2&&!m;W++)for(let N=0;N!==2&&!m;N++)for(let $=0;$!==2&&!m;$++)if(M.set(0,0,0),W?M.vadd(f[0],M):M.vsub(f[0],M),N?M.vadd(f[1],M):M.vsub(f[1],M),$?M.vadd(f[2],M):M.vsub(f[2],M),i.vadd(M,S),S.vsub(n,S),S.lengthSquared()<y*y){if(d)return!0;m=!0;let j=this.createContactEquation(a,c,t,e,l,h);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(y,j.ri),j.rj.copy(M),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(M),M=null;let R=u.get(),O=u.get(),U=u.get(),D=u.get(),G=u.get(),H=f.length;for(let W=0;W!==H&&!m;W++)for(let N=0;N!==H&&!m;N++)if(W%3!==N%3){f[N].cross(f[W],R),R.normalize(),f[W].vadd(f[N],O),U.copy(n),U.vsub(O,U),U.vsub(i,U);let $=U.dot(R);R.scale($,D);let j=0;for(;j===W%3||j===N%3;)j++;G.copy(n),G.vsub(D,G),G.vsub(O,G),G.vsub(i,G);let gt=Math.abs($),Tt=G.length();if(gt<f[j].length()&&Tt<y){if(d)return!0;m=!0;let rt=this.createContactEquation(a,c,t,e,l,h);O.vadd(D,rt.rj),rt.rj.copy(rt.rj),G.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(y,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(R,O,U,D,G)}planeBox(t,e,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}convexConvex(t,e,n,i,r,o,a,c,l,h,d,u,f){let y=M_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,y,u,f)){let g=[],m=S_;t.clipAgainstHull(n,r,e,i,o,y,-100,100,g);let p=0;for(let x=0;x!==g.length;x++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,P=_.rj;y.negate(_.ni),g[x].normal.negate(m),m.scale(g[x].depth,m),g[x].point.vadd(m,v),P.copy(g[x].point),v.vsub(n,v),P.vsub(i,P),v.vadd(n,v),v.vsub(a.position,v),P.vadd(i,P),P.vsub(c.position,P),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,c_);let f=e.faceNormals,y=e.faces,g=e.vertices,m=t.radius,p=[],x=!1;for(let _=0;_!==g.length;_++){let v=g[_],P=d_;o.vmult(v,P),i.vadd(P,P);let w=u_;if(P.vsub(n,w),w.lengthSquared()<m*m){if(d)return!0;x=!0;let T=this.createContactEquation(a,c,t,e,l,h);T.ri.copy(w),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),P.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,v=y.length;_!==v&&x===!1;_++){let P=f[_],w=y[_],T=f_;o.vmult(P,T);let B=p_;o.vmult(g[w[0]],B),B.vadd(i,B);let M=m_;T.scale(-m,M),n.vadd(M,M);let S=g_;M.vsub(B,S);let R=S.dot(T),O=y_;if(n.vsub(B,O),R<0&&O.dot(T)>0){let U=[];for(let D=0,G=w.length;D!==G;D++){let H=u.get();o.vmult(g[w[D]],H),i.vadd(H,H),U.push(H)}if(Kv(U,T,n)){if(d)return!0;x=!0;let D=this.createContactEquation(a,c,t,e,l,h);T.scale(-m,D.ri),T.negate(D.ni);let G=u.get();T.scale(-R,G);let H=u.get();T.scale(-m,H),n.vsub(i,D.rj),D.rj.vadd(H,D.rj),D.rj.vadd(G,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(c.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),u.release(G),u.release(H),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let W=0,N=U.length;W!==N;W++)u.release(U[W]);return}else for(let D=0;D!==w.length;D++){let G=u.get(),H=u.get();o.vmult(g[w[(D+1)%w.length]],G),o.vmult(g[w[(D+2)%w.length]],H),i.vadd(G,G),i.vadd(H,H);let W=l_;H.vsub(G,W);let N=h_;W.unit(N);let $=u.get(),j=u.get();n.vsub(G,j);let gt=j.dot(N);N.scale(gt,$),$.vadd(G,$);let Tt=u.get();if($.vsub(n,Tt),gt>0&&gt*gt<W.lengthSquared()&&Tt.lengthSquared()<m*m){if(d)return!0;let rt=this.createContactEquation(a,c,t,e,l,h);$.vsub(i,rt.rj),$.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let J=0,nt=U.length;J!==nt;J++)u.release(U[J]);u.release(G),u.release(H),u.release($),u.release(Tt),u.release(j);return}u.release(G),u.release(H),u.release($),u.release(Tt),u.release(j)}for(let D=0,G=U.length;D!==G;D++)u.release(U[D])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,d){let u=x_,f=v_;f.set(0,0,1),r.vmult(f,f);let y=0,g=__;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h),_=b_;f.scale(f.dot(g),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}boxConvex(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=t.radius,y=e.elementSize,g=F_,m=N_;jt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/y)-1,x=Math.ceil((m.x+f)/y)+1,_=Math.floor((m.y-f)/y)-1,v=Math.ceil((m.y+f)/y)+1;if(x<0||v<0||p>u.length||_>u[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),v>=u[0].length&&(v=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let P=[];e.getRectMinMax(p,_,x,v,P);let w=P[0],T=P[1];if(m.z-f>T||m.z+f<w)return;let B=this.result;for(let M=p;M<x;M++)for(let S=_;S<v;S++){let R=B.length,O=!1;if(e.getConvexTrianglePillar(M,S,!1),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&O||(e.getConvexTrianglePillar(M,S,!0),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&O))return!0;if(B.length-R>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=e.elementSize,y=t.boundingSphereRadius,g=B_,m=L_,p=I_;jt.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-y)/f)-1,_=Math.ceil((p.x+y)/f)+1,v=Math.floor((p.y-y)/f)-1,P=Math.ceil((p.y+y)/f)+1;if(_<0||P<0||x>u.length||v>u[0].length)return;x<0&&(x=0),_<0&&(_=0),v<0&&(v=0),P<0&&(P=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),P>=u[0].length&&(P=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let w=[];e.getRectMinMax(x,v,_,P,w);let T=w[0],B=w[1];if(!(p.z-y>B||p.z+y<T))for(let M=x;M<_;M++)for(let S=v;S<P;S++){let R=!1;if(e.getConvexTrianglePillar(M,S,!1),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&R||(e.getConvexTrianglePillar(M,S,!0),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&R))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,d){let u=T_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let y=this.createContactEquation(c,a,e,t,l,h);u.normalize(),y.rj.copy(u),y.rj.scale(t.radius,y.rj),y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,d){let u=w_;u.set(0,0,1),a.quaternion.vmult(u,u);let f=E_;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);let m=A_;u.scale(u.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexParticle(t,e,n,i,r,o,a,c,l,h,d){let u=-1,f=R_,y=P_,g=null,m=0,p=C_;if(p.copy(i),p.vsub(n,p),r.conjugate(Dd),Dd.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let x=0,_=t.faces.length;x!==_;x++){let v=[t.worldVertices[t.faces[x][0]]],P=t.worldFaceNormals[x];i.vsub(v[0],Ud);let w=-P.dot(Ud);if(g===null||Math.abs(w)<Math.abs(g)){if(d)return!0;g=w,u=x,f.copy(P),m++}}if(u!==-1){let x=this.createContactEquation(c,a,e,t,l,h);f.scale(g,y),y.vadd(i,y),y.vsub(n,y),x.rj.copy(y),f.negate(x.ni),x.ri.set(0,0,0);let _=x.ri,v=x.rj;_.vadd(i,_),_.vsub(c.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=zv,f=Vv,y=kv,g=Hv,m=Wv,p=Gv,x=Zv,_=Ov,v=Dv,P=$v;jt.pointToLocalFrame(i,o,n,m);let w=t.radius;x.lowerBound.set(m.x-w,m.y-w,m.z-w),x.upperBound.set(m.x+w,m.y+w,m.z+w),e.getTrianglesInAABB(x,P);let T=Uv,B=t.radius*t.radius;for(let U=0;U<P.length;U++)for(let D=0;D<3;D++)if(e.getVertex(e.indices[P[U]*3+D],T),T.vsub(m,v),v.lengthSquared()<=B){if(_.copy(T),jt.pointToWorldFrame(i,o,_,T),T.vsub(n,v),d)return!0;let G=this.createContactEquation(a,c,t,e,l,h);G.ni.copy(v),G.ni.normalize(),G.ri.copy(G.ni),G.ri.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.copy(T),G.rj.vsub(c.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}for(let U=0;U<P.length;U++)for(let D=0;D<3;D++){e.getVertex(e.indices[P[U]*3+D],u),e.getVertex(e.indices[P[U]*3+(D+1)%3],f),f.vsub(u,y),m.vsub(f,p);let G=p.dot(y);m.vsub(u,p);let H=p.dot(y);if(H>0&&G<0&&(m.vsub(u,p),g.copy(y),g.normalize(),H=p.dot(g),g.scale(H,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),jt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,N.rj),jt.vectorToWorldFrame(o,N.ni,N.ni),jt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}let M=qv,S=Xv,R=Yv,O=Fv;for(let U=0,D=P.length;U!==D;U++){e.getTriangleVertices(P[U],M,S,R),e.getNormal(P[U],O),m.vsub(M,p);let G=p.dot(O);if(O.scale(G,p),m.vsub(p,p),G=p.distanceTo(m),Cn.pointInTriangle(p,M,S,R)&&G<t.radius){if(d)return!0;let H=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),jt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,H.rj),jt.vectorToWorldFrame(o,H.ni,H.ni),jt.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=new b,f=Bv;f.set(0,0,1),r.vmult(f,f);for(let y=0;y<e.vertices.length/3;y++){e.getVertex(y,u);let g=new b;g.copy(u),jt.pointToWorldFrame(i,o,g,u);let m=Lv;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h);x.ni.copy(f);let _=Nv;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},xs=new b,cr=new b,lr=new b,Cv=new b,Rv=new b,Pv=new we,Iv=new we;var Bv=new b,Lv=new b,Nv=new b,Fv=new b,Dv=new b,vA=new b,Uv=new b,Ov=new b,zv=new b,Vv=new b,kv=new b,Hv=new b,Wv=new b,Gv=new b,qv=new b,Xv=new b,Yv=new b,Zv=new Ue,$v=[],La=new b,Fd=new b,jv=new b,Jv=new b,Qv=new b;function Kv(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=jv;s[(r+1)%i].vsub(o,a);let c=Jv;a.cross(t,c);let l=Qv;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Na=new b,t_=new b,e_=new b,n_=new b,i_=[new b,new b,new b,new b,new b,new b],s_=new b,r_=new b,o_=new b,a_=new b,c_=new b,l_=new b,h_=new b,u_=new b,d_=new b,f_=new b,p_=new b,m_=new b,g_=new b,y_=new b,_A=new b,bA=new b,x_=new b,v_=new b,__=new b,b_=new b,M_=new b,S_=new b,w_=new b,E_=new b,A_=new b,T_=new b,Dd=new we,C_=new b,MA=new b,R_=new b,Ud=new b,P_=new b,I_=new b,B_=new b,L_=[0],N_=new b,F_=new b;var Zr=class{constructor(){C(this,"current");C(this,"previous");this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Od(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Od(e,h)}}};function Od(s,t){s.push((t&4294901760)>>16,t&65535)}var yh=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,Da=class{constructor(){C(this,"data",{keys:[]})}get(t,e){let n=yh(t,e);return this.data[n]}set(t,e,n){let i=yh(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=yh(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}};var Ua=class extends or{constructor(e={}){super();C(this,"dt");C(this,"allowSleep");C(this,"contacts");C(this,"frictionEquations");C(this,"quatNormalizeSkip");C(this,"quatNormalizeFast");C(this,"time");C(this,"stepnumber");C(this,"default_dt");C(this,"nextId");C(this,"gravity");C(this,"frictionGravity");C(this,"broadphase");C(this,"bodies");C(this,"hasActiveBodies");C(this,"solver");C(this,"constraints");C(this,"narrowphase");C(this,"collisionMatrix");C(this,"collisionMatrixPrevious");C(this,"bodyOverlapKeeper");C(this,"shapeOverlapKeeper");C(this,"contactmaterials");C(this,"contactMaterialTable");C(this,"defaultMaterial");C(this,"defaultContactMaterial");C(this,"doProfiling");C(this,"profile");C(this,"accumulator");C(this,"subsystems");C(this,"addBodyEvent");C(this,"removeBodyEvent");C(this,"idToBodyMap");C(this,"lastCallTime");this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new xa,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Pa,this.constraints=[],this.narrowphase=new Fa(this),this.collisionMatrix=new kr,this.collisionMatrixPrevious=new kr,this.bodyOverlapKeeper=new Zr,this.shapeOverlapKeeper=new Zr,this.contactmaterials=[],this.contactMaterialTable=new Da,this.defaultMaterial=new Ca("default"),this.defaultContactMaterial=new Aa(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,n){return this.contactMaterialTable.get(e.id,n.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let n=this.constraints.indexOf(e);n!==-1&&this.constraints.splice(n,1)}rayTest(e,n,i){i instanceof xi?this.raycastClosest(e,n,{skipBackfaces:!0},i):this.raycastAll(e,n,{skipBackfaces:!0},i)}raycastAll(e,n,i={},r){return i.mode=Cn.ALL,i.from=e,i.to=n,i.callback=r,xh.intersectWorld(this,i)}raycastAny(e,n,i={},r){return i.mode=Cn.ANY,i.from=e,i.to=n,i.result=r,xh.intersectWorld(this,i)}raycastClosest(e,n,i={},r){return i.mode=Cn.CLOSEST,i.from=e,i.to=n,i.result=r,xh.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ft&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let n=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let o=0;o!==i.length;o++)i[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let n=this.bodies;for(let i=0;i<n.length;i++){let r=n[i].shapes;for(let o=0;o<r.length;o++){let a=r[o];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let n=this.contactmaterials.indexOf(e);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e=1/60,n=10){let i=Oe.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,n);else{let r=i-this.lastCallTime;this.step(e,r,n)}this.lastCallTime=i}step(e,n,i=10){if(n===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=n;let r=Oe.now(),o=0;for(;this.accumulator>=e&&o<i&&(this.internalStep(e),this.accumulator-=e,o++,!(Oe.now()-r>e*1e3)););this.accumulator=this.accumulator%e;let a=this.accumulator/e;for(let c=0;c!==this.bodies.length;c++){let l=this.bodies[c];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=n}}internalStep(e){this.dt=e;let n=this,i=this,r=this.contacts,o=V_,a=k_,c=this.bodies.length,l=this.bodies,h=this.solver,d=this.gravity,u=this.doProfiling,f=this.profile,y=Ft.DYNAMIC,g=-1/0,m=this.constraints,p=z_,x=d.length(),_=d.x,v=d.y,P=d.z,w=0;for(u&&(g=Oe.now()),w=0;w!==c;w++){let W=l[w];if(W.type===y){let N=W.force,$=W.mass;N.x+=$*_,N.y+=$*v,N.z+=$*P}}for(let W=0,N=this.subsystems.length;W!==N;W++)this.subsystems[W].update();u&&(g=Oe.now()),o.length=0,a.length=0,this.broadphase.collisionPairs(this,o,a),u&&(f.broadphase=Oe.now()-g);let T=m.length;for(w=0;w!==T;w++){let W=m[w];if(!W.collideConnected)for(let N=o.length-1;N>=0;N-=1)(W.bodyA===o[N]&&W.bodyB===a[N]||W.bodyB===o[N]&&W.bodyA===a[N])&&(o.splice(N,1),a.splice(N,1))}this.collisionMatrixTick(),u&&(g=Oe.now());let B=O_,M=r.length;for(w=0;w!==M;w++)B.push(r[w]);r.length=0;let S=this.frictionEquations.length;for(w=0;w!==S;w++)p.push(this.frictionEquations[w]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(o,a,this,r,B,this.frictionEquations,p),u&&(f.narrowphase=Oe.now()-g),u&&(g=Oe.now()),w=0;w<this.frictionEquations.length;w++)h.addEquation(this.frictionEquations[w]);let R=r.length;for(let W=0;W!==R;W++){let N=r[W],$=N.bi,j=N.bj,gt=N.si,Tt=N.sj,rt;$.material&&j.material?rt=this.getContactMaterial($.material,j.material)||this.defaultContactMaterial:rt=this.defaultContactMaterial;let J=rt.friction;if($.material&&j.material&&($.material.friction>=0&&j.material.friction>=0&&(J=$.material.friction*j.material.friction),$.material.restitution>=0&&j.material.restitution>=0&&(N.restitution=$.material.restitution*j.material.restitution)),h.addEquation(N),$.allowSleep&&$.type===Ft.DYNAMIC&&$.sleepState===Ft.SLEEPING&&j.sleepState===Ft.AWAKE&&j.type!==Ft.STATIC){let nt=j.velocity.lengthSquared()+j.angularVelocity.lengthSquared(),yt=j.sleepSpeedLimit**2;nt>=yt*2&&($.wakeUpAfterNarrowphase=!0)}if(j.allowSleep&&j.type===Ft.DYNAMIC&&j.sleepState===Ft.SLEEPING&&$.sleepState===Ft.AWAKE&&$.type!==Ft.STATIC){let nt=$.velocity.lengthSquared()+$.angularVelocity.lengthSquared(),yt=$.sleepSpeedLimit**2;nt>=yt*2&&(j.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set($,j,!0),this.collisionMatrixPrevious.get($,j)||($r.body=j,$r.contact=N,$.dispatchEvent($r),$r.body=$,j.dispatchEvent($r)),this.bodyOverlapKeeper.set($.id,j.id),this.shapeOverlapKeeper.set(gt.id,Tt.id)}for(this.emitContactEvents(),u&&(f.makeContactConstraints=Oe.now()-g,g=Oe.now()),w=0;w!==c;w++){let W=l[w];W.wakeUpAfterNarrowphase&&(W.wakeUp(),W.wakeUpAfterNarrowphase=!1)}for(T=m.length,w=0;w!==T;w++){let W=m[w];W.update();for(let N=0,$=W.equations.length;N!==$;N++){let j=W.equations[N];h.addEquation(j)}}h.solve(e,this),u&&(f.solve=Oe.now()-g),h.removeAllEquations();let O=Math.pow;for(w=0;w!==c;w++){let W=l[w];if(W.type&y){let N=O(1-W.linearDamping,e),$=W.velocity;$.scale(N,$);let j=W.angularVelocity;if(j){let gt=O(1-W.angularDamping,e);j.scale(gt,j)}}}this.dispatchEvent(U_),u&&(g=Oe.now());let D=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(w=0;w!==c;w++)l[w].integrate(e,D,G);this.clearForces(),this.broadphase.dirty=!0,u&&(f.integrate=Oe.now()-g),this.stepnumber+=1,this.dispatchEvent(D_);let H=!0;if(this.allowSleep)for(H=!1,w=0;w!==c;w++){let W=l[w];W.sleepTick(this.time),W.sleepState!==Ft.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((e||n)&&this.bodyOverlapKeeper.getDiff(_i,bi),e){for(let o=0,a=_i.length;o<a;o+=2)jr.bodyA=this.getBodyById(_i[o]),jr.bodyB=this.getBodyById(_i[o+1]),this.dispatchEvent(jr);jr.bodyA=jr.bodyB=null}if(n){for(let o=0,a=bi.length;o<a;o+=2)Jr.bodyA=this.getBodyById(bi[o]),Jr.bodyB=this.getBodyById(bi[o+1]),this.dispatchEvent(Jr);Jr.bodyA=Jr.bodyB=null}_i.length=bi.length=0;let i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(_i,bi),i){for(let o=0,a=_i.length;o<a;o+=2){let c=this.getShapeById(_i[o]),l=this.getShapeById(_i[o+1]);Mi.shapeA=c,Mi.shapeB=l,c&&(Mi.bodyA=c.body),l&&(Mi.bodyB=l.body),this.dispatchEvent(Mi)}Mi.bodyA=Mi.bodyB=Mi.shapeA=Mi.shapeB=null}if(r){for(let o=0,a=bi.length;o<a;o+=2){let c=this.getShapeById(bi[o]),l=this.getShapeById(bi[o+1]);Si.shapeA=c,Si.shapeB=l,c&&(Si.bodyA=c.body),l&&(Si.bodyB=l.body),this.dispatchEvent(Si)}Si.bodyA=Si.bodyB=Si.shapeA=Si.shapeB=null}}clearForces(){let e=this.bodies,n=e.length;for(let i=0;i!==n;i++){let r=e[i],o=r.force,a=r.torque;r.force.set(0,0,0),r.torque.set(0,0,0)}}},WA=new Ue;var xh=new Cn,Oe=globalThis.performance||{};if(!Oe.now){let s=Date.now();Oe.timing&&Oe.timing.navigationStart&&(s=Oe.timing.navigationStart),Oe.now=()=>Date.now()-s}var GA=new b,D_={type:"postStep"},U_={type:"preStep"},$r={type:Ft.COLLIDE_EVENT_NAME,body:null,contact:null},O_=[],z_=[],V_=[],k_=[],_i=[],bi=[],jr={type:"beginContact",bodyA:null,bodyB:null},Jr={type:"endContact",bodyA:null,bodyB:null},Mi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Si={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var ka=window.Ruina||null,At=s=>document.getElementById(s),Mn={get(s,t){try{let e=localStorage.getItem("ruina."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("ruina."+s,JSON.stringify(t))}catch{}}},Le=Math.random,ut=(s,t)=>s+(t-s)*Le(),Ms=At("c"),ni=new ta({canvas:Ms,antialias:!0,powerPreference:"high-performance"});ni.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));ni.shadowMap.enabled=!0;ni.shadowMap.type=Ql;ni.toneMapping=Kl;ni.toneMappingExposure=1.05;var he=new na;he.fog=new ea(13621734,70,220);var rn=new je(50,1,.1,600),so=new Dr(400,32,16);so.setAttribute("color",new Se(new Float32Array(so.attributes.position.count*3),3));he.add(new Xt(so,new hs({vertexColors:!0,side:Je,fog:!1})));var za=new ua(14412031,6969925,1.1);he.add(za);var ti=new fa(16773597,2.6);ti.position.set(30,45,20);ti.castShadow=!0;ti.shadow.mapSize.set(1536,1536);Object.assign(ti.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});ti.shadow.bias=-4e-4;ti.shadow.normalBias=.02;he.add(ti);var W_={day:{top:4026291,mid:11126502,hor:15980984,glow:16774364,sun:16773597,si:2.6,pos:[30,45,20],sky:14412031,gnd:6969925,hi:1.1,fog:13621734,far:220,exp:1.05},dusk:{top:1318213,mid:6115206,hor:15895118,glow:16761466,sun:16749653,si:1.7,pos:[44,11,-8],sky:10133460,gnd:4864582,hi:.95,fog:9269126,far:170,exp:1.12}},zd="";function Yd(s){if(s===zd)return;zd=s;let t=W_[s],e=new Lt(t.top),n=new Lt(t.mid),i=new Lt(t.hor),r=new Lt(t.glow),o=new Lt,a=new L(...t.pos).setY(0).normalize(),c=so.attributes.position,l=so.attributes.color,h=new L;for(let d=0;d<c.count;d++){h.fromBufferAttribute(c,d).divideScalar(400);let u=h.y;if(u>.15?o.copy(n).lerp(e,Math.min(1,(u-.15)/.6)):o.copy(i).lerp(n,Math.max(0,(u+.05)/.2)),s!=="day"){let f=Math.max(0,h.x*a.x+h.z*a.z)**6*Math.max(0,1-Math.abs(u-.03)*2.2);o.lerp(r,Math.min(1,f*1.3))}l.setXYZ(d,o.r,o.g,o.b)}l.needsUpdate=!0,ti.color.set(t.sun),ti.intensity=t.si,ti.position.set(...t.pos),za.color.set(t.sky),za.groundColor.set(t.gnd),za.intensity=t.hi,he.fog.color.set(t.fog),he.fog.far=t.far,ni.toneMappingExposure=t.exp}Yd("day");var Ai=new Or(16756832,0,40,1.6);he.add(Ai);var be=new Ua({gravity:new b(0,-9.82,0),allowSleep:!0});be.broadphase=new ba(be);be.solver.iterations=9;be.defaultContactMaterial.friction=.6;be.defaultContactMaterial.restitution=.04;var Zd={brick:{color:11818301,dens:18,v:.1},concrete:{color:10724253,dens:24,v:.05},wood:{color:10119742,dens:7,v:.1},steel:{color:5989748,dens:40,v:.04,metal:!0},glass:{color:11132146,dens:10,v:.02,glass:!0},stone:{color:13481611,dens:20,v:.08},car:{color:14173754,dens:6,v:.25},white:{color:15657439,dens:18,v:.04},red:{color:12859180,dens:18,v:.06},lamp:{color:16773304,dens:6,v:0,glow:!0}},wi=new Wi(1,1,1),ji={},Te=[],We=null,Ge=null;function G_(s){let t=Zd[s];return t.glass?new Ie({color:16777215,roughness:.05,metalness:.1,transparent:!0,opacity:.38,depthWrite:!1}):t.glow?new Ie({color:16777215,roughness:.4,emissive:16762986,emissiveIntensity:2.2}):new Ie({color:16777215,roughness:t.metal?.45:.85,metalness:t.metal?.6:0})}var Mh=[];function Zt(s,t,e,n,i,r,o,a=0){Mh.push({type:s,x:t,y:e,z:n,sx:i,sy:r,sz:o,ry:a})}function q_(){let s={};for(let n of Mh)(s[n.type]=s[n.type]||[]).push(n);let t=new hn,e=new Lt;for(let n in s){let i=s[n],r=Zd[n],o=new oa(wi,G_(n),i.length);o.castShadow=!r.glass,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(Vr),he.add(o),ji[n]=o,i.forEach((a,c)=>{let l=a.sx*a.sy*a.sz,h=new Ft({mass:Math.max(.3,l*r.dens),shape:new qi(new b(a.sx/2,a.sy/2,a.sz/2))});h.position.set(a.x,a.y,a.z),h.quaternion.setFromEuler(0,a.ry,0),h.sleepSpeedLimit=.22,h.sleepTimeLimit=.5,h.linearDamping=.03,h.angularDamping=.08,be.addBody(h),h.sleep();let d={body:h,type:n,mesh:o,idx:c,size:new L(a.sx,a.sy,a.sz),start:new L(a.x,a.y,a.z),startQ:h.quaternion.clone(),gone:!1,glass:!!r.glass};h.userData=d,d.glass&&h.addEventListener("collide",ub),h.addEventListener("collide",db),Te.push(d);let u=new Lt(r.color),f=1+(Le()-.5)*2*r.v;n==="car"&&u.setHSL(Le(),.55,.5),e.setRGB(u.r*f,u.g*f,u.b*f),o.setColorAt(c,e),ro(d,t)}),o.instanceColor.needsUpdate=!0}Mh=[]}var vs=new se,Sh=new L,Ha=new hn,$d=new L(0,0,0);function ro(s){s.gone?vs.compose(Sh.set(0,-999,0),Ha.identity(),$d):vs.compose(Sh.copy(s.body.position),Ha.copy(s.body.quaternion),s.size),s.mesh.setMatrixAt(s.idx,vs)}var Oa=new Ie({color:8165975,roughness:1}),wh=new Ie({color:7035461,roughness:1}),X_=new Ie({color:7827562,roughness:.95,flatShading:!0}),Y_=new Ie({color:4875664,emissive:2763861,roughness:.22,metalness:.3,transparent:!0,opacity:.92});function Z_(s,t){We=new Ft({type:Ft.STATIC,mass:0}),Ge=new Tn,he.add(Ge);let e=(n,i,r,o,a,c,l)=>{We.addShape(new qi(new b(n,i,r)),new b(o,a,c));let h=new Xt(wi,l);h.scale.set(n*2,i*2,r*2),h.position.set(o,a,c),h.receiveShadow=!0,Ge.add(h)};if(s){e(95,5,100,-104,-5,0,Oa),e(95,5,100,104,-5,0,Oa),e(9,2,100,0,-8,0,wh);let n=new Xt(new us(18,200),new Ie({color:4163256,roughness:.15,metalness:.1,transparent:!0,opacity:.78}));n.rotation.x=-Math.PI/2,n.position.y=-3.2,Ge.add(n)}else if(t){e(11,5,9,0,-5,0,Oa),e(150,2,150,0,-7,0,wh);let n=new Xt(new us(600,600),Y_);n.rotation.x=-Math.PI/2,n.position.y=-1.4,Ge.add(n),Ge.userData.water=n;let i=new ca(1,0);for(let r=0;r<34;r++){let o=r/34*Math.PI*2,a=Math.cos(o),c=Math.sin(o),l=1/Math.max(Math.abs(a)/11,Math.abs(c)/9),h=new Xt(i,X_),d=ut(1.1,2.1);h.position.set(a*l*ut(.97,1.08),ut(-1.6,-.75)-d*.25,c*l*ut(.97,1.08)),h.scale.set(d*ut(.9,1.4),d*ut(.6,.9),d*ut(.9,1.4)),h.rotation.set(Le()*3,Le()*3,Le()*3),h.castShadow=h.receiveShadow=!0,Ge.add(h)}}else e(150,5,150,0,-5,0,Oa);be.addBody(We)}var _s=[{id:"pyramid",name:"\u041F\u0456\u0440\u0430\u043C\u0456\u0434\u0430",desc:"\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430: \u043A\u0430\u043C'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438 \u0434\u043E \u043D\u0435\u0431\u0430",ammo:{ball:6,bomb:3,meteor:0,quake:0,crane:1,rocket:1},goal:.6,cam:[24,14,3],build:$_},{id:"house",name:"\u0411\u0443\u0434\u0438\u043D\u043E\u043A",desc:"\u0426\u0435\u0433\u043B\u0430, \u0431\u0435\u0442\u043E\u043D\u043D\u0456 \u043F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0456 \u0441\u043A\u043B\u043E",ammo:{ball:5,bomb:2,meteor:1,quake:0,crane:1,rocket:1},goal:.7,cam:[24,9,3.5],build:j_},{id:"tower",name:"\u0412\u0435\u0436\u0430",desc:"\u041A\u0440\u0443\u0433\u043B\u0430 \u0446\u0435\u0433\u043B\u044F\u043D\u0430 \u0432\u0435\u0436\u0430 \u0437 \u0437\u0443\u0431\u0446\u044F\u043C\u0438",ammo:{ball:5,bomb:2,meteor:1,quake:1,crane:1,rocket:1},goal:.7,cam:[26,10,4.5],build:J_},{id:"bridge",name:"\u041C\u0456\u0441\u0442",desc:"\u0421\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0430\u043B\u043A\u0438 \u043D\u0430\u0434 \u0440\u0456\u0447\u043A\u043E\u044E",ammo:{ball:4,bomb:3,meteor:1,quake:0,crane:1,rocket:2},goal:.65,cam:[26,9,-1],build:Q_,river:!0},{id:"sky",name:"\u0425\u043C\u0430\u0440\u043E\u0447\u043E\u0441",desc:"\u0422\u043E\u043D\u043A\u0456 \u043A\u043E\u043B\u043E\u043D\u0438, \u0432\u0430\u0436\u043A\u0456 \u043F\u043E\u0432\u0435\u0440\u0445\u0438",ammo:{ball:3,bomb:2,meteor:1,quake:1,crane:1,rocket:2},goal:.7,cam:[30,14,9],build:K_},{id:"castle",name:"\u0417\u0430\u043C\u043E\u043A",desc:"\u041C\u0443\u0440\u0438, \u0432\u0435\u0436\u0456 \u0439 \u0431\u0456\u0439\u043D\u0438\u0446\u0456",ammo:{ball:6,bomb:3,meteor:2,quake:1,crane:2,rocket:2},goal:.7,cam:[34,16,3],build:tb},{id:"lighthouse",name:"\u041C\u0430\u044F\u043A",desc:"\u0421\u043C\u0443\u0433\u0430\u0441\u0442\u0430 \u0432\u0435\u0436\u0430 \u043D\u0430 \u0441\u043A\u0435\u043B\u0456 \u0432 \u0441\u0443\u0442\u0456\u043D\u043A\u0430\u0445 \u2014 \u043F\u043E\u0433\u0430\u0441\u0456\u0442\u044C \u0432\u043E\u0433\u043E\u043D\u044C",ammo:{ball:5,bomb:2,meteor:1,quake:1,crane:1,rocket:2},goal:.65,cam:[27,11,5],build:eb,sea:!0,env:"dusk"}];function $_(){for(let e=0;e<8;e++){let n=8-e,i=(n-1)*1.2/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++)Zt("stone",r*1.2-i,e*1.2+1.2/2,o*1.2-i,1.2*.99,1.2*.99,1.2*.99)}}function j_(){let e=i=>{let r=i*3.3;for(let c=0;c<6;c++){let l=r+c*.5+.25,h=c%2,d=c>=2&&c<=4,u=h?[-3,-2,-1,0,1,2,3]:[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5];for(let y of[2.75,-2.75])for(let g of u)d&&(Math.abs(g+2)<.6||Math.abs(g-2)<.6)||i===0&&y>0&&c<=4&&Math.abs(g)<.6||Zt("brick",g,l,y,.98,.49,.5);let f=h?[-2.5,-1.5,-.5,.5,1.5,2.5]:[-2,-1,0,1,2];for(let y of[3.75,-3.75])for(let g of f)d&&Math.abs(g)<.6||Zt("brick",y,l,g,.5,.49,.98)}let o=r+3.5*.5;for(let c of[2.75,-2.75])for(let l of[-2,2])Zt("glass",l,o,c,.95,1.45,.08);for(let c of[3.75,-3.75])Zt("glass",c,o,0,.08,1.45,.95);let a=r+6*.5+.15;for(let c of[-2,2])for(let l of[-1.5,1.5])Zt("concrete",c,a,l,4,.3,3,0)};e(0),e(1);let n=2*(6*.5+.3);for(let i=0;i<4;i++)for(let[r,o]of[[2.2,-1.2],[2.8,-1.2],[2.2,-.6],[2.8,-.6]])Zt("brick",r,n+i*.4+.2,o,.58,.39,.58)}function J_(){let i=2*Math.PI*2.9000000000000004/18*.98;for(let o=0;o<17;o++)for(let a=0;a<18;a++){if(o===16&&a%2||o>=2&&o<=5&&a===0||o>=10&&o<=12&&(a===5||a===14))continue;let c=(a+o%2*.5)/18*Math.PI*2;Zt("brick",Math.cos(c)*3.2,o*.5+.5/2,Math.sin(c)*3.2,i,.5*.98,.55,-c+Math.PI/2)}let r=17*.5-.5;for(let o=-2;o<=2;o++)Zt("wood",o*1.1,r-.1,0,1.05,.2,5.4)}function Q_(){for(let t of[-3,3])for(let e=0;e<6;e++)Zt("concrete",t,-6+e+.5,0,2,.98,3.2);let s=[[-10.5,-3.1],[-2.9,2.9],[3.1,10.5]];for(let[t,e]of s)for(let n of[-1.2,1.2])Zt("steel",(t+e)/2,.2,n,e-t,.4,.45);for(let t=-10.2;t<=10.2;t+=.62)Zt("wood",t,.48,0,.58,.15,3.4);for(let t=-9.9;t<=9.9;t+=1.65)for(let e of[-1.6,1.6])Zt("wood",t,1.06,e,.14,1,.14);for(let t=-9.9+.825;t<9.9;t+=1.65)for(let e of[-1.6,1.6])Zt("wood",t,1.62,e,1.6,.12,.14);Zt("car",-5,1.2,.6,2.2,1.2,1.1),Zt("car",4.5,1.2,-.6,2.2,1.2,1.1)}function K_(){let n=0;for(let i=0;i<6;i++){for(let r of[-3,0,3])for(let o of[-3,0,3])r===0&&o===0||Zt("steel",r,n+2.7/2,o,.4,2.7,.4);for(let[r,o,a,c]of[[-1.5,-3,2.5,.06],[1.5,-3,2.5,.06],[-1.5,3,2.5,.06],[1.5,3,2.5,.06],[-3,-1.5,.06,2.5],[-3,1.5,.06,2.5],[3,-1.5,.06,2.5],[3,1.5,.06,2.5]])Zt("glass",r,n+2.7/2,o,a,2.7*.92,c);n+=2.7;for(let r of[-1.6,1.6])for(let o of[-1.6,1.6])Zt("concrete",r,n+.15,o,3.16,.3,3.16);n+=.3}Zt("steel",0,n+1.5,0,.25,3,.25)}function tb(){for(let e=0;e<3;e++){let n=e%2?[-3.75,-2.25,-.75,.75,2.25,3.75]:[-3.75,-2.25,-.75,.75,2.25,3.75];for(let i of n)for(let r of[-7,7])r>0&&e<2&&Math.abs(i)<1||Zt("stone",i,e+.5,r,1.5*.98,.98,1);for(let i of n)for(let r of[-7,7])Zt("stone",r,e+.5,i,1,.98,1.5*.98)}for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])Zt("stone",e,3.4,n,.8,.8,.9);for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])Zt("stone",n,3.4,e,.9,.8,.8);for(let e of[-7,7])for(let n of[-7,7]){for(let i=0;i<6;i++){let r=i%2?[[-1,-.5,2,1],[1,.5,2,1],[.5,-1,1,2],[-.5,1,1,2]]:[[-.5,-1,2,1],[.5,1,2,1],[1,-.5,1,2],[-1,.5,1,2]];for(let[o,a,c,l]of r)Zt("stone",e+o,i+.5,n+a,c*.98,.98,l*.98)}for(let[i,r]of[[-1,-1],[1,1],[-1,1],[1,-1]])Zt("stone",e+i,6.4,n+r,.7,.8,.7)}for(let e=0;e<3;e++)Zt("wood",0,e*1.2+.6,0,1.2-e*.3,1.18,1.2-e*.3)}function eb(){for(let c=0;c<18;c++){let l=2.7-c*.045,h=2*Math.PI*(l-.3)/14*.98,d=Math.floor(c/3)%2?"red":"white";for(let u=0;u<14;u++){if(c<=3&&u===2||(c===8||c===13)&&(u===5||u===12))continue;let f=(u+c%2*.5)/14*Math.PI*2;Zt(d,Math.cos(f)*l,c*.55+.55/2,Math.sin(f)*l,h,.55*.98,.55,-f+Math.PI/2)}}let r=18*.55;for(let c of[-1.4,0,1.4])Zt("steel",c,r+.125,0,1.38,.25,4.3);r+=.25,Zt("steel",0,r+.2,0,.5,.4,.5),Zt("lamp",0,r+.4+.33,0,.5,.66,.5);let o=1.3,a=1.05;for(let c=0;c<8;c++){let l=(c+.5)/8*Math.PI*2;Zt("glass",Math.cos(l)*a,r+o/2,Math.sin(l)*a,2*Math.PI*a/8*.95,o,.06,-l+Math.PI/2)}r+=o,Zt("steel",0,r+.07,0,2.5,.14,2.5),Zt("red",0,r+.14+.15,0,1.6,.3,1.6),Zt("red",0,r+.44+.13,0,.9,.26,.9),Zt("steel",0,r+.7+.3,0,.12,.6,.12);for(let[c,l]of[[-6.5,3.5],[-7.4,2.6],[-6.9,4.6]])Zt("wood",c,.45,l,.8,.9,.8,Le())}var re=null;function nb(){return new _n({transparent:!0,depthWrite:!1,blending:Cr,side:An,fog:!1,uniforms:{k:{value:1},len:{value:70}},vertexShader:"uniform float len; varying float vT; varying vec3 vN; varying vec3 vV; void main(){ vT = position.x / len; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float k; varying float vT; varying vec3 vN; varying vec3 vV; void main(){ float e = pow(abs(dot(vN, vV)), 1.5); float a = pow(1.0 - vT, 1.8) * e * 0.42 * k; gl_FragColor = vec4(1.0, 0.86, 0.55, a); }"})}function ib(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,240,200,1)"),e.addColorStop(.25,"rgba(255,200,110,0.55)"),e.addColorStop(1,"rgba(255,160,60,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Fr(s)}function sb(){let s=Te.find(c=>c.type==="lamp");if(!s)return;let t=new Tn,e=70,n=new nr(7,e,24,1,!0);n.translate(0,-e/2,0),n.rotateZ(Math.PI/2);let i=nb(),r=new Tn;t.add(r);for(let c of[0,Math.PI]){let l=new Xt(n,i);l.rotation.y=c,l.rotation.z=-.06,l.renderOrder=5,r.add(l)}let o=new sa(new Nr({map:ib(),blending:Cr,depthWrite:!1,transparent:!0,fog:!1}));o.scale.setScalar(4.5),t.add(o);let a=new Or(16760944,30,16,1.4);t.add(a),t.position.copy(s.start),he.add(t),re={g:t,rot:r,mat:i,sprite:o,light:a,geo:n,lamp:s,k:1,out:!1,ang:0}}function rb(){re&&(he.remove(re.g),re.geo.dispose(),re.mat.dispose(),re.sprite.material.map.dispose(),re.sprite.material.dispose(),re=null)}var Vd=new se,Qr=new L,ob=new hn,ab=new L;function kd(s,t){if(!re)return;let e=re.lamp;e.mesh.getMatrixAt(e.idx,Vd),Vd.decompose(Qr,ob,ab);let n=Qr.y>-500&&Qr.distanceTo(e.start)<.45;n?re.k=Math.min(1,re.k+s*3):re.k=Math.max(0,re.k-s*.9)*(Le()<.25?.3:1),t&&!n&&!re.out&&(re.out=!0,pn("\u041C\u0430\u044F\u043A \u0437\u0433\u0430\u0441!"),Re.glass(),ii(30)),t&&n&&(re.out=!1),re.ang+=s*.75,re.rot.rotation.y=re.ang,Qr.y>-500&&re.g.position.copy(Qr),re.mat.uniforms.k.value=re.k,re.rot.visible=re.k>.01,re.sprite.material.opacity=re.k,re.light.intensity=30*re.k,e.mesh.material.emissiveIntensity=.15+2.05*re.k}var Ae=null,Pn=!1,fn={},qe="ball",Ee="menu",Wa=0,Ga=0,Ss=!1,In=[],Qn=[],Be=null,Xe=0,ei=0,qt={theta:.6,phi:1.15,r:26,target:new L(0,3,0)};function cb(){pt&&ja();for(let s of Te)be.removeBody(s.body);for(let s of In)be.removeBody(s.body),he.remove(s.mesh);for(let s of Qn)he.remove(s.mesh);for(let s of Object.values(ji))he.remove(s),s.material.dispose(),s.dispose();df(),af(),rb(),We&&be.removeBody(We),Ge&&he.remove(Ge),Te=[],ji={},In=[],Qn=[],Be=null,Dt.buf=null,Dt.count=0}function bs(s,t){cb(),mn.clear(),Xe=0,Ae=s,Pn=!!t,Ss=!1,Ga=0,Wa=0,ei=0,fn={...s.ammo},Pn&&(fn={ball:1/0,bomb:1/0,meteor:1/0,quake:1/0,crane:1/0,rocket:1/0}),Z_(!!s.river,!!s.sea),Yd(s.env||"day"),s.build(),q_(),Sb(),sb(),qt.r=s.cam[0],qt.target.set(0,s.cam[2],0),qt.theta=.55,qt.phi=Math.atan2(s.cam[0],s.cam[1]*1.3),qe="ball",fn.ball||(qe=Object.keys(fn).find(e=>fn[e]>0)||"ball"),Ee="play",At("menu").hidden=!0,At("result").hidden=!0,At("hud").hidden=!1,At("lvname").textContent=s.name+(Pn?" \xB7 \u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C":""),ws(),vf(0),Mn.get("hinted",!1)||(At("hint").hidden=!1,Mn.set("hinted",!0),setTimeout(()=>At("hint").hidden=!0,5e3))}var lb=new L,Hd=new we;function qa(){if(!Te.length)return 0;let s=0;for(let t of Te){if(t.gone){s++;continue}let e=t.body.position,n=lb.set(e.x-t.start.x,e.y-t.start.y,e.z-t.start.z).length();t.startQ.conjugate(Hd);let i=Hd.mult(t.body.quaternion),r=2*Math.acos(Math.min(1,Math.abs(i.w)));(n>.9||r>.55)&&s++}return s/Te.length}var hb=[{id:"ball",name:"\u042F\u0434\u0440\u043E",icon:"\u25CF"},{id:"bomb",name:"\u0411\u043E\u043C\u0431\u0430",icon:"\u2738"},{id:"meteor",name:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",icon:"\u2604"},{id:"quake",name:"\u0417\u0435\u043C\u043B\u0435\u0442\u0440\u0443\u0441",icon:"\u224B"},{id:"crane",name:"\u0411\u0430\u0431\u0430",icon:"\u26B2"},{id:"rocket",name:"\u0420\u0430\u043A\u0435\u0442\u0430",icon:"\u27B6"}],Xa=new Dr(1,24,16),Ya=new Ie({color:2829619,roughness:.35,metalness:.7}),jd=new Ie({color:4860700,roughness:.9,emissive:16734746,emissiveIntensity:1.4}),Jd=new Ie({color:14232363,roughness:.4,emissive:16719904,emissiveIntensity:.6}),eo=new pa;function Qd(s,t){let e=new Nt(s/innerWidth*2-1,-(t/innerHeight)*2+1);eo.setFromCamera(e,rn);let n=Object.values(ji).concat(Ge?Ge.children:[]);for(let r of Object.values(ji))r.computeBoundingSphere();let i=eo.intersectObjects(n,!1);return{ray:eo.ray.clone(),hit:i[0]||null}}function Rh(s,t){if(Ee!=="play"||Ss)return;if(qe==="rocket"){ce||(fn.rocket>0?of(s,t):pn("\u0420\u0430\u043A\u0435\u0442\u0438 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0443 \u0437\u0431\u0440\u043E\u044E"));return}if(qe==="crane"){if($t&&!$t.leaving)return;fn.crane>0?Ph():pn("\u041A\u0440\u0430\u043D \u0443\u0436\u0435 \u043F\u043E\u0457\u0445\u0430\u0432 \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0443 \u0437\u0431\u0440\u043E\u044E");return}if(!(fn[qe]>0)){pn("\u0426\u0435\u0439 \u043D\u0430\u0431\u0456\u0439 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\u0441\u044F \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0438\u0439");return}let{ray:e,hit:n}=Qd(s,t);if(qe==="ball"){ur(),Re.shoot();let i=e.direction.clone(),r=rn.position.clone().addScaledVector(i,2).add(new L(0,-.6,0));Ei("shot",r.x,r.y,r.z,0),Wd(r,i.multiplyScalar(46),.5,90,Ya)}else if(qe==="bomb"){if(!n){pn("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0431\u0443\u0434\u0456\u0432\u043B\u0456, \u0449\u043E\u0431 \u0437\u0430\u043A\u043B\u0430\u0441\u0442\u0438 \u0431\u043E\u043C\u0431\u0443");return}ur();let i=new Xt(Xa,Jd);i.scale.setScalar(.35),i.position.copy(n.point),he.add(i),Qn.push({mesh:i,t:.9,pos:n.point.clone()}),Re.tick(),Ei("tick",n.point.x,n.point.y,n.point.z,0)}else if(qe==="meteor"){let i=n?n.point:e.at(30,new L);ur(),Re.whoosh();let r=new L(i.x+8,55,i.z+4);Ei("whoosh",i.x,i.y,i.z,0);let o=i.clone().sub(r).normalize().multiplyScalar(38),a=Wd(r,o,1.5,900,jd);a.meteor=!0}else if(qe==="quake"){ur(),Be={t:0,dur:4.5,a:.28,f:2.3,dir:Le()*Math.PI},We.type=Ft.KINEMATIC;for(let i of Te)i.body.wakeUp();Re.rumble(),ii(80),Ei("quake",0,0,0,Be.dur)}}function Ph(){ur(),bb(),qt.r=Math.max(qt.r,Math.min(70,Ae.cam[0]*1.35)),qt.phi=Math.min(qt.phi,1.2),pn("\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0431\u0430\u0431\u0430 \u043F\u043E\u043B\u0435\u0442\u0438\u0442\u044C \u0441\u043B\u0456\u0434\u043E\u043C. \u041A\u0430\u043C\u0435\u0440\u0430 \u2014 \u0434\u0432\u043E\u043C\u0430 \u043F\u0430\u043B\u044C\u0446\u044F\u043C\u0438")}function ur(){fn[qe]!==1/0&&fn[qe]--,Ga++,Wa=ei,ws()}function Wd(s,t,e,n,i){let r=new Ft({mass:n,shape:new Yi(e),linearDamping:.01});r.position.set(s.x,s.y,s.z),r.velocity.set(t.x,t.y,t.z),r.allowSleep=!1;let o=new Xt(Xa,i);o.scale.setScalar(e),o.castShadow=!0,he.add(o);let a={body:r,mesh:o,age:0};if(r.addEventListener("collide",c=>{if(a.meteor&&!a.boomed){a.boomed=!0;let l=r.position;Za(new L(l.x,l.y,l.z),7.5,22)}else{let l=c.contact.getImpactVelocityAlongNormal();Math.abs(l)>8&&(Re.thud(Math.min(1,Math.abs(l)/40)),ii(15))}}),be.addBody(r),In.push(a),In.length>10){let c=In.shift();be.removeBody(c.body),he.remove(c.mesh)}return a}function Za(s,t,e){for(let n of Te){if(n.gone)continue;let i=n.body.position,r=i.x-s.x,o=i.y-s.y,a=i.z-s.z,c=Math.hypot(r,o,a);if(c>t)continue;if(n.glass&&c<t*.8){Kd(n);continue}let l=e*(1-c/t),h=1/Math.max(.3,c);n.body.wakeUp(),n.body.applyImpulse(new b(r*h*l*n.body.mass,(o*h+.45)*l*n.body.mass,a*h*l*n.body.mass)),n.body.angularVelocity.set(ut(-1,1)*l*.4,ut(-1,1)*l*.4,ut(-1,1)*l*.4)}for(let n of In){let i=n.body.position,r=Math.hypot(i.x-s.x,i.y-s.y,i.z-s.z);r<t&&r>.1&&n.body.applyImpulse(new b((i.x-s.x)/r*n.body.mass*4,2*n.body.mass,(i.z-s.z)/r*n.body.mass*4))}gf(s,t),Ei("boom",s.x,s.y,s.z,t),Ai.position.copy(s),Ai.intensity=900,Xe=Math.min(1.4,Xe+t/6),Re.boom(Math.min(1,t/7)),ii(60)}function Kd(s){if(s.gone)return;s.gone=!0,be.removeBody(s.body),ro(s),s.mesh.instanceMatrix.needsUpdate=!0;let t=s.body.position;tf(t,s.size),Ei("glass",t.x,t.y,t.z,Te.indexOf(s)),Re.glass()}function tf(s,t){for(let e=0;e<26;e++)mn.spawn(s.x+ut(-t.x,t.x)/2,s.y+ut(-t.y,t.y)/2,s.z+ut(-t.z,t.z)/2,ut(-3,3),ut(0,4),ut(-3,3),.75+Le()*.25,.88,.97,.9,ut(.08,.16),ut(.8,1.6),1)}function ef(s,t,e,n){let i=Math.min(10,2+n*.6);for(let r=0;r<i;r++)mn.spawn(s,t,e,ut(-1.5,1.5),ut(.2,2),ut(-1.5,1.5),.62,.56,.5,.55,ut(.5,1.1),ut(1,2.2),.08)}function ub(s){Math.abs(s.contact.getImpactVelocityAlongNormal())>3.5&&s.target&&s.target.userData&&Eh.add(s.target.userData)}var Eh=new Set,Ah=0;function db(s){let t=Math.abs(s.contact.getImpactVelocityAlongNormal());if(t<5||Ah<=0)return;Ah--;let e=s.contact.bi,n=s.contact.ri,i=e.position.x+n.x,r=e.position.y+n.y,o=e.position.z+n.z;ef(i,r,o,t),Ei("dust",i,r,o,t),Le()<.3&&Re.thud(Math.min(1,t/25))}var Va=24,fb=2.6,nf=7,ce=null;function sf(){let s=new Tn,t=new Ie({color:15657698,roughness:.45,metalness:.2}),e=new Ie({color:13775402,roughness:.45}),n=new hs({color:16757575,transparent:!0,opacity:.9,fog:!1}),i=new Xt(new ds(.22,.22,1.5,12),t);i.rotation.x=Math.PI/2,i.castShadow=!0,s.add(i);let r=new Xt(new nr(.22,.55,12),e);r.rotation.x=Math.PI/2,r.position.z=1.02,r.castShadow=!0,s.add(r);let o=new Xt(new ds(.23,.23,.14,12),e);o.rotation.x=Math.PI/2,o.position.z=.35,s.add(o);for(let c=0;c<4;c++){let l=new Xt(new Wi(.04,.42,.42),e),h=c*Math.PI/2;l.position.set(Math.cos(h)*.3,Math.sin(h)*.3,-.55),l.rotation.z=h,s.add(l)}let a=new Xt(new nr(.17,.9,10),n);return a.rotation.x=-Math.PI/2,a.position.z=-1.2,s.add(a),s.userData.flame=a,he.add(s),s}function rf(s,t,e){let{ray:n,hit:i}=Qd(s,t);return i?i.point.clone():n.at(Math.max(30,rn.position.distanceTo(e)+18),new L)}function of(s,t){ur();let e=new L().setFromMatrixColumn(rn.matrixWorld,0),n=rn.position.clone().addScaledVector(e,1.2).add(new L(0,-1.4,0)),i=rf(s,t,n),r=i.clone().sub(n).normalize();r.y+=.25,r.normalize();let o=new Ft({mass:60,shape:new Yi(.35),linearDamping:0});o.position.set(n.x,n.y,n.z),o.velocity.set(r.x*Va,r.y*Va,r.z*Va),o.allowSleep=!1,ce={body:o,mesh:sf(),dir:r,target:i,fuel:nf,hit:!1,steering:!0},o.addEventListener("collide",()=>{ce&&ce.body===o&&(ce.hit=!0)}),be.addBody(o),ws(),Re.rocket(),ii(25),Ei("launch",n.x,n.y,n.z,0),Mn.get("rocketHint",!1)||(Mn.set("rocketHint",!0),pn("\u0412\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0440\u0430\u043A\u0435\u0442\u0430 \u043F\u043E\u043B\u0435\u0442\u0438\u0442\u044C, \u043A\u0443\u0434\u0438 \u0432\u043A\u0430\u0436\u0435\u0442\u0435"))}function Ih(s,t){ce&&(ce.target=rf(s,t,ce.body.position),ce.steering=!0)}function af(){ce&&(be.removeBody(ce.body),he.remove(ce.mesh),ce.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),ce=null)}var hr=new L,cf=new L(0,0,1);function pb(s){if(!ce)return;let t=ce,e=t.body.position;if(t.hit||t.fuel<=0||e.y<-1.5){let r=new L(e.x,Math.max(e.y,.3),e.z);af(),Za(r,6.5,21),ws();return}if(t.fuel-=s,hr.set(t.target.x-e.x,t.target.y-e.y,t.target.z-e.z),hr.lengthSq()>.25){hr.normalize();let r=t.dir.angleTo(hr),o=fb*s;if(r>1e-4){let a=new L().crossVectors(t.dir,hr);a.lengthSq()<1e-8&&a.set(0,1,0),t.dir.applyAxisAngle(a.normalize(),Math.min(r,o)).normalize()}}let n=Va*(1+.25*Math.min(1,(nf-t.fuel)/1.5));t.body.velocity.set(t.dir.x*n,t.dir.y*n,t.dir.z*n),t.mesh.position.set(e.x,e.y,e.z),t.mesh.quaternion.setFromUnitVectors(cf,t.dir);let i=t.mesh.userData.flame;i.scale.set(1,1,.8+Le()*.6),i.material.opacity=.7+Le()*.3,lf(e,t.dir,s)}function lf(s,t,e){let n=e>.03?4:3;for(let i=0;i<n;i++){let r=Le()*.5,o=s.x-t.x*(1.1+r),a=s.y-t.y*(1.1+r),c=s.z-t.z*(1.1+r);mn.spawn(o,a,c,-t.x*3+ut(-.5,.5),-t.y*3+ut(-.5,.5),-t.z*3+ut(-.5,.5),1,ut(.55,.8),.25,.95,ut(.25,.45),ut(.12,.25),0);let l=ut(.72,.88);mn.spawn(o,a,c,ut(-.4,.4),ut(.1,.6),ut(-.4,.4),l,l,l*.98,.5,ut(.45,.8),ut(1.6,2.6),.02)}}var mb=25,sn=new L(-12,0,-14),$t=null;function gb(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d");t.strokeStyle="#fff",t.lineWidth=7,t.strokeRect(3.5,3.5,57,57),t.lineWidth=4,t.beginPath(),t.moveTo(4,4),t.lineTo(60,60),t.moveTo(60,4),t.lineTo(4,60),t.stroke();let e=new Fr(s);return e.wrapS=e.wrapT=Rr,e.colorSpace=an,e.anisotropy=4,e}var yb=gb();function vh(s,t){let e=yb.clone();return e.needsUpdate=!0,e.repeat.set(s,t),new Ie({color:15906565,map:e,alphaTest:.5,side:An,roughness:.6,metalness:.2})}var xb=new Ie({color:2303275,roughness:.4,metalness:.75}),_h=new Ie({color:1776414,roughness:.7,metalness:.5}),vb=new ds(1,1,1,8);function _b(){let s=1;for(let t of Te)t.gone||(s=Math.max(s,t.start.y+t.size.y/2));return s}function hf(s,t=1.1){let e=new Tn;he.add(e);let n=s+.7,i=new Xt(wi,vh(1,n/1.2));i.scale.set(1.2,n,1.2),i.position.set(sn.x,n/2,sn.z),i.castShadow=!0,e.add(i);let r=new Xt(wi,wh),o=Ae&&Ae.sea?2.6:.5;r.scale.set(3,o,3),r.position.set(sn.x,.5-o/2,sn.z);let a=new Xt(wi,new Ie({color:15906565,roughness:.5}));a.scale.set(1.6,1.3,1.6),a.position.set(sn.x,n-.1,sn.z),a.castShadow=!0,e.add(a);let c=new Xt(wi,vh(10,1));c.castShadow=!0,e.add(c);let l=new Xt(wi,vh(5,1));l.castShadow=!0,e.add(l);let h=new Xt(wi,new Ie({color:9276808,roughness:.9}));h.scale.set(1.4,1.6,1.6),h.castShadow=!0,e.add(h);let d=new Xt(wi,_h);d.scale.set(.9,.35,.9),e.add(d);let u=new Xt(vb,_h);u.scale.set(.06,1,.06),u.castShadow=!0,e.add(u);let f=new Xt(Xa,xb);f.scale.setScalar(t),f.castShadow=!0,e.add(f);let y=new Xt(new la(.32,.08,6,14),_h);return e.add(y),{g:e,jib:c,counter:l,weight:h,trolley:d,cable:u,ballMesh:f,ring:y,mastH:n,hookY:s}}function uf(s){he.remove(s.g),s.g.traverse(t=>{t.material&&t.material.map&&t.material.map.dispose()})}function bb(){let s=_b(),t=s+5,e=Math.max(1.5,s*.45),n=t-e,i=1.1,r=hf(t,i),o=sn.clone().lerp(new L(0,0,0),.35),a=new Ft({type:Ft.KINEMATIC,mass:0}),c=new Yi(.1);c.collisionResponse=!1,a.addShape(c),a.collisionFilterMask=0,a.collisionFilterGroup=0,a.position.set(o.x,t,o.z),a.allowSleep=!1;let l=new Ft({mass:650,shape:new Yi(i),linearDamping:.04,angularDamping:.3});l.position.set(o.x,t-2,o.z),l.allowSleep=!1;let h=new Ea(a,l,2,2e6);be.addBody(a),be.addBody(l),be.addConstraint(h),l.addEventListener("collide",d=>{let u=Math.abs(d.contact.getImpactVelocityAlongNormal());u>2.5&&(Re.clang(Math.min(1,u/14)),ii(Math.round(10+u*3)),Xe=Math.min(1.2,Xe+u*.03),Ei("clang",l.position.x,l.position.y,l.position.z,u))}),$t={...r,hook:a,ball:l,rope:h,restY:e,L:n,target:o.clone(),t:mb,lower:0,leaving:0},Re.crane()}function df(){$t&&(be.removeConstraint($t.rope),be.removeBody($t.hook),be.removeBody($t.ball),uf($t),$t=null)}var ff=new L(0,1,0),Rn=new L,bh=new L,Gd=new Un;function Bh(s,t){if(!$t||$t.leaving)return;let e=new Nt(s/innerWidth*2-1,-(t/innerHeight)*2+1);if(eo.setFromCamera(e,rn),Gd.set(ff,-$t.restY),!eo.ray.intersectPlane(Gd,Rn))return;let n=Math.hypot(Rn.x,Rn.z);n>24&&Rn.multiplyScalar(24/n),$t.target.set(Rn.x,0,Rn.z)}function Mb(s){if(!$t)return;let t=$t,e=t.hook.position;!Pn&&!t.leaving&&(t.t-=s),Pn&&qe!=="crane"&&!t.leaving&&(t.leaving=.001),t.t<=0&&!t.leaving&&(t.leaving=.001,pn("\u041A\u0440\u0430\u043D \u0441\u0432\u043E\u0454 \u0432\u0456\u0434\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432")),t.leaving?(t.leaving+=s,t.rope.distance=Math.max(1.5,t.rope.distance-s*9)):t.rope.distance<t.L&&(t.rope.distance=Math.min(t.L,t.rope.distance+s*7));let n=t.target.x-e.x,i=t.target.z-e.z,r=Math.hypot(n,i),o=t.leaving?0:Math.min(15,r*3.2),a=r>.001?o/r:0,c=t.hook.velocity.x,l=t.hook.velocity.z,h=n*a-c,d=i*a-l,u=Math.hypot(h,d),f=30*s,y=u>f?f/u:1;t.hook.velocity.set(c+h*y,0,l+d*y),pf(t,e.x,e.y,e.z,t.ball.position,t.ball.quaternion),t.leaving>1.6&&df()}function pf(s,t,e,n,i,r){let o={x:t,y:e,z:n},a=o.x-sn.x,c=o.z-sn.z,l=Math.hypot(a,c)+1.6,h=Math.atan2(-c,a),d=s.mastH+.75;s.jib.scale.set(l,.8,.8),s.jib.rotation.y=h,s.jib.position.set(sn.x+Math.cos(h)*l/2,d,sn.z-Math.sin(h)*l/2),s.jib.material.map.repeat.set(l/.8,1),s.counter.scale.set(5,.7,.7),s.counter.rotation.y=h,s.counter.position.set(sn.x-Math.cos(h)*2.5,d,sn.z+Math.sin(h)*2.5),s.weight.rotation.y=h,s.weight.position.set(sn.x-Math.cos(h)*4.4,d-.9,sn.z+Math.sin(h)*4.4),s.trolley.rotation.y=h,s.trolley.position.set(o.x,s.hookY+.3,o.z),s.ballMesh.position.set(i.x,i.y,i.z),s.ballMesh.quaternion.set(r.x,r.y,r.z,r.w),Rn.set(o.x,o.y,o.z),bh.set(i.x,i.y,i.z);let u=bh.clone().addScaledVector(Rn.clone().sub(bh).normalize(),1.15);s.ring.position.copy(u),s.ring.lookAt(Rn),s.ring.rotateY(Math.PI/2),s.cable.position.copy(Rn).add(u).multiplyScalar(.5),s.cable.scale.y=Rn.distanceTo(u),s.cable.quaternion.setFromUnitVectors(ff,Rn.clone().sub(u).normalize())}var mf=()=>$t&&!$t.leaving&&qe==="crane",mn=(()=>{let t=new Float32Array(6600),e=new Float32Array(2200*4),n=new Float32Array(2200),i=new Float32Array(2200*3),r=new Float32Array(2200),o=new Float32Array(2200),a=new Float32Array(2200),c=new Float32Array(2200),l=new Float32Array(2200),h=0,d=new en;d.setAttribute("position",new ke(t,3).setUsage(Vr)),d.setAttribute("aColor",new ke(e,4).setUsage(Vr)),d.setAttribute("aSize",new ke(n,1).setUsage(Vr));let u=new _n({transparent:!0,depthWrite:!1,uniforms:{scale:{value:400}},vertexShader:"attribute vec4 aColor; attribute float aSize; uniform float scale; varying vec4 vC; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; gl_FragColor=vec4(vC.rgb, vC.a*(1.0-r)); }"}),f=new aa(d,u);return f.frustumCulled=!1,he.add(f),{spawn(y,g,m,p,x,_,v,P,w,T,B,M,S){let R=h;h=(h+1)%2200,t[R*3]=y,t[R*3+1]=g,t[R*3+2]=m,i[R*3]=p,i[R*3+1]=x,i[R*3+2]=_,e[R*4]=v,e[R*4+1]=P,e[R*4+2]=w,e[R*4+3]=T,c[R]=T,l[R]=B,n[R]=B,r[R]=M,o[R]=M,a[R]=S},update(y){for(let g=0;g<2200;g++){if(r[g]<=0){e[g*4+3]!==0&&(e[g*4+3]=0);continue}r[g]-=y;let m=Math.max(0,r[g]/o[g]);i[g*3+1]-=9.8*a[g]*y;let p=1-(a[g]<.5?1.6:.3)*y;i[g*3]*=p,i[g*3+1]*=p,i[g*3+2]*=p,t[g*3]+=i[g*3]*y,t[g*3+1]+=i[g*3+1]*y,t[g*3+2]+=i[g*3+2]*y,t[g*3+1]<.05&&a[g]>.5&&!(Ae!=null&&Ae.river)&&(t[g*3+1]=.05,i[g*3+1]*=-.3),e[g*4+3]=c[g]*m,a[g]<.5&&(n[g]=l[g]*(1+(1-m)*1.8))}d.attributes.position.needsUpdate=!0,d.attributes.aColor.needsUpdate=!0,d.attributes.aSize.needsUpdate=!0},clear(){r.fill(0)},mat:u}})();function gf(s,t){for(let e=0;e<70;e++){let n=Le()*6.28,i=Le()*1.2,r=ut(4,14);mn.spawn(s.x,s.y,s.z,Math.cos(n)*Math.cos(i)*r,Math.sin(i)*r+2,Math.sin(n)*Math.cos(i)*r,1,ut(.45,.85),.15,1,ut(.4,.9),ut(.3,.7),.1)}for(let e=0;e<60;e++){let n=Le()*6.28,i=ut(1,t*.8);mn.spawn(s.x+ut(-1,1),s.y+ut(0,1),s.z+ut(-1,1),Math.cos(n)*i,ut(1,5),Math.sin(n)*i,ut(.25,.45),ut(.23,.4),ut(.22,.36),.65,ut(1.2,2.4),ut(1.8,3.5),.02)}}var Re=(()=>{let s=null,t=null,e=()=>{if(s)return!0;try{s=new(window.AudioContext||window.webkitAudioContext);let a=s.sampleRate*2;t=s.createBuffer(1,a,s.sampleRate);let c=t.getChannelData(0);for(let l=0;l<a;l++)c[l]=Le()*2-1;return!0}catch{return!1}},n=()=>Mn.get("sound",!0);function i(a,c,l,h=.7,d="lowpass",u=0){if(!n()||!e())return;let f=s.createBufferSource();f.buffer=t,f.playbackRate.value=ut(.8,1.2);let y=s.createBiquadFilter();y.type=d,y.frequency.value=c,y.Q.value=h,u&&y.frequency.exponentialRampToValueAtTime(Math.max(30,c*u),s.currentTime+a);let g=s.createGain();g.gain.setValueAtTime(l,s.currentTime),g.gain.exponentialRampToValueAtTime(.001,s.currentTime+a),f.connect(y),y.connect(g),g.connect(s.destination),f.start(),f.stop(s.currentTime+a)}function r(a,c,l,h,d="sine"){if(!n()||!e())return;let u=s.createOscillator();u.type=d,u.frequency.setValueAtTime(a,s.currentTime),u.frequency.exponentialRampToValueAtTime(c,s.currentTime+l);let f=s.createGain();f.gain.setValueAtTime(h,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+l),u.connect(f),f.connect(s.destination),u.start(),u.stop(s.currentTime+l)}let o=0;return{unlock(){e()&&s.state==="suspended"&&s.resume()},shoot(){i(.35,900,.5,1,"lowpass",.2),r(160,50,.25,.5)},boom(a){i(1.6,600,.9*(.5+a/2),.8,"lowpass",.08),r(90,30,.9,.7*a)},thud(a){let c=performance.now();c-o<60||(o=c,i(.25,250+a*300,.25+a*.35,1,"lowpass",.4))},glass(){i(.4,5e3,.25,4,"bandpass",1.4)},tick(){r(1400,1300,.08,.2,"square")},whoosh(){i(1.6,300,.4,2,"bandpass",6)},rumble(){i(4.5,120,.8,1,"lowpass",.6)},clang(a){let c=performance.now();c-o<90||(o=c,r(220+a*90,140,.7,.25+a*.3,"triangle"),r(523,470,.5,.08+a*.1,"sine"),i(.4,400+a*500,.4+a*.4,1,"lowpass",.3))},rocket(){i(2.2,700,.45,1.5,"bandpass",2.5),r(110,60,.5,.35,"sawtooth")},crane(){r(70,90,1.4,.25,"sawtooth"),i(1.4,900,.12,6,"bandpass",1.5)}}})();function ii(s){if(ka&&Mn.get("vibro",!0))try{ka.tick(s)}catch{}}var Lh=30,Kn=240,dr=16,Dt={nb:0,buf:null,dyn:new Float32Array(Kn*dr*9),dn:new Uint8Array(Kn),cr:new Float32Array(Kn*14),t:new Float64Array(Kn),head:0,count:0,next:0,events:[]},$a={shot:1,tick:1,whoosh:1,quake:1,boom:1,glass:1,clang:1,launch:1};function Sb(){Dt.nb=Te.length,Dt.buf=new Float32Array(Kn*Dt.nb*7),Dt.head=0,Dt.count=0,Dt.next=0,Dt.events=[]}function Ei(s,t,e,n,i){Ee!=="play"||!Dt.buf||(Dt.events.push({t:ei,kind:s,x:t,y:e,z:n,a:i}),Dt.events.length>600&&Dt.events.splice(0,100))}var no=s=>(Dt.head-Dt.count+s+Kn)%Kn;function wb(){if(!Dt.buf||ei<Dt.next)return;Dt.next=ei+1/Lh-1e-4;let s=Dt.head;Dt.head=(s+1)%Kn,Dt.count=Math.min(Kn,Dt.count+1),Dt.t[s]=ei;let t=Dt.buf,e=s*Dt.nb*7;for(let l of Te){let h=l.body.position,d=l.body.quaternion;t[e]=h.x,t[e+1]=l.gone?-999:h.y,t[e+2]=h.z,t[e+3]=d.x,t[e+4]=d.y,t[e+5]=d.z,t[e+6]=d.w,e+=7}let n=0,i=Dt.dyn,r=(l,h,d,u)=>{if(n>=dr)return;let f=(s*dr+n++)*9;i[f]=l,i[f+1]=h.x,i[f+2]=h.y,i[f+3]=h.z,i[f+4]=d.x,i[f+5]=d.y,i[f+6]=d.z,i[f+7]=d.w,i[f+8]=u};for(let l of In)r(l.meteor?1:0,l.body.position,l.body.quaternion,l.mesh.scale.x);for(let l of Qn)r(2,l.mesh.position,Ha.identity(),.35);ce&&r(3,ce.mesh.position,ce.mesh.quaternion,1),Dt.dn[s]=n;let o=Dt.cr,a=s*14;if($t){let l=$t.hook.position,h=$t.ball.position,d=$t.ball.quaternion;o[a]=1,o[a+1]=l.x,o[a+2]=l.y,o[a+3]=l.z,o[a+4]=h.x,o[a+5]=h.y,o[a+6]=h.z,o[a+7]=d.x,o[a+8]=d.y,o[a+9]=d.z,o[a+10]=d.w}else o[a]=0;let c=We?We.position:{x:0,y:0,z:0};o[a+11]=c.x,o[a+12]=c.y,o[a+13]=c.z}function yf(){if(Dt.count<4)return null;let s=Dt.t[no(0)],t=Dt.t[no(Dt.count-1)],e=Dt.events.filter(i=>i.t>=s&&i.t<=t),n=e.filter(i=>$a[i.kind]);return n.length?{t0:Math.max(s,n[0].t-.7),t1:Math.min(t,Math.max(n[n.length-1].t+3.5,e[e.length-1].t+.8)),ev:e}:null}var Eb=()=>Dt.events.some(s=>$a[s.kind]&&ei-s.t<Kn/Lh),Ab=[Ya,jd,Jd.clone()],io=[];function Tb(s){if(!io[s]){let t=new Xt(Xa,Ya);t.castShadow=!0,t.visible=!1,he.add(t),io[s]=t}return io[s]}var pt=null;function Nh(){if(pt)return;let s=yf();if(!s){pn("\u0429\u0435 \u043D\u0435\u043C\u0430 \u0447\u043E\u0433\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u2014 \u0441\u043F\u0435\u0440\u0448\u0443 \u0449\u043E\u0441\u044C \u0437\u0440\u0443\u0439\u043D\u0443\u0439\u0442\u0435");return}for(pt={...s,rt:s.t0,speed:1,prev:Ee,evi:0,ghost:null,focus:qt.target.clone(),real:0,saved:{theta:qt.theta,phi:qt.phi,r:qt.r,target:qt.target.clone()}};pt.evi<pt.ev.length&&pt.ev[pt.evi].t<pt.t0;)pt.evi++;Ee="replay",mn.clear(),Ai.intensity=0,Xe=0;for(let e of In)e.mesh.visible=!1;for(let e of Qn)e.mesh.visible=!1;ce&&(ce.mesh.visible=!1),$t&&($t.g.visible=!1),qt.r=Math.max(10,qt.r*.88),qt.phi=Math.min(1.3,qt.phi+.08),At("hud").hidden=!0,At("result").hidden=!0,At("toast").style.opacity=0;let t=At("replay");t.hidden=!1,t.classList.remove("in"),t.offsetWidth,t.classList.add("in"),ii(10)}function ja(){if(pt){for(let s of Te)ro(s);for(let s of Object.values(ji))s.instanceMatrix.needsUpdate=!0;for(let s of In)s.mesh.visible=!0;for(let s of Qn)s.mesh.visible=!0;for(let s of io)s.visible=!1;pt.ghost&&uf(pt.ghost),pt.rocket&&(he.remove(pt.rocket),pt.rocket.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()})),ce&&(ce.mesh.visible=!0),$t&&($t.g.visible=!0),Ge&&We&&Ge.position.copy(We.position),Object.assign(qt,{theta:pt.saved.theta,phi:pt.saved.phi,r:pt.saved.r}),qt.target.copy(pt.saved.target),mn.clear(),Ai.intensity=0,Xe=0,Ee=pt.prev,pt=null,At("replay").hidden=!0,Ee==="result"?At("result").hidden=!1:Ee==="play"&&(At("hud").hidden=!1)}}function Cb(s){let t=new L(s.x,s.y,s.z);switch(s.kind){case"boom":gf(t,s.a),Ai.position.copy(t),Ai.intensity=900,Xe=Math.min(1.4,Xe+s.a/6),Re.boom(Math.min(1,s.a/7)),ii(40);break;case"glass":{let e=Te[s.a];tf(t,e?e.size:new L(1,1,1)),Re.glass();break}case"dust":ef(s.x,s.y,s.z,s.a),Le()<.25&&Re.thud(Math.min(1,s.a/25));break;case"shot":Re.shoot();break;case"tick":Re.tick();break;case"whoosh":Re.whoosh();break;case"launch":Re.rocket();break;case"quake":Re.rumble();break;case"clang":Re.clang(Math.min(1,s.a/14)),Xe=Math.min(1.2,Xe+s.a*.03);break}$a[s.kind]&&s.kind!=="quake"&&pt.focus.set(s.x,Math.max(1,s.y),s.z)}var bn=new hn,Zi=new hn,ze=new L,$i=new L;function Rb(s){let t=0,e=Dt.count-1;for(;e-t>1;){let m=t+e>>1;Dt.t[no(m)]<=s?t=m:e=m}let n=no(t),i=no(e),r=Dt.t[n],o=Dt.t[i],a=o>r?Math.min(1,Math.max(0,(s-r)/(o-r))):0,c=Dt.buf,l=Dt.nb;for(let m=0;m<l;m++){let p=(n*l+m)*7,x=(i*l+m)*7,_=Te[m];if(c[p+1]<-500||a>.5&&c[x+1]<-500){vs.compose(Sh.set(0,-999,0),Ha.identity(),$d),_.mesh.setMatrixAt(_.idx,vs);continue}ze.set(c[p],c[p+1],c[p+2]),$i.set(c[x],c[x+1],c[x+2]),ze.lerp($i,a),bn.set(c[p+3],c[p+4],c[p+5],c[p+6]),Zi.set(c[x+3],c[x+4],c[x+5],c[x+6]),bn.slerp(Zi,a),vs.compose(ze,bn,_.size),_.mesh.setMatrixAt(_.idx,vs)}for(let m of Object.values(ji))m.instanceMatrix.needsUpdate=!0;let h=Dt.dyn,d=Dt.dn[n],u=Dt.dn[i];for(let m=0;m<dr;m++){let p=io[m];if(m>=d){p&&(p.visible=!1);continue}let x=(n*dr+m)*9,_=(i*dr+m)*9,v=h[x];if(v===3){p&&(p.visible=!1),Pb(m<u&&h[_]===3,x,_,a);continue}let P=Tb(m);P.material=Ab[v]||Ya,P.scale.setScalar(h[x+8]),P.visible=!0,ze.set(h[x+1],h[x+2],h[x+3]),bn.set(h[x+4],h[x+5],h[x+6],h[x+7]);let w=0;if(m<u&&h[_]===v){$i.set(h[_+1],h[_+2],h[_+3]);let T=ze.distanceTo($i);T<8&&(w=T*Lh,ze.lerp($i,a),Zi.set(h[_+4],h[_+5],h[_+6],h[_+7]),bn.slerp(Zi,a))}if(P.position.copy(ze),P.quaternion.copy(bn),v===2&&(P.material.emissiveIntensity=.4+Math.abs(Math.sin(s*18))*2),v===1&&w>12&&Le()<.35+pt.speed)for(let T=0;T<2;T++)mn.spawn(ze.x+ut(-1,1),ze.y+ut(-1,1),ze.z+ut(-1,1),ut(-1,1),ut(0,2),ut(-1,1),1,ut(.4,.7),.2,.9,ut(.9,1.8),ut(.4,.9),0)}!pt.rocketSeen&&pt.rocket&&(pt.rocket.visible=!1),pt.rocketSeen=!1;let f=Dt.cr,y=n*14,g=i*14;if(f[y]){pt.ghost||(pt.ghost=hf(f[y+2])),pt.ghost.g.visible=!0;let m=f[g]?a:0,p=(x,_)=>f[y+x]+(f[g+x]-f[y+x])*m;bn.set(f[y+7],f[y+8],f[y+9],f[y+10]),m&&(Zi.set(f[g+7],f[g+8],f[g+9],f[g+10]),bn.slerp(Zi,m)),pf(pt.ghost,p(1),p(2),p(3),{x:p(4),y:p(5),z:p(6)},bn)}else pt.ghost&&(pt.ghost.g.visible=!1);Ge&&Ge.position.set(f[y+11]+(f[g+11]-f[y+11])*a,f[y+12]+(f[g+12]-f[y+12])*a,f[y+13]+(f[g+13]-f[y+13])*a)}function Pb(s,t,e,n){let i=Dt.dyn;pt.rocket||(pt.rocket=sf()),ze.set(i[t+1],i[t+2],i[t+3]),bn.set(i[t+4],i[t+5],i[t+6],i[t+7]),s&&($i.set(i[e+1],i[e+2],i[e+3]),ze.distanceTo($i)<8&&(ze.lerp($i,n),Zi.set(i[e+4],i[e+5],i[e+6],i[e+7]),bn.slerp(Zi,n))),pt.rocket.visible=!0,pt.rocket.position.copy(ze),pt.rocket.quaternion.copy(bn),pt.rocketSeen=!0,Le()<.4+pt.speed*.6&&lf(ze,hr.copy(cf).applyQuaternion(bn),.02)}function Ib(s){let e=pt.ev.some(i=>$a[i.kind]&&i.t>pt.rt-1.6&&i.t<pt.rt+.3)?.3:1;pt.speed+=(e-pt.speed)*Math.min(1,s*(e<pt.speed?6:1.5));let n=s*pt.speed;for(pt.rt+=n,pt.real+=s;pt.evi<pt.ev.length&&pt.ev[pt.evi].t<=pt.rt;)Cb(pt.ev[pt.evi++]);return Rb(Math.min(pt.rt,pt.t1)),qt.theta+=s*.09,ze.copy(pt.focus),ze.y=Math.min(ze.y,Ae?Ae.cam[2]*1.6+2:6),qt.target.lerp(ze.lerp(pt.saved.target,.55),Math.min(1,s*.8)),At("rpFill").style.width=Math.min(100,(pt.rt-pt.t0)/(pt.t1-pt.t0)*100)+"%",At("rpSpeed").textContent="\xD7"+pt.speed.toFixed(1).replace(".",","),At("replay").classList.toggle("slow",pt.speed<.6),pt.rt>=pt.t1+.4&&ja(),n}var kn=new Map,Qe=null;Ms.addEventListener("pointerdown",s=>{Re.unlock(),Ms.setPointerCapture(s.pointerId),kn.set(s.pointerId,{x:s.clientX,y:s.clientY}),kn.size===1?(Qe={x0:s.clientX,y0:s.clientY,t0:performance.now(),moved:0,multi:!1},mf()&&Ee==="play"?Bh(s.clientX,s.clientY):qe==="rocket"&&Ee==="play"&&!Ss&&(Qe.rocket=!0,ce?Ih(s.clientX,s.clientY):Rh(s.clientX,s.clientY))):Qe&&(Qe.multi=!0)});Ms.addEventListener("pointermove",s=>{let t=kn.get(s.pointerId);if(!t)return;let e=s.clientX-t.x,n=s.clientY-t.y;if(kn.size===1)Qe&&(Qe.moved+=Math.abs(e)+Math.abs(n)),mf()&&Ee==="play"?Bh(s.clientX,s.clientY):Qe&&Qe.rocket?ce&&Ih(s.clientX,s.clientY):(!Qe||Qe.moved>8)&&(qt.theta-=e*.006,qt.phi=Math.min(1.5,Math.max(.25,qt.phi-n*.005)));else if(kn.size===2){let[i,r]=[...kn.values()],o=Math.hypot(i.x-r.x,i.y-r.y),a=(i.x+r.x)/2,c=(i.y+r.y)/2;t.x=s.clientX,t.y=s.clientY;let[l,h]=[...kn.values()],d=Math.hypot(l.x-h.x,l.y-h.y),u=(l.x+h.x)/2,f=(l.y+h.y)/2;qt.r=Math.min(80,Math.max(8,qt.r*o/Math.max(1,d))),qt.theta-=(u-a)*.006,qt.phi=Math.min(1.5,Math.max(.25,qt.phi-(f-c)*.005));return}t.x=s.clientX,t.y=s.clientY});var xf=s=>{kn.has(s.pointerId)&&(kn.delete(s.pointerId),kn.size===0&&Qe&&!Qe.multi&&!Qe.rocket&&Qe.moved<10&&performance.now()-Qe.t0<400&&Rh(s.clientX,s.clientY),kn.size===0&&(Qe=null))};Ms.addEventListener("pointerup",xf);Ms.addEventListener("pointercancel",xf);Ms.addEventListener("wheel",s=>{qt.r=Math.min(80,Math.max(8,qt.r*(1+Math.sign(s.deltaY)*.1)))},{passive:!0});function qd(){let s=qt.r,t=qt.target;rn.position.set(t.x+s*Math.sin(qt.phi)*Math.sin(qt.theta),t.y+s*Math.cos(qt.phi),t.z+s*Math.sin(qt.phi)*Math.cos(qt.theta)),rn.position.y<.6&&(rn.position.y=.6),Xe>.01&&rn.position.add(new L(ut(-1,1),ut(-1,1),ut(-1,1)).multiplyScalar(Xe*.35)),rn.lookAt(t)}function ws(){let s=At("weapons");s.innerHTML="";for(let t of hb){let e=fn[t.id];if(!Pn&&Ae&&Ae.ammo[t.id]===0)continue;let n=document.createElement("button");n.className="wpn"+(qe===t.id?" on":"")+(e>0||t.id==="crane"&&$t&&!$t.leaving||t.id==="rocket"&&ce?"":" empty");let i=t.id==="crane"&&$t&&!$t.leaving?Pn?"\u25CF":Math.ceil($t.t)+"\u0441":t.id==="rocket"&&ce?"\u25CF":e===1/0?"\u221E":e;n.innerHTML=`<b>${t.icon}</b><span>${t.name}</span><em>${i}</em>`,n.onclick=()=>{qe=t.id,ws(),ii(8),t.id==="quake"&&fn.quake>0&&pn("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0435\u043A\u0440\u0430\u043D\u0430 \u2014 \u0456 \u0437\u0435\u043C\u043B\u044F \u0437\u0430\u0442\u0440\u0443\u0441\u0438\u0442\u044C\u0441\u044F"),t.id==="crane"&&Ee==="play"&&!Ss&&($t&&!$t.leaving?pn("\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0431\u0430\u0431\u0430 \u043F\u043E\u043B\u0435\u0442\u0438\u0442\u044C \u0441\u043B\u0456\u0434\u043E\u043C"):fn.crane>0&&Ph())},s.appendChild(n)}}var Kr=0;function vf(s){Kr+=(s-Kr)*.2,At("pct").textContent=Math.round(Kr*100)+"%",At("fill").style.width=Kr*100+"%",At("goal").style.left=(Ae?Ae.goal*100:70)+"%",At("goal").hidden=Pn,At("fill").classList.toggle("won",!Pn&&Ae&&Kr>=Ae.goal)}function pn(s){let t=At("toast");t.textContent=s,t.style.opacity=1,clearTimeout(pn.h),pn.h=setTimeout(()=>t.style.opacity=0,2200)}function _f(s){Ss=!0,Ee="result";let t=s>=.95?3:s>=Math.min(.85,Ae.goal+.15)?2:s>=Ae.goal?1:0,e=Mn.get("stars",{});t>(e[Ae.id]||0)&&(e[Ae.id]=t,Mn.set("stars",e)),At("rTitle").textContent=t?["","\u0404!","\u0427\u0443\u0434\u043E\u0432\u043E!","\u041D\u0438\u0449\u0456\u0432\u043D\u043E!"][t]:"\u0429\u0435 \u0441\u0442\u043E\u0457\u0442\u044C",At("rPct").textContent=Math.round(s*100)+"%",At("rStars").innerHTML=[1,2,3].map(r=>`<i class="${r<=t?"on":""}">\u2605</i>`).join(""),At("rText").textContent=t?`\u0417\u0440\u0443\u0439\u043D\u043E\u0432\u0430\u043D\u043E ${Math.round(s*100)}% \u0437\u0430 ${Ga} ${Bb(Ga)}.`:`\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ${Math.round(Ae.goal*100)}%. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u043B\u0443\u0447\u0430\u0442\u0438 \u0432 \u043E\u043F\u043E\u0440\u0438.`;let n=_s.indexOf(Ae),i=_s[n+1];At("rNext").hidden=!(t&&i),At("rNext").onclick=()=>bs(i),At("rReplay").hidden=!yf(),At("result").hidden=!1,ii(t?40:10)}var Bb=s=>s%10===1&&s%100!==11?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B":s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0438":"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0456\u0432";function Fh(){Ee="menu",At("hud").hidden=!0,At("result").hidden=!0,At("menu").hidden=!1;let s=Mn.get("stars",{}),t=At("levels");t.innerHTML="",_s.forEach((n,i)=>{let r=i===0||(s[_s[i-1].id]||0)>0,o=s[n.id]||0,a=document.createElement("button");a.className="lvl"+(r?"":" locked"),a.innerHTML=`<span class="n">${i+1}</span><b>${n.name}</b><span class="d">${n.desc}</span><span class="st">${[1,2,3].map(c=>`<i class="${c<=o?"on":""}">\u2605</i>`).join("")}</span>`,a.onclick=()=>r?bs(n):pn("\u0421\u043F\u0435\u0440\u0448\u0443 \u0437\u0440\u0443\u0439\u043D\u0443\u0439\u0442\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0441\u043F\u043E\u0440\u0443\u0434\u0443"),t.appendChild(a)});let e=At("freeList");e.innerHTML="";for(let n of _s){let i=document.createElement("button");i.className="chip",i.textContent=n.name,i.onclick=()=>bs(n,!0),e.appendChild(i)}Te.length||(bs(_s[2],!0),Ee="menu",At("hud").hidden=!0,At("menu").hidden=!1)}At("btnMenu").onclick=Fh;At("btnReplay").onclick=Nh;At("rReplay").onclick=Nh;At("rpSkip").onclick=ja;At("btnRestart").onclick=()=>bs(Ae,Pn);At("rAgain").onclick=()=>bs(Ae,Pn);At("rMenu").onclick=Fh;At("btnDiary").onclick=()=>At("diary").classList.add("open");At("closeDiary").onclick=()=>At("diary").classList.remove("open");var Th=At("optSound"),Ch=At("optVibro");Th.checked=Mn.get("sound",!0);Ch.checked=Mn.get("vibro",!0);Th.onchange=()=>Mn.set("sound",Th.checked);Ch.onchange=()=>Mn.set("vibro",Ch.checked);function Lb(){let s=(window.CHANGELOG||[]).slice().sort((e,n)=>n.day-e.day);At("diaryList").innerHTML=s.map(e=>`<div class="entry"><span class="d">\u0414\u0415\u041D\u042C ${e.day} \xB7 ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");let t=ka?ka.version():"";t&&(At("ver").textContent="\u0412\u0435\u0440\u0441\u0456\u044F "+t+" \xB7 \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u044F Claude")}function bf(){let s=innerWidth,t=innerHeight;ni.setSize(s,t,!1),rn.aspect=s/t,rn.updateProjectionMatrix(),mn.mat.uniforms.scale.value=t*ni.getPixelRatio()*.9}addEventListener("resize",bf);bf();var Xd=performance.now(),to=0;function Mf(s){requestAnimationFrame(Mf);let t=Math.min(.05,(s-Xd)/1e3);if(Xd=s,to++,Ah=6,Ee==="menu"&&(qt.theta+=t*.08),Ee==="replay"){let n=Ib(t);if(pt){kd(n,!1),mn.update(n),Ai.intensity*=Math.pow(.02,n),Xe*=Math.pow(.05,t),qd(),ni.render(he,rn);return}}if(Be&&We){Be.t+=t;let n=Be.f*Math.PI*2,i=Be.t<Be.dur?Math.min(1,Be.t*2)*Math.min(1,(Be.dur-Be.t)*2):0,r=Be.a*n*Math.cos(n*Be.t)*i;We.velocity.set(Math.cos(Be.dir)*r,.25*r*Math.sin(n*Be.t*1.7),Math.sin(Be.dir)*r),Xe=Math.max(Xe,.3*i),Be.t>=Be.dur&&(We.velocity.set(0,0,0),We.position.set(0,0,0),We.type=Ft.STATIC,Be=null)}be.step(1/60,t,3),ei+=t,Ge&&We&&Ge.position.copy(We.position),Mb(t),pb(t),$t&&to%15===0&&Ee==="play"&&ws();for(let n of Eh)Kd(n);Eh.clear();for(let n=Qn.length-1;n>=0;n--){let i=Qn[n];i.t-=t,i.mesh.material.emissiveIntensity=.4+Math.abs(Math.sin(i.t*18))*2,i.t<=0&&(he.remove(i.mesh),Qn.splice(n,1),Za(i.pos,5.5,17))}for(let n=In.length-1;n>=0;n--){let i=In[n];if(i.age+=t,i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion),i.meteor&&!i.boomed)for(let r=0;r<3;r++)mn.spawn(i.body.position.x+ut(-1,1),i.body.position.y+ut(-1,1),i.body.position.z+ut(-1,1),ut(-1,1),ut(0,2),ut(-1,1),1,ut(.4,.7),.2,.9,ut(.9,1.8),ut(.4,.9),0);(i.age>14||i.body.position.y<-40)&&(be.removeBody(i.body),he.remove(i.mesh),In.splice(n,1))}if(to%2===0)for(let n of Te){if(n.gone||n.body.sleepState===Ft.SLEEPING)continue;let i=n.body.velocity;if(i.x*i.x+i.y*i.y+i.z*i.z<1)continue;let r=n.body.position;for(let o of Te){if(o.gone||o.body.sleepState!==Ft.SLEEPING)continue;let a=o.body.position;Math.abs(a.x-r.x)<2.6&&Math.abs(a.y-r.y)<2.6&&Math.abs(a.z-r.z)<2.6&&o.body.wakeUp()}}let e={};for(let n of Te)if(!n.gone){if(n.body.position.y<-40){n.gone=!0,be.removeBody(n.body),ro(n),e[n.type]=1;continue}(n.body.sleepState!==Ft.SLEEPING||Be||to<3)&&(ro(n),e[n.type]=1)}for(let n in e)ji[n].instanceMatrix.needsUpdate=!0;if(Ee==="play"&&wb(),kd(t,Ee==="play"),mn.update(t),Ai.intensity*=Math.pow(.02,t),Xe*=Math.pow(.05,t),qd(),ni.render(he,rn),Ee==="play"&&to%10===0){let n=qa();if(vf(n),At("btnReplay").classList.toggle("off",!Eb()),!Pn&&!Ss){let i=Object.values(fn).reduce((a,c)=>a+c,0)+Qn.length+($t?1:0)+(ce?1:0),r=Te.filter(a=>!a.gone&&a.body.sleepState!==Ft.SLEEPING).length,o=!$t&&!ce&&ei-Wa>2.5&&r<Te.length*.03&&!Be;(i===0&&(o||ei-Wa>9)||n>=.995)&&setTimeout(()=>{!Ss&&Ee==="play"&&_f(qa())},600)}}}window.__ruina={startLevel:bs,LEVELS:_s,fire:Rh,get state(){return Ee},destruction:qa,explode:(s,t,e,n,i)=>Za(new L(s,t,e),n,i),setWeapon:s=>{qe=s,ws()},callCrane:Ph,steerCrane:Bh,get crane(){return $t},get blocks(){return Te.length},startReplay:Nh,endReplay:ja,get replay(){return pt},launchRocket:of,steerRocket:Ih,get rocket(){return ce},get beam(){return re},finish:()=>_f(qa())};Lb();Fh();requestAnimationFrame(Mf);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
