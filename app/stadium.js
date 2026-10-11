(()=>{var vl="160",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yp=0,qh=1,jp=2;var Of=1,Kp=2,ni=3,gn=0,rn=1,Ln=2;var Ti=0,Fs=1,Yh=2,jh=3,Kh=4,Zp=5,Zi=100,Jp=101,Qp=102,Zh=103,Jh=104,em=200,tm=201,nm=202,im=203,Oc=204,Fc=205,sm=206,rm=207,om=208,am=209,cm=210,lm=211,hm=212,um=213,fm=214,dm=0,pm=1,mm=2,Xo=3,gm=4,xm=5,ym=6,_m=7,Ff=0,vm=1,bm=2,Ri=0,Mm=1,wm=2,Sm=3,Am=4,Em=5,Tm=6,Qh="attached",Rm="detached",Bf=300,zs=301,Hs=302,Bc=303,kc=304,Sa=306,ns=1e3,mn=1001,Pr=1002,Lt=1003,$o=1004;var Ar=1005;var en=1006,bl=1007;var Pi=1008;var Ci=1009,Cm=1010,Pm=1011,Ml=1012,kf=1013,Ai=1014,ii=1015,Ir=1016,zf=1017,Hf=1018,Qi=1020,Im=1021,wn=1023,Lm=1024,Um=1025,es=1026,Vs=1027,Nm=1028,Vf=1029,Dm=1030,Gf=1031,Wf=1033,ic=33776,sc=33777,rc=33778,oc=33779,eu=35840,tu=35841,nu=35842,iu=35843,Xf=36196,su=37492,ru=37496,ou=37808,au=37809,cu=37810,lu=37811,hu=37812,uu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,xu=37819,yu=37820,_u=37821,ac=36492,vu=36494,bu=36495,Om=36283,Mu=36284,wu=36285,Su=36286;var Gs=2300,is=2301,cc=2302,Au=2400,Eu=2401,Tu=2402,Fm=2500;var $f=0,Aa=1,qr=2,qf=3e3,ts=3001,Bm=3200,km=3201,Yf=0,zm=1,Sn="",ft="srgb",Ut="srgb-linear",wl="display-p3",Ea="display-p3-linear",qo="linear",xt="srgb",Yo="rec709",jo="p3";var xs=7680;var Ru=519,Hm=512,Vm=513,Gm=514,jf=515,Wm=516,Xm=517,$m=518,qm=519,zc=35044;var Cu="300 es",Hc=1035,si=2e3,Ko=2001,Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=1234567,Er=Math.PI/180,Ws=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function Ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jm(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function Km(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function Zm(i,e=1){return e-Math.abs(Sl(i,e*2)-e)}function Jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tg(i,e){return i+Math.random()*(e-i)}function ng(i){return i*(.5-Math.random())}function ig(i){i!==void 0&&(Pu=i);let e=Pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sg(i){return i*Er}function rg(i){return i*Ws}function Vc(i){return(i&i-1)===0&&i!==0}function og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ag(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Js={DEG2RAD:Er,RAD2DEG:Ws,generateUUID:Un,clamp:Vt,euclideanModulo:Sl,mapLinear:Ym,inverseLerp:jm,lerp:Tr,damp:Km,pingpong:Zm,smoothstep:Jm,smootherstep:Qm,randInt:eg,randFloat:tg,randFloatSpread:ng,seededRandom:ig,degToRad:sg,radToDeg:rg,isPowerOfTwo:Vc,ceilPowerOfTwo:og,floorPowerOfTwo:Zo,setQuaternionFromProperEuler:ag,normalize:ut,denormalize:Hn},ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],_=s[1],x=s[4],v=s[7],M=s[2],w=s[5],S=s[8];return r[0]=o*y+a*_+c*M,r[3]=o*m+a*x+c*w,r[6]=o*p+a*v+c*S,r[1]=l*y+h*_+u*M,r[4]=l*m+h*x+u*w,r[7]=l*p+h*v+u*S,r[2]=f*y+d*_+g*M,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=f*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new tt;function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cg(){let i=Lr("canvas");return i.style.display="block",i}var Iu={};function Rr(i){i in Iu||(Iu[i]=!0,console.warn(i))}var Lu=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[Ut]:{transfer:qo,primaries:Yo,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:xt,primaries:Yo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ea]:{transfer:qo,primaries:jo,toReference:i=>i.applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Lu)},[wl]:{transfer:xt,primaries:jo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Lu).convertLinearToSRGB()}},lg=new Set([Ut,Ea]),ct={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=xo[e].toReference,s=xo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xo[i].primaries},getTransfer:function(i){return i===Sn?qo:xo[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,Jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Lr("canvas")),ys.width=e.width,ys.height=e.height;let n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hg=0,Qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Un(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ug=0,Yt=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mn,s=mn,r=en,o=Pi,a=wn,c=Ci,l=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Un(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ts?ft:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?ts:qf}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?ft:Sn}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Bf;Yt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(d+1)/2,M=(p+1)/2,w=(h+f)/4,S=(u+y)/4,I=(g+m)/4;return x>v&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=S/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=I/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=S/r,s=I/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends Vn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ts?ft:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wc=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let M=Math.sqrt(x),w=Math.atan2(M,p*_);m=Math.sin(m*w)/M,a=Math.sin(a*w)/M}let v=a*_;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new U,Nu=new jt,Kt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),_o.subVectors(this.max,yr),_s.subVectors(e.a,yr),vs.subVectors(e.b,yr),bs.subVectors(e.c,yr),vi.subVectors(vs,_s),bi.subVectors(bs,vs),$i.subVectors(_s,bs);let t=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-$i.z,$i.y,vi.z,0,-vi.x,bi.z,0,-bi.x,$i.z,0,-$i.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-$i.y,$i.x,0];return!dc(t,_s,vs,bs,_o)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,_s,vs,bs,_o))?!1:(vo.crossVectors(vi,bi),t=[vo.x,vo.y,vo.z],dc(t,_s,vs,bs,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,yo=new Kt,_s=new U,vs=new U,bs=new U,vi=new U,bi=new U,$i=new U,yr=new U,_o=new U,vo=new U,qi=new U;function dc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var fg=new Kt,_r=new U,pc=new U,xn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(pc)),this.expandByPoint(_r.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new U,mc=new U,bo=new U,Mi=new U,gc=new U,Mo=new U,xc=new U,oi=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mc.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Mi.dot(this.direction),c=-Mi.dot(bo),l=Mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mc).addScaledVector(bo,f),d}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){gc.subVectors(t,e),Mo.subVectors(n,e),xc.crossVectors(gc,Mo);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);let c=a*this.direction.dot(Mo.crossVectors(Mi,Mo));if(c<0)return null;let l=a*this.direction.dot(gc.cross(Mi));if(l<0||c+l>o)return null;let h=-a*Mi.dot(xc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f+y*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f-y*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+y,t[1]=c*u,t[5]=y*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dg,e,pg)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),wi.crossVectors(n,dn),wi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),wi.crossVectors(n,dn)),wi.normalize(),wo.crossVectors(dn,wi),s[0]=wi.x,s[4]=wo.x,s[8]=dn.x,s[1]=wi.y,s[5]=wo.y,s[9]=dn.y,s[2]=wi.z,s[6]=wo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],x=n[7],v=n[11],M=n[15],w=s[0],S=s[4],I=s[8],b=s[12],A=s[1],D=s[5],F=s[9],ee=s[13],P=s[2],B=s[6],G=s[10],X=s[14],q=s[3],V=s[7],se=s[11],re=s[15];return r[0]=o*w+a*A+c*P+l*q,r[4]=o*S+a*D+c*B+l*V,r[8]=o*I+a*F+c*G+l*se,r[12]=o*b+a*ee+c*X+l*re,r[1]=h*w+u*A+f*P+d*q,r[5]=h*S+u*D+f*B+d*V,r[9]=h*I+u*F+f*G+d*se,r[13]=h*b+u*ee+f*X+d*re,r[2]=g*w+y*A+m*P+p*q,r[6]=g*S+y*D+m*B+p*V,r[10]=g*I+y*F+m*G+p*se,r[14]=g*b+y*ee+m*X+p*re,r[3]=_*w+x*A+v*P+M*q,r[7]=_*S+x*D+v*B+M*V,r[11]=_*I+x*F+v*G+M*se,r[15]=_*b+x*ee+v*X+M*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+y*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],_=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,M=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,w=t*_+n*x+s*v+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return e[0]=_*S,e[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*S,e[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*S,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*S,e[4]=x*S,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*S,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*S,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*S,e[8]=v*S,e[9]=(g*u*r-h*y*r-g*n*d+t*y*d+h*n*p-t*u*p)*S,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*S,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*S,e[12]=M*S,e[13]=(h*y*s-g*u*s+g*n*f-t*y*f-h*n*m+t*u*m)*S,e[14]=(g*a*s-o*y*s-g*n*c+t*y*c+o*n*m-t*a*m)*S,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,_=c*l,x=c*h,v=c*u,M=n.x,w=n.y,S=n.z;return s[0]=(1-(y+p))*M,s[1]=(d+v)*M,s[2]=(g-x)*M,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+x)*S,s[9]=(m-_)*S,s[10]=(1-(f+y))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);let l=1/r,h=1/o,u=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=si){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===si)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h,g,y;if(a===si)g=(o+r)*u,y=-2*u;else if(a===Ko)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ms=new U,Pn=new $e,dg=new U(0,0,0),pg=new U(1,1,1),wi=new U,wo=new U,dn=new U,Du=new $e,Ou=new jt,ta=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ta.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mg=0,Fu=new U,ws=new jt,Jn=new $e,So=new U,vr=new U,gg=new U,xg=new jt,Bu=new U(1,0,0),ku=new U(0,1,0),zu=new U(0,0,1),yg={type:"added"},_g={type:"removed"},_t=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new ta,n=new jt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new tt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(vr,So,this.up):Jn.lookAt(So,vr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(Jn),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new U,Qn=new U,yc=new U,ei=new U,Ss=new U,As=new U,Hu=new U,_c=new U,vc=new U,bc=new U,Ao=!1,Ns=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),Qn.subVectors(n,t),yc.subVectors(e,t);let o=In.dot(In),a=In.dot(Qn),c=In.dot(yc),l=Qn.dot(Qn),h=Qn.dot(yc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,s,r,o,a,c){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),Qn.subVectors(e,t),In.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),As.subVectors(r,n),_c.subVectors(e,n);let c=Ss.dot(_c),l=As.dot(_c);if(c<=0&&l<=0)return t.copy(n);vc.subVectors(e,s);let h=Ss.dot(vc),u=As.dot(vc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ss,o);bc.subVectors(e,r);let d=Ss.dot(bc),g=As.dot(bc);if(g>=0&&d<=g)return t.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(As,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Hu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Hu,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(n).addScaledVector(Ss,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Sl(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Mc(o,r,e+1/3),this.g=Mc(o,r,e),this.b=Mc(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ct.fromWorkingColorSpace($t.copy(this),e),Math.round(Vt($t.r*255,0,255))*65536+Math.round(Vt($t.g*255,0,255))*256+Math.round(Vt($t.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=ft){ct.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Eo);let n=Tr(Si.h,Eo.h,t),s=Tr(Si.s,Eo.s,t),r=Tr(Si.l,Eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new ze;ze.NAMES=Zf;var vg=0,yn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Fs,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Fc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new U,To=new ke,Ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}};var na=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}};var bg=0,Mn=new $e,wc=new _t,Es=new U,pn=new Kt,br=new Kt,kt=new U,an=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?ia:na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(pn.min,br.min),pn.expandByPoint(kt),kt.addVectors(pn.max,br.max),pn.expandByPoint(kt)):(pn.expandByPoint(br.min),pn.expandByPoint(br.max))}pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),kt.add(Es)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new U,h[A]=new U;let u=new U,f=new U,d=new U,g=new ke,y=new ke,m=new ke,p=new U,_=new U;function x(A,D,F){u.fromArray(s,A*3),f.fromArray(s,D*3),d.fromArray(s,F*3),g.fromArray(o,A*2),y.fromArray(o,D*2),m.fromArray(o,F*2),f.sub(u),d.sub(u),y.sub(g),m.sub(g);let ee=1/(y.x*m.y-m.x*y.y);isFinite(ee)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(ee),_.copy(d).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(ee),l[A].add(p),l[D].add(p),l[F].add(p),h[A].add(_),h[D].add(_),h[F].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let A=0,D=v.length;A<D;++A){let F=v[A],ee=F.start,P=F.count;for(let B=ee,G=ee+P;B<G;B+=3)x(n[B+0],n[B+1],n[B+2])}let M=new U,w=new U,S=new U,I=new U;function b(A){S.fromArray(r,A*3),I.copy(S);let D=l[A];M.copy(D),M.sub(S.multiplyScalar(S.dot(D))).normalize(),w.crossVectors(I,D);let ee=w.dot(h[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=ee}for(let A=0,D=v.length;A<D;++A){let F=v[A],ee=F.start,P=F.count;for(let B=ee,G=ee+P;B<G;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ct(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new $e,Yi=new oi,Ro=new xn,Gu=new U,Ts=new U,Rs=new U,Cs=new U,Sc=new U,Co=new U,Po=new ke,Io=new ke,Lo=new ke,Wu=new U,Xu=new U,$u=new U,Uo=new U,No=new U,zt=class extends _t{constructor(e=new an,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sc.fromBufferAttribute(u,e),o?Co.addScaledVector(Sc,h):Co.addScaledVector(Sc.sub(t),h))}t.add(Co)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Ro.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ro,Gu)===null||Yi.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let w=a.getX(v),S=a.getX(v+1),I=a.getX(v+2);s=Do(this,p,e,n,l,h,u,w,S,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let _=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Do(this,o,e,n,l,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let w=v,S=v+1,I=v+2;s=Do(this,p,e,n,l,h,u,w,S,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let _=m,x=m+1,v=m+2;s=Do(this,o,e,n,l,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,o,a){let c;if(e.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===gn,a),c===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(No);return l<t.near||l>t.far?null:{distance:l,point:No.clone(),object:i}}function Do(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ts),i.getVertexPosition(c,Rs),i.getVertexPosition(l,Cs);let h=Mg(i,e,t,n,Ts,Rs,Cs,Uo);if(h){s&&(Po.fromBufferAttribute(s,a),Io.fromBufferAttribute(s,c),Lo.fromBufferAttribute(s,l),h.uv=Ns.getInterpolation(Uo,Ts,Rs,Cs,Po,Io,Lo,new ke)),r&&(Po.fromBufferAttribute(r,a),Io.fromBufferAttribute(r,c),Lo.fromBufferAttribute(r,l),h.uv1=Ns.getInterpolation(Uo,Ts,Rs,Cs,Po,Io,Lo,new ke),h.uv2=h.uv1),o&&(Wu.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,c),$u.fromBufferAttribute(o,l),h.normal=Ns.getInterpolation(Uo,Ts,Rs,Cs,Wu,Xu,$u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new U,materialIndex:0};Ns.getNormal(Ts,Rs,Cs,u.normal),h.face=u}return h}var Nr=class i extends an{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(y,m,p,_,x,v,M,w,S,I,b){let A=v/S,D=M/I,F=v/2,ee=M/2,P=w/2,B=S+1,G=I+1,X=0,q=0,V=new U;for(let se=0;se<G;se++){let re=se*D-ee;for(let ge=0;ge<B;ge++){let Z=ge*A-F;V[y]=Z*_,V[m]=re*x,V[p]=P,l.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(ge/S),u.push(1-se/I),X+=1}}for(let se=0;se<I;se++)for(let re=0;re<S;re++){let ge=f+re+B*se,Z=f+re+B*(se+1),ne=f+(re+1)+B*(se+1),ce=f+(re+1)+B*se;c.push(ge,Z,ce),c.push(Z,ne,ce),q+=6}a.addGroup(d,q,b),d+=q,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=Xs(i[t]);for(let s in n)e[s]=n[s]}return e}function wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jf(i){return i.getRenderTarget()===null?i.outputColorSpace:ct.workingColorSpace}var Sg={clone:Xs,merge:Qt},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sa=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rt=class extends sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Is=1,Xc=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Ps,Is,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Ps,Is,e,t);r.layers=this.layers,this.add(r);let o=new Rt(Ps,Is,e,t);o.layers=this.layers,this.add(o);let a=new Rt(Ps,Is,e,t);a.layers=this.layers,this.add(a);let c=new Rt(Ps,Is,e,t);c.layers=this.layers,this.add(c);let l=new Rt(Ps,Is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ra=class extends Yt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$c=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ts?ft:Sn),this.texture=new ra(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ti});r.uniforms.tEquirect.value=t;let o=new zt(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=en),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ac=new U,Tg=new U,Rg=new tt,sn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(Tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rg.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new xn,Oo=new U,Dr=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+h,m+g,v+_).normalize(),n[3].setComponents(c-o,f-h,m-g,v-_).normalize(),n[4].setComponents(c-a,f-u,m-y,v-x).normalize(),t===si)n[5].setComponents(c+a,f+u,m+y,v+x).normalize();else if(t===Ko)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];t?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var qc=class i extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let x=0;x<l;x++){let v=x*u-r;g.push(v,-_,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let x=_+l*p,v=_+l*(p+1),M=_+1+l*(p+1),w=_+1+l*p;d.push(x,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qg=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,c0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,w0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,P0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,X0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Fx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zx=`#define PHONG
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
}`,Jx=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qx=`#define STANDARD
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
}`,ey=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,cy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Je={alphahash_fragment:Pg,alphahash_pars_fragment:Ig,alphamap_fragment:Lg,alphamap_pars_fragment:Ug,alphatest_fragment:Ng,alphatest_pars_fragment:Dg,aomap_fragment:Og,aomap_pars_fragment:Fg,batching_pars_vertex:Bg,batching_vertex:kg,begin_vertex:zg,beginnormal_vertex:Hg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:jg,color_pars_fragment:Kg,color_pars_vertex:Zg,color_vertex:Jg,common:Qg,cube_uv_reflection_fragment:e0,defaultnormal_vertex:t0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:r0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:c0,envmap_common_pars_fragment:l0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:w0,envmap_vertex:f0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:x0,lightmap_fragment:y0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:b0,lights_pars_begin:M0,lights_toon_fragment:S0,lights_toon_pars_fragment:A0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:I0,lights_fragment_end:L0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:O0,map_fragment:F0,map_pars_fragment:B0,map_particle_fragment:k0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphcolor_vertex:G0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:$0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:j0,normal_pars_vertex:K0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:tx,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:sx,premultiplied_alpha_fragment:rx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:cx,roughnessmap_fragment:lx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:fx,shadowmap_vertex:dx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:yx,specularmap_fragment:_x,specularmap_pars_fragment:vx,tonemapping_fragment:bx,tonemapping_pars_fragment:Mx,transmission_fragment:wx,transmission_pars_fragment:Sx,uv_pars_fragment:Ax,uv_pars_vertex:Ex,uv_vertex:Tx,worldpos_vertex:Rx,background_vert:Cx,background_frag:Px,backgroundCube_vert:Ix,backgroundCube_frag:Lx,cube_vert:Ux,cube_frag:Nx,depth_vert:Dx,depth_frag:Ox,distanceRGBA_vert:Fx,distanceRGBA_frag:Bx,equirect_vert:kx,equirect_frag:zx,linedashed_vert:Hx,linedashed_frag:Vx,meshbasic_vert:Gx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:$x,meshmatcap_vert:qx,meshmatcap_frag:Yx,meshnormal_vert:jx,meshnormal_frag:Kx,meshphong_vert:Zx,meshphong_frag:Jx,meshphysical_vert:Qx,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:oy,sprite_vert:ay,sprite_frag:cy},be={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Qt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Qt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Qt([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Qt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Qt([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Qt([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Qt([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Qt([be.lights,be.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Fo={r:0,b:0,g:0};function ly(i,e,t,n,s,r,o){let a=new ze(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sa)?(h===void 0&&(h=new zt(new Nr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ct.getTransfer(x.colorSpace)!==xt,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new zt(new qc(2,2),new ai({name:"BackgroundMaterial",uniforms:Xs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Fo,Jf(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function hy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,B,G,X,q){let V=!1;if(o){let se=y(X,G,B);l!==se&&(l=se,d(l.object)),V=p(P,X,G,q),V&&_(P,X,G,q)}else{let se=B.wireframe===!0;(l.geometry!==X.id||l.program!==G.id||l.wireframe!==se)&&(l.geometry=X.id,l.program=G.id,l.wireframe=se,V=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,I(P,B,G,X),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function y(P,B,G){let X=G.wireframe===!0,q=a[P.id];q===void 0&&(q={},a[P.id]=q);let V=q[B.id];V===void 0&&(V={},q[B.id]=V);let se=V[X];return se===void 0&&(se=m(f()),V[X]=se),se}function m(P){let B=[],G=[],X=[];for(let q=0;q<s;q++)B[q]=0,G[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,B,G,X){let q=l.attributes,V=B.attributes,se=0,re=G.getAttributes();for(let ge in re)if(re[ge].location>=0){let ne=q[ge],ce=V[ge];if(ce===void 0&&(ge==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),ge==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;se++}return l.attributesNum!==se||l.index!==X}function _(P,B,G,X){let q={},V=B.attributes,se=0,re=G.getAttributes();for(let ge in re)if(re[ge].location>=0){let ne=V[ge];ne===void 0&&(ge==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),ge==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),q[ge]=ce,se++}l.attributes=q,l.attributesNum=se,l.index=X}function x(){let P=l.newAttributes;for(let B=0,G=P.length;B<G;B++)P[B]=0}function v(P){M(P,0)}function M(P,B){let G=l.newAttributes,X=l.enabledAttributes,q=l.attributeDivisors;G[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),q[P]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),q[P]=B)}function w(){let P=l.newAttributes,B=l.enabledAttributes;for(let G=0,X=B.length;G<X;G++)B[G]!==P[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function S(P,B,G,X,q,V,se){se===!0?i.vertexAttribIPointer(P,B,G,q,V):i.vertexAttribPointer(P,B,G,X,q,V)}function I(P,B,G,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let q=X.attributes,V=G.getAttributes(),se=B.defaultAttributeValues;for(let re in V){let ge=V[re];if(ge.location>=0){let Z=q[re];if(Z===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let ne=Z.normalized,ce=Z.itemSize,k=t.get(Z);if(k===void 0)continue;let oe=k.buffer,xe=k.type,ye=k.bytesPerElement,ve=n.isWebGL2===!0&&(xe===i.INT||xe===i.UNSIGNED_INT||Z.gpuType===kf);if(Z.isInterleavedBufferAttribute){let Oe=Z.data,W=Oe.stride,Ze=Z.offset;if(Oe.isInstancedInterleavedBuffer){for(let Me=0;Me<ge.locationSize;Me++)M(ge.location+Me,Oe.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Me=0;Me<ge.locationSize;Me++)v(ge.location+Me);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Me=0;Me<ge.locationSize;Me++)S(ge.location+Me,ce/ge.locationSize,xe,ne,W*ye,(Ze+ce/ge.locationSize*Me)*ye,ve)}else{if(Z.isInstancedBufferAttribute){for(let Oe=0;Oe<ge.locationSize;Oe++)M(ge.location+Oe,Z.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Oe=0;Oe<ge.locationSize;Oe++)v(ge.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Oe=0;Oe<ge.locationSize;Oe++)S(ge.location+Oe,ce/ge.locationSize,xe,ne,ce*ye,ce/ge.locationSize*Oe*ye,ve)}}else if(se!==void 0){let ne=se[re];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(ge.location,ne);break;case 3:i.vertexAttrib3fv(ge.location,ne);break;case 4:i.vertexAttrib4fv(ge.location,ne);break;default:i.vertexAttrib1fv(ge.location,ne)}}}}w()}function b(){F();for(let P in a){let B=a[P];for(let G in B){let X=B[G];for(let q in X)g(X[q].object),delete X[q];delete B[G]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;let B=a[P.id];for(let G in B){let X=B[G];for(let q in X)g(X[q].object),delete X[q];delete B[G]}delete a[P.id]}function D(P){for(let B in a){let G=a[B];if(G[P.id]===void 0)continue;let X=G[P.id];for(let q in X)g(X[q].object),delete X[q];delete G[P.id]}}function F(){ee(),h=!0,l!==c&&(l=c,d(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:ee,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function uy(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function fy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||e.has("OES_texture_float"),M=x&&v,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:w}}function dy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new sn,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,x=_*4,v=p.clippingState||null;c.value=v,v=h(g,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function py(i){let e=new WeakMap;function t(o,a){return a===Bc?o.mapping=zs:a===kc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bc||a===kc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new $c(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $s=class extends sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,qu=[.125,.215,.35,.446,.526,.582],Ji=20,Ec=new $s,Yu=new ze,Tc=null,Rc=0,Cc=0,Ki=(1+Math.sqrt(5))/2,Ls=1/Ki,ju=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ki,Ls),new U(0,Ki,-Ls),new U(Ls,0,Ki),new U(-Ls,0,Ki),new U(Ki,Ls,0),new U(-Ki,Ls,0)],oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Rc,Cc),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ir,format:wn,colorSpace:Ut,depthBuffer:!1},s=Ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(r)),this._blurMaterial=gy(r,e,t)}return s}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,s){let a=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ri,h.autoClear=!1;let d=new on({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new zt(new Nr,d),y=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,y=!0):(d.color.copy(Yu),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Bo(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ju[(s-1)%ju.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],_=0;for(let S=0;S<Ji;++S){let I=S/y,b=Math.exp(-I*I/2);p.push(b),S===0?_+=b:S<m&&(_+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[s],M=3*v*(s>x-Ds?s-x+Ds:0),w=4*(this._cubeSize-v);Bo(t,M,w,3*v,2*v),c.setRenderTarget(t),c.render(u,Ec)}};function my(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+qu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ds?c=qu[o-i+Ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,I=w>2?0:-1,b=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];_.set(b,y*g*w),x.set(f,m*g*w);let A=[w,w,w,w,w,w];v.set(A,p*g*w)}let M=new an;M.setAttribute("position",new Ct(_,y)),M.setAttribute("uv",new Ct(x,m)),M.setAttribute("faceIndex",new Ct(v,p)),e.push(M),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ku(i,e,t){let n=new ri(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gy(i,e,t){let n=new Float32Array(Ji),s=new U(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ju(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function xy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bc||c===kc,h=c===zs||c===Hs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oa(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oa(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function yy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _y(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let x=0,v=_.length;x<v;x+=3){let M=_[x+0],w=_[x+1],S=_[x+2];f.push(M,w,w,S,S,M)}}else if(g!==void 0){let _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let M=x+0,w=x+1,S=x+2;f.push(M,w,w,S,S,M)}}else return;let m=new(Kf(f)?ia:na)(f,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vy(i,e,t,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),t.update(g,r,1)}function u(d,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,y),t.update(g,r,y)}function f(d,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,y);let p=0;for(let _=0;_<y;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function by(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function My(i,e){return i[0]-e[0]}function wy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,y=r.get(h);if(y===void 0||y.count!==g){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],I=0;_===!0&&(I=1),x===!0&&(I=2),v===!0&&(I=3);let b=h.attributes.position.count*I,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let D=new Float32Array(b*A*4*g),F=new ea(D,b,A,g);F.type=ii,F.needsUpdate=!0;let ee=I*4;for(let B=0;B<g;B++){let G=M[B],X=w[B],q=S[B],V=b*A*4*B;for(let se=0;se<G.count;se++){let re=se*ee;_===!0&&(o.fromBufferAttribute(G,se),D[V+re+0]=o.x,D[V+re+1]=o.y,D[V+re+2]=o.z,D[V+re+3]=0),x===!0&&(o.fromBufferAttribute(X,se),D[V+re+4]=o.x,D[V+re+5]=o.y,D[V+re+6]=o.z,D[V+re+7]=0),v===!0&&(o.fromBufferAttribute(q,se),D[V+re+8]=o.x,D[V+re+9]=o.y,D[V+re+10]=o.z,D[V+re+11]=q.itemSize===4?o.w:1)}}y={count:g,texture:F,size:new ke(b,A)},r.set(h,y),h.addEventListener("dispose",P)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let v=g[x];v[0]=x,v[1]=f[x]}g.sort(wy);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(My);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],M=v[0],w=v[1];M!==Number.MAX_SAFE_INTEGER&&w?(y&&h.getAttribute("morphTarget"+x)!==y[M]&&h.setAttribute("morphTarget"+x,y[M]),m&&h.getAttribute("morphNormal"+x)!==m[M]&&h.setAttribute("morphNormal"+x,m[M]),s[x]=w,p+=w):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Ay(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var aa=class extends Yt{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:es,h!==es&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Ai),n===void 0&&h===Vs&&(n=Qi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ed=new Yt,td=new aa(1,1);td.compareFunction=jf;var nd=new ea,id=new Wc,sd=new ra,Qu=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ta(i,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),Dt(t,n)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),Dt(t,n)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),Dt(t,n)}}function Uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?td:ed;t.setTexture2D(e||r,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||id,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sd,s)}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nd,s)}function Xy(i){switch(i){case 5126:return Ey;case 35664:return Ty;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Ly;case 5124:case 35670:return Uy;case 35667:case 35671:return Ny;case 35668:case 35672:return Dy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}function $y(i,e){i.uniform1fv(this.addr,e)}function qy(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Yy(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Ky(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zy(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jy(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qy(i,e){i.uniform1iv(this.addr,e)}function e_(i,e){i.uniform2iv(this.addr,e)}function t_(i,e){i.uniform3iv(this.addr,e)}function n_(i,e){i.uniform4iv(this.addr,e)}function i_(i,e){i.uniform1uiv(this.addr,e)}function s_(i,e){i.uniform2uiv(this.addr,e)}function r_(i,e){i.uniform3uiv(this.addr,e)}function o_(i,e){i.uniform4uiv(this.addr,e)}function a_(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ed,r[o])}function c_(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function l_(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function u_(i){switch(i){case 5126:return $y;case 35664:return qy;case 35665:return Yy;case 35666:return jy;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function rf(i,e){i.seq.push(e),i.map[e.id]=e}function f_(i,e,t){let n=i.name,s=n.length;for(Pc.lastIndex=0;;){let r=Pc.exec(n),o=Pc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rf(t,l===void 0?new Yc(a,i,e):new jc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Kc(a),rf(t,u)),t=u}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);f_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function of(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var d_=37297,p_=0;function m_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function g_(i){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(i),n;switch(e===t?n="":e===jo&&t===Yo?n="LinearDisplayP3ToLinearSRGB":e===Yo&&t===jo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ut:case Ea:return[n,"LinearTransferOETF"];case ft:case wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function af(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+m_(i.getShaderSource(e),o)}else return s}function x_(i,e){let t=g_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function y_(i,e){let t;switch(e){case Mm:t="Linear";break;case wm:t="Reinhard";break;case Sm:t="OptimizedCineon";break;case Am:t="ACESFilmic";break;case Tm:t="AgX";break;case Em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function __(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function b_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Os(i){return i!==""}function cf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(w_,A_)}var S_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function A_(i,e){let t=Je[e];if(t===void 0){let n=S_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(i){return i.replace(E_,T_)}function T_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function C_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function I_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case vm:e="ENVMAP_BLENDING_MIX";break;case bm:e="ENVMAP_BLENDING_ADD";break}return e}function L_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function U_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=R_(t),l=C_(t),h=P_(t),u=I_(t),f=L_(t),d=t.isWebGL2?"":__(t),g=v_(t),y=b_(r),m=s.createProgram(),p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Os).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Os).join(`
`),_.length>0&&(_+=`
`)):(p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),_=[d,uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ri?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),o=Zc(o),o=cf(o,t),o=lf(o,t),a=Zc(a),a=cf(a,t),a=lf(a,t),o=hf(o),a=hf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=x+p+o,M=x+_+a,w=of(s,s.VERTEX_SHADER,v),S=of(s,s.FRAGMENT_SHADER,M);s.attachShader(m,w),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(F){if(i.debug.checkShaderErrors){let ee=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(S).trim(),G=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,S);else{let q=af(s,w,"vertex"),V=af(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+q+`
`+V)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||B==="")&&(X=!1);X&&(F.diagnostics={runnable:G,programLog:ee,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:_}})}s.deleteShader(w),s.deleteShader(S),b=new ks(s,m),A=M_(s,m)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,d_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}var N_=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qc(e),t.set(e,n)),n}},Qc=class{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}};function D_(i,e,t,n,s,r,o){let a=new Ur,c=new Jc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function m(b,A,D,F,ee){let P=F.fog,B=ee.geometry,G=b.isMeshStandardMaterial?F.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),q=X&&X.mapping===Sa?X.image.height:null,V=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=se!==void 0?se.length:0,ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let Z,ne,ce,k;if(V){let Ht=zn[V];Z=Ht.vertexShader,ne=Ht.fragmentShader}else Z=b.vertexShader,ne=b.fragmentShader,c.update(b),ce=c.getVertexShaderID(b),k=c.getFragmentShaderID(b);let oe=i.getRenderTarget(),xe=ee.isInstancedMesh===!0,ye=ee.isBatchedMesh===!0,ve=!!b.map,Oe=!!b.matcap,W=!!X,Ze=!!b.aoMap,Me=!!b.lightMap,Ce=!!b.bumpMap,we=!!b.normalMap,je=!!b.displacementMap,Ae=!!b.emissiveMap,C=!!b.metalnessMap,E=!!b.roughnessMap,Y=b.anisotropy>0,pe=b.clearcoat>0,le=b.iridescence>0,he=b.sheen>0,Le=b.transmission>0,Se=Y&&!!b.anisotropyMap,Pe=pe&&!!b.clearcoatMap,Ve=pe&&!!b.clearcoatNormalMap,O=pe&&!!b.clearcoatRoughnessMap,z=le&&!!b.iridescenceMap,fe=le&&!!b.iridescenceThicknessMap,R=he&&!!b.sheenColorMap,$=he&&!!b.sheenRoughnessMap,ie=!!b.specularMap,te=!!b.specularColorMap,_e=!!b.specularIntensityMap,Ne=Le&&!!b.transmissionMap,Ie=Le&&!!b.thicknessMap,Ge=!!b.gradientMap,me=!!b.alphaMap,N=b.alphaTest>0,ue=!!b.alphaHash,de=!!b.extensions,Be=!!B.attributes.uv1,Ue=!!B.attributes.uv2,st=!!B.attributes.uv3,rt=Ri;return b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:h,shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:ne,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:k,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ye,instancing:xe,instancingColor:xe&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ut,map:ve,matcap:Oe,envMap:W,envMapMode:W&&X.mapping,envMapCubeUVHeight:q,aoMap:Ze,lightMap:Me,bumpMap:Ce,normalMap:we,displacementMap:f&&je,emissiveMap:Ae,normalMapObjectSpace:we&&b.normalMapType===zm,normalMapTangentSpace:we&&b.normalMapType===Yf,metalnessMap:C,roughnessMap:E,anisotropy:Y,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:O,iridescence:le,iridescenceMap:z,iridescenceThicknessMap:fe,sheen:he,sheenColorMap:R,sheenRoughnessMap:$,specularMap:ie,specularColorMap:te,specularIntensityMap:_e,transmission:Le,transmissionMap:Ne,thicknessMap:Ie,gradientMap:Ge,opaque:b.transparent===!1&&b.blending===Fs,alphaMap:me,alphaTest:N,alphaHash:ue,combine:b.combine,mapUv:ve&&y(b.map.channel),aoMapUv:Ze&&y(b.aoMap.channel),lightMapUv:Me&&y(b.lightMap.channel),bumpMapUv:Ce&&y(b.bumpMap.channel),normalMapUv:we&&y(b.normalMap.channel),displacementMapUv:je&&y(b.displacementMap.channel),emissiveMapUv:Ae&&y(b.emissiveMap.channel),metalnessMapUv:C&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:Se&&y(b.anisotropyMap.channel),clearcoatMapUv:Pe&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:R&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:$&&y(b.sheenRoughnessMap.channel),specularMapUv:ie&&y(b.specularMap.channel),specularColorMapUv:te&&y(b.specularColorMap.channel),specularIntensityMapUv:_e&&y(b.specularIntensityMap.channel),transmissionMapUv:Ne&&y(b.transmissionMap.channel),thicknessMapUv:Ie&&y(b.thicknessMap.channel),alphaMapUv:me&&y(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(we||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Ue,vertexUv3s:st,pointsUvs:ee.isPoints===!0&&!!B.attributes.uv&&(ve||me),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)A.push(D),A.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(A,b),x(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function _(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function x(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function v(b){let A=g[b.type],D;if(A){let F=zn[A];D=Sg.clone(F.uniforms)}else D=b.uniforms;return D}function M(b,A){let D;for(let F=0,ee=l.length;F<ee;F++){let P=l[F];if(P.cacheKey===A){D=P,++D.usedTimes;break}}return D===void 0&&(D=new U_(i,A,b,r),l.push(D)),D}function w(b){if(--b.usedTimes===0){let A=l.indexOf(b);l[A]=l[l.length-1],l.pop(),b.destroy()}}function S(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:I}}function O_(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function F_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function df(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,y,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||F_),n.length>1&&n.sort(f||ff),s.length>1&&s.sort(f||ff)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function B_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new df,i.set(n,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var H_=0;function V_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G_(i,e){let t=new k_,n=z_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new $e,a=new $e;function c(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let y=0,m=0,p=0,_=0,x=0,v=0,M=0,w=0,S=0,I=0,b=0;h.sort(V_);let A=u===!0?Math.PI:1;for(let F=0,ee=h.length;F<ee;F++){let P=h[F],B=P.color,G=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*G*A,d+=B.g*G*A,g+=B.b*G*A;else if(P.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(P.sh.coefficients[V],G);b++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let se=P.shadow,re=n.get(P);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.directionalShadow[y]=re,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=P.shadow.matrix,v++}s.directional[y]=V,y++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(G*A),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,s.spot[p]=V;let se=P.shadow;if(P.map&&(s.spotLightMap[S]=P.map,S++,se.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[p]=se.matrix,P.castShadow){let re=n.get(P);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=q,w++}p++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(B).multiplyScalar(G),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),s.rectArea[_]=V,_++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*A),V.distance=P.distance,V.decay=P.decay,P.castShadow){let se=P.shadow,re=n.get(P);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=P.shadow.matrix,M++}s.point[m]=V,m++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(G*A),V.groundColor.copy(P.groundColor).multiplyScalar(G*A),s.hemi[x]=V,x++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==_||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==w||D.numSpotMaps!==S||D.numLightProbes!==b)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=w+S-I,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=b,D.directionalLength=y,D.pointLength=m,D.spotLength=p,D.rectAreaLength=_,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=w,D.numSpotMaps=S,D.numLightProbes=b,s.version=H_++)}function l(h,u){let f=0,d=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let v=h[_];if(v.isDirectionalLight){let M=s.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=s.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=s.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=s.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=s.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function pf(i,e){let t=new G_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function W_(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new pf(i,e),t.set(r,[c])):o>=a.length?(c=new pf(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var el=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function q_(i,e,t){let n=new Dr,s=new ke,r=new ke,o=new dt,a=new el({depthPacking:km}),c=new tl,l={},h=t.maxTextureSize,u={[gn]:rn,[rn]:gn,[Ln]:Ln},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:X_,fragmentShader:$_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new an;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let p=this.type;this.render=function(w,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),A=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ti),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let ee=p!==ni&&this.type===ni,P=p===ni&&this.type!==ni;for(let B=0,G=w.length;B<G;B++){let X=w[B],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let V=q.getFrameExtents();if(s.multiply(V),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,q.mapSize.y=r.y)),q.map===null||ee===!0||P===!0){let re=this.type!==ni?{minFilter:Lt,magFilter:Lt}:{};q.map!==null&&q.map.dispose(),q.map=new ri(s.x,s.y,re),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let se=q.getViewportCount();for(let re=0;re<se;re++){let ge=q.getViewport(re);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(o),q.updateMatrices(X,re),n=q.getFrustum(),v(S,I,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===ni&&_(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,A,D)};function _(w,S){let I=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ri(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,I,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,I,d,y,null)}function x(w,S,I,b){let A=null,D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)A=D;else if(A=I.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let F=A.uuid,ee=S.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let B=P[ee];B===void 0&&(B=A.clone(),P[ee]=B,S.addEventListener("dispose",M)),A=B}if(A.visible=S.visible,A.wireframe=S.wireframe,b===ni?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:u[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=I}return A}function v(w,S,I,b,A){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let ee=e.update(w),P=w.material;if(Array.isArray(P)){let B=ee.groups;for(let G=0,X=B.length;G<X;G++){let q=B[G],V=P[q.materialIndex];if(V&&V.visible){let se=x(w,V,b,A);w.onBeforeShadow(i,w,S,I,ee,se,q),i.renderBufferDirect(I,null,ee,se,w,q),w.onAfterShadow(i,w,S,I,ee,se,q)}}}else if(P.visible){let B=x(w,P,b,A);w.onBeforeShadow(i,w,S,I,ee,B,null),i.renderBufferDirect(I,null,ee,B,w,null),w.onAfterShadow(i,w,S,I,ee,B,null)}}let F=w.children;for(let ee=0,P=F.length;ee<P;ee++)v(F[ee],S,I,b,A)}function M(w){w.target.removeEventListener("dispose",M);for(let I in l){let b=l[I],A=w.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function Y_(i,e,t){let n=t.isWebGL2;function s(){let N=!1,ue=new dt,de=null,Be=new dt(0,0,0,0);return{setMask:function(Ue){de!==Ue&&!N&&(i.colorMask(Ue,Ue,Ue,Ue),de=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,st,rt,St,Ht){Ht===!0&&(Ue*=St,st*=St,rt*=St),ue.set(Ue,st,rt,St),Be.equals(ue)===!1&&(i.clearColor(Ue,st,rt,St),Be.copy(ue))},reset:function(){N=!1,de=null,Be.set(-1,0,0,0)}}}function r(){let N=!1,ue=null,de=null,Be=null;return{setTest:function(Ue){Ue?ye(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Ue){ue!==Ue&&!N&&(i.depthMask(Ue),ue=Ue)},setFunc:function(Ue){if(de!==Ue){switch(Ue){case dm:i.depthFunc(i.NEVER);break;case pm:i.depthFunc(i.ALWAYS);break;case mm:i.depthFunc(i.LESS);break;case Xo:i.depthFunc(i.LEQUAL);break;case gm:i.depthFunc(i.EQUAL);break;case xm:i.depthFunc(i.GEQUAL);break;case ym:i.depthFunc(i.GREATER);break;case _m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ue}},setLocked:function(Ue){N=Ue},setClear:function(Ue){Be!==Ue&&(i.clearDepth(Ue),Be=Ue)},reset:function(){N=!1,ue=null,de=null,Be=null}}}function o(){let N=!1,ue=null,de=null,Be=null,Ue=null,st=null,rt=null,St=null,Ht=null;return{setTest:function(at){N||(at?ye(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(at){ue!==at&&!N&&(i.stencilMask(at),ue=at)},setFunc:function(at,At,nn){(de!==at||Be!==At||Ue!==nn)&&(i.stencilFunc(at,At,nn),de=at,Be=At,Ue=nn)},setOp:function(at,At,nn){(st!==at||rt!==At||St!==nn)&&(i.stencilOp(at,At,nn),st=at,rt=At,St=nn)},setLocked:function(at){N=at},setClear:function(at){Ht!==at&&(i.clearStencil(at),Ht=at)},reset:function(){N=!1,ue=null,de=null,Be=null,Ue=null,st=null,rt=null,St=null,Ht=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,M=null,w=null,S=null,I=null,b=new ze(0,0,0),A=0,D=!1,F=null,ee=null,P=null,B=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,V=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=V>=2);let re=null,ge={},Z=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ce=new dt().fromArray(Z),k=new dt().fromArray(ne);function oe(N,ue,de,Be){let Ue=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<de;rt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ue,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(ue+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return st}let xe={};xe[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(i.DEPTH_TEST),c.setFunc(Xo),Ae(!1),C(qh),ye(i.CULL_FACE),we(Ti);function ye(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ve(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Oe(N,ue){return d[N]!==ue?(i.bindFramebuffer(N,ue),d[N]=ue,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue)),!0):!1}function W(N,ue){let de=y,Be=!1;if(N)if(de=g.get(ue),de===void 0&&(de=[],g.set(ue,de)),N.isWebGLMultipleRenderTargets){let Ue=N.texture;if(de.length!==Ue.length||de[0]!==i.COLOR_ATTACHMENT0){for(let st=0,rt=Ue.length;st<rt;st++)de[st]=i.COLOR_ATTACHMENT0+st;de.length=Ue.length,Be=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Be=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Be=!0);Be&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ze(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let Me={[Zi]:i.FUNC_ADD,[Jp]:i.FUNC_SUBTRACT,[Qp]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[Zh]=i.MIN,Me[Jh]=i.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Me[Zh]=N.MIN_EXT,Me[Jh]=N.MAX_EXT)}let Ce={[em]:i.ZERO,[tm]:i.ONE,[nm]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[cm]:i.SRC_ALPHA_SATURATE,[om]:i.DST_COLOR,[sm]:i.DST_ALPHA,[im]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[am]:i.ONE_MINUS_DST_COLOR,[rm]:i.ONE_MINUS_DST_ALPHA,[lm]:i.CONSTANT_COLOR,[hm]:i.ONE_MINUS_CONSTANT_COLOR,[um]:i.CONSTANT_ALPHA,[fm]:i.ONE_MINUS_CONSTANT_ALPHA};function we(N,ue,de,Be,Ue,st,rt,St,Ht,at){if(N===Ti){p===!0&&(ve(i.BLEND),p=!1);return}if(p===!1&&(ye(i.BLEND),p=!0),N!==Zp){if(N!==_||at!==D){if((x!==Zi||w!==Zi)&&(i.blendEquation(i.FUNC_ADD),x=Zi,w=Zi),at)switch(N){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,S=null,I=null,b.set(0,0,0),A=0,_=N,D=at}return}Ue=Ue||ue,st=st||de,rt=rt||Be,(ue!==x||Ue!==w)&&(i.blendEquationSeparate(Me[ue],Me[Ue]),x=ue,w=Ue),(de!==v||Be!==M||st!==S||rt!==I)&&(i.blendFuncSeparate(Ce[de],Ce[Be],Ce[st],Ce[rt]),v=de,M=Be,S=st,I=rt),(St.equals(b)===!1||Ht!==A)&&(i.blendColor(St.r,St.g,St.b,Ht),b.copy(St),A=Ht),_=N,D=!1}function je(N,ue){N.side===Ln?ve(i.CULL_FACE):ye(i.CULL_FACE);let de=N.side===rn;ue&&(de=!de),Ae(de),N.blending===Fs&&N.transparent===!1?we(Ti):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let Be=N.stencilWrite;l.setTest(Be),Be&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function C(N){N!==Yp?(ye(i.CULL_FACE),N!==ee&&(N===qh?i.cullFace(i.BACK):N===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),ee=N}function E(N){N!==P&&(q&&i.lineWidth(N),P=N)}function Y(N,ue,de){N?(ye(i.POLYGON_OFFSET_FILL),(B!==ue||G!==de)&&(i.polygonOffset(ue,de),B=ue,G=de)):ve(i.POLYGON_OFFSET_FILL)}function pe(N){N?ye(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function le(N){N===void 0&&(N=i.TEXTURE0+X-1),re!==N&&(i.activeTexture(N),re=N)}function he(N,ue,de){de===void 0&&(re===null?de=i.TEXTURE0+X-1:de=re);let Be=ge[de];Be===void 0&&(Be={type:void 0,texture:void 0},ge[de]=Be),(Be.type!==N||Be.texture!==ue)&&(re!==de&&(i.activeTexture(de),re=de),i.bindTexture(N,ue||xe[N]),Be.type=N,Be.texture=ue)}function Le(){let N=ge[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){ce.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function Ne(N){k.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function Ie(N,ue){let de=u.get(ue);de===void 0&&(de=new WeakMap,u.set(ue,de));let Be=de.get(N);Be===void 0&&(Be=i.getUniformBlockIndex(ue,N.name),de.set(N,Be))}function Ge(N,ue){let Be=u.get(ue).get(N);h.get(ue)!==Be&&(i.uniformBlockBinding(ue,Be,N.__bindingPointIndex),h.set(ue,Be))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,ge={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,M=null,w=null,S=null,I=null,b=new ze(0,0,0),A=0,D=!1,F=null,ee=null,P=null,B=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ye,disable:ve,bindFramebuffer:Oe,drawBuffers:W,useProgram:Ze,setBlending:we,setMaterial:je,setFlipSided:Ae,setCullFace:C,setLineWidth:E,setPolygonOffset:Y,setScissorTest:pe,activeTexture:le,bindTexture:he,unbindTexture:Le,compressedTexImage2D:Se,compressedTexImage3D:Pe,texImage2D:ie,texImage3D:te,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:R,texStorage3D:$,texSubImage2D:Ve,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:fe,scissor:_e,viewport:Ne,reset:me}}function j_(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return d?new OffscreenCanvas(C,E):Lr("canvas")}function y(C,E,Y,pe){let le=1;if((C.width>pe||C.height>pe)&&(le=pe/Math.max(C.width,C.height)),le<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let he=E?Zo:Math.floor,Le=he(le*C.width),Se=he(le*C.height);u===void 0&&(u=g(Le,Se));let Pe=Y?g(Le,Se):u;return Pe.width=Le,Pe.height=Se,Pe.getContext("2d").drawImage(C,0,0,Le,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Le+"x"+Se+")."),Pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Vc(C.width)&&Vc(C.height)}function p(C){return a?!1:C.wrapS!==mn||C.wrapT!==mn||C.minFilter!==Lt&&C.minFilter!==en}function _(C,E){return C.generateMipmaps&&E&&C.minFilter!==Lt&&C.minFilter!==en}function x(C){i.generateMipmap(C)}function v(C,E,Y,pe,le=!1){if(a===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=E;if(E===i.RED&&(Y===i.FLOAT&&(he=i.R32F),Y===i.HALF_FLOAT&&(he=i.R16F),Y===i.UNSIGNED_BYTE&&(he=i.R8)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(he=i.R8UI),Y===i.UNSIGNED_SHORT&&(he=i.R16UI),Y===i.UNSIGNED_INT&&(he=i.R32UI),Y===i.BYTE&&(he=i.R8I),Y===i.SHORT&&(he=i.R16I),Y===i.INT&&(he=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(he=i.RG32F),Y===i.HALF_FLOAT&&(he=i.RG16F),Y===i.UNSIGNED_BYTE&&(he=i.RG8)),E===i.RGBA){let Le=le?qo:ct.getTransfer(pe);Y===i.FLOAT&&(he=i.RGBA32F),Y===i.HALF_FLOAT&&(he=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(he=Le===xt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(C,E,Y){return _(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){return C===Lt||C===$o||C===Ar?i.NEAREST:i.LINEAR}function S(C){let E=C.target;E.removeEventListener("dispose",S),b(E),E.isVideoTexture&&h.delete(E)}function I(C){let E=C.target;E.removeEventListener("dispose",I),D(E)}function b(C){let E=n.get(C);if(E.__webglInit===void 0)return;let Y=C.source,pe=f.get(Y);if(pe){let le=pe[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(C),Object.keys(pe).length===0&&f.delete(Y)}n.remove(C)}function A(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let Y=C.source,pe=f.get(Y);delete pe[E.__cacheKey],o.memory.textures--}function D(C){let E=C.texture,Y=n.get(C),pe=n.get(E);if(pe.__webglTexture!==void 0&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(Y.__webglFramebuffer[le]))for(let he=0;he<Y.__webglFramebuffer[le].length;he++)i.deleteFramebuffer(Y.__webglFramebuffer[le][he]);else i.deleteFramebuffer(Y.__webglFramebuffer[le]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[le])}else{if(Array.isArray(Y.__webglFramebuffer))for(let le=0;le<Y.__webglFramebuffer.length;le++)i.deleteFramebuffer(Y.__webglFramebuffer[le]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let le=0;le<Y.__webglColorRenderbuffer.length;le++)Y.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[le]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let le=0,he=E.length;le<he;le++){let Le=n.get(E[le]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(E[le])}n.remove(E),n.remove(C)}let F=0;function ee(){F=0}function P(){let C=F;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function B(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function G(C,E){let Y=n.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let pe=C.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,C,E);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function X(C,E){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){ce(Y,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function q(C,E){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){ce(Y,C,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function V(C,E){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){k(Y,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let se={[ns]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},re={[Lt]:i.NEAREST,[$o]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},ge={[Hm]:i.NEVER,[qm]:i.ALWAYS,[Vm]:i.LESS,[jf]:i.LEQUAL,[Gm]:i.EQUAL,[$m]:i.GEQUAL,[Wm]:i.GREATER,[Xm]:i.NOTEQUAL};function Z(C,E,Y){if(Y?(i.texParameteri(C,i.TEXTURE_WRAP_S,se[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,se[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,se[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,re[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,re[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==mn||E.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,w(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Lt&&E.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Lt||E.minFilter!==Ar&&E.minFilter!==Pi||E.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ne(C,E){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));let pe=E.source,le=f.get(pe);le===void 0&&(le={},f.set(pe,le));let he=B(E);if(he!==C.__cacheKey){le[he]===void 0&&(le[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[he].usedTimes++;let Le=le[C.__cacheKey];Le!==void 0&&(le[C.__cacheKey].usedTimes--,Le.usedTimes===0&&A(E)),C.__cacheKey=he,C.__webglTexture=le[he].texture}return Y}function ce(C,E,Y){let pe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=i.TEXTURE_3D);let le=ne(C,E),he=E.source;t.bindTexture(pe,C.__webglTexture,i.TEXTURE0+Y);let Le=n.get(he);if(he.version!==Le.__version||le===!0){t.activeTexture(i.TEXTURE0+Y);let Se=ct.getPrimaries(ct.workingColorSpace),Pe=E.colorSpace===Sn?null:ct.getPrimaries(E.colorSpace),Ve=E.colorSpace===Sn||Se===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let O=p(E)&&m(E.image)===!1,z=y(E.image,O,!1,s.maxTextureSize);z=Ae(E,z);let fe=m(z)||a,R=r.convert(E.format,E.colorSpace),$=r.convert(E.type),ie=v(E.internalFormat,R,$,E.colorSpace,E.isVideoTexture);Z(pe,E,fe);let te,_e=E.mipmaps,Ne=a&&E.isVideoTexture!==!0&&ie!==Xf,Ie=Le.__version===void 0||le===!0,Ge=M(E,z,fe);if(E.isDepthTexture)ie=i.DEPTH_COMPONENT,a?E.type===ii?ie=i.DEPTH_COMPONENT32F:E.type===Ai?ie=i.DEPTH_COMPONENT24:E.type===Qi?ie=i.DEPTH24_STENCIL8:ie=i.DEPTH_COMPONENT16:E.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===es&&ie===i.DEPTH_COMPONENT&&E.type!==Ml&&E.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ai,$=r.convert(E.type)),E.format===Vs&&ie===i.DEPTH_COMPONENT&&(ie=i.DEPTH_STENCIL,E.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Qi,$=r.convert(E.type))),Ie&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ie,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,ie,z.width,z.height,0,R,$,null));else if(E.isDataTexture)if(_e.length>0&&fe){Ne&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ie,_e[0].width,_e[0].height);for(let me=0,N=_e.length;me<N;me++)te=_e[me],Ne?t.texSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,R,$,te.data):t.texImage2D(i.TEXTURE_2D,me,ie,te.width,te.height,0,R,$,te.data);E.generateMipmaps=!1}else Ne?(Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ie,z.width,z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,R,$,z.data)):t.texImage2D(i.TEXTURE_2D,0,ie,z.width,z.height,0,R,$,z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ie,_e[0].width,_e[0].height,z.depth);for(let me=0,N=_e.length;me<N;me++)te=_e[me],E.format!==wn?R!==null?Ne?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,te.width,te.height,z.depth,R,te.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ie,te.width,te.height,z.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,te.width,te.height,z.depth,R,$,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ie,te.width,te.height,z.depth,0,R,$,te.data)}else{Ne&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ie,_e[0].width,_e[0].height);for(let me=0,N=_e.length;me<N;me++)te=_e[me],E.format!==wn?R!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,R,te.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ie,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(i.TEXTURE_2D,me,0,0,te.width,te.height,R,$,te.data):t.texImage2D(i.TEXTURE_2D,me,ie,te.width,te.height,0,R,$,te.data)}else if(E.isDataArrayTexture)Ne?(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ie,z.width,z.height,z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,R,$,z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,z.width,z.height,z.depth,0,R,$,z.data);else if(E.isData3DTexture)Ne?(Ie&&t.texStorage3D(i.TEXTURE_3D,Ge,ie,z.width,z.height,z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,R,$,z.data)):t.texImage3D(i.TEXTURE_3D,0,ie,z.width,z.height,z.depth,0,R,$,z.data);else if(E.isFramebufferTexture){if(Ie)if(Ne)t.texStorage2D(i.TEXTURE_2D,Ge,ie,z.width,z.height);else{let me=z.width,N=z.height;for(let ue=0;ue<Ge;ue++)t.texImage2D(i.TEXTURE_2D,ue,ie,me,N,0,R,$,null),me>>=1,N>>=1}}else if(_e.length>0&&fe){Ne&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ie,_e[0].width,_e[0].height);for(let me=0,N=_e.length;me<N;me++)te=_e[me],Ne?t.texSubImage2D(i.TEXTURE_2D,me,0,0,R,$,te):t.texImage2D(i.TEXTURE_2D,me,ie,R,$,te);E.generateMipmaps=!1}else Ne?(Ie&&t.texStorage2D(i.TEXTURE_2D,Ge,ie,z.width,z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,R,$,z)):t.texImage2D(i.TEXTURE_2D,0,ie,R,$,z);_(E,fe)&&x(pe),Le.__version=he.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function k(C,E,Y){if(E.image.length!==6)return;let pe=ne(C,E),le=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let he=n.get(le);if(le.version!==he.__version||pe===!0){t.activeTexture(i.TEXTURE0+Y);let Le=ct.getPrimaries(ct.workingColorSpace),Se=E.colorSpace===Sn?null:ct.getPrimaries(E.colorSpace),Pe=E.colorSpace===Sn||Le===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,O=E.image[0]&&E.image[0].isDataTexture,z=[];for(let me=0;me<6;me++)!Ve&&!O?z[me]=y(E.image[me],!1,!0,s.maxCubemapSize):z[me]=O?E.image[me].image:E.image[me],z[me]=Ae(E,z[me]);let fe=z[0],R=m(fe)||a,$=r.convert(E.format,E.colorSpace),ie=r.convert(E.type),te=v(E.internalFormat,$,ie,E.colorSpace),_e=a&&E.isVideoTexture!==!0,Ne=he.__version===void 0||pe===!0,Ie=M(E,fe,R);Z(i.TEXTURE_CUBE_MAP,E,R);let Ge;if(Ve){_e&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,te,fe.width,fe.height);for(let me=0;me<6;me++){Ge=z[me].mipmaps;for(let N=0;N<Ge.length;N++){let ue=Ge[N];E.format!==wn?$!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,ue.width,ue.height,$,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,ue.width,ue.height,$,ie,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,te,ue.width,ue.height,0,$,ie,ue.data)}}}else{Ge=E.mipmaps,_e&&Ne&&(Ge.length>0&&Ie++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,te,z[0].width,z[0].height));for(let me=0;me<6;me++)if(O){_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,z[me].width,z[me].height,$,ie,z[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,te,z[me].width,z[me].height,0,$,ie,z[me].data);for(let N=0;N<Ge.length;N++){let de=Ge[N].image[me].image;_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,de.width,de.height,$,ie,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,te,de.width,de.height,0,$,ie,de.data)}}else{_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,$,ie,z[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,te,$,ie,z[me]);for(let N=0;N<Ge.length;N++){let ue=Ge[N];_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,$,ie,ue.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,te,$,ie,ue.image[me])}}}_(E,R)&&x(i.TEXTURE_CUBE_MAP),he.__version=le.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function oe(C,E,Y,pe,le,he){let Le=r.convert(Y.format,Y.colorSpace),Se=r.convert(Y.type),Pe=v(Y.internalFormat,Le,Se,Y.colorSpace);if(!n.get(E).__hasExternalTextures){let O=Math.max(1,E.width>>he),z=Math.max(1,E.height>>he);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,he,Pe,O,z,E.depth,0,Le,Se,null):t.texImage2D(le,he,Pe,O,z,0,Le,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),we(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,le,n.get(Y).__webglTexture,0,Ce(E)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,le,n.get(Y).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(C,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let pe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||we(E)){let le=E.depthTexture;le&&le.isDepthTexture&&(le.type===ii?pe=i.DEPTH_COMPONENT32F:le.type===Ai&&(pe=i.DEPTH_COMPONENT24));let he=Ce(E);we(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,pe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,pe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,pe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let pe=Ce(E);Y&&we(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,E.width,E.height):we(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let pe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let le=0;le<pe.length;le++){let he=pe[le],Le=r.convert(he.format,he.colorSpace),Se=r.convert(he.type),Pe=v(he.internalFormat,Le,Se,he.colorSpace),Ve=Ce(E);Y&&we(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Pe,E.width,E.height):we(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let pe=n.get(E.depthTexture).__webglTexture,le=Ce(E);if(E.depthTexture.format===es)we(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Vs)we(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ve(C){let E=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,C)}else if(Y){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[pe],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,E,Y){let pe=n.get(C);E!==void 0&&oe(pe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ve(C)}function W(C){let E=C.texture,Y=n.get(C),pe=n.get(E);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=E.version,o.memory.textures++);let le=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Le=m(C)||a;if(le){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)Y.__webglFramebuffer[Se][Pe]=i.createFramebuffer()}else Y.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let Se=C.texture;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){let O=n.get(Se[Pe]);O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&we(C)===!1){let Se=he?E:[E];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){let Ve=Se[Pe];Y.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe]);let O=r.convert(Ve.format,Ve.colorSpace),z=r.convert(Ve.type),fe=v(Ve.internalFormat,O,z,Ve.colorSpace,C.isXRRenderTarget===!0),R=Ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Z(i.TEXTURE_CUBE_MAP,E,Le);for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)oe(Y.__webglFramebuffer[Se][Pe],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else oe(Y.__webglFramebuffer[Se],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);_(E,Le)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let Se=C.texture;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){let O=Se[Pe],z=n.get(O);t.bindTexture(i.TEXTURE_2D,z.__webglTexture),Z(i.TEXTURE_2D,O,Le),oe(Y.__webglFramebuffer,C,O,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),_(O,Le)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),Z(Se,E,Le),a&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)oe(Y.__webglFramebuffer[Pe],C,E,i.COLOR_ATTACHMENT0,Se,Pe);else oe(Y.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Se,0);_(E,Le)&&x(Se),t.unbindTexture()}C.depthBuffer&&ve(C)}function Ze(C){let E=m(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0,le=Y.length;pe<le;pe++){let he=Y[pe];if(_(he,E)){let Le=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(he).__webglTexture;t.bindTexture(Le,Se),x(Le),t.unbindTexture()}}}function Me(C){if(a&&C.samples>0&&we(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,pe=C.height,le=i.COLOR_BUFFER_BIT,he=[],Le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(C),Pe=C.isWebGLMultipleRenderTargets===!0;if(Pe)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){he.push(i.COLOR_ATTACHMENT0+Ve),C.depthBuffer&&he.push(Le);let O=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(O===!1&&(C.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ve]),O===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),Pe){let z=n.get(E[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,le,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ve]);let O=n.get(E[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Ce(C){return Math.min(s.maxSamples,C.samples)}function we(C){let E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Ae(C,E){let Y=C.colorSpace,pe=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Hc||Y!==Ut&&Y!==Sn&&(ct.getTransfer(Y)===xt?a===!1?e.has("EXT_sRGB")===!0&&pe===wn?(C.format=Hc,C.minFilter=en,C.generateMipmaps=!1):E=Jo.sRGBToLinear(E):(pe!==wn||le!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=we}function K_(i,e,t){let n=t.isWebGL2;function s(r,o=Sn){let a,c=ct.getTransfer(o);if(r===Ci)return i.UNSIGNED_BYTE;if(r===zf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Cm)return i.BYTE;if(r===Pm)return i.SHORT;if(r===Ml)return i.UNSIGNED_SHORT;if(r===kf)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===ii)return i.FLOAT;if(r===Ir)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Im)return i.ALPHA;if(r===wn)return i.RGBA;if(r===Lm)return i.LUMINANCE;if(r===Um)return i.LUMINANCE_ALPHA;if(r===es)return i.DEPTH_COMPONENT;if(r===Vs)return i.DEPTH_STENCIL;if(r===Hc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nm)return i.RED;if(r===Vf)return i.RED_INTEGER;if(r===Dm)return i.RG;if(r===Gf)return i.RG_INTEGER;if(r===Wf)return i.RGBA_INTEGER;if(r===ic||r===sc||r===rc||r===oc)if(c===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===su)return c===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ru)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===yu||r===_u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ou)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_u)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ac||r===vu||r===bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ac)return c===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===Mu||r===wu||r===Su)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ac)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Su)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var nl=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tn=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z_={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},il=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=t.getContextAttributes(),m=null,p=null,_=[],x=[],v=new ke,M=null,w=new Rt;w.layers.enable(1),w.viewport=new dt;let S=new Rt;S.layers.enable(2),S.viewport=new dt;let I=[w,S],b=new nl;b.layers.enable(1),b.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=_[Z];return ne===void 0&&(ne=new Cr,_[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=_[Z];return ne===void 0&&(ne=new Cr,_[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=_[Z];return ne===void 0&&(ne=new Cr,_[Z]=ne),ne.getHandSpace()};function F(Z){let ne=x.indexOf(Z.inputSource);if(ne===-1)return;let ce=_[ne];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,l||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ee(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",P);for(let Z=0;Z<_.length;Z++){let ne=x[Z];ne!==null&&(x[Z]=null,_[Z].disconnect(ne))}A=null,D=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ri(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,ce=null,k=null;y.depth&&(k=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?Vs:es,ce=y.stencil?Qi:Ai);let oe={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new ri(f.textureWidth,f.textureHeight,{format:wn,type:Ci,depthTexture:new aa(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let xe=e.properties.get(p);xe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Z){for(let ne=0;ne<Z.removed.length;ne++){let ce=Z.removed[ne],k=x.indexOf(ce);k>=0&&(x[k]=null,_[k].disconnect(ce))}for(let ne=0;ne<Z.added.length;ne++){let ce=Z.added[ne],k=x.indexOf(ce);if(k===-1){for(let xe=0;xe<_.length;xe++)if(xe>=x.length){x.push(ce),k=xe;break}else if(x[xe]===null){x[xe]=ce,k=xe;break}if(k===-1)break}let oe=_[k];oe&&oe.connect(ce)}}let B=new U,G=new U;function X(Z,ne,ce){B.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);let k=B.distanceTo(G),oe=ne.projectionMatrix.elements,xe=ce.projectionMatrix.elements,ye=oe[14]/(oe[10]-1),ve=oe[14]/(oe[10]+1),Oe=(oe[9]+1)/oe[5],W=(oe[9]-1)/oe[5],Ze=(oe[8]-1)/oe[0],Me=(xe[8]+1)/xe[0],Ce=ye*Ze,we=ye*Me,je=k/(-Ze+Me),Ae=je*-Ze;ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let C=ye+je,E=ve+je,Y=Ce-Ae,pe=we+(k-Ae),le=Oe*ve/E*C,he=W*ve/E*C;Z.projectionMatrix.makePerspective(Y,pe,le,he,C,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function q(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;b.near=S.near=w.near=Z.near,b.far=S.far=w.far=Z.far,(A!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,D=b.far);let ne=Z.parent,ce=b.cameras;q(b,ne);for(let k=0;k<ce.length;k++)q(ce[k],ne);ce.length===2?X(b,w,S):b.projectionMatrix.copy(w.projectionMatrix),V(Z,b,ne)};function V(Z,ne,ce){ce===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let se=null;function re(Z,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){let ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let k=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,k=!0);for(let oe=0;oe<ce.length;oe++){let xe=ce[oe],ye=null;if(d!==null)ye=d.getViewport(xe);else{let Oe=u.getViewSubImage(f,xe);ye=Oe.viewport,oe===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let ve=I[oe];ve===void 0&&(ve=new Rt,ve.layers.enable(oe),ve.viewport=new dt,I[oe]=ve),ve.matrix.fromArray(xe.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(xe.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(ye.x,ye.y,ye.width,ye.height),oe===0&&(b.matrix.copy(ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),k===!0&&b.cameras.push(ve)}}for(let ce=0;ce<_.length;ce++){let k=x[ce],oe=_[ce];k!==null&&oe!==void 0&&oe.update(k,ne,l||o)}se&&se(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ge=new Qf;ge.setAnimationLoop(re),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}};function J_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function l(_,x){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let M=x.program;n.updateUBOMapping(_,M);let w=e.render.frame;r[_.id]!==w&&(f(_),r[_.id]=w)}function h(_){let x=u();_.__bindingPointIndex=x;let v=i.createBuffer(),M=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],v=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,S=v.length;w<S;w++){let I=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,A=I.length;b<A;b++){let D=I[b];if(d(D,w,b,M)===!0){let F=D.__offset,ee=Array.isArray(D.value)?D.value:[D.value],P=0;for(let B=0;B<ee.length;B++){let G=ee[B],X=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+P,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,x,v,M){let w=_.value,S=x+"_"+v;if(M[S]===void 0)return typeof w=="number"||typeof w=="boolean"?M[S]=w:M[S]=w.clone(),!0;{let I=M[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return M[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(_){let x=_.uniforms,v=0,M=16;for(let S=0,I=x.length;S<I;S++){let b=Array.isArray(x[S])?x[S]:[x[S]];for(let A=0,D=b.length;A<D;A++){let F=b[A],ee=Array.isArray(F.value)?F.value:[F.value];for(let P=0,B=ee.length;P<B;P++){let G=ee[P],X=y(G),q=v%M;q!==0&&M-q<X.boundary&&(v+=M-q),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=X.storage}}}let w=v%M;return w>0&&(v+=M-w),_.__size=v,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var qs=class{constructor(e={}){let{canvas:t=cg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let x=this,v=!1,M=0,w=0,S=null,I=-1,b=null,A=new dt,D=new dt,F=null,ee=new ze(0),P=0,B=t.width,G=t.height,X=1,q=null,V=null,se=new dt(0,0,B,G),re=new dt(0,0,B,G),ge=!1,Z=new Dr,ne=!1,ce=!1,k=null,oe=new $e,xe=new ke,ye=new U,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return S===null?X:1}let W=n;function Ze(T,H){for(let j=0;j<T.length;j++){let J=T[j],K=t.getContext(J,H);if(K!==null)return K}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ue,!1),W===null){let H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),W=Ze(H,T),W===null)throw Ze(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Ce,we,je,Ae,C,E,Y,pe,le,he,Le,Se,Pe,Ve,O,z,fe,R,$,ie,te,_e,Ne;function Ie(){Me=new yy(W),Ce=new fy(W,Me,e),Me.init(Ce),te=new K_(W,Me,Ce),we=new Y_(W,Me,Ce),je=new by(W),Ae=new O_,C=new j_(W,Me,we,Ae,Ce,te,je),E=new py(x),Y=new xy(x),pe=new Cg(W,Ce),_e=new hy(W,Me,pe,Ce),le=new _y(W,pe,je,_e),he=new Ay(W,le,pe,je),R=new Sy(W,Ce,C),O=new dy(Ae),Le=new D_(x,E,Y,Me,Ce,_e,O),Se=new J_(x,Ae),Pe=new B_,Ve=new W_(Me,Ce),fe=new ly(x,E,Y,we,he,f,c),z=new q_(x,he,Ce),Ne=new Q_(W,je,Ce,we),$=new uy(W,Me,je,Ce),ie=new vy(W,Me,je,Ce),je.programs=Le.programs,x.capabilities=Ce,x.extensions=Me,x.properties=Ae,x.renderLists=Pe,x.shadowMap=z,x.state=we,x.info=je}Ie();let Ge=new il(x,W);this.xr=Ge,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(B,G,!1))},this.getSize=function(T){return T.set(B,G)},this.setSize=function(T,H,j=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,G=H,t.width=Math.floor(T*X),t.height=Math.floor(H*X),j===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(B*X,G*X).floor()},this.setDrawingBufferSize=function(T,H,j){B=T,G=H,X=j,t.width=Math.floor(T*j),t.height=Math.floor(H*j),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,H,j,J){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,H,j,J),we.viewport(A.copy(se).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,H,j,J){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,H,j,J),we.scissor(D.copy(re).multiplyScalar(X).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){we.setScissorTest(ge=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(T=!0,H=!0,j=!0){let J=0;if(T){let K=!1;if(S!==null){let Ee=S.texture.format;K=Ee===Wf||Ee===Gf||Ee===Vf}if(K){let Ee=S.texture.type,De=Ee===Ci||Ee===Ai||Ee===Ml||Ee===Qi||Ee===zf||Ee===Hf,Re=fe.getClearColor(),We=fe.getClearAlpha(),Qe=Re.r,qe=Re.g,Ke=Re.b;De?(d[0]=Qe,d[1]=qe,d[2]=Ke,d[3]=We,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=Qe,g[1]=qe,g[2]=Ke,g[3]=We,W.clearBufferiv(W.COLOR,0,g))}else J|=W.COLOR_BUFFER_BIT}H&&(J|=W.DEPTH_BUFFER_BIT),j&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),Ve.dispose(),Ae.dispose(),E.dispose(),Y.dispose(),he.dispose(),_e.dispose(),Ne.dispose(),Le.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ht),Ge.removeEventListener("sessionend",at),k&&(k.dispose(),k=null),At.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let T=je.autoReset,H=z.enabled,j=z.autoUpdate,J=z.needsUpdate,K=z.type;Ie(),je.autoReset=T,z.enabled=H,z.autoUpdate=j,z.needsUpdate=J,z.type=K}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){let H=T.target;H.removeEventListener("dispose",de),Be(H)}function Be(T){Ue(T),Ae.remove(T)}function Ue(T){let H=Ae.get(T).programs;H!==void 0&&(H.forEach(function(j){Le.releaseProgram(j)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,j,J,K,Ee){H===null&&(H=ve);let De=K.isMesh&&K.matrixWorld.determinant()<0,Re=gs(T,H,j,J,K);we.setMaterial(J,De);let We=j.index,Qe=1;if(J.wireframe===!0){if(We=le.getWireframeAttribute(j),We===void 0)return;Qe=2}let qe=j.drawRange,Ke=j.attributes.position,Et=qe.start*Qe,fn=(qe.start+qe.count)*Qe;Ee!==null&&(Et=Math.max(Et,Ee.start*Qe),fn=Math.min(fn,(Ee.start+Ee.count)*Qe)),We!==null?(Et=Math.max(Et,0),fn=Math.min(fn,We.count)):Ke!=null&&(Et=Math.max(Et,0),fn=Math.min(fn,Ke.count));let Bt=fn-Et;if(Bt<0||Bt===1/0)return;_e.setup(K,J,Re,j,We);let jn,yt=$;if(We!==null&&(jn=pe.get(We),yt=ie,yt.setIndex(jn)),K.isMesh)J.wireframe===!0?(we.setLineWidth(J.wireframeLinewidth*Oe()),yt.setMode(W.LINES)):yt.setMode(W.TRIANGLES);else if(K.isLine){let et=J.linewidth;et===void 0&&(et=1),we.setLineWidth(et*Oe()),K.isLineSegments?yt.setMode(W.LINES):K.isLineLoop?yt.setMode(W.LINE_LOOP):yt.setMode(W.LINE_STRIP)}else K.isPoints?yt.setMode(W.POINTS):K.isSprite&&yt.setMode(W.TRIANGLES);if(K.isBatchedMesh)yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)yt.renderInstances(Et,Bt,K.count);else if(j.isInstancedBufferGeometry){let et=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Qa=Math.min(j.instanceCount,et);yt.renderInstances(Et,Bt,Qa)}else yt.render(Et,Bt)};function st(T,H,j){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,ps(T,H,j),T.side=gn,T.needsUpdate=!0,ps(T,H,j),T.side=Ln):ps(T,H,j)}this.compile=function(T,H,j=null){j===null&&(j=T),m=Ve.get(j),m.init(),_.push(m),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),T!==j&&T.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);let J=new Set;return T.traverse(function(K){let Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let Re=Ee[De];st(Re,j,K),J.add(Re)}else st(Ee,j,K),J.add(Ee)}),_.pop(),m=null,J},this.compileAsync=function(T,H,j=null){let J=this.compile(T,H,j);return new Promise(K=>{function Ee(){if(J.forEach(function(De){Ae.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){K(T);return}setTimeout(Ee,10)}Me.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let rt=null;function St(T){rt&&rt(T)}function Ht(){At.stop()}function at(){At.start()}let At=new Qf;At.setAnimationLoop(St),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(T){rt=T,Ge.setAnimationLoop(T),T===null?At.stop():At.start()},Ge.addEventListener("sessionstart",Ht),Ge.addEventListener("sessionend",at),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(H),H=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,S),m=Ve.get(T,_.length),m.init(),_.push(m),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(oe),ce=this.localClippingEnabled,ne=O.init(this.clippingPlanes,ce),y=Pe.get(T,p.length),y.init(),p.push(y),nn(T,H,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(q,V),this.info.render.frame++,ne===!0&&O.beginShadows();let j=m.state.shadowsArray;if(z.render(j,T,H),ne===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(y,T),m.setupLights(x._useLegacyLights),H.isArrayCamera){let J=H.cameras;for(let K=0,Ee=J.length;K<Ee;K++){let De=J[K];mr(y,T,De,De.viewport)}}else mr(y,T,H);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(x,T,H),_e.resetDefaultState(),I=-1,b=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function nn(T,H,j,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){J&&ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);let De=he.update(T),Re=T.material;Re.visible&&y.push(T,De,Re,j,ye.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let De=he.update(T),Re=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ye.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ye.copy(De.boundingSphere.center)),ye.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(Re)){let We=De.groups;for(let Qe=0,qe=We.length;Qe<qe;Qe++){let Ke=We[Qe],Et=Re[Ke.materialIndex];Et&&Et.visible&&y.push(T,De,Et,j,ye.z,Ke)}}else Re.visible&&y.push(T,De,Re,j,ye.z,null)}}let Ee=T.children;for(let De=0,Re=Ee.length;De<Re;De++)nn(Ee[De],H,j,J)}function mr(T,H,j,J){let K=T.opaque,Ee=T.transmissive,De=T.transparent;m.setupLightsView(j),ne===!0&&O.setGlobalState(x.clippingPlanes,j),Ee.length>0&&Ja(K,Ee,H,j),J&&we.viewport(A.copy(J)),K.length>0&&kn(K,H,j),Ee.length>0&&kn(Ee,H,j),De.length>0&&kn(De,H,j),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ja(T,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Ee=Ce.isWebGL2;k===null&&(k=new ri(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ir:Ci,minFilter:Pi,samples:Ee?4:0})),x.getDrawingBufferSize(xe),Ee?k.setSize(xe.x,xe.y):k.setSize(Zo(xe.x),Zo(xe.y));let De=x.getRenderTarget();x.setRenderTarget(k),x.getClearColor(ee),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Re=x.toneMapping;x.toneMapping=Ri,kn(T,j,J),C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k);let We=!1;for(let Qe=0,qe=H.length;Qe<qe;Qe++){let Ke=H[Qe],Et=Ke.object,fn=Ke.geometry,Bt=Ke.material,jn=Ke.group;if(Bt.side===Ln&&Et.layers.test(J.layers)){let yt=Bt.side;Bt.side=rn,Bt.needsUpdate=!0,go(Et,j,J,fn,Bt,jn),Bt.side=yt,Bt.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),x.setRenderTarget(De),x.setClearColor(ee,P),x.toneMapping=Re}function kn(T,H,j){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ee=T.length;K<Ee;K++){let De=T[K],Re=De.object,We=De.geometry,Qe=J===null?De.material:J,qe=De.group;Re.layers.test(j.layers)&&go(Re,H,j,We,Qe,qe)}}function go(T,H,j,J,K,Ee){T.onBeforeRender(x,H,j,J,K,Ee),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(x,H,j,J,T,Ee),K.transparent===!0&&K.side===Ln&&K.forceSinglePass===!1?(K.side=rn,K.needsUpdate=!0,x.renderBufferDirect(j,H,J,K,T,Ee),K.side=gn,K.needsUpdate=!0,x.renderBufferDirect(j,H,J,K,T,Ee),K.side=Ln):x.renderBufferDirect(j,H,J,K,T,Ee),T.onAfterRender(x,H,j,J,K,Ee)}function ps(T,H,j){H.isScene!==!0&&(H=ve);let J=Ae.get(T),K=m.state.lights,Ee=m.state.shadowsArray,De=K.state.version,Re=Le.getParameters(T,K.state,Ee,H,j),We=Le.getProgramCacheKey(Re),Qe=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?Y:E).get(T.envMap||J.environment),Qe===void 0&&(T.addEventListener("dispose",de),Qe=new Map,J.programs=Qe);let qe=Qe.get(We);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===De)return ms(T,Re),qe}else Re.uniforms=Le.getUniforms(T),T.onBuild(j,Re,x),T.onBeforeCompile(Re,x),qe=Le.acquireProgram(Re,We),Qe.set(We,qe),J.uniforms=Re.uniforms;let Ke=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=O.uniform),ms(T,Re),J.needsLights=It(T),J.lightsStateVersion=De,J.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.directionalShadowMap.value=K.state.directionalShadowMap,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotShadowMap.value=K.state.spotShadowMap,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMap.value=K.state.pointShadowMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function gr(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=ks.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ms(T,H){let j=Ae.get(T);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function gs(T,H,j,J,K){H.isScene!==!0&&(H=ve),C.resetTextureUnits();let Ee=H.fog,De=J.isMeshStandardMaterial?H.environment:null,Re=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ut,We=(J.isMeshStandardMaterial?Y:E).get(J.envMap||De),Qe=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,fn=!!j.morphAttributes.color,Bt=Ri;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Bt=x.toneMapping);let jn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=jn!==void 0?jn.length:0,et=Ae.get(J),Qa=m.state.lights;if(ne===!0&&(ce===!0||T!==b)){let bn=T===b&&J.id===I;O.setState(J,T,bn)}let wt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Qa.state.version||et.outputColorSpace!==Re||K.isBatchedMesh&&et.batching===!1||!K.isBatchedMesh&&et.batching===!0||K.isInstancedMesh&&et.instancing===!1||!K.isInstancedMesh&&et.instancing===!0||K.isSkinnedMesh&&et.skinning===!1||!K.isSkinnedMesh&&et.skinning===!0||K.isInstancedMesh&&et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&et.instancingColor===!1&&K.instanceColor!==null||et.envMap!==We||J.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==O.numPlanes||et.numIntersection!==O.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==qe||et.morphTargets!==Ke||et.morphNormals!==Et||et.morphColors!==fn||et.toneMapping!==Bt||Ce.isWebGL2===!0&&et.morphTargetsCount!==yt)&&(wt=!0):(wt=!0,et.__version=J.version);let Wi=et.currentProgram;wt===!0&&(Wi=ps(J,H,K));let Xh=!1,xr=!1,ec=!1,Wt=Wi.getUniforms(),Xi=et.uniforms;if(we.useProgram(Wi.program)&&(Xh=!0,xr=!0,ec=!0),J.id!==I&&(I=J.id,xr=!0),Xh||b!==T){Wt.setValue(W,"projectionMatrix",T.projectionMatrix),Wt.setValue(W,"viewMatrix",T.matrixWorldInverse);let bn=Wt.map.cameraPosition;bn!==void 0&&bn.setValue(W,ye.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&Wt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Wt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,xr=!0,ec=!0)}if(K.isSkinnedMesh){Wt.setOptional(W,K,"bindMatrix"),Wt.setOptional(W,K,"bindMatrixInverse");let bn=K.skeleton;bn&&(Ce.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Wt.setValue(W,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Wt.setOptional(W,K,"batchingTexture"),Wt.setValue(W,"batchingTexture",K._matricesTexture,C));let tc=j.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0&&Ce.isWebGL2===!0)&&R.update(K,j,Wi),(xr||et.receiveShadow!==K.receiveShadow)&&(et.receiveShadow=K.receiveShadow,Wt.setValue(W,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Xi.envMap.value=We,Xi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),xr&&(Wt.setValue(W,"toneMappingExposure",x.toneMappingExposure),et.needsLights&&Rn(Xi,ec),Ee&&J.fog===!0&&Se.refreshFogUniforms(Xi,Ee),Se.refreshMaterialUniforms(Xi,J,X,G,k),ks.upload(W,gr(et),Xi,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ks.upload(W,gr(et),Xi,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Wt.setValue(W,"center",K.center),Wt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Wt.setValue(W,"normalMatrix",K.normalMatrix),Wt.setValue(W,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let bn=J.uniformsGroups;for(let nc=0,qp=bn.length;nc<qp;nc++)if(Ce.isWebGL2){let $h=bn[nc];Ne.update($h,Wi),Ne.bind($h,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}function Rn(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function It(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,H,j){Ae.get(T.texture).__webglTexture=H,Ae.get(T.depthTexture).__webglTexture=j;let J=Ae.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){let j=Ae.get(T);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,j=0){S=T,M=H,w=j;let J=!0,K=null,Ee=!1,De=!1;if(T){let We=Ae.get(T);We.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(T):We.__hasExternalTextures&&C.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);let Qe=T.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);let qe=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?K=qe[H][j]:K=qe[H],Ee=!0):Ce.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?K=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?K=qe[j]:K=qe,A.copy(T.viewport),D.copy(T.scissor),F=T.scissorTest}else A.copy(se).multiplyScalar(X).floor(),D.copy(re).multiplyScalar(X).floor(),F=ge;if(we.bindFramebuffer(W.FRAMEBUFFER,K)&&Ce.drawBuffers&&J&&we.drawBuffers(T,K),we.viewport(A),we.scissor(D),we.setScissorTest(F),Ee){let We=Ae.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,We.__webglTexture,j)}else if(De){let We=Ae.get(T.texture),Qe=H||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,We.__webglTexture,j||0,Qe)}I=-1},this.readRenderTargetPixels=function(T,H,j,J,K,Ee,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Re=Re[De]),Re){we.bindFramebuffer(W.FRAMEBUFFER,Re);try{let We=T.texture,Qe=We.format,qe=We.type;if(Qe!==wn&&te.convert(Qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=qe===Ir&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(qe!==Ci&&te.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ii&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&j>=0&&j<=T.height-K&&W.readPixels(H,j,J,K,te.convert(Qe),te.convert(qe),Ee)}finally{let We=S!==null?Ae.get(S).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(T,H,j=0){let J=Math.pow(2,-j),K=Math.floor(H.image.width*J),Ee=Math.floor(H.image.height*J);C.setTexture2D(H,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,T.x,T.y,K,Ee),we.unbindTexture()},this.copyTextureToTexture=function(T,H,j,J=0){let K=H.image.width,Ee=H.image.height,De=te.convert(j.format),Re=te.convert(j.type);C.setTexture2D(j,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,T.x,T.y,K,Ee,De,Re,H.image.data):H.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,T.x,T.y,De,Re,H.image),J===0&&j.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,H,j,J,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,We=te.convert(J.format),Qe=te.convert(J.type),qe;if(J.isData3DTexture)C.setTexture3D(J,0),qe=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),qe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);let Ke=W.getParameter(W.UNPACK_ROW_LENGTH),Et=W.getParameter(W.UNPACK_IMAGE_HEIGHT),fn=W.getParameter(W.UNPACK_SKIP_PIXELS),Bt=W.getParameter(W.UNPACK_SKIP_ROWS),jn=W.getParameter(W.UNPACK_SKIP_IMAGES),yt=j.isCompressedTexture?j.mipmaps[K]:j.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,yt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(qe,K,H.x,H.y,H.z,Ee,De,Re,We,Qe,yt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(qe,K,H.x,H.y,H.z,Ee,De,Re,We,yt.data)):W.texSubImage3D(qe,K,H.x,H.y,H.z,Ee,De,Re,We,Qe,yt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ke),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Et),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Bt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,jn),K===0&&J.generateMipmaps&&W.generateMipmap(qe),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){M=0,w=0,S=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wl?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?ts:qf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?ft:Ut}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sl=class extends qs{};sl.prototype.isWebGL1Renderer=!0;var ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Or=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new U,Br=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var mf=new U,gf=new dt,xf=new dt,ev=new U,yf=new $e,ko=new U,Ic=new xn,_f=new $e,Lc=new oi,la=class extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(s),e.ray.intersectsSphere(Ic)!==!1&&(_f.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(_f),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gf.fromBufferAttribute(s.attributes.skinIndex,e),xf.fromBufferAttribute(s.attributes.skinWeight,e),mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xf.getComponent(r);if(o!==0){let a=gf.getComponent(r);yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ev.copy(mf).applyMatrix4(yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},kr=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},rl=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Lt,h=Lt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vf=new $e,tv=new $e,ha=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:tv;vf.multiplyMatrices(a,t[r]),vf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new rl(t,e,e,wn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new kr),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ss=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new $e,bf=new $e,zo=[],Mf=new Kt,nv=new $e,Mr=new zt,wr=new xn,ua=class extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Mf.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),wr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),bf.multiplyMatrices(n,Us),Mr.matrixWorld=bf,Mr.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){let c=zo[o];c.instanceId=r,c.object=this,t.push(c)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ys=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wf=new U,Sf=new U,Af=new $e,Uc=new oi,Ho=new xn,js=class extends _t{constructor(e=new an,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wf.fromBufferAttribute(t,s-1),Sf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wf.distanceTo(Sf);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Af.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new U,h=new U,u=new U,f=new U,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=d){let M=g.getX(x),w=g.getX(x+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,w),Uc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Uc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ef=new U,Tf=new U,zr=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ef.fromBufferAttribute(t,s),Tf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ef.distanceTo(Tf);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fa=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rf=new $e,ol=new oi,Vo=new xn,Go=new U,da=class extends _t{constructor(e=new an,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Rf.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=l.getX(g);Go.fromBufferAttribute(u,m),Cf(Go,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Go.fromBufferAttribute(u,g),Cf(Go,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cf(i,e,t,n,s,r,o){let a=ol.distanceSqToPoint(i);if(a<t){let c=new U;ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var al=class i extends an{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new U,v=new U,M=new U;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],v),d(t[w+2],M),c(x,v,M,_)}function c(_,x,v,M){let w=M+1,S=[];for(let I=0;I<=w;I++){S[I]=[];let b=_.clone().lerp(v,I/w),A=x.clone().lerp(v,I/w),D=w-I;for(let F=0;F<=D;F++)F===0&&I===w?S[I][F]=b:S[I][F]=b.clone().lerp(A,F/D)}for(let I=0;I<w;I++)for(let b=0;b<2*(w-I)-1;b++){let A=Math.floor(b/2);b%2===0?(f(S[I][A+1]),f(S[I+1][A]),f(S[I][A])):(f(S[I][A+1]),f(S[I+1][A+1]),f(S[I+1][A]))}}function l(_){let x=new U;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let _=new U;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=m(_)/2/Math.PI+.5,M=p(_)/Math.PI+.5;o.push(v,1-M)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],v=o[_+2],M=o[_+4],w=Math.max(x,v,M),S=Math.min(x,v,M);w>.9&&S<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),M<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let _=new U,x=new U,v=new U,M=new U,w=new ke,S=new ke,I=new ke;for(let b=0,A=0;b<r.length;b+=9,A+=6){_.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[A+0],o[A+1]),S.set(o[A+2],o[A+3]),I.set(o[A+4],o[A+5]),M.copy(_).add(x).add(v).divideScalar(3);let D=m(M);y(w,A+0,_,D),y(S,A+2,x,D),y(I,A+4,v,D)}}function y(_,x,v,M){M<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var pa=class i extends al{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ks=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},An=class extends Ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Wo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function rd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=e,a=2*t-n;break;case Tu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eu:o=e,c=2*n-t;break;case Tu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+_*o[l+M]+x*o[c+M]+v*o[u+M];return r}},ll=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},hl=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&iv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=is;var Li=class extends En{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Gs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends En{};ma.prototype.ValueTypeName="color";var ci=class extends En{};ci.prototype.ValueTypeName="number";var ul=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gn=class extends En{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.DefaultInterpolation=is;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends En{};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Gs;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends En{};li.prototype.ValueTypeName="vector";var ga=class{constructor(e,t=-1,n,s=Fm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ov(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=sv(c);c=Pf(c,1,h),l=Pf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ci(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,y){if(d.length!==0){let m=[],p=[];rd(d,m,p,g),m.length!==0&&y.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)d[f[g].morphTargets[y]]=-1;for(let y in d){let m=[],p=[];for(let _=0;_!==f[g].morphTargets.length;++_){let x=f[g];m.push(x.time),p.push(x.morphTarget===y?1:0)}s.push(new ci(".morphTargetInfluence["+y+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(li,d+".position",f,"pos",s),n(Gn,d+".quaternion",f,"rot",s),n(li,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return ma;case"quaternion":return Gn;case"bool":case"boolean":return Li;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ov(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rv(i.type);if(i.times===void 0){let t=[],n=[];rd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},av=new fl,hi=class{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},dl=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends hi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ti[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,y=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{y+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let w=0,S=h.length;w<S;w++){let I=h[w];I.onProgress&&I.onProgress(M)}p.enqueue(v),_()}})}}});return new Response(m)}else throw new dl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ei.add(e,l);let h=ti[e];delete ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var pl=class extends hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Lr("img");function c(){h(),Ei.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var xa=class extends hi{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},rs=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ya=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nc=new $e,If=new U,Lf=new U,Gr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=class extends Gr{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends rs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uf=new $e,Sr=new U,Dc=new U,gl=class extends Gr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},va=class extends rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xl=class extends Gr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ba=class extends rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ni=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ma=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ei.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(e,c),r.manager.itemStart(e)}};var wa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Nf(){return(typeof performance>"u"?Date:performance).now()}var El="\\[\\]\\.:\\/",cv=new RegExp("["+El+"]","g"),Tl="[^"+El+"]",lv="[^"+El.replace("\\.","")+"]",hv=/((?:WC+[\/:])*)/.source.replace("WC",Tl),uv=/(WCOD+)?/.source.replace("WCOD",lv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),pv=new RegExp("^"+hv+uv+fv+dv+"$"),mv=["material","materials","bones","map"],yl=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cv,"")}static parseTrackName(e){let t=pv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=yl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sM=new Float32Array(1);var Wr=class{constructor(e,t,n=0,s=1/0){this.ray=new oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return _l(e,this,n,t),n.sort(Df),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_l(e[s],this,n,t);return n.sort(Df),n}};function Df(i,e){return i.distance-e.distance}function _l(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)_l(s[r],e,t,!0)}}var Xr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $r=class extends zr{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new an;r.setIndex(new Ct(n,1)),r.setAttribute("position",new qt(s,3)),super(r,new Ys({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function Rl(i,e){if(e===$f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qr||e===Aa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var jr=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Yl(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ni.extractUrlBase(e);o=Ni.resolveURL(l,this.path)}else o=Ni.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hd){try{o[it.KHR_BINARY_GLTF]=new jl(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new nh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new Ul;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new Kl(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new Zl;break;case it.KHR_MESH_QUANTIZATION:o[u]=new Jl;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function xv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ll=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ut);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new va(h),l.distance=u;break;case"spot":l=new _a(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ul=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},Nl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Dl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}},Ol=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Bl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}},zl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Hl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}},Vl=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Gl=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Wl=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Xl=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$l=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ql=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Yl=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let y=new $e,m=new U,p=new jt,_=new U(1,1,1),x=new ua(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,y.compose(m,p,_));for(let v in c)if(v==="_COLOR_0"){let M=c[v];x.instanceColor=new ss(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},hd="glTF",Yr=12,od={JSON:1313821514,BIN:5130562},jl=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Yr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Yr,r=new DataView(e,Yr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===od.JSON){let l=new Uint8Array(e,Yr+o,a);this.content=n.decode(l)}else if(c===od.BIN){let l=Yr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=eh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=eh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=er[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let y=d.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(d)},a,l,Ut,f)})})}},Zl=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jl=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Ra=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,y=g-l,m=-2*d+3*f,p=d-f,_=1-m,x=p-f+u;for(let v=0;v!==a;v++){let M=o[y+v+a],w=o[y+v+c]*h,S=o[g+v+a],I=o[g+v]*h;r[v]=_*M+x*w+m*S+p*I}return r}},yv=new jt,Ql=class extends Ra{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return yv.fromArray(r).normalize().toArray(r),r}},Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:Lt,9729:en,9984:$o,9985:bl,9986:Ar,9987:Pi},cd={33071:mn,33648:Pr,10497:ns},Cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_v={CUBICSPLINE:void 0,LINEAR:is,STEP:Gs},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gn})),i.DefaultMaterial}function cs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Mv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wv(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Il(t.attributes):e=i.indices+":"+Il(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Il(i.targets[n]);return e}function Il(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function th(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Av=new $e,nh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cs(r,a,s),Oi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ni.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Cl[s.type],a=er[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ct(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Cl[s.type],l=er[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(d&&d!==u){let p=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=t.cache.get(_);x||(y=new l(a,p*d,s.count*d/h),x=new Fr(y,d/h),t.cache.add(_,x)),m=new Br(x,c,f%d/h,g)}else a===null?y=new l(s.count*c):y=new l(a,f,s.count*c),m=new Ct(y,c,g);if(s.sparse!==void 0){let p=Cl.SCALAR,_=er[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,M=new _(o[1],x,s.sparse.count*p),w=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized));for(let S=0,I=M.length;S<I;S++){let b=M[S];if(m.setX(b,w[S*c]),c>=2&&m.setY(b,w[S*c+1]),c>=3&&m.setZ(b,w[S*c+2]),c>=4&&m.setW(b,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ad[f.magFilter]||en,h.minFilter=ad[f.minFilter]||Pi,h.wrapS=cd[f.wrapS]||ns,h.wrapT=cd[f.wrapT]||ns,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Yt(y);m.needsUpdate=!0,f(m)}),t.load(Ni.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Sv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Hr,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ys,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ks}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ut),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ln);let h=r.alphaMode||Pl.OPAQUE;if(h===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){let u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],Ut)}return r.emissiveTexture!==void 0&&o!==on&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&cs(s,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ld(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=wv(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ld(new an,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?vv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let y=h[d],m=o[d],p,_=l[d];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new la(y,_):new zt(y,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=Rl(p.geometry,Aa):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=Rl(p.geometry,qr));else if(m.mode===Tn.LINES)p=new zr(y,_);else if(m.mode===Tn.LINE_STRIP)p=new js(y,_);else if(m.mode===Tn.LINE_LOOP)p=new fa(y,_);else if(m.mode===Tn.POINTS)p=new da(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Oi(p,r),m.extensions&&cs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&cs(s,u[0],r),u[0];let f=new tn;r.extensions&&cs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Js.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $s(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new $e;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ha(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],y=d.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let _=0,x=f.length;_<x;_++){let v=f[_],M=d[_],w=g[_],S=y[_],I=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let b=n._createAnimationTracks(v,M,w,S,I);if(b)for(let A=0;A<b.length;A++)p.push(b[A])}return new ga(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Av)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new kr:l.length>1?h=new tn:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Oi(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){let u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tn;n.name&&(r.name=s.createUniqueName(n.name)),Oi(r,n),n.extensions&&cs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof yn||f instanceof Yt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Di[r.path]){case Di.weights:l=ci;break;case Di.rotation:l=Gn;break;case Di.position:case Di.scale:l=li;break;default:switch(n.itemSize){case 1:l=ci;break;case 2:case 3:default:l=li;break}break}let h=s.interpolation!==void 0?_v[s.interpolation]:is,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Di[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=th(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Gn?Ql:Ra;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ev(i,e,t){let n=e.attributes,s=new Kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){let h=th(er[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let y=th(er[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ld(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=eh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ct.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Oi(i,e),Ev(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bv(i,e.targets,t):i})}var ud={type:"change"},ih={type:"start"},fd={type:"end"},Ca=new oi,dd=new sn,Tv=Math.cos(70*Js.DEG2RAD),Pa=class extends Vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",he),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),r=s.NONE},this.update=function(){let R=new U,$=new jt().setFromUnitVectors(e.up,new U(0,1,0)),ie=$.clone().invert(),te=new U,_e=new jt,Ne=new U,Ie=2*Math.PI;return function(me=null){let N=n.object.position;R.copy(N).sub(n.target),R.applyQuaternion($),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&D(b(me)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ue=n.minAzimuthAngle,de=n.maxAzimuthAngle;isFinite(ue)&&isFinite(de)&&(ue<-Math.PI?ue+=Ie:ue>Math.PI&&(ue-=Ie),de<-Math.PI?de+=Ie:de>Math.PI&&(de-=Ie),ue<=de?a.theta=Math.max(ue,Math.min(de,a.theta)):a.theta=a.theta>(ue+de)/2?Math.max(ue,a.theta):Math.min(de,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*l),R.setFromSpherical(a),R.applyQuaternion(ie),N.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Be=!1;if(n.zoomToCursor&&w){let Ue=null;if(n.object.isPerspectiveCamera){let st=R.length();Ue=V(st*l);let rt=st-Ue;n.object.position.addScaledVector(v,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let st=new U(M.x,M.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Be=!0;let rt=new U(M.x,M.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(st),n.object.updateMatrixWorld(),Ue=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ue).add(n.object.position):(Ca.origin.copy(n.object.position),Ca.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ca.direction))<Tv?e.lookAt(n.target):(dd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ca.intersectPlane(dd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Be=!0);return l=1,w=!1,Be||te.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(ud),te.copy(n.object.position),_e.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Pe),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",he),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Xr,c=new Xr,l=1,h=new U,u=new ke,f=new ke,d=new ke,g=new ke,y=new ke,m=new ke,p=new ke,_=new ke,x=new ke,v=new U,M=new ke,w=!1,S=[],I={};function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function A(R){let $=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*$)}function D(R){c.theta-=R}function F(R){c.phi-=R}let ee=function(){let R=new U;return function(ie,te){R.setFromMatrixColumn(te,0),R.multiplyScalar(-ie),h.add(R)}}(),P=function(){let R=new U;return function(ie,te){n.screenSpacePanning===!0?R.setFromMatrixColumn(te,1):(R.setFromMatrixColumn(te,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ie),h.add(R)}}(),B=function(){let R=new U;return function(ie,te){let _e=n.domElement;if(n.object.isPerspectiveCamera){let Ne=n.object.position;R.copy(Ne).sub(n.target);let Ie=R.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*ie*Ie/_e.clientHeight,n.object.matrix),P(2*te*Ie/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(ie*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),P(te*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R,$){if(!n.zoomToCursor)return;w=!0;let ie=n.domElement.getBoundingClientRect(),te=R-ie.left,_e=$-ie.top,Ne=ie.width,Ie=ie.height;M.x=te/Ne*2-1,M.y=-(_e/Ie)*2+1,v.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function se(R){u.set(R.clientX,R.clientY)}function re(R){q(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function ge(R){g.set(R.clientX,R.clientY)}function Z(R){f.set(R.clientX,R.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let $=n.domElement;D(2*Math.PI*d.x/$.clientHeight),F(2*Math.PI*d.y/$.clientHeight),u.copy(f),n.update()}function ne(R){_.set(R.clientX,R.clientY),x.subVectors(_,p),x.y>0?G(A(x.y)):x.y<0&&X(A(x.y)),p.copy(_),n.update()}function ce(R){y.set(R.clientX,R.clientY),m.subVectors(y,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(y),n.update()}function k(R){q(R.clientX,R.clientY),R.deltaY<0?X(A(R.deltaY)):R.deltaY>0&&G(A(R.deltaY)),n.update()}function oe(R){let $=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),$=!0;break}$&&(R.preventDefault(),n.update())}function xe(R){if(S.length===1)u.set(R.pageX,R.pageY);else{let $=fe(R),ie=.5*(R.pageX+$.x),te=.5*(R.pageY+$.y);u.set(ie,te)}}function ye(R){if(S.length===1)g.set(R.pageX,R.pageY);else{let $=fe(R),ie=.5*(R.pageX+$.x),te=.5*(R.pageY+$.y);g.set(ie,te)}}function ve(R){let $=fe(R),ie=R.pageX-$.x,te=R.pageY-$.y,_e=Math.sqrt(ie*ie+te*te);p.set(0,_e)}function Oe(R){n.enableZoom&&ve(R),n.enablePan&&ye(R)}function W(R){n.enableZoom&&ve(R),n.enableRotate&&xe(R)}function Ze(R){if(S.length==1)f.set(R.pageX,R.pageY);else{let ie=fe(R),te=.5*(R.pageX+ie.x),_e=.5*(R.pageY+ie.y);f.set(te,_e)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let $=n.domElement;D(2*Math.PI*d.x/$.clientHeight),F(2*Math.PI*d.y/$.clientHeight),u.copy(f)}function Me(R){if(S.length===1)y.set(R.pageX,R.pageY);else{let $=fe(R),ie=.5*(R.pageX+$.x),te=.5*(R.pageY+$.y);y.set(ie,te)}m.subVectors(y,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(y)}function Ce(R){let $=fe(R),ie=R.pageX-$.x,te=R.pageY-$.y,_e=Math.sqrt(ie*ie+te*te);_.set(0,_e),x.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),G(x.y),p.copy(_);let Ne=(R.pageX+$.x)*.5,Ie=(R.pageY+$.y)*.5;q(Ne,Ie)}function we(R){n.enableZoom&&Ce(R),n.enablePan&&Me(R)}function je(R){n.enableZoom&&Ce(R),n.enableRotate&&Ze(R)}function Ae(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",E)),Ve(R),R.pointerType==="touch"?Le(R):Y(R))}function C(R){n.enabled!==!1&&(R.pointerType==="touch"?Se(R):pe(R))}function E(R){O(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(fd),r=s.NONE}function Y(R){let $;switch(R.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case os.DOLLY:if(n.enableZoom===!1)return;re(R),r=s.DOLLY;break;case os.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;ge(R),r=s.PAN}else{if(n.enableRotate===!1)return;se(R),r=s.ROTATE}break;case os.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;se(R),r=s.ROTATE}else{if(n.enablePan===!1)return;ge(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ih)}function pe(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Z(R);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(R);break;case s.PAN:if(n.enablePan===!1)return;ce(R);break}}function le(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(ih),k(R),n.dispatchEvent(fd))}function he(R){n.enabled===!1||n.enablePan===!1||oe(R)}function Le(R){switch(z(R),S.length){case 1:switch(n.touches.ONE){case as.ROTATE:if(n.enableRotate===!1)return;xe(R),r=s.TOUCH_ROTATE;break;case as.PAN:if(n.enablePan===!1)return;ye(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case as.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(R),r=s.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ih)}function Se(R){switch(z(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ze(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Me(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(R),n.update();break;default:r=s.NONE}}function Pe(R){n.enabled!==!1&&R.preventDefault()}function Ve(R){S.push(R.pointerId)}function O(R){delete I[R.pointerId];for(let $=0;$<S.length;$++)if(S[$]==R.pointerId){S.splice($,1);return}}function z(R){let $=I[R.pointerId];$===void 0&&($=new ke,I[R.pointerId]=$),$.set(R.pageX,R.pageY)}function fe(R){let $=R.pointerId===S[0]?S[1]:S[0];return I[$]}n.domElement.addEventListener("contextmenu",Pe),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",le,{passive:!1}),this.update()}};var vt=Uint8Array,_n=Uint16Array,ph=Int32Array,Ia=new vt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),La=new vt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ch=new vt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vd=function(i,e){for(var t=new _n(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new ph(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},bd=vd(Ia,2),Md=bd.b,lh=bd.r;Md[28]=258,lh[258]=28;var wd=vd(La,0),Rv=wd.b,pd=wd.r,hh=new _n(32768);for(lt=0;lt<32768;++lt)ui=(lt&43690)>>1|(lt&21845)<<1,ui=(ui&52428)>>2|(ui&13107)<<2,ui=(ui&61680)>>4|(ui&3855)<<4,hh[lt]=((ui&65280)>>8|(ui&255)<<8)>>1;var ui,lt,Xn=function(i,e,t){for(var n=i.length,s=0,r=new _n(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new _n(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new _n(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[hh[u]>>c]=l}else for(a=new _n(n),s=0;s<n;++s)i[s]&&(a[s]=hh[o[i[s]-1]++]>>15-i[s]);return a},Fi=new vt(288);for(lt=0;lt<144;++lt)Fi[lt]=8;var lt;for(lt=144;lt<256;++lt)Fi[lt]=9;var lt;for(lt=256;lt<280;++lt)Fi[lt]=7;var lt;for(lt=280;lt<288;++lt)Fi[lt]=8;var lt,Jr=new vt(32);for(lt=0;lt<32;++lt)Jr[lt]=5;var lt,Cv=Xn(Fi,9,0),Pv=Xn(Fi,9,1),Iv=Xn(Jr,5,0),Lv=Xn(Jr,5,1),sh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Nn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},rh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},mh=function(i){return(i+7)/8|0},Qr=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new vt(i.subarray(e,t))};var Uv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Gt=function(i,e,t){var n=new Error(e||Uv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Gt),!t)throw n;return n},Sd=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new vt(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new vt(s*3));var l=function(Oe){var W=t.length;if(Oe>W){var Ze=new vt(Math.max(W*2,Oe));Ze.set(t),t=Ze}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,g=e.d,y=e.m,m=e.n,p=s*8;do{if(!d){h=Nn(i,u,1);var _=Nn(i,u+1,3);if(u+=3,_)if(_==1)d=Pv,g=Lv,y=9,m=5;else if(_==2){var w=Nn(i,u,31)+257,S=Nn(i,u+10,15)+4,I=w+Nn(i,u+5,31)+1;u+=14;for(var b=new vt(I),A=new vt(19),D=0;D<S;++D)A[ch[D]]=Nn(i,u+D*3,7);u+=S*3;for(var F=sh(A),ee=(1<<F)-1,P=Xn(A,F,1),D=0;D<I;){var B=P[Nn(i,u,ee)];u+=B&15;var x=B>>4;if(x<16)b[D++]=x;else{var G=0,X=0;for(x==16?(X=3+Nn(i,u,3),u+=2,G=b[D-1]):x==17?(X=3+Nn(i,u,7),u+=3):x==18&&(X=11+Nn(i,u,127),u+=7);X--;)b[D++]=G}}var q=b.subarray(0,w),V=b.subarray(w);y=sh(q),m=sh(V),d=Xn(q,y,1),g=Xn(V,m,1)}else Gt(1);else{var x=mh(u)+4,v=i[x-4]|i[x-3]<<8,M=x+v;if(M>s){c&&Gt(0);break}a&&l(f+v),t.set(i.subarray(x,M),f),e.b=f+=v,e.p=u=M*8,e.f=h;continue}if(u>p){c&&Gt(0);break}}a&&l(f+131072);for(var se=(1<<y)-1,re=(1<<m)-1,ge=u;;ge=u){var G=d[rh(i,u)&se],Z=G>>4;if(u+=G&15,u>p){c&&Gt(0);break}if(G||Gt(2),Z<256)t[f++]=Z;else if(Z==256){ge=u,d=null;break}else{var ne=Z-254;if(Z>264){var D=Z-257,ce=Ia[D];ne=Nn(i,u,(1<<ce)-1)+Md[D],u+=ce}var k=g[rh(i,u)&re],oe=k>>4;k||Gt(3),u+=k&15;var V=Rv[oe];if(oe>3){var ce=La[oe];V+=rh(i,u)&(1<<ce)-1,u+=ce}if(u>p){c&&Gt(0);break}a&&l(f+131072);var xe=f+ne;if(f<V){var ye=r-V,ve=Math.min(V,xe);for(ye+f<0&&Gt(3);f<ve;++f)t[f]=n[ye+f]}for(;f<xe;++f)t[f]=t[f-V]}}e.l=d,e.p=ge,e.b=f,e.f=h,d&&(h=1,e.m=y,e.d=g,e.n=m)}while(!h);return f!=t.length&&o?Qr(t,0,f):t.subarray(0,f)},fi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Kr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},oh=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Ed,l:0};if(s==1){var o=new vt(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,w){return M.f-w.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=s-1;)a=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var d=new _n(f+1),g=uh(t[h-1],d,0);if(g>e){var n=0,y=0,m=g-e,p=1<<m;for(r.sort(function(w,S){return d[S.s]-d[w.s]||w.f-S.f});n<s;++n){var _=r[n].s;if(d[_]>e)y+=p-(1<<g-d[_]),d[_]=e;else break}for(y>>=m;y>0;){var x=r[n].s;d[x]<e?y-=1<<e-d[x]++-1:++n}for(;n>=0&&y;--n){var v=r[n].s;d[v]==e&&(--d[v],++y)}g=e}return{t:new vt(d),l:g}},uh=function(i,e,t){return i.s==-1?Math.max(uh(i.l,e,t+1),uh(i.r,e,t+1)):e[i.s]=t},md=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new _n(++e),n=0,s=i[0],r=1,o=function(c){t[n++]=c},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},Zr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Ad=function(i,e,t){var n=t.length,s=mh(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},gd=function(i,e,t,n,s,r,o,a,c,l,h){fi(e,h++,t),++s[256];for(var u=oh(s,15),f=u.t,d=u.l,g=oh(r,15),y=g.t,m=g.l,p=md(f),_=p.c,x=p.n,v=md(y),M=v.c,w=v.n,S=new _n(19),I=0;I<_.length;++I)++S[_[I]&31];for(var I=0;I<M.length;++I)++S[M[I]&31];for(var b=oh(S,7),A=b.t,D=b.l,F=19;F>4&&!A[ch[F-1]];--F);var ee=l+5<<3,P=Zr(s,Fi)+Zr(r,Jr)+o,B=Zr(s,f)+Zr(r,y)+o+14+3*F+Zr(S,A)+2*S[16]+3*S[17]+7*S[18];if(c>=0&&ee<=P&&ee<=B)return Ad(e,h,i.subarray(c,c+l));var G,X,q,V;if(fi(e,h,1+(B<P)),h+=2,B<P){G=Xn(f,d,0),X=f,q=Xn(y,m,0),V=y;var se=Xn(A,D,0);fi(e,h,x-257),fi(e,h+5,w-1),fi(e,h+10,F-4),h+=14;for(var I=0;I<F;++I)fi(e,h+3*I,A[ch[I]]);h+=3*F;for(var re=[_,M],ge=0;ge<2;++ge)for(var Z=re[ge],I=0;I<Z.length;++I){var ne=Z[I]&31;fi(e,h,se[ne]),h+=A[ne],ne>15&&(fi(e,h,Z[I]>>5&127),h+=Z[I]>>12)}}else G=Cv,X=Fi,q=Iv,V=Jr;for(var I=0;I<a;++I){var ce=n[I];if(ce>255){var ne=ce>>18&31;Kr(e,h,G[ne+257]),h+=X[ne+257],ne>7&&(fi(e,h,ce>>23&31),h+=Ia[ne]);var k=ce&31;Kr(e,h,q[k]),h+=V[k],k>3&&(Kr(e,h,ce>>5&8191),h+=La[k])}else Kr(e,h,G[ce]),h+=X[ce]}return Kr(e,h,G[256]),h+X[256]},Nv=new ph([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ed=new vt(0),Dv=function(i,e,t,n,s,r){var o=r.z||i.length,a=new vt(n+o+5*(1+Math.ceil(o/7e3))+s),c=a.subarray(n,a.length-s),l=r.l,h=(r.r||0)&7;if(e){h&&(c[0]=r.r>>3);for(var u=Nv[e-1],f=u>>13,d=u&8191,g=(1<<t)-1,y=r.p||new _n(32768),m=r.h||new _n(g+1),p=Math.ceil(t/3),_=2*p,x=function(Me){return(i[Me]^i[Me+1]<<p^i[Me+2]<<_)&g},v=new ph(25e3),M=new _n(288),w=new _n(32),S=0,I=0,b=r.i||0,A=0,D=r.w||0,F=0;b+2<o;++b){var ee=x(b),P=b&32767,B=m[ee];if(y[P]=B,m[ee]=P,D<=b){var G=o-b;if((S>7e3||A>24576)&&(G>423||!l)){h=gd(i,c,0,v,M,w,I,A,F,b-F,h),A=S=I=0,F=b;for(var X=0;X<286;++X)M[X]=0;for(var X=0;X<30;++X)w[X]=0}var q=2,V=0,se=d,re=P-B&32767;if(G>2&&ee==x(b-re))for(var ge=Math.min(f,G)-1,Z=Math.min(32767,b),ne=Math.min(258,G);re<=Z&&--se&&P!=B;){if(i[b+q]==i[b+q-re]){for(var ce=0;ce<ne&&i[b+ce]==i[b+ce-re];++ce);if(ce>q){if(q=ce,V=re,ce>ge)break;for(var k=Math.min(re,ce-2),oe=0,X=0;X<k;++X){var xe=b-re+X&32767,ye=y[xe],ve=xe-ye&32767;ve>oe&&(oe=ve,B=xe)}}}P=B,B=y[P],re+=P-B&32767}if(V){v[A++]=268435456|lh[q]<<18|pd[V];var Oe=lh[q]&31,W=pd[V]&31;I+=Ia[Oe]+La[W],++M[257+Oe],++w[W],D=b+q,++S}else v[A++]=i[b],++M[i[b]]}}for(b=Math.max(b,D);b<o;++b)v[A++]=i[b],++M[i[b]];h=gd(i,c,l,v,M,w,I,A,F,b-F,h),l||(r.r=h&7|c[h/8|0]<<3,h-=7,r.h=m,r.p=y,r.i=b,r.w=D)}else{for(var b=r.w||0;b<o+l;b+=65535){var Ze=b+65535;Ze>=o&&(c[h/8|0]=l,Ze=o),h=Ad(c,h+1,i.subarray(b,Ze))}r.i=o}return Qr(a,0,n+mh(h)+s)},Ov=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),Fv=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Ov[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Td=function(){var i=1,e=0;return{p:function(t){for(var n=i,s=e,r=t.length|0,o=0;o!=r;){for(var a=Math.min(o+2655,r);o<a;++o)s+=n+=t[o];n=(n&65535)+15*(n>>16),s=(s&65535)+15*(s>>16)}i=n,e=s},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},Rd=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new vt(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return Dv(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Cd=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var Wn=function(i,e){return i[e]|i[e+1]<<8},Dn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ah=function(i,e){return Dn(i,e)+Dn(i,e+4)*4294967296},Ot=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};var Bv=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var s=Td();s.p(e.dictionary),Ot(i,2,s.d())}},kv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Gt(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Gt(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function zv(i,e){return Rd(i,e||{},0,0)}function Hv(i,e){return Sd(i,{i:2},e&&e.out,e&&e.dictionary)}function Ua(i,e){e||(e={});var t=Td();t.p(i);var n=Rd(i,e,e.dictionary?6:2,4);return Bv(n,e),Ot(n,n.length-4,t.d()),n}function tr(i,e){return Sd(i.subarray(kv(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Pd=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Cd(n,r[1]),r=r[0]),r instanceof vt?t[o]=[r,a]:(t[o+="/"]=[new vt(0),a],Pd(r,o,t,n))}},xd=typeof TextEncoder<"u"&&new TextEncoder,fh=typeof TextDecoder<"u"&&new TextDecoder,Vv=0;try{fh.decode(Ed,{stream:!0}),Vv=1}catch{}var Gv=function(i){for(var e="",t=0;;){var n=i[t++],s=(n>127)+(n>223)+(n>239);if(t+s>i.length)return{s:e,r:Qr(i,t-1)};s?s==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function yd(i,e){if(e){for(var t=new vt(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(xd)return xd.encode(i);for(var s=i.length,r=new vt(i.length+(i.length>>1)),o=0,a=function(h){r[o++]=h},n=0;n<s;++n){if(o+5>r.length){var c=new vt(o+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Qr(r,0,o)}function Wv(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(fh)return fh.decode(i);var s=Gv(i),r=s.s,t=s.r;return t.length&&Gt(8),r}}var Xv=function(i,e){return e+30+Wn(i,e+26)+Wn(i,e+28)},$v=function(i,e,t){var n=Wn(i,e+28),s=Wv(i.subarray(e+46,e+46+n),!(Wn(i,e+8)&2048)),r=e+46+n,o=Dn(i,e+20),a=t&&o==4294967295?qv(i,r):[o,Dn(i,e+24),Dn(i,e+42)],c=a[0],l=a[1],h=a[2];return[Wn(i,e+10),c,l,s,r+Wn(i,e+30)+Wn(i,e+32),h]},qv=function(i,e){for(;Wn(i,e)!=1;e+=4+Wn(i,e+2));return[ah(i,e+12),ah(i,e+4),ah(i,e+20)]},dh=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Gt(9),e+=n+4}return e},_d=function(i,e,t,n,s,r,o,a){var c=n.length,l=t.extra,h=a&&a.length,u=dh(l);Ot(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Gt(10),Ot(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(Ot(i,e,t.crc),Ot(i,e+4,r<0?-r-2:r),Ot(i,e+8,t.size)),Ot(i,e+12,c),Ot(i,e+14,u),e+=16,o!=null&&(Ot(i,e,h),Ot(i,e+6,t.attrs),Ot(i,e+10,o),e+=14),i.set(n,e),e+=c,u)for(var g in l){var y=l[g],m=y.length;Ot(i,e,+g),Ot(i,e+2,m),i.set(y,e+4),e+=4+m}return h&&(i.set(a,e),e+=h),e},Yv=function(i,e,t,n,s){Ot(i,e,101010256),Ot(i,e+8,t),Ot(i,e+10,t),Ot(i,e+12,n),Ot(i,e+16,s)};function gh(i,e){e||(e={});var t={},n=[];Pd(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],c=a[0],l=a[1],h=l.level==0?0:8,u=yd(o),f=u.length,d=l.comment,g=d&&yd(d),y=g&&g.length,m=dh(l.extra);f>65535&&Gt(11);var p=h?zv(c,l):c,_=p.length,x=Fv();x.p(c),n.push(Cd(l,{size:c.length,crc:x.d(),c:p,f:u,m:g,u:f!=o.length||g&&d.length!=y,o:s,compression:h})),s+=30+f+m+_,r+=76+2*(f+m)+(y||0)+_}for(var v=new vt(r+22),M=s,w=r-s,S=0;S<n.length;++S){var u=n[S];_d(v,u.o,u,u.f,u.u,u.c.length);var I=30+u.f.length+dh(u.extra);v.set(u.c,u.o+I),_d(v,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+I+(u.m?u.m.length:0)}return Yv(v,s,n.length,w,M),v}function Id(i,e){for(var t={},n=i.length-22;Dn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Gt(13);var s=Wn(i,n+8);if(!s)return{};var r=Dn(i,n+16),o=r==4294967295||s==65535;if(o){var a=Dn(i,n-12);o=Dn(i,a)==101075792,o&&(s=Dn(i,a+32),r=Dn(i,a+48))}for(var c=e&&e.filter,l=0;l<s;++l){var h=$v(i,r,o),u=h[0],f=h[1],d=h[2],g=h[3],y=h[4],m=h[5],p=Xv(i,m);r=y,(!c||c({name:g,size:f,originalSize:d,compression:u}))&&(u?u==8?t[g]=Hv(i.subarray(p,p+f),{out:new vt(d)}):Gt(14,"unknown compression type "+u):t[g]=Qr(i,p,p+f))}return t}var Te=i=>new DataView(i.buffer,i.byteOffset,i.byteLength);var bt=i=>(i>>>0).toString(16).padStart(8,"0");function ht(i){let e=4294967295,t=new TextEncoder().encode(i);for(let n of t)e=Math.imul(e,33)+n>>>0;return e>>>0}var Dd=i=>ht(i.toLowerCase());function Od(i){let e=new Map;if(!i)return e;let t=-1,n=s=>{for(let r of[ht(s),Dd(s)])e.has(r)||e.set(r,s)};for(let s=0;s<=i.length;s++){let r=s<i.length?i[s]:0;r>=32&&r<=126?t<0&&(t=s):t>=0&&(s-t>=2&&n(String.fromCharCode(...i.subarray(t,s))),t=-1)}return e}function eo(i,e,t,n=0,s=[]){let r=Te(i);for(;e+8<=t;){let o=r.getUint32(e),a=r.getUint32(e+4),c=(o&-2130706433&2147483647)>>>0,l=(o&2147483648)!==0,h=o>>>24&127,u=e+8;if(h){let d=2**h;u=Math.ceil(u/d)*d}s.push({depth:n,rawid:o>>>0,id:c&16777215,off:e,payload:u,size:a}),l&&eo(i,e+8,e+8+a,n+1,s);let f=e+8+a;f&3&&f+8<=t&&(r.getUint32(f)&16777215)>>>12!==27&&(f=f+3&-4),e=f}return s}function Bi(i){let e=new Map;for(let t of eo(i,0,i.length))e.has(t.id)||e.set(t.id,[]),e.get(t.id).push([t.payload,t.size]);return e}function On(i,e,t){let n=Te(i),s=[];for(;e+8<=t;){let r=n.getUint32(e)>>>0,o=n.getUint32(e+4);s.push([r,e+8,o]),e+=8+o,e+=-e&3}return s}function Mt(i,e){let t=8+e.length,n=-t&3,s=new Uint8Array(t+n),r=Te(s);return r.setUint32(0,i>>>0),r.setUint32(4,e.length),s.set(e,8),s}function gt(i){let e=0;for(let s of i)e+=s.length;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.length;return t}function Na(i){let e=Bi(i),t=Te(i),[n,s]=e.get(98307)[0],[r,o]=e.get(98313)[0],a=[],c=[];for(let u=0;u<s/4;u++)a.push(t.getUint32(n+4*u));for(let u=0;u<o/4;u++)c.push(t.getInt32(r+4*u));let l="";if(e.has(98306)){let[u,f]=e.get(98306)[0],d=u;for(;d<u+f&&i[d];)d++;l=new TextDecoder().decode(i.subarray(u,d))}let h=null;if(e.has(98320)){let[u,f]=e.get(98320)[0];if(f===12*a.length){h=[];for(let d=0;d<a.length;d++)h.push([0,1,2].map(g=>t.getFloat32(u+12*d+4*g)))}}return{name:l,hashes:a,parents:c,offsets:h}}function Ft(i){let e=Te(i),t=e.getUint32(4),n=16+t*16,s=[];for(let r=0;r<t;r++){let o=16+16*r,a=e.getUint32(o),c=e.getUint32(o+4),l=e.getUint32(o+8);s.push({hash:a,blob:i.subarray(n+c,n+c+l)})}return s}function ki(i){let e=Te(i);return{mips:e.getUint32(0),fmt:e.getUint32(4),w:e.getUint16(14),h:e.getUint16(16)}}var Ld=i=>[Math.floor((i>>11&31)*255/31),Math.floor((i>>5&63)*255/63),Math.floor((i&31)*255/31)],Ud=(i,e,t)=>Math.min(31,Math.floor((i*31+127)/255))<<11|Math.min(63,Math.floor((e*63+127)/255))<<5|Math.min(31,Math.floor((t*31+127)/255));function Fd(i,e){let t=Ld(i),n=Ld(e);return i>e?[[...t,255],[...n,255],[0,1,2].map(s=>Math.floor((2*t[s]+n[s])/3)).concat(255),[0,1,2].map(s=>Math.floor((t[s]+2*n[s])/3)).concat(255)]:[[...t,255],[...n,255],[0,1,2].map(s=>Math.floor((t[s]+n[s])/2)).concat(255),[0,0,0,0]]}function Nd(i){return i&32768?[Math.floor((i>>10&31)*255/31),Math.floor((i>>5&31)*255/31),Math.floor((i&31)*255/31),255]:[(i>>8&15)*17,(i>>4&15)*17,(i&15)*17,Math.floor((i>>12&7)*255/7)]}function Fn(i){let{fmt:e,w:t,h:n}=ki(i),s=Te(i),r=new Uint8ClampedArray(t*n*4);if(e===8){let o=[];for(let c=0;c<256;c++)o.push(Nd(s.getUint16(i.length-512+2*c)));let a=32;for(let c=0;c<n;c+=4)for(let l=0;l<t;l+=8)for(let h=0;h<4;h++)for(let u=0;u<8;u++){let f=o[i[a++]],d=((c+h)*t+l+u)*4;r.set(f,d)}}else if(e===2){let o=32;for(let a=0;a<n;a+=8)for(let c=0;c<t;c+=8)for(let l of[0,4])for(let h of[0,4]){let u=s.getUint16(o),f=s.getUint16(o+2),d=s.getUint32(o+4);o+=8;let g=Fd(u,f);for(let y=0;y<16;y++){let m=a+l+(y>>2),p=c+h+(y&3);m<n&&p<t&&r.set(g[d>>>30-2*y&3],(m*t+p)*4)}}}else if(e===1){let o=32;for(let a=0;a<n;a+=4)for(let c=0;c<t;c+=4)for(let l=0;l<4;l++)for(let h=0;h<4;h++){let u=Nd(s.getUint16(o));o+=2,a+l<n&&c+h<t&&r.set(u,((a+l)*t+c+h)*4)}}else if(e===3){let o=32;for(let a=0;a<n;a+=4)for(let c=0;c<t;c+=4){for(let l=0;l<16;l++){let h=a+(l>>2),u=c+(l&3);if(h<n&&u<t){let f=(h*t+u)*4;r[f+3]=i[o+2*l],r[f]=i[o+2*l+1],r[f+1]=i[o+32+2*l],r[f+2]=i[o+33+2*l]}}o+=64}}else throw new Error("texture format "+e);return{w:t,h:n,px:r}}var jv=(i,e,t,n)=>n>=224?32768|Math.round(i*31/255)<<10|Math.round(e*31/255)<<5|Math.round(t*31/255):Math.round(n*7/255)<<12|Math.round(i*15/255)<<8|Math.round(e*15/255)<<4|Math.round(t*15/255);function Da(i,e,t,n,s=1){let r=Te(n).getUint32(4);if(r!==1&&r!==3)return to(i,e,t,n,s);let o=[],a=i,c=e,l=t,h=0;for(;h<s&&c>=4&&l>=4;){let d=new Uint8Array(c*l*(r===1?2:4)),g=Te(d),y=0;for(let m=0;m<l;m+=4)for(let p=0;p<c;p+=4)if(r===1)for(let _=0;_<16;_++){let x=((m+(_>>2))*c+p+(_&3))*4;g.setUint16(y,jv(a[x],a[x+1],a[x+2],a[x+3])),y+=2}else{for(let _=0;_<16;_++){let x=((m+(_>>2))*c+p+(_&3))*4;d[y+2*_]=a[x+3],d[y+2*_+1]=a[x],d[y+32+2*_]=a[x+1],d[y+33+2*_]=a[x+2]}y+=64}o.push(d),h++,a=Bd(a,c,l),c>>=1,l>>=1}let u=new Uint8Array(32);u.set(n.subarray(0,32));let f=Te(u);return f.setUint32(0,h),f.setUint16(14,e),f.setUint16(16,t),gt([u,...o])}function Kv(i,e,t){let n=Te(e),s=i.filter(_=>_[3]>=128);if(!s.length){n.setUint16(t,0),n.setUint16(t+2,0),n.setUint32(t+4,4294967295);return}let r=0,o=-1;for(let _=0;_<3;_++){let x=255,v=0;for(let M of s)x=Math.min(x,M[_]),v=Math.max(v,M[_]);v-x>o&&(o=v-x,r=_)}let a=_=>[_[r],_[0]+_[1]+_[2]],c=(_,x)=>{let v=a(_),M=a(x);return v[0]-M[0]||v[1]-M[1]},l=s[0],h=s[0];for(let _ of s)c(_,l)<0&&(l=_),c(_,h)>0&&(h=_);let u=Ud(h[0],h[1],h[2]),f=Ud(l[0],l[1],l[2]),d=s.length<16,g,y;d?[g,y]=f<=u?[f,u]:[u,f]:(u===f&&(f=f>0?f-1:f,u===f&&(u+=1)),[g,y]=u>f?[u,f]:[f,u]);let m=Fd(g,y),p=0;for(let _=0;_<16;_++){let x=i[_],v;if(x[3]<128&&d)v=3;else{let M=d?3:4,w=1/0;v=0;for(let S=0;S<M;S++){let I=(x[0]-m[S][0])**2+(x[1]-m[S][1])**2+(x[2]-m[S][2])**2;I<w&&(w=I,v=S)}}p=(p|v<<30-2*_)>>>0}n.setUint16(t,g),n.setUint16(t+2,y),n.setUint32(t+4,p)}function Bd(i,e,t){let n=e>>1,s=t>>1,r=new Uint8ClampedArray(n*s*4);for(let o=0;o<s;o++)for(let a=0;a<n;a++)for(let c=0;c<4;c++){let l=0;for(let h of[0,1])for(let u of[0,1])l+=i[((2*o+h)*e+2*a+u)*4+c];r[(o*n+a)*4+c]=l>>2}return r}function to(i,e,t,n,s=1){let r=[],o=i,a=e,c=t,l=0;for(;l<s&&c>=8&&a>=8;){let f=new Uint8Array(a/8*(c/8)*32),d=0;for(let g=0;g<c;g+=8)for(let y=0;y<a;y+=8)for(let m of[0,4])for(let p of[0,4]){let _=[];for(let x=0;x<16;x++){let v=((g+m+(x>>2))*a+y+p+(x&3))*4;_.push([o[v],o[v+1],o[v+2],o[v+3]])}Kv(_,f,d),d+=8}r.push(f),l++,o=Bd(o,a,c),a>>=1,c>>=1}let h=new Uint8Array(32);h.set(n.subarray(0,32));let u=Te(h);return u.setUint32(0,l),u.setUint32(4,2),u.setUint16(14,e),u.setUint16(16,t),gt([h,...r])}var Zv=(()=>{let i=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t=t&1?3988292384^t>>>1:t>>>1;i[e]=t>>>0}return i})();function Jv(i,e=4294967295){for(let t of i)e=Zv[(e^t)&255]^e>>>8;return(e^4294967295)>>>0}function ls(i,e,t){let n=new Uint8Array((e*4+1)*t);for(let a=0;a<t;a++)n[a*(e*4+1)]=0,n.set(i.subarray(a*e*4,(a+1)*e*4),a*(e*4+1)+1);let s=(a,c)=>{let l=new TextEncoder().encode(a),h=new Uint8Array(12+c.length),u=Te(h);return u.setUint32(0,c.length),h.set(l,4),h.set(c,8),u.setUint32(8+c.length,Jv(gt([l,c]))),h},r=new Uint8Array(13),o=Te(r);return o.setUint32(0,e),o.setUint32(4,t),r.set([8,6,0,0,0],8),gt([new Uint8Array([137,80,78,71,13,10,26,10]),s("IHDR",r),s("IDAT",Ua(n,{level:6})),s("IEND",new Uint8Array(0))])}function Oa(i){let e=Te(i);if(e.getUint32(0)!==2303741511)throw new Error("not a PNG");let t=8,n=0,s=0,r=8,o=6,a=0,c=null,l=null,h=[];for(;t<i.length;){let x=e.getUint32(t),v=String.fromCharCode(...i.subarray(t+4,t+8)),M=i.subarray(t+8,t+8+x);if(v==="IHDR")n=Te(M).getUint32(0),s=Te(M).getUint32(4),r=M[8],o=M[9],a=M[12];else if(v==="PLTE")c=M;else if(v==="tRNS")l=M;else if(v==="IDAT")h.push(M);else if(v==="IEND")break;t+=12+x}if(a)throw new Error("interlaced PNGs are not supported: save it without interlacing");if(r!==8&&r!==16&&!(o===3&&r<=8))throw new Error("PNG bit depth "+r+" not supported");let u={0:1,2:3,3:1,4:2,6:4}[o],f=Math.max(1,u*r>>3),d=Math.ceil(n*u*r/8),g=tr(gt(h)),y=new Uint8Array(d*s),m=new Uint8Array(d);for(let x=0;x<s;x++){let v=g[x*(d+1)],M=g.subarray(x*(d+1)+1,(x+1)*(d+1)),w=new Uint8Array(d);for(let S=0;S<d;S++){let I=S>=f?w[S-f]:0,b=m[S],A=S>=f?m[S-f]:0,D=M[S];if(v===1)D+=I;else if(v===2)D+=b;else if(v===3)D+=I+b>>1;else if(v===4){let F=I+b-A,ee=Math.abs(F-I),P=Math.abs(F-b),B=Math.abs(F-A);D+=ee<=P&&ee<=B?I:P<=B?b:A}w[S]=D}y.set(w,x*d),m=w}let p=new Uint8ClampedArray(n*s*4),_=(x,v,M)=>{if(r===16)return y[x*d+(v*u+M)*2];if(r===8)return y[x*d+v*u+M];let w=v*r;return y[x*d+(w>>3)]>>8-r-(w&7)&(1<<r)-1};for(let x=0;x<s;x++)for(let v=0;v<n;v++){let M=(x*n+v)*4;if(o===6)for(let w=0;w<4;w++)p[M+w]=_(x,v,w);else if(o===2){for(let w=0;w<3;w++)p[M+w]=_(x,v,w);p[M+3]=255}else if(o===0){let w=_(x,v,0);p[M]=p[M+1]=p[M+2]=w,p[M+3]=255}else if(o===4){let w=_(x,v,0);p[M]=p[M+1]=p[M+2]=w,p[M+3]=_(x,v,1)}else if(o===3){let w=_(x,v,0);p[M]=c[3*w],p[M+1]=c[3*w+1],p[M+2]=c[3*w+2],p[M+3]=l&&w<l.length?l[w]:255}}return{w:n,h:s,px:p}}function Fa(i,e,t,n,s){let r=new Uint8ClampedArray(n*s*4);for(let o=0;o<s;o++){let a=(o+.5)*t/s-.5,c=Math.max(0,Math.min(t-1,Math.floor(a))),l=Math.min(t-1,c+1),h=Math.min(1,Math.max(0,a-c));for(let u=0;u<n;u++){let f=(u+.5)*e/n-.5,d=Math.max(0,Math.min(e-1,Math.floor(f))),g=Math.min(e-1,d+1),y=Math.min(1,Math.max(0,f-d));for(let m=0;m<4;m++){let p=(_,x)=>i[(_*e+x)*4+m];r[(o*n+u)*4+m]=Math.round((p(c,d)*(1-y)+p(c,g)*y)*(1-h)+(p(l,d)*(1-y)+p(l,g)*y)*h)}}}return r}function no(i){let e=[];for(let t=0;t+2<i.length;t++){let n=i[t],s=i[t+1],r=i[t+2];n!==s&&s!==r&&n!==r&&e.push(t%2===0?[n,s,r]:[s,n,r])}return e}function hs(i){let e=Bi(i),t=Te(i),[n,s]=e.get(110596)[0],[r]=e.get(110597)[0],[o]=e.get(110598)[0],[a]=e.get(110599)[0],c=e.has(110614)?e.get(110614)[0][0]:null,l=(e.get(110603)||[]).map(([f,d])=>{let g=[];for(let y=0;y<d/4;y++)g.push(t.getUint32(f+4*y));return g}),h=new Map;if(e.has(110602)){let[f,d]=e.get(110602)[0];for(let g=0;g<d/68;g++){let y=f+g*68,m=new Float64Array(16);for(let p=0;p<16;p++)m[p]=t.getFloat32(y+4+4*p);h.set(t.getUint32(y),m)}}let u=[];for(let f=0;f<s/48;f++){let d=n+f*48,g=t.getUint32(d),y=t.getUint32(d+4),m=t.getUint16(d+8),p=i[d+10],_=i[d+11],x=t.getUint32(d+12),v=t.getUint32(d+32),M=[];for(let S=0;S<y;S++)M.push(t.getUint16(a+g+2*S));let w={prim:p,idx:M,nv:m,uvs:[],map:l[f]||[],morphs:new Map};for(let S=0;S<_;S++){let I=r+x+S*8,b=t.getUint32(I),A=i[I+5],D=i[I+6],F=o+b;if(D===1||D===2){let ee=new Float64Array(m*3);if(A===12)for(let P=0;P<m*3;P++)ee[P]=t.getFloat32(F+4*P);else if(A===3)for(let P=0;P<m*3;P++)ee[P]=t.getInt8(F+P)/64;else if(A===6)for(let P=0;P<m*3;P++)ee[P]=t.getInt16(F+2*P)/16384;w[D===1?"pos":"nrm"]=ee,D===2&&(w.nrmStride=A)}else if(D===3)w.col=i.slice(F,F+m*4);else if(D===4){let ee=new Float64Array(m*2);for(let P=0;P<m*2;P++)ee[P]=t.getInt16(F+2*P)/1024;w.uvs.push(ee)}else if(D===5){let ee=new Float64Array(m*4);for(let P=0;P<m*4;P++)ee[P]=t.getFloat32(F+4*P);w.bw=ee}else D===7&&(w.bi=i.slice(F,F+m*4))}w.tex=c!==null?t.getUint32(c+v):0,u.push(w)}if(e.has(110604)){let[f]=e.get(110604)[0],d=t.getUint32(f);if(d){let g=f+4+4*d,y=t.getUint32(g),m=t.getUint32(g+4);g+=8;for(let p=0;p<m;p++)for(let _=0;_<d;_++){let x=t.getUint32(g);if(g+=4,x&&p<u.length){let v=new Int32Array(x),M=new Float64Array(x*3);for(let w=0;w<x;w++){let S=g+w*y;for(let I=0;I<3;I++)M[w*3+I]=t.getFloat32(S+4*I);v[w]=t.getUint32(S+12)}u[p].morphs.set(_,{vi:v,dl:M})}g+=x*y}}}return{packets:u,bones:h}}var kd=()=>Float64Array.from([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Ba(i,e){let t=new Float64Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++){let r=0;for(let o=0;o<4;o++)r+=i[n*4+o]*e[o*4+s];t[n*4+s]=r}return t}function xh(i){let e=[];for(let n=0;n<4;n++)e.push([...i.slice(n*4,n*4+4),...[0,1,2,3].map(s=>n===s?1:0)]);for(let n=0;n<4;n++){let s=n;for(let o=n+1;o<4;o++)Math.abs(e[o][n])>Math.abs(e[s][n])&&(s=o);[e[n],e[s]]=[e[s],e[n]];let r=e[n][n];e[n]=e[n].map(o=>o/r);for(let o=0;o<4;o++)if(o!==n&&e[o][n]!==0){let a=e[o][n];e[o]=e[o].map((c,l)=>c-a*e[n][l])}}let t=new Float64Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)t[n*4+s]=e[n][4+s];return t}var zd=Float64Array.from([1,0,0,0,0,0,-1,0,0,1,0,0,0,0,0,1]);function Hd(i){let e=Float64Array.from(i);e[3]=e[7]=e[11]=0,e[15]=1;for(let t=0;t<16;t++)Math.abs(e[t])<1e-9&&(e[t]=0);return e}function Vd({rlg:i,rlts:e,shier:t,names:n=new Map,name:s="model",shierName:r="skeleton.shier",swaps:o=new Map}){let{packets:a,bones:c}=hs(i),l=Na(t),h=l.hashes,u=l.parents,f=l.offsets,d=[],g=new Map(h.map((k,oe)=>[k,oe])),y=[...c.keys()].filter(k=>!g.has(k));if(y.length)throw new Error("This skeleton does not fit the model: bones "+y.map(bt).join(", ")+" are missing.");let m=h.map(k=>c.has(k)?c.get(k):null);for(let k=0;k<h.length;k++)if(m[k]===null){let oe=kd();f&&(oe[12]=f[k][0],oe[13]=f[k][1],oe[14]=f[k][2]),m[k]=u[k]>=0?Ba(oe,m[u[k]]):oe}m=m.map(k=>Ba(k,zd));let p=new Map;for(let k of e)for(let{hash:oe,blob:xe}of Ft(k))p.set(oe,xe);let _=a.map(k=>k.tex);for(let k of a){o.has(k.tex)&&p.has(o.get(k.tex))&&(k.tex=o.get(k.tex));let oe=k.tex;if(!p.has(oe)&&(n.get(oe)||"").includes("/")){let xe=n.get(oe).split("/").pop(),ye=ht(xe+"/"+xe);p.has(ye)&&(k.tex=ye)}!p.has(k.tex)&&k.tex&&d.push(`texture ${n.get(k.tex)||bt(k.tex)} is not in the texture files: that piece is untextured`)}let x=[];for(let k of a)p.has(k.tex)&&!x.includes(k.tex)&&x.push(k.tex);let v=[],M=0,w=[],S=[],I=(k,oe)=>{let xe=-M&3;xe&&(v.push(new Uint8Array(xe)),M+=xe);let ye={buffer:0,byteOffset:M,byteLength:k.byteLength};return oe&&(ye.target=oe),w.push(ye),v.push(new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),M+=k.byteLength,w.length-1},b=(k,oe,xe,ye,ve,Oe)=>{let W=I(k,ve),Ze=k.length/oe,Me={bufferView:W,componentType:xe,count:Ze,type:ye};if(Oe){let Ce=Array(oe).fill(1/0),we=Array(oe).fill(-1/0);for(let je=0;je<Ze;je++)for(let Ae=0;Ae<oe;Ae++){let C=k[je*oe+Ae];C<Ce[Ae]&&(Ce[Ae]=C),C>we[Ae]&&(we[Ae]=C)}Me.min=Ce,Me.max=we}return S.push(Me),S.length-1},A=[],D=[],F=[],ee=new Map,P=[];for(let k of x){let{w:oe,h:xe,px:ye}=Fn(p.get(k)),ve=ls(ye,oe,xe),Oe=n.get(k)||bt(k);P.push({hash:k,name:Oe,png:ve,w:oe,h:xe}),A.push({bufferView:I(ve),mimeType:"image/png",name:Oe.replace(/\//g,"_")}),D.push({source:A.length-1,sampler:0}),F.push({name:Oe,pbrMetallicRoughness:{baseColorTexture:{index:D.length-1},metallicFactor:0,roughnessFactor:1},alphaMode:"MASK",alphaCutoff:.5,extras:{texture_hash:bt(k)}}),ee.set(k,F.length-1)}for(let k of a)ee.has(k.tex)||(F.push({name:n.get(k.tex)||bt(k.tex),extras:{texture_hash:bt(k.tex)},pbrMetallicRoughness:{baseColorFactor:[.8,.8,.8,1]}}),ee.set(k.tex,F.length-1));let B=(k,oe,xe,ye)=>{for(let ve=0;ve<oe;ve++){let Oe=k[3*ve],W=k[3*ve+2],Ze=-k[3*ve+1];if(ye){let Me=Math.max(Math.hypot(Oe,W,Ze),1e-9);Oe/=Me,W/=Me,Ze/=Me}xe[3*ve]=Oe,xe[3*ve+1]=W,xe[3*ve+2]=Ze}return xe},G=[],X={tris:0,verts:0,weighted:0};a.forEach((k,oe)=>{let xe=k.prim===1?no(k.idx):(()=>{let Me=[];for(let Ce=0;Ce+2<k.idx.length;Ce+=3)Me.push(k.idx.slice(Ce,Ce+3));return Me})();if(!xe.length)return;let ye=k.nv,ve={};if(ve.POSITION=b(B(k.pos,ye,new Float32Array(ye*3)),3,5126,"VEC3",34962,!0),k.nrm&&(ve.NORMAL=b(B(k.nrm,ye,new Float32Array(ye*3),!0),3,5126,"VEC3",34962)),k.uvs.forEach((Me,Ce)=>{ve["TEXCOORD_"+Ce]=b(Float32Array.from(Me),2,5126,"VEC2",34962)}),k.bi&&k.bw&&k.map.length){let Me=new Uint16Array(ye*4),Ce=new Float32Array(ye*4);for(let we=0;we<ye;we++){let je=0;for(let Ae=0;Ae<4;Ae++)k.bw[we*4+Ae]>0&&(Me[we*4+Ae]=g.get(k.map[k.bi[we*4+Ae]]),je+=k.bw[we*4+Ae]);for(let Ae=0;Ae<4;Ae++)Ce[we*4+Ae]=k.bw[we*4+Ae]>0?je>0?k.bw[we*4+Ae]/je:k.bw[we*4+Ae]:0}ve.JOINTS_0=b(Me,4,5123,"VEC4",34962),ve.WEIGHTS_0=b(Ce,4,5126,"VEC4",34962),X.weighted++}let Oe=b(Uint16Array.from(xe.flat()),1,5123,"SCALAR",34963),W={attributes:ve,indices:Oe,mode:4,material:ee.get(k.tex)},Ze={name:"piece"+String(oe).padStart(2,"0"),primitives:[W]};if(k.morphs.size){let Me=[],Ce=[];for(let we of[...k.morphs.keys()].sort((je,Ae)=>je-Ae)){let{vi:je,dl:Ae}=k.morphs.get(we),C=new Float64Array(ye*3);for(let E=0;E<je.length;E++)for(let Y=0;Y<3;Y++)C[je[E]*3+Y]=Ae[E*3+Y];Me.push({POSITION:b(B(C,ye,new Float32Array(ye*3)),3,5126,"VEC3",34962,!0)}),Ce.push("morph"+String(we).padStart(2,"0"))}W.targets=Me,Ze.weights=Me.map(()=>0),Ze.extras={targetNames:Ce}}G.push(Ze),X.tris+=xe.length,X.verts+=ye});let q=[],V=[];h.forEach((k,oe)=>{let xe=Hd(u[oe]>=0?Ba(m[oe],xh(m[u[oe]])):m[oe]);q.push({name:n.get(k)||bt(k),matrix:Array.from(xe),extras:{hash:bt(k)}}),V.push(q.length-1)}),h.forEach((k,oe)=>{let xe=[];for(let ye=0;ye<h.length;ye++)u[ye]===oe&&xe.push(V[ye]);xe.length&&(q[V[oe]].children=xe)});let se=new Float32Array(h.length*16);m.forEach((k,oe)=>se.set(Hd(xh(k)),oe*16));let re=h.map((k,oe)=>oe).filter(k=>u[k]<0).map(k=>V[k]),ge={name:l.name,joints:V,inverseBindMatrices:b(se,16,5126,"MAT4"),skeleton:re[0]},Z=G.map((k,oe)=>(q.push({name:k.name,mesh:oe,skin:0}),q.length-1));q.push({name:s,children:re,extras:{source:"Strikers Model Studio",skeleton:r}});let ne={asset:{version:"2.0",generator:"Strikers Model Studio (rlg2glb)"},scene:0,scenes:[{nodes:[q.length-1,...Z]}],nodes:q,meshes:G,skins:[ge],materials:F,accessors:S,bufferViews:w,buffers:[{byteLength:0}]};A.length&&Object.assign(ne,{images:A,textures:D,samplers:[{magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497}]});let ce=-M&3;return ce&&(v.push(new Uint8Array(ce)),M+=ce),ne.buffers[0].byteLength=M,{glb:yh(ne,gt(v)),stats:{...X,pieces:G.length,bones:h.length,named:h.filter(k=>n.has(k)).length,textures:A.length},notes:d,pngs:P,origTex:_}}function yh(i,e){let t=new TextEncoder().encode(JSON.stringify(i)),n=-t.length&3;n&&(t=gt([t,new Uint8Array(n).fill(32)]));let s=new Uint8Array(20),r=new DataView(s.buffer);r.setUint32(0,1179937895,!0),r.setUint32(4,2,!0),r.setUint32(8,20+t.length+8+e.length,!0),r.setUint32(12,t.length,!0),r.setUint32(16,1313821514,!0);let o=new Uint8Array(8),a=new DataView(o.buffer);return a.setUint32(0,e.length,!0),a.setUint32(4,5130562,!0),gt([s,t,o,e])}var Qv=i=>{let e=i.indexOf(Math.min(...i));return[...i.slice(e),...i.slice(0,e)]},Wd=i=>Qv(i).join(",");function eb(i,e=0){let t=[];for(let n=0;n+2<i.length;n++){let s=i[n],r=i[n+1],o=i[n+2];s!==r&&r!==o&&s!==o&&t.push(Wd((n+e)%2===0?[s,r,o]:[r,s,o]))}return t.sort().join("|")}function tb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Gd(i,e){let t=(d,g)=>d*65536+g,n=new Map;i.forEach(([d,g,y],m)=>{for(let p of[t(d,g),t(g,y),t(y,d)]){let _=n.get(p);_?_.push(m):n.set(p,[m])}});let s=new Uint8Array(i.length),r=(d,g)=>{let y=n.get(t(d,g));if(y){for(let m of y)if(!s[m])return m}return-1},o=(d,g,y)=>{let m=i[d];return m[0]!==g&&m[0]!==y?m[0]:m[1]!==g&&m[1]!==y?m[1]:m[2]};function a(d,g,y){let m=i[d],p=[m[g],m[(g+1)%3],m[(g+2)%3]],_=[],x=[d];for(s[d]=1;;){let M=p[p.length-2],w=p[p.length-1],S=p.length%2?r(w,M):r(M,w);if(S<0)break;p.push(o(S,M,w)),x.push(S),s[S]=1}let v=0;for(;;){let M=_.length?_[_.length-1]:p[0],w=_.length>1?_[_.length-2]:_.length?p[0]:p[1],S=v?r(M,w):r(w,M);if(S<0)break;_.push(o(S,M,w)),x.push(S),s[S]=1,v^=1}if(!y)for(let M of x)s[M]=0;return{seq:_.reverse().concat(p),par:v,got:x}}let c=d=>{let g=i[d];return(r(g[1],g[0])>=0)+(r(g[2],g[1])>=0)+(r(g[0],g[2])>=0)},l=(d,g,y)=>d===g||g===y||d===y;function h(d,g,y){if(!d.length)return y===0?[]:null;let m=d[d.length-1],p=d.length>1?d[d.length-2]:null,_=[[m,g[0]]];g[0]===m&&_.push([m],[]);let x=null;for(let v of _)for(let M of[[],[g[0]]]){if((d.length+v.length+M.length-y)%2!==0)continue;let S=v.concat(M),I=(p!==null?[p]:[]).concat([m],S,g.slice(0,2)),b=!0,A=0,D=(p!==null?1:0)+1+S.length;for(let F=A;F<D&&b;F++)F+2<I.length&&!l(I[F],I[F+1],I[F+2])&&(b=!1);b&&(!x||S.length<x.length)&&(x=S)}return x}let u=[],f=new Set(i.map((d,g)=>g));for(;f.size;){let d=u.length?u[u.length-1]:null,g=9,y=[];for(let x of f){let v=c(x);v<g?(g=v,y=[x]):v===g&&y.push(x)}if(y.sort((x,v)=>x-v),d!==null){let x=y.filter(v=>i[v].includes(d));x.length&&(y=x)}y=y.slice(0,8);let m=e?y[Math.floor(e()*y.length)]:y[0],p=null;for(let x=0;x<3;x++){let{seq:v,par:M,got:w}=a(m,x,!1);for(let[S,I]of[[v,M],[v.slice().reverse(),(M+v.length)%2]]){let b=h(u,S,I);if(b){let A=[-w.length,b.length,x,S,b];(!p||A[0]<p[0]||A[0]===p[0]&&A[1]<p[1])&&(p=A)}}}let{got:_}=a(m,p[2],!0);for(let x of p[4])u.push(x);for(let x of p[3])u.push(x);for(let x of _)f.delete(x)}return u}function Xd(i,e=6){i=i.filter(n=>new Set(n).size===3);let t=Gd(i,null);if(i.length>2)for(let n=0;n<e;n++){let s=Gd(i,tb(n+1));s.length<t.length&&(t=s)}if(eb(t)!==i.map(Wd).sort().join("|"))throw new Error("strip check failed");return t}var nr=class{constructor(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(t.getUint32(0,!0)!==1179937895)throw new Error("Not a .glb file: in Blender, export as glTF Binary (.glb).");let n=12;for(this.bin=new Uint8Array(0);n<e.length;){let s=t.getUint32(n,!0),r=t.getUint32(n+4,!0);r===1313821514?this.j=JSON.parse(new TextDecoder().decode(e.subarray(n+8,n+8+s))):r===5130562&&(this.bin=e.subarray(n+8,n+8+s)),n+=8+s}}view(e){let t=this.j.bufferViews[e],n=t.byteOffset||0;return{raw:this.bin.subarray(n,n+t.byteLength),stride:t.byteStride}}acc(e){let t=this.j.accessors[e],n={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array}[t.componentType],s={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16}[t.type],r=t.count,o=n.BYTES_PER_ELEMENT,a=new Float64Array(r*s),c=(l,h,u)=>{let f=new DataView(l.buffer,l.byteOffset+h,o);switch(t.componentType){case 5120:return f.getInt8(0);case 5121:return f.getUint8(0);case 5122:return f.getInt16(0,!0);case 5123:return f.getUint16(0,!0);case 5125:return f.getUint32(0,!0);default:return f.getFloat32(0,!0)}};if(t.bufferView!==void 0){let{raw:l,stride:h}=this.view(t.bufferView),u=h||o*s,f=t.byteOffset||0;for(let d=0;d<r;d++)for(let g=0;g<s;g++)a[d*s+g]=c(l,f+d*u+g*o)}if(t.sparse){let l=t.sparse,h=l.count,u=l.indices.componentType,f={5121:1,5123:2,5125:4}[u],d=this.view(l.indices.bufferView).raw,g=l.indices.byteOffset||0,y=this.view(l.values.bufferView).raw,m=l.values.byteOffset||0,p=new DataView(d.buffer,d.byteOffset,d.byteLength);for(let _=0;_<h;_++){let x=f===1?p.getUint8(g+_):f===2?p.getUint16(g+2*_,!0):p.getUint32(g+4*_,!0);for(let v=0;v<s;v++)a[x*s+v]=c(y,m+(_*s+v)*o)}}if(t.normalized){let l={5121:255,5123:65535,5120:127,5122:32767}[t.componentType];for(let h=0;h<a.length;h++)a[h]/=l}return{data:a,n:r,nc:s}}worldMatrices(){let e=this.j.nodes||[],t=e.map(a=>{if(a.matrix){let _=a.matrix,x=new Float64Array(16);for(let v=0;v<4;v++)for(let M=0;M<4;M++)x[v*4+M]=_[M*4+v];return x}let[c,l,h]=a.translation||[0,0,0],[u,f,d,g]=a.rotation||[0,0,0,1],[y,m,p]=a.scale||[1,1,1];return Float64Array.from([(1-2*(f*f+d*d))*y,2*(u*f-d*g)*m,2*(u*d+f*g)*p,c,2*(u*f+d*g)*y,(1-2*(u*u+d*d))*m,2*(f*d-u*g)*p,l,2*(u*d-f*g)*y,2*(f*d+u*g)*m,(1-2*(u*u+f*f))*p,h,0,0,0,1])}),n=new Map;e.forEach((a,c)=>(a.children||[]).forEach(l=>n.set(l,c)));let s=new Array(e.length).fill(null),r=(a,c)=>{let l=new Float64Array(16);for(let h=0;h<4;h++)for(let u=0;u<4;u++){let f=0;for(let d=0;d<4;d++)f+=a[h*4+d]*c[d*4+u];l[h*4+u]=f}return l},o=a=>(s[a]||(s[a]=n.has(a)?r(o(n.get(a)),t[a]):t[a]),s[a]);return e.forEach((a,c)=>o(c)),{world:s,parent:n,mm:r}}};function $d(i,e,t){let n=Ft(i),s=new Map(n.map(m=>[m.hash,m.blob])),r=n.map(m=>m.hash),o=[];for(let[m,p]of e){let _=s.get(m),{w:x,h:v,px:M}=p;if(x%8||v%8){let b=Math.max(8,x-x%8),A=Math.max(8,v-v%8);M=Fa(M,x,v,b,A),x=b,v=A}if(_){let b=ki(_);if(b.w===x&&b.h===v){let A=Fn(_).px,D=0,F=0,ee=0;for(let P=0;P<x*v;P++){let B=A[4*P+3]>127,G=M[4*P+3]>127;if(B===G&&ee++,B||G){D++;for(let X=0;X<3;X++)F+=Math.abs(A[4*P+X]-M[4*P+X])}}if((D?F/(3*D):0)<1.5&&ee/(x*v)>.999)continue}}let w=_||(n.find(b=>ki(b.blob).fmt===2)||(t||[]).find(b=>ki(b.blob).fmt===2)).blob,S=1,I=Math.min(x,v);for(;I>8;)I=I>>1,S++;_&&(S=Math.min(S,Math.max(1,ki(_).mips))),s.set(m,(_?Da:to)(M,x,v,w.subarray(0,32),S)),r.includes(m)||r.push(m),o.push({hash:m,w:x,h:v})}if(!o.length)return{out:i,reencoded:o};let a=Te(i),c=a.getUint32(4),l=[];for(let m=0;m<c;m++)l.push([a.getUint32(16+16*m),a.getUint32(20+16*m)]);let h=new Set(l.map(m=>m[0])),u=l.slice().sort((m,p)=>m[1]-p[1]).map(m=>m[0]).concat(r.filter(m=>!h.has(m))),f=new io,d=new Map;for(let m of u)f.align(32),d.set(m,f.length),f.bytes(s.get(m));let g=new io;for(let m of r)g.u32(m,d.get(m),s.get(m).length,0);let y=new io;return y.bytes(i.subarray(0,4)),y.u32(r.length),y.bytes(i.subarray(8,16)),{out:gt([y.out(),g.out(),f.out()]),reencoded:o}}var io=class{constructor(){this.buf=new Uint8Array(65536),this.length=0,this.dv=new DataView(this.buf.buffer)}need(e){if(this.length+e>this.buf.length){let t=this.buf.length;for(;t<this.length+e;)t*=2;let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.length)),this.buf=n,this.dv=new DataView(n.buffer)}}u32(...e){this.need(4*e.length);for(let t of e)this.dv.setUint32(this.length,t>>>0),this.length+=4}u16(...e){this.need(2*e.length);for(let t of e)this.dv.setUint16(this.length,t),this.length+=2}i16(...e){this.need(2*e.length);for(let t of e)this.dv.setInt16(this.length,t),this.length+=2}f32(...e){this.need(4*e.length);for(let t of e)this.dv.setFloat32(this.length,t),this.length+=4}bytes(e){this.need(e.length),this.buf.set(e,this.length),this.length+=e.length}align(e){let t=-this.length%e,n=t<0?t+e:t;n&&this.bytes(new Uint8Array(n))}out(){return this.buf.slice(0,this.length)}};function ir(i){let e=Te(i).getUint32(0),t=tr(i.subarray(4));if(t.length!==e)throw new Error(`size ${t.length}, header says ${e}`);return t}function so(i){let e=Ua(i,{level:9}),t=new Uint8Array(4+e.length);return Te(t).setUint32(0,i.length),t.set(e,4),t}function zi(i,e=new Map){let t=ir(i),n=eo(t,0,t.length),s=n.find(a=>a.id===147712),r=s?t.subarray(s.payload,s.payload+s.size):null,o=n.filter(a=>a.rawid===2147594240).map(a=>{let c=t.subarray(a.off,a.off+8+a.size),l=Bi(c),h=l.has(110595)?Te(c).getUint32(l.get(110595)[0][0]):0,u=l.has(110594)?[...Array(16)].map((g,y)=>Te(c).getFloat32(l.get(110594)[0][0]+4*y)):null,f=e.get(h)||bt(h),d=[];if(l.has(110595)){let[g,y]=l.get(110595)[0],m=0;for(let p=g;p+12<=g+y;p+=12){let _=Te(c).getUint32(p+4);d.push({hash:Te(c).getUint32(p),first:m,count:_}),m+=_}}return{id:h,objects:d,name:f,short:f.replace(/^_[^/]+\//,"").replace(/\/[^/]+$/,g=>f.split("/").length>2?"":g),off:a.off,size:a.size,rlg:c,ref:u}});return{tmp:t,textures:r,models:o}}function sr(i){if(i.length<36||i[0]!==95||i[1]!==108||i[2]!==102||i[3]!==105)return null;let e=Te(i),t=e.getUint32(8),n=[];for(let s=0;s<t&&36+8*s+8<=i.length;s++)n.push({hash:e.getUint32(36+8*s),seconds:e.getFloat32(40+8*s)});return{frames:n}}function _h({world:i,names:e=new Map,only:t=null}){let n=new Map;if(i.textures)for(let{hash:w,blob:S}of Ft(i.textures))n.set(w,S);let s=[],r=0,o=[],a=[],c=(w,S)=>{let I=-r&3;I&&(s.push(new Uint8Array(I)),r+=I);let b={buffer:0,byteOffset:r,byteLength:w.byteLength};return S&&(b.target=S),o.push(b),s.push(new Uint8Array(w.buffer,w.byteOffset,w.byteLength)),r+=w.byteLength,o.length-1},l=(w,S,I,b,A,D,F)=>{let ee=c(w,A),P=w.length/S,B={bufferView:ee,componentType:I,count:P,type:b};if(F&&(B.normalized=!0),D){let G=Array(S).fill(1/0),X=Array(S).fill(-1/0);for(let q=0;q<P;q++)for(let V=0;V<S;V++){let se=w[q*S+V];se<G[V]&&(G[V]=se),se>X[V]&&(X[V]=se)}B.min=G,B.max=X}return a.push(B),a.length-1},h=[],u=[],f=[],d=new Map,g={pieces:0,tris:0,verts:0,textures:0,models:0},y=w=>{if(d.has(w))return d.get(w);let S=e.get(w)||bt(w),I={name:S,extras:{texture_hash:bt(w)},pbrMetallicRoughness:{metallicFactor:0,roughnessFactor:1},alphaMode:"MASK",alphaCutoff:.5,doubleSided:!1},b=n.get(w),A=b&&sr(b);if(A&&A.frames.length&&n.has(A.frames[0].hash)&&(b=n.get(A.frames[0].hash)),b)try{let D=Fn(b),F=0;for(let ee=3;ee<D.px.length;ee+=4)D.px[ee]>12&&D.px[ee]<243&&F++;F>D.px.length/4*.1&&(I.alphaMode="BLEND",delete I.alphaCutoff),h.push({bufferView:c(ls(D.px,D.w,D.h)),mimeType:"image/png",name:S.replace(/\//g,"_")}),u.push({source:h.length-1,sampler:0}),I.pbrMetallicRoughness.baseColorTexture={index:u.length-1}}catch{I.pbrMetallicRoughness.baseColorFactor=[.8,.8,.8,1]}else I.pbrMetallicRoughness.baseColorFactor=[.8,.8,.8,1];return f.push(I),d.set(w,f.length-1),f.length-1},m=(w,S,I)=>{let b=new Float32Array(S*3);for(let A=0;A<S;A++){let D=w[3*A],F=w[3*A+2],ee=-w[3*A+1];if(I){let P=Math.hypot(D,F,ee);P<1e-6?(D=0,F=1,ee=0):(D/=P,F/=P,ee/=P)}b[3*A]=D,b[3*A+1]=F,b[3*A+2]=ee}return b},p=[],_=[],x=[];i.models.forEach((w,S)=>{if(t&&!t.includes(S))return;let{packets:I}=hs(w.rlg),b=[];I.forEach((A,D)=>{let F=A.prim===1?no(A.idx):(()=>{let G=[];for(let X=0;X+2<A.idx.length;X+=3)G.push(A.idx.slice(X,X+3));return G})();if(!F.length)return;let ee=A.nv,P={POSITION:l(m(A.pos,ee),3,5126,"VEC3",34962,!0)};A.nrm&&(P.NORMAL=l(m(A.nrm,ee,!0),3,5126,"VEC3",34962)),A.uvs.forEach((G,X)=>{P["TEXCOORD_"+X]=l(Float32Array.from(G),2,5126,"VEC2",34962)}),A.col&&(P.COLOR_0=l(Uint8Array.from(A.col),4,5121,"VEC4",34962,!1,!0));let B=l(ee>65535?Uint32Array.from(F.flat()):Uint16Array.from(F.flat()),1,ee>65535?5125:5123,"SCALAR",34963);p.push({name:`m${S}_piece${String(D).padStart(3,"0")}`,primitives:[{attributes:P,indices:B,mode:4,material:y(A.tex)}]}),_.push({name:p[p.length-1].name,mesh:p.length-1}),b.push(_.length-1),g.pieces++,g.tris+=F.length,g.verts+=ee}),_.push({name:`model${S}_${w.short||w.name}`,children:b,extras:{model_id:bt(w.id),model:w.name}}),x.push(_.length-1),g.models++}),_.push({name:"stadium",children:x,matrix:[1,0,0,0,0,0,-1,0,0,1,0,0,0,0,0,1].map((w,S)=>w)}),_[_.length-1].matrix=void 0;let v={asset:{version:"2.0",generator:"Strikers Stadium Studio"},scene:0,scenes:[{nodes:[_.length-1]}],nodes:_,meshes:p,materials:f,accessors:a,bufferViews:o,buffers:[{byteLength:0}]};h.length&&Object.assign(v,{images:h,textures:u,samplers:[{magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497}]});let M=-r&3;return M&&(s.push(new Uint8Array(M)),r+=M),v.buffers[0].byteLength=r,g.textures=h.length,{glb:yh(v,gt(s)),stats:g}}function qd(i,e){let[t,n,s]=On(i,0,i.length)[0],r=On(i,n,n+s).map(([o,a,c])=>Mt(o,o===147712?e:i.subarray(a,a+c)));return Mt(t,gt(r))}function vh(i,e){let{packets:t}=hs(i.models[0].rlg),n=new Map(Ft(i.textures).map(f=>[f.hash,f.blob])),s=new Map;for(let f of t){let d=e.get(f.tex)||"";if(!/\/field\d+$/i.test(d)||!n.has(f.tex)||!f.uvs.length)continue;let g=s.get(f.tex)||{hash:f.tex,name:d,x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,pts:[]};for(let y=0;y<f.nv;y++){let m=f.pos[3*y],p=f.pos[3*y+1];g.x0=Math.min(g.x0,m),g.x1=Math.max(g.x1,m),g.y0=Math.min(g.y0,p),g.y1=Math.max(g.y1,p),g.pts.push([m,p,f.uvs[0][2*y],f.uvs[0][2*y+1]])}s.set(f.tex,g)}if(s.size<1)return null;let r=(f,d)=>{let g=[[0,0,0],[0,0,0],[0,0,0]],y=[0,0,0];for(let p of f){let _=[p[0],p[1],1];for(let x=0;x<3;x++){y[x]+=_[x]*p[d];for(let v=0;v<3;v++)g[x][v]+=_[x]*_[v]}}let m=g.map((p,_)=>[...p,y[_]]);for(let p=0;p<3;p++){let _=p;for(let x=p+1;x<3;x++)Math.abs(m[x][p])>Math.abs(m[_][p])&&(_=x);if([m[p],m[_]]=[m[_],m[p]],Math.abs(m[p][p])<1e-12)return null;for(let x=0;x<3;x++)if(x!==p){let v=m[x][p]/m[p][p];for(let M=p;M<4;M++)m[x][M]-=v*m[p][M]}}return[0,1,2].map(p=>m[p][3]/m[p][p])},o=[];for(let f of s.values()){let d=r(f.pts,2),g=r(f.pts,3);if(!d||!g||Math.abs(d[1])>Math.abs(d[0])*.05||Math.abs(g[0])>Math.abs(g[1])*.05)return null;let y=Fn(n.get(f.hash));o.push({hash:f.hash,name:f.name,cx:(f.x0+f.x1)/2,cy:(f.y0+f.y1)/2,flipX:d[0]<0,flipY:g[1]>0,w:y.w,h:y.h})}let a=f=>{let d=[...f].sort((y,m)=>y-m),g=[];for(let y of d)(!g.length||y-g[g.length-1]>1)&&g.push(y);return g},c=a(o.map(f=>f.cx)),l=a(o.map(f=>f.cy)).reverse();for(let f of o)f.col=c.findIndex(d=>Math.abs(d-f.cx)<=1),f.row=l.findIndex(d=>Math.abs(d-f.cy)<=1);let h=c.length,u=l.length;return o.length!==h*u||o.some(f=>f.w!==o[0].w||f.h!==o[0].h)?null:{tiles:o,cols:h,rows:u,tw:o[0].w,th:o[0].h}}function Yd(i,e){let t=i.cols*i.tw,n=i.rows*i.th,s=new Uint8ClampedArray(t*n*4);for(let r of i.tiles){let o=e(r.hash);for(let a=0;a<i.th;a++)for(let c=0;c<i.tw;c++){let l=r.flipX?i.tw-1-c:c,h=r.flipY?i.th-1-a:a,u=(h*i.tw+l)*4,f=((r.row*i.th+a)*t+r.col*i.tw+c)*4;s[f]=o.px[u],s[f+1]=o.px[u+1],s[f+2]=o.px[u+2],s[f+3]=o.px[u+3]}}return{w:t,h:n,px:s}}function jd(i,e){let t=new Map,n=i.cols*i.tw;for(let s of i.tiles){let r=new Uint8ClampedArray(i.tw*i.th*4);for(let o=0;o<i.th;o++)for(let a=0;a<i.tw;a++){let c=s.flipX?i.tw-1-a:a,l=s.flipY?i.th-1-o:o,h=(l*i.tw+c)*4,u=((s.row*i.th+o)*n+s.col*i.tw+a)*4;r[h]=e.px[u],r[h+1]=e.px[u+1],r[h+2]=e.px[u+2],r[h+3]=e.px[u+3]}t.set(s.hash,{w:i.tw,h:i.th,px:r})}return t}function Kd(i){let e=ir(i),t=eo(e,0,e.length),n=t.filter(o=>o.id===98306).map(o=>{let a=o.payload;for(;a<o.payload+o.size&&e[a];)a++;return new TextDecoder().decode(e.subarray(o.payload,a))}),s=t.find(o=>o.id===155648),r=s?Te(e).getUint32(s.payload):0;return{res:e,skeletons:n,objects:r}}function ro(i,e=0,t=i.length){let n=Te(i),s=[];for(;e+8<=t;){let r=n.getUint32(e)>>>0,o=n.getUint32(e+4),a=e+8,c=(r&2164260863)>>>0;if(r&2147483648)s.push({id:r,type:c,off:e,children:ro(i,a,a+o)});else{let l=r>>>24&15,h=a;if(l){let u=1<<l;h=Math.ceil(a/u)*u}s.push({id:r,type:c,off:e,data:i.subarray(h,a+o)})}e=a+o,e&3&&(e=e+3&-4)}return s}var bh=(i,e)=>(i.children||[]).find(t=>t.type===e),nb=1,ib=2,sb=4,rb=8,ob=16,ab=32,ka=i=>i&32768?i-65536:i;function cb(i,e,t){let n=Te(i);if(e&nb){let r=[];for(let o=0;o<t;o++)r.push(n.getUint16(2*o));return{rotz:r}}let s=[];if(e&ob)for(let r=0;r<t;r++)s.push([0,1,2,3].map(o=>n.getInt16(8*r+2*o)/32768));else if(e&ab)for(let r=0;r<t;r++){let o=i.subarray(6*r,6*r+6);s.push([ka(o[0]<<8|o[1]&240),ka(o[2]<<8|o[1]<<4&240),ka(o[3]<<8|o[4]&240),ka(o[5]<<8|o[4]<<4&240)].map(a=>a/32768))}else for(let r=0;r<t;r++)s.push([0,1,2,3].map(o=>n.getInt8(4*r+o)/128));return{rot:s}}function lb(i){let e=i.children,t=e[0].data,n=Te(t),s={hash:n.getUint32(4),numKeys:n.getUint32(8),numNodes:n.getUint32(12),numMorph:n.getUint32(16)};s.numRootKeys=n.getUint32(52),s.signature=n.getUint32(84),s.name=new TextDecoder("latin1").decode(e[1].data).split("\0")[0];let r=bh(i,94215),o=bh(i,94216);s.rootRot=[],s.rootTrans=[];for(let l=0;l<s.numRootKeys;l++)s.rootRot.push(Te(r.data).getUint16(2*l)),s.rootTrans.push([0,1,2].map(h=>Te(o.data).getFloat32(12*l+4*h)));let a=Te(bh(i,94211).data),c=(i.children||[]).filter(l=>l.type===2147578112);return s.nodes=c.map((l,h)=>{let u=a.getUint32(4*h),f={props:u,rot:null,rotz:null,trans:null,scale:null};for(let d of l.children)if(d.type===94465)Object.assign(f,cb(d.data,u,u&ib?1:s.numKeys));else if(d.type===94466){let g=u&sb?1:s.numKeys,y=Te(d.data);f.trans=[];for(let m=0;m<g;m++)f.trans.push([0,1,2].map(p=>y.getFloat32(12*m+4*p)))}else if(d.type===94467){let g=u&rb?1:s.numKeys,y=Te(d.data);f.scale=[];for(let m=0;m<g;m++)f.scale.push([0,1,2].map(p=>y.getInt16(6*m+2*p)/2048))}return f}),s}function Zd(i,e=!1){let t=i;e&&(t=tr(i.subarray(4)));let n=[],s=r=>{for(let o of r)if(o.type===2147577856)try{n.push(lb(o))}catch{}else o.children&&s(o.children)};return s(ro(t)),n}function Jd(i,e,t,n){let s=i.nodes[e],r=(f,d)=>f[Math.min(d,f.length-1)],o=Math.floor(t),a=Math.min(o+1,i.numKeys-1),c=t-o,l=[0,0,0,1];if(s&&s.rot)l=hb(r(s.rot,o),r(s.rot,a),c);else if(s&&s.rotz){let f=r(s.rotz,o),g=r(s.rotz,a)-f;g>32768&&(g-=65536),g<-32768&&(g+=65536);let y=(f+g*c)*2*Math.PI/65536;l=[0,0,Math.sin(y/2),Math.cos(y/2)]}let h=n||[0,0,0];s&&s.trans&&(h=Mh(r(s.trans,o),r(s.trans,a),c));let u=null;return s&&s.scale&&(u=Mh(r(s.scale,o),r(s.scale,a),c)),{q:l,t:h,s:u}}function Qd(i,e){if(!i.rootRot.length)return{q:[0,0,0,1],t:[0,0,0]};let t=Math.min(Math.floor(e),i.rootRot.length-1),n=Math.min(t+1,i.rootRot.length-1),s=e-Math.floor(e),r=i.rootRot[n]-i.rootRot[t];r>32768&&(r-=65536),r<-32768&&(r+=65536);let o=(i.rootRot[t]+r*s)*2*Math.PI/65536;return{q:[0,0,Math.sin(o/2),Math.cos(o/2)],t:Mh(i.rootTrans[t],i.rootTrans[n],s)}}var Mh=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function hb(i,e,t){let n=i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]*e[3];n<0&&(e=e.map(o=>-o),n=-n);let s=n>.9995?i.map((o,a)=>o+(e[a]-o)*t):(()=>{let o=Math.acos(n),a=Math.sin(o);return i.map((c,l)=>(Math.sin((1-t)*o)*c+Math.sin(t*o)*e[l])/a)})(),r=Math.hypot(...s)||1;return s.map(o=>o/r)}var $n=i=>i.trim().toLowerCase().replace(/\s+/g," ");function di(i){let e=/\r\n/.test(i)?`\r
`:`
`,t=i.split(/\r?\n/),n={nl:e,lines:t,entries:[]},s="";return t.forEach((r,o)=>{let a=/^\s*\[([^\]]+)\]/.exec(r);if(a){s=a[1].trim(),n.entries.push({kind:"section",sec:s,line:o});return}let c=/^(\s*)([^#;=\s][^=#;]*?)(\s*=\s*)([^#;\r\n]*?)(\s*(?:[#;].*)?)$/.exec(r);c&&n.entries.push({kind:"key",sec:s,key:c[2],value:c[4],line:o,parts:c})}),n}function us(i,e,t){let n;for(let s of i.entries)s.kind==="key"&&$n(s.sec)===$n(e)&&$n(s.key)===$n(t)&&(n=s.value.trim());return n}function wh(i,e){let t=di(i);for(let[n,s,r]of e){let o=t.entries.filter(c=>c.kind==="key"&&$n(c.sec)===$n(n)&&$n(c.key)===$n(s)),a=t.lines.slice();if(o.length)for(let c of o){let l=c.parts;a[c.line]=l[1]+l[2]+l[3]+r+l[5]}else{let c=t.entries.filter(l=>l.kind==="section"&&$n(l.sec)===$n(n));if(c.length){let l=c[c.length-1],h=l.line;for(let u of t.entries)u.line>l.line&&u.kind==="key"&&u.sec===l.sec&&!t.entries.some(f=>f.kind==="section"&&f.line>l.line&&f.line<u.line)&&(h=u.line);a.splice(h+1,0,`${s} = ${r}`)}else{for(;a.length&&a[a.length-1].trim()==="";)a.pop();a.push("",`[${n}]`,"",`${s} = ${r}`,"")}}t=di(a.join(t.nl))}return t.lines.join(t.nl)}var rr=i=>new DataView(i.buffer,i.byteOffset,i.byteLength),ub=new Set([4579740,4579764,4579804,4575716,4575696,4577108]),ep=4575696,ot={PLANE:0,PIECE:2,SUN:3,NET:8,SHADOW:9,SPECIAL:10,BINDING:16,PVIEW:260,PROXY:262,BOX:263,POINT:264,EMITTER:265};function fb(i){let e=rr(i),t=e.getUint32(4),n=8;for(;n+8<=8+t;){let s=e.getUint32(n),r=e.getUint32(n+4);if((s&2164260863)>>>0===155648){let o=s>>>24&15,a=o?1<<o:1,c=n+8,l=Math.ceil(c/a)*a;return{idOff:n,start:l,end:c+r,last:c+r>=8+t-3}}n=n+8+r+3&-4}return null}function cn(i,e=new Map){let t=fb(i);if(!t)return null;let n=rr(i),s=n.getUint32(t.start),r=[];for(let c=t.start+16;c+32<=t.end;c+=16){let l=n.getUint32(c);if(ub.has(l))if(l===ep){let h=n.getUint32(c+12);n.getUint32(c+8)===16&&h>=32&&h<=16384&&!(h&15)&&r.push(c)}else n.getUint32(c+20)===4294967295&&r.push(c)}let o=r.map((c,l)=>{let h=l+1<r.length?r[l+1]:t.end,u=n.getUint32(c),f=n.getUint32(c+4),d=n.getUint32(c+8),g=d&65535,y={i:l,off:c,end:h,cls:u,hash:f,kind:g,flags:d>>>16,name:e.get(f)||null};return u===ep?(y.kind=ot.BINDING,y.size=n.getUint32(c+12),y):(y.m=[...Array(16)].map((m,p)=>n.getFloat32(c+32+4*p)),g===ot.BOX&&h-c>=108&&(y.box=[0,1,2].map(m=>n.getFloat32(c+96+4*m))),g===ot.PIECE&&h-c>=104&&(y.radius=n.getFloat32(c+96),y.piece=n.getUint32(c+100)),y)}),a=new Map;for(let c of o)c.name&&a.set(c.name,c);for(let c of o)if(c.name&&c.name.includes("/")){let l=a.get(c.name.slice(0,c.name.lastIndexOf("/")));l&&(c.parent=l.i,(l.kids||(l.kids=[])).push(c.i))}return o.forEach((c,l)=>{c.kind===ot.BINDING&&o[l+1]&&o[l+1].kind===ot.PROXY&&(o[l+1].binding=l)}),{count:s,recs:o,loc:t}}function pi(i,e){let t=i.recs[e],n=t.m.slice();return t.parent!=null&&(n=db(pi(i,t.parent),n)),n}function db(i,e){let t=new Array(16).fill(0);for(let n=0;n<4;n++)for(let s=0;s<4;s++)for(let r=0;r<4;r++)t[n*4+s]+=i[r*4+s]*e[n*4+r];return t}function tp(i,e,t){let n=rr(i);for(let s=0;s<16;s++)n.setFloat32(e.off+32+4*s,t[s])}function Sh(i){let e=i.m,t=Math.hypot(e[0],e[1],e[2])||1;return{x:e[12],y:e[13],z:e[14],turn:Math.atan2(e[1]/t,e[0]/t)*180/Math.PI}}function np(i,{x:e,y:t,z:n,turn:s}){let r=i.m.slice(),o=Sh(i),a=(s-o.turn)*Math.PI/180,c=Math.cos(a),l=Math.sin(a);for(let h=0;h<3;h++){let u=r[h*4],f=r[h*4+1];r[h*4]=c*u-l*f,r[h*4+1]=l*u+c*f}return r[12]=e,r[13]=t,r[14]=n,r}function Ah(i,e,t,n,s){let r=e.recs[t];if(r.kind!==ot.PROXY||!r.name)throw new Error("Only props with a known name can be copied.");let o=sp(e,t),a=[r.binding,t,...o].filter(u=>u!=null).sort((u,f)=>u-f),c=r.name,l=[];for(let u of a){let f=e.recs[u],d=i.slice(f.off,f.end),g=rr(d);if(f.kind===ot.BINDING){let y=new Map;y.set(ht(c+"/root object01"),ht(n+"/root object01"));for(let m of o){let p=e.recs[m].name;p&&y.set(e.recs[m].hash,ht(n+p.slice(c.length)))}for(let m=16;m+4<=d.length;m+=4){let p=g.getUint32(m);y.has(p)&&g.setUint32(m,y.get(p))}}else if(g.setUint32(4,ht(u===t?n:n+f.name.slice(c.length))),u===t)for(let y=0;y<16;y++)g.setFloat32(32+4*y,s[y]);l.push(d)}let h=[n,...o.map(u=>e.recs[u].name).filter(Boolean).map(u=>n+u.slice(c.length))];return{parts:l,count:a.length,names:h,after:e.recs[a[a.length-1]].end}}function oo(i,e,t,n,s=e.loc.end){let r=t.reduce((h,u)=>h+u.length,0),{loc:o}=e,a=new Uint8Array(i.length+r);a.set(i.subarray(0,s),0);let c=s;for(let h of t)a.set(h,c),c+=h.length;a.set(i.subarray(s),c);let l=rr(a);return l.setUint32(o.start,e.count+n),l.setUint32(o.idOff+4,l.getUint32(o.idOff+4)+r),l.setUint32(4,l.getUint32(4)+r),a}function ip(i,e,t,n,s){let r=Ah(i,e,t,n,s);return oo(i,e,r.parts,r.count,r.after)}function sp(i,e){let t=[],n=s=>{for(let r of i.recs[s].kids||[])t.push(r),n(r)};return n(e),t}function za(i,e){let t=e.replace(/\d+$/,""),n=(e.match(/\d+$/)||["00"])[0].length,s=new Set(i.recs.map(r=>r.hash));for(let r=1;r<1e3;r++){let o=t+String(r).padStart(n,"0");if(!s.has(ht(o)))return o}throw new Error("no free name")}function rp(i,e,t){let n=new Set;for(let l of t){let h=e.recs[l];if(!h||h.kind!==ot.PROXY)throw new Error("Only props can be removed.");for(let u of[h.binding,l,...sp(e,l)])u!=null&&n.add(u)}let s=[...n].sort((l,h)=>h-l),r=i,o=0;for(let l of s){let h=e.recs[l],u=h.end-h.off,f=new Uint8Array(r.length-u);f.set(r.subarray(0,h.off),0),f.set(r.subarray(h.end),h.off),r=f,o+=u}let a=rr(r),{loc:c}=e;return a.setUint32(c.start,e.count-s.length),a.setUint32(c.idOff+4,a.getUint32(c.idOff+4)-o),a.setUint32(4,a.getUint32(4)-o),r}function op(i){let e=new Map;for(let t of i.recs)if(t.kind===ot.PROXY&&t.name&&t.parent==null){let n=t.name.replace(/\d+$/,"").replace(/_+$/,"");e.has(n)||e.set(n,{kind:n,i:t.i,count:0}),e.get(n).count++}return[...e.values()]}function pb(i,e){let{world:t,scene:n,res:s}=i,r=n.recs[e],o=[],a=x=>{for(let v of n.recs[x].kids||[])o.push(v),a(v)};a(e);let c=new Map;t.models.forEach((x,v)=>{for(let M of x.objects||[])c.set(M.hash,v)});let l=new Set;for(let x of o){let v=n.recs[x];if(v.kind===ot.PIECE){let M=c.get(v.piece);if(M===0)throw new Error(`${r.name} is drawn as part of the stadium itself, so it can't be taken out.`);M!=null&&l.add(M)}}let h=new Map(Ft(t.textures).map(x=>[x.hash,x.blob])),u=new Map,f=x=>{if(u.has(x)||!h.has(x))return;let v=h.get(x);if(u.set(x,v),v.length>=36&&v[0]===95&&v[1]===108&&v[2]===102&&v[3]===105){let M=Te(v),w=M.getUint32(8);for(let S=0;S<w&&44+8*S<=v.length;S++)f(M.getUint32(36+8*S))}};for(let x of l){let v=t.models[x].rlg,M=Te(v);for(let w=0;w+4<=v.length;w+=4)f(M.getUint32(w))}let d=new Set;if(r.binding!=null){let x=n.recs[r.binding],v=Te(s);for(let M=x.off+32;M+8<=x.end;M+=8)d.add(v.getUint32(M+4))}for(let x of o){let v=n.recs[x].name;v&&d.add(ht(v.slice(v.lastIndexOf("/")+1)))}let g=ro(s)[0].children,y=[],m=null,p=0;g.forEach((x,v)=>{if(x.type!==2147581952)return;let M=x.children.find(b=>b.type===98307);if(!M)return;let w=Te(M.data),S=new Set;for(let b=0;b+4<=M.data.length;b+=4)S.add(w.getUint32(b));let I=0;for(let b of d)S.has(b)&&I++;I>p&&(p=I,m=v)});let _=null;if(m!=null){let x=M=>s.subarray(M.off,M.off+8+Te(s).getUint32(M.off+4)+3&-4);y.push(x(g[m]));let v=g[m].children.find(M=>M.type===98306);v&&(_=new TextDecoder("latin1").decode(v.data).split("\0")[0]);for(let M=m+1;M<g.length&&g[M].type===2147577856;M++)y.push(x(g[M]))}return{models:[...l].map(x=>t.models[x]),textures:u,skeleton:_,resChunks:y}}function ap(i,e,t,n){let s=pb(e,t),r=e.scene.recs[t],o=new Set(i.world.models.map(_=>_.id)),a=s.models.filter(_=>!o.has(_.id)),c=new Set(Ft(i.world.textures).map(_=>_.hash)),l=new Map([...s.textures].filter(([_])=>!c.has(_))),h=i.world.tmp;if(a.length||l.size){let[_,x,v]=On(h,0,h.length)[0],M=On(h,x,x+v).map(([w,S,I])=>w===147712?Mt(w,l.size?or(h.subarray(S,S+I),l):h.subarray(S,S+I)):w===2147594496?Mt(w,gt([h.subarray(S,S+I),...a.map(b=>mb(b.rlg))])):Mt(w,h.subarray(S,S+I)));h=Mt(_,gt(M))}let u=i.res,f=new Set(ro(u)[0].children.filter(_=>_.type===2147581952).map(_=>{let x=_.children.find(v=>v.type===98306);return x?new TextDecoder("latin1").decode(x.data).split("\0")[0]:""})),d=0;if(s.skeleton&&!f.has(s.skeleton)&&s.resChunks.length){let _=gt(s.resChunks),x=new Uint8Array(u.length+_.length);x.set(u,0),x.set(_,u.length),Te(x).setUint32(4,Te(x).getUint32(4)+_.length),u=x,d=s.resChunks.length-1}let g=cn(u,i.names),m=new Set(g.recs.map(_=>_.hash)).has(ht(r.name))?za(g,r.name):r.name,p=Ah(e.res,e.scene,t,m,n);return u=oo(u,g,p.parts,p.count),{tmp:h,res:u,name:m,names:p.names,added:{models:a.length,textures:l.size,animations:d,skeleton:s.skeleton}}}var mb=i=>{if(!(i.length&3))return i;let e=new Uint8Array(i.length+3&-4);return e.set(i),e};function or(i,e){let t=Ft(i),n=new Map(t.map(f=>[f.hash,f.blob]));for(let[f,d]of e)n.set(f,d);let s=[...n.keys()].sort((f,d)=>f-d),r=[...t.map(f=>({h:f.hash,at:f.blob.byteOffset})).sort((f,d)=>f.at-d.at).map(f=>f.h),...[...e.keys()].filter(f=>!t.some(d=>d.hash===f))],o=16+16*s.length,a=new Map,c=o;for(let f of r)c=c+31&-32,a.set(f,c-o),c+=n.get(f).length;c=c+31&-32;let l=new Map;r.forEach((f,d)=>{let g=d+1<r.length?a.get(r[d+1]):c-o;l.set(f,g-a.get(f)-n.get(f).length)});let h=new Uint8Array(c),u=Te(h);h.set(i.subarray(0,16),0),u.setUint32(4,s.length),s.forEach((f,d)=>{u.setUint32(16+16*d,f),u.setUint32(20+16*d,a.get(f)),u.setUint32(24+16*d,n.get(f).length),u.setUint32(28+16*d,l.get(f))});for(let f of r)h.set(n.get(f),o+a.get(f));return h}var cp=ht("stadiumdiffuse"),gb=851975,xb=1500,Eh=230,fs=355e4,ar=(i,e,t)=>i.setFloat32(e,t),cr=class{constructor(){this.parts=[],this.length=0}push(e){return this.parts.push(e),this.length+=e.length,this.length-e.length}out(){return gt(this.parts)}};function yb(i){let e=new nr(i),t=e.j,{world:n}=e.worldMatrices(),s=[],r=t.scenes?t.scenes[t.scene||0]:{nodes:(t.nodes||[]).map((a,c)=>c)},o=a=>{let c=t.nodes[a];c.mesh!=null&&s.push({node:a,name:c.name||t.meshes[c.mesh].name||`mesh${a}`,mesh:t.meshes[c.mesh],M:n[a]});for(let l of c.children||[])o(l)};for(let a of r.nodes||[])o(a);return{g:e,j:t,meshes:s}}var lp=(i,e,t)=>[i,-t,e];function _b(i,e){let t=[];for(let n of e.mesh.primitives){if((n.mode??4)!==4)continue;let s=n.attributes;if(s.POSITION==null)continue;let r=i.acc(s.POSITION),o=r.n,a=e.M,c=new Float64Array(o*3),l=new Float64Array(o*3),h=new Float64Array(o*4).fill(-1),u=new Float64Array(o*2),f=s.NORMAL!=null?i.acc(s.NORMAL):null,d=s.COLOR_0!=null?i.acc(s.COLOR_0):null,g=s.TEXCOORD_0!=null?i.acc(s.TEXCOORD_0):null;for(let M=0;M<o;M++){let w=r.data[3*M],S=r.data[3*M+1],I=r.data[3*M+2],b=a[0]*w+a[1]*S+a[2]*I+a[3],A=a[4]*w+a[5]*S+a[6]*I+a[7],D=a[8]*w+a[9]*S+a[10]*I+a[11];if(c.set(lp(b,A,D),3*M),f){let F=f.data[3*M],ee=f.data[3*M+1],P=f.data[3*M+2],B=a[0]*F+a[1]*ee+a[2]*P,G=a[4]*F+a[5]*ee+a[6]*P,X=a[8]*F+a[9]*ee+a[10]*P,q=Math.hypot(B,G,X)||1;l.set(lp(B/q,G/q,X/q),3*M)}else l.set([0,0,1],3*M);if(d)for(let F=0;F<4;F++)h[4*M+F]=F<d.nc?d.data[d.nc*M+F]:1;g&&(u[2*M]=g.data[2*M],u[2*M+1]=g.data[2*M+1])}let y;n.indices!=null?y=Array.from(i.acc(n.indices).data):y=[...Array(o).keys()];let m=a[0]*(a[5]*a[10]-a[6]*a[9])-a[1]*(a[4]*a[10]-a[6]*a[8])+a[2]*(a[4]*a[9]-a[5]*a[8]),p=[];for(let M=0;M+2<y.length;M+=3)p.push(m<0?[y[M],y[M+2],y[M+1]]:[y[M],y[M+1],y[M+2]]);let _=new Map,x=new Int32Array(o);for(let M=0;M<o;M++){let w=[c[3*M].toFixed(3),c[3*M+1].toFixed(3),c[3*M+2].toFixed(3),Math.round(l[3*M]*64),Math.round(l[3*M+1]*64),Math.round(l[3*M+2]*64),g?Math.round(u[2*M]*1024):0,g?Math.round(u[2*M+1]*1024):0,d?[0,1,2,3].map(S=>Math.round(h[4*M+S]*255)).join(":"):""].join(",");_.has(w)?x[M]=_.get(w):(_.set(w,M),x[M]=M)}let v=p.map(M=>M.map(w=>x[w])).filter(([M,w,S])=>M!==w&&w!==S&&M!==S);t.push({P:c,N:l,C:d?h:null,UV:g?u:null,tris:v,material:n.material,n:o})}return t}function vb(i){let e=i.rlg,t=Bi(e),n=Te(e),[s,r]=t.get(110596)[0],[o]=t.get(110597)[0],[a]=t.get(110598)[0],[c]=t.get(110599)[0],[l,h]=t.get(110614)[0],u=r/48,f=[],d=[];for(let x=0;x<u;x++)d.push(n.getUint32(s+x*48+32));let g=[...new Set(d)].sort((x,v)=>x-v),y=x=>{let v=g.indexOf(x);return(v+1<g.length?g[v+1]:h)-x},{packets:m}=hs(e);for(let x=0;x<u;x++){let v=s+x*48,M=e.slice(v,v+48),w=e[v+11],S=n.getUint32(v+12),I=n.getUint16(v+8),b=n.getUint32(v),A=n.getUint32(v+4),D=[];for(let q=0;q<w;q++){let V=o+S+q*8;D.push({addr:n.getUint32(V),e4:e[V+4],stride:e[V+5],kind:e[V+6],e7:e[V+7]})}let F=D.map(q=>e.slice(a+q.addr,a+q.addr+q.stride*I)),ee=e.slice(c+b,c+b+2*A),P=e.slice(l+d[x],l+d[x]+y(d[x])),B=m[x].pos,G=[1/0,1/0,1/0],X=[-1/0,-1/0,-1/0];for(let q=0;q<I;q++)for(let V=0;V<3;V++)G[V]=Math.min(G[V],B[3*q+V]),X[V]=Math.max(X[V],B[3*q+V]);f.push({head:M,streams:D,verts:F,idx:ee,params:P,nv:I,ni:A,mn:G,mx:X,pos:B,tex:Te(P).getUint32(0)})}let p=[];i.objects.forEach((x,v)=>{for(let M=0;M<x.count;M++)p.push(v)});let _=t.get(110594)?e.slice(t.get(110594)[0][0],t.get(110594)[0][0]+t.get(110594)[0][1]):null;return{pk:f,objOf:p,ref:_}}var hp=(i,e)=>{let t=8;for(;t*2<=Math.min(i,e);)t*=2;return t};function up(i,e,t){let{w:n,h:s,px:r}=i,o=hp(n,e),a=hp(s,e);(o!==n||a!==s)&&(r=Fa(r,n,s,o,a),n=o,s=a);let c=1,l=Math.min(n,s);for(;l>8;)l>>=1,c++;let h=new Uint8Array(32),u=Te(h);return t?(u.setUint32(4,1),h.set([5,5,5,3],8),Da(r,n,s,h,c)):(u.setUint32(4,2),h.set([5,6,5,0],8),to(r,n,s,h,c))}function fp({glb:i,world:e,res:t,images:n,names:s,opts:r={}}){let o=r.stadium||"stadium",a=r.maxTexture||512,c=[],{g:l,j:h,meshes:u}=yb(i),f=cn(t,{get:O=>s.get(O)}),d=Te(t),g=new Set(e.models[0].objects.map(O=>O.hash)),y=new Map;for(let O of f.recs)if((O.kind===ot.PIECE||O.kind===ot.SPECIAL)&&O.end-O.off>=104){let z=d.getUint32(O.off+100);g.has(z)&&!y.has(z)&&y.set(z,O)}let m=f.recs.find(O=>O.kind===ot.SPECIAL&&O.end-O.off>=104&&g.has(d.getUint32(O.off+100)));if(!u.length)throw new Error("No meshes in that .glb.");let p=vb(e.models[0]),_=new Set,x=[];for(let O of u){let z=/^m0_piece(\d+)/.exec(O.name||""),fe=_b(l,O);if(z&&+z[1]<p.pk.length){let R=p.pk[+z[1]],$=[1/0,1/0,1/0],ie=[-1/0,-1/0,-1/0];for(let te of fe)for(let _e=0;_e<te.n;_e++)for(let Ne=0;Ne<3;Ne++)$[Ne]=Math.min($[Ne],te.P[3*_e+Ne]),ie[Ne]=Math.max(ie[Ne],te.P[3*_e+Ne]);if(!r.rebuildAll&&fe.length&&[0,1,2].every(te=>Math.abs($[te]-R.mn[te])<.02&&Math.abs(ie[te]-R.mx[te])<.02)){_.add(+z[1]);continue}}fe.some(R=>R.tris.length)&&x.push({name:O.name,prims:fe,wasPiece:z?+z[1]:null})}let v=new Set(e.models[0].objects.map((O,z)=>y.has(O.hash)?-1:z).filter(O=>O>=0)),M=0;p.pk.forEach((O,z)=>{v.has(p.objOf[z])&&(_.has(z)||M++,_.add(z))});for(let O=x.length-1;O>=0;O--)x[O].wasPiece!=null&&v.has(p.objOf[x[O].wasPiece])&&x.splice(O,1);M&&!r.rebuildAll&&c.push(`The goal nets (and other pieces the game moves itself) stay as the game had them: ${M} changed or missing part(s) were put back.`);let w=new Map;{let O=new Map;for(let z of p.pk){if(Te(z.head).getUint32(16)!==cp||z.params.length!==36)continue;let fe=Array.from({length:5},($,ie)=>Te(z.params).getUint32(16+4*ie)).join(","),R=z.tex;O.has(R)||O.set(R,new Map),O.get(R).set(fe,(O.get(R).get(fe)||0)+1)}for(let[z,fe]of O)w.set(z,[...fe].sort((R,$)=>$[1]-R[1])[0][0].split(",").map(Number))}let S=r.brightness??"auto";if(S==="auto"){let O=[];for(let fe of x)for(let R of fe.prims)if(R.C)for(let $=0;$<R.n;$+=7)O.push((R.C[4*$]+R.C[4*$+1]+R.C[4*$+2])/3);O.sort((fe,R)=>fe-R),S=(O.length?O[O.length>>1]:1)<.56?2:1,O.length&&c.push(`Baked light: the new pieces' vertex colours are ${S===2?"at half brightness (as Wii games store them), so they are doubled":"used as they are"}.`)}let I=h.materials||[],b=new Map,A=new Map,D=new Map;for(let[O,z]of s)z.startsWith("_"+o+"/")&&D.set(z,O);let F=new Map(Ft(e.textures).map(O=>[O.hash,O.blob])),ee=O=>{if(b.has(O))return b.get(O);let z=O!=null?I[O]:null,fe=z&&z.alphaMode||"OPAQUE",R=z&&z.name||"untextured",$=null,ie=R.replace(/\.\d{3}$/,"");D.has(ie)&&F.has(D.get(ie))&&($=D.get(ie));let te=z&&z.pbrMetallicRoughness&&z.pbrMetallicRoughness.baseColorTexture?z.pbrMetallicRoughness.baseColorTexture.index:null;if($==null&&te!=null&&h.textures[te]&&n.has(h.textures[te].source)){let Ie=h.textures[te].source,Ge=`${Ie}/${fe}`,me=(h.images[Ie].name||`image${Ie}`).replace(/[^A-Za-z0-9_.-]+/g,"_");if($=ht(`_${o}/new_${me}${fe==="BLEND"?"_a":""}`),!A.has($)){let N=n.get(Ie);if(fe==="OPAQUE"){let ue=new Uint8ClampedArray(N.px);for(let de=3;de<ue.length;de+=4)ue[de]=255;N={...N,px:ue}}A.set($,{blob:up(N,a,fe==="BLEND"),name:`_${o}/new_${me}`,key:Ge})}}$==null&&($=ht(`_${o}/new_white`),!A.has($)&&!F.has($)&&A.set($,{blob:up({w:8,h:8,px:new Uint8ClampedArray(256).fill(255)},8,!1),name:`_${o}/new_white`}));let _e=w.get($)||[fe==="BLEND"?1:0,0,1,0,0],Ne={hash:$,blend:fe==="BLEND",flags:_e,name:R,double:!!(z&&z.doubleSided)&&fe!=="OPAQUE",matHash:ht(R)};return b.set(O,Ne),Ne},P=O=>O.wasPiece==null&&m&&/sky/i.test(O.name||"");{let O=-1/0;for(let z of x)if(P(z))for(let fe of z.prims)for(let R=0;R<fe.n;R++)O=Math.max(O,fe.P[3*R+2]);if(O>1&&O<Eh){let z=Eh/O;for(let fe of x)P(fe)&&(fe.prims=fe.prims.map(R=>{let $=Float32Array.from(R.P);for(let ie=0;ie<R.n;ie++)$[3*ie+2]*=z;return{...R,P:$}}));c.push(`The sky was only ${O.toFixed(0)} m high, so it is stretched to ${Eh} m (the match camera would see over it).`)}}let B=[],G=[];for(let O of x){let z=G.length,fe=[];for(let ie of O.prims){if(!ie.tris.length)continue;let te=ee(ie.material),_e=ie.tris;te.double&&(_e=_e.concat(ie.tris.map(([Ie,Ge,me])=>[Ie,me,Ge])));let Ne=0;for(;Ne<_e.length;){let Ie=new Map,Ge=[];for(;Ne<_e.length;){let N=_e[Ne],ue=N.filter(de=>!Ie.has(de)).length;if(Ie.size+ue>xb)break;Ge.push(N.map(de=>(Ie.has(de)||Ie.set(de,Ie.size),Ie.get(de)))),Ne++}let me=[...Ie.keys()];fe.push({verts:me,local:Ge,p:ie,mt:te})}}let R=null,$=!1;O.wasPiece!=null?R=y.get(e.models[0].objects[p.objOf[O.wasPiece]].hash)||null:P(O)&&(R=m,$=!0),fe.length&&G.push({name:O.name,packets:fe,template:R,offset:$})}let X=new cr,q=new cr,V=new cr,se=new cr,re=[],ge=[],Z=O=>{let z=O.head.slice(),fe=Te(z),R=[];for(let te=0;te<O.streams.length;te++)R.push(X.push(O.verts[te]));let $=new Uint8Array(8*O.streams.length),ie=Te($);O.streams.forEach((te,_e)=>{ie.setUint32(8*_e,R[_e]),$[8*_e+4]=te.e4,$[8*_e+5]=te.stride,$[8*_e+6]=te.kind,$[8*_e+7]=te.e7}),fe.setUint32(12,V.push($)),fe.setUint32(0,q.push(O.idx)),fe.setUint32(32,se.push(O.params)),re.push(z)},ne=new Map;e.models[0].objects.forEach((O,z)=>{let fe=[];for(let R=O.first;R<O.first+O.count;R++)_.has(R)&&fe.push(R);fe.length&&ne.set(O.hash,{hash:O.hash,packets:fe})});for(let[O,z]of ne){let fe=re.length;for(let R of z.packets)Z(p.pk[R]);ge.push({hash:O,first:fe,count:z.packets.length,kept:!0})}let ce=0,k=0,oe=new Set(e.models[0].objects.map(O=>O.hash));if(G.forEach((O,z)=>{let fe=`_${o}/newpiece${String(z+1).padStart(3,"0")}`;for(;oe.has(ht(fe));)fe+="_";oe.add(ht(fe));let R=re.length,$=[1/0,1/0,1/0],ie=[-1/0,-1/0,-1/0],te=0,_e=O.template&&O.offset?O.template.m.slice(12,15):[0,0,0];for(let Ne of O.packets){let{p:Ie,mt:Ge,verts:me,local:N}=Ne,ue=me.length,de=new Uint8Array(12*ue),Be=new Uint8Array(3*ue),Ue=new Uint8Array(4*ue),st=new Uint8Array(4*ue),rt=Te(de),St=Te(Ue),Ht=Te(Be),at=0,At=0;if(Ie.UV){let It=1/0,T=1/0;for(let H of me)It=Math.min(It,Ie.UV[2*H]),T=Math.min(T,Ie.UV[2*H+1]);at=Math.floor(It),At=Math.floor(T),at>-16&&at<0&&(at=0),At>-16&&At<0&&(At=0)}me.forEach((It,T)=>{let H=Ie.P[3*It]-_e[0],j=Ie.P[3*It+1]-_e[1],J=Ie.P[3*It+2]-_e[2];ar(rt,12*T,H),ar(rt,12*T+4,j),ar(rt,12*T+8,J);let K=[H,j,J];for(let Re=0;Re<3;Re++)$[Re]=Math.min($[Re],K[Re]),ie[Re]=Math.max(ie[Re],K[Re]);te=Math.max(te,Math.hypot(H,j,J));for(let Re=0;Re<3;Re++)Ht.setInt8(3*T+Re,Math.max(-64,Math.min(64,Math.round(Ie.N[3*It+Re]*64))));let Ee=Ie.UV?Ie.UV[2*It]-at:0,De=Ie.UV?Ie.UV[2*It+1]-At:0;St.setInt16(4*T,Math.max(-32768,Math.min(32767,Math.round(Ee*1024)))),St.setInt16(4*T+2,Math.max(-32768,Math.min(32767,Math.round(De*1024))));for(let Re=0;Re<4;Re++){let We=Ie.C?Ie.C[4*It+Re]:1;Re<3&&(We*=S),st[4*T+Re]=Math.max(0,Math.min(255,Math.round(We*255)))}});let nn=Xd(N,ue>600?1:3),mr=new Uint8Array(2*nn.length),Ja=Te(mr);nn.forEach((It,T)=>Ja.setUint16(2*T,It));let kn=new Uint8Array(32),go=Te(kn),ps=[X.push(de),X.push(Be),X.push(Ue),X.push(st)];[[103,12,1],[254,3,2],[38,4,4],[182,4,3]].forEach(([It,T,H],j)=>{go.setUint32(8*j,ps[j]),kn[8*j+4]=It,kn[8*j+5]=T,kn[8*j+6]=H});let gr=new Uint8Array(36),ms=Te(gr);ms.setUint32(0,Ge.hash),ms.setUint32(4,4294901760),Ge.flags.forEach((It,T)=>ms.setUint32(16+4*T,It));let gs=new Uint8Array(48),Rn=Te(gs);Rn.setUint32(0,q.push(mr)),Rn.setUint32(4,nn.length),Rn.setUint16(8,ue),gs[10]=1,gs[11]=4,Rn.setUint32(12,V.push(kn)),Rn.setUint32(16,cp),Rn.setUint32(20,Ge.matHash),Rn.setUint32(24,0),Rn.setUint32(28,gb),Rn.setUint32(32,se.push(gr)),re.push(gs),ce+=N.length,k+=ue}ge.push({hash:ht(fe),name:fe,first:R,count:O.packets.length,mn:$,mx:ie,radius:te,source:O.name,template:O.template})}),!ge.length)throw new Error("Nothing left to draw: the .glb has no pieces.");let xe=O=>{if(!(O.length&3))return O;let z=new Uint8Array(O.length+3&-4);return z.set(O),z},ye=new Uint8Array(12*ge.length),ve=Te(ye);ge.forEach((O,z)=>{ve.setUint32(12*z,O.hash),ve.setUint32(12*z+4,O.count),ve.setUint32(12*z+8,1243928)});let Oe=[Mt(110614,se.out()),Mt(110599,q.out()),Mt(110598,X.out()),Mt(110597,V.out()),Mt(110596,gt(re)),...p.ref?[Mt(110594,p.ref)]:[],Mt(110595,ye)].map(xe),W=Mt(2147594240,gt(Oe)),Ze=O=>{let z=new Set;for(let fe of O){let R=Te(fe);for(let $=0;$+4<=fe.length;$+=4)z.add(R.getUint32($))}return z},Me=Ze(p.pk.map(O=>O.params)),Ce=Ze([...se.parts]);for(let O=1;O<e.models.length;O++){let z=e.models[O].rlg,fe=Bi(z);if(fe.has(110614)){let[R,$]=fe.get(110614)[0];for(let ie of Ze([z.subarray(R,R+$)]))Ce.add(ie)}}let we=O=>O.length>=36&&O[0]===95&&O[1]===108&&O[2]===102&&O[3]===105;for(let[O,z]of F)if(Ce.has(O)&&we(z)){let fe=Te(z);for(let R=0;R<fe.getUint32(8);R++)Ce.add(fe.getUint32(36+8*R))}let je=new Set([...F.keys()].filter(O=>Me.has(O)&&!Ce.has(O))),Ae=bb(e.textures,je);Ae=or(Ae,new Map([...A].map(([O,z])=>[O,z.blob])));let C=Mb(e.tmp,W,Ae),E=new Set(ge.filter(O=>O.kept).map(O=>O.hash)),Y=f.recs.filter(O=>(O.kind===ot.PIECE||O.kind===ot.SPECIAL)&&O.end-O.off>=104&&g.has(d.getUint32(O.off+100))),pe=Y.filter(O=>!E.has(d.getUint32(O.off+100))),le=Y.find(O=>O.kind===ot.PIECE&&O.end-O.off===144)||Y[0];if(!le)throw new Error("This stadium's object list has no stadium pieces to copy.");let he=wb(t,f,pe.map(O=>O.i)),Le=cn(he,{get:O=>s.get(O)}),Se=ge.filter(O=>!O.kept).map((O,z)=>{let fe=O.template||le,R=t.slice(fe.off,fe.end),$=Te(R);if($.setUint32(4,ht(`newpiece${String(z+1).padStart(3,"0")}_${o}`)),!O.template){for(let ie=0;ie<16;ie++)$.setFloat32(32+4*ie,ie%5===0?1:0);R.length>=144&&($.setUint32(136,0),ar($,140,1))}return ar($,96,O.radius),$.setUint32(100,O.hash),$.setUint32(104,0),$.setUint32(108,0),[...O.mn,...O.mx].forEach((ie,te)=>ar($,112+4*te,ie)),R});Se.length&&(he=oo(he,Le,Se,Se.length));let Pe=[..._].length,Ve={keptPieces:Pe,newObjects:G.length,newPackets:re.length-Pe,tris:ce,verts:k,newTextures:A.size,droppedTextures:je.size,removedRecords:pe.length,tmpSize:C.length,modelSize:W.length,textureSize:Ae.length,brightness:S};return C.length>fs&&c.push(`The stadium is ${(C.length/1e6).toFixed(2)} MB; the biggest the game ships is 3.53 MB. It may not fit in the game's memory: use smaller textures or fewer pieces.`),{tmp:C,res:he,stats:Ve,notes:c,objects:ge,newTextureNames:[...A].map(([O,z])=>[O,z.name])}}function bb(i,e){if(!e.size)return i;let t=Ft(i).filter(o=>!e.has(o.hash)),n=i.slice(0,16);Te(n).setUint32(4,0);let r=gt([n]);return or(r,new Map(t.sort((o,a)=>o.blob.byteOffset-a.blob.byteOffset).map(o=>[o.hash,o.blob])))}function Mb(i,e,t){let[n,s,r]=On(i,0,i.length)[0],o=On(i,s,s+r).map(([a,c,l])=>{if(a===147712)return Mt(a,t);if(a===2147594496){let h=On(i,c,c+l).map(([u,f,d],g)=>g===0?e:Mt(u,i.subarray(f,f+d)));return Mt(a,gt(h.map(u=>{if(!(u.length&3))return u;let f=new Uint8Array(u.length+3&-4);return f.set(u),f})))}return Mt(a,i.subarray(c,c+l))});return Mt(n,gt(o))}function wb(i,e,t){if(!t.length)return i;let n=new Set(t),s=[],r=0,o=0,{loc:a}=e,c=a.start+16,h=[i.subarray(0,a.start+16)];for(let d of e.recs){if(n.has(d.i)){r+=d.end-d.off,o++;continue}h.push(i.subarray(d.off,d.end))}h.push(i.subarray(a.end));let u=gt(h),f=Te(u);if(f.setUint32(a.start,e.count-o),f.setUint32(a.idOff+4,f.getUint32(a.idOff+4)-r),f.setUint32(4,f.getUint32(4)-r),u.length!==i.length-r)throw new Error("object list layout not understood");return u}var Q=i=>document.getElementById(i),Ye=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Yn={thepalace:"The Palace",vice:"The Vice",vicenight:"The Vice (night)",wastelands:"The Wastelands",lavapit:"Lava Pit",sandtomb:"Sand Tomb",thunderisland:"Thunder Island",crystalcanyon:"Crystal Canyon",pipelinecentral:"Pipeline Central",galacticstadium:"Galactic Stadium",stormship:"Stormship Stadium",bowserstadium:"Bowser Stadium",kongacoliseum:"Konga Coliseum",craterfield:"Crater Field",battledome:"Battle Dome",dump:"Dump",underground:"Underground",tutorialfield:"Tutorial Field",lowpolystadium:"Low-poly stadium"},Sb={smallflag:"Flags",fieldgenerator:"Field generator (start of match)",flyingcamera1:"Flying camera",flyingcamera2:"Flying camera",flyingcamera3:"Flying camera",sign_type1:"Signs",finger:"Foam finger",riotguard:"Riot guards (the goal event)",windbanner:"Wind banners"},Ab=["Mario","Luigi","Peach","Daisy","Yoshi","DonkeyKong","DiddyKong","Wario","Waluigi","Bowser","BowserJr","Petey"],Eb={DonkeyKong:"Donkey Kong",DiddyKong:"Diddy Kong",BowserJr:"Bowser Jr.",Petey:"Petey Piranha"},Ha=8,Fe={files:new Map,names:new Map,stadiums:[],fans:[]},Xe=new Map,L=null;async function Pt(i){let e=Fe.files.get(i.toLowerCase());return e?new Uint8Array(await e.arrayBuffer()):null}var xi=i=>Fe.files.has(i.toLowerCase());function Tb(i){let e=i.filter(n=>/(^|\/)art\/hashid\.bin$/i.test(n.rel)).map(n=>n.rel.slice(0,n.rel.length-14));if(!e.length)throw new Error(`That folder doesn't have the game's Art folder in it. Choose the extracted game's "files" folder (the one with Art and ini inside).`);e.sort((n,s)=>/riivolution/i.test(n)-/riivolution/i.test(s)||n.length-s.length);let t=e[0].toLowerCase();Fe.files.clear();for(let{rel:n,file:s}of i){let r=n.toLowerCase();r.startsWith(t)&&(Fe.files.set(r.slice(t.length),s),s._rel=n.slice(t.length))}}async function Rb(){Fe.names=Od(await Pt("art/hashid.bin")),Fe.stadiums=Object.keys(Yn).filter(i=>xi(`art/environments/${i}/gameworld.tmp.zlib`));for(let i of Fe.files.keys()){let e=/^art\/environments\/([a-z0-9_]+)\/gameworld\.tmp\.zlib$/.exec(i);e&&!Fe.stadiums.includes(e[1])&&Fe.stadiums.push(e[1])}Fe.fans=[...Fe.files.keys()].map(i=>/^art\/characters\/crowd([a-z]+)\/crowd\1\.rlg$/.exec(i)).filter(Boolean).map(i=>i[1]).filter(i=>xi(`art/animation/crowd${i}.shier`)&&xi(`art/animation/crowd${i}.sanim.zlib`)).sort()}var Hi=async i=>Xe.get(i)||Pt(i),co=i=>{let e=Fe.files.get(i.toLowerCase());return e&&e._rel?e._rel:i.replace(/^ini\/stadiums\//,"ini/Stadiums/").replace(/^ini\/terrain\//,"ini/Terrain/")};function yi(i,e,t){t&&t.length===e.length&&t.every((n,s)=>n===e[s])?Xe.delete(i):Xe.set(i,e),window.onbeforeunload=Xe.size?()=>"You have changes that are not saved in a mod yet.":null}async function Ya(i){Zt("Loading "+(Yn[i]||i)+"\u2026"),await new Promise(e=>setTimeout(e,20));try{let e=`art/environments/${i}/gameworld.tmp.zlib`,t=`art/environments/${i}/gameworld.res.zlib`,n=await Pt(e),s=zi(n,Fe.names),r=xi(t)?Kd(await Pt(t)):{skeletons:[],objects:0};L={id:i,tmpPath:e,resPath:t,origZ:n,orig:s,res:r,view:"work",cam:"tv",sel:null,selSet:new Set,undo:[],redo:[]},xi(t)&&(L.origRes=ir(await Pt(t)),L.resWork=Xe.has(t)?ir(Xe.get(t)):L.origRes.slice(),L.origScene=cn(L.origRes,Bn),L.scene=cn(L.resWork,Bn),Wb(L.scene,L.origScene)&&(L.scene=cn(L.resWork,Bn))),L.pitch=s.textures?vh(s,Fe.names):null,await Cb(),Vi(),Q("welcome").hidden=!0,await _i(!0),ds()}catch(e){nt(e.message||String(e),!0),console.error(e)}finally{Zt(!1)}}async function Cb(){L.work=Xe.has(L.tmpPath)?zi(Xe.get(L.tmpPath),Bn):L.orig}var dp=i=>new Map(Ft(i.textures).map(e=>[e.hash,e.blob]));async function pp(i){let e=$d(L.work.textures,i,[]);if(!e.reencoded.length)return 0;let t=new Map(Ft(e.out).map(o=>[o.hash,o.blob])),n=new Map(e.reencoded.map(o=>[o.hash,t.get(o.hash)])),s=qd(L.work.tmp,or(L.work.textures,n)),r=so(s);return yi(L.tmpPath,r,null),L.work=zi(r,Fe.names),e.reencoded.length}function Pb(){Xe.delete(L.tmpPath),L.work=L.orig,L.importReport="",L.resPath&&(Xe.delete(L.resPath),L.origRes&&(L.resWork=L.origRes.slice(),L.scene=cn(L.resWork,Bn))),window.onbeforeunload=Xe.size?()=>"":null}var ae={};function Ib(){let i=Q("view"),e=new qs({antialias:!0,preserveDrawingBuffer:!0});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=ft,e.localClippingEnabled=!0,i.prepend(e.domElement),ae.cutPlane=new sn(new U(0,-1,0),8),ae.fogMax={value:1};let t=new Or;t.background=new ze(7311280),ae.amb=new ba(16777215,3),t.add(ae.amb);let n=new Rt(45,1,.1,6e3),s=new Pa(n,e.domElement);s.enableDamping=!0,Object.assign(ae,{r:e,scene:t,camera:n,controls:s});let r=()=>{let o=i.clientWidth,a=i.clientHeight;e.setSize(o,a,!1),n.aspect=o/Math.max(1,a),n.updateProjectionMatrix()};new ResizeObserver(r).observe(i),r(),e.setAnimationLoop(()=>{s.update(),e.render(t,n)})}async function _i(i){let e=L.view==="orig"?L.orig:L.work,{glb:t,stats:n}=_h({world:e,names:Fe.names});L.stats=n;let s=await new jr().parseAsync(t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),"");ae.model&&(ae.scene.remove(ae.model),ae.model.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&(o.material.map&&o.material.map.dispose(),o.material.dispose())})),ae.model=s.scene,ae.scene.add(s.scene),s.scene.traverse(o=>{if(o.isMesh){let a=o.material;o.material=tM(a.transparent?new on({map:a.map,vertexColors:!!o.geometry.attributes.color,transparent:!0,depthWrite:!1,side:gn}):new on({map:a.map,vertexColors:!!o.geometry.attributes.color,alphaTest:.5,side:gn}))}}),ae.templates=new Map,ae.world=e;let r=[];s.scene.traverse(o=>{o.isMesh&&/^m([1-9]\d*)_piece/.test(o.name)&&ae.templates.set(o.name,o),/^model[1-9]/.test(o.name)&&r.push(o)});for(let o of r)o.parent.remove(o);ae.props=new tn,ae.props.name="placed props",s.scene.add(ae.props),Dp(),Xa(),await qa(),i&&Tp(L.cam),ja()}function ja(){let i=[Xe.has(L.tmpPath)&&"new textures or models",Xe.has(L.resPath)&&"objects changed",(Xe.has(vn(L.id))||zh(L.id)&&Xe.has(zh(L.id)))&&"settings changed"].filter(Boolean);Q("badge").hidden=!1,Q("badge").innerHTML=L.view==="orig"?"Original stadium":i.length?`<span class="warn">\u25CF</span> Your version (${i.join(", ")})`:"Your version (no changes yet)"}function Xa(){if(!ae.model)return;let i=Q("light").checked,e=Q("wire").checked,t=Q("cut").checked;ae.model.traverse(n=>{n.isMesh&&(n.material.vertexColors=i&&!!n.geometry.attributes.color,n.material.wireframe=e,n.material.clippingPlanes=t?[ae.cutPlane]:null,n.material.needsUpdate=!0)})}function Tp(i){L.cam=i;for(let t of Q("cams").querySelectorAll("button"))t.classList.toggle("on",t.dataset.c===i);let e={tv:[[0,12.5,15.5],[0,0,-1.5]],top:[[0,62,.01],[0,0,0]],wide:[[-30,42,30],[0,0,0]]}[i];ae.camera.position.set(...e[0]),ae.controls.target.set(...e[1]),ae.controls.update()}function Vi(){Q("sidebar").innerHTML=Fe.stadiums.length?"<h3>Stadiums</h3>"+Fe.stadiums.map(i=>`<button class="char ${L&&L.id===i?"on":""} ${Xe.has(`art/environments/${i}/gameworld.tmp.zlib`)||Xe.has(`art/environments/${i}/gameworld.res.zlib`)||Xe.has(vn(i))?"changed":""}" data-id="${i}">${Ye(Yn[i]||i)}<span class="dot"></span></button>`).join("")+(Fe.fans.length?`<h3>Fans</h3><button class="char" id="fansLink">Who cheers for each team${[...Xe.keys()].some(i=>i.startsWith("ini/crowdcharacterlists/"))?'<span class="dot" style="display:inline-block"></span>':""}</button>`:""):'<p class="dim" style="padding:8px">Open the game folder to list the stadiums.</p>';for(let i of Q("sidebar").querySelectorAll(".char[data-id]"))i.onclick=()=>Ya(i.dataset.id);Q("fansLink")&&(Q("fansLink").onclick=()=>po("fans"))}function ds(){Lb(),Ob(),pr(),fr(),Vi(),Xp().catch(i=>console.error(i))}function Lb(){let i=L.stats,e=[...new Set(L.res.skeletons)],t=e.includes("riotguard");Q("pane-stadium").innerHTML=`
    <h2>${Ye(Yn[L.id]||L.id)}</h2>
    <div class="stats">
      <div class="stat"><b>${i.pieces}</b><span>pieces</span></div>
      <div class="stat"><b>${i.tris.toLocaleString()}</b><span>triangles</span></div>
      <div class="stat"><b>${Ft(L.work.textures).filter(n=>!sr(n.blob)).length}</b><span>textures</span></div>
      <div class="stat"><b>${L.work.models.length-1}</b><span>prop models</span></div>
      <div class="stat"><b>${L.res.objects}</b><span>placed objects</span></div>
      <div class="stat"><b>${e.length}</b><span>moving parts</span></div>
    </div>
    <p class="dim">The lighting and shadows are painted into the stadium (vertex colours and the textures), so what you paint is what the game shows.</p>
    <h2>Moving parts</h2>
    ${e.length?'<ul class="parts">'+e.map(n=>`<li>${Ye(Sb[n]||n)} <span class="chip">${Ye(n)}</span></li>`).join("")+"</ul>":'<p class="dim">None: a still stadium.</p>'}
    ${t?`<div class="box">This stadium has the <b>riot guards</b>: the goal transition where the machines come out (a cutscene, the <code>riotguard</code> prop and the game's <code>CrowdRiot</code> code). Only The Vice and The Wastelands have it.</div>`:'<div class="box">No goal event here: like the classic stadiums, goals are the crowd cheering and the replay.</div>'}
    <p class="dim">See where each one is placed, move it, or copy it on the <b>Objects</b> tab.</p>
    <h2>Remodel it in Blender</h2>
    <ol class="steps"><li><b>Export stadium (.glb)</b> and import it in Blender (File &gt; Import &gt; glTF 2.0). Its pieces are named <code>m0_piece\u2026</code>.</li>
      <li>Delete, keep or add what you like: the pitch and goals the game plays on stay where they are (41.7 \xD7 24.7 m around 0, 0, 0), so keep your stadium around them. Pieces you keep where they are stay exactly as the game had them.</li>
      <li>Export from Blender as <b>glTF Binary (.glb)</b>, with <b>Data &gt; Mesh &gt; Vertex Color</b> exported (it holds the baked lighting), then <b>Bring it back</b> here.</li></ol>
    <div class="btns"><button id="expGlb">Export stadium (.glb)</button><button class="primary" id="impGlb">Bring it back (.glb)\u2026</button></div>
    <div class="set" style="max-width:420px">
      <label for="impTex">Biggest texture size</label><select id="impTex"><option value="512">512 (sharpest)</option><option value="256">256 (smaller)</option><option value="128">128 (smallest)</option></select>
      <label for="impLight">Baked light (vertex colours)</label><select id="impLight"><option value="auto">Automatic</option><option value="1">As they are</option><option value="2">Twice as bright (Wii games store half)</option></select>
    </div>
    <div id="impReport">${L.importReport||""}</div>
    ${Ub()}`,Q("expGlb").onclick=()=>{let{glb:n}=_h({world:L.work,names:Fe.names,only:[0]});fo(`${L.id}.glb`,n)},Q("impGlb").onclick=()=>{let n=Q("glbInput");n.value="",n.onchange=()=>n.files[0]&&Db(n.files[0]),n.click()}}function Ub(){let i=L.work.tmp.length,e=Math.min(100,i/fs*100),t=i>fs;return`<div class="meter"><div class="dim">Stadium size: <b>${(i/1e6).toFixed(2)} MB</b> of about ${(fs/1e6).toFixed(2)} MB (the biggest stadium in the game)${t?' <span class="warn">: too big, it may not load</span>':""}</div><div class="bar"><div style="width:${e}%;background:${t?"var(--bad)":e>90?"#e0b050":"var(--accent)"}"></div></div></div>`}async function Nb(i){let e=new nr(i),t=new Map;for(let[n,s]of(e.j.images||[]).entries())try{let r,o=s.mimeType||"image/png";if(s.bufferView!=null)r=e.view(s.bufferView).raw;else if(s.uri&&s.uri.startsWith("data:")){let h=s.uri.split(",")[1];r=Uint8Array.from(atob(h),u=>u.charCodeAt(0)),o=s.uri.slice(5,s.uri.indexOf(";"))}else continue;if(r[0]===137&&r[1]===80){t.set(n,Oa(r));continue}let a=await createImageBitmap(new Blob([r],{type:o}),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),c=document.createElement("canvas");c.width=a.width,c.height=a.height;let l=c.getContext("2d");l.drawImage(a,0,0),t.set(n,{w:a.width,h:a.height,px:l.getImageData(0,0,a.width,a.height).data})}catch(r){console.warn("image",n,r)}return t}async function Db(i){Zt("Building the stadium\u2026"),await new Promise(e=>setTimeout(e,30));try{let e=new Uint8Array(await i.arrayBuffer()),t=await Nb(e),n=Q("impLight").value,s=fp({glb:e,world:L.work,res:L.resWork,images:t,names:new Map([...Fe.names,...hn]),opts:{stadium:L.id,maxTexture:+Q("impTex").value,brightness:n==="auto"?"auto":+n}});for(let[a,c]of s.newTextureNames)hn.set(a,c);for(let a of s.objects)a.name&&hn.set(a.hash,a.name);mo();let r=so(s.tmp);yi(L.tmpPath,r,null),L.work=zi(r,Bn),L.resWork=s.res,L.sel=null,L.selSet=new Set,dr();let o=s.stats;L.importReport=`<div class="box ${s.tmp.length>fs?"warn":"ok"}"><b>${Ye(i.name)}</b> is in: ${o.keptPieces} of the game's pieces kept as they were, ${o.newObjects} new objects (${o.tris.toLocaleString()} triangles, ${o.newTextures} new textures)${o.droppedTextures?`; ${o.droppedTextures} of the old stadium's textures no longer used were taken out`:""}.${s.notes.map(a=>`<br><span class="dim">${Ye(a)}</span>`).join("")}</div>`,await _i(),ds(),nt(s.tmp.length>fs?"Brought back, but it is bigger than any stadium in the game.":"Stadium brought back.")}catch(e){nt(e.message||String(e),!0),console.error(e)}finally{Zt(!1)}}function Va(i){return([[/\/field\d+$/,"pitch"],[/sky/,"sky"],[/crowd/,"crowd"],[/sign|banner|logo|ad_/,"sign"],[/spec/,"shine"],[/env|reflect/,"reflection"],[/shadow/,"shadow"],[/net/,"net"],[/goal/,"goal"]].find(([t])=>t.test(i))||[0,""])[1]}function Ob(){try{L.pitch=L.work.textures?vh(L.work,Fe.names):null}catch{L.pitch=null}let i=Ft(L.work.textures),e=dp(L.orig),t="";if(L.pitch){let r=L.pitch;t+=`<h2>The pitch</h2><p class="dim">${r.cols*r.rows} tiles as one picture (${r.cols*r.tw}\xD7${r.rows*r.th}), far touchline at the top. Download it, paint over it, put it back.</p>
      <div class="pitch"><img id="pitchImg" alt="the pitch"></div>
      <div class="btns"><button class="small" id="pitchDl">Download pitch (PNG)</button><button class="small primary" id="pitchRep">Replace pitch\u2026</button></div>`}t+='<h2>All textures</h2><p class="dim">Replace any of them with your own PNG (same size works best). Each goes back in the format the game used for it.</p><div class="texgrid">';let n=i.map(r=>({...r,name:Fe.names.get(r.hash)||bt(r.hash)})).sort((r,o)=>(Va(r.name)==="pitch")-(Va(o.name)==="pitch")||r.name.localeCompare(o.name)),s=n.filter(r=>sr(r.blob));for(let r of n){if(sr(r.blob))continue;let a;try{a=Fn(r.blob)}catch{continue}let c=e.get(r.hash)&&e.get(r.hash)!==r.blob&&!Rp(e.get(r.hash),r.blob);t+=`<div class="tex ${c?"changed":""}" data-h="${r.hash}"><div class="img"><img loading="lazy" src="${wp(a)}" alt=""></div>
      <div class="name">${Ye(r.name.replace(/^_[a-z0-9]+\//,""))}</div><div class="meta">${a.w}\xD7${a.h}${Va(r.name)?" \xB7 "+Va(r.name):""}${c?' <span class="chip on">changed</span>':""}</div>
      <div class="row"><button class="small dl">PNG</button><button class="small rep">Replace\u2026</button></div></div>`}if(s.length&&(t+=`</div><h2>Animated pictures</h2><p class="dim">These switch between pictures while you play (the big screens, the captain's face). Repaint their frames above.</p><ul class="files">`+s.map(r=>{let o=sr(r.blob).frames;return`<li><b>${Ye(r.name.replace(/^_[a-z0-9]+\//,""))}</b>: ${o.length} frames (${o.map(a=>Ye((Fe.names.get(a.hash)||bt(a.hash)).replace(/^_[a-z0-9]+\//,""))+` ${a.seconds.toFixed(1)} s`).join(", ")})</li>`}).join("")+"</ul><div>"),Q("pane-textures").innerHTML=t+"</div>",L.pitch){let r=dp(L.work),o=Yd(L.pitch,a=>Fn(r.get(a)));Q("pitchImg").src=wp(o),Q("pitchDl").onclick=()=>fo(`${L.id}_pitch.png`,ls(o.px,o.w,o.h)),Q("pitchRep").onclick=()=>Ap(async a=>{let c=L.pitch,l=c.cols*c.tw,h=c.rows*c.th;if(a.w!==l||a.h!==h){nt(`The pitch picture has to be ${l}\xD7${h} (yours is ${a.w}\xD7${a.h}).`,!0);return}Zt("Encoding the pitch\u2026"),await new Promise(u=>setTimeout(u,20));try{let u=await pp(jd(c,a));await _i(),ds(),nt(u?`Pitch replaced (${u} tiles changed).`:"That is the same pitch as before.")}catch(u){nt(u.message,!0)}finally{Zt(!1)}})}for(let r of Q("pane-textures").querySelectorAll(".tex")){let o=+r.dataset.h,a=n.find(c=>c.hash===o);r.querySelector(".dl").onclick=()=>{let c=Fn(a.blob);fo(a.name.replace(/\//g,"_")+".png",ls(c.px,c.w,c.h))},r.querySelector(".rep").onclick=()=>Ap(async c=>{let l=ki(a.blob);(c.w!==l.w||c.h!==l.h)&&nt(`Your picture is ${c.w}\xD7${c.h}; the game's is ${l.w}\xD7${l.h}. Used at your size.`),Zt("Encoding\u2026"),await new Promise(h=>setTimeout(h,20));try{let h=await pp(new Map([[o,c]]));await _i(),ds(),nt(h?"Texture replaced.":"That picture is the same as the one already there.")}catch(h){nt(h.message,!0)}finally{Zt(!1)}})}}var Rp=(i,e)=>i.length===e.length&&i.every((t,n)=>t===e[n]),He={},Cp=i=>{let e=["birdo","shyguy","toad","pianta"].find(n=>i.startsWith(n)&&i!==n),t={birdo:"Birdo",shyguy:"Shy Guy",toad:"Toad",pianta:"Pianta",boo:"Boo",goomba:"Goomba",koopa:"Koopa",monkey:"Monkey",penguin:"Penguin",delfin:"Noki",delfina:"Noki (girl)"};return e?`${t[e]} (${i.slice(e.length)})`:t[i]||i};function Pp(i){let e=[];for(let t of i.split(/\r?\n/)){let n=/^\s*([A-Za-z0-9_]+)\s*=\s*(true|1)\s*$/i.exec(t);n&&e.push(n[1])}return e}async function Fb(){let i=[];for(let e of Ab)for(let t of["","Alt"]){let n=[...Fe.files.keys()].find(r=>r===`ini/crowdcharacterlists/${(e+t).toLowerCase()}.ini`);if(!n)continue;let s=new TextDecoder().decode(await Hi(n));i.push({team:e,alt:!!t,path:n,names:Pp(s)})}return i}async function Hh(){let i=await Fb();(!He.team||!i.find(s=>s.path===He.team))&&(He.team=i[0]&&i[0].path);let e=i.find(s=>s.path===He.team);if(!e){Q("pane-fans").innerHTML='<p class="dim">No crowd lists found (ini/CrowdCharacterLists).</p>';return}let t=new Set(e.names.map(s=>s.toLowerCase())),n=e.names.filter(s=>!Fe.fans.includes(s.toLowerCase()));(!He.fan||!Fe.fans.includes(He.fan))&&(He.fan=e.names.map(s=>s.toLowerCase()).find(s=>Fe.fans.includes(s))||Fe.fans[0]),Q("pane-fans").innerHTML=`
    <h2>Who cheers for each team</h2>
    <p class="dim">Each team has its own list of fans, named after its captain (<code>Mario.ini</code>, \u2026), used in every stadium: the crowd in the stands is drawn from these lists. Up to ${Ha} kinds per list.</p>
    <div class="field"><label>Team</label><select id="fanTeam">${i.map(s=>`<option value="${s.path}" ${s.path===He.team?"selected":""}>${Ye(Eb[s.team]||s.team)}${s.alt?" (Alt list)":""}${Xe.has(s.path)?" \u25CF":""}</option>`).join("")}</select></div>
    <div class="fanview" id="fanView"></div>
    <div class="btns"><span class="seg" id="fanAnim"><button data-a="idle" class="${He.anim!=="excited"?"on":""}">Watching</button><button data-a="excited" class="${He.anim==="excited"?"on":""}">Goal!</button></span><span class="dim" id="fanName"></span></div>
    <div class="fans">${Fe.fans.map(s=>`<label class="fan ${s===He.fan?"sel":""}" data-f="${s}"><input type="checkbox" ${t.has(s)?"checked":""}> ${Ye(Cp(s))}</label>`).join("")}</div>
    <p class="dim"><span id="fanCount">${[...t].filter(s=>Fe.fans.includes(s)).length}</span> of ${Ha} chosen.${n.length?` The game's list also names ${n.map(Ye).join(", ")}, which has no model in the game files (kept as it is).`:""}</p>
    <p class="dim">Click a name to see that fan; tick it to add it to this team's crowd.</p>`,Q("fanTeam").onchange=s=>{He.team=s.target.value,Hh()};for(let s of Q("fanAnim").querySelectorAll("button"))s.onclick=()=>{He.anim=s.dataset.a;for(let r of Q("fanAnim").querySelectorAll("button"))r.classList.toggle("on",r===s);Rh()};for(let s of Q("pane-fans").querySelectorAll(".fan")){let r=s.dataset.f,o=s.querySelector("input");s.onclick=a=>{if(a.target!==o){a.preventDefault(),He.fan=r;for(let c of Q("pane-fans").querySelectorAll(".fan"))c.classList.toggle("sel",c===s);Rh()}},o.onchange=async()=>{let a=[...Q("pane-fans").querySelectorAll(".fan input")].map((f,d)=>f.checked?Fe.fans[d]:null).filter(Boolean);if(a.length>Ha){o.checked=!1,nt(`Up to ${Ha} kinds of fan per team (the game's own lists use up to 8).`,!0);return}if(!a.length){o.checked=!0,nt("A team needs at least one kind of fan.",!0);return}let c=e.names.filter(f=>!Fe.fans.includes(f.toLowerCase())),l=await Pt(e.path),h=[...a.map(f=>`${f} = true`),...c.map(f=>`${f} = true`)].join(`\r
`)+`\r
`;Pp(new TextDecoder().decode(l)).map(f=>f.toLowerCase()).sort().join()===[...a,...c.map(f=>f.toLowerCase())].sort().join()?Xe.delete(e.path):yi(e.path,new TextEncoder().encode(h),null),Q("fanCount").textContent=a.length,Vi(),fr(),window.onbeforeunload=Xe.size?()=>"":null}}Bb(),Rh()}function Bb(){let i=Q("fanView");if(!He.r){let e=new qs({antialias:!0});e.outputColorSpace=ft,e.setPixelRatio(Math.min(2,window.devicePixelRatio||1));let t=new Or;t.background=new ze(856086),t.add(new ya(16777215,4477030,2.6));let n=new Zs(16777215,1.6);n.position.set(1,2,3),t.add(n);let s=new Rt(32,4/3,.01,50);s.position.set(.35,.62,2.1),s.lookAt(0,.42,0),Object.assign(He,{r:e,scene:t,camera:s,clock:new wa,t:0}),e.setAnimationLoop(()=>{if(!He.r.domElement.isConnected)return;let r=He.clock.getDelta();He.t+=r,He.model&&He.a&&Ip(He.t*30%(He.a.numKeys-1));let o=He.r.domElement.parentElement;if(o){let a=o.clientWidth,c=o.clientHeight;He.r.domElement.width!==Math.floor(a*He.r.getPixelRatio())&&(He.r.setSize(a,c,!1),He.camera.aspect=a/c,He.camera.updateProjectionMatrix())}He.r.render(He.scene,He.camera)})}i.innerHTML="",i.appendChild(He.r.domElement)}var Th=new Map;async function Rh(){let i=He.fan;if(!i)return;if(Q("fanName").textContent=Cp(i),!Th.has(i)){let s=`art/characters/crowd${i}/crowd${i}`,r=await Pt(`art/animation/crowd${i}.shier`),o=Vd({rlg:await Pt(s+".rlg"),rlts:[await Pt(s+".rlt")],shier:r,names:Fe.names,name:"crowd"+i}),a=await new jr().parseAsync(o.glb.buffer.slice(o.glb.byteOffset,o.glb.byteOffset+o.glb.byteLength),"");Th.set(i,{scene:a.scene,sk:Na(r),anims:Zd(await Pt(`art/animation/crowd${i}.sanim.zlib`),!0)})}let e=Th.get(i);He.model&&He.scene.remove(He.model),He.model=e.scene,He.scene.add(e.scene),He.sk=e.sk,He.bones=null,e.scene.traverse(s=>{s.isSkinnedMesh&&!He.bones&&(He.bones=s.skeleton.bones)}),He.a=e.anims.find(s=>s.name===(He.anim||"idle"))||e.anims[0],He.t=0;let t=new Kt,n=new U;for(let s of[0,Math.floor(He.a.numKeys/3),Math.floor(2*He.a.numKeys/3)])Ip(s),e.scene.updateMatrixWorld(!0),e.scene.traverse(r=>{if(r.isSkinnedMesh){let o=r.geometry.attributes.position;for(let a=0;a<o.count;a+=3)r.getVertexPosition(a,n),r.localToWorld(n),t.expandByPoint(n)}});if(!t.isEmpty()){let s=t.getCenter(new U),r=t.getSize(new U),o=Math.max(r.y,r.x*.75)/(2*Math.tan(Js.degToRad(He.camera.fov/2)))*1.35;He.camera.position.set(s.x+o*.18,s.y+r.y*.1,s.z+o),He.camera.lookAt(s)}}var kb=new $e().makeRotationX(-Math.PI/2);function Ip(i){let{bones:e,sk:t,a:n}=He;e&&e.forEach((s,r)=>{if(t.parents[r]<0){let a=Qd(n,i);kb.clone().multiply(new $e().compose(new U(...a.t),new jt(...a.q),new U(1,1,1))).decompose(s.position,s.quaternion,s.scale);return}let o=Jd(n,r,i,t.offsets?t.offsets[r]:[0,0,0]);s.quaternion.set(...o.q),s.position.set(...o.t),o.s&&s.scale.set(...o.s)})}var hn=new Map,Bn={get:i=>Fe.names.get(i)||hn.get(i)},Lp=new $e().makeRotationX(-Math.PI/2),zb=Lp.clone().invert(),ho=i=>Lp.clone().multiply(new $e().fromArray(i)).multiply(zb),pt=()=>L.view==="orig"?L.origScene:L.scene,Up=[{id:"crowd",title:"Crowd spots",note:"Points named helperNN or crowdNN, most of them on the stands, each turned to face the pitch. In stadiums like Dump and Konga Coliseum they are called crowdNN, so they are most likely where the fans are put; that isn't tested in the game yet.",test:i=>i.kind===ot.BOX},{id:"flags",title:"Big flags",note:"Points where the game puts its waving flags.",test:i=>i.kind===ot.POINT&&/flag/i.test(i.name||"")},{id:"guards",title:"Riot guards",note:"Where the riot guards stand for the goal event.",test:i=>i.kind===ot.POINT&&/riot/i.test(i.name||"")},{id:"props",title:"Props",note:"Moving parts placed around the stadium: signs, small flags, foam fingers, field generators, flying cameras\u2026 Each is a copy of one of the stadium's prop models with its animation.",test:i=>i.kind===ot.PROXY},{id:"fx",title:"Effects",note:"Particle emitters (sparks, confetti, steam\u2026).",test:i=>i.kind===ot.EMITTER&&i.parent==null},{id:"points",title:"Other points",note:"",test:i=>i.kind===ot.POINT}],Gi=i=>i.parent==null||i.kind===ot.PROXY?Up.find(e=>e.test(i)):null,Np=i=>(i||"").replace(/\d+$/,"").replace(/_?proxy$/,"").replace(/_/g," ").trim();function Dp(){if(!ae.props)return;for(let t of[...ae.props.children])ae.props.remove(t);let i=pt();if(!i||!ae.world)return;let e=new Map;ae.world.models.forEach((t,n)=>{if(n)for(let s of t.objects||[])e.set(s.hash,{mi:n,...s})}),ae.propOf=new Map;for(let t of i.recs){if(t.kind!==ot.PIECE||!e.has(t.piece))continue;let n=e.get(t.piece),s=new tn;for(let o=n.first;o<n.first+n.count;o++){let a=ae.templates.get(`m${n.mi}_piece${String(o).padStart(3,"0")}`);if(a){let c=new zt(a.geometry,a.material);s.add(c)}}s.matrixAutoUpdate=!1,s.matrix.copy(ho(pi(i,t.i)));let r=t;for(;r.parent!=null;)r=i.recs[r.parent];s.userData.rec=r.i,ae.props.add(s),ae.propOf.has(r.i)||ae.propOf.set(r.i,[]),ae.propOf.get(r.i).push(s)}ae.props.updateMatrixWorld(!0),Vb()}var Hb={crowd:4174847,flags:16763199,guards:16734810,props:8191882,fx:14060543,points:16777215};function Vb(){ae.marks&&(ae.scene.remove(ae.marks),ae.marks.traverse(e=>{e.geometry&&e.geometry.dispose()})),ae.marks=new tn,ae.scene.add(ae.marks),ae.marks.visible=Q("marks").checked,ae.markOf=new Map;let i=pt();if(i){for(let e of i.recs){let t=Gi(e);if(!t||t.id==="props")continue;let n=new zt(new pa(t.id==="fx"?.35:.6),new on({color:Hb[t.id]}));n.matrixAutoUpdate=!1,n.matrix.copy(ho(pi(i,e.i))),n.userData.rec=e.i,n.traverse(s=>{s.userData.rec=e.i}),ae.marks.add(n),ae.markOf.set(e.i,[n])}ae.marks.updateMatrixWorld(!0),Ka()}}function dr(){yi(L.resPath,so(L.resWork),null),Rp(L.resWork,L.origRes)&&Xe.delete(L.resPath),L.scene=cn(L.resWork,Bn),Dp(),Vi(),fr(),ja(),Q("objUndo")&&(Q("objUndo").disabled=!(L.undo&&L.undo.length),Q("objRedo").disabled=!(L.redo&&L.redo.length))}function pr(){let i=pt();if(!i){Q("pane-objects").innerHTML='<p class="dim">This stadium has no object list.</p>';return}let e=new Map(L.origScene.recs.map(c=>[c.kind+":"+c.hash,c])),t=c=>{let l=e.get(c.kind+":"+c.hash);return!l||c.m&&l.m&&c.m.some((h,u)=>Math.abs(h-l.m[u])>1e-5)},n=L.view!=="orig",s=(L.objFilter||"").trim().toLowerCase(),r=c=>!s||(c.name||bt(c.hash)).toLowerCase().includes(s),o=`<h2>${Ye(Yn[L.id]||L.id)}: what's placed where</h2><p class="dim">${i.count} objects in the stadium's scene. Positions are in metres: <b>x</b> along the pitch, <b>y</b> across it, <b>z</b> up; the centre spot is 0, 0, 0.</p>`;n?o+=`<div class="btns objtop"><button class="small" id="objUndo" ${L.undo&&L.undo.length?"":"disabled"} title="Ctrl+Z">\u21B6 Undo</button><button class="small" id="objRedo" ${L.redo&&L.redo.length?"":"disabled"} title="Ctrl+Y">\u21B7 Redo</button><input type="text" id="objFilter" placeholder="Find by name\u2026" value="${Ye(L.objFilter||"")}"></div>`:o+=`<div class="box">You're looking at the original. Switch to <b>Your version</b> to move things.</div>`,n&&Xe.has(L.tmpPath)&&(L.importReport||L.work.models[0].objects.length!==L.orig.models[0].objects.length)&&(o+=`<div class="box tips"><b>New stadium?</b> The old stadium's props and crowd spots are still where its stands were. To clear the props: <b>Select all</b> next to Props, then <b>Remove</b>. To fit the crowd spots onto your new stands: <b>Select all</b> next to Crowd spots, then use <b>Spread</b> and <b>z</b> to line them up, and <b>Sit on the stadium</b> to drop each one onto the seats.</div>`),o+='<div id="selEditor"></div>';let a=(c,l)=>`<button class="small selall" data-ids="${c.join(",")}">${l}</button>`;for(let c of Up){let l=i.recs.filter(u=>Gi(u)===c);if(!l.length)continue;let h=l.filter(r);if(h.length){if(o+=`<h2>${Ye(c.title)} <span class="chip">${l.length}</span> ${a(h.map(u=>u.i),"Select all")}</h2>${c.note?`<p class="dim">${Ye(c.note)}</p>`:""}<div class="objlist">`,c.id==="props"){let u=new Map;for(let f of h){let d=Np(f.name)||"prop";u.has(d)||u.set(d,[]),u.get(d).push(f)}for(let[f,d]of u)o+=`<div class="objsub">${Ye(f)} <span class="dim">\xD7${d.length}</span> ${d.length>1?a(d.map(g=>g.i),"select all"):""}</div>`+d.map(g=>gp(g,t(g))).join("")}else o+=h.map(u=>gp(u,t(u))).join("");o+="</div>"}}n&&(o+=`<h2>Add a prop from any stadium</h2><p class="dim">Brings a prop with its model, textures and animation into ${Ye(Yn[L.id]||L.id)}. It's put over the centre spot, at the height it had in its own stadium (hanging banners stay up); then move it where you want. Some "props" are big groups: Galactic Stadium's asteroids are a whole ring around the stadium.</p>
    <div class="field"><label>From</label><select id="addFrom">${Fe.stadiums.map(c=>`<option value="${c}" ${c===(L.addFrom||L.id)?"selected":""}>${Ye(Yn[c]||c)}</option>`).join("")}</select></div>
    <div class="field"><label>Prop</label><select id="addKind"><option>Loading\u2026</option></select></div>
    <div class="btns"><button class="primary small" id="addBtn" disabled>Add it here</button></div>`),Q("pane-objects").innerHTML=o;for(let c of Q("pane-objects").querySelectorAll(".obj"))c.onclick=l=>{l.ctrlKey||l.metaKey||l.shiftKey?Fp(+c.dataset.i):uo(+c.dataset.i,!0)};for(let c of Q("pane-objects").querySelectorAll(".selall"))c.onclick=l=>{let h=c.dataset.ids.split(",").map(Number);qn(l.ctrlKey||l.metaKey?[...new Set([...un(),...h])]:h,null,!0)};Q("objUndo")&&(Q("objUndo").onclick=Hp,Q("objRedo").onclick=Fh),Q("objFilter")&&(Q("objFilter").oninput=c=>{L.objFilter=c.target.value;let l=c.target.selectionStart;pr();let h=Q("objFilter");h.focus(),h.setSelectionRange(l,l)}),Za(),Q("addFrom")&&(Q("addFrom").onchange=c=>{L.addFrom=c.target.value,mp()},mp(),Q("addBtn").onclick=Gb)}var lo=new Map;async function Op(i){if(i===L.id)return{world:L.work,res:L.resWork,scene:L.scene};if(!lo.has(i)){let e=zi(await Pt(`art/environments/${i}/gameworld.tmp.zlib`),Fe.names),t=ir(await Pt(`art/environments/${i}/gameworld.res.zlib`));lo.set(i,{world:e,res:t,scene:cn(t,Bn)})}return lo.get(i)}async function mp(){let i=Q("addFrom").value,e=Q("addKind");try{let t=await Op(i),n=op(t.scene).filter(s=>s.i!=null);if(Q("addFrom").value!==i)return;e.innerHTML=n.map(s=>`<option value="${s.i}">${Ye(Np(s.kind)||s.kind)} (\xD7${s.count})</option>`).join("")||'<option value="">No props here</option>',Q("addBtn").disabled=!n.length}catch(t){e.innerHTML='<option value="">Could not read it</option>',console.error(t)}}async function Gb(){let i=Q("addFrom").value,e=+Q("addKind").value;if(isFinite(e)){Zt("Adding the prop\u2026"),await new Promise(t=>setTimeout(t,20));try{let t=await Op(i),n=t.scene.recs[e].m.slice();n[12]=0,n[13]=0,mo();let s=ap({world:L.work,res:L.resWork,names:Bn},t,e,n);for(let c of s.names)Fe.names.get(ht(c))||hn.set(ht(c),c);if(s.tmp!==L.work.tmp){let c=so(s.tmp);yi(L.tmpPath,c,null),L.work=zi(c,Fe.names)}L.resWork=s.res,dr(),await _i(),ds();let r=L.scene.recs.find(c=>c.name===s.name&&c.kind===ot.PROXY);r&&uo(r.i,!0);let o=s.added,a=[o.models&&`${o.models} model${o.models>1?"s":""}`,o.textures&&`${o.textures} texture${o.textures>1?"s":""}`,o.animations&&`its animation (${o.skeleton})`].filter(Boolean);nt(`Added ${s.name}${a.length?", with "+a.join(", "):""}.`)}catch(t){nt(t.message||String(t),!0),console.error(t)}finally{Zt(!1)}}}function Wb(i,e){let t=i.recs.filter(o=>o.kind===ot.PROXY&&!o.name);if(!t.length)return!1;let n=new Map,s=o=>{if(o){for(let a of o.recs)if(a.kind===ot.PROXY&&a.name){let c=a.name.replace(/\d+$/,""),l=(a.name.match(/\d+$/)||[""])[0].length;n.has(c)||n.set(c,{w:l,kids:(a.kids||[]).map(h=>o.recs[h].name).filter(Boolean).map(h=>h.slice(a.name.length))})}}};s(e),s(i);for(let o of lo.values())s(o.scene);let r=0;for(let o of t)for(let[a,{w:c,kids:l}]of n){let h=null;for(let u=1;u<1e3&&!h;u++){let f=a+String(u).padStart(c,"0");ht(f)===o.hash&&(h=f)}if(h){hn.set(o.hash,h);for(let u of l)hn.set(ht(h+u),h+u);r++;break}}return r>0}var gp=(i,e)=>`<button class="obj ${Vh(i.i)?"on":""} ${e?"changed":""}" data-i="${i.i}" title="${Ye(i.name||"")}">${Ye((i.name||bt(i.hash)).replace(/^.*\//,""))}${e?" \u25CF":""}</button>`,un=()=>{let i=pt();return[...L.selSet||[]].filter(e=>i&&i.recs[e]&&i.recs[e].m)},Vh=i=>!!(L.selSet&&L.selSet.has(i));function qn(i,e,t){L.selSet=new Set(i),L.sel=e??(i.length?i[i.length-1]:null),L.selBase=null,L.grp=null,Ka(),t&&kp(),Xb(),Za()}function Fp(i){let e=new Set(L.selSet||[]);e.has(i)?e.delete(i):e.add(i),qn([...e],e.has(i)?i:null)}function uo(i,e){qn(i==null?[]:[i],i,e)}function Xb(){let i=Q("pane-objects");if(i)for(let e of i.querySelectorAll(".obj"))e.classList.toggle("on",Vh(+e.dataset.i))}var $b=()=>new Set(un().map(i=>pt().recs[i].hash));function Bp(i,e){let t=pt();qn(t.recs.filter(n=>i.has(n.hash)&&Gi(n)).map(n=>n.i),null,e)}var Gh=i=>[...ae.propOf&&ae.propOf.get(i)||[],...ae.markOf&&ae.markOf.get(i)||[]];function Ka(){ae.selGroup&&(ae.scene.remove(ae.selGroup),ae.selGroup.traverse(t=>{t.geometry&&t.geometry.dispose()}),ae.selGroup=null),ae.selAll=null;let i=un();if(!i.length)return;ae.selGroup=new tn;let e=new Kt;for(let t of i.slice(0,600)){let n=new Kt;for(let s of Gh(t))n.expandByObject(s);if(n.isEmpty()){let s=new U().applyMatrix4(ho(pi(pt(),t)));n.setFromCenterAndSize(s,new U(1,1,1))}n.expandByScalar(.15),e.union(n),ae.selGroup.add(new $r(n,t===L.sel?16772608:16753920))}i.length>1&&ae.selGroup.add(new $r(e.clone().expandByScalar(.6),7855615)),ae.selAll=e,ae.scene.add(ae.selGroup)}function kp(){if(!ae.selAll)return;let i=ae.selAll.getCenter(new U),e=ae.selAll.getSize(new U).length(),t=ae.camera.position.clone().sub(ae.controls.target).normalize();ae.controls.target.copy(i),ae.camera.position.copy(i.clone().add(t.multiplyScalar(Math.max(6,e*1.3)))),ae.controls.update()}var xp=Math.PI/180;function Dh(i,e,t,n){let s=Math.cos(e*xp),r=Math.sin(e*xp),o=i.slice();for(let l=0;l<3;l++){let h=i[l*4],u=i[l*4+1];o[l*4]=s*h-r*u,o[l*4+1]=r*h+s*u}let a=i[12]-t,c=i[13]-n;return o[12]=t+s*a-r*c,o[13]=n+r*a+s*c,o}var lr=(i,e,t,n)=>{let s=i.slice();return s[12]+=e,s[13]+=t,s[14]+=n,s},qb=(i,e)=>e.parent!=null?pi(i,e.parent):null,yp=i=>new $e().fromArray(i);function Oh(i){let e=pt();for(let t of un()){let n=e.recs[t],s=qb(e,n),r=i(t),o=ho(pi(e,t)),c=ho(s?yp(s).multiply(yp(r)).toArray():r).multiply(o.invert());for(let l of Gh(t))l.userData.start||(l.userData.start=l.matrix.clone()),l.matrix.copy(c.clone().multiply(l.userData.start)),l.updateMatrixWorld(!0)}}function gi(i,e){if(L.view==="orig")return;let t=pt(),n=un();if(!n.length)return;mo();for(let o of n)tp(L.resWork,t.recs[o],i(o));let s=L.selBase,r=L.grp;dr(),e?(L.selBase=s,L.grp=r):(L.selBase=null,L.grp=null),Ka(),Zb(),setTimeout(Za,0)}function Ch(){let i=pt(),e=un();L.selBase||(L.selBase=new Map(e.map(a=>[a,i.recs[a].m.slice()])),L.grp={dx:0,dy:0,dz:0,turn:0,spread:100});let t=L.grp,n=t.spread/100,s=L.selBase,r=0,o=0;for(let a of s.values())r+=a[12]*n,o+=a[13]*n;return r/=s.size||1,o/=s.size||1,a=>{let c=s.get(a).slice();return c[12]*=n,c[13]*=n,c=Dh(c,t.turn,r,o),lr(c,t.dx,t.dy,t.dz)}}var Yb=()=>!!L.snap,Ph=(i,e)=>Yb()?Math.round(i/e)*e:i;function Wh(){return{res:L.resWork.slice(),tmp:Xe.get(L.tmpPath)||null,names:new Map(hn)}}function mo(){L.undo=L.undo||[],L.undo.push(Wh()),L.undo.length>60&&L.undo.shift(),L.redo=[]}async function zp(i){let e=$b();for(let[n,s]of i.names)hn.set(n,s);let t=Xe.get(L.tmpPath)||null;L.resWork=i.res,dr(),t!==i.tmp&&(i.tmp?(yi(L.tmpPath,i.tmp,null),L.work=zi(i.tmp,Fe.names)):(Xe.delete(L.tmpPath),L.work=L.orig),await _i()),pr(),Bp(e)}async function Hp(){if(!L||!L.undo||!L.undo.length){nt("Nothing to undo.");return}let i=L.undo.pop();(L.redo=L.redo||[]).push(Wh()),await zp(i),nt("Undone.")}async function Fh(){if(!L||!L.redo||!L.redo.length){nt("Nothing to redo.");return}let i=L.redo.pop();L.undo.push(Wh()),await zp(i),nt("Redone.")}function Vp(){let i=pt(),e=un(),t=e.filter(s=>i.recs[s].kind===ot.PROXY),n=e.length-t.length;if(!t.length){nt("Only props can be removed. Crowd spots, flag spots, riot guards and effects can be moved (the game expects them).",!0);return}try{mo(),L.resWork=rp(L.resWork,i,t),dr(),pr(),qn([]),nt(`Removed ${t.length} prop${t.length>1?"s":""}.`+(n?` ${n} other object${n>1?"s were":" was"} kept: only props can be removed.`:""))}catch(s){nt(s.message,!0)}}function Gp(){let i=un().filter(t=>pt().recs[t].kind===ot.PROXY&&pt().recs[t].name);if(!i.length){nt("Only props can be copied.",!0);return}mo();let e=new Set;try{let t=i.map(n=>pt().recs[n].name);for(let n of t){let s=pt(),r=s.recs.find(h=>h.kind===ot.PROXY&&h.name===n);if(!r)continue;let o=za(s,r.name),a=r.m.slice();a[12]+=2;let c=ip(L.resWork,s,r.i,o,a);hn.set(ht(o),o);let l=h=>{for(let u of s.recs[h].kids||[]){let f=s.recs[u].name;f&&hn.set(ht(o+f.slice(r.name.length)),o+f.slice(r.name.length)),l(u)}};l(r.i),L.resWork=c,L.scene=cn(L.resWork,Bn),e.add(ht(o))}dr(),pr(),Bp(e,!0),nt(`Copied ${e.size} prop${e.size>1?"s":""}, 2 m along. The copies are selected: move them where you want.`)}catch(t){nt(t.message,!0)}}function jb(){let i=pt(),e=new Map(L.origScene.recs.map(n=>[n.kind+":"+n.hash,n]));if(!un().filter(n=>e.has(i.recs[n].kind+":"+i.recs[n].hash)).length){nt("These are new: use Remove to take them out.",!0);return}gi(n=>(e.get(i.recs[n].kind+":"+i.recs[n].hash)||i.recs[n]).m)}function Kb(){if(!ae.model)return;let i=pt(),e=un();if(!e.length)return;let t=[];ae.model.traverse(a=>{if(a.isMesh&&a.visible){let c=a,l=!1;for(;c;){if(c===ae.props){l=!0;break}c=c.parent}l||t.push(a)}});let n=new Wr;n.far=300;let s=new Map,r=0;for(let a of e){let c=pi(i,a),l=new U(c[12],c[14]+40,-c[13]);n.set(l,new U(0,-1,0));let h=n.intersectObjects(t,!1).find(d=>d.face&&d.face.normal.clone().transformDirection(d.object.matrixWorld).y>.3);if(!h){r++;continue}let u=i.recs[a],f=h.point.y-c[14];s.set(a,lr(u.m,0,0,f))}if(!s.size){nt("Nothing under them to sit on.",!0);return}let o=new Set(L.selSet);L.selSet=new Set(s.keys()),gi(a=>s.get(a)),L.selSet=o,Ka(),Za(),nt(`Put ${s.size} on the stadium below them${r?`; ${r} had nothing under them`:""}.`)}var mi=(i,e,t,n,s,r,o,a="")=>`<label for="${i}">${e}</label><input type="range" id="${i}R" min="${n}" max="${s}" step="${r}" value="${t}" ${o?"":"disabled"}><input type="number" id="${i}" step="${r}" value="${(+t).toFixed(r<1?2:0)}" ${o?"":"disabled"}>${a}`;function Za(){let i=Q("selEditor");if(!i)return;let e=pt(),t=un(),n=L.view!=="orig";if(!t.length){i.innerHTML='<div class="box tips"><b>Selecting:</b> click an object here or in the 3D view. <b>Ctrl+click</b> adds or takes one away; <b>Shift+drag</b> in the 3D view draws a box around many (turn on Markers to include crowd and flag spots); the <b>Select all</b> buttons take a whole group.</div>';return}let s=t.filter(o=>e.recs[o].kind===ot.PROXY).length,r=`<div class="btns">
      <button class="small" id="selLook">Look at ${t.length>1?"them":"it"}</button>
      ${n?`<button class="small" id="selSit" title="Drops ${t.length>1?"each one":"it"} straight down onto the stadium (stands, steps, the ground)">Sit on the stadium</button>
      <button class="small" id="selBack">Put back</button>
      ${s?`<button class="small" id="selCopy">Copy${t.length>1?` ${s} prop${s>1?"s":""}`:""}</button><button class="small danger" id="selDel">Remove${t.length>1?` ${s} prop${s>1?"s":""}`:""}</button>`:""}`:""}
      <button class="small" id="selNone">Select none</button></div>
    ${n?`<label class="snap"><input type="checkbox" id="snap" ${L.snap?"checked":""}> Snap (0.5 m, 15\xB0)</label>
    <p class="dim keys">In the 3D view: <b>drag</b> ${t.length>1?"one of them":"it"} to move along the ground, <b>Alt+drag</b> to raise or lower \xB7 arrow keys nudge (Shift: 2 m) \xB7 PgUp/PgDn height \xB7 Q/E turn \xB7 Del remove \xB7 Ctrl+D copy \xB7 Ctrl+Z undo</p>`:""}`;if(t.length===1){let o=e.recs[t[0]],a=Gi(o),c=Sh(o);if(i.innerHTML=`<div class="box sel"><b>${Ye(o.name||bt(o.hash))}</b> <span class="chip">${Ye(a?a.title.replace(/s$/,""):"")}</span>
      <div class="set3">${mi("px","x (along)",c.x,-150,150,.25,n)}${mi("py","y (across)",c.y,-150,150,.25,n)}${mi("pz","z (height)",c.z,-40,120,.25,n)}${mi("pt","Turn (\xB0)",c.turn,-180,180,1,n)}</div>${r}</div>`,n){let l=u=>+Q(u).value,h=()=>{let u={x:l("px"),y:l("py"),z:l("pz"),turn:l("pt")};return Object.values(u).every(isFinite)?()=>np(o,u):null};for(let u of["px","py","pz","pt"])Q(u+"R").oninput=()=>{Q(u).value=(+Q(u+"R").value).toFixed(u==="pt"?0:2);let f=h();f&&Oh(f)},Q(u+"R").onchange=Q(u).onchange=f=>{f.target===Q(u)&&(Q(u+"R").value=Q(u).value);let d=h();d&&gi(d)}}}else{let o=new Map;for(let c of t){let l=Gi(e.recs[c]),h=l?l.title.toLowerCase():"other";o.set(h,(o.get(h)||0)+1)}let a=L.grp||{dx:0,dy:0,dz:0,turn:0,spread:100};if(i.innerHTML=`<div class="box sel"><b>${t.length} selected</b> <span class="dim">(${[...o].map(([c,l])=>`${l} ${Ye(c)}`).join(", ")})</span>
      ${n?`<p class="dim" style="margin:6px 0 2px">Moves them together, from where they were when you selected them.</p>
      <div class="set3">${mi("gx","x (along)",a.dx,-100,100,.25,n,"")}${mi("gy","y (across)",a.dy,-100,100,.25,n)}${mi("gz","z (height)",a.dz,-40,60,.25,n)}${mi("gt","Turn (\xB0)",a.turn,-180,180,1,n)}${mi("gs","Spread (%)",a.spread,25,250,1,n)}</div>
      <p class="dim" style="margin:2px 0 6px">Turn goes round their middle. Spread moves them away from the centre spot (over 100%) or in towards it.</p>`:""}${r}</div>`,n){let c={gx:"dx",gy:"dy",gz:"dz",gt:"turn",gs:"spread"};for(let l of Object.keys(c)){let h=u=>{let f=+u.value;return isFinite(f)?(Ch(),L.grp[c[l]]=f,!0):!1};Q(l+"R").oninput=()=>{Q(l).value=(+Q(l+"R").value).toFixed(l==="gt"||l==="gs"?0:2),h(Q(l+"R"))&&Oh(Ch())},Q(l+"R").onchange=Q(l).onchange=u=>{u.target===Q(l)&&(Q(l+"R").value=Q(l).value),h(u.target)&&gi(Ch(),!0)}}}}Q("selLook").onclick=kp,Q("selNone").onclick=()=>qn([]),n&&(Q("snap").onchange=o=>{L.snap=o.target.checked},Q("selSit").onclick=Kb,Q("selBack").onclick=jb,Q("selDel")&&(Q("selDel").onclick=Vp),Q("selCopy")&&(Q("selCopy").onclick=Gp))}function Zb(){let i=pt(),e=Q("pane-objects");if(e)for(let t of e.querySelectorAll(".obj")){let n=i.recs[+t.dataset.i];if(!n)continue;let s=L.origScene.recs.find(o=>o.hash===n.hash&&o.kind===n.kind),r=!s||n.m&&n.m.some((o,a)=>Math.abs(o-s.m[a])>1e-5);t.classList.toggle("changed",!!r),t.textContent=(n.name||bt(n.hash)).replace(/^.*\//,"")+(r?" \u25CF":"")}}function Wp(i){let e=ae.r.domElement.getBoundingClientRect(),t=new Wr;return t.setFromCamera(new ke((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),ae.camera),t}function Ih(i){let e=[...ae.props?ae.props.children:[],...ae.marks&&ae.marks.visible?ae.marks.children:[]],t=Wp(i).intersectObjects(e,!0).find(s=>{let r=s.object;for(;r&&r.userData.rec==null;)r=r.parent;return!!r});if(!t)return null;let n=t.object;for(;n.userData.rec==null;)n=n.parent;return{i:n.userData.rec,point:t.point}}function Jb(){let i=ae.r.domElement,e=Q("view"),t=document.createElement("div");t.className="selrect",e.appendChild(t);let n=null,s=null,r=null;i.addEventListener("pointerdown",a=>{if(n={x:a.clientX,y:a.clientY},s=null,r=null,!L||a.button!==0)return;if(a.shiftKey){s="box",ae.controls.enabled=!1,i.setPointerCapture(a.pointerId);return}if(L.view==="orig"||a.ctrlKey||a.metaKey)return;let c=Ih(a);if(!c||!Vh(c.i))return;s="move",ae.controls.enabled=!1,i.setPointerCapture(a.pointerId);let l=a.altKey?ae.camera.getWorldDirection(new U).setY(0).normalize().negate():new U(0,1,0);l.lengthSq()<1e-6&&l.set(0,0,1),r={plane:new sn().setFromNormalAndCoplanarPoint(l,c.point),from:c.point.clone(),up:a.altKey,d:[0,0,0]}},{capture:!0}),i.addEventListener("pointermove",a=>{if(!n||!s)return;if(s==="box"){let h=e.getBoundingClientRect(),u=Math.min(n.x,a.clientX)-h.left,f=Math.min(n.y,a.clientY)-h.top;Object.assign(t.style,{display:"block",left:u+"px",top:f+"px",width:Math.abs(a.clientX-n.x)+"px",height:Math.abs(a.clientY-n.y)+"px"});return}let c=Wp(a).ray.intersectPlane(r.plane,new U);if(!c)return;let l=c.sub(r.from);r.d=r.up?[0,0,Ph(l.y,.5)]:[Ph(l.x,.5),Ph(-l.z,.5),0],Oh(h=>lr(pt().recs[h].m,...r.d))});let o=a=>{let c=s,l=n&&Math.hypot(a.clientX-n.x,a.clientY-n.y)>4;if(ae.controls.enabled=!0,t.style.display="none",c==="box"){if(l){let h=i.getBoundingClientRect(),u=Math.min(n.x,a.clientX)-h.left,f=Math.max(n.x,a.clientX)-h.left,d=Math.min(n.y,a.clientY)-h.top,g=Math.max(n.y,a.clientY)-h.top,y=pt(),m=[],p=ae.marks&&ae.marks.visible;for(let x of y.recs){let v=Gi(x);if(!v||!p&&v.id!=="props")continue;let M=pi(y,x.i),w=new U(M[12],M[14],-M[13]).project(ae.camera);if(w.z>1)continue;let S=(w.x+1)/2*h.width,I=(1-w.y)/2*h.height;S>=u&&S<=f&&I>=d&&I<=g&&m.push(x.i)}let _=a.ctrlKey||a.metaKey?un():[];po("objects"),qn([...new Set([..._,...m])]),nt(m.length?`Selected ${m.length}${_.length?" more":""}.`:"Nothing in that box"+(p?".":" (turn on Markers to include crowd and flag spots)."))}}else if(c==="move")if(l&&r&&r.d.some(h=>h)){let h=r.d;gi(u=>lr(pt().recs[u].m,...h))}else{for(let h of un())for(let u of Gh(h))u.userData.start&&(u.matrix.copy(u.userData.start),u.updateMatrixWorld(!0));if(!l){let h=Ih(a);h&&uo(h.i,!1)}}else if(n&&!l&&L&&a.button===0){let h=Ih(a);h?(po("objects"),a.ctrlKey||a.metaKey?Fp(h.i):uo(h.i,!1)):Q("pane-objects").classList.contains("on")&&!(a.ctrlKey||a.metaKey)&&qn([])}n=null,s=null,r=null};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o),document.addEventListener("keydown",a=>{if(!L||/^(INPUT|SELECT|TEXTAREA)$/.test(a.target.tagName||"")||!Q("pane-objects").classList.contains("on"))return;let c=a.key.toLowerCase(),l=a.ctrlKey||a.metaKey;if(l&&c==="z"){a.preventDefault(),a.shiftKey?Fh():Hp();return}if(l&&c==="y"){a.preventDefault(),Fh();return}if(c==="escape"){qn([]);return}let h=un();if(!h.length||L.view==="orig")return;if(l&&c==="a"){a.preventDefault();let v=Gi(pt().recs[L.sel??h[0]]);v&&qn(pt().recs.filter(M=>Gi(M)===v).map(M=>M.i));return}if(l&&c==="d"){a.preventDefault(),Gp();return}if(c==="delete"||c==="backspace"){a.preventDefault(),Vp();return}let u=a.shiftKey?2:.5,f=ae.camera.getWorldDirection(new U),d=f.x,g=-f.z,y=Math.hypot(d,g)||1;d/=y,g/=y;let p=Math.abs(d)>Math.abs(g)?[Math.sign(d),0]:[0,Math.sign(g)],_=[p[1],-p[0]],x={arrowup:p,arrowdown:[-p[0],-p[1]],arrowright:_,arrowleft:[-_[0],-_[1]]}[c];if(x){a.preventDefault(),gi(v=>lr(pt().recs[v].m,x[0]*u,x[1]*u,0));return}if(c==="pageup"||c==="pagedown"){a.preventDefault();let v=(c==="pageup"?1:-1)*(a.shiftKey?1:.25);gi(M=>lr(pt().recs[M].m,0,0,v));return}if(c==="q"||c==="e"){a.preventDefault();let v=(c==="q"?1:-1)*(a.shiftKey?45:15),M=pt();if(h.length===1){let I=M.recs[h[0]].m;gi(()=>Dh(I,v,I[12],I[13]));return}let w=0,S=0;for(let I of h)w+=M.recs[I].m[12],S+=M.recs[I].m[13];w/=h.length,S/=h.length,gi(I=>Dh(M.recs[I].m,v,w,S))}})}var Bh=["DryTerrain","NormalTerrain","SlowTerrain","WetTerrain","SlipperyTerrain","ThunderTerrain"],hr={battledome:1,bowserstadium:0,craterfield:2,crystalcanyon:0,dump:3,galacticstadium:1,kongacoliseum:1,lavapit:0,pipelinecentral:1,stormship:1,thepalace:2,thunderisland:5,underground:1,vice:2,vicenight:2,wastelands:4,sandtomb:0,tutorialfield:0,lowpolystadium:1},_p={DryTerrain:"Dry",NormalTerrain:"Normal",SlowTerrain:"Slow (grass)",WetTerrain:"Wet (sludge)",SlipperyTerrain:"Slippery (ice)",ThunderTerrain:"Thunder"},Ga=(i,e,t,n)=>[i,e,t,n],ao=[{title:"Fog",note:"Fog fades faraway things into a colour. The 3D view shows it (roughly: the game has three kinds of fog, and the view draws them all the same way).",fields:[{sec:"Render/Fog",key:"Fog Enabled",type:"bool",label:"Fog on",def:"false"},{rgb:Ga("Render/Fog","Fog Red","Fog Green","Fog Blue"),label:"Colour",def:[160,170,180]},{sec:"Render/Fog",key:"Fog Start",label:"Starts (metres from the camera)",def:"40",step:1},{sec:"Render/Fog",key:"Fog End",label:"Thickest at (metres)",def:"260",step:1},{sec:"Render/Fog",key:"Fog Intensity",label:"Strength (0 to 1)",def:"1.0",step:.05,min:0,max:1},{sec:"Render/Fog",key:"Fog Type",type:"select",options:["0","1","2"],label:"Kind (0, 1 or 2)",def:"0"}]},{title:"Light on the players",note:"The colour of the light the characters are lit with (white is plain). Galactic Stadium uses a blue one.",fields:[{rgb:Ga("Rendering/Lighting/Character","Character Light Red","Character Light Green","Character Light Blue"),label:"Colour",def:[255,255,255]}]},{title:"Glow",note:`The bloom on the bright parts of the stadium (the game's "High Range" settings). What each number does is read from its name, so try small changes.`,fields:[{sec:"Rendering/Effects/HighRange/Stadium",key:"High Range Mult",label:"Strength",def:"2.5",step:.1},{sec:"Rendering/Effects/HighRange/Stadium",key:"High Range Offset",label:"Starts at (brightness)",def:"3.5",step:.1},{sec:"Rendering/Effects/HighRange/Stadium",key:"Alpha",label:"Amount (0 to 255)",def:"108",step:1,min:0,max:255},{rgb:Ga("Rendering/Effects/HighRange/Stadium","Red","Green","Blue"),label:"Colour",def:[255,255,255]}]},{title:"Player shadows",fields:[{rgb:Ga("Rendering/ShadowVolume","red","green","blue"),label:"Colour",def:[0,0,0]},{sec:"Rendering/ShadowVolume",key:"alpha",label:"Darkness (0 to 255)",def:"64",step:1,min:0,max:255}]},{title:"Crowd",note:"How tightly the fans in the stands are packed, and the size of the far-away fans (drawn as flat pictures).",fields:[{sec:"Render/Crowd/Layout",key:"Distance Between Crowd Rows",label:"Space between rows (m)",def:"0.75",step:.05,min:.2},{sec:"Render/Crowd/Layout",key:"Distance Between Crowd Members",label:"Space between fans (m)",def:"0.75",step:.05,min:.2},{sec:"Render/Crowd",key:"Impostor Width",label:"Far-away fan width (m)",def:"1.300",step:.05},{sec:"Render/Crowd",key:"Impostor Height",label:"Far-away fan height (m)",def:"1.500",step:.05}]}],Lh=[{key:"Speed",label:"Running speed",step:.025},{key:"Slipperyness",label:"Slipperiness (players slide)",step:.02,min:0,max:1},{key:"Friction",label:"Ball rolling drag",step:.025,min:0},{key:"Bounce",label:"Ball bounce",step:.05,min:0}],ln=i=>i?new TextDecoder("latin1").decode(i):"",kh=i=>Uint8Array.from(i,e=>e.charCodeAt(0)&255),vn=i=>`ini/stadiums/${i}.ini`,zh=i=>i in hr?`ini/terrain/${Bh[hr[i]].toLowerCase()}.ini`:null,Uh=i=>Math.max(0,Math.min(255,Math.round(+i||0))).toString(16).padStart(2,"0");async function ur(i,e){let t=di(ln(await Pt("ini/stadiums/default.ini"))),n=di(ln(e?await Pt(vn(i)):await Hi(vn(i))));return{val:(r,o,a)=>us(n,r,o)??us(t,r,o)??a,own:n,def:t}}var Qb=new Map(ao.flatMap(i=>i.fields.flatMap(e=>$a(e).map(([t,n,s])=>[t+"|"+n,s]))));function $a(i){return i.rgb?i.rgb.slice(1).map((e,t)=>[i.rgb[0],e,String(i.def[t])]):[[i.sec,i.key,i.def]]}async function eM(i,e){let t=vn(i),n=ln(await Pt(t)),s=ln(await Hi(t)),r=await ur(i,!1),o=[];for(let[c,l]of e){let[h,u]=c.split("|");String(r.val(h,u,Qb.get(c)??"")).trim()!==String(l).trim()&&o.push([h,u,l])}let a=o.length?wh(s,o):s;a===n?Xe.delete(t):yi(t,kh(a),null)}function vp(i,e){let t=+i;if(!isFinite(t))return null;let n=Math.min(e.max??1/0,Math.max(e.min??-1/0,t)),s=String(e.def).includes(".")?Math.max(1,(String(e.def).split(".")[1]||"").length,(String(i).split(".")[1]||"").length):0;return s?n.toFixed(Math.min(s,4)):String(Math.round(n))}async function Xp(){let i=L.id,e=await ur(i,!1),t=await ur(i,!0),n=new Map;for(let l of ao)for(let h of l.fields)for(let[u,f,d]of $a(h))n.set(u+"|"+f,e.val(u,f,d));let s=l=>$a(l).some(([h,u,f])=>String(e.val(h,u,f)).trim()!==String(t.val(h,u,f)).trim()),r=`<h2>${Ye(Yn[i]||i)}: settings</h2><p class="dim">From <code>${Ye(co(vn(i)))}</code>; anything it doesn't set comes from <code>default.ini</code> (shared by all stadiums). Only what you change goes in the mod.</p>`;ao.forEach((l,h)=>{r+=`<h2>${Ye(l.title)}</h2>${l.note?`<p class="dim">${Ye(l.note)}</p>`:""}<div class="set">`,l.fields.forEach((u,f)=>{let d=`set-${h}-${f}`,g=`<label for="${d}" class="${s(u)?"changed":""}">${Ye(u.label)}</label>`;if(u.rgb){let[y,m,p]=u.rgb.slice(1).map((_,x)=>n.get(u.rgb[0]+"|"+_)??u.def[x]);r+=g+`<input type="color" id="${d}" value="#${Uh(y)}${Uh(m)}${Uh(p)}">`}else u.type==="bool"?r+=g+`<input type="checkbox" id="${d}" ${/^(true|1)$/i.test(n.get(u.sec+"|"+u.key))?"checked":""}>`:u.type==="select"?r+=g+`<select id="${d}">${u.options.map(y=>`<option ${String(n.get(u.sec+"|"+u.key)).trim()===y?"selected":""}>${y}</option>`).join("")}</select>`:r+=g+`<input type="number" id="${d}" step="${u.step||.1}" ${u.min!=null?`min="${u.min}"`:""} ${u.max!=null?`max="${u.max}"`:""} value="${Ye(String(n.get(u.sec+"|"+u.key)).trim())}">`}),r+="</div>"});let o=zh(i);if(o&&xi(o)){let l=Bh[hr[i]],h=Object.keys(hr).filter(d=>d!==i&&hr[d]===hr[i]&&Fe.stadiums.includes(d)),u=di(ln(await Hi(o))),f=di(ln(await Pt(o)));r+=`<h2>The pitch: ${Ye(_p[l])}</h2><p class="dim">How the ground plays, from <code>${Ye(co(o))}</code>.${h.length?` <b>Shared</b>: changing it also changes ${h.map(d=>Ye(Yn[d]||d)).join(", ")}.`:""} (Which kind of pitch a stadium has is set in the game's code, not a file.)</p><div class="set">`,Lh.forEach((d,g)=>{let y=(us(u,"Field",d.key)||"").trim(),m=y!==(us(f,"Field",d.key)||"").trim();r+=`<label for="ter-${g}" class="${m?"changed":""}">${Ye(d.label)}</label><input type="number" id="ter-${g}" step="${d.step}" ${d.min!=null?`min="${d.min}"`:""} ${d.max!=null?`max="${d.max}"`:""} value="${Ye(y)}">`}),r+=`</div><p class="dim">For comparison: ${Bh.map(d=>Ye(_p[d])).join(", ")}. The players' own terrain skills (CharTweaks.ini) scale these.</p>`}r+=`<h2>The whole file</h2><p class="dim">Everything in <code>${Ye(co(vn(i)))}</code>, for settings without a box above (warble, shadow lookup...).</p><textarea class="raw" id="rawIni" spellcheck="false"></textarea>
    <div class="btns"><button class="small" id="rawApply">Use this text</button><button class="small" id="setReset" ${Xe.has(vn(i))||o&&Xe.has(o)?"":"disabled"}>Undo this stadium's settings</button></div>`,Q("pane-settings").innerHTML=r,Q("rawIni").value=ln(await Hi(vn(i)));let a=async()=>{let l=await ur(i,!0),h=await ur(i,!1);if(ao.forEach((u,f)=>u.fields.forEach((d,g)=>{let y=$a(d).some(([m,p,_])=>String(h.val(m,p,_)).trim()!==String(l.val(m,p,_)).trim());Q(`set-${f}-${g}`).previousElementSibling.classList.toggle("changed",y)})),o&&xi(o)){let u=di(ln(await Hi(o))),f=di(ln(await Pt(o)));Lh.forEach((d,g)=>Q(`ter-${g}`).previousElementSibling.classList.toggle("changed",(us(u,"Field",d.key)||"").trim()!==(us(f,"Field",d.key)||"").trim()))}Q("rawIni").value=ln(await Hi(vn(i))),Q("setReset").disabled=!(Xe.has(vn(i))||o&&Xe.has(o)),Vi(),fr(),ja()},c=()=>Wa(async()=>{await eM(i,n),await qa(),await a()});ao.forEach((l,h)=>l.fields.forEach((u,f)=>{let d=Q(`set-${h}-${f}`);d.onchange=async()=>{if(u.rgb){let g=d.value;u.rgb.slice(1).forEach((y,m)=>n.set(u.rgb[0]+"|"+y,String(parseInt(g.slice(1+2*m,3+2*m),16))))}else if(u.type==="bool")n.set(u.sec+"|"+u.key,d.checked?"true":"false");else if(u.type==="select")n.set(u.sec+"|"+u.key,d.value);else{let g=vp(d.value,u);if(g==null){nt("That needs to be a number.",!0);return}n.set(u.sec+"|"+u.key,g)}await c()}})),o&&xi(o)&&Lh.forEach((l,h)=>{Q(`ter-${h}`).onchange=u=>Wa(async()=>{let f=vp(u.target.value,{...l,def:"0.00"});if(f==null){nt("That needs to be a number.",!0);return}let d=ln(await Pt(o)),g=wh(ln(await Hi(o)),[["Field",l.key,f]]);g===d?Xe.delete(o):yi(o,kh(g),null),await a()})}),Q("rawApply").onclick=()=>Wa(async()=>{let l=vn(i),h=Q("rawIni").value.replace(/\r?\n/g,/\r\n/.test(ln(await Pt(l)))?`\r
`:`
`);h===ln(await Pt(l))?Xe.delete(l):yi(l,kh(h),null),Vi(),fr(),await qa(),await Mp(),nt("Settings file updated.")}),Q("setReset").onclick=()=>Wa(async()=>{Xe.delete(vn(i)),o&&Xe.delete(o),window.onbeforeunload=Xe.size?()=>"":null,Vi(),fr(),await qa(),await Mp()})}var bp=Promise.resolve(),Wa=i=>bp=bp.then(i).catch(e=>{console.error(e),nt(e.message||String(e),!0)});async function Mp(){let i=Q("pane-settings"),e=i.scrollTop;await Xp(),i.scrollTop=e}async function qa(){if(!L||!ae.model)return;let i=await ur(L.id,L.view==="orig");if(/^(true|1)$/i.test(String(i.val("Render/Fog","Fog Enabled","false")).trim())){let t=["Fog Red","Fog Green","Fog Blue"].map(s=>+i.val("Render/Fog",s,160)/255),n=new ze().setRGB(...t,ft);ae.scene.fog=new ca(n,+i.val("Render/Fog","Fog Start",40),Math.max(+i.val("Render/Fog","Fog End",260),+i.val("Render/Fog","Fog Start",40)+1)),ae.fogMax.value=Math.max(0,Math.min(1,+i.val("Render/Fog","Fog Intensity",1)))}else ae.scene.fog=null;ae.model.traverse(t=>{t.isMesh&&(t.material.needsUpdate=!0)}),ja()}function tM(i){return i.fog=!0,i.onBeforeCompile=e=>{e.uniforms.fogMax=ae.fogMax,e.fragmentShader=`uniform float fogMax;
`+e.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
  float fogF = clamp((vFogDepth - fogNear) / (fogFar - fogNear), 0.0, 1.0) * fogMax;
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogF);
#endif`)},i}function fr(){let i=[...Xe.keys()];Q("pane-mod").innerHTML=`
    <h2>Changed files</h2>
    ${i.length?`<ul class="files">${i.map(t=>`<li class="mono">${Ye(co(t))}</li>`).join("")}</ul>`:`<p class="dim">Nothing changed yet. Repaint something on the Textures tab, change a team's fans, or a stadium's settings.</p>`}
    <h2>Mod for the PC port (F10 &gt; Mods)</h2>
    <div class="field"><label>Name (shown in F10 &gt; Mods)</label><input type="text" id="modName" value="${Ye(Fe.modName||"My stadium mod")}"></div>
    <div class="field"><label>Description</label><input type="text" id="modDesc" value="${Ye(Fe.modDesc||"Stadium changes. Applies the next time the game starts.")}"></div>
    <div class="btns"><button class="primary" id="mkPack" ${i.length?"":"disabled"}>Download mod pack (.zip)</button></div>
    <ol class="steps"><li>Unzip it into <code>%LOCALAPPDATA%\\MSCRecomp\\Riivolution</code>.</li><li>In the game: <b>F10 &gt; Mods</b>, turn it on, restart the game.</li></ol>
    <p class="dim">One pack holds every change you made here, across all the stadiums and teams.</p>
    <h2>Keep working on a mod</h2>
    <p class="dim">Open a mod pack you made before (the .zip) to carry on where you left off. Its changes replace the ones open here.</p>
    <div class="btns"><button id="openPack">Open a mod pack\u2026</button></div>
    <h2>Just the files</h2>
    <div class="btns"><button id="mkFiles" ${i.length?"":"disabled"}>Files in the game's layout (.zip)</button></div>
    <h2>Start over</h2>
    <div class="btns"><button id="resetOne" ${Xe.has(L.tmpPath)||Xe.has(L.resPath)?"":"disabled"}>Undo ${Ye(Yn[L.id]||L.id)}'s repaint and moved objects</button><button id="resetAll" ${i.length?"":"disabled"}>Discard everything</button></div>`,Q("modName").oninput=t=>Fe.modName=t.target.value,Q("modDesc").oninput=t=>Fe.modDesc=t.target.value;let e=t=>{let n={};for(let s of i)n[t+co(s)]=Xe.get(s);return n};Q("mkPack").onclick=()=>{let t=Q("modName").value.trim()||"My stadium mod",n=Q("modDesc").value.trim(),s=(t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")||"stadium_mod").slice(0,40),r=`<wiidisc version="1" root="/${s}">
  <id game="R4QE"/>
  <options>
    <section name="${Nh(t)}">
      <option name="${Nh(t)}" id="${s}" default="1" description="${Nh(n)}">
        <choice name="Enabled"><patch id="${s}"/></choice>
      </option>
    </section>
  </options>
  <patch id="${s}">
    <folder disc="/" external="files" create="true"/>
  </patch>
</wiidisc>
`,o={app:"Strikers Stadium Studio",name:t,description:n,names:Object.fromEntries([...hn].map(([a,c])=>[bt(a),c]))};fo(`${s}.zip`,gh({[`riivolution/${s}.xml`]:new TextEncoder().encode(r),[`${s}/stadium-studio.json`]:new TextEncoder().encode(JSON.stringify(o,null,1)),...e(`${s}/files/`)},{level:0}))},Q("mkFiles").onclick=()=>fo("stadium_files.zip",gh(e(""),{level:0})),Q("openPack").onclick=()=>{let t=Q("packInput");t.value="",t.onchange=()=>t.files[0]&&$p(t.files[0]),t.click()},Q("resetOne").onclick=async()=>{Pb(),L.sel=null,L.selSet=new Set,await _i(),ds()},Q("resetAll").onclick=async()=>{confirm("Discard every change?")&&(Xe.clear(),L.work=L.orig,L.origRes&&(L.resWork=L.origRes.slice(),L.scene=cn(L.resWork,Bn)),L.sel=null,L.selSet=new Set,window.onbeforeunload=null,await _i(),ds(),Q("pane-fans").classList.contains("on")&&Hh())}}async function $p(i){Zt("Opening the mod pack\u2026");try{let e=Id(new Uint8Array(await i.arrayBuffer())),t=new TextDecoder,n=null,s=null,r=null;for(let a of Object.keys(e)){let c=/^(?:.*\/)?riivolution\/([^/]+)\.xml$/i.exec(a);if(c){let l=t.decode(e[a]),h=/external="([^"]+)"/.exec(l),u=/root="\/?([^"]*)"/.exec(l),f=/<section name="([^"]+)"/.exec(l);n=((u?u[1]:c[1])+"/"+(h?h[1]:"files")+"/").replace(/^\/+/,""),s=f&&f[1]}if(/stadium-studio\.json$/i.test(a))try{r=JSON.parse(t.decode(e[a]))}catch{}}let o=new Map;for(let[a,c]of Object.entries(e)){if(a.endsWith("/")||!c.length)continue;let l=null;if(n&&a.toLowerCase().startsWith(n.toLowerCase()))l=a.slice(n.length);else if(!n){let h=/(?:^|\/)((?:art|ini)\/.+)$/i.exec(a);h&&(l=h[1])}l&&xi(l)&&o.set(l.toLowerCase(),c)}if(!o.size)throw new Error("That zip has no stadium, fan or settings files this app knows.");Xe.clear();for(let[a,c]of o)Xe.set(a,c);if(r&&r.names)for(let[a,c]of Object.entries(r.names))hn.set(parseInt(a,16)>>>0,c);Fe.modName=r&&r.name||s||Fe.modName,r&&r.description&&(Fe.modDesc=r.description),window.onbeforeunload=()=>"You have changes that are not saved in a mod yet.",lo.clear(),await Ya(L.id),nt(`Opened ${i.name}: ${o.size} changed file${o.size>1?"s":""}.`)}catch(e){nt(e.message||String(e),!0),console.error(e)}finally{Zt(!1)}}var Nh=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function wp(i){let e=document.createElement("canvas");return e.width=i.w,e.height=i.h,e.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(i.px),i.w,i.h),0,0),e.toDataURL()}function fo(i,e){let t=URL.createObjectURL(new Blob([e])),n=document.createElement("a");n.href=t,n.download=i,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),5e3)}function Zt(i){Q("busy").classList.toggle("on",!!i),i&&(Q("busyText").textContent=i)}var Sp=0;function nt(i,e){let t=Q("toast");t.textContent=i,t.style.borderColor=e?"var(--bad)":"",t.classList.add("on"),clearTimeout(Sp),Sp=setTimeout(()=>t.classList.remove("on"),e?9e3:4500)}function Ap(i){let e=Q("imgInput");e.value="",e.onchange=async()=>{let t=e.files[0];if(!t)return;let n=new Uint8Array(await t.arrayBuffer());try{if(n[0]===137&&n[1]===80)return i(Oa(n));let s=await createImageBitmap(new Blob([n]),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=document.createElement("canvas");r.width=s.width,r.height=s.height;let o=r.getContext("2d");o.drawImage(s,0,0),i({w:s.width,h:s.height,px:o.getImageData(0,0,s.width,s.height).data})}catch(s){nt("Could not read that picture: "+s.message,!0)}},e.click()}function po(i){for(let e of Q("tabs").querySelectorAll("button"))e.classList.toggle("on",e.dataset.t===i);for(let e of document.querySelectorAll(".pane"))e.classList.toggle("on",e.id==="pane-"+i);i==="fans"&&Fe.fans.length&&Hh(),i==="objects"&&L&&!Q("marks").checked&&(Q("marks").checked=!0,ae.marks&&(ae.marks.visible=!0))}async function nM(i){let e=[],t=r=>new Promise(o=>{let a=r.createReader(),c=[],l=()=>a.readEntries(h=>{h.length?(c.push(...h),l()):o(c)},()=>o(c));l()}),n=r=>/(^|\/)art\/(hashid\.bin|environments\/|characters\/crowd|animation\/crowd)|(^|\/)ini\//i.test(r);async function s(r,o,a){if(r.isFile){if(n(o+r.name)){let h=await new Promise((u,f)=>r.file(u,f));e.push({rel:o+r.name,file:h})}return}let c=r.name.toLowerCase(),l=(o+r.name+"/").toLowerCase();if(!(c==="riivolution"||a>7)&&(/art\/$/.test(l)||/art\/(environments|characters|animation)\//.test(l)||/ini\//.test(l)||!/art\//.test(l))){if(/art\/characters\/[^/]+\/$/.test(l)&&!/\/crowd[^/]*\/$/.test(l))return;for(let h of await t(r))await s(h,o+r.name+"/",a+1)}}for(let r of i){let o=r.webkitGetAsEntry&&r.webkitGetAsEntry();o&&await s(o,"",0)}return e}async function Ep(i){Zt("Reading the game folder\u2026");try{if(Tb(i),await Rb(),!Fe.stadiums.length)throw new Error("No stadiums found in Art/environments.");Q("status").textContent=`${Fe.stadiums.length} stadiums \xB7 ${Fe.fans.length} kinds of fan`,await Ya(Fe.stadiums.includes("thepalace")?"thepalace":Fe.stadiums[0])}catch(e){nt(e.message||String(e),!0),console.error(e)}finally{Zt(!1)}}function iM(){Ib(),Vi();let i=()=>Q("folderInput").click();Q("openBtn").onclick=i,Q("openBtn2").onclick=i,Q("copyPath").onclick=()=>{navigator.clipboard?.writeText(Q("pathText").textContent),nt("Copied. Paste it into the folder window's address bar.")},Q("folderInput").onchange=e=>{let t=[...e.target.files].map(n=>({rel:n.webkitRelativePath||n.name,file:n})).filter(n=>/(^|\/)art\/(hashid\.bin|environments\/|characters\/crowd|animation\/crowd)|(^|\/)ini\//i.test(n.rel));e.target.value="",t.length?Ep(t):nt("That folder has no Art folder in it.",!0)},document.addEventListener("dragover",e=>e.preventDefault()),document.addEventListener("drop",async e=>{e.preventDefault(),Zt("Reading the dropped folder\u2026");let t=await nM([...e.dataTransfer.items||[]]);Zt(!1),t.length?Ep(t):nt(`Drop the game's "files" folder.`,!0)});for(let e of Q("tabs").querySelectorAll("button"))e.onclick=()=>po(e.dataset.t);for(let e of Q("which").querySelectorAll("button"))e.onclick=async()=>{if(L){L.view=e.dataset.v;for(let t of Q("which").querySelectorAll("button"))t.classList.toggle("on",t===e);await _i(),pr()}};for(let e of Q("cams").querySelectorAll("button"))e.onclick=()=>L&&Tp(e.dataset.c);Q("light").onchange=Xa,Q("wire").onchange=Xa,Q("cut").onchange=Xa,Q("marks").onchange=()=>{ae.marks&&(ae.marks.visible=Q("marks").checked)},Jb(),window.__stadium={game:Fe,edits:Xe,get cur(){return L},openStadium:Ya,tab:po,select:uo,view:ae,openPack:$p,extraNames:hn}}iM();})();
