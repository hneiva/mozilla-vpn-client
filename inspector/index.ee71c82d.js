function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},n=e.parcelRequire6a04;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire6a04=n),n.register("lhkxZ",(function(e,s){var i,n;t(e.exports,"register",(()=>i),(t=>i=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var r={};i=function(t){for(var e=Object.keys(t),s=0;s<e.length;s++)r[e[s]]=t[e[s]]},n=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n.register("aD10K",(function(e,s){t(e.exports,"css",(()=>n("fbtzp").css)),t(e.exports,"html",(()=>n("gSKg7").html)),t(e.exports,"LitElement",(()=>n("fg7DH").LitElement)),n("c7WDR"),n("gSKg7"),n("fg7DH")})),n.register("c7WDR",(function(e,s){t(e.exports,"ReactiveElement",(()=>p)),t(e.exports,"css",(()=>n("fbtzp").css));var i,r=n("fbtzp");r=n("fbtzp");const o=window.trustedTypes,l=o?o.emptyScript:"",a=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r.getCompatibleStyle(t))}else void 0!==t&&e.push(r.getCompatibleStyle(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r.adoptStyles(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=d){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:h.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(i=globalThis.reactiveElementVersions)&&void 0!==i?i:globalThis.reactiveElementVersions=[]).push("1.2.1")})),n.register("fbtzp",(function(e,s){t(e.exports,"css",(()=>l)),t(e.exports,"adoptStyles",(()=>a)),t(e.exports,"getCompatibleStyle",(()=>h));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return i&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,n)},a=(t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",n))(e)})(t):t})),n.register("gSKg7",(function(e,s){
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i;t(e.exports,"html",(()=>b)),t(e.exports,"noChange",(()=>E)),t(e.exports,"render",(()=>w));const n=globalThis.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,l="?"+o,a=`<${l}>`,h=document,c=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,f=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,_=/"/g,y=/^(?:script|style|textarea)$/i,A=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),b=A(1),E=(A(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),x=new WeakMap,w=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new P(e.insertBefore(c(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},C=h.createTreeWalker(h,129,null,!1),H=(t,e)=>{const s=t.length-1,i=[];let n,l=2===e?"<svg>":"",h=v;for(let e=0;e<s;e++){const s=t[e];let r,c,d=-1,p=0;for(;p<s.length&&(h.lastIndex=p,c=h.exec(s),null!==c);)p=h.lastIndex,h===v?"!--"===c[1]?h=g:void 0!==c[1]?h=f:void 0!==c[2]?(y.test(c[2])&&(n=RegExp("</"+c[2],"g")),h=$):void 0!==c[3]&&(h=$):h===$?">"===c[0]?(h=null!=n?n:v,d=-1):void 0===c[1]?d=-2:(d=h.lastIndex-c[2].length,r=c[1],h=void 0===c[3]?$:'"'===c[3]?_:m):h===_||h===m?h=$:h===g||h===f?h=v:(h=$,n=void 0);const u=h===$&&t[e+1].startsWith("/>")?" ":"";l+=h===v?s+a:d>=0?(i.push(r),s.slice(0,d)+"$lit$"+s.slice(d)+o+u):s+o+(-2===d?(i.push(void 0),e):u)}const c=l+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==r?r.createHTML(c):c,i]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,a=0;const h=t.length-1,d=this.parts,[p,u]=H(t,e);if(this.el=U.createElement(p,s),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=C.nextNode())&&d.length<h;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const s=u[a++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(s);d.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?O:"?"===e[1]?D:"@"===e[1]?M:k})}else d.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(y.test(i.tagName)){const t=i.textContent.split(o),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],c()),C.nextNode(),d.push({type:2,index:++r});i.append(t[e],c())}}}else if(8===i.nodeType)if(i.data===l)d.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(o,t+1));)d.push({type:7,index:r}),t+=o.length-1}r++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function T(t,e,s=t,i){var n,r,o,l;if(e===E)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=d(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=T(t,a._$AS(t,e.values),a,i)),e}class R{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(s,!0);C.currentNode=n;let r=C.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new P(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new L(r,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(r=C.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{constructor(t,e,s,i){var n;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),d(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==S&&d(this._$AH)?this._$AA.nextSibling.data=t:this.S(h.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=U.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new R(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new U(t)),e}A(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new P(this.M(c()),this.M(c()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class k{constructor(t,e,s,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=T(this,t,e,0),r=!d(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=T(this,i[s+o],e,o),l===E&&(l=this._$AH[o]),r||(r=!d(l)||l!==this._$AH[o]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.k(t)}k(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends k{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===S?void 0:t}}const N=n?n.emptyScript:"";class D extends k{constructor(){super(...arguments),this.type=4}k(t){t&&t!==S?this.element.setAttribute(this.name,N):this.element.removeAttribute(this.name)}}class M extends k{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=T(this,t,e,0))&&void 0!==s?s:S)===E)return;const i=this._$AH,n=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==S&&(i===S||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const z=window.litHtmlPolyfillSupport;null==z||z(U,P),(null!==(i=globalThis.litHtmlVersions)&&void 0!==i?i:globalThis.litHtmlVersions=[]).push("2.1.2")})),n.register("fg7DH",(function(e,s){t(e.exports,"LitElement",(()=>a)),t(e.exports,"css",(()=>n("fbtzp").css)),t(e.exports,"ReactiveElement",(()=>n("c7WDR").ReactiveElement)),t(e.exports,"html",(()=>n("gSKg7").html)),t(e.exports,"render",(()=>n("gSKg7").render)),t(e.exports,"noChange",(()=>n("gSKg7").noChange));var i,r,o=n("c7WDR"),l=(o=n("c7WDR"),n("gSKg7"));l=n("gSKg7");o.ReactiveElement;class a extends o.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=l.render(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return l.noChange}}a.finalized=!0,a._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:a});const h=globalThis.litElementPolyfillSupport;null==h||h({LitElement:a});(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.1.2")})),n.register("fvkUK",(function(e,s){t(e.exports,"CommandObserver",(()=>l));var i=n("cud2N"),r=n("vbrOd");class o extends r.GenericDispatcher{constructor(){super(),i.Client.on("help",(t=>this.onHelpCall(t))),i.Client.on("disconnected",(()=>{this.ready=!1})),this.counter=0,this.requests=[],this.ready=!1}onHelpCall(t){if(this.ready)return;const e=t.value.split("\n");this.commands=e.map((t=>t.split("\t")[0])),this.emit({type:"commandsChanged",value:this.commands}),this.ready=!0}}const l=new o})),n.register("c7Gn4",(function(t,e){t.exports=import("./"+n("lhkxZ").resolve("1Kvgy")).then((()=>n("gS7f9")))})),n.register("j1Di7",(function(t,e){t.exports=Promise.all([import("./"+n("lhkxZ").resolve("6c1fp")),import("./"+n("lhkxZ").resolve("eA0Zk"))]).then((()=>n("HVM7K")))})),n.register("D87VI",(function(t,e){t.exports=import("./"+n("lhkxZ").resolve("fz302")).then((()=>n("loEoV")))})),n.register("6te06",(function(t,e){t.exports=Promise.all([import("./"+n("lhkxZ").resolve("6c1fp")),import("./"+n("lhkxZ").resolve("2V12r"))]).then((()=>n("2WOyT")))})),n("lhkxZ").register(JSON.parse('{"OCda3":"index.ee71c82d.js","1Kvgy":"view-shell.88221c7e.js","eA0Zk":"logs.7e4e8e1e.js","6c1fp":"logs.4a298cee.js","fz302":"view-network.9df5a89a.js","2V12r":"view-ui.4adc6734.js"}')),n("aD10K");var r=n("fbtzp"),o=n("gSKg7"),l=n("fg7DH");n("aD10K");r=n("fbtzp"),o=n("gSKg7"),l=n("fg7DH");var a=n("fvkUK");class h extends l.LitElement{static properties={tag:{type:String},import:{type:String},title:{type:String},command:{type:String},commandAvaliable:{type:Boolean}};static styles=r.css`
  :host{
    border: 2px solid transparent;
    margin:10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius:30px;
    transition: all 0.2s;    
  } 
  :host(.active) {
    border: 2px solid blue
  } 
  :host(.unavailable) {
    display:none !important
  } 

  :host(.active) {
    color: white;
    background: blue;
  }
  :host(.active) p{
    color: white;
  }  

  *{
    cursor: default;
  }
  
  p { 
    color: black;
    padding: 0px; 
    margin:5px;
  }`;constructor(){super(),this.title=this.innerText,this.command,this.commandAvaliable=!0,a.CommandObserver.on("commandsChanged",(t=>{const e=t.value;""!=this.command&&null!=this.command?(this.commandAvaliable=e.includes(this.command),this.classList.toggle("unavailable",!this.commandAvaliable)):this.commandAvaliable=!0}))}render(){return o.html`<p>${this.title}</p>`}}customElements.define("inspector-tab",h);class c extends l.LitElement{static styles=r.css`
    :host {
      display: block;
      width: 100vw;
      background: white;
      margin:0;
    }

    nav{
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
  `;static properties={target:{type:String}};constructor(){super(),this.updateComplete.then((()=>{const t=this.querySelector("inspector-tab.active");t&&this.activateTab(t)}))}async onClick(t){const e=t.target.closest("inspector-tab");e&&this.activateTab(e)}activateTab(t){const e=t.tag;!async function(t){switch(t){case"view-shell":return n("c7Gn4");case"view-logs":return n("j1Di7");case"view-network":return n("D87VI");case"view-ui":n("6te06")}}(e);const s=document.createElement(e);if(null==s)return void console.error(`Failed to create View Element requested by tab-button <${this.tabView}>`);const i=document.querySelector(this.target);if(!i)return void console.error(`Tabview can't find target element: ${this.target}`);i.innerHTML="",i.appendChild(s);const r=document.querySelector("inspector-tab.active");r&&r.classList.remove("active"),t.classList.add("active")}render(){return o.html`
      <nav @click=${t=>this.onClick(t)}>
        <slot>

        </slot>
      </nav>
    `}}customElements.define("tab-navigation",c);
//# sourceMappingURL=index.ee71c82d.js.map