(()=>{var Gu=Object.defineProperty;var qu=(s,t,e)=>t in s?Gu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var T=(s,t,e)=>qu(s,typeof t!="symbol"?t+"":t,e);var Xu=0,Ll=1,Yu=2;var Hh=1,Yc=2,On=3,pi=0,Be=1,zn=2,di=0,ds=1,Nl=2,Fl=3,Dl=4,Zu=5,Ii=100,$u=101,ju=102,Ju=103,Qu=104,Ku=200,td=201,ed=202,nd=203,Ca=204,Ra=205,id=206,sd=207,rd=208,od=209,ad=210,cd=211,ld=212,hd=213,ud=214,Pa=0,Ia=1,Ba=2,gs=3,La=4,Na=5,Fa=6,Da=7,Wh=0,dd=1,fd=2,fi=0,pd=1,md=2,gd=3,Zc=4,yd=5,xd=6,vd=7;var Gh=300,ys=301,xs=302,Ua=303,Oa=304,_o=306,Va=1e3,Ni=1001,za=1002,Ye=1003,_d=1004;var vr=1005;var bn=1006,jo=1007;var Fi=1008;var Wn=1009,qh=1010,Xh=1011,Ys=1012,$c=1013,Di=1014,Mn=1015,Ks=1016,jc=1017,Jc=1018,vs=1020,Yh=35902,Zh=1021,$h=1022,hn=1023,jh=1024,Jh=1025,fs=1026,_s=1027,Qc=1028,Kc=1029,Qh=1030,tl=1031;var el=1033,Gr=33776,qr=33777,Xr=33778,Yr=33779,ka=35840,Ha=35841,Wa=35842,Ga=35843,qa=36196,Xa=37492,Ya=37496,Za=37808,$a=37809,ja=37810,Ja=37811,Qa=37812,Ka=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,Zr=36492,cc=36494,lc=36495,Kh=36283,hc=36284,uc=36285,dc=36286;var $r=2300,fc=2301,Jo=2302,Ul=2400,Ol=2401,Vl=2402;var bd=3200,Md=3201;var tu=0,Sd=1,hi="",Ke="srgb",Es="srgb-linear",bo="linear",ne="srgb";var ji=7680;var zl=519,wd=512,Ed=513,Ad=514,eu=515,Td=516,Cd=517,Rd=518,Pd=519,kl=35044,tr=35048;var Hl="300 es",kn=2e3,jr=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qo=Math.PI/180,pc=180/Math.PI;function er(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Id(s,t){return(s%t+t)%t}function Ko(s,t,e){return(1-e)*s+e*t}function Ds(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var jt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],y=n[8],g=i[0],m=i[3],f=i[6],S=i[1],_=i[4],v=i[7],I=i[2],A=i[5],R=i[8];return r[0]=o*g+a*S+c*I,r[3]=o*m+a*_+c*A,r[6]=o*f+a*v+c*R,r[1]=l*g+h*S+d*I,r[4]=l*m+h*_+d*A,r[7]=l*f+h*v+d*R,r[2]=u*g+p*S+y*I,r[5]=u*m+p*_+y*A,r[8]=u*f+p*v+y*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,y=e*d+n*u+i*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return t[0]=d*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ta=new Dt;function nu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bd(){let s=Jr("canvas");return s.style.display="block",s}var Wl={};function Gs(s){s in Wl||(Wl[s]=!0,console.warn(s))}function Ld(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?bo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],Xl=[.3127,.329],Yl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Es]:{primaries:Gl,whitePoint:Xl,transfer:bo,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:Gl,whitePoint:Xl,transfer:ne,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var Ji,mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Jr("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,Qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ea(i[o].image)):r.push(ea(i[o]))}else r=ea(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ea(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?mc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,Ze=class s extends mi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ni,i=Ni,r=bn,o=Fi,a=hn,c=Wn,l=s.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=er(),this.name="",this.source=new Qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Gh;Ze.DEFAULT_ANISOTROPY=1;var ie=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],y=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(y+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(p+1)/2,I=(f+1)/2,A=(h+u)/4,R=(d+g)/4,B=(y+m)/4;return _>v&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=R/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=B/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=R/r,i=B/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-y)*(m-y)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-y)/S,this.y=(d-g)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],p=r[o+1],y=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=y,t[e+3]=g;return}if(d!==g||c!==u||l!==p||h!==y){let m=1-a,f=c*u+l*p+h*y+d*g,S=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let I=Math.sqrt(_),A=Math.atan2(I,f*S);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let v=a*S;if(c=c*m+u*v,l=l*m+p*v,h=h*m+y*v,d=d*m+g*v,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],y=r[o+3];return t[e]=a*y+h*d+c*p-l*u,t[e+1]=c*y+h*u+l*d-a*p,t[e+2]=l*y+h*p+a*u-c*d,t[e+3]=h*y-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),p=c(i/2),y=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*y,this._y=l*p*d-u*h*y,this._z=l*h*y+u*p*d,this._w=l*h*d-u*p*y;break;case"YXZ":this._x=u*h*d+l*p*y,this._y=l*p*d-u*h*y,this._z=l*h*y-u*p*d,this._w=l*h*d+u*p*y;break;case"ZXY":this._x=u*h*d-l*p*y,this._y=l*p*d+u*h*y,this._z=l*h*y+u*p*d,this._w=l*h*d-u*p*y;break;case"ZYX":this._x=u*h*d-l*p*y,this._y=l*p*d+u*h*y,this._z=l*h*y-u*p*d,this._w=l*h*d+u*p*y;break;case"YZX":this._x=u*h*d+l*p*y,this._y=l*p*d+u*h*y,this._z=l*h*y-u*p*d,this._w=l*h*d-u*p*y;break;case"XZY":this._x=u*h*d-l*p*y,this._y=l*p*d-u*h*y,this._z=l*h*y+u*p*d,this._w=l*h*d+u*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},na=new z,$l=new un,qn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),br.subVectors(this.max,Us),Qi.subVectors(t.a,Us),Ki.subVectors(t.b,Us),ts.subVectors(t.c,Us),si.subVectors(Ki,Qi),ri.subVectors(ts,Ki),wi.subVectors(Qi,ts);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-wi.z,wi.y,si.z,0,-si.x,ri.z,0,-ri.x,wi.z,0,-wi.x,-si.y,si.x,0,-ri.y,ri.x,0,-wi.y,wi.x,0];return!ia(e,Qi,Ki,ts,br)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Qi,Ki,ts,br))?!1:(Mr.crossVectors(si,ri),e=[Mr.x,Mr.y,Mr.z],ia(e,Qi,Ki,ts,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new z,new z,new z,new z,new z,new z,new z,new z],an=new z,_r=new qn,Qi=new z,Ki=new z,ts=new z,si=new z,ri=new z,wi=new z,Us=new z,br=new z,Mr=new z,Ei=new z;function ia(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);let a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Od=new qn,Os=new z,sa=new z,gi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(sa)),this.expandByPoint(Os.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new z,ra=new z,Sr=new z,oi=new z,oa=new z,wr=new z,aa=new z,Zs=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ra.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(ra);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=oi.dot(this.direction),c=-oi.dot(Sr),l=oi.lengthSq(),h=Math.abs(1-o*o),d,u,p,y;if(h>0)if(d=o*c-a,u=o*a-c,y=r*h,d>=0)if(u>=-y)if(u<=y){let g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-y?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=y?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ra).addScaledVector(Sr,u),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,r){oa.subVectors(e,t),wr.subVectors(n,t),aa.crossVectors(oa,wr);let o=this.direction.dot(aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let c=a*this.direction.dot(wr.crossVectors(oi,wr));if(c<0)return null;let l=a*this.direction.dot(oa.cross(oi));if(l<0||c+l>o)return null;let h=-a*oi.dot(aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,p,y,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,p,y,g,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,p,y,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=y,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+y*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=y+p*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,y=l*h,g=l*d;e[0]=u+g*a,e[4]=y*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-y,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,y=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=y+p*a,e[1]=p+y*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,p=o*d,y=a*h,g=a*d;e[0]=c*h,e[4]=y*l-p,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=p*l-y,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,p=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=y*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+y,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*c,p=o*l,y=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=p*d-y,e[2]=y*d-p,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,zd)}lookAt(t,e,n){let i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ai.crossVectors(n,qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ai.crossVectors(n,qe)),ai.normalize(),Er.crossVectors(qe,ai),i[0]=ai.x,i[4]=Er.x,i[8]=qe.x,i[1]=ai.y,i[5]=Er.y,i[9]=qe.y,i[2]=ai.z,i[6]=Er.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],y=n[2],g=n[6],m=n[10],f=n[14],S=n[3],_=n[7],v=n[11],I=n[15],A=i[0],R=i[4],B=i[8],w=i[12],M=i[1],P=i[5],W=i[9],O=i[13],V=i[2],G=i[6],H=i[10],k=i[14],L=i[3],$=i[7],j=i[11],pt=i[15];return r[0]=o*A+a*M+c*V+l*L,r[4]=o*R+a*P+c*G+l*$,r[8]=o*B+a*W+c*H+l*j,r[12]=o*w+a*O+c*k+l*pt,r[1]=h*A+d*M+u*V+p*L,r[5]=h*R+d*P+u*G+p*$,r[9]=h*B+d*W+u*H+p*j,r[13]=h*w+d*O+u*k+p*pt,r[2]=y*A+g*M+m*V+f*L,r[6]=y*R+g*P+m*G+f*$,r[10]=y*B+g*W+m*H+f*j,r[14]=y*w+g*O+m*k+f*pt,r[3]=S*A+_*M+v*V+I*L,r[7]=S*R+_*P+v*G+I*$,r[11]=S*B+_*W+v*H+I*j,r[15]=S*w+_*O+v*k+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],y=t[3],g=t[7],m=t[11],f=t[15];return y*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*p-n*c*p)+g*(+e*c*p-e*l*u+r*o*u-i*o*p+i*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],y=t[12],g=t[13],m=t[14],f=t[15],S=d*m*l-g*u*l+g*c*p-a*m*p-d*c*f+a*u*f,_=y*u*l-h*m*l-y*c*p+o*m*p+h*c*f-o*u*f,v=h*g*l-y*d*l+y*a*p-o*g*p-h*a*f+o*d*f,I=y*d*c-h*g*c-y*a*u+o*g*u+h*a*m-o*d*m,A=e*S+n*_+i*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=S*R,t[1]=(g*u*r-d*m*r-g*i*p+n*m*p+d*i*f-n*u*f)*R,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*f+n*c*f)*R,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*p-n*c*p)*R,t[4]=_*R,t[5]=(h*m*r-y*u*r+y*i*p-e*m*p-h*i*f+e*u*f)*R,t[6]=(y*c*r-o*m*r-y*i*l+e*m*l+o*i*f-e*c*f)*R,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*p+e*c*p)*R,t[8]=v*R,t[9]=(y*d*r-h*g*r-y*n*p+e*g*p+h*n*f-e*d*f)*R,t[10]=(o*g*r-y*a*r+y*n*l-e*g*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*R,t[12]=I*R,t[13]=(h*g*i-y*d*i+y*n*u-e*g*u-h*n*m+e*d*m)*R,t[14]=(y*a*i-o*g*i-y*n*c+e*g*c+o*n*m-e*a*m)*R,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,y=r*d,g=o*h,m=o*d,f=a*d,S=c*l,_=c*h,v=c*d,I=n.x,A=n.y,R=n.z;return i[0]=(1-(g+f))*I,i[1]=(p+v)*I,i[2]=(y-_)*I,i[3]=0,i[4]=(p-v)*A,i[5]=(1-(u+f))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(y+_)*R,i[9]=(m-S)*R,i[10]=(1-(u+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=es.set(i[0],i[1],i[2]).length(),o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);let l=1/r,h=1/o,d=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=kn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,y;if(a===kn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===jr)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=kn){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,p=(n+i)*h,y,g;if(a===kn)y=(o+r)*d,g=-2*d;else if(a===jr)y=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},es=new z,cn=new ee,Vd=new z(0,0,0),zd=new z(1,1,1),ai=new z,Er=new z,qe=new z,jl=new ee,Jl=new un,Sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kd=0,Ql=new z,ns=new un,Fn=new ee,Ar=new z,Vs=new z,Hd=new z,Wd=new un,Kl=new z(1,0,0),th=new z(0,1,0),eh=new z(0,0,1),nh={type:"added"},Gd={type:"removed"},is={type:"childadded",child:null},ca={type:"childremoved",child:null},Le=class s extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new Sn,n=new un,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Dt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Vs,Ar,this.up):Fn.lookAt(Ar,Vs,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Fn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new z(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new z,Dn=new z,la=new z,Un=new z,ss=new z,rs=new z,ih=new z,ha=new z,ua=new z,da=new z,fa=new ie,pa=new ie,ma=new ie,Bi=class s{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Dn.subVectors(n,e),la.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(Dn),c=ln.dot(la),l=Dn.dot(Dn),h=Dn.dot(la),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-a*h)*u,y=(o*h-a*c)*u;return r.set(1-p-y,y,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),ma.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Dn.subVectors(t,e),ln.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ss.subVectors(i,n),rs.subVectors(r,n),ha.subVectors(t,n);let c=ss.dot(ha),l=rs.dot(ha);if(c<=0&&l<=0)return e.copy(n);ua.subVectors(t,i);let h=ss.dot(ua),d=rs.dot(ua);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ss,o);da.subVectors(t,r);let p=ss.dot(da),y=rs.dot(da);if(y>=0&&p<=y)return e.copy(r);let g=p*l-c*y;if(g<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(rs,a);let m=h*y-p*d;if(m<=0&&d-h>=0&&p-y>=0)return ih.subVectors(r,i),a=(d-h)/(d-h+(p-y)),e.copy(i).addScaledVector(ih,a);let f=1/(m+g+u);return o=g*f,a=u*f,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ga(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Id(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return $t.fromWorkingColorSpace(Pe.copy(this),t),Math.round(ze(Pe.r*255,0,255))*65536+Math.round(ze(Pe.g*255,0,255))*256+Math.round(ze(Pe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ke){$t.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,i=Pe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Tr);let n=Ko(ci.h,Tr.h,e),i=Ko(ci.s,Tr.s,e),r=Ko(ci.l,Tr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Lt;Lt.NAMES=iu;var qd=0,yi=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=er(),this.name="",this.blending=ds,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bs=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new z,Cr=new jt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kl&&(t.usage=this.usage),t}};var to=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var eo=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ke=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xd=0,Qe=new ee,ya=new Le,os=new z,Xe=new qn,zs=new qn,we=new z,dn=class s extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?eo:to)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Xe.min,zs.min),Xe.expandByPoint(we),we.addVectors(Xe.max,zs.max),Xe.expandByPoint(we)):(Xe.expandByPoint(zs.min),Xe.expandByPoint(zs.max))}Xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(t,l),we.add(os)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new z,c[B]=new z;let l=new z,h=new z,d=new z,u=new jt,p=new jt,y=new jt,g=new z,m=new z;function f(B,w,M){l.fromBufferAttribute(n,B),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,B),p.fromBufferAttribute(r,w),y.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(u),y.sub(u);let P=1/(p.x*y.y-y.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(P),a[B].add(g),a[w].add(g),a[M].add(g),c[B].add(m),c[w].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let B=0,w=S.length;B<w;++B){let M=S[B],P=M.start,W=M.count;for(let O=P,V=P+W;O<V;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new z,v=new z,I=new z,A=new z;function R(B){I.fromBufferAttribute(i,B),A.copy(I);let w=a[B];_.copy(w),_.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(A,w);let P=v.dot(c[B])<0?-1:1;o.setXYZW(B,_.x,_.y,_.z,P)}for(let B=0,w=S.length;B<w;++B){let M=S[B],P=M.start,W=M.count;for(let O=P,V=P+W;O<V;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,d=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){let y=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),p=0,y=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)u[y++]=l[p++]}return new Te(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new ee,Ai=new Zs,Rr=new gi,rh=new z,Pr=new z,Ir=new z,Br=new z,xa=new z,Lr=new z,oh=new z,Nr=new z,xe=class extends Le{constructor(t=new dn,e=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(xa.fromBufferAttribute(d,t),o?Lr.addScaledVector(xa,h):Lr.addScaledVector(xa.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Rr,rh)===null||Ai.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,I=_;v<I;v+=3){let A=a.getX(v),R=a.getX(v+1),B=a.getX(v+2);i=Fr(this,f,t,n,l,h,d,A,R,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=y,f=g;m<f;m+=3){let S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=Fr(this,o,t,n,l,h,d,S,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,g=u.length;y<g;y++){let m=u[y],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,I=_;v<I;v+=3){let A=v,R=v+1,B=v+2;i=Fr(this,f,t,n,l,h,d,A,R,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let y=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=y,f=g;m<f;m+=3){let S=m,_=m+1,v=m+2;i=Fr(this,o,t,n,l,h,d,S,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Yd(s,t,e,n,i,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===pi,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:s}}function Fr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Pr),s.getVertexPosition(c,Ir),s.getVertexPosition(l,Br);let h=Yd(s,t,e,n,Pr,Ir,Br,oh);if(h){let d=new z;Bi.getBarycoord(oh,Pr,Ir,Br,d),i&&(h.uv=Bi.getInterpolatedAttribute(i,a,c,l,d,new jt)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,c,l,d,new jt)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,c,l,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new z,materialIndex:0};Bi.getNormal(Pr,Ir,Br,u.normal),h.face=u,h.barycoord=d}return h}var Ui=class s extends dn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,p=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,i,o,2),y("x","z","y",1,-1,t,n,-e,i,o,3),y("x","y","z",1,-1,t,e,n,i,r,4),y("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function y(g,m,f,S,_,v,I,A,R,B,w){let M=v/R,P=I/B,W=v/2,O=I/2,V=A/2,G=R+1,H=B+1,k=0,L=0,$=new z;for(let j=0;j<H;j++){let pt=j*P-O;for(let wt=0;wt<G;wt++){let rt=wt*M-W;$[g]=rt*S,$[m]=pt*_,$[f]=V,l.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[f]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(wt/R),d.push(1-j/B),k+=1}}for(let j=0;j<B;j++)for(let pt=0;pt<R;pt++){let wt=u+pt+G*j,rt=u+pt+G*(j+1),J=u+(pt+1)+G*(j+1),nt=u+(pt+1)+G*j;c.push(wt,rt,nt),c.push(rt,J,nt),L+=6}a.addGroup(p,L,w),p+=L,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){let t={};for(let e=0;e<s.length;e++){let n=Ms(s[e]);for(let i in n)t[i]=n[i]}return t}function Zd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function su(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var $d={clone:Ms,merge:Fe},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},no=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new z,ah=new jt,ch=new jt,Ie=class extends no{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,ah,ch),e.subVectors(ch,ah)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,cs=1,xc=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ie(as,cs,t,e);i.layers=this.layers,this.add(i);let r=new Ie(as,cs,t,e);r.layers=this.layers,this.add(r);let o=new Ie(as,cs,t,e);o.layers=this.layers,this.add(o);let a=new Ie(as,cs,t,e);a.layers=this.layers,this.add(a);let c=new Ie(as,cs,t,e);c.layers=this.layers,this.add(c);let l=new Ie(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},io=class extends Ze{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:di});r.uniforms.tEquirect.value=e;let o=new xe(i,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=bn),new xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},va=new z,Qd=new z,Kd=new Dt,Vn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=va.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),i=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new gi,Dr=new z,js=class{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],y=i[9],g=i[10],m=i[11],f=i[12],S=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-p,v-f).normalize(),n[1].setComponents(c+r,u+l,m+p,v+f).normalize(),n[2].setComponents(c+o,u+h,m+y,v+S).normalize(),n[3].setComponents(c-o,u-h,m-y,v-S).normalize(),n[4].setComponents(c-a,u-d,m-g,v-_).normalize(),e===kn)n[5].setComponents(c+a,u+d,m+g,v+_).normalize();else if(e===jr)n[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ru(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tf(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,y)=>p.start-y.start);let u=0;for(let p=1;p<d.length;p++){let y=d[u],g=d[p];g.start<=y.start+y.count+1?y.count=Math.max(y.count,g.start+g.count-y.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,y=d.length;p<y;p++){let g=d[p];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ss=class s extends dn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],y=[],g=[],m=[];for(let f=0;f<h;f++){let S=f*u-o;for(let _=0;_<l;_++){let v=_*d-r;y.push(v,-S,0),g.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let _=S+l*f,v=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;p.push(_,v,A),p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new ke(y,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,wm=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:of,alphatest_pars_fragment:af,aomap_fragment:cf,aomap_pars_fragment:lf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:_f,color_fragment:bf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Rf,emissivemap_fragment:Pf,emissivemap_pars_fragment:If,colorspace_fragment:Bf,colorspace_pars_fragment:Lf,envmap_fragment:Nf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Zf,envmap_vertex:Of,fog_vertex:Vf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Gf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:$f,lights_toon_pars_fragment:jf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:Kf,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:cp,map_pars_fragment:lp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:yp,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:_p,normal_pars_fragment:bp,normal_pars_vertex:Mp,normal_vertex:Sp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Ip,project_vertex:Bp,dithering_fragment:Lp,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Op,shadowmap_vertex:Vp,shadowmask_pars_fragment:zp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Wp,skinnormal_vertex:Gp,specularmap_fragment:qp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:$p,transmission_pars_fragment:jp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:Kp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:cm,distanceRGBA_vert:lm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:ym,meshlambert_frag:xm,meshmatcap_vert:vm,meshmatcap_frag:_m,meshnormal_vert:bm,meshnormal_frag:Mm,meshphong_vert:Sm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Am,meshtoon_vert:Tm,meshtoon_frag:Cm,points_vert:Rm,points_frag:Pm,shadow_vert:Im,shadow_frag:Bm,sprite_vert:Lm,sprite_frag:Nm},at={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},_n={basic:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Fe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Fe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Fe([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Fe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Fe([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Fe([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Fe([at.common,at.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Fe([at.lights,at.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};_n.physical={uniforms:Fe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Ur={r:0,b:0,g:0},Ci=new Sn,Fm=new ee;function Dm(s,t,e,n,i,r,o){let a=new Lt(0),c=r===!0?0:1,l,h,d=null,u=0,p=null;function y(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function g(S){let _=!1,v=y(S);v===null?f(a,c):v&&v.isColor&&(f(v,1),_=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,_){let v=y(_);v&&(v.isCubeTexture||v.mapping===_o)?(h===void 0&&(h=new xe(new Ui(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ms(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(_.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(Ci)),h.material.toneMapped=$t.getTransfer(v.colorSpace)!==ne,(d!==v||u!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xe(new Ss(2,2),new tn({name:"BackgroundMaterial",uniforms:Ms(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,_){S.getRGB(Ur,su(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:g,addToRenderList:m}}function Um(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(M,P,W,O,V){let G=!1,H=d(O,W,P);r!==H&&(r=H,l(r.object)),G=p(M,O,W,V),G&&y(M,O,W,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,P,W,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,W){let O=W.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let H=G[O];return H===void 0&&(H=u(c()),G[O]=H),H}function u(M){let P=[],W=[],O=[];for(let V=0;V<e;V++)P[V]=0,W[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,W,O){let V=r.attributes,G=P.attributes,H=0,k=W.getAttributes();for(let L in k)if(k[L].location>=0){let j=V[L],pt=G[L];if(pt===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function y(M,P,W,O){let V={},G=P.attributes,H=0,k=W.getAttributes();for(let L in k)if(k[L].location>=0){let j=G[L];j===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));let pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),V[L]=pt,H++}r.attributes=V,r.attributesNum=H,r.index=O}function g(){let M=r.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let W=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;W[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),V[M]!==P&&(s.vertexAttribDivisor(M,P),V[M]=P)}function S(){let M=r.newAttributes,P=r.enabledAttributes;for(let W=0,O=P.length;W<O;W++)P[W]!==M[W]&&(s.disableVertexAttribArray(W),P[W]=0)}function _(M,P,W,O,V,G,H){H===!0?s.vertexAttribIPointer(M,P,W,V,G):s.vertexAttribPointer(M,P,W,O,V,G)}function v(M,P,W,O){g();let V=O.attributes,G=W.getAttributes(),H=P.defaultAttributeValues;for(let k in G){let L=G[k];if(L.location>=0){let $=V[k];if($===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let j=$.normalized,pt=$.itemSize,wt=t.get($);if(wt===void 0)continue;let rt=wt.buffer,J=wt.type,nt=wt.bytesPerElement,mt=J===s.INT||J===s.UNSIGNED_INT||$.gpuType===$c;if($.isInterleavedBufferAttribute){let ot=$.data,Et=ot.stride,Bt=$.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<L.locationSize;Ht++)f(L.location+Ht,ot.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<L.locationSize;Ht++)m(L.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Ht=0;Ht<L.locationSize;Ht++)_(L.location+Ht,pt/L.locationSize,J,j,Et*nt,(Bt+pt/L.locationSize*Ht)*nt,mt)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<L.locationSize;ot++)f(L.location+ot,$.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<L.locationSize;ot++)m(L.location+ot);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ot=0;ot<L.locationSize;ot++)_(L.location+ot,pt/L.locationSize,J,j,pt*nt,pt/L.locationSize*ot*nt,mt)}}else if(H!==void 0){let j=H[k];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(L.location,j);break;case 3:s.vertexAttrib3fv(L.location,j);break;case 4:s.vertexAttrib4fv(L.location,j);break;default:s.vertexAttrib1fv(L.location,j)}}}}S()}function I(){B();for(let M in n){let P=n[M];for(let W in P){let O=P[W];for(let V in O)h(O[V].object),delete O[V];delete P[W]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let W in P){let O=P[W];for(let V in O)h(O[V].object),delete O[V];delete P[W]}delete n[M.id]}function R(M){for(let P in n){let W=n[P];if(W[M.id]===void 0)continue;let O=W[M.id];for(let V in O)h(O[V].object),delete O[V];delete W[M.id]}}function B(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Om(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<l.length;y++)o(l[y],h[y],u[y]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let y=0;for(let g=0;g<d;g++)y+=h[g]*u[g];e.update(y,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==hn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let B=R===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!B)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=y>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:y,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function zm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Vn,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let y=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||y===null||y.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,_=S*4,v=f.clippingState||null;c.value=v,v=h(y,u,_,p);for(let I=0;I!==_;++I)v[I]=e[I];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,y){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,y!==!0||m===null){let f=p+g*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,v=p;_!==g;++_,v+=4)o.copy(d[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function km(s){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=ys:a===Oa&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===Oa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new vc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var so=class extends no{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,lh=[.125,.215,.35,.446,.526,.582],Li=20,_a=new so,hh=new Lt,ba=null,Ma=0,Sa=0,wa=!1,Pi=(1+Math.sqrt(5))/2,ls=1/Pi,uh=[new z(-Pi,ls,0),new z(Pi,ls,0),new z(-ls,0,Pi),new z(ls,0,Pi),new z(0,Pi,-ls),new z(0,Pi,ls),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ba=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ma,Sa),this._renderer.xr.enabled=wa,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ks,format:hn,colorSpace:Es,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Wm(r,t,e)}return i}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,i){let a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(hh),h.toneMapping=fi,h.autoClear=!1;let p=new bs({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),y=new xe(new Ui,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(hh),g=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;Or(i,S*_,f>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ys||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,_a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(i-r-1)%uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new xe(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Li-1),g=r/y,m=isFinite(r)?1+Math.floor(h*g):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let f=[],S=0;for(let R=0;R<Li;++R){let B=R/g,w=Math.exp(-B*B/2);f.push(w),R===0?S+=w:R<m&&(S+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=y,u.mipInt.value=_-n;let v=this._sizeLods[i],I=3*v*(i>_-us?i-_+us:0),A=4*(this._cubeSize-v);Or(e,I,A,3*v,2*v),c.setRenderTarget(e),c.render(d,_a)}};function Hm(s){let t=[],e=[],n=[],i=s,r=s-us+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-us?c=lh[o-s+us-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,y=6,g=3,m=2,f=1,S=new Float32Array(g*y*p),_=new Float32Array(m*y*p),v=new Float32Array(f*y*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,B=A>2?0:-1,w=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];S.set(w,g*y*A),_.set(u,m*y*A);let M=[A,A,A,A,A,A];v.set(M,f*y*A)}let I=new dn;I.setAttribute("position",new Te(S,g)),I.setAttribute("uv",new Te(_,m)),I.setAttribute("faceIndex",new Te(v,f)),t.push(I),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(s,t,e){let n=new Gn(s,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wm(s,t,e){let n=new Float32Array(Li),i=new z(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function fh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ph(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Gm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ua||c===Oa,h=c===ys||c===xs;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ro(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new ro(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xm(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let y in u.attributes)t.remove(u.attributes[y]);for(let y in u.morphAttributes){let g=u.morphAttributes[y];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let y in u)t.update(u[y],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let y in p){let g=p[y];for(let m=0,f=g.length;m<f;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(d){let u=[],p=d.index,y=d.attributes.position,g=0;if(p!==null){let S=p.array;g=p.version;for(let _=0,v=S.length;_<v;_+=3){let I=S[_+0],A=S[_+1],R=S[_+2];u.push(I,A,A,R,R,I)}}else if(y!==void 0){let S=y.array;g=y.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let I=_+0,A=_+1,R=_+2;u.push(I,A,A,R,R,I)}}else return;let m=new(nu(u)?eo:to)(u,1);m.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ym(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,y){y!==0&&(s.drawElementsInstanced(n,p,r,u*o,y),e.update(p,n,y))}function h(u,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,y);let m=0;for(let f=0;f<y;f++)m+=p[f];e.update(m,n,1)}function d(u,p,y,g){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,y);let f=0;for(let S=0;S<y;S++)f+=p[S]*g[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $m(s,t,e){let n=new WeakMap,i=new ie;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;p===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let v=a.attributes.position.count*_,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*I*4*d),R=new Kr(A,v,I,d);R.type=Mn,R.needsUpdate=!0;let B=_*4;for(let M=0;M<d;M++){let P=m[M],W=f[M],O=S[M],V=v*I*4*M;for(let G=0;G<P.count;G++){let H=G*B;p===!0&&(i.fromBufferAttribute(P,G),A[V+H+0]=i.x,A[V+H+1]=i.y,A[V+H+2]=i.z,A[V+H+3]=0),y===!0&&(i.fromBufferAttribute(W,G),A[V+H+4]=i.x,A[V+H+5]=i.y,A[V+H+6]=i.z,A[V+H+7]=0),g===!0&&(i.fromBufferAttribute(O,G),A[V+H+8]=i.x,A[V+H+9]=i.y,A[V+H+10]=i.z,A[V+H+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new jt(v,I)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let y=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function jm(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var oo=class extends Ze{constructor(t,e,n,i,r,o,a,c,l,h=fs){if(h!==fs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Di),n===void 0&&h===_s&&(n=vs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ou=new Ze,mh=new oo(1,1),au=new Kr,cu=new yc,lu=new io,gh=[],yh=[],xh=new Float32Array(16),vh=new Float32Array(9),_h=new Float32Array(4);function As(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=gh[i];if(r===void 0&&(r=new Float32Array(i),gh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Mo(s,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function eg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;_h.set(n),s.uniformMatrix2fv(this.addr,!1,_h),_e(e,n)}}function ng(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;vh.set(n),s.uniformMatrix3fv(this.addr,!1,vh),_e(e,n)}}function ig(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;xh.set(n),s.uniformMatrix4fv(this.addr,!1,xh),_e(e,n)}}function sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function cg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function dg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mh.compareFunction=eu,r=mh):r=ou,e.setTexture2D(t||r,i)}function fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cu,i)}function pg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lu,i)}function mg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||au,i)}function gg(s){switch(s){case 5126:return Jm;case 35664:return Qm;case 35665:return Km;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function yg(s,t){s.uniform1fv(this.addr,t)}function xg(s,t){let e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function vg(s,t){let e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function _g(s,t){let e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function bg(s,t){let e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mg(s,t){let e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sg(s,t){let e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wg(s,t){s.uniform1iv(this.addr,t)}function Eg(s,t){s.uniform2iv(this.addr,t)}function Ag(s,t){s.uniform3iv(this.addr,t)}function Tg(s,t){s.uniform4iv(this.addr,t)}function Cg(s,t){s.uniform1uiv(this.addr,t)}function Rg(s,t){s.uniform2uiv(this.addr,t)}function Pg(s,t){s.uniform3uiv(this.addr,t)}function Ig(s,t){s.uniform4uiv(this.addr,t)}function Bg(s,t,e){let n=this.cache,i=t.length,r=Mo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ou,r[o])}function Lg(s,t,e){let n=this.cache,i=t.length,r=Mo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cu,r[o])}function Ng(s,t,e){let n=this.cache,i=t.length,r=Mo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lu,r[o])}function Fg(s,t,e){let n=this.cache,i=t.length,r=Mo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||au,r[o])}function Dg(s){switch(s){case 5126:return yg;case 35664:return xg;case 35665:return vg;case 35666:return _g;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Ag;case 35669:case 35673:return Tg;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}var _c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}},bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function bh(s,t){s.seq.push(t),s.map[t.id]=t}function Ug(s,t,e){let n=s.name,i=n.length;for(Ea.lastIndex=0;;){let r=Ea.exec(n),o=Ea.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){bh(e,l===void 0?new _c(a,s,t):new bc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Mc(a),bh(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Ug(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Mh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Og=37297,Vg=0;function zg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sh=new Dt;function kg(s){$t._getMatrix(Sh,$t.workingColorSpace,s);let t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case bo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zg(s.getShaderSource(t),o)}else return i}function Hg(s,t){let e=kg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wg(s,t){let e;switch(t){case pd:e="Linear";break;case md:e="Reinhard";break;case gd:e="Cineon";break;case Zc:e="ACESFilmic";break;case xd:e="AgX";break;case vd:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vr=new z;function Gg(){$t.getLuminanceCoefficients(Vr);let s=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Xg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function qs(s){return s!==""}function Eh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(s){return s.replace(Zg,jg)}var $g=new Map;function jg(s,t){let e=zt[t];if(e===void 0){let n=$g.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(s){return s.replace(Jg,Qg)}function Qg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ch(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Kg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case xs:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===xs&&(t="ENVMAP_MODE_REFRACTION"),t}function n0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case dd:t="ENVMAP_BLENDING_MIX";break;case fd:t="ENVMAP_BLENDING_ADD";break}return t}function i0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Kg(e),l=t0(e),h=e0(e),d=n0(e),u=i0(e),p=qg(e),y=Xg(r),g=i.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?zt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=Sc(o),o=Eh(o,e),o=Ah(o,e),a=Sc(a),a=Eh(a,e),a=Ah(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=S+m+o,v=S+f+a,I=Mh(i,i.VERTEX_SHADER,_),A=Mh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,I),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(P){if(s.debug.checkShaderErrors){let W=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(I).trim(),V=i.getShaderInfoLog(A).trim(),G=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,I,A);else{let k=wh(i,I,"vertex"),L=wh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+k+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(O===""||V==="")&&(H=!1);H&&(P.diagnostics={runnable:G,programLog:W,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(I),i.deleteShader(A),B=new ms(i,g),w=Yg(i,g)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Og)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=A,this}var r0=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ec(t),e.set(t,n)),n}},Ec=class{constructor(t){this.id=r0++,this.code=t,this.usedTimes=0}};function o0(s,t,e,n,i,r,o){let a=new $s,c=new wc,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,W,O){let V=W.fog,G=O.geometry,H=w.isMeshStandardMaterial?W.environment:null,k=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),L=k&&k.mapping===_o?k.image.height:null,$=y[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=j!==void 0?j.length:0,wt=0;G.morphAttributes.position!==void 0&&(wt=1),G.morphAttributes.normal!==void 0&&(wt=2),G.morphAttributes.color!==void 0&&(wt=3);let rt,J,nt,mt;if($){let te=_n[$];rt=te.vertexShader,J=te.fragmentShader}else rt=w.vertexShader,J=w.fragmentShader,c.update(w),nt=c.getVertexShaderID(w),mt=c.getFragmentShaderID(w);let ot=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,Ht=O.isBatchedMesh===!0,de=!!w.map,Yt=!!w.matcap,me=!!k,U=!!w.aoMap,je=!!w.lightMap,Gt=!!w.bumpMap,qt=!!w.normalMap,Tt=!!w.displacementMap,ae=!!w.emissiveMap,At=!!w.metalnessMap,C=!!w.roughnessMap,b=w.anisotropy>0,q=w.clearcoat>0,K=w.dispersion>0,et=w.iridescence>0,Q=w.sheen>0,Mt=w.transmission>0,ht=b&&!!w.anisotropyMap,gt=q&&!!w.clearcoatMap,Zt=q&&!!w.clearcoatNormalMap,it=q&&!!w.clearcoatRoughnessMap,yt=et&&!!w.iridescenceMap,Ct=et&&!!w.iridescenceThicknessMap,Rt=Q&&!!w.sheenColorMap,xt=Q&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,Vt=!!w.specularColorMap,re=!!w.specularIntensityMap,N=Mt&&!!w.transmissionMap,lt=Mt&&!!w.thicknessMap,Z=!!w.gradientMap,tt=!!w.alphaMap,ft=w.alphaTest>0,ut=!!w.alphaHash,Nt=!!w.extensions,pe=fi;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pe=s.toneMapping);let Ce={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:J,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Yt,envMap:me,envMapMode:me&&k.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:je,bumpMap:Gt,normalMap:qt,displacementMap:u&&Tt,emissiveMap:ae,normalMapObjectSpace:qt&&w.normalMapType===Sd,normalMapTangentSpace:qt&&w.normalMapType===tu,metalnessMap:At,roughnessMap:C,anisotropy:b,anisotropyMap:ht,clearcoat:q,clearcoatMap:gt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:it,dispersion:K,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:Ct,sheen:Q,sheenColorMap:Rt,sheenRoughnessMap:xt,specularMap:Xt,specularColorMap:Vt,specularIntensityMap:re,transmission:Mt,transmissionMap:N,thicknessMap:lt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ut,combine:w.combine,mapUv:de&&g(w.map.channel),aoMapUv:U&&g(w.aoMap.channel),lightMapUv:je&&g(w.lightMap.channel),bumpMapUv:Gt&&g(w.bumpMap.channel),normalMapUv:qt&&g(w.normalMap.channel),displacementMapUv:Tt&&g(w.displacementMap.channel),emissiveMapUv:ae&&g(w.emissiveMap.channel),metalnessMapUv:At&&g(w.metalnessMap.channel),roughnessMapUv:C&&g(w.roughnessMap.channel),anisotropyMapUv:ht&&g(w.anisotropyMap.channel),clearcoatMapUv:gt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(w.sheenRoughnessMap.channel),specularMapUv:Xt&&g(w.specularMap.channel),specularColorMapUv:Vt&&g(w.specularColorMap.channel),specularIntensityMapUv:re&&g(w.specularIntensityMap.channel),transmissionMapUv:N&&g(w.transmissionMap.channel),thicknessMapUv:lt&&g(w.thicknessMap.channel),alphaMapUv:tt&&g(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(qt||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(de||tt),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===ne,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zn,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(S(M,w),_(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let M=y[w.type],P;if(M){let W=_n[M];P=$d.clone(W.uniforms)}else P=w.uniforms;return P}function I(w,M){let P;for(let W=0,O=h.length;W<O;W++){let V=h[W];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new s0(s,M,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:B}}function a0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function c0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ph(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,y,g,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function a(d,u,p,y,g,m){let f=o(d,u,p,y,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,y,g,m){let f=o(d,u,p,y,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||c0),n.length>1&&n.sort(u||Rh),i.length>1&&i.sort(u||Rh)}function h(){for(let d=t,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function l0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ph,s.set(n,[o])):i>=r.length?(o=new Ph,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function h0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Lt};break;case"SpotLight":e={position:new z,direction:new z,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function u0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var d0=0;function f0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function p0(s){let t=new h0,e=u0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,r=new ee,o=new ee;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,y=0,g=0,m=0,f=0,S=0,_=0,v=0,I=0,A=0,R=0;l.sort(f0);for(let w=0,M=l.length;w<M;w++){let P=l[w],W=P.color,O=P.intensity,V=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*O,d+=W.g*O,u+=W.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);R++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,L=e.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=H,p++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(W).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[g]=H;let k=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,k.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=k.matrix,P.castShadow){let L=e.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=G,v++}g++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(W).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let k=P.shadow,L=e.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,L.shadowCameraNear=k.camera.near,L.shadowCameraFar=k.camera.far,n.pointShadow[y]=L,n.pointShadowMap[y]=G,n.pointShadowMatrix[y]=P.shadow.matrix,_++}n.point[y]=H,y++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let B=n.hash;(B.directionalLength!==p||B.pointLength!==y||B.spotLength!==g||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==S||B.numPointShadows!==_||B.numSpotShadows!==v||B.numSpotMaps!==I||B.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=y,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,B.directionalLength=p,B.pointLength=y,B.spotLength=g,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=S,B.numPointShadows=_,B.numSpotShadows=v,B.numSpotMaps=I,B.numLightProbes=R,n.version=d0++)}function c(l,h){let d=0,u=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let _=l[f];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Ih(s){let t=new p0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function m0(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Ih(s),t.set(i,[a])):r>=o.length?(a=new Ih(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ac=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tc=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
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
}`;function x0(s,t,e){let n=new js,i=new jt,r=new jt,o=new ie,a=new Ac({depthPacking:Md}),c=new Tc,l={},h=e.maxTextureSize,d={[pi]:Be,[Be]:pi,[zn]:zn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:g0,fragmentShader:y0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let y=new dn;y.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new xe(y,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let f=this.type;this.render=function(A,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),W=s.state;W.setBlending(di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let O=f!==On&&this.type===On,V=f===On&&this.type!==On;for(let G=0,H=A.length;G<H;G++){let k=A[G],L=k.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let $=L.getFrameExtents();if(i.multiply($),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,L.mapSize.y=r.y)),L.map===null||O===!0||V===!0){let pt=this.type!==On?{minFilter:Ye,magFilter:Ye}:{};L.map!==null&&L.map.dispose(),L.map=new Gn(i.x,i.y,pt),L.map.texture.name=k.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();let j=L.getViewportCount();for(let pt=0;pt<j;pt++){let wt=L.getViewport(pt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),W.viewport(o),L.updateMatrices(k,pt),n=L.getFrustum(),v(R,B,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===On&&S(L,B),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function S(A,R){let B=t.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,B,u,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,B,p,g,null)}function _(A,R,B,w){let M=null,P=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=B.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=M.uuid,O=R.uuid,V=l[W];V===void 0&&(V={},l[W]=V);let G=V[O];G===void 0&&(G=M.clone(),V[O]=G,R.addEventListener("dispose",I)),M=G}if(M.visible=R.visible,M.wireframe=R.wireframe,w===On?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=s.properties.get(M);W.light=B}return M}function v(A,R,B,w,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);let O=t.update(A),V=A.material;if(Array.isArray(V)){let G=O.groups;for(let H=0,k=G.length;H<k;H++){let L=G[H],$=V[L.materialIndex];if($&&$.visible){let j=_(A,$,w,M);A.onBeforeShadow(s,A,R,B,O,j,L),s.renderBufferDirect(B,null,O,j,A,L),A.onAfterShadow(s,A,R,B,O,j,L)}}}else if(V.visible){let G=_(A,V,w,M);A.onBeforeShadow(s,A,R,B,O,G,null),s.renderBufferDirect(B,null,O,G,A,null),A.onAfterShadow(s,A,R,B,O,G,null)}}let W=A.children;for(let O=0,V=W.length;O<V;O++)v(W[O],R,B,w,M)}function I(A){A.target.removeEventListener("dispose",I);for(let B in l){let w=l[B],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var v0={[Pa]:Ia,[Ba]:Fa,[La]:Da,[gs]:Na,[Ia]:Pa,[Fa]:Ba,[Da]:La,[Na]:gs};function _0(s,t){function e(){let N=!1,lt=new ie,Z=null,tt=new ie(0,0,0,0);return{setMask:function(ft){Z!==ft&&!N&&(s.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ut,Nt,pe,Ce){Ce===!0&&(ft*=pe,ut*=pe,Nt*=pe),lt.set(ft,ut,Nt,pe),tt.equals(lt)===!1&&(s.clearColor(ft,ut,Nt,pe),tt.copy(lt))},reset:function(){N=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,Z=null,tt=null,ft=null;return{setReversed:function(ut){if(lt!==ut){let Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let pe=ft;ft=null,this.setClear(pe)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?ot(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(ut){Z!==ut&&!N&&(s.depthMask(ut),Z=ut)},setFunc:function(ut){if(lt&&(ut=v0[ut]),tt!==ut){switch(ut){case Pa:s.depthFunc(s.NEVER);break;case Ia:s.depthFunc(s.ALWAYS);break;case Ba:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Na:s.depthFunc(s.GEQUAL);break;case Fa:s.depthFunc(s.GREATER);break;case Da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ut}},setLocked:function(ut){N=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),s.clearDepth(ut),ft=ut)},reset:function(){N=!1,Z=null,tt=null,ft=null,lt=!1}}}function i(){let N=!1,lt=null,Z=null,tt=null,ft=null,ut=null,Nt=null,pe=null,Ce=null;return{setTest:function(te){N||(te?ot(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(te){lt!==te&&!N&&(s.stencilMask(te),lt=te)},setFunc:function(te,rn,In){(Z!==te||tt!==rn||ft!==In)&&(s.stencilFunc(te,rn,In),Z=te,tt=rn,ft=In)},setOp:function(te,rn,In){(ut!==te||Nt!==rn||pe!==In)&&(s.stencilOp(te,rn,In),ut=te,Nt=rn,pe=In)},setLocked:function(te){N=te},setClear:function(te){Ce!==te&&(s.clearStencil(te),Ce=te)},reset:function(){N=!1,lt=null,Z=null,tt=null,ft=null,ut=null,Nt=null,pe=null,Ce=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,p=[],y=null,g=!1,m=null,f=null,S=null,_=null,v=null,I=null,A=null,R=new Lt(0,0,0),B=0,w=!1,M=null,P=null,W=null,O=null,V=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,k=0,L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(L)[1]),H=k>=1):L.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),H=k>=2);let $=null,j={},pt=s.getParameter(s.SCISSOR_BOX),wt=s.getParameter(s.VIEWPORT),rt=new ie().fromArray(pt),J=new ie().fromArray(wt);function nt(N,lt,Z,tt){let ft=new Uint8Array(4),ut=s.createTexture();s.bindTexture(N,ut),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Z;Nt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(lt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ut}let mt={};mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(gs),Gt(!1),qt(Ll),ot(s.CULL_FACE),U(di);function ot(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Et(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,lt){return d[N]!==lt?(s.bindFramebuffer(N,lt),d[N]=lt,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ht(N,lt){let Z=p,tt=!1;if(N){Z=u.get(lt),Z===void 0&&(Z=[],u.set(lt,Z));let ft=N.textures;if(Z.length!==ft.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)Z[ut]=s.COLOR_ATTACHMENT0+ut;Z.length=ft.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function de(N){return y!==N?(s.useProgram(N),y=N,!0):!1}let Yt={[Ii]:s.FUNC_ADD,[$u]:s.FUNC_SUBTRACT,[ju]:s.FUNC_REVERSE_SUBTRACT};Yt[Ju]=s.MIN,Yt[Qu]=s.MAX;let me={[Ku]:s.ZERO,[td]:s.ONE,[ed]:s.SRC_COLOR,[Ca]:s.SRC_ALPHA,[ad]:s.SRC_ALPHA_SATURATE,[rd]:s.DST_COLOR,[id]:s.DST_ALPHA,[nd]:s.ONE_MINUS_SRC_COLOR,[Ra]:s.ONE_MINUS_SRC_ALPHA,[od]:s.ONE_MINUS_DST_COLOR,[sd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[hd]:s.CONSTANT_ALPHA,[ud]:s.ONE_MINUS_CONSTANT_ALPHA};function U(N,lt,Z,tt,ft,ut,Nt,pe,Ce,te){if(N===di){g===!0&&(Et(s.BLEND),g=!1);return}if(g===!1&&(ot(s.BLEND),g=!0),N!==Zu){if(N!==m||te!==w){if((f!==Ii||v!==Ii)&&(s.blendEquation(s.FUNC_ADD),f=Ii,v=Ii),te)switch(N){case ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFunc(s.ONE,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,_=null,I=null,A=null,R.set(0,0,0),B=0,m=N,w=te}return}ft=ft||lt,ut=ut||Z,Nt=Nt||tt,(lt!==f||ft!==v)&&(s.blendEquationSeparate(Yt[lt],Yt[ft]),f=lt,v=ft),(Z!==S||tt!==_||ut!==I||Nt!==A)&&(s.blendFuncSeparate(me[Z],me[tt],me[ut],me[Nt]),S=Z,_=tt,I=ut,A=Nt),(pe.equals(R)===!1||Ce!==B)&&(s.blendColor(pe.r,pe.g,pe.b,Ce),R.copy(pe),B=Ce),m=N,w=!1}function je(N,lt){N.side===zn?Et(s.CULL_FACE):ot(s.CULL_FACE);let Z=N.side===Be;lt&&(Z=!Z),Gt(Z),N.blending===ds&&N.transparent===!1?U(di):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function qt(N){N!==Xu?(ot(s.CULL_FACE),N!==P&&(N===Ll?s.cullFace(s.BACK):N===Yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),P=N}function Tt(N){N!==W&&(H&&s.lineWidth(N),W=N)}function ae(N,lt,Z){N?(ot(s.POLYGON_OFFSET_FILL),(O!==lt||V!==Z)&&(s.polygonOffset(lt,Z),O=lt,V=Z)):Et(s.POLYGON_OFFSET_FILL)}function At(N){N?ot(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function C(N){N===void 0&&(N=s.TEXTURE0+G-1),$!==N&&(s.activeTexture(N),$=N)}function b(N,lt,Z){Z===void 0&&($===null?Z=s.TEXTURE0+G-1:Z=$);let tt=j[Z];tt===void 0&&(tt={type:void 0,texture:void 0},j[Z]=tt),(tt.type!==N||tt.texture!==lt)&&($!==Z&&(s.activeTexture(Z),$=Z),s.bindTexture(N,lt||mt[N]),tt.type=N,tt.texture=lt)}function q(){let N=j[$];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(N){rt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function xt(N){J.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function Xt(N,lt){let Z=l.get(lt);Z===void 0&&(Z=new WeakMap,l.set(lt,Z));let tt=Z.get(N);tt===void 0&&(tt=s.getUniformBlockIndex(lt,N.name),Z.set(N,tt))}function Vt(N,lt){let tt=l.get(lt).get(N);c.get(lt)!==tt&&(s.uniformBlockBinding(lt,tt,N.__bindingPointIndex),c.set(lt,tt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,j={},d={},u=new WeakMap,p=[],y=null,g=!1,m=null,f=null,S=null,_=null,v=null,I=null,A=null,R=new Lt(0,0,0),B=0,w=!1,M=null,P=null,W=null,O=null,V=null,rt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Et,bindFramebuffer:Bt,drawBuffers:Ht,useProgram:de,setBlending:U,setMaterial:je,setFlipSided:Gt,setCullFace:qt,setLineWidth:Tt,setPolygonOffset:ae,setScissorTest:At,activeTexture:C,bindTexture:b,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:yt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Vt,texStorage2D:Zt,texStorage3D:it,texSubImage2D:Q,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Rt,viewport:xt,reset:re}}function Bh(s,t,e,n){let i=b0(n);switch(e){case Zh:return s*t;case jh:return s*t;case Jh:return s*t*2;case Qc:return s*t/i.components*i.byteLength;case Kc:return s*t/i.components*i.byteLength;case Qh:return s*t*2/i.components*i.byteLength;case tl:return s*t*2/i.components*i.byteLength;case $h:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case el:return s*t*4/i.components*i.byteLength;case Gr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(s,16)*Math.max(t,8)/4;case ka:case Wa:return Math.max(s,8)*Math.max(t,8)/2;case qa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zr:case cc:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kh:case hc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(s){switch(s){case Wn:case qh:return{byteLength:1,components:1};case Ys:case Xh:case Ks:return{byteLength:2,components:1};case jc:case Jc:return{byteLength:2,components:4};case Di:case $c:case Mn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function M0(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return p?new OffscreenCanvas(C,b):Jr("canvas")}function g(C,b,q){let K=1,et=At(C);if((et.width>q||et.height>q)&&(K=q/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Q=Math.floor(K*et.width),Mt=Math.floor(K*et.height);d===void 0&&(d=y(Q,Mt));let ht=b?y(Q,Mt):d;return ht.width=Q,ht.height=Mt,ht.getContext("2d").drawImage(C,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Mt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,b,q,K,et=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=b;if(b===s.RED&&(q===s.FLOAT&&(Q=s.R32F),q===s.HALF_FLOAT&&(Q=s.R16F),q===s.UNSIGNED_BYTE&&(Q=s.R8)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.R8UI),q===s.UNSIGNED_SHORT&&(Q=s.R16UI),q===s.UNSIGNED_INT&&(Q=s.R32UI),q===s.BYTE&&(Q=s.R8I),q===s.SHORT&&(Q=s.R16I),q===s.INT&&(Q=s.R32I)),b===s.RG&&(q===s.FLOAT&&(Q=s.RG32F),q===s.HALF_FLOAT&&(Q=s.RG16F),q===s.UNSIGNED_BYTE&&(Q=s.RG8)),b===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RG8UI),q===s.UNSIGNED_SHORT&&(Q=s.RG16UI),q===s.UNSIGNED_INT&&(Q=s.RG32UI),q===s.BYTE&&(Q=s.RG8I),q===s.SHORT&&(Q=s.RG16I),q===s.INT&&(Q=s.RG32I)),b===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),q===s.UNSIGNED_INT&&(Q=s.RGB32UI),q===s.BYTE&&(Q=s.RGB8I),q===s.SHORT&&(Q=s.RGB16I),q===s.INT&&(Q=s.RGB32I)),b===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),q===s.UNSIGNED_INT&&(Q=s.RGBA32UI),q===s.BYTE&&(Q=s.RGBA8I),q===s.SHORT&&(Q=s.RGBA16I),q===s.INT&&(Q=s.RGBA32I)),b===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),b===s.RGBA){let Mt=et?bo:$t.getTransfer(K);q===s.FLOAT&&(Q=s.RGBA32F),q===s.HALF_FLOAT&&(Q=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Q=Mt===ne?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,b){let q;return C?b===null||b===Di||b===vs?q=s.DEPTH24_STENCIL8:b===Mn?q=s.DEPTH32F_STENCIL8:b===Ys&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===vs?q=s.DEPTH_COMPONENT24:b===Mn?q=s.DEPTH_COMPONENT32F:b===Ys&&(q=s.DEPTH_COMPONENT16),q}function I(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==bn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),B(b),b.isVideoTexture&&h.delete(b)}function R(C){let b=C.target;b.removeEventListener("dispose",R),M(b)}function B(C){let b=n.get(C);if(b.__webglInit===void 0)return;let q=C.source,K=u.get(q);if(K){let et=K[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(C),Object.keys(K).length===0&&u.delete(q)}n.remove(C)}function w(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let q=C.source,K=u.get(q);delete K[b.__cacheKey],o.memory.textures--}function M(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let et=0;et<b.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(b.__webglFramebuffer[K][et]);else s.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)s.deleteFramebuffer(b.__webglFramebuffer[K]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=C.textures;for(let K=0,et=q.length;K<et;K++){let Q=n.get(q[K]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(C)}let P=0;function W(){P=0}function O(){let C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function G(C,b){let q=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,C,b);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function H(C,b){let q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function k(C,b){let q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,b);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function L(C,b){let q=n.get(C);if(C.version>0&&q.__version!==C.version){nt(q,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}let $={[Va]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[za]:s.MIRRORED_REPEAT},j={[Ye]:s.NEAREST,[_d]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[jo]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},pt={[wd]:s.NEVER,[Pd]:s.ALWAYS,[Ed]:s.LESS,[eu]:s.LEQUAL,[Ad]:s.EQUAL,[Rd]:s.GEQUAL,[Td]:s.GREATER,[Cd]:s.NOTEQUAL};function wt(C,b){if(b.type===Mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===bn||b.magFilter===jo||b.magFilter===vr||b.magFilter===Fi||b.minFilter===bn||b.minFilter===jo||b.minFilter===vr||b.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,j[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ye||b.minFilter!==vr&&b.minFilter!==Fi||b.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function rt(C,b){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,et=u.get(K);et===void 0&&(et={},u.set(K,et));let Q=V(b);if(Q!==C.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[Q].usedTimes++;let Mt=et[C.__cacheKey];Mt!==void 0&&(et[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(b)),C.__cacheKey=Q,C.__webglTexture=et[Q].texture}return q}function J(C,b,q){let K=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=s.TEXTURE_3D);let et=rt(C,b),Q=b.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+q);let Mt=n.get(Q);if(Q.version!==Mt.__version||et===!0){e.activeTexture(s.TEXTURE0+q);let ht=$t.getPrimaries($t.workingColorSpace),gt=b.colorSpace===hi?null:$t.getPrimaries(b.colorSpace),Zt=b.colorSpace===hi||ht===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let it=g(b.image,!1,i.maxTextureSize);it=ae(b,it);let yt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type),Rt=_(b.internalFormat,yt,Ct,b.colorSpace,b.isVideoTexture);wt(K,b);let xt,Xt=b.mipmaps,Vt=b.isVideoTexture!==!0,re=Mt.__version===void 0||et===!0,N=Q.dataReady,lt=I(b,it);if(b.isDepthTexture)Rt=v(b.format===_s,b.type),re&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Rt,it.width,it.height,0,yt,Ct,null));else if(b.isDataTexture)if(Xt.length>0){Vt&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Rt,Xt[0].width,Xt[0].height);for(let Z=0,tt=Xt.length;Z<tt;Z++)xt=Xt[Z],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,Z,Rt,xt.width,xt.height,0,yt,Ct,xt.data);b.generateMipmaps=!1}else Vt?(re&&e.texStorage2D(s.TEXTURE_2D,lt,Rt,it.width,it.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,yt,Ct,it.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,it.width,it.height,0,yt,Ct,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Rt,Xt[0].width,Xt[0].height,it.depth);for(let Z=0,tt=Xt.length;Z<tt;Z++)if(xt=Xt[Z],b.format!==hn)if(yt!==null)if(Vt){if(N)if(b.layerUpdates.size>0){let ft=Bh(xt.width,xt.height,b.format,b.type);for(let ut of b.layerUpdates){let Nt=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,ut,xt.width,xt.height,1,yt,Nt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,yt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Rt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,yt,Ct,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Rt,xt.width,xt.height,it.depth,0,yt,Ct,xt.data)}else{Vt&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Rt,Xt[0].width,Xt[0].height);for(let Z=0,tt=Xt.length;Z<tt;Z++)xt=Xt[Z],b.format!==hn?yt!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Rt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,Z,Rt,xt.width,xt.height,0,yt,Ct,xt.data)}else if(b.isDataArrayTexture)if(Vt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Rt,it.width,it.height,it.depth),N)if(b.layerUpdates.size>0){let Z=Bh(it.width,it.height,b.format,b.type);for(let tt of b.layerUpdates){let ft=it.data.subarray(tt*Z/it.data.BYTES_PER_ELEMENT,(tt+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,yt,Ct,ft)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Ct,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,yt,Ct,it.data);else if(b.isData3DTexture)Vt?(re&&e.texStorage3D(s.TEXTURE_3D,lt,Rt,it.width,it.height,it.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Ct,it.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,yt,Ct,it.data);else if(b.isFramebufferTexture){if(re)if(Vt)e.texStorage2D(s.TEXTURE_2D,lt,Rt,it.width,it.height);else{let Z=it.width,tt=it.height;for(let ft=0;ft<lt;ft++)e.texImage2D(s.TEXTURE_2D,ft,Rt,Z,tt,0,yt,Ct,null),Z>>=1,tt>>=1}}else if(Xt.length>0){if(Vt&&re){let Z=At(Xt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Rt,Z.width,Z.height)}for(let Z=0,tt=Xt.length;Z<tt;Z++)xt=Xt[Z],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,yt,Ct,xt):e.texImage2D(s.TEXTURE_2D,Z,Rt,yt,Ct,xt);b.generateMipmaps=!1}else if(Vt){if(re){let Z=At(it);e.texStorage2D(s.TEXTURE_2D,lt,Rt,Z.width,Z.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Ct,it)}else e.texImage2D(s.TEXTURE_2D,0,Rt,yt,Ct,it);m(b)&&f(K),Mt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function nt(C,b,q){if(b.image.length!==6)return;let K=rt(C,b),et=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);let Q=n.get(et);if(et.version!==Q.__version||K===!0){e.activeTexture(s.TEXTURE0+q);let Mt=$t.getPrimaries($t.workingColorSpace),ht=b.colorSpace===hi?null:$t.getPrimaries(b.colorSpace),gt=b.colorSpace===hi||Mt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Zt&&!it?yt[tt]=g(b.image[tt],!0,i.maxCubemapSize):yt[tt]=it?b.image[tt].image:b.image[tt],yt[tt]=ae(b,yt[tt]);let Ct=yt[0],Rt=r.convert(b.format,b.colorSpace),xt=r.convert(b.type),Xt=_(b.internalFormat,Rt,xt,b.colorSpace),Vt=b.isVideoTexture!==!0,re=Q.__version===void 0||K===!0,N=et.dataReady,lt=I(b,Ct);wt(s.TEXTURE_CUBE_MAP,b);let Z;if(Zt){Vt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Xt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){Z=yt[tt].mipmaps;for(let ft=0;ft<Z.length;ft++){let ut=Z[ft];b.format!==hn?Rt!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Rt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Rt,xt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,ut.width,ut.height,0,Rt,xt,ut.data)}}}else{if(Z=b.mipmaps,Vt&&re){Z.length>0&&lt++;let tt=At(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Rt,xt,yt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,yt[tt].width,yt[tt].height,0,Rt,xt,yt[tt].data);for(let ft=0;ft<Z.length;ft++){let Nt=Z[ft].image[tt].image;Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Nt.width,Nt.height,Rt,xt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,Nt.width,Nt.height,0,Rt,xt,Nt.data)}}else{Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt,xt,yt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Rt,xt,yt[tt]);for(let ft=0;ft<Z.length;ft++){let ut=Z[ft];Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Rt,xt,ut.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,Rt,xt,ut.image[tt])}}}m(b)&&f(s.TEXTURE_CUBE_MAP),Q.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function mt(C,b,q,K,et,Q){let Mt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),gt=_(q.internalFormat,Mt,ht,q.colorSpace),Zt=n.get(b),it=n.get(q);if(it.__renderTarget=b,!Zt.__hasExternalTextures){let yt=Math.max(1,b.width>>Q),Ct=Math.max(1,b.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,gt,yt,Ct,b.depth,0,Mt,ht,null):e.texImage2D(et,Q,gt,yt,Ct,0,Mt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,it.__webglTexture,0,Gt(b)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,it.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let K=b.depthTexture,et=K&&K.isDepthTexture?K.type:null,Q=v(b.stencilBuffer,et),Mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Gt(b);qt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Q,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,C)}else{let K=b.textures;for(let et=0;et<K.length;et++){let Q=K[et],Mt=r.convert(Q.format,Q.colorSpace),ht=r.convert(Q.type),gt=_(Q.internalFormat,Mt,ht,Q.colorSpace),Zt=Gt(b);q&&qt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,gt,b.width,b.height):qt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let et=K.__webglTexture,Q=Gt(b);if(b.depthTexture.format===fs)qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(b.depthTexture.format===_s)qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(C){let b=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,C)}else if(q){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(b.__webglDepthbuffer[K],C,!1);else{let et=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ot(b.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(C,b,q){let K=n.get(C);b!==void 0&&mt(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Bt(C)}function de(C){let b=C.texture,q=n.get(C),K=n.get(b);C.addEventListener("dispose",R);let et=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=b.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let gt=0;gt<b.mipmaps.length;gt++)q.__webglFramebuffer[ht][gt]=s.createFramebuffer()}else q.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)q.__webglFramebuffer[ht]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ht=0,gt=et.length;ht<gt;ht++){let Zt=n.get(et[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let gt=et[ht];q.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);let Zt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),yt=_(gt.internalFormat,Zt,it,gt.colorSpace,C.isXRRenderTarget===!0),Ct=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),wt(s.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)mt(q.__webglFramebuffer[ht][gt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else mt(q.__webglFramebuffer[ht],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,gt=et.length;ht<gt;ht++){let Zt=et[ht],it=n.get(Zt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),wt(s.TEXTURE_2D,Zt),mt(q.__webglFramebuffer,C,Zt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Zt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),wt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)mt(q.__webglFramebuffer[gt],C,b,s.COLOR_ATTACHMENT0,ht,gt);else mt(q.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ht,0);m(b)&&f(ht),e.unbindTexture()}C.depthBuffer&&Bt(C)}function Yt(C){let b=C.textures;for(let q=0,K=b.length;q<K;q++){let et=b[q];if(m(et)){let Q=S(C),Mt=n.get(et).__webglTexture;e.bindTexture(Q,Mt),f(Q),e.unbindTexture()}}}let me=[],U=[];function je(C){if(C.samples>0){if(qt(C)===!1){let b=C.textures,q=C.width,K=C.height,et=s.COLOR_BUFFER_BIT,Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(C),ht=b.length>1;if(ht)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let Zt=n.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,q,K,0,0,q,K,et,s.NEAREST),c===!0&&(me.length=0,U.length=0,me.push(s.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push(Q),U.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let Zt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ae(C,b){let q=C.colorSpace,K=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Es&&q!==hi&&($t.getTransfer(q)===ne?(K!==hn||et!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function At(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=L,this.rebindTextures=Ht,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=qt}function S0(s,t){function e(n,i=hi){let r,o=$t.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return s.BYTE;if(n===Xh)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Ks)return s.HALF_FLOAT;if(n===Zh)return s.ALPHA;if(n===$h)return s.RGB;if(n===hn)return s.RGBA;if(n===jh)return s.LUMINANCE;if(n===Jh)return s.LUMINANCE_ALPHA;if(n===fs)return s.DEPTH_COMPONENT;if(n===_s)return s.DEPTH_STENCIL;if(n===Qc)return s.RED;if(n===Kc)return s.RED_INTEGER;if(n===Qh)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===el)return s.RGBA_INTEGER;if(n===Gr||n===qr||n===Xr||n===Yr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ha||n===Wa||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Xa)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===$a||n===ja||n===Ja||n===Qa||n===Ka||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===cc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===hc||n===uc||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Cc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ui=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,y=.005;l.inputState.pinching&&u>p+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},E0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ze,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:E0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends mi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,y=null,g=new Rc,m=e.getContextAttributes(),f=null,S=null,_=[],v=[],I=new jt,A=null,R=new Ie;R.viewport=new ie;let B=new Ie;B.viewport=new ie;let w=[R,B],M=new Cc,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=_[J];return nt===void 0&&(nt=new Xs,_[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=_[J];return nt===void 0&&(nt=new Xs,_[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=_[J];return nt===void 0&&(nt=new Xs,_[J]=nt),nt.getHandSpace()};function O(J){let nt=v.indexOf(J.inputSource);if(nt===-1)return;let mt=_[nt];mt!==void 0&&(mt.update(J.inputSource,J.frame,l||o),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",G);for(let J=0;J<_.length;J++){let nt=v[J];nt!==null&&(v[J]=null,_[J].disconnect(nt))}P=null,W=null,g.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,S=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Gn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,mt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?_s:fs,mt=m.stencil?vs:Di);let Et={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Et),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Gn(u.textureWidth,u.textureHeight,{format:hn,type:Wn,depthTexture:new oo(u.textureWidth,u.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(J){for(let nt=0;nt<J.removed.length;nt++){let mt=J.removed[nt],ot=v.indexOf(mt);ot>=0&&(v[ot]=null,_[ot].disconnect(mt))}for(let nt=0;nt<J.added.length;nt++){let mt=J.added[nt],ot=v.indexOf(mt);if(ot===-1){for(let Bt=0;Bt<_.length;Bt++)if(Bt>=v.length){v.push(mt),ot=Bt;break}else if(v[Bt]===null){v[Bt]=mt,ot=Bt;break}if(ot===-1)break}let Et=_[ot];Et&&Et.connect(mt)}}let H=new z,k=new z;function L(J,nt,mt){H.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(mt.matrixWorld);let ot=H.distanceTo(k),Et=nt.projectionMatrix.elements,Bt=mt.projectionMatrix.elements,Ht=Et[14]/(Et[10]-1),de=Et[14]/(Et[10]+1),Yt=(Et[9]+1)/Et[5],me=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],je=(Bt[8]+1)/Bt[0],Gt=Ht*U,qt=Ht*je,Tt=ot/(-U+je),ae=Tt*-U;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ae),J.translateZ(Tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Et[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let At=Ht+Tt,C=de+Tt,b=Gt-ae,q=qt+(ot-ae),K=Yt*de/C*At,et=me*de/C*At;J.projectionMatrix.makePerspective(b,q,K,et,At,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,mt=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),M.near=B.near=R.near=nt,M.far=B.far=R.far=mt,(P!==M.near||W!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),R.layers.mask=J.layers.mask|2,B.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|B.layers.mask;let ot=J.parent,Et=M.cameras;$(M,ot);for(let Bt=0;Bt<Et.length;Bt++)$(Et[Bt],ot);Et.length===2?L(M,R,B):M.projectionMatrix.copy(R.projectionMatrix),j(J,M,ot)};function j(J,nt,mt){mt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let pt=null;function wt(J,nt){if(h=nt.getViewerPose(l||o),y=nt,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Bt=0;Bt<mt.length;Bt++){let Ht=mt[Bt],de=null;if(p!==null)de=p.getViewport(Ht);else{let me=d.getViewSubImage(u,Ht);de=me.viewport,Bt===0&&(t.setRenderTargetTextures(S,me.colorTexture,u.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(S))}let Yt=w[Bt];Yt===void 0&&(Yt=new Ie,Yt.layers.enable(Bt),Yt.viewport=new ie,w[Bt]=Yt),Yt.matrix.fromArray(Ht.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ht.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(de.x,de.y,de.width,de.height),Bt===0&&(M.matrix.copy(Yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Yt)}let Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Bt=d.getDepthInformation(mt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(t,Bt,i.renderState)}}for(let mt=0;mt<_.length;mt++){let ot=v[mt],Et=_[mt];ot!==null&&Et!==void 0&&Et.update(ot,nt,l||o)}pt&&pt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),y=null}let rt=new ru;rt.setAnimationLoop(wt),this.setAnimationLoop=function(J){pt=J},this.dispose=function(){}}},Ri=new Sn,T0=new ee;function C0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,su(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),y(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Ri)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function R0(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function l(S,_){let v=i[S.id];v===void 0&&(y(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(S,I);let A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){let _=d();S.__bindingPointIndex=_;let v=s.createBuffer(),I=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let _=i[S.id],v=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,R=v.length;A<R;A++){let B=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,M=B.length;w<M;w++){let P=B[w];if(p(P,A,w,I)===!0){let W=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],V=0;for(let G=0;G<O.length;G++){let H=O[G],k=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,_,v,I){let A=S.value,R=_+"_"+v;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let B=I[R];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return I[R]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function y(S){let _=S.uniforms,v=0,I=16;for(let R=0,B=_.length;R<B;R++){let w=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,P=w.length;M<P;M++){let W=w[M],O=Array.isArray(W.value)?W.value:[W.value];for(let V=0,G=O.length;V<G;V++){let H=O[V],k=g(H),L=v%I,$=L%k.boundary,j=L+$;v+=$,j!==0&&I-j<k.storage&&(v+=I-j),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=k.storage}}}let A=v%I;return A>0&&(v+=I-A),S.__size=v,S.__cache={},this}function g(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}var ao=class{constructor(t={}){let{canvas:e=Bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=fi,this.toneMappingExposure=1;let v=this,I=!1,A=0,R=0,B=null,w=-1,M=null,P=new ie,W=new ie,O=null,V=new Lt(0),G=0,H=e.width,k=e.height,L=1,$=null,j=null,pt=new ie(0,0,H,k),wt=new ie(0,0,H,k),rt=!1,J=new js,nt=!1,mt=!1,ot=new ee,Et=new ee,Bt=new z,Ht=new ie,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function me(){return B===null?L:1}let U=n;function je(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){let F="webgl2";if(U=je(F,E),U===null)throw je(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,qt,Tt,ae,At,C,b,q,K,et,Q,Mt,ht,gt,Zt,it,yt,Ct,Rt,xt,Xt,Vt,re,N;function lt(){Gt=new qm(U),Gt.init(),Vt=new S0(U,Gt),qt=new Vm(U,Gt,t,Vt),Tt=new _0(U,Gt),qt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ae=new Zm(U),At=new a0,C=new M0(U,Gt,Tt,At,qt,Vt,ae),b=new km(v),q=new Gm(v),K=new tf(U),re=new Um(U,K),et=new Xm(U,K,ae,re),Q=new jm(U,et,K,ae),Rt=new $m(U,qt,C),it=new zm(At),Mt=new o0(v,b,q,Gt,qt,re,it),ht=new C0(v,At),gt=new l0,Zt=new m0(Gt),Ct=new Dm(v,b,q,Tt,Q,p,c),yt=new x0(v,Q,qt),N=new R0(U,ae,qt,Tt),xt=new Om(U,Gt,ae),Xt=new Ym(U,Gt,ae),ae.programs=Mt.programs,v.capabilities=qt,v.extensions=Gt,v.properties=At,v.renderLists=gt,v.shadowMap=yt,v.state=Tt,v.info=ae}lt();let Z=new Pc(v,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(H,k,!1))},this.getSize=function(E){return E.set(H,k)},this.setSize=function(E,F,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,k=F,e.width=Math.floor(E*L),e.height=Math.floor(F*L),X===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*L,k*L).floor()},this.setDrawingBufferSize=function(E,F,X){H=E,k=F,L=X,e.width=Math.floor(E*X),e.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,F,X,Y){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,F,X,Y),Tt.viewport(P.copy(pt).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,F,X,Y){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,F,X,Y),Tt.scissor(W.copy(wt).multiplyScalar(L).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){Tt.setScissorTest(rt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,F=!0,X=!0){let Y=0;if(E){let D=!1;if(B!==null){let st=B.texture.format;D=st===el||st===tl||st===Kc}if(D){let st=B.texture.type,dt=st===Wn||st===Di||st===Ys||st===vs||st===jc||st===Jc,vt=Ct.getClearColor(),_t=Ct.getClearAlpha(),Pt=vt.r,Ft=vt.g,bt=vt.b;dt?(y[0]=Pt,y[1]=Ft,y[2]=bt,y[3]=_t,U.clearBufferuiv(U.COLOR,0,y)):(g[0]=Pt,g[1]=Ft,g[2]=bt,g[3]=_t,U.clearBufferiv(U.COLOR,0,g))}else Y|=U.COLOR_BUFFER_BIT}F&&(Y|=U.DEPTH_BUFFER_BIT),X&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Zt.dispose(),At.dispose(),b.dispose(),q.dispose(),Q.dispose(),re.dispose(),N.dispose(),Mt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",El),Z.removeEventListener("sessionend",Al),Si.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=ae.autoReset,F=yt.enabled,X=yt.autoUpdate,Y=yt.needsUpdate,D=yt.type;lt(),ae.autoReset=E,yt.enabled=F,yt.autoUpdate=X,yt.needsUpdate=Y,yt.type=D}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nt(E){let F=E.target;F.removeEventListener("dispose",Nt),pe(F)}function pe(E){Ce(E),At.remove(E)}function Ce(E){let F=At.get(E).programs;F!==void 0&&(F.forEach(function(X){Mt.releaseProgram(X)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,Y,D,st){F===null&&(F=de);let dt=D.isMesh&&D.matrixWorld.determinant()<0,vt=ku(E,F,X,Y,D);Tt.setMaterial(Y,dt);let _t=X.index,Pt=1;if(Y.wireframe===!0){if(_t=et.getWireframeAttribute(X),_t===void 0)return;Pt=2}let Ft=X.drawRange,bt=X.attributes.position,Jt=Ft.start*Pt,oe=(Ft.start+Ft.count)*Pt;st!==null&&(Jt=Math.max(Jt,st.start*Pt),oe=Math.min(oe,(st.start+st.count)*Pt)),_t!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,_t.count)):bt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,bt.count));let ce=oe-Jt;if(ce<0||ce===1/0)return;re.setup(D,Y,vt,X,_t);let Oe,Qt=xt;if(_t!==null&&(Oe=K.get(_t),Qt=Xt,Qt.setIndex(Oe)),D.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*me()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(D.isLine){let St=Y.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*me()),D.isLineSegments?Qt.setMode(U.LINES):D.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else D.isPoints?Qt.setMode(U.POINTS):D.isSprite&&Qt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Qt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let St=D._multiDrawStarts,Bn=D._multiDrawCounts,Kt=D._multiDrawCount,on=_t?K.get(_t).bytesPerElement:1,$i=At.get(Y).currentProgram.getUniforms();for(let Ge=0;Ge<Kt;Ge++)$i.setValue(U,"_gl_DrawID",Ge),Qt.render(St[Ge]/on,Bn[Ge])}else if(D.isInstancedMesh)Qt.renderInstances(Jt,ce,D.count);else if(X.isInstancedBufferGeometry){let St=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bn=Math.min(X.instanceCount,St);Qt.renderInstances(Jt,ce,Bn)}else Qt.render(Jt,ce)};function te(E,F,X){E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,xr(E,F,X),E.side=pi,E.needsUpdate=!0,xr(E,F,X),E.side=zn):xr(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),f=Zt.get(X),f.init(F),_.push(f),X.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),E!==X&&E.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let Y=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let st=D.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let vt=st[dt];te(vt,X,D),Y.add(vt)}else te(st,X,D),Y.add(st)}),_.pop(),f=null,Y},this.compileAsync=function(E,F,X=null){let Y=this.compile(E,F,X);return new Promise(D=>{function st(){if(Y.forEach(function(dt){At.get(dt).currentProgram.isReady()&&Y.delete(dt)}),Y.size===0){D(E);return}setTimeout(st,10)}Gt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let rn=null;function In(E){rn&&rn(E)}function El(){Si.stop()}function Al(){Si.start()}let Si=new ru;Si.setAnimationLoop(In),typeof self!="undefined"&&Si.setContext(self),this.setAnimationLoop=function(E){rn=E,Z.setAnimationLoop(E),E===null?Si.stop():Si.start()},Z.addEventListener("sessionstart",El),Z.addEventListener("sessionend",Al),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,B),f=Zt.get(E,_.length),f.init(F),_.push(f),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,mt),m=gt.get(E,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&$o(st,F,-1/0,v.sortObjects)}$o(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,j),Yt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Yt&&Ct.addToRenderList(m,E),this.info.render.frame++,nt===!0&&it.beginShadows();let X=f.state.shadowsArray;yt.render(X,E,F),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,D=m.transmissive;if(f.setupLights(),F.isArrayCamera){let st=F.cameras;if(D.length>0)for(let dt=0,vt=st.length;dt<vt;dt++){let _t=st[dt];Cl(Y,D,E,_t)}Yt&&Ct.render(E);for(let dt=0,vt=st.length;dt<vt;dt++){let _t=st[dt];Tl(m,E,_t,_t.viewport)}}else D.length>0&&Cl(Y,D,E,F),Yt&&Ct.render(E),Tl(m,E,F);B!==null&&(C.updateMultisampleRenderTarget(B),C.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(v,E,F),re.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(f=_[_.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function $o(E,F,X,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){Y&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);let dt=Q.update(E),vt=E.material;vt.visible&&m.push(E,dt,vt,X,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let dt=Q.update(E),vt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ht.copy(dt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(vt)){let _t=dt.groups;for(let Pt=0,Ft=_t.length;Pt<Ft;Pt++){let bt=_t[Pt],Jt=vt[bt.materialIndex];Jt&&Jt.visible&&m.push(E,dt,Jt,X,Ht.z,bt)}}else vt.visible&&m.push(E,dt,vt,X,Ht.z,null)}}let st=E.children;for(let dt=0,vt=st.length;dt<vt;dt++)$o(st[dt],F,X,Y)}function Tl(E,F,X,Y){let D=E.opaque,st=E.transmissive,dt=E.transparent;f.setupLightsView(X),nt===!0&&it.setGlobalState(v.clippingPlanes,X),Y&&Tt.viewport(P.copy(Y)),D.length>0&&yr(D,F,X),st.length>0&&yr(st,F,X),dt.length>0&&yr(dt,F,X),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Cl(E,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Gn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ks:Wn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let st=f.state.transmissionRenderTarget[Y.id],dt=Y.viewport||P;st.setSize(dt.z,dt.w);let vt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(V),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&Ct.render(X);let _t=v.toneMapping;v.toneMapping=fi;let Pt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),nt===!0&&it.setGlobalState(v.clippingPlanes,Y),yr(E,X,Y),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,Jt=F.length;bt<Jt;bt++){let oe=F[bt],ce=oe.object,Oe=oe.geometry,Qt=oe.material,St=oe.group;if(Qt.side===zn&&ce.layers.test(Y.layers)){let Bn=Qt.side;Qt.side=Be,Qt.needsUpdate=!0,Rl(ce,X,Y,Oe,Qt,St),Qt.side=Bn,Qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}v.setRenderTarget(vt),v.setClearColor(V,G),Pt!==void 0&&(Y.viewport=Pt),v.toneMapping=_t}function yr(E,F,X){let Y=F.isScene===!0?F.overrideMaterial:null;for(let D=0,st=E.length;D<st;D++){let dt=E[D],vt=dt.object,_t=dt.geometry,Pt=Y===null?dt.material:Y,Ft=dt.group;vt.layers.test(X.layers)&&Rl(vt,F,X,_t,Pt,Ft)}}function Rl(E,F,X,Y,D,st){E.onBeforeRender(v,F,X,Y,D,st),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(v,F,X,Y,E,st),D.transparent===!0&&D.side===zn&&D.forceSinglePass===!1?(D.side=Be,D.needsUpdate=!0,v.renderBufferDirect(X,F,Y,D,E,st),D.side=pi,D.needsUpdate=!0,v.renderBufferDirect(X,F,Y,D,E,st),D.side=zn):v.renderBufferDirect(X,F,Y,D,E,st),E.onAfterRender(v,F,X,Y,D,st)}function xr(E,F,X){F.isScene!==!0&&(F=de);let Y=At.get(E),D=f.state.lights,st=f.state.shadowsArray,dt=D.state.version,vt=Mt.getParameters(E,D.state,st,F,X),_t=Mt.getProgramCacheKey(vt),Pt=Y.programs;Y.environment=E.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(E.isMeshStandardMaterial?q:b).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Nt),Pt=new Map,Y.programs=Pt);let Ft=Pt.get(_t);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===dt)return Il(E,vt),Ft}else vt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(vt,v),Ft=Mt.acquireProgram(vt,_t),Pt.set(_t,Ft),Y.uniforms=vt.uniforms;let bt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=it.uniform),Il(E,vt),Y.needsLights=Wu(E),Y.lightsStateVersion=dt,Y.needsLights&&(bt.ambientLightColor.value=D.state.ambient,bt.lightProbe.value=D.state.probe,bt.directionalLights.value=D.state.directional,bt.directionalLightShadows.value=D.state.directionalShadow,bt.spotLights.value=D.state.spot,bt.spotLightShadows.value=D.state.spotShadow,bt.rectAreaLights.value=D.state.rectArea,bt.ltc_1.value=D.state.rectAreaLTC1,bt.ltc_2.value=D.state.rectAreaLTC2,bt.pointLights.value=D.state.point,bt.pointLightShadows.value=D.state.pointShadow,bt.hemisphereLights.value=D.state.hemi,bt.directionalShadowMap.value=D.state.directionalShadowMap,bt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,bt.spotShadowMap.value=D.state.spotShadowMap,bt.spotLightMatrix.value=D.state.spotLightMatrix,bt.spotLightMap.value=D.state.spotLightMap,bt.pointShadowMap.value=D.state.pointShadowMap,bt.pointShadowMatrix.value=D.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Pl(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=ms.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Il(E,F){let X=At.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ku(E,F,X,Y,D){F.isScene!==!0&&(F=de),C.resetTextureUnits();let st=F.fog,dt=Y.isMeshStandardMaterial?F.environment:null,vt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Es,_t=(Y.isMeshStandardMaterial?q:b).get(Y.envMap||dt),Pt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),bt=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color,ce=fi;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ce=v.toneMapping);let Oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=Oe!==void 0?Oe.length:0,St=At.get(Y),Bn=f.state.lights;if(nt===!0&&(mt===!0||E!==M)){let Je=E===M&&Y.id===w;it.setState(Y,E,Je)}let Kt=!1;Y.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Bn.state.version||St.outputColorSpace!==vt||D.isBatchedMesh&&St.batching===!1||!D.isBatchedMesh&&St.batching===!0||D.isBatchedMesh&&St.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&St.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&St.instancing===!1||!D.isInstancedMesh&&St.instancing===!0||D.isSkinnedMesh&&St.skinning===!1||!D.isSkinnedMesh&&St.skinning===!0||D.isInstancedMesh&&St.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&St.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&St.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&St.instancingMorph===!1&&D.morphTexture!==null||St.envMap!==_t||Y.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Ft||St.morphTargets!==bt||St.morphNormals!==Jt||St.morphColors!==oe||St.toneMapping!==ce||St.morphTargetsCount!==Qt)&&(Kt=!0):(Kt=!0,St.__version=Y.version);let on=St.currentProgram;Kt===!0&&(on=xr(Y,F,D));let $i=!1,Ge=!1,Ns=!1,le=on.getUniforms(),vn=St.uniforms;if(Tt.useProgram(on.program)&&($i=!0,Ge=!0,Ns=!0),Y.id!==w&&(w=Y.id,Ge=!0),$i||M!==E){Tt.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),Nd(ot),Fd(ot),le.setValue(U,"projectionMatrix",ot)):le.setValue(U,"projectionMatrix",E.projectionMatrix),le.setValue(U,"viewMatrix",E.matrixWorldInverse);let ni=le.map.cameraPosition;ni!==void 0&&ni.setValue(U,Bt.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&le.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ge=!0,Ns=!0)}if(D.isSkinnedMesh){le.setOptional(U,D,"bindMatrix"),le.setOptional(U,D,"bindMatrixInverse");let Je=D.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),le.setValue(U,"boneTexture",Je.boneTexture,C))}D.isBatchedMesh&&(le.setOptional(U,D,"batchingTexture"),le.setValue(U,"batchingTexture",D._matricesTexture,C),le.setOptional(U,D,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",D._indirectTexture,C),le.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",D._colorsTexture,C));let Fs=X.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&Rt.update(D,X,on),(Ge||St.receiveShadow!==D.receiveShadow)&&(St.receiveShadow=D.receiveShadow,le.setValue(U,"receiveShadow",D.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vn.envMap.value=_t,vn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(vn.envMapIntensity.value=F.environmentIntensity),Ge&&(le.setValue(U,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&Hu(vn,Ns),st&&Y.fog===!0&&ht.refreshFogUniforms(vn,st),ht.refreshMaterialUniforms(vn,Y,L,k,f.state.transmissionRenderTarget[E.id]),ms.upload(U,Pl(St),vn,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ms.upload(U,Pl(St),vn,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&le.setValue(U,"center",D.center),le.setValue(U,"modelViewMatrix",D.modelViewMatrix),le.setValue(U,"normalMatrix",D.normalMatrix),le.setValue(U,"modelMatrix",D.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Je=Y.uniformsGroups;for(let ni=0,ii=Je.length;ni<ii;ni++){let Bl=Je[ni];N.update(Bl,on),N.bind(Bl,on)}}return on}function Hu(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Wu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,F,X){At.get(E.texture).__webglTexture=F,At.get(E.depthTexture).__webglTexture=X;let Y=At.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let X=At.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){B=E,A=F,R=X;let Y=!0,D=null,st=!1,dt=!1;if(E){let _t=At.get(E);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_t.__hasExternalTextures)C.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let bt=E.depthTexture;if(_t.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);let Ft=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?D=Ft[F][X]:D=Ft[F],st=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?D=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?D=Ft[X]:D=Ft,P.copy(E.viewport),W.copy(E.scissor),O=E.scissorTest}else P.copy(pt).multiplyScalar(L).floor(),W.copy(wt).multiplyScalar(L).floor(),O=rt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,D)&&Y&&Tt.drawBuffers(E,D),Tt.viewport(P),Tt.scissor(W),Tt.setScissorTest(O),st){let _t=At.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,X)}else if(dt){let _t=At.get(E.texture),Pt=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,X||0,Pt)}w=-1},this.readRenderTargetPixels=function(E,F,X,Y,D,st,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){Tt.bindFramebuffer(U.FRAMEBUFFER,vt);try{let _t=E.texture,Pt=_t.format,Ft=_t.type;if(!qt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&X>=0&&X<=E.height-D&&U.readPixels(F,X,Y,D,Vt.convert(Pt),Vt.convert(Ft),st)}finally{let _t=B!==null?At.get(B).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,Y,D,st,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){let _t=E.texture,Pt=_t.format,Ft=_t.type;if(!qt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-Y&&X>=0&&X<=E.height-D){Tt.bindFramebuffer(U.FRAMEBUFFER,vt);let bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(F,X,Y,D,Vt.convert(Pt),Vt.convert(Ft),0);let Jt=B!==null?At.get(B).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Jt);let oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ld(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(bt),U.deleteSync(oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,X=0){E.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let Y=Math.pow(2,-X),D=Math.floor(E.image.width*Y),st=Math.floor(E.image.height*Y),dt=F!==null?F.x:0,vt=F!==null?F.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,dt,vt,D,st),Tt.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,Y=null,D=0){E.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],F=arguments[2],D=arguments[3]||0,X=null);let st,dt,vt,_t,Pt,Ft,bt,Jt,oe,ce=E.isCompressedTexture?E.mipmaps[D]:E.image;X!==null?(st=X.max.x-X.min.x,dt=X.max.y-X.min.y,vt=X.isBox3?X.max.z-X.min.z:1,_t=X.min.x,Pt=X.min.y,Ft=X.isBox3?X.min.z:0):(st=ce.width,dt=ce.height,vt=ce.depth||1,_t=0,Pt=0,Ft=0),Y!==null?(bt=Y.x,Jt=Y.y,oe=Y.z):(bt=0,Jt=0,oe=0);let Oe=Vt.convert(F.format),Qt=Vt.convert(F.type),St;F.isData3DTexture?(C.setTexture3D(F,0),St=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),St=U.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Bn=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),on=U.getParameter(U.UNPACK_SKIP_PIXELS),$i=U.getParameter(U.UNPACK_SKIP_ROWS),Ge=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);let Ns=E.isDataArrayTexture||E.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let vn=At.get(E),Fs=At.get(F),Je=At.get(vn.__renderTarget),ni=At.get(Fs.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Je.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<vt;ii++)Ns&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(E).__webglTexture,D,Ft+ii),E.isDepthTexture?(le&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(F).__webglTexture,D,oe+ii),U.blitFramebuffer(_t,Pt,st,dt,bt,Jt,st,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):le?U.copyTexSubImage3D(St,D,bt,Jt,oe+ii,_t,Pt,st,dt):U.copyTexSubImage2D(St,D,bt,Jt,oe+ii,_t,Pt,st,dt);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(St,D,bt,Jt,oe,st,dt,vt,Oe,Qt,ce.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(St,D,bt,Jt,oe,st,dt,vt,Oe,ce.data):U.texSubImage3D(St,D,bt,Jt,oe,st,dt,vt,Oe,Qt,ce):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,bt,Jt,st,dt,Oe,Qt,ce.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,bt,Jt,ce.width,ce.height,Oe,ce.data):U.texSubImage2D(U.TEXTURE_2D,D,bt,Jt,st,dt,Oe,Qt,ce);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,on),U.pixelStorei(U.UNPACK_SKIP_ROWS,$i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge),D===0&&F.generateMipmaps&&U.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,Y=null,D=0){return E.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],F=arguments[3],D=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,X,Y,D)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){A=0,R=0,B=null,Tt.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var co=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lo=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ic=class extends Ze{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ye,h=Ye,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends Te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ee,Lh=new ee,zr=[],Nh=new qn,P0=new ee,ks=new xe,Hs=new gi,uo=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,P0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Nh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Hs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),Lh.multiplyMatrices(n,hs),ks.matrixWorld=Lh,ks.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let c=zr[o];c.instanceId=r,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(i*this.count),i,this.count,Qc,Mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bc=class extends yi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fh=new ee,Lc=new Zs,kr=new gi,Hr=new z,fo=class extends Le{constructor(t=new dn,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Fh.copy(i).invert(),Lc.copy(t.ray).applyMatrix4(Fh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let y=u,g=p;y<g;y++){let m=l.getX(y);Hr.fromBufferAttribute(d,m),Dh(Hr,m,c,i,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=u,g=p;y<g;y++)Hr.fromBufferAttribute(d,y),Dh(Hr,y,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dh(s,t,e,n,i,r,o){let a=Lc.distanceSqToPoint(s);if(a<e){let c=new z;Lc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Js=class s extends dn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new z,u=new z,p=[],y=[],g=[],m=[];for(let f=0;f<=n;f++){let S=[],_=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let A=I/e;d.x=-t*Math.cos(i+A*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+A*r)*Math.sin(o+_*a),y.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(A+v,1-_),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let _=h[f][S+1],v=h[f][S],I=h[f+1][S],A=h[f+1][S+1];(f!==0||o>0)&&p.push(_,v,A),(f!==n-1||c<Math.PI)&&p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new ke(y,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fn=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Wr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function I0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ws=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends ws{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ol:r=t,a=2*e-n;break;case Vl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ol:o=t,c=2*n-e;break;case Vl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,y=(n-e)/(i-e),g=y*y,m=g*y,f=-u*m+2*u*g-u*y,S=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*y+1,_=(-1-p)*m+(1.5+p)*g+.5*y,v=p*m-p*g;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+S*o[l+I]+_*o[c+I]+v*o[d+I];return r}},Fc=class extends ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Dc=class extends ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case fc:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&I0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,p=d+n;for(let y=0;y!==n;++y){let g=e[d+y];if(g!==e[u+y]||g!==e[p+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=fc;var Oi=class extends pn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=$r;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends pn{};Uc.prototype.ValueTypeName="color";var Oc=class extends pn{};Oc.prototype.ValueTypeName="number";var Vc=class extends ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)un.slerpFlat(r,0,o,l-a,o,l,c);return r}},po=class extends pn{InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends pn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=$r;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends pn{};zc.prototype.ValueTypeName="vector";var kc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],y=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}},B0=new kc,Hc=class{constructor(t){this.manager=t!==void 0?t:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mo=class extends Qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Aa=new ee,Uh=new z,Oh=new z,go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vh=new ee,Ws=new z,Ta=new z,Wc=class extends go{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ws),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}},yo=class extends Qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gc=class extends go{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var il="\\[\\]\\.:\\/",L0=new RegExp("["+il+"]","g"),sl="[^"+il+"]",N0="[^"+il.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",sl),D0=/(WCOD+)?/.source.replace("WCOD",N0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),V0=new RegExp("^"+F0+D0+U0+O0+"$"),z0=["material","materials","bones","map"],qc=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=V0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=qc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);var zh=new ee,vo=class{constructor(t,e,n=0,i=1/0){this.ray=new Zs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,n=[]){return Xc(t,this,n,e),n.sort(kh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Xc(t[i],this,n,e);return n.sort(kh),n}};function kh(s,t){return s.distance-t.distance}function Xc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Xc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var wn=class s{constructor(t=[0,0,0,0,0,0,0,0,0]){T(this,"elements");this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t=new x){let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e=new x){let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e=new s){let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],y=n[8],g=i[0],m=i[1],f=i[2],S=i[3],_=i[4],v=i[5],I=i[6],A=i[7],R=i[8];return r[0]=o*g+a*S+c*I,r[1]=o*m+a*_+c*A,r[2]=o*f+a*v+c*R,r[3]=l*g+h*S+d*I,r[4]=l*m+h*_+d*A,r[5]=l*f+h*v+d*R,r[6]=u*g+p*S+y*I,r[7]=u*m+p*_+y*A,r[8]=u*f+p*v+y*R,e}scale(t,e=new s){let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e=new x){let r=[],o,a;for(o=0;o<12;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+4*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+4*o]===0){for(a=o+1;a<l;a++)if(r[o+4*a]!==0){h=d;do u=d-h,r[u+4*o]+=r[u+4*a];while(--h);break}}if(r[o+4*o]!==0)for(a=o+1;a<l;a++){let p=r[o+4*a]/r[o+4*o];h=d;do u=d-h,r[u+4*a]=u<=o?0:r[u+4*a]-r[u+4*o]*p;while(--h)}}while(--c);if(e.z=r[11]/r[10],e.y=(r[7]-r[6]*e.z)/r[5],e.x=(r[3]-r[2]*e.z-r[1]*e.y)/r[0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t=new s){let i=H0,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+6*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,h=6,d;do{if(r=c-a,i[r+6*r]===0){for(o=r+1;o<c;o++)if(i[r+6*o]!==0){l=h;do d=h-l,i[d+6*r]+=i[d+6*o];while(--l);break}}if(i[r+6*r]!==0)for(o=r+1;o<c;o++){let u=i[r+6*o]/i[r+6*r];l=h;do d=h-l,i[d+6*o]=d<=r?0:i[d+6*o]-i[d+6*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=i[r+6*o]/i[r+6*r];l=6;do d=6-l,i[d+6*o]=i[d+6*o]-i[d+6*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/i[r+6*r];l=6;do d=6-l,i[d+6*r]=i[d+6*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[3+o+6*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,p=n*c,y=i*c,g=r*o,m=r*a,f=r*c,S=this.elements;return S[0]=1-(u+y),S[1]=h-f,S[2]=d+m,S[3]=h+f,S[4]=1-(l+y),S[5]=p-g,S[6]=d-m,S[7]=p+g,S[8]=1-(l+u),this}transpose(t=new s){let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},H0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var De=class De{constructor(t=0,e=0,n=0){T(this,"x");T(this,"y");T(this,"z");this.x=t,this.y=e,this.z=n}cross(t,e=new De){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new De(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new De(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new wn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t=new De){let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e=new De){let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e=new De){return e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n=new De){return n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t=new De){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=W0,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=G0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e=1e-6){return!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t=1e-6){return!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(hu),hu.almostEquals(t,e)}clone(){return new De(this.x,this.y,this.z)}};T(De,"ZERO"),T(De,"UNIT_X"),T(De,"UNIT_Y"),T(De,"UNIT_Z");var x=De;x.ZERO=new x(0,0,0);x.UNIT_X=new x(1,0,0);x.UNIT_Y=new x(0,1,0);x.UNIT_Z=new x(0,0,1);var W0=new x,G0=new x,hu=new x;var be=class s{constructor(t={}){T(this,"lowerBound");T(this,"upperBound");this.lowerBound=new x,this.upperBound=new x,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,uu),l=uu),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=du,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=du,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),y=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(y<0||p>y)}},uu=new x,du=[new x,new x,new x,new x,new x,new x,new x,new x];var nr=class{constructor(){T(this,"matrix");this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}};var Ts=class{constructor(){T(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}};var fe=class s{constructor(t=0,e=0,n=0,i=1){T(this,"x");T(this,"y");T(this,"z");T(this,"w");this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t=new x){this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=q0,i=X0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e=new s){let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t=new s){let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t=new s){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e=new x){let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,p=-o*n-a*i-c*r;return e.x=h*l+p*-o+d*-c-u*-a,e.y=d*l+p*-a+u*-o-h*-c,e.z=u*l+p*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e="YZX"){let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,p=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*p),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i="XYZ"){let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n=new s){let i=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,p,y,g,m;return p=i*c+r*l+o*h+a*d,p<0&&(p=-p,c=-c,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),y=Math.sin(u),g=Math.sin((1-e)*u)/y,m=Math.sin(e*u)/y):(g=1-e,m=e),n.x=g*i+m*c,n.y=g*r+m*l,n.z=g*o+m*h,n.w=g*a+m*d,n}integrate(t,e,n,i=new s){let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}},q0=new x,X0=new x;var Y0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},ir=class ir{constructor(t={}){T(this,"id");T(this,"type");T(this,"boundingSphereRadius");T(this,"collisionResponse");T(this,"collisionFilterGroup");T(this,"collisionFilterMask");T(this,"material");T(this,"body");this.id=ir.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};T(ir,"idCounter",0),T(ir,"types",Y0);var ct=ir;var Wt=class s{constructor(t={}){T(this,"position");T(this,"quaternion");this.position=new x,this.quaternion=new fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e=new x){return this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i=new x){return n.vsub(t,i),e.conjugate(fu),fu.vmult(i,i),i}static pointToWorldFrame(t,e,n,i=new x){return e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n=new x){return t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i=new x){return e.w*=-1,e.vmult(n,i),e.w*=-1,i}},fu=new fe;var Cs=class s extends ct{constructor(e={}){let{vertices:n=[],faces:i=[],normals:r=[],axes:o,boundingSphereRadius:a}=e;super({type:ct.types.CONVEXPOLYHEDRON});T(this,"vertices");T(this,"faces");T(this,"faceNormals");T(this,"worldVertices");T(this,"worldVerticesNeedsUpdate");T(this,"worldFaceNormals");T(this,"worldFaceNormalsNeedsUpdate");T(this,"uniqueAxes");T(this,"uniqueEdges");this.vertices=n,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,n=this.vertices,i=this.uniqueEdges;i.length=0;let r=new x;for(let o=0;o!==e.length;o++){let a=e[o],c=a.length;for(let l=0;l!==c;l++){let h=(l+1)%c;n[a[l]].vsub(n[a[h]],r),r.normalize();let d=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(r)||i[u].almostEquals(r)){d=!0;break}d||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);let n=this.faceNormals[e]||new x;this.getFaceNormal(e,n),n.negate(n),this.faceNormals[e]=n;let i=this.vertices[this.faces[e][0]];if(n.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,n){let i=this.faces[e],r=this.vertices[i[0]],o=this.vertices[i[1]],a=this.vertices[i[2]];s.computeNormal(r,o,a,n)}static computeNormal(e,n,i,r){let o=new x,a=new x;n.vsub(e,a),i.vsub(n,o),o.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,n,i,r,o,a,c,l,h){let d=new x,u=-1,p=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){d.copy(i.faceNormals[g]),o.vmult(d,d);let m=d.dot(a);m>p&&(p=m,u=g)}let y=[];for(let g=0;g<i.faces[u].length;g++){let m=i.vertices[i.faces[u][g]],f=new x;f.copy(m),o.vmult(f,f),r.vadd(f,f),y.push(f)}u>=0&&this.clipFaceAgainstHull(a,e,n,y,c,l,h)}findSeparatingAxis(e,n,i,r,o,a,c,l){let h=new x,d=new x,u=new x,p=new x,y=new x,g=new x,m=Number.MAX_VALUE,f=this,S=0;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){i.vmult(f.uniqueAxes[_],h);let v=f.testSepAxis(h,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(h))}else{let _=c?c.length:f.faces.length;for(let v=0;v<_;v++){let I=c?c[v]:v;h.copy(f.faceNormals[I]),i.vmult(h,h);let A=f.testSepAxis(h,e,n,i,r,o);if(A===!1)return!1;A<m&&(m=A,a.copy(h))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){o.vmult(e.uniqueAxes[_],d),S++;let v=f.testSepAxis(d,e,n,i,r,o);if(v===!1)return!1;v<m&&(m=v,a.copy(d))}else{let _=l?l.length:e.faces.length;for(let v=0;v<_;v++){let I=l?l[v]:v;d.copy(e.faceNormals[I]),o.vmult(d,d),S++;let A=f.testSepAxis(d,e,n,i,r,o);if(A===!1)return!1;A<m&&(m=A,a.copy(d))}}for(let _=0;_!==f.uniqueEdges.length;_++){i.vmult(f.uniqueEdges[_],p);for(let v=0;v!==e.uniqueEdges.length;v++)if(o.vmult(e.uniqueEdges[v],y),p.cross(y,g),!g.almostZero()){g.normalize();let I=f.testSepAxis(g,e,n,i,r,o);if(I===!1)return!1;I<m&&(m=I,a.copy(g))}}return r.vsub(n,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(e,n,i,r,o,a){let c=this;s.project(c,e,i,r,rl),s.project(n,e,o,a,ol);let l=rl[0],h=rl[1],d=ol[0],u=ol[1];if(l<u||d<h)return!1;let p=l-u,y=d-h;return p<y?p:y}calculateLocalInertia(e,n){let i=new x,r=new x;this.computeLocalAABB(r,i);let o=i.x-r.x,a=i.y-r.y,c=i.z-r.z;n.x=1/12*e*(2*a*2*a+2*c*2*c),n.y=1/12*e*(2*o*2*o+2*c*2*c),n.z=1/12*e*(2*a*2*a+2*o*2*o)}getPlaneConstantOfFace(e){let n=this.faces[e],i=this.faceNormals[e],r=this.vertices[n[0]];return-i.dot(r)}clipFaceAgainstHull(e,n,i,r,o,a,c){let l=new x,h=new x,d=new x,u=new x,p=new x,y=new x,g=new x,m=new x,f=this,S=[],_=r,v=S,I=-1,A=Number.MAX_VALUE;for(let P=0;P<f.faces.length;P++){l.copy(f.faceNormals[P]),i.vmult(l,l);let W=l.dot(e);W<A&&(A=W,I=P)}if(I<0)return;let R=f.faces[I];R.connectedFaces=[];for(let P=0;P<f.faces.length;P++)for(let W=0;W<f.faces[P].length;W++)R.indexOf(f.faces[P][W])!==-1&&P!==I&&R.connectedFaces.indexOf(P)===-1&&R.connectedFaces.push(P);let B=R.length;for(let P=0;P<B;P++){let W=f.vertices[R[P]],O=f.vertices[R[(P+1)%B]];W.vsub(O,h),d.copy(h),i.vmult(d,d),n.vadd(d,d),u.copy(this.faceNormals[I]),i.vmult(u,u),n.vadd(u,u),d.cross(u,p),p.negate(p),y.copy(W),i.vmult(y,y),n.vadd(y,y);let V=R.connectedFaces[P];g.copy(this.faceNormals[V]);let G=this.getPlaneConstantOfFace(V);m.copy(g),i.vmult(m,m);let H=G-m.dot(n);for(this.clipFaceAgainstPlane(_,v,m,H);_.length;)_.shift();for(;v.length;)_.push(v.shift())}g.copy(this.faceNormals[I]);let w=this.getPlaneConstantOfFace(I);m.copy(g),i.vmult(m,m);let M=w-m.dot(n);for(let P=0;P<_.length;P++){let W=m.dot(_[P])+M;if(W<=o&&(console.log(`clamped: depth=${W} to minDist=${o}`),W=o),W<=a){let O=_[P];if(W<=1e-6){let V={point:O,normal:m,depth:W};c.push(V)}}}}clipFaceAgainstPlane(e,n,i,r){let o,a,c=e.length;if(c<2)return n;let l=e[e.length-1],h=e[0];o=i.dot(l)+r;for(let d=0;d<c;d++){if(h=e[d],a=i.dot(h)+r,o<0)if(a<0){let u=new x;u.copy(h),n.push(u)}else{let u=new x;l.lerp(h,o/(o-a),u),n.push(u)}else if(a<0){let u=new x;l.lerp(h,o/(o-a),u),n.push(u),n.push(h)}l=h,o=a}return n}computeWorldVertices(e,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new x);let i=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(i[o],r[o]),e.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,n){let i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){let o=i[r];o.x<e.x?e.x=o.x:o.x>n.x&&(n.x=o.x),o.y<e.y?e.y=o.y:o.y>n.y&&(n.y=o.y),o.z<e.z?e.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(e){let n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new x);let i=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)e.vmult(i[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,n=this.vertices;for(let i=0;i!==n.length;i++){let r=n[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,n,i,r){let o=this.vertices,a,c,l,h,d,u,p=new x;for(let y=0;y<o.length;y++){p.copy(o[y]),n.vmult(p,p),e.vadd(p,p);let g=p;(a===void 0||g.x<a)&&(a=g.x),(h===void 0||g.x>h)&&(h=g.x),(c===void 0||g.y<c)&&(c=g.y),(d===void 0||g.y>d)&&(d=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}i.set(a,c,l),r.set(h,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e=new x){let n=this.vertices;for(let i=0;i<n.length;i++)e.vadd(n[i],e);return e.scale(1/n.length,e),e}transformAllPoints(e,n){let i=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<i;o++){let a=r[o];n.vmult(a,a)}for(let o=0;o<this.faceNormals.length;o++){let a=this.faceNormals[o];n.vmult(a,a)}}if(e)for(let o=0;o<i;o++){let a=r[o];a.vadd(e,a)}}pointIsInside(e){let n=this.vertices,i=this.faces,r=this.faceNormals,o=null,a=new x;this.getAveragePointLocal(a);for(let c=0;c<this.faces.length;c++){let l=r[c],h=n[i[c][0]],d=new x;e.vsub(h,d);let u=l.dot(d),p=new x;a.vsub(h,p);let y=l.dot(p);if(u<0&&y>0||u>0&&y<0)return!1}return o?1:-1}static project(e,n,i,r,o){let a=e.vertices.length,c=Z0,l=$0,h=0,d=0,u=j0,p=e.vertices;u.setZero(),Wt.vectorToLocalFrame(i,r,n,l),Wt.pointToLocalFrame(i,r,u,u);let y=u.dot(l);d=h=p[0].dot(l);for(let g=1;g<a;g++){let m=p[g].dot(l);m>h&&(h=m),m<d&&(d=m)}if(d-=y,h-=y,d>h){let g=d;d=h,h=g}o[0]=h,o[1]=d}},rl=[],ol=[],Z0=new x,$0=new x,j0=new x;var vi=class s extends ct{constructor(e){super({type:ct.types.BOX});T(this,"halfExtents");T(this,"convexPolyhedronRepresentation");this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,n=this.halfExtents.y,i=this.halfExtents.z,r=x,o=[new r(-e,-n,-i),new r(e,-n,-i),new r(e,n,-i),new r(-e,n,-i),new r(-e,-n,i),new r(e,-n,i),new r(e,n,i),new r(-e,n,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],c=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new Cs({vertices:o,faces:a,axes:c});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,n=new x){return s.calculateInertia(this.halfExtents,e,n),n}static calculateInertia(e,n,i){let r=e;i.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,n){let i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==i.length;o++)n.vmult(i[o],i[o]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,n,i){let r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let a=0;a<o.length;a++)xi.set(o[a][0],o[a][1],o[a][2]),n.vmult(xi,xi),e.vadd(xi,xi),i(xi.x,xi.y,xi.z)}calculateWorldAABB(e,n,i,r){let o=this.halfExtents;En[0].set(o.x,o.y,o.z),En[1].set(-o.x,o.y,o.z),En[2].set(-o.x,-o.y,o.z),En[3].set(-o.x,-o.y,-o.z),En[4].set(o.x,-o.y,-o.z),En[5].set(o.x,o.y,-o.z),En[6].set(-o.x,o.y,-o.z),En[7].set(o.x,-o.y,o.z);let a=En[0];n.vmult(a,a),e.vadd(a,a),r.copy(a),i.copy(a);for(let c=1;c<8;c++){let l=En[c];n.vmult(l,l),e.vadd(l,l);let h=l.x,d=l.y,u=l.z;h>r.x&&(r.x=h),d>r.y&&(r.y=d),u>r.z&&(r.z=u),h<i.x&&(i.x=h),d<i.y&&(i.y=d),u<i.z&&(i.z=u)}}},xi=new x,En=[new x,new x,new x,new x,new x,new x,new x,new x];var al={DYNAMIC:1,STATIC:2,KINEMATIC:4},cl={AWAKE:0,SLEEPY:1,SLEEPING:2},Ut=class Ut extends Ts{constructor(e={}){super();T(this,"id");T(this,"index");T(this,"world");T(this,"vlambda");T(this,"collisionFilterGroup");T(this,"collisionFilterMask");T(this,"collisionResponse");T(this,"position");T(this,"previousPosition");T(this,"interpolatedPosition");T(this,"initPosition");T(this,"velocity");T(this,"initVelocity");T(this,"force");T(this,"mass");T(this,"invMass");T(this,"material");T(this,"linearDamping");T(this,"type");T(this,"allowSleep");T(this,"sleepState");T(this,"sleepSpeedLimit");T(this,"sleepTimeLimit");T(this,"timeLastSleepy");T(this,"wakeUpAfterNarrowphase");T(this,"torque");T(this,"quaternion");T(this,"initQuaternion");T(this,"previousQuaternion");T(this,"interpolatedQuaternion");T(this,"angularVelocity");T(this,"initAngularVelocity");T(this,"shapes");T(this,"shapeOffsets");T(this,"shapeOrientations");T(this,"inertia");T(this,"invInertia");T(this,"invInertiaWorld");T(this,"invMassSolve");T(this,"invInertiaSolve");T(this,"invInertiaWorldSolve");T(this,"fixedRotation");T(this,"angularDamping");T(this,"linearFactor");T(this,"angularFactor");T(this,"aabb");T(this,"aabbNeedsUpdate");T(this,"boundingRadius");T(this,"wlambda");T(this,"isTrigger");this.id=Ut.idCounter++,this.index=-1,this.world=null,this.vlambda=new x,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new x,this.previousPosition=new x,this.interpolatedPosition=new x,this.initPosition=new x,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new x,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new x,this.force=new x;let n=typeof e.mass=="number"?e.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=n<=0?Ut.STATIC:Ut.DYNAMIC,typeof e.type==typeof Ut.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep!="undefined"?e.allowSleep:!0,this.sleepState=Ut.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit!="undefined"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit!="undefined"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new x,this.quaternion=new fe,this.initQuaternion=new fe,this.previousQuaternion=new fe,this.interpolatedQuaternion=new fe,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new x,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new x,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new x,this.invInertia=new x,this.invInertiaWorld=new wn,this.invMassSolve=0,this.invInertiaSolve=new x,this.invInertiaWorldSolve=new wn,this.fixedRotation=typeof e.fixedRotation!="undefined"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping!="undefined"?e.angularDamping:.01,this.linearFactor=new x(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new x(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new be,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new x,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=Ut.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ut.SLEEPING&&this.dispatchEvent(Ut.wakeupEvent)}sleep(){this.sleepState=Ut.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let n=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Ut.AWAKE&&i<r?(this.sleepState=Ut.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ut.sleepyEvent)):n===Ut.SLEEPY&&i>r?this.wakeUp():n===Ut.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ut.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ut.SLEEPING||this.type===Ut.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,n=new x){return e.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(e,n=new x){return this.quaternion.conjugate().vmult(e,n),n}pointToWorldFrame(e,n=new x){return this.quaternion.vmult(e,n),n.vadd(this.position,n),n}vectorToWorldFrame(e,n=new x){return this.quaternion.vmult(e,n),n}addShape(e,n,i){let r=new x,o=new fe;return n&&r.copy(n),i&&o.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let n=this.shapes.indexOf(e);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,n=this.shapeOffsets,i=e.length,r=0;for(let o=0;o!==i;o++){let a=e[o];a.updateBoundingSphereRadius();let c=n[o].length(),l=a.boundingSphereRadius;c+l>r&&(r=c+l)}this.boundingRadius=r}updateAABB(){let e=this.shapes,n=this.shapeOffsets,i=this.shapeOrientations,r=e.length,o=J0,a=Q0,c=this.quaternion,l=this.aabb,h=K0;for(let d=0;d!==r;d++){let u=e[d];c.vmult(n[d],o),o.vadd(this.position,o),c.mult(i[d],a),u.calculateWorldAABB(o,a,h.lowerBound,h.upperBound),d===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!e)){let i=ty,r=ey,o=ny;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(n,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,n=new x){if(this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();let i=iy;n.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,n=new x){if(this.type!==Ut.DYNAMIC)return;let i=sy,r=ry;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyForce(i,r)}applyTorque(e){this.type===Ut.DYNAMIC&&(this.sleepState===Ut.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,n=new x){if(this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();let i=n,r=oy;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);let o=ay;i.cross(e,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(e,n=new x){if(this.type!==Ut.DYNAMIC)return;let i=cy,r=ly;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(n,r),this.applyImpulse(i,r)}updateMassProperties(){let e=hy;this.invMass=this.mass>0?1/this.mass:0;let n=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),vi.calculateInertia(e,this.mass,n),this.invInertia.set(n.x>0&&!i?1/n.x:0,n.y>0&&!i?1/n.y:0,n.z>0&&!i?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,n){let i=new x;return e.vsub(this.position,i),this.angularVelocity.cross(i,n),this.velocity.vadd(n,n),n}integrate(e,n,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ut.DYNAMIC||this.type===Ut.KINEMATIC)||this.sleepState===Ut.SLEEPING)return;let r=this.velocity,o=this.angularVelocity,a=this.position,c=this.force,l=this.torque,h=this.quaternion,d=this.invMass,u=this.invInertiaWorld,p=this.linearFactor,y=d*e;r.x+=c.x*y*p.x,r.y+=c.y*y*p.y,r.z+=c.z*y*p.z;let g=u.elements,m=this.angularFactor,f=l.x*m.x,S=l.y*m.y,_=l.z*m.z;o.x+=e*(g[0]*f+g[1]*S+g[2]*_),o.y+=e*(g[3]*f+g[4]*S+g[5]*_),o.z+=e*(g[6]*f+g[7]*S+g[8]*_),a.x+=r.x*e,a.y+=r.y*e,a.z+=r.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),n&&(i?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};T(Ut,"idCounter",0),T(Ut,"COLLIDE_EVENT_NAME","collide"),T(Ut,"DYNAMIC",al.DYNAMIC),T(Ut,"STATIC",al.STATIC),T(Ut,"KINEMATIC",al.KINEMATIC),T(Ut,"AWAKE",cl.AWAKE),T(Ut,"SLEEPY",cl.SLEEPY),T(Ut,"SLEEPING",cl.SLEEPING),T(Ut,"wakeupEvent",{type:"wakeup"}),T(Ut,"sleepyEvent",{type:"sleepy"}),T(Ut,"sleepEvent",{type:"sleep"});var Ot=Ut,J0=new x,Q0=new fe,K0=new be,ty=new wn,ey=new wn,ny=new wn,iy=new x,sy=new x,ry=new x,oy=new x,ay=new x,cy=new x,ly=new x,hy=new x;var zi=class{constructor(){T(this,"world");T(this,"useBoundingBoxes");T(this,"dirty");this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ot.STATIC)!==0||t.sleepState===Ot.SLEEPING)&&((e.type&Ot.STATIC)!==0||e.sleepState===Ot.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=uy;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=dy,i=fy,r=py,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new x;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},uy=new x,T_=new x,C_=new fe,R_=new x,dy={keys:[]},fy=[],py=[],P_=new x;var D_=new x,U_=new x;var So=class extends zi{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n=[]){for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}};var Xn=class{constructor(){T(this,"rayFromWorld");T(this,"rayToWorld");T(this,"hitNormalWorld");T(this,"hitPointWorld");T(this,"hasHit");T(this,"shape");T(this,"body");T(this,"hitFaceIndex");T(this,"distance");T(this,"shouldStop");this.rayFromWorld=new x,this.rayToWorld=new x,this.hitNormalWorld=new x,this.hitPointWorld=new x,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}};var ll={CLOSEST:1,ANY:2,ALL:4},We=class We{constructor(t=new x,e=new x){T(this,"from");T(this,"to");T(this,"direction");T(this,"precision");T(this,"checkCollisionResponse");T(this,"skipBackfaces");T(this,"collisionFilterMask");T(this,"collisionFilterGroup");T(this,"mode");T(this,"result");T(this,"hasHit");T(this,"callback");this.from=t.clone(),this.to=e.clone(),this.direction=new x,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=We.ANY,this.result=new Xn,this.hasHit=!1,this.callback=n=>{}}get[ct.types.SPHERE](){return this._intersectSphere}get[ct.types.PLANE](){return this._intersectPlane}get[ct.types.BOX](){return this._intersectBox}get[ct.types.CYLINDER](){return this._intersectConvex}get[ct.types.CONVEXPOLYHEDRON](){return this._intersectConvex}get[ct.types.HEIGHTFIELD](){return this._intersectHeightfield}get[ct.types.TRIMESH](){return this._intersectTrimesh}intersectWorld(t,e){return this.mode=e.mode||We.ANY,this.result=e.result||new Xn,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask!="undefined"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup!="undefined"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse!="undefined"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(pu),hl.length=0,t.broadphase.aabbQuery(t,pu,hl),this.intersectBodies(hl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=my,r=gy;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(By(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new x(0,0,1);e.vmult(l,l);let h=new x;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let p=l.dot(c);if(Math.abs(p)<this.precision)return;let y=new x,g=new x,m=new x;o.vsub(n,y);let f=-l.dot(y)/p;c.scale(f,g),o.vadd(g,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){let o=t.data,a=t.elementSize,c=yy;c.from.copy(this.from),c.to.copy(this.to),Wt.pointToLocalFrame(n,e,c.from,c.from),Wt.pointToLocalFrame(n,e,c.to,c.to),c.updateDirection();let l=xy,h,d,u,p;h=d=0,u=p=t.data.length-1;let y=new be;c.getAABB(y),t.getIndexOfPosition(y.lowerBound.x,y.lowerBound.y,l,!0),h=Math.max(h,l[0]),d=Math.max(d,l[1]),t.getIndexOfPosition(y.upperBound.x,y.upperBound.y,l,!0),u=Math.min(u,l[0]+1),p=Math.min(p,l[1]+1);for(let g=h;g<u;g++)for(let m=d;m<p;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(g,m,y),!!y.overlapsRay(c)){if(t.getConvexTrianglePillar(g,m,!1),Wt.pointToWorldFrame(n,e,t.pillarOffset,wo),this._intersectConvex(t.pillarConvex,e,wo,i,r,mu),this.result.shouldStop)return;t.getConvexTrianglePillar(g,m,!0),Wt.pointToWorldFrame(n,e,t.pillarOffset,wo),this._intersectConvex(t.pillarConvex,e,wo,i,r,mu)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,p=vy,y=_y;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,y),y.normalize(),this.reportIntersection(y,p,r,i,-1);else{let g=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(g>=0&&g<=1&&(o.lerp(a,g,p),p.vsub(n,y),y.normalize(),this.reportIntersection(y,p,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,y),y.normalize(),this.reportIntersection(y,p,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=My,c=by,l=gu,h=Sy,d=o&&o.faceList||null,u=t.faces,p=t.vertices,y=t.faceNormals,g=this.direction,m=this.from,f=this.to,S=m.distanceTo(f),_=-1,v=d?d.length:u.length,I=this.result;for(let A=0;!I.shouldStop&&A<v;A++){let R=d?d[A]:A,B=u[R],w=y[R],M=e,P=n;l.copy(p[B[0]]),M.vmult(l,l),l.vadd(P,l),l.vsub(m,l),M.vmult(w,c);let W=g.dot(c);if(Math.abs(W)<this.precision)continue;let O=c.dot(l)/W;if(!(O<0)){g.scale(O,He),He.vadd(m,He),mn.copy(p[B[0]]),M.vmult(mn,mn),P.vadd(mn,mn);for(let V=1;!I.shouldStop&&V<B.length-1;V++){An.copy(p[B[V]]),Tn.copy(p[B[V+1]]),M.vmult(An,An),M.vmult(Tn,Tn),P.vadd(An,An),P.vadd(Tn,Tn);let G=He.distanceTo(m);!(We.pointInTriangle(He,mn,An,Tn)||We.pointInTriangle(He,An,mn,Tn))||G>S||this.reportIntersection(c,He,r,i,R)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=wy,c=Py,l=Iy,h=gu,d=Ey,u=Ay,p=Ty,y=Ry,g=Cy,m=t.indices,f=t.vertices,S=this.from,_=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(e),Wt.vectorToLocalFrame(n,e,v,d),Wt.pointToLocalFrame(n,e,S,u),Wt.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();let I=u.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let A=0,R=c.length;!this.result.shouldStop&&A!==R;A++){let B=c[A];t.getNormal(B,a),t.getVertex(m[B*3],mn),mn.vsub(u,h);let w=d.dot(a),M=a.dot(h)/w;if(M<0)continue;d.scale(M,He),He.vadd(u,He),t.getVertex(m[B*3+1],An),t.getVertex(m[B*3+2],Tn);let P=He.distanceSquared(u);!(We.pointInTriangle(He,An,mn,Tn)||We.pointInTriangle(He,mn,An,Tn))||P>I||(Wt.vectorToWorldFrame(e,a,g),Wt.pointToWorldFrame(n,e,He,y),this.reportIntersection(g,y,r,i,B))}c.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r!="undefined"?r:-1,this.mode){case We.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case We.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case We.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ki),n.vsub(e,sr),t.vsub(e,ul);let r=ki.dot(ki),o=ki.dot(sr),a=ki.dot(ul),c=sr.dot(sr),l=sr.dot(ul),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};T(We,"CLOSEST",ll.CLOSEST),T(We,"ANY",ll.ANY),T(We,"ALL",ll.ALL);var en=We,pu=new be,hl=[],sr=new x,ul=new x,my=new x,gy=new fe,He=new x,mn=new x,An=new x,Tn=new x,J_=new x,Q_=new Xn,mu={faceList:[0]},wo=new x,yy=new en,xy=[];var vy=new x,_y=new x,by=new x,My=new x,Sy=new x,gu=new x,wy=new x,Ey=new x,Ay=new x,Ty=new x,Cy=new x,Ry=new x,K_=new be,Py=[],Iy=new Wt,ki=new x,Eo=new x;function By(s,t,e){e.vsub(s,ki);let n=ki.dot(t);return t.scale(n,Eo),Eo.vadd(s,Eo),e.distanceTo(Eo)}var Ao=class s extends zi{constructor(e){super();T(this,"axisList");T(this,"world");T(this,"axisIndex");T(this,"_addBodyHandler");T(this,"_removeBodyHandler");this.axisList=[],this.world=null,this.axisIndex=0;let n=this.axisList;this._addBodyHandler=i=>{n.push(i.body)},this._removeBodyHandler=i=>{let r=n.indexOf(i.body);r!==-1&&n.splice(r,1)},e&&this.setWorld(e)}static checkBounds(e,n,i){let r,o;i===0?(r=e.position.x,o=n.position.x):i===1?(r=e.position.y,o=n.position.y):i===2&&(r=e.position.z,o=n.position.z);let a=e.boundingRadius,c=n.boundingRadius,l=r+a;return o-c<l}static insertionSortX(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortY(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)e[o+1]=e[o];e[o+1]=r}return e}static insertionSortZ(e){for(let n=1,i=e.length;n<i;n++){let r=e[n],o;for(o=n-1;o>=0&&!(e[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)e[o+1]=e[o];e[o+1]=r}return e}setWorld(e){this.axisList.length=0;for(let n=0;n<e.bodies.length;n++)this.axisList.push(e.bodies[n]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,n,i){let r=this.axisList,o=r.length,a=this.axisIndex,c,l;for(this.dirty&&(this.sortList(),this.dirty=!1),c=0;c!==o;c++){let h=r[c];for(l=c+1;l<o;l++){let d=r[l];if(this.needBroadphaseCollision(h,d)){if(!s.checkBounds(h,d,a))break;this.intersectionTest(h,d,n,i)}}}}sortList(){let e=this.axisList,n=this.axisIndex,i=e.length;for(let r=0;r!==i;r++){let o=e[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?s.insertionSortX(e):n===1?s.insertionSortY(e):n===2&&s.insertionSortZ(e)}autoDetectAxis(){let e=0,n=0,i=0,r=0,o=0,a=0,c=this.axisList,l=c.length,h=1/l;for(let y=0;y!==l;y++){let g=c[y],m=g.position.x;e+=m,n+=m*m;let f=g.position.y;i+=f,r+=f*f;let S=g.position.z;o+=S,a+=S*S}let d=n-e*e*h,u=r-i*i*h,p=a-o*o*h;d>u?d>p?this.axisIndex=0:this.axisIndex=2:u>p?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,n,i=[]){this.dirty&&(this.sortList(),this.dirty=!1);let r=this.axisIndex,o="x";r===1&&(o="y"),r===2&&(o="z");let a=this.axisList,c=n.lowerBound[o],l=n.upperBound[o];for(let h=0;h<a.length;h++){let d=a[h];d.aabbNeedsUpdate&&d.updateAABB(),d.aabb.overlaps(n)&&i.push(d)}return i}};var Hi=class{static defaults(t={},e){for(let n in e)n in t||(t[n]=e[n]);return t}};var rr=class{constructor(){T(this,"spatial");T(this,"rotational");this.spatial=new x,this.rotational=new x}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}};var Co=class Co{constructor(t,e,n=-1e6,i=1e6){T(this,"id");T(this,"minForce");T(this,"maxForce");T(this,"bi");T(this,"bj");T(this,"si");T(this,"sj");T(this,"a");T(this,"b");T(this,"eps");T(this,"jacobianElementA");T(this,"jacobianElementB");T(this,"enabled");T(this,"multiplier");this.id=Co.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new rr,this.jacobianElementB=new rr,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,yu),a.scale(h,xu),n.invInertiaWorldSolve.vmult(o,vu),i.invInertiaWorldSolve.vmult(c,_u),t.multiplyVectors(yu,vu)+e.multiplyVectors(xu,_u)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,To),l+=To.dot(t.rotational),c.vmult(e.rotational,To),l+=To.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Ly;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};T(Co,"idCounter",0);var Yn=Co,yu=new x,xu=new x,vu=new x,_u=new x,To=new x,Ly=new x;var Rs=class extends Yn{constructor(e,n,i=1e6){super(e,n,0,i);T(this,"restitution");T(this,"ri");T(this,"rj");T(this,"ni");this.restitution=0,this.ri=new x,this.rj=new x,this.ni=new x}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=Ny,h=Fy,d=r.velocity,u=r.angularVelocity,p=r.force,y=r.torque,g=o.velocity,m=o.angularVelocity,f=o.force,S=o.torque,_=Dy,v=this.jacobianElementA,I=this.jacobianElementB,A=this.ni;a.cross(A,l),c.cross(A,h),A.negate(v.spatial),l.negate(v.rotational),I.spatial.copy(A),I.rotational.copy(h),_.copy(o.position),_.vadd(c,_),_.vsub(r.position,_),_.vsub(a,_);let R=A.dot(_),B=this.restitution+1,w=B*g.dot(A)-B*d.dot(A)+m.dot(h)-u.dot(l),M=this.computeGiMf();return-R*n-w*i-e*M}getImpactVelocityAlongNormal(){let e=Uy,n=Oy,i=Vy,r=zy,o=ky;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,n),e.vsub(n,o),this.ni.dot(o)}},Ny=new x,Fy=new x,Dy=new x,Uy=new x,Oy=new x,Vy=new x,zy=new x,ky=new x;var Tb=new x,Cb=new x;var Lb=new x,Nb=new x;var Hb=new x,Wb=new x;var Kb=new x,tM=new x;var dM=new x,fM=new x;var or=class extends Yn{constructor(e,n,i){super(e,n,-i,i);T(this,"ri");T(this,"rj");T(this,"t");this.ri=new x,this.rj=new x,this.t=new x}computeB(e){let n=this.a,i=this.b,r=this.bi,o=this.bj,a=this.ri,c=this.rj,l=Wy,h=Gy,d=this.t;a.cross(d,l),c.cross(d,h);let u=this.jacobianElementA,p=this.jacobianElementB;d.negate(u.spatial),l.negate(u.rotational),p.spatial.copy(d),p.rotational.copy(h);let y=this.computeGW(),g=this.computeGiMf();return-y*i-e*g}},Wy=new x,Gy=new x;var Po=class Po{constructor(t,e,n){T(this,"id");T(this,"materials");T(this,"friction");T(this,"restitution");T(this,"contactEquationStiffness");T(this,"contactEquationRelaxation");T(this,"frictionEquationStiffness");T(this,"frictionEquationRelaxation");n=Hi.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Po.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};T(Po,"idCounter",0);var Ro=Po;var Bo=class Bo{constructor(t={}){T(this,"name");T(this,"id");T(this,"friction");T(this,"restitution");let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Bo.idCounter++,this.friction=typeof t.friction!="undefined"?t.friction:-1,this.restitution=typeof t.restitution!="undefined"?t.restitution:-1}};T(Bo,"idCounter",0);var Io=Bo;var AM=new x,TM=new x,CM=new x,RM=new x,PM=new x,IM=new x,BM=new x,LM=new x,NM=new x,FM=new x,DM=new x;var WM=new x,GM=new x;var QM=new x,KM=new x,tS=new x,eS=new x,nS=new x,iS=new x,sS=new en,rS=new x,oS=new x,aS=new x,cS=[new x(1,0,0),new x(0,1,0),new x(0,0,1)],lS=new x;var hS=new x,uS=new x,dS=new x;var fS=new x,pS=new x,mS=new x,gS=new x;var yS=new x,xS=new x,vS=new x;var ar=class extends ct{constructor(e){super({type:ct.types.SPHERE});T(this,"radius");if(this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,n=new x){let i=2*e*this.radius*this.radius/5;return n.x=i,n.y=i,n.z=i,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,n,i,r){let o=this.radius,a=["x","y","z"];for(let c=0;c<a.length;c++){let l=a[c];i[l]=e[l]-o,r[l]=e[l]+o}}};var BS=new x,LS=new x;var US=new x,OS=new x,VS=new x,zS=new x,kS=new x,HS=new x,WS=new x;var nw=new x;var lw=new x,hw=new x,uw=new x,dw=new x,fw=new x,pw=new x,mw=new x,gw=new x,yw=new x;var Mw=new x,Sw=new be;var Bw=new x,Lw=new be,Nw=new x,Fw=new x,Dw=new x,Uw=new x,Ow=new x,Vw=new x,zw=new x,kw=new be,Hw=new x,Ww=new Wt,Gw=new be;var cr=class{constructor(){T(this,"equations");this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}};var Lo=class extends cr{constructor(){super();T(this,"iterations");T(this,"tolerance");this.iterations=10,this.tolerance=1e-7}solve(e,n){let i=0,r=this.iterations,o=this.tolerance*this.tolerance,a=this.equations,c=a.length,l=n.bodies,h=l.length,d=e,u,p,y,g,m,f,S;if(c!==0)for(let A=0;A!==h;A++)l[A].updateSolveMassProperties();let _=Xy,v=Yy,I=qy;_.length=c,v.length=c,I.length=c;for(let A=0;A!==c;A++){let R=a[A];I[A]=0,v[A]=R.computeB(d),_[A]=1/R.computeC()}if(c!==0){for(let B=0;B!==h;B++){let w=l[B],M=w.vlambda,P=w.wlambda;M.set(0,0,0),P.set(0,0,0)}for(i=0;i!==r;i++){m=0;for(let B=0;B!==c;B++){let w=a[B];p=v[B],y=_[B],S=I[B],f=w.computeGWlambda(),g=y*(p-f-w.eps*S),S+g<w.minForce?g=w.minForce-S:S+g>w.maxForce&&(g=w.maxForce-S),I[B]+=g,m+=g>0?g:-g,w.addToWlambda(g)}if(m*m<o)break}for(let B=0;B!==h;B++){let w=l[B],M=w.velocity,P=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),M.vadd(w.vlambda,M),w.wlambda.vmul(w.angularFactor,w.wlambda),P.vadd(w.wlambda,P)}let A=a.length,R=1/d;for(;A--;)a[A].multiplier=I[A]*R}return i}},qy=[],Xy=[],Yy=[];var tE=Ot.STATIC;var No=class{constructor(){T(this,"objects",[]);T(this,"type",Object)}release(...t){let e=t.length;for(let n=0;n!==e;n++)this.objects.push(t[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}};var Fo=class extends No{constructor(){super(...arguments);T(this,"type",x)}constructObject(){return new x}};var he={sphereSphere:ct.types.SPHERE,spherePlane:ct.types.SPHERE|ct.types.PLANE,boxBox:ct.types.BOX|ct.types.BOX,sphereBox:ct.types.SPHERE|ct.types.BOX,planeBox:ct.types.PLANE|ct.types.BOX,convexConvex:ct.types.CONVEXPOLYHEDRON,sphereConvex:ct.types.SPHERE|ct.types.CONVEXPOLYHEDRON,planeConvex:ct.types.PLANE|ct.types.CONVEXPOLYHEDRON,boxConvex:ct.types.BOX|ct.types.CONVEXPOLYHEDRON,sphereHeightfield:ct.types.SPHERE|ct.types.HEIGHTFIELD,boxHeightfield:ct.types.BOX|ct.types.HEIGHTFIELD,convexHeightfield:ct.types.CONVEXPOLYHEDRON|ct.types.HEIGHTFIELD,sphereParticle:ct.types.PARTICLE|ct.types.SPHERE,planeParticle:ct.types.PLANE|ct.types.PARTICLE,boxParticle:ct.types.BOX|ct.types.PARTICLE,convexParticle:ct.types.PARTICLE|ct.types.CONVEXPOLYHEDRON,cylinderCylinder:ct.types.CYLINDER,sphereCylinder:ct.types.SPHERE|ct.types.CYLINDER,planeCylinder:ct.types.PLANE|ct.types.CYLINDER,boxCylinder:ct.types.BOX|ct.types.CYLINDER,convexCylinder:ct.types.CONVEXPOLYHEDRON|ct.types.CYLINDER,heightfieldCylinder:ct.types.HEIGHTFIELD|ct.types.CYLINDER,particleCylinder:ct.types.PARTICLE|ct.types.CYLINDER,sphereTrimesh:ct.types.SPHERE|ct.types.TRIMESH,planeTrimesh:ct.types.PLANE|ct.types.TRIMESH},Oo=class{constructor(t){T(this,"contactPointPool");T(this,"frictionEquationPool");T(this,"result");T(this,"frictionResult");T(this,"v3pool");T(this,"world");T(this,"currentContactMaterial");T(this,"enableFrictionReduction");this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Fo,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}get[he.sphereSphere](){return this.sphereSphere}get[he.spherePlane](){return this.spherePlane}get[he.boxBox](){return this.boxBox}get[he.sphereBox](){return this.sphereBox}get[he.planeBox](){return this.planeBox}get[he.convexConvex](){return this.convexConvex}get[he.sphereConvex](){return this.sphereConvex}get[he.planeConvex](){return this.planeConvex}get[he.boxConvex](){return this.boxConvex}get[he.sphereHeightfield](){return this.sphereHeightfield}get[he.boxHeightfield](){return this.boxHeightfield}get[he.convexHeightfield](){return this.convexHeightfield}get[he.sphereParticle](){return this.sphereParticle}get[he.planeParticle](){return this.planeParticle}get[he.boxParticle](){return this.boxParticle}get[he.convexParticle](){return this.convexParticle}get[he.cylinderCylinder](){return this.convexConvex}get[he.sphereCylinder](){return this.sphereConvex}get[he.planeCylinder](){return this.planeConvex}get[he.boxCylinder](){return this.boxConvex}get[he.convexCylinder](){return this.convexConvex}get[he.heightfieldCylinder](){return this.heightfieldCylinder}get[he.particleCylinder](){return this.particleCylinder}get[he.sphereTrimesh](){return this.sphereTrimesh}get[he.planeTrimesh](){return this.planeTrimesh}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Rs(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),p=n.invMass+i.invMass;p>0&&(p=1/p);let y=this.frictionEquationPool,g=y.length?y.pop():new or(n,i,u*p),m=y.length?y.pop():new or(n,i,u*p);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-u*p,g.maxForce=m.maxForce=u*p,g.ri.copy(t.ri),g.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(g.t,m.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.enabled=m.enabled=t.enabled,e.push(g,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Wi.setZero(),Ps.setZero(),Is.setZero();let r=e.bi,o=e.bj;for(let c=0;c!==t;c++)e=this.result[this.result.length-1-c],e.bi!==r?(Wi.vadd(e.ni,Wi),Ps.vadd(e.ri,Ps),Is.vadd(e.rj,Is)):(Wi.vsub(e.ni,Wi),Ps.vadd(e.rj,Ps),Is.vadd(e.ri,Is));let a=1/t;Ps.scale(a,n.ri),Is.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Wi.normalize(),Wi.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=jy,l=Jy,h=Zy,d=$y;for(let u=0,p=t.length;u!==p;u++){let y=t[u],g=e[u],m=null;y.material&&g.material&&(m=n.getContactMaterial(y.material,g.material)||null);let f=y.type&Ot.KINEMATIC&&g.type&Ot.STATIC||y.type&Ot.STATIC&&g.type&Ot.KINEMATIC||y.type&Ot.KINEMATIC&&g.type&Ot.KINEMATIC;for(let S=0;S<y.shapes.length;S++){y.quaternion.mult(y.shapeOrientations[S],c),y.quaternion.vmult(y.shapeOffsets[S],h),h.vadd(y.position,h);let _=y.shapes[S];for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],d),d.vadd(g.position,d);let I=g.shapes[v];if(!(_.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+I.boundingSphereRadius)continue;let A=null;_.material&&I.material&&(A=n.getContactMaterial(_.material,I.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;let R=_.type|I.type,B=this[R];if(B){let w=!1;_.type<I.type?w=B.call(this,_,I,h,d,c,l,y,g,_,I,f):w=B.call(this,I,_,d,h,l,c,g,y,_,I,f),w&&f&&(n.shapeOverlapKeeper.set(_.id,I.id),n.bodyOverlapKeeper.set(y.id,g.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Do),u.ni.scale(u.ni.dot(Do),Su),Do.vsub(Su,u.rj),-Do.dot(u.ni)<=t.radius){if(d)return!0;let p=u.ri,y=u.rj;p.vadd(n,p),p.vsub(a.position,p),y.vadd(i,y),y.vsub(c.position,y),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}sphereBox(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool,p=Sx;n.vsub(i,Uo),e.getSideNormals(p,o);let y=t.radius,g=[],m=!1,f=Ex,S=Ax,_=Tx,v=null,I=0,A=0,R=0,B=null;for(let k=0,L=p.length;k!==L&&m===!1;k++){let $=_x;$.copy(p[k]);let j=$.length();$.normalize();let pt=Uo.dot($);if(pt<j+y&&pt>0){let wt=bx,rt=Mx;wt.copy(p[(k+1)%3]),rt.copy(p[(k+2)%3]);let J=wt.length(),nt=rt.length();wt.normalize(),rt.normalize();let mt=Uo.dot(wt),ot=Uo.dot(rt);if(mt<J&&mt>-J&&ot<nt&&ot>-nt){let Et=Math.abs(pt-j-y);if((B===null||Et<B)&&(B=Et,A=mt,R=ot,v=j,f.copy($),S.copy(wt),_.copy(rt),I++,d))return!0}}}if(I){m=!0;let k=this.createContactEquation(a,c,t,e,l,h);f.scale(-y,k.ri),k.ni.copy(f),k.ni.negate(k.ni),f.scale(v,f),S.scale(A,S),f.vadd(S,f),_.scale(R,_),f.vadd(_,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(c.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}let w=u.get(),M=wx;for(let k=0;k!==2&&!m;k++)for(let L=0;L!==2&&!m;L++)for(let $=0;$!==2&&!m;$++)if(w.set(0,0,0),k?w.vadd(p[0],w):w.vsub(p[0],w),L?w.vadd(p[1],w):w.vsub(p[1],w),$?w.vadd(p[2],w):w.vsub(p[2],w),i.vadd(w,M),M.vsub(n,M),M.lengthSquared()<y*y){if(d)return!0;m=!0;let j=this.createContactEquation(a,c,t,e,l,h);j.ri.copy(M),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(y,j.ri),j.rj.copy(w),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(w),w=null;let P=u.get(),W=u.get(),O=u.get(),V=u.get(),G=u.get(),H=p.length;for(let k=0;k!==H&&!m;k++)for(let L=0;L!==H&&!m;L++)if(k%3!==L%3){p[L].cross(p[k],P),P.normalize(),p[k].vadd(p[L],W),O.copy(n),O.vsub(W,O),O.vsub(i,O);let $=O.dot(P);P.scale($,V);let j=0;for(;j===k%3||j===L%3;)j++;G.copy(n),G.vsub(V,G),G.vsub(W,G),G.vsub(i,G);let pt=Math.abs($),wt=G.length();if(pt<p[j].length()&&wt<y){if(d)return!0;m=!0;let rt=this.createContactEquation(a,c,t,e,l,h);W.vadd(V,rt.rj),rt.rj.copy(rt.rj),G.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(y,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(P,W,O,V,G)}planeBox(t,e,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}convexConvex(t,e,n,i,r,o,a,c,l,h,d,u,p){let y=Hx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,y,u,p)){let g=[],m=Wx;t.clipAgainstHull(n,r,e,i,o,y,-100,100,g);let f=0;for(let S=0;S!==g.length;S++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,I=_.rj;y.negate(_.ni),g[S].normal.negate(m),m.scale(g[S].depth,m),g[S].point.vadd(m,v),I.copy(g[S].point),v.vsub(n,v),I.vsub(i,I),v.vadd(n,v),v.vsub(a.position,v),I.vadd(i,I),I.vsub(c.position,I),this.result.push(_),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,Cx);let p=e.faceNormals,y=e.faces,g=e.vertices,m=t.radius,f=[],S=!1;for(let _=0;_!==g.length;_++){let v=g[_],I=Bx;o.vmult(v,I),i.vadd(I,I);let A=Ix;if(I.vsub(n,A),A.lengthSquared()<m*m){if(d)return!0;S=!0;let R=this.createContactEquation(a,c,t,e,l,h);R.ri.copy(A),R.ri.normalize(),R.ni.copy(R.ri),R.ri.scale(m,R.ri),I.vsub(i,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(c.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);return}}for(let _=0,v=y.length;_!==v&&S===!1;_++){let I=p[_],A=y[_],R=Lx;o.vmult(I,R);let B=Nx;o.vmult(g[A[0]],B),B.vadd(i,B);let w=Fx;R.scale(-m,w),n.vadd(w,w);let M=Dx;w.vsub(B,M);let P=M.dot(R),W=Ux;if(n.vsub(B,W),P<0&&W.dot(R)>0){let O=[];for(let V=0,G=A.length;V!==G;V++){let H=u.get();o.vmult(g[A[V]],H),i.vadd(H,H),O.push(H)}if(vx(O,R,n)){if(d)return!0;S=!0;let V=this.createContactEquation(a,c,t,e,l,h);R.scale(-m,V.ri),R.negate(V.ni);let G=u.get();R.scale(-P,G);let H=u.get();R.scale(-m,H),n.vsub(i,V.rj),V.rj.vadd(H,V.rj),V.rj.vadd(G,V.rj),V.rj.vadd(i,V.rj),V.rj.vsub(c.position,V.rj),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),u.release(G),u.release(H),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let k=0,L=O.length;k!==L;k++)u.release(O[k]);return}else for(let V=0;V!==A.length;V++){let G=u.get(),H=u.get();o.vmult(g[A[(V+1)%A.length]],G),o.vmult(g[A[(V+2)%A.length]],H),i.vadd(G,G),i.vadd(H,H);let k=Rx;H.vsub(G,k);let L=Px;k.unit(L);let $=u.get(),j=u.get();n.vsub(G,j);let pt=j.dot(L);L.scale(pt,$),$.vadd(G,$);let wt=u.get();if($.vsub(n,wt),pt>0&&pt*pt<k.lengthSquared()&&wt.lengthSquared()<m*m){if(d)return!0;let rt=this.createContactEquation(a,c,t,e,l,h);$.vsub(i,rt.rj),$.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let J=0,nt=O.length;J!==nt;J++)u.release(O[J]);u.release(G),u.release(H),u.release($),u.release(wt),u.release(j);return}u.release(G),u.release(H),u.release($),u.release(wt),u.release(j)}for(let V=0,G=O.length;V!==G;V++)u.release(O[V])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,d){let u=Ox,p=Vx;p.set(0,0,1),r.vmult(p,p);let y=0,g=zx;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,g),p.dot(g)<=0){if(d)return!0;let S=this.createContactEquation(a,c,t,e,l,h),_=kx;p.scale(p.dot(g),_),u.vsub(_,_),_.vsub(n,S.ri),S.ni.copy(p),u.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}boxConvex(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,p=t.radius,y=e.elementSize,g=ev,m=tv;Wt.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/y)-1,S=Math.ceil((m.x+p)/y)+1,_=Math.floor((m.y-p)/y)-1,v=Math.ceil((m.y+p)/y)+1;if(S<0||v<0||f>u.length||_>u[0].length)return;f<0&&(f=0),S<0&&(S=0),_<0&&(_=0),v<0&&(v=0),f>=u.length&&(f=u.length-1),S>=u.length&&(S=u.length-1),v>=u[0].length&&(v=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let I=[];e.getRectMinMax(f,_,S,v,I);let A=I[0],R=I[1];if(m.z-p>R||m.z+p<A)return;let B=this.result;for(let w=f;w<S;w++)for(let M=_;M<v;M++){let P=B.length,W=!1;if(e.getConvexTrianglePillar(w,M,!1),Wt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&W||(e.getConvexTrianglePillar(w,M,!0),Wt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&W))return!0;if(B.length-P>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,p=e.elementSize,y=t.boundingSphereRadius,g=Qx,m=Kx,f=Jx;Wt.pointToLocalFrame(i,o,n,f);let S=Math.floor((f.x-y)/p)-1,_=Math.ceil((f.x+y)/p)+1,v=Math.floor((f.y-y)/p)-1,I=Math.ceil((f.y+y)/p)+1;if(_<0||I<0||S>u.length||v>u[0].length)return;S<0&&(S=0),_<0&&(_=0),v<0&&(v=0),I<0&&(I=0),S>=u.length&&(S=u.length-1),_>=u.length&&(_=u.length-1),I>=u[0].length&&(I=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let A=[];e.getRectMinMax(S,v,_,I,A);let R=A[0],B=A[1];if(!(f.z-y>B||f.z+y<R))for(let w=S;w<_;w++)for(let M=v;M<I;M++){let P=!1;if(e.getConvexTrianglePillar(w,M,!1),Wt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(w,M,!0),Wt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,d){let u=Yx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let y=this.createContactEquation(c,a,e,t,l,h);u.normalize(),y.rj.copy(u),y.rj.scale(t.radius,y.rj),y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,d){let u=Gx;u.set(0,0,1),a.quaternion.vmult(u,u);let p=qx;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);let m=Xx;u.scale(u.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexParticle(t,e,n,i,r,o,a,c,l,h,d){let u=-1,p=$x,y=jx,g=null,m=0,f=Zx;if(f.copy(i),f.vsub(n,f),r.conjugate(wu),wu.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let S=0,_=t.faces.length;S!==_;S++){let v=[t.worldVertices[t.faces[S][0]]],I=t.worldFaceNormals[S];i.vsub(v[0],Eu);let A=-I.dot(Eu);if(g===null||Math.abs(A)<Math.abs(g)){if(d)return!0;g=A,u=S,p.copy(I),m++}}if(u!==-1){let S=this.createContactEquation(c,a,e,t,l,h);p.scale(g,y),y.vadd(i,y),y.vsub(n,y),S.rj.copy(y),p.negate(S.ni),S.ri.set(0,0,0);let _=S.ri,v=S.rj;_.vadd(i,_),_.vsub(c.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=rx,p=ox,y=ax,g=cx,m=lx,f=hx,S=px,_=sx,v=nx,I=mx;Wt.pointToLocalFrame(i,o,n,m);let A=t.radius;S.lowerBound.set(m.x-A,m.y-A,m.z-A),S.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(S,I);let R=ix,B=t.radius*t.radius;for(let O=0;O<I.length;O++)for(let V=0;V<3;V++)if(e.getVertex(e.indices[I[O]*3+V],R),R.vsub(m,v),v.lengthSquared()<=B){if(_.copy(R),Wt.pointToWorldFrame(i,o,_,R),R.vsub(n,v),d)return!0;let G=this.createContactEquation(a,c,t,e,l,h);G.ni.copy(v),G.ni.normalize(),G.ri.copy(G.ni),G.ri.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.copy(R),G.rj.vsub(c.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}for(let O=0;O<I.length;O++)for(let V=0;V<3;V++){e.getVertex(e.indices[I[O]*3+V],u),e.getVertex(e.indices[I[O]*3+(V+1)%3],p),p.vsub(u,y),m.vsub(p,f);let G=f.dot(y);m.vsub(u,f);let H=f.dot(y);if(H>0&&G<0&&(m.vsub(u,f),g.copy(y),g.normalize(),H=f.dot(g),g.scale(H,f),f.vadd(u,f),f.distanceTo(m)<t.radius)){if(d)return!0;let L=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),Wt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,L.rj),Wt.vectorToWorldFrame(o,L.ni,L.ni),Wt.vectorToWorldFrame(o,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}let w=ux,M=dx,P=fx,W=ex;for(let O=0,V=I.length;O!==V;O++){e.getTriangleVertices(I[O],w,M,P),e.getNormal(I[O],W),m.vsub(w,f);let G=f.dot(W);if(W.scale(G,f),m.vsub(f,f),G=f.distanceTo(m),en.pointInTriangle(f,w,M,P)&&G<t.radius){if(d)return!0;let H=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),Wt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,H.rj),Wt.vectorToWorldFrame(o,H.ni,H.ni),Wt.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}I.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=new x,p=Qy;p.set(0,0,1),r.vmult(p,p);for(let y=0;y<e.vertices.length/3;y++){e.getVertex(y,u);let g=new x;g.copy(u),Wt.pointToWorldFrame(i,o,g,u);let m=Ky;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;let S=this.createContactEquation(a,c,t,e,l,h);S.ni.copy(p);let _=tx;p.scale(m.dot(p),_),u.vsub(_,_),S.ri.copy(_),S.ri.vsub(a.position,S.ri),S.rj.copy(u),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}}},Wi=new x,Ps=new x,Is=new x,Zy=new x,$y=new x,jy=new fe,Jy=new fe;var Qy=new x,Ky=new x,tx=new x,ex=new x,nx=new x,vE=new x,ix=new x,sx=new x,rx=new x,ox=new x,ax=new x,cx=new x,lx=new x,hx=new x,ux=new x,dx=new x,fx=new x,px=new be,mx=[],Do=new x,Su=new x,gx=new x,yx=new x,xx=new x;function vx(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=gx;s[(r+1)%i].vsub(o,a);let c=yx;a.cross(t,c);let l=xx;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Uo=new x,_x=new x,bx=new x,Mx=new x,Sx=[new x,new x,new x,new x,new x,new x],wx=new x,Ex=new x,Ax=new x,Tx=new x,Cx=new x,Rx=new x,Px=new x,Ix=new x,Bx=new x,Lx=new x,Nx=new x,Fx=new x,Dx=new x,Ux=new x,_E=new x,bE=new x,Ox=new x,Vx=new x,zx=new x,kx=new x,Hx=new x,Wx=new x,Gx=new x,qx=new x,Xx=new x,Yx=new x,wu=new fe,Zx=new x,ME=new x,$x=new x,Eu=new x,jx=new x,Jx=new x,Qx=new x,Kx=[0],tv=new x,ev=new x;var lr=class{constructor(){T(this,"current");T(this,"previous");this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Au(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Au(e,h)}}};function Au(s,t){s.push((t&4294901760)>>16,t&65535)}var dl=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,Vo=class{constructor(){T(this,"data",{keys:[]})}get(t,e){let n=dl(t,e);return this.data[n]}set(t,e,n){let i=dl(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=dl(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}};var zo=class extends Ts{constructor(e={}){super();T(this,"dt");T(this,"allowSleep");T(this,"contacts");T(this,"frictionEquations");T(this,"quatNormalizeSkip");T(this,"quatNormalizeFast");T(this,"time");T(this,"stepnumber");T(this,"default_dt");T(this,"nextId");T(this,"gravity");T(this,"frictionGravity");T(this,"broadphase");T(this,"bodies");T(this,"hasActiveBodies");T(this,"solver");T(this,"constraints");T(this,"narrowphase");T(this,"collisionMatrix");T(this,"collisionMatrixPrevious");T(this,"bodyOverlapKeeper");T(this,"shapeOverlapKeeper");T(this,"contactmaterials");T(this,"contactMaterialTable");T(this,"defaultMaterial");T(this,"defaultContactMaterial");T(this,"doProfiling");T(this,"profile");T(this,"accumulator");T(this,"subsystems");T(this,"addBodyEvent");T(this,"removeBodyEvent");T(this,"idToBodyMap");T(this,"lastCallTime");this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new x,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new x,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new So,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Lo,this.constraints=[],this.narrowphase=new Oo(this),this.collisionMatrix=new nr,this.collisionMatrixPrevious=new nr,this.bodyOverlapKeeper=new lr,this.shapeOverlapKeeper=new lr,this.contactmaterials=[],this.contactMaterialTable=new Vo,this.defaultMaterial=new Io("default"),this.defaultContactMaterial=new Ro(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,n){return this.contactMaterialTable.get(e.id,n.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let n=this.constraints.indexOf(e);n!==-1&&this.constraints.splice(n,1)}rayTest(e,n,i){i instanceof Xn?this.raycastClosest(e,n,{skipBackfaces:!0},i):this.raycastAll(e,n,{skipBackfaces:!0},i)}raycastAll(e,n,i={},r){return i.mode=en.ALL,i.from=e,i.to=n,i.callback=r,fl.intersectWorld(this,i)}raycastAny(e,n,i={},r){return i.mode=en.ANY,i.from=e,i.to=n,i.result=r,fl.intersectWorld(this,i)}raycastClosest(e,n,i={},r){return i.mode=en.CLOSEST,i.from=e,i.to=n,i.result=r,fl.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ot&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let n=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let o=0;o!==i.length;o++)i[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let n=this.bodies;for(let i=0;i<n.length;i++){let r=n[i].shapes;for(let o=0;o<r.length;o++){let a=r[o];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let n=this.contactmaterials.indexOf(e);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e=1/60,n=10){let i=Me.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,n);else{let r=i-this.lastCallTime;this.step(e,r,n)}this.lastCallTime=i}step(e,n,i=10){if(n===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=n;let r=Me.now(),o=0;for(;this.accumulator>=e&&o<i&&(this.internalStep(e),this.accumulator-=e,o++,!(Me.now()-r>e*1e3)););this.accumulator=this.accumulator%e;let a=this.accumulator/e;for(let c=0;c!==this.bodies.length;c++){let l=this.bodies[c];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=n}}internalStep(e){this.dt=e;let n=this,i=this,r=this.contacts,o=ov,a=av,c=this.bodies.length,l=this.bodies,h=this.solver,d=this.gravity,u=this.doProfiling,p=this.profile,y=Ot.DYNAMIC,g=-1/0,m=this.constraints,f=rv,S=d.length(),_=d.x,v=d.y,I=d.z,A=0;for(u&&(g=Me.now()),A=0;A!==c;A++){let k=l[A];if(k.type===y){let L=k.force,$=k.mass;L.x+=$*_,L.y+=$*v,L.z+=$*I}}for(let k=0,L=this.subsystems.length;k!==L;k++)this.subsystems[k].update();u&&(g=Me.now()),o.length=0,a.length=0,this.broadphase.collisionPairs(this,o,a),u&&(p.broadphase=Me.now()-g);let R=m.length;for(A=0;A!==R;A++){let k=m[A];if(!k.collideConnected)for(let L=o.length-1;L>=0;L-=1)(k.bodyA===o[L]&&k.bodyB===a[L]||k.bodyB===o[L]&&k.bodyA===a[L])&&(o.splice(L,1),a.splice(L,1))}this.collisionMatrixTick(),u&&(g=Me.now());let B=sv,w=r.length;for(A=0;A!==w;A++)B.push(r[A]);r.length=0;let M=this.frictionEquations.length;for(A=0;A!==M;A++)f.push(this.frictionEquations[A]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(o,a,this,r,B,this.frictionEquations,f),u&&(p.narrowphase=Me.now()-g),u&&(g=Me.now()),A=0;A<this.frictionEquations.length;A++)h.addEquation(this.frictionEquations[A]);let P=r.length;for(let k=0;k!==P;k++){let L=r[k],$=L.bi,j=L.bj,pt=L.si,wt=L.sj,rt;$.material&&j.material?rt=this.getContactMaterial($.material,j.material)||this.defaultContactMaterial:rt=this.defaultContactMaterial;let J=rt.friction;if($.material&&j.material&&($.material.friction>=0&&j.material.friction>=0&&(J=$.material.friction*j.material.friction),$.material.restitution>=0&&j.material.restitution>=0&&(L.restitution=$.material.restitution*j.material.restitution)),h.addEquation(L),$.allowSleep&&$.type===Ot.DYNAMIC&&$.sleepState===Ot.SLEEPING&&j.sleepState===Ot.AWAKE&&j.type!==Ot.STATIC){let nt=j.velocity.lengthSquared()+j.angularVelocity.lengthSquared(),mt=j.sleepSpeedLimit**2;nt>=mt*2&&($.wakeUpAfterNarrowphase=!0)}if(j.allowSleep&&j.type===Ot.DYNAMIC&&j.sleepState===Ot.SLEEPING&&$.sleepState===Ot.AWAKE&&$.type!==Ot.STATIC){let nt=$.velocity.lengthSquared()+$.angularVelocity.lengthSquared(),mt=$.sleepSpeedLimit**2;nt>=mt*2&&(j.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set($,j,!0),this.collisionMatrixPrevious.get($,j)||(hr.body=j,hr.contact=L,$.dispatchEvent(hr),hr.body=$,j.dispatchEvent(hr)),this.bodyOverlapKeeper.set($.id,j.id),this.shapeOverlapKeeper.set(pt.id,wt.id)}for(this.emitContactEvents(),u&&(p.makeContactConstraints=Me.now()-g,g=Me.now()),A=0;A!==c;A++){let k=l[A];k.wakeUpAfterNarrowphase&&(k.wakeUp(),k.wakeUpAfterNarrowphase=!1)}for(R=m.length,A=0;A!==R;A++){let k=m[A];k.update();for(let L=0,$=k.equations.length;L!==$;L++){let j=k.equations[L];h.addEquation(j)}}h.solve(e,this),u&&(p.solve=Me.now()-g),h.removeAllEquations();let W=Math.pow;for(A=0;A!==c;A++){let k=l[A];if(k.type&y){let L=W(1-k.linearDamping,e),$=k.velocity;$.scale(L,$);let j=k.angularVelocity;if(j){let pt=W(1-k.angularDamping,e);j.scale(pt,j)}}}this.dispatchEvent(iv),u&&(g=Me.now());let V=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(A=0;A!==c;A++)l[A].integrate(e,V,G);this.clearForces(),this.broadphase.dirty=!0,u&&(p.integrate=Me.now()-g),this.stepnumber+=1,this.dispatchEvent(nv);let H=!0;if(this.allowSleep)for(H=!1,A=0;A!==c;A++){let k=l[A];k.sleepTick(this.time),k.sleepState!==Ot.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((e||n)&&this.bodyOverlapKeeper.getDiff(Zn,$n),e){for(let o=0,a=Zn.length;o<a;o+=2)ur.bodyA=this.getBodyById(Zn[o]),ur.bodyB=this.getBodyById(Zn[o+1]),this.dispatchEvent(ur);ur.bodyA=ur.bodyB=null}if(n){for(let o=0,a=$n.length;o<a;o+=2)dr.bodyA=this.getBodyById($n[o]),dr.bodyB=this.getBodyById($n[o+1]),this.dispatchEvent(dr);dr.bodyA=dr.bodyB=null}Zn.length=$n.length=0;let i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(Zn,$n),i){for(let o=0,a=Zn.length;o<a;o+=2){let c=this.getShapeById(Zn[o]),l=this.getShapeById(Zn[o+1]);jn.shapeA=c,jn.shapeB=l,c&&(jn.bodyA=c.body),l&&(jn.bodyB=l.body),this.dispatchEvent(jn)}jn.bodyA=jn.bodyB=jn.shapeA=jn.shapeB=null}if(r){for(let o=0,a=$n.length;o<a;o+=2){let c=this.getShapeById($n[o]),l=this.getShapeById($n[o+1]);Jn.shapeA=c,Jn.shapeB=l,c&&(Jn.bodyA=c.body),l&&(Jn.bodyB=l.body),this.dispatchEvent(Jn)}Jn.bodyA=Jn.bodyB=Jn.shapeA=Jn.shapeB=null}}clearForces(){let e=this.bodies,n=e.length;for(let i=0;i!==n;i++){let r=e[i],o=r.force,a=r.torque;r.force.set(0,0,0),r.torque.set(0,0,0)}}},WE=new be;var fl=new en,Me=globalThis.performance||{};if(!Me.now){let s=Date.now();Me.timing&&Me.timing.navigationStart&&(s=Me.timing.navigationStart),Me.now=()=>Date.now()-s}var GE=new x,nv={type:"postStep"},iv={type:"preStep"},hr={type:Ot.COLLIDE_EVENT_NAME,body:null,contact:null},sv=[],rv=[],ov=[],av=[],Zn=[],$n=[],ur={type:"beginContact",bodyA:null,bodyB:null},dr={type:"endContact",bodyA:null,bodyB:null},jn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Jn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Wo=window.Ruina||null,kt=s=>document.getElementById(s),xn={get(s,t){try{let e=localStorage.getItem("ruina."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("ruina."+s,JSON.stringify(t))}catch{}}},Pn=Math.random,It=(s,t)=>s+(t-s)*Pn(),Yi=kt("c"),bi=new ao({canvas:Yi,antialias:!0,powerPreference:"high-performance"});bi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));bi.shadowMap.enabled=!0;bi.shadowMap.type=Yc;bi.toneMapping=Zc;bi.toneMappingExposure=1.05;var Ae=new lo;Ae.fog=new co(13621734,70,220);var Cn=new Ie(50,1,.1,600);{let s=new Js(400,32,16),t=[],e=new Lt(4026291),n=new Lt(11126502),i=new Lt(15980984),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o)/400,c=a>.15?n.clone().lerp(e,Math.min(1,(a-.15)/.6)):i.clone().lerp(n,Math.max(0,(a+.05)/.2));t.push(c.r,c.g,c.b)}s.setAttribute("color",new ke(t,3)),Ae.add(new xe(s,new bs({vertexColors:!0,side:Be,fog:!1})))}Ae.add(new mo(14412031,6969925,1.1));var Zi=new xo(16773597,2.6);Zi.position.set(30,45,20);Zi.castShadow=!0;Zi.shadow.mapSize.set(1536,1536);Object.assign(Zi.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});Zi.shadow.bias=-4e-4;Zi.shadow.normalBias=.02;Ae.add(Zi);var Go=new yo(16756832,0,40,1.6);Ae.add(Go);var Ne=new zo({gravity:new x(0,-9.82,0),allowSleep:!0});Ne.broadphase=new Ao(Ne);Ne.solver.iterations=9;Ne.defaultContactMaterial.friction=.6;Ne.defaultContactMaterial.restitution=.04;var Bu={brick:{color:11818301,dens:18,v:.1},concrete:{color:10724253,dens:24,v:.05},wood:{color:10119742,dens:7,v:.1},steel:{color:5989748,dens:40,v:.04,metal:!0},glass:{color:11132146,dens:10,v:.02,glass:!0},stone:{color:13481611,dens:20,v:.08},car:{color:14173754,dens:6,v:.25}},Lu=new Ui(1,1,1),Bs={},Ue=[],$e=null,Rn=null;function lv(s){let t=Bu[s];return t.glass?new fn({color:16777215,roughness:.05,metalness:.1,transparent:!0,opacity:.38,depthWrite:!1}):new fn({color:16777215,roughness:t.metal?.45:.85,metalness:t.metal?.6:0})}var yl=[];function se(s,t,e,n,i,r,o,a=0){yl.push({type:s,x:t,y:e,z:n,sx:i,sy:r,sz:o,ry:a})}function hv(){let s={};for(let n of yl)(s[n.type]=s[n.type]||[]).push(n);let t=new un,e=new Lt;for(let n in s){let i=s[n],r=Bu[n],o=new uo(Lu,lv(n),i.length);o.castShadow=!r.glass,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(tr),Ae.add(o),Bs[n]=o,i.forEach((a,c)=>{let l=a.sx*a.sy*a.sz,h=new Ot({mass:Math.max(.3,l*r.dens),shape:new vi(new x(a.sx/2,a.sy/2,a.sz/2))});h.position.set(a.x,a.y,a.z),h.quaternion.setFromEuler(0,a.ry,0),h.sleepSpeedLimit=.22,h.sleepTimeLimit=.5,h.linearDamping=.03,h.angularDamping=.08,Ne.addBody(h),h.sleep();let d={body:h,type:n,mesh:o,idx:c,size:new z(a.sx,a.sy,a.sz),start:new z(a.x,a.y,a.z),startQ:h.quaternion.clone(),gone:!1,glass:!!r.glass};h.userData=d,d.glass&&h.addEventListener("collide",Tv),h.addEventListener("collide",Cv),Ue.push(d);let u=new Lt(r.color),p=1+(Pn()-.5)*2*r.v;n==="car"&&u.setHSL(Pn(),.55,.5),e.setRGB(u.r*p,u.g*p,u.b*p),o.setColorAt(c,e),qo(d,t)}),o.instanceColor.needsUpdate=!0}yl=[]}var pl=new ee,Tu=new z,Cu=new un,uv=new z(0,0,0);function qo(s){s.gone?pl.compose(Tu.set(0,-999,0),Cu.identity(),uv):pl.compose(Tu.copy(s.body.position),Cu.copy(s.body.quaternion),s.size),s.mesh.setMatrixAt(s.idx,pl)}var ml=new fn({color:8165975,roughness:1}),dv=new fn({color:7035461,roughness:1});function fv(s){$e=new Ot({type:Ot.STATIC,mass:0}),Rn=new ui,Ae.add(Rn);let t=(e,n,i,r,o,a,c)=>{$e.addShape(new vi(new x(e,n,i)),new x(r,o,a));let l=new xe(Lu,c);l.scale.set(e*2,n*2,i*2),l.position.set(r,o,a),l.receiveShadow=!0,Rn.add(l)};if(s){t(95,5,100,-104,-5,0,ml),t(95,5,100,104,-5,0,ml),t(9,2,100,0,-8,0,dv);let e=new xe(new Ss(18,200),new fn({color:4163256,roughness:.15,metalness:.1,transparent:!0,opacity:.78}));e.rotation.x=-Math.PI/2,e.position.y=-3.2,Rn.add(e)}else t(150,5,150,0,-5,0,ml);Ne.addBody($e)}var Gi=[{id:"pyramid",name:"\u041F\u0456\u0440\u0430\u043C\u0456\u0434\u0430",desc:"\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430: \u043A\u0430\u043C'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438 \u0434\u043E \u043D\u0435\u0431\u0430",ammo:{ball:6,bomb:3,meteor:0,quake:0},goal:.6,cam:[24,14,3],build:pv},{id:"house",name:"\u0411\u0443\u0434\u0438\u043D\u043E\u043A",desc:"\u0426\u0435\u0433\u043B\u0430, \u0431\u0435\u0442\u043E\u043D\u043D\u0456 \u043F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0456 \u0441\u043A\u043B\u043E",ammo:{ball:5,bomb:2,meteor:1,quake:0},goal:.7,cam:[24,9,3.5],build:mv},{id:"tower",name:"\u0412\u0435\u0436\u0430",desc:"\u041A\u0440\u0443\u0433\u043B\u0430 \u0446\u0435\u0433\u043B\u044F\u043D\u0430 \u0432\u0435\u0436\u0430 \u0437 \u0437\u0443\u0431\u0446\u044F\u043C\u0438",ammo:{ball:5,bomb:2,meteor:1,quake:1},goal:.7,cam:[26,10,4.5],build:gv},{id:"bridge",name:"\u041C\u0456\u0441\u0442",desc:"\u0421\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0430\u043B\u043A\u0438 \u043D\u0430\u0434 \u0440\u0456\u0447\u043A\u043E\u044E",ammo:{ball:4,bomb:3,meteor:1,quake:0},goal:.65,cam:[26,9,-1],build:yv,river:!0},{id:"sky",name:"\u0425\u043C\u0430\u0440\u043E\u0447\u043E\u0441",desc:"\u0422\u043E\u043D\u043A\u0456 \u043A\u043E\u043B\u043E\u043D\u0438, \u0432\u0430\u0436\u043A\u0456 \u043F\u043E\u0432\u0435\u0440\u0445\u0438",ammo:{ball:3,bomb:2,meteor:1,quake:1},goal:.7,cam:[30,14,9],build:xv},{id:"castle",name:"\u0417\u0430\u043C\u043E\u043A",desc:"\u041C\u0443\u0440\u0438, \u0432\u0435\u0436\u0456 \u0439 \u0431\u0456\u0439\u043D\u0438\u0446\u0456",ammo:{ball:6,bomb:3,meteor:2,quake:1},goal:.7,cam:[34,16,3],build:vv}];function pv(){for(let e=0;e<8;e++){let n=8-e,i=(n-1)*1.2/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++)se("stone",r*1.2-i,e*1.2+1.2/2,o*1.2-i,1.2*.99,1.2*.99,1.2*.99)}}function mv(){let e=i=>{let r=i*3.3;for(let c=0;c<6;c++){let l=r+c*.5+.25,h=c%2,d=c>=2&&c<=4,u=h?[-3,-2,-1,0,1,2,3]:[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5];for(let y of[2.75,-2.75])for(let g of u)d&&(Math.abs(g+2)<.6||Math.abs(g-2)<.6)||i===0&&y>0&&c<=4&&Math.abs(g)<.6||se("brick",g,l,y,.98,.49,.5);let p=h?[-2.5,-1.5,-.5,.5,1.5,2.5]:[-2,-1,0,1,2];for(let y of[3.75,-3.75])for(let g of p)d&&Math.abs(g)<.6||se("brick",y,l,g,.5,.49,.98)}let o=r+3.5*.5;for(let c of[2.75,-2.75])for(let l of[-2,2])se("glass",l,o,c,.95,1.45,.08);for(let c of[3.75,-3.75])se("glass",c,o,0,.08,1.45,.95);let a=r+6*.5+.15;for(let c of[-2,2])for(let l of[-1.5,1.5])se("concrete",c,a,l,4,.3,3,0)};e(0),e(1);let n=2*(6*.5+.3);for(let i=0;i<4;i++)for(let[r,o]of[[2.2,-1.2],[2.8,-1.2],[2.2,-.6],[2.8,-.6]])se("brick",r,n+i*.4+.2,o,.58,.39,.58)}function gv(){let i=2*Math.PI*2.9000000000000004/18*.98;for(let o=0;o<17;o++)for(let a=0;a<18;a++){if(o===16&&a%2||o>=2&&o<=5&&a===0||o>=10&&o<=12&&(a===5||a===14))continue;let c=(a+o%2*.5)/18*Math.PI*2;se("brick",Math.cos(c)*3.2,o*.5+.5/2,Math.sin(c)*3.2,i,.5*.98,.55,-c+Math.PI/2)}let r=17*.5-.5;for(let o=-2;o<=2;o++)se("wood",o*1.1,r-.1,0,1.05,.2,5.4)}function yv(){for(let t of[-3,3])for(let e=0;e<6;e++)se("concrete",t,-6+e+.5,0,2,.98,3.2);let s=[[-10.5,-3.1],[-2.9,2.9],[3.1,10.5]];for(let[t,e]of s)for(let n of[-1.2,1.2])se("steel",(t+e)/2,.2,n,e-t,.4,.45);for(let t=-10.2;t<=10.2;t+=.62)se("wood",t,.48,0,.58,.15,3.4);for(let t=-9.9;t<=9.9;t+=1.65)for(let e of[-1.6,1.6])se("wood",t,1.06,e,.14,1,.14);for(let t=-9.9+.825;t<9.9;t+=1.65)for(let e of[-1.6,1.6])se("wood",t,1.62,e,1.6,.12,.14);se("car",-5,1.2,.6,2.2,1.2,1.1),se("car",4.5,1.2,-.6,2.2,1.2,1.1)}function xv(){let n=0;for(let i=0;i<6;i++){for(let r of[-3,0,3])for(let o of[-3,0,3])r===0&&o===0||se("steel",r,n+2.7/2,o,.4,2.7,.4);for(let[r,o,a,c]of[[-1.5,-3,2.5,.06],[1.5,-3,2.5,.06],[-1.5,3,2.5,.06],[1.5,3,2.5,.06],[-3,-1.5,.06,2.5],[-3,1.5,.06,2.5],[3,-1.5,.06,2.5],[3,1.5,.06,2.5]])se("glass",r,n+2.7/2,o,a,2.7*.92,c);n+=2.7;for(let r of[-1.6,1.6])for(let o of[-1.6,1.6])se("concrete",r,n+.15,o,3.16,.3,3.16);n+=.3}se("steel",0,n+1.5,0,.25,3,.25)}function vv(){for(let e=0;e<3;e++){let n=e%2?[-3.75,-2.25,-.75,.75,2.25,3.75]:[-3.75,-2.25,-.75,.75,2.25,3.75];for(let i of n)for(let r of[-7,7])r>0&&e<2&&Math.abs(i)<1||se("stone",i,e+.5,r,1.5*.98,.98,1);for(let i of n)for(let r of[-7,7])se("stone",r,e+.5,i,1,.98,1.5*.98)}for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])se("stone",e,3.4,n,.8,.8,.9);for(let e of[-3.75,-1.25,1.25,3.75])for(let n of[-7,7])se("stone",n,3.4,e,.9,.8,.8);for(let e of[-7,7])for(let n of[-7,7]){for(let i=0;i<6;i++){let r=i%2?[[-1,-.5,2,1],[1,.5,2,1],[.5,-1,1,2],[-.5,1,1,2]]:[[-.5,-1,2,1],[.5,1,2,1],[1,-.5,1,2],[-1,.5,1,2]];for(let[o,a,c,l]of r)se("stone",e+o,i+.5,n+a,c*.98,.98,l*.98)}for(let[i,r]of[[-1,-1],[1,1],[-1,1],[1,-1]])se("stone",e+i,6.4,n+r,.7,.8,.7)}for(let e=0;e<3;e++)se("wood",0,e*1.2+.6,0,1.2-e*.3,1.18,1.2-e*.3)}var Ee=null,Kn=!1,gn={},nn="ball",ti="menu",Xo=0,Yo=0,mr=!1,ei=[],qi=[],ye=null,_i=0,pr=0,Se={theta:.6,phi:1.15,r:26,target:new z(0,3,0)};function _v(){for(let s of Ue)Ne.removeBody(s.body);for(let s of ei)Ne.removeBody(s.body),Ae.remove(s.mesh);for(let s of qi)Ae.remove(s.mesh);for(let s of Object.values(Bs))Ae.remove(s),s.material.dispose(),s.dispose();$e&&Ne.removeBody($e),Rn&&Ae.remove(Rn),Ue=[],Bs={},ei=[],qi=[],ye=null}function Xi(s,t){_v(),Mi.clear(),_i=0,Ee=s,Kn=!!t,mr=!1,Yo=0,Xo=0,pr=0,gn={...s.ammo},Kn&&(gn={ball:1/0,bomb:1/0,meteor:1/0,quake:1/0}),fv(!!s.river),s.build(),hv(),Se.r=s.cam[0],Se.target.set(0,s.cam[2],0),Se.theta=.55,Se.phi=Math.atan2(s.cam[0],s.cam[1]*1.3),nn="ball",gn.ball||(nn=Object.keys(gn).find(e=>gn[e]>0)||"ball"),ti="play",kt("menu").hidden=!0,kt("result").hidden=!0,kt("hud").hidden=!1,kt("lvname").textContent=s.name+(Kn?" \xB7 \u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C":""),Zo(),Ou(0),xn.get("hinted",!1)||(kt("hint").hidden=!1,xn.set("hinted",!0),setTimeout(()=>kt("hint").hidden=!0,5e3))}var bv=new z,Ru=new fe;function xl(){if(!Ue.length)return 0;let s=0;for(let t of Ue){if(t.gone){s++;continue}let e=t.body.position,n=bv.set(e.x-t.start.x,e.y-t.start.y,e.z-t.start.z).length();t.startQ.conjugate(Ru);let i=Ru.mult(t.body.quaternion),r=2*Math.acos(Math.min(1,Math.abs(i.w)));(n>.9||r>.55)&&s++}return s/Ue.length}var Mv=[{id:"ball",name:"\u042F\u0434\u0440\u043E",icon:"\u25CF"},{id:"bomb",name:"\u0411\u043E\u043C\u0431\u0430",icon:"\u2738"},{id:"meteor",name:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",icon:"\u2604"},{id:"quake",name:"\u0417\u0435\u043C\u043B\u0435\u0442\u0440\u0443\u0441",icon:"\u224B"}],Nu=new Js(1,24,16),Sv=new fn({color:2829619,roughness:.35,metalness:.7}),wv=new fn({color:4860700,roughness:.9,emissive:16734746,emissiveIntensity:1.4}),Ev=new fn({color:14232363,roughness:.4,emissive:16719904,emissiveIntensity:.6}),gl=new vo;function Av(s,t){let e=new jt(s/innerWidth*2-1,-(t/innerHeight)*2+1);gl.setFromCamera(e,Cn);let n=Object.values(Bs).concat(Rn?Rn.children:[]);for(let r of Object.values(Bs))r.computeBoundingSphere();let i=gl.intersectObjects(n,!1);return{ray:gl.ray.clone(),hit:i[0]||null}}function Fu(s,t){if(ti!=="play"||mr)return;if(!(gn[nn]>0)){Ls("\u0426\u0435\u0439 \u043D\u0430\u0431\u0456\u0439 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\u0441\u044F \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0438\u0439");return}let{ray:e,hit:n}=Av(s,t);if(nn==="ball"){ko(),Qn.shoot();let i=e.direction.clone(),r=Cn.position.clone().addScaledVector(i,2).add(new z(0,-.6,0));Pu(r,i.multiplyScalar(46),.5,90,Sv)}else if(nn==="bomb"){if(!n){Ls("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0431\u0443\u0434\u0456\u0432\u043B\u0456, \u0449\u043E\u0431 \u0437\u0430\u043A\u043B\u0430\u0441\u0442\u0438 \u0431\u043E\u043C\u0431\u0443");return}ko();let i=new xe(Nu,Ev);i.scale.setScalar(.35),i.position.copy(n.point),Ae.add(i),qi.push({mesh:i,t:.9,pos:n.point.clone()}),Qn.tick()}else if(nn==="meteor"){let i=n?n.point:e.at(30,new z);ko(),Qn.whoosh();let r=new z(i.x+8,55,i.z+4),o=i.clone().sub(r).normalize().multiplyScalar(38),a=Pu(r,o,1.5,900,wv);a.meteor=!0}else if(nn==="quake"){ko(),ye={t:0,dur:4.5,a:.28,f:2.3,dir:Pn()*Math.PI},$e.type=Ot.KINEMATIC;for(let i of Ue)i.body.wakeUp();Qn.rumble(),gr(80)}}function ko(){gn[nn]!==1/0&&gn[nn]--,Yo++,Xo=pr,Zo()}function Pu(s,t,e,n,i){let r=new Ot({mass:n,shape:new ar(e),linearDamping:.01});r.position.set(s.x,s.y,s.z),r.velocity.set(t.x,t.y,t.z),r.allowSleep=!1;let o=new xe(Nu,i);o.scale.setScalar(e),o.castShadow=!0,Ae.add(o);let a={body:r,mesh:o,age:0};if(r.addEventListener("collide",c=>{if(a.meteor&&!a.boomed){a.boomed=!0;let l=r.position;Sl(new z(l.x,l.y,l.z),7.5,22)}else{let l=c.contact.getImpactVelocityAlongNormal();Math.abs(l)>8&&(Qn.thud(Math.min(1,Math.abs(l)/40)),gr(15))}}),Ne.addBody(r),ei.push(a),ei.length>10){let c=ei.shift();Ne.removeBody(c.body),Ae.remove(c.mesh)}return a}function Sl(s,t,e){for(let n of Ue){if(n.gone)continue;let i=n.body.position,r=i.x-s.x,o=i.y-s.y,a=i.z-s.z,c=Math.hypot(r,o,a);if(c>t)continue;if(n.glass&&c<t*.8){Du(n);continue}let l=e*(1-c/t),h=1/Math.max(.3,c);n.body.wakeUp(),n.body.applyImpulse(new x(r*h*l*n.body.mass,(o*h+.45)*l*n.body.mass,a*h*l*n.body.mass)),n.body.angularVelocity.set(It(-1,1)*l*.4,It(-1,1)*l*.4,It(-1,1)*l*.4)}for(let n of ei){let i=n.body.position,r=Math.hypot(i.x-s.x,i.y-s.y,i.z-s.z);r<t&&r>.1&&n.body.applyImpulse(new x((i.x-s.x)/r*n.body.mass*4,2*n.body.mass,(i.z-s.z)/r*n.body.mass*4))}Rv(s,t),Go.position.copy(s),Go.intensity=900,_i=Math.min(1.4,_i+t/6),Qn.boom(Math.min(1,t/7)),gr(60)}function Du(s){if(s.gone)return;s.gone=!0,Ne.removeBody(s.body),qo(s),s.mesh.instanceMatrix.needsUpdate=!0;let t=s.body.position;for(let e=0;e<26;e++)Mi.spawn(t.x+It(-s.size.x,s.size.x)/2,t.y+It(-s.size.y,s.size.y)/2,t.z+It(-s.size.z,s.size.z)/2,It(-3,3),It(0,4),It(-3,3),.75+Pn()*.25,.88,.97,.9,It(.08,.16),It(.8,1.6),1);Qn.glass()}function Tv(s){Math.abs(s.contact.getImpactVelocityAlongNormal())>3.5&&s.target&&s.target.userData&&vl.add(s.target.userData)}var vl=new Set,_l=0;function Cv(s){let t=Math.abs(s.contact.getImpactVelocityAlongNormal());if(t<5||_l<=0)return;_l--;let e=s.contact.bi,n=s.contact.ri,i=e.position.x+n.x,r=e.position.y+n.y,o=e.position.z+n.z,a=Math.min(10,2+t*.6);for(let c=0;c<a;c++)Mi.spawn(i,r,o,It(-1.5,1.5),It(.2,2),It(-1.5,1.5),.62,.56,.5,.55,It(.5,1.1),It(1,2.2),.08);Pn()<.3&&Qn.thud(Math.min(1,t/25))}var Mi=(()=>{let t=new Float32Array(6600),e=new Float32Array(2200*4),n=new Float32Array(2200),i=new Float32Array(2200*3),r=new Float32Array(2200),o=new Float32Array(2200),a=new Float32Array(2200),c=new Float32Array(2200),l=new Float32Array(2200),h=0,d=new dn;d.setAttribute("position",new Te(t,3).setUsage(tr)),d.setAttribute("aColor",new Te(e,4).setUsage(tr)),d.setAttribute("aSize",new Te(n,1).setUsage(tr));let u=new tn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:400}},vertexShader:"attribute vec4 aColor; attribute float aSize; uniform float scale; varying vec4 vC; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; gl_FragColor=vec4(vC.rgb, vC.a*(1.0-r)); }"}),p=new fo(d,u);return p.frustumCulled=!1,Ae.add(p),{spawn(y,g,m,f,S,_,v,I,A,R,B,w,M){let P=h;h=(h+1)%2200,t[P*3]=y,t[P*3+1]=g,t[P*3+2]=m,i[P*3]=f,i[P*3+1]=S,i[P*3+2]=_,e[P*4]=v,e[P*4+1]=I,e[P*4+2]=A,e[P*4+3]=R,c[P]=R,l[P]=B,n[P]=B,r[P]=w,o[P]=w,a[P]=M},update(y){for(let g=0;g<2200;g++){if(r[g]<=0){e[g*4+3]!==0&&(e[g*4+3]=0);continue}r[g]-=y;let m=Math.max(0,r[g]/o[g]);i[g*3+1]-=9.8*a[g]*y;let f=1-(a[g]<.5?1.6:.3)*y;i[g*3]*=f,i[g*3+1]*=f,i[g*3+2]*=f,t[g*3]+=i[g*3]*y,t[g*3+1]+=i[g*3+1]*y,t[g*3+2]+=i[g*3+2]*y,t[g*3+1]<.05&&a[g]>.5&&!(Ee!=null&&Ee.river)&&(t[g*3+1]=.05,i[g*3+1]*=-.3),e[g*4+3]=c[g]*m,a[g]<.5&&(n[g]=l[g]*(1+(1-m)*1.8))}d.attributes.position.needsUpdate=!0,d.attributes.aColor.needsUpdate=!0,d.attributes.aSize.needsUpdate=!0},clear(){r.fill(0)},mat:u}})();function Rv(s,t){for(let e=0;e<70;e++){let n=Pn()*6.28,i=Pn()*1.2,r=It(4,14);Mi.spawn(s.x,s.y,s.z,Math.cos(n)*Math.cos(i)*r,Math.sin(i)*r+2,Math.sin(n)*Math.cos(i)*r,1,It(.45,.85),.15,1,It(.4,.9),It(.3,.7),.1)}for(let e=0;e<60;e++){let n=Pn()*6.28,i=It(1,t*.8);Mi.spawn(s.x+It(-1,1),s.y+It(0,1),s.z+It(-1,1),Math.cos(n)*i,It(1,5),Math.sin(n)*i,It(.25,.45),It(.23,.4),It(.22,.36),.65,It(1.2,2.4),It(1.8,3.5),.02)}}var Qn=(()=>{let s=null,t=null,e=()=>{if(s)return!0;try{s=new(window.AudioContext||window.webkitAudioContext);let a=s.sampleRate*2;t=s.createBuffer(1,a,s.sampleRate);let c=t.getChannelData(0);for(let l=0;l<a;l++)c[l]=Pn()*2-1;return!0}catch{return!1}},n=()=>xn.get("sound",!0);function i(a,c,l,h=.7,d="lowpass",u=0){if(!n()||!e())return;let p=s.createBufferSource();p.buffer=t,p.playbackRate.value=It(.8,1.2);let y=s.createBiquadFilter();y.type=d,y.frequency.value=c,y.Q.value=h,u&&y.frequency.exponentialRampToValueAtTime(Math.max(30,c*u),s.currentTime+a);let g=s.createGain();g.gain.setValueAtTime(l,s.currentTime),g.gain.exponentialRampToValueAtTime(.001,s.currentTime+a),p.connect(y),y.connect(g),g.connect(s.destination),p.start(),p.stop(s.currentTime+a)}function r(a,c,l,h,d="sine"){if(!n()||!e())return;let u=s.createOscillator();u.type=d,u.frequency.setValueAtTime(a,s.currentTime),u.frequency.exponentialRampToValueAtTime(c,s.currentTime+l);let p=s.createGain();p.gain.setValueAtTime(h,s.currentTime),p.gain.exponentialRampToValueAtTime(.001,s.currentTime+l),u.connect(p),p.connect(s.destination),u.start(),u.stop(s.currentTime+l)}let o=0;return{unlock(){e()&&s.state==="suspended"&&s.resume()},shoot(){i(.35,900,.5,1,"lowpass",.2),r(160,50,.25,.5)},boom(a){i(1.6,600,.9*(.5+a/2),.8,"lowpass",.08),r(90,30,.9,.7*a)},thud(a){let c=performance.now();c-o<60||(o=c,i(.25,250+a*300,.25+a*.35,1,"lowpass",.4))},glass(){i(.4,5e3,.25,4,"bandpass",1.4)},tick(){r(1400,1300,.08,.2,"square")},whoosh(){i(1.6,300,.4,2,"bandpass",6)},rumble(){i(4.5,120,.8,1,"lowpass",.6)}}})();function gr(s){if(Wo&&xn.get("vibro",!0))try{Wo.tick(s)}catch{}}var yn=new Map,sn=null;Yi.addEventListener("pointerdown",s=>{Qn.unlock(),Yi.setPointerCapture(s.pointerId),yn.set(s.pointerId,{x:s.clientX,y:s.clientY}),yn.size===1?sn={x0:s.clientX,y0:s.clientY,t0:performance.now(),moved:0,multi:!1}:sn&&(sn.multi=!0)});Yi.addEventListener("pointermove",s=>{let t=yn.get(s.pointerId);if(!t)return;let e=s.clientX-t.x,n=s.clientY-t.y;if(yn.size===1)sn&&(sn.moved+=Math.abs(e)+Math.abs(n)),(!sn||sn.moved>8)&&(Se.theta-=e*.006,Se.phi=Math.min(1.5,Math.max(.25,Se.phi-n*.005)));else if(yn.size===2){let[i,r]=[...yn.values()],o=Math.hypot(i.x-r.x,i.y-r.y);t.x=s.clientX,t.y=s.clientY;let[a,c]=[...yn.values()],l=Math.hypot(a.x-c.x,a.y-c.y);Se.r=Math.min(80,Math.max(8,Se.r*o/Math.max(1,l)));return}t.x=s.clientX,t.y=s.clientY});var Uu=s=>{yn.has(s.pointerId)&&(yn.delete(s.pointerId),yn.size===0&&sn&&!sn.multi&&sn.moved<10&&performance.now()-sn.t0<400&&Fu(s.clientX,s.clientY),yn.size===0&&(sn=null))};Yi.addEventListener("pointerup",Uu);Yi.addEventListener("pointercancel",Uu);Yi.addEventListener("wheel",s=>{Se.r=Math.min(80,Math.max(8,Se.r*(1+Math.sign(s.deltaY)*.1)))},{passive:!0});function Pv(){let s=Se.r,t=Se.target;Cn.position.set(t.x+s*Math.sin(Se.phi)*Math.sin(Se.theta),t.y+s*Math.cos(Se.phi),t.z+s*Math.sin(Se.phi)*Math.cos(Se.theta)),Cn.position.y<.6&&(Cn.position.y=.6),_i>.01&&Cn.position.add(new z(It(-1,1),It(-1,1),It(-1,1)).multiplyScalar(_i*.35)),Cn.lookAt(t)}function Zo(){let s=kt("weapons");s.innerHTML="";for(let t of Mv){let e=gn[t.id];if(!Kn&&Ee&&Ee.ammo[t.id]===0)continue;let n=document.createElement("button");n.className="wpn"+(nn===t.id?" on":"")+(e>0?"":" empty"),n.innerHTML=`<b>${t.icon}</b><span>${t.name}</span><em>${e===1/0?"\u221E":e}</em>`,n.onclick=()=>{nn=t.id,Zo(),gr(8),t.id==="quake"&&gn.quake>0&&Ls("\u0422\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0435\u043A\u0440\u0430\u043D\u0430 \u2014 \u0456 \u0437\u0435\u043C\u043B\u044F \u0437\u0430\u0442\u0440\u0443\u0441\u0438\u0442\u044C\u0441\u044F")},s.appendChild(n)}}var fr=0;function Ou(s){fr+=(s-fr)*.2,kt("pct").textContent=Math.round(fr*100)+"%",kt("fill").style.width=fr*100+"%",kt("goal").style.left=(Ee?Ee.goal*100:70)+"%",kt("goal").hidden=Kn,kt("fill").classList.toggle("won",!Kn&&Ee&&fr>=Ee.goal)}function Ls(s){let t=kt("toast");t.textContent=s,t.style.opacity=1,clearTimeout(Ls.h),Ls.h=setTimeout(()=>t.style.opacity=0,2200)}function Iv(s){mr=!0,ti="result";let t=s>=.95?3:s>=Math.min(.85,Ee.goal+.15)?2:s>=Ee.goal?1:0,e=xn.get("stars",{});t>(e[Ee.id]||0)&&(e[Ee.id]=t,xn.set("stars",e)),kt("rTitle").textContent=t?["","\u0404!","\u0427\u0443\u0434\u043E\u0432\u043E!","\u041D\u0438\u0449\u0456\u0432\u043D\u043E!"][t]:"\u0429\u0435 \u0441\u0442\u043E\u0457\u0442\u044C",kt("rPct").textContent=Math.round(s*100)+"%",kt("rStars").innerHTML=[1,2,3].map(r=>`<i class="${r<=t?"on":""}">\u2605</i>`).join(""),kt("rText").textContent=t?`\u0417\u0440\u0443\u0439\u043D\u043E\u0432\u0430\u043D\u043E ${Math.round(s*100)}% \u0437\u0430 ${Yo} ${Bv(Yo)}.`:`\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ${Math.round(Ee.goal*100)}%. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u043B\u0443\u0447\u0430\u0442\u0438 \u0432 \u043E\u043F\u043E\u0440\u0438.`;let n=Gi.indexOf(Ee),i=Gi[n+1];kt("rNext").hidden=!(t&&i),kt("rNext").onclick=()=>Xi(i),kt("result").hidden=!1,gr(t?40:10)}var Bv=s=>s%10===1&&s%100!==11?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B":s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0438":"\u043F\u043E\u0441\u0442\u0440\u0456\u043B\u0456\u0432";function wl(){ti="menu",kt("hud").hidden=!0,kt("result").hidden=!0,kt("menu").hidden=!1;let s=xn.get("stars",{}),t=kt("levels");t.innerHTML="",Gi.forEach((n,i)=>{let r=i===0||(s[Gi[i-1].id]||0)>0,o=s[n.id]||0,a=document.createElement("button");a.className="lvl"+(r?"":" locked"),a.innerHTML=`<span class="n">${i+1}</span><b>${n.name}</b><span class="d">${n.desc}</span><span class="st">${[1,2,3].map(c=>`<i class="${c<=o?"on":""}">\u2605</i>`).join("")}</span>`,a.onclick=()=>r?Xi(n):Ls("\u0421\u043F\u0435\u0440\u0448\u0443 \u0437\u0440\u0443\u0439\u043D\u0443\u0439\u0442\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0441\u043F\u043E\u0440\u0443\u0434\u0443"),t.appendChild(a)});let e=kt("freeList");e.innerHTML="";for(let n of Gi){let i=document.createElement("button");i.className="chip",i.textContent=n.name,i.onclick=()=>Xi(n,!0),e.appendChild(i)}Ue.length||(Xi(Gi[2],!0),ti="menu",kt("hud").hidden=!0,kt("menu").hidden=!1)}kt("btnMenu").onclick=wl;kt("btnRestart").onclick=()=>Xi(Ee,Kn);kt("rAgain").onclick=()=>Xi(Ee,Kn);kt("rMenu").onclick=wl;kt("btnDiary").onclick=()=>kt("diary").classList.add("open");kt("closeDiary").onclick=()=>kt("diary").classList.remove("open");var bl=kt("optSound"),Ml=kt("optVibro");bl.checked=xn.get("sound",!0);Ml.checked=xn.get("vibro",!0);bl.onchange=()=>xn.set("sound",bl.checked);Ml.onchange=()=>xn.set("vibro",Ml.checked);function Lv(){let s=(window.CHANGELOG||[]).slice().sort((e,n)=>n.day-e.day);kt("diaryList").innerHTML=s.map(e=>`<div class="entry"><span class="d">\u0414\u0415\u041D\u042C ${e.day} \xB7 ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");let t=Wo?Wo.version():"";t&&(kt("ver").textContent="\u0412\u0435\u0440\u0441\u0456\u044F "+t+" \xB7 \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u044F Claude")}function Vu(){let s=innerWidth,t=innerHeight;bi.setSize(s,t,!1),Cn.aspect=s/t,Cn.updateProjectionMatrix(),Mi.mat.uniforms.scale.value=t*bi.getPixelRatio()*.9}addEventListener("resize",Vu);Vu();var Iu=performance.now(),Ho=0;function zu(s){requestAnimationFrame(zu);let t=Math.min(.05,(s-Iu)/1e3);if(Iu=s,Ho++,_l=6,ti==="menu"&&(Se.theta+=t*.08),ye&&$e){ye.t+=t;let n=ye.f*Math.PI*2,i=ye.t<ye.dur?Math.min(1,ye.t*2)*Math.min(1,(ye.dur-ye.t)*2):0,r=ye.a*n*Math.cos(n*ye.t)*i;$e.velocity.set(Math.cos(ye.dir)*r,.25*r*Math.sin(n*ye.t*1.7),Math.sin(ye.dir)*r),_i=Math.max(_i,.3*i),ye.t>=ye.dur&&($e.velocity.set(0,0,0),$e.position.set(0,0,0),$e.type=Ot.STATIC,ye=null)}Ne.step(1/60,t,3),pr+=t,Rn&&$e&&Rn.position.copy($e.position);for(let n of vl)Du(n);vl.clear();for(let n=qi.length-1;n>=0;n--){let i=qi[n];i.t-=t,i.mesh.material.emissiveIntensity=.4+Math.abs(Math.sin(i.t*18))*2,i.t<=0&&(Ae.remove(i.mesh),qi.splice(n,1),Sl(i.pos,5.5,17))}for(let n=ei.length-1;n>=0;n--){let i=ei[n];if(i.age+=t,i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion),i.meteor&&!i.boomed)for(let r=0;r<3;r++)Mi.spawn(i.body.position.x+It(-1,1),i.body.position.y+It(-1,1),i.body.position.z+It(-1,1),It(-1,1),It(0,2),It(-1,1),1,It(.4,.7),.2,.9,It(.9,1.8),It(.4,.9),0);(i.age>14||i.body.position.y<-40)&&(Ne.removeBody(i.body),Ae.remove(i.mesh),ei.splice(n,1))}if(Ho%2===0)for(let n of Ue){if(n.gone||n.body.sleepState===Ot.SLEEPING)continue;let i=n.body.velocity;if(i.x*i.x+i.y*i.y+i.z*i.z<1)continue;let r=n.body.position;for(let o of Ue){if(o.gone||o.body.sleepState!==Ot.SLEEPING)continue;let a=o.body.position;Math.abs(a.x-r.x)<2.6&&Math.abs(a.y-r.y)<2.6&&Math.abs(a.z-r.z)<2.6&&o.body.wakeUp()}}let e={};for(let n of Ue)if(!n.gone){if(n.body.position.y<-40){n.gone=!0,Ne.removeBody(n.body),qo(n),e[n.type]=1;continue}(n.body.sleepState!==Ot.SLEEPING||ye||Ho<3)&&(qo(n),e[n.type]=1)}for(let n in e)Bs[n].instanceMatrix.needsUpdate=!0;if(Mi.update(t),Go.intensity*=Math.pow(.02,t),_i*=Math.pow(.05,t),Pv(),bi.render(Ae,Cn),ti==="play"&&Ho%10===0){let n=xl();if(Ou(n),!Kn&&!mr){let i=Object.values(gn).reduce((a,c)=>a+c,0)+qi.length,r=Ue.filter(a=>!a.gone&&a.body.sleepState!==Ot.SLEEPING).length,o=pr-Xo>2.5&&r<Ue.length*.03&&!ye;(i===0&&(o||pr-Xo>9)||n>=.995)&&setTimeout(()=>{!mr&&ti==="play"&&Iv(xl())},600)}}}window.__ruina={startLevel:Xi,LEVELS:Gi,fire:Fu,get state(){return ti},destruction:xl,explode:(s,t,e,n,i)=>Sl(new z(s,t,e),n,i),setWeapon:s=>{nn=s,Zo()},get blocks(){return Ue.length}};Lv();wl();requestAnimationFrame(zu);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
