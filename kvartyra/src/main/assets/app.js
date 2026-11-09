(()=>{var Nd=0,sh=1,Fd=2;var mu=1,dc=2,Zn=3,Un=0,Oe=1,Xe=2,pi=0,us=1,pa=2,rh=3,ma=4,Od=5,Li=100,Bd=101,zd=102,kd=103,Hd=104,Vd=200,Gd=201,Wd=202,Xd=203,qo=204,Yo=205,qd=206,Yd=207,$d=208,Zd=209,Jd=210,Kd=211,Qd=212,jd=213,tf=214,$o=0,Zo=1,Jo=2,ms=3,Ko=4,Qo=5,jo=6,tl=7,gu=0,ef=1,nf=2,mi=0,sf=1,rf=2,af=3,of=4,lf=5,cf=6,fc=7;var xu=300,gs=301,xs=302,el=303,nl=304,Va=306,lr=1e3,Ui=1001,il=1002,cn=1003,hf=1004;var Nr=1005;var Ln=1006,po=1007;var Ni=1008;var jn=1009,_u=1010,vu=1011,cr=1012,pc=1013,Fi=1014,Dn=1015,vr=1016,mc=1017,gc=1018,_s=1020,yu=35902,Mu=1021,bu=1022,wn=1023,Su=1024,Eu=1025,ds=1026,vs=1027,xc=1028,_c=1029,wu=1030,vc=1031;var yc=1033,ca=33776,ha=33777,ua=33778,da=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,vl=37816,yl=37817,Ml=37818,bl=37819,Sl=37820,El=37821,fa=36492,wl=36494,Tl=36495,Tu=36283,Al=36284,Rl=36285,Cl=36286;var ga=2300,Il=2301,mo=2302,ah=2400,oh=2401,lh=2402;var uf=3200,df=3201;var Au=0,ff=1,di="",Ze="srgb",As="srgb-linear",Ga="linear",he="srgb";var Xi=7680;var ch=519,pf=512,mf=513,gf=514,Ru=515,xf=516,_f=517,vf=518,yf=519,Pl=35044;var hh="300 es",Jn=2e3,xa=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,rr=Math.PI/180,ys=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function Mf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bf(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function Sf(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function Ef(i,t=1){return t-Math.abs(Mc(i,t*2)-t)}function wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rf(i,t){return i+Math.random()*(t-i)}function Cf(i){return i*(.5-Math.random())}function If(i){i!==void 0&&(uh=i);let t=uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pf(i){return i*rr}function Lf(i){return i*ys}function Df(i){return(i&i-1)===0&&i!==0}function Uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ff(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fn={DEG2RAD:rr,RAD2DEG:ys,generateUUID:Kn,clamp:Je,euclideanModulo:Mc,mapLinear:Mf,inverseLerp:bf,lerp:ar,damp:Sf,pingpong:Ef,smoothstep:wf,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:If,degToRad:Pf,radToDeg:Lf,isPowerOfTwo:Df,ceilPowerOfTwo:Uf,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Ff,normalize:le,denormalize:En},zt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],E=s[4],b=s[7],L=s[2],A=s[5],C=s[8];return r[0]=a*x+o*w+l*L,r[3]=a*m+o*E+l*A,r[6]=a*p+o*b+l*C,r[1]=c*x+h*w+u*L,r[4]=c*m+h*E+u*A,r[7]=c*p+h*b+u*C,r[2]=d*x+f*w+g*L,r[5]=d*m+f*E+g*A,r[8]=d*p+f*b+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},go=new Ht;function Cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Of(){let i=_a("canvas");return i.style.display="block",i}var dh={};function ir(i){i in dh||(dh[i]=!0,console.warn(i))}function Bf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fh=[.64,.33,.3,.6,.15,.06],ph=[.2126,.7152,.0722],mh=[.3127,.329],gh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[As]:{primaries:fh,whitePoint:mh,transfer:Ga,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:ph,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:fh,whitePoint:mh,transfer:he,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:ph,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});var qi,Ll=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=_a("canvas")),qi.width=t.width,qi.height=t.height;let n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,en=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=Ln,a=Ni,o=wn,l=jn,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Kn(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=xu;en.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,b=(f+1)/2,L=(p+1)/2,A=(h+d)/4,C=(u+x)/4,P=(g+m)/4;return E>b&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=C/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let L=Math.sqrt(E),A=Math.atan2(L,p*w);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}let b=o*w;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new I,_h=new Tn,ei=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Or.subVectors(this.max,qs),Yi.subVectors(t.a,qs),$i.subVectors(t.b,qs),Zi.subVectors(t.c,qs),ai.subVectors($i,Yi),oi.subVectors(Zi,$i),wi.subVectors(Yi,Zi);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!vo(e,Yi,$i,Zi,Or)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Yi,$i,Zi,Or))?!1:(Br.crossVectors(ai,oi),e=[Br.x,Br.y,Br.z],vo(e,Yi,$i,Zi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Fr=new ei,Yi=new I,$i=new I,Zi=new I,ai=new I,oi=new I,wi=new I,qs=new I,Or=new I,Br=new I,Ti=new I;function vo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gf=new ei,Ys=new I,yo=new I,xi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(yo)),this.expandByPoint(Ys.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new I,Mo=new I,zr=new I,li=new I,bo=new I,kr=new I,So=new I,hr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mo.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Mo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=li.dot(this.direction),l=-li.dot(zr),c=li.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(zr,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),kr.subVectors(n,t),So.crossVectors(bo,kr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);let l=o*this.direction.dot(kr.crossVectors(li,kr));if(l<0)return null;let c=o*this.direction.dot(bo.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ci.crossVectors(n,on),ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ci.crossVectors(n,on)),ci.normalize(),Hr.crossVectors(on,ci),s[0]=ci.x,s[4]=Hr.x,s[8]=on.x,s[1]=ci.y,s[5]=Hr.y,s[9]=on.y,s[2]=ci.z,s[6]=Hr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],E=n[7],b=n[11],L=n[15],A=s[0],C=s[4],P=s[8],M=s[12],v=s[1],R=s[5],D=s[9],O=s[13],G=s[2],Z=s[6],z=s[10],it=s[14],V=s[3],K=s[7],rt=s[11],Et=s[15];return r[0]=a*A+o*v+l*G+c*V,r[4]=a*C+o*R+l*Z+c*K,r[8]=a*P+o*D+l*z+c*rt,r[12]=a*M+o*O+l*it+c*Et,r[1]=h*A+u*v+d*G+f*V,r[5]=h*C+u*R+d*Z+f*K,r[9]=h*P+u*D+d*z+f*rt,r[13]=h*M+u*O+d*it+f*Et,r[2]=g*A+x*v+m*G+p*V,r[6]=g*C+x*R+m*Z+p*K,r[10]=g*P+x*D+m*z+p*rt,r[14]=g*M+x*O+m*it+p*Et,r[3]=w*A+E*v+b*G+L*V,r[7]=w*C+E*R+b*Z+L*K,r[11]=w*P+E*D+b*z+L*rt,r[15]=w*M+E*O+b*it+L*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,E=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,L=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=e*w+n*E+s*b+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=w*C,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=b*C,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=L*C,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,w=l*c,E=l*h,b=l*u,L=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+b)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(m-w)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===Jn)g=(a+r)*u,x=-2*u;else if(o===xa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ji=new I,Mn=new Zt,Wf=new I(0,0,0),Xf=new I(1,1,1),ci=new I,Hr=new I,on=new I,vh=new Zt,yh=new Tn,Nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qf=0,Mh=new I,Ki=new Tn,qn=new Zt,Vr=new I,$s=new I,Yf=new I,$f=new Tn,bh=new I(1,0,0),Sh=new I(0,1,0),Eh=new I(0,0,1),wh={type:"added"},Zf={type:"removed"},Qi={type:"childadded",child:null},Eo={type:"childremoved",child:null},Pe=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Nn,n=new Tn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Sh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return Mh.copy(t).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Sh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt($s,Vr,this.up):qn.lookAt(Vr,$s,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(qn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new I(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new I,Yn=new I,wo=new I,$n=new I,ji=new I,ts=new I,Th=new I,To=new I,Ao=new I,Ro=new I,Co=new ue,Io=new ue,Po=new ue,fi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Yn.subVectors(n,e),wo.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(Yn),l=bn.dot(wo),c=Yn.dot(Yn),h=Yn.dot(wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Io.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Yn.subVectors(t,e),bn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),ts.subVectors(r,n),To.subVectors(t,n);let l=ji.dot(To),c=ts.dot(To);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,s);let h=ji.dot(Ao),u=ts.dot(Ao);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Ro.subVectors(t,r);let f=ji.dot(Ro),g=ts.dot(Ro);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ts,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Th.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Th,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(ji,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Mc(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.fromWorkingColorSpace(We.copy(this),t),Math.round(Je(We.r*255,0,255))*65536+Math.round(Je(We.g*255,0,255))*256+Math.round(Je(We.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ze){te.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Gr);let n=ar(hi.h,Gr.h,e),s=ar(hi.s,Gr.s,e),r=ar(hi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Ot;Ot.NAMES=Iu;var Jf=0,ni=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Kn(),this.name="",this.blending=us,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new I,Wr=new zt,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pl&&(t.usage=this.usage),t}};var Ma=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kf=0,dn=new Zt,Do=new Pe,es=new I,ln=new ei,Zs=new ei,Fe=new I,Ie=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(ln.min,Zs.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,Zs.max),ln.expandByPoint(Fe)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),Fe.add(es)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let c=new I,h=new I,u=new I,d=new zt,f=new zt,g=new zt,x=new I,m=new I;function p(P,M,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(x),o[M].add(x),o[v].add(x),l[P].add(m),l[M].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,M=w.length;P<M;++P){let v=w[P],R=v.start,D=v.count;for(let O=R,G=R+D;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new I,b=new I,L=new I,A=new I;function C(P){L.fromBufferAttribute(s,P),A.copy(L);let M=o[P];E.copy(M),E.sub(L.multiplyScalar(L.dot(M))).normalize(),b.crossVectors(A,M);let R=b.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,M=w.length;P<M;++P){let v=w[P],R=v.start,D=v.count;for(let O=R,G=R+D;O<G;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ah=new Zt,Ai=new hr,Xr=new xi,Rh=new I,qr=new I,Yr=new I,$r=new I,Uo=new I,Zr=new I,Ch=new I,Jr=new I,_t=class extends Pe{constructor(t=new Ie,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uo.fromBufferAttribute(u,t),a?Zr.addScaledVector(Uo,h):Zr.addScaledVector(Uo.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Xr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Xr,Rh)===null||Ai.origin.distanceToSquared(Rh)>(t.far-t.near)**2))&&(Ah.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,L=E;b<L;b+=3){let A=o.getX(b),C=o.getX(b+1),P=o.getX(b+2);s=Kr(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Kr(this,a,t,n,c,h,u,w,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,L=E;b<L;b+=3){let A=b,C=b+1,P=b+2;s=Kr(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,E=m+1,b=m+2;s=Kr(this,a,t,n,c,h,u,w,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qf(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Un,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function Kr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Yr),i.getVertexPosition(c,$r);let h=Qf(i,t,e,n,qr,Yr,$r,Ch);if(h){let u=new I;fi.getBarycoord(Ch,qr,Yr,$r,u),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,u,new zt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,u,new zt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};fi.getNormal(qr,Yr,$r,d.normal),h.face=d,h.barycoord=u}return h}var Te=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(x,m,p,w,E,b,L,A,C,P,M){let v=b/C,R=L/P,D=b/2,O=L/2,G=A/2,Z=C+1,z=P+1,it=0,V=0,K=new I;for(let rt=0;rt<z;rt++){let Et=rt*R-O;for(let Dt=0;Dt<Z;Dt++){let Vt=Dt*v-D;K[x]=Vt*w,K[m]=Et*E,K[p]=G,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(Dt/C),u.push(1-rt/P),it+=1}}for(let rt=0;rt<P;rt++)for(let Et=0;Et<C;Et++){let Dt=d+Et+Z*rt,Vt=d+Et+Z*(rt+1),X=d+(Et+1)+Z*(rt+1),tt=d+(Et+1)+Z*rt;l.push(Dt,Vt,tt),l.push(Vt,X,tt),V+=6}o.addGroup(f,V,M),f+=V,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var tp={clone:Ms,merge:$e},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new I,Ih=new zt,Ph=new zt,ze=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Ph),e.subVectors(Ph,Ih)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,is=1,Nl=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(ns,is,t,e);s.layers=this.layers,this.add(s);let r=new ze(ns,is,t,e);r.layers=this.layers,this.add(r);let a=new ze(ns,is,t,e);a.layers=this.layers,this.add(a);let o=new ze(ns,is,t,e);o.layers=this.layers,this.add(o);let l=new ze(ns,is,t,e);l.layers=this.layers,this.add(l);let c=new ze(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ea=class extends en{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fl=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:pi});r.uniforms.tEquirect.value=e;let a=new _t(s,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Ln),new Nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},No=new I,ip=new I,sp=new Ht,Sn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sp.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new xi,Qr=new I,dr=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],E=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+w).normalize(),n[3].setComponents(l-a,d-h,m-g,b-w).normalize(),n[4].setComponents(l-o,d-u,m-x,b-E).normalize(),e===Jn)n[5].setComponents(l+o,d+u,m+x,b+E).normalize();else if(e===xa)n[5].setComponents(o,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ke=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*d-a;for(let E=0;E<c;E++){let b=E*u-r;g.push(b,-w,0),x.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let E=w+c*p,b=w+c*(p+1),L=w+1+c*(p+1),A=w+1+c*p;f.push(E,b,A),f.push(b,L,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,rm=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,L0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Ep,color_fragment:wp,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Kp,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:xm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:bm,normal_fragment_begin:Sm,normal_fragment_maps:Em,normal_pars_fragment:wm,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Km,tonemapping_pars_fragment:Qm,transmission_fragment:jm,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:s0,background_vert:r0,background_frag:a0,backgroundCube_vert:o0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:d0,distanceRGBA_vert:f0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:x0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:b0,meshmatcap_vert:S0,meshmatcap_frag:E0,meshnormal_vert:w0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:I0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:D0,points_frag:U0,shadow_vert:N0,shadow_frag:F0,sprite_vert:O0,sprite_frag:B0},ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Pn={basic:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:$e([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:$e([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:$e([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:$e([ct.points,ct.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:$e([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:$e([ct.common,ct.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:$e([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:$e([ct.sprite,ct.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:$e([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:$e([ct.lights,ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Pn.physical={uniforms:$e([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var jr={r:0,b:0,g:0},Ci=new Nn,z0=new Zt;function k0(i,t,e,n,s,r,a){let o=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function x(w){let E=!1,b=g(w);b===null?p(o,l):b&&b.isColor&&(p(b,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,E){let b=g(E);b&&(b.isCubeTexture||b.mapping===Va)?(h===void 0&&(h=new _t(new Te(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ms(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(Ci)),h.material.toneMapped=te.getTransfer(b.colorSpace)!==he,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new _t(new Ke(2,2),new hn({name:"BackgroundMaterial",uniforms:Ms(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=te.getTransfer(b.colorSpace)!==he,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,E){w.getRGB(jr,Pu(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m}}function H0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,R,D,O,G){let Z=!1,z=u(O,D,R);r!==z&&(r=z,c(r.object)),Z=f(v,O,D,G),Z&&g(v,O,D,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(v,R,D,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,R,D){let O=D.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Z=G[R.id];Z===void 0&&(Z={},G[R.id]=Z);let z=Z[O];return z===void 0&&(z=d(l()),Z[O]=z),z}function d(v){let R=[],D=[],O=[];for(let G=0;G<e;G++)R[G]=0,D[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,R,D,O){let G=r.attributes,Z=R.attributes,z=0,it=D.getAttributes();for(let V in it)if(it[V].location>=0){let rt=G[V],Et=Z[V];if(Et===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Et=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Et=v.instanceColor)),rt===void 0||rt.attribute!==Et||Et&&rt.data!==Et.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function g(v,R,D,O){let G={},Z=R.attributes,z=0,it=D.getAttributes();for(let V in it)if(it[V].location>=0){let rt=Z[V];rt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));let Et={};Et.attribute=rt,rt&&rt.data&&(Et.data=rt.data),G[V]=Et,z++}r.attributes=G,r.attributesNum=z,r.index=O}function x(){let v=r.newAttributes;for(let R=0,D=v.length;R<D;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){let D=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;D[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),G[v]!==R&&(i.vertexAttribDivisor(v,R),G[v]=R)}function w(){let v=r.newAttributes,R=r.enabledAttributes;for(let D=0,O=R.length;D<O;D++)R[D]!==v[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function E(v,R,D,O,G,Z,z){z===!0?i.vertexAttribIPointer(v,R,D,G,Z):i.vertexAttribPointer(v,R,D,O,G,Z)}function b(v,R,D,O){x();let G=O.attributes,Z=D.getAttributes(),z=R.defaultAttributeValues;for(let it in Z){let V=Z[it];if(V.location>=0){let K=G[it];if(K===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){let rt=K.normalized,Et=K.itemSize,Dt=t.get(K);if(Dt===void 0)continue;let Vt=Dt.buffer,X=Dt.type,tt=Dt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===pc;if(K.isInterleavedBufferAttribute){let lt=K.data,At=lt.stride,Pt=K.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)p(V.location+Bt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)m(V.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Bt=0;Bt<V.locationSize;Bt++)E(V.location+Bt,Et/V.locationSize,X,rt,At*tt,(Pt+Et/V.locationSize*Bt)*tt,vt)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,K.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let lt=0;lt<V.locationSize;lt++)E(V.location+lt,Et/V.locationSize,X,rt,Et*tt,Et/V.locationSize*lt*tt,vt)}}else if(z!==void 0){let rt=z[it];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(V.location,rt);break;case 3:i.vertexAttrib3fv(V.location,rt);break;case 4:i.vertexAttrib4fv(V.location,rt);break;default:i.vertexAttrib1fv(V.location,rt)}}}}w()}function L(){P();for(let v in n){let R=n[v];for(let D in R){let O=R[D];for(let G in O)h(O[G].object),delete O[G];delete R[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let R=n[v.id];for(let D in R){let O=R[D];for(let G in O)h(O[G].object),delete O[G];delete R[D]}delete n[v.id]}function C(v){for(let R in n){let D=n[R];if(D[v.id]===void 0)continue;let O=D[v.id];for(let G in O)h(O[G].object),delete O[G];delete D[v.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function V0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Dn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:L,maxSamples:A}}function W0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Sn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,E=w*4,b=p.clippingState||null;l.value=b,b=h(g,d,E,f);for(let L=0;L!==E;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==x;++E,b+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function X0(i){let t=new WeakMap;function e(a,o){return o===el?a.mapping=gs:o===nl&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===el||o===nl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Fl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wa=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hs=4,Lh=[.125,.215,.35,.446,.526,.582],Di=20,Fo=new wa,Dh=new Ot,Oo=null,Bo=0,zo=0,ko=!1,Pi=(1+Math.sqrt(5))/2,ss=1/Pi,Uh=[new I(-Pi,ss,0),new I(Pi,ss,0),new I(-ss,0,Pi),new I(ss,0,Pi),new I(0,Pi,-ss),new I(0,Pi,ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,zo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:vr,format:wn,colorSpace:As,depthBuffer:!1},s=Nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Y0(r,t,e)}return s}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dh),h.toneMapping=mi,h.autoClear=!1;let f=new qe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new _t(new Te,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Dh),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let E=this._cubeSize;ta(s,w*E,p>2?E:0,E,E),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uh[(s-r-1)%Uh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);let p=[],w=0;for(let C=0;C<Di;++C){let P=C/x,M=Math.exp(-P*P/2);p.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let b=this._sizeLods[s],L=3*b*(s>E-hs?s-E+hs:0),A=4*(this._cubeSize-b);ta(e,L,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Fo)}};function q0(i){let t=[],e=[],n=[],s=i,r=i-hs+1+Lh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-hs?l=Lh[a-i+hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,P=A>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(M,x*g*A),E.set(d,m*g*A);let v=[A,A,A,A,A,A];b.set(v,p*g*A)}let L=new Ie;L.setAttribute("position",new ke(w,x)),L.setAttribute("uv",new ke(E,m)),L.setAttribute("faceIndex",new ke(b,p)),t.push(L),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nh(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Y0(i,t,e){let n=new Float32Array(Di),s=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Fh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Oh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function $0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===el||l===nl,h=l===gs||l===xs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let E=0,b=w.length;E<b;E+=3){let L=w[E+0],A=w[E+1],C=w[E+2];d.push(L,A,A,C,C,L)}}else if(g!==void 0){let w=g.array;x=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){let L=E+0,A=E+1,C=E+2;d.push(L,A,A,C,C,L)}}else return;let m=new(Cu(d)?ba:Ma)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function K0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*L*4*u),C=new ya(A,b,L,u);C.type=Dn,C.needsUpdate=!0;let P=E*4;for(let v=0;v<u;v++){let R=m[v],D=p[v],O=w[v],G=b*L*4*v;for(let Z=0;Z<R.count;Z++){let z=Z*P;f===!0&&(s.fromBufferAttribute(R,Z),A[G+z+0]=s.x,A[G+z+1]=s.y,A[G+z+2]=s.z,A[G+z+3]=0),g===!0&&(s.fromBufferAttribute(D,Z),A[G+z+4]=s.x,A[G+z+5]=s.y,A[G+z+6]=s.z,A[G+z+7]=0),x===!0&&(s.fromBufferAttribute(O,Z),A[G+z+8]=s.x,A[G+z+9]=s.y,A[G+z+10]=s.z,A[G+z+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new zt(b,L)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ta=class extends en{constructor(t,e,n,s,r,a,o,l,c,h=ds){if(h!==ds&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Fi),n===void 0&&h===vs&&(n=_s),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Du=new en,Bh=new Ta(1,1),Uu=new ya,Nu=new Ul,Fu=new Ea,zh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),De(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),De(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),De(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bh.compareFunction=Ru,r=Bh):r=Du,e.setTexture2D(t||r,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function bg(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Eg(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function wg(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rg(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ug(i,t){i.uniform3uiv(this.addr,t)}function Ng(i,t){i.uniform4uiv(this.addr,t)}function Fg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Du,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nu,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fu,r[a])}function zg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uu,r[a])}function kg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Ig;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}var Ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function Wh(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),a=Ho.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wh(e,c===void 0?new Ol(o,i,t):new Bl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new zl(o),Wh(e,u)),e=u}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Gg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qh=new Ht;function Xg(i){te._getMatrix(qh,te.workingColorSpace,i);let t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ga:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),a)}else return s}function qg(i,t){let e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yg(i,t){let e;switch(t){case sf:e="Linear";break;case rf:e="Reinhard";break;case af:e="Cineon";break;case of:e="ACESFilmic";break;case cf:e="AgX";break;case fc:e="Neutral";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ea=new I;function $g(){te.getLuminanceCoefficients(ea);let i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function $h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(Qg,tx)}var jg=new Map;function tx(i,t){let e=Yt[t];if(e===void 0){let n=jg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(ex,nx)}function nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ix(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xs&&(t="ENVMAP_MODE_REFRACTION"),t}function ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ix(e),c=sx(e),h=rx(e),u=ax(e),d=ox(e),f=Zg(e),g=Jg(r),x=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=kl(a),a=$h(a,e),a=Zh(a,e),o=kl(o),o=$h(o,e),o=Zh(o,e),a=Jh(a),o=Jh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=w+m+a,b=w+p+o,L=Xh(s,s.VERTEX_SHADER,E),A=Xh(s,s.FRAGMENT_SHADER,b);s.attachShader(x,L),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(A).trim(),Z=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{let it=Yh(s,L,"vertex"),V=Yh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+it+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||G==="")&&(z=!1);z&&(R.diagnostics={runnable:Z,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(L),s.deleteShader(A),P=new ps(s,x),M=Kg(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Vg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var cx=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vl(t),e.set(t,n)),n}},Vl=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function hx(i,t,e,n,s,r,a){let o=new ur,l=new Hl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,D,O){let G=D.fog,Z=O.geometry,z=M.isMeshStandardMaterial?D.environment:null,it=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),V=it&&it.mapping===Va?it.image.height:null,K=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=rt!==void 0?rt.length:0,Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let Vt,X,tt,vt;if(K){let oe=Pn[K];Vt=oe.vertexShader,X=oe.fragmentShader}else Vt=M.vertexShader,X=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);let lt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,ie=!!M.map,$t=!!M.matcap,de=!!it,y=!!M.aoMap,j=!!M.lightMap,et=!!M.bumpMap,nt=!!M.normalMap,J=!!M.displacementMap,ft=!!M.emissiveMap,at=!!M.metalnessMap,T=!!M.roughnessMap,_=M.anisotropy>0,B=M.clearcoat>0,$=M.dispersion>0,Y=M.iridescence>0,W=M.sheen>0,yt=M.transmission>0,ut=_&&!!M.anisotropyMap,gt=B&&!!M.clearcoatMap,Jt=B&&!!M.clearcoatNormalMap,st=B&&!!M.clearcoatRoughnessMap,Mt=Y&&!!M.iridescenceMap,Ut=Y&&!!M.iridescenceThicknessMap,Ft=W&&!!M.sheenColorMap,wt=W&&!!M.sheenRoughnessMap,jt=!!M.specularMap,qt=!!M.specularColorMap,fe=!!M.specularIntensityMap,U=yt&&!!M.transmissionMap,dt=yt&&!!M.thicknessMap,q=!!M.gradientMap,Q=!!M.alphaMap,xt=M.alphaTest>0,pt=!!M.alphaHash,Gt=!!M.extensions,we=mi;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(we=i.toneMapping);let Ve={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:X,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:$t,envMap:de,envMapMode:de&&it.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:j,bumpMap:et,normalMap:nt,displacementMap:d&&J,emissiveMap:ft,normalMapObjectSpace:nt&&M.normalMapType===ff,normalMapTangentSpace:nt&&M.normalMapType===Au,metalnessMap:at,roughnessMap:T,anisotropy:_,anisotropyMap:ut,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:st,dispersion:$,iridescence:Y,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:W,sheenColorMap:Ft,sheenRoughnessMap:wt,specularMap:jt,specularColorMap:qt,specularIntensityMap:fe,transmission:yt,transmissionMap:U,thicknessMap:dt,gradientMap:q,opaque:M.transparent===!1&&M.blending===us&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:pt,combine:M.combine,mapUv:ie&&x(M.map.channel),aoMapUv:y&&x(M.aoMap.channel),lightMapUv:j&&x(M.lightMap.channel),bumpMapUv:et&&x(M.bumpMap.channel),normalMapUv:nt&&x(M.normalMap.channel),displacementMapUv:J&&x(M.displacementMap.channel),emissiveMapUv:ft&&x(M.emissiveMap.channel),metalnessMapUv:at&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:ut&&x(M.anisotropyMap.channel),clearcoatMapUv:gt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(M.sheenRoughnessMap.channel),specularMapUv:jt&&x(M.specularMap.channel),specularColorMapUv:qt&&x(M.specularColorMap.channel),specularIntensityMapUv:fe&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:dt&&x(M.thicknessMap.channel),alphaMapUv:Q&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(nt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(ie||Q),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:ft&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(v,M),E(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let v=g[M.type],R;if(v){let D=Pn[v];R=tp.clone(D.uniforms)}else R=M.uniforms;return R}function L(M,v){let R;for(let D=0,O=h.length;D<O;D++){let G=h[D];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new lx(i,v,M,r),h.push(R)),R}function A(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function ux(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||dx),n.length>1&&n.sort(d||Qh),s.length>1&&s.sort(d||Qh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function fx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new jh,i.set(n,[a])):s>=r.length?(a=new jh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ot};break;case"SpotLight":e={position:new I,direction:new I,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gx=0;function xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new px,e=mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,E=0,b=0,L=0,A=0,C=0;c.sort(xx);for(let M=0,v=c.length;M<v;M++){let R=c[M],D=R.color,O=R.intensity,G=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let it=R.shadow,V=e.get(R);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=z,f++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(D).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[x]=z;let it=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,it.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[x]=it.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=Z,b++}x++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(D).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let it=R.shadow,V=e.get(R);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,V.shadowCameraNear=it.camera.near,V.shadowCameraFar=it.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=z,g++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==L||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=L,P.numLightProbes=C,n.version=gx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let E=c[p];if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(E.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function tu(i){let t=new _x(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tu(i),t.set(s,[o])):r>=a.length?(o=new tu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Gl=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function bx(i,t,e){let n=new dr,s=new zt,r=new zt,a=new ue,o=new Gl({depthPacking:df}),l=new Wl,c={},h=e.maxTextureSize,u={[Un]:Oe,[Oe]:Un,[Xe]:Xe},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==Zn&&this.type===Zn,G=p===Zn&&this.type!==Zn;for(let Z=0,z=A.length;Z<z;Z++){let it=A[Z],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let K=V.getFrameExtents();if(s.multiply(K),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||O===!0||G===!0){let Et=this.type!==Zn?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new ti(s.x,s.y,Et),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let rt=V.getViewportCount();for(let Et=0;Et<rt;Et++){let Dt=V.getViewport(Et);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),D.viewport(a),V.updateMatrices(it,Et),n=V.getFrustum(),b(C,P,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&w(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,R)};function w(A,C){let P=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,x,null)}function E(A,C,P,M){let v=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let D=v.uuid,O=C.uuid,G=c[D];G===void 0&&(G={},c[D]=G);let Z=G[O];Z===void 0&&(Z=v.clone(),G[O]=Z,C.addEventListener("dispose",L)),v=Z}if(v.visible=C.visible,v.wireframe=C.wireframe,M===Zn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=i.properties.get(v);D.light=P}return v}function b(A,C,P,M,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let O=t.update(A),G=A.material;if(Array.isArray(G)){let Z=O.groups;for(let z=0,it=Z.length;z<it;z++){let V=Z[z],K=G[V.materialIndex];if(K&&K.visible){let rt=E(A,K,M,v);A.onBeforeShadow(i,A,C,P,O,rt,V),i.renderBufferDirect(P,null,O,rt,A,V),A.onAfterShadow(i,A,C,P,O,rt,V)}}}else if(G.visible){let Z=E(A,G,M,v);A.onBeforeShadow(i,A,C,P,O,Z,null),i.renderBufferDirect(P,null,O,Z,A,null),A.onAfterShadow(i,A,C,P,O,Z,null)}}let D=A.children;for(let O=0,G=D.length;O<G;O++)b(D[O],C,P,M,v)}function L(A){A.target.removeEventListener("dispose",L);for(let P in c){let M=c[P],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Sx={[$o]:Zo,[Jo]:jo,[Ko]:tl,[ms]:Qo,[Zo]:$o,[jo]:Jo,[tl]:Ko,[Qo]:ms};function Ex(i,t){function e(){let U=!1,dt=new ue,q=null,Q=new ue(0,0,0,0);return{setMask:function(xt){q!==xt&&!U&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){U=xt},setClear:function(xt,pt,Gt,we,Ve){Ve===!0&&(xt*=we,pt*=we,Gt*=we),dt.set(xt,pt,Gt,we),Q.equals(dt)===!1&&(i.clearColor(xt,pt,Gt,we),Q.copy(dt))},reset:function(){U=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,q=null,Q=null,xt=null;return{setReversed:function(pt){if(dt!==pt){let Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let we=xt;xt=null,this.setClear(we)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?lt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(pt){q!==pt&&!U&&(i.depthMask(pt),q=pt)},setFunc:function(pt){if(dt&&(pt=Sx[pt]),Q!==pt){switch(pt){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pt}},setLocked:function(pt){U=pt},setClear:function(pt){xt!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),xt=pt)},reset:function(){U=!1,q=null,Q=null,xt=null,dt=!1}}}function s(){let U=!1,dt=null,q=null,Q=null,xt=null,pt=null,Gt=null,we=null,Ve=null;return{setTest:function(oe){U||(oe?lt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!U&&(i.stencilMask(oe),dt=oe)},setFunc:function(oe,_n,Vn){(q!==oe||Q!==_n||xt!==Vn)&&(i.stencilFunc(oe,_n,Vn),q=oe,Q=_n,xt=Vn)},setOp:function(oe,_n,Vn){(pt!==oe||Gt!==_n||we!==Vn)&&(i.stencilOp(oe,_n,Vn),pt=oe,Gt=_n,we=Vn)},setLocked:function(oe){U=oe},setClear:function(oe){Ve!==oe&&(i.clearStencil(oe),Ve=oe)},reset:function(){U=!1,dt=null,q=null,Q=null,xt=null,pt=null,Gt=null,we=null,Ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,E=null,b=null,L=null,A=null,C=new Ot(0,0,0),P=0,M=!1,v=null,R=null,D=null,O=null,G=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,it=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=it>=2);let K=null,rt={},Et=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Vt=new ue().fromArray(Et),X=new ue().fromArray(Dt);function tt(U,dt,q,Q){let xt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(U,pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<q;Gt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(dt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return pt}let vt={};vt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(ms),et(!1),nt(sh),lt(i.CULL_FACE),y(pi);function lt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pt(U,dt){return u[U]!==dt?(i.bindFramebuffer(U,dt),u[U]=dt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Bt(U,dt){let q=f,Q=!1;if(U){q=d.get(dt),q===void 0&&(q=[],d.set(dt,q));let xt=U.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Gt=xt.length;pt<Gt;pt++)q[pt]=i.COLOR_ATTACHMENT0+pt;q.length=xt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function ie(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let $t={[Li]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};$t[kd]=i.MIN,$t[Hd]=i.MAX;let de={[Vd]:i.ZERO,[Gd]:i.ONE,[Wd]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[Kd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function y(U,dt,q,Q,xt,pt,Gt,we,Ve,oe){if(U===pi){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),U!==Od){if(U!==m||oe!==M){if((p!==Li||b!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,b=Li),oe)switch(U){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ma:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,E=null,L=null,A=null,C.set(0,0,0),P=0,m=U,M=oe}return}xt=xt||dt,pt=pt||q,Gt=Gt||Q,(dt!==p||xt!==b)&&(i.blendEquationSeparate($t[dt],$t[xt]),p=dt,b=xt),(q!==w||Q!==E||pt!==L||Gt!==A)&&(i.blendFuncSeparate(de[q],de[Q],de[pt],de[Gt]),w=q,E=Q,L=pt,A=Gt),(we.equals(C)===!1||Ve!==P)&&(i.blendColor(we.r,we.g,we.b,Ve),C.copy(we),P=Ve),m=U,M=!1}function j(U,dt){U.side===Xe?At(i.CULL_FACE):lt(i.CULL_FACE);let q=U.side===Oe;dt&&(q=!q),et(q),U.blending===us&&U.transparent===!1?y(pi):y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function nt(U){U!==Nd?(lt(i.CULL_FACE),U!==R&&(U===sh?i.cullFace(i.BACK):U===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),R=U}function J(U){U!==D&&(z&&i.lineWidth(U),D=U)}function ft(U,dt,q){U?(lt(i.POLYGON_OFFSET_FILL),(O!==dt||G!==q)&&(i.polygonOffset(dt,q),O=dt,G=q)):At(i.POLYGON_OFFSET_FILL)}function at(U){U?lt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+Z-1),K!==U&&(i.activeTexture(U),K=U)}function _(U,dt,q){q===void 0&&(K===null?q=i.TEXTURE0+Z-1:q=K);let Q=rt[q];Q===void 0&&(Q={type:void 0,texture:void 0},rt[q]=Q),(Q.type!==U||Q.texture!==dt)&&(K!==q&&(i.activeTexture(q),K=q),i.bindTexture(U,dt||vt[U]),Q.type=U,Q.texture=dt)}function B(){let U=rt[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Vt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function wt(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function jt(U,dt){let q=c.get(dt);q===void 0&&(q=new WeakMap,c.set(dt,q));let Q=q.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(dt,U.name),q.set(U,Q))}function qt(U,dt){let Q=c.get(dt).get(U);l.get(dt)!==Q&&(i.uniformBlockBinding(dt,Q,U.__bindingPointIndex),l.set(dt,Q))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,rt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,E=null,b=null,L=null,A=null,C=new Ot(0,0,0),P=0,M=!1,v=null,R=null,D=null,O=null,G=null,Vt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:At,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:ie,setBlending:y,setMaterial:j,setFlipSided:et,setCullFace:nt,setLineWidth:J,setPolygonOffset:ft,setScissorTest:at,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Y,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:jt,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:st,texSubImage2D:W,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Ft,viewport:wt,reset:fe}}function eu(i,t,e,n){let s=wx(n);switch(e){case Mu:return i*t;case Su:return i*t;case Eu:return i*t*2;case xc:return i*t/s.components*s.byteLength;case _c:return i*t/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case yc:return i*t*4/s.components*s.byteLength;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:case ol:return Math.max(i,16)*Math.max(t,8)/4;case sl:case al:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fa:case wl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tu:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wx(i){switch(i){case jn:case _u:return{byteLength:1,components:1};case cr:case vu:case vr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Fi:case pc:case Dn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):_a("canvas")}function x(T,_,B){let $=1,Y=at(T);if((Y.width>B||Y.height>B)&&($=B/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let W=Math.floor($*Y.width),yt=Math.floor($*Y.height);u===void 0&&(u=g(W,yt));let ut=_?g(W,yt):u;return ut.width=W,ut.height=yt,ut.getContext("2d").drawImage(T,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+yt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,B,$,Y=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=_;if(_===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),_===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){let yt=Y?Ga:te.getTransfer($);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=yt===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function b(T,_){let B;return T?_===null||_===Fi||_===_s?B=i.DEPTH24_STENCIL8:_===Dn?B=i.DEPTH32F_STENCIL8:_===cr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===_s?B=i.DEPTH_COMPONENT24:_===Dn?B=i.DEPTH_COMPONENT32F:_===cr&&(B=i.DEPTH_COMPONENT16),B}function L(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==Ln?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function C(T){let _=T.target;_.removeEventListener("dispose",C),v(_)}function P(T){let _=n.get(T);if(_.__webglInit===void 0)return;let B=T.source,$=d.get(B);if($){let Y=$[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&M(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function M(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let B=T.source,$=d.get(B);delete $[_.__cacheKey],a.memory.textures--}function v(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Y=0;Y<_.__webglFramebuffer[$].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[$][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let $=0,Y=B.length;$<Y;$++){let W=n.get(B[$]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(T)}let R=0;function D(){R=0}function O(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function G(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Z(T,_){let B=n.get(T);if(T.isVideoTexture&&J(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,_);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function z(T,_){let B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function it(T,_){let B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function V(T,_){let B=n.get(T);if(T.version>0&&B.__version!==T.version){tt(B,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let K={[lr]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},rt={[cn]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Et={[pf]:i.NEVER,[yf]:i.ALWAYS,[mf]:i.LESS,[Ru]:i.LEQUAL,[gf]:i.EQUAL,[vf]:i.GEQUAL,[xf]:i.GREATER,[_f]:i.NOTEQUAL};function Dt(T,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ln||_.magFilter===po||_.magFilter===Nr||_.magFilter===Ni||_.minFilter===Ln||_.minFilter===po||_.minFilter===Nr||_.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,rt[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Nr&&_.minFilter!==Ni||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Vt(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let $=_.source,Y=d.get($);Y===void 0&&(Y={},d.set($,Y));let W=G(_);if(W!==T.__cacheKey){Y[W]===void 0&&(Y[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[W].usedTimes++;let yt=Y[T.__cacheKey];yt!==void 0&&(Y[T.__cacheKey].usedTimes--,yt.usedTimes===0&&M(_)),T.__cacheKey=W,T.__webglTexture=Y[W].texture}return B}function X(T,_,B){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);let Y=Vt(T,_),W=_.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);let yt=n.get(W);if(W.version!==yt.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let ut=te.getPrimaries(te.workingColorSpace),gt=_.colorSpace===di?null:te.getPrimaries(_.colorSpace),Jt=_.colorSpace===di||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let st=x(_.image,!1,s.maxTextureSize);st=ft(_,st);let Mt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),Ft=E(_.internalFormat,Mt,Ut,_.colorSpace,_.isVideoTexture);Dt($,_);let wt,jt=_.mipmaps,qt=_.isVideoTexture!==!0,fe=yt.__version===void 0||Y===!0,U=W.dataReady,dt=L(_,st);if(_.isDepthTexture)Ft=b(_.format===vs,_.type),fe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Ut,null));else if(_.isDataTexture)if(jt.length>0){qt&&fe&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)wt=jt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,wt.width,wt.height,Mt,Ut,wt.data):e.texImage2D(i.TEXTURE_2D,q,Ft,wt.width,wt.height,0,Mt,Ut,wt.data);_.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Mt,Ut,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Ut,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ft,jt[0].width,jt[0].height,st.depth);for(let q=0,Q=jt.length;q<Q;q++)if(wt=jt[q],_.format!==wn)if(Mt!==null)if(qt){if(U)if(_.layerUpdates.size>0){let xt=eu(wt.width,wt.height,_.format,_.type);for(let pt of _.layerUpdates){let Gt=wt.data.subarray(pt*xt/wt.data.BYTES_PER_ELEMENT,(pt+1)*xt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,pt,wt.width,wt.height,1,Mt,Gt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,wt.width,wt.height,st.depth,Mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ft,wt.width,wt.height,st.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,wt.width,wt.height,st.depth,Mt,Ut,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ft,wt.width,wt.height,st.depth,0,Mt,Ut,wt.data)}else{qt&&fe&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)wt=jt[q],_.format!==wn?Mt!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,wt.width,wt.height,Mt,Ut,wt.data):e.texImage2D(i.TEXTURE_2D,q,Ft,wt.width,wt.height,0,Mt,Ut,wt.data)}else if(_.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ft,st.width,st.height,st.depth),U)if(_.layerUpdates.size>0){let q=eu(st.width,st.height,_.format,_.type);for(let Q of _.layerUpdates){let xt=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,Mt,Ut,xt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,Mt,Ut,st.data);else if(_.isData3DTexture)qt?(fe&&e.texStorage3D(i.TEXTURE_3D,dt,Ft,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,Mt,Ut,st.data);else if(_.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(i.TEXTURE_2D,dt,Ft,st.width,st.height);else{let q=st.width,Q=st.height;for(let xt=0;xt<dt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ft,q,Q,0,Mt,Ut,null),q>>=1,Q>>=1}}else if(jt.length>0){if(qt&&fe){let q=at(jt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ft,q.width,q.height)}for(let q=0,Q=jt.length;q<Q;q++)wt=jt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt,Ut,wt):e.texImage2D(i.TEXTURE_2D,q,Ft,Mt,Ut,wt);_.generateMipmaps=!1}else if(qt){if(fe){let q=at(st);e.texStorage2D(i.TEXTURE_2D,dt,Ft,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Mt,Ut,st);m(_)&&p($),yt.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function tt(T,_,B){if(_.image.length!==6)return;let $=Vt(T,_),Y=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let W=n.get(Y);if(Y.version!==W.__version||$===!0){e.activeTexture(i.TEXTURE0+B);let yt=te.getPrimaries(te.workingColorSpace),ut=_.colorSpace===di?null:te.getPrimaries(_.colorSpace),gt=_.colorSpace===di||yt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Jt=_.isCompressedTexture||_.image[0].isCompressedTexture,st=_.image[0]&&_.image[0].isDataTexture,Mt=[];for(let Q=0;Q<6;Q++)!Jt&&!st?Mt[Q]=x(_.image[Q],!0,s.maxCubemapSize):Mt[Q]=st?_.image[Q].image:_.image[Q],Mt[Q]=ft(_,Mt[Q]);let Ut=Mt[0],Ft=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),jt=E(_.internalFormat,Ft,wt,_.colorSpace),qt=_.isVideoTexture!==!0,fe=W.__version===void 0||$===!0,U=Y.dataReady,dt=L(_,Ut);Dt(i.TEXTURE_CUBE_MAP,_);let q;if(Jt){qt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,jt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){q=Mt[Q].mipmaps;for(let xt=0;xt<q.length;xt++){let pt=q[xt];_.format!==wn?Ft!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,pt.width,pt.height,Ft,wt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,jt,pt.width,pt.height,0,Ft,wt,pt.data)}}}else{if(q=_.mipmaps,qt&&fe){q.length>0&&dt++;let Q=at(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Mt[Q].width,Mt[Q].height,Ft,wt,Mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Mt[Q].width,Mt[Q].height,0,Ft,wt,Mt[Q].data);for(let xt=0;xt<q.length;xt++){let Gt=q[xt].image[Q].image;qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Gt.width,Gt.height,Ft,wt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,jt,Gt.width,Gt.height,0,Ft,wt,Gt.data)}}else{qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,wt,Mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Ft,wt,Mt[Q]);for(let xt=0;xt<q.length;xt++){let pt=q[xt];qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Ft,wt,pt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,jt,Ft,wt,pt.image[Q])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function vt(T,_,B,$,Y,W){let yt=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),gt=E(B.internalFormat,yt,ut,B.colorSpace),Jt=n.get(_),st=n.get(B);if(st.__renderTarget=_,!Jt.__hasExternalTextures){let Mt=Math.max(1,_.width>>W),Ut=Math.max(1,_.height>>W);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,W,gt,Mt,Ut,_.depth,0,yt,ut,null):e.texImage2D(Y,W,gt,Mt,Ut,0,yt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,st.__webglTexture,0,et(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,st.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let $=_.depthTexture,Y=$&&$.isDepthTexture?$.type:null,W=b(_.stencilBuffer,Y),yt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=et(_);nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,W,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{let $=_.textures;for(let Y=0;Y<$.length;Y++){let W=$[Y],yt=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),gt=E(W.internalFormat,yt,ut,W.colorSpace),Jt=et(_);B&&nt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,gt,_.width,_.height):nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let Y=$.__webglTexture,W=et(_);if(_.depthTexture.format===ds)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(_.depthTexture.format===vs)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pt(T){let _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=$}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),lt(_.__webglDepthbuffer[$],T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),lt(_.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(T,_,B){let $=n.get(T);_!==void 0&&vt($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pt(T)}function ie(T){let _=T.texture,B=n.get(T),$=n.get(_);T.addEventListener("dispose",C);let Y=T.textures,W=T.isWebGLCubeRenderTarget===!0,yt=Y.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let gt=0;gt<_.mipmaps.length;gt++)B.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)B.__webglFramebuffer[ut]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ut=0,gt=Y.length;ut<gt;ut++){let Jt=n.get(Y[ut]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&nt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<Y.length;ut++){let gt=Y[ut];B.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);let Jt=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),Mt=E(gt.internalFormat,Jt,st,gt.colorSpace,T.isXRRenderTarget===!0),Ut=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,_);for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)vt(B.__webglFramebuffer[ut][gt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else vt(B.__webglFramebuffer[ut],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,gt=Y.length;ut<gt;ut++){let Jt=Y[ut],st=n.get(Jt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Dt(i.TEXTURE_2D,Jt),vt(B.__webglFramebuffer,T,Jt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),Dt(ut,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)vt(B.__webglFramebuffer[gt],T,_,i.COLOR_ATTACHMENT0,ut,gt);else vt(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ut,0);m(_)&&p(ut),e.unbindTexture()}T.depthBuffer&&Pt(T)}function $t(T){let _=T.textures;for(let B=0,$=_.length;B<$;B++){let Y=_[B];if(m(Y)){let W=w(T),yt=n.get(Y).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}let de=[],y=[];function j(T){if(T.samples>0){if(nt(T)===!1){let _=T.textures,B=T.width,$=T.height,Y=i.COLOR_BUFFER_BIT,W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),ut=_.length>1;if(ut)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[gt]);let Jt=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Y,i.NEAREST),l===!0&&(de.length=0,y.length=0,de.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(de.push(W),y.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[gt]);let Jt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function nt(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ft(T,_){let B=T.colorSpace,$=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==As&&B!==di&&(te.getTransfer(B)===he?($!==wn||Y!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function at(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nt}function Ax(i,t){function e(n,s=di){let r,a=te.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.BYTE;if(n===vu)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===bu)return i.RGB;if(n===wn)return i.RGBA;if(n===Su)return i.LUMINANCE;if(n===Eu)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===wu)return i.RG;if(n===vc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===ca||n===ha||n===ua||n===da)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===wl||n===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fa)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===Al||n===Rl||n===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Xl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rx={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:Cx,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new ql,m=e.getContextAttributes(),p=null,w=null,E=[],b=[],L=new zt,A=null,C=new ze;C.viewport=new ue;let P=new ze;P.viewport=new ue;let M=[C,P],v=new Xl,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=E[X];return tt===void 0&&(tt=new or,E[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=E[X];return tt===void 0&&(tt=new or,E[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=E[X];return tt===void 0&&(tt=new or,E[X]=tt),tt.getHandSpace()};function O(X){let tt=b.indexOf(X.inputSource);if(tt===-1)return;let vt=E[tt];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<E.length;X++){let tt=b[X];tt!==null&&(b[X]=null,E[X].disconnect(tt))}R=null,D=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ti(f.framebufferWidth,f.framebufferHeight,{format:wn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,vt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?vs:ds,vt=m.stencil?_s:Fi);let At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ti(d.textureWidth,d.textureHeight,{format:wn,type:jn,depthTexture:new Ta(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let tt=0;tt<X.removed.length;tt++){let vt=X.removed[tt],lt=b.indexOf(vt);lt>=0&&(b[lt]=null,E[lt].disconnect(vt))}for(let tt=0;tt<X.added.length;tt++){let vt=X.added[tt],lt=b.indexOf(vt);if(lt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=b.length){b.push(vt),lt=Pt;break}else if(b[Pt]===null){b[Pt]=vt,lt=Pt;break}if(lt===-1)break}let At=E[lt];At&&At.connect(vt)}}let z=new I,it=new I;function V(X,tt,vt){z.setFromMatrixPosition(tt.matrixWorld),it.setFromMatrixPosition(vt.matrixWorld);let lt=z.distanceTo(it),At=tt.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),ie=At[14]/(At[10]+1),$t=(At[9]+1)/At[5],de=(At[9]-1)/At[5],y=(At[8]-1)/At[0],j=(Pt[8]+1)/Pt[0],et=Bt*y,nt=Bt*j,J=lt/(-y+j),ft=J*-y;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ft),X.translateZ(J),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let at=Bt+J,T=ie+J,_=et-ft,B=nt+(lt-ft),$=$t*ie/T*at,Y=de*ie/T*at;X.projectionMatrix.makePerspective(_,B,$,Y,at,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,vt=X.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),v.near=P.near=C.near=tt,v.far=P.far=C.far=vt,(R!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,D=v.far),C.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,v.layers.mask=C.layers.mask|P.layers.mask;let lt=X.parent,At=v.cameras;K(v,lt);for(let Pt=0;Pt<At.length;Pt++)K(At[Pt],lt);At.length===2?V(v,C,P):v.projectionMatrix.copy(C.projectionMatrix),rt(X,v,lt)};function rt(X,tt,vt){vt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Et=null;function Dt(X,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let lt=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Pt=0;Pt<vt.length;Pt++){let Bt=vt[Pt],ie=null;if(f!==null)ie=f.getViewport(Bt);else{let de=u.getViewSubImage(d,Bt);ie=de.viewport,Pt===0&&(t.setRenderTargetTextures(w,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(w))}let $t=M[Pt];$t===void 0&&($t=new ze,$t.layers.enable(Pt),$t.viewport=new ue,M[Pt]=$t),$t.matrix.fromArray(Bt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Bt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ie.x,ie.y,ie.width,ie.height),Pt===0&&(v.matrix.copy($t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push($t)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,s.renderState)}}for(let vt=0;vt<E.length;vt++){let lt=b[vt],At=E[vt];lt!==null&&At!==void 0&&At.update(lt,tt,c||a)}Et&&Et(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Vt=new Lu;Vt.setAnimationLoop(Dt),this.setAnimationLoop=function(X){Et=X},this.dispose=function(){}}},Ii=new Nn,Px=new Zt;function Lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),E=w.envMap,b=w.envMapRotation;E&&(m.envMap.value=E,Ii.copy(b),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Ii)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let b=E.program;n.uniformBlockBinding(w,b)}function c(w,E){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",m));let L=E.program;n.updateUBOMapping(w,L);let A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){let E=u();w.__bindingPointIndex=E;let b=i.createBuffer(),L=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let E=s[w.id],b=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=b.length;A<C;A++){let P=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,v=P.length;M<v;M++){let R=P[M];if(f(R,A,M,L)===!0){let D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],G=0;for(let Z=0;Z<O.length;Z++){let z=O[Z],it=x(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+G,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,G),G+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,E,b,L){let A=w.value,C=E+"_"+b;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{let P=L[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){let E=w.uniforms,b=0,L=16;for(let C=0,P=E.length;C<P;C++){let M=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,R=M.length;v<R;v++){let D=M[v],O=Array.isArray(D.value)?D.value:[D.value];for(let G=0,Z=O.length;G<Z;G++){let z=O[G],it=x(z),V=b%L,K=V%it.boundary,rt=V+K;b+=K,rt!==0&&L-rt<it.storage&&(b+=L-rt),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=it.storage}}}let A=b%L;return A>0&&(b+=L-A),w.__size=b,w.__cache={},this}function x(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Aa=class{constructor(t={}){let{canvas:e=Of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=mi,this.toneMappingExposure=1;let b=this,L=!1,A=0,C=0,P=null,M=-1,v=null,R=new ue,D=new ue,O=null,G=new Ot(0),Z=0,z=e.width,it=e.height,V=1,K=null,rt=null,Et=new ue(0,0,z,it),Dt=new ue(0,0,z,it),Vt=!1,X=new dr,tt=!1,vt=!1,lt=new Zt,At=new Zt,Pt=new I,Bt=new ue,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function de(){return P===null?V:1}let y=n;function j(S,N){return e.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),y===null){let N="webgl2";if(y=j(N,S),y===null)throw j(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,nt,J,ft,at,T,_,B,$,Y,W,yt,ut,gt,Jt,st,Mt,Ut,Ft,wt,jt,qt,fe,U;function dt(){et=new Z0(y),et.init(),qt=new Ax(y,et),nt=new G0(y,et,t,qt),J=new Ex(y,et),nt.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ft=new Q0(y),at=new ux,T=new Tx(y,et,J,at,nt,qt,ft),_=new X0(b),B=new $0(b),$=new rp(y),fe=new H0(y,$),Y=new J0(y,$,ft,fe),W=new tg(y,Y,$,ft),Ft=new j0(y,nt,T),st=new W0(at),yt=new hx(b,_,B,et,nt,fe,st),ut=new Lx(b,at),gt=new fx,Jt=new vx(et),Ut=new k0(b,_,B,J,W,f,l),Mt=new bx(b,W,nt),U=new Dx(y,ft,nt,J),wt=new V0(y,et,ft),jt=new K0(y,et,ft),ft.programs=yt.programs,b.capabilities=nt,b.extensions=et,b.properties=at,b.renderLists=gt,b.shadowMap=Mt,b.state=J,b.info=ft}dt();let q=new Yl(b,y);this.xr=q,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(z,it,!1))},this.getSize=function(S){return S.set(z,it)},this.setSize=function(S,N,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,it=N,e.width=Math.floor(S*V),e.height=Math.floor(N*V),k===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(z*V,it*V).floor()},this.setDrawingBufferSize=function(S,N,k){z=S,it=N,V=k,e.width=Math.floor(S*k),e.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Et)},this.setViewport=function(S,N,k,H){S.isVector4?Et.set(S.x,S.y,S.z,S.w):Et.set(S,N,k,H),J.viewport(R.copy(Et).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,N,k,H){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,N,k,H),J.scissor(D.copy(Dt).multiplyScalar(V).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){J.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(S=!0,N=!0,k=!0){let H=0;if(S){let F=!1;if(P!==null){let ot=P.texture.format;F=ot===yc||ot===vc||ot===_c}if(F){let ot=P.texture.type,mt=ot===jn||ot===Fi||ot===cr||ot===_s||ot===mc||ot===gc,Rt=Ut.getClearColor(),Ct=Ut.getClearAlpha(),kt=Rt.r,Wt=Rt.g,It=Rt.b;mt?(g[0]=kt,g[1]=Wt,g[2]=It,g[3]=Ct,y.clearBufferuiv(y.COLOR,0,g)):(x[0]=kt,x[1]=Wt,x[2]=It,x[3]=Ct,y.clearBufferiv(y.COLOR,0,x))}else H|=y.COLOR_BUFFER_BIT}N&&(H|=y.DEPTH_BUFFER_BIT),k&&(H|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),gt.dispose(),Jt.dispose(),at.dispose(),_.dispose(),B.dispose(),W.dispose(),fe.dispose(),U.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jc),q.removeEventListener("sessionend",Kc),Ei.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=ft.autoReset,N=Mt.enabled,k=Mt.autoUpdate,H=Mt.needsUpdate,F=Mt.type;dt(),ft.autoReset=S,Mt.enabled=N,Mt.autoUpdate=k,Mt.needsUpdate=H,Mt.type=F}function pt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){let N=S.target;N.removeEventListener("dispose",Gt),we(N)}function we(S){Ve(S),at.remove(S)}function Ve(S){let N=at.get(S).programs;N!==void 0&&(N.forEach(function(k){yt.releaseProgram(k)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,H,F,ot){N===null&&(N=ie);let mt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Ld(S,N,k,H,F);J.setMaterial(H,mt);let Ct=k.index,kt=1;if(H.wireframe===!0){if(Ct=Y.getWireframeAttribute(k),Ct===void 0)return;kt=2}let Wt=k.drawRange,It=k.attributes.position,ne=Wt.start*kt,pe=(Wt.start+Wt.count)*kt;ot!==null&&(ne=Math.max(ne,ot.start*kt),pe=Math.min(pe,(ot.start+ot.count)*kt)),Ct!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Ct.count)):It!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,It.count));let xe=pe-ne;if(xe<0||xe===1/0)return;fe.setup(F,H,Rt,k,Ct);let tn,se=wt;if(Ct!==null&&(tn=$.get(Ct),se=jt,se.setIndex(tn)),F.isMesh)H.wireframe===!0?(J.setLineWidth(H.wireframeLinewidth*de()),se.setMode(y.LINES)):se.setMode(y.TRIANGLES);else if(F.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),J.setLineWidth(Lt*de()),F.isLineSegments?se.setMode(y.LINES):F.isLineLoop?se.setMode(y.LINE_LOOP):se.setMode(y.LINE_STRIP)}else F.isPoints?se.setMode(y.POINTS):F.isSprite&&se.setMode(y.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Lt=F._multiDrawStarts,Gn=F._multiDrawCounts,re=F._multiDrawCount,vn=Ct?$.get(Ct).bytesPerElement:1,Wi=at.get(H).currentProgram.getUniforms();for(let an=0;an<re;an++)Wi.setValue(y,"_gl_DrawID",an),se.render(Lt[an]/vn,Gn[an])}else if(F.isInstancedMesh)se.renderInstances(ne,xe,F.count);else if(k.isInstancedBufferGeometry){let Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Gn=Math.min(k.instanceCount,Lt);se.renderInstances(ne,xe,Gn)}else se.render(ne,xe)};function oe(S,N,k){S.transparent===!0&&S.side===Xe&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,Ur(S,N,k),S.side=Un,S.needsUpdate=!0,Ur(S,N,k),S.side=Xe):Ur(S,N,k)}this.compile=function(S,N,k=null){k===null&&(k=S),p=Jt.get(k),p.init(N),E.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let H=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ot=F.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let Rt=ot[mt];oe(Rt,k,F),H.add(Rt)}else oe(ot,k,F),H.add(ot)}),E.pop(),p=null,H},this.compileAsync=function(S,N,k=null){let H=this.compile(S,N,k);return new Promise(F=>{function ot(){if(H.forEach(function(mt){at.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){F(S);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let _n=null;function Vn(S){_n&&_n(S)}function Jc(){Ei.stop()}function Kc(){Ei.start()}let Ei=new Lu;Ei.setAnimationLoop(Vn),typeof self!="undefined"&&Ei.setContext(self),this.setAnimationLoop=function(S){_n=S,q.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},q.addEventListener("sessionstart",Jc),q.addEventListener("sessionend",Kc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,N,P),p=Jt.get(S,E.length),p.init(N),E.push(p),At.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(At),vt=this.localClippingEnabled,tt=st.init(this.clippingPlanes,vt),m=gt.get(S,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){let ot=b.xr.getDepthSensingMesh();ot!==null&&fo(ot,N,-1/0,b.sortObjects)}fo(S,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(K,rt),$t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$t&&Ut.addToRenderList(m,S),this.info.render.frame++,tt===!0&&st.beginShadows();let k=p.state.shadowsArray;Mt.render(k,S,N),tt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ot=N.cameras;if(F.length>0)for(let mt=0,Rt=ot.length;mt<Rt;mt++){let Ct=ot[mt];jc(H,F,S,Ct)}$t&&Ut.render(S);for(let mt=0,Rt=ot.length;mt<Rt;mt++){let Ct=ot[mt];Qc(m,S,Ct,Ct.viewport)}}else F.length>0&&jc(H,F,S,N),$t&&Ut.render(S),Qc(m,S,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(b,S,N),fe.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],tt===!0&&st.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function fo(S,N,k,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){H&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);let mt=W.update(S),Rt=S.material;Rt.visible&&m.push(S,mt,Rt,k,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let mt=W.update(S),Rt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Bt.copy(mt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(Rt)){let Ct=mt.groups;for(let kt=0,Wt=Ct.length;kt<Wt;kt++){let It=Ct[kt],ne=Rt[It.materialIndex];ne&&ne.visible&&m.push(S,mt,ne,k,Bt.z,It)}}else Rt.visible&&m.push(S,mt,Rt,k,Bt.z,null)}}let ot=S.children;for(let mt=0,Rt=ot.length;mt<Rt;mt++)fo(ot[mt],N,k,H)}function Qc(S,N,k,H){let F=S.opaque,ot=S.transmissive,mt=S.transparent;p.setupLightsView(k),tt===!0&&st.setGlobalState(b.clippingPlanes,k),H&&J.viewport(R.copy(H)),F.length>0&&Dr(F,N,k),ot.length>0&&Dr(ot,N,k),mt.length>0&&Dr(mt,N,k),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function jc(S,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?vr:jn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let ot=p.state.transmissionRenderTarget[H.id],mt=H.viewport||R;ot.setSize(mt.z,mt.w);let Rt=b.getRenderTarget();b.setRenderTarget(ot),b.getClearColor(G),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),$t&&Ut.render(k);let Ct=b.toneMapping;b.toneMapping=mi;let kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&st.setGlobalState(b.clippingPlanes,H),Dr(S,k,H),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let It=0,ne=N.length;It<ne;It++){let pe=N[It],xe=pe.object,tn=pe.geometry,se=pe.material,Lt=pe.group;if(se.side===Xe&&xe.layers.test(H.layers)){let Gn=se.side;se.side=Oe,se.needsUpdate=!0,th(xe,k,H,tn,se,Lt),se.side=Gn,se.needsUpdate=!0,Wt=!0}}Wt===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}b.setRenderTarget(Rt),b.setClearColor(G,Z),kt!==void 0&&(H.viewport=kt),b.toneMapping=Ct}function Dr(S,N,k){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=S.length;F<ot;F++){let mt=S[F],Rt=mt.object,Ct=mt.geometry,kt=H===null?mt.material:H,Wt=mt.group;Rt.layers.test(k.layers)&&th(Rt,N,k,Ct,kt,Wt)}}function th(S,N,k,H,F,ot){S.onBeforeRender(b,N,k,H,F,ot),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(b,N,k,H,S,ot),F.transparent===!0&&F.side===Xe&&F.forceSinglePass===!1?(F.side=Oe,F.needsUpdate=!0,b.renderBufferDirect(k,N,H,F,S,ot),F.side=Un,F.needsUpdate=!0,b.renderBufferDirect(k,N,H,F,S,ot),F.side=Xe):b.renderBufferDirect(k,N,H,F,S,ot),S.onAfterRender(b,N,k,H,F,ot)}function Ur(S,N,k){N.isScene!==!0&&(N=ie);let H=at.get(S),F=p.state.lights,ot=p.state.shadowsArray,mt=F.state.version,Rt=yt.getParameters(S,F.state,ot,N,k),Ct=yt.getProgramCacheKey(Rt),kt=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?B:_).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,kt===void 0&&(S.addEventListener("dispose",Gt),kt=new Map,H.programs=kt);let Wt=kt.get(Ct);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===mt)return nh(S,Rt),Wt}else Rt.uniforms=yt.getUniforms(S),S.onBeforeCompile(Rt,b),Wt=yt.acquireProgram(Rt,Ct),kt.set(Ct,Wt),H.uniforms=Rt.uniforms;let It=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=st.uniform),nh(S,Rt),H.needsLights=Ud(S),H.lightsStateVersion=mt,H.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function eh(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function nh(S,N){let k=at.get(S);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Ld(S,N,k,H,F){N.isScene!==!0&&(N=ie),T.resetTextureUnits();let ot=N.fog,mt=H.isMeshStandardMaterial?N.environment:null,Rt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:As,Ct=(H.isMeshStandardMaterial?B:_).get(H.envMap||mt),kt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!k.morphAttributes.position,ne=!!k.morphAttributes.normal,pe=!!k.morphAttributes.color,xe=mi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=b.toneMapping);let tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=tn!==void 0?tn.length:0,Lt=at.get(H),Gn=p.state.lights;if(tt===!0&&(vt===!0||S!==v)){let un=S===v&&H.id===M;st.setState(H,S,un)}let re=!1;H.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Gn.state.version||Lt.outputColorSpace!==Rt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==Ct||H.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==kt||Lt.vertexTangents!==Wt||Lt.morphTargets!==It||Lt.morphNormals!==ne||Lt.morphColors!==pe||Lt.toneMapping!==xe||Lt.morphTargetsCount!==se)&&(re=!0):(re=!0,Lt.__version=H.version);let vn=Lt.currentProgram;re===!0&&(vn=Ur(H,N,F));let Wi=!1,an=!1,Ws=!1,_e=vn.getUniforms(),In=Lt.uniforms;if(J.useProgram(vn.program)&&(Wi=!0,an=!0,Ws=!0),H.id!==M&&(M=H.id,an=!0),Wi||v!==S){J.buffers.depth.getReversed()?(lt.copy(S.projectionMatrix),zf(lt),kf(lt),_e.setValue(y,"projectionMatrix",lt)):_e.setValue(y,"projectionMatrix",S.projectionMatrix),_e.setValue(y,"viewMatrix",S.matrixWorldInverse);let si=_e.map.cameraPosition;si!==void 0&&si.setValue(y,Pt.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&_e.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,an=!0,Ws=!0)}if(F.isSkinnedMesh){_e.setOptional(y,F,"bindMatrix"),_e.setOptional(y,F,"bindMatrixInverse");let un=F.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(y,"boneTexture",un.boneTexture,T))}F.isBatchedMesh&&(_e.setOptional(y,F,"batchingTexture"),_e.setValue(y,"batchingTexture",F._matricesTexture,T),_e.setOptional(y,F,"batchingIdTexture"),_e.setValue(y,"batchingIdTexture",F._indirectTexture,T),_e.setOptional(y,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(y,"batchingColorTexture",F._colorsTexture,T));let Xs=k.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Ft.update(F,k,vn),(an||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,_e.setValue(y,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(In.envMap.value=Ct,In.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(In.envMapIntensity.value=N.environmentIntensity),an&&(_e.setValue(y,"toneMappingExposure",b.toneMappingExposure),Lt.needsLights&&Dd(In,Ws),ot&&H.fog===!0&&ut.refreshFogUniforms(In,ot),ut.refreshMaterialUniforms(In,H,V,it,p.state.transmissionRenderTarget[S.id]),ps.upload(y,eh(Lt),In,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ps.upload(y,eh(Lt),In,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(y,"center",F.center),_e.setValue(y,"modelViewMatrix",F.modelViewMatrix),_e.setValue(y,"normalMatrix",F.normalMatrix),_e.setValue(y,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let un=H.uniformsGroups;for(let si=0,ri=un.length;si<ri;si++){let ih=un[si];U.update(ih,vn),U.bind(ih,vn)}}return vn}function Dd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ud(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,N,k){at.get(S.texture).__webglTexture=N,at.get(S.depthTexture).__webglTexture=k;let H=at.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let k=at.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,k=0){P=S,A=N,C=k;let H=!0,F=null,ot=!1,mt=!1;if(S){let Ct=at.get(S);if(Ct.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(y.FRAMEBUFFER,null),H=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ct.__hasExternalTextures)T.rebindTextures(S,at.get(S.texture).__webglTexture,at.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let It=S.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&at.has(It)&&(S.width!==It.image.width||S.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(mt=!0);let Wt=at.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?F=Wt[N][k]:F=Wt[N],ot=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?F=at.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?F=Wt[k]:F=Wt,R.copy(S.viewport),D.copy(S.scissor),O=S.scissorTest}else R.copy(Et).multiplyScalar(V).floor(),D.copy(Dt).multiplyScalar(V).floor(),O=Vt;if(J.bindFramebuffer(y.FRAMEBUFFER,F)&&H&&J.drawBuffers(S,F),J.viewport(R),J.scissor(D),J.setScissorTest(O),ot){let Ct=at.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,k)}else if(mt){let Ct=at.get(S.texture),kt=N||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,kt)}M=-1},this.readRenderTargetPixels=function(S,N,k,H,F,ot,mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){J.bindFramebuffer(y.FRAMEBUFFER,Rt);try{let Ct=S.texture,kt=Ct.format,Wt=Ct.type;if(!nt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F&&y.readPixels(N,k,H,F,qt.convert(kt),qt.convert(Wt),ot)}finally{let Ct=P!==null?at.get(P).__webglFramebuffer:null;J.bindFramebuffer(y.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,N,k,H,F,ot,mt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){let Ct=S.texture,kt=Ct.format,Wt=Ct.type;if(!nt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F){J.bindFramebuffer(y.FRAMEBUFFER,Rt);let It=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,It),y.bufferData(y.PIXEL_PACK_BUFFER,ot.byteLength,y.STREAM_READ),y.readPixels(N,k,H,F,qt.convert(kt),qt.convert(Wt),0);let ne=P!==null?at.get(P).__webglFramebuffer:null;J.bindFramebuffer(y.FRAMEBUFFER,ne);let pe=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Bf(y,pe,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,It),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ot),y.deleteBuffer(It),y.deleteSync(pe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,k=0){S.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-k),F=Math.floor(S.image.width*H),ot=Math.floor(S.image.height*H),mt=N!==null?N.x:0,Rt=N!==null?N.y:0;T.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,k,0,0,mt,Rt,F,ot),J.unbindTexture()},this.copyTextureToTexture=function(S,N,k=null,H=null,F=0){S.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let ot,mt,Rt,Ct,kt,Wt,It,ne,pe,xe=S.isCompressedTexture?S.mipmaps[F]:S.image;k!==null?(ot=k.max.x-k.min.x,mt=k.max.y-k.min.y,Rt=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,kt=k.min.y,Wt=k.isBox3?k.min.z:0):(ot=xe.width,mt=xe.height,Rt=xe.depth||1,Ct=0,kt=0,Wt=0),H!==null?(It=H.x,ne=H.y,pe=H.z):(It=0,ne=0,pe=0);let tn=qt.convert(N.format),se=qt.convert(N.type),Lt;N.isData3DTexture?(T.setTexture3D(N,0),Lt=y.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Lt=y.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Lt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,N.unpackAlignment);let Gn=y.getParameter(y.UNPACK_ROW_LENGTH),re=y.getParameter(y.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(y.UNPACK_SKIP_PIXELS),Wi=y.getParameter(y.UNPACK_SKIP_ROWS),an=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,xe.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,xe.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ct),y.pixelStorei(y.UNPACK_SKIP_ROWS,kt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Wt);let Ws=S.isDataArrayTexture||S.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let In=at.get(S),Xs=at.get(N),un=at.get(In.__renderTarget),si=at.get(Xs.__renderTarget);J.bindFramebuffer(y.READ_FRAMEBUFFER,un.__webglFramebuffer),J.bindFramebuffer(y.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Rt;ri++)Ws&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,at.get(S).__webglTexture,F,Wt+ri),S.isDepthTexture?(_e&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,at.get(N).__webglTexture,F,pe+ri),y.blitFramebuffer(Ct,kt,ot,mt,It,ne,ot,mt,y.DEPTH_BUFFER_BIT,y.NEAREST)):_e?y.copyTexSubImage3D(Lt,F,It,ne,pe+ri,Ct,kt,ot,mt):y.copyTexSubImage2D(Lt,F,It,ne,pe+ri,Ct,kt,ot,mt);J.bindFramebuffer(y.READ_FRAMEBUFFER,null),J.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(Lt,F,It,ne,pe,ot,mt,Rt,tn,se,xe.data):N.isCompressedArrayTexture?y.compressedTexSubImage3D(Lt,F,It,ne,pe,ot,mt,Rt,tn,xe.data):y.texSubImage3D(Lt,F,It,ne,pe,ot,mt,Rt,tn,se,xe):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,F,It,ne,ot,mt,tn,se,xe.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,F,It,ne,xe.width,xe.height,tn,xe.data):y.texSubImage2D(y.TEXTURE_2D,F,It,ne,ot,mt,tn,se,xe);y.pixelStorei(y.UNPACK_ROW_LENGTH,Gn),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,re),y.pixelStorei(y.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Wi),y.pixelStorei(y.UNPACK_SKIP_IMAGES,an),F===0&&N.generateMipmaps&&y.generateMipmap(Lt),J.unbindTexture()},this.copyTextureToTexture3D=function(S,N,k=null,H=null,F=0){return S.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,k,H,F)},this.initRenderTarget=function(S){at.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,J.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ra=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fr=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},$l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new I,Ca=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pr=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rs,Js=new I,as=new I,os=new I,ls=new zt,Ks=new zt,Ou=new Zt,na=new I,Qs=new I,ia=new I,nu=new zt,Vo=new zt,iu=new zt,Ia=class extends Pe{constructor(t=new pr){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $l(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Ca(n,3,0,!1)),rs.setAttribute("uv",new Ca(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sa(na.set(-.5,-.5,0),os,a,as,s,r),sa(Qs.set(.5,-.5,0),os,a,as,s,r),sa(ia.set(.5,.5,0),os,a,as,s,r),nu.set(0,0),Vo.set(1,0),iu.set(1,1);let o=t.ray.intersectTriangle(na,Qs,ia,!1,Js);if(o===null&&(sa(Qs.set(-.5,.5,0),os,a,as,s,r),Vo.set(0,1),o=t.ray.intersectTriangle(na,ia,Qs,!1,Js),o===null))return;let l=t.ray.origin.distanceTo(Js);l<t.near||l>t.far||e.push({distance:l,point:Js.clone(),uv:fi.getInterpolation(Js,na,Qs,ia,nu,Vo,iu,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function sa(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*ls.x-s*ls.y,Ks.y=s*ls.x+r*ls.y):Ks.copy(ls),i.copy(t),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(Ou)}var Zl=class extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=cn,h=cn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Zt,su=new Zt,ra=[],ru=new ei,Ux=new Zt,js=new _t,tr=new xi,Ss=class extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),ru.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),tr.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),su.multiplyMatrices(n,cs),js.matrixWorld=su,js.raycast(t,ra);for(let a=0,o=ra.length;a<o;a++){let l=ra[a];l.instanceId=r,l.object=this,e.push(l)}ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zl(new Float32Array(s*this.count),s,this.count,xc,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new I,Da=new I,au=new Zt,er=new hr,aa=new xi,Go=new I,ou=new I,Jl=class extends Pe{constructor(t=new Ie,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;au.copy(s).invert(),er.copy(t.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),E=oa(this,t,er,l,p,w);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=oa(this,t,er,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=oa(this,t,er,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,er,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function oa(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Da,Go,ou)>n)return;Go.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Go);if(!(l<t.near||l>t.far))return{distance:l,point:ou.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var lu=new I,cu=new I,Ua=class extends Jl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lu.fromBufferAttribute(e,s),cu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lu.distanceTo(cu);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gr=class extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var He=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function w(){let b=new I,L=new I,A=0,C=(e-t)/n;for(let P=0;P<=r;P++){let M=[],v=P/r,R=v*(e-t)+t;for(let D=0;D<=s;D++){let O=D/s,G=O*l+o,Z=Math.sin(G),z=Math.cos(G);L.x=R*Z,L.y=-v*n+m,L.z=R*z,u.push(L.x,L.y,L.z),b.set(Z,C,z).normalize(),d.push(b.x,b.y,b.z),f.push(O,1-v),M.push(g++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let v=x[M][P],R=x[M+1][P],D=x[M+1][P+1],O=x[M][P+1];(t>0||M!==0)&&(h.push(v,R,O),A+=3),(e>0||M!==r-1)&&(h.push(R,D,O),A+=3)}c.addGroup(p,A,0),p+=A}function E(b){let L=g,A=new zt,C=new I,P=0,M=b===!0?t:e,v=b===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let R=g;for(let D=0;D<=s;D++){let G=D/s*l+o,Z=Math.cos(G),z=Math.sin(G);C.x=M*z,C.y=m*v,C.z=M*Z,u.push(C.x,C.y,C.z),d.push(0,v,0),A.x=Z*.5+.5,A.y=z*.5*v+.5,f.push(A.x,A.y),g++}for(let D=0;D<s;D++){let O=L+D,G=R+D;b===!0?h.push(G,G+1,O):h.push(G+1,G,O),P+=3}c.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class i extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kl=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let E=new I,b=new I,L=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],E),f(e[A+1],b),f(e[A+2],L),l(E,b,L,w)}function l(w,E,b,L){let A=L+1,C=[];for(let P=0;P<=A;P++){C[P]=[];let M=w.clone().lerp(b,P/A),v=E.clone().lerp(b,P/A),R=A-P;for(let D=0;D<=R;D++)D===0&&P===A?C[P][D]=M:C[P][D]=M.clone().lerp(v,D/R)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){let v=Math.floor(M/2);M%2===0?(d(C[P][v+1]),d(C[P+1][v]),d(C[P][v])):(d(C[P][v+1]),d(C[P+1][v+1]),d(C[P+1][v]))}}function c(w){let E=new I;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(w),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let w=new I;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];let b=m(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;a.push(b,1-L)}g(),u()}function u(){for(let w=0;w<a.length;w+=6){let E=a[w+0],b=a[w+2],L=a[w+4],A=Math.max(E,b,L),C=Math.min(E,b,L);A>.9&&C<.1&&(E<.2&&(a[w+0]+=1),b<.2&&(a[w+2]+=1),L<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,E){let b=w*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function g(){let w=new I,E=new I,b=new I,L=new I,A=new zt,C=new zt,P=new zt;for(let M=0,v=0;M<r.length;M+=9,v+=6){w.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),A.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),L.copy(w).add(E).add(b).divideScalar(3);let R=m(L);x(A,v+0,w,R),x(C,v+2,E,R),x(P,v+4,b,R)}}function x(w,E,b,L){L<0&&w.x===1&&(a[E]=w.x-1),b.x===0&&b.z===0&&(a[E]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Na=class i extends Kl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fa=class i extends Ie{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new I,g=new zt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let w=p+m,E=w,b=w+n+1,L=w+n+2,A=w+1;o.push(E,b,A),o.push(b,L,A)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var fn=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],E=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let A=L/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-E),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let E=h[p][w+1],b=h[p][w],L=h[p+1][w],A=h[p+1][w+1];(p!==0||a>0)&&f.push(E,b,A),(p!==n-1||l<Math.PI)&&f.push(b,L,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _i=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Kt=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function la(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oh:r=t,o=2*e-n;break;case lh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:a=t,l=2*n-e;break;case lh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+w*a[c+L]+E*a[l+L]+b*a[u+L];return r}},jl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},tc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Nx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Il;var Oi=class extends An{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ga;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends An{};ec.prototype.ValueTypeName="color";var nc=class extends An{};nc.prototype.ValueTypeName="number";var ic=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Oa=class extends An{InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends An{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ga;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends An{};sc.prototype.ValueTypeName="vector";var rc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Fx=new rc,ac=class{constructor(t){this.manager=t!==void 0?t:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ba=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wo=new Zt,hu=new I,uu=new I,xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oc=class extends xr{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ys*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},za=class extends Ts{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new oc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},du=new Zt,nr=new I,Xo=new I,lc=class extends xr{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}},ka=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cc=class extends xr{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sc="\\[\\]\\.:\\/",Ox=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",Bx="[^"+Sc.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",Ec),kx=/(WCOD+)?/.source.replace("WCOD",Bx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Gx=new RegExp("^"+zx+kx+Hx+Vx+"$"),Wx=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ox,"")}static parseTrackName(t){let e=Gx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=hc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var fu=new Zt,_r=class{constructor(t,e,n=0,s=1/0){this.ray=new hr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(pu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(pu),n}};function pu(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Mr={width:10.29,depth:7.7,depthWithBalcony:8.97,height:2.62,officialArea:"77,3",winSill:.05,winTop:2.42,walls:[{axis:"x",t1:-.3,t2:0,from:-.3,to:10.59,ext:1,holes:[{a:6.2,b:7.2,type:"door"}]},{axis:"x",t1:7.7,t2:8,from:-.3,to:10.59,ext:1,holes:[{a:1.09,b:2.91,type:"win"},{a:4.74,b:6.51,type:"win"},{a:7.85,b:8.65,type:"balcony"},{a:8.65,b:9.66,type:"fixed"}]},{axis:"z",t1:-.3,t2:0,from:0,to:7.7,ext:1},{axis:"z",t1:10.29,t2:10.59,from:0,to:7.7,ext:1},{axis:"z",t1:4.05,t2:4.17,from:2.83,to:7.7},{axis:"z",t1:7.17,t2:7.29,from:2.83,to:7.7},{axis:"x",t1:2.83,t2:2.95,from:4.05,to:10.29,holes:[{a:5.77,b:6.6,type:"door"},{a:7.42,b:8.25,type:"door"}]},{axis:"z",t1:8.47,t2:8.59,from:0,to:2.83,holes:[{a:.26,b:.9,type:"door"},{a:1.75,b:2.43,type:"door"}]},{axis:"x",t1:1,t2:1.12,from:8.59,to:10.29}],doors:[{x:7.2,z:-.15,w:.95,angle:150,entry:1},{x:5.77,z:2.89,w:.8,angle:-35},{x:7.42,z:2.89,w:.8,angle:-35},{x:8.53,z:.26,w:.62,angle:-125},{x:8.53,z:2.43,w:.66,angle:125},{x:7.88,z:7.85,w:.75,angle:35,white:1}],rooms:[{name:"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F",area:31.18,floor:"oak",rects:[[0,0,4.05,7.7]],label:[2,3.9]},{name:"\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439",area:12.62,floor:"stone",rects:[[4.05,0,8.47,2.83]],label:[6.2,1.5]},{name:"\u041A\u0456\u043C\u043D\u0430\u0442\u0430",area:14.2,floor:"light",rects:[[4.17,2.95,7.17,7.7]],label:[5.67,5.3]},{name:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",area:14.25,floor:"walnut",rects:[[7.29,2.95,10.29,7.7]],label:[8.8,5.3]},{name:"\u0412\u0430\u043D\u043D\u0430",area:2.8,floor:"tile",rects:[[8.59,1.12,10.29,2.83]],label:[9.2,2]},{name:"\u0422\u0443\u0430\u043B\u0435\u0442",area:1.65,floor:"tile",rects:[[8.59,0,10.29,1]],label:[9.2,.5]},{name:"\u0411\u0430\u043B\u043A\u043E\u043D",area:2.13,floor:"stone",rects:[[7.79,8,9.89,8.870000000000001]],label:[8.84,8.45]}],balcony:[[7.69,8,7.79,8.97],[9.89,8,9.99,8.97],[7.69,8.870000000000001,9.99,8.97]],fixtures:[{type:"tall",r:[0,0,.6,1.18]},{type:"fridge",r:[0,1.18,.65,1.82]},{type:"counter",r:[.6,0,4.05,.6],sink:[1.32,1.88],hob:[2.52,3.08]},{type:"vent",r:[4.05,0,4.3,.66]},{type:"panel",r:[7.4,0,7.75,.08]},{type:"bath",r:[9.52,1.15,10.29,2.8]},{type:"washer",r:[8.86,1.15,9.3,1.75]},{type:"sink",r:[8.8,2.35,9.43,2.83]},{type:"toilet",r:[9.6,.24,10.29,.68],back:[10.08,.24,10.29,.68]}],power:[{x:2,z:0,f:"S",k:"kitchen"},{x:3.2,z:0,f:"S",k:"kitchen"},{x:2.8,z:0,f:"S",k:"hood"},{x:0,z:3.24,f:"E",k:"socket"},{x:0,z:5.31,f:"E",k:"socket2"},{x:0,z:6.7,f:"E",k:"socket"},{x:4.05,z:3.3,f:"W",k:"switch"},{x:6.05,z:0,f:"S",k:"intercom"},{x:6.05,z:0,f:"S",k:"switch2"},{x:8,z:0,f:"S",k:"net"},{x:4.17,z:4.2,f:"E",k:"socket"},{x:4.17,z:6.33,f:"E",k:"socket2"},{x:7.17,z:5.27,f:"W",k:"socket"},{x:6.75,z:2.95,f:"S",k:"switch"},{x:5.4,z:2.95,f:"S",k:"net"},{x:10.29,z:3.97,f:"W",k:"socket"},{x:10.29,z:6.11,f:"W",k:"socket2"},{x:7.29,z:5.1,f:"E",k:"socket"},{x:8.4,z:2.95,f:"S",k:"switch"},{x:9.2,z:2.95,f:"S",k:"ac"},{x:9.9,z:1.12,f:"S",k:"boiler"},{x:8.59,z:2.6,f:"E",k:"km"},{x:8.47,z:1.3,f:"W",k:"switch2"}],lamps:[[2,1.7],[2,5.3],[6.3,1.4],[5.67,5.3],[8.8,5.3],[9.4,2],[9.4,.5]],start:[6.7,.9,3.7]};function Xx(i,t,e,n,s=2){let r=s*2+1;n=Math.max(5e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4));let a=new Te(1,1,1,r,r,r).toNonIndexed(),o=a.attributes.position.array,l=a.attributes.normal.array,c=new I(i/2-n,t/2-n,e/2-n),h=new I,u=new I,d=.5/r;for(let f=0;f<o.length;f+=3)h.fromArray(o,f),u.copy(h),u.x-=Math.sign(u.x)*d,u.y-=Math.sign(u.y)*d,u.z-=Math.sign(u.z)*d,u.normalize(),o[f]=c.x*Math.sign(h.x)+u.x*n,o[f+1]=c.y*Math.sign(h.y)+u.y*n,o[f+2]=c.z*Math.sign(h.z)+u.z*n,l[f]=u.x,l[f+1]=u.y,l[f+2]=u.z;return a.deleteAttribute("uv"),a.attributes.position.needsUpdate=!0,a}var Bu=new Map;function Xa(i,t,e,n){let s=[i,t,e,n].map(a=>Math.round(a*1e3)).join(":"),r=Bu.get(s);return r||(r=Xx(Math.abs(i),Math.abs(t),Math.abs(e),n,n>.03?3:2),r.userData.cached=!0,Bu.set(s,r)),r}function qa(i,t,e,n){let s=Math.min(Math.abs(i),Math.abs(t),Math.abs(e));return s<.012?0:n?Math.min(.08,s*.45):Math.min(.018,s*.3)}var Ya=[{id:"raw",short:"\u042F\u043A \u0454",name:"\u042F\u043A \u0454",sub:"\u0437\u0430\u0440\u0430\u0437: \u0441\u0442\u044F\u0436\u043A\u0430, \u0431\u0456\u043B\u0456 \u0441\u0442\u0456\u043D\u0438, \u0431\u0435\u0437 \u0434\u0432\u0435\u0440\u0435\u0439"},{id:"base",short:"\u0420\u0435\u043C\u043E\u043D\u0442",name:"\u0420\u0435\u043C\u043E\u043D\u0442",sub:"\u043F\u0435\u0440\u0448\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043D\u0442: \u043F\u0456\u0434\u043B\u043E\u0433\u0430, \u043A\u0443\u0445\u043D\u044F, \u0432\u0430\u043D\u043D\u0430"},{id:"scandi",short:"\u0421\u043A\u0430\u043D\u0434\u0456",name:"\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u044C\u043A\u0438\u0439",sub:"\u0441\u0432\u0456\u0442\u043B\u0438\u0439 \u0434\u0443\u0431, \u0431\u0456\u043B\u0435, \u0441\u0456\u0440\u0435 \u0439 \u0433\u0456\u0440\u0447\u0438\u0447\u043D\u0435",wall:16250610,door:15921386,cabinet:16052972,counter:13215612,upper:16052972,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"ash",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"ash",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"ash",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"ash",\u0412\u0430\u043D\u043D\u0430:"tileWhite",\u0422\u0443\u0430\u043B\u0435\u0442:"tileWhite",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:15262680,bedroom:12174527,room:15789024},sofa:12106685,cushion:14263870,wood:13939852,metal:1974050,rug:15328474,rug2:13617339,bed:15855593,duvet:14475232,throw:14263870,textile:15987180,plants:3,shade:16777215,lamp:16769712},{id:"japandi",short:"Japandi",name:"Japandi",sub:"\u0442\u0435\u043F\u043B\u0438\u0439 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0437\u043C: \u0431\u0435\u0436, \u0433\u043E\u0440\u0456\u0445, \u043E\u043B\u0438\u0432\u043A\u0430",wall:15525079,door:12032632,cabinet:8357218,counter:15327956,upper:15327956,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"oakWarm",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"oakWarm",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"oakWarm",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"oakWarm",\u0412\u0430\u043D\u043D\u0430:"tileSand",\u0422\u0443\u0430\u043B\u0435\u0442:"tileSand",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:14273461,bedroom:13350810,room:14931908},sofa:14208184,cushion:11887935,wood:7031346,metal:2762274,rug:13483942,rug2:12167304,bed:7031346,duvet:15196112,throw:9080682,textile:14997958,plants:2,shade:15853263,lamp:16765850,low:!0},{id:"loft",short:"\u041B\u043E\u0444\u0442",name:"\u041B\u043E\u0444\u0442",sub:"\u0433\u0440\u0430\u0444\u0456\u0442, \u0433\u043E\u0440\u0456\u0445, \u043A\u043E\u043D\u044C\u044F\u0447\u043D\u0430 \u0448\u043A\u0456\u0440\u0430 \u0439 \u0447\u043E\u0440\u043D\u0438\u0439 \u043C\u0435\u0442\u0430\u043B",wall:15329509,door:2829616,cabinet:2500651,counter:9267786,upper:2500651,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"walnutDark",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"polished",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"walnutDark",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"walnutDark",\u0412\u0430\u043D\u043D\u0430:"tileDark",\u0422\u0443\u0430\u043B\u0435\u0442:"tileDark",\u0411\u0430\u043B\u043A\u043E\u043D:"polished"},accent:{living:10132638,bedroom:6119524,room:10724775},sofa:9064234,cushion:14209734,wood:5913382,metal:1381912,rug:6053731,rug2:4079684,bed:2829616,duvet:12567236,throw:9064234,textile:9409430,plants:2,shade:1381912,lamp:16760944},{id:"lviv",short:"\u041A\u043B\u0430\u0441\u0438\u043A\u0430",name:"\u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u043B\u0430\u0441\u0438\u043A\u0430",sub:"\u0441\u043C\u0430\u0440\u0430\u0433\u0434, \u044F\u043B\u0438\u043D\u043A\u0430-\u043F\u0430\u0440\u043A\u0435\u0442, \u043B\u0430\u0442\u0443\u043D\u044C \u0456 \u043E\u043A\u0441\u0430\u043C\u0438\u0442",wall:16052198,door:16052198,cabinet:3099199,counter:15525853,upper:16052198,floors:{"\u041A\u0443\u0445\u043D\u044F-\u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044F":"herring",\u041F\u0435\u0440\u0435\u0434\u043F\u043E\u043A\u0456\u0439:"herring",\u041A\u0456\u043C\u043D\u0430\u0442\u0430:"herring",\u0421\u043F\u0430\u043B\u044C\u043D\u044F:"herring",\u0412\u0430\u043D\u043D\u0430:"tileGreen",\u0422\u0443\u0430\u043B\u0435\u0442:"tileGreen",\u0411\u0430\u043B\u043A\u043E\u043D:"stone"},accent:{living:3099199,bedroom:7027263,room:3030876},sofa:3030876,cushion:13214026,wood:7162415,metal:12095818,rug:9190196,rug2:14271644,bed:7027263,duvet:15920610,throw:13214026,textile:15195336,plants:3,shade:15853263,lamp:16765066,classic:!0}];function zu(i,t,e,n){return{herring:()=>i(512,512,(a,o,l)=>{let c=n(41),h=128,u=32;a.fillStyle="#7a5434",a.fillRect(0,0,o,l);for(let d=-2;d<12;d++)for(let f=-2;f<10;f++)for(let g of[0,1]){a.save(),a.translate(f*2*u*1.414+(g?u*1.414:0),d*h*.707*.7+0),a.rotate(g?-Math.PI/4:Math.PI/4);let x=(c()-.5)*16;a.fillStyle=`hsl(${28+(c()-.5)*6},45%,${36+x}%)`,a.fillRect(0,0,h,u),a.strokeStyle="rgba(30,15,5,.45)",a.lineWidth=1.5,a.strokeRect(0,0,h,u),a.restore()}},.9,.9),polished:()=>i(512,512,(a,o,l)=>{let c=n(9);a.fillStyle="#b4b3ae",a.fillRect(0,0,o,l);for(let h=0;h<6e3;h++){let u=150+c()*60|0;a.fillStyle=`rgba(${u},${u},${u},${.03+c()*.05})`;let d=1+c()*5;a.fillRect(c()*o,c()*l,d,d)}},.4,.4),ash:()=>t([38,30,76],51),oakWarm:()=>t([30,42,60],61),walnutDark:()=>t([24,35,30],71),tileWhite:()=>e("#f2f3f3","#eceeee",3),tileSand:()=>e("#d8ccb6","#d2c5ae",3),tileDark:()=>e("#4a4d51","#45484c",3),tileGreen:()=>e("#5d7d6c","#577665",5)}}function ku(i,t,e,n={}){let s=new ce,r=new Map,a=(y,j=.7,et=0)=>{let nt=y+":"+j+":"+et;return r.has(nt)||r.set(nt,new Kt({color:y,roughness:j,metalness:et})),r.get(nt)},o=(y,j,et,nt,J,ft,at,T)=>{let _=Math.abs(et-y),B=ft-J,$=Math.abs(nt-j),Y=qa(_,B,$,at.roughness>=.9&&at.metalness===0),W=new _t(Y>0?Xa(_,B,$,Y):new Te(_,B,$),at);return W.position.set((y+et)/2,(J+ft)/2,(j+nt)/2),W.castShadow=!0,W.receiveShadow=!0,W.userData.y1=J,W.userData.h=B,s.add(W),T&&e.push([Math.min(y,et),Math.min(j,nt),Math.max(y,et),Math.max(j,nt),2]),W},l=(y,j,et,nt,J,ft,at,T=16)=>{let _=new _t(new He(et,nt,ft-J,T),at);return _.position.set(y,(J+ft)/2,j),_.castShadow=!0,s.add(_),_},c=(y,j,et,nt,J)=>{let ft=new _t(new fn(nt,14,10),J);return ft.position.set(y,j,et),ft.castShadow=!0,s.add(ft),ft},h=t.width,u=t.depth,d=2.95,f=a(i.wood,.6),g=a(i.metal,.4,.6),x=a(i.sofa,.95),m=a(i.cushion,.95),p=a(i.textile,.95),w=a(16448250,.5),E=i.low?.05:.14,b=(y,j,et,nt,J)=>{let ft=new Kt({color:J,roughness:.9});n.addWallAO&&n.addWallAO(ft);let at=o(y,j,et,nt,0,t.height-.01,ft);at.userData.wallLike=!0,at.castShadow=!1};b(.001,2.6,.012,u,i.accent.living),b(h-.012,d+.02,h-.001,u,i.accent.bedroom),b(4.18,d+.02,4.19,u,i.accent.room);let L=4.05,A=(L-.6)/6;o(.6,0,L,.36,1.45,2.25,a(i.upper,.55)),o(.62,.36,L-.02,.365,1.47,2.23,a(i.upper,.4));for(let y=.6+A;y<L-.05;y+=A)o(y-.004,.362,y+.004,.37,1.47,2.23,a(2236962,.6));let C=a(12172996,.25,.9);for(let y=.6+A/2;y<L;y+=A)o(y-.09,.37,y+.09,.39,1.5,1.515,C),o(y-.09,.6,y+.09,.625,.78,.795,C);for(let y=.6+A;y<L-.05;y+=A)o(y-.003,.598,y+.003,.606,.12,.84,a(3355443,.6));l(1.6,.1,.022,.026,.9,1.18,C);{let y=new _t(new _i(.11,.016,8,16,Math.PI),C);y.position.set(1.6,1.18,.21),y.rotation.y=Math.PI/2,s.add(y)}for(let[y,j,et]of[[2.65,.18,.09],[2.95,.18,.07],[2.65,.42,.07],[2.95,.42,.09]]){let nt=new _t(new _i(et,.006,6,28),a(5592405,.5));nt.rotation.x=Math.PI/2,nt.position.set(y,.908,j),s.add(nt)}let P=2,M=2.15;if(i.classic)l(P,M,.55,.55,.72,.76,f,32),l(P,M,.06,.12,0,.72,f);else{o(P-.7,M-.42,P+.7,M+.42,.72,.76,f,!0);for(let[y,j]of[[-.62,-.34],[.62,-.34],[-.62,.34],[.62,.34]])o(P+y-.025,M+j-.025,P+y+.025,M+j+.025,0,.72,i.id==="loft"?g:f)}i.classic&&e.push([P-.55,M-.55,P+.55,M+.55,2]);let v=(y,j,et)=>{let nt=i.id==="scandi"?a(15921386,.6):i.id==="loft"?a(9064234,.8):i.classic?a(i.sofa,.95):f;o(y-.21,j-.21,y+.21,j+.21,.44,.48,nt);for(let[ft,at]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])o(y+ft-.015,j+at-.015,y+ft+.015,j+at+.015,0,.44,i.id==="loft"?g:f);let J=y-et*.2;o(J-.02,j-.2,J+.02,j+.2,.48,.9,nt)};v(P-.95,M-.2,1),v(P-.95,M+.25,1),v(P+.95,M-.2,-1),v(P+.95,M+.25,-1);for(let y of i.classic?[0]:[-.4,.4]){o(P+y-.004,M-.004,P+y+.004,M+.004,1.75,2.7,g);let j=new _t(new Es(i.classic?.32:.17,.22,24,1,!0),a(i.shade,.6,i.id==="loft"?.5:0));j.material.side=Xe,j.position.set(P+y,1.68,M),s.add(j),c(P+y,1.6,M,.05,new qe({color:i.lamp}))}let R=.02,D=4.2,O=.95,G=6.5;o(R,D,O,G,E,E+.3,x,!0),o(R,D,R+.24,G,E+.3,E+.78,x),o(R,D,O,D+.18,E+.3,E+.55,x),o(R,G-.18,O,G,E+.3,E+.55,x);for(let y of[4.55,5.35,6.15])o(R+.24,y-.36,O-.04,y+.36,E+.3,E+.42,x);if(o(R+.24,4.5,R+.36,4.95,E+.42,E+.82,m),o(R+.24,5.85,R+.36,6.3,E+.42,E+.82,m),!i.low)for(let[y,j]of[[R+.06,D+.06],[O-.06,D+.06],[R+.06,G-.06],[O-.06,G-.06]])o(y-.02,j-.02,y+.02,j+.02,0,E,g);if(o(.6,4,3.2,6.7,.002,.012,a(i.rug,1)),i.classic&&o(.75,4.15,3.05,6.55,.0125,.014,a(i.rug2,1)),i.low||i.classic)l(1.8,5.35,.45,.45,.32,.36,f,32),l(1.8,5.35,.36,.36,0,.32,f,32),e.push([1.4,4.95,2.2,5.75,2]);else{o(1.4,4.85,2.2,5.85,.36,.4,i.id==="loft"?a(5913382,.5):f,!0);for(let[y,j]of[[1.43,4.88],[2.17,4.88],[1.43,5.82],[2.17,5.82]])o(y-.015,j-.015,y+.015,j+.015,0,.36,g)}c(1.8,.45,5.35,.07,a(i.cushion,.5)),o(3.62,4.4,4.04,6.3,i.low?0:.2,.55,i.id==="loft"?g:f,!0),o(3.99,4.75,4.04,5.95,1,1.68,a(789775,.25,.3));let Z=3.15,z=6.75;o(Z-.4,z-.4,Z+.4,z+.4,E,E+.32,m,!0),o(Z-.4,z+.22,Z+.4,z+.4,E+.32,E+.8,m),l(.45,6.95,.14,.16,0,.03,g),l(.45,6.95,.012,.012,.03,1.5,g);let it=new _t(new He(.16,.22,.28,24,1,!0),a(i.shade,.8));it.material.side=Xe,it.position.set(.45,1.6,6.95),s.add(it);let V=new Kt({color:i.textile,roughness:1,side:Xe}),K=(y,j,et)=>{let nt=t.height-.12,J=new Ke(et,nt,30,1),ft=J.attributes.position,at=Math.max(3,Math.round(et/.085));for(let _=0;_<ft.count;_++){let B=ft.getX(_)/et+.5;ft.setZ(_,Math.sin(B*Math.PI*2*at)*.03+Math.sin(B*9.4+y)*.012)}J.computeVertexNormals();let T=new _t(J,V);T.position.set(y,.02+nt/2,j+.05),T.castShadow=!0,T.receiveShadow=!0,T.userData.wallLike=!0,T.userData.y1=.02,T.userData.h=nt,s.add(T)},rt=(y,j)=>{o(y,u-.225,j,u-.205,t.height-.1,t.height-.08,g).userData.wallLike=!0};K(.85,u-.26,.42),K(3.15,u-.26,.42),rt(.55,3.45),K(4.5,u-.26,.34),K(6.8,u-.26,.34),rt(4.28,7.05),K(7.6,u-.26,.34),K(9.9,u-.26,.42),rt(7.4,10.18),o(.6,.001,L,.012,.9,1.45,a(i.id==="loft"?3816512:i.id==="lviv"?15328470:15987180,.18));let Et=y=>"#"+y.toString(16).padStart(6,"0"),Dt=(y,j,et,nt,J,ft,at)=>{if(!n.canvasTex)return;let T=n.canvasTex(256,Math.round(256*J/nt),(Y,W,yt)=>{let ut=at,gt=()=>(ut=ut*16807%2147483647)/2147483647,Jt=[i.cushion,i.sofa,i.wood,i.accent.bedroom,i.throw].map(Et);Y.fillStyle=Et(i.id==="loft"?14210768:16052454),Y.fillRect(0,0,W,yt);for(let st=0;st<5;st++){Y.globalAlpha=.82,Y.fillStyle=Jt[(st+at)%Jt.length],Y.beginPath();let Mt=W*(.18+gt()*.64),Ut=yt*(.3+gt()*.45),Ft=yt*(.16+gt()*.22);st%2?Y.arc(Mt,Ut,Ft,Math.PI,Math.PI*2):Y.ellipse(Mt,Ut,Ft*1.2,Ft*.75,gt()*3,0,7),Y.fill()}Y.globalAlpha=1,Y.strokeStyle="#26282b",Y.lineWidth=2,Y.beginPath(),Y.moveTo(W*.08,yt*.78),Y.bezierCurveTo(W*.35,yt*.5,W*.6,yt*.95,W*.93,yt*.62),Y.stroke(),Y.fillStyle=Et(i.cushion),Y.beginPath(),Y.arc(W*.78,yt*.24,yt*.07,0,7),Y.fill()},1,1),_=new Kt({map:T,roughness:.85});_.userData.own=!0;let B=new _t(new Ke(nt,J),_);B.position.set(y+ft*.024,j,et),B.rotation.y=ft*Math.PI/2,B.userData.hideLow=!0,s.add(B);let $=o(Math.min(y,y+ft*.022),et-nt/2-.025,Math.max(y,y+ft*.022),et+nt/2+.025,j-J/2-.025,j+J/2+.025,i.classic?a(i.metal,.35,.8):i.id==="loft"?g:f);$.userData.hideLow=!0,$.castShadow=!1};Dt(.013,1.62,5.35,1.35,.85,1,5),Dt(4.192,1.6,5.2,.7,.95,1,9),Dt(h-.013,1.9,5.6,1.1,.6,-1,13),o(4.19,4.2,5.05,6.2,E,E+.36,p,!0),o(4.19,4.2,4.4,6.2,E+.36,E+.8,p),o(4.42,4.35,4.55,4.85,E+.36,E+.75,m),o(4.42,5.55,4.55,6.05,E+.36,E+.75,m),o(6.45,5.5,7.16,7,.72,.75,f,!0);for(let[y,j]of[[6.48,5.53],[7.13,5.53],[6.48,6.97],[7.13,6.97]])o(y-.02,j-.02,y+.02,j+.02,0,.72,g);o(7.1,5.95,7.14,6.55,.98,1.36,a(789775,.3)),o(7,6.2,7.08,6.3,.75,.98,g),o(6,6,6.4,6.4,.45,.5,a(i.cushion,.8)),o(5.97,6,6,6.4,.5,.95,a(i.cushion,.8)),l(6.2,6.2,.02,.02,0,.45,g),o(4.19,3.15,4.55,3.95,0,2.1,f,!0);let Vt=(()=>{let y=7;return()=>(y=y*16807%2147483647)/2147483647})(),X=[9190196,3030876,13214026,6126956,15195336,3815994];for(let y=0;y<5;y++){let j=.05+y*.41;o(4.2,3.17,4.55,3.93,j,j+.02,a(i.wood,.6));let et=3.2;for(;et<3.85;){let nt=.03+Vt()*.04,J=.22+Vt()*.1;o(4.25,et,4.5,et+nt,j+.02,j+.02+J,a(X[Vt()*6|0],.8)),et+=nt+.005}}o(4.6,4,6.3,6.4,.002,.012,a(i.rug2,1));let tt=h-.01,vt=tt-2.05,lt=4.8,At=6.4;o(vt,lt,tt,At,i.low?0:.12,.34,a(i.bed,.8),!0),o(vt+.04,lt+.04,tt-.05,At-.04,.34,.56,w),o(vt+.02,lt+.02,tt-.55,At-.02,.56,.6,a(i.duvet,.95)),o(vt+.02,lt+.02,vt+.5,At-.02,.6,.63,a(i.throw,.95)),o(tt-.5,lt+.1,tt-.12,lt+.75,.56,.7,w),o(tt-.5,At-.75,tt-.12,At-.1,.56,.7,w),o(tt-.1,lt-.1,tt,At+.1,0,i.classic?1.35:1.1,a(i.classic?i.sofa:i.bed,.9));for(let y of[lt-.5,At+.05])o(tt-.45,y,tt-.02,y+.45,i.low?0:.12,.5,f,!0),l(tt-.22,y+.22,.07,.09,.5,.75,a(i.shade,.6)),c(tt-.22,.8,y+.22,.03,new qe({color:i.lamp}));o(7.8,4.3,9.6,7,.002,.012,a(i.rug,1)),o(8.52,2.96,h-.01,3.56,0,2.25,a(i.id==="scandi"?16052972:i.id==="loft"?2500651:i.id==="lviv"?16052198:14273461,.6),!0);for(let y of[9.11,9.7])o(y-.003,3.56,y+.003,3.57,.05,2.2,a(3355443,.6));for(let y of[9,9.22,9.59,9.81])o(y-.008,3.57,y+.008,3.6,.95,1.35,a(12172996,.25,.9));o(4.35,.01,5.95,.6,0,2.5,a(i.id==="loft"?2500651:i.upper,.55),!0);for(let y of[4.75,5.15,5.55])o(y-.003,.6,y+.003,.61,.05,2.45,a(3355443,.6));o(7.78,.02,8.12,.4,0,.45,f,!0);let Pt=new _t(new He(.35,.35,.02,40),new Kt({color:13621470,roughness:.05,metalness:.9}));Pt.rotation.x=Math.PI/2,Pt.position.set(7.95,1.25,.012),Pt.scale.set(.7,1,.7),s.add(Pt);let Bt=new _t(new _i(.36,.015,8,40),g);Bt.position.copy(Pt.position),Bt.position.z+=.005,Bt.scale.set(.7,.7,1),s.add(Bt);let ie=a(5208650,.9),$t=a(4155965,.9),de=(y,j,et)=>{l(y,j,.16,.12,0,.32,a(i.id==="loft"?2829616:i.classic?12095818:15327956,.7));for(let nt=0;nt<7;nt++){let J=nt*.9,ft=.08+nt%3*.05;c(y+Math.cos(J)*ft,.32+et*(.45+nt%4*.15),j+Math.sin(J)*ft,.14+nt%2*.05,nt%2?ie:$t)}e.push([y-.2,j-.2,y+.2,j+.2,2])};return de(.4,7.35,1),i.plants>1&&de(9.95,7.3,.8),i.plants>2&&de(4.6,7.05,.7),s}var G_=new Zt,Hu=new Ht,vi=new I;function wc(i){let t=0;for(let a of i)t+=a.geo.index?a.geo.index.count:a.geo.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=0;for(let{geo:a,matrix:o}of i){let l=a.attributes.position,c=a.attributes.normal,h=a.index;Hu.getNormalMatrix(o);let u=h?h.count:l.count;for(let d=0;d<u;d++){let f=h?h.getX(d):d;vi.fromBufferAttribute(l,f).applyMatrix4(o),e[s]=vi.x,e[s+1]=vi.y,e[s+2]=vi.z,vi.fromBufferAttribute(c,f).applyMatrix3(Hu).normalize(),n[s]=vi.x,n[s+1]=vi.y,n[s+2]=vi.z,s+=3}}let r=new Ie;return r.setAttribute("position",new ke(e,3)),r.setAttribute("normal",new ke(n,3)),r}function Qe(i,t){i.updateWorldMatrix(!0,!0);let e=new Zt().copy(i.matrixWorld).invert(),n=new Map,s=[],r=a=>{for(let o of a.children){let l=o.userData;if(!(!t&&(l.keep||l.wallLike||l.openable||l.hideLow||!o.visible)))if(o.isMesh&&!o.isInstancedMesh&&!Array.isArray(o.material)&&!o.material.map&&o.geometry.attributes.normal&&!o.children.length){let c=o.material.uuid+":"+(o.castShadow?1:0)+(o.receiveShadow?1:0)+":"+o.layers.mask+":"+o.renderOrder;n.has(c)||n.set(c,{sample:o,items:[]}),n.get(c).items.push({geo:o.geometry,matrix:new Zt().multiplyMatrices(e,o.matrixWorld)}),s.push(o)}else!o.isMesh&&!o.isLight&&!o.isLine&&!o.isLineSegments&&!o.isSprite&&r(o)}};r(i);for(let a of s)a.parent.remove(a);for(let{sample:a,items:o}of n.values()){let l=new _t(wc(o),a.material);l.castShadow=a.castShadow,l.receiveShadow=a.receiveShadow,l.layers.mask=a.layers.mask,l.renderOrder=a.renderOrder,i.add(l)}return i}var qx=49.84,Yx=24.03,On=Math.PI/180;function Ac(i,t,e,n){let s=c=>{let h=new Date(Date.UTC(i,c+1,0));return h.getUTCDate()-h.getUTCDay()},r=t*100+e,a=200+s(2),o=900+s(9),l=r>a&&r<o?3:r===a?n>=3?3:2:r===o&&n<4?3:2;return new Date(Date.UTC(i,t,e)+(n-l)*36e5)}function Rc(i,t=qx,e=Yx){let n=i.getTime()/864e5-10957.5,s=(357.529+.98560028*n)*On,a=(280.459+.98564736*n+1.915*Math.sin(s)+.02*Math.sin(2*s))*On,o=(23.439-36e-8*n)*On,l=Math.atan2(Math.cos(o)*Math.sin(a),Math.cos(a)),c=Math.asin(Math.sin(o)*Math.sin(a)),u=((18.697374558+24.06570982441908*n)%24*15+e)*On-l,d=t*On,f=Math.asin(Math.sin(d)*Math.sin(c)+Math.cos(d)*Math.cos(c)*Math.cos(u));return{az:(Math.atan2(Math.sin(u),Math.cos(u)*Math.sin(d)-Math.tan(c)*Math.cos(d))/On+180+360)%360,el:f/On}}function Cc(i,t,e){let n=(i-e)*On,s=Math.cos(t*On);return new I(-Math.sin(n)*s,Math.sin(t*On),Math.cos(n)*s)}function $a(i,t,e,n,s){let r=null,a=null,o=null,l=null;for(let c=3;c<=22.5;c+=1/30){let h=Rc(Ac(i,t,e,c));h.el>0&&(o==null&&(o=c),l=c);let u=(h.az-n+540)%360-180;h.el>0&&Math.abs(u)<85&&h.el>s(u)&&(r==null&&(r=c),a=c)}return{from:r,to:a,rise:o,set:l}}var pn=i=>i==null?"\u2014":`${Math.floor(i)}:${String(Math.round(i%1*60)%60).padStart(2,"0")}`,Cs=new Te(1,1,1),Ue=class{constructor(t,e=!0){this.mat=t,this.m=[],this.cast=e}add(t,e,n,s,r,a){let o=new Zt().compose(new I((t+s)/2,(e+r)/2,(n+a)/2),new Tn,new I(Math.abs(s-t)||.001,Math.abs(r-e)||.001,Math.abs(a-n)||.001));this.m.push(o)}mesh(){let t=new Ss(Cs,this.mat,this.m.length);return this.m.forEach((e,n)=>t.setMatrixAt(n,e)),t.castShadow=this.cast,t.receiveShadow=!0,t}},Gu=[],ve=(i,t=.85,e=0)=>{let n=new Kt({color:i,roughness:t,metalness:e});return Gu.push(n),n},Tc=new Map,$x=i=>(Tc.has(i)||Tc.set(i,ve(i,.92)),Tc.get(i));function Wu(i){for(let t of Gu)t.userData.keepEmissive||t.emissive.copy(t.color).multiplyScalar(i)}function Vu(i,t,e){let{x0:n,x1:s,fz:r,dir:a,y0:o,floors:l,fh:c,seed:h}=e,u=13,d=h,f=()=>(d=d*16807%2147483647)/2147483647,g=[15986922,14468774,11186392,15986922,15195596],x=o+.45+l*c,m=n,p=h%3;for(;m<s-.5;){let w=Math.min(s-m,9+f()*7),E=g[p++%g.length],b=(p%2?0:.18)*a,L=r+b,A=L-a*u,C=new _t(Cs,$x(E)),P=x-(e.drop||0);C.scale.set(w,P-o,u),C.position.set(m+w/2,(P+o)/2,(L+A)/2),C.castShadow=!0,C.receiveShadow=!0,i.add(C),e.drop?t.slab.add(m,P,Math.min(L,A),m+w,P+.05,Math.max(L,A)):t.parapet.add(m,x,Math.min(L,A),m+w,x+.12,Math.max(L,A)),t.plinth.add(m,o,L-a*.03,m+w,o+.45,L+a*.02);let M=Math.max(2,Math.round(w/2.9)),v=w/M;for(let R=0;R<M;R++){let D=m+v*(R+.5),O=1.25+R%2*.35,G=(R+p)%3===0&&w>10;for(let Z=0;Z<l;Z++){let z=o+.45+Z*c,it=z+.12,V=z+2.45,K=L+a*.005;if(Z===0&&R===Math.floor(M/2)&&p%3===1){t.glass.add(D-.8,z,K,D+.8,z+2.4,K+a*.02),t.frame.add(D-.85,z+2.4,K,D+.85,z+2.5,K+a*.06),t.frame.add(D-.02,z,K,D+.02,z+2.4,K+a*.06),t.slab.add(D-1.2,z+2.7,K,D+1.2,z+2.82,K+a*1.2),t.lamp.add(D-.05,z+2.62,K+a*.6,D+.05,z+2.68,K+a*.7);continue}if(t.glass.add(D-O/2,it,K,D+O/2,V,K+a*.01),t.frame.add(D-O/2-.06,it,K,D-O/2,V,K+a*.07),t.frame.add(D+O/2,it,K,D+O/2+.06,V,K+a*.07),t.frame.add(D-O/2-.06,V,K,D+O/2+.06,V+.06,K+a*.07),t.frame.add(D-O/2-.06,it-.05,K,D+O/2+.06,it,K+a*.09),t.frame.add(D-.03+O*.1,it,K,D+.03+O*.1,V,K+a*.06),t.frame.add(D-O/2,it+.95,K,D+O/2,it+1,K+a*.06),f()<.25&&t.curtain.add(D-O/2+.05,it+.1,K-a*.05,D-O/2+.35,V-.05,K-a*.04),Z>0&&G){let rt=O+.5,Et=1.05,Dt=L,Vt=L+a*Et;t.slab.add(D-rt/2,z-.05,Dt,D+rt/2,z+.13,Vt),t.bar.add(D-rt/2,z+1.05,Vt-a*.02,D+rt/2,z+1.09,Vt),t.bar.add(D-rt/2,z+1.05,Dt,D-rt/2+.04,z+1.09,Vt),t.bar.add(D+rt/2-.04,z+1.05,Dt,D+rt/2,z+1.09,Vt);for(let X=-rt/2+.05;X<=rt/2-.04;X+=.11)t.bar.add(D+X-.01,z+.13,Vt-a*.02,D+X+.01,z+1.05,Vt-a*0);for(let X=.12;X<Et-.05;X+=.11)t.bar.add(D-rt/2,z+.13,L+a*X,D-rt/2+.02,z+1.05,L+a*(X+.02)),t.bar.add(D+rt/2-.02,z+.13,L+a*X,D+rt/2,z+1.05,L+a*(X+.02))}else if(Z>0&&f()<.18){let rt=D+O/2+.25;t.ac.add(rt,z+.4,L,rt+.75,z+.95,L+a*.3)}}}m+=w}return x}function Xu(i,t){let e=new ce,n=i.width,s=i.depth,r=t.below,a=t.gap,o=t.floors,l=3,c=-r,h=s+.3,u=h+a,d=n/2-38,f=n/2+38,g=()=>({glass:new Ue((()=>{let y=ve(3885658,.15,.45);return y.emissive.set(1911352),y.userData.keepEmissive=!0,y})(),!1),frame:new Ue(ve(3159098,.5,.3)),slab:new Ue(ve(10329499,.9)),bar:new Ue(ve(1842721,.5,.5)),ac:new Ue(ve(15856111,.6)),parapet:new Ue(ve(9409174,.8)),plinth:new Ue(ve(7303797,.9)),curtain:new Ue(ve(15327956,1),!1),lamp:new Ue(new qe({color:16773584}),!1),curb:new Ue(ve(12433840,.9),!1),fence:new Ue(ve(1842721,.5,.5)),hedge:new Ue(ve(4155957,1)),bench:new Ue(ve(13081186,.7)),benchF:new Ue(ve(2829875,.5,.5)),pole:new Ue(ve(2829875,.5,.5)),line:new Ue(ve(15658730,.8),!1)}),x=g(),m=g();m.glass=x.glass,m.glass=new Ue(x.glass.mat,!1);let p=new ce;e.add(p),Vu(e,x,{x0:d+8,x1:f-8,fz:h,dir:1,y0:c,floors:2,fh:l,seed:11,drop:.08});let E=Vu(p,m,{x0:d,x1:f,fz:u,dir:-1,y0:c,floors:o,fh:l,seed:7}),b=ve(7309909,1),L=ve(11052187,.95),A=ve(4079942,.95),C=(y,j,et,nt,J,ft=0)=>{let at=new _t(new Ke(et-y,Math.abs(nt-j)),J);return at.rotation.x=-Math.PI/2,at.position.set((y+et)/2,c+ft,(j+nt)/2),at.receiveShadow=!0,e.add(at),at};C(n/2-90,h-30,n/2+90,u+40,b,-.01);let P=a/18,M=h+3*P,v=M+2*P,R=u-7*P,D=R+2*P;C(d-10,M,f+10,v,L,.02),C(d-10,R,f+10,D,L,.02),C(d-10,v,f+10,R,A,.015);for(let y=d-10;y<f+10;y+=6)x.line.add(y,c+.02,(v+R)/2-.06,y+3,c+.025,(v+R)/2+.06);x.curb.add(d-10,c,v-.08,f+10,c+.15,v+.04),x.curb.add(d-10,c,R-.04,f+10,c+.15,R+.08);for(let[y,j]of[[M-.15,M-.75],[D+.15,D+.75]]){x.fence.add(d,c+.95,y-.02,f,c+1,y+.02),x.fence.add(d,c+.1,y-.015,f,c+.14,y+.015);for(let et=d;et<f;et+=.14)x.fence.add(et-.008,c,y-.008,et+.008,c+1,y+.008);x.hedge.add(d,c,Math.min(j,y)-.3,f,c+.85,Math.min(j,y)+.3+Math.abs(j-y)-.6+.35)}for(let y=d+4;y<f;y+=14){x.pole.add(y-.05,c,D-.4,y+.05,c+4.2,D-.3),x.pole.add(y-.25,c+4.15,D-.45,y+.25,c+4.3,D-.25),x.lamp.add(y-.2,c+4.1,D-.42,y+.2,c+4.15,D-.28);let j=y+6,et=D-1;for(let nt=0;nt<4;nt++)x.bench.add(j-.9,c+.45+(nt<3?0:.2),et-.25+nt*.13*(nt<3?1:.6),j+.9,c+.48+(nt<3?0:.35),et-.15+nt*.13*(nt<3?1:.6));x.benchF.add(j-.85,c,et-.3,j-.8,c+.9,et+.2),x.benchF.add(j+.8,c,et-.3,j+.85,c+.9,et+.2)}let O=[9051940,14277339,2832981,4540492,10134443],G=5,Z=()=>(G=G*16807%2147483647)/2147483647,z=ve(1710618,.8),it=new He(.33,.33,.24,14);for(let y=0;y<6;y++){let j=d+6+y*11+Z()*4,et=y%2?R-1.2:v+1.2,nt=ve(O[y%O.length],.35,.5),J=new ce,ft=new _t(Cs,nt);ft.scale.set(4.3,.7,1.8),ft.position.y=.55,J.add(ft);let at=new _t(Cs,nt);at.scale.set(2.3,.55,1.6),at.position.set(-.2,1.15,0),J.add(at);let T=new _t(Cs,x.glass.mat);T.scale.set(2.2,.45,1.62),T.position.set(-.2,1.15,0),J.add(T);for(let[_,B]of[[-1.35,-.85],[1.35,-.85],[-1.35,.85],[1.35,.85]]){let $=new _t(it,z);$.rotation.x=Math.PI/2,$.position.set(_,.33,B),J.add($)}J.position.set(j,c,et),J.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),e.add(J)}let V=[5208650,6130256,6983486].map(y=>ve(y,.9)),K=ve(5981750,1),rt=ve(3103290,.95),Et=[],Dt=new ce,Vt=new He(.02,.05,1.3,5),X=new Na(1,1);Dt.userData.keep=!0,e.add(Dt);let tt=V.map(y=>{let j=new _t(new Ie,y);return j.castShadow=!0,j.userData.keep=!0,j.frustumCulled=!1,e.add(j),j}),vt=-1,lt=y=>{y!==vt&&(vt=y,tt.forEach((j,et)=>{let nt=Et.filter(J=>J.mi===et).map(J=>({geo:X,matrix:new Zt().compose(new I(J.c[0]+J.o[0]*y,J.c[1]+J.o[1]*y,J.c[2]+J.o[2]*y),new Tn,new I(J.r*y,J.r*y,J.r*y))}));j.geometry.dispose(),j.geometry=wc(nt)}))},At=3,Pt=()=>(At=At*16807%2147483647)/2147483647,Bt=(y,j,et)=>{let nt=new _t(new He(.08,.14,et,7),K);nt.position.set(y,c+et/2,j),nt.castShadow=!0,e.add(nt);for(let J=0;J<5;J++){let ft=J*1.3+Pt(),at=J?.55:0,T=.7+Pt()*.4;Et.push({c:[y,c+et,j],o:[Math.cos(ft)*at,.4+(J?Pt()*.6:.9),Math.sin(ft)*at],r:T,mi:J%3})}for(let J=0;J<5;J++){let ft=new _t(Vt,K),at=J*1.25+Pt();ft.position.set(y+Math.cos(at)*.35,c+et+.3,j+Math.sin(at)*.35),ft.rotation.set(Math.sin(at)*.6,0,-Math.cos(at)*.6),Dt.add(ft)}};for(let y=d+2;y<f;y+=8+Pt()*3)Bt(y,M+.6,2.6+Pt()*1.2),Bt(y+4,D-.6-.9,2.8+Pt()*1.4);for(let y of[n/2-12,n/2+17]){let j=new _t(new Es(.9,3.2,10),rt);j.position.set(y,c+1.9,u+2),j.castShadow=!0,e.add(j);let et=new _t(new He(.1,.12,.6,6),K);et.position.set(y,c+.3,u+2),e.add(et)}let ie=new _t(Cs,ve(16054266,.9));ie.scale.set(f-d,.1,12.6),ie.position.set((d+f)/2,E+.13,u+6.5),ie.userData.keep=!0,p.add(ie);for(let y of Object.values(x))y.m.length&&e.add(y.mesh());for(let y of Object.values(m))y.m.length&&p.add(y.mesh());p.userData.keep=!0,Qe(p),Qe(Dt),Qe(e),p.traverse(y=>y.layers.set(1));let $t=[[15331058,null,0,1],[14936298,null,0,1],[9083482,null,0,0],[9286490,[11917706,15910614,10275941],.8,0],[8366421,[8172354,9159498,6987582],1,0],[7314e3,[5208650,6130256,6983486],1,0],[7309909,[4879172,5603144,6588988],1,0],[8030802,[5208650,6983486,8359738],1,0],[8358485,[9411130,14262842,6983486],1,0],[9077845,[14715438,13194798,15119162],.95,0],[8223322,[10511662,9067054,11565626],.55,0],[14673384,null,0,1]];function de(y){let[j,et,nt,J]=$t[y];b.color.set(j),L.color.set(J?14278113:11052187),tt.forEach(ft=>{ft.visible=!!et}),et&&lt(nt),et&&V.forEach((ft,at)=>ft.color.set(et[at])),Dt.visible=!et||nt<.7,ie.visible=!!J}return{group:e,top:E,setSeason:de}}var St=i=>document.getElementById(i),Ee=new URLSearchParams(location.search),qu=window.Kvartyra||null,Qt={get(i,t){try{let e=localStorage.getItem("kv."+i);return e==null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("kv."+i,JSON.stringify(t))}catch{}}},Ae=Mr.height,Re=new Aa({antialias:!0,powerPreference:"high-performance"}),Vc=window.devicePixelRatio||1,eo=Math.min(Vc,1.5),bi=Ee.get("q")||Qt.get("q","auto"),Vi=bi==="lite"||bi==="auto"&&Qt.get("autoLite",!1),id=()=>Math.min(Vc,Vi?1.5:2,Math.sqrt(52e5/Math.max(1,innerWidth*innerHeight))),sn=bi==="high"?eo:Math.max(.6,Math.min(eo,Qt.get("movePR",Math.min(Vc,1.25)))),Ic=eo,no=id();Re.setPixelRatio(no);Re.shadowMap.enabled=!0;Re.shadowMap.autoUpdate=!1;var ki=3,Ka=!0,Dc=0;function Cn(i){ki=Math.max(ki,2),Dc=performance.now(),i&&(Ka=!0)}Re.shadowMap.type=dc;Re.toneMapping=fc;Re.toneMappingExposure=1.12;document.body.prepend(Re.domElement);var Ne=new fr,be=new ze(50,1,.05,200),Qa=new Ba(15855854,11050640,1.2);Ne.add(Qa);var Be=new Ha(16773596,2.4);Be.castShadow=!0;Be.shadow.mapSize.set(2048,2048);Be.shadow.radius=3;Object.assign(Be.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:100});Be.shadow.bias=-6e-4;Be.shadow.normalBias=.02;Be.shadow.camera.layers.enable(1);Ne.add(Be,Be.target);var Os=Mr.width/2,Cr=Mr.depth/2;Be.target.position.set(Os,0,Cr);function Gs(i,t,e,n,s){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let a=new gr(r);return a.wrapS=a.wrapT=lr,a.repeat.set(n,s),a.colorSpace=Ze,a.anisotropy=4,a}function io(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function ja(i,t){return Gs(1024,1024,(e,n,s)=>{let r=io(t),a=128;for(let o=0;o<s;o+=a){let l=-r()*600;for(;l<n;){let c=520+r()*420,h=(r()-.5)*11,u=i[0]+(r()-.5)*5,d=i[1]+(r()-.5)*6;e.save(),e.beginPath(),e.rect(l,o,c,a),e.clip(),e.fillStyle=`hsl(${u},${d}%,${i[2]+h}%)`,e.fillRect(l,o,c,a);for(let g=0;g<26;g++){let x=o+r()*a,m=r()>.35;e.globalAlpha=.03+r()*.07,e.strokeStyle=m?"#3a2412":"#fff3dc",e.lineWidth=.6+r()*1.6,e.beginPath(),e.moveTo(l,x),e.bezierCurveTo(l+c*.3,x+(r()-.5)*10,l+c*.7,x+(r()-.5)*10,l+c,x+(r()-.5)*6),e.stroke()}if(r()>.55){let g=l+c*(.25+r()*.5),x=o+a*(.35+r()*.3);e.strokeStyle="#3a2412",e.lineWidth=1.2;for(let m=1;m<6;m++)e.globalAlpha=.05+.012*m,e.beginPath(),e.ellipse(g,x,m*(26+r()*10),m*5.5,0,0,7),e.stroke()}if(r()>.86){let g=l+c*r(),x=o+a*(.2+r()*.6),m=e.createRadialGradient(g,x,0,g,x,9);m.addColorStop(0,"rgba(50,28,12,.55)"),m.addColorStop(1,"rgba(50,28,12,0)"),e.globalAlpha=1,e.fillStyle=m,e.fillRect(g-10,x-10,20,20)}let f=e.createLinearGradient(0,o,0,o+a);f.addColorStop(0,"rgba(0,0,0,.07)"),f.addColorStop(.5,"rgba(255,255,255,.04)"),f.addColorStop(1,"rgba(0,0,0,.09)"),e.globalAlpha=1,e.fillStyle=f,e.fillRect(l,o,c,a),e.restore(),e.fillStyle="rgba(30,18,8,.42)",e.fillRect(l,o,2,a),l+=c}e.fillStyle="rgba(30,18,8,.42)",e.fillRect(0,o,n,2),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(0,o+2,n,1)}},.7,.7)}function Uc(i,t,e){return Gs(512,512,(n,s,r)=>{let a=s/e,o=io(7);for(let l=0;l<e;l++)for(let c=0;c<e;c++){n.fillStyle=(l+c)%2?i:t,n.fillRect(l*a,c*a,a,a),n.globalAlpha=.03+o()*.05,n.fillStyle=o()>.5?"#fff":"#000",n.fillRect(l*a,c*a,a,a),n.globalAlpha=1;for(let h=0;h<3;h++){let u=n.createRadialGradient(0,0,0,0,0,1);u.addColorStop(0,o()>.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.05)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.save(),n.beginPath(),n.rect(l*a,c*a,a,a),n.clip(),n.translate(l*a+o()*a,c*a+o()*a),n.scale(a*.6,a*.35),n.fillStyle=u,n.fillRect(-1,-1,2,2),n.restore()}}n.strokeStyle="rgba(70,70,68,.35)",n.lineWidth=3;for(let l=0;l<=e;l++)n.beginPath(),n.moveTo(l*a,0),n.lineTo(l*a,r),n.moveTo(0,l*a),n.lineTo(s,l*a),n.stroke();n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=1;for(let l=0;l<=e;l++)n.beginPath(),n.moveTo(l*a+2.5,0),n.lineTo(l*a+2.5,r),n.moveTo(0,l*a+2.5),n.lineTo(s,l*a+2.5),n.stroke()},1.6,1.6)}function Zx(){return Gs(512,512,(i,t,e)=>{let n=io(5);i.fillStyle="#a3a29d",i.fillRect(0,0,t,e);for(let s=0;s<9e3;s++){let r=140+n()*50|0;i.fillStyle=`rgba(${r},${r},${r-3},${.04+n()*.06})`;let a=1+n()*7;i.fillRect(n()*t,n()*e,a,a)}for(let s=0;s<40;s++){let r=120+n()*70|0,a=i.createRadialGradient(0,0,0,0,0,1);a.addColorStop(0,`rgba(${r},${r},${r},.10)`),a.addColorStop(1,"rgba(0,0,0,0)"),i.save(),i.translate(n()*t,n()*e),i.scale(40+n()*90,40+n()*90),i.fillStyle=a,i.fillRect(-1,-1,2,2),i.restore()}},.4,.4)}var Nc={concrete:Zx,oak:()=>ja([32,45,58],11),light:()=>ja([36,40,70],23),walnut:()=>ja([26,38,44],37),tile:()=>Uc("#d9dde0","#cfd4d8",4),stone:()=>Uc("#bfb6aa","#b5ab9e",3)};Object.assign(Nc,zu(Gs,ja,Uc,io));var Yu={},Jx=i=>Yu[i]||(Yu[i]=(Nc[i]||Nc.oak)()),Tt={wall:new Kt({color:16316404,roughness:.92}),wallTop:new Kt({color:3882826,roughness:.8}),ext:new Kt({color:15130064,roughness:.95}),glass:new Kt({color:13625077,transparent:!0,opacity:.2,roughness:.03,metalness:0,depthWrite:!1,envMapIntensity:2.2}),base:new Kt({color:15987438,roughness:.55}),frame:new Kt({color:16448250,roughness:.5}),door:new Kt({color:9071180,roughness:.6}),entry:new Kt({color:4869976,roughness:.5,metalness:.3}),white:new Kt({color:16777215,roughness:.25}),counter:new Kt({color:14209736,roughness:.4}),cabinet:new Kt({color:7305836,roughness:.6}),steel:new Kt({color:10133670,roughness:.3,metalness:.7}),ground:new Kt({color:6253397,roughness:1})},je=new ce;Ne.add(je);var Rn=new ce;je.add(Rn);var Se=[],Gc=[];function Xt(i,t,e,n,s,r,a,o,l={}){let c=e-i,h=n-t,u=r-s,d=l.round||o&&o.userData.round?qa(c,u,h,!1):0,f=new _t(d>0?Xa(c,u,h,d):new Te(c,u,h),a);return f.position.set((i+e)/2,(s+r)/2,(t+n)/2),f.castShadow=l.cast!==!1,f.receiveShadow=!0,(o||Rn).add(f),f}function Kx(i,t,e,n,s,r,a){r=(r||[]).slice().sort((h,u)=>h.a-u.a);let o=(h,u,d,f,g)=>i==="x"?Xt(h,t,u,e,d,f,g):Xt(t,h,e,u,d,f,g),l=(h,u,d)=>{let f=i==="x"?[h,t,u,e]:[t,h,e,u];Se.push(f),d&&Gc.push(f)},c=n;for(let h of r){h.a>c&&(o(c,h.a,0,Ae,a),l(c,h.a,!0));let u=h.type==="win"||h.type==="balcony"||h.type==="fixed"?Nt.winTop:2.1,d=Nt.winSill;if(o(h.a,h.b,u,Ae,a),h.type==="fixed"){o(h.a,h.b,0,d,a),l(h.a,h.b);let f=(t+e)/2,g=d+.95;Xt(h.a,f-.01,h.b,f+.01,d,u,Tt.glass).castShadow=!1,Xt(h.a,t-.02,h.b,e+.02,d-.03,d,Tt.frame),Xt(h.a,f-.04,h.b,f+.04,g-.03,g+.03,Tt.frame),Xt(h.a,f-.04,h.b,f+.04,u-.04,u,Tt.frame),Xt(h.b-.05,f-.04,h.b,f+.04,d,u,Tt.frame)}if(h.type==="win"){o(h.a,h.b,0,d,a),l(h.a,h.b);let f=(t+e)/2,g=h.b-(h.b-h.a)*.6,x=d+.95;if(i==="x"){Xt(g,f-.01,h.b,f+.01,d,u,Tt.glass).castShadow=!1,Xt(h.a,f-.01,g,f+.01,d,x,Tt.glass).castShadow=!1;let m=g-h.a-.05,p=u-x-.03,w=new ce;w.position.set(h.a+.02,x+.03,t+.03);let E=new _t(new Te(m,p-.06,.02),Tt.glass);E.position.set(m/2,p/2,0);let b=new ce;for(let[A,C,P,M]of[[m,.05,m/2,.025],[m,.05,m/2,p-.025],[.05,p,.025,p/2],[.05,p,m-.025,p/2]]){let v=new _t(new Te(A,C,.06),Tt.frame);v.position.set(P,M,0),v.castShadow=!0,b.add(v)}let L=new _t(new Te(.14,.03,.05),Tt.steel);L.position.set(m/2,p-.12,-.05),w.add(E,b,L),Rn.add(w),w.traverse(A=>{A.userData.openable=w}),Si.push({g:w,kind:"win",axis:"x",a0:0,a1:-.14,open:!1,cur:0}),Xt(h.a,t-.02,h.b,e+.02,d-.03,d,Tt.frame),Xt(g-.035,f-.04,g+.035,f+.04,d,u,Tt.frame),Xt(h.a,f-.04,h.b,f+.04,x-.03,x+.03,Tt.frame),Xt(h.a,f-.04,h.b,f+.04,u-.04,u,Tt.frame)}else Xt(f-.01,h.a,f+.01,h.b,d,u,Tt.glass).castShadow=!1;i!=="x"&&Xt(t-.02,h.a,e+.02,h.b,d-.03,d,Tt.frame)}c=h.b}s>c&&(o(c,s,0,Ae,a),l(c,s,!0))}var Si=[];function Qx(i,t,e,n,s,r,a){let o=new ce,l;if(a){l=new ce;let h=Nt.winTop-.03;for(let[d,f,g,x]of[[e,.08,e/2,.04],[e,.08,e/2,h-.04],[.08,h,.04,h/2],[.08,h,e-.04,h/2],[e,.06,e/2,Nt.winSill+.95]]){let m=new _t(new Te(d,f,.06),Tt.frame);m.position.set(g,x,0),m.castShadow=!0,l.add(m)}let u=new _t(new Te(e-.12,h-.12,.02),Tt.glass);u.position.set(e/2,h/2,0),l.add(u)}else l=new _t(new Te(e,2.05,r||.04),s||Tt.door),l.position.set(e/2,1.025,0),l.castShadow=!0,l.receiveShadow=!0;let c=new _t(new fn(.03,10,8),Tt.steel);return c.position.set(e-.08,1,.04),o.add(l,c),o.position.set(i,0,t),o.rotation.y=n,Rn.add(o),o}var Nt=Mr;for(let i of Nt.walls)Kx(i.axis,i.t1,i.t2,i.from,i.to,i.holes,i.ext?Tt.ext:Tt.wall);var sd=[];for(let i of Nt.doors){let t=i.angle*Math.PI/180,e=Math.round(t/(Math.PI/2))*(Math.PI/2)||0,n=!i.entry,s=Qx(i.x,i.z,i.w,n?t:e,i.entry?Tt.entry:i.white?Tt.frame:Tt.door,i.entry?.07:.04,!!i.white);!i.entry&&!i.white&&sd.push(s);let r=i.x+Math.cos(e)*i.w,a=i.z-Math.sin(e)*i.w,o=[Math.min(i.x,r)-.03,Math.min(i.z,a)-.03,Math.max(i.x,r)+.03,Math.max(i.z,a)+.03,3],l={g:s,kind:"door",a0:e,a1:t,open:n,cur:n?1:0,block:o,inner:!i.entry&&!i.white};n||Se.push(o),s.traverse(c=>{c.userData.openable=s}),Si.push(l)}function rd(i){if(i.open=!i.open,i.block){let t=Se.indexOf(i.block);i.open&&t>=0&&Se.splice(t,1),!i.open&&t<0&&Se.push(i.block)}}function jx(i){let t=!1;for(let e of Si){let n=e.open?1:0;if(e.cur===n)continue;t=!0,e.cur+=Math.sign(n-e.cur)*Math.min(Math.abs(n-e.cur),i*1.6);let s=e.cur*e.cur*(3-2*e.cur);e.g.rotation[e.axis||"y"]=e.a0+(e.a1-e.a0)*s}return t}function t_(i,t){Ds.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Ls.setFromCamera(Ds,be);let e=Si.filter(r=>r.g.visible&&r.g.parent&&r.g.parent.visible).map(r=>r.g),n=Ls.intersectObjects(e,!0)[0];if(!n||ae==="walk"&&n.distance>5)return!1;let s=Si.find(r=>r.g===n.object.userData.openable);return!s||s.inner&&gn?!1:(rd(s),!0)}var Bs=[],ad=[];for(let i of Nt.rooms){for(let[e,n,s,r]of i.rects){let a=new _t(new Ke(s-e,r-n),Tt.wall);ad.push({m:a,room:i.name,w:s-e,h:r-n,key:i.floor}),a.rotation.x=-Math.PI/2,a.position.set((e+s)/2,.001,(n+r)/2),a.receiveShadow=!0,je.add(a)}let t=i.area||i.rects.reduce((e,[n,s,r,a])=>e+(r-n)*(a-s),0);Bs.push({name:i.name,area:t,pos:new I(i.label[0],.05,i.label[1])})}var $u=new Kt({color:2040358,roughness:.5,metalness:.4}),e_=new Kt({color:16185076,roughness:.45}),Fc=[],Rr=new ce;Rr.userData.round=!0;je.add(Rr);for(let i of Nt.balcony){let[t,e,n,s]=i,r=n-t>s-e,a=(t+n)/2,o=(e+s)/2,l=r?n-t:s-e,c=.02,h=(d,f,g,x,m)=>r?Xt(d,o-m,f,o+m,g,x,$u,Rn,{cast:!1}):Xt(a-m,d,a+m,f,g,x,$u,Rn,{cast:!1}),u=r?t:e;h(u,u+l,1,1.05,.025),h(u,u+l,.1,.13,c);for(let d=u+.06;d<u+l-.03;d+=.12)h(d-.009,d+.009,0,1,.009);Se.push(i)}for(let i of Nt.walls)for(let t of i.holes||[]){if(t.type!=="win"&&t.type!=="fixed"||i.axis!=="x"||i.t1<1)continue;let e=t.type==="fixed"?(t.a+t.b)/2+.05:t.b-(t.b-t.a)*.3,n=Math.min(1,t.type==="fixed"?t.b-t.a-.25:(t.b-t.a)*.6-.15);Xt(e-n/2,i.t1-.17,e+n/2,i.t1-.07,.12,.62,e_,Rr);for(let s=e-n/2+.03;s<e+n/2-.02;s+=.05)Fc.push([s,i.t1-.175]);Xt(e-.015,i.t1-.12,e+.015,i.t1-.07,0,.12,Tt.steel,Rr),Se.push([e-n/2,i.t1-.17,e+n/2,i.t1-.07])}{let i=new Ss(new Te(.012,.44,.008),new Kt({color:14606046,roughness:.5}),Fc.length),t=new Zt;Fc.forEach(([e,n],s)=>{t.makeTranslation(e,.37,n),i.setMatrixAt(s,t)}),je.add(i)}var zs=new ce;Rn.add(zs);for(let i of Nt.walls)if(!i.ext){for(let t of i.holes||[])if(t.type==="door")for(let[e,n]of[[i.t1-.014,i.t1],[i.t2,i.t2+.014]]){let s=(r,a,o,l)=>i.axis==="x"?Xt(r,e,a,n,o,l,Tt.frame,zs,{round:!0}):Xt(e,r,n,a,o,l,Tt.frame,zs,{round:!0});s(t.a-.07,t.a,0,2.17),s(t.b,t.b+.07,0,2.17),s(t.a-.07,t.b+.07,2.1,2.17)}}var ge=new ce;ge.userData.round=!0;je.add(ge);for(let i of Nt.fixtures){let[t,e,n,s]=i.r;if(i.type==="kitchen"){Xt(t,e,n,s,0,.86,Tt.cabinet,ge),Xt(t-.02,e,n+.02,s+.02,.86,.9,Tt.counter,ge);let r=e+(s-e)*.7,a=e+(s-e)*.25;Xt((t+n)/2-.2,r-.2,(t+n)/2+.2,r+.2,.9,.91,Tt.steel,ge,{cast:!1}),Xt((t+n)/2-.25,a-.25,(t+n)/2+.25,a+.25,.9,.905,new Kt({color:1382170,roughness:.2}),ge,{cast:!1}),Se.push([t,e,n,s,1])}else if(i.type==="counter")Xt(t,e,n,s,.1,.86,Tt.cabinet,ge),Xt(t,e+.04,n,s-.04,0,.1,Tt.wallTop,ge,{cast:!1}),Xt(t,e,n,s+.02,.86,.9,Tt.counter,ge),i.sink&&Xt(i.sink[0],e+.08,i.sink[1],s-.1,.9,.905,Tt.steel,ge,{cast:!1}),i.hob&&Xt(i.hob[0],e+.06,i.hob[1],s-.06,.9,.906,new Kt({color:1382170,roughness:.2}),ge,{cast:!1}),Se.push([t,e,n,s,1]);else if(i.type==="tall"||i.type==="fridge")Xt(t,e,n,s,0,i.type==="tall"?2.25:2,i.type==="tall"?Tt.cabinet:Tt.white,ge),Se.push([t,e,n,s,1]);else if(i.type==="washer")Xt(t,e,n,s,0,.85,Tt.white,ge),Se.push([t,e,n,s,1]);else if(i.type==="vent")Xt(t,e,n,s,0,Ae,Tt.wall),Se.push([t,e,n,s]),Gc.push([t,e,n,s]);else if(i.type==="bath")Xt(t,e,n,s,0,.56,Tt.white,ge),Xt(t+.08,e+.08,n-.08,s-.08,.4,.565,new Kt({color:13625071,roughness:.1}),ge,{cast:!1}),Se.push([t,e,n,s,1]);else if(i.type==="toilet"){let r=(t+n)/2-.05,a=(e+s)/2,o=new _t(new fn(.2,24,16),Tt.white);o.scale.set(1.35,.95,.95),o.position.set(r,.32,a),o.castShadow=!0,ge.add(o);let l=new _t(new _i(.17,.035,10,28),Tt.white);l.rotation.x=Math.PI/2,l.scale.set(1.3,1,1),l.position.set(r,.43,a),ge.add(l);let c=i.back;Xt(c[0],c[1],c[2],c[3],.2,1.15,Tt.white,ge),Xt(c[0]-.012,a-.12,c[0],a+.12,.95,1.1,Tt.steel,ge),Se.push([t,e,n,s,1])}else if(i.type==="sink"){Xt(t,e,n,s,.15,.8,Tt.cabinet,ge),Xt(t,e,n,s,.8,.86,Tt.white,ge);let r=new _t(new fn(.17,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),new Kt({color:15331056,roughness:.15,side:Xe}));r.scale.set(1.1,.5,.9),r.position.set((t+n)/2,.865,(e+s)/2),ge.add(r);let a=Math.abs(s-e)<Math.abs(n-t)?s>2?s-.05:e+.05:(e+s)/2,o=new _t(new He(.015,.02,.2,10),Tt.steel);o.position.set((t+n)/2,.96,a),ge.add(o),Se.push([t,e,n,s,1])}else i.type==="panel"&&Xt(t,e,n,s,1.35,1.85,Tt.frame,Rn)}var Wc=[],Oc=new qe({color:9211020}),n_=new Kt({color:16053232,roughness:.5}),so=new ce,ro=new ce,ao=new ce;je.add(so,ro,ao);var i_=Gs(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,236,200,1)"),e.addColorStop(.25,"rgba(255,214,160,.45)"),e.addColorStop(1,"rgba(255,200,140,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)},1,1),s_=new pr({map:i_,blending:pa,depthWrite:!1,transparent:!0,opacity:.85,fog:!1});for(let[i,t]of Nt.lamps){let e=new ka(16765594,0,6,1.6);e.position.set(i,Ae-.3,t),je.add(e);let n=new _t(new He(.19,.2,.012,32),Oc);n.position.set(i,Ae-.062,t);let s=new _t(new He(.2,.2,.055,32,1,!0),n_);s.position.set(i,Ae-.03,t),so.add(n,s);let r=new _t(new fn(.045,12,8),Oc);r.position.set(i,Ae-.3,t);let a=new _t(new He(.004,.004,.26,5),Tt.entry);a.position.set(i,Ae-.13,t),ro.add(r,a);let o=new Ia(s_);o.scale.setScalar(1.1),o.position.set(i,Ae-.16,t),ao.add(o),Wc.push({l:e})}Qe(so);Qe(ro);var Xc={socket:{h:.3,c:16777215,name:"\u0420\u043E\u0437\u0435\u0442\u043A\u0430",note:"30 \u0441\u043C"},socket2:{h:.3,c:16777215,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430",note:"30 \u0441\u043C"},kitchen:{h:1,c:15905884,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E",note:"100 \u0441\u043C"},net:{h:.3,c:6080744,name:"\u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442",note:"30 \u0441\u043C"},intercom:{h:1.3,c:10189808,name:"\u0414\u043E\u043C\u043E\u0444\u043E\u043D",note:"130 \u0441\u043C"},hood:{h:2.1,c:15235676,name:"\u0412\u0438\u0442\u044F\u0436\u043A\u0430",note:"210 \u0441\u043C"},boiler:{h:2.1,c:15228042,name:"\u0411\u043E\u0439\u043B\u0435\u0440",note:"210 \u0441\u043C"},ac:{h:2.4,c:6088880,name:"\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440",note:"240 \u0441\u043C"},switch:{h:.9,c:13202234,name:"\u0412\u0438\u043C\u0438\u043A\u0430\u0447",note:"90 \u0441\u043C"},switch2:{h:.9,c:13202234,name:"\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0438\u0439 \u0432\u0438\u043C\u0438\u043A\u0430\u0447",note:"90 \u0441\u043C"},km:{h:.3,c:10133670,name:"\u041C\u043E\u043D\u0442\u0430\u0436\u043D\u0430 \u043A\u043E\u0440\u043E\u0431\u043A\u0430",note:"30 \u0441\u043C"},panel:{h:1.6,c:7831434,name:"\u0429\u0438\u0442\u043E\u043A \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u0438\u0439",note:"160 \u0441\u043C"}},Ir=new ce;Ir.visible=!1;je.add(Ir);var ks=!1,Is=!1,od={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},r_=new Te(.09,.09,.015),a_=new fn(.032,12,8),o_=new Kt({color:16777215,roughness:.4}),Zu={};for(let i of Nt.power){let t=Xc[i.k],[e,n]=od[i.f],s=new _t(r_,o_);(i.k==="socket2"||i.k==="kitchen"||i.k==="switch2")&&(s.scale.x=1.9),s.position.set(i.x+e*.008,t.h,i.z+n*.008),e&&(s.rotation.y=Math.PI/2);let a=new _t(a_,Zu[t.c]||(Zu[t.c]=new qe({color:t.c})));a.position.set(i.x+e*.06,t.h,i.z+n*.06),Ir.add(s,a)}var ld=[],cd=null;for(let i of Nt.walls)if(i.ext&&i.axis==="x"&&i.t1>1){for(let t of i.holes||[])if(t.type!=="door"){let e=(t.a+t.b)/2,n=new za(15987180,0,11,1.25,1,1.6);n.position.set(e,1.5,i.t1-.12),n.target.position.set(e,.4,i.t1-4),je.add(n,n.target),ld.push({L:n,w:t.b-t.a})}}{let i=new qe({colorWrite:!1,depthWrite:!1}),t=(e,n,s,r,a,o)=>{let l=new _t(new Te(s-e,o-a,r-n),i);return l.position.set((e+s)/2,(a+o)/2,(n+r)/2),l.castShadow=!0,l.layers.set(2),Ne.add(l),l};cd=t(-40,-16,Nt.width+40,Nt.depth+.3,Ae+.001,Ae+3.6),t(-40,-16,-.3,Nt.depth+.3,0,Ae+.001),t(Nt.width+.3,-16,Nt.width+40,Nt.depth+.3,0,Ae+.001),t(-.3,-16,Nt.width+.3,-.3,0,Ae+.001),Be.shadow.camera.layers.enable(2)}var Pr=new _t(new Ke(Nt.width+.6,Nt.depth+.6),new Kt({color:16513783,roughness:1,envMapIntensity:1.7}));Pr.rotation.x=Math.PI/2;Pr.position.set(Os,Ae,Cr);Pr.visible=!1;je.add(Pr);var Lr=new _t(new Ke(80,80),Tt.ground);Lr.rotation.x=-Math.PI/2;Lr.position.set(Os,-.02,Cr);Lr.receiveShadow=!0;Lr.visible=!1;Ne.add(Lr);var oo=new ce;je.add(oo);{let i=(a,o)=>Gc.some(([l,c,h,u])=>a>l&&a<h&&o>c&&o<u),s=(a,o,l,c)=>Xt(Math.min(a,l),Math.min(o,c),Math.max(a,l),Math.max(o,c),0,.07,Tt.base,oo,{cast:!1}),r=(a,o,l,c,h)=>{let u=null;for(let d=o;d<=l+.02;d+=.02){let f=d+.01,g=f<l&&(c?i(f,a+h*.04):i(a+h*.04,f));g&&u==null&&(u=d),!g&&u!=null&&(d-u>.06&&(c?s(u,a,Math.min(d,l),a-h*.012):s(a,u,a-h*.012,Math.min(d,l))),u=null)}};for(let a of Nt.rooms)if(a.name!=="\u0411\u0430\u043B\u043A\u043E\u043D")for(let[o,l,c,h]of a.rects)r(l,o,c,!0,-1),r(h,o,c,!0,1),r(o,l,h,!1,-1),r(c,l,h,!1,1);for(let a of Nt.fixtures)if(a.type==="vent"){let[o,l,c,h]=a.r;s(c,l,c+.012,h+.012),s(o,h,c,h+.012)}}for(let i of Si)Qe(i.g,!0),i.g.traverse(t=>{t.userData.openable=i.g});Qe(oo);Qe(Rr);Qe(zs);zs.userData.keep=!0;Qe(ge);Qe(Ir);Qe(Rn);var hd={value:0};function ud(i){return i.onBeforeCompile=t=>{t.uniforms.uCeil=hd,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vKvY;`).replace("#include <project_vertex>",`#include <project_vertex>
vKvY = (modelMatrix * vec4(transformed, 1.0)).y;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vKvY;
uniform float uCeil;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.16 * exp(-max(vKvY, 0.0) * 6.0) - uCeil * 0.24 * exp(-max(${Ae.toFixed(2)} - vKvY, 0.0) * 5.0);`)},i}ud(Tt.wall);var Ps=48,nn={x0:-.3,z0:-.3,x1:Nt.width+.3,z1:Nt.depth+.3};function dd(i,t){let e=i.getContext("2d"),n=4e3;e.shadowColor="transparent",e.fillStyle="#fff",e.fillRect(0,0,i.width,i.height);let s=(r,a,o,l,c,h,u)=>{e.shadowColor=`rgba(0,0,0,${h})`,e.shadowBlur=c,e.shadowOffsetX=n,e.fillStyle="#000",e.fillRect((r-u-nn.x0)*Ps-n,(a-u-nn.z0)*Ps,(o-r+u*2)*Ps,(l-a+u*2)*Ps)};for(let r of Se)r[4]!==3&&(r[4]?t&&!ks&&!(r[4]===1&&gn)&&s(r[0],r[1],r[2],r[3],13,.42,.01):s(r[0],r[1],r[2],r[3],24,.5,.03))}function fd(i,t){let e=document.createElement("canvas");e.width=Math.round((nn.x1-nn.x0)*Ps),e.height=Math.round((nn.z1-nn.z0)*Ps);let n=new gr(e);n.colorSpace=Ze;let s=new _t(new Ke(nn.x1-nn.x0,nn.z1-nn.z0),new qe({map:n,blending:ma,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,side:t}));return s.rotation.x=-Math.PI/2,s.position.set((nn.x0+nn.x1)/2,i,(nn.z0+nn.z1)/2),s.renderOrder=2,je.add(s),{c:e,t:n,m:s}}var Ju=fd(.004,Un),lo=fd(Ae-.003,Oe);dd(lo.c,!1);lo.t.needsUpdate=!0;lo.m.visible=!1;function pd(){dd(Ju.c,!0),Ju.t.needsUpdate=!0}var Sr={top:{value:new Ot},hor:{value:new Ot},sunDir:{value:new I(0,1,0)},sunK:{value:0}},co=new _t(new fn(150,32,16),new hn({uniforms:Sr,side:Oe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
    void main(){ vec3 d = normalize(vDir); float h = d.y;
      vec3 c = mix(hor, top, pow(clamp(h, 0.0, 1.0), 0.55)); c = mix(c, hor * 0.92, smoothstep(0.0, -0.3, h));
      float s = max(dot(d, sunDir), 0.0);
      c += vec3(1.0, 0.86, 0.66) * sunK * (pow(s, 600.0) * 4.0 + pow(s, 24.0) * 0.28 + pow(s, 4.0) * 0.08);
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}));co.renderOrder=10;co.frustumCulled=!1;Ne.add(co);var md=!1,Bc=null;try{if(!Re.capabilities.isWebGL2||!(Re.extensions.has("EXT_color_buffer_float")||Re.extensions.has("EXT_color_buffer_half_float")))throw new Error("no float targets");let i=new bs(Re),t=new fr;t.add(new _t(new fn(20,24,12),new hn({side:Oe,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; void main(){ vec3 d = normalize(vDir);
      vec3 c = mix(vec3(0.5, 0.47, 0.43), vec3(0.78, 0.77, 0.75), smoothstep(-0.5, 0.2, d.y)); c = mix(c, vec3(0.98, 0.97, 0.95), smoothstep(0.35, 0.9, d.y));
      c *= 0.75 + 0.35 * smoothstep(-0.6, 0.8, d.z);
      gl_FragColor = vec4(c, 1.0); }`})));let e=new _t(new Ke(8,3.4),new qe({color:new Ot().setRGB(4.6,4.8,5.1),side:Xe}));e.position.set(0,1.2,9),t.add(e),Bc=i.fromScene(t,.03).texture,i.dispose(),md=!0}catch{}var ht={orient:Qt.get("orient",150),gap:Qt.get("gap",18),live:!0,y:0,m:0,d:0,h:12};Qt.get("sunV",0)<2&&(ht.orient=150,ht.gap=18,Qt.set("orient",150),Qt.set("gap",18),Qt.set("sunV",2));var Hi=null;function gd(){Hi&&(Ne.remove(Hi.group),Hi.group.traverse(i=>{i.geometry&&i.geometry.dispose()})),Hi=Xu(Nt,{below:6.45,gap:ht.gap,floors:4}),Ne.add(Hi.group),Cn(!0)}gd();function Er(){let i=new Date,t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Kyiv",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hourCycle:"h23"});try{let e=Object.fromEntries(t.formatToParts(i).map(n=>[n.type,n.value]));return{y:+e.year,m:+e.month-1,d:+e.day,h:+e.hour+ +e.minute/60}}catch{return{y:i.getFullYear(),m:i.getMonth(),d:i.getDate(),h:i.getHours()+i.getMinutes()/60}}}Object.assign(ht,Er());if(Ee.get("date")){let[i,t,e]=Ee.get("date").split("-").map(Number);Object.assign(ht,{y:i,m:t-1,d:e,live:!1})}Ee.get("hour")&&(ht.h=+Ee.get("hour"),ht.live=!1);Ee.get("orient")&&(ht.orient=+Ee.get("orient"));var qc=i=>Math.atan2(Hi.top-1.2,ht.gap/Math.max(.2,Math.cos(i*Math.PI/180)))*180/Math.PI,ae=Ee.get("mode")||Qt.get("mode","doll"),yi=Qt.get("low",!1),zn=Ee.get("night")?!0:Qt.get("evening",!1),ee={yaw:Qt.get("yaw",-.5),pitch:.95,dist:15,tx:Os,tz:Cr+.3},bt={x:Nt.start[0],z:Nt.start[1],yaw:Nt.start[2],pitch:-.05,bob:0,goal:null};Ee.get("yaw")&&(ee.yaw=+Ee.get("yaw"));Ee.get("wx")&&(bt.x=+Ee.get("wx"),bt.z=+Ee.get("wz"),bt.yaw=+(Ee.get("wyaw")||0));function Yc(){let i=ae==="walk"?1:yi?.42:1;Rn.scale.y=i,Pr.visible=lo.m.visible=cd.visible=ae==="walk",hd.value=ae==="walk"?1:0;let t=ae==="walk"||!yi;mn&&mn.traverse(e=>{e.userData.wallLike&&(e.scale.y=i,e.position.y=(e.userData.y1+e.userData.h/2)*i),e.userData.hideLow&&(e.visible=t)}),so.visible=t&&!gn,ro.visible=t&&gn,ao.visible=t&&xd,Cn(!0)}var ii=Ee.get("look")||(Ee.get("raw")==="0"?"base":Ee.get("raw")==="1"?"raw":null)||Qt.get("look",Qt.get("raw",!0)?"raw":"base");Ya.some(i=>i.id===ii)||(ii="raw");var gn=ii==="raw",mn=null,xd=!1,Za={wall:Tt.wall.color.getHex(),door:Tt.door.color.getHex(),cabinet:Tt.cabinet.color.getHex(),counter:Tt.counter.color.getHex()},Pc=new Map;function l_(i,t){let e=t+":"+i.w.toFixed(2)+":"+i.h.toFixed(2);if(!Pc.has(e)){let n=t==="polished"||t==="concrete",s=Jx(t).clone();s.repeat.set(i.w*(n?.4:.7),i.h*(n?.4:.7)),s.needsUpdate=!0,Pc.set(e,new Kt({map:s,roughness:t.startsWith("tile")?.22:t==="polished"?.32:t==="concrete"?.95:t==="stone"?.6:.5,envMapIntensity:t==="concrete"?.6:1}))}return Pc.get(e)}function _d(){let i=Ya.find(e=>e.id===ii);gn=ii==="raw";let t=!!i.wall;for(let e of ad)e.m.material=l_(e,gn?"concrete":t?i.floors[e.room]||"oak":e.key);ge.visible=!gn&&!ks,zs.visible=oo.visible=!gn;for(let e of sd)e.visible=!gn;if(gn)for(let e of Si)e.inner&&!e.open&&rd(e);Tt.wall.color.set(t?i.wall:Za.wall),Tt.door.color.set(t?i.door:Za.door),Tt.cabinet.color.set(t?i.cabinet:Za.cabinet),Tt.counter.color.set(t?i.counter:Za.counter),mn&&(je.remove(mn),mn.traverse(e=>{e.geometry&&!e.geometry.userData.cached&&e.geometry.dispose(),e.material&&e.material.userData.own&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),mn=null);for(let e=Se.length-1;e>=0;e--)Se[e][4]===2&&Se.splice(e,1);t&&(mn=ku(i,Nt,Se,{canvasTex:Gs,addWallAO:ud}),Qe(mn),mn.visible=!ks,je.add(mn)),pd();for(let e of Wc)e.l.color.set(t?i.lamp:16765594);St("vFinish").textContent=i.short,St("bFinish").classList.toggle("on",ii!=="raw"),Yc()}function c_(){let i=St("styles");if(!i.hidden){i.hidden=!0;return}i.innerHTML=Ya.map(t=>`<button class="chip${t.id===ii?" on":""}" data-id="${t.id}"><b>${t.name}</b><span>${t.sub}</span></button>`).join(""),i.querySelectorAll(".chip").forEach(t=>t.addEventListener("click",()=>{ii=t.dataset.id,Qt.set("look",ii),_d(),i.hidden=!0})),i.hidden=!1}var h_=new Ot(13623534),u_=new Ot(15250570),d_=new Ot(922146),f_=new Ot(5214168),p_=new Ot(6123422),m_=new Ot(263694);function rn(){let i=Rc(Ac(ht.y,ht.m,ht.d,ht.h)),t=zn?-20:i.el,e=Fn.smoothstep(t,-6,12),n=d_.clone().lerp(u_,Fn.smoothstep(t,-8,2)).lerp(h_,Fn.smoothstep(t,2,18));Ne.background=n,Ne.fog?Ne.fog.color.copy(n):Ne.fog=new Ra(n,60,160);let s=Fn.smoothstep(t,-8,2),r=Fn.smoothstep(t,2,18);Sr.hor.value.copy(n),Sr.top.value.copy(m_).lerp(p_,s).lerp(f_,r),Sr.sunDir.value.copy(Cc(i.az,i.el,ht.orient)),Sr.sunK.value=zn?0:Fn.smoothstep(i.el,-3,5);let a=ae==="walk",o=md&&!Vi;Ne.environment!==(o?Bc:null)&&(Ne.environment=o?Bc:null),Qa.intensity=a?.04+.2*e:.1+.5*e,Ne.environmentIntensity=a?.08+.44*e:.08+.3*e,o||(Qa.intensity=a?.12+.85*e:.2+.8*e),Qa.groundColor.set(o?11050640:14078150);for(let{L:h,w:u}of ld)h.intensity=zn?0:(a?5:3)*u*e,h.visible=!Vi&&h.intensity>.02;Wu(a?.22*e:.04*e);let l=zn||t<-4;document.body.classList.toggle("night",l),Be.intensity=t>0?2.8*Fn.smoothstep(t,0,10):0,Be.visible=Be.intensity>.02,Be.color.setHSL(.09,.9,.55+.4*Fn.smoothstep(t,0,25)),Be.position.copy(Cc(i.az,Math.max(t,1),ht.orient).multiplyScalar(45)).add(Be.target.position);let c=zn||t<2;xd=c;for(let{l:h}of Wc)h.intensity=c?3.2:0,h.visible=c;Oc.color.set(c?16773846:12171444),ao.visible=c&&(a||!yi),St("bLight").classList.toggle("on",zn),St("vLight").textContent=zn?"\u0412\u0435\u0447\u0456\u0440":"\u0414\u0435\u043D\u044C",St("vSun").textContent=pn(ht.h),St("bSun").title=ht.d+" "+zc[ht.m],Hi.setSeason(ht.m),St("sunp").hidden||(__(i),St("sunYear")&&(St("sunYear").innerHTML=M_(),St("sunYear").querySelectorAll("[data-m]").forEach(h=>h.onclick=()=>{ht.m=+h.dataset.m,ht.d=21,ht.live=!1,b_(),rn(),wr()}))),St("sunFacts")&&(St("sunFacts").innerHTML=v_()),Cn(!0)}var $c=[["\u041F\u043D",0],["\u041F\u043D\u0421\u0445",45],["\u0421\u0445",90],["\u041F\u0434\u0421\u0445",135],["\u041F\u0434",180],["\u041F\u0434\u0417\u0445",225],["\u0417\u0445",270],["\u041F\u043D\u0417\u0445",315]],Ku=[["\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",null],["\u0412\u0435\u0441\u043D\u0430",[3,20]],["\u041B\u0456\u0442\u043E",[6,15]],["\u041E\u0441\u0456\u043D\u044C",[9,15]],["\u0417\u0438\u043C\u0430",[0,20]]],zc=["\u0441\u0456\u0447\u043D\u044F","\u043B\u044E\u0442\u043E\u0433\u043E","\u0431\u0435\u0440\u0435\u0437\u043D\u044F","\u043A\u0432\u0456\u0442\u043D\u044F","\u0442\u0440\u0430\u0432\u043D\u044F","\u0447\u0435\u0440\u0432\u043D\u044F","\u043B\u0438\u043F\u043D\u044F","\u0441\u0435\u0440\u043F\u043D\u044F","\u0432\u0435\u0440\u0435\u0441\u043D\u044F","\u0436\u043E\u0432\u0442\u043D\u044F","\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043D\u044F"],g_=(i,t)=>Math.round((Date.UTC(2026,i,t)-Date.UTC(2026,0,1))/864e5)+1,x_=i=>{let t=new Date(Date.UTC(2026,0,i));return[t.getUTCMonth(),t.getUTCDate()]};function __(i){let t=$a(ht.y,ht.m,ht.d,ht.orient,qc),e=$c.reduce((n,s)=>Math.abs((ht.orient-s[1]+540)%360-180)<Math.abs((ht.orient-n[1]+540)%360-180)?s:n)[0];St("sunInfo").innerHTML=`\u0421\u0445\u0456\u0434 ${pn(t.rise)} \xB7 \u0437\u0430\u0445\u0456\u0434 ${pn(t.set)}<br>`+(t.from!=null?`\u041F\u0440\u044F\u043C\u0435 \u0441\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445: <b>${pn(t.from)}\u2013${pn(t.to)}</b>`:"\u0426\u044C\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u0440\u044F\u043C\u0435 \u0441\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430 \u043D\u0435 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u0454")+`<br><small>\u0412\u0456\u043A\u043D\u0430 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0430 ${ht.orient}\xB0 (${e}); \u0431\u0443\u0434\u0438\u043D\u043E\u043A \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438 \u2014 4 \u043F\u043E\u0432\u0435\u0440\u0445\u0438, ${ht.gap} \u043C. \u0417\u0430\u0440\u0430\u0437 \u0441\u043E\u043D\u0446\u0435: \u0432\u0438\u0441\u043E\u0442\u0430 ${i.el.toFixed(0)}\xB0, \u0430\u0437\u0438\u043C\u0443\u0442 ${i.az.toFixed(0)}\xB0.</small>`}function v_(){let i=$c.reduce((n,s)=>Math.abs((ht.orient-s[1]+540)%360-180)<Math.abs((ht.orient-n[1]+540)%360-180)?s:n)[0],t=(n,s)=>`<div class="row"><span>${n}</span><b>${s}</b></div>`,e=(n,s)=>{let r=$a(ht.y,n,s,ht.orient,qc);return r.from!=null?pn(r.from)+"\u2013"+pn(r.to):"\u043D\u0435\u043C\u0430\u0454"};return t("\u0412\u0456\u043A\u043D\u0430 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F",`${i}, ${ht.orient}\xB0`)+t("\u041F\u043E\u0432\u0435\u0440\u0445","3-\u0439, \u22486,4 \u043C \u043D\u0430\u0434 \u0437\u0435\u043C\u043B\u0435\u044E")+t("\u0411\u0443\u0434\u0438\u043D\u043E\u043A \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438",`4 \u043F\u043E\u0432\u0435\u0440\u0445\u0438, \u2248${ht.gap} \u043C`)+t("\u0421\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445 21 \u0447\u0435\u0440\u0432\u043D\u044F",e(5,21))+t("21 \u0431\u0435\u0440\u0435\u0437\u043D\u044F / 23 \u0432\u0435\u0440\u0435\u0441\u043D\u044F",e(2,21)+" / "+e(8,23))+t("21 \u0433\u0440\u0443\u0434\u043D\u044F",e(11,21))}var y_=["\u0421\u0456\u0447","\u041B\u044E\u0442","\u0411\u0435\u0440","\u041A\u0432\u0456","\u0422\u0440\u0430","\u0427\u0435\u0440","\u041B\u0438\u043F","\u0421\u0435\u0440","\u0412\u0435\u0440","\u0416\u043E\u0432","\u041B\u0438\u0441","\u0413\u0440\u0443"];function M_(){return y_.map((i,t)=>{let e=$a(ht.y,t,21,ht.orient,qc),n=e.from!=null?e.to-e.from:0;return`<div data-m="${t}" class="${t===ht.m?"on":""}"><span>${i}</span><i style="width:${Math.round(n/11*100)}%"></i><b>${e.from!=null?pn(e.from)+"\u2013"+pn(e.to):"\u043D\u0435\u043C\u0430\u0454"}</b></div>`}).join("")}function b_(){St("sunp").hidden=!0}function wr(){let i=St("sunp");if(!i.hidden){i.hidden=!0;return}St("styles").hidden=!0;let t=Er();i.innerHTML=`<b class="ttl">\u0421\u043E\u043D\u0446\u0435 \u043D\u0430\u0434 \u041B\u044C\u0432\u043E\u0432\u043E\u043C</b>
    <div class="row2">${Ku.map(([e,n],s)=>`<button class="mini${(n?n[0]===ht.m&&n[1]===ht.d:ht.m===t.m&&ht.d===t.d)?" on":""}" data-date="${s}">${e}</button>`).join("")}</div>
    <label class="lab">\u0414\u0430\u0442\u0430: <b id="sunD">${ht.d} ${zc[ht.m]}</b></label>
    <input type="range" id="sunDay" min="1" max="365" step="1" value="${g_(ht.m,ht.d)}">
    <label class="lab">\u0427\u0430\u0441: <b id="sunT">${pn(ht.h)}</b> <button class="mini" id="sunNow">\u0417\u0430\u0440\u0430\u0437</button></label>
    <input type="range" id="sunH" min="4" max="22" step="0.0833" value="${ht.h}">
    <label class="lab">\u041A\u0443\u0434\u0438 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u0456\u043A\u043D\u0430</label>
    <div class="row2">${$c.map(([e,n])=>`<button class="mini${Math.abs(ht.orient-n)<23?" on":""}" data-or="${n}">${e}</button>`).join("")}</div>
    <input type="range" id="sunO" min="0" max="359" step="1" value="${ht.orient}">
    <label class="lab">\u0414\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443 \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438: <b id="sunGv">${ht.gap} \u043C</b></label>
    <input type="range" id="sunG" min="12" max="50" step="1" value="${ht.gap}">
    <div id="sunInfo" class="info"></div>
    <label class="lab">\u0421\u043E\u043D\u0446\u0435 \u0443 \u0432\u0456\u043A\u043D\u0430\u0445 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u043A\u0443</label>
    <div id="sunYear" class="year"></div>`,i.hidden=!1,i.querySelectorAll("[data-date]").forEach(e=>e.onclick=()=>{let n=Ku[+e.dataset.date][1],s=Er();ht.y=s.y,n?(ht.m=n[0],ht.d=n[1]):(ht.m=s.m,ht.d=s.d),ht.live=!1,i.hidden=!0,rn(),wr()}),i.querySelectorAll("[data-or]").forEach(e=>e.onclick=()=>{ht.orient=+e.dataset.or,Qt.set("orient",ht.orient),i.hidden=!0,rn(),wr()}),St("sunDay").oninput=e=>{let[n,s]=x_(+e.target.value);ht.m=n,ht.d=s,ht.live=!1,St("sunD").textContent=s+" "+zc[n],rn()},St("sunH").oninput=e=>{ht.h=+e.target.value,ht.live=!1,St("sunT").textContent=pn(ht.h),rn()},St("sunO").oninput=e=>{ht.orient=+e.target.value,Qt.set("orient",ht.orient),rn()},St("sunG").oninput=e=>{ht.gap=+e.target.value,Qt.set("gap",ht.gap),St("sunGv").textContent=ht.gap+" \u043C",gd(),rn()},St("sunNow").onclick=()=>{Object.assign(ht,Er(),{live:!0}),i.hidden=!0,rn(),wr()},rn()}setInterval(()=>{ht.live&&(Object.assign(ht,Er()),rn())},6e4);function ho(i){ae=i,Qt.set("mode",i),document.body.classList.toggle("walking",i==="walk"),document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t.dataset.mode===i)),St("joy").hidden=i!=="walk",St("bWalls").hidden=i==="walk",i==="plan"?(ee.tx=Os+.6,ee.tz=Nt.depthWithBalcony/2-.3):i==="doll"&&(ee.tx=Os,ee.tz=Cr+.3),Yc(),Ad(),rn()}function S_(){if(ae==="walk"?be.layers.enable(1):be.layers.disable(1),ae==="walk"){be.fov=70;let i=1.6+Math.sin(bt.bob)*.025;be.position.set(bt.x,i,bt.z);let t=Math.cos(bt.pitch);be.lookAt(bt.x+Math.sin(bt.yaw)*t,i+Math.sin(bt.pitch),bt.z-Math.cos(bt.yaw)*t)}else{let i=ae==="plan"?Math.PI/2-.001:ee.pitch,t=ae==="plan"?0:ee.yaw;be.fov=ae==="plan"?30:45;let e=ae==="plan"?vd():ee.dist;be.position.set(ee.tx+Math.sin(t)*Math.cos(i)*e,Math.sin(i)*e,ee.tz+Math.cos(t)*Math.cos(i)*e),be.lookAt(ee.tx,0,ee.tz)}be.updateProjectionMatrix(),co.position.copy(be.position)}function vd(){let i=be.aspect,t=Math.tan(Fn.degToRad(30/2));return Math.max((Nt.depthWithBalcony+2.4)/2/t,(Nt.width+3.2)/2/t/i)+Ae}var Qu=.22;function Us(i,t){if(i<-.05||t<-.05||i>Nt.width+.05||t>Nt.depthWithBalcony)return!0;for(let[e,n,s,r,a]of Se){if(a&&gn)continue;let o=Math.max(e,Math.min(i,s)),l=Math.max(n,Math.min(t,r));if((i-o)**2+(t-l)**2<Qu*Qu)return!0}return!1}function ju(i,t){let e=bt.x+i,n=bt.z+t;Us(e,n)?Us(e,bt.z)?Us(bt.x,n)||(bt.z=n):bt.x=e:(bt.x=e,bt.z=n)}var Gi=Re.domElement,Hn=new Map,xn=null;Gi.addEventListener("pointerdown",i=>{Gi.setPointerCapture(i.pointerId),Hn.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()}),Sd()});Gi.addEventListener("pointermove",i=>{let t=Hn.get(i.pointerId);if(!t)return;let e=i.clientX-t.x,n=i.clientY-t.y;if(Hn.size===1)ae==="walk"?(bt.yaw+=e*.005,bt.pitch=Math.max(-1.1,Math.min(1.1,bt.pitch-n*.004))):ae==="doll"?(ee.yaw-=e*.006,ee.pitch=Math.max(.25,Math.min(1.45,ee.pitch+n*.004))):td(e,n);else if(Hn.size===2&&ae!=="walk"){let[s,r]=[...Hn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);t.x=i.clientX,t.y=i.clientY;let o=Math.hypot(s.x-r.x,s.y-r.y);ae==="doll"&&(ee.dist=Math.max(4,Math.min(28,ee.dist*a/Math.max(1,o)))),td(e/2,n/2);return}t.x=i.clientX,t.y=i.clientY});function td(i,t){let e=(ae==="plan"?vd():ee.dist)*.0016,n=ae==="plan"?0:ee.yaw,s=Math.sin(n),r=Math.cos(n);ee.tx-=(r*i+s*t)*e,ee.tz-=(-s*i+r*t)*e,ee.tx=Math.max(-2,Math.min(Nt.width+2,ee.tx)),ee.tz=Math.max(-2,Math.min(Nt.depthWithBalcony+2,ee.tz))}function E_(i){let t=Hn.get(i.pointerId);Hn.delete(i.pointerId),t&&performance.now()-t.t<300&&Math.hypot(i.clientX-t.sx,i.clientY-t.sy)<8&&w_(i.clientX,i.clientY),Cn()}Gi.addEventListener("pointerup",E_);Gi.addEventListener("pointercancel",i=>Hn.delete(i.pointerId));Gi.addEventListener("wheel",i=>{ee.dist=Math.max(4,Math.min(28,ee.dist*(1+i.deltaY*.001))),Cn()},{passive:!0});for(let i of["click","input","keydown","keyup"])addEventListener(i,()=>Cn(!0),!0);window.resumeAll=()=>Cn(!0);var Ns=St("joy"),yd=St("knob");Ns.addEventListener("pointerdown",i=>{i.stopPropagation(),Ns.setPointerCapture(i.pointerId);let t=Ns.getBoundingClientRect();xn={id:i.pointerId,cx:t.left+t.width/2,cy:t.top+t.height/2,x:0,y:0},bd(i)});Ns.addEventListener("pointermove",i=>{xn&&xn.id===i.pointerId&&bd(i)});var Md=()=>{xn=null,yd.style.transform=""};Ns.addEventListener("pointerup",Md);Ns.addEventListener("pointercancel",Md);function bd(i){let t=i.clientX-xn.cx,e=i.clientY-xn.cy,n=Math.hypot(t,e),s=46;n>s&&(t*=s/n,e*=s/n),xn.x=t/s,xn.y=e/s,yd.style.transform=`translate(${t}px,${e}px)`}var Bn=new Set;addEventListener("keydown",i=>Bn.add(i.key));addEventListener("keyup",i=>Bn.delete(i.key));var Ls=new _r,Ds=new zt,ed=new Sn(new I(0,1,0),0);function w_(i,t){if(t_(i,t))return;if(ae==="walk"){Ds.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Ls.setFromCamera(Ds,be);let s=new I;if(!Ls.ray.intersectPlane(ed,s)||s.distanceTo(be.position)>14)return;bt.goal={x:s.x,z:s.z,stuck:0},R_(s.x,s.z);return}Ds.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Ls.setFromCamera(Ds,be);let e=new I;if(!Ls.ray.intersectPlane(ed,e))return;let n=Nt.rooms.find(s=>s.rects.some(([r,a,o,l])=>e.x>=r&&e.x<=o&&e.z>=a&&e.z<=l));n&&A_(i,t,n,e)}var T_=null,br=null;function A_(i,t,e,n){let s=St("tip");T_=e,br=n.clone();let r=Bs.find(a=>a.name===e.name);s.innerHTML=`<b>${e.name}</b><span>${r.area.toFixed(2).replace(".",",")} \u043C\xB2</span><button id="goIn">\u0417\u0430\u0439\u0442\u0438 \u0441\u044E\u0434\u0438</button>`,s.hidden=!1,s.style.left=Math.min(innerWidth-190,i+10)+"px",s.style.top=Math.max(10,t-90)+"px",St("goIn").onclick=()=>{Us(br.x,br.z)?(bt.x=e.label[0],bt.z=e.label[1]):(bt.x=br.x,bt.z=br.z),bt.yaw=Math.PI,bt.pitch=-.05,Sd(),ho("walk")}}function Sd(){St("tip").hidden=!0}var Hs=new _t(new Fa(.16,.22,32),new qe({color:13202234,transparent:!0,opacity:.85,depthWrite:!1}));Hs.rotation.x=-Math.PI/2;Hs.visible=!1;Ne.add(Hs);function R_(i,t){Hs.position.set(i,.02,t),Hs.visible=!0}function to(){Hs.visible=!1}var Mi=St("minimap"),Me=Mi.getContext("2d"),Vs=8;function Ed(){let i=Mi.getBoundingClientRect();return{w:i.width,h:i.height,k:Math.min((i.width-Vs*2)/(Nt.width+.6),(i.height-Vs*2)/(Nt.depthWithBalcony+.6))}}function C_(){let i=ae==="walk";if(Mi.hidden=!i,!i)return;let{w:t,h:e,k:n}=Ed(),s=Math.min(2,devicePixelRatio||1);Mi.width!==Math.round(t*s)&&(Mi.width=Math.round(t*s),Mi.height=Math.round(e*s)),Me.setTransform(s,0,0,s,0,0),Me.clearRect(0,0,t,e);let r=Vs+.3*n,a=Vs+.3*n,o=d=>r+d*n,l=d=>a+d*n;for(let d of Nt.rooms)for(let[f,g,x,m]of d.rects){let p=bt.x>=f&&bt.x<=x&&bt.z>=g&&bt.z<=m;Me.fillStyle=p?"rgba(201,115,58,.28)":"rgba(255,255,255,.55)",Me.fillRect(o(f),l(g),(x-f)*n,(m-g)*n)}Me.fillStyle="#3a3f4a";for(let[d,f,g,x,m]of Se)m||Me.fillRect(o(d),l(f),Math.max(1,(g-d)*n),Math.max(1,(x-f)*n));let c=o(bt.x),h=l(bt.z),u=bt.yaw;Me.fillStyle="rgba(201,115,58,.35)",Me.beginPath(),Me.moveTo(c,h),Me.arc(c,h,26,u-Math.PI/2-.6,u-Math.PI/2+.6),Me.closePath(),Me.fill(),Me.fillStyle="#c9733a",Me.beginPath(),Me.arc(c,h,5,0,7),Me.fill(),Me.strokeStyle="#fff",Me.lineWidth=2,Me.stroke(),bt.goal&&(Me.strokeStyle="#c9733a",Me.beginPath(),Me.arc(o(bt.goal.x),l(bt.goal.z),4,0,7),Me.stroke())}Mi.addEventListener("pointerdown",i=>{i.stopPropagation();let t=Mi.getBoundingClientRect(),{k:e}=Ed(),n=(i.clientX-t.left-Vs)/e-.3,s=(i.clientY-t.top-Vs)/e-.3;for(let r=0;r<1;r+=.05)for(let a=0;a<12;a++){let o=n+Math.cos(a*.52)*r,l=s+Math.sin(a*.52)*r;if(!Us(o,l)){bt.x=o,bt.z=l,bt.goal=null,to(),Cn();return}}});var Tr=i=>i.toFixed(2).replace(".",","),wd=[],uo=new ce;uo.visible=!1;Ne.add(uo);var I_=new mr({color:13202234});function Ar(i,t,e){let n=[i,t];if(e)for(let r of[i,t])n.push(r.clone().add(e),r.clone().sub(e));let s=new Ie().setFromPoints(n.length>2?[i,t,n[2],n[3],n[4],n[5]]:n);uo.add(new Ua(s,I_))}function Fs(i,t,e){let n=document.createElement("div");n.className="tag "+e,n.innerHTML=t,St("tags").appendChild(n),wd.push({pos:i,el:n,kind:e})}for(let i of Nt.rooms){let[t,e,n,s]=i.rects[0],r=.03;if(Ar(new I(t+.05,r,e+.25),new I(n-.05,r,e+.25),new I(0,0,.08)),Fs(new I((t+n)/2,r,e+.25),Tr(n-t)+" \u043C","dims"),Ar(new I(t+.25,r,e+.05),new I(t+.25,r,s-.05),new I(.08,0,0)),Fs(new I(t+.25,r,(e+s)/2),Tr(s-e)+" \u043C","dims"),i.name!=="\u0411\u0430\u043B\u043A\u043E\u043D"){let a=n-.3,o=s-.3;Ar(new I(a,0,o),new I(a,Ae,o),new I(.08,0,0)),Fs(new I(a,Ae/2,o),"\u0441\u0442\u0435\u043B\u044F "+Tr(Ae)+" \u043C","dims")}}for(let i of Nt.walls)for(let t of i.holes||[]){let e=t.type==="win"||t.type==="fixed",n=e||t.type==="balcony"?Nt.winTop:2.1,s=e?Nt.winSill:0,r=(i.t1+i.t2)/2,a=i.ext?i.t1>1?-.1:.1:0,o=(c,h)=>i.axis==="x"?new I(c,h,r+a*1.5):new I(r+a*1.5,h,c);Ar(o(t.a+.02,n+.06),o(t.b-.02,n+.06),new I(0,.05,0)),Ar(o(t.a+.12,s),o(t.a+.12,n),i.axis==="x"?new I(.05,0,0):new I(0,0,.05));let l=t.type==="door"?i.ext?"\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456":"\u0434\u0432\u0435\u0440\u0456":t.type==="balcony"?"\u0431\u0430\u043B\u043A\u043E\u043D\u043D\u0456 \u0434\u0432\u0435\u0440\u0456":"\u0432\u0456\u043A\u043D\u043E";Fs(o((t.a+t.b)/2,n+.14),`${l} ${Tr(t.b-t.a)} \xD7 ${Tr(n-s)} \u043C`,"dims")}for(let i of Nt.power){let t=Xc[i.k],[e,n]=od[i.f];Fs(new I(i.x+e*.12,t.h+.08,i.z+n*.12),`${t.name.replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E","\u0420\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E")} \xB7 <b>${t.note}</b>`,"elec")}Fs(new I(7.57,1.95,.15),"\u0429\u0438\u0442\u043E\u043A \xB7 <b>160 \u0441\u043C</b>","elec");var Lc=new _r,P_=0,Ja=null;function L_(i){let t=ae==="walk"&&(i||P_++%8===0);t&&!Ja&&(Ja=[],Rn.traverse(e=>{e.isMesh&&e.material!==Tt.glass&&Ja.push(e)}));for(let e of wd){if(!(e.kind==="dims"?Is:ks)){e.el.style.display="none";continue}let s=e.pos.distanceTo(be.position);if(ae==="walk"&&s>7){e.el.style.display="none";continue}if(t&&(Lc.set(be.position,e.pos.clone().sub(be.position).normalize()),Lc.far=s-.2,e.hid=Lc.intersectObjects(Ja,!1).length>0),ae==="walk"&&e.hid){e.el.style.display="none";continue}if(kn.copy(e.pos).project(be),kn.z>1||Math.abs(kn.x)>1.1||Math.abs(kn.y)>1.1){e.el.style.display="none";continue}e.el.style.display="",e.el.style.transform=`translate(${(kn.x+1)/2*innerWidth}px,${(1-kn.y)/2*innerHeight}px) translate(-50%,-50%)`}}var D_=Bs.map(i=>{let t=document.createElement("div");return t.className="lbl",t.innerHTML=`${i.name}<small>${i.area.toFixed(2).replace(".",",")} \u043C\xB2</small>`,St("labels").appendChild(t),t}),kn=new I;function U_(){let i=ae!=="walk"&&St("bLabels").classList.contains("on");if(Bs.forEach((t,e)=>{let n=D_[e];if(!i){n.style.display="none";return}if(kn.copy(t.pos).project(be),kn.z>1){n.style.display="none";return}n.style.display="",n.style.transform=`translate(${(kn.x+1)/2*innerWidth}px,${(1-kn.y)/2*innerHeight}px) translate(-50%,-50%)`}),ae==="walk"){let t=Nt.rooms.find(e=>e.rects.some(([n,s,r,a])=>bt.x>=n&&bt.x<=r&&bt.z>=s&&bt.z<=a));St("where").textContent=t?t.name:""}else St("where").textContent=""}document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>ho(i.dataset.mode)));St("bWalls").addEventListener("click",()=>{yi=!yi,Qt.set("low",yi),St("bWalls").classList.toggle("on",yi),Yc()});St("bFinish").addEventListener("click",()=>{St("sunp").hidden=!0,c_()});St("bSun").addEventListener("click",wr);St("bLight").addEventListener("click",()=>{zn=!zn,Qt.set("evening",zn),rn()});St("bLabels").addEventListener("click",()=>{St("bLabels").classList.toggle("on"),Qt.set("labels",St("bLabels").classList.contains("on"))});function Td(i){ks=i,Ir.visible=i,Qt.set("power",i),St("bPower").classList.toggle("on",i),St("legend").hidden=!i,mn&&(mn.visible=!i),ge.visible=!gn&&!i,pd(),Cn(!0)}St("bPower").addEventListener("click",()=>Td(!ks));St("bDims").addEventListener("click",()=>{Is=!Is,uo.visible=Is,Qt.set("dims",Is),St("bDims").classList.toggle("on",Is)});(Qt.get("power",!1)||Ee.get("power"))&&Td(!0);(Qt.get("dims",!1)||Ee.get("dims"))&&St("bDims").click();St("legend").innerHTML=Object.values(Xc).filter((i,t,e)=>e.findIndex(n=>n.c===i.c&&n.h===i.h)===t).map(i=>`<div><i style="background:#${i.c.toString(16).padStart(6,"0")}"></i>${i.name.replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430 \u043D\u0430\u0434 \u0441\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0435\u044E","\u0420\u043E\u0437\u0435\u0442\u043A\u0438 \u043A\u0443\u0445\u043D\u0456").replace("\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043A\u0430","\u0420\u043E\u0437\u0435\u0442\u043A\u0430")}<em>${i.note}</em></div>`).join("");St("bMore").addEventListener("click",()=>St("panel").classList.add("open"));St("close").addEventListener("click",()=>St("panel").classList.remove("open"));St("bWalls").classList.toggle("on",yi);St("bLabels").classList.toggle("on",Qt.get("labels",!0));function N_(){let i=(window.CHANGELOG||[]).slice().sort((n,s)=>s.day-n.day);St("diary").innerHTML=i.map(n=>`<div class="entry"><span class="d">\u0414\u0415\u041D\u042C ${n.day} \xB7 ${n.date.split("-").reverse().join(".")}</span><b>${n.title}</b><p>${n.text}</p></div>`).join(""),i.length&&(St("dayline").textContent=`\u0414\u0435\u043D\u044C ${i[0].day} \xB7 \u0449\u043E\u0440\u0430\u043D\u043A\u0443 \u0449\u043E\u0441\u044C \u043D\u043E\u0432\u0435`);let t=qu?qu.version():"";t&&(St("foot").textContent=`\u0412\u0435\u0440\u0441\u0456\u044F ${t} \xB7 \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u044F Claude`);let e=Bs.reduce((n,s)=>n+s.area*(s.name==="\u0411\u0430\u043B\u043A\u043E\u043D"?.3:1),0);St("facts").innerHTML=Bs.map(n=>`<div class="row"><span>${n.name}</span><b>${n.area.toFixed(2).replace(".",",")} \u043C\xB2</b></div>`).join("")+`<div class="row sum"><span>\u0420\u0430\u0437\u043E\u043C (\u0431\u0430\u043B\u043A\u043E\u043D \xD7 0,3)</span><b>${e.toFixed(1).replace(".",",")} \u043C\xB2</b></div><div class="row"><span>\u0417\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C</span><b>${Nt.officialArea} \u043C\xB2</b></div>`}function Ad(){Re.setSize(innerWidth,innerHeight,!1),be.aspect=innerWidth/innerHeight,ae==="doll"&&(ee.dist=Math.max(ee.dist,be.aspect<1?17:13)),Cn()}addEventListener("resize",Ad);ho(ae);rn();_d();N_();Ee.get("dist")&&(ee.dist=+Ee.get("dist"));var nd=performance.now(),kc=0,zi=16,Hc=0;function F_(i){++kc<6||(zi+=(Math.min(i,100)-zi)*.08,!(++Hc<45)&&(Hc=0,bi!=="high"&&(zi>24&&sn>.6?(Ic=sn*.97,sn=Math.max(.6,sn*.87),Qt.set("movePR",sn),zi=18):zi>30&&bi==="auto"&&!Vi&&++Rd>=3?(Qt.set("autoLite",!0),Zc("auto")):zi<17.8&&sn<Ic-.02&&(sn=Math.min(Ic,sn*1.07),Qt.set("movePR",sn)))))}var Rd=0;function Zc(i,t){bi=i,t||(Qt.set("q",i),i!=="auto"&&Qt.set("autoLite",!1)),Vi=i==="lite"||i==="auto"&&Qt.get("autoLite",!1),i==="high"?sn=eo:i==="lite"&&(sn=Math.min(sn,1)),Rd=0,zi=16,Hc=0,document.querySelectorAll("[data-q]").forEach(e=>e.classList.toggle("on",e.dataset.q===i)),St("qNote").textContent=i==="auto"?Vi?"\u0410\u0432\u0442\u043E: \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0443 \u0431\u0443\u043B\u043E \u0432\u0430\u0436\u043A\u043E, \u0442\u043E\u0436 \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E \u043B\u0435\u0433\u0448\u0438\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A.":"\u0410\u0432\u0442\u043E: \u043F\u043E\u043A\u0438 \u0440\u0443\u0445\u0430\u0454\u0448\u0441\u044F \u2014 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0442\u0440\u043E\u0445\u0438 \u043F\u0440\u043E\u0441\u0442\u0456\u0448\u0438\u0439, \u0437\u0443\u043F\u0438\u043D\u0438\u0448\u0441\u044F \u2014 \u0441\u0442\u0430\u0454 \u0447\u0456\u0442\u043A\u0438\u043C. \u0421\u0430\u043C\u0435 \u043F\u0456\u0434\u043B\u0430\u0448\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u0456\u0434 \u043F\u043B\u0430\u043D\u0448\u0435\u0442.":i==="lite"?"\u041B\u0435\u0433\u043A\u0430: \u0431\u0435\u0437 \u0432\u0456\u0434\u0431\u043B\u0438\u0441\u043A\u0456\u0432 \u0456 \u043C'\u044F\u043A\u043E\u0433\u043E \u0441\u0432\u0456\u0442\u043B\u0430 \u0437 \u0432\u0456\u043A\u043E\u043D \u2014 \u0434\u043B\u044F \u0441\u043B\u0430\u0431\u043A\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0430 \u0430\u0431\u043E \u0449\u043E\u0431 \u043C\u0435\u043D\u0448\u0435 \u0433\u0440\u0456\u0432\u0441\u044F.":"\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0430: \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0441\u043F\u0440\u043E\u0449\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u0432\u0456\u0442\u044C \u0443 \u0440\u0443\u0441\u0456.",rn()}document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>Zc(i.dataset.q)));var Cd=0;function Id(i){requestAnimationFrame(Id);let t=i-nd,e=Math.min(.05,t/1e3);nd=i;let n=Hn.size>0||!!xn;if(ae==="walk"){let r=0,a=0;if(xn&&(r=xn.x,a=xn.y),(Bn.has("w")||Bn.has("ArrowUp"))&&(a=-1),(Bn.has("s")||Bn.has("ArrowDown"))&&(a=1),(Bn.has("a")||Bn.has("ArrowLeft"))&&(r=-1),(Bn.has("d")||Bn.has("ArrowRight"))&&(r=1),r||a){bt.goal=null,to(),n=!0;let o=1.6*e,l=Math.sin(bt.yaw),c=Math.cos(bt.yaw);ju((c*r-l*a)*o,(l*r+c*a)*o),bt.bob+=e*9*Math.min(1,Math.hypot(r,a))}else if(bt.goal){n=!0;let o=bt.goal,l=o.x-bt.x,c=o.z-bt.z,h=Math.hypot(l,c),d=(Math.atan2(l,-c)-bt.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;if(bt.yaw+=d*Math.min(1,e*5),h<.15)bt.goal=null,to();else{let f=Math.min(h,1.4*e)*(Math.abs(d)>1.2?.3:1),g=bt.x,x=bt.z;ju(l/h*f,c/h*f),bt.bob+=e*9,Math.hypot(bt.x-g,bt.z-x)<f*.2?++o.stuck>20&&(bt.goal=null,to()):o.stuck=0}}}else ae==="doll"&&!Hn.size&&Ee.get("still")==null&&O_(i)&&(ee.yaw+=e*.04,n=!0);jx(e)&&(n=!0,Ka=!0),n&&(Dc=i);let s=i-Dc<200?sn:id();if(Math.abs(s-no)>.01&&(no=s,Re.setPixelRatio(s),ki=Math.max(ki,1)),!n&&ki<=0){kc=0;return}ki>0&&ki--,n?F_(t):kc=0,S_(),Ka&&(Re.shadowMap.needsUpdate=!0,Ka=!1),Re.render(Ne,be),Cd++,U_(),L_(!n),C_()}var Pd=0;Gi.addEventListener("pointerdown",()=>Pd=performance.now());var O_=i=>i-Pd>8e3;Zc(bi,!0);requestAnimationFrame(Id);setInterval(()=>Qt.set("yaw",ee.yaw),5e3);window.__kv={setMode:ho,walker:bt,orbit:ee,solids:Se,P:Nt,openables:Si,stats:()=>({calls:Re.info.render.calls,tris:Re.info.render.triangles,geos:Re.info.memory.geometries,tex:Re.info.memory.textures,progs:Re.info.programs.length,frames:Cd,free:(i,t)=>!Us(i,t),pr:no,movePR:sn,quality:bi,lite:Vi}),invalidate:Cn,renderer:Re,scene:Ne,sun:Be};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
