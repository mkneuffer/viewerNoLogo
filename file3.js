/*!For license information please see 425.c7ae1d63.js.LICENSE.txt*/(self.webpackChunkwebgi=self.webpackChunkwebgi||[]).push([[425],{352:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},5701:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},7182:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},6850:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},8236:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/",r+="*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," *"),r+="/"),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},9213:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},9008:function(e,t){!function(e){"use strict";class t{constructor(){this._eventListeners={},this.dispatchEvent=this.dispatchEvent.bind(this),this.addEventListener=this.addEventListener.bind(this),this.removeEventListener=this.removeEventListener.bind(this),this.hasEventListener=this.hasEventListener.bind(this)}addEventListener(e,t){const n=this._eventListeners;void 0===n[e]&&(n[e]=[]),n[e].includes(t)||n[e].push(t)}hasEventListener(e,t){const n=this._eventListeners;return void 0!==n[e]&&n[e].includes(t)}removeEventListener(e,t){const n=this._eventListeners[e];if(void 0!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){const t=this._eventListeners[e.type];if(void 0!==t){e.target=this;const n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e)}}}function n(){return("undefined"==typeof performance?Date:performance).now()}class r{constructor(e=r.DECAY_MILLISECONDS){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(r.MIN_DECAY_MILLISECONDS,e)}update(e,t,n,r){const i=2e-4*this.naturalFrequency;if(null==e||0===r)return t;if(e===t&&0===this.velocity)return t;if(n<0)return e;const o=e-t,a=this.velocity+this.naturalFrequency*o,s=o+n*a,c=Math.exp(-this.naturalFrequency*n),l=(a-this.naturalFrequency*s)*c,u=-this.naturalFrequency*(l+a*c);return Math.abs(l)<i*Math.abs(r)&&u*o>=0?(this.velocity=0,t):(this.velocity=l,t+s*c)}}async function i(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e}))}function o(e,t=document.head){const n=document.createElement("style");return n.type="text/css",n.innerText=e,null==t||t.appendChild(n),n}r.SETTLING_TIME=1e4,r.MIN_DECAY_MILLISECONDS=.001,r.DECAY_MILLISECONDS=50;const a={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function s(e){return e.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function c(e,t,n){return e.replace(new RegExp(s(t),"g"),n)}const l=(e,...t)=>String.raw({raw:e},...t),u=(e,...t)=>{let n=String.raw({raw:e},...t);return n=c(n,"%","%25"),n=c(n,"> <","><"),n=c(n,"; }",";}"),n=c(n,"<","%3c"),n=c(n,">","%3e"),n=c(n,'"',"'"),n=c(n,"#","%23"),n=c(n,"{","%7b"),n=c(n,"}","%7d"),n=c(n,"|","%7c"),n=c(n,"^","%5e"),n=c(n,"`","%60"),n=c(n,"@","%40"),n=c(n,"&","&amp;"),n=c(n,"\n","%0A"),"data:image/svg+xml;charset=UTF-8,"+n};function d(e,t){const n=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=n,r.download=t,document.body.appendChild(r),r.click(),setTimeout((()=>{document.body.removeChild(r),window.URL.revokeObjectURL(n)}),1e3)}async function p(e){return new Promise(((t,n)=>{const r=new FileReader;r.onload=e=>t(r.result),r.onerror=e=>n(r.error),r.onabort=e=>n(new Error("Read aborted")),r.readAsDataURL(e)}))}function h(e,t){let n;do{n=Object.getOwnPropertyDescriptor(e,t)}while(!n&&(e=Object.getPrototypeOf(e)));return n}function f(e,t,n=!0,r=!1){const i=h(e,t);return!!(null==i?void 0:i.set)||n&&!1!==(null==i?void 0:i.writable)&&void 0===(null==i?void 0:i.get)||r&&!i}function m(e,t,n,r=!0,i=!1){return!(!e||!f(e,t,r,i)||(e[t]=n,0))}function w(e,t){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return-1}const y={priority:1/0,serialize:(e,t)=>Object.fromEntries(Object.entries(e).map((([e,n])=>[e,g.Serialize(n,t,!1)]))),deserialize:(e,t,n)=>Object.assign(t||{},Object.fromEntries(Object.entries(e).map((([e,r])=>[e,g.Deserialize(r,null==t?void 0:t[e],n,!1)])))),isType:e=>(e.constructor||Object)===Object};class g{static GetSerializer(e){return g.Serializers.find((t=>t.isType(e)))}static RegisterSerializer(...e){var t;for(const n of e){const e=null!==(t=n.priority)&&void 0!==t?t:1e10,r=w(g.Serializers,(t=>void 0!==t.priority&&t.priority<e));r>=0?g.Serializers.splice(r+1,0,n):g.Serializers.push(n)}}static UnregisterSerializer(...e){for(const t of e){const e=g.Serializers.indexOf(t);e>=0&&g.Serializers.splice(e,1)}}static Serialize(e,t,n=!1){var r,i;if("function"==typeof e)return;if(!n){const n=g.GetSerializer(e);if(n)return n.serialize(e,t);if("function"==typeof e.toJSON){const n=e.toJSON(t);return e.serializableClassId&&n&&(n.serializableClassId=e.serializableClassId),n}}let o=null!==(r=e.constructor)&&void 0!==r?r:Object;const a={};for(;o&&o!==Object;){const n=null!==(i=g.TypeMap.get(o))&&void 0!==i?i:[];for(const[r,i]of n)a[r]=g.Serialize(e[i],t,!1);o=Object.getPrototypeOf(o)}return e.serializableClassId&&(a.serializableClassId=e.serializableClassId),a}static Deserialize(e,t,n,r=!1){var i,o;if(void 0===e)return t;if(t===e)return t;if(e&&"object"==typeof e&&(e.constructor||Object)===Object&&e.resource&&"string"==typeof e.resource&&e.uuid){const r=null==n?void 0:n[e.resource];if(!r)return console.warn(`Resource ${e.resource} not found`),t;if("object"==typeof(e=r[e.uuid])&&(e.__useCount=e.__useCount?e.__useCount+1:1),e||console.warn(`Resource ${e.resource} with uuid ${e.uuid} not found`),t===e)return t;if(e&&"object"==typeof e){if((e.constructor||Object)!==Object)return t?(console.warn("replacing object",t,"with deserialized object from meta",e),e):e;console.error("Deserialize; meta should only have class instances, not js objects",e,t,n)}}if(e&&"object"==typeof e&&(e.constructor||Object)!==Object&&!Array.isArray(e)&&console.warn("Data might already be deserialized. It will be cloned, or copied to source",e,"source",t,e.constructor,e.constructor!==Object),e&&"object"==typeof e)if(!e.serializableClassId||t&&t.serializableClassId===e.serializableClassId)(e.constructor||Object)!==Object||t?Array.isArray(e)&&!t&&(t=[]):t={};else{const n=g.SerializableClasses.get(e.serializableClassId);n&&(t=n.DataInConstructor?new n(e):new n)}if("function"==typeof t)return console.error("cannot deserialize over function",t,e),t;if(!r){const r=g.GetSerializer(e);if(r&&r!==y)return r.deserialize(e,t,n)}if(!e||null==t||"object"!=typeof t)return e;if(!r&&"function"==typeof(null==t?void 0:t.fromJSON))return t.fromJSON(e,n),t;let a=null!==(i=t.constructor)&&void 0!==i?i:Object;if(a===Object)return y.deserialize(e,t,n);for(;a&&a!==Object;){const r=null!==(o=g.TypeMap.get(a))&&void 0!==o?o:[];for(const[i,o]of r){const r=t[o],a=g.Deserialize(e[i],r,n,!1);a!==r&&m(t,o,a,!0)}a=Object.getPrototypeOf(a)}return t}}function v(e,t="param"){if(!e)throw new Error("onChange: fnKey is undefined, make sure the function exists or provide a string");return(n,r)=>{Object.defineProperty(n,r,{get(){return this[`_oc_${r}`]},set(n){var i;const o=this[`_oc_${r}`];if(o===n)return;this[`_oc_${r}`]=n;const a="param"===t?[r,n,o]:"object"===t?[{key:r,value:n,oldValue:o}]:"";if("string"==typeof e)null===(i=this[e])||void 0===i||i.call(this,...a);else if("function"==typeof e){let t=!1;if(e.name){let n=this;for(;n;){if(n[e.name]===e){e.call(this,...a),t=!0;break}n=Object.getPrototypeOf(n)}}t||(e.name&&this[e.name].name===`bound ${e.name}`?this[e.name](...a):e(...a))}}})}}function b(e,{backgroundColor:t="",scale:n=1,width:r=512,height:i=512}){const o=document.createElement("canvas"),a=o.getContext("2d"),s=n,c=r,l=i;return o.width=c*s,o.height=l*s,o.style.width=`${c}`,o.style.height=`${l}`,(null==t?void 0:t.length)>0&&(a.fillStyle=t,a.fillRect(0,0,o.width,o.height)),a.drawImage(e,0,0,o.width,o.height),o}g.TypeMap=new Map,g.SerializableClasses=new Map,g.Serializers=[{priority:0,isType:e=>Array.isArray(e),serialize:(e,t)=>e.map((e=>g.Serialize(e,t,!1))),deserialize:(e,t,n)=>{const r=e.length;Array.isArray(t)||(t=[]);for(let i=0;i<r;i++){const r=e[i],o=t.length>i?g.Deserialize(r,t[i],n,!1):g.Deserialize(r,void 0,n,!1);t.length<=i?t.push(o):t[i]=o}return t}},{priority:0,isType:e=>!e||"object"!=typeof e,serialize:e=>{if(e&&"number"==typeof e){if(e===1/0)return"Infinity";if(e===-1/0)return"-Infinity";if(isNaN(e))return"NaN"}return e},deserialize:(e,t)=>{if("number"==typeof t){if("Infinity"===e)return 1/0;if("-Infinity"===e)return-1/0;if("NaN"===e)return NaN;if("number"==typeof e||!e)return e}return e}},y];const x=async(e,t)=>b(await i(e),t),_=async(e,t)=>await x(e,t).then((e=>e.toDataURL("image/png"))),C=async e=>p(await(await fetch(e)).blob());function E(e,t,{width:n,height:r},i=!0){const o=`\n<svg viewBox="0 0 ${n} ${r}" xmlns="http://www.w3.org/2000/svg">\n    <style>\n    ${t}\n    </style>\n    <foreignObject x="0" y="0" width="100%" height="100%">\n        <div xmlns="http://www.w3.org/1999/xhtml" style="height: 100%; width: 100%; position: absolute: top:0; left:0">\n            ${e}\n        </div>\n    </foreignObject>\n</svg>\n    `;return i?u(o):o}e.Damper=r,e.LinearToSRGB=function(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055},e.PointerDragHelper=class extends t{constructor(){super(...arguments),this._onPointerDown=e=>{if(0!==e.button)return;if(!this._element)return;this._pointerUp=void 0;const t=e.clientX/this._element.clientWidth*2-1,r=-e.clientY/this._element.clientHeight*2+1,i=n();this._pointerDown={x:t,y:r,time:i},this._pointer=this._pointerDown,this.dispatchEvent({type:"dragStart",pointer:this._pointerDown})},this._onPointerMove=e=>{if(!this._pointerDown||!this._pointer)return;if(!this._element)return;const t=e.clientX/this._element.clientWidth*2-1,r=-e.clientY/this._element.clientHeight*2+1,i=n();this.dispatchEvent({type:"drag",pointer:this._pointer,drag:{x:t-this._pointerDown.x,y:r-this._pointerDown.y,time:i-this._pointerDown.time},delta:{x:t-this._pointer.x,y:r-this._pointer.y,time:i-this._pointer.time}}),this._pointer={x:t,y:r,time:n()},e.buttons%2==0&&this._onPointerUp(e)},this._onPointerUp=e=>{if(0!==e.button)return;if(!this._pointerDown)return;if(!this._element)return;const t=e.clientX/this._element.clientWidth*2-1,r=-e.clientY/this._element.clientHeight*2+1,i=n();this._pointerUp={x:t,y:r,time:i},this.dispatchEvent({type:"dragEnd",pointer:this._pointerUp,drag:{x:this._pointerUp.x-this._pointerDown.x,y:this._pointerUp.y-this._pointerDown.y,time:this._pointerUp.time-this._pointerDown.time}}),this._pointerDown=void 0,this._pointer=void 0}}get element(){return this._element}set element(e){this._element!==e&&(this._element&&this._removeElement(),this._element=e,this._element&&this._addElement())}_removeElement(){var e,t,n,r,i;null===(e=this._element)||void 0===e||e.removeEventListener("pointerdown",this._onPointerDown),null===(t=this._element)||void 0===t||t.removeEventListener("pointermove",this._onPointerMove),null===(n=this._element)||void 0===n||n.removeEventListener("pointerup",this._onPointerUp),null===(r=this._element)||void 0===r||r.removeEventListener("pointercancel",this._onPointerUp),null===(i=this._element)||void 0===i||i.removeEventListener("pointerout",this._onPointerUp)}_addElement(){var e,t,n,r,i;null===(e=this._element)||void 0===e||e.addEventListener("pointerdown",this._onPointerDown),null===(t=this._element)||void 0===t||t.addEventListener("pointermove",this._onPointerMove),null===(n=this._element)||void 0===n||n.addEventListener("pointerup",this._onPointerUp),null===(r=this._element)||void 0===r||r.addEventListener("pointercancel",this._onPointerUp),null===(i=this._element)||void 0===i||i.addEventListener("pointerout",this._onPointerUp)}dispose(){this.element=void 0}},e.SRGBToLinear=function(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)},e.Serialization=g,e.SimpleEventDispatcher=t,e.TYPED_ARRAYS=a,e.absMax=function(e,t){return Math.abs(e)>Math.abs(t)?e:t},e.aesGcmDecrypt=async function(e,t){const n="string"==typeof t?(new TextEncoder).encode(t):t,r=await crypto.subtle.digest("SHA-256",n),i=e.slice(0,12),o={name:"AES-GCM",iv:"string"==typeof i?new Uint8Array(Array.from(i).map((e=>e.charCodeAt(0)))):i},a=await crypto.subtle.importKey("raw",r,o,!1,["decrypt"]),s=e.slice(12),c="string"==typeof s?new Uint8Array(Array.from(s).map((e=>e.charCodeAt(0)))):s;try{const t=await crypto.subtle.decrypt(o,a,c);return"string"==typeof e?(new TextDecoder).decode(t):new Uint8Array(t)}catch(e){throw new Error("Decrypt failed")}},e.aesGcmEncrypt=async function(e,t,n){const r="string"==typeof t?(new TextEncoder).encode(t):t,i=await crypto.subtle.digest("SHA-256",r),o=crypto.getRandomValues(new Uint8Array(12)),a=Array.from(o).map((e=>String.fromCharCode(e))).join(""),s={name:"AES-GCM",iv:o},c=await crypto.subtle.importKey("raw",i,s,!1,["encrypt"]),l="string"==typeof e?(new TextEncoder).encode(e):e,u=await crypto.subtle.encrypt(s,c,l),d=new Uint8Array(u),p=Array.from(d),h=p.map((e=>String.fromCharCode(e))).join(""),f=n?"string"==typeof n?n:(new TextDecoder).decode(n):"",m=n?"string"==typeof n?(new TextEncoder).encode(n):Array.from(n):[];return"string"==typeof e?f+a+h:new Uint8Array([...m,...o,...p])},e.arrayBufferToBase64=function(e){if(!window)return console.warn("window is required"),"";let t="";const n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return window.btoa(t)},e.base64ToArrayBuffer=function(e){if(!window)return console.warn("window is required"),new Uint8Array(0);const t=window.atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r.buffer},e.blobToDataURL=p,e.canvasFlipY=function(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");if(!n)throw new Error("Unable to get 2d context");return n.translate(0,e.height),n.scale(1,-1),n.drawImage(e,0,0),t},e.clearBit=function(e,t){return e&~(1<<t)},e.colorToDataUrl=function(e,t=1,n=1){const r=document.createElement("canvas");r.width=t,r.height=n;const i=r.getContext("2d");i.fillStyle="#"+e,i.fillRect(0,0,t,n);const o=r.toDataURL();return r.remove(),o},e.copyProps=function(e,t,n){for(const r of n){const n=e[r];void 0!==n&&m(t,r,n,!0)}return t},e.createCanvasElement=function(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e},e.createDiv=function({innerHTML:e="",id:t,classList:n,addToBody:r=!0,elementTag:i="div"}){const o=document.createElement(i);return t&&(o.id=t),o.innerHTML=e,n&&o.classList.add(...n),r&&document.body.appendChild(o),o},e.createImage=i,e.createScriptFromURL=async function(e,t=document.head){return new Promise(((n,r)=>{const i=document.createElement("script");i.setAttribute("src",e),i.addEventListener("load",(()=>n(i))),i.addEventListener("error",r),t.appendChild(i)}))},e.createStyles=o,e.css=l,e.deepAccessObject=function(e,t,n=!1){for("string"==typeof e&&(e=e.split("."));e.length>0;){if(!t)return;const r=e.splice(0,1)[0];if(!(r.length<1)){if(!(r in t)){if(n)throw new Error("invalid access, check "+r+" in "+t);return}t=t[r]}}return t},e.downloadBlob=d,e.downloadFile=function(e,t){return d(e,null!=t?t:e.name)},e.embedUrlRefs=async function(e,t=C){const n=e.match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)/g);if(n)for(const r of n){const n=await t(r);e=e.replace(r,n)}return e},e.escapeRegExp=s,e.getFileHandle=function(){return"showOpenFilePicker"in window?window.showOpenFilePicker().then((e=>e[0])):window.chooseFileSystemEntries()},e.getFilenameFromPath=function(e){return e.substring(e.lastIndexOf("/")+1)},e.getKeyByValue=function(e,t){return Object.keys(e).find((n=>e[n]===t))},e.getNewFileHandle=function(){if("showSaveFilePicker"in window){const e={types:[{description:"Text file",accept:{"text/plain":[".txt"]}}]};return window.showSaveFilePicker(e)}return window.chooseFileSystemEntries({type:"save-file",accepts:[{description:"Text file",extensions:["txt"],mimeTypes:["text/plain"]}]})},e.getOrCall=function(e,...t){return"function"==typeof e&&(e=e(...t)),e},e.getPropertyDescriptor=h,e.getTypedArray=function(e,t){return new a[e](t)},e.getUrlQueryParam=function(e,t=null){var n;return null!==(n=new URL(window.location.href).searchParams.get(e))&&void 0!==n?n:t},e.glsl=(e,...t)=>String.raw({raw:e},...t),e.html=(e,...t)=>String.raw({raw:e},...t),e.htmlToCanvas=async function(e,t,n){const r=E(e,t,n);return await x(r,n)},e.htmlToPng=async function(e,t,n){const r=E(e,t,n);return await _(r,n)},e.htmlToSvg=E,e.imageBitmapToBase64=function(e,t=8192,n=!1){var r;if(!e.width||!e.height)return"";const i=document.createElement("canvas");i.width=Math.min(t,e.width),i.height=Math.floor(1+i.width*e.height/e.width);const o=e instanceof ImageBitmap,a=o&&n&&Math.abs(i.width-e.width)<.5?i.getContext("bitmaprenderer"):void 0;a?a.transferFromImageBitmap(e):null===(r=i.getContext("2d"))||void 0===r||r.drawImage(e,0,0,i.width,i.height);const s=i.toDataURL("image/png");return i.remove(),o&&n&&e.close(),s},e.imageDataToCanvas=function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").putImageData(e,0,0),t},e.imageToCanvas=b,e.imageUrlToImageData=async function(e){return new Promise(((t,n)=>{const r=new Image;r.addEventListener("load",(()=>{const e=document.createElement("canvas");e.width=r.width,e.height=r.height;const i=e.getContext("2d");if(!i)return void n(new Error("Could not get 2d context"));i.drawImage(r,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height);t(o),e.remove(),r.remove()}),!1),r.addEventListener("error",(e=>{r.remove(),n(e)}),!1),r.src=e}))},e.includesAll=function(e,t){for(const n of t)if(!e.includes(n))return!1;return!0},e.isPropertyWritable=f,e.isWebpExportSupported=function(){const e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&e.toDataURL("image/webp").startsWith("data:image/webp")},e.longestCommonPrefix=function(e){return e.sort(),e[0].split("").map(((t,n)=>e[e.length-1][n]===t?t:"\0")).join("").split("\0").at(0)||""},e.makeColorSvg=e=>`data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' fill='%23${e}'/%3E%3C/svg%3E%0A`,e.makeColorSvgCircle=e=>`data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='7' fill='%23${e}'/%3E%3C/svg%3E%0A`,e.makeTextSvg=e=>`data:image/svg+xml,%3Csvg viewBox='0 0 80 14' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext style='font: 8px "Roboto Mono", "Source Code Pro", Menlo, Courier, monospace; fill: white;' x='9' y='9'%3E${e}%3C/text%3E%3C/svg%3E%0A`,e.mobileAndTabletCheck=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},e.now=n,e.objectHasOwn=function(e,t){return Object.hasOwn?Object.hasOwn(e,t):e.hasOwnProperty(t)},e.onChange=v,e.onChange2=function(e,t="void"){if(!e)throw new Error("onChange: fnKey is undefined, make sure the function exists or provide a string");return v(e,t)},e.onChange3=function(e,t="object"){if(!e)throw new Error("onChange: fnKey is undefined, make sure the function exists or provide a string");return v(e,t)},e.parseFileExtension=function(e){var t;if(!e||""===e||e.match(/__MACOSX\/.*\._/))return"";const n=null!==(t=(e=e.replace(/\?.*$/,"")).split(/[\\/]/).pop())&&void 0!==t?t:"",r=n.lastIndexOf(".");return""===n||r<1?"":n.slice(r+1)},e.pathJoin=function(e,t="/"){return e.join(t)},e.prettyScrollbar=function(e=document.head){return o(l`
      ::-webkit-scrollbar
      {
        width: 8px;  /* for vertical scrollbars */
        height: 8px; /* for horizontal scrollbars */
      }
      ::-webkit-scrollbar-track
      {
        background: rgba(64, 64, 64, 0.4);
        border-radius: 6px;
      }
      ::-webkit-scrollbar-thumb
      {
        background: rgba(128, 128, 128, 0.2);
        border-radius: 6px;
      }
      ::-webkit-scrollbar-corner {background: rgba(0,0,0,0.5);}
    `,e)},e.readFile=function(e){return e.text?e.text():function(e){return new Promise((t=>{const n=new FileReader;n.addEventListener("loadend",(e=>{const n=e.srcElement.result;t(n)})),n.readAsText(e)}))}(e)},e.remoteWorkerURL=function(e,t){const n=(t?`var Module = { locateFile: function(s) { return "${t}"; } }; \n`:"")+`importScripts( "${e}" );`;return URL.createObjectURL(new Blob([n],{type:"text/javascript"}))},e.replaceAll=c,e.safeSetProperty=m,e.serializable=function(e){return t=>(t=class extends t{constructor(){super(...arguments),this.serializableClassId=e}},g.SerializableClasses.set(e,t),t)},e.serialize=function(e){return(t,n)=>{const r=t.constructor;if(r===Object)throw new Error("All properties in an object are serialized by default");g.TypeMap.has(r)||g.TypeMap.set(r,[]),g.TypeMap.get(r).push([e||n,n])}},e.setUrlQueryParam=function(e,t,n=!1){const r=new URLSearchParams(location.search);null==t?r.has(e)&&r.delete(e):r.set(e,t),n?window.location.search=r.toString():window.history.replaceState({},"","?"+r.toString())},e.svgToCanvas=x,e.svgToPng=_,e.svgUrl=u,e.timeout=async function(e){return new Promise((t=>setTimeout(t,Math.max(0,e))))},e.toTitleCase=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},e.updateBit=function(e,t,n){return e&~(1<<t)|(n?1:0)<<t},e.uploadFile=async function(e=!1,t=!1,n){const r=document.createElement("input");r.type="file",r.multiple=e,r.accept=n||"*",r.webkitdirectory=t,r.style.display="none",document.body.appendChild(r),r.click();const i=await new Promise((e=>{r.onchange=t=>{e(Array.from(r.files||[]))}}));return document.body.removeChild(r),i},e.verifyPermission=async function(e,t){const n={};return t&&(n.writable=!0,n.mode="readwrite"),"granted"===await e.queryPermission(n)||"granted"===await e.requestPermission(n)},e.writeFile=async function(e,t){if(e.createWriter){const n=await e.createWriter();return await n.write(0,t),void await n.close()}const n=await e.createWritable();await n.write(t),await n.close()}}(t)}}]);
