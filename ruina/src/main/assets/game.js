(()=>{var Ud=Object.defineProperty;var Od=(s,t,e)=>t in s?Ud(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var T=(s,t,e)=>Od(s,typeof t!="symbol"?t+"":t,e);var zd=0,fh=1,Vd=2;var Mu=1,Ml=2,ni=3,Pi=0,He=1,Pn=2,Ci=0,Ps=1,ph=2,mh=3,gh=4,kd=5,Zi=100,Hd=101,Wd=102,Gd=103,qd=104,Xd=200,Yd=201,Zd=202,$d=203,sc=204,rc=205,jd=206,Jd=207,Qd=208,Kd=209,tf=210,ef=211,nf=212,sf=213,rf=214,oc=0,ac=1,cc=2,Ns=3,lc=4,hc=5,uc=6,dc=7,Su=0,of=1,af=2,Ri=0,cf=1,lf=2,hf=3,Sl=4,uf=5,df=6,ff=7;var wu=300,Fs=301,Ds=302,fc=303,pc=304,Yo=306,ur=1e3,Ji=1001,mc=1002,cn=1003,pf=1004;var Wr=1005;var zn=1006,Aa=1007;var Qi=1008;var oi=1009,Eu=1010,Au=1011,dr=1012,wl=1013,Ki=1014,Vn=1015,xr=1016,El=1017,Al=1018,Us=1020,Tu=35902,Cu=1021,Ru=1022,In=1023,Pu=1024,Iu=1025,Is=1026,Os=1027,Tl=1028,Cl=1029,Bu=1030,Rl=1031;var Pl=1033,mo=33776,go=33777,yo=33778,xo=33779,gc=35840,yc=35841,xc=35842,vc=35843,_c=36196,bc=37492,Mc=37496,Sc=37808,wc=37809,Ec=37810,Ac=37811,Tc=37812,Cc=37813,Rc=37814,Pc=37815,Ic=37816,Bc=37817,Lc=37818,Nc=37819,Fc=37820,Dc=37821,vo=36492,Uc=36494,Oc=36495,Lu=36283,zc=36284,Vc=36285,kc=36286;var _o=2300,Hc=2301,Ta=2302,yh=2400,xh=2401,vh=2402;var mf=3200,gf=3201;var Nu=0,yf=1,Ti="",Je="srgb",Ws="srgb-linear",Zo="linear",ae="srgb";var ps=7680;var _h=519,xf=512,vf=513,_f=514,Fu=515,bf=516,Mf=517,Sf=518,wf=519,bh=35044,vr=35048;var Mh="300 es",ii=2e3,bo=2001,Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ca=Math.PI/180,Wc=180/Math.PI;function _r(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Qe(s,t,e){return Math.max(t,Math.min(e,s))}function Ef(s,t){return(s%t+t)%t}function Ra(s,t,e){return(1-e)*s+e*t}function tr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],y=n[8],g=i[0],m=i[3],p=i[6],b=i[1],_=i[4],v=i[7],I=i[2],E=i[5],C=i[8];return r[0]=o*g+a*b+c*I,r[3]=o*m+a*_+c*E,r[6]=o*p+a*v+c*C,r[1]=l*g+h*b+d*I,r[4]=l*m+h*_+d*E,r[7]=l*p+h*v+d*C,r[2]=u*g+f*b+y*I,r[5]=u*m+f*_+y*E,r[8]=u*p+f*v+y*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,y=e*d+n*u+i*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return t[0]=d*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new Vt;function Du(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Af(){let s=Mo("canvas");return s.style.display="block",s}var Sh={};function cr(s){s in Sh||(Sh[s]=!0,console.warn(s))}function Tf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var wh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],Ah=[.3127,.329],Th=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ws]:{primaries:wh,whitePoint:Ah,transfer:Zo,toXYZ:Th,fromXYZ:Ch,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:wh,whitePoint:Ah,transfer:ae,toXYZ:Th,fromXYZ:Ch,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var ms,Gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Mo("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,So=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=_r(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ia(i[o].image)):r.push(Ia(i[o]))}else r=Ia(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,Ke=class s extends Ii{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ji,i=Ji,r=zn,o=Qi,a=In,c=oi,l=s.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=_r(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=wu;Ke.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],y=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(y+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,I=(p+1)/2,E=(h+u)/4,C=(d+g)/4,B=(y+m)/4;return _>v&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=C/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=B/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=B/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-y)*(m-y)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-y)/b,this.y=(d-g)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],y=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=y,t[e+3]=g;return}if(d!==g||c!==u||l!==f||h!==y){let m=1-a,p=c*u+l*f+h*y+d*g,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let I=Math.sqrt(_),E=Math.atan2(I,p*b);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}let v=a*b;if(c=c*m+u*v,l=l*m+f*v,h=h*m+y*v,d=d*m+g*v,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],y=r[o+3];return t[e]=a*y+h*d+c*f-l*u,t[e+1]=c*y+h*u+l*d-a*f,t[e+2]=l*y+h*f+a*u-c*d,t[e+3]=h*y-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),y=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d-u*f*y;break;case"YXZ":this._x=u*h*d+l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d+u*f*y;break;case"ZXY":this._x=u*h*d-l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d-u*f*y;break;case"ZYX":this._x=u*h*d-l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d+u*f*y;break;case"YZX":this._x=u*h*d+l*f*y,this._y=l*f*d+u*h*y,this._z=l*h*y-u*f*d,this._w=l*h*d-u*f*y;break;case"XZY":this._x=u*h*d-l*f*y,this._y=l*f*d-u*h*y,this._z=l*h*y+u*f*d,this._w=l*h*d+u*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new N,Rh=new ln,ci=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),qr.subVectors(this.max,er),gs.subVectors(t.a,er),ys.subVectors(t.b,er),xs.subVectors(t.c,er),bi.subVectors(ys,gs),Mi.subVectors(xs,ys),ki.subVectors(gs,xs);let e=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-ki.z,ki.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,ki.z,0,-ki.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-ki.y,ki.x,0];return!La(e,gs,ys,xs,qr)||(e=[1,0,0,0,1,0,0,0,1],!La(e,gs,ys,xs,qr))?!1:(Xr.crossVectors(bi,Mi),e=[Xr.x,Xr.y,Xr.z],La(e,gs,ys,xs,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Jn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,Gr=new ci,gs=new N,ys=new N,xs=new N,bi=new N,Mi=new N,ki=new N,er=new N,qr=new N,Xr=new N,Hi=new N;function La(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hi.fromArray(s,r);let a=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bf=new ci,nr=new N,Na=new N,Bi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Na)),this.expandByPoint(nr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new N,Fa=new N,Yr=new N,Si=new N,Da=new N,Zr=new N,Ua=new N,fr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fa.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yr),a=Si.dot(this.direction),c=-Si.dot(Yr),l=Si.lengthSq(),h=Math.abs(1-o*o),d,u,f,y;if(h>0)if(d=o*c-a,u=o*a-c,y=r*h,d>=0)if(u>=-y)if(u<=y){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-y?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=y?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fa).addScaledVector(Yr,u),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,i,r){Da.subVectors(e,t),Zr.subVectors(n,t),Ua.crossVectors(Da,Zr);let o=this.direction.dot(Ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let c=a*this.direction.dot(Zr.crossVectors(Si,Zr));if(c<0)return null;let l=a*this.direction.dot(Da.cross(Si));if(l<0||c+l>o)return null;let h=-a*Si.dot(Ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,y,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=y,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+y*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=y+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,y=l*h,g=l*d;e[0]=u+g*a,e[4]=y*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-y,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,y=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=y+f*a,e[1]=f+y*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=y*l-f,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=f*l-y,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=y*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+y,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*c,f=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-y,e[2]=y*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,Nf)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),wi.crossVectors(n,on),wi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),wi.crossVectors(n,on)),wi.normalize(),$r.crossVectors(on,wi),i[0]=wi.x,i[4]=$r.x,i[8]=on.x,i[1]=wi.y,i[5]=$r.y,i[9]=on.y,i[2]=wi.z,i[6]=$r.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],y=n[2],g=n[6],m=n[10],p=n[14],b=n[3],_=n[7],v=n[11],I=n[15],E=i[0],C=i[4],B=i[8],M=i[12],S=i[1],R=i[5],k=i[9],U=i[13],D=i[2],G=i[6],H=i[10],W=i[14],L=i[3],$=i[7],j=i[11],pt=i[15];return r[0]=o*E+a*S+c*D+l*L,r[4]=o*C+a*R+c*G+l*$,r[8]=o*B+a*k+c*H+l*j,r[12]=o*M+a*U+c*W+l*pt,r[1]=h*E+d*S+u*D+f*L,r[5]=h*C+d*R+u*G+f*$,r[9]=h*B+d*k+u*H+f*j,r[13]=h*M+d*U+u*W+f*pt,r[2]=y*E+g*S+m*D+p*L,r[6]=y*C+g*R+m*G+p*$,r[10]=y*B+g*k+m*H+p*j,r[14]=y*M+g*U+m*W+p*pt,r[3]=b*E+_*S+v*D+I*L,r[7]=b*C+_*R+v*G+I*$,r[11]=b*B+_*k+v*H+I*j,r[15]=b*M+_*U+v*W+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],y=t[3],g=t[7],m=t[11],p=t[15];return y*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+g*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],y=t[12],g=t[13],m=t[14],p=t[15],b=d*m*l-g*u*l+g*c*f-a*m*f-d*c*p+a*u*p,_=y*u*l-h*m*l-y*c*f+o*m*f+h*c*p-o*u*p,v=h*g*l-y*d*l+y*a*f-o*g*f-h*a*p+o*d*p,I=y*d*c-h*g*c-y*a*u+o*g*u+h*a*m-o*d*m,E=e*b+n*_+i*v+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=b*C,t[1]=(g*u*r-d*m*r-g*i*f+n*m*f+d*i*p-n*u*p)*C,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*C,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*C,t[4]=_*C,t[5]=(h*m*r-y*u*r+y*i*f-e*m*f-h*i*p+e*u*p)*C,t[6]=(y*c*r-o*m*r-y*i*l+e*m*l+o*i*p-e*c*p)*C,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*C,t[8]=v*C,t[9]=(y*d*r-h*g*r-y*n*f+e*g*f+h*n*p-e*d*p)*C,t[10]=(o*g*r-y*a*r+y*n*l-e*g*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*g*i-y*d*i+y*n*u-e*g*u-h*n*m+e*d*m)*C,t[14]=(y*a*i-o*g*i-y*n*c+e*g*c+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,y=r*d,g=o*h,m=o*d,p=a*d,b=c*l,_=c*h,v=c*d,I=n.x,E=n.y,C=n.z;return i[0]=(1-(g+p))*I,i[1]=(f+v)*I,i[2]=(y-_)*I,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(y+_)*C,i[9]=(m-b)*C,i[10]=(1-(u+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=vs.set(i[0],i[1],i[2]).length(),o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Tn.copy(this);let l=1/r,h=1/o,d=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ii){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,y;if(a===ii)f=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===bo)f=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ii){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h,y,g;if(a===ii)y=(o+r)*d,g=-2*d;else if(a===bo)y=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new N,Tn=new oe,Lf=new N(0,0,0),Nf=new N(1,1,1),wi=new N,$r=new N,on=new N,Ph=new oe,Ih=new ln,kn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ff=0,Bh=new N,_s=new ln,Kn=new oe,jr=new N,ir=new N,Df=new N,Uf=new ln,Lh=new N(1,0,0),Nh=new N(0,1,0),Fh=new N(0,0,1),Dh={type:"added"},Of={type:"removed"},bs={type:"childadded",child:null},Oa={type:"childremoved",child:null},We=class s extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new kn,n=new ln,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ir,jr,this.up):Kn.lookAt(jr,ir,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Kn),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};We.DEFAULT_UP=new N(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new N,ti=new N,za=new N,ei=new N,Ms=new N,Ss=new N,Uh=new N,Va=new N,ka=new N,Ha=new N,Wa=new ce,Ga=new ce,qa=new ce,$i=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Cn.subVectors(i,e),ti.subVectors(n,e),za.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(ti),c=Cn.dot(za),l=ti.dot(ti),h=ti.dot(za),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,y=(o*h-a*c)*u;return r.set(1-f-y,y,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wa.setScalar(0),Ga.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Ga,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),ti.subVectors(t,e),Cn.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ms.subVectors(i,n),Ss.subVectors(r,n),Va.subVectors(t,n);let c=Ms.dot(Va),l=Ss.dot(Va);if(c<=0&&l<=0)return e.copy(n);ka.subVectors(t,i);let h=Ms.dot(ka),d=Ss.dot(ka);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ms,o);Ha.subVectors(t,r);let f=Ms.dot(Ha),y=Ss.dot(Ha);if(y>=0&&f<=y)return e.copy(r);let g=f*l-c*y;if(g<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(Ss,a);let m=h*y-f*d;if(m<=0&&d-h>=0&&f-y>=0)return Uh.subVectors(r,i),a=(d-h)/(d-h+(f-y)),e.copy(i).addScaledVector(Uh,a);let p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Ef(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xa(o,r,t+1/3),this.g=Xa(o,r,t),this.b=Xa(o,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return te.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Qe(Ve.r*255,0,255))*65536+Math.round(Qe(Ve.g*255,0,255))*256+Math.round(Qe(Ve.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Je){te.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Jr);let n=Ra(Ei.h,Jr.h,e),i=Ra(Ei.s,Jr.s,e),r=Ra(Ei.l,Jr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ut;Ut.NAMES=Uu;var zf=0,Li=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=_r(),this.name="",this.blending=Ps,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zs=class extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new N,Qr=new Yt,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}};var Eo=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ao=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vf=0,pn=new oe,Ya=new We,ws=new N,an=new ci,sr=new ci,Ne=new N,hn=class s extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?Ao:Eo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(an.min,sr.min),an.expandByPoint(Ne),Ne.addVectors(an.max,sr.max),an.expandByPoint(Ne)):(an.expandByPoint(sr.min),an.expandByPoint(sr.max))}an.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),Ne.add(ws)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new N,c[B]=new N;let l=new N,h=new N,d=new N,u=new Yt,f=new Yt,y=new Yt,g=new N,m=new N;function p(B,M,S){l.fromBufferAttribute(n,B),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,B),f.fromBufferAttribute(r,M),y.fromBufferAttribute(r,S),h.sub(l),d.sub(l),f.sub(u),y.sub(u);let R=1/(f.x*y.y-y.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-y.x).multiplyScalar(R),a[B].add(g),a[M].add(g),a[S].add(g),c[B].add(m),c[M].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let B=0,M=b.length;B<M;++B){let S=b[B],R=S.start,k=S.count;for(let U=R,D=R+k;U<D;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new N,v=new N,I=new N,E=new N;function C(B){I.fromBufferAttribute(i,B),E.copy(I);let M=a[B];_.copy(M),_.sub(I.multiplyScalar(I.dot(M))).normalize(),v.crossVectors(E,M);let R=v.dot(c[B])<0?-1:1;o.setXYZW(B,_.x,_.y,_.z,R)}for(let B=0,M=b.length;B<M;++B){let S=b[B],R=S.start,k=S.count;for(let U=R,D=R+k;U<D;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let y=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,y=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)u[y++]=l[f++]}return new Fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oh=new oe,Wi=new fr,Kr=new Bi,zh=new N,to=new N,eo=new N,no=new N,Za=new N,io=new N,Vh=new N,so=new N,se=class extends We{constructor(t=new hn,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Za.fromBufferAttribute(d,t),o?io.addScaledVector(Za,h):io.addScaledVector(Za.sub(e),h))}e.add(io)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Kr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Kr,zh)===null||Wi.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,I=_;v<I;v+=3){let E=a.getX(v),C=a.getX(v+1),B=a.getX(v+2);i=ro(this,p,t,n,l,h,d,E,C,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=y,p=g;m<p;m+=3){let b=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=ro(this,o,t,n,l,h,d,b,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,I=_;v<I;v+=3){let E=v,C=v+1,B=v+2;i=ro(this,p,t,n,l,h,d,E,C,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=y,p=g;m<p;m+=3){let b=m,_=m+1,v=m+2;i=ro(this,o,t,n,l,h,d,b,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function kf(s,t,e,n,i,r,o,a){let c;if(t.side===He?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Pi,a),c===null)return null;so.copy(a),so.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(so);return l<e.near||l>e.far?null:{distance:l,point:so.clone(),object:s}}function ro(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,to),s.getVertexPosition(c,eo),s.getVertexPosition(l,no);let h=kf(s,t,e,n,to,eo,no,Vh);if(h){let d=new N;$i.getBarycoord(Vh,to,eo,no,d),i&&(h.uv=$i.getInterpolatedAttribute(i,a,c,l,d,new Yt)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,c,l,d,new Yt)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};$i.getNormal(to,eo,no,u.normal),h.face=u,h.barycoord=d}return h}var ts=class s extends hn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,i,o,2),y("x","z","y",1,-1,t,n,-e,i,o,3),y("x","y","z",1,-1,t,e,n,i,r,4),y("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function y(g,m,p,b,_,v,I,E,C,B,M){let S=v/C,R=I/B,k=v/2,U=I/2,D=E/2,G=C+1,H=B+1,W=0,L=0,$=new N;for(let j=0;j<H;j++){let pt=j*R-U;for(let At=0;At<G;At++){let rt=At*S-k;$[g]=rt*b,$[m]=pt*_,$[p]=D,l.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[p]=E>0?1:-1,h.push($.x,$.y,$.z),d.push(At/C),d.push(1-j/B),W+=1}}for(let j=0;j<B;j++)for(let pt=0;pt<C;pt++){let At=u+pt+G*j,rt=u+pt+G*(j+1),J=u+(pt+1)+G*(j+1),nt=u+(pt+1)+G*j;c.push(At,rt,nt),c.push(rt,J,nt),L+=6}a.addGroup(f,L,M),f+=L,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(s){let t={};for(let e=0;e<s.length;e++){let n=Vs(s[e]);for(let i in n)t[i]=n[i]}return t}function Hf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ou(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Wf={clone:Vs,merge:qe},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},To=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new N,kh=new Yt,Hh=new Yt,ke=class extends To{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Hh),e.subVectors(Hh,kh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,As=1,Yc=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(Es,As,t,e);i.layers=this.layers,this.add(i);let r=new ke(Es,As,t,e);r.layers=this.layers,this.add(r);let o=new ke(Es,As,t,e);o.layers=this.layers,this.add(o);let a=new ke(Es,As,t,e);a.layers=this.layers,this.add(a);let c=new ke(Es,As,t,e);c.layers=this.layers,this.add(c);let l=new ke(Es,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Co=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zc=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ts(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Ci});r.uniforms.tEquirect.value=e;let o=new se(i,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=zn),new Yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},$a=new N,Xf=new N,Yf=new Vt,Rn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$a.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),i=this.coplanarPoint($a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Bi,oo=new N,mr=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],y=i[9],g=i[10],m=i[11],p=i[12],b=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+o,u+h,m+y,v+b).normalize(),n[3].setComponents(c-o,u-h,m-y,v-b).normalize(),n[4].setComponents(c-a,u-d,m-g,v-_).normalize(),e===ii)n[5].setComponents(c+a,u+d,m+g,v+_).normalize();else if(e===bo)n[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(oo.x=i.normal.x>0?t.max.x:t.min.x,oo.y=i.normal.y>0?t.max.y:t.min.y,oo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zf(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,y)=>f.start-y.start);let u=0;for(let f=1;f<d.length;f++){let y=d[u],g=d[f];g.start<=y.start+y.count+1?y.count=Math.max(y.count,g.start+g.count-y.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,y=d.length;f<y;f++){let g=d[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var ks=class s extends hn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],y=[],g=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let _=0;_<l;_++){let v=_*d-r;y.push(v,-b,0),g.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let _=b+l*p,v=b+l*(p+1),I=b+1+l*(p+1),E=b+1+l*p;f.push(_,v,E),f.push(v,I,E)}this.setIndex(f),this.setAttribute("position",new Ce(y,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},$f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,bg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:$f,alphahash_pars_fragment:jf,alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:Kf,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:cp,bumpmap_pars_fragment:lp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:yp,common:xp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:_p,displacementmap_pars_vertex:bp,displacementmap_vertex:Mp,emissivemap_fragment:Sp,emissivemap_pars_fragment:wp,colorspace_fragment:Ep,colorspace_pars_fragment:Ap,envmap_fragment:Tp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:kp,envmap_vertex:Ip,fog_vertex:Bp,fog_pars_vertex:Lp,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Up,lights_lambert_fragment:Op,lights_lambert_pars_fragment:zp,lights_pars_begin:Vp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Gp,lights_phong_pars_fragment:qp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:jp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:om,morphinstance_vertex:am,morphcolor_vertex:cm,morphnormal_vertex:lm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:bm,opaque_fragment:Mm,packing:Sm,premultiplied_alpha_fragment:wm,project_vertex:Em,dithering_fragment:Am,dithering_pars_fragment:Tm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Bm,shadowmask_pars_fragment:Lm,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Om,specularmap_pars_fragment:zm,tonemapping_fragment:Vm,tonemapping_pars_fragment:km,transmission_fragment:Hm,transmission_pars_fragment:Wm,uv_pars_fragment:Gm,uv_pars_vertex:qm,uv_vertex:Xm,worldpos_vertex:Ym,background_vert:Zm,background_frag:$m,backgroundCube_vert:jm,backgroundCube_frag:Jm,cube_vert:Qm,cube_frag:Km,depth_vert:tg,depth_frag:eg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:cg,meshbasic_frag:lg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:yg,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:bg,points_vert:Mg,points_frag:Sg,shadow_vert:wg,shadow_frag:Eg,sprite_vert:Ag,sprite_frag:Tg},at={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},On={basic:{uniforms:qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:qe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:qe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:qe([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:qe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:qe([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:qe([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:qe([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:qe([at.lights,at.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};On.physical={uniforms:qe([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var ao={r:0,b:0,g:0},qi=new kn,Cg=new oe;function Rg(s,t,e,n,i,r,o){let a=new Ut(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function y(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function g(b){let _=!1,v=y(b);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,_){let v=y(_);v&&(v.isCubeTexture||v.mapping===Yo)?(h===void 0&&(h=new se(new ts(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Vs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(_.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(qi)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new se(new ks(2,2),new mn({name:"BackgroundMaterial",uniforms:Vs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,_){b.getRGB(ao,Ou(s)),n.buffers.color.setClear(ao.r,ao.g,ao.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:g,addToRenderList:m}}function Pg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(S,R,k,U,D){let G=!1,H=d(U,k,R);r!==H&&(r=H,l(r.object)),G=f(S,U,k,D),G&&y(S,U,k,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(S,R,k,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,R,k){let U=k.wireframe===!0,D=n[S.id];D===void 0&&(D={},n[S.id]=D);let G=D[R.id];G===void 0&&(G={},D[R.id]=G);let H=G[U];return H===void 0&&(H=u(c()),G[U]=H),H}function u(S){let R=[],k=[],U=[];for(let D=0;D<e;D++)R[D]=0,k[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,R,k,U){let D=r.attributes,G=R.attributes,H=0,W=k.getAttributes();for(let L in W)if(W[L].location>=0){let j=D[L],pt=G[L];if(pt===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function y(S,R,k,U){let D={},G=R.attributes,H=0,W=k.getAttributes();for(let L in W)if(W[L].location>=0){let j=G[L];j===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));let pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),D[L]=pt,H++}r.attributes=D,r.attributesNum=H,r.index=U}function g(){let S=r.newAttributes;for(let R=0,k=S.length;R<k;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){let k=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;k[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),D[S]!==R&&(s.vertexAttribDivisor(S,R),D[S]=R)}function b(){let S=r.newAttributes,R=r.enabledAttributes;for(let k=0,U=R.length;k<U;k++)R[k]!==S[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function _(S,R,k,U,D,G,H){H===!0?s.vertexAttribIPointer(S,R,k,D,G):s.vertexAttribPointer(S,R,k,U,D,G)}function v(S,R,k,U){g();let D=U.attributes,G=k.getAttributes(),H=R.defaultAttributeValues;for(let W in G){let L=G[W];if(L.location>=0){let $=D[W];if($===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){let j=$.normalized,pt=$.itemSize,At=t.get($);if(At===void 0)continue;let rt=At.buffer,J=At.type,nt=At.bytesPerElement,mt=J===s.INT||J===s.UNSIGNED_INT||$.gpuType===wl;if($.isInterleavedBufferAttribute){let ot=$.data,Ct=ot.stride,Dt=$.offset;if(ot.isInstancedInterleavedBuffer){for(let qt=0;qt<L.locationSize;qt++)p(L.location+qt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let qt=0;qt<L.locationSize;qt++)m(L.location+qt);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let qt=0;qt<L.locationSize;qt++)_(L.location+qt,pt/L.locationSize,J,j,Ct*nt,(Dt+pt/L.locationSize*qt)*nt,mt)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<L.locationSize;ot++)p(L.location+ot,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<L.locationSize;ot++)m(L.location+ot);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ot=0;ot<L.locationSize;ot++)_(L.location+ot,pt/L.locationSize,J,j,pt*nt,pt/L.locationSize*ot*nt,mt)}}else if(H!==void 0){let j=H[W];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(L.location,j);break;case 3:s.vertexAttrib3fv(L.location,j);break;case 4:s.vertexAttrib4fv(L.location,j);break;default:s.vertexAttrib1fv(L.location,j)}}}}b()}function I(){B();for(let S in n){let R=n[S];for(let k in R){let U=R[k];for(let D in U)h(U[D].object),delete U[D];delete R[k]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let k in R){let U=R[k];for(let D in U)h(U[D].object),delete U[D];delete R[k]}delete n[S.id]}function C(S){for(let R in n){let k=n[R];if(k[S.id]===void 0)continue;let U=k[S.id];for(let D in U)h(U[D].object),delete U[D];delete k[S.id]}}function B(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Ig(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let y=0;y<d;y++)f+=h[y];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<l.length;y++)o(l[y],h[y],u[y]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let y=0;for(let g=0;g<d;g++)y+=h[g]*u[g];e.update(y,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==In&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let B=C===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!B)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=y>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:y,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:I,maxSamples:E}}function Lg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let y=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||y===null||y.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,_=b*4,v=p.clippingState||null;c.value=v,v=h(y,u,_,f);for(let I=0;I!==_;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,y){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,y!==!0||m===null){let p=f+g*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==g;++_,v+=4)o.copy(d[_]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ng(s){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=Fs:a===pc&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===pc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Zc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ro=class extends To{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,Wh=[.125,.215,.35,.446,.526,.582],ji=20,ja=new Ro,Gh=new Ut,Ja=null,Qa=0,Ka=0,tc=!1,Yi=(1+Math.sqrt(5))/2,Ts=1/Yi,qh=[new N(-Yi,Ts,0),new N(Yi,Ts,0),new N(-Ts,0,Yi),new N(Ts,0,Yi),new N(0,Yi,-Ts),new N(0,Yi,Ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Qa,Ka),this._renderer.xr.enabled=tc,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:xr,format:In,colorSpace:Ws,depthBuffer:!1},i=Xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Dg(r,t,e)}return i}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,i){let a=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gh),h.toneMapping=Ri,h.autoClear=!1;let f=new zs({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),y=new se(new ts,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Gh),g=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;co(i,b*_,p>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Fs||t.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qh[(i-r-1)%qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new se(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),g=r/y,m=isFinite(r)?1+Math.floor(h*g):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let p=[],b=0;for(let C=0;C<ji;++C){let B=C/g,M=Math.exp(-B*B/2);p.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=y,u.mipInt.value=_-n;let v=this._sizeLods[i],I=3*v*(i>_-Rs?i-_+Rs:0),E=4*(this._cubeSize-v);co(e,I,E,3*v,2*v),c.setRenderTarget(e),c.render(d,ja)}};function Fg(s){let t=[],e=[],n=[],i=s,r=s-Rs+1+Wh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Rs?c=Wh[o-s+Rs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,y=6,g=3,m=2,p=1,b=new Float32Array(g*y*f),_=new Float32Array(m*y*f),v=new Float32Array(p*y*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,B=E>2?0:-1,M=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];b.set(M,g*y*E),_.set(u,m*y*E);let S=[E,E,E,E,E,E];v.set(S,p*y*E)}let I=new hn;I.setAttribute("position",new Fe(b,g)),I.setAttribute("uv",new Fe(_,m)),I.setAttribute("faceIndex",new Fe(v,p)),t.push(I),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xh(s,t,e){let n=new ai(s,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dg(s,t,e){let n=new Float32Array(ji),i=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Yh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Zh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function Ug(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===fc||c===pc,h=c===Fs||c===Ds;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Po(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Po(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Og(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let y in u.attributes)t.remove(u.attributes[y]);for(let y in u.morphAttributes){let g=u.morphAttributes[y];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let y in u)t.update(u[y],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let y in f){let g=f[y];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,y=d.attributes.position,g=0;if(f!==null){let b=f.array;g=f.version;for(let _=0,v=b.length;_<v;_+=3){let I=b[_+0],E=b[_+1],C=b[_+2];u.push(I,E,E,C,C,I)}}else if(y!==void 0){let b=y.array;g=y.version;for(let _=0,v=b.length/3-1;_<v;_+=3){let I=_+0,E=_+1,C=_+2;u.push(I,E,E,C,C,I)}}else return;let m=new(Du(u)?Ao:Eo)(u,1);m.version=g;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Vg(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,y){y!==0&&(s.drawElementsInstanced(n,f,r,u*o,y),e.update(f,n,y))}function h(u,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,y);let m=0;for(let p=0;p<y;p++)m+=f[p];e.update(m,n,1)}function d(u,f,y,g){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,y);let p=0;for(let b=0;b<y;b++)p+=f[b]*g[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hg(s,t,e){let n=new WeakMap,i=new ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;f===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let v=a.attributes.position.count*_,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*I*4*d),C=new wo(E,v,I,d);C.type=Vn,C.needsUpdate=!0;let B=_*4;for(let S=0;S<d;S++){let R=m[S],k=p[S],U=b[S],D=v*I*4*S;for(let G=0;G<R.count;G++){let H=G*B;f===!0&&(i.fromBufferAttribute(R,G),E[D+H+0]=i.x,E[D+H+1]=i.y,E[D+H+2]=i.z,E[D+H+3]=0),y===!0&&(i.fromBufferAttribute(k,G),E[D+H+4]=i.x,E[D+H+5]=i.y,E[D+H+6]=i.z,E[D+H+7]=0),g===!0&&(i.fromBufferAttribute(U,G),E[D+H+8]=i.x,E[D+H+9]=i.y,E[D+H+10]=i.z,E[D+H+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Yt(v,I)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let y=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Wg(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Io=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h=Is){if(h!==Is&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Ki),n===void 0&&h===Os&&(n=Us),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vu=new Ke,$h=new Io(1,1),ku=new wo,Hu=new Xc,Wu=new Co,jh=[],Jh=[],Qh=new Float32Array(16),Kh=new Float32Array(9),tu=new Float32Array(4);function Gs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=jh[i];if(r===void 0&&(r=new Float32Array(i),jh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $o(s,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Zg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),Pe(e,n)}}function $g(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Kh.set(n),s.uniformMatrix3fv(this.addr,!1,Kh),Pe(e,n)}}function jg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Qh.set(n),s.uniformMatrix4fv(this.addr,!1,Qh),Pe(e,n)}}function Jg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function Kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function e0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function r0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($h.compareFunction=Fu,r=$h):r=Vu,e.setTexture2D(t||r,i)}function o0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hu,i)}function a0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wu,i)}function c0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function l0(s){switch(s){case 5126:return Gg;case 35664:return qg;case 35665:return Xg;case 35666:return Yg;case 35674:return Zg;case 35675:return $g;case 35676:return jg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return Kg;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return c0}}function h0(s,t){s.uniform1fv(this.addr,t)}function u0(s,t){let e=Gs(t,this.size,2);s.uniform2fv(this.addr,e)}function d0(s,t){let e=Gs(t,this.size,3);s.uniform3fv(this.addr,e)}function f0(s,t){let e=Gs(t,this.size,4);s.uniform4fv(this.addr,e)}function p0(s,t){let e=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function m0(s,t){let e=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function g0(s,t){let e=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function y0(s,t){s.uniform1iv(this.addr,t)}function x0(s,t){s.uniform2iv(this.addr,t)}function v0(s,t){s.uniform3iv(this.addr,t)}function _0(s,t){s.uniform4iv(this.addr,t)}function b0(s,t){s.uniform1uiv(this.addr,t)}function M0(s,t){s.uniform2uiv(this.addr,t)}function S0(s,t){s.uniform3uiv(this.addr,t)}function w0(s,t){s.uniform4uiv(this.addr,t)}function E0(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vu,r[o])}function A0(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hu,r[o])}function T0(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wu,r[o])}function C0(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ku,r[o])}function R0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return y0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return b0;case 36294:return M0;case 36295:return S0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return C0}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}},jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;function eu(s,t){s.seq.push(t),s.map[t.id]=t}function P0(s,t,e){let n=s.name,i=n.length;for(ec.lastIndex=0;;){let r=ec.exec(n),o=ec.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){eu(e,l===void 0?new $c(a,s,t):new jc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Jc(a),eu(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);P0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function nu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var I0=37297,B0=0;function L0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var iu=new Vt;function N0(s){te._getMatrix(iu,te.workingColorSpace,s);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Zo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function su(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+L0(s.getShaderSource(t),o)}else return i}function F0(s,t){let e=N0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function D0(s,t){let e;switch(t){case cf:e="Linear";break;case lf:e="Reinhard";break;case hf:e="Cineon";break;case Sl:e="ACESFilmic";break;case df:e="AgX";break;case ff:e="Neutral";break;case uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lo=new N;function U0(){te.getLuminanceCoefficients(lo);let s=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function z0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function lr(s){return s!==""}function ru(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(s){return s.replace(k0,W0)}var H0=new Map;function W0(s,t){let e=Wt[t];if(e===void 0){let n=H0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qc(e)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(s){return s.replace(G0,q0)}function q0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function X0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Y0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Ds:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function $0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Su:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function j0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=X0(e),l=Y0(e),h=Z0(e),d=$0(e),u=j0(e),f=O0(e),y=z0(r),g=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=Qc(o),o=ru(o,e),o=ou(o,e),a=Qc(a),a=ru(a,e),a=ou(a,e),o=au(o),a=au(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+o,v=b+p+a,I=nu(i,i.VERTEX_SHADER,_),E=nu(i,i.FRAGMENT_SHADER,v);i.attachShader(g,I),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(R){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(I).trim(),D=i.getShaderInfoLog(E).trim(),G=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,I,E);else{let W=su(i,I,"vertex"),L=su(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+W+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||D==="")&&(H=!1);H&&(R.diagnostics={runnable:G,programLog:k,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(I),i.deleteShader(E),B=new Ls(i,g),M=V0(i,g)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,I0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=E,this}var Q0=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tl(t),e.set(t,n)),n}},tl=class{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}};function K0(s,t,e,n,i,r,o){let a=new pr,c=new Kc,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,k,U){let D=k.fog,G=U.geometry,H=M.isMeshStandardMaterial?k.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),L=W&&W.mapping===Yo?W.image.height:null,$=y[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=j!==void 0?j.length:0,At=0;G.morphAttributes.position!==void 0&&(At=1),G.morphAttributes.normal!==void 0&&(At=2),G.morphAttributes.color!==void 0&&(At=3);let rt,J,nt,mt;if($){let re=On[$];rt=re.vertexShader,J=re.fragmentShader}else rt=M.vertexShader,J=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);let ot=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,qt=U.isBatchedMesh===!0,ye=!!M.map,Qt=!!M.matcap,Se=!!W,V=!!M.aoMap,dn=!!M.lightMap,$t=!!M.bumpMap,jt=!!M.normalMap,Pt=!!M.displacementMap,de=!!M.emissiveMap,Rt=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,q=M.clearcoat>0,K=M.dispersion>0,et=M.iridescence>0,Q=M.sheen>0,Mt=M.transmission>0,ht=w&&!!M.anisotropyMap,gt=q&&!!M.clearcoatMap,Kt=q&&!!M.clearcoatNormalMap,it=q&&!!M.clearcoatRoughnessMap,yt=et&&!!M.iridescenceMap,It=et&&!!M.iridescenceThicknessMap,Bt=Q&&!!M.sheenColorMap,xt=Q&&!!M.sheenRoughnessMap,Jt=!!M.specularMap,Ht=!!M.specularColorMap,he=!!M.specularIntensityMap,F=Mt&&!!M.transmissionMap,lt=Mt&&!!M.thicknessMap,Z=!!M.gradientMap,tt=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Ot=!!M.extensions,ve=Ri;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ve=s.toneMapping);let Oe={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:J,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qt,batchingColor:qt&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ws,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:Qt,envMap:Se,envMapMode:Se&&W.mapping,envMapCubeUVHeight:L,aoMap:V,lightMap:dn,bumpMap:$t,normalMap:jt,displacementMap:u&&Pt,emissiveMap:de,normalMapObjectSpace:jt&&M.normalMapType===yf,normalMapTangentSpace:jt&&M.normalMapType===Nu,metalnessMap:Rt,roughnessMap:P,anisotropy:w,anisotropyMap:ht,clearcoat:q,clearcoatMap:gt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:it,dispersion:K,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:xt,specularMap:Jt,specularColorMap:Ht,specularIntensityMap:he,transmission:Mt,transmissionMap:F,thicknessMap:lt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ps&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:ye&&g(M.map.channel),aoMapUv:V&&g(M.aoMap.channel),lightMapUv:dn&&g(M.lightMap.channel),bumpMapUv:$t&&g(M.bumpMap.channel),normalMapUv:jt&&g(M.normalMap.channel),displacementMapUv:Pt&&g(M.displacementMap.channel),emissiveMapUv:de&&g(M.emissiveMap.channel),metalnessMapUv:Rt&&g(M.metalnessMap.channel),roughnessMapUv:P&&g(M.roughnessMap.channel),anisotropyMapUv:ht&&g(M.anisotropyMap.channel),clearcoatMapUv:gt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(M.sheenRoughnessMap.channel),specularMapUv:Jt&&g(M.specularMap.channel),specularColorMapUv:Ht&&g(M.specularColorMap.channel),specularIntensityMapUv:he&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:lt&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(jt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ye||tt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:At,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&M.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(S,M),_(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let S=y[M.type],R;if(S){let k=On[S];R=Wf.clone(k.uniforms)}else R=M.uniforms;return R}function I(M,S){let R;for(let k=0,U=h.length;k<U;k++){let D=h[k];if(D.cacheKey===S){R=D,++R.usedTimes;break}}return R===void 0&&(R=new J0(s,S,M,r),h.push(R)),R}function E(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:B}}function ty(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ey(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,y,g,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,y,g,m){let p=o(d,u,f,y,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,y,g,m){let p=o(d,u,f,y,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||ey),n.length>1&&n.sort(u||lu),i.length>1&&i.sort(u||lu)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ny(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new hu,s.set(n,[o])):i>=r.length?(o=new hu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function iy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ut};break;case"SpotLight":e={position:new N,direction:new N,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function sy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ry=0;function oy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ay(s){let t=new iy,e=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let i=new N,r=new oe,o=new oe;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,y=0,g=0,m=0,p=0,b=0,_=0,v=0,I=0,E=0,C=0;l.sort(oy);for(let M=0,S=l.length;M<S;M++){let R=l[M],k=R.color,U=R.intensity,D=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*U,d+=k.g*U,u+=k.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);C++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,L=e.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=H,f++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(k).multiplyScalar(U),H.distance=D,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[g]=H;let W=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,W.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[g]=W.matrix,R.castShadow){let L=e.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=G,v++}g++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(k).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let W=R.shadow,L=e.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,n.pointShadow[y]=L,n.pointShadowMap[y]=G,n.pointShadowMatrix[y]=R.shadow.matrix,_++}n.point[y]=H,y++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let B=n.hash;(B.directionalLength!==f||B.pointLength!==y||B.spotLength!==g||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==b||B.numPointShadows!==_||B.numSpotShadows!==v||B.numSpotMaps!==I||B.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,B.directionalLength=f,B.pointLength=y,B.spotLength=g,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=b,B.numPointShadows=_,B.numSpotShadows=v,B.numSpotMaps=I,B.numLightProbes=C,n.version=ry++)}function c(l,h){let d=0,u=0,f=0,y=0,g=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function uu(s){let t=new ay(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new uu(s),t.set(i,[a])):r>=o.length?(a=new uu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var el=class extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function uy(s,t,e){let n=new mr,i=new Yt,r=new Yt,o=new ce,a=new el({depthPacking:gf}),c=new nl,l={},h=e.maxTextureSize,d={[Pi]:He,[He]:Pi,[Pn]:Pn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:ly,fragmentShader:hy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let y=new hn;y.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new se(y,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let p=this.type;this.render=function(E,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Ci),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let U=p!==ni&&this.type===ni,D=p===ni&&this.type!==ni;for(let G=0,H=E.length;G<H;G++){let W=E[G],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let $=L.getFrameExtents();if(i.multiply($),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,L.mapSize.y=r.y)),L.map===null||U===!0||D===!0){let pt=this.type!==ni?{minFilter:cn,magFilter:cn}:{};L.map!==null&&L.map.dispose(),L.map=new ai(i.x,i.y,pt),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();let j=L.getViewportCount();for(let pt=0;pt<j;pt++){let At=L.getViewport(pt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),k.viewport(o),L.updateMatrices(W,pt),n=L.getFrustum(),v(C,B,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===ni&&b(L,B),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,R)};function b(E,C){let B=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ai(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,B,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,B,f,g,null)}function _(E,C,B,M){let S=null,R=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=B.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=S.uuid,U=C.uuid,D=l[k];D===void 0&&(D={},l[k]=D);let G=D[U];G===void 0&&(G=S.clone(),D[U]=G,C.addEventListener("dispose",I)),S=G}if(S.visible=C.visible,S.wireframe=C.wireframe,M===ni?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=s.properties.get(S);k.light=B}return S}function v(E,C,B,M,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);let U=t.update(E),D=E.material;if(Array.isArray(D)){let G=U.groups;for(let H=0,W=G.length;H<W;H++){let L=G[H],$=D[L.materialIndex];if($&&$.visible){let j=_(E,$,M,S);E.onBeforeShadow(s,E,C,B,U,j,L),s.renderBufferDirect(B,null,U,j,E,L),E.onAfterShadow(s,E,C,B,U,j,L)}}}else if(D.visible){let G=_(E,D,M,S);E.onBeforeShadow(s,E,C,B,U,G,null),s.renderBufferDirect(B,null,U,G,E,null),E.onAfterShadow(s,E,C,B,U,G,null)}}let k=E.children;for(let U=0,D=k.length;U<D;U++)v(k[U],C,B,M,S)}function I(E){E.target.removeEventListener("dispose",I);for(let B in l){let M=l[B],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var dy={[oc]:ac,[cc]:uc,[lc]:dc,[Ns]:hc,[ac]:oc,[uc]:cc,[dc]:lc,[hc]:Ns};function fy(s,t){function e(){let F=!1,lt=new ce,Z=null,tt=new ce(0,0,0,0);return{setMask:function(ft){Z!==ft&&!F&&(s.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){F=ft},setClear:function(ft,ut,Ot,ve,Oe){Oe===!0&&(ft*=ve,ut*=ve,Ot*=ve),lt.set(ft,ut,Ot,ve),tt.equals(lt)===!1&&(s.clearColor(ft,ut,Ot,ve),tt.copy(lt))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,Z=null,tt=null,ft=null;return{setReversed:function(ut){if(lt!==ut){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ve=ft;ft=null,this.setClear(ve)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?ot(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ut){Z!==ut&&!F&&(s.depthMask(ut),Z=ut)},setFunc:function(ut){if(lt&&(ut=dy[ut]),tt!==ut){switch(ut){case oc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case lc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ut}},setLocked:function(ut){F=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),s.clearDepth(ut),ft=ut)},reset:function(){F=!1,Z=null,tt=null,ft=null,lt=!1}}}function i(){let F=!1,lt=null,Z=null,tt=null,ft=null,ut=null,Ot=null,ve=null,Oe=null;return{setTest:function(re){F||(re?ot(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(re){lt!==re&&!F&&(s.stencilMask(re),lt=re)},setFunc:function(re,wn,$n){(Z!==re||tt!==wn||ft!==$n)&&(s.stencilFunc(re,wn,$n),Z=re,tt=wn,ft=$n)},setOp:function(re,wn,$n){(ut!==re||Ot!==wn||ve!==$n)&&(s.stencilOp(re,wn,$n),ut=re,Ot=wn,ve=$n)},setLocked:function(re){F=re},setClear:function(re){Oe!==re&&(s.clearStencil(re),Oe=re)},reset:function(){F=!1,lt=null,Z=null,tt=null,ft=null,ut=null,Ot=null,ve=null,Oe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,p=null,b=null,_=null,v=null,I=null,E=null,C=new Ut(0,0,0),B=0,M=!1,S=null,R=null,k=null,U=null,D=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),H=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),H=W>=2);let $=null,j={},pt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),rt=new ce().fromArray(pt),J=new ce().fromArray(At);function nt(F,lt,Z,tt){let ft=new Uint8Array(4),ut=s.createTexture();s.bindTexture(F,ut),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<Z;Ot++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(lt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ut}let mt={};mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(Ns),$t(!1),jt(fh),ot(s.CULL_FACE),V(Ci);function ot(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Ct(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Dt(F,lt){return d[F]!==lt?(s.bindFramebuffer(F,lt),d[F]=lt,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function qt(F,lt){let Z=f,tt=!1;if(F){Z=u.get(lt),Z===void 0&&(Z=[],u.set(lt,Z));let ft=F.textures;if(Z.length!==ft.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ot=ft.length;ut<Ot;ut++)Z[ut]=s.COLOR_ATTACHMENT0+ut;Z.length=ft.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function ye(F){return y!==F?(s.useProgram(F),y=F,!0):!1}let Qt={[Zi]:s.FUNC_ADD,[Hd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};Qt[Gd]=s.MIN,Qt[qd]=s.MAX;let Se={[Xd]:s.ZERO,[Yd]:s.ONE,[Zd]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[Qd]:s.DST_COLOR,[jd]:s.DST_ALPHA,[$d]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[Kd]:s.ONE_MINUS_DST_COLOR,[Jd]:s.ONE_MINUS_DST_ALPHA,[ef]:s.CONSTANT_COLOR,[nf]:s.ONE_MINUS_CONSTANT_COLOR,[sf]:s.CONSTANT_ALPHA,[rf]:s.ONE_MINUS_CONSTANT_ALPHA};function V(F,lt,Z,tt,ft,ut,Ot,ve,Oe,re){if(F===Ci){g===!0&&(Ct(s.BLEND),g=!1);return}if(g===!1&&(ot(s.BLEND),g=!0),F!==kd){if(F!==m||re!==M){if((p!==Zi||v!==Zi)&&(s.blendEquation(s.FUNC_ADD),p=Zi,v=Zi),re)switch(F){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,_=null,I=null,E=null,C.set(0,0,0),B=0,m=F,M=re}return}ft=ft||lt,ut=ut||Z,Ot=Ot||tt,(lt!==p||ft!==v)&&(s.blendEquationSeparate(Qt[lt],Qt[ft]),p=lt,v=ft),(Z!==b||tt!==_||ut!==I||Ot!==E)&&(s.blendFuncSeparate(Se[Z],Se[tt],Se[ut],Se[Ot]),b=Z,_=tt,I=ut,E=Ot),(ve.equals(C)===!1||Oe!==B)&&(s.blendColor(ve.r,ve.g,ve.b,Oe),C.copy(ve),B=Oe),m=F,M=!1}function dn(F,lt){F.side===Pn?Ct(s.CULL_FACE):ot(s.CULL_FACE);let Z=F.side===He;lt&&(Z=!Z),$t(Z),F.blending===Ps&&F.transparent===!1?V(Ci):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function jt(F){F!==zd?(ot(s.CULL_FACE),F!==R&&(F===fh?s.cullFace(s.BACK):F===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),R=F}function Pt(F){F!==k&&(H&&s.lineWidth(F),k=F)}function de(F,lt,Z){F?(ot(s.POLYGON_OFFSET_FILL),(U!==lt||D!==Z)&&(s.polygonOffset(lt,Z),U=lt,D=Z)):Ct(s.POLYGON_OFFSET_FILL)}function Rt(F){F?ot(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function P(F){F===void 0&&(F=s.TEXTURE0+G-1),$!==F&&(s.activeTexture(F),$=F)}function w(F,lt,Z){Z===void 0&&($===null?Z=s.TEXTURE0+G-1:Z=$);let tt=j[Z];tt===void 0&&(tt={type:void 0,texture:void 0},j[Z]=tt),(tt.type!==F||tt.texture!==lt)&&($!==Z&&(s.activeTexture(Z),$=Z),s.bindTexture(F,lt||mt[F]),tt.type=F,tt.texture=lt)}function q(){let F=j[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(F){rt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function xt(F){J.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function Jt(F,lt){let Z=l.get(lt);Z===void 0&&(Z=new WeakMap,l.set(lt,Z));let tt=Z.get(F);tt===void 0&&(tt=s.getUniformBlockIndex(lt,F.name),Z.set(F,tt))}function Ht(F,lt){let tt=l.get(lt).get(F);c.get(lt)!==tt&&(s.uniformBlockBinding(lt,tt,F.__bindingPointIndex),c.set(lt,tt))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,j={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,p=null,b=null,_=null,v=null,I=null,E=null,C=new Ut(0,0,0),B=0,M=!1,S=null,R=null,k=null,U=null,D=null,rt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Dt,drawBuffers:qt,useProgram:ye,setBlending:V,setMaterial:dn,setFlipSided:$t,setCullFace:jt,setLineWidth:Pt,setPolygonOffset:de,setScissorTest:Rt,activeTexture:P,bindTexture:w,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:yt,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:it,texSubImage2D:Q,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Bt,viewport:xt,reset:he}}function du(s,t,e,n){let i=py(n);switch(e){case Cu:return s*t;case Pu:return s*t;case Iu:return s*t*2;case Tl:return s*t/i.components*i.byteLength;case Cl:return s*t/i.components*i.byteLength;case Bu:return s*t*2/i.components*i.byteLength;case Rl:return s*t*2/i.components*i.byteLength;case Ru:return s*t*3/i.components*i.byteLength;case In:return s*t*4/i.components*i.byteLength;case Pl:return s*t*4/i.components*i.byteLength;case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yo:case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yc:case vc:return Math.max(s,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(s,8)*Math.max(t,8)/2;case _c:case bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vo:case Uc:case Oc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Lu:case zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Vc:case kc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function py(s){switch(s){case oi:case Eu:return{byteLength:1,components:1};case dr:case Au:case xr:return{byteLength:2,components:1};case El:case Al:return{byteLength:2,components:4};case Ki:case wl:case Vn:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function my(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,w){return f?new OffscreenCanvas(P,w):Mo("canvas")}function g(P,w,q){let K=1,et=Rt(P);if((et.width>q||et.height>q)&&(K=q/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let Q=Math.floor(K*et.width),Mt=Math.floor(K*et.height);d===void 0&&(d=y(Q,Mt));let ht=w?y(Q,Mt):d;return ht.width=Q,ht.height=Mt,ht.getContext("2d").drawImage(P,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Mt+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,w,q,K,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=w;if(w===s.RED&&(q===s.FLOAT&&(Q=s.R32F),q===s.HALF_FLOAT&&(Q=s.R16F),q===s.UNSIGNED_BYTE&&(Q=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.R8UI),q===s.UNSIGNED_SHORT&&(Q=s.R16UI),q===s.UNSIGNED_INT&&(Q=s.R32UI),q===s.BYTE&&(Q=s.R8I),q===s.SHORT&&(Q=s.R16I),q===s.INT&&(Q=s.R32I)),w===s.RG&&(q===s.FLOAT&&(Q=s.RG32F),q===s.HALF_FLOAT&&(Q=s.RG16F),q===s.UNSIGNED_BYTE&&(Q=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RG8UI),q===s.UNSIGNED_SHORT&&(Q=s.RG16UI),q===s.UNSIGNED_INT&&(Q=s.RG32UI),q===s.BYTE&&(Q=s.RG8I),q===s.SHORT&&(Q=s.RG16I),q===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),q===s.UNSIGNED_INT&&(Q=s.RGB32UI),q===s.BYTE&&(Q=s.RGB8I),q===s.SHORT&&(Q=s.RGB16I),q===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),q===s.UNSIGNED_INT&&(Q=s.RGBA32UI),q===s.BYTE&&(Q=s.RGBA8I),q===s.SHORT&&(Q=s.RGBA16I),q===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),w===s.RGBA){let Mt=et?Zo:te.getTransfer(K);q===s.FLOAT&&(Q=s.RGBA32F),q===s.HALF_FLOAT&&(Q=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Q=Mt===ae?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(P,w){let q;return P?w===null||w===Ki||w===Us?q=s.DEPTH24_STENCIL8:w===Vn?q=s.DEPTH32F_STENCIL8:w===dr&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ki||w===Us?q=s.DEPTH_COMPONENT24:w===Vn?q=s.DEPTH_COMPONENT32F:w===dr&&(q=s.DEPTH_COMPONENT16),q}function I(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){let w=P.target;w.removeEventListener("dispose",E),B(w),w.isVideoTexture&&h.delete(w)}function C(P){let w=P.target;w.removeEventListener("dispose",C),S(w)}function B(P){let w=n.get(P);if(w.__webglInit===void 0)return;let q=P.source,K=u.get(q);if(K){let et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys(K).length===0&&u.delete(q)}n.remove(P)}function M(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let q=P.source,K=u.get(q);delete K[w.__cacheKey],o.memory.textures--}function S(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let et=0;et<w.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[K][et]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=P.textures;for(let K=0,et=q.length;K<et;K++){let Q=n.get(q[K]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(P)}let R=0;function k(){R=0}function U(){let P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function D(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function G(P,w){let q=n.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,P,w);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function H(P,w){let q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function W(P,w){let q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function L(P,w){let q=n.get(P);if(P.version>0&&q.__version!==P.version){nt(q,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}let $={[ur]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[mc]:s.MIRRORED_REPEAT},j={[cn]:s.NEAREST,[pf]:s.NEAREST_MIPMAP_NEAREST,[Wr]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Aa]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},pt={[xf]:s.NEVER,[wf]:s.ALWAYS,[vf]:s.LESS,[Fu]:s.LEQUAL,[_f]:s.EQUAL,[Sf]:s.GEQUAL,[bf]:s.GREATER,[Mf]:s.NOTEQUAL};function At(P,w){if(w.type===Vn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Aa||w.magFilter===Wr||w.magFilter===Qi||w.minFilter===zn||w.minFilter===Aa||w.minFilter===Wr||w.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,$[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,$[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,$[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,j[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==Wr&&w.minFilter!==Qi||w.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function rt(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));let K=w.source,et=u.get(K);et===void 0&&(et={},u.set(K,et));let Q=D(w);if(Q!==P.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[Q].usedTimes++;let Mt=et[P.__cacheKey];Mt!==void 0&&(et[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(w)),P.__cacheKey=Q,P.__webglTexture=et[Q].texture}return q}function J(P,w,q){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);let et=rt(P,w),Q=w.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+q);let Mt=n.get(Q);if(Q.version!==Mt.__version||et===!0){e.activeTexture(s.TEXTURE0+q);let ht=te.getPrimaries(te.workingColorSpace),gt=w.colorSpace===Ti?null:te.getPrimaries(w.colorSpace),Kt=w.colorSpace===Ti||ht===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let it=g(w.image,!1,i.maxTextureSize);it=de(w,it);let yt=r.convert(w.format,w.colorSpace),It=r.convert(w.type),Bt=_(w.internalFormat,yt,It,w.colorSpace,w.isVideoTexture);At(K,w);let xt,Jt=w.mipmaps,Ht=w.isVideoTexture!==!0,he=Mt.__version===void 0||et===!0,F=Q.dataReady,lt=I(w,it);if(w.isDepthTexture)Bt=v(w.format===Os,w.type),he&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,yt,It,null));else if(w.isDataTexture)if(Jt.length>0){Ht&&he&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,Jt[0].width,Jt[0].height);for(let Z=0,tt=Jt.length;Z<tt;Z++)xt=Jt[Z],Ht?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,It,xt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,xt.width,xt.height,0,yt,It,xt.data);w.generateMipmaps=!1}else Ht?(he&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,it.width,it.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,yt,It,it.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,yt,It,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Bt,Jt[0].width,Jt[0].height,it.depth);for(let Z=0,tt=Jt.length;Z<tt;Z++)if(xt=Jt[Z],w.format!==In)if(yt!==null)if(Ht){if(F)if(w.layerUpdates.size>0){let ft=du(xt.width,xt.height,w.format,w.type);for(let ut of w.layerUpdates){let Ot=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,ut,xt.width,xt.height,1,yt,Ot)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,yt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,yt,It,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,xt.width,xt.height,it.depth,0,yt,It,xt.data)}else{Ht&&he&&e.texStorage2D(s.TEXTURE_2D,lt,Bt,Jt[0].width,Jt[0].height);for(let Z=0,tt=Jt.length;Z<tt;Z++)xt=Jt[Z],w.format!==In?yt!==null?Ht?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Bt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,It,xt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,xt.width,xt.height,0,yt,It,xt.data)}else if(w.isDataArrayTexture)if(Ht){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Bt,it.width,it.height,it.depth),F)if(w.layerUpdates.size>0){let Z=du(it.width,it.height,w.format,w.type);for(let tt of w.layerUpdates){let ft=it.data.subarray(tt*Z/it.data.BYTES_PER_ELEMENT,(tt+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,yt,It,ft)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,It,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,yt,It,it.data);else if(w.isData3DTexture)Ht?(he&&e.texStorage3D(s.TEXTURE_3D,lt,Bt,it.width,it.height,it.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,It,it.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,yt,It,it.data);else if(w.isFramebufferTexture){if(he)if(Ht)e.texStorage2D(s.TEXTURE_2D,lt,Bt,it.width,it.height);else{let Z=it.width,tt=it.height;for(let ft=0;ft<lt;ft++)e.texImage2D(s.TEXTURE_2D,ft,Bt,Z,tt,0,yt,It,null),Z>>=1,tt>>=1}}else if(Jt.length>0){if(Ht&&he){let Z=Rt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Bt,Z.width,Z.height)}for(let Z=0,tt=Jt.length;Z<tt;Z++)xt=Jt[Z],Ht?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,yt,It,xt):e.texImage2D(s.TEXTURE_2D,Z,Bt,yt,It,xt);w.generateMipmaps=!1}else if(Ht){if(he){let Z=Rt(it);e.texStorage2D(s.TEXTURE_2D,lt,Bt,Z.width,Z.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,It,it)}else e.texImage2D(s.TEXTURE_2D,0,Bt,yt,It,it);m(w)&&p(K),Mt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function nt(P,w,q){if(w.image.length!==6)return;let K=rt(P,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);let Q=n.get(et);if(et.version!==Q.__version||K===!0){e.activeTexture(s.TEXTURE0+q);let Mt=te.getPrimaries(te.workingColorSpace),ht=w.colorSpace===Ti?null:te.getPrimaries(w.colorSpace),gt=w.colorSpace===Ti||Mt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Kt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Kt&&!it?yt[tt]=g(w.image[tt],!0,i.maxCubemapSize):yt[tt]=it?w.image[tt].image:w.image[tt],yt[tt]=de(w,yt[tt]);let It=yt[0],Bt=r.convert(w.format,w.colorSpace),xt=r.convert(w.type),Jt=_(w.internalFormat,Bt,xt,w.colorSpace),Ht=w.isVideoTexture!==!0,he=Q.__version===void 0||K===!0,F=et.dataReady,lt=I(w,It);At(s.TEXTURE_CUBE_MAP,w);let Z;if(Kt){Ht&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,It.width,It.height);for(let tt=0;tt<6;tt++){Z=yt[tt].mipmaps;for(let ft=0;ft<Z.length;ft++){let ut=Z[ft];w.format!==In?Bt!==null?Ht?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Bt,xt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Jt,ut.width,ut.height,0,Bt,xt,ut.data)}}}else{if(Z=w.mipmaps,Ht&&he){Z.length>0&&lt++;let tt=Rt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Ht?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Bt,xt,yt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,yt[tt].width,yt[tt].height,0,Bt,xt,yt[tt].data);for(let ft=0;ft<Z.length;ft++){let Ot=Z[ft].image[tt].image;Ht?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Ot.width,Ot.height,Bt,xt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Jt,Ot.width,Ot.height,0,Bt,xt,Ot.data)}}else{Ht?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,xt,yt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,Bt,xt,yt[tt]);for(let ft=0;ft<Z.length;ft++){let ut=Z[ft];Ht?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Bt,xt,ut.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Jt,Bt,xt,ut.image[tt])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),Q.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function mt(P,w,q,K,et,Q){let Mt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),gt=_(q.internalFormat,Mt,ht,q.colorSpace),Kt=n.get(w),it=n.get(q);if(it.__renderTarget=w,!Kt.__hasExternalTextures){let yt=Math.max(1,w.width>>Q),It=Math.max(1,w.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,gt,yt,It,w.depth,0,Mt,ht,null):e.texImage2D(et,Q,gt,yt,It,0,Mt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,it.__webglTexture,0,$t(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,it.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(P,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let K=w.depthTexture,et=K&&K.isDepthTexture?K.type:null,Q=v(w.stencilBuffer,et),Mt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=$t(w);jt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Q,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,P)}else{let K=w.textures;for(let et=0;et<K.length;et++){let Q=K[et],Mt=r.convert(Q.format,Q.colorSpace),ht=r.convert(Q.type),gt=_(Q.internalFormat,Mt,ht,Q.colorSpace),Kt=$t(w);q&&jt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,gt,w.width,w.height):jt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,gt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,gt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);let et=K.__webglTexture,Q=$t(w);if(w.depthTexture.format===Is)jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(w.depthTexture.format===Os)jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Dt(P){let w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=K}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,P)}else if(q){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(w.__webglDepthbuffer[K],P,!1);else{let et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ot(w.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(P,w,q){let K=n.get(P);w!==void 0&&mt(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Dt(P)}function ye(P){let w=P.texture,q=n.get(P),K=n.get(w);P.addEventListener("dispose",C);let et=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let gt=0;gt<w.mipmaps.length;gt++)q.__webglFramebuffer[ht][gt]=s.createFramebuffer()}else q.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)q.__webglFramebuffer[ht]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ht=0,gt=et.length;ht<gt;ht++){let Kt=n.get(et[ht]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&jt(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let gt=et[ht];q.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);let Kt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),yt=_(gt.internalFormat,Kt,it,gt.colorSpace,P.isXRRenderTarget===!0),It=$t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,yt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),At(s.TEXTURE_CUBE_MAP,w);for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)mt(q.__webglFramebuffer[ht][gt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else mt(q.__webglFramebuffer[ht],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,gt=et.length;ht<gt;ht++){let Kt=et[ht],it=n.get(Kt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),At(s.TEXTURE_2D,Kt),mt(q.__webglFramebuffer,P,Kt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),At(ht,w),w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)mt(q.__webglFramebuffer[gt],P,w,s.COLOR_ATTACHMENT0,ht,gt);else mt(q.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,ht,0);m(w)&&p(ht),e.unbindTexture()}P.depthBuffer&&Dt(P)}function Qt(P){let w=P.textures;for(let q=0,K=w.length;q<K;q++){let et=w[q];if(m(et)){let Q=b(P),Mt=n.get(et).__webglTexture;e.bindTexture(Q,Mt),p(Q),e.unbindTexture()}}}let Se=[],V=[];function dn(P){if(P.samples>0){if(jt(P)===!1){let w=P.textures,q=P.width,K=P.height,et=s.COLOR_BUFFER_BIT,Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(P),ht=w.length>1;if(ht)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let Kt=n.get(w[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,q,K,0,0,q,K,et,s.NEAREST),c===!0&&(Se.length=0,V.length=0,Se.push(s.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Se.push(Q),V.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let Kt=n.get(w[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function $t(P){return Math.min(i.maxSamples,P.samples)}function jt(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function de(P,w){let q=P.colorSpace,K=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Ws&&q!==Ti&&(te.getTransfer(q)===ae?(K!==In||et!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Rt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=L,this.rebindTextures=qt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=jt}function gy(s,t){function e(n,i=Ti){let r,o=te.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===El)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return s.BYTE;if(n===Au)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===wl)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===xr)return s.HALF_FLOAT;if(n===Cu)return s.ALPHA;if(n===Ru)return s.RGB;if(n===In)return s.RGBA;if(n===Pu)return s.LUMINANCE;if(n===Iu)return s.LUMINANCE_ALPHA;if(n===Is)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===Cl)return s.RED_INTEGER;if(n===Bu)return s.RG;if(n===Rl)return s.RG_INTEGER;if(n===Pl)return s.RGBA_INTEGER;if(n===mo||n===go||n===yo||n===xo)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===yc||n===xc||n===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===bc||n===Mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===bc)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===wc||n===Ec||n===Ac||n===Tc||n===Cc||n===Rc||n===Pc||n===Ic||n===Bc||n===Lc||n===Nc||n===Fc||n===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===Uc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===zc||n===Vc||n===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var il=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},si=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},yy={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,y=.005;l.inputState.pinching&&u>f+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`,sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:xy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rl=class extends Ii{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,y=null,g=new sl,m=e.getContextAttributes(),p=null,b=null,_=[],v=[],I=new Yt,E=null,C=new ke;C.viewport=new ce;let B=new ke;B.viewport=new ce;let M=[C,B],S=new il,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=_[J];return nt===void 0&&(nt=new hr,_[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=_[J];return nt===void 0&&(nt=new hr,_[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=_[J];return nt===void 0&&(nt=new hr,_[J]=nt),nt.getHandSpace()};function U(J){let nt=v.indexOf(J.inputSource);if(nt===-1)return;let mt=_[nt];mt!==void 0&&(mt.update(J.inputSource,J.frame,l||o),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let J=0;J<_.length;J++){let nt=v[J];nt!==null&&(v[J]=null,_[J].disconnect(nt))}R=null,k=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,b=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ai(f.framebufferWidth,f.framebufferHeight,{format:In,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,mt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Os:Is,mt=m.stencil?Us:Ki);let Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ai(u.textureWidth,u.textureHeight,{format:In,type:oi,depthTexture:new Io(u.textureWidth,u.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(J){for(let nt=0;nt<J.removed.length;nt++){let mt=J.removed[nt],ot=v.indexOf(mt);ot>=0&&(v[ot]=null,_[ot].disconnect(mt))}for(let nt=0;nt<J.added.length;nt++){let mt=J.added[nt],ot=v.indexOf(mt);if(ot===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=v.length){v.push(mt),ot=Dt;break}else if(v[Dt]===null){v[Dt]=mt,ot=Dt;break}if(ot===-1)break}let Ct=_[ot];Ct&&Ct.connect(mt)}}let H=new N,W=new N;function L(J,nt,mt){H.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);let ot=H.distanceTo(W),Ct=nt.projectionMatrix.elements,Dt=mt.projectionMatrix.elements,qt=Ct[14]/(Ct[10]-1),ye=Ct[14]/(Ct[10]+1),Qt=(Ct[9]+1)/Ct[5],Se=(Ct[9]-1)/Ct[5],V=(Ct[8]-1)/Ct[0],dn=(Dt[8]+1)/Dt[0],$t=qt*V,jt=qt*dn,Pt=ot/(-V+dn),de=Pt*-V;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(Pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Rt=qt+Pt,P=ye+Pt,w=$t-de,q=jt+(ot-de),K=Qt*ye/P*Rt,et=Se*ye/P*Rt;J.projectionMatrix.makePerspective(w,q,K,et,Rt,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,mt=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),S.near=B.near=C.near=nt,S.far=B.far=C.far=mt,(R!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,k=S.far),C.layers.mask=J.layers.mask|2,B.layers.mask=J.layers.mask|4,S.layers.mask=C.layers.mask|B.layers.mask;let ot=J.parent,Ct=S.cameras;$(S,ot);for(let Dt=0;Dt<Ct.length;Dt++)$(Ct[Dt],ot);Ct.length===2?L(S,C,B):S.projectionMatrix.copy(C.projectionMatrix),j(J,S,ot)};function j(J,nt,mt){mt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let pt=null;function At(J,nt){if(h=nt.getViewerPose(l||o),y=nt,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ot=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Dt=0;Dt<mt.length;Dt++){let qt=mt[Dt],ye=null;if(f!==null)ye=f.getViewport(qt);else{let Se=d.getViewSubImage(u,qt);ye=Se.viewport,Dt===0&&(t.setRenderTargetTextures(b,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(b))}let Qt=M[Dt];Qt===void 0&&(Qt=new ke,Qt.layers.enable(Dt),Qt.viewport=new ce,M[Dt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ye.x,ye.y,ye.width,ye.height),Dt===0&&(S.matrix.copy(Qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(Qt)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Dt=d.getDepthInformation(mt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,i.renderState)}}for(let mt=0;mt<_.length;mt++){let ot=v[mt],Ct=_[mt];ot!==null&&Ct!==void 0&&Ct.update(ot,nt,l||o)}pt&&pt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),y=null}let rt=new zu;rt.setAnimationLoop(At),this.setAnimationLoop=function(J){pt=J},this.dispose=function(){}}},Xi=new kn,_y=new oe;function by(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),y(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,Xi.copy(v),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Xi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let v=_.program;n.uniformBlockBinding(b,v)}function l(b,_){let v=i[b.id];v===void 0&&(y(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(b,I);let E=t.render.frame;r[b.id]!==E&&(u(b),r[b.id]=E)}function h(b){let _=d();b.__bindingPointIndex=_;let v=s.createBuffer(),I=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let _=i[b.id],v=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,C=v.length;E<C;E++){let B=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,S=B.length;M<S;M++){let R=B[M];if(f(R,E,M,I)===!0){let k=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],D=0;for(let G=0;G<U.length;G++){let H=U[G],W=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+D,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,_,v,I){let E=b.value,C=_+"_"+v;if(I[C]===void 0)return typeof E=="number"||typeof E=="boolean"?I[C]=E:I[C]=E.clone(),!0;{let B=I[C];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return I[C]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function y(b){let _=b.uniforms,v=0,I=16;for(let C=0,B=_.length;C<B;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,R=M.length;S<R;S++){let k=M[S],U=Array.isArray(k.value)?k.value:[k.value];for(let D=0,G=U.length;D<G;D++){let H=U[D],W=g(H),L=v%I,$=L%W.boundary,j=L+$;v+=$,j!==0&&I-j<W.storage&&(v+=I-j),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=W.storage}}}let E=v%I;return E>0&&(v+=I-E),b.__size=v,b.__cache={},this}function g(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Bo=class{constructor(t={}){let{canvas:e=Af(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let y=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Ri,this.toneMappingExposure=1;let v=this,I=!1,E=0,C=0,B=null,M=-1,S=null,R=new ce,k=new ce,U=null,D=new Ut(0),G=0,H=e.width,W=e.height,L=1,$=null,j=null,pt=new ce(0,0,H,W),At=new ce(0,0,H,W),rt=!1,J=new mr,nt=!1,mt=!1,ot=new oe,Ct=new oe,Dt=new N,qt=new ce,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Se(){return B===null?L:1}let V=n;function dn(A,O){return e.getContext(A,O)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),V===null){let O="webgl2";if(V=dn(O,A),V===null)throw dn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $t,jt,Pt,de,Rt,P,w,q,K,et,Q,Mt,ht,gt,Kt,it,yt,It,Bt,xt,Jt,Ht,he,F;function lt(){$t=new Og(V),$t.init(),Ht=new gy(V,$t),jt=new Bg(V,$t,t,Ht),Pt=new fy(V,$t),jt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),de=new kg(V),Rt=new ty,P=new my(V,$t,Pt,Rt,jt,Ht,de),w=new Ng(v),q=new Ug(v),K=new Zf(V),he=new Pg(V,K),et=new zg(V,K,de,he),Q=new Wg(V,et,K,de),Bt=new Hg(V,jt,P),it=new Lg(Rt),Mt=new K0(v,w,q,$t,jt,he,it),ht=new by(v,Rt),gt=new ny,Kt=new cy($t),It=new Rg(v,w,q,Pt,Q,f,c),yt=new uy(v,Q,jt),F=new My(V,de,jt,Pt),xt=new Ig(V,$t,de),Jt=new Vg(V,$t,de),de.programs=Mt.programs,v.capabilities=jt,v.extensions=$t,v.properties=Rt,v.renderLists=gt,v.shadowMap=yt,v.state=Pt,v.info=de}lt();let Z=new rl(v,V);this.xr=Z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=$t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=$t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(H,W,!1))},this.getSize=function(A){return A.set(H,W)},this.setSize=function(A,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,W=O,e.width=Math.floor(A*L),e.height=Math.floor(O*L),X===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(H*L,W*L).floor()},this.setDrawingBufferSize=function(A,O,X){H=A,W=O,L=X,e.width=Math.floor(A*X),e.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(pt)},this.setViewport=function(A,O,X,Y){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,O,X,Y),Pt.viewport(R.copy(pt).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,O,X,Y){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,O,X,Y),Pt.scissor(k.copy(At).multiplyScalar(L).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){Pt.setScissorTest(rt=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(A=!0,O=!0,X=!0){let Y=0;if(A){let z=!1;if(B!==null){let st=B.texture.format;z=st===Pl||st===Rl||st===Cl}if(z){let st=B.texture.type,dt=st===oi||st===Ki||st===dr||st===Us||st===El||st===Al,vt=It.getClearColor(),_t=It.getClearAlpha(),Lt=vt.r,zt=vt.g,bt=vt.b;dt?(y[0]=Lt,y[1]=zt,y[2]=bt,y[3]=_t,V.clearBufferuiv(V.COLOR,0,y)):(g[0]=Lt,g[1]=zt,g[2]=bt,g[3]=_t,V.clearBufferiv(V.COLOR,0,g))}else Y|=V.COLOR_BUFFER_BIT}O&&(Y|=V.DEPTH_BUFFER_BIT),X&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Kt.dispose(),Rt.dispose(),w.dispose(),q.dispose(),Q.dispose(),he.dispose(),F.dispose(),Mt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",rh),Z.removeEventListener("sessionend",oh),Vi.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=de.autoReset,O=yt.enabled,X=yt.autoUpdate,Y=yt.needsUpdate,z=yt.type;lt(),de.autoReset=A,yt.enabled=O,yt.autoUpdate=X,yt.needsUpdate=Y,yt.type=z}function ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){let O=A.target;O.removeEventListener("dispose",Ot),ve(O)}function ve(A){Oe(A),Rt.remove(A)}function Oe(A){let O=Rt.get(A).programs;O!==void 0&&(O.forEach(function(X){Mt.releaseProgram(X)}),A.isShaderMaterial&&Mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,Y,z,st){O===null&&(O=ye);let dt=z.isMesh&&z.matrixWorld.determinant()<0,vt=Nd(A,O,X,Y,z);Pt.setMaterial(Y,dt);let _t=X.index,Lt=1;if(Y.wireframe===!0){if(_t=et.getWireframeAttribute(X),_t===void 0)return;Lt=2}let zt=X.drawRange,bt=X.attributes.position,ee=zt.start*Lt,ue=(zt.start+zt.count)*Lt;st!==null&&(ee=Math.max(ee,st.start*Lt),ue=Math.min(ue,(st.start+st.count)*Lt)),_t!==null?(ee=Math.max(ee,0),ue=Math.min(ue,_t.count)):bt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,bt.count));let fe=ue-ee;if(fe<0||fe===1/0)return;he.setup(z,Y,vt,X,_t);let $e,ne=xt;if(_t!==null&&($e=K.get(_t),ne=Jt,ne.setIndex($e)),z.isMesh)Y.wireframe===!0?(Pt.setLineWidth(Y.wireframeLinewidth*Se()),ne.setMode(V.LINES)):ne.setMode(V.TRIANGLES);else if(z.isLine){let St=Y.linewidth;St===void 0&&(St=1),Pt.setLineWidth(St*Se()),z.isLineSegments?ne.setMode(V.LINES):z.isLineLoop?ne.setMode(V.LINE_LOOP):ne.setMode(V.LINE_STRIP)}else z.isPoints?ne.setMode(V.POINTS):z.isSprite&&ne.setMode(V.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let St=z._multiDrawStarts,jn=z._multiDrawCounts,ie=z._multiDrawCount,En=_t?K.get(_t).bytesPerElement:1,fs=Rt.get(Y).currentProgram.getUniforms();for(let rn=0;rn<ie;rn++)fs.setValue(V,"_gl_DrawID",rn),ne.render(St[rn]/En,jn[rn])}else if(z.isInstancedMesh)ne.renderInstances(ee,fe,z.count);else if(X.isInstancedBufferGeometry){let St=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,jn=Math.min(X.instanceCount,St);ne.renderInstances(ee,fe,jn)}else ne.render(ee,fe)};function re(A,O,X){A.transparent===!0&&A.side===Pn&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,Hr(A,O,X),A.side=Pi,A.needsUpdate=!0,Hr(A,O,X),A.side=Pn):Hr(A,O,X)}this.compile=function(A,O,X=null){X===null&&(X=A),p=Kt.get(X),p.init(O),_.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==X&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let st=z.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let vt=st[dt];re(vt,X,z),Y.add(vt)}else re(st,X,z),Y.add(st)}),_.pop(),p=null,Y},this.compileAsync=function(A,O,X=null){let Y=this.compile(A,O,X);return new Promise(z=>{function st(){if(Y.forEach(function(dt){Rt.get(dt).currentProgram.isReady()&&Y.delete(dt)}),Y.size===0){z(A);return}setTimeout(st,10)}$t.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let wn=null;function $n(A){wn&&wn(A)}function rh(){Vi.stop()}function oh(){Vi.start()}let Vi=new zu;Vi.setAnimationLoop($n),typeof self!="undefined"&&Vi.setContext(self),this.setAnimationLoop=function(A){wn=A,Z.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Z.addEventListener("sessionstart",rh),Z.addEventListener("sessionend",oh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,B),p=Kt.get(A,_.length),p.init(O),_.push(p),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(Ct),mt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,mt),m=gt.get(A,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&Ea(st,O,-1/0,v.sortObjects)}Ea(A,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,j),Qt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Qt&&It.addToRenderList(m,A),this.info.render.frame++,nt===!0&&it.beginShadows();let X=p.state.shadowsArray;yt.render(X,A,O),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){let st=O.cameras;if(z.length>0)for(let dt=0,vt=st.length;dt<vt;dt++){let _t=st[dt];ch(Y,z,A,_t)}Qt&&It.render(A);for(let dt=0,vt=st.length;dt<vt;dt++){let _t=st[dt];ah(m,A,_t,_t.viewport)}}else z.length>0&&ch(Y,z,A,O),Qt&&It.render(A),ah(m,A,O);B!==null&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(v,A,O),he.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ea(A,O,X,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Y&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let dt=Q.update(A),vt=A.material;vt.visible&&m.push(A,dt,vt,X,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){let dt=Q.update(A),vt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),qt.copy(dt.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(vt)){let _t=dt.groups;for(let Lt=0,zt=_t.length;Lt<zt;Lt++){let bt=_t[Lt],ee=vt[bt.materialIndex];ee&&ee.visible&&m.push(A,dt,ee,X,qt.z,bt)}}else vt.visible&&m.push(A,dt,vt,X,qt.z,null)}}let st=A.children;for(let dt=0,vt=st.length;dt<vt;dt++)Ea(st[dt],O,X,Y)}function ah(A,O,X,Y){let z=A.opaque,st=A.transmissive,dt=A.transparent;p.setupLightsView(X),nt===!0&&it.setGlobalState(v.clippingPlanes,X),Y&&Pt.viewport(R.copy(Y)),z.length>0&&kr(z,O,X),st.length>0&&kr(st,O,X),dt.length>0&&kr(dt,O,X),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ch(A,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?xr:oi,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let st=p.state.transmissionRenderTarget[Y.id],dt=Y.viewport||R;st.setSize(dt.z,dt.w);let vt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(D),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Qt&&It.render(X);let _t=v.toneMapping;v.toneMapping=Ri;let Lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),nt===!0&&it.setGlobalState(v.clippingPlanes,Y),kr(A,X,Y),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),$t.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let bt=0,ee=O.length;bt<ee;bt++){let ue=O[bt],fe=ue.object,$e=ue.geometry,ne=ue.material,St=ue.group;if(ne.side===Pn&&fe.layers.test(Y.layers)){let jn=ne.side;ne.side=He,ne.needsUpdate=!0,lh(fe,X,Y,$e,ne,St),ne.side=jn,ne.needsUpdate=!0,zt=!0}}zt===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}v.setRenderTarget(vt),v.setClearColor(D,G),Lt!==void 0&&(Y.viewport=Lt),v.toneMapping=_t}function kr(A,O,X){let Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,st=A.length;z<st;z++){let dt=A[z],vt=dt.object,_t=dt.geometry,Lt=Y===null?dt.material:Y,zt=dt.group;vt.layers.test(X.layers)&&lh(vt,O,X,_t,Lt,zt)}}function lh(A,O,X,Y,z,st){A.onBeforeRender(v,O,X,Y,z,st),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,O,X,Y,A,st),z.transparent===!0&&z.side===Pn&&z.forceSinglePass===!1?(z.side=He,z.needsUpdate=!0,v.renderBufferDirect(X,O,Y,z,A,st),z.side=Pi,z.needsUpdate=!0,v.renderBufferDirect(X,O,Y,z,A,st),z.side=Pn):v.renderBufferDirect(X,O,Y,z,A,st),A.onAfterRender(v,O,X,Y,z,st)}function Hr(A,O,X){O.isScene!==!0&&(O=ye);let Y=Rt.get(A),z=p.state.lights,st=p.state.shadowsArray,dt=z.state.version,vt=Mt.getParameters(A,z.state,st,O,X),_t=Mt.getProgramCacheKey(vt),Lt=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?q:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",Ot),Lt=new Map,Y.programs=Lt);let zt=Lt.get(_t);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===dt)return uh(A,vt),zt}else vt.uniforms=Mt.getUniforms(A),A.onBeforeCompile(vt,v),zt=Mt.acquireProgram(vt,_t),Lt.set(_t,zt),Y.uniforms=vt.uniforms;let bt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(bt.clippingPlanes=it.uniform),uh(A,vt),Y.needsLights=Dd(A),Y.lightsStateVersion=dt,Y.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.directionalShadowMap.value=z.state.directionalShadowMap,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotShadowMap.value=z.state.spotShadowMap,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMap.value=z.state.pointShadowMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function hh(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Ls.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function uh(A,O){let X=Rt.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Nd(A,O,X,Y,z){O.isScene!==!0&&(O=ye),P.resetTextureUnits();let st=O.fog,dt=Y.isMeshStandardMaterial?O.environment:null,vt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ws,_t=(Y.isMeshStandardMaterial?q:w).get(Y.envMap||dt),Lt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),bt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color,fe=Ri;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(fe=v.toneMapping);let $e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=$e!==void 0?$e.length:0,St=Rt.get(Y),jn=p.state.lights;if(nt===!0&&(mt===!0||A!==S)){let fn=A===S&&Y.id===M;it.setState(Y,A,fn)}let ie=!1;Y.version===St.__version?(St.needsLights&&St.lightsStateVersion!==jn.state.version||St.outputColorSpace!==vt||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==_t||Y.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Lt||St.vertexTangents!==zt||St.morphTargets!==bt||St.morphNormals!==ee||St.morphColors!==ue||St.toneMapping!==fe||St.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,St.__version=Y.version);let En=St.currentProgram;ie===!0&&(En=Hr(Y,O,z));let fs=!1,rn=!1,Qs=!1,pe=En.getUniforms(),Un=St.uniforms;if(Pt.useProgram(En.program)&&(fs=!0,rn=!0,Qs=!0),Y.id!==M&&(M=Y.id,rn=!0),fs||S!==A){Pt.buffers.depth.getReversed()?(ot.copy(A.projectionMatrix),Cf(ot),Rf(ot),pe.setValue(V,"projectionMatrix",ot)):pe.setValue(V,"projectionMatrix",A.projectionMatrix),pe.setValue(V,"viewMatrix",A.matrixWorldInverse);let vi=pe.map.cameraPosition;vi!==void 0&&vi.setValue(V,Dt.setFromMatrixPosition(A.matrixWorld)),jt.logarithmicDepthBuffer&&pe.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,rn=!0,Qs=!0)}if(z.isSkinnedMesh){pe.setOptional(V,z,"bindMatrix"),pe.setOptional(V,z,"bindMatrixInverse");let fn=z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),pe.setValue(V,"boneTexture",fn.boneTexture,P))}z.isBatchedMesh&&(pe.setOptional(V,z,"batchingTexture"),pe.setValue(V,"batchingTexture",z._matricesTexture,P),pe.setOptional(V,z,"batchingIdTexture"),pe.setValue(V,"batchingIdTexture",z._indirectTexture,P),pe.setOptional(V,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(V,"batchingColorTexture",z._colorsTexture,P));let Ks=X.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Bt.update(z,X,En),(rn||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,pe.setValue(V,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Un.envMap.value=_t,Un.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),rn&&(pe.setValue(V,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&Fd(Un,Qs),st&&Y.fog===!0&&ht.refreshFogUniforms(Un,st),ht.refreshMaterialUniforms(Un,Y,L,W,p.state.transmissionRenderTarget[A.id]),Ls.upload(V,hh(St),Un,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(V,hh(St),Un,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(V,"center",z.center),pe.setValue(V,"modelViewMatrix",z.modelViewMatrix),pe.setValue(V,"normalMatrix",z.normalMatrix),pe.setValue(V,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let fn=Y.uniformsGroups;for(let vi=0,_i=fn.length;vi<_i;vi++){let dh=fn[vi];F.update(dh,En),F.bind(dh,En)}}return En}function Fd(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Dd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,O,X){Rt.get(A.texture).__webglTexture=O,Rt.get(A.depthTexture).__webglTexture=X;let Y=Rt.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let X=Rt.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,X=0){B=A,E=O,C=X;let Y=!0,z=null,st=!1,dt=!1;if(A){let _t=Rt.get(A);if(_t.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1;else if(_t.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(_t.__hasExternalTextures)P.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let bt=A.depthTexture;if(_t.__boundDepthTexture!==bt){if(bt!==null&&Rt.has(bt)&&(A.width!==bt.image.width||A.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);let zt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?z=zt[O][X]:z=zt[O],st=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?z=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[X]:z=zt,R.copy(A.viewport),k.copy(A.scissor),U=A.scissorTest}else R.copy(pt).multiplyScalar(L).floor(),k.copy(At).multiplyScalar(L).floor(),U=rt;if(Pt.bindFramebuffer(V.FRAMEBUFFER,z)&&Y&&Pt.drawBuffers(A,z),Pt.viewport(R),Pt.scissor(k),Pt.setScissorTest(U),st){let _t=Rt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,X)}else if(dt){let _t=Rt.get(A.texture),Lt=O||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,_t.__webglTexture,X||0,Lt)}M=-1},this.readRenderTargetPixels=function(A,O,X,Y,z,st,dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){Pt.bindFramebuffer(V.FRAMEBUFFER,vt);try{let _t=A.texture,Lt=_t.format,zt=_t.type;if(!jt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&X>=0&&X<=A.height-z&&V.readPixels(O,X,Y,z,Ht.convert(Lt),Ht.convert(zt),st)}finally{let _t=B!==null?Rt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(A,O,X,Y,z,st,dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){let _t=A.texture,Lt=_t.format,zt=_t.type;if(!jt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-Y&&X>=0&&X<=A.height-z){Pt.bindFramebuffer(V.FRAMEBUFFER,vt);let bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.bufferData(V.PIXEL_PACK_BUFFER,st.byteLength,V.STREAM_READ),V.readPixels(O,X,Y,z,Ht.convert(Lt),Ht.convert(zt),0);let ee=B!==null?Rt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,ee);let ue=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Tf(V,ue,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,st),V.deleteBuffer(bt),V.deleteSync(ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,X=0){A.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-X),z=Math.floor(A.image.width*Y),st=Math.floor(A.image.height*Y),dt=O!==null?O.x:0,vt=O!==null?O.y:0;P.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,dt,vt,z,st),Pt.unbindTexture()},this.copyTextureToTexture=function(A,O,X=null,Y=null,z=0){A.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],O=arguments[2],z=arguments[3]||0,X=null);let st,dt,vt,_t,Lt,zt,bt,ee,ue,fe=A.isCompressedTexture?A.mipmaps[z]:A.image;X!==null?(st=X.max.x-X.min.x,dt=X.max.y-X.min.y,vt=X.isBox3?X.max.z-X.min.z:1,_t=X.min.x,Lt=X.min.y,zt=X.isBox3?X.min.z:0):(st=fe.width,dt=fe.height,vt=fe.depth||1,_t=0,Lt=0,zt=0),Y!==null?(bt=Y.x,ee=Y.y,ue=Y.z):(bt=0,ee=0,ue=0);let $e=Ht.convert(O.format),ne=Ht.convert(O.type),St;O.isData3DTexture?(P.setTexture3D(O,0),St=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),St=V.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),St=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let jn=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),En=V.getParameter(V.UNPACK_SKIP_PIXELS),fs=V.getParameter(V.UNPACK_SKIP_ROWS),rn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,fe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_t),V.pixelStorei(V.UNPACK_SKIP_ROWS,Lt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zt);let Qs=A.isDataArrayTexture||A.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Un=Rt.get(A),Ks=Rt.get(O),fn=Rt.get(Un.__renderTarget),vi=Rt.get(Ks.__renderTarget);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,fn.__webglFramebuffer),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _i=0;_i<vt;_i++)Qs&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,z,zt+_i),A.isDepthTexture?(pe&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,z,ue+_i),V.blitFramebuffer(_t,Lt,st,dt,bt,ee,st,dt,V.DEPTH_BUFFER_BIT,V.NEAREST)):pe?V.copyTexSubImage3D(St,z,bt,ee,ue+_i,_t,Lt,st,dt):V.copyTexSubImage2D(St,z,bt,ee,ue+_i,_t,Lt,st,dt);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else pe?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(St,z,bt,ee,ue,st,dt,vt,$e,ne,fe.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(St,z,bt,ee,ue,st,dt,vt,$e,fe.data):V.texSubImage3D(St,z,bt,ee,ue,st,dt,vt,$e,ne,fe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,z,bt,ee,st,dt,$e,ne,fe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,z,bt,ee,fe.width,fe.height,$e,fe.data):V.texSubImage2D(V.TEXTURE_2D,z,bt,ee,st,dt,$e,ne,fe);V.pixelStorei(V.UNPACK_ROW_LENGTH,jn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,En),V.pixelStorei(V.UNPACK_SKIP_ROWS,fs),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rn),z===0&&O.generateMipmaps&&V.generateMipmap(St),Pt.unbindTexture()},this.copyTextureToTexture3D=function(A,O,X=null,Y=null,z=0){return A.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],O=arguments[3],z=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,X,Y,z)},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Pt.unbindTexture()},this.resetState=function(){E=0,C=0,B=null,Pt.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Lo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},No=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ol=class extends Ke{constructor(t=null,e=1,n=1,i,r,o,a,c,l=cn,h=cn,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=class extends Fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new oe,fu=new oe,ho=[],pu=new ci,Sy=new oe,rr=new se,or=new Bi,Do=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),pu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),or.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cs),fu.multiplyMatrices(n,Cs),rr.matrixWorld=fu,rr.raycast(t,ho);for(let o=0,a=ho.length;o<a;o++){let c=ho[o];c.instanceId=r,c.object=this,e.push(c)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(i*this.count),i,this.count,Tl,Vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var al=class extends Li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mu=new oe,cl=new fr,uo=new Bi,fo=new N,Uo=class extends We{constructor(t=new hn,e=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;mu.copy(i).invert(),cl.copy(t.ray).applyMatrix4(mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let y=u,g=f;y<g;y++){let m=l.getX(y);fo.fromBufferAttribute(d,m),gu(fo,m,c,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let y=u,g=f;y<g;y++)fo.fromBufferAttribute(d,y),gu(fo,y,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gu(s,t,e,n,i,r,o){let a=cl.distanceSqToPoint(s);if(a<e){let c=new N;cl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Oo=class extends Ke{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zo=class s extends hn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],y=0,g=[],m=n/2,p=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2));function b(){let v=new N,I=new N,E=0,C=(e-t)/n;for(let B=0;B<=r;B++){let M=[],S=B/r,R=S*(e-t)+t;for(let k=0;k<=i;k++){let U=k/i,D=U*c+a,G=Math.sin(D),H=Math.cos(D);I.x=R*G,I.y=-S*n+m,I.z=R*H,d.push(I.x,I.y,I.z),v.set(G,C,H).normalize(),u.push(v.x,v.y,v.z),f.push(U,1-S),M.push(y++)}g.push(M)}for(let B=0;B<i;B++)for(let M=0;M<r;M++){let S=g[M][B],R=g[M+1][B],k=g[M+1][B+1],U=g[M][B+1];(t>0||M!==0)&&(h.push(S,R,U),E+=3),(e>0||M!==r-1)&&(h.push(R,k,U),E+=3)}l.addGroup(p,E,0),p+=E}function _(v){let I=y,E=new Yt,C=new N,B=0,M=v===!0?t:e,S=v===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),y++;let R=y;for(let k=0;k<=i;k++){let D=k/i*c+a,G=Math.cos(D),H=Math.sin(D);C.x=M*H,C.y=m*S,C.z=M*G,d.push(C.x,C.y,C.z),u.push(0,S,0),E.x=G*.5+.5,E.y=H*.5*S+.5,f.push(E.x,E.y),y++}for(let k=0;k<i;k++){let U=I+k,D=R+k;v===!0?h.push(D,D+1,U):h.push(D+1,D,U),B+=3}l.addGroup(p,B,v===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gr=class s extends hn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new N,u=new N,f=[],y=[],g=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let E=I/e;d.x=-t*Math.cos(i+E*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+E*r)*Math.sin(o+_*a),y.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(E+v,1-_),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let _=h[p][b+1],v=h[p][b],I=h[p+1][b],E=h[p+1][b+1];(p!==0||o>0)&&f.push(_,v,E),(p!==n-1||c<Math.PI)&&f.push(v,I,E)}this.setIndex(f),this.setAttribute("position",new Ce(y,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vo=class s extends hn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new N,d=new N,u=new N;for(let f=0;f<=n;f++)for(let y=0;y<=i;y++){let g=y/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(y/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=i;y++){let g=(i+1)*f+y-1,m=(i+1)*(f-1)+y-1,p=(i+1)*(f-1)+y,b=(i+1)*f+y;o.push(g,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ge=class extends Li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function po(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Hs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends Hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=t,a=2*e-n;break;case vh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:o=t,c=2*n-e;break;case vh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,y=(n-e)/(i-e),g=y*y,m=g*y,p=-u*m+2*u*g-u*y,b=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*y+1,_=(-1-f)*m+(1.5+f)*g+.5*y,v=f*m-f*g;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+b*o[l+I]+_*o[c+I]+v*o[d+I];return r}},hl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},ul=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case Hc:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&wy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let y=0;y!==n;++y){let g=e[d+y];if(g!==e[u+y]||g!==e[f+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Hc;var es=class extends Bn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=_o;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Bn{};dl.prototype.ValueTypeName="color";var fl=class extends Bn{};fl.prototype.ValueTypeName="number";var pl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)ln.slerpFlat(r,0,o,l-a,o,l,c);return r}},ko=class extends Bn{InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Bn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=_o;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Bn{};ml.prototype.ValueTypeName="vector";var gl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],y=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return y}return null}}},Ey=new gl,yl=class{constructor(t){this.manager=t!==void 0?t:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ho=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},nc=new oe,yu=new N,xu=new N,Wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(yu),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vu=new oe,ar=new N,ic=new N,xl=class extends Wo{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),ic.copy(n.position),ic.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ic),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}},Go=class extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vl=class extends Wo{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Bl="\\[\\]\\.:\\/",Ay=new RegExp("["+Bl+"]","g"),Ll="[^"+Bl+"]",Ty="[^"+Bl.replace("\\.","")+"]",Cy=/((?:WC+[\/:])*)/.source.replace("WC",Ll),Ry=/(WCOD+)?/.source.replace("WCOD",Ty),Py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),Iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),By=new RegExp("^"+Cy+Ry+Py+Iy+"$"),Ly=["material","materials","bones","map"],_l=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ay,"")}static parseTrackName(t){let e=By.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_l;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var _u=new oe,Xo=class{constructor(t,e,n=0,i=1/0){this.ray=new fr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(t,e=!0,n=[]){return bl(t,this,n,e),n.sort(bu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)bl(t[i],this,n,e);return n.sort(bu),n}};function bu(s,t){return s.distance-t.distance}function bl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Hn=class s{constructor(t=[0,0,0,0,0,0,0,0,0]){T(this,"elements");this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t=new x){let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e=new x){let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e=new s){let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],y=n[8],g=i[0],m=i[1],p=i[2],b=i[3],_=i[4],v=i[5],I=i[6],E=i[7],C=i[8];return r[0]=o*g+a*b+c*I,r[1]=o*m+a*_+c*E,r[2]=o*p+a*v+c*C,r[3]=l*g+h*b+d*I,r[4]=l*m+h*_+d*E,r[5]=l*p+h*v+d*C,r[6]=u*g+f*b+y*I,r[7]=u*m+f*_+y*E,r[8]=u*p+f*v+y*C,e}scale(t,e=new s){let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e=new x){let r=[],o,a;for(o=0;o<12;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+4*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+4*o]===0){for(a=o+1;a<l;a++)if(r[o+4*a]!==0){h=d;do u=d-h,r[u+4*o]+=r[u+4*a];while(--h);break}}if(r[o+4*o]!==0)for(a=o+1;a<l;a++){let f=r[o+4*a]/r[o+4*o];h=d;do u=d-h,r[u+4*a]=u<=o?0:r[u+4*a]-r[u+4*o]*f;while(--h)}}while(--c);if(e.z=r[11]/r[10],e.y=(r[7]-r[6]*e.z)/r[5],e.x=(r[3]-r[2]*e.z-r[1]*e.y)/r[0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t=new s){let i=Fy,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+6*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,h=6,d;do{if(r=c-a,i[r+6*r]===0){for(o=r+1;o<c;o++)if(i[r+6*o]!==0){l=h;do d=h-l,i[d+6*r]+=i[d+6*o];while(--l);break}}if(i[r+6*r]!==0)for(o=r+1;o<c;o++){let u=i[r+6*o]/i[r+6*r];l=h;do d=h-l,i[d+6*o]=d<=r?0:i[d+6*o]-i[d+6*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=i[r+6*o]/i[r+6*r];l=6;do d=6-l,i[d+6*o]=i[d+6*o]-i[d+6*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/i[r+6*r];l=6;do d=6-l,i[d+6*r]=i[d+6*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[3+o+6*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,y=i*c,g=r*o,m=r*a,p=r*c,b=this.elements;return b[0]=1-(u+y),b[1]=h-p,b[2]=d+m,b[3]=h+p,b[4]=1-(l+y),b[5]=f-g,b[6]=d-m,b[7]=f+g,b[8]=1-(l+u),this}transpose(t=new s){let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Fy=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var Xe=class Xe{constructor(t=0,e=0,n=0){T(this,"x");T(this,"y");T(this,"z");this.x=t,this.y=e,this.z=n}cross(t,e=new Xe){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new Xe(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new Xe(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t=new Xe){let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e=new Xe){let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e=new Xe){return e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n=new Xe){return n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t=new Xe){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=Dy,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=Uy;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e=1e-6){return!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t=1e-6){return!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Gu),Gu.almostEquals(t,e)}clone(){return new Xe(this.x,this.y,this.z)}};T(Xe,"ZERO"),T(Xe,"UNIT_X"),T(Xe,"UNIT_Y"),T(Xe,"UNIT_Z");var x=Xe;x.ZERO=new x(0,0,0);x.UNIT_X=new x(1,0,0);x.UNIT_Y=new x(0,1,0);x.UNIT_Z=new x(0,0,1);var Dy=new x,Uy=new x,Gu=new x;var Ie=class s{constructor(t={}){T(this,"lowerBound");T(this,"upperBound");this.lowerBound=new x,this.upperBound=new x,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,qu),l=qu),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=Xu,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Xu,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),y=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(y<0||f>y)}},qu=new x,Xu=[new x,new x,new x,new x,new x,new x,new x,new x];var br=class{constructor(){T(this,"matrix");this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}};var qs=class{constructor(){T(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}};var xe=class s{constructor(t=0,e=0,n=0,i=1){T(this,"x");T(this,"y");T(this,"z");T(this,"w");this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t=new x){this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Oy,i=zy;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e=new s){let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t=new s){let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t=new s){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e=new x){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,f=-o*n-a*i-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e="YZX"){let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i="XYZ"){let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n=new s){let i=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,y,g,m;return f=i*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),y=Math.sin(u),g=Math.sin((1-e)*u)/y,m=Math.sin(e*u)/y):(g=1-e,m=e),n.x=g*i+m*c,n.y=g*r+m*l,n.z=g*o+m*h,n.w=g*a+m*d,n}integrate(t,e,n,i=new s){let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}},Oy=new x,zy=new x;var Vy={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Mr=class Mr{constructor(t={}){T(this,"id");T(this,"type");T(this,"boundingSphereRadius");T(this,"collisionResponse");T(this,"collisionFilterGroup");T(this,"collisionFilterMask");T(this,"material");T(this,"body");this.id=Mr.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};T(Mr,"idCounter",0),T(Mr,"types",Vy);var ct=Mr;var Zt=class s{constructor(t={}){T(this,"position");T(this,"quaternion");this.position=new x,this.quaternion=new xe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e=new x){return this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i=new x){return n.vsub(t,i),e.conjugate(Yu),Yu.vmult(i,i),i}static pointToWorldFrame(t,e,n,i=new x){return e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n=new x){return t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i=new x){return e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Yu=new xe;var Xs=class s extends ct{constructor(e={}){let{vertices:n=[],faces:i=[],normals:r=[],axes:o,boundingSphereRadius:a}=e;super({type:ct.types.CONVEXPOLYHEDRON});T(this,"vertices");T(this,"faces");T(this,"faceNormals");T(this,"worldVertices");T(this,"worldVerticesNeedsUpdate");T(this,"worldFaceNormals");T(this,"worldFaceNormalsNeedsUpdate");T(this,"uniqueAxes");T(this,"uniqueEdges");this.vertices=n,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,n=this.vertices,i=this.uniqueEdges;i.length=0;let r=new x;for(let o=0;o!==e.length;o++){let a=e[o],c=a.length;for(let l=0;l!==c;l++){let h=(l+1)%c;n[a[l]].vsub(n[a[h]],r),r.normalize();let d=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(r)||i[u].almostEquals(r)){d=!0;break}d||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);let n=this.faceNormals[e]||new x;this.getFaceNormal(e,n),n.negate(n),this.faceNormals[e]=n;let i=this.vertices[this.faces[e][0]];if(n.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,n){let i=this.faces[e],r=this.vertices[i[0]],o=this.vertices[i[1]],a=this.vertices[i[2]];s.computeNormal(r,o,a,n)}static computeNormal(e,n,i,r){let o=new x,a=new x;n.vsub(e,a),i.vsub(n,o),o.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,n,i,r,o,a,c,l,h){let d=new x,u=-1,f=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){d.copy(i.faceNormals[g]),o.vmult(d,d);let m=d.dot(a);m>f&&(f=m,u=g)}let y=[];for(let g=0;g<i.faces[u].length;g++){let m=i.vertices[i.faces[u][g]],p=new x;p.copy(m),o.vmult(p,p),r.vadd(p,p),y.push(p)}u>=0&&this.clipFaceAgainstHull(a,e,n,y,c,l,h)}findSeparatingAxis(e,n,i,r,o,a,c,l){let h=new x,d=new x,u=new x,f=new x,y=new x,g=new x,m=Number.MAX_VALUE,p=this,b=0;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){i.vmult(p.uniqueAxes[_],h);let v=p.testSepAxis(h,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(h))}else{let _=c?c.length:p.faces.length;for(let v=0;v<_;v++){let I=c?c[v]:v;h.copy(p.faceNormals[I]),i.vmult(h,h);let E=p.testSepAxis(h,e,n,i,r,o);if(E===!1)return!1;E<m&&(m=E,a.copy(h))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){o.vmult(e.uniqueAxes[_],d),b++;let v=p.testSepAxis(d,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(d))}else{let _=l?l.length:e.faces.length;for(let v=0;v<_;v++){let I=l?l[v]:v;d.copy(e.faceNormals[I]),o.vmult(d,d),b++;let E=p.testSepAxis(d,e,n,i,r,o);if(E===!1)return!1;E<m&&(m=E,a.copy(d))}}for(let _=0;_!==p.uniqueEdges.length;_++){i.vmult(p.uniqueEdges[_],f);for(let v=0;v!==e.uniqueEdges.length;v++)if(o.vmult(e.uniqueEdges[v],y),f.cross(y,g),!g.almostZero()){g.normalize();let I=p.testSepAxis(g,e,n,i,r,o);if(I===!1)return!1;I<m&&(m=I,a.copy(g))}}return r.vsub(n,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(e,n,i,r,o,a){let c=this;s.project(c,e,i,r,Nl),s.project(n,e,o,a,Fl);let l=Nl[0],h=Nl[1],d=Fl[0],u=Fl[1];if(l<u||d<h)return!1;let f=l-u,y=d-h;return f<y?f:y}calculateLocalInertia(e,n){let i=new x,r=new x;this.computeLocalAABB(r,i);let o=i.x-r.x,a=i.y-r.y,c=i.z-r.z;n.x=1/12*e*(2*a*2*a+2*c*2*c),n.y=1/12*e*(2*o*2*o+2*c*2*c),n.z=1/12*e*(2*a*2*a+2*o*2*o)}getPlaneConstantOfFace(e){let n=this.faces[e],i=this.faceNormals[e],r=this.vertices[n[0]];return-i.dot(r)}clipFaceAgainstHull(e,n,i,r,o,a,c){let l=new x,h=new x,d=new x,u=new x,f=new x,y=new x,g=new x,m=new x,p=this,b=[],_=r,v=b,I=-1,E=Number.MAX_VALUE;for(let R=0;R<p.faces.length;R++){l.copy(p.faceNormals[R]),i.vmult(l,l);let k=l.dot(e);k<E&&(E=k,I=R)}if(I<0)return;let C=p.faces[I];C.connectedFaces=[];for(let R=0;R<p.faces.length;R++)for(let k=0;k<p.faces[R].length;k++)C.indexOf(p.faces[R][k])!==-1&&R!==I&&C.connectedFaces.indexOf(R)===-1&&C.connectedFaces.push(R);let B=C.length;for(let R=0;R<B;R++){let k=p.vertices[C[R]],U=p.vertices[C[(R+1)%B]];k.vsub(U,h),d.copy(h),i.vmult(d,d),n.vadd(d,d),u.copy(this.faceNormals[I]),i.vmult(u,u),n.vadd(u,u),d.cross(u,f),f.negate(f),y.copy(k),i.vmult(y,y),n.vadd(y,y);let D=C.connectedFaces[R];g.copy(this.faceNormals[D]);let G=this.getPlaneConstantOfFace(D);m.copy(g),i.vmult(m,m);let H=G-m.dot(n);for(this.clipFaceAgainstPlane(_,v,m,H);_.length;)_.shift();for(;v.length;)_.push(v.shift())}g.copy(this.faceNormals[I]);let M=this.getPlaneConstantOfFace(I);m.copy(g),i.vmult(m,m);let S=M-m.dot(n);for(let R=0;R<_.length;R++){let k=m.dot(_[R])+S;if(k<=o&&(console.log(`clamped: depth=${k} to minDist=${o}`),k=o),k<=a){let U=_[R];if(k<=1e-6){let D={point:U,normal:m,depth:k};c.push(D)}}}}clipFaceAgainstPlane(e,n,i,r){let o,a,c=e.length;if(c<2)return n;let l=e[e.length-1],h=e[0];o=i.dot(l)+r;for(let d=0;d<c;d++){if(h=e[d],a=i.dot(h)+r,o<0)if(a<0){let u=new x;u.copy(h),n.push(u)}else{let u=new x;l.lerp(h,o/(o-a),u),n.push(u)}else if(a<0){let u=new x;l.lerp(h,o/(o-a),u),n.push(u),n.push(h)}l=h,o=a}return n}computeWorldVertices(e,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new x);let i=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(i[o],r[o]),e.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,n){let i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){let o=i[r];o.x<e.x?e.x=o.x:o.x>n.x&&(n.x=o.x),o.y<e.y?e.y=o.y:o.y>n.y&&(n.y=o.y),o.z<e.z?e.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(e){let n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new x);let i=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)e.vmult(i[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,n=this.vertices;for(let i=0;i!==n.length;i++){let r=n[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,n,i,r){let o=this.vertices,a,c,l,h,d,u,f=new x;for(let y=0;y<o.length;y++){f.copy(o[y]),n.vmult(f,f),e.vadd(f,f);let g=f;(a===void 0||g.x<a)&&(a=g.x),(h===void 0||g.x>h)&&(h=g.x),(c===void 0||g.y<c)&&(c=g.y),(d===void 0||g.y>d)&&(d=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}i.set(a,c,l),r.set(h,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e=new x){let n=this.vertices;for(let i=0;i<n.length;i++)e.vadd(n[i],e);return e.scale(1/n.length,e),e}transformAllPoints(e,n){let i=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<i;o++){let a=r[o];n.vmult(a,a)}for(let o=0;o<this.faceNormals.length;o++){let a=this.faceNormals[o];n.vmult(a,a)}}if(e)for(let o=0;o<i;o++){let a=r[o];a.vadd(e,a)}}pointIsInside(e){let n=this.vertices,i=this.faces,r=this.faceNormals,o=null,a=new x;this.getAveragePointLocal(a);for(let c=0;c<this.faces.length;c++){let l=r[c],h=n[i[c][0]],d=new x;e.vsub(h,d);let u=l.dot(d),f=new x;a.vsub(h,f);let y=l.dot(f);if(u<0&&y>0||u>0&&y<0)return!1}return o?1:-1}static project(e,n,i,r,o){let a=e.vertices.length,c=ky,l=Hy,h=0,d=0,u=Wy,f=e.vertices;u.setZero(),Zt.vectorToLocalFrame(i,r,n,l),Zt.pointToLocalFrame(i,r,u,u);let y=u.dot(l);d=h=f[0].dot(l);for(let g=1;g<a;g++){let m=f[g].dot(l);m>h&&(h=m),m<d&&(d=m)}if(d-=y,h-=y,d>h){let g=d;d=h,h=g}o[0]=h,o[1]=d}},Nl=[],Fl=[],ky=new x,Hy=new x,Wy=new x;var Fi=class s extends ct{constructor(e){super({type:ct.types.BOX});T(this,"halfExtents");T(this,"convexPolyhedronRepresentation");this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,n=this.halfExtents.y,i=this.halfExtents.z,r=x,o=[new r(-e,-n,-i),new r(e,-n,-i),new r(e,n,-i),new r(-e,n,-i),new r(-e,-n,i),new r(e,-n,i),new r(e,n,i),new r(-e,n,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],c=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new Xs({vertices:o,faces:a,axes:c});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,n=new x){return s.calculateInertia(this.halfExtents,e,n),n}static calculateInertia(e,n,i){let r=e;i.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,n){let i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==i.length;o++)n.vmult(i[o],i[o]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,n,i){let r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let a=0;a<o.length;a++)Ni.set(o[a][0],o[a][1],o[a][2]),n.vmult(Ni,Ni),e.vadd(Ni,Ni),i(Ni.x,Ni.y,Ni.z)}calculateWorldAABB(e,n,i,r){let o=this.halfExtents;Wn[0].set(o.x,o.y,o.z),Wn[1].set(-o.x,o.y,o.z),Wn[2].set(-o.x,-o.y,o.z),Wn[3].set(-o.x,-o.y,-o.z),Wn[4].set(o.x,-o.y,-o.z),Wn[5].set(o.x,o.y,-o.z),Wn[6].set(-o.x,o.y,-o.z),Wn[7].set(o.x,-o.y,o.z);let a=Wn[0];n.vmult(a,a),e.vadd(a,a),r.copy(a),i.copy(a);for(let c=1;c<8;c++){let l=Wn[c];n.vmult(l,l),e.vadd(l,l);let h=l.x,d=l.y,u=l.z;h>r.x&&(r.x=h),d>r.y&&(r.y=d),u>r.z&&(r.z=u),h<i.x&&(i.x=h),d<i.y&&(i.y=d),u<i.z&&(i.z=u)}}},Ni=new x,Wn=[new x,new x,new x,new x,new x,new x,new x,new x];var Dl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ul={AWAKE:0,SLEEPY:1,SLEEPING:2},kt=class kt extends qs{constructor(e={}){super();T(this,"id");T(this,"index");T(this,"world");T(this,"vlambda");T(this,"collisionFilterGroup");T(this,"collisionFilterMask");T(this,"collisionResponse");T(this,"position");T(this,"previousPosition");T(this,"interpolatedPosition");T(this,"initPosition");T(this,"velocity");T(this,"initVelocity");T(this,"force");T(this,"mass");T(this,"invMass");T(this,"material");T(this,"linearDamping");T(this,"type");T(this,"allowSleep");T(this,"sleepState");T(this,"sleepSpeedLimit");T(this,"sleepTimeLimit");T(this,"timeLastSleepy");T(this,"wakeUpAfterNarrowphase");T(this,"torque");T(this,"quaternion");T(this,"initQuaternion");T(this,"previousQuaternion");T(this,"interpolatedQuaternion");T(this,"angularVelocity");T(this,"initAngularVelocity");T(this,"shapes");T(this,"shapeOffsets");T(this,"shapeOrientations");T(this,"inertia");T(this,"invInertia");T(this,"invInertiaWorld");T(this,"invMassSolve");T(this,"invInertiaSolve");T(this,"invInertiaWorldSolve");T(this,"fixedRotation");T(this,"angularDamping");T(this,"linearFactor");T(this,"angularFactor");T(this,"aabb");T(this,"aabbNeedsUpdate");T(this,"boundingRadius");T(this,"wlambda");T(this,"isTrigger");this.id=kt.idCounter++,this.index=-1,this.world=null,this.vlambda=new x,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new x,this.previousPosition=new x,this.interpolatedPosition=new x,this.initPosition=new x,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new x,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new x,this.force=new x;let n=typeof e.mass=="number"?e.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=n<=0?kt.STATIC:kt.DYNAMIC,typeof e.type==typeof kt.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep!="undefined"?e.allowSleep:!0,this.sleepState=kt.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit!="undefined"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit!="undefined"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new x,this.quaternion=new xe,this.initQuaternion=new xe,this.previousQuaternion=new xe,this.interpolatedQuaternion=new xe,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new x,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new x,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new x,this.invInertia=new x,this.invInertiaWorld=new Hn,this.invMassSolve=0,this.invInertiaSolve=new x,this.invInertiaWorldSolve=new Hn,this.fixedRotation=typeof e.fixedRotation!="undefined"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping!="undefined"?e.angularDamping:.01,this.linearFactor=new x(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new x(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ie,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new x,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=kt.AWAKE,this.wakeUpAfterNarrowphase=!1,e===kt.SLEEPING&&this.dispatchEvent(kt.wakeupEvent)}sleep(){this.sleepState=kt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let n=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===kt.AWAKE&&i<r?(this.sleepState=kt.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(kt.sleepyEvent)):n===kt.SLEEPY&&i>r?this.wakeUp():n===kt.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(kt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===kt.SLEEPING||this.type===kt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,n=new x){return e.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(e,n=new x){return this.quaternion.conjugate().vmult(e,n),n}pointToWorldFrame(e,n=new x){return this.quaternion.vmult(e,n),n.vadd(this.position,n),n}vectorToWorldFrame(e,n=new x){return this.quaternion.vmult(e,n),n}addShape(e,n,i){let r=new x,o=new xe;return n&&r.copy(n),i&&o.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let n=this.shapes.indexOf(e);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,n=this.shapeOffsets,i=e.length,r=0;for(let o=0;o!==i;o++){let a=e[o];a.updateBoundingSphereRadius();let c=n[o].length(),l=a.boundingSphereRadius;c+l>r&&(r=c+l)}this.boundingRadius=r}updateAABB(){let e=this.shapes,n=this.shapeOffsets,i=this.shapeOrientations,r=e.length,o=Gy,a=qy,c=this.quaternion,l=this.aabb,h=Xy;for(let d=0;d!==r;d++){let u=e[d];c.vmult(n[d],o),o.vadd(this.position,o),c.mult(i[d],a),u.calculateWorldAABB(o,a,h.lowerBound,h.upperBound),d===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!e)){let i=Yy,r=Zy,o=$y;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(n,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,n=new x){if(this.type!==kt.DYNAMIC)return;this.sleepState===kt.SLEEPING&&this.wakeUp();let i=jy;n.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,n=new x){if(this.type!==kt.DYNAMIC)return;let i=Jy,r=Qy;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyForce(i,r)}applyTorque(e){this.type===kt.DYNAMIC&&(this.sleepState===kt.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,n=new x){if(this.type!==kt.DYNAMIC)return;this.sleepState===kt.SLEEPING&&this.wakeUp();let i=n,r=Ky;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);let o=tx;i.cross(e,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(e,n=new x){if(this.type!==kt.DYNAMIC)return;let i=ex,r=nx;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyImpulse(i,r)}updateMassProperties(){let e=ix;this.invMass=this.mass>0?1/this.mass:0;let n=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Fi.calculateInertia(e,this.mass,n),this.invInertia.set(n.x>0&&!i?1/n.x:0,n.y>0&&!i?1/n.y:0,n.z>0&&!i?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,n){let i=new x;return e.vsub(this.position,i),this.angularVelocity.cross(i,n),this.velocity.vadd(n,n),n}integrate(e,n,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===kt.DYNAMIC||this.type===kt.KINEMATIC)||this.sleepState===kt.SLEEPING)return;let r=this.velocity,o=this.angularVelocity,a=this.position,c=this.force,l=this.torque,h=this.quaternion,d=this.invMass,u=this.invInertiaWorld,f=this.linearFactor,y=d*e;r.x+=c.x*y*f.x,r.y+=c.y*y*f.y,r.z+=c.z*y*f.z;let g=u.elements,m=this.angularFactor,p=l.x*m.x,b=l.y*m.y,_=l.z*m.z;o.x+=e*(g[0]*p+g[1]*b+g[2]*_),o.y+=e*(g[3]*p+g[4]*b+g[5]*_),o.z+=e*(g[6]*p+g[7]*b+g[8]*_),a.x+=r.x*e,a.y+=r.y*e,a.z+=r.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),n&&(i?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};T(kt,"idCounter",0),T(kt,"COLLIDE_EVENT_NAME","collide"),T(kt,"DYNAMIC",Dl.DYNAMIC),T(kt,"STATIC",Dl.STATIC),T(kt,"KINEMATIC",Dl.KINEMATIC),T(kt,"AWAKE",Ul.AWAKE),T(kt,"SLEEPY",Ul.SLEEPY),T(kt,"SLEEPING",Ul.SLEEPING),T(kt,"wakeupEvent",{type:"wakeup"}),T(kt,"sleepyEvent",{type:"sleepy"}),T(kt,"sleepEvent",{type:"sleep"});var Nt=kt,Gy=new x,qy=new xe,Xy=new Ie,Yy=new Hn,Zy=new Hn,$y=new Hn,jy=new x,Jy=new x,Qy=new x,Ky=new x,tx=new x,ex=new x,nx=new x,ix=new x;var is=class{constructor(){T(this,"world");T(this,"useBoundingBoxes");T(this,"dirty");this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Nt.STATIC)!==0||t.sleepState===Nt.SLEEPING)&&((e.type&Nt.STATIC)!==0||e.sleepState===Nt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=sx;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=rx,i=ox,r=ax,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new x;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},sx=new x,Tb=new x,Cb=new xe,Rb=new x,rx={keys:[]},ox=[],ax=[],Pb=new x;var Db=new x,Ub=new x;var jo=class extends is{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n=[]){for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}};var li=class{constructor(){T(this,"rayFromWorld");T(this,"rayToWorld");T(this,"hitNormalWorld");T(this,"hitPointWorld");T(this,"hasHit");T(this,"shape");T(this,"body");T(this,"hitFaceIndex");T(this,"distance");T(this,"shouldStop");this.rayFromWorld=new x,this.rayToWorld=new x,this.hitNormalWorld=new x,this.hitPointWorld=new x,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}};var Ol={CLOSEST:1,ANY:2,ALL:4},en=class en{constructor(t=new x,e=new x){T(this,"from");T(this,"to");T(this,"direction");T(this,"precision");T(this,"checkCollisionResponse");T(this,"skipBackfaces");T(this,"collisionFilterMask");T(this,"collisionFilterGroup");T(this,"mode");T(this,"result");T(this,"hasHit");T(this,"callback");this.from=t.clone(),this.to=e.clone(),this.direction=new x,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=en.ANY,this.result=new li,this.hasHit=!1,this.callback=n=>{}}get[ct.types.SPHERE](){return this._intersectSphere}get[ct.types.PLANE](){return this._intersectPlane}get[ct.types.BOX](){return this._intersectBox}get[ct.types.CYLINDER](){return this._intersectConvex}get[ct.types.CONVEXPOLYHEDRON](){return this._intersectConvex}get[ct.types.HEIGHTFIELD](){return this._intersectHeightfield}get[ct.types.TRIMESH](){return this._intersectTrimesh}intersectWorld(t,e){return this.mode=e.mode||en.ANY,this.result=e.result||new li,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask!="undefined"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup!="undefined"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse!="undefined"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Zu),zl.length=0,t.broadphase.aabbQuery(t,Zu,zl),this.intersectBodies(zl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=cx,r=lx;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(Ex(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new x(0,0,1);e.vmult(l,l);let h=new x;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let y=new x,g=new x,m=new x;o.vsub(n,y);let p=-l.dot(y)/f;c.scale(p,g),o.vadd(g,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){let o=t.data,a=t.elementSize,c=hx;c.from.copy(this.from),c.to.copy(this.to),Zt.pointToLocalFrame(n,e,c.from,c.from),Zt.pointToLocalFrame(n,e,c.to,c.to),c.updateDirection();let l=ux,h,d,u,f;h=d=0,u=f=t.data.length-1;let y=new Ie;c.getAABB(y),t.getIndexOfPosition(y.lowerBound.x,y.lowerBound.y,l,!0),h=Math.max(h,l[0]),d=Math.max(d,l[1]),t.getIndexOfPosition(y.upperBound.x,y.upperBound.y,l,!0),u=Math.min(u,l[0]+1),f=Math.min(f,l[1]+1);for(let g=h;g<u;g++)for(let m=d;m<f;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(g,m,y),!!y.overlapsRay(c)){if(t.getConvexTrianglePillar(g,m,!1),Zt.pointToWorldFrame(n,e,t.pillarOffset,Jo),this._intersectConvex(t.pillarConvex,e,Jo,i,r,$u),this.result.shouldStop)return;t.getConvexTrianglePillar(g,m,!0),Zt.pointToWorldFrame(n,e,t.pillarOffset,Jo),this._intersectConvex(t.pillarConvex,e,Jo,i,r,$u)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=dx,y=fx;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1);else{let g=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,y),y.normalize(),this.reportIntersection(y,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=mx,c=px,l=ju,h=gx,d=o&&o.faceList||null,u=t.faces,f=t.vertices,y=t.faceNormals,g=this.direction,m=this.from,p=this.to,b=m.distanceTo(p),_=-1,v=d?d.length:u.length,I=this.result;for(let E=0;!I.shouldStop&&E<v;E++){let C=d?d[E]:E,B=u[C],M=y[C],S=e,R=n;l.copy(f[B[0]]),S.vmult(l,l),l.vadd(R,l),l.vsub(m,l),S.vmult(M,c);let k=g.dot(c);if(Math.abs(k)<this.precision)continue;let U=c.dot(l)/k;if(!(U<0)){g.scale(U,tn),tn.vadd(m,tn),Ln.copy(f[B[0]]),S.vmult(Ln,Ln),R.vadd(Ln,Ln);for(let D=1;!I.shouldStop&&D<B.length-1;D++){Gn.copy(f[B[D]]),qn.copy(f[B[D+1]]),S.vmult(Gn,Gn),S.vmult(qn,qn),R.vadd(Gn,Gn),R.vadd(qn,qn);let G=tn.distanceTo(m);!(en.pointInTriangle(tn,Ln,Gn,qn)||en.pointInTriangle(tn,Gn,Ln,qn))||G>b||this.reportIntersection(c,tn,r,i,C)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=yx,c=Sx,l=wx,h=ju,d=xx,u=vx,f=_x,y=Mx,g=bx,m=t.indices,p=t.vertices,b=this.from,_=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(e),Zt.vectorToLocalFrame(n,e,v,d),Zt.pointToLocalFrame(n,e,b,u),Zt.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let I=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let E=0,C=c.length;!this.result.shouldStop&&E!==C;E++){let B=c[E];t.getNormal(B,a),t.getVertex(m[B*3],Ln),Ln.vsub(u,h);let M=d.dot(a),S=a.dot(h)/M;if(S<0)continue;d.scale(S,tn),tn.vadd(u,tn),t.getVertex(m[B*3+1],Gn),t.getVertex(m[B*3+2],qn);let R=tn.distanceSquared(u);!(en.pointInTriangle(tn,Gn,Ln,qn)||en.pointInTriangle(tn,Ln,Gn,qn))||R>I||(Zt.vectorToWorldFrame(e,a,g),Zt.pointToWorldFrame(n,e,tn,y),this.reportIntersection(g,y,r,i,B))}c.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r!="undefined"?r:-1,this.mode){case en.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case en.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case en.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ss),n.vsub(e,Sr),t.vsub(e,Vl);let r=ss.dot(ss),o=ss.dot(Sr),a=ss.dot(Vl),c=Sr.dot(Sr),l=Sr.dot(Vl),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};T(en,"CLOSEST",Ol.CLOSEST),T(en,"ANY",Ol.ANY),T(en,"ALL",Ol.ALL);var gn=en,Zu=new Ie,zl=[],Sr=new x,Vl=new x,cx=new x,lx=new xe,tn=new x,Ln=new x,Gn=new x,qn=new x,Jb=new x,Qb=new li,$u={faceList:[0]},Jo=new x,hx=new gn,ux=[];var dx=new x,fx=new x,px=new x,mx=new x,gx=new x,ju=new x,yx=new x,xx=new x,vx=new x,_x=new x,bx=new x,Mx=new x,Kb=new Ie,Sx=[],wx=new Zt,ss=new x,Qo=new x;function Ex(s,t,e){e.vsub(s,ss);let n=ss.dot(t);return t.scale(n,Qo),Qo.vadd(s,Qo),e.distanceTo(Qo)}var Ko=class s extends is{constructor(e){super();T(this,"axisList");T(this,"world");T(this,"axisIndex");T(this,"_addBodyHandler");T(this,"_removeBodyHandler");this.axisList=[],this.world=null,this.axisIndex=0;let n=this.axisList;this._addBodyHandler=i=>{n.push(i.body)},this._removeBodyHandler=i=>{let r=n.indexOf(i.body);r!==-1&&n.splice(r,1)},e&&this.setWorld(e)}static checkBounds(e,n,i){let r,o;i===0?(r=e.position.x,o=n.position.x):i===1?(r=e.position.y,o=n.position.y):i===2&&(r=e.position.z,o=n.position.z);let a=e.boundingRadius,c=n.boundingRadius,l=r+a;return o-c<l}static insertionSortX(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortY(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortZ(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)e[o+1]=e[o];e[o+1]=r}return e}setWorld(e){this.axisList.length=0;for(let n=0;n<e.bodies.length;n++)this.axisList.push(e.bodies[n]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,n,i){let r=this.axisList,o=r.length,a=this.axisIndex,c,l;for(this.dirty&&(this.sortList(),this.dirty=!1),c=0;c!==o;c++){let h=r[c];for(l=c+1;l<o;l++){let d=r[l];if(this.needBroadphaseCollision(h,d)){if(!s.checkBounds(h,d,a))break;this.intersectionTest(h,d,n,i)}}}}sortList(){let e=this.axisList,n=this.axisIndex,i=e.length;for(let r=0;r!==i;r++){let o=e[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?s.insertionSortX(e):n===1?s.insertionSortY(e):n===2&&s.insertionSortZ(e)}autoDetectAxis(){let e=0,n=0,i=0,r=0,o=0,a=0,c=this.axisList,l=c.length,h=1/l;for(let y=0;y!==l;y++){let g=c[y],m=g.position.x;e+=m,n+=m*m;let p=g.position.y;i+=p,r+=p*p;let b=g.position.z;o+=b,a+=b*b}let d=n-e*e*h,u=r-i*i*h,f=a-o*o*h;d>u?d>f?this.axisIndex=0:this.axisIndex=2:u>f?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,n,i=[]){this.dirty&&(this.sortList(),this.dirty=!1);let r=this.axisIndex,o="x";r===1&&(o="y"),r===2&&(o="z");let a=this.axisList,c=n.lowerBound[o],l=n.upperBound[o];for(let h=0;h<a.length;h++){let d=a[h];d.aabbNeedsUpdate&&d.updateAABB(),d.aabb.overlaps(n)&&i.push(d)}return i}};var Di=class{static defaults(t={},e){for(let n in e)n in t||(t[n]=e[n]);return t}};var ta=class ta{constructor(t,e,n={}){T(this,"equations");T(this,"bodyA");T(this,"bodyB");T(this,"id");T(this,"collideConnected");n=Di.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=ta.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};T(ta,"idCounter",0);var wr=ta;var Er=class{constructor(){T(this,"spatial");T(this,"rotational");this.spatial=new x,this.rotational=new x}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}};var na=class na{constructor(t,e,n=-1e6,i=1e6){T(this,"id");T(this,"minForce");T(this,"maxForce");T(this,"bi");T(this,"bj");T(this,"si");T(this,"sj");T(this,"a");T(this,"b");T(this,"eps");T(this,"jacobianElementA");T(this,"jacobianElementB");T(this,"enabled");T(this,"multiplier");this.id=na.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Er,this.jacobianElementB=new Er,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,Ju),a.scale(h,Qu),n.invInertiaWorldSolve.vmult(o,Ku),i.invInertiaWorldSolve.vmult(c,td),t.multiplyVectors(Ju,Ku)+e.multiplyVectors(Qu,td)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,ea),l+=ea.dot(t.rotational),c.vmult(e.rotational,ea),l+=ea.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Ax;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};T(na,"idCounter",0);var hi=na,Ju=new x,Qu=new x,Ku=new x,td=new x,ea=new x,Ax=new x;var rs=class extends hi{constructor(e,n,i=1e6){super(e,n,0,i);T(this,"restitution");T(this,"ri");T(this,"rj");T(this,"ni");this.restitution=0,this.ri=new x,this.rj=new x,this.ni=new x}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=Tx,h=Cx,d=r.velocity,u=r.angularVelocity,f=r.force,y=r.torque,g=o.velocity,m=o.angularVelocity,p=o.force,b=o.torque,_=Rx,v=this.jacobianElementA,I=this.jacobianElementB,E=this.ni;a.cross(E,l),c.cross(E,h),E.negate(v.spatial),l.negate(v.rotational),I.spatial.copy(E),I.rotational.copy(h),_.copy(o.position),_.vadd(c,_),_.vsub(r.position,_),_.vsub(a,_);let C=E.dot(_),B=this.restitution+1,M=B*g.dot(E)-B*d.dot(E)+m.dot(h)-u.dot(l),S=this.computeGiMf();return-C*n-M*i-e*S}getImpactVelocityAlongNormal(){let e=Px,n=Ix,i=Bx,r=Lx,o=Nx;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,n),e.vsub(n,o),this.ni.dot(o)}},Tx=new x,Cx=new x,Rx=new x,Px=new x,Ix=new x,Bx=new x,Lx=new x,Nx=new x;var TM=new x,CM=new x;var LM=new x,NM=new x;var HM=new x,WM=new x;var ia=class extends wr{constructor(e,n,i,r=1e6){super(e,n);T(this,"distance");T(this,"distanceEquation");typeof i=="undefined"&&(i=e.position.distanceTo(n.position)),this.distance=i;let o=this.distanceEquation=new rs(e,n);this.equations.push(o),o.minForce=-r,o.maxForce=r}update(){let e=this.bodyA,n=this.bodyB,i=this.distanceEquation,r=this.distance*.5,o=i.ni;n.position.vsub(e.position,o),o.normalize(),o.scale(r,i.ri),o.scale(-r,i.rj)}};var KM=new x,tS=new x;var dS=new x,fS=new x;var Ar=class extends hi{constructor(e,n,i){super(e,n,-i,i);T(this,"ri");T(this,"rj");T(this,"t");this.ri=new x,this.rj=new x,this.t=new x}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=Fx,h=Dx,d=this.t;a.cross(d,l),c.cross(d,h);let u=this.jacobianElementA,f=this.jacobianElementB;d.negate(u.spatial),l.negate(u.rotational),f.spatial.copy(d),f.rotational.copy(h);let y=this.computeGW(),g=this.computeGiMf();return-y*i-e*g}},Fx=new x,Dx=new x;var ra=class ra{constructor(t,e,n){T(this,"id");T(this,"materials");T(this,"friction");T(this,"restitution");T(this,"contactEquationStiffness");T(this,"contactEquationRelaxation");T(this,"frictionEquationStiffness");T(this,"frictionEquationRelaxation");n=Di.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ra.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};T(ra,"idCounter",0);var sa=ra;var aa=class aa{constructor(t={}){T(this,"name");T(this,"id");T(this,"friction");T(this,"restitution");let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=aa.idCounter++,this.friction=typeof t.friction!="undefined"?t.friction:-1,this.restitution=typeof t.restitution!="undefined"?t.restitution:-1}};T(aa,"idCounter",0);var oa=aa;var AS=new x,TS=new x,CS=new x,RS=new x,PS=new x,IS=new x,BS=new x,LS=new x,NS=new x,FS=new x,DS=new x;var WS=new x,GS=new x;var QS=new x,KS=new x,tw=new x,ew=new x,nw=new x,iw=new x,sw=new gn,rw=new x,ow=new x,aw=new x,cw=[new x(1,0,0),new x(0,1,0),new x(0,0,1)],lw=new x;var hw=new x,uw=new x,dw=new x;var fw=new x,pw=new x,mw=new x,gw=new x;var yw=new x,xw=new x,vw=new x;var os=class extends ct{constructor(e){super({type:ct.types.SPHERE});T(this,"radius");if(this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,n=new x){let i=2*e*this.radius*this.radius/5;return n.x=i,n.y=i,n.z=i,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,n,i,r){let o=this.radius,a=["x","y","z"];for(let c=0;c<a.length;c++){let l=a[c];i[l]=e[l]-o,r[l]=e[l]+o}}};var Bw=new x,Lw=new x;var Uw=new x,Ow=new x,zw=new x,Vw=new x,kw=new x,Hw=new x,Ww=new x;var n1=new x;var l1=new x,h1=new x,u1=new x,d1=new x,f1=new x,p1=new x,m1=new x,g1=new x,y1=new x;var M1=new x,S1=new Ie;var B1=new x,L1=new Ie,N1=new x,F1=new x,D1=new x,U1=new x,O1=new x,z1=new x,V1=new x,k1=new Ie,H1=new x,W1=new Zt,G1=new Ie;var Tr=class{constructor(){T(this,"equations");this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}};var ca=class extends Tr{constructor(){super();T(this,"iterations");T(this,"tolerance");this.iterations=10,this.tolerance=1e-7}solve(e,n){let i=0,r=this.iterations,o=this.tolerance*this.tolerance,a=this.equations,c=a.length,l=n.bodies,h=l.length,d=e,u,f,y,g,m,p,b;if(c!==0)for(let E=0;E!==h;E++)l[E].updateSolveMassProperties();let _=Ox,v=zx,I=Ux;_.length=c,v.length=c,I.length=c;for(let E=0;E!==c;E++){let C=a[E];I[E]=0,v[E]=C.computeB(d),_[E]=1/C.computeC()}if(c!==0){for(let B=0;B!==h;B++){let M=l[B],S=M.vlambda,R=M.wlambda;S.set(0,0,0),R.set(0,0,0)}for(i=0;i!==r;i++){m=0;for(let B=0;B!==c;B++){let M=a[B];f=v[B],y=_[B],b=I[B],p=M.computeGWlambda(),g=y*(f-p-M.eps*b),b+g<M.minForce?g=M.minForce-b:b+g>M.maxForce&&(g=M.maxForce-b),I[B]+=g,m+=g>0?g:-g,M.addToWlambda(g)}if(m*m<o)break}for(let B=0;B!==h;B++){let M=l[B],S=M.velocity,R=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),S.vadd(M.vlambda,S),M.wlambda.vmul(M.angularFactor,M.wlambda),R.vadd(M.wlambda,R)}let E=a.length,C=1/d;for(;E--;)a[E].multiplier=I[E]*C}return i}},Ux=[],Ox=[],zx=[];var tE=Nt.STATIC;var la=class{constructor(){T(this,"objects",[]);T(this,"type",Object)}release(...t){let e=t.length;for(let n=0;n!==e;n++)this.objects.push(t[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}};var ha=class extends la{constructor(){super(...arguments);T(this,"type",x)}constructObject(){return new x}};var me={sphereSphere:ct.types.SPHERE,spherePlane:ct.types.SPHERE|ct.types.PLANE,boxBox:ct.types.BOX|ct.types.BOX,sphereBox:ct.types.SPHERE|ct.types.BOX,planeBox:ct.types.PLANE|ct.types.BOX,convexConvex:ct.types.CONVEXPOLYHEDRON,sphereConvex:ct.types.SPHERE|ct.types.CONVEXPOLYHEDRON,planeConvex:ct.types.PLANE|ct.types.CONVEXPOLYHEDRON,boxConvex:ct.types.BOX|ct.types.CONVEXPOLYHEDRON,sphereHeightfield:ct.types.SPHERE|ct.types.HEIGHTFIELD,boxHeightfield:ct.types.BOX|ct.types.HEIGHTFIELD,convexHeightfield:ct.types.CONVEXPOLYHEDRON|ct.types.HEIGHTFIELD,sphereParticle:ct.types.PARTICLE|ct.types.SPHERE,planeParticle:ct.types.PLANE|ct.types.PARTICLE,boxParticle:ct.types.BOX|ct.types.PARTICLE,convexParticle:ct.types.PARTICLE|ct.types.CONVEXPOLYHEDRON,cylinderCylinder:ct.types.CYLINDER,sphereCylinder:ct.types.SPHERE|ct.types.CYLINDER,planeCylinder:ct.types.PLANE|ct.types.CYLINDER,boxCylinder:ct.types.BOX|ct.types.CYLINDER,convexCylinder:ct.types.CONVEXPOLYHEDRON|ct.types.CYLINDER,heightfieldCylinder:ct.types.HEIGHTFIELD|ct.types.CYLINDER,particleCylinder:ct.types.PARTICLE|ct.types.CYLINDER,sphereTrimesh:ct.types.SPHERE|ct.types.TRIMESH,planeTrimesh:ct.types.PLANE|ct.types.TRIMESH},fa=class{constructor(t){T(this,"contactPointPool");T(this,"frictionEquationPool");T(this,"result");T(this,"frictionResult");T(this,"v3pool");T(this,"world");T(this,"currentContactMaterial");T(this,"enableFrictionReduction");this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ha,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}get[me.sphereSphere](){return this.sphereSphere}get[me.spherePlane](){return this.spherePlane}get[me.boxBox](){return this.boxBox}get[me.sphereBox](){return this.sphereBox}get[me.planeBox](){return this.planeBox}get[me.convexConvex](){return this.convexConvex}get[me.sphereConvex](){return this.sphereConvex}get[me.planeConvex](){return this.planeConvex}get[me.boxConvex](){return this.boxConvex}get[me.sphereHeightfield](){return this.sphereHeightfield}get[me.boxHeightfield](){return this.boxHeightfield}get[me.convexHeightfield](){return this.convexHeightfield}get[me.sphereParticle](){return this.sphereParticle}get[me.planeParticle](){return this.planeParticle}get[me.boxParticle](){return this.boxParticle}get[me.convexParticle](){return this.convexParticle}get[me.cylinderCylinder](){return this.convexConvex}get[me.sphereCylinder](){return this.sphereConvex}get[me.planeCylinder](){return this.planeConvex}get[me.boxCylinder](){return this.boxConvex}get[me.convexCylinder](){return this.convexConvex}get[me.heightfieldCylinder](){return this.heightfieldCylinder}get[me.particleCylinder](){return this.particleCylinder}get[me.sphereTrimesh](){return this.sphereTrimesh}get[me.planeTrimesh](){return this.planeTrimesh}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new rs(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let y=this.frictionEquationPool,g=y.length?y.pop():new Ar(n,i,u*f),m=y.length?y.pop():new Ar(n,i,u*f);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-u*f,g.maxForce=m.maxForce=u*f,g.ri.copy(t.ri),g.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(g.t,m.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.enabled=m.enabled=t.enabled,e.push(g,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];as.setZero(),Ys.setZero(),Zs.setZero();let r=e.bi,o=e.bj;for(let c=0;c!==t;c++)e=this.result[this.result.length-1-c],e.bi!==r?(as.vadd(e.ni,as),Ys.vadd(e.ri,Ys),Zs.vadd(e.rj,Zs)):(as.vsub(e.ni,as),Ys.vadd(e.rj,Ys),Zs.vadd(e.ri,Zs));let a=1/t;Ys.scale(a,n.ri),Zs.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),as.normalize(),as.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=Hx,l=Wx,h=Vx,d=kx;for(let u=0,f=t.length;u!==f;u++){let y=t[u],g=e[u],m=null;y.material&&g.material&&(m=n.getContactMaterial(y.material,g.material)||null);let p=y.type&Nt.KINEMATIC&&g.type&Nt.STATIC||y.type&Nt.STATIC&&g.type&Nt.KINEMATIC||y.type&Nt.KINEMATIC&&g.type&Nt.KINEMATIC;for(let b=0;b<y.shapes.length;b++){y.quaternion.mult(y.shapeOrientations[b],c),y.quaternion.vmult(y.shapeOffsets[b],h),h.vadd(y.position,h);let _=y.shapes[b];for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],d),d.vadd(g.position,d);let I=g.shapes[v];if(!(_.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+I.boundingSphereRadius)continue;let E=null;_.material&&I.material&&(E=n.getContactMaterial(_.material,I.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;let C=_.type|I.type,B=this[C];if(B){let M=!1;_.type<I.type?M=B.call(this,_,I,h,d,c,l,y,g,_,I,p):M=B.call(this,I,_,d,h,l,c,g,y,_,I,p),M&&p&&(n.shapeOverlapKeeper.set(_.id,I.id),n.bodyOverlapKeeper.set(y.id,g.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,ua),u.ni.scale(u.ni.dot(ua),id),ua.vsub(id,u.rj),-ua.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,y=u.rj;f.vadd(n,f),f.vsub(a.position,f),y.vadd(i,y),y.vsub(c.position,y),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}sphereBox(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool,f=mv;n.vsub(i,da),e.getSideNormals(f,o);let y=t.radius,g=[],m=!1,p=yv,b=xv,_=vv,v=null,I=0,E=0,C=0,B=null;for(let W=0,L=f.length;W!==L&&m===!1;W++){let $=dv;$.copy(f[W]);let j=$.length();$.normalize();let pt=da.dot($);if(pt<j+y&&pt>0){let At=fv,rt=pv;At.copy(f[(W+1)%3]),rt.copy(f[(W+2)%3]);let J=At.length(),nt=rt.length();At.normalize(),rt.normalize();let mt=da.dot(At),ot=da.dot(rt);if(mt<J&&mt>-J&&ot<nt&&ot>-nt){let Ct=Math.abs(pt-j-y);if((B===null||Ct<B)&&(B=Ct,E=mt,C=ot,v=j,p.copy($),b.copy(At),_.copy(rt),I++,d))return!0}}}if(I){m=!0;let W=this.createContactEquation(a,c,t,e,l,h);p.scale(-y,W.ri),W.ni.copy(p),W.ni.negate(W.ni),p.scale(v,p),b.scale(E,b),p.vadd(b,p),_.scale(C,_),p.vadd(_,W.rj),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}let M=u.get(),S=gv;for(let W=0;W!==2&&!m;W++)for(let L=0;L!==2&&!m;L++)for(let $=0;$!==2&&!m;$++)if(M.set(0,0,0),W?M.vadd(f[0],M):M.vsub(f[0],M),L?M.vadd(f[1],M):M.vsub(f[1],M),$?M.vadd(f[2],M):M.vsub(f[2],M),i.vadd(M,S),S.vsub(n,S),S.lengthSquared()<y*y){if(d)return!0;m=!0;let j=this.createContactEquation(a,c,t,e,l,h);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(y,j.ri),j.rj.copy(M),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(M),M=null;let R=u.get(),k=u.get(),U=u.get(),D=u.get(),G=u.get(),H=f.length;for(let W=0;W!==H&&!m;W++)for(let L=0;L!==H&&!m;L++)if(W%3!==L%3){f[L].cross(f[W],R),R.normalize(),f[W].vadd(f[L],k),U.copy(n),U.vsub(k,U),U.vsub(i,U);let $=U.dot(R);R.scale($,D);let j=0;for(;j===W%3||j===L%3;)j++;G.copy(n),G.vsub(D,G),G.vsub(k,G),G.vsub(i,G);let pt=Math.abs($),At=G.length();if(pt<f[j].length()&&At<y){if(d)return!0;m=!0;let rt=this.createContactEquation(a,c,t,e,l,h);k.vadd(D,rt.rj),rt.rj.copy(rt.rj),G.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(y,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(R,k,U,D,G)}planeBox(t,e,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}convexConvex(t,e,n,i,r,o,a,c,l,h,d,u,f){let y=Nv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,y,u,f)){let g=[],m=Fv;t.clipAgainstHull(n,r,e,i,o,y,-100,100,g);let p=0;for(let b=0;b!==g.length;b++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,I=_.rj;y.negate(_.ni),g[b].normal.negate(m),m.scale(g[b].depth,m),g[b].point.vadd(m,v),I.copy(g[b].point),v.vsub(n,v),I.vsub(i,I),v.vadd(n,v),v.vsub(a.position,v),I.vadd(i,I),I.vsub(c.position,I),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,_v);let f=e.faceNormals,y=e.faces,g=e.vertices,m=t.radius,p=[],b=!1;for(let _=0;_!==g.length;_++){let v=g[_],I=wv;o.vmult(v,I),i.vadd(I,I);let E=Sv;if(I.vsub(n,E),E.lengthSquared()<m*m){if(d)return!0;b=!0;let C=this.createContactEquation(a,c,t,e,l,h);C.ri.copy(E),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(m,C.ri),I.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(c.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let _=0,v=y.length;_!==v&&b===!1;_++){let I=f[_],E=y[_],C=Ev;o.vmult(I,C);let B=Av;o.vmult(g[E[0]],B),B.vadd(i,B);let M=Tv;C.scale(-m,M),n.vadd(M,M);let S=Cv;M.vsub(B,S);let R=S.dot(C),k=Rv;if(n.vsub(B,k),R<0&&k.dot(C)>0){let U=[];for(let D=0,G=E.length;D!==G;D++){let H=u.get();o.vmult(g[E[D]],H),i.vadd(H,H),U.push(H)}if(uv(U,C,n)){if(d)return!0;b=!0;let D=this.createContactEquation(a,c,t,e,l,h);C.scale(-m,D.ri),C.negate(D.ni);let G=u.get();C.scale(-R,G);let H=u.get();C.scale(-m,H),n.vsub(i,D.rj),D.rj.vadd(H,D.rj),D.rj.vadd(G,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(c.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),u.release(G),u.release(H),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let W=0,L=U.length;W!==L;W++)u.release(U[W]);return}else for(let D=0;D!==E.length;D++){let G=u.get(),H=u.get();o.vmult(g[E[(D+1)%E.length]],G),o.vmult(g[E[(D+2)%E.length]],H),i.vadd(G,G),i.vadd(H,H);let W=bv;H.vsub(G,W);let L=Mv;W.unit(L);let $=u.get(),j=u.get();n.vsub(G,j);let pt=j.dot(L);L.scale(pt,$),$.vadd(G,$);let At=u.get();if($.vsub(n,At),pt>0&&pt*pt<W.lengthSquared()&&At.lengthSquared()<m*m){if(d)return!0;let rt=this.createContactEquation(a,c,t,e,l,h);$.vsub(i,rt.rj),$.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let J=0,nt=U.length;J!==nt;J++)u.release(U[J]);u.release(G),u.release(H),u.release($),u.release(At),u.release(j);return}u.release(G),u.release(H),u.release($),u.release(At),u.release(j)}for(let D=0,G=U.length;D!==G;D++)u.release(U[D])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,d){let u=Pv,f=Iv;f.set(0,0,1),r.vmult(f,f);let y=0,g=Bv;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let b=this.createContactEquation(a,c,t,e,l,h),_=Lv;f.scale(f.dot(g),_),u.vsub(_,_),_.vsub(n,b.ri),b.ni.copy(f),u.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}boxConvex(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=t.radius,y=e.elementSize,g=Yv,m=Xv;Zt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/y)-1,b=Math.ceil((m.x+f)/y)+1,_=Math.floor((m.y-f)/y)-1,v=Math.ceil((m.y+f)/y)+1;if(b<0||v<0||p>u.length||_>u[0].length)return;p<0&&(p=0),b<0&&(b=0),_<0&&(_=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),b>=u.length&&(b=u.length-1),v>=u[0].length&&(v=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let I=[];e.getRectMinMax(p,_,b,v,I);let E=I[0],C=I[1];if(m.z-f>C||m.z+f<E)return;let B=this.result;for(let M=p;M<b;M++)for(let S=_;S<v;S++){let R=B.length,k=!1;if(e.getConvexTrianglePillar(M,S,!1),Zt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&k||(e.getConvexTrianglePillar(M,S,!0),Zt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&k))return!0;if(B.length-R>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=e.elementSize,y=t.boundingSphereRadius,g=Gv,m=qv,p=Wv;Zt.pointToLocalFrame(i,o,n,p);let b=Math.floor((p.x-y)/f)-1,_=Math.ceil((p.x+y)/f)+1,v=Math.floor((p.y-y)/f)-1,I=Math.ceil((p.y+y)/f)+1;if(_<0||I<0||b>u.length||v>u[0].length)return;b<0&&(b=0),_<0&&(_=0),v<0&&(v=0),I<0&&(I=0),b>=u.length&&(b=u.length-1),_>=u.length&&(_=u.length-1),I>=u[0].length&&(I=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let E=[];e.getRectMinMax(b,v,_,I,E);let C=E[0],B=E[1];if(!(p.z-y>B||p.z+y<C))for(let M=b;M<_;M++)for(let S=v;S<I;S++){let R=!1;if(e.getConvexTrianglePillar(M,S,!1),Zt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&R||(e.getConvexTrianglePillar(M,S,!0),Zt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&R))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,d){let u=zv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let y=this.createContactEquation(c,a,e,t,l,h);u.normalize(),y.rj.copy(u),y.rj.scale(t.radius,y.rj),y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,d){let u=Dv;u.set(0,0,1),a.quaternion.vmult(u,u);let f=Uv;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);let m=Ov;u.scale(u.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexParticle(t,e,n,i,r,o,a,c,l,h,d){let u=-1,f=kv,y=Hv,g=null,m=0,p=Vv;if(p.copy(i),p.vsub(n,p),r.conjugate(sd),sd.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let b=0,_=t.faces.length;b!==_;b++){let v=[t.worldVertices[t.faces[b][0]]],I=t.worldFaceNormals[b];i.vsub(v[0],rd);let E=-I.dot(rd);if(g===null||Math.abs(E)<Math.abs(g)){if(d)return!0;g=E,u=b,f.copy(I),m++}}if(u!==-1){let b=this.createContactEquation(c,a,e,t,l,h);f.scale(g,y),y.vadd(i,y),y.vsub(n,y),b.rj.copy(y),f.negate(b.ni),b.ri.set(0,0,0);let _=b.ri,v=b.rj;_.vadd(i,_),_.vsub(c.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=Jx,f=Qx,y=Kx,g=tv,m=ev,p=nv,b=ov,_=jx,v=Zx,I=av;Zt.pointToLocalFrame(i,o,n,m);let E=t.radius;b.lowerBound.set(m.x-E,m.y-E,m.z-E),b.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(b,I);let C=$x,B=t.radius*t.radius;for(let U=0;U<I.length;U++)for(let D=0;D<3;D++)if(e.getVertex(e.indices[I[U]*3+D],C),C.vsub(m,v),v.lengthSquared()<=B){if(_.copy(C),Zt.pointToWorldFrame(i,o,_,C),C.vsub(n,v),d)return!0;let G=this.createContactEquation(a,c,t,e,l,h);G.ni.copy(v),G.ni.normalize(),G.ri.copy(G.ni),G.ri.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.copy(C),G.rj.vsub(c.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}for(let U=0;U<I.length;U++)for(let D=0;D<3;D++){e.getVertex(e.indices[I[U]*3+D],u),e.getVertex(e.indices[I[U]*3+(D+1)%3],f),f.vsub(u,y),m.vsub(f,p);let G=p.dot(y);m.vsub(u,p);let H=p.dot(y);if(H>0&&G<0&&(m.vsub(u,p),g.copy(y),g.normalize(),H=p.dot(g),g.scale(H,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let L=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),Zt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,L.rj),Zt.vectorToWorldFrame(o,L.ni,L.ni),Zt.vectorToWorldFrame(o,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}let M=iv,S=sv,R=rv,k=Yx;for(let U=0,D=I.length;U!==D;U++){e.getTriangleVertices(I[U],M,S,R),e.getNormal(I[U],k),m.vsub(M,p);let G=p.dot(k);if(k.scale(G,p),m.vsub(p,p),G=p.distanceTo(m),gn.pointInTriangle(p,M,S,R)&&G<t.radius){if(d)return!0;let H=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),Zt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,H.rj),Zt.vectorToWorldFrame(o,H.ni,H.ni),Zt.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}I.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=new x,f=Gx;f.set(0,0,1),r.vmult(f,f);for(let y=0;y<e.vertices.length/3;y++){e.getVertex(y,u);let g=new x;g.copy(u),Zt.pointToWorldFrame(i,o,g,u);let m=qx;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let b=this.createContactEquation(a,c,t,e,l,h);b.ni.copy(f);let _=Xx;f.scale(m.dot(f),_),u.vsub(_,_),b.ri.copy(_),b.ri.vsub(a.position,b.ri),b.rj.copy(u),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}}},as=new x,Ys=new x,Zs=new x,Vx=new x,kx=new x,Hx=new xe,Wx=new xe;var Gx=new x,qx=new x,Xx=new x,Yx=new x,Zx=new x,vE=new x,$x=new x,jx=new x,Jx=new x,Qx=new x,Kx=new x,tv=new x,ev=new x,nv=new x,iv=new x,sv=new x,rv=new x,ov=new Ie,av=[],ua=new x,id=new x,cv=new x,lv=new x,hv=new x;function uv(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=cv;s[(r+1)%i].vsub(o,a);let c=lv;a.cross(t,c);let l=hv;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var da=new x,dv=new x,fv=new x,pv=new x,mv=[new x,new x,new x,new x,new x,new x],gv=new x,yv=new x,xv=new x,vv=new x,_v=new x,bv=new x,Mv=new x,Sv=new x,wv=new x,Ev=new x,Av=new x,Tv=new x,Cv=new x,Rv=new x,_E=new x,bE=new x,Pv=new x,Iv=new x,Bv=new x,Lv=new x,Nv=new x,Fv=new x,Dv=new x,Uv=new x,Ov=new x,zv=new x,sd=new xe,Vv=new x,ME=new x,kv=new x,rd=new x,Hv=new x,Wv=new x,Gv=new x,qv=[0],Xv=new x,Yv=new x;var Cr=class{constructor(){T(this,"current");T(this,"previous");this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||od(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||od(e,h)}}};function od(s,t){s.push((t&4294901760)>>16,t&65535)}var kl=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,pa=class{constructor(){T(this,"data",{keys:[]})}get(t,e){let n=kl(t,e);return this.data[n]}set(t,e,n){let i=kl(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=kl(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}};var ma=class extends qs{constructor(e={}){super();T(this,"dt");T(this,"allowSleep");T(this,"contacts");T(this,"frictionEquations");T(this,"quatNormalizeSkip");T(this,"quatNormalizeFast");T(this,"time");T(this,"stepnumber");T(this,"default_dt");T(this,"nextId");T(this,"gravity");T(this,"frictionGravity");T(this,"broadphase");T(this,"bodies");T(this,"hasActiveBodies");T(this,"solver");T(this,"constraints");T(this,"narrowphase");T(this,"collisionMatrix");T(this,"collisionMatrixPrevious");T(this,"bodyOverlapKeeper");T(this,"shapeOverlapKeeper");T(this,"contactmaterials");T(this,"contactMaterialTable");T(this,"defaultMaterial");T(this,"defaultContactMaterial");T(this,"doProfiling");T(this,"profile");T(this,"accumulator");T(this,"subsystems");T(this,"addBodyEvent");T(this,"removeBodyEvent");T(this,"idToBodyMap");T(this,"lastCallTime");this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new x,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new x,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new jo,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new ca,this.constraints=[],this.narrowphase=new fa(this),this.collisionMatrix=new br,this.collisionMatrixPrevious=new br,this.bodyOverlapKeeper=new Cr,this.shapeOverlapKeeper=new Cr,this.contactmaterials=[],this.contactMaterialTable=new pa,this.defaultMaterial=new oa("default"),this.defaultContactMaterial=new sa(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,n){return this.contactMaterialTable.get(e.id,n.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let n=this.constraints.indexOf(e);n!==-1&&this.constraints.splice(n,1)}rayTest(e,n,i){i instanceof li?this.raycastClosest(e,n,{skipBackfaces:!0},i):this.raycastAll(e,n,{skipBackfaces:!0},i)}raycastAll(e,n,i={},r){return i.mode=gn.ALL,i.from=e,i.to=n,i.callback=r,Hl.intersectWorld(this,i)}raycastAny(e,n,i={},r){return i.mode=gn.ANY,i.from=e,i.to=n,i.result=r,Hl.intersectWorld(this,i)}raycastClosest(e,n,i={},r){return i.mode=gn.CLOSEST,i.from=e,i.to=n,i.result=r,Hl.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Nt&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let n=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let o=0;o!==i.length;o++)i[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let n=this.bodies;for(let i=0;i<n.length;i++){let r=n[i].shapes;for(let o=0;o<r.length;o++){let a=r[o];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let n=this.contactmaterials.indexOf(e);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e=1/60,n=10){let i=Be.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,n);else{let r=i-this.lastCallTime;this.step(e,r,n)}this.lastCallTime=i}step(e,n,i=10){if(n===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=n;let r=Be.now(),o=0;for(;this.accumulator>=e&&o<i&&(this.internalStep(e),this.accumulator-=e,o++,!(Be.now()-r>e*1e3)););this.accumulator=this.accumulator%e;let a=this.accumulator/e;for(let c=0;c!==this.bodies.length;c++){let l=this.bodies[c];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=n}}internalStep(e){this.dt=e;let n=this,i=this,r=this.contacts,o=Qv,a=Kv,c=this.bodies.length,l=this.bodies,h=this.solver,d=this.gravity,u=this.doProfiling,f=this.profile,y=Nt.DYNAMIC,g=-1/0,m=this.constraints,p=Jv,b=d.length(),_=d.x,v=d.y,I=d.z,E=0;for(u&&(g=Be.now()),E=0;E!==c;E++){let W=l[E];if(W.type===y){let L=W.force,$=W.mass;L.x+=$*_,L.y+=$*v,L.z+=$*I}}for(let W=0,L=this.subsystems.length;W!==L;W++)this.subsystems[W].update();u&&(g=Be.now()),o.length=0,a.length=0,this.broadphase.collisionPairs(this,o,a),u&&(f.broadphase=Be.now()-g);let C=m.length;for(E=0;E!==C;E++){let W=m[E];if(!W.collideConnected)for(let L=o.length-1;L>=0;L-=1)(W.bodyA===o[L]&&W.bodyB===a[L]||W.bodyB===o[L]&&W.bodyA===a[L])&&(o.splice(L,1),a.splice(L,1))}this.collisionMatrixTick(),u&&(g=Be.now());let B=jv,M=r.length;for(E=0;E!==M;E++)B.push(r[E]);r.length=0;let S=this.frictionEquations.length;for(E=0;E!==S;E++)p.push(this.frictionEquations[E]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(o,a,this,r,B,this.frictionEquations,p),u&&(f.narrowphase=Be.now()-g),u&&(g=Be.now()),E=0;E<this.frictionEquations.length;E++)h.addEquation(this.frictionEquations[E]);let R=r.length;for(let W=0;W!==R;W++){let L=r[W],$=L.bi,j=L.bj,pt=L.si,At=L.sj,rt;$.material&&j.material?rt=this.getContactMaterial($.material,j.material)||this.defaultContactMaterial:rt=this.defaultContactMaterial;let J=rt.friction;if($.material&&j.material&&($.material.friction>=0&&j.material.friction>=0&&(J=$.material.friction*j.material.friction),$.material.restitution>=0&&j.material.restitution>=0&&(L.restitution=$.material.restitution*j.material.restitution)),h.addEquation(L),$.allowSleep&&$.type===Nt.DYNAMIC&&$.sleepState===Nt.SLEEPING&&j.sleepState===Nt.AWAKE&&j.type!==Nt.STATIC){let nt=j.velocity.lengthSquared()+j.angularVelocity.lengthSquared(),mt=j.sleepSpeedLimit**2;nt>=mt*2&&($.wakeUpAfterNarrowphase=!0)}if(j.allowSleep&&j.type===Nt.DYNAMIC&&j.sleepState===Nt.SLEEPING&&$.sleepState===Nt.AWAKE&&$.type!==Nt.STATIC){let nt=$.velocity.lengthSquared()+$.angularVelocity.lengthSquared(),mt=$.sleepSpeedLimit**2;nt>=mt*2&&(j.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set($,j,!0),this.collisionMatrixPrevious.get($,j)||(Rr.body=j,Rr.contact=L,$.dispatchEvent(Rr),Rr.body=$,j.dispatchEvent(Rr)),this.bodyOverlapKeeper.set($.id,j.id),this.shapeOverlapKeeper.set(pt.id,At.id)}for(this.emitContactEvents(),u&&(f.makeContactConstraints=Be.now()-g,g=Be.now()),E=0;E!==c;E++){let W=l[E];W.wakeUpAfterNarrowphase&&(W.wakeUp(),W.wakeUpAfterNarrowphase=!1)}for(C=m.length,E=0;E!==C;E++){let W=m[E];W.update();for(let L=0,$=W.equations.length;L!==$;L++){let j=W.equations[L];h.addEquation(j)}}h.solve(e,this),u&&(f.solve=Be.now()-g),h.removeAllEquations();let k=Math.pow;for(E=0;E!==c;E++){let W=l[E];if(W.type&y){let L=k(1-W.linearDamping,e),$=W.velocity;$.scale(L,$);let j=W.angularVelocity;if(j){let pt=k(1-W.angularDamping,e);j.scale(pt,j)}}}this.dispatchEvent($v),u&&(g=Be.now());let D=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(E=0;E!==c;E++)l[E].integrate(e,D,G);this.clearForces(),this.broadphase.dirty=!0,u&&(f.integrate=Be.now()-g),this.stepnumber+=1,this.dispatchEvent(Zv);let H=!0;if(this.allowSleep)for(H=!1,E=0;E!==c;E++){let W=l[E];W.sleepTick(this.time),W.sleepState!==Nt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((e||n)&&this.bodyOverlapKeeper.getDiff(ui,di),e){for(let o=0,a=ui.length;o<a;o+=2)Pr.bodyA=this.getBodyById(ui[o]),Pr.bodyB=this.getBodyById(ui[o+1]),this.dispatchEvent(Pr);Pr.bodyA=Pr.bodyB=null}if(n){for(let o=0,a=di.length;o<a;o+=2)Ir.bodyA=this.getBodyById(di[o]),Ir.bodyB=this.getBodyById(di[o+1]),this.dispatchEvent(Ir);Ir.bodyA=Ir.bodyB=null}ui.length=di.length=0;let i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(ui,di),i){for(let o=0,a=ui.length;o<a;o+=2){let c=this.getShapeById(ui[o]),l=this.getShapeById(ui[o+1]);fi.shapeA=c,fi.shapeB=l,c&&(fi.bodyA=c.body),l&&(fi.bodyB=l.body),this.dispatchEvent(fi)}fi.bodyA=fi.bodyB=fi.shapeA=fi.shapeB=null}if(r){for(let o=0,a=di.length;o<a;o+=2){let c=this.getShapeById(di[o]),l=this.getShapeById(di[o+1]);pi.shapeA=c,pi.shapeB=l,c&&(pi.bodyA=c.body),l&&(pi.bodyB=l.body),this.dispatchEvent(pi)}pi.bodyA=pi.bodyB=pi.shapeA=pi.shapeB=null}}clearForces(){let e=this.bodies,n=e.length;for(let i=0;i!==n;i++){let r=e[i],o=r.force,a=r.torque;r.force.set(0,0,0),r.torque.set(0,0,0)}}},WE=new Ie;var Hl=new gn,Be=globalThis.performance||{};if(!Be.now){let s=Date.now();Be.timing&&Be.timing.navigationStart&&(s=Be.timing.navigationStart),Be.now=()=>Date.now()-s}var GE=new x,Zv={type:"postStep"},$v={type:"preStep"},Rr={type:Nt.COLLIDE_EVENT_NAME,body:null,contact:null},jv=[],Jv=[],Qv=[],Kv=[],ui=[],di=[],Pr={type:"beginContact",bodyA:null,bodyB:null},Ir={type:"endContact",bodyA:null,bodyB:null},fi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},pi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var ga=window.Ruina||null,Et=s=>document.getElementById(s),Dn={get(s,t){try{let e=localStorage.getItem("ruina."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("ruina."+s,JSON.stringify(t))}catch{}}},_n=Math.random,Tt=(s,t)=>s+(t-s)*_n(),us=Et("c"),yi=new Bo({canvas:us,antialias:!0,powerPreference:"high-performance"});yi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));yi.shadowMap.enabled=!0;yi.shadowMap.type=Ml;yi.toneMapping=Sl;yi.toneMappingExposure=1.05;var be=new No;be.fog=new Lo(13621734,70,220);var xn=new ke(50,1,.1,600);{let s=new gr(400,32,16),t=[],e=new Ut(4026291),n=new Ut(11126502),i=new Ut(15980984),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o)/400,c=a>.15?n.clone().lerp(e,Math.min(1,(a-.15)/.6)):i.clone().lerp(n,Math.max(0,(a+.05)/.2));t.push(c.r,c.g,c.b)}s.setAttribute("color",new Ce(t,3)),be.add(new se(s,new zs({vertexColors:!0,side:He,fog:!1})))}be.add(new Ho(14412031,6969925,1.1));var ds=new qo(16773597,2.6);ds.position.set(30,45,20);ds.castShadow=!0;ds.shadow.mapSize.set(1536,1536);Object.assign(ds.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});ds.shadow.bias=-4e-4;ds.shadow.normalBias=.02;be.add(ds);var xi=new Go(16756832,0,40,1.6);be.add(xi);var Me=new ma({gravity:new x(0,-9.82,0),allowSleep:!0});Me.broadphase=new Ko(Me);Me.solver.iterations=9;Me.defaultContactMaterial.friction=.6;Me.defaultContactMaterial.restitution=.04;var dd={brick:{color:11818301,dens:18,v:.1},concrete:{color:10724253,dens:24,v:.05},wood:{color:10119742,dens:7,v:.1},steel:{color:5989748,dens:40,v:.04,metal:!0},glass:{color:11132146,dens:10,v:.02,glass:!0},stone:{color:13481611,dens:20,v:.08},car:{color:14173754,dens:6,v:.25}},gi=new ts(1,1,1),Oi={},_e=[],De=null,sn=null;function e_(s){let t=dd[s];return t.glass?new Ge({color:16777215,roughness:.05,metalness:.1,transparent:!0,opacity:.38,depthWrite:!1}):new Ge({color:16777215,roughness:t.metal?.45:.85,metalness:t.metal?.6:0})}var Yl=[];function le(s,t,e,n,i,r,o,a=0){Yl.push({type:s,x:t,y:e,z:n,sx:i,sy:r,sz:o,ry:a})}function n_(){let s={};for(let n of Yl)(s[n.type]=s[n.type]||[]).push(n);let t=new ln,e=new Ut;for(let n in s){let i=s[n],r=dd[n],o=new Do(gi,e_(n),i.length);o.castShadow=!r.glass,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(vr),be.add(o),Oi[n]=o,i.forEach((a,c)=>{let l=a.sx*a.sy*a.sz,h=new Nt({mass:Math.max(.3,l*r.dens),shape:new Fi(new x(a.sx/2,a.sy/2,a.sz/2))});h.position.set(a.x,a.y,a.z),h.quaternion.setFromEuler(0,a.ry,0),h.sleepSpeedLimit=.22,h.sleepTimeLimit=.5,h.linearDamping=.03,h.angularDamping=.08,Me.addBody(h),h.sleep();let d={body:h,type:n,mesh:o,idx:c,size:new N(a.sx,a.sy,a.sz),start:new N(a.x,a.y,a.z),startQ:h.quaternion.clone(),gone:!1,glass:!!r.glass};h.userData=d,d.glass&&h.addEventListener("collide",p_),h.addEventListener("collide",m_),_e.push(d);let u=new Ut(r.color),f=1+(_n()-.5)*2*r.v;n==="car"&&u.setHSL(_n(),.55,.5),e.setRGB(u.r*f,u.g*f,u.b*f),o.setColorAt(c,e),zr(d,t)}),o.instanceColor.needsUpdate=!0}Yl=[]}var cs=new oe,Zl=new N,ya=new ln,fd=new N(0,0,0);function zr(s){s.gone?cs.compose(Zl.set(0,-999,0),ya.identity(),fd):cs.compose(Zl.copy(s.body.position),ya.copy(s.body.quaternion),s.size),s.mesh.setMatrixAt(s.idx,cs)}var Wl=new Ge({color:8165975,roughness:1}),pd=new Ge({color:7035461,roughness:1});function i_(s){De=new Nt({type:Nt.STATIC,mass:0}),sn=new si,be.add(sn);let t=(e,n,i,r,o,a,c)=>{De.addShape(new Fi(new x(e,n,i)),new x(r,o,a));let l=new se(gi,c);l.scale.set(e*2,n*2,i*2),l.position.set(r,o,a),l.receiveShadow=!0,sn.add(l)};if(s){t(95,5,100,-104,-5,0,Wl),t(95,5,100,104,-5,0,Wl),t(9,2,100,0,-8,0,pd);let e=new se(new ks(18,200),new Ge({color:4163256,roughness:.15,metalness:.1,transparent:!0,opacity:.78}));e.rotation.x=-Math.PI/2,e.position.y=-3.2,sn.add(e)}else t(150,5,150,0,-5,0,Wl);Me.addBody(De)}var ls=[{id:"pyramid",name:"\u041F\u0456\u0440\u0430\u043C\u0456\u0434\u0430",desc:"\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430: \u043A\u0430\u043C'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438 \u0434\u043E \u043D\u0435\u0431\u0430",ammo:{ball:6,bomb:3,meteor:0,quake:0,crane:1},goal:.6,cam:[24,14,3],build:s_},{id:"house",name:"\u0411\u0443\u0434\u0438\u043D\u043E\u043A",desc:"\u0426\u0435\u0433\u043B\u0430, \u0431\u0435\u0442\u043E\u043D\u043D\u0456 \u043F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0456 \u0441\u043A\u043B\u043E",ammo:{ball:5,bomb:2,meteor:1,quake:0,crane:1},goal:.7,cam:[24,9,3.5],build:r_},{id:"tower",name:"\u0412\u0435\u0436\u0430",desc:"\u041A\u0440\u0443\u0433\u043B\u0430 \u0446\u0435\u0433\u043B\u044F\u043D\u0430 \u0432\u0435\u0436\u0430 \u0437 \u0437\u0443\u0431\u0446\u044F\u043C\u0438",ammo:{ball:5,bomb:2,meteor:1,quake:1,crane:1},goal:.7,cam:[26,10,4.5],build:o_},{id:"bridge",name:"\u041C\u0456\u0441\u0442",desc:"\u0421\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0430\u043B\u043A\u0438 \u043D\u0430\u0434 \u0440\u0456\u0447\u043A\u043E\u044E",ammo:{ball:4,bomb:3,meteor:1,quake:0,crane:1},goal:.65,cam:[26,9,-1],build:a_,river:!0},{id:"sky",name:"\u0425\u043C\u0430\u0440\u043E\u0447\u043E\u0441",desc:"\u0422\u043E\u043D\u043A\u0456 \u043A\u043E\u043B\u043E\u043D\u0438, \u0432\u0430\u0436\u043A\u0456 \u043F\u043E\u0432\u0435\u0440\u0445\u0438",ammo:{ball:3,bomb:2,meteor:1,quake:1,crane:1},goal:.7,cam:[30,14,9],build:c_},{id:"castle",name:"\u0417\u0430\u043C\u043E\u043A",desc:"\u041C\u0443\u0440\u0438, \u0432\u0435\u0436\u0456 \u0439 \u0431\u0456\u0439\u043D\u0438\u0446\u0456",ammo:{ball:6,bomb:3,meteor:2,quake:1,crane:2},goal:.7,cam:[34,16,3],build:l_}];function s_(){for(let e=0;e<8;e++){let n=8-e,i=(n-1)*1.2/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++)le("stone",r*1.2-i,e*1.2+1.2/2,o*1.2-i,1.2*.99,1.2*.99,1.2*.99)}}function r_(){let e=i=>{let r=i*3.3;for(let c=0;c<6;c++){let l=r+c*.5+.25,h=c%2,d=c>=2&&c<=4,u=h?[-3,-2,-1,0,1,2,3]:[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5];for(let y of[2.75,-2.75])for(let g of u)d&&(Math.abs(g+2)<.6||Math.abs(g-2)<.6)||i===0&&y>0&&c<=4&&Math.abs(g)<.6||le("brick",g,l,y,.98,.49,.5);let f=h?[-2.5,-1.5,-.5,.5,1.5,2.5]:[-2,-1,0,1,2];for(let y of[3.75,-3.75])for(let g of f)d&&Math.abs(g)<.6||le("brick",y,l,g,.5,.49,.98)}let o=r+3.5*.5;for(let c of[2.75,-2.75])for(let l of[-2,2])le("glass",l,o,c,.95,1.45,.08);for(let c of[3.75,-3.75])le("glass",c,o,0,.08,1.45,.95);let a=r+6*.5+.15;for(let c of[-2,2])for(let l of[-1.5,1.5])le("concrete",c,a,l,4,.3,3,0)};e(0),e(1);let n=2*(6*.5+.3);for(let i=0;i<4;i++)for(let[r,o]of[[2.2,-1.2],[2.8,-1.2],[2.2,-.6],[2.8,-.6]])le("brick",r,n+i*.4+.2,o,.58,.39,.58)}function o_(){let i=2*Math.PI*2.9000000000000004/18*.98;for(let o=0;o<17;o++)for(let a=0;a<18;a++){if(o===16&&a%2||o>=2&&o<=5&&a===0||o>=10&&o<=12&&(a===5||a===14))continue;let c=(a+o%2*.5)/18*Math.PI*2;le("brick",Math.cos(c)*3.2,o*.5+.5/2,Math.sin(c)*3.2,i,.5*.98,.55,-c+Math.PI/2)}let r=17*.5-.5;for(let o=-2;o<=2;o++)le("wood",o*1.1,r-.1,0,1.05,.2,5.4)}function a_(){for(let t of[-3,3])for(let e=0;e<6;e++)le("concrete",t,-6+e+.5,0,2,.98,3.2);let s=[[-10.5,-3.1],[-2.9,2.9],[3.1,10.5]];for(let[t,e]of s)for(let n of[-1.2,1.2])le("steel",(t+e)/2,.2,n,e-t,.4,.45);for(let t=-10.2;t<=10.2;t+=.62)le("wood",t,.48,0,.58,.15,3.4);for(let t=-9.9;t<=9.9;t+=1.65)for(let e of[-1.6,1.6])le("wood",t,1.06,e,.14,1,.14);for(let t=-9.9+.825;t<9.9;t+=1.65)for(let e of[-1.6,1.6])le("wood",t,1.62,e,1.6,.12,.14);le("car",-5,1.2,.6,2.2,1.2,1.1),le("car",4.5,1.2,-.6,2.2,1.2,1.1)}function c_(){let n=0;for(let i=0;i<6;i++){for(let r of[-3,0,3])for(let o of[-3,0,3])r===0&&o===0||le("steel",r,n+2.7/2,o,.4,2.7,.4);for(let[r,o,a,c]of[[-1.5,-3,2.5,.06],[1.5,-3,2.5,.06],[-1.5,3,2.5,.06],[1.5,3,2.5,.06],[-3,-1.5,.06,2.5],[-3,1.5,.06,2.5],[3,-1.5,.06,2.5],[3,1.5,.06,2.5]])le("glass",r,n+2.7/2,o,a,2.7*.92,c);n+=2.7;for(let r of[-1.6,1.6])for(let o of[-1.6,1.6])le("concrete",r,n+.15,o,3.16,.3,3.16);n+=.3}le("steel",0,n+1.5,0,.25,3,.25)}function l_(){for(let e=0;e<3;e++){let n=e%2?[-3.75,-2.25,-.75,.75,2.25,3.75]:[-3.75,-2.25,-.75,.75,2.25,3.75];for(let i of n)for(let r of[-7,7])r>0&&e<2&&Math.abs(i)<1||le("stone",i,e+.5,r,1.5*.98,.98,1);for(let i of n)for(let r of[-7,7])le("stone",r,e+.5,i,1,.98,1.5*.98)}for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])le("stone",e,3.4,n,.8,.8,.9);for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])le("stone",n,3.4,e,.9,.8,.8);for(let e of[-7,7])for(let n of[-7,7]){for(let i=0;i<6;i++){let r=i%2?[[-1,-.5,2,1],[1,.5,2,1],[.5,-1,1,2],[-.5,1,1,2]]:[[-.5,-1,2,1],[.5,1,2,1],[1,-.5,1,2],[-1,.5,1,2]];for(let[o,a,c,l]of r)le("stone",e+o,i+.5,n+a,c*.98,.98,l*.98)}for(let[i,r]of[[-1,-1],[1,1],[-1,1],[1,-1]])le("stone",e+i,6.4,n+r,.7,.8,.7)}for(let e=0;e<3;e++)le("wood",0,e*1.2+.6,0,1.2-e*.3,1.18,1.2-e*.3)}var Ee=null,bn=!1,un={},Ze="ball",Ae="menu",xa=0,va=0,Js=!1,Mn=[],Xn=[],we=null,Ue=0,Zn=0,Gt={theta:.6,phi:1.15,r:26,target:new N(0,3,0)};function h_(){wt&&wa();for(let s of _e)Me.removeBody(s.body);for(let s of Mn)Me.removeBody(s.body),be.remove(s.mesh);for(let s of Xn)be.remove(s.mesh);for(let s of Object.values(Oi))be.remove(s),s.material.dispose(),s.dispose();Sd(),De&&Me.removeBody(De),sn&&be.remove(sn),_e=[],Oi={},Mn=[],Xn=[],we=null,Ft.buf=null,Ft.count=0}function hs(s,t){h_(),Sn.clear(),Ue=0,Ee=s,bn=!!t,Js=!1,va=0,xa=0,Zn=0,un={...s.ammo},bn&&(un={ball:1/0,bomb:1/0,meteor:1/0,quake:1/0,crane:1/0}),i_(!!s.river),s.build(),n_(),w_(),Gt.r=s.cam[0],Gt.target.set(0,s.cam[2],0),Gt.theta=.55,Gt.phi=Math.atan2(s.cam[0],s.cam[1]*1.3),Ze="ball",un.ball||(Ze=Object.keys(un).find(e=>un[e]>0)||"ball"),Ae="play",Et("menu").hidden=!0,Et("result").hidden=!0,Et("hud").hidden=!1,Et("lvname").textContent=s.name+(bn?" \xB7 \u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C":""),Vr(),Pd(0),Dn.get("hinted",!1)||(Et("hint").hidden=!1,Dn.set("hinted",!0),setTimeout(()=>Et("hint").hidden=!0,5e3))}var u_=new N,ad=new xe;function _a(){if(!_e.length)return 0;let s=0;for(let t of _e){if(t.gone){s++;continue}let e=t.body.position,n=u_.set(e.x-t.start.x,e.y-t.start.y,e.z-t.start.z).length();t.startQ.conjugate(ad);let i=ad.mult(t.body.quaternion),r=2*Math.acos(Math.min(1,Math.abs(i.w)));(n>.9||r>.55)&&s++}return s/_e.length}var d_=[{id:"ball",name:"\u042F\u0434\u0440\u043E",icon:"\u25CF"},{id:"bomb",name:"\u0411\u043E\u043C\u0431\u0430",icon:"\u2738"},{id:"meteor",name:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",icon:"\u2604"},{id:"quake",name:"\u0417\u0435\u043C\u043B\u0435\u0442\u0440\u0443\u0441",icon:"\u224B"},{id:"crane",name:"\u0411\u0430\u0431\u0430",icon:"\u26B2"}],ba=new gr(1,24,16),Ma=new Ge({color:2829619,roughness:.35,metalness:.7}),md=new Ge({color:4860700,roughness:.9,emissive:16734746,emissiveIntensity:1.4}),gd=new Ge({color:14232363,roughness:.4,emissive:16719904,emissiveIntensity:.6}),Dr=new Xo;function f_(s,t){let e=new Yt(s/innerWidth*2-1,-(t/innerHeight)*2+1);Dr.setFromCamera(e,xn);let n=Object.values(Oi).concat(sn?sn.children:[]);for(let r of Object.values(Oi))r.computeBoundingSphere();let i=Dr.intersectObjects(n,!1);return{ray:Dr.ray.clone(),hit:i[0]||null}}function yd(s,t){if(Ae!=="play"||Js)return;if(Ze==="crane"){if(Xt&&!Xt.leaving)return;un.crane>0?Kl():Fn("\u041A\u0440\u0430\u043D \u0443\u0436\u0435 \u043F\u043E\u0457\u0445\u0430\u0432 \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0443 \u0437\u0431\u0440\u043E\u044E");return}if(!(un[Ze]>0)){Fn("\u0426\u0435\u0439 \u043D\u0430\u0431\u0456\u0439 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\u0441\u044F \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0438\u0439");return}let{ray:e,hit:n}=f_(s,t);if(Ze==="ball"){Fr(),Le.shoot();let i=e.direction.clone(),r=xn.position.clone().addScaledVector(i,2).add(new N(0,-.6,0));Ui("shot",r.x,r.y,r.z,0),cd(r,i.multiplyScalar(46),.5,90,Ma)}else if(Ze==="bomb"){if(!n){Fn("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0431\u0443\u0434\u0456\u0432\u043B\u0456, \u0449\u043E\u0431 \u0437\u0430\u043A\u043B\u0430\u0441\u0442\u0438 \u0431\u043E\u043C\u0431\u0443");return}Fr();let i=new se(ba,gd);i.scale.setScalar(.35),i.position.copy(n.point),be.add(i),Xn.push({mesh:i,t:.9,pos:n.point.clone()}),Le.tick(),Ui("tick",n.point.x,n.point.y,n.point.z,0)}else if(Ze==="meteor"){let i=n?n.point:e.at(30,new N);Fr(),Le.whoosh();let r=new N(i.x+8,55,i.z+4);Ui("whoosh",i.x,i.y,i.z,0);let o=i.clone().sub(r).normalize().multiplyScalar(38),a=cd(r,o,1.5,900,md);a.meteor=!0}else if(Ze==="quake"){Fr(),we={t:0,dur:4.5,a:.28,f:2.3,dir:_n()*Math.PI},De.type=Nt.KINEMATIC;for(let i of _e)i.body.wakeUp();Le.rumble(),zi(80),Ui("quake",0,0,0,we.dur)}}function Kl(){Fr(),M_(),Gt.r=Math.max(Gt.r,Math.min(70,Ee.cam[0]*1.35)),Gt.phi=Math.min(Gt.phi,1.2),Fn("\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0431\u0430\u0431\u0430 \u043F\u043E\u043B\u0435\u0442\u0438\u0442\u044C \u0441\u043B\u0456\u0434\u043E\u043C. \u041A\u0430\u043C\u0435\u0440\u0430 \u2014 \u0434\u0432\u043E\u043C\u0430 \u043F\u0430\u043B\u044C\u0446\u044F\u043C\u0438")}function Fr(){un[Ze]!==1/0&&un[Ze]--,va++,xa=Zn,Vr()}function cd(s,t,e,n,i){let r=new Nt({mass:n,shape:new os(e),linearDamping:.01});r.position.set(s.x,s.y,s.z),r.velocity.set(t.x,t.y,t.z),r.allowSleep=!1;let o=new se(ba,i);o.scale.setScalar(e),o.castShadow=!0,be.add(o);let a={body:r,mesh:o,age:0};if(r.addEventListener("collide",c=>{if(a.meteor&&!a.boomed){a.boomed=!0;let l=r.position;th(new N(l.x,l.y,l.z),7.5,22)}else{let l=c.contact.getImpactVelocityAlongNormal();Math.abs(l)>8&&(Le.thud(Math.min(1,Math.abs(l)/40)),zi(15))}}),Me.addBody(r),Mn.push(a),Mn.length>10){let c=Mn.shift();Me.removeBody(c.body),be.remove(c.mesh)}return a}function th(s,t,e){for(let n of _e){if(n.gone)continue;let i=n.body.position,r=i.x-s.x,o=i.y-s.y,a=i.z-s.z,c=Math.hypot(r,o,a);if(c>t)continue;if(n.glass&&c<t*.8){xd(n);continue}let l=e*(1-c/t),h=1/Math.max(.3,c);n.body.wakeUp(),n.body.applyImpulse(new x(r*h*l*n.body.mass,(o*h+.45)*l*n.body.mass,a*h*l*n.body.mass)),n.body.angularVelocity.set(Tt(-1,1)*l*.4,Tt(-1,1)*l*.4,Tt(-1,1)*l*.4)}for(let n of Mn){let i=n.body.position,r=Math.hypot(i.x-s.x,i.y-s.y,i.z-s.z);r<t&&r>.1&&n.body.applyImpulse(new x((i.x-s.x)/r*n.body.mass*4,2*n.body.mass,(i.z-s.z)/r*n.body.mass*4))}Td(s,t),Ui("boom",s.x,s.y,s.z,t),xi.position.copy(s),xi.intensity=900,Ue=Math.min(1.4,Ue+t/6),Le.boom(Math.min(1,t/7)),zi(60)}function xd(s){if(s.gone)return;s.gone=!0,Me.removeBody(s.body),zr(s),s.mesh.instanceMatrix.needsUpdate=!0;let t=s.body.position;vd(t,s.size),Ui("glass",t.x,t.y,t.z,_e.indexOf(s)),Le.glass()}function vd(s,t){for(let e=0;e<26;e++)Sn.spawn(s.x+Tt(-t.x,t.x)/2,s.y+Tt(-t.y,t.y)/2,s.z+Tt(-t.z,t.z)/2,Tt(-3,3),Tt(0,4),Tt(-3,3),.75+_n()*.25,.88,.97,.9,Tt(.08,.16),Tt(.8,1.6),1)}function _d(s,t,e,n){let i=Math.min(10,2+n*.6);for(let r=0;r<i;r++)Sn.spawn(s,t,e,Tt(-1.5,1.5),Tt(.2,2),Tt(-1.5,1.5),.62,.56,.5,.55,Tt(.5,1.1),Tt(1,2.2),.08)}function p_(s){Math.abs(s.contact.getImpactVelocityAlongNormal())>3.5&&s.target&&s.target.userData&&$l.add(s.target.userData)}var $l=new Set,jl=0;function m_(s){let t=Math.abs(s.contact.getImpactVelocityAlongNormal());if(t<5||jl<=0)return;jl--;let e=s.contact.bi,n=s.contact.ri,i=e.position.x+n.x,r=e.position.y+n.y,o=e.position.z+n.z;_d(i,r,o,t),Ui("dust",i,r,o,t),_n()<.3&&Le.thud(Math.min(1,t/25))}var g_=25,Ye=new N(-12,0,-14),Xt=null;function y_(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d");t.strokeStyle="#fff",t.lineWidth=7,t.strokeRect(3.5,3.5,57,57),t.lineWidth=4,t.beginPath(),t.moveTo(4,4),t.lineTo(60,60),t.moveTo(60,4),t.lineTo(4,60),t.stroke();let e=new Oo(s);return e.wrapS=e.wrapT=ur,e.colorSpace=Je,e.anisotropy=4,e}var x_=y_();function Gl(s,t){let e=x_.clone();return e.needsUpdate=!0,e.repeat.set(s,t),new Ge({color:15906565,map:e,alphaTest:.5,side:Pn,roughness:.6,metalness:.2})}var v_=new Ge({color:2303275,roughness:.4,metalness:.75}),ql=new Ge({color:1776414,roughness:.7,metalness:.5}),__=new zo(1,1,1,8);function b_(){let s=1;for(let t of _e)t.gone||(s=Math.max(s,t.start.y+t.size.y/2));return s}function bd(s,t=1.1){let e=new si;be.add(e);let n=s+.7,i=new se(gi,Gl(1,n/1.2));i.scale.set(1.2,n,1.2),i.position.set(Ye.x,n/2,Ye.z),i.castShadow=!0,e.add(i);let r=new se(gi,pd);r.scale.set(3,.5,3),r.position.set(Ye.x,.25,Ye.z),r.receiveShadow=!0,e.add(r);let o=new se(gi,new Ge({color:15906565,roughness:.5}));o.scale.set(1.6,1.3,1.6),o.position.set(Ye.x,n-.1,Ye.z),o.castShadow=!0,e.add(o);let a=new se(gi,Gl(10,1));a.castShadow=!0,e.add(a);let c=new se(gi,Gl(5,1));c.castShadow=!0,e.add(c);let l=new se(gi,new Ge({color:9276808,roughness:.9}));l.scale.set(1.4,1.6,1.6),l.castShadow=!0,e.add(l);let h=new se(gi,ql);h.scale.set(.9,.35,.9),e.add(h);let d=new se(__,ql);d.scale.set(.06,1,.06),d.castShadow=!0,e.add(d);let u=new se(ba,v_);u.scale.setScalar(t),u.castShadow=!0,e.add(u);let f=new se(new Vo(.32,.08,6,14),ql);return e.add(f),{g:e,jib:a,counter:c,weight:l,trolley:h,cable:d,ballMesh:u,ring:f,mastH:n,hookY:s}}function Md(s){be.remove(s.g),s.g.traverse(t=>{t.material&&t.material.map&&t.material.map.dispose()})}function M_(){let s=b_(),t=s+5,e=Math.max(1.5,s*.45),n=t-e,i=1.1,r=bd(t,i),o=Ye.clone().lerp(new N(0,0,0),.35),a=new Nt({type:Nt.KINEMATIC,mass:0}),c=new os(.1);c.collisionResponse=!1,a.addShape(c),a.collisionFilterMask=0,a.collisionFilterGroup=0,a.position.set(o.x,t,o.z),a.allowSleep=!1;let l=new Nt({mass:650,shape:new os(i),linearDamping:.04,angularDamping:.3});l.position.set(o.x,t-2,o.z),l.allowSleep=!1;let h=new ia(a,l,2,2e6);Me.addBody(a),Me.addBody(l),Me.addConstraint(h),l.addEventListener("collide",d=>{let u=Math.abs(d.contact.getImpactVelocityAlongNormal());u>2.5&&(Le.clang(Math.min(1,u/14)),zi(Math.round(10+u*3)),Ue=Math.min(1.2,Ue+u*.03),Ui("clang",l.position.x,l.position.y,l.position.z,u))}),Xt={...r,hook:a,ball:l,rope:h,restY:e,L:n,target:o.clone(),t:g_,lower:0,leaving:0},Le.crane()}function Sd(){Xt&&(Me.removeConstraint(Xt.rope),Me.removeBody(Xt.hook),Me.removeBody(Xt.ball),Md(Xt),Xt=null)}var wd=new N(0,1,0),yn=new N,Xl=new N,ld=new Rn;function eh(s,t){if(!Xt||Xt.leaving)return;let e=new Yt(s/innerWidth*2-1,-(t/innerHeight)*2+1);if(Dr.setFromCamera(e,xn),ld.set(wd,-Xt.restY),!Dr.ray.intersectPlane(ld,yn))return;let n=Math.hypot(yn.x,yn.z);n>24&&yn.multiplyScalar(24/n),Xt.target.set(yn.x,0,yn.z)}function S_(s){if(!Xt)return;let t=Xt,e=t.hook.position;!bn&&!t.leaving&&(t.t-=s),bn&&Ze!=="crane"&&!t.leaving&&(t.leaving=.001),t.t<=0&&!t.leaving&&(t.leaving=.001,Fn("\u041A\u0440\u0430\u043D \u0441\u0432\u043E\u0454 \u0432\u0456\u0434\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432")),t.leaving?(t.leaving+=s,t.rope.distance=Math.max(1.5,t.rope.distance-s*9)):t.rope.distance<t.L&&(t.rope.distance=Math.min(t.L,t.rope.distance+s*7));let n=t.target.x-e.x,i=t.target.z-e.z,r=Math.hypot(n,i),o=t.leaving?0:Math.min(15,r*3.2),a=r>.001?o/r:0,c=t.hook.velocity.x,l=t.hook.velocity.z,h=n*a-c,d=i*a-l,u=Math.hypot(h,d),f=30*s,y=u>f?f/u:1;t.hook.velocity.set(c+h*y,0,l+d*y),Ed(t,e.x,e.y,e.z,t.ball.position,t.ball.quaternion),t.leaving>1.6&&Sd()}function Ed(s,t,e,n,i,r){let o={x:t,y:e,z:n},a=o.x-Ye.x,c=o.z-Ye.z,l=Math.hypot(a,c)+1.6,h=Math.atan2(-c,a),d=s.mastH+.75;s.jib.scale.set(l,.8,.8),s.jib.rotation.y=h,s.jib.position.set(Ye.x+Math.cos(h)*l/2,d,Ye.z-Math.sin(h)*l/2),s.jib.material.map.repeat.set(l/.8,1),s.counter.scale.set(5,.7,.7),s.counter.rotation.y=h,s.counter.position.set(Ye.x-Math.cos(h)*2.5,d,Ye.z+Math.sin(h)*2.5),s.weight.rotation.y=h,s.weight.position.set(Ye.x-Math.cos(h)*4.4,d-.9,Ye.z+Math.sin(h)*4.4),s.trolley.rotation.y=h,s.trolley.position.set(o.x,s.hookY+.3,o.z),s.ballMesh.position.set(i.x,i.y,i.z),s.ballMesh.quaternion.set(r.x,r.y,r.z,r.w),yn.set(o.x,o.y,o.z),Xl.set(i.x,i.y,i.z);let u=Xl.clone().addScaledVector(yn.clone().sub(Xl).normalize(),1.15);s.ring.position.copy(u),s.ring.lookAt(yn),s.ring.rotateY(Math.PI/2),s.cable.position.copy(yn).add(u).multiplyScalar(.5),s.cable.scale.y=yn.distanceTo(u),s.cable.quaternion.setFromUnitVectors(wd,yn.clone().sub(u).normalize())}var Ad=()=>Xt&&!Xt.leaving&&Ze==="crane",Sn=(()=>{let t=new Float32Array(6600),e=new Float32Array(2200*4),n=new Float32Array(2200),i=new Float32Array(2200*3),r=new Float32Array(2200),o=new Float32Array(2200),a=new Float32Array(2200),c=new Float32Array(2200),l=new Float32Array(2200),h=0,d=new hn;d.setAttribute("position",new Fe(t,3).setUsage(vr)),d.setAttribute("aColor",new Fe(e,4).setUsage(vr)),d.setAttribute("aSize",new Fe(n,1).setUsage(vr));let u=new mn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:400}},vertexShader:"attribute vec4 aColor; attribute float aSize; uniform float scale; varying vec4 vC; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; gl_FragColor=vec4(vC.rgb, vC.a*(1.0-r)); }"}),f=new Uo(d,u);return f.frustumCulled=!1,be.add(f),{spawn(y,g,m,p,b,_,v,I,E,C,B,M,S){let R=h;h=(h+1)%2200,t[R*3]=y,t[R*3+1]=g,t[R*3+2]=m,i[R*3]=p,i[R*3+1]=b,i[R*3+2]=_,e[R*4]=v,e[R*4+1]=I,e[R*4+2]=E,e[R*4+3]=C,c[R]=C,l[R]=B,n[R]=B,r[R]=M,o[R]=M,a[R]=S},update(y){for(let g=0;g<2200;g++){if(r[g]<=0){e[g*4+3]!==0&&(e[g*4+3]=0);continue}r[g]-=y;let m=Math.max(0,r[g]/o[g]);i[g*3+1]-=9.8*a[g]*y;let p=1-(a[g]<.5?1.6:.3)*y;i[g*3]*=p,i[g*3+1]*=p,i[g*3+2]*=p,t[g*3]+=i[g*3]*y,t[g*3+1]+=i[g*3+1]*y,t[g*3+2]+=i[g*3+2]*y,t[g*3+1]<.05&&a[g]>.5&&!(Ee!=null&&Ee.river)&&(t[g*3+1]=.05,i[g*3+1]*=-.3),e[g*4+3]=c[g]*m,a[g]<.5&&(n[g]=l[g]*(1+(1-m)*1.8))}d.attributes.position.needsUpdate=!0,d.attributes.aColor.needsUpdate=!0,d.attributes.aSize.needsUpdate=!0},clear(){r.fill(0)},mat:u}})();function Td(s,t){for(let e=0;e<70;e++){let n=_n()*6.28,i=_n()*1.2,r=Tt(4,14);Sn.spawn(s.x,s.y,s.z,Math.cos(n)*Math.cos(i)*r,Math.sin(i)*r+2,Math.sin(n)*Math.cos(i)*r,1,Tt(.45,.85),.15,1,Tt(.4,.9),Tt(.3,.7),.1)}for(let e=0;e<60;e++){let n=_n()*6.28,i=Tt(1,t*.8);Sn.spawn(s.x+Tt(-1,1),s.y+Tt(0,1),s.z+Tt(-1,1),Math.cos(n)*i,Tt(1,5),Math.sin(n)*i,Tt(.25,.45),Tt(.23,.4),Tt(.22,.36),.65,Tt(1.2,2.4),Tt(1.8,3.5),.02)}}var Le=(()=>{let s=null,t=null,e=()=>{if(s)return!0;try{s=new(window.AudioContext||window.webkitAudioContext);let a=s.sampleRate*2;t=s.createBuffer(1,a,s.sampleRate);let c=t.getChannelData(0);for(let l=0;l<a;l++)c[l]=_n()*2-1;return!0}catch{return!1}},n=()=>Dn.get("sound",!0);function i(a,c,l,h=.7,d="lowpass",u=0){if(!n()||!e())return;let f=s.createBufferSource();f.buffer=t,f.playbackRate.value=Tt(.8,1.2);let y=s.createBiquadFilter();y.type=d,y.frequency.value=c,y.Q.value=h,u&&y.frequency.exponentialRampToValueAtTime(Math.max(30,c*u),s.currentTime+a);let g=s.createGain();g.gain.setValueAtTime(l,s.currentTime),g.gain.exponentialRampToValueAtTime(.001,s.currentTime+a),f.connect(y),y.connect(g),g.connect(s.destination),f.start(),f.stop(s.currentTime+a)}function r(a,c,l,h,d="sine"){if(!n()||!e())return;let u=s.createOscillator();u.type=d,u.frequency.setValueAtTime(a,s.currentTime),u.frequency.exponentialRampToValueAtTime(c,s.currentTime+l);let f=s.createGain();f.gain.setValueAtTime(h,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+l),u.connect(f),f.connect(s.destination),u.start(),u.stop(s.currentTime+l)}let o=0;return{unlock(){e()&&s.state==="suspended"&&s.resume()},shoot(){i(.35,900,.5,1,"lowpass",.2),r(160,50,.25,.5)},boom(a){i(1.6,600,.9*(.5+a/2),.8,"lowpass",.08),r(90,30,.9,.7*a)},thud(a){let c=performance.now();c-o<60||(o=c,i(.25,250+a*300,.25+a*.35,1,"lowpass",.4))},glass(){i(.4,5e3,.25,4,"bandpass",1.4)},tick(){r(1400,1300,.08,.2,"square")},whoosh(){i(1.6,300,.4,2,"bandpass",6)},rumble(){i(4.5,120,.8,1,"lowpass",.6)},clang(a){let c=performance.now();c-o<90||(o=c,r(220+a*90,140,.7,.25+a*.3,"triangle"),r(523,470,.5,.08+a*.1,"sine"),i(.4,400+a*500,.4+a*.4,1,"lowpass",.3))},crane(){r(70,90,1.4,.25,"sawtooth"),i(1.4,900,.12,6,"bandpass",1.5)}}})();function zi(s){if(ga&&Dn.get("vibro",!0))try{ga.tick(s)}catch{}}var nh=30,Yn=240,js=16,Ft={nb:0,buf:null,dyn:new Float32Array(Yn*js*9),dn:new Uint8Array(Yn),cr:new Float32Array(Yn*14),t:new Float64Array(Yn),head:0,count:0,next:0,events:[]},Sa={shot:1,tick:1,whoosh:1,quake:1,boom:1,glass:1,clang:1};function w_(){Ft.nb=_e.length,Ft.buf=new Float32Array(Yn*Ft.nb*7),Ft.head=0,Ft.count=0,Ft.next=0,Ft.events=[]}function Ui(s,t,e,n,i){Ae!=="play"||!Ft.buf||(Ft.events.push({t:Zn,kind:s,x:t,y:e,z:n,a:i}),Ft.events.length>600&&Ft.events.splice(0,100))}var Ur=s=>(Ft.head-Ft.count+s+Yn)%Yn;function E_(){if(!Ft.buf||Zn<Ft.next)return;Ft.next=Zn+1/nh-1e-4;let s=Ft.head;Ft.head=(s+1)%Yn,Ft.count=Math.min(Yn,Ft.count+1),Ft.t[s]=Zn;let t=Ft.buf,e=s*Ft.nb*7;for(let l of _e){let h=l.body.position,d=l.body.quaternion;t[e]=h.x,t[e+1]=l.gone?-999:h.y,t[e+2]=h.z,t[e+3]=d.x,t[e+4]=d.y,t[e+5]=d.z,t[e+6]=d.w,e+=7}let n=0,i=Ft.dyn,r=(l,h,d,u)=>{if(n>=js)return;let f=(s*js+n++)*9;i[f]=l,i[f+1]=h.x,i[f+2]=h.y,i[f+3]=h.z,i[f+4]=d.x,i[f+5]=d.y,i[f+6]=d.z,i[f+7]=d.w,i[f+8]=u};for(let l of Mn)r(l.meteor?1:0,l.body.position,l.body.quaternion,l.mesh.scale.x);for(let l of Xn)r(2,l.mesh.position,ya.identity(),.35);Ft.dn[s]=n;let o=Ft.cr,a=s*14;if(Xt){let l=Xt.hook.position,h=Xt.ball.position,d=Xt.ball.quaternion;o[a]=1,o[a+1]=l.x,o[a+2]=l.y,o[a+3]=l.z,o[a+4]=h.x,o[a+5]=h.y,o[a+6]=h.z,o[a+7]=d.x,o[a+8]=d.y,o[a+9]=d.z,o[a+10]=d.w}else o[a]=0;let c=De?De.position:{x:0,y:0,z:0};o[a+11]=c.x,o[a+12]=c.y,o[a+13]=c.z}function Cd(){if(Ft.count<4)return null;let s=Ft.t[Ur(0)],t=Ft.t[Ur(Ft.count-1)],e=Ft.events.filter(i=>i.t>=s&&i.t<=t),n=e.filter(i=>Sa[i.kind]);return n.length?{t0:Math.max(s,n[0].t-.7),t1:Math.min(t,Math.max(n[n.length-1].t+3.5,e[e.length-1].t+.8)),ev:e}:null}var A_=()=>Ft.events.some(s=>Sa[s.kind]&&Zn-s.t<Yn/nh),T_=[Ma,md,gd.clone()],Or=[];function C_(s){if(!Or[s]){let t=new se(ba,Ma);t.castShadow=!0,t.visible=!1,be.add(t),Or[s]=t}return Or[s]}var wt=null;function ih(){if(wt)return;let s=Cd();if(!s){Fn("\u0429\u0435 \u043D\u0435\u043C\u0430 \u0447\u043E\u0433\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u2014 \u0441\u043F\u0435\u0440\u0448\u0443 \u0449\u043E\u0441\u044C \u0437\u0440\u0443\u0439\u043D\u0443\u0439\u0442\u0435");return}for(wt={...s,rt:s.t0,speed:1,prev:Ae,evi:0,ghost:null,focus:Gt.target.clone(),real:0,saved:{theta:Gt.theta,phi:Gt.phi,r:Gt.r,target:Gt.target.clone()}};wt.evi<wt.ev.length&&wt.ev[wt.evi].t<wt.t0;)wt.evi++;Ae="replay",Sn.clear(),xi.intensity=0,Ue=0;for(let e of Mn)e.mesh.visible=!1;for(let e of Xn)e.mesh.visible=!1;Xt&&(Xt.g.visible=!1),Gt.r=Math.max(10,Gt.r*.88),Gt.phi=Math.min(1.3,Gt.phi+.08),Et("hud").hidden=!0,Et("result").hidden=!0,Et("toast").style.opacity=0;let t=Et("replay");t.hidden=!1,t.classList.remove("in"),t.offsetWidth,t.classList.add("in"),zi(10)}function wa(){if(wt){for(let s of _e)zr(s);for(let s of Object.values(Oi))s.instanceMatrix.needsUpdate=!0;for(let s of Mn)s.mesh.visible=!0;for(let s of Xn)s.mesh.visible=!0;for(let s of Or)s.visible=!1;wt.ghost&&Md(wt.ghost),Xt&&(Xt.g.visible=!0),sn&&De&&sn.position.copy(De.position),Object.assign(Gt,{theta:wt.saved.theta,phi:wt.saved.phi,r:wt.saved.r}),Gt.target.copy(wt.saved.target),Sn.clear(),xi.intensity=0,Ue=0,Ae=wt.prev,wt=null,Et("replay").hidden=!0,Ae==="result"?Et("result").hidden=!1:Ae==="play"&&(Et("hud").hidden=!1)}}function R_(s){let t=new N(s.x,s.y,s.z);switch(s.kind){case"boom":Td(t,s.a),xi.position.copy(t),xi.intensity=900,Ue=Math.min(1.4,Ue+s.a/6),Le.boom(Math.min(1,s.a/7)),zi(40);break;case"glass":{let e=_e[s.a];vd(t,e?e.size:new N(1,1,1)),Le.glass();break}case"dust":_d(s.x,s.y,s.z,s.a),_n()<.25&&Le.thud(Math.min(1,s.a/25));break;case"shot":Le.shoot();break;case"tick":Le.tick();break;case"whoosh":Le.whoosh();break;case"quake":Le.rumble();break;case"clang":Le.clang(Math.min(1,s.a/14)),Ue=Math.min(1.2,Ue+s.a*.03);break}Sa[s.kind]&&s.kind!=="quake"&&wt.focus.set(s.x,Math.max(1,s.y),s.z)}var mi=new ln,$s=new ln,nn=new N,Br=new N;function P_(s){let t=0,e=Ft.count-1;for(;e-t>1;){let m=t+e>>1;Ft.t[Ur(m)]<=s?t=m:e=m}let n=Ur(t),i=Ur(e),r=Ft.t[n],o=Ft.t[i],a=o>r?Math.min(1,Math.max(0,(s-r)/(o-r))):0,c=Ft.buf,l=Ft.nb;for(let m=0;m<l;m++){let p=(n*l+m)*7,b=(i*l+m)*7,_=_e[m];if(c[p+1]<-500||a>.5&&c[b+1]<-500){cs.compose(Zl.set(0,-999,0),ya.identity(),fd),_.mesh.setMatrixAt(_.idx,cs);continue}nn.set(c[p],c[p+1],c[p+2]),Br.set(c[b],c[b+1],c[b+2]),nn.lerp(Br,a),mi.set(c[p+3],c[p+4],c[p+5],c[p+6]),$s.set(c[b+3],c[b+4],c[b+5],c[b+6]),mi.slerp($s,a),cs.compose(nn,mi,_.size),_.mesh.setMatrixAt(_.idx,cs)}for(let m of Object.values(Oi))m.instanceMatrix.needsUpdate=!0;let h=Ft.dyn,d=Ft.dn[n],u=Ft.dn[i];for(let m=0;m<js;m++){let p=Or[m];if(m>=d){p&&(p.visible=!1);continue}let b=(n*js+m)*9,_=(i*js+m)*9,v=C_(m),I=h[b];v.material=T_[I]||Ma,v.scale.setScalar(h[b+8]),v.visible=!0,nn.set(h[b+1],h[b+2],h[b+3]),mi.set(h[b+4],h[b+5],h[b+6],h[b+7]);let E=0;if(m<u&&h[_]===I){Br.set(h[_+1],h[_+2],h[_+3]);let C=nn.distanceTo(Br);C<8&&(E=C*nh,nn.lerp(Br,a),$s.set(h[_+4],h[_+5],h[_+6],h[_+7]),mi.slerp($s,a))}if(v.position.copy(nn),v.quaternion.copy(mi),I===2&&(v.material.emissiveIntensity=.4+Math.abs(Math.sin(s*18))*2),I===1&&E>12&&_n()<.35+wt.speed)for(let C=0;C<2;C++)Sn.spawn(nn.x+Tt(-1,1),nn.y+Tt(-1,1),nn.z+Tt(-1,1),Tt(-1,1),Tt(0,2),Tt(-1,1),1,Tt(.4,.7),.2,.9,Tt(.9,1.8),Tt(.4,.9),0)}let f=Ft.cr,y=n*14,g=i*14;if(f[y]){wt.ghost||(wt.ghost=bd(f[y+2])),wt.ghost.g.visible=!0;let m=f[g]?a:0,p=(b,_)=>f[y+b]+(f[g+b]-f[y+b])*m;mi.set(f[y+7],f[y+8],f[y+9],f[y+10]),m&&($s.set(f[g+7],f[g+8],f[g+9],f[g+10]),mi.slerp($s,m)),Ed(wt.ghost,p(1),p(2),p(3),{x:p(4),y:p(5),z:p(6)},mi)}else wt.ghost&&(wt.ghost.g.visible=!1);sn&&sn.position.set(f[y+11]+(f[g+11]-f[y+11])*a,f[y+12]+(f[g+12]-f[y+12])*a,f[y+13]+(f[g+13]-f[y+13])*a)}function I_(s){let e=wt.ev.some(i=>Sa[i.kind]&&i.t>wt.rt-1.6&&i.t<wt.rt+.3)?.3:1;wt.speed+=(e-wt.speed)*Math.min(1,s*(e<wt.speed?6:1.5));let n=s*wt.speed;for(wt.rt+=n,wt.real+=s;wt.evi<wt.ev.length&&wt.ev[wt.evi].t<=wt.rt;)R_(wt.ev[wt.evi++]);return P_(Math.min(wt.rt,wt.t1)),Gt.theta+=s*.09,nn.copy(wt.focus),nn.y=Math.min(nn.y,Ee?Ee.cam[2]*1.6+2:6),Gt.target.lerp(nn.lerp(wt.saved.target,.55),Math.min(1,s*.8)),Et("rpFill").style.width=Math.min(100,(wt.rt-wt.t0)/(wt.t1-wt.t0)*100)+"%",Et("rpSpeed").textContent="\xD7"+wt.speed.toFixed(1).replace(".",","),Et("replay").classList.toggle("slow",wt.speed<.6),wt.rt>=wt.t1+.4&&wa(),n}var Nn=new Map,vn=null;us.addEventListener("pointerdown",s=>{Le.unlock(),us.setPointerCapture(s.pointerId),Nn.set(s.pointerId,{x:s.clientX,y:s.clientY}),Nn.size===1?(vn={x0:s.clientX,y0:s.clientY,t0:performance.now(),moved:0,multi:!1},Ad()&&Ae==="play"&&eh(s.clientX,s.clientY)):vn&&(vn.multi=!0)});us.addEventListener("pointermove",s=>{let t=Nn.get(s.pointerId);if(!t)return;let e=s.clientX-t.x,n=s.clientY-t.y;if(Nn.size===1)vn&&(vn.moved+=Math.abs(e)+Math.abs(n)),Ad()&&Ae==="play"?eh(s.clientX,s.clientY):(!vn||vn.moved>8)&&(Gt.theta-=e*.006,Gt.phi=Math.min(1.5,Math.max(.25,Gt.phi-n*.005)));else if(Nn.size===2){let[i,r]=[...Nn.values()],o=Math.hypot(i.x-r.x,i.y-r.y),a=(i.x+r.x)/2,c=(i.y+r.y)/2;t.x=s.clientX,t.y=s.clientY;let[l,h]=[...Nn.values()],d=Math.hypot(l.x-h.x,l.y-h.y),u=(l.x+h.x)/2,f=(l.y+h.y)/2;Gt.r=Math.min(80,Math.max(8,Gt.r*o/Math.max(1,d))),Gt.theta-=(u-a)*.006,Gt.phi=Math.min(1.5,Math.max(.25,Gt.phi-(f-c)*.005));return}t.x=s.clientX,t.y=s.clientY});var Rd=s=>{Nn.has(s.pointerId)&&(Nn.delete(s.pointerId),Nn.size===0&&vn&&!vn.multi&&vn.moved<10&&performance.now()-vn.t0<400&&yd(s.clientX,s.clientY),Nn.size===0&&(vn=null))};us.addEventListener("pointerup",Rd);us.addEventListener("pointercancel",Rd);us.addEventListener("wheel",s=>{Gt.r=Math.min(80,Math.max(8,Gt.r*(1+Math.sign(s.deltaY)*.1)))},{passive:!0});function hd(){let s=Gt.r,t=Gt.target;xn.position.set(t.x+s*Math.sin(Gt.phi)*Math.sin(Gt.theta),t.y+s*Math.cos(Gt.phi),t.z+s*Math.sin(Gt.phi)*Math.cos(Gt.theta)),xn.position.y<.6&&(xn.position.y=.6),Ue>.01&&xn.position.add(new N(Tt(-1,1),Tt(-1,1),Tt(-1,1)).multiplyScalar(Ue*.35)),xn.lookAt(t)}function Vr(){let s=Et("weapons");s.innerHTML="";for(let t of d_){let e=un[t.id];if(!bn&&Ee&&Ee.ammo[t.id]===0)continue;let n=document.createElement("button");n.className="wpn"+(Ze===t.id?" on":"")+(e>0||t.id==="crane"&&Xt&&!Xt.leaving?"":" empty");let i=t.id==="crane"&&Xt&&!Xt.leaving?bn?"\u25CF":Math.ceil(Xt.t)+"\u0441":e===1/0?"\u221E":e;n.innerHTML=`<b>${t.icon}</b><span>${t.name}</span><em>${i}</em>`,n.onclick=()=>{Ze=t.id,Vr(),zi(8),t.id==="quake"&&un.quake>0&&Fn("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0435\u043A\u0440\u0430\u043D\u0430 \u2014 \u0456 \u0437\u0435\u043C\u043B\u044F \u0437\u0430\u0442\u0440\u0443\u0441\u0438\u0442\u044C\u0441\u044F"),t.id==="crane"&&Ae==="play"&&!Js&&(Xt&&!Xt.leaving?Fn("\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0431\u0430\u0431\u0430 \u043F\u043E\u043B\u0435\u0442\u0438\u0442\u044C \u0441\u043B\u0456\u0434\u043E\u043C"):un.crane>0&&Kl())},s.appendChild(n)}}var Lr=0;function Pd(s){Lr+=(s-Lr)*.2,Et("pct").textContent=Math.round(Lr*100)+"%",Et("fill").style.width=Lr*100+"%",Et("goal").style.left=(Ee?Ee.goal*100:70)+"%",Et("goal").hidden=bn,Et("fill").classList.toggle("won",!bn&&Ee&&Lr>=Ee.goal)}function Fn(s){let t=Et("toast");t.textContent=s,t.style.opacity=1,clearTimeout(Fn.h),Fn.h=setTimeout(()=>t.style.opacity=0,2200)}function Id(s){Js=!0,Ae="result";let t=s>=.95?3:s>=Math.min(.85,Ee.goal+.15)?2:s>=Ee.goal?1:0,e=Dn.get("stars",{});t>(e[Ee.id]||0)&&(e[Ee.id]=t,Dn.set("stars",e)),Et("rTitle").textContent=t?["","\u0404!","\u0427\u0443\u0434\u043E\u0432\u043E!","\u041D\u0438\u0449\u0456\u0432\u043D\u043E!"][t]:"\u0429\u0435 \u0441\u0442\u043E\u0457\u0442\u044C",Et("rPct").textContent=Math.round(s*100)+"%",Et("rStars").innerHTML=[1,2,3].map(r=>`<i class="${r<=t?"on":""}">\u2605</i>`).join(""),Et("rText").textContent=t?`\u0417\u0440\u0443\u0439\u043D\u043E\u0432\u0430\u043D\u043E ${Math.round(s*100)}% \u0437\u0430 ${va} ${B_(va)}.`:`\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ${Math.round(Ee.goal*100)}%. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u043B\u0443\u0447\u0430\u0442\u0438 \u0432 \u043E\u043F\u043E\u0440\u0438.`;let n=ls.indexOf(Ee),i=ls[n+1];Et("rNext").hidden=!(t&&i),Et("rNext").onclick=()=>hs(i),Et("rReplay").hidden=!Cd(),Et("result").hidden=!1,zi(t?40:10)}var B_=s=>s%10===1&&s%100!==11?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B":s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0438":"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0456\u0432";function sh(){Ae="menu",Et("hud").hidden=!0,Et("result").hidden=!0,Et("menu").hidden=!1;let s=Dn.get("stars",{}),t=Et("levels");t.innerHTML="",ls.forEach((n,i)=>{let r=i===0||(s[ls[i-1].id]||0)>0,o=s[n.id]||0,a=document.createElement("button");a.className="lvl"+(r?"":" locked"),a.innerHTML=`<span class="n">${i+1}</span><b>${n.name}</b><span class="d">${n.desc}</span><span class="st">${[1,2,3].map(c=>`<i class="${c<=o?"on":""}">\u2605</i>`).join("")}</span>`,a.onclick=()=>r?hs(n):Fn("\u0421\u043F\u0435\u0440\u0448\u0443 \u0437\u0440\u0443\u0439\u043D\u0443\u0439\u0442\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0441\u043F\u043E\u0440\u0443\u0434\u0443"),t.appendChild(a)});let e=Et("freeList");e.innerHTML="";for(let n of ls){let i=document.createElement("button");i.className="chip",i.textContent=n.name,i.onclick=()=>hs(n,!0),e.appendChild(i)}_e.length||(hs(ls[2],!0),Ae="menu",Et("hud").hidden=!0,Et("menu").hidden=!1)}Et("btnMenu").onclick=sh;Et("btnReplay").onclick=ih;Et("rReplay").onclick=ih;Et("rpSkip").onclick=wa;Et("btnRestart").onclick=()=>hs(Ee,bn);Et("rAgain").onclick=()=>hs(Ee,bn);Et("rMenu").onclick=sh;Et("btnDiary").onclick=()=>Et("diary").classList.add("open");Et("closeDiary").onclick=()=>Et("diary").classList.remove("open");var Jl=Et("optSound"),Ql=Et("optVibro");Jl.checked=Dn.get("sound",!0);Ql.checked=Dn.get("vibro",!0);Jl.onchange=()=>Dn.set("sound",Jl.checked);Ql.onchange=()=>Dn.set("vibro",Ql.checked);function L_(){let s=(window.CHANGELOG||[]).slice().sort((e,n)=>n.day-e.day);Et("diaryList").innerHTML=s.map(e=>`<div class="entry"><span class="d">\u0414\u0415\u041D\u042C ${e.day} \xB7 ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");let t=ga?ga.version():"";t&&(Et("ver").textContent="\u0412\u0435\u0440\u0441\u0456\u044F "+t+" \xB7 \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u044F Claude")}function Bd(){let s=innerWidth,t=innerHeight;yi.setSize(s,t,!1),xn.aspect=s/t,xn.updateProjectionMatrix(),Sn.mat.uniforms.scale.value=t*yi.getPixelRatio()*.9}addEventListener("resize",Bd);Bd();var ud=performance.now(),Nr=0;function Ld(s){requestAnimationFrame(Ld);let t=Math.min(.05,(s-ud)/1e3);if(ud=s,Nr++,jl=6,Ae==="menu"&&(Gt.theta+=t*.08),Ae==="replay"){let n=I_(t);if(wt){Sn.update(n),xi.intensity*=Math.pow(.02,n),Ue*=Math.pow(.05,t),hd(),yi.render(be,xn);return}}if(we&&De){we.t+=t;let n=we.f*Math.PI*2,i=we.t<we.dur?Math.min(1,we.t*2)*Math.min(1,(we.dur-we.t)*2):0,r=we.a*n*Math.cos(n*we.t)*i;De.velocity.set(Math.cos(we.dir)*r,.25*r*Math.sin(n*we.t*1.7),Math.sin(we.dir)*r),Ue=Math.max(Ue,.3*i),we.t>=we.dur&&(De.velocity.set(0,0,0),De.position.set(0,0,0),De.type=Nt.STATIC,we=null)}Me.step(1/60,t,3),Zn+=t,sn&&De&&sn.position.copy(De.position),S_(t),Xt&&Nr%15===0&&Ae==="play"&&Vr();for(let n of $l)xd(n);$l.clear();for(let n=Xn.length-1;n>=0;n--){let i=Xn[n];i.t-=t,i.mesh.material.emissiveIntensity=.4+Math.abs(Math.sin(i.t*18))*2,i.t<=0&&(be.remove(i.mesh),Xn.splice(n,1),th(i.pos,5.5,17))}for(let n=Mn.length-1;n>=0;n--){let i=Mn[n];if(i.age+=t,i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion),i.meteor&&!i.boomed)for(let r=0;r<3;r++)Sn.spawn(i.body.position.x+Tt(-1,1),i.body.position.y+Tt(-1,1),i.body.position.z+Tt(-1,1),Tt(-1,1),Tt(0,2),Tt(-1,1),1,Tt(.4,.7),.2,.9,Tt(.9,1.8),Tt(.4,.9),0);(i.age>14||i.body.position.y<-40)&&(Me.removeBody(i.body),be.remove(i.mesh),Mn.splice(n,1))}if(Nr%2===0)for(let n of _e){if(n.gone||n.body.sleepState===Nt.SLEEPING)continue;let i=n.body.velocity;if(i.x*i.x+i.y*i.y+i.z*i.z<1)continue;let r=n.body.position;for(let o of _e){if(o.gone||o.body.sleepState!==Nt.SLEEPING)continue;let a=o.body.position;Math.abs(a.x-r.x)<2.6&&Math.abs(a.y-r.y)<2.6&&Math.abs(a.z-r.z)<2.6&&o.body.wakeUp()}}let e={};for(let n of _e)if(!n.gone){if(n.body.position.y<-40){n.gone=!0,Me.removeBody(n.body),zr(n),e[n.type]=1;continue}(n.body.sleepState!==Nt.SLEEPING||we||Nr<3)&&(zr(n),e[n.type]=1)}for(let n in e)Oi[n].instanceMatrix.needsUpdate=!0;if(Ae==="play"&&E_(),Sn.update(t),xi.intensity*=Math.pow(.02,t),Ue*=Math.pow(.05,t),hd(),yi.render(be,xn),Ae==="play"&&Nr%10===0){let n=_a();if(Pd(n),Et("btnReplay").classList.toggle("off",!A_()),!bn&&!Js){let i=Object.values(un).reduce((a,c)=>a+c,0)+Xn.length+(Xt?1:0),r=_e.filter(a=>!a.gone&&a.body.sleepState!==Nt.SLEEPING).length,o=!Xt&&Zn-xa>2.5&&r<_e.length*.03&&!we;(i===0&&(o||Zn-xa>9)||n>=.995)&&setTimeout(()=>{!Js&&Ae==="play"&&Id(_a())},600)}}}window.__ruina={startLevel:hs,LEVELS:ls,fire:yd,get state(){return Ae},destruction:_a,explode:(s,t,e,n,i)=>th(new N(s,t,e),n,i),setWeapon:s=>{Ze=s,Vr()},callCrane:Kl,steerCrane:eh,get crane(){return Xt},get blocks(){return _e.length},startReplay:ih,endReplay:wa,get replay(){return wt},finish:()=>Id(_a())};L_();sh();requestAnimationFrame(Ld);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
