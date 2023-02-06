function Bw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ra={},Aw={get exports(){return Ra},set exports(e){Ra=e}},ku={},T={},Iw={get exports(){return T},set exports(e){T=e}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),Nw=Symbol.for("react.portal"),Dw=Symbol.for("react.fragment"),Mw=Symbol.for("react.strict_mode"),Fw=Symbol.for("react.profiler"),jw=Symbol.for("react.provider"),$w=Symbol.for("react.context"),Hw=Symbol.for("react.forward_ref"),Uw=Symbol.for("react.suspense"),Zw=Symbol.for("react.memo"),Ww=Symbol.for("react.lazy"),Qm=Symbol.iterator;function Vw(e){return e===null||typeof e!="object"?null:(e=Qm&&e[Qm]||e["@@iterator"],typeof e=="function"?e:null)}var wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sy=Object.assign,ky={};function Ii(e,t,n){this.props=e,this.context=t,this.refs=ky,this.updater=n||wy}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cy(){}Cy.prototype=Ii.prototype;function Op(e,t,n){this.props=e,this.context=t,this.refs=ky,this.updater=n||wy}var Tp=Op.prototype=new Cy;Tp.constructor=Op;Sy(Tp,Ii.prototype);Tp.isPureReactComponent=!0;var Xm=Array.isArray,Py=Object.prototype.hasOwnProperty,zp={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function Oy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Py.call(t,r)&&!Ey.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:as,type:e,key:a,ref:l,props:i,_owner:zp.current}}function qw(e,t){return{$$typeof:as,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function Kw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ym=/\/+/g;function Vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kw(""+e.key):t.toString(36)}function ul(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case as:case Nw:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Vc(l,0):r,Xm(i)?(n="",e!=null&&(n=e.replace(Ym,"$&/")+"/"),ul(i,t,n,"",function(p){return p})):i!=null&&(Lp(i)&&(i=qw(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xm(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+Vc(a,u);l+=ul(a,t,n,d,i)}else if(d=Vw(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+Vc(a,u++),l+=ul(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return ul(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Gw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Nt={current:null},cl={transition:null},Qw={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:zp};xe.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=Ii;xe.Fragment=Dw;xe.Profiler=Fw;xe.PureComponent=Op;xe.StrictMode=Mw;xe.Suspense=Uw;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=zp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Py.call(t,d)&&!Ey.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:as,type:e.type,key:i,ref:a,props:r,_owner:l}};xe.createContext=function(e){return e={$$typeof:$w,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jw,_context:e},e.Consumer=e};xe.createElement=Oy;xe.createFactory=function(e){var t=Oy.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:Hw,render:e}};xe.isValidElement=Lp;xe.lazy=function(e){return{$$typeof:Ww,_payload:{_status:-1,_result:e},_init:Gw}};xe.memo=function(e,t){return{$$typeof:Zw,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=cl.transition;cl.transition={};try{e()}finally{cl.transition=t}};xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};xe.useCallback=function(e,t){return Nt.current.useCallback(e,t)};xe.useContext=function(e){return Nt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return Nt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return Nt.current.useEffect(e,t)};xe.useId=function(){return Nt.current.useId()};xe.useImperativeHandle=function(e,t,n){return Nt.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return Nt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return Nt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return Nt.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return Nt.current.useReducer(e,t,n)};xe.useRef=function(e){return Nt.current.useRef(e)};xe.useState=function(e){return Nt.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return Nt.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return Nt.current.useTransition()};xe.version="18.2.0";(function(e){e.exports=xe})(Iw);const $=xy(T),Ba=Bw({__proto__:null,default:$},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xw=T,Yw=Symbol.for("react.element"),Jw=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function Ty(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)eS.call(t,r)&&!nS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yw,type:e,key:a,ref:l,props:i,_owner:tS.current}}ku.Fragment=Jw;ku.jsx=Ty;ku.jsxs=Ty;(function(e){e.exports=ku})(Aw);const rS=Ra.Fragment,ge=Ra.jsx,Sn=Ra.jsxs;var ki={},oS={get exports(){return ki},set exports(e){ki=e}},Xt={},qd={},iS={get exports(){return qd},set exports(e){qd=e}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,re){var V=R.length;R.push(re);e:for(;0<V;){var E=V-1>>>1,I=R[E];if(0<i(I,re))R[E]=re,R[V]=I,V=E;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var re=R[0],V=R.pop();if(V!==re){R[0]=V;e:for(var E=0,I=R.length,A=I>>>1;E<A;){var q=2*(E+1)-1,Y=R[q],te=q+1,se=R[te];if(0>i(Y,V))te<I&&0>i(se,Y)?(R[E]=se,R[te]=V,E=te):(R[E]=Y,R[q]=V,E=q);else if(te<I&&0>i(se,V))R[E]=se,R[te]=V,E=te;else break e}}return re}function i(R,re){var V=R.sortIndex-re.sortIndex;return V!==0?V:R.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],p=[],m=1,_=null,h=3,v=!1,x=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(R){for(var re=n(p);re!==null;){if(re.callback===null)r(p);else if(re.startTime<=R)r(p),re.sortIndex=re.expirationTime,t(d,re);else break;re=n(p)}}function C(R){if(w=!1,k(R),!x)if(n(d)!==null)x=!0,U(z);else{var re=n(p);re!==null&&ne(C,re.startTime-R)}}function z(R,re){x=!1,w&&(w=!1,y(F),F=-1),v=!0;var V=h;try{for(k(re),_=n(d);_!==null&&(!(_.expirationTime>re)||R&&!J());){var E=_.callback;if(typeof E=="function"){_.callback=null,h=_.priorityLevel;var I=E(_.expirationTime<=re);re=e.unstable_now(),typeof I=="function"?_.callback=I:_===n(d)&&r(d),k(re)}else r(d);_=n(d)}if(_!==null)var A=!0;else{var q=n(p);q!==null&&ne(C,q.startTime-re),A=!1}return A}finally{_=null,h=V,v=!1}}var N=!1,M=null,F=-1,H=5,j=-1;function J(){return!(e.unstable_now()-j<H)}function ie(){if(M!==null){var R=e.unstable_now();j=R;var re=!0;try{re=M(!0,R)}finally{re?fe():(N=!1,M=null)}}else N=!1}var fe;if(typeof b=="function")fe=function(){b(ie)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,le=X.port2;X.port1.onmessage=ie,fe=function(){le.postMessage(null)}}else fe=function(){O(ie,0)};function U(R){M=R,N||(N=!0,fe())}function ne(R,re){F=O(function(){R(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,U(z))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var re=3;break;default:re=h}var V=h;h=re;try{return R()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,re){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=h;h=R;try{return re()}finally{h=V}},e.unstable_scheduleCallback=function(R,re,V){var E=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?E+V:E):V=E,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=V+I,R={id:m++,callback:re,priorityLevel:R,startTime:V,expirationTime:I,sortIndex:-1},V>E?(R.sortIndex=V,t(p,R),n(d)===null&&R===n(p)&&(w?(y(F),F=-1):w=!0,ne(C,V-E))):(R.sortIndex=I,t(d,R),x||v||(x=!0,U(z))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var re=h;return function(){var V=h;h=re;try{return R.apply(this,arguments)}finally{h=V}}}})(zy);(function(e){e.exports=zy})(iS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=T,Gt=qd;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ry=new Set,Aa={};function Fo(e,t){Ci(e,t),Ci(e+"Capture",t)}function Ci(e,t){for(Aa[e]=t,e=0;e<t.length;e++)Ry.add(t[e])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},e_={};function sS(e){return Kd.call(e_,e)?!0:Kd.call(Jm,e)?!1:aS.test(e)?e_[e]=!0:(Jm[e]=!0,!1)}function lS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uS(e,t,n,r){if(t===null||typeof t>"u"||lS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rp=/[\-:]([a-z])/g;function Bp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rp,Bp);bt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rp,Bp);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rp,Bp);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ap(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uS(t,n,i,r)&&(n=null),r||i===null?sS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _r=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Iy=Symbol.for("react.offscreen"),t_=Symbol.iterator;function ta(e){return e===null||typeof e!="object"?null:(e=t_&&e[t_]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,qc;function ha(e){if(qc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qc=t&&t[1]||""}return`
`+qc+e}var Kc=!1;function Gc(e,t){if(!e||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ha(e):""}function cS(e){switch(e.tag){case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return e=Gc(e.type,!1),e;case 11:return e=Gc(e.type.render,!1),e;case 1:return e=Gc(e.type,!0),e;default:return""}}function Yd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ti:return"Fragment";case ei:return"Portal";case Gd:return"Profiler";case Ip:return"StrictMode";case Qd:return"Suspense";case Xd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ay:return(e.displayName||"Context")+".Consumer";case By:return(e._context.displayName||"Context")+".Provider";case Np:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dp:return t=e.displayName||null,t!==null?t:Yd(e.type)||"Memo";case Pr:t=e._payload,e=e._init;try{return Yd(e(t))}catch{}}return null}function dS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(t);case 8:return t===Ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ny(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fS(e){var t=Ny(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=fS(e))}function Dy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ny(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jd(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function n_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function My(e,t){t=t.checked,t!=null&&Ap(e,"checked",t,!1)}function ef(e,t){My(e,t);var n=Kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tf(e,t.type,n):t.hasOwnProperty("defaultValue")&&tf(e,t.type,Kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function r_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tf(e,t,n){(t!=="number"||zl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ma=Array.isArray;function pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function o_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(ma(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kr(n)}}function Fy(e,t){var n=Kr(t.value),r=Kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function i_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hs,$y=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(e){pS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ba[t]=ba[e]})});function Hy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ba.hasOwnProperty(e)&&ba[e]?(""+t).trim():t+"px"}function Uy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hS=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(e,t){if(t){if(hS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Mp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lf=null,hi=null,mi=null;function a_(e){if(e=us(e)){if(typeof lf!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=Tu(t),lf(e.stateNode,e.type,t))}}function Zy(e){hi?mi?mi.push(e):mi=[e]:hi=e}function Wy(){if(hi){var e=hi,t=mi;if(mi=hi=null,a_(e),t)for(e=0;e<t.length;e++)a_(t[e])}}function Vy(e,t){return e(t)}function qy(){}var Qc=!1;function Ky(e,t,n){if(Qc)return e(t,n);Qc=!0;try{return Vy(e,t,n)}finally{Qc=!1,(hi!==null||mi!==null)&&(qy(),Wy())}}function Na(e,t){var n=e.stateNode;if(n===null)return null;var r=Tu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var uf=!1;if(cr)try{var na={};Object.defineProperty(na,"passive",{get:function(){uf=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{uf=!1}function mS(e,t,n,r,i,a,l,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(m){this.onError(m)}}var xa=!1,Ll=null,Rl=!1,cf=null,_S={onError:function(e){xa=!0,Ll=e}};function gS(e,t,n,r,i,a,l,u,d){xa=!1,Ll=null,mS.apply(_S,arguments)}function vS(e,t,n,r,i,a,l,u,d){if(gS.apply(this,arguments),xa){if(xa){var p=Ll;xa=!1,Ll=null}else throw Error(Q(198));Rl||(Rl=!0,cf=p)}}function jo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function s_(e){if(jo(e)!==e)throw Error(Q(188))}function yS(e){var t=e.alternate;if(!t){if(t=jo(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return s_(i),e;if(a===r)return s_(i),t;a=a.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Qy(e){return e=yS(e),e!==null?Xy(e):null}function Xy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xy(e);if(t!==null)return t;e=e.sibling}return null}var Yy=Gt.unstable_scheduleCallback,l_=Gt.unstable_cancelCallback,bS=Gt.unstable_shouldYield,xS=Gt.unstable_requestPaint,nt=Gt.unstable_now,wS=Gt.unstable_getCurrentPriorityLevel,Fp=Gt.unstable_ImmediatePriority,Jy=Gt.unstable_UserBlockingPriority,Bl=Gt.unstable_NormalPriority,SS=Gt.unstable_LowPriority,e0=Gt.unstable_IdlePriority,Cu=null,qn=null;function kS(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Cu,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:ES,CS=Math.log,PS=Math.LN2;function ES(e){return e>>>=0,e===0?32:31-(CS(e)/PS|0)|0}var Us=64,Zs=4194304;function _a(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=_a(u):(a&=l,a!==0&&(r=_a(a)))}else l=n&~i,l!==0?r=_a(l):a!==0&&(r=_a(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function OS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-En(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=OS(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function df(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function t0(){var e=Us;return Us<<=1,!(Us&4194240)&&(Us=64),e}function Xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ss(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function zS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function jp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Be=0;function n0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var r0,$p,o0,i0,a0,ff=!1,Ws=[],Ir=null,Nr=null,Dr=null,Da=new Map,Ma=new Map,Tr=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function u_(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function ra(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=us(t),t!==null&&$p(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function RS(e,t,n,r,i){switch(t){case"focusin":return Ir=ra(Ir,e,t,n,r,i),!0;case"dragenter":return Nr=ra(Nr,e,t,n,r,i),!0;case"mouseover":return Dr=ra(Dr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Da.set(a,ra(Da.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ma.set(a,ra(Ma.get(a)||null,e,t,n,r,i)),!0}return!1}function s0(e){var t=yo(e.target);if(t!==null){var n=jo(t);if(n!==null){if(t=n.tag,t===13){if(t=Gy(n),t!==null){e.blockedOn=t,a0(e.priority,function(){o0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return t=us(n),t!==null&&$p(t),e.blockedOn=n,!1;t.shift()}return!0}function c_(e,t,n){dl(e)&&n.delete(t)}function BS(){ff=!1,Ir!==null&&dl(Ir)&&(Ir=null),Nr!==null&&dl(Nr)&&(Nr=null),Dr!==null&&dl(Dr)&&(Dr=null),Da.forEach(c_),Ma.forEach(c_)}function oa(e,t){e.blockedOn===t&&(e.blockedOn=null,ff||(ff=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,BS)))}function Fa(e){function t(i){return oa(i,e)}if(0<Ws.length){oa(Ws[0],e);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ir!==null&&oa(Ir,e),Nr!==null&&oa(Nr,e),Dr!==null&&oa(Dr,e),Da.forEach(t),Ma.forEach(t),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Tr.shift()}var _i=_r.ReactCurrentBatchConfig,Il=!0;function AS(e,t,n,r){var i=Be,a=_i.transition;_i.transition=null;try{Be=1,Hp(e,t,n,r)}finally{Be=i,_i.transition=a}}function IS(e,t,n,r){var i=Be,a=_i.transition;_i.transition=null;try{Be=4,Hp(e,t,n,r)}finally{Be=i,_i.transition=a}}function Hp(e,t,n,r){if(Il){var i=pf(e,t,n,r);if(i===null)sd(e,t,r,Nl,n),u_(e,r);else if(RS(i,e,t,n,r))r.stopPropagation();else if(u_(e,r),t&4&&-1<LS.indexOf(e)){for(;i!==null;){var a=us(i);if(a!==null&&r0(a),a=pf(e,t,n,r),a===null&&sd(e,t,r,Nl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else sd(e,t,r,null,n)}}var Nl=null;function pf(e,t,n,r){if(Nl=null,e=Mp(r),e=yo(e),e!==null)if(t=jo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Nl=e,null}function l0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wS()){case Fp:return 1;case Jy:return 4;case Bl:case SS:return 16;case e0:return 536870912;default:return 16}default:return 16}}var Rr=null,Up=null,fl=null;function u0(){if(fl)return fl;var e,t=Up,n=t.length,r,i="value"in Rr?Rr.value:Rr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return fl=i.slice(e,1<r?1-r:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function d_(){return!1}function Yt(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vs:d_,this.isPropagationStopped=d_,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Yt(Ni),ls=Qe({},Ni,{view:0,detail:0}),NS=Yt(ls),Yc,Jc,ia,Pu=Qe({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Yc=e.screenX-ia.screenX,Jc=e.screenY-ia.screenY):Jc=Yc=0,ia=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),f_=Yt(Pu),DS=Qe({},Pu,{dataTransfer:0}),MS=Yt(DS),FS=Qe({},ls,{relatedTarget:0}),ed=Yt(FS),jS=Qe({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=Yt(jS),HS=Qe({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),US=Yt(HS),ZS=Qe({},Ni,{data:0}),p_=Yt(ZS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qS[e])?!!t[e]:!1}function Wp(){return KS}var GS=Qe({},ls,{key:function(e){if(e.key){var t=WS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wp,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),QS=Yt(GS),XS=Qe({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h_=Yt(XS),YS=Qe({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wp}),JS=Yt(YS),ek=Qe({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),tk=Yt(ek),nk=Qe({},Pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rk=Yt(nk),ok=[9,13,27,32],Vp=cr&&"CompositionEvent"in window,wa=null;cr&&"documentMode"in document&&(wa=document.documentMode);var ik=cr&&"TextEvent"in window&&!wa,c0=cr&&(!Vp||wa&&8<wa&&11>=wa),m_=String.fromCharCode(32),__=!1;function d0(e,t){switch(e){case"keyup":return ok.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function ak(e,t){switch(e){case"compositionend":return f0(t);case"keypress":return t.which!==32?null:(__=!0,m_);case"textInput":return e=t.data,e===m_&&__?null:e;default:return null}}function sk(e,t){if(ni)return e==="compositionend"||!Vp&&d0(e,t)?(e=u0(),fl=Up=Rr=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c0&&t.locale!=="ko"?null:t.data;default:return null}}var lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lk[e.type]:t==="textarea"}function p0(e,t,n,r){Zy(r),t=Dl(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sa=null,ja=null;function uk(e){k0(e,0)}function Eu(e){var t=ii(e);if(Dy(t))return e}function ck(e,t){if(e==="change")return t}var h0=!1;if(cr){var td;if(cr){var nd="oninput"in document;if(!nd){var v_=document.createElement("div");v_.setAttribute("oninput","return;"),nd=typeof v_.oninput=="function"}td=nd}else td=!1;h0=td&&(!document.documentMode||9<document.documentMode)}function y_(){Sa&&(Sa.detachEvent("onpropertychange",m0),ja=Sa=null)}function m0(e){if(e.propertyName==="value"&&Eu(ja)){var t=[];p0(t,ja,e,Mp(e)),Ky(uk,t)}}function dk(e,t,n){e==="focusin"?(y_(),Sa=t,ja=n,Sa.attachEvent("onpropertychange",m0)):e==="focusout"&&y_()}function fk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu(ja)}function pk(e,t){if(e==="click")return Eu(t)}function hk(e,t){if(e==="input"||e==="change")return Eu(t)}function mk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:mk;function $a(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(t,i)||!Ln(e[i],t[i]))return!1}return!0}function b_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function x_(e,t){var n=b_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=b_(n)}}function _0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g0(){for(var e=window,t=zl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zl(e.document)}return t}function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _k(e){var t=g0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=x_(n,a);var l=x_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gk=cr&&"documentMode"in document&&11>=document.documentMode,ri=null,hf=null,ka=null,mf=!1;function w_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||ri==null||ri!==zl(r)||(r=ri,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&$a(ka,r)||(ka=r,r=Dl(hf,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ri)))}function qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},rd={},v0={};cr&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Ou(e){if(rd[e])return rd[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in v0)return rd[e]=t[n];return e}var y0=Ou("animationend"),b0=Ou("animationiteration"),x0=Ou("animationstart"),w0=Ou("transitionend"),S0=new Map,S_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function to(e,t){S0.set(e,t),Fo(t,[e])}for(var od=0;od<S_.length;od++){var id=S_[od],vk=id.toLowerCase(),yk=id[0].toUpperCase()+id.slice(1);to(vk,"on"+yk)}to(y0,"onAnimationEnd");to(b0,"onAnimationIteration");to(x0,"onAnimationStart");to("dblclick","onDoubleClick");to("focusin","onFocus");to("focusout","onBlur");to(w0,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function k_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vS(r,t,void 0,e),e.currentTarget=null}function k0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;k_(i,u,p),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,p=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;k_(i,u,p),a=d}}}if(Rl)throw e=cf,Rl=!1,cf=null,e}function $e(e,t){var n=t[bf];n===void 0&&(n=t[bf]=new Set);var r=e+"__bubble";n.has(r)||(C0(t,e,2,!1),n.add(r))}function ad(e,t,n){var r=0;t&&(r|=4),C0(n,e,r,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function Ha(e){if(!e[Ks]){e[Ks]=!0,Ry.forEach(function(n){n!=="selectionchange"&&(bk.has(n)||ad(n,!1,e),ad(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,ad("selectionchange",!1,t))}}function C0(e,t,n,r){switch(l0(t)){case 1:var i=AS;break;case 4:i=IS;break;default:i=Hp}n=i.bind(null,t,n,e),i=void 0,!uf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=yo(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}Ky(function(){var p=a,m=Mp(n),_=[];e:{var h=S0.get(e);if(h!==void 0){var v=Zp,x=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":v=QS;break;case"focusin":x="focus",v=ed;break;case"focusout":x="blur",v=ed;break;case"beforeblur":case"afterblur":v=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=f_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=JS;break;case y0:case b0:case x0:v=$S;break;case w0:v=tk;break;case"scroll":v=NS;break;case"wheel":v=rk;break;case"copy":case"cut":case"paste":v=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=h_}var w=(t&4)!==0,O=!w&&e==="scroll",y=w?h!==null?h+"Capture":null:h;w=[];for(var b=p,k;b!==null;){k=b;var C=k.stateNode;if(k.tag===5&&C!==null&&(k=C,y!==null&&(C=Na(b,y),C!=null&&w.push(Ua(b,C,k)))),O)break;b=b.return}0<w.length&&(h=new v(h,x,null,n,m),_.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==sf&&(x=n.relatedTarget||n.fromElement)&&(yo(x)||x[dr]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=p,x=x?yo(x):null,x!==null&&(O=jo(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=p),v!==x)){if(w=f_,C="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=h_,C="onPointerLeave",y="onPointerEnter",b="pointer"),O=v==null?h:ii(v),k=x==null?h:ii(x),h=new w(C,b+"leave",v,n,m),h.target=O,h.relatedTarget=k,C=null,yo(m)===p&&(w=new w(y,b+"enter",x,n,m),w.target=k,w.relatedTarget=O,C=w),O=C,v&&x)t:{for(w=v,y=x,b=0,k=w;k;k=Qo(k))b++;for(k=0,C=y;C;C=Qo(C))k++;for(;0<b-k;)w=Qo(w),b--;for(;0<k-b;)y=Qo(y),k--;for(;b--;){if(w===y||y!==null&&w===y.alternate)break t;w=Qo(w),y=Qo(y)}w=null}else w=null;v!==null&&C_(_,h,v,w,!1),x!==null&&O!==null&&C_(_,O,x,w,!0)}}e:{if(h=p?ii(p):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var z=ck;else if(g_(h))if(h0)z=hk;else{z=fk;var N=dk}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=pk);if(z&&(z=z(e,p))){p0(_,z,n,m);break e}N&&N(e,h,p),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&tf(h,"number",h.value)}switch(N=p?ii(p):window,e){case"focusin":(g_(N)||N.contentEditable==="true")&&(ri=N,hf=p,ka=null);break;case"focusout":ka=hf=ri=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,w_(_,n,m);break;case"selectionchange":if(gk)break;case"keydown":case"keyup":w_(_,n,m)}var M;if(Vp)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ni?d0(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(c0&&n.locale!=="ko"&&(ni||F!=="onCompositionStart"?F==="onCompositionEnd"&&ni&&(M=u0()):(Rr=m,Up="value"in Rr?Rr.value:Rr.textContent,ni=!0)),N=Dl(p,F),0<N.length&&(F=new p_(F,e,null,n,m),_.push({event:F,listeners:N}),M?F.data=M:(M=f0(n),M!==null&&(F.data=M)))),(M=ik?ak(e,n):sk(e,n))&&(p=Dl(p,"onBeforeInput"),0<p.length&&(m=new p_("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:p}),m.data=M))}k0(_,t)})}function Ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Na(e,n),a!=null&&r.unshift(Ua(e,a,i)),a=Na(e,t),a!=null&&r.push(Ua(e,a,i))),e=e.return}return r}function Qo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function C_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,i?(d=Na(n,a),d!=null&&l.unshift(Ua(n,d,u))):i||(d=Na(n,a),d!=null&&l.push(Ua(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xk=/\r\n?/g,wk=/\u0000|\uFFFD/g;function P_(e){return(typeof e=="string"?e:""+e).replace(xk,`
`).replace(wk,"")}function Gs(e,t,n){if(t=P_(t),P_(e)!==t&&n)throw Error(Q(425))}function Ml(){}var _f=null,gf=null;function vf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,Sk=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,kk=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(e){return E_.resolve(null).then(e).catch(Ck)}:yf;function Ck(e){setTimeout(function(){throw e})}function ld(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function O_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Di,Za="__reactProps$"+Di,dr="__reactContainer$"+Di,bf="__reactEvents$"+Di,Pk="__reactListeners$"+Di,Ek="__reactHandles$"+Di;function yo(e){var t=e[Zn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dr]||n[Zn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=O_(e);e!==null;){if(n=e[Zn])return n;e=O_(e)}return t}e=n,n=e.parentNode}return null}function us(e){return e=e[Zn]||e[dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ii(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function Tu(e){return e[Za]||null}var xf=[],ai=-1;function no(e){return{current:e}}function He(e){0>ai||(e.current=xf[ai],xf[ai]=null,ai--)}function je(e,t){ai++,xf[ai]=e.current,e.current=t}var Gr={},Tt=no(Gr),Ht=no(!1),zo=Gr;function Pi(e,t){var n=e.type.contextTypes;if(!n)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(e){return e=e.childContextTypes,e!=null}function Fl(){He(Ht),He(Tt)}function T_(e,t,n){if(Tt.current!==Gr)throw Error(Q(168));je(Tt,t),je(Ht,n)}function P0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,dS(e)||"Unknown",i));return Qe({},n,r)}function jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,zo=Tt.current,je(Tt,e),je(Ht,Ht.current),!0}function z_(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=P0(e,t,zo),r.__reactInternalMemoizedMergedChildContext=e,He(Ht),He(Tt),je(Tt,e)):He(Ht),je(Ht,n)}var ir=null,zu=!1,ud=!1;function E0(e){ir===null?ir=[e]:ir.push(e)}function Ok(e){zu=!0,E0(e)}function ro(){if(!ud&&ir!==null){ud=!0;var e=0,t=Be;try{var n=ir;for(Be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ir=null,zu=!1}catch(i){throw ir!==null&&(ir=ir.slice(e+1)),Yy(Fp,ro),i}finally{Be=t,ud=!1}}return null}var si=[],li=0,$l=null,Hl=0,an=[],sn=0,Lo=null,ar=1,sr="";function mo(e,t){si[li++]=Hl,si[li++]=$l,$l=e,Hl=t}function O0(e,t,n){an[sn++]=ar,an[sn++]=sr,an[sn++]=Lo,Lo=e;var r=ar;e=sr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var a=32-En(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ar=1<<32-En(t)+i|n<<i|r,sr=a+e}else ar=1<<a|n<<i|r,sr=e}function Kp(e){e.return!==null&&(mo(e,1),O0(e,1,0))}function Gp(e){for(;e===$l;)$l=si[--li],si[li]=null,Hl=si[--li],si[li]=null;for(;e===Lo;)Lo=an[--sn],an[sn]=null,sr=an[--sn],an[sn]=null,ar=an[--sn],an[sn]=null}var Kt=null,qt=null,Ve=!1,Cn=null;function T0(e,t){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function L_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Kt=e,qt=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Kt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lo!==null?{id:ar,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Kt=e,qt=null,!0):!1;default:return!1}}function wf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sf(e){if(Ve){var t=qt;if(t){var n=t;if(!L_(e,t)){if(wf(e))throw Error(Q(418));t=Mr(n.nextSibling);var r=Kt;t&&L_(e,t)?T0(r,n):(e.flags=e.flags&-4097|2,Ve=!1,Kt=e)}}else{if(wf(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Ve=!1,Kt=e}}}function R_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Qs(e){if(e!==Kt)return!1;if(!Ve)return R_(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vf(e.type,e.memoizedProps)),t&&(t=qt)){if(wf(e))throw z0(),Error(Q(418));for(;t;)T0(e,t),t=Mr(t.nextSibling)}if(R_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Kt?Mr(e.stateNode.nextSibling):null;return!0}function z0(){for(var e=qt;e;)e=Mr(e.nextSibling)}function Ei(){qt=Kt=null,Ve=!1}function Qp(e){Cn===null?Cn=[e]:Cn.push(e)}var Tk=_r.ReactCurrentBatchConfig;function wn(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ul=no(null),Zl=null,ui=null,Xp=null;function Yp(){Xp=ui=Zl=null}function Jp(e){var t=Ul.current;He(Ul),e._currentValue=t}function kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){Zl=e,Xp=ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function fn(e){var t=e._currentValue;if(Xp!==e)if(e={context:e,memoizedValue:t,next:null},ui===null){if(Zl===null)throw Error(Q(308));ui=e,Zl.dependencies={lanes:0,firstContext:e}}else ui=ui.next=e;return t}var bo=null;function eh(e){bo===null?bo=[e]:bo.push(e)}function L0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eh(t)):(n.next=i.next,i.next=n),t.interleaved=n,fr(e,r)}function fr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Er=!1;function th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,fr(e,n)}return i=r.interleaved,i===null?(t.next=t,eh(r)):(t.next=i.next,i.next=t),r.interleaved=t,fr(e,n)}function hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jp(e,n)}}function B_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var i=e.updateQueue;Er=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,p=d.next;d.next=null,l===null?a=p:l.next=p,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=p:u.next=p,m.lastBaseUpdate=d))}if(a!==null){var _=i.baseState;l=0,m=p=d=null,u=a;do{var h=u.lane,v=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(h=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){_=x.call(v,_,h);break e}_=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(v,_,h):x,h==null)break e;_=Qe({},_,h);break e;case 2:Er=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else v={eventTime:v,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(p=m=v,d=_):m=m.next=v,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(m===null&&(d=_),i.baseState=d,i.firstBaseUpdate=p,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Bo|=l,e.lanes=l,e.memoizedState=_}}function A_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var B0=new Ly.Component().refs;function Cf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lu={isMounted:function(e){return(e=e._reactInternals)?jo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=$r(e),a=lr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Fr(e,a,i),t!==null&&(On(t,e,i,r),hl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=$r(e),a=lr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Fr(e,a,i),t!==null&&(On(t,e,i,r),hl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=$r(e),i=lr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fr(e,i,r),t!==null&&(On(t,e,r,n),hl(t,e,r))}};function I_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!$a(n,r)||!$a(i,a):!0}function A0(e,t,n){var r=!1,i=Gr,a=t.contextType;return typeof a=="object"&&a!==null?a=fn(a):(i=Ut(t)?zo:Tt.current,r=t.contextTypes,a=(r=r!=null)?Pi(e,i):Gr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function N_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lu.enqueueReplaceState(t,t.state,null)}function Pf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=B0,th(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=fn(a):(a=Ut(t)?zo:Tt.current,i.context=Pi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Cf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lu.enqueueReplaceState(i,i.state,null),Wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===B0&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function D_(e){var t=e._init;return t(e._payload)}function I0(e){function t(y,b){if(e){var k=y.deletions;k===null?(y.deletions=[b],y.flags|=16):k.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Hr(y,b),y.index=0,y.sibling=null,y}function a(y,b,k){return y.index=k,e?(k=y.alternate,k!==null?(k=k.index,k<b?(y.flags|=2,b):k):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,k,C){return b===null||b.tag!==6?(b=_d(k,y.mode,C),b.return=y,b):(b=i(b,k),b.return=y,b)}function d(y,b,k,C){var z=k.type;return z===ti?m(y,b,k.props.children,C,k.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Pr&&D_(z)===b.type)?(C=i(b,k.props),C.ref=aa(y,b,k),C.return=y,C):(C=bl(k.type,k.key,k.props,null,y.mode,C),C.ref=aa(y,b,k),C.return=y,C)}function p(y,b,k,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=gd(k,y.mode,C),b.return=y,b):(b=i(b,k.children||[]),b.return=y,b)}function m(y,b,k,C,z){return b===null||b.tag!==7?(b=Po(k,y.mode,C,z),b.return=y,b):(b=i(b,k),b.return=y,b)}function _(y,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return b=_d(""+b,y.mode,k),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case js:return k=bl(b.type,b.key,b.props,null,y.mode,k),k.ref=aa(y,null,b),k.return=y,k;case ei:return b=gd(b,y.mode,k),b.return=y,b;case Pr:var C=b._init;return _(y,C(b._payload),k)}if(ma(b)||ta(b))return b=Po(b,y.mode,k,null),b.return=y,b;Xs(y,b)}return null}function h(y,b,k,C){var z=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return z!==null?null:u(y,b,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case js:return k.key===z?d(y,b,k,C):null;case ei:return k.key===z?p(y,b,k,C):null;case Pr:return z=k._init,h(y,b,z(k._payload),C)}if(ma(k)||ta(k))return z!==null?null:m(y,b,k,C,null);Xs(y,k)}return null}function v(y,b,k,C,z){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(k)||null,u(b,y,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case js:return y=y.get(C.key===null?k:C.key)||null,d(b,y,C,z);case ei:return y=y.get(C.key===null?k:C.key)||null,p(b,y,C,z);case Pr:var N=C._init;return v(y,b,k,N(C._payload),z)}if(ma(C)||ta(C))return y=y.get(k)||null,m(b,y,C,z,null);Xs(b,C)}return null}function x(y,b,k,C){for(var z=null,N=null,M=b,F=b=0,H=null;M!==null&&F<k.length;F++){M.index>F?(H=M,M=null):H=M.sibling;var j=h(y,M,k[F],C);if(j===null){M===null&&(M=H);break}e&&M&&j.alternate===null&&t(y,M),b=a(j,b,F),N===null?z=j:N.sibling=j,N=j,M=H}if(F===k.length)return n(y,M),Ve&&mo(y,F),z;if(M===null){for(;F<k.length;F++)M=_(y,k[F],C),M!==null&&(b=a(M,b,F),N===null?z=M:N.sibling=M,N=M);return Ve&&mo(y,F),z}for(M=r(y,M);F<k.length;F++)H=v(M,y,F,k[F],C),H!==null&&(e&&H.alternate!==null&&M.delete(H.key===null?F:H.key),b=a(H,b,F),N===null?z=H:N.sibling=H,N=H);return e&&M.forEach(function(J){return t(y,J)}),Ve&&mo(y,F),z}function w(y,b,k,C){var z=ta(k);if(typeof z!="function")throw Error(Q(150));if(k=z.call(k),k==null)throw Error(Q(151));for(var N=z=null,M=b,F=b=0,H=null,j=k.next();M!==null&&!j.done;F++,j=k.next()){M.index>F?(H=M,M=null):H=M.sibling;var J=h(y,M,j.value,C);if(J===null){M===null&&(M=H);break}e&&M&&J.alternate===null&&t(y,M),b=a(J,b,F),N===null?z=J:N.sibling=J,N=J,M=H}if(j.done)return n(y,M),Ve&&mo(y,F),z;if(M===null){for(;!j.done;F++,j=k.next())j=_(y,j.value,C),j!==null&&(b=a(j,b,F),N===null?z=j:N.sibling=j,N=j);return Ve&&mo(y,F),z}for(M=r(y,M);!j.done;F++,j=k.next())j=v(M,y,F,j.value,C),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?F:j.key),b=a(j,b,F),N===null?z=j:N.sibling=j,N=j);return e&&M.forEach(function(ie){return t(y,ie)}),Ve&&mo(y,F),z}function O(y,b,k,C){if(typeof k=="object"&&k!==null&&k.type===ti&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case js:e:{for(var z=k.key,N=b;N!==null;){if(N.key===z){if(z=k.type,z===ti){if(N.tag===7){n(y,N.sibling),b=i(N,k.props.children),b.return=y,y=b;break e}}else if(N.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Pr&&D_(z)===N.type){n(y,N.sibling),b=i(N,k.props),b.ref=aa(y,N,k),b.return=y,y=b;break e}n(y,N);break}else t(y,N);N=N.sibling}k.type===ti?(b=Po(k.props.children,y.mode,C,k.key),b.return=y,y=b):(C=bl(k.type,k.key,k.props,null,y.mode,C),C.ref=aa(y,b,k),C.return=y,y=C)}return l(y);case ei:e:{for(N=k.key;b!==null;){if(b.key===N)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){n(y,b.sibling),b=i(b,k.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=gd(k,y.mode,C),b.return=y,y=b}return l(y);case Pr:return N=k._init,O(y,b,N(k._payload),C)}if(ma(k))return x(y,b,k,C);if(ta(k))return w(y,b,k,C);Xs(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,k),b.return=y,y=b):(n(y,b),b=_d(k,y.mode,C),b.return=y,y=b),l(y)):n(y,b)}return O}var Oi=I0(!0),N0=I0(!1),cs={},Kn=no(cs),Wa=no(cs),Va=no(cs);function xo(e){if(e===cs)throw Error(Q(174));return e}function nh(e,t){switch(je(Va,t),je(Wa,e),je(Kn,cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rf(t,e)}He(Kn),je(Kn,t)}function Ti(){He(Kn),He(Wa),He(Va)}function D0(e){xo(Va.current);var t=xo(Kn.current),n=rf(t,e.type);t!==n&&(je(Wa,e),je(Kn,n))}function rh(e){Wa.current===e&&(He(Kn),He(Wa))}var Ke=no(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cd=[];function oh(){for(var e=0;e<cd.length;e++)cd[e]._workInProgressVersionPrimary=null;cd.length=0}var ml=_r.ReactCurrentDispatcher,dd=_r.ReactCurrentBatchConfig,Ro=0,Ge=null,ct=null,pt=null,ql=!1,Ca=!1,qa=0,zk=0;function St(){throw Error(Q(321))}function ih(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function ah(e,t,n,r,i,a){if(Ro=a,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?Ak:Ik,e=n(r,i),Ca){a=0;do{if(Ca=!1,qa=0,25<=a)throw Error(Q(301));a+=1,pt=ct=null,t.updateQueue=null,ml.current=Nk,e=n(r,i)}while(Ca)}if(ml.current=Kl,t=ct!==null&&ct.next!==null,Ro=0,pt=ct=Ge=null,ql=!1,t)throw Error(Q(300));return e}function sh(){var e=qa!==0;return qa=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ge.memoizedState=pt=e:pt=pt.next=e,pt}function pn(){if(ct===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=pt===null?Ge.memoizedState:pt.next;if(t!==null)pt=t,ct=e;else{if(e===null)throw Error(Q(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Ge.memoizedState=pt=e:pt=pt.next=e}return pt}function Ka(e,t){return typeof t=="function"?t(e):t}function fd(e){var t=pn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=ct,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,p=a;do{var m=p.lane;if((Ro&m)===m)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var _={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=_,l=r):d=d.next=_,Ge.lanes|=m,Bo|=m}p=p.next}while(p!==null&&p!==a);d===null?l=r:d.next=u,Ln(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ge.lanes|=a,Bo|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pd(e){var t=pn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Ln(a,t.memoizedState)||($t=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function M0(){}function F0(e,t){var n=Ge,r=pn(),i=t(),a=!Ln(r.memoizedState,i);if(a&&(r.memoizedState=i,$t=!0),r=r.queue,lh(H0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,$0.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(Q(349));Ro&30||j0(n,t,i)}return i}function j0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $0(e,t,n,r){t.value=n,t.getSnapshot=r,U0(t)&&Z0(e)}function H0(e,t,n){return n(function(){U0(t)&&Z0(e)})}function U0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function Z0(e){var t=fr(e,1);t!==null&&On(t,e,1,-1)}function M_(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},t.queue=e,e=e.dispatch=Bk.bind(null,Ge,e),[t.memoizedState,e]}function Ga(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function W0(){return pn().memoizedState}function _l(e,t,n,r){var i=Un();Ge.flags|=e,i.memoizedState=Ga(1|t,n,void 0,r===void 0?null:r)}function Ru(e,t,n,r){var i=pn();r=r===void 0?null:r;var a=void 0;if(ct!==null){var l=ct.memoizedState;if(a=l.destroy,r!==null&&ih(r,l.deps)){i.memoizedState=Ga(t,n,a,r);return}}Ge.flags|=e,i.memoizedState=Ga(1|t,n,a,r)}function F_(e,t){return _l(8390656,8,e,t)}function lh(e,t){return Ru(2048,8,e,t)}function V0(e,t){return Ru(4,2,e,t)}function q0(e,t){return Ru(4,4,e,t)}function K0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G0(e,t,n){return n=n!=null?n.concat([e]):null,Ru(4,4,K0.bind(null,t,e),n)}function uh(){}function Q0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ih(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function X0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ih(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Y0(e,t,n){return Ro&21?(Ln(n,t)||(n=t0(),Ge.lanes|=n,Bo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function Lk(e,t){var n=Be;Be=n!==0&&4>n?n:4,e(!0);var r=dd.transition;dd.transition={};try{e(!1),t()}finally{Be=n,dd.transition=r}}function J0(){return pn().memoizedState}function Rk(e,t,n){var r=$r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eb(e))tb(t,n);else if(n=L0(e,t,n,r),n!==null){var i=At();On(n,e,r,i),nb(n,t,r)}}function Bk(e,t,n){var r=$r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eb(e))tb(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,Ln(u,l)){var d=t.interleaved;d===null?(i.next=i,eh(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=L0(e,t,i,r),n!==null&&(i=At(),On(n,e,r,i),nb(n,t,r))}}function eb(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function tb(e,t){Ca=ql=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jp(e,n)}}var Kl={readContext:fn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Ak={readContext:fn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:fn,useEffect:F_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_l(4194308,4,K0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _l(4194308,4,e,t)},useInsertionEffect:function(e,t){return _l(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rk.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:M_,useDebugValue:uh,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=M_(!1),t=e[0];return e=Lk.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Un();if(Ve){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),ht===null)throw Error(Q(349));Ro&30||j0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,F_(H0.bind(null,r,a,e),[e]),r.flags|=2048,Ga(9,$0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Un(),t=ht.identifierPrefix;if(Ve){var n=sr,r=ar;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ik={readContext:fn,useCallback:Q0,useContext:fn,useEffect:lh,useImperativeHandle:G0,useInsertionEffect:V0,useLayoutEffect:q0,useMemo:X0,useReducer:fd,useRef:W0,useState:function(){return fd(Ka)},useDebugValue:uh,useDeferredValue:function(e){var t=pn();return Y0(t,ct.memoizedState,e)},useTransition:function(){var e=fd(Ka)[0],t=pn().memoizedState;return[e,t]},useMutableSource:M0,useSyncExternalStore:F0,useId:J0,unstable_isNewReconciler:!1},Nk={readContext:fn,useCallback:Q0,useContext:fn,useEffect:lh,useImperativeHandle:G0,useInsertionEffect:V0,useLayoutEffect:q0,useMemo:X0,useReducer:pd,useRef:W0,useState:function(){return pd(Ka)},useDebugValue:uh,useDeferredValue:function(e){var t=pn();return ct===null?t.memoizedState=e:Y0(t,ct.memoizedState,e)},useTransition:function(){var e=pd(Ka)[0],t=pn().memoizedState;return[e,t]},useMutableSource:M0,useSyncExternalStore:F0,useId:J0,unstable_isNewReconciler:!1};function zi(e,t){try{var n="",r=t;do n+=cS(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function hd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ef(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dk=typeof WeakMap=="function"?WeakMap:Map;function rb(e,t,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ql||(Ql=!0,Df=r),Ef(e,t)},n}function ob(e,t,n){n=lr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ef(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ef(e,t),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function j_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xk.bind(null,e,t,n),t.then(e,e))}function $_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function H_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lr(-1,1),t.tag=2,Fr(n,t,1))),n.lanes|=1),e)}var Mk=_r.ReactCurrentOwner,$t=!1;function Bt(e,t,n,r){t.child=e===null?N0(t,null,n,r):Oi(t,e.child,n,r)}function U_(e,t,n,r,i){n=n.render;var a=t.ref;return gi(t,i),r=ah(e,t,n,r,a,i),n=sh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pr(e,t,i)):(Ve&&n&&Kp(t),t.flags|=1,Bt(e,t,r,i),t.child)}function Z_(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!gh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ib(e,t,a,r,i)):(e=bl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(l,r)&&e.ref===t.ref)return pr(e,t,i)}return t.flags|=1,e=Hr(a,r),e.ref=t.ref,e.return=t,t.child=e}function ib(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if($a(a,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,pr(e,t,i)}return Of(e,t,n,r,i)}function ab(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(di,Vt),Vt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(di,Vt),Vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,je(di,Vt),Vt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,je(di,Vt),Vt|=r;return Bt(e,t,i,n),t.child}function sb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Of(e,t,n,r,i){var a=Ut(n)?zo:Tt.current;return a=Pi(t,a),gi(t,i),n=ah(e,t,n,r,a,i),r=sh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pr(e,t,i)):(Ve&&r&&Kp(t),t.flags|=1,Bt(e,t,n,i),t.child)}function W_(e,t,n,r,i){if(Ut(n)){var a=!0;jl(t)}else a=!1;if(gi(t,i),t.stateNode===null)gl(e,t),A0(t,n,r),Pf(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=fn(p):(p=Ut(n)?zo:Tt.current,p=Pi(t,p));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==p)&&N_(t,l,r,p),Er=!1;var h=t.memoizedState;l.state=h,Wl(t,r,l,i),d=t.memoizedState,u!==r||h!==d||Ht.current||Er?(typeof m=="function"&&(Cf(t,n,m,r),d=t.memoizedState),(u=Er||I_(t,n,u,r,h,d,p))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=p,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,R0(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:wn(t.type,u),l.props=p,_=t.pendingProps,h=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=fn(d):(d=Ut(n)?zo:Tt.current,d=Pi(t,d));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||h!==d)&&N_(t,l,r,d),Er=!1,h=t.memoizedState,l.state=h,Wl(t,r,l,i);var x=t.memoizedState;u!==_||h!==x||Ht.current||Er?(typeof v=="function"&&(Cf(t,n,v,r),x=t.memoizedState),(p=Er||I_(t,n,p,r,h,x,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=d,r=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Tf(e,t,n,r,a,i)}function Tf(e,t,n,r,i,a){sb(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&z_(t,n,!1),pr(e,t,a);r=t.stateNode,Mk.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Oi(t,e.child,null,a),t.child=Oi(t,null,u,a)):Bt(e,t,u,a),t.memoizedState=r.state,i&&z_(t,n,!0),t.child}function lb(e){var t=e.stateNode;t.pendingContext?T_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&T_(e,t.context,!1),nh(e,t.containerInfo)}function V_(e,t,n,r,i){return Ei(),Qp(i),t.flags|=256,Bt(e,t,n,r),t.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Lf(e){return{baseLanes:e,cachePool:null,transitions:null}}function ub(e,t,n){var r=t.pendingProps,i=Ke.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Ke,i&1),e===null)return Sf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Iu(l,r,0,null),e=Po(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Lf(n),t.memoizedState=zf,e):ch(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Fk(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Hr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Hr(u,a):(a=Po(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Lf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=zf,r}return a=e.child,e=a.sibling,r=Hr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ch(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&Qp(r),Oi(t,e.child,null,n),e=ch(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fk(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=hd(Error(Q(422))),Ys(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Iu({mode:"visible",children:r.children},i,0,null),a=Po(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Oi(t,e.child,null,l),t.child.memoizedState=Lf(l),t.memoizedState=zf,a);if(!(t.mode&1))return Ys(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(Q(419)),r=hd(a,r,void 0),Ys(e,t,l,r)}if(u=(l&e.childLanes)!==0,$t||u){if(r=ht,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,fr(e,i),On(r,e,i,-1))}return _h(),r=hd(Error(Q(421))),Ys(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qt=Mr(i.nextSibling),Kt=t,Ve=!0,Cn=null,e!==null&&(an[sn++]=ar,an[sn++]=sr,an[sn++]=Lo,ar=e.id,sr=e.overflow,Lo=t),t=ch(t,r.children),t.flags|=4096,t)}function q_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kf(e.return,t,n)}function md(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function cb(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bt(e,t,r.children,n),r=Ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&q_(e,n,t);else if(e.tag===19)q_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),md(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}md(t,!0,n,null,a);break;case"together":md(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Hr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jk(e,t,n){switch(t.tag){case 3:lb(t),Ei();break;case 5:D0(t);break;case 1:Ut(t.type)&&jl(t);break;case 4:nh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Ke,Ke.current&1),t.flags|=128,null):n&t.child.childLanes?ub(e,t,n):(je(Ke,Ke.current&1),e=pr(e,t,n),e!==null?e.sibling:null);je(Ke,Ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Ke,Ke.current),r)break;return null;case 22:case 23:return t.lanes=0,ab(e,t,n)}return pr(e,t,n)}var db,Rf,fb,pb;db=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};fb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xo(Kn.current);var a=null;switch(n){case"input":i=Jd(e,i),r=Jd(e,r),a=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),a=[];break;case"textarea":i=nf(e,i),r=nf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ml)}of(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var u=i[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Aa.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var d=r[p];if(u=i?.[p],r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&$e("scroll",e),a||u===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};pb=function(e,t,n,r){n!==r&&(t.flags|=4)};function sa(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $k(e,t,n){var r=t.pendingProps;switch(Gp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Ut(t.type)&&Fl(),kt(t),null;case 3:return r=t.stateNode,Ti(),He(Ht),He(Tt),oh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Cn!==null&&(jf(Cn),Cn=null))),Rf(e,t),kt(t),null;case 5:rh(t);var i=xo(Va.current);if(n=t.type,e!==null&&t.stateNode!=null)fb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return kt(t),null}if(e=xo(Kn.current),Qs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Zn]=t,r[Za]=a,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<ga.length;i++)$e(ga[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":n_(r,a),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},$e("invalid",r);break;case"textarea":o_(r,a),$e("invalid",r)}of(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&Gs(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&Gs(r.textContent,u,e),i=["children",""+u]):Aa.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&$e("scroll",r)}switch(n){case"input":$s(r),r_(r,a,!0);break;case"textarea":$s(r),i_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ml)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Zn]=t,e[Za]=r,db(e,t,!1,!1),t.stateNode=e;e:{switch(l=af(n,r),n){case"dialog":$e("cancel",e),$e("close",e),i=r;break;case"iframe":case"object":case"embed":$e("load",e),i=r;break;case"video":case"audio":for(i=0;i<ga.length;i++)$e(ga[i],e);i=r;break;case"source":$e("error",e),i=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),i=r;break;case"details":$e("toggle",e),i=r;break;case"input":n_(e,r),i=Jd(e,r),$e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),$e("invalid",e);break;case"textarea":o_(e,r),i=nf(e,r),$e("invalid",e);break;default:i=r}of(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?Uy(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&$y(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ia(e,d):typeof d=="number"&&Ia(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Aa.hasOwnProperty(a)?d!=null&&a==="onScroll"&&$e("scroll",e):d!=null&&Ap(e,a,d,l))}switch(n){case"input":$s(e),r_(e,r,!1);break;case"textarea":$s(e),i_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pi(e,!!r.multiple,a,!1):r.defaultValue!=null&&pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)pb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=xo(Va.current),xo(Kn.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zn]=t,(a=r.nodeValue!==n)&&(e=Kt,e!==null))switch(e.tag){case 3:Gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gs(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=t,t.stateNode=r}return kt(t),null;case 13:if(He(Ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&qt!==null&&t.mode&1&&!(t.flags&128))z0(),Ei(),t.flags|=98560,a=!1;else if(a=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(Q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Q(317));a[Zn]=t}else Ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),a=!1}else Cn!==null&&(jf(Cn),Cn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ke.current&1?dt===0&&(dt=3):_h())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Ti(),Rf(e,t),e===null&&Ha(t.stateNode.containerInfo),kt(t),null;case 10:return Jp(t.type._context),kt(t),null;case 17:return Ut(t.type)&&Fl(),kt(t),null;case 19:if(He(Ke),a=t.memoizedState,a===null)return kt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)sa(a,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Vl(e),l!==null){for(t.flags|=128,sa(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Ke,Ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&nt()>Li&&(t.flags|=128,r=!0,sa(a,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ve)return kt(t),null}else 2*nt()-a.renderingStartTime>Li&&n!==1073741824&&(t.flags|=128,r=!0,sa(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=nt(),t.sibling=null,n=Ke.current,je(Ke,r?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return mh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Vt&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function Hk(e,t){switch(Gp(t),t.tag){case 1:return Ut(t.type)&&Fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ti(),He(Ht),He(Tt),oh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rh(t),null;case 13:if(He(Ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ke),null;case 4:return Ti(),null;case 10:return Jp(t.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Js=!1,Ot=!1,Uk=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ci(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Bf(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var K_=!1;function Zk(e,t){if(_f=Il,e=g0(),qp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,p=0,m=0,_=e,h=null;t:for(;;){for(var v;_!==n||i!==0&&_.nodeType!==3||(u=l+i),_!==a||r!==0&&_.nodeType!==3||(d=l+r),_.nodeType===3&&(l+=_.nodeValue.length),(v=_.firstChild)!==null;)h=_,_=v;for(;;){if(_===e)break t;if(h===n&&++p===i&&(u=l),h===a&&++m===r&&(d=l),(v=_.nextSibling)!==null)break;_=h,h=_.parentNode}_=v}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:e,selectionRange:n},Il=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,O=x.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:wn(t.type,w),O);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(C){Ye(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return x=K_,K_=!1,x}function Pa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Bf(t,n,a)}i=i.next}while(i!==r)}}function Bu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Af(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hb(e){var t=e.alternate;t!==null&&(e.alternate=null,hb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zn],delete t[Za],delete t[bf],delete t[Pk],delete t[Ek])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mb(e){return e.tag===5||e.tag===3||e.tag===4}function G_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(r!==4&&(e=e.child,e!==null))for(If(e,t,n),e=e.sibling;e!==null;)If(e,t,n),e=e.sibling}function Nf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nf(e,t,n),e=e.sibling;e!==null;)Nf(e,t,n),e=e.sibling}var vt=null,kn=!1;function wr(e,t,n){for(n=n.child;n!==null;)_b(e,t,n),n=n.sibling}function _b(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Ot||ci(n,t);case 6:var r=vt,i=kn;vt=null,wr(e,t,n),vt=r,kn=i,vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?ld(e.parentNode,n):e.nodeType===1&&ld(e,n),Fa(e)):ld(vt,n.stateNode));break;case 4:r=vt,i=kn,vt=n.stateNode.containerInfo,kn=!0,wr(e,t,n),vt=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Bf(n,t,l),i=i.next}while(i!==r)}wr(e,t,n);break;case 1:if(!Ot&&(ci(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ye(n,t,u)}wr(e,t,n);break;case 21:wr(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,wr(e,t,n),Ot=r):wr(e,t,n);break;default:wr(e,t,n)}}function Q_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uk),t.forEach(function(r){var i=Jk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:vt=u.stateNode,kn=!1;break e;case 3:vt=u.stateNode.containerInfo,kn=!0;break e;case 4:vt=u.stateNode.containerInfo,kn=!0;break e}u=u.return}if(vt===null)throw Error(Q(160));_b(a,l,i),vt=null,kn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(p){Ye(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gb(t,e),t=t.sibling}function gb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(t,e),jn(e),r&4){try{Pa(3,e,e.return),Bu(3,e)}catch(w){Ye(e,e.return,w)}try{Pa(5,e,e.return)}catch(w){Ye(e,e.return,w)}}break;case 1:vn(t,e),jn(e),r&512&&n!==null&&ci(n,n.return);break;case 5:if(vn(t,e),jn(e),r&512&&n!==null&&ci(n,n.return),e.flags&32){var i=e.stateNode;try{Ia(i,"")}catch(w){Ye(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&My(i,a),af(u,l);var p=af(u,a);for(l=0;l<d.length;l+=2){var m=d[l],_=d[l+1];m==="style"?Uy(i,_):m==="dangerouslySetInnerHTML"?$y(i,_):m==="children"?Ia(i,_):Ap(i,m,_,p)}switch(u){case"input":ef(i,a);break;case"textarea":Fy(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?pi(i,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?pi(i,!!a.multiple,a.defaultValue,!0):pi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Za]=a}catch(w){Ye(e,e.return,w)}}break;case 6:if(vn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Ye(e,e.return,w)}}break;case 3:if(vn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(w){Ye(e,e.return,w)}break;case 4:vn(t,e),jn(e);break;case 13:vn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ph=nt())),r&4&&Q_(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(p=Ot)||m,vn(t,e),Ot=p):vn(t,e),jn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(ae=e,m=e.child;m!==null;){for(_=ae=m;ae!==null;){switch(h=ae,v=h.child,h.tag){case 0:case 11:case 14:case 15:Pa(4,h,h.return);break;case 1:ci(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Ye(r,n,w)}}break;case 5:ci(h,h.return);break;case 22:if(h.memoizedState!==null){Y_(_);continue}}v!==null?(v.return=h,ae=v):Y_(_)}m=m.sibling}e:for(m=null,_=e;;){if(_.tag===5){if(m===null){m=_;try{i=_.stateNode,p?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=_.stateNode,d=_.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Hy("display",l))}catch(w){Ye(e,e.return,w)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=p?"":_.memoizedProps}catch(w){Ye(e,e.return,w)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:vn(t,e),jn(e),r&4&&Q_(e);break;case 21:break;default:vn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mb(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var a=G_(e);Nf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=G_(e);If(e,u,l);break;default:throw Error(Q(161))}}catch(d){Ye(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wk(e,t,n){ae=e,vb(e)}function vb(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Js;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Ot;u=Js;var p=Ot;if(Js=l,(Ot=d)&&!p)for(ae=i;ae!==null;)l=ae,d=l.child,l.tag===22&&l.memoizedState!==null?J_(i):d!==null?(d.return=l,ae=d):J_(i);for(;a!==null;)ae=a,vb(a),a=a.sibling;ae=i,Js=u,Ot=p}X_(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ae=a):X_(e)}}function X_(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||Bu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&A_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}A_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&Fa(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ot||t.flags&512&&Af(t)}catch(h){Ye(t,t.return,h)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Y_(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function J_(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bu(4,t)}catch(d){Ye(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ye(t,i,d)}}var a=t.return;try{Af(t)}catch(d){Ye(t,a,d)}break;case 5:var l=t.return;try{Af(t)}catch(d){Ye(t,l,d)}}}catch(d){Ye(t,t.return,d)}if(t===e){ae=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ae=u;break}ae=t.return}}var Vk=Math.ceil,Gl=_r.ReactCurrentDispatcher,dh=_r.ReactCurrentOwner,dn=_r.ReactCurrentBatchConfig,Ee=0,ht=null,lt=null,yt=0,Vt=0,di=no(0),dt=0,Qa=null,Bo=0,Au=0,fh=0,Ea=null,jt=null,ph=0,Li=1/0,or=null,Ql=!1,Df=null,jr=null,el=!1,Br=null,Xl=0,Oa=0,Mf=null,vl=-1,yl=0;function At(){return Ee&6?nt():vl!==-1?vl:vl=nt()}function $r(e){return e.mode&1?Ee&2&&yt!==0?yt&-yt:Tk.transition!==null?(yl===0&&(yl=t0()),yl):(e=Be,e!==0||(e=window.event,e=e===void 0?16:l0(e.type)),e):1}function On(e,t,n,r){if(50<Oa)throw Oa=0,Mf=null,Error(Q(185));ss(e,n,r),(!(Ee&2)||e!==ht)&&(e===ht&&(!(Ee&2)&&(Au|=n),dt===4&&zr(e,yt)),Zt(e,r),n===1&&Ee===0&&!(t.mode&1)&&(Li=nt()+500,zu&&ro()))}function Zt(e,t){var n=e.callbackNode;TS(e,t);var r=Al(e,e===ht?yt:0);if(r===0)n!==null&&l_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&l_(n),t===1)e.tag===0?Ok(eg.bind(null,e)):E0(eg.bind(null,e)),kk(function(){!(Ee&6)&&ro()}),n=null;else{switch(n0(r)){case 1:n=Fp;break;case 4:n=Jy;break;case 16:n=Bl;break;case 536870912:n=e0;break;default:n=Bl}n=Pb(n,yb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yb(e,t){if(vl=-1,yl=0,Ee&6)throw Error(Q(327));var n=e.callbackNode;if(vi()&&e.callbackNode!==n)return null;var r=Al(e,e===ht?yt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yl(e,r);else{t=r;var i=Ee;Ee|=2;var a=xb();(ht!==e||yt!==t)&&(or=null,Li=nt()+500,Co(e,t));do try{Gk();break}catch(u){bb(e,u)}while(1);Yp(),Gl.current=a,Ee=i,lt!==null?t=0:(ht=null,yt=0,t=dt)}if(t!==0){if(t===2&&(i=df(e),i!==0&&(r=i,t=Ff(e,i))),t===1)throw n=Qa,Co(e,0),zr(e,r),Zt(e,nt()),n;if(t===6)zr(e,r);else{if(i=e.current.alternate,!(r&30)&&!qk(i)&&(t=Yl(e,r),t===2&&(a=df(e),a!==0&&(r=a,t=Ff(e,a))),t===1))throw n=Qa,Co(e,0),zr(e,r),Zt(e,nt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:_o(e,jt,or);break;case 3:if(zr(e,r),(r&130023424)===r&&(t=ph+500-nt(),10<t)){if(Al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yf(_o.bind(null,e,jt,or),t);break}_o(e,jt,or);break;case 4:if(zr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-En(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vk(r/1960))-r,10<r){e.timeoutHandle=yf(_o.bind(null,e,jt,or),r);break}_o(e,jt,or);break;case 5:_o(e,jt,or);break;default:throw Error(Q(329))}}}return Zt(e,nt()),e.callbackNode===n?yb.bind(null,e):null}function Ff(e,t){var n=Ea;return e.current.memoizedState.isDehydrated&&(Co(e,t).flags|=256),e=Yl(e,t),e!==2&&(t=jt,jt=n,t!==null&&jf(t)),e}function jf(e){jt===null?jt=e:jt.push.apply(jt,e)}function qk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ln(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zr(e,t){for(t&=~fh,t&=~Au,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function eg(e){if(Ee&6)throw Error(Q(327));vi();var t=Al(e,0);if(!(t&1))return Zt(e,nt()),null;var n=Yl(e,t);if(e.tag!==0&&n===2){var r=df(e);r!==0&&(t=r,n=Ff(e,r))}if(n===1)throw n=Qa,Co(e,0),zr(e,t),Zt(e,nt()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_o(e,jt,or),Zt(e,nt()),null}function hh(e,t){var n=Ee;Ee|=1;try{return e(t)}finally{Ee=n,Ee===0&&(Li=nt()+500,zu&&ro())}}function Ao(e){Br!==null&&Br.tag===0&&!(Ee&6)&&vi();var t=Ee;Ee|=1;var n=dn.transition,r=Be;try{if(dn.transition=null,Be=1,e)return e()}finally{Be=r,dn.transition=n,Ee=t,!(Ee&6)&&ro()}}function mh(){Vt=di.current,He(di)}function Co(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sk(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(Gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:Ti(),He(Ht),He(Tt),oh();break;case 5:rh(r);break;case 4:Ti();break;case 13:He(Ke);break;case 19:He(Ke);break;case 10:Jp(r.type._context);break;case 22:case 23:mh()}n=n.return}if(ht=e,lt=e=Hr(e.current,null),yt=Vt=t,dt=0,Qa=null,fh=Au=Bo=0,jt=Ea=null,bo!==null){for(t=0;t<bo.length;t++)if(n=bo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}bo=null}return e}function bb(e,t){do{var n=lt;try{if(Yp(),ml.current=Kl,ql){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(Ro=0,pt=ct=Ge=null,Ca=!1,qa=0,dh.current=null,n===null||n.return===null){dt=1,Qa=t,lt=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=yt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,m=u,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=$_(l);if(v!==null){v.flags&=-257,H_(v,l,u,a,t),v.mode&1&&j_(a,p,t),t=v,d=p;var x=t.updateQueue;if(x===null){var w=new Set;w.add(d),t.updateQueue=w}else x.add(d);break e}else{if(!(t&1)){j_(a,p,t),_h();break e}d=Error(Q(426))}}else if(Ve&&u.mode&1){var O=$_(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),H_(O,l,u,a,t),Qp(zi(d,u));break e}}a=d=zi(d,u),dt!==4&&(dt=2),Ea===null?Ea=[a]:Ea.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=rb(a,d,t);B_(a,y);break e;case 1:u=d;var b=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(jr===null||!jr.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=ob(a,u,t);B_(a,C);break e}}a=a.return}while(a!==null)}Sb(n)}catch(z){t=z,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(1)}function xb(){var e=Gl.current;return Gl.current=Kl,e===null?Kl:e}function _h(){(dt===0||dt===3||dt===2)&&(dt=4),ht===null||!(Bo&268435455)&&!(Au&268435455)||zr(ht,yt)}function Yl(e,t){var n=Ee;Ee|=2;var r=xb();(ht!==e||yt!==t)&&(or=null,Co(e,t));do try{Kk();break}catch(i){bb(e,i)}while(1);if(Yp(),Ee=n,Gl.current=r,lt!==null)throw Error(Q(261));return ht=null,yt=0,dt}function Kk(){for(;lt!==null;)wb(lt)}function Gk(){for(;lt!==null&&!bS();)wb(lt)}function wb(e){var t=Cb(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Sb(e):lt=t,dh.current=null}function Sb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hk(n,t),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,lt=null;return}}else if(n=$k(n,t,Vt),n!==null){lt=n;return}if(t=t.sibling,t!==null){lt=t;return}lt=t=e}while(t!==null);dt===0&&(dt=5)}function _o(e,t,n){var r=Be,i=dn.transition;try{dn.transition=null,Be=1,Qk(e,t,n,r)}finally{dn.transition=i,Be=r}return null}function Qk(e,t,n,r){do vi();while(Br!==null);if(Ee&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zS(e,a),e===ht&&(lt=ht=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,Pb(Bl,function(){return vi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=dn.transition,dn.transition=null;var l=Be;Be=1;var u=Ee;Ee|=4,dh.current=null,Zk(e,n),gb(n,e),_k(gf),Il=!!_f,gf=_f=null,e.current=n,Wk(n),xS(),Ee=u,Be=l,dn.transition=a}else e.current=n;if(el&&(el=!1,Br=e,Xl=i),a=e.pendingLanes,a===0&&(jr=null),kS(n.stateNode),Zt(e,nt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ql)throw Ql=!1,e=Df,Df=null,e;return Xl&1&&e.tag!==0&&vi(),a=e.pendingLanes,a&1?e===Mf?Oa++:(Oa=0,Mf=e):Oa=0,ro(),null}function vi(){if(Br!==null){var e=n0(Xl),t=dn.transition,n=Be;try{if(dn.transition=null,Be=16>e?16:e,Br===null)var r=!1;else{if(e=Br,Br=null,Xl=0,Ee&6)throw Error(Q(331));var i=Ee;for(Ee|=4,ae=e.current;ae!==null;){var a=ae,l=a.child;if(ae.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(ae=p;ae!==null;){var m=ae;switch(m.tag){case 0:case 11:case 15:Pa(8,m,a)}var _=m.child;if(_!==null)_.return=m,ae=_;else for(;ae!==null;){m=ae;var h=m.sibling,v=m.return;if(hb(m),m===p){ae=null;break}if(h!==null){h.return=v,ae=h;break}ae=v}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}ae=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,ae=l;else e:for(;ae!==null;){if(a=ae,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Pa(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,ae=y;break e}ae=a.return}}var b=e.current;for(ae=b;ae!==null;){l=ae;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,ae=k;else e:for(l=b;ae!==null;){if(u=ae,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Bu(9,u)}}catch(z){Ye(u,u.return,z)}if(u===l){ae=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,ae=C;break e}ae=u.return}}if(Ee=i,ro(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Cu,e)}catch{}r=!0}return r}finally{Be=n,dn.transition=t}}return!1}function tg(e,t,n){t=zi(n,t),t=rb(e,t,1),e=Fr(e,t,1),t=At(),e!==null&&(ss(e,1,t),Zt(e,t))}function Ye(e,t,n){if(e.tag===3)tg(e,e,n);else for(;t!==null;){if(t.tag===3){tg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){e=zi(n,e),e=ob(t,e,1),t=Fr(t,e,1),e=At(),t!==null&&(ss(t,1,e),Zt(t,e));break}}t=t.return}}function Xk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(yt&n)===n&&(dt===4||dt===3&&(yt&130023424)===yt&&500>nt()-ph?Co(e,0):fh|=n),Zt(e,t)}function kb(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=At();e=fr(e,t),e!==null&&(ss(e,t,n),Zt(e,n))}function Yk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kb(e,n)}function Jk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),kb(e,n)}var Cb;Cb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,jk(e,t,n);$t=!!(e.flags&131072)}else $t=!1,Ve&&t.flags&1048576&&O0(t,Hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var i=Pi(t,Tt.current);gi(t,n),i=ah(null,t,r,e,i,n);var a=sh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(r)?(a=!0,jl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,th(t),i.updater=Lu,t.stateNode=i,i._reactInternals=t,Pf(t,r,e,n),t=Tf(null,t,r,!0,a,n)):(t.tag=0,Ve&&a&&Kp(t),Bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t2(r),e=wn(r,e),i){case 0:t=Of(null,t,r,e,n);break e;case 1:t=W_(null,t,r,e,n);break e;case 11:t=U_(null,t,r,e,n);break e;case 14:t=Z_(null,t,r,wn(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),Of(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),W_(e,t,r,i,n);case 3:e:{if(lb(t),e===null)throw Error(Q(387));r=t.pendingProps,a=t.memoizedState,i=a.element,R0(e,t),Wl(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=zi(Error(Q(423)),t),t=V_(e,t,r,n,i);break e}else if(r!==i){i=zi(Error(Q(424)),t),t=V_(e,t,r,n,i);break e}else for(qt=Mr(t.stateNode.containerInfo.firstChild),Kt=t,Ve=!0,Cn=null,n=N0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ei(),r===i){t=pr(e,t,n);break e}Bt(e,t,r,n)}t=t.child}return t;case 5:return D0(t),e===null&&Sf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,vf(r,i)?l=null:a!==null&&vf(r,a)&&(t.flags|=32),sb(e,t),Bt(e,t,l,n),t.child;case 6:return e===null&&Sf(t),null;case 13:return ub(e,t,n);case 4:return nh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):Bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),U_(e,t,r,i,n);case 7:return Bt(e,t,t.pendingProps,n),t.child;case 8:return Bt(e,t,t.pendingProps.children,n),t.child;case 12:return Bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,je(Ul,r._currentValue),r._currentValue=l,a!==null)if(Ln(a.value,l)){if(a.children===i.children&&!Ht.current){t=pr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=lr(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?d.next=d:(d.next=m.next,m.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),kf(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(Q(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),kf(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gi(t,n),i=fn(i),r=r(i),t.flags|=1,Bt(e,t,r,n),t.child;case 14:return r=t.type,i=wn(r,t.pendingProps),i=wn(r.type,i),Z_(e,t,r,i,n);case 15:return ib(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),gl(e,t),t.tag=1,Ut(r)?(e=!0,jl(t)):e=!1,gi(t,n),A0(t,r,i),Pf(t,r,i,n),Tf(null,t,r,!0,e,n);case 19:return cb(e,t,n);case 22:return ab(e,t,n)}throw Error(Q(156,t.tag))};function Pb(e,t){return Yy(e,t)}function e2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,n,r){return new e2(e,t,n,r)}function gh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t2(e){if(typeof e=="function")return gh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Np)return 11;if(e===Dp)return 14}return 2}function Hr(e,t){var n=e.alternate;return n===null?(n=ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")gh(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ti:return Po(n.children,i,a,t);case Ip:l=8,i|=8;break;case Gd:return e=ln(12,n,t,i|2),e.elementType=Gd,e.lanes=a,e;case Qd:return e=ln(13,n,t,i),e.elementType=Qd,e.lanes=a,e;case Xd:return e=ln(19,n,t,i),e.elementType=Xd,e.lanes=a,e;case Iy:return Iu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case By:l=10;break e;case Ay:l=9;break e;case Np:l=11;break e;case Dp:l=14;break e;case Pr:l=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=ln(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Po(e,t,n,r){return e=ln(7,e,r,t),e.lanes=n,e}function Iu(e,t,n,r){return e=ln(22,e,r,t),e.elementType=Iy,e.lanes=n,e.stateNode={isHidden:!1},e}function _d(e,t,n){return e=ln(6,e,null,t),e.lanes=n,e}function gd(e,t,n){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vh(e,t,n,r,i,a,l,u,d){return e=new n2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ln(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(a),e}function r2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eb(e){if(!e)return Gr;e=e._reactInternals;e:{if(jo(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(Ut(n))return P0(e,n,t)}return t}function Ob(e,t,n,r,i,a,l,u,d){return e=vh(n,r,!0,e,i,a,l,u,d),e.context=Eb(null),n=e.current,r=At(),i=$r(n),a=lr(r,i),a.callback=t??null,Fr(n,a,i),e.current.lanes=i,ss(e,i,r),Zt(e,r),e}function Nu(e,t,n,r){var i=t.current,a=At(),l=$r(i);return n=Eb(n),t.context===null?t.context=n:t.pendingContext=n,t=lr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fr(i,t,l),e!==null&&(On(e,i,l,a),hl(e,i,l)),l}function Jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yh(e,t){ng(e,t),(e=e.alternate)&&ng(e,t)}function o2(){return null}var Tb=typeof reportError=="function"?reportError:function(e){console.error(e)};function bh(e){this._internalRoot=e}Du.prototype.render=bh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));Nu(e,t,null,null)};Du.prototype.unmount=bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ao(function(){Nu(null,e,null,null)}),t[dr]=null}};function Du(e){this._internalRoot=e}Du.prototype.unstable_scheduleHydration=function(e){if(e){var t=i0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tr.length&&t!==0&&t<Tr[n].priority;n++);Tr.splice(n,0,e),n===0&&s0(e)}};function xh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rg(){}function i2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var p=Jl(l);a.call(p)}}var l=Ob(t,r,e,0,null,!1,!1,"",rg);return e._reactRootContainer=l,e[dr]=l.current,Ha(e.nodeType===8?e.parentNode:e),Ao(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var p=Jl(d);u.call(p)}}var d=vh(e,0,!1,null,null,!1,!1,"",rg);return e._reactRootContainer=d,e[dr]=d.current,Ha(e.nodeType===8?e.parentNode:e),Ao(function(){Nu(t,d,n,r)}),d}function Fu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=Jl(l);u.call(d)}}Nu(t,l,e,i)}else l=i2(n,t,e,i,r);return Jl(l)}r0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_a(t.pendingLanes);n!==0&&(jp(t,n|1),Zt(t,nt()),!(Ee&6)&&(Li=nt()+500,ro()))}break;case 13:Ao(function(){var r=fr(e,1);if(r!==null){var i=At();On(r,e,1,i)}}),yh(e,1)}};$p=function(e){if(e.tag===13){var t=fr(e,134217728);if(t!==null){var n=At();On(t,e,134217728,n)}yh(e,134217728)}};o0=function(e){if(e.tag===13){var t=$r(e),n=fr(e,t);if(n!==null){var r=At();On(n,e,t,r)}yh(e,t)}};i0=function(){return Be};a0=function(e,t){var n=Be;try{return Be=e,t()}finally{Be=n}};lf=function(e,t,n){switch(t){case"input":if(ef(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Tu(r);if(!i)throw Error(Q(90));Dy(r),ef(r,i)}}}break;case"textarea":Fy(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};Vy=hh;qy=Ao;var a2={usingClientEntryPoint:!1,Events:[us,ii,Tu,Zy,Wy,hh]},la={findFiberByHostInstance:yo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s2={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qy(e),e===null?null:e.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||o2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Cu=tl.inject(s2),qn=tl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2;Xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(t))throw Error(Q(200));return r2(e,t,null,n)};Xt.createRoot=function(e,t){if(!xh(e))throw Error(Q(299));var n=!1,r="",i=Tb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vh(e,1,!1,null,null,n,!1,r,i),e[dr]=t.current,Ha(e.nodeType===8?e.parentNode:e),new bh(t)};Xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Qy(t),e=e===null?null:e.stateNode,e};Xt.flushSync=function(e){return Ao(e)};Xt.hydrate=function(e,t,n){if(!Mu(t))throw Error(Q(200));return Fu(null,e,t,!0,n)};Xt.hydrateRoot=function(e,t,n){if(!xh(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=Tb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ob(t,null,e,1,n??null,i,!1,a,l),e[dr]=t.current,Ha(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Du(t)};Xt.render=function(e,t,n){if(!Mu(t))throw Error(Q(200));return Fu(null,e,t,!1,n)};Xt.unmountComponentAtNode=function(e){if(!Mu(e))throw Error(Q(40));return e._reactRootContainer?(Ao(function(){Fu(null,null,e,!1,function(){e._reactRootContainer=null,e[dr]=null})}),!0):!1};Xt.unstable_batchedUpdates=hh;Xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mu(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return Fu(e,t,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Xt})(oS);const l2=xy(ki);var zb,og=ki;zb=og.createRoot,og.hydrateRoot;var $f={},u2={get exports(){return $f},set exports(e){$f=e}},Lb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=T;function c2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d2=typeof Object.is=="function"?Object.is:c2,f2=Ri.useState,p2=Ri.useEffect,h2=Ri.useLayoutEffect,m2=Ri.useDebugValue;function _2(e,t){var n=t(),r=f2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return h2(function(){i.value=n,i.getSnapshot=t,vd(i)&&a({inst:i})},[e,n,t]),p2(function(){return vd(i)&&a({inst:i}),e(function(){vd(i)&&a({inst:i})})},[e]),m2(n),n}function vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!d2(e,n)}catch{return!0}}function g2(e,t){return t()}var v2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g2:_2;Lb.useSyncExternalStore=Ri.useSyncExternalStore!==void 0?Ri.useSyncExternalStore:v2;(function(e){e.exports=Lb})(u2);var Hf={},y2={get exports(){return Hf},set exports(e){Hf=e}},Rb={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=T,b2=$f;function x2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var w2=typeof Object.is=="function"?Object.is:x2,S2=b2.useSyncExternalStore,k2=ju.useRef,C2=ju.useEffect,P2=ju.useMemo,E2=ju.useDebugValue;Rb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=k2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=P2(function(){function d(v){if(!p){if(p=!0,m=v,v=r(v),i!==void 0&&l.hasValue){var x=l.value;if(i(x,v))return _=x}return _=v}if(x=_,w2(m,v))return x;var w=r(v);return i!==void 0&&i(x,w)?x:(m=v,_=w)}var p=!1,m,_,h=n===void 0?null:n;return[function(){return d(t())},h===null?void 0:function(){return d(h())}]},[t,n,r,i]);var u=S2(e,a[0],a[1]);return C2(function(){l.hasValue=!0,l.value=u},[u]),E2(u),u};(function(e){e.exports=Rb})(y2);function O2(e){e()}let Bb=O2;const T2=e=>Bb=e,z2=()=>Bb,Qr=T.createContext(null);function Ab(){return T.useContext(Qr)}const L2=()=>{throw new Error("uSES not initialized!")};let Ib=L2;const R2=e=>{Ib=e},B2=(e,t)=>e===t;function A2(e=Qr){const t=e===Qr?Ab:()=>T.useContext(e);return function(r,i=B2){const{store:a,subscription:l,getServerState:u}=t(),d=Ib(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const I2=A2();function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}var Uf={},N2={get exports(){return Uf},set exports(e){Uf=e}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,wh=mt?Symbol.for("react.element"):60103,Sh=mt?Symbol.for("react.portal"):60106,$u=mt?Symbol.for("react.fragment"):60107,Hu=mt?Symbol.for("react.strict_mode"):60108,Uu=mt?Symbol.for("react.profiler"):60114,Zu=mt?Symbol.for("react.provider"):60109,Wu=mt?Symbol.for("react.context"):60110,kh=mt?Symbol.for("react.async_mode"):60111,Vu=mt?Symbol.for("react.concurrent_mode"):60111,qu=mt?Symbol.for("react.forward_ref"):60112,Ku=mt?Symbol.for("react.suspense"):60113,D2=mt?Symbol.for("react.suspense_list"):60120,Gu=mt?Symbol.for("react.memo"):60115,Qu=mt?Symbol.for("react.lazy"):60116,M2=mt?Symbol.for("react.block"):60121,F2=mt?Symbol.for("react.fundamental"):60117,j2=mt?Symbol.for("react.responder"):60118,$2=mt?Symbol.for("react.scope"):60119;function Jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wh:switch(e=e.type,e){case kh:case Vu:case $u:case Uu:case Hu:case Ku:return e;default:switch(e=e&&e.$$typeof,e){case Wu:case qu:case Qu:case Gu:case Zu:return e;default:return t}}case Sh:return t}}}function Nb(e){return Jt(e)===Vu}Ae.AsyncMode=kh;Ae.ConcurrentMode=Vu;Ae.ContextConsumer=Wu;Ae.ContextProvider=Zu;Ae.Element=wh;Ae.ForwardRef=qu;Ae.Fragment=$u;Ae.Lazy=Qu;Ae.Memo=Gu;Ae.Portal=Sh;Ae.Profiler=Uu;Ae.StrictMode=Hu;Ae.Suspense=Ku;Ae.isAsyncMode=function(e){return Nb(e)||Jt(e)===kh};Ae.isConcurrentMode=Nb;Ae.isContextConsumer=function(e){return Jt(e)===Wu};Ae.isContextProvider=function(e){return Jt(e)===Zu};Ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wh};Ae.isForwardRef=function(e){return Jt(e)===qu};Ae.isFragment=function(e){return Jt(e)===$u};Ae.isLazy=function(e){return Jt(e)===Qu};Ae.isMemo=function(e){return Jt(e)===Gu};Ae.isPortal=function(e){return Jt(e)===Sh};Ae.isProfiler=function(e){return Jt(e)===Uu};Ae.isStrictMode=function(e){return Jt(e)===Hu};Ae.isSuspense=function(e){return Jt(e)===Ku};Ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$u||e===Vu||e===Uu||e===Hu||e===Ku||e===D2||typeof e=="object"&&e!==null&&(e.$$typeof===Qu||e.$$typeof===Gu||e.$$typeof===Zu||e.$$typeof===Wu||e.$$typeof===qu||e.$$typeof===F2||e.$$typeof===j2||e.$$typeof===$2||e.$$typeof===M2)};Ae.typeOf=Jt;(function(e){e.exports=Ae})(N2);var Db=Uf,H2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mb={};Mb[Db.ForwardRef]=H2;Mb[Db.Memo]=U2;var ig={},Z2={get exports(){return ig},set exports(e){ig=e}},Ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=Symbol.for("react.element"),Ph=Symbol.for("react.portal"),Xu=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),W2=Symbol.for("react.server_context"),nc=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),oc=Symbol.for("react.suspense_list"),ic=Symbol.for("react.memo"),ac=Symbol.for("react.lazy"),V2=Symbol.for("react.offscreen"),Fb;Fb=Symbol.for("react.module.reference");function hn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ch:switch(e=e.type,e){case Xu:case Ju:case Yu:case rc:case oc:return e;default:switch(e=e&&e.$$typeof,e){case W2:case tc:case nc:case ac:case ic:case ec:return e;default:return t}}case Ph:return t}}}Ie.ContextConsumer=tc;Ie.ContextProvider=ec;Ie.Element=Ch;Ie.ForwardRef=nc;Ie.Fragment=Xu;Ie.Lazy=ac;Ie.Memo=ic;Ie.Portal=Ph;Ie.Profiler=Ju;Ie.StrictMode=Yu;Ie.Suspense=rc;Ie.SuspenseList=oc;Ie.isAsyncMode=function(){return!1};Ie.isConcurrentMode=function(){return!1};Ie.isContextConsumer=function(e){return hn(e)===tc};Ie.isContextProvider=function(e){return hn(e)===ec};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ch};Ie.isForwardRef=function(e){return hn(e)===nc};Ie.isFragment=function(e){return hn(e)===Xu};Ie.isLazy=function(e){return hn(e)===ac};Ie.isMemo=function(e){return hn(e)===ic};Ie.isPortal=function(e){return hn(e)===Ph};Ie.isProfiler=function(e){return hn(e)===Ju};Ie.isStrictMode=function(e){return hn(e)===Yu};Ie.isSuspense=function(e){return hn(e)===rc};Ie.isSuspenseList=function(e){return hn(e)===oc};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xu||e===Ju||e===Yu||e===rc||e===oc||e===V2||typeof e=="object"&&e!==null&&(e.$$typeof===ac||e.$$typeof===ic||e.$$typeof===ec||e.$$typeof===tc||e.$$typeof===nc||e.$$typeof===Fb||e.getModuleId!==void 0)};Ie.typeOf=hn;(function(e){e.exports=Ie})(Z2);function q2(){const e=z2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const ag={notify(){},get:()=>[]};function K2(e,t){let n,r=ag;function i(_){return d(),r.subscribe(_)}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=q2())}function p(){n&&(n(),n=void 0,r.clear(),r=ag)}const m={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:p,getListeners:()=>r};return m}const G2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q2=G2?T.useLayoutEffect:T.useEffect;function X2({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=K2(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);Q2(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||Qr;return $.createElement(l.Provider,{value:i},n)}function jb(e=Qr){const t=e===Qr?Ab:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const Y2=jb();function J2(e=Qr){const t=e===Qr?Y2:jb(e);return function(){return t().dispatch}}const eC=J2();R2(Hf.useSyncExternalStoreWithSelector);T2(ki.unstable_batchedUpdates);/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function st(){return st=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},st.apply(this,arguments)}var ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ut||(ut={}));const sg="popstate";function tC(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return Eo("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zf(i)}return rC(t,n,null,e)}function nC(){return Math.random().toString(36).substr(2,8)}function lg(e){return{usr:e.state,key:e.key}}function Eo(e,t,n,r){return n===void 0&&(n=null),st({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Io(t):t,{state:n,key:t&&t.key||r||nC()})}function Zf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Io(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=ut.Pop,d=null;function p(){u=ut.Pop,d&&d({action:u,location:h.location})}function m(v,x){u=ut.Push;let w=Eo(h.location,v,x);n&&n(w,v);let O=lg(w),y=h.createHref(w);try{l.pushState(O,"",y)}catch{i.location.assign(y)}a&&d&&d({action:u,location:w})}function _(v,x){u=ut.Replace;let w=Eo(h.location,v,x);n&&n(w,v);let O=lg(w),y=h.createHref(w);l.replaceState(O,"",y),a&&d&&d({action:u,location:w})}let h={get action(){return u},get location(){return e(i,l)},listen(v){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(sg,p),d=v,()=>{i.removeEventListener(sg,p),d=null}},createHref(v){return t(i,v)},push:m,replace:_,go(v){return l.go(v)}};return h}var Et;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Et||(Et={}));function oC(e){return e.index===!0}function $b(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return Le(r.index!==!0||!r.children,"Cannot specify children on an index route"),Le(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),oC(r)?st({},r,{id:l}):st({},r,{id:l,children:r.children?$b(r.children,a,n):void 0})})}function va(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Io(t):t,i=Ub(r.pathname||"/",n);if(i==null)return null;let a=Hb(e);iC(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=hC(a[u],i);return l}function Hb(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,a)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yi([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hb(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:fC(u,i.index),routesMeta:d})}),t}function iC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aC=/^:\w+$/,sC=3,lC=2,uC=1,cC=10,dC=-2,ug=e=>e==="*";function fC(e,t){let n=e.split("/"),r=n.length;return n.some(ug)&&(r+=dC),t&&(r+=lC),n.filter(i=>!ug(i)).reduce((i,a)=>i+(aC.test(a)?sC:a===""?uC:cC),r)}function pC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function hC(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,p=i==="/"?t:t.slice(i.length)||"/",m=mC({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p);if(!m)return null;Object.assign(r,m.params);let _=u.route;a.push({params:r,pathname:yi([i,m.pathname]),pathnameBase:vC(yi([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=yi([i,m.pathnameBase]))}return a}function mC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_C(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((p,m,_)=>{if(m==="*"){let h=u[_]||"";l=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return p[m]=gC(u[_]||"",m),p},{}),pathname:a,pathnameBase:l,pattern:e}}function _C(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zb(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,u)=>(r.push(u),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function gC(e,t){try{return decodeURIComponent(e)}catch(n){return Zb(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ub(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zb(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}const yi=e=>e.join("/").replace(/\/\/+/g,"/"),vC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class cg extends Error{}class yC{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,Le(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((i,a)=>n=a),this.controller=new AbortController;let r=()=>n(new cg("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((i,a)=>{let[l,u]=a;return Object.assign(i,{[l]:this.trackPromise(l,u)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){if(this.controller.signal.aborted&&r instanceof cg)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const a=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),a&&a(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),a&&a(!1),i)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return Le(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:xC(i)})},{})}}function bC(e){return e instanceof Promise&&e._tracked===!0}function xC(e){if(!bC(e))return e;if(e._error)throw e._error;return e._data}class Mi{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Wb(e){return e instanceof Mi}const yd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},wC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};function SC(e){Le(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=$b(e.routes),n=null,r=new Set,i=null,a=null,l=null,u=!1,d=va(t,e.history.location,e.basename),p=null;if(d==null){let{matches:W,route:G,error:ee}=mg(t);d=W,p={[G.id]:ee}}let m=!d.some(W=>W.route.loader)||e.hydrationData!=null,_,h={historyAction:e.history.action,location:e.history.location,matches:d,initialized:m,navigation:yd,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map},v=ut.Pop,x=!1,w,O=!1,y=!1,b=[],k=[],C=new Map,z=0,N=-1,M=new Map,F=new Set,H=new Map,j=new Map;function J(){return n=e.history.listen(W=>{let{action:G,location:ee}=W;return R(G,ee)}),h.initialized||R(ut.Pop,h.location),_}function ie(){n&&n(),r.clear(),w&&w.abort(),h.fetchers.forEach((W,G)=>Xe(G))}function fe(W){return r.add(W),()=>r.delete(W)}function X(W){h=st({},h,W),r.forEach(G=>G(h))}function le(W,G){var ee;let de=h.actionData!=null&&h.navigation.formMethod!=null&&h.navigation.state==="loading"&&((ee=h.navigation.formAction)==null?void 0:ee.split("?")[0])===W.pathname,ue=G.loaderData?{loaderData:xd(h.loaderData,G.loaderData,G.matches||[])}:{};X(st({},de?{}:{actionData:null},G,ue,{historyAction:v,location:W,initialized:!0,navigation:yd,revalidation:"idle",restoreScrollPosition:h.navigation.formData?!1:Ne(W,G.matches||h.matches),preventScrollReset:x})),O||v===ut.Pop||(v===ut.Push?e.history.push(W,W.state):v===ut.Replace&&e.history.replace(W,W.state)),v=ut.Pop,x=!1,O=!1,y=!1,b=[],k=[]}async function U(W,G){if(typeof W=="number"){e.history.go(W);return}let{path:ee,submission:de,error:ue}=dg(W,G),Re=Eo(h.location,ee,G&&G.state),ke=(G&&G.replace)===!0||de!=null?ut.Replace:ut.Push,ye=G&&"preventScrollReset"in G?G.preventScrollReset===!0:void 0;return await R(ke,Re,{submission:de,pendingError:ue,preventScrollReset:ye,replace:G&&G.replace})}function ne(){if(se(),X({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){R(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}R(v||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function R(W,G,ee){w&&w.abort(),w=null,v=W,O=(ee&&ee.startUninterruptedRevalidation)===!0,Mt(h.location,h.matches),x=(ee&&ee.preventScrollReset)===!0;let de=ee&&ee.overrideNavigation,ue=va(t,G,e.basename);if(!ue){let{matches:Lt,route:wt,error:Ft}=mg(t);Se(),le(G,{matches:Lt,loaderData:{},errors:{[wt.id]:Ft}});return}if(EC(h.location,G)){le(G,{matches:ue});return}w=new AbortController;let Re=ca(G,w.signal,ee&&ee.submission),ke,ye;if(ee&&ee.pendingError)ye={[fi(ue).route.id]:ee.pendingError};else if(ee&&ee.submission){let Lt=await re(Re,G,ee.submission,ue,{replace:ee.replace});if(Lt.shortCircuited)return;ke=Lt.pendingActionData,ye=Lt.pendingActionError,de=st({state:"loading",location:G},ee.submission)}let{shortCircuited:be,loaderData:ze,errors:Ze}=await V(Re,G,ue,de,ee&&ee.submission,ee&&ee.replace,ke,ye);be||(w=null,le(G,{matches:ue,loaderData:ze,errors:Ze}))}async function re(W,G,ee,de,ue){se();let Re=st({state:"submitting",location:G},ee);X({navigation:Re});let ke,ye=bg(de,G);if(!ye.route.action)ke=_g(G);else if(ke=await ua("action",W,ye),W.signal.aborted)return{shortCircuited:!0};if(bi(ke)){let be=st({state:"loading",location:Eo(h.location,ke.location)},ee);return await Y(ke,be,ue&&ue.replace),{shortCircuited:!0}}if(Ta(ke)){let be=fi(de,ye.route.id);return(ue&&ue.replace)!==!0&&(v=ut.Push),{pendingActionError:{[be.route.id]:ke.error}}}if(wo(ke))throw new Error("defer() is not supported in actions");return{pendingActionData:{[ye.route.id]:ke.data}}}async function V(W,G,ee,de,ue,Re,ke,ye){let be=de;be||(be={state:"loading",location:G,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[ze,Ze]=fg(h,ee,ue,G,y,b,k,ke,ye,H);if(Se(rt=>!(ee&&ee.some(ot=>ot.route.id===rt))||ze&&ze.some(ot=>ot.route.id===rt)),ze.length===0&&Ze.length===0)return le(G,{matches:ee,loaderData:xd(h.loaderData,{},ee),errors:ye||null,actionData:ke||null}),{shortCircuited:!0};O||(Ze.forEach(rt=>{let[ot]=rt;const In=h.fetchers.get(ot);let $o={state:"loading",data:In&&In.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};h.fetchers.set(ot,$o)}),X(st({navigation:be,actionData:ke||h.actionData||null},Ze.length>0?{fetchers:new Map(h.fetchers)}:{}))),N=++z,Ze.forEach(rt=>{let[ot]=rt;return C.set(ot,w)});let{results:Lt,loaderResults:wt,fetcherResults:Ft}=await te(h.matches,ze,Ze,W);if(W.signal.aborted)return{shortCircuited:!0};Ze.forEach(rt=>{let[ot]=rt;return C.delete(ot)});let Yn=gg(Lt);if(Yn){let rt=bd(h,Yn);return await Y(Yn,rt,Re),{shortCircuited:!0}}let{loaderData:Jn,errors:tn}=hg(h,ee,ze,wt,ye,Ze,Ft,j);j.forEach((rt,ot)=>{rt.subscribe(In=>{(In||rt.done)&&j.delete(ot)})}),Me();let vr=et(N);return st({loaderData:Jn,errors:tn},vr||Ze.length>0?{fetchers:new Map(h.fetchers)}:{})}function E(W){return h.fetchers.get(W)||wC}function I(W,G,ee,de){if(typeof AbortController>"u")throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");C.has(W)&&Ue(W);let ue=va(t,ee,e.basename);if(!ue){pe(W,G,new Mi(404,"Not Found",null));return}let{path:Re,submission:ke}=dg(ee,de,!0),ye=bg(ue,Re);if(ke){A(W,G,Re,ye,ke);return}H.set(W,[Re,ye]),q(W,G,Re,ye)}async function A(W,G,ee,de,ue){if(se(),H.delete(W),!de.route.action){let{error:Wt}=_g(ee);pe(W,G,Wt);return}let Re=h.fetchers.get(W),ke=st({state:"submitting"},ue,{data:Re&&Re.data});h.fetchers.set(W,ke),X({fetchers:new Map(h.fetchers)});let ye=new AbortController,be=ca(ee,ye.signal,ue);C.set(W,ye);let ze=await ua("action",be,de);if(be.signal.aborted){C.get(W)===ye&&C.delete(W);return}if(bi(ze)){C.delete(W),F.add(W);let Wt=st({state:"loading"},ue,{data:void 0});h.fetchers.set(W,Wt),X({fetchers:new Map(h.fetchers)});let mn=st({state:"loading",location:Eo(h.location,ze.location)},ue);await Y(ze,mn);return}if(Ta(ze)){pe(W,G,ze.error);return}wo(ze)&&Le(!1,"defer() is not supported in actions");let Ze=h.navigation.location||h.location,Lt=ca(Ze,ye.signal),wt=h.navigation.state!=="idle"?va(t,h.navigation.location,e.basename):h.matches;Le(wt,"Didn't find any matches after fetcher action");let Ft=++z;M.set(W,Ft);let Yn=st({state:"loading",data:ze.data},ue);h.fetchers.set(W,Yn);let[Jn,tn]=fg(h,wt,ue,Ze,y,b,k,{[de.route.id]:ze.data},void 0,H);tn.filter(Wt=>{let[mn]=Wt;return mn!==W}).forEach(Wt=>{let[mn]=Wt,ys=h.fetchers.get(mn),vc={state:"loading",data:ys&&ys.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};h.fetchers.set(mn,vc),C.set(mn,ye)}),X({fetchers:new Map(h.fetchers)});let{results:vr,loaderResults:rt,fetcherResults:ot}=await te(h.matches,Jn,tn,Lt);if(ye.signal.aborted)return;M.delete(W),C.delete(W),tn.forEach(Wt=>{let[mn]=Wt;return C.delete(mn)});let In=gg(vr);if(In){let Wt=bd(h,In);await Y(In,Wt);return}let{loaderData:$o,errors:Hi}=hg(h,h.matches,Jn,rt,void 0,tn,ot,j),gs={state:"idle",data:ze.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};h.fetchers.set(W,gs);let vs=et(Ft);h.navigation.state==="loading"&&Ft>N?(Le(v,"Expected pending action"),w&&w.abort(),le(h.navigation.location,{matches:wt,loaderData:$o,errors:Hi,fetchers:new Map(h.fetchers)})):(X(st({errors:Hi,loaderData:xd(h.loaderData,$o,wt)},vs?{fetchers:new Map(h.fetchers)}:{})),y=!1)}async function q(W,G,ee,de){let ue=h.fetchers.get(W),Re={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:ue&&ue.data};h.fetchers.set(W,Re),X({fetchers:new Map(h.fetchers)});let ke=new AbortController,ye=ca(ee,ke.signal);C.set(W,ke);let be=await ua("loader",ye,de);if(wo(be)&&(be=await Kb(be,ye.signal,!0)||be),C.get(W)===ke&&C.delete(W),ye.signal.aborted)return;if(bi(be)){let Ze=bd(h,be);await Y(be,Ze);return}if(Ta(be)){let Ze=fi(h.matches,G);h.fetchers.delete(W),X({fetchers:new Map(h.fetchers),errors:{[Ze.route.id]:be.error}});return}Le(!wo(be),"Unhandled fetcher deferred data");let ze={state:"idle",data:be.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};h.fetchers.set(W,ze),X({fetchers:new Map(h.fetchers)})}async function Y(W,G,ee){W.revalidate&&(y=!0),Le(G.location,"Expected a location on the redirect navigation"),w=null;let de=ee===!0?ut.Replace:ut.Push;await R(de,G.location,{overrideNavigation:G})}async function te(W,G,ee,de){let ue=await Promise.all([...G.map(ye=>ua("loader",de,ye)),...ee.map(ye=>{let[,be,ze]=ye;return ua("loader",ca(be,de.signal),ze)})]),Re=ue.slice(0,G.length),ke=ue.slice(G.length);return await Promise.all([vg(W,G,Re,de.signal,!1,h.loaderData),vg(W,ee.map(ye=>{let[,,be]=ye;return be}),ke,de.signal,!0)]),{results:ue,loaderResults:Re,fetcherResults:ke}}function se(){y=!0,b.push(...Se()),H.forEach((W,G)=>{C.has(G)&&(k.push(G),Ue(G))})}function pe(W,G,ee){let de=fi(h.matches,G);Xe(W),X({errors:{[de.route.id]:ee},fetchers:new Map(h.fetchers)})}function Xe(W){C.has(W)&&Ue(W),H.delete(W),M.delete(W),F.delete(W),h.fetchers.delete(W)}function Ue(W){let G=C.get(W);Le(G,"Expected fetch controller: "+W),G.abort(),C.delete(W)}function De(W){for(let G of W){let de={state:"idle",data:E(G).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};h.fetchers.set(G,de)}}function Me(){let W=[];for(let G of F){let ee=h.fetchers.get(G);Le(ee,"Expected fetcher: "+G),ee.state==="loading"&&(F.delete(G),W.push(G))}De(W)}function et(W){let G=[];for(let[ee,de]of M)if(de<W){let ue=h.fetchers.get(ee);Le(ue,"Expected fetcher: "+ee),ue.state==="loading"&&(Ue(ee),M.delete(ee),G.push(ee))}return De(G),G.length>0}function Se(W){let G=[];return j.forEach((ee,de)=>{(!W||W(de))&&(ee.cancel(),G.push(de),j.delete(de))}),G}function en(W,G,ee){if(i=W,l=G,a=ee||(de=>de.key),!u&&h.navigation===yd){u=!0;let de=Ne(h.location,h.matches);de!=null&&X({restoreScrollPosition:de})}return()=>{i=null,l=null,a=null}}function Mt(W,G){if(i&&a&&l){let ee=G.map(ue=>yg(ue,h.loaderData)),de=a(W,ee)||W.key;i[de]=l()}}function Ne(W,G){if(i&&a&&l){let ee=G.map(Re=>yg(Re,h.loaderData)),de=a(W,ee)||W.key,ue=i[de];if(typeof ue=="number")return ue}return null}return _={get basename(){return e.basename},get state(){return h},get routes(){return t},initialize:J,subscribe:fe,enableScrollRestoration:en,navigate:U,fetch:I,revalidate:ne,createHref:sc,getFetcher:E,deleteFetcher:Xe,dispose:ie,_internalFetchControllers:C,_internalActiveDeferreds:j},_}function dg(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Zf(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:sc(Io(r)),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let i=Io(r);try{let a=qb(t.formData);n&&i.search&&Gb(i.search)&&a.append("index",""),i.search="?"+a}catch{return{path:r,error:new Mi(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:Zf(i)}}function bd(e,t){let{formMethod:n,formAction:r,formEncType:i,formData:a}=e.navigation;return{state:"loading",location:Eo(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:i||void 0,formData:a||void 0}}function kC(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function fg(e,t,n,r,i,a,l,u,d,p){let m=d?Object.values(d)[0]:u?Object.values(u)[0]:null,_=d?Object.keys(d)[0]:void 0,v=kC(t,_).filter((w,O)=>w.route.loader!=null&&(CC(e.loaderData,e.matches[O],w)||a.some(y=>y===w.route.id)||pg(e.location,e.matches[O],n,r,w,i,m))),x=[];return p&&p.forEach((w,O)=>{let[y,b]=w;l.includes(O)?x.push([O,y,b]):i&&pg(y,b,n,y,b,i,m)&&x.push([O,y,b])}),[v,x]}function CC(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Vb(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function pg(e,t,n,r,i,a,l){let u=Wf(e),d=t.params,p=Wf(r),m=i.params,_=Vb(t,i)||u.toString()===p.toString()||u.search!==p.search||a;if(i.route.shouldRevalidate){let h=i.route.shouldRevalidate(st({currentUrl:u,currentParams:d,nextUrl:p,nextParams:m},n,{actionResult:l,defaultShouldRevalidate:_}));if(typeof h=="boolean")return h}return _}async function ua(e,t,n,r,i){r===void 0&&(r=!1),i===void 0&&(i=!1);let a,l,u,d=new Promise((m,_)=>u=_),p=()=>u();t.signal.addEventListener("abort",p);try{let m=n.route[e];Le(m,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),l=await Promise.race([m({request:t,params:n.params}),d])}catch(m){a=Et.error,l=m}finally{t.signal.removeEventListener("abort",p)}if(l instanceof Response){let m=l.status,_=l.headers.get("Location");if(i)throw l;if(m>=300&&m<=399&&_!=null){if(r)throw l;return{type:Et.redirect,status:m,location:_,revalidate:l.headers.get("X-Remix-Revalidate")!==null}}let h,v=l.headers.get("Content-Type");return v&&v.startsWith("application/json")?h=await l.json():h=await l.text(),a===Et.error?{type:a,error:new Mi(m,l.statusText,h),headers:l.headers}:{type:Et.data,data:h,statusCode:l.status,headers:l.headers}}return a===Et.error?{type:a,error:l}:l instanceof yC?{type:Et.deferred,deferredData:l}:{type:Et.data,data:l}}function ca(e,t,n){let r=Wf(e).toString(),i={signal:t};if(n){let{formMethod:a,formEncType:l,formData:u}=n;i.method=a.toUpperCase(),i.body=l==="application/x-www-form-urlencoded"?qb(u):u}return new Request(r,i)}function qb(e){let t=new URLSearchParams;for(let[n,r]of e.entries())Le(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function PC(e,t,n,r,i){let a={},l=null,u,d=!1,p={};return n.forEach((m,_)=>{let h=t[_].route.id;if(Le(!bi(m),"Cannot handle redirect results in processLoaderData"),Ta(m)){let v=fi(e,h),x=m.error;r&&(x=Object.values(r)[0],r=void 0),l=Object.assign(l||{},{[v.route.id]:x}),d||(d=!0,u=Wb(m.error)?m.error.status:500),m.headers&&(p[h]=m.headers)}else wo(m)?(i&&i.set(h,m.deferredData),a[h]=m.deferredData.data):(a[h]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(u=m.statusCode),m.headers&&(p[h]=m.headers))}),r&&(l=r),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:p}}function hg(e,t,n,r,i,a,l,u){let{loaderData:d,errors:p}=PC(t,n,r,i,u);for(let m=0;m<a.length;m++){let[_,,h]=a[m];Le(l!==void 0&&l[m]!==void 0,"Did not find corresponding fetcher result");let v=l[m];if(Ta(v)){let x=fi(e.matches,h.route.id);p&&p[x.route.id]||(p=st({},p,{[x.route.id]:v.error})),e.fetchers.delete(_)}else{if(bi(v))throw new Error("Unhandled fetcher revalidation redirect");if(wo(v))throw new Error("Unhandled fetcher deferred data");{let x={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(_,x)}}}return{loaderData:d,errors:p}}function xd(e,t,n){let r=st({},t);return n.forEach(i=>{let a=i.route.id;t[a]===void 0&&e[a]!==void 0&&(r[a]=e[a])}),r}function fi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function mg(e){let t=e.find(n=>n.index||n.path===""||n.path==="/")||{id:"__shim-404-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t,error:new Mi(404,"Not Found",null)}}function _g(e){let t=typeof e=="string"?e:sc(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:Et.error,error:new Mi(405,"Method Not Allowed","No action found for ["+t+"]")}}function gg(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(bi(n))return n}}function sc(e){return(e.pathname||"")+(e.search||"")}function EC(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function wo(e){return e.type===Et.deferred}function Ta(e){return e.type===Et.error}function bi(e){return(e&&e.type)===Et.redirect}async function vg(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l],p=e.find(_=>_.route.id===d.route.id),m=p!=null&&!Vb(p,d)&&(a&&a[d.route.id])!==void 0;wo(u)&&(i||m)&&await Kb(u,r,i).then(_=>{_&&(n[l]=_||n[l])})}}async function Kb(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Et.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Et.error,error:i}}return{type:Et.data,data:e.deferredData.data}}}function Gb(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function yg(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function bg(e,t){let n=typeof t=="string"?Io(t).search:t.search;return e[e.length-1].route.index&&!Gb(n||"")?e.slice(-2)[0]:e.slice(-1)[0]}function Wf(e){let t=typeof window<"u"&&typeof window.location<"u"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:sc(e);return new URL(n,t)}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eu.apply(this,arguments)}function OC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const TC=typeof Object.is=="function"?Object.is:OC,{useState:zC,useEffect:LC,useLayoutEffect:RC,useDebugValue:BC}=Ba;function AC(e,t,n){const r=t(),[{inst:i},a]=zC({inst:{value:r,getSnapshot:t}});return RC(()=>{i.value=r,i.getSnapshot=t,wd(i)&&a({inst:i})},[e,r,t]),LC(()=>(wd(i)&&a({inst:i}),e(()=>{wd(i)&&a({inst:i})})),[e]),BC(r),r}function wd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!TC(n,r)}catch{return!0}}function IC(e,t,n){return t()}const NC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DC=!NC,MC=DC?IC:AC,FC="useSyncExternalStore"in Ba?(e=>e.useSyncExternalStore)(Ba):MC,jC=T.createContext(null),Qb=T.createContext(null),Eh=T.createContext(null),$C=T.createContext(null),lc=T.createContext(null),Oh=T.createContext({outlet:null,matches:[]}),Xb=T.createContext(null);function Th(){return T.useContext(lc)!=null}function HC(){return Th()||Le(!1),T.useContext(lc).location}function UC(e,t){Th()||Le(!1);let n=T.useContext(Eh),{matches:r}=T.useContext(Oh),i=r[r.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=HC(),d;if(t){var p;let x=typeof t=="string"?Io(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||Le(!1),d=x}else d=u;let m=d.pathname||"/",_=l==="/"?m:m.slice(l.length)||"/",h=va(e,{pathname:_}),v=qC(h&&h.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:yi([l,x.pathname]),pathnameBase:x.pathnameBase==="/"?l:yi([l,x.pathnameBase])})),r,n||void 0);return t?T.createElement(lc.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ut.Pop}},v):v}function ZC(){let e=GC(),t=Wb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unhandled Thrown Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:a},"errorElement")," props on ",T.createElement("code",{style:a},"<Route>")))}class WC extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Xb.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function VC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(jC);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),T.createElement(Oh.Provider,{value:t},r)}function qC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||Le(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,p=n?l.route.errorElement||T.createElement(ZC,null):null,m=()=>T.createElement(VC,{match:l,routeContext:{outlet:a,matches:t.concat(r.slice(0,u+1))}},d?p:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||u===0)?T.createElement(WC,{location:n.location,component:p,error:d,children:m()}):m()},null)}var xg;(function(e){e.UseRevalidator="useRevalidator"})(xg||(xg={}));var Vf;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Vf||(Vf={}));function KC(e){let t=T.useContext(Eh);return t||Le(!1),t}function GC(){var e;let t=T.useContext(Xb),n=KC(Vf.UseRouteError),r=T.useContext(Oh),i=r.matches[r.matches.length-1];return t||(r||Le(!1),i.route.id||Le(!1),(e=n.errors)==null?void 0:e[i.route.id])}function QC(e){let{fallbackElement:t,router:n}=e,r=FC(n.subscribe,()=>n.state,()=>n.state),i=T.useMemo(()=>({createHref:n.createHref,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d?.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return T.createElement(Qb.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},T.createElement(Eh.Provider,{value:r},T.createElement(YC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?T.createElement(JC,null):t)))}function XC(e){Le(!1)}function YC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ut.Pop,navigator:a,static:l=!1}=e;Th()&&Le(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=Io(r));let{pathname:p="/",search:m="",hash:_="",state:h=null,key:v="default"}=r,x=T.useMemo(()=>{let w=Ub(p,u);return w==null?null:{pathname:w,search:m,hash:_,state:h,key:v}},[u,p,m,_,h,v]);return x==null?null:T.createElement($C.Provider,{value:d},T.createElement(lc.Provider,{children:n,value:{location:x,navigationType:i}}))}function JC(e){let{children:t,location:n}=e,r=T.useContext(Qb),i=r&&!t?r.router.routes:qf(t);return UC(i,n)}var wg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(wg||(wg={}));new Promise(()=>{});function qf(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,qf(r.props.children,t));return}r.type!==XC&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=qf(r.props.children,a)),n.push(l)}),n}function Yb(e){return e.map(t=>{let n=eu({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Yb(n.children)),n})}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eP(e,t){var n;return SC({basename:t?.basename,history:tC({window:t?.window}),hydrationData:t?.hydrationData||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:Yb(e)}).initialize()}var Sg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Sg||(Sg={}));var kg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function tP(e,t){if(Tn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jb(e){var t=tP(e,"string");return Tn(t)==="symbol"?t:String(t)}function Rn(e,t,n){return t=Jb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Jb(r.key),r)}}function An(e,t,n){return t&&Cg(e.prototype,t),n&&Cg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var nP=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,rP={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},oP=function(t){return rP[t]},iP=function(t){return t.replace(nP,oP)};function Pg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Eg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Kf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:iP},e1,aP=T.createContext();function sP(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Kf=Eg(Eg({},Kf),e)}function lP(){return Kf}var uP=function(){function e(){Bn(this,e),this.usedNamespaces={}}return An(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function cP(e){e1=e}function dP(){return e1}var fP={type:"3rdParty",init:function(t){sP(t.options.react),cP(t)}};function pP(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Og={};function Gf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Og[t[0]]||(typeof t[0]=="string"&&(Og[t[0]]=new Date),pP.apply(void 0,t))}function Tg(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function hP(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,p){var m=t.services.backendConnector.state["".concat(d,"|").concat(p)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function mP(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Gf("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):hP(e,t,n)}function t1(e){if(Array.isArray(e))return e}function _P(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,p=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(m){p=!0,i=m}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(p)throw i}}return u}}function zg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n1(e,t){if(e){if(typeof e=="string")return zg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zg(e,t)}}function r1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gP(e,t){return t1(e)||_P(e,t)||n1(e,t)||r1()}function Lg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var vP=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function o1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(aP)||{},i=r.i18n,a=r.defaultNS,l=n||i||dP();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new uP),!l){Gf("You will need to pass in an i18next instance by using initReactI18next");var u=function(H){return Array.isArray(H)?H[H.length-1]:H},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&Gf("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=Sd(Sd(Sd({},lP()),l.options.react),t),m=p.useSuspense,_=p.keyPrefix,h=e||a||l.options&&l.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(h);var v=(l.isInitialized||l.initializedStoreOnce)&&h.every(function(F){return mP(F,l,p)});function x(){return l.getFixedT(null,p.nsMode==="fallback"?h:h[0],_)}var w=T.useState(x),O=gP(w,2),y=O[0],b=O[1],k=h.join(),C=vP(k),z=T.useRef(!0);T.useEffect(function(){var F=p.bindI18n,H=p.bindI18nStore;z.current=!0,!v&&!m&&Tg(l,h,function(){z.current&&b(x)}),v&&C&&C!==k&&z.current&&b(x);function j(){z.current&&b(x)}return F&&l&&l.on(F,j),H&&l&&l.store.on(H,j),function(){z.current=!1,F&&l&&F.split(" ").forEach(function(J){return l.off(J,j)}),H&&l&&H.split(" ").forEach(function(J){return l.store.off(J,j)})}},[l,k]);var N=T.useRef(!0);T.useEffect(function(){z.current&&!N.current&&b(x),N.current=!1},[l,_]);var M=[y,l,v];if(M.t=y,M.i18n=l,M.ready=v,v||!v&&!m)return M;throw new Promise(function(F){Tg(l,h,function(){F()})})}function tu(e,t){return tu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},tu(e,t)}function ds(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,tu(e,t)}var fs=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),nu=typeof window>"u";function Pt(){}function yP(e,t){return typeof e=="function"?e(t):e}function Qf(e){return typeof e=="number"&&e>=0&&e!==1/0}function ru(e){return Array.isArray(e)?e:[e]}function i1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function xl(e,t,n){return uc(e)?typeof t=="function"?Te({},n,{queryKey:e,queryFn:t}):Te({},t,{queryKey:e}):e}function Or(e,t,n){return uc(e)?[Te({},t,{queryKey:e}),n]:[e||{},t]}function bP(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Rg(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(uc(u)){if(r){if(t.queryHash!==zh(u,t.options))return!1}else if(!ou(t.queryKey,u))return!1}var p=bP(n,a);if(p==="none")return!1;if(p!=="all"){var m=t.isActive();if(p==="active"&&!m||p==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Bg(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(uc(a)){if(!t.options.mutationKey)return!1;if(n){if(So(t.options.mutationKey)!==So(a))return!1}else if(!ou(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function zh(e,t){var n=t?.queryKeyHashFn||So;return n(e)}function So(e){var t=ru(e);return xP(t)}function xP(e){return JSON.stringify(e,function(t,n){return Xf(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function ou(e,t){return a1(ru(e),ru(t))}function a1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!a1(e[n],t[n])}):!1}function iu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Xf(e)&&Xf(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var p=n?d:i[d];l[p]=iu(e[p],t[p]),l[p]===e[p]&&u++}return r===a&&u===r?e:l}return t}function wP(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Xf(e){if(!Ag(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Ag(n)||!n.hasOwnProperty("isPrototypeOf"))}function Ag(e){return Object.prototype.toString.call(e)==="[object Object]"}function uc(e){return typeof e=="string"||Array.isArray(e)}function SP(e){return new Promise(function(t){setTimeout(t,e)})}function Ig(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function s1(){if(typeof AbortController=="function")return new AbortController}var kP=function(e){ds(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!nu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(fs),za=new kP,CP=function(e){ds(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!nu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(fs),wl=new CP;function PP(e){return Math.min(1e3*Math.pow(2,e),3e4)}function au(e){return typeof e?.cancel=="function"}var l1=function(t){this.revert=t?.revert,this.silent=t?.silent};function Sl(e){return e instanceof l1}var u1=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(h){return i?.(h)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(h,v){l=h,u=v});var d=function(v){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(v),a?.(),l(v))},p=function(v){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(v),a?.(),u(v))},m=function(){return new Promise(function(v){a=v,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},_=function h(){if(!n.isResolved){var v;try{v=t.fn()}catch(x){v=Promise.reject(x)}i=function(w){if(!n.isResolved&&(p(new l1(w)),n.abort==null||n.abort(),au(v)))try{v.cancel()}catch{}},n.isTransportCancelable=au(v),Promise.resolve(v).then(d).catch(function(x){var w,O;if(!n.isResolved){var y=(w=t.retry)!=null?w:3,b=(O=t.retryDelay)!=null?O:PP,k=typeof b=="function"?b(n.failureCount,x):b,C=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,x);if(r||!C){p(x);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,x),SP(k).then(function(){if(!za.isFocused()||!wl.isOnline())return m()}).then(function(){r?p(x):h()})}})}};_()},EP=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Ig(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Ig(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),Je=new EP,c1=console;function su(){return c1}function OP(e){c1=e}var TP=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Te({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Qf(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=yP(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=iu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Pt).catch(Pt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!i1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var p;return(p=this.retryer)==null||p.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var m=this.observers.find(function(b){return b.options.queryFn});m&&this.setOptions(m.options)}var _=ru(this.queryKey),h=s1(),v={queryKey:_,pageParam:void 0,meta:this.meta};Object.defineProperty(v,"signal",{enumerable:!0,get:function(){if(h)return a.abortSignalConsumed=!0,h.signal}});var x=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(v)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:_,state:this.state,fetchFn:x,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var O;(O=this.options.behavior)==null||O.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=w.fetchOptions)==null?void 0:y.meta})}return this.retryer=new u1({fn:w.fetchFn,abort:h==null||(d=h.abort)==null?void 0:d.bind(h),onSuccess:function(k){a.setData(k),a.cache.config.onSuccess==null||a.cache.config.onSuccess(k,a),a.cacheTime===0&&a.optionalRemove()},onError:function(k){Sl(k)&&k.silent||a.dispatch({type:"error",error:k}),Sl(k)||(a.cache.config.onError==null||a.cache.config.onError(k,a),su().error(k)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Je.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Te({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Te({},r,{isPaused:!0});case"continue":return Te({},r,{isPaused:!1});case"fetch":return Te({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Te({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Sl(u)&&u.revert&&this.revertState?Te({},this.revertState):Te({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Te({},r,{isInvalidated:!0});case"setState":return Te({},r,i.state);default:return r}},e}(),zP=function(e){ds(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,p=(u=a.queryHash)!=null?u:zh(d,a),m=this.get(p);return m||(m=new TP({cache:this,queryKey:d,queryHash:p,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(m)),m},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Or(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Rg(u,d)})},n.findAll=function(i,a){var l=Or(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Rg(u,d)}):this.queries},n.notify=function(i){var a=this;Je.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(fs),LP=function(){function e(n){this.options=Te({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||RP(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Pt).catch(Pt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),su().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new u1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=BP(this.state,r),Je.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function RP(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function BP(e,t){switch(t.type){case"failed":return Te({},e,{failureCount:e.failureCount+1});case"pause":return Te({},e,{isPaused:!0});case"continue":return Te({},e,{isPaused:!1});case"loading":return Te({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Te({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Te({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Te({},e,t.state);default:return e}}var AP=function(e){ds(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new LP({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Je.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Bg(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Bg(i,a)})},n.notify=function(i){var a=this;Je.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return Je.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Pt)})},Promise.resolve())})},t}(fs);function IP(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,p=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,m=p?.pageParam,_=p?.direction==="forward",h=p?.direction==="backward",v=((l=t.state.data)==null?void 0:l.pages)||[],x=((u=t.state.data)==null?void 0:u.pageParams)||[],w=s1(),O=w?.signal,y=x,b=!1,k=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},C=function(X,le,U,ne){return y=ne?[le].concat(y):[].concat(y,[le]),ne?[U].concat(X):[].concat(X,[U])},z=function(X,le,U,ne){if(b)return Promise.reject("Cancelled");if(typeof U>"u"&&!le&&X.length)return Promise.resolve(X);var R={queryKey:t.queryKey,signal:O,pageParam:U,meta:t.meta},re=k(R),V=Promise.resolve(re).then(function(I){return C(X,U,I,ne)});if(au(re)){var E=V;E.cancel=re.cancel}return V},N;if(!v.length)N=z([]);else if(_){var M=typeof m<"u",F=M?m:Ng(t.options,v);N=z(v,M,F)}else if(h){var H=typeof m<"u",j=H?m:NP(t.options,v);N=z(v,H,j,!0)}else(function(){y=[];var fe=typeof t.options.getNextPageParam>"u",X=d&&v[0]?d(v[0],0,v):!0;N=X?z([],fe,x[0]):Promise.resolve(C([],x[0],v[0]));for(var le=function(R){N=N.then(function(re){var V=d&&v[R]?d(v[R],R,v):!0;if(V){var E=fe?x[R]:Ng(t.options,re);return z(re,fe,E)}return Promise.resolve(C(re,x[R],v[R]))})},U=1;U<v.length;U++)le(U)})();var J=N.then(function(fe){return{pages:fe,pageParams:y}}),ie=J;return ie.cancel=function(){b=!0,w?.abort(),au(N)&&N.cancel()},J}}}}function Ng(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function NP(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var DP=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new zP,this.mutationCache=n.mutationCache||new AP,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=za.subscribe(function(){za.isFocused()&&wl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=wl.subscribe(function(){za.isFocused()&&wl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Or(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Te({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=xl(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return Je.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Or(r,i),l=a[0],u=this.queryCache;Je.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Or(r,i,a),d=u[0],p=u[1],m=this.queryCache,_=Te({},d,{active:!0});return Je.batch(function(){return m.findAll(d).forEach(function(h){h.reset()}),l.refetchQueries(_,p)})},t.cancelQueries=function(r,i,a){var l=this,u=Or(r,i,a),d=u[0],p=u[1],m=p===void 0?{}:p;typeof m.revert>"u"&&(m.revert=!0);var _=Je.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.cancel(m)})});return Promise.all(_).then(Pt).catch(Pt)},t.invalidateQueries=function(r,i,a){var l,u,d,p=this,m=Or(r,i,a),_=m[0],h=m[1],v=Te({},_,{active:(l=(u=_.refetchActive)!=null?u:_.active)!=null?l:!0,inactive:(d=_.refetchInactive)!=null?d:!1});return Je.batch(function(){return p.queryCache.findAll(_).forEach(function(x){x.invalidate()}),p.refetchQueries(v,h)})},t.refetchQueries=function(r,i,a){var l=this,u=Or(r,i,a),d=u[0],p=u[1],m=Je.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.fetch(void 0,Te({},p,{meta:{refetchPage:d?.refetchPage}}))})}),_=Promise.all(m).then(Pt);return p?.throwOnError||(_=_.catch(Pt)),_},t.fetchQuery=function(r,i,a){var l=xl(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Pt).catch(Pt)},t.fetchInfiniteQuery=function(r,i,a){var l=xl(r,i,a);return l.behavior=IP(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Pt).catch(Pt)},t.cancelMutations=function(){var r=this,i=Je.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Pt).catch(Pt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return So(r)===So(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return ou(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return So(r)===So(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return ou(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Te({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=zh(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Te({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),MP=function(e){ds(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Dg(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Yf(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Yf(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Mg(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var p=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||p!==this.currentRefetchInterval)&&this.updateRefetchInterval(p)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(m){l.trackedProps.includes(m)||l.trackedProps.push(m)};return Object.keys(i).forEach(function(p){Object.defineProperty(u,p,{configurable:!1,enumerable:!0,get:function(){return d(p),i[p]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(p){p.isFetching||(d(),p.isError&&i?.throwOnError?u(p.error):l(p))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Te({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Pt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(nu||this.currentResult.isStale||!Qf(this.options.staleTime))){var a=i1(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(nu||this.options.enabled===!1||!Qf(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||za.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,p=this.currentResultState,m=this.currentResultOptions,_=i!==l,h=_?i.state:this.currentQueryInitialState,v=_?this.currentResult:this.previousQueryResult,x=i.state,w=x.dataUpdatedAt,O=x.error,y=x.errorUpdatedAt,b=x.isFetching,k=x.status,C=!1,z=!1,N;if(a.optimisticResults){var M=this.hasListeners(),F=!M&&Dg(i,a),H=M&&Mg(i,l,a,u);(F||H)&&(b=!0,w||(k="loading"))}if(a.keepPreviousData&&!x.dataUpdateCount&&v?.isSuccess&&k!=="error")N=v.data,w=v.dataUpdatedAt,k=v.status,C=!0;else if(a.select&&typeof x.data<"u")if(d&&x.data===p?.data&&a.select===this.selectFn)N=this.selectResult;else try{this.selectFn=a.select,N=a.select(x.data),a.structuralSharing!==!1&&(N=iu(d?.data,N)),this.selectResult=N,this.selectError=null}catch(ie){su().error(ie),this.selectError=ie}else N=x.data;if(typeof a.placeholderData<"u"&&typeof N>"u"&&(k==="loading"||k==="idle")){var j;if(d?.isPlaceholderData&&a.placeholderData===m?.placeholderData)j=d.data;else if(j=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof j<"u")try{j=a.select(j),a.structuralSharing!==!1&&(j=iu(d?.data,j)),this.selectError=null}catch(ie){su().error(ie),this.selectError=ie}typeof j<"u"&&(k="success",N=j,z=!0)}this.selectError&&(O=this.selectError,N=this.selectResult,y=Date.now(),k="error");var J={status:k,isLoading:k==="loading",isSuccess:k==="success",isError:k==="error",isIdle:k==="idle",data:N,dataUpdatedAt:w,error:O,errorUpdatedAt:y,failureCount:x.fetchFailureCount,errorUpdateCount:x.errorUpdateCount,isFetched:x.dataUpdateCount>0||x.errorUpdateCount>0,isFetchedAfterMount:x.dataUpdateCount>h.dataUpdateCount||x.errorUpdateCount>h.errorUpdateCount,isFetching:b,isRefetching:b&&k!=="loading",isLoadingError:k==="error"&&x.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:C,isRefetchError:k==="error"&&x.dataUpdatedAt!==0,isStale:Lh(i,a),refetch:this.refetch,remove:this.remove};return J},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var p=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(m){var _=m,h=i[_]!==a[_],v=p?.some(function(w){return w===m}),x=d?.some(function(w){return w===m});return h&&!x&&(!p||v)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!wP(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Te({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Sl(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;Je.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(fs);function FP(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Dg(e,t){return FP(e,t)||e.state.dataUpdatedAt>0&&Yf(e,t,t.refetchOnMount)}function Yf(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Lh(e,t)}return!1}function Mg(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Lh(e,n)}function Lh(e,t){return e.isStaleByTime(t.staleTime)}var jP=l2.unstable_batchedUpdates;Je.setBatchNotifyFunction(jP);var $P=console;OP($P);var Fg=$.createContext(void 0),d1=$.createContext(!1);function f1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Fg),window.ReactQueryClientContext):Fg}var HP=function(){var t=$.useContext(f1($.useContext(d1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},UP=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;$.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=f1(i);return $.createElement(d1.Provider,{value:i},$.createElement(l.Provider,{value:n},a))};function ZP(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var WP=$.createContext(ZP()),VP=function(){return $.useContext(WP)};function qP(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function KP(e,t){var n=$.useRef(!1),r=$.useState(0),i=r[1],a=HP(),l=VP(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=Je.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=Je.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=Je.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=$.useState(function(){return new t(a,u)}),p=d[0],m=p.getOptimisticResult(u);if($.useEffect(function(){n.current=!0,l.clearReset();var _=p.subscribe(Je.batchCalls(function(){n.current&&i(function(h){return h+1})}));return p.updateResult(),function(){n.current=!1,_()}},[l,p]),$.useEffect(function(){p.setOptions(u,{listeners:!1})},[u,p]),u.suspense&&m.isLoading)throw p.fetchOptimistic(u).then(function(_){var h=_.data;u.onSuccess==null||u.onSuccess(h),u.onSettled==null||u.onSettled(h,null)}).catch(function(_){l.clearReset(),u.onError==null||u.onError(_),u.onSettled==null||u.onSettled(void 0,_)});if(m.isError&&!l.isReset()&&!m.isFetching&&qP(u.suspense,u.useErrorBoundary,[m.error,p.getCurrentQuery()]))throw m.error;return u.notifyOnChangeProps==="tracked"&&(m=p.trackResult(m,u)),m}function GP(e,t,n){var r=xl(e,t,n);return KP(r,MP)}function Ur(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&tu(e,t)}function ps(e,t){if(t&&(Tn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ur(e)}function Xn(e){return Xn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xn(e)}function QP(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function XP(e){return t1(e)||QP(e)||n1(e)||r1()}function jg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var YP={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},JP=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Bn(this,e),this.init(t,n)}return An(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||YP,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,$g($g({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Wn=new JP,Xr=function(){function e(){Bn(this,e),this.observers={}}return An(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function da(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function Hg(e){return e==null?"":""+e}function eE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Rh(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function Ug(e,t,n){var r=Rh(e,t,Object),i=r.obj,a=r.k;i[a]=n}function tE(e,t,n,r){var i=Rh(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function lu(e,t){var n=Rh(e,t),r=n.obj,i=n.k;if(r)return r[i]}function Zg(e,t,n){var r=lu(e,n);return r!==void 0?r:lu(t,n)}function p1(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):p1(e[r],t[r],n):e[r]=t[r]);return e}function Xo(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var nE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function rE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return nE[t]}):e}var dc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,oE=[" ",",","?","!",";"];function iE(e,t,n){t=t||"",n=n||"";var r=oE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function Wg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aE(e){var t=sE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return ps(this,i)}}function sE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var p=r.slice(a+l).join(n);return p?h1(d,p,n):void 0}i=i[r[a]]}return i}}var lE=function(e){cc(n,e);var t=aE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Bn(this,n),i=t.call(this),dc&&Xr.call(Ur(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return An(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,p=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[i,a];l&&typeof l!="string"&&(m=m.concat(l)),l&&typeof l=="string"&&(m=m.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(m=i.split("."));var _=lu(this.data,m);return _||!p||typeof l!="string"?_:h1(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},p=this.options.keySeparator;p===void 0&&(p=".");var m=[i,a];l&&(m=m.concat(p?l.split(p):l)),i.indexOf(".")>-1&&(m=i.split("."),u=a,a=m[1]),this.addNamespaces(a),Ug(this.data,m,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var p=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[i,a];i.indexOf(".")>-1&&(m=i.split("."),u=l,l=a,a=m[1]),this.addNamespaces(a);var _=lu(this.data,m)||{};u?p1(_,l,d):_=nl(nl({},_),l),Ug(this.data,m,_),p.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?nl(nl({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(Xr),m1={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function Vg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uE(e){var t=cE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return ps(this,i)}}function cE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var qg={},Kg=function(e){cc(n,e);var t=uE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Bn(this,n),i=t.call(this),dc&&Xr.call(Ur(i)),eE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Ur(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Wn.create("translator"),i}return An(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],p=l&&i.indexOf(l)>-1,m=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!iE(i,l,u);if(p&&!m){var _=i.match(this.interpolator.nestingRegexp);if(_&&_.length>0)return{key:i,namespaces:d};var h=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(h[0])>-1)&&(d=h.shift()),i=h.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(Tn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,p=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,m=this.extractFromKey(i[i.length-1],a),_=m.key,h=m.namespaces,v=h[h.length-1],x=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(x&&x.toLowerCase()==="cimode"){if(w){var O=a.nsSeparator||this.options.nsSeparator;return d?(y.res="".concat(v).concat(O).concat(_),y):"".concat(v).concat(O).concat(_)}return d?(y.res=_,y):_}var y=this.resolve(i,a),b=y&&y.res,k=y&&y.usedKey||_,C=y&&y.exactUsedKey||_,z=Object.prototype.toString.apply(b),N=["[object Number]","[object Function]","[object RegExp]"],M=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,F=!this.i18nFormat||this.i18nFormat.handleAsObject,H=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(F&&b&&H&&N.indexOf(z)<0&&!(typeof M=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var j=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,b,Rt(Rt({},a),{},{ns:h})):"key '".concat(_," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=j,y):j}if(p){var J=z==="[object Array]",ie=J?[]:{},fe=J?C:k;for(var X in b)if(Object.prototype.hasOwnProperty.call(b,X)){var le="".concat(fe).concat(p).concat(X);ie[X]=this.translate(le,Rt(Rt({},a),{joinArrays:!1,ns:h})),ie[X]===le&&(ie[X]=b[X])}b=ie}}else if(F&&typeof M=="string"&&z==="[object Array]")b=b.join(M),b&&(b=this.extendTranslation(b,i,a,l));else{var U=!1,ne=!1,R=a.count!==void 0&&typeof a.count!="string",re=n.hasDefaultValue(a),V=R?this.pluralResolver.getSuffix(x,a.count,a):"",E=a["defaultValue".concat(V)]||a.defaultValue;!this.isValidLookup(b)&&re&&(U=!0,b=E),this.isValidLookup(b)||(ne=!0,b=_);var I=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,A=I&&ne?void 0:b,q=re&&E!==b&&this.options.updateMissing;if(ne||U||q){if(this.logger.log(q?"updateKey":"missingKey",x,v,_,q?E:b),p){var Y=this.resolve(_,Rt(Rt({},a),{},{keySeparator:!1}));Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var te=[],se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(var pe=0;pe<se.length;pe++)te.push(se[pe]);else this.options.saveMissingTo==="all"?te=this.languageUtils.toResolveHierarchy(a.lng||this.language):te.push(a.lng||this.language);var Xe=function(De,Me,et){var Se=re&&et!==b?et:A;u.options.missingKeyHandler?u.options.missingKeyHandler(De,v,Me,Se,q,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(De,v,Me,Se,q,a),u.emit("missingKey",De,v,Me,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?te.forEach(function(Ue){u.pluralResolver.getSuffixes(Ue,a).forEach(function(De){Xe([Ue],_+De,a["defaultValue".concat(De)]||E)})}):Xe(te,_,E))}b=this.extendTranslation(b,i,a,y,l),ne&&b===_&&this.options.appendNamespaceToMissingKey&&(b="".concat(v,":").concat(_)),(ne||U)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(_):_,U?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var p=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,Rt(Rt({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Rt(Rt({},l),{interpolation:Rt(Rt({},this.options.interpolation),l.interpolation)}));var m=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),_;if(m){var h=i.match(this.interpolator.nestingRegexp);_=h&&h.length}var v=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(v=Rt(Rt({},this.options.interpolation.defaultVariables),v)),i=this.interpolator.interpolate(i,v,l.lng||this.language,l),m){var x=i.match(this.interpolator.nestingRegexp),w=x&&x.length;_<w&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,k=new Array(b),C=0;C<b;C++)k[C]=arguments[C];return d&&d[0]===k[0]&&!l.context?(p.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(a[0])),null):p.translate.apply(p,k.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var O=l.postProcess||this.options.postProcess,y=typeof O=="string"?[O]:O;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=m1.handle(y,i,a,this.options&&this.options.postProcessPassResolved?Rt({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,p,m,_;return typeof i=="string"&&(i=[i]),i.forEach(function(h){if(!a.isValidLookup(u)){var v=a.extractFromKey(h,l),x=v.key;d=x;var w=v.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var O=l.count!==void 0&&typeof l.count!="string",y=O&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",k=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(C){a.isValidLookup(u)||(_=C,!qg["".concat(k[0],"-").concat(C)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(_)&&(qg["".concat(k[0],"-").concat(C)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(k.join(", "),`" won't get resolved as namespace "`).concat(_,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(function(z){if(!a.isValidLookup(u)){m=z;var N=[x];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(N,x,z,C,l);else{var M;O&&(M=a.pluralResolver.getSuffix(z,l.count,l));var F="".concat(a.options.pluralSeparator,"zero");if(O&&(N.push(x+M),y&&N.push(x+F)),b){var H="".concat(x).concat(a.options.contextSeparator).concat(l.context);N.push(H),O&&(N.push(H+M),y&&N.push(H+F))}}for(var j;j=N.pop();)a.isValidLookup(u)||(p=j,u=a.getResource(z,C,j,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:p,usedLng:m,usedNS:_}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(Xr);function kd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Gg=function(){function e(t){Bn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Wn.create("languageUtils")}return An(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=kd(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=kd(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=kd(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(p){p&&(i.isSupportedCode(p)?l.push(p):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(p)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),dE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],fE={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},pE=["v1","v2","v3"],Qg={zero:0,one:1,two:2,few:3,many:4,other:5};function hE(){var e={};return dE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:fE[t.fc]}})}),e}var mE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Bn(this,e),this.languageUtils=t,this.options=n,this.logger=Wn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=hE()}return An(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return Qg[l]-Qg[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!pE.includes(this.options.compatibilityJSON)}}]),e}();function Xg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var _E=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bn(this,e),this.logger=Wn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return An(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:rE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Xo(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Xo(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Xo(r.nestingPrefix):r.nestingPrefixEscaped||Xo("$t("),this.nestingSuffix=r.nestingSuffix?Xo(r.nestingSuffix):r.nestingSuffixEscaped||Xo(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,p,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function _(O){return O.replace(/\$/g,"$$$$")}var h=function(y){if(y.indexOf(l.formatSeparator)<0){var b=Zg(r,m,y);return l.alwaysFormat?l.format(b,void 0,i,yn(yn(yn({},a),r),{},{interpolationkey:y})):b}var k=y.split(l.formatSeparator),C=k.shift().trim(),z=k.join(l.formatSeparator).trim();return l.format(Zg(r,m,C),z,i,yn(yn(yn({},a),r),{},{interpolationkey:C}))};this.resetRegExp();var v=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,x=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(y){return _(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?_(l.escape(y)):_(y)}}];return w.forEach(function(O){for(p=0;u=O.regex.exec(n);){var y=u[1].trim();if(d=h(y),d===void 0)if(typeof v=="function"){var b=v(n,u,a);d=typeof b=="string"?b:""}else if(a&&a.hasOwnProperty(y))d="";else if(x){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=Hg(d));var k=O.safeValue(d);if(n=n.replace(u[0],k),x?(O.regex.lastIndex+=d.length,O.regex.lastIndex-=u[0].length):O.regex.lastIndex=0,p++,p>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function p(v,x){var w=this.nestingOptionsSeparator;if(v.indexOf(w)<0)return v;var O=v.split(new RegExp("".concat(w,"[ ]*{"))),y="{".concat(O[1]);v=O[0],y=this.interpolate(y,d);var b=y.match(/'/g),k=y.match(/"/g);(b&&b.length%2===0&&!k||k.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),x&&(d=yn(yn({},x),d))}catch(C){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),C),"".concat(v).concat(w).concat(y)}return delete d.defaultValue,v}for(;l=this.nestingRegexp.exec(n);){var m=[];d=yn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var _=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var h=l[1].split(this.formatSeparator).map(function(v){return v.trim()});l[1]=h.shift(),m=h,_=!0}if(u=r(p.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=Hg(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),_&&(u=m.reduce(function(v,x){return i.format(v,x,a.lng,yn(yn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function Yg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gE(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=XP(u),p=d[0],m=d.slice(1),_=m.join(":").trim().replace(/^'+|'+$/g,"");n[p.trim()]||(n[p.trim()]=_),_==="false"&&(n[p.trim()]=!1),_==="true"&&(n[p.trim()]=!0),isNaN(_)||(n[p.trim()]=parseInt(_,10))}})}}return{formatName:t,formatOptions:n}}function Yo(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var vE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bn(this,e),this.logger=Wn.create("formatter"),this.options=t,this.formats={number:Yo(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:Yo(function(n,r){var i=new Intl.NumberFormat(n,Sr(Sr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:Yo(function(n,r){var i=new Intl.DateTimeFormat(n,Sr({},r));return function(a){return i.format(a)}}),relativetime:Yo(function(n,r){var i=new Intl.RelativeTimeFormat(n,Sr({},r));return function(a){return i.format(a,r.range||"day")}}),list:Yo(function(n,r){var i=new Intl.ListFormat(n,Sr({},r));return function(a){return i.format(a)}})},this.init(t)}return An(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=Yo(r)}},{key:"format",value:function(n,r,i,a){var l=this,u=r.split(this.formatSeparator),d=u.reduce(function(p,m){var _=gE(m),h=_.formatName,v=_.formatOptions;if(l.formats[h]){var x=p;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},O=w.locale||w.lng||a.locale||a.lng||i;x=l.formats[h](p,O,Sr(Sr(Sr({},v),a),w))}catch(y){l.logger.warn(y)}return x}else l.logger.warn("there was no format function for ".concat(h));return p},n);return d}}]),e}();function Jg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ev(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yE(e){var t=bE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return ps(this,i)}}function bE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var wE=function(e){cc(n,e);var t=yE(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Bn(this,n),l=t.call(this),dc&&Xr.call(Ur(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Wn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return An(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,p={},m={},_={},h={};return i.forEach(function(v){var x=!0;a.forEach(function(w){var O="".concat(v,"|").concat(w);!l.reload&&d.store.hasResourceBundle(v,w)?d.state[O]=2:d.state[O]<0||(d.state[O]===1?m[O]===void 0&&(m[O]=!0):(d.state[O]=1,x=!1,m[O]===void 0&&(m[O]=!0),p[O]===void 0&&(p[O]=!0),h[w]===void 0&&(h[w]=!0)))}),x||(_[v]=!0)}),(Object.keys(p).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(p),pending:Object.keys(m),toLoadLanguages:Object.keys(_),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],p=u[1];a&&this.emit("failedLoading",d,p,a),l&&this.store.addResourceBundle(d,p,l),this.state[i]=a?-1:2;var m={};this.queue.forEach(function(_){tE(_.loaded,[d],p),xE(_,i),a&&_.errors.push(a),_.pendingCount===0&&!_.done&&(Object.keys(_.loaded).forEach(function(h){m[h]||(m[h]={});var v=_.loaded[h];v.length&&v.forEach(function(x){m[h][x]===void 0&&(m[h][x]=!0)})}),_.done=!0,_.errors.length?_.callback(_.errors):_.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(_){return!_.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!i.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:p,callback:m});return}this.readingCalls++;var _=function(w,O){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(w&&O&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,p*2,m)},p);return}m(w,O)},h=this.backend[l].bind(this.backend);if(h.length===2){try{var v=h(i,a);v&&typeof v.then=="function"?v.then(function(x){return _(null,x)}).catch(_):_(null,v)}catch(x){_(x)}return}return h(i,a,_)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var p=this.queueLoad(i,a,u,d);if(!p.toLoad.length)return p.pending.length||d(),null;p.toLoad.forEach(function(m){l.loadOne(m)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],p=u[1];this.read(d,p,"read",void 0,void 0,function(m,_){m&&a.logger.warn("".concat(l,"loading namespace ").concat(p," for language ").concat(d," failed"),m),!m&&_&&a.logger.log("".concat(l,"loaded namespace ").concat(p," for language ").concat(d),_),a.loaded(i,m,_)})}},{key:"saveMissing",value:function(i,a,l,u,d){var p=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var _=ev(ev({},p),{},{isUpdate:d}),h=this.backend.create.bind(this.backend);if(h.length<6)try{var v;h.length===5?v=h(i,a,l,u,_):v=h(i,a,l,u),v&&typeof v.then=="function"?v.then(function(x){return m(null,x)}).catch(m):m(null,v)}catch(x){m(x)}else h(i,a,l,u,m,_)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(Xr);function tv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Tn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Tn(t[2])==="object"||Tn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function nv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function rv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SE(e){var t=kE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return ps(this,i)}}function kE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rl(){}function CE(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var uu=function(e){cc(n,e);var t=SE(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Bn(this,n),r=t.call(this),dc&&Xr.call(Ur(r)),r.options=nv(i),r.services={},r.logger=Wn,r.modules={external:[]},CE(Ur(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),ps(r,Ur(r));setTimeout(function(){r.init(i,a)},0)}return r}return An(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=tv();this.options=$n($n($n({},u),this.options),nv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=$n($n({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Wn.init(d(this.modules.logger),this.options):Wn.init(null,this.options);var p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=vE);var m=new Gg(this.options);this.store=new lE(this.options.resources,this.options);var _=this.services;_.logger=Wn,_.resourceStore=this.store,_.languageUtils=m,_.pluralResolver=new mE(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(_.formatter=d(p),_.formatter.init(_,this.options),this.options.interpolation.format=_.formatter.format.bind(_.formatter)),_.interpolator=new _E(this.options),_.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},_.backendConnector=new wE(d(this.modules.backend),_.resourceStore,_,this.options),_.backendConnector.on("*",function(y){for(var b=arguments.length,k=new Array(b>1?b-1:0),C=1;C<b;C++)k[C-1]=arguments[C];i.emit.apply(i,[y].concat(k))}),this.modules.languageDetector&&(_.languageDetector=d(this.modules.languageDetector),_.languageDetector.init&&_.languageDetector.init(_,this.options.detection,this.options)),this.modules.i18nFormat&&(_.i18nFormat=d(this.modules.i18nFormat),_.i18nFormat.init&&_.i18nFormat.init(this)),this.translator=new Kg(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,k=new Array(b>1?b-1:0),C=1;C<b;C++)k[C-1]=arguments[C];i.emit.apply(i,[y].concat(k))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=rl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var x=["addResource","addResources","addResourceBundle","removeResourceBundle"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var w=da(),O=function(){var b=function(C,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),w.resolve(z),l(C,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?O():setTimeout(O,0),w}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rl,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var p=[],m=function(v){if(v){var x=a.services.languageUtils.toResolveHierarchy(v);x.forEach(function(w){p.indexOf(w)<0&&p.push(w)})}};if(d)m(d);else{var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.forEach(function(h){return m(h)})}this.options.preload&&this.options.preload.forEach(function(h){return m(h)}),this.services.backendConnector.load(p,this.options.ns,function(h){!h&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(h)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=da();return i||(i=this.languages),a||(a=this.options.ns),l||(l=rl),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&m1.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=da();this.emit("languageChanging",i);var d=function(h){l.language=h,l.languages=l.services.languageUtils.toResolveHierarchy(h),l.resolvedLanguage=void 0,l.setResolvedLanguage(h)},p=function(h,v){v?(d(v),l.translator.changeLanguage(v),l.isLanguageChangingTo=void 0,l.emit("languageChanged",v),l.logger.log("languageChanged",v)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(h,function(){return l.t.apply(l,arguments)})},m=function(h){!i&&!h&&l.services.languageDetector&&(h=[]);var v=typeof h=="string"?h:l.services.languageUtils.getBestMatchFromCodes(h);v&&(l.language||d(v),l.translator.language||l.translator.changeLanguage(v),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(v)),l.loadResources(v,function(x){p(x,v)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function p(m,_){var h;if(Tn(_)!=="object"){for(var v=arguments.length,x=new Array(v>2?v-2:0),w=2;w<v;w++)x[w-2]=arguments[w];h=u.options.overloadTranslationOptionHandler([m,_].concat(x))}else h=$n({},_);h.lng=h.lng||p.lng,h.lngs=h.lngs||p.lngs,h.ns=h.ns||p.ns,h.keyPrefix=h.keyPrefix||l||p.keyPrefix;var O=u.options.keySeparator||".",y;return h.keyPrefix&&Array.isArray(m)?y=m.map(function(b){return"".concat(h.keyPrefix).concat(O).concat(b)}):y=h.keyPrefix?"".concat(h.keyPrefix).concat(O).concat(m):m,u.t(y,h)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,p=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var m=function(v,x){var w=a.services.backendConnector.state["".concat(v,"|").concat(x)];return w===-1||w===2};if(l.precheck){var _=l.precheck(this,m);if(_!==void 0)return _}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(u,i)&&(!d||m(p,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=da();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=da();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(p){return u.indexOf(p)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(p){l.resolve(),a&&a(p)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new Gg(tv());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rl,u=$n($n($n({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var p=["store","services","language"];return p.forEach(function(m){d[m]=i[m]}),d.services=$n({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new Kg(d.services,d.options),d.translator.on("*",function(m){for(var _=arguments.length,h=new Array(_>1?_-1:0),v=1;v<_;v++)h[v-1]=arguments[v];d.emit.apply(d,[m].concat(h))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(Xr);Rn(uu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new uu(e,t)});var zt=uu.createInstance();zt.createInstance=uu.createInstance;zt.createInstance;zt.dir;zt.init;zt.loadResources;zt.reloadResources;var PE=zt.use;zt.changeLanguage;zt.getFixedT;var Cd=zt.t;zt.exists;zt.setDefaultNamespace;zt.hasLoadedNamespace;zt.loadNamespaces;zt.loadLanguages;const ov=()=>Sn("div",{children:[ge("h1",{children:"Det skjedde en feil"}),ge("p",{children:ge("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),EE="Base",OE="Components",TE="[object Object]",zE="[object Object]",LE="1.5rem",RE="1.875rem",BE="2.25rem",AE="3rem",IE="3.75rem",NE="#e6eff8",DE="#d1f4e1",ME="#fffbe6",FE="#e6eff8",jE="#d1f4e1",$E="#fffbe6",HE="1.5rem",UE="1.75rem",ZE="2.25rem",WE="1rem",VE="1.125rem",qE="1.5rem",KE="6rem",GE="1.5rem",QE="2.25rem",XE="0.75rem",YE="0.75rem",JE="0.375rem",eO="6.688rem",tO="4rem",_1="2.25rem",g1="3.75rem",nO="Altinn-DIN",rO="Regular",oO=1.5,iO="1rem",aO="3%",sO=0,lO="none",uO="none",cO="bold",dO="medium",fO="medium",pO="#d2d5d8",hO="#d2d5d8",mO="0.75rem",_O="1.5rem",gO="0.25rem",vO="0.5rem",yO=.75,bO="1.5rem",xO="1.5rem",wO="medium",SO="1rem",kO="1.125rem",CO="1px",PO="0.5rem",EO="0.75rem",OO="1.125rem",TO="1.5rem",zO="1.125rem",LO="1.5rem",RO="#1e2b3c",BO="#0062ba",AO="#0062ba",IO="#b3253a",NO="#ffffff",DO="#e6eff8",MO="#0062ba",FO="#ffffff",jO="#1e2b3c",$O="#0062ba",HO="#1e2b3c",UO="#1e2b3c",ZO="2px",WO="2px",VO="0.875rem",qO="1rem",KO="0.75rem",GO="1.125rem",QO="1.5rem",XO="1.5rem",YO="#1e2b3c",JO="0.5rem",eT="0.375rem",tT="2px",nT="#1e2b3c",rT="#0062ba",oT="#b3253a",iT="#ffffff",aT="#ffffff",sT="#ffffff",lT="#1e2b3c",uT="0.75rem",cT="0.375rem",dT="6.25rem",fT="9.375rem",pT="12.5rem",hT="18.75rem",mT="25rem",_T="1rem",gT="1.5rem",vT="2.25rem",yT="0.563rem",bT="1.125rem",xT="1rem",wT="100%",ST="auto",kT="2px",CT="#0062ba",PT="#ffffff",ET="#ffffff",OT="#1e2b3c",TT="#0062ba",zT="1.5rem",LT="0.125rem",RT="0.25rem",BT="2.25rem",AT="1.4rem",IT="1.5rem",NT="0.875rem",DT="1.125rem",MT="0.688rem",FT="1px",jT="#0062ba",$T="#004e95",HT="#00315d",UT="#ffffff",ZT="#118849",WT="#0c6536",VT="#084826",qT="#e02e49",KT="#b3253a",GT="#861c2c",QT="0.5rem",XT="0.5rem",YT="0.5rem",JT="1.125rem",e5="2.25rem",t5="3rem",n5="0.375rem",r5="0.563rem",o5="0.563rem",i5="#0062ba",a5="#ffffff",s5="#e6eff8",l5="#004e95",u5="#0062ba",c5="#ffffff",d5="#0062ba",f5="#004e95",p5="#ffffff",h5="#e6eff8",m5="#004e95",_5="1px",g5="2.25rem",v5="3rem",y5="3.75rem",b5="1.5rem",x5="1.875rem",w5="2.5rem",S5="#1e2b3c",k5="#0062ba",C5="#ffffff",P5="#ffffff",E5="#ffffff",O5="#b3253a",T5="0.75rem",z5="0.375rem",L5="2px",R5="4px",B5="#fff4b4",A5="#fff4b4",I5="#d1f4e1",N5="#d1f4e1",D5="2.25rem",M5="1rem",F5="1.125rem",j5="0.375rem",$5="#b3253a",H5="0.875rem",U5="1px",Z5="2px",W5=.375,V5=.75,q5=1.5,K5=2.25,G5=3,Q5=3.75,X5=4.5,Y5=5.25,J5=6,ez=12,tz="3px",nz="2px",rz="2.25rem",oz="0.75rem",iz="0.875rem",az="1rem",sz="1rem",lz="1.125rem",uz="1rem",cz="1.125rem",dz="1.25rem",fz="1.125rem",pz="1.25rem",hz="1.5rem",mz="1.25rem",_z="1.5rem",gz="1.75rem",vz="1.5rem",yz="1.75rem",bz="2.25rem",xz="1.75rem",wz="2.25rem",Sz="2.75rem",kz="1.75rem",Cz="2.25rem",Pz="2.75rem",Ez="1.5rem",Oz="1.75rem",Tz="2.25rem",zz="1.25rem",Lz="1.5rem",Rz="1.75rem",Bz="1.125rem",Az="1.25rem",Iz="1.5rem",Nz="1rem",Dz="1.125rem",Mz="1.25rem",Fz="0.875rem",jz="1rem",$z="1.125rem",Hz="1.5rem",Uz="1rem",Zz="1rem",Wz="1.125rem",Vz="1rem",qz="1.125rem",Kz="0.875rem",Gz="1.125rem",Qz="1.25rem",Xz="1.25rem",Yz="1.5rem",Jz="Altinn-DIN",eL="Altinn-DIN",tL="Altinn-DIN",nL="Altinn-DIN",rL="Altinn-DIN",oL="0px",v1="540px",iL="768px",aL="960px",sL="1200px",lL="1600px",uL="Altinn-DIN",cL="Regular",dL=1.5,fL="1rem",pL="0.3px",hL=0,mL="none",_L="none",gL="0.75rem",vL="1.5rem",yL="2.25rem",bL="3rem",xL="3.75rem",wL="4.5rem",SL="5.25rem",kL="6rem",CL="7.5rem",PL="12rem",EL="30%",OL="#f4f5f6",TL="#e9eaec",zL="#d2d5d8",LL="#bcbfc5",RL="#a5aab1",BL="#68707c",AL="#4b5563",IL="#1e2b3c",NL="#141e29",DL="#ffffff",ML="#000000",FL="#f9d5db",jL="#f3abb6",$L="#ec8292",HL="#e6586d",UL="#e02e49",ZL="#b3253a",WL="#861c2c",VL="#5a121d",qL="#480e17",KL="#ffe8cd",GL="#ffd19b",QL="#ffba6a",XL="#ffa338",YL="#ff8c06",JL="#cc7005",eR="#995404",tR="#663802",nR="#522d02",rR="#fffbe6",oR="#fff4b4",iR="#ffed83",aR="#ffe551",sR="#ffda06",lR="#e6c405",uR="#ccae05",cR="#998304",dR="#665702",fR="#e8faf0",pR="#d1f4e1",hR="#8be4b5",mR="#5dd997",_R="#2ece7a",gR="#15b560",vR="#118849",yR="#0c6536",bR="#084826",xR="#e6eff8",wR="#b3d0ea",SR="#80b1dd",kR="#66a1d6",CR="#3381c8",PR="#1a72c1",ER="#0062ba",OR="#004e95",TR="#00315d",zR="#f5e8f2",LR="#e0b9d8",RR="#cc8bbf",BR="#b75da5",AR="#a22e8b",IR="#98177e",NR="#7a1265",DR="#5b0e4c",MR="#490b3d",FR="#ffffff",jR="#f4f5f6",$R="#ffffff",HR="#f4f5f6",UR="#e9eaec",ZR="#e6eff8",WR="#1e2b3c",VR="#e6eff8",qR="#0062ba",KR="#004e95",GR="#00315d",QR="#d1f4e1",XR="#118849",YR="#0c6536",JR="#084826",eB="#fffbe6",tB="#f9d5db",nB="#e02e49",rB="#b3253a",oB="#861c2c",iB="#e6eff8",aB="#004e95",sB="#e6eff8",lB="#0062ba",uB="#004e95",cB="#00315d",dB="#68707c",fB="#d2d5d8",pB="#1e2b3c",hB="#bcbfc5",mB="#0c6536",_B="#cc7005",gB="#b3253a",vB="#98177e",yB="2px",bB="2px",xB="#0c6536",wB="#ffffff",SB="#1e2b3c",kB="#68707c",CB="#ffffff",PB="#0062ba",EB="#ffffff",OB="#995404",TB="#663802",zB="#cc7005",LB="#b3253a",RB="#ffffff",BB="#7a1265",AB="#feefef",IB="#fddfe0",NB="#fbbfc1",DB="#f89fa1",MB="#f67f82",FB="#f45f63",jB="#dc5659",$B="#c34c4f",HB="#fcf7e9",UB="#faeec2",ZB="#f5dda6",WB="#efcc79",VB="#eabb4d",qB="#e5aa20",KB="#ce991d",GB="#b7881a",QB="#e9f5ff",XB="#d2eafd",YB="#a5d6fb",JB="#78c1f9",e3="#4badf7",t3="#1e98f5",n3="#1b88dd",r3="#156aac",o3=Object.freeze(Object.defineProperty({__proto__:null,Altinn:zE,BorderWidthStandard:Z5,BorderWidthThin:U5,BrandDefaultFirst100:AB,BrandDefaultFirst200:IB,BrandDefaultFirst300:NB,BrandDefaultFirst400:DB,BrandDefaultFirst500:MB,BrandDefaultFirst600:FB,BrandDefaultFirst700:jB,BrandDefaultFirst800:$B,BrandDefaultSecond100:HB,BrandDefaultSecond200:UB,BrandDefaultSecond300:ZB,BrandDefaultSecond400:WB,BrandDefaultSecond500:VB,BrandDefaultSecond600:qB,BrandDefaultSecond700:KB,BrandDefaultSecond800:GB,BrandDefaultThird100:QB,BrandDefaultThird200:XB,BrandDefaultThird300:YB,BrandDefaultThird400:JB,BrandDefaultThird500:e3,BrandDefaultThird600:t3,BrandDefaultThird700:n3,BrandDefaultThird800:r3,BreakpointsLg:aL,BreakpointsMd:iL,BreakpointsSm:v1,BreakpointsXl:sL,BreakpointsXs:oL,BreakpointsXxl:lL,ColorsBlack:ML,ColorsBlue100:xR,ColorsBlue200:wR,ColorsBlue300:SR,ColorsBlue400:kR,ColorsBlue500:CR,ColorsBlue600:PR,ColorsBlue700:ER,ColorsBlue800:OR,ColorsBlue900:TR,ColorsGreen100:fR,ColorsGreen200:pR,ColorsGreen300:hR,ColorsGreen400:mR,ColorsGreen500:_R,ColorsGreen600:gR,ColorsGreen700:vR,ColorsGreen800:yR,ColorsGreen900:bR,ColorsGrey100:OL,ColorsGrey200:TL,ColorsGrey300:zL,ColorsGrey400:LL,ColorsGrey500:RL,ColorsGrey600:BL,ColorsGrey700:AL,ColorsGrey800:IL,ColorsGrey900:NL,ColorsOrange100:KL,ColorsOrange200:GL,ColorsOrange300:QL,ColorsOrange400:XL,ColorsOrange500:YL,ColorsOrange600:JL,ColorsOrange700:eR,ColorsOrange800:tR,ColorsOrange900:nR,ColorsPurple100:zR,ColorsPurple200:LR,ColorsPurple300:RR,ColorsPurple400:BR,ColorsPurple500:AR,ColorsPurple600:IR,ColorsPurple700:NR,ColorsPurple800:DR,ColorsPurple900:MR,ColorsRed100:FL,ColorsRed200:jL,ColorsRed300:$L,ColorsRed400:HL,ColorsRed500:UL,ColorsRed600:ZL,ColorsRed700:WL,ColorsRed800:VL,ColorsRed900:qL,ColorsWhite:DL,ColorsYellow100:rR,ColorsYellow200:oR,ColorsYellow300:iR,ColorsYellow400:aR,ColorsYellow500:sR,ColorsYellow600:lR,ColorsYellow700:uR,ColorsYellow800:cR,ColorsYellow900:dR,ComponentButtonBorderWidthDefault:_5,ComponentButtonFilledColorTextAll:UT,ComponentButtonFilledDangerColorBackgroundDefault:qT,ComponentButtonFilledDangerColorBackgroundHover:KT,ComponentButtonFilledDangerColorBackgroundPressed:GT,ComponentButtonFilledPrimaryColorBackgroundDefault:jT,ComponentButtonFilledPrimaryColorBackgroundHover:$T,ComponentButtonFilledPrimaryColorBackgroundPressed:HT,ComponentButtonFilledSuccessColorBackgroundDefault:ZT,ComponentButtonFilledSuccessColorBackgroundHover:WT,ComponentButtonFilledSuccessColorBackgroundPressed:VT,ComponentButtonOutlinePrimaryColorBackgroundDefault:p5,ComponentButtonOutlinePrimaryColorBackgroundHover:h5,ComponentButtonOutlinePrimaryColorBackgroundPressed:m5,ComponentButtonOutlinePrimaryColorBorderDefault:d5,ComponentButtonOutlinePrimaryColorBorderHover:f5,ComponentButtonOutlinePrimaryColorTextDefault:u5,ComponentButtonOutlinePrimaryColorTextPressed:c5,ComponentButtonQuietPrimaryColorBackgroundHover:s5,ComponentButtonQuietPrimaryColorBackgroundPressed:l5,ComponentButtonQuietPrimaryColorTextDefault:i5,ComponentButtonQuietPrimaryColorTextPressed:a5,ComponentButtonQuietSpacePaddingXLarge:o5,ComponentButtonQuietSpacePaddingXMedium:r5,ComponentButtonQuietSpacePaddingXSmall:n5,ComponentButtonSizeHeightLarge:y5,ComponentButtonSizeHeightMedium:v5,ComponentButtonSizeHeightSmall:g5,ComponentButtonSizeIconLarge:w5,ComponentButtonSizeIconMedium:x5,ComponentButtonSizeIconSmall:b5,ComponentButtonSpaceGapLarge:YT,ComponentButtonSpaceGapMedium:XT,ComponentButtonSpaceGapSmall:QT,ComponentButtonSpacePaddingXLarge:t5,ComponentButtonSpacePaddingXMedium:e5,ComponentButtonSpacePaddingXSmall:JT,ComponentCheckboxBorderWidthSmall:WO,ComponentCheckboxBorderWidthXsmall:ZO,ComponentCheckboxColorBackgroundChecked:MO,ComponentCheckboxColorBackgroundDefault:NO,ComponentCheckboxColorBackgroundError:FO,ComponentCheckboxColorBackgroundHover:DO,ComponentCheckboxColorBorderChecked:AO,ComponentCheckboxColorBorderDefault:RO,ComponentCheckboxColorBorderError:IO,ComponentCheckboxColorBorderHover:BO,ComponentCheckboxColorTextChecked:HO,ComponentCheckboxColorTextDefault:jO,ComponentCheckboxColorTextError:UO,ComponentCheckboxColorTextHover:$O,ComponentCheckboxFontSizeSm:qO,ComponentCheckboxFontSizeXs:VO,ComponentCheckboxGroupSpaceGapXSmall:vT,ComponentCheckboxGroupSpaceGapXXsmall:gT,ComponentCheckboxGroupSpaceGapYSmall:bT,ComponentCheckboxGroupSpaceGapYXsmall:yT,ComponentCheckboxSizeHeightSmall:LO,ComponentCheckboxSizeHeightXsmall:zO,ComponentCheckboxSizeWidthSmall:TO,ComponentCheckboxSizeWidthXsmall:OO,ComponentCheckboxSpaceGapSmall:EO,ComponentCheckboxSpaceGapXsmall:PO,ComponentErrorMessageColorText:$5,ComponentErrorMessageFontSizeXs:H5,ComponentErrorMessageSpacePaddingTop:j5,ComponentExpandableRowBorderWidthDefault:CO,ComponentExpandableRowColorBorderBottomDefault:hO,ComponentExpandableRowColorBorderTopDefault:pO,ComponentExpandableRowFontSizeHeaderBreakpointMd:kO,ComponentExpandableRowFontSizeHeaderBreakpointSm:SO,ComponentExpandableRowFontWeightHeader:wO,ComponentExpandableRowSizeIconXs:xO,ComponentExpandableRowSpaceGapTitleMd:bO,ComponentExpandableRowSpaceGapTitleXs:yO,ComponentExpandableRowSpacePaddingBottomXs:vO,ComponentExpandableRowSpacePaddingTopXs:gO,ComponentExpandableRowSpacePaddingXMd:_O,ComponentExpandableRowSpacePaddingXXs:mO,ComponentFieldDescriptionColorTextDefault:YO,ComponentFieldDescriptionSpaceTopSmall:JO,ComponentFieldDescriptionSpaceTopXsmall:eT,ComponentFieldsetSpaceGapYLarge:XO,ComponentFieldsetSpaceGapYMedium:QO,ComponentFieldsetSpaceGapYSmall:GO,ComponentFieldsetSpaceGapYXsmall:KO,ComponentIconButtonBorderWidthDefault:FT,ComponentIconButtonSizeLargeCircle:BT,ComponentIconButtonSizeLargeIcon:AT,ComponentIconButtonSizeMediumCircle:IT,ComponentIconButtonSizeMediumIcon:NT,ComponentIconButtonSizeSmallCircle:DT,ComponentIconButtonSizeSmallIcon:MT,ComponentIconSizeLg:AE,ComponentIconSizeMd:BE,ComponentIconSizeSm:RE,ComponentIconSizeXl:IE,ComponentIconSizeXs:LE,ComponentInputBorderWidthDefault:L5,ComponentInputBorderWidthFocus:R5,ComponentInputColorBackgroundDefault:C5,ComponentInputColorBackgroundFocus:E5,ComponentInputColorBackgroundHover:P5,ComponentInputColorBorderDefault:S5,ComponentInputColorBorderHover:k5,ComponentInputErrorColorBorderDefault:O5,ComponentInputFontSizeMd:F5,ComponentInputFontSizeSm:M5,ComponentInputReadOnlyConfirmColorBackgroundDefault:I5,ComponentInputReadOnlyConfirmColorBorderDefault:N5,ComponentInputReadOnlyInfoColorBackgroundDefault:A5,ComponentInputReadOnlyInfoColorBorderDefault:B5,ComponentInputSizeMinHeightDefault:D5,ComponentInputSpacePaddingX:T5,ComponentInputSpacePaddingY:z5,ComponentLabelFontWeightDefault:fO,ComponentLegendFontWeightDefault:dO,ComponentPanelColorArrowDefault:FE,ComponentPanelColorArrowSuccess:jE,ComponentPanelColorArrowWarning:$E,ComponentPanelColorBackgroundDefault:NE,ComponentPanelColorBackgroundSuccess:DE,ComponentPanelColorBackgroundWarning:ME,ComponentPanelFontSizeBodyBreakpointMd:VE,ComponentPanelFontSizeBodyBreakpointSm:WE,ComponentPanelFontSizeHeaderBreakpointLg:ZE,ComponentPanelFontSizeHeaderBreakpointMd:UE,ComponentPanelFontSizeHeaderBreakpointSm:HE,ComponentPanelFontWeightHeading:cO,ComponentPanelSizeIconMd:g1,ComponentPanelSizeIconXs:_1,ComponentPanelSpaceArrowLeftMd:eO,ComponentPanelSpaceArrowLeftXs:tO,ComponentPanelSpaceGapMd:YE,ComponentPanelSpaceGapXs:XE,ComponentPanelSpacePaddingXMd:KE,ComponentPanelSpacePaddingXXs:qE,ComponentPanelSpacePaddingYMd:QE,ComponentPanelSpacePaddingYXs:GE,ComponentPanelSpaceTextGroupGapXs:JE,ComponentPanelTypographyDefaultFontFamily:nO,ComponentPanelTypographyDefaultFontSize:iO,ComponentPanelTypographyDefaultFontWeight:rO,ComponentPanelTypographyDefaultLetterSpacing:aO,ComponentPanelTypographyDefaultLineHeight:oO,ComponentPanelTypographyDefaultParagraphSpacing:sO,ComponentPanelTypographyDefaultTextCase:uO,ComponentPanelTypographyDefaultTextDecoration:lO,ComponentTextareaBorderWidthNormal:tT,ComponentTextareaColorBackgroundDefault:iT,ComponentTextareaColorBackgroundFocus:sT,ComponentTextareaColorBackgroundHover:aT,ComponentTextareaColorBorderDefault:nT,ComponentTextareaColorBorderError:oT,ComponentTextareaColorBorderHover:rT,ComponentTextareaColorTextDefault:lT,ComponentTextareaFontSizeSm:_T,ComponentTextareaSizeMinHeightLarge:hT,ComponentTextareaSizeMinHeightMedium:pT,ComponentTextareaSizeMinHeightSmall:fT,ComponentTextareaSizeMinHeightXlarge:mT,ComponentTextareaSizeMinHeightXsmall:dT,ComponentTextareaSpacePaddingX:uT,ComponentTextareaSpacePaddingY:cT,ComponentToggleButtonBorderWidthInactive:kT,ComponentToggleButtonColorBackgroundActive:CT,ComponentToggleButtonColorBackgroundInactive:PT,ComponentToggleButtonColorBorderInactive:TT,ComponentToggleButtonColorTextActive:ET,ComponentToggleButtonColorTextInactive:OT,ComponentToggleButtonFontSizeSm:xT,ComponentToggleButtonSizeMinWidthMd:ST,ComponentToggleButtonSizeMinWidthSm:wT,ComponentToggleButtonSpacePaddingBottom:RT,ComponentToggleButtonSpacePaddingTop:LT,ComponentToggleButtonSpacePaddingX:zT,Felles:TE,FontFamilyBody:nL,FontFamilyDefault:Jz,FontFamilyHeading:eL,FontFamilyIngress:tL,FontFamilyLabel:rL,FontSize100:oz,FontSize200:iz,FontSize300:az,FontSize400BreakpointMd:lz,FontSize400BreakpointSm:sz,FontSize500BreakpointLg:dz,FontSize500BreakpointMd:cz,FontSize500BreakpointSm:uz,FontSize600BreakpointLg:hz,FontSize600BreakpointMd:pz,FontSize600BreakpointSm:fz,FontSize700BreakpointLg:gz,FontSize700BreakpointMd:_z,FontSize700BreakpointSm:mz,FontSize800BreakpointLg:bz,FontSize800BreakpointMd:yz,FontSize800BreakpointSm:vz,FontSize900BreakpointLg:Sz,FontSize900BreakpointMd:wz,FontSize900BreakpointSm:xz,FontSizeBodyLargeBreakpointMd:Wz,FontSizeBodyLargeBreakpointSm:Zz,FontSizeBodyMedium:Uz,FontSizeComponentSizeLg:Hz,FontSizeComponentSizeMd:$z,FontSizeComponentSizeSm:jz,FontSizeComponentSizeXs:Fz,FontSizeDetailDefault:Kz,FontSizeHeadingH1BreakpointLg:Pz,FontSizeHeadingH1BreakpointMd:Cz,FontSizeHeadingH1BreakpointSm:kz,FontSizeHeadingH2BreakpointLg:Tz,FontSizeHeadingH2BreakpointMd:Oz,FontSizeHeadingH2BreakpointSm:Ez,FontSizeHeadingH3BreakpointLg:Rz,FontSizeHeadingH3BreakpointMd:Lz,FontSizeHeadingH3BreakpointSm:zz,FontSizeHeadingH4BreakpointLg:Iz,FontSizeHeadingH4BreakpointMd:Az,FontSizeHeadingH4BreakpointSm:Bz,FontSizeHeadingH5BreakpointLg:Mz,FontSizeHeadingH5BreakpointMd:Dz,FontSizeHeadingH5BreakpointSm:Nz,FontSizeIngressMediumBreakpointMd:Yz,FontSizeIngressMediumBreakpointSm:Xz,FontSizeIngressSmallBreakpointMd:Qz,FontSizeIngressSmallBreakpointSm:Gz,FontSizeLabelSmallBreakpointMd:qz,FontSizeLabelSmallBreakpointSm:Vz,InteractiveComponentsBorderRadiusNormal:tz,InteractiveComponentsBorderWidthNormal:nz,OpacityDisabled:EL,ParagraphSpaceDefault:rz,SemanticBackgroundDefault:FR,SemanticBackgroundSubtle:jR,SemanticBorderActionActive:cB,SemanticBorderActionDefault:lB,SemanticBorderActionHover:uB,SemanticBorderActionSubtle:sB,SemanticBorderDangerDefault:gB,SemanticBorderInfoDefault:aB,SemanticBorderNeutralDefault:dB,SemanticBorderNeutralDivider:hB,SemanticBorderNeutralStrong:pB,SemanticBorderNeutralSubtle:fB,SemanticBorderSuccessDefault:mB,SemanticBorderWarningDefault:_B,SemanticSurfaceActionActive:GR,SemanticSurfaceActionDefault:qR,SemanticSurfaceActionHover:KR,SemanticSurfaceActionSubtle:VR,SemanticSurfaceDangerActive:oB,SemanticSurfaceDangerDefault:nB,SemanticSurfaceDangerHover:rB,SemanticSurfaceDangerSubtle:tB,SemanticSurfaceInfoSubtle:iB,SemanticSurfaceNeutralDefault:$R,SemanticSurfaceNeutralInverted:WR,SemanticSurfaceNeutralSelected:ZR,SemanticSurfaceNeutralSubtle:HR,SemanticSurfaceNeutralSubtleHover:UR,SemanticSurfaceSuccessActive:JR,SemanticSurfaceSuccessDefault:XR,SemanticSurfaceSuccessHover:YR,SemanticSurfaceSuccessSubtle:QR,SemanticSurfaceWarningSubtle:eB,SemanticTabFocusOutlineColor:vB,SemanticTabFocusOutlineOffset:yB,SemanticTabFocusOutlineWidth:bB,SemanticTextActionDefault:PB,SemanticTextActionOnAction:EB,SemanticTextDangerDefault:LB,SemanticTextDangerOnDanger:RB,SemanticTextNeutralDefault:SB,SemanticTextNeutralOnInverted:CB,SemanticTextNeutralSubtle:kB,SemanticTextSuccessDefault:xB,SemanticTextSuccessOnSuccess:wB,SemanticTextVisitedDefault:BB,SemanticTextWarningDefault:OB,SemanticTextWarningIconWarning:zB,SemanticTextWarningOnWarning:TB,SizeBase:gL,SizeX10:CL,SizeX16:PL,SizeX2:vL,SizeX3:yL,SizeX4:bL,SizeX5:xL,SizeX6:wL,SizeX7:SL,SizeX8:kL,SpaceBase:V5,SpaceHalf:W5,SpaceX16:ez,SpaceX2:q5,SpaceX3:K5,SpaceX4:G5,SpaceX5:Q5,SpaceX6:X5,SpaceX7:Y5,SpaceX8:J5,TokenSetOrder0:EE,TokenSetOrder1:OE,TypographyDefaultFontFamily:uL,TypographyDefaultFontSize:fL,TypographyDefaultFontWeight:cL,TypographyDefaultLetterSpacing:pL,TypographyDefaultLineHeight:dL,TypographyDefaultParagraphSpacing:hL,TypographyDefaultTextCase:_L,TypographyDefaultTextDecoration:mL},Symbol.toStringTag,{value:"Module"})),i3={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},a3={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},s3={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},l3={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},u3={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},c3={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},d3={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},f3={default:{value:"2.25rem",type:"paragraphSpacing"}},p3={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},h3={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},m3={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},_3={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},g3={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},v3={disabled:{value:"30%",type:"opacity"}},y3={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},b3={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},x3={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
AA 6.4 as bkdg for interaction blue`},200:{value:"#fddfe0",type:"color",description:`Light error color
AAA 11.4 on grey 800
AA 5.7 as bkdg for interaction blue`},300:{value:"#fbbfc1",type:"color",description:`AAA 9 on grey 800
AA 4.5 as bkdg for interaction blue`},400:{value:"#f89fa1",type:"color",description:`AAA 7.1 on grey 800
AA18 3.5 as bkdg for interaction blue`},500:{value:"#f67f82",type:"color",description:"AA 5.6 on grey 800"},600:{value:"#f45f63",type:"color",description:"AA 4.5 on grey 800"},700:{value:"#dc5659",type:"color",description:"AA18 3.7 on grey 800"},800:{value:"#c34c4f",type:"color",description:"AA 4.7 on white"}},second:{100:{value:"#fcf7e9",type:"color",description:`AAA 13.3 on grey 800
AA 6.7 as bkdg for interaction blue`},200:{value:"#faeec2",type:"color",description:`Light warning color
AAA 12.3 on grey 800
AA 1.1 as bkdg for interaction blue`},300:{value:"#f5dda6",type:"color",description:`AAA 10 on grey 800
AA 5.4 as bkdg for interaction blue`},400:{value:"#efcc79",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},500:{value:"#eabb4d",type:"color",description:`AAA 7.9 on grey 800
AA18 4 as bkdg for interaction blue`},600:{value:"#e5aa20",type:"color",description:`AA 6.8 on grey 800
AA18 3.4 as bkdg for interaction blue`},700:{value:"#ce991d",type:"color",description:"AA 5.5 on grey 800"},800:{value:"#b7881a",type:"color",description:`AA18 4.4 on grey 800
AA18 3.2 on white`}},third:{100:{value:"#e9f5ff",type:"color",description:`AAA 12.9 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#d2eafd",type:"color",description:`Light information color 
AAA 11.5 on grey 800
AA 5.8 as bkdg for interaction blue`},300:{value:"#a5d6fb",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},400:{value:"#78c1f9",type:"color",description:`AAA 7.3 on grey 800
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},y1={tokenSetOrder:i3,Felles:a3,Altinn:s3,component:l3,border_width:u3,space:c3,interactive_components:d3,paragraph_space:f3,font_size:p3,font_family:h3,breakpoints:m3,typography:_3,size:g3,opacity:v3,colors:y3,semantic:b3,brand:x3};var Jf={},w3={get exports(){return Jf},set exports(e){Jf=e}};/* @preserve
 * Leaflet 1.9.2, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(Jo,function(n){var r="1.9.2";function i(o){var s,c,f,g;for(c=1,f=arguments.length;c<f;c++){g=arguments[c];for(s in g)o[s]=g[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var f=c.call(arguments,2);return function(){return o.apply(s,f.length?f.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function p(o,s,c){var f,g,S,P;return P=function(){f=!1,g&&(S.apply(c,g),g=!1)},S=function(){f?g=arguments:(o.apply(c,arguments),setTimeout(P,s),f=!0)},S}function m(o,s,c){var f=s[1],g=s[0],S=f-g;return o===f&&c?o:((o-g)%S+S)%S+g}function _(){return!1}function h(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function v(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function x(o){return v(o).split(/\s+/)}function w(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function O(o,s,c){var f=[];for(var g in o)f.push(encodeURIComponent(c?g.toUpperCase():g)+"="+encodeURIComponent(o[g]));return(!s||s.indexOf("?")===-1?"?":"&")+f.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,f){var g=s[f];if(g===void 0)throw new Error("No value provided for variable "+c);return typeof g=="function"&&(g=g(s)),g})}var k=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function C(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var M=0;function F(o){var s=+new Date,c=Math.max(0,16-(s-M));return M=s+c,window.setTimeout(o,c)}var H=window.requestAnimationFrame||N("RequestAnimationFrame")||F,j=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function J(o,s,c){if(c&&H===F)o.call(s);else return H.call(window,l(o,s))}function ie(o){o&&j.call(window,o)}var fe={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:p,wrapNum:m,falseFn:_,formatNum:h,trim:v,splitWords:x,setOptions:w,getParamString:O,template:b,isArray:k,indexOf:C,emptyImageUrl:z,requestFn:H,cancelFn:j,requestAnimFrame:J,cancelAnimFrame:ie};function X(){}X.extend=function(o){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,f=a(c);f.constructor=s,s.prototype=f;for(var g in this)Object.prototype.hasOwnProperty.call(this,g)&&g!=="prototype"&&g!=="__super__"&&(s[g]=this[g]);return o.statics&&i(s,o.statics),o.includes&&(le(o.includes),i.apply(null,[f].concat(o.includes))),i(f,o),delete f.statics,delete f.includes,f.options&&(f.options=c.options?a(c.options):{},i(f.options,o.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,P=f._initHooks.length;S<P;S++)f._initHooks[S].call(this)}},s},X.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},X.mergeOptions=function(o){return i(this.prototype.options,o),this},X.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function le(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=k(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var U={on:function(o,s,c){if(typeof o=="object")for(var f in o)this._on(f,o[f],s);else{o=x(o);for(var g=0,S=o.length;g<S;g++)this._on(o[g],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var f in o)this._off(f,o[f],s);else{o=x(o);for(var g=arguments.length===1,S=0,P=o.length;S<P;S++)g?this._off(o[S]):this._off(o[S],s,c)}return this},_on:function(o,s,c,f){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var g={fn:s,ctx:c};f&&(g.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(g)}},_off:function(o,s,c){var f,g,S;if(this._events&&(f=this._events[o],!!f)){if(arguments.length===1){if(this._firingCount)for(g=0,S=f.length;g<S;g++)f[g].fn=_;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var P=this._listens(o,s,c);if(P!==!1){var B=f[P];this._firingCount&&(B.fn=_,this._events[o]=f=f.slice()),f.splice(P,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var f=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var g=this._events[o];if(g){this._firingCount=this._firingCount+1||1;for(var S=0,P=g.length;S<P;S++){var B=g[S],D=B.fn;B.once&&this.off(o,D,B.ctx),D.call(B.ctx||this,f)}this._firingCount--}}return c&&this._propagateEvent(f),this},listens:function(o,s,c,f){typeof o!="string"&&console.warn('"string" type argument expected');var g=s;typeof s!="function"&&(f=!!s,g=void 0,c=void 0);var S=this._events&&this._events[o];if(S&&S.length&&this._listens(o,g,c)!==!1)return!0;if(f){for(var P in this._eventParents)if(this._eventParents[P].listens(o,s,c,f))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var f=this._events[o]||[];if(!s)return!!f.length;c===this&&(c=void 0);for(var g=0,S=f.length;g<S;g++)if(f[g].fn===s&&f[g].ctx===c)return g;return!1},once:function(o,s,c){if(typeof o=="object")for(var f in o)this._on(f,o[f],s,!0);else{o=x(o);for(var g=0,S=o.length;g<S;g++)this._on(o[g],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};U.addEventListener=U.on,U.removeEventListener=U.clearAllEventListeners=U.off,U.addOneTimeEventListener=U.once,U.fireEvent=U.fire,U.hasEventListeners=U.listens;var ne=X.extend(U);function R(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var re=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};R.prototype={clone:function(){return new R(this.x,this.y)},add:function(o){return this.clone()._add(V(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(V(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new R(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new R(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=re(this.x),this.y=re(this.y),this},distanceTo:function(o){o=V(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=V(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=V(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+h(this.x)+", "+h(this.y)+")"}};function V(o,s,c){return o instanceof R?o:k(o)?new R(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new R(o.x,o.y):new R(o,s,c)}function E(o,s){if(o)for(var c=s?[o,s]:o,f=0,g=c.length;f<g;f++)this.extend(c[f])}E.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof R||typeof o[0]=="number"||"x"in o)s=c=V(o);else if(o=I(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return V((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return V(this.min.x,this.max.y)},getTopRight:function(){return V(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof R?o=V(o):o=I(o),o instanceof E?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=I(o);var s=this.min,c=this.max,f=o.min,g=o.max,S=g.x>=s.x&&f.x<=c.x,P=g.y>=s.y&&f.y<=c.y;return S&&P},overlaps:function(o){o=I(o);var s=this.min,c=this.max,f=o.min,g=o.max,S=g.x>s.x&&f.x<c.x,P=g.y>s.y&&f.y<c.y;return S&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,f=Math.abs(s.x-c.x)*o,g=Math.abs(s.y-c.y)*o;return I(V(s.x-f,s.y-g),V(c.x+f,c.y+g))},equals:function(o){return o?(o=I(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function I(o,s){return!o||o instanceof E?o:new E(o,s)}function A(o,s){if(o)for(var c=s?[o,s]:o,f=0,g=c.length;f<g;f++)this.extend(c[f])}A.prototype={extend:function(o){var s=this._southWest,c=this._northEast,f,g;if(o instanceof Y)f=o,g=o;else if(o instanceof A){if(f=o._southWest,g=o._northEast,!f||!g)return this}else return o?this.extend(te(o)||q(o)):this;return!s&&!c?(this._southWest=new Y(f.lat,f.lng),this._northEast=new Y(g.lat,g.lng)):(s.lat=Math.min(f.lat,s.lat),s.lng=Math.min(f.lng,s.lng),c.lat=Math.max(g.lat,c.lat),c.lng=Math.max(g.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,f=Math.abs(s.lat-c.lat)*o,g=Math.abs(s.lng-c.lng)*o;return new A(new Y(s.lat-f,s.lng-g),new Y(c.lat+f,c.lng+g))},getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof Y||"lat"in o?o=te(o):o=q(o);var s=this._southWest,c=this._northEast,f,g;return o instanceof A?(f=o.getSouthWest(),g=o.getNorthEast()):f=g=o,f.lat>=s.lat&&g.lat<=c.lat&&f.lng>=s.lng&&g.lng<=c.lng},intersects:function(o){o=q(o);var s=this._southWest,c=this._northEast,f=o.getSouthWest(),g=o.getNorthEast(),S=g.lat>=s.lat&&f.lat<=c.lat,P=g.lng>=s.lng&&f.lng<=c.lng;return S&&P},overlaps:function(o){o=q(o);var s=this._southWest,c=this._northEast,f=o.getSouthWest(),g=o.getNorthEast(),S=g.lat>s.lat&&f.lat<c.lat,P=g.lng>s.lng&&f.lng<c.lng;return S&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=q(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function q(o,s){return o instanceof A?o:new A(o,s)}function Y(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}Y.prototype={equals:function(o,s){if(!o)return!1;o=te(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+h(this.lat,o)+", "+h(this.lng,o)+")"},distanceTo:function(o){return pe.distance(this,te(o))},wrap:function(){return pe.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return q([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};function te(o,s,c){return o instanceof Y?o:k(o)&&typeof o[0]!="object"?o.length===3?new Y(o[0],o[1],o[2]):o.length===2?new Y(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new Y(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new Y(o,s,c)}var se={latLngToPoint:function(o,s){var c=this.projection.project(o),f=this.scale(s);return this.transformation._transform(c,f)},pointToLatLng:function(o,s){var c=this.scale(s),f=this.transformation.untransform(o,c);return this.projection.unproject(f)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),f=this.transformation.transform(s.min,c),g=this.transformation.transform(s.max,c);return new E(f,g)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?m(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?m(o.lat,this.wrapLat,!0):o.lat,f=o.alt;return new Y(c,s,f)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),f=s.lat-c.lat,g=s.lng-c.lng;if(f===0&&g===0)return o;var S=o.getSouthWest(),P=o.getNorthEast(),B=new Y(S.lat-f,S.lng-g),D=new Y(P.lat-f,P.lng-g);return new A(B,D)}},pe=i({},se,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,f=o.lat*c,g=s.lat*c,S=Math.sin((s.lat-o.lat)*c/2),P=Math.sin((s.lng-o.lng)*c/2),B=S*S+Math.cos(f)*Math.cos(g)*P*P,D=2*Math.atan2(Math.sqrt(B),Math.sqrt(1-B));return this.R*D}}),Xe=6378137,Ue={R:Xe,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,f=Math.max(Math.min(c,o.lat),-c),g=Math.sin(f*s);return new R(this.R*o.lng*s,this.R*Math.log((1+g)/(1-g))/2)},unproject:function(o){var s=180/Math.PI;return new Y((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Xe*Math.PI;return new E([-o,-o],[o,o])}()};function De(o,s,c,f){if(k(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=f}De.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new R((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Me(o,s,c,f){return new De(o,s,c,f)}var et=i({},pe,{code:"EPSG:3857",projection:Ue,transformation:function(){var o=.5/(Math.PI*Ue.R);return Me(o,.5,-o,.5)}()}),Se=i({},et,{code:"EPSG:900913"});function en(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Mt(o,s){var c="",f,g,S,P,B,D;for(f=0,S=o.length;f<S;f++){for(B=o[f],g=0,P=B.length;g<P;g++)D=B[g],c+=(g?"L":"M")+D.x+" "+D.y;c+=s?ce.svg?"z":"x":""}return c||"M0 0"}var Ne=document.documentElement.style,W="ActiveXObject"in window,G=W&&!document.addEventListener,ee="msLaunchUri"in navigator&&!("documentMode"in document),de=Nn("webkit"),ue=Nn("android"),Re=Nn("android 2")||Nn("android 3"),ke=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ye=ue&&Nn("Google")&&ke<537&&!("AudioNode"in window),be=!!window.opera,ze=!ee&&Nn("chrome"),Ze=Nn("gecko")&&!de&&!be&&!W,Lt=!ze&&Nn("safari"),wt=Nn("phantom"),Ft="OTransition"in Ne,Yn=navigator.platform.indexOf("Win")===0,Jn=W&&"transition"in Ne,tn="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Re,vr="MozPerspective"in Ne,rt=!window.L_DISABLE_3D&&(Jn||tn||vr)&&!Ft&&!wt,ot=typeof orientation<"u"||Nn("mobile"),In=ot&&de,$o=ot&&tn,Hi=!window.PointerEvent&&window.MSPointerEvent,gs=!!(window.PointerEvent||Hi),vs="ontouchstart"in window||!!window.TouchEvent,Wt=!window.L_NO_TOUCH&&(vs||gs),mn=ot&&be,ys=ot&&Ze,vc=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,wx=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",_,s),window.removeEventListener("testPassiveEventSupport",_,s)}catch{}return o}(),Sx=function(){return!!document.createElement("canvas").getContext}(),yc=!!(document.createElementNS&&en("svg").createSVGRect),kx=!!yc&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Cx=!yc&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Px=navigator.platform.indexOf("Mac")===0,Ex=navigator.platform.indexOf("Linux")===0;function Nn(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var ce={ie:W,ielt9:G,edge:ee,webkit:de,android:ue,android23:Re,androidStock:ye,opera:be,chrome:ze,gecko:Ze,safari:Lt,phantom:wt,opera12:Ft,win:Yn,ie3d:Jn,webkit3d:tn,gecko3d:vr,any3d:rt,mobile:ot,mobileWebkit:In,mobileWebkit3d:$o,msPointer:Hi,pointer:gs,touch:Wt,touchNative:vs,mobileOpera:mn,mobileGecko:ys,retina:vc,passiveEvents:wx,canvas:Sx,svg:yc,vml:Cx,inlineSvg:kx,mac:Px,linux:Ex},tm=ce.msPointer?"MSPointerDown":"pointerdown",nm=ce.msPointer?"MSPointerMove":"pointermove",rm=ce.msPointer?"MSPointerUp":"pointerup",om=ce.msPointer?"MSPointerCancel":"pointercancel",bc={touchstart:tm,touchmove:nm,touchend:rm,touchcancel:om},im={touchstart:Bx,touchmove:bs,touchend:bs,touchcancel:bs},Ho={},am=!1;function Ox(o,s,c){return s==="touchstart"&&Rx(),im[s]?(c=im[s].bind(this,c),o.addEventListener(bc[s],c,!1),c):(console.warn("wrong event specified:",s),L.Util.falseFn)}function Tx(o,s,c){if(!bc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(bc[s],c,!1)}function zx(o){Ho[o.pointerId]=o}function Lx(o){Ho[o.pointerId]&&(Ho[o.pointerId]=o)}function sm(o){delete Ho[o.pointerId]}function Rx(){am||(document.addEventListener(tm,zx,!0),document.addEventListener(nm,Lx,!0),document.addEventListener(rm,sm,!0),document.addEventListener(om,sm,!0),am=!0)}function bs(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Ho)s.touches.push(Ho[c]);s.changedTouches=[s],o(s)}}function Bx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&_t(s),bs(o,s)}function Ax(o){var s={},c,f;for(f in o)c=o[f],s[f]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Ix=200;function Nx(o,s){o.addEventListener("dblclick",s);var c=0,f;function g(S){if(S.detail!==1){f=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var P=fm(S);if(!(P.some(function(D){return D instanceof HTMLLabelElement&&D.attributes.for})&&!P.some(function(D){return D instanceof HTMLInputElement||D instanceof HTMLSelectElement}))){var B=Date.now();B-c<=Ix?(f++,f===2&&s(Ax(S))):f=1,c=B}}}return o.addEventListener("click",g),{dblclick:s,simDblclick:g}}function Dx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var xc=Ss(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ui=Ss(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),lm=Ui==="webkitTransition"||Ui==="OTransition"?Ui+"End":"transitionend";function um(o){return typeof o=="string"?document.getElementById(o):o}function Zi(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(o,null);c=f?f[s]:null}return c==="auto"?null:c}function Oe(o,s,c){var f=document.createElement(o);return f.className=s||"",c&&c.appendChild(f),f}function qe(o){var s=o.parentNode;s&&s.removeChild(o)}function xs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Uo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function Zo(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function wc(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=ws(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function ve(o,s){if(o.classList!==void 0)for(var c=x(s),f=0,g=c.length;f<g;f++)o.classList.add(c[f]);else if(!wc(o,s)){var S=ws(o);Sc(o,(S?S+" ":"")+s)}}function tt(o,s){o.classList!==void 0?o.classList.remove(s):Sc(o,v((" "+ws(o)+" ").replace(" "+s+" "," ")))}function Sc(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function ws(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function nn(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&Mx(o,s)}function Mx(o,s){var c=!1,f="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(f)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+f+"(opacity="+s+")"}function Ss(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function oo(o,s,c){var f=s||new R(0,0);o.style[xc]=(ce.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(c?" scale("+c+")":"")}function it(o,s){o._leaflet_pos=s,ce.any3d?oo(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function io(o){return o._leaflet_pos||new R(0,0)}var Wi,Vi,kc;if("onselectstart"in document)Wi=function(){me(window,"selectstart",_t)},Vi=function(){Fe(window,"selectstart",_t)};else{var qi=Ss(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Wi=function(){if(qi){var o=document.documentElement.style;kc=o[qi],o[qi]="none"}},Vi=function(){qi&&(document.documentElement.style[qi]=kc,kc=void 0)}}function Cc(){me(window,"dragstart",_t)}function Pc(){Fe(window,"dragstart",_t)}var ks,Ec;function Oc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Cs(),ks=o,Ec=o.style.outline,o.style.outline="none",me(window,"keydown",Cs))}function Cs(){ks&&(ks.style.outline=Ec,ks=void 0,Ec=void 0,Fe(window,"keydown",Cs))}function cm(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function Tc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var Fx={__proto__:null,TRANSFORM:xc,TRANSITION:Ui,TRANSITION_END:lm,get:um,getStyle:Zi,create:Oe,remove:qe,empty:xs,toFront:Uo,toBack:Zo,hasClass:wc,addClass:ve,removeClass:tt,setClass:Sc,getClass:ws,setOpacity:nn,testProp:Ss,setTransform:oo,setPosition:it,getPosition:io,get disableTextSelection(){return Wi},get enableTextSelection(){return Vi},disableImageDrag:Cc,enableImageDrag:Pc,preventOutline:Oc,restoreOutline:Cs,getSizedParentNode:cm,getScale:Tc};function me(o,s,c,f){if(s&&typeof s=="object")for(var g in s)Lc(o,g,s[g],c);else{s=x(s);for(var S=0,P=s.length;S<P;S++)Lc(o,s[S],c,f)}return this}var Dn="_leaflet_events";function Fe(o,s,c,f){if(arguments.length===1)dm(o),delete o[Dn];else if(s&&typeof s=="object")for(var g in s)Rc(o,g,s[g],c);else if(s=x(s),arguments.length===2)dm(o,function(B){return C(s,B)!==-1});else for(var S=0,P=s.length;S<P;S++)Rc(o,s[S],c,f);return this}function dm(o,s){for(var c in o[Dn]){var f=c.split(/\d/)[0];(!s||s(f))&&Rc(o,f,null,null,c)}}var zc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Lc(o,s,c,f){var g=s+d(c)+(f?"_"+d(f):"");if(o[Dn]&&o[Dn][g])return this;var S=function(B){return c.call(f||o,B||window.event)},P=S;!ce.touchNative&&ce.pointer&&s.indexOf("touch")===0?S=Ox(o,s,S):ce.touch&&s==="dblclick"?S=Nx(o,S):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(zc[s]||s,S,ce.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(S=function(B){B=B||window.event,Ac(o,B)&&P(B)},o.addEventListener(zc[s],S,!1)):o.addEventListener(s,P,!1):o.attachEvent("on"+s,S),o[Dn]=o[Dn]||{},o[Dn][g]=S}function Rc(o,s,c,f,g){g=g||s+d(c)+(f?"_"+d(f):"");var S=o[Dn]&&o[Dn][g];if(!S)return this;!ce.touchNative&&ce.pointer&&s.indexOf("touch")===0?Tx(o,s,S):ce.touch&&s==="dblclick"?Dx(o,S):"removeEventListener"in o?o.removeEventListener(zc[s]||s,S,!1):o.detachEvent("on"+s,S),o[Dn][g]=null}function ao(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Bc(o){return Lc(o,"wheel",ao),this}function Ki(o){return me(o,"mousedown touchstart dblclick contextmenu",ao),o._leaflet_disable_click=!0,this}function _t(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function so(o){return _t(o),ao(o),this}function fm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function pm(o,s){if(!s)return new R(o.clientX,o.clientY);var c=Tc(s),f=c.boundingClientRect;return new R((o.clientX-f.left)/c.x-s.clientLeft,(o.clientY-f.top)/c.y-s.clientTop)}var jx=ce.linux&&ce.chrome?window.devicePixelRatio:ce.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function hm(o){return ce.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/jx:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Ac(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var $x={__proto__:null,on:me,off:Fe,stopPropagation:ao,disableScrollPropagation:Bc,disableClickPropagation:Ki,preventDefault:_t,stop:so,getPropagationPath:fm,getMousePosition:pm,getWheelDelta:hm,isExternalTarget:Ac,addListener:me,removeListener:Fe},mm=ne.extend({run:function(o,s,c,f){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=io(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=J(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),it(this._el,c),this.fire("step")},_complete:function(){ie(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Ce=ne.extend({options:{crs:et,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(te(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ui&&ce.any3d&&!ce.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),me(this._proxy,lm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter(te(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var f=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(ce.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(ce.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var f=this.getZoomScale(s),g=this.getSize().divideBy(2),S=o instanceof R?o:this.latLngToContainerPoint(o),P=S.subtract(g).multiplyBy(1-1/f),B=this.containerPointToLatLng(g.add(P));return this.setView(B,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():q(o);var c=V(s.paddingTopLeft||s.padding||[0,0]),f=V(s.paddingBottomRight||s.padding||[0,0]),g=this.getBoundsZoom(o,!1,c.add(f));if(g=typeof s.maxZoom=="number"?Math.min(s.maxZoom,g):g,g===1/0)return{center:o.getCenter(),zoom:g};var S=f.subtract(c).divideBy(2),P=this.project(o.getSouthWest(),g),B=this.project(o.getNorthEast(),g),D=this.unproject(P.add(B).divideBy(2).add(S),g);return{center:D,zoom:g}},fitBounds:function(o,s){if(o=q(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=V(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new mm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){ve(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!ce.any3d)return this.setView(o,s,c);this._stop();var f=this.project(this.getCenter()),g=this.project(o),S=this.getSize(),P=this._zoom;o=te(o),s=s===void 0?P:s;var B=Math.max(S.x,S.y),D=B*this.getZoomScale(P,s),K=g.distanceTo(f)||1,oe=1.42,he=oe*oe;function _e(at){var Ms=at?-1:1,Tw=at?D:B,zw=D*D-B*B+Ms*he*he*K*K,Lw=2*Tw*he*K,Wc=zw/Lw,Gm=Math.sqrt(Wc*Wc+1)-Wc,Rw=Gm<1e-9?-18:Math.log(Gm);return Rw}function on(at){return(Math.exp(at)-Math.exp(-at))/2}function co(at){return(Math.exp(at)+Math.exp(-at))/2}function Ds(at){return on(at)/co(at)}var xr=_e(0);function Zc(at){return B*(co(xr)/co(xr+oe*at))}function Cw(at){return B*(co(xr)*Ds(xr+oe*at)-on(xr))/he}function Pw(at){return 1-Math.pow(1-at,1.5)}var Ew=Date.now(),qm=(_e(1)-xr)/oe,Ow=c.duration?1e3*c.duration:1e3*qm*.8;function Km(){var at=(Date.now()-Ew)/Ow,Ms=Pw(at)*qm;at<=1?(this._flyToFrame=J(Km,this),this._move(this.unproject(f.add(g.subtract(f).multiplyBy(Cw(Ms)/K)),P),this.getScaleZoom(B/Zc(Ms),P),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Km.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=q(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),f=this._limitCenter(c,this._zoom,q(o));return c.equals(f)||this.panTo(f,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=V(s.paddingTopLeft||s.padding||[0,0]),f=V(s.paddingBottomRight||s.padding||[0,0]),g=this.project(this.getCenter()),S=this.project(o),P=this.getPixelBounds(),B=I([P.min.add(c),P.max.subtract(f)]),D=B.getSize();if(!B.contains(S)){this._enforcingBounds=!0;var K=S.subtract(B.getCenter()),oe=B.extend(S).getSize().subtract(D);g.x+=K.x<0?-oe.x:oe.x,g.y+=K.y<0?-oe.y:oe.y,this.panTo(this.unproject(g),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),f=s.divideBy(2).round(),g=c.divideBy(2).round(),S=f.subtract(g);return!S.x&&!S.y?this:(o.animate&&o.pan?this.panBy(S):(o.pan&&this._rawPanBy(S),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,f=new Y(s,c),g=f.toBounds(o.coords.accuracy*2),S=this._locateOptions;if(S.setView){var P=this.getBoundsZoom(g);this.setView(f,S.maxZoom?Math.min(P,S.maxZoom):P)}var B={latlng:f,bounds:g,timestamp:o.timestamp};for(var D in o.coords)typeof o.coords[D]=="number"&&(B[D]=o.coords[D]);this.fire("locationfound",B)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),qe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ie(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)qe(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),f=Oe("div",c,s||this._mapPane);return o&&(this._panes[o]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new A(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=q(o),c=V(c||[0,0]);var f=this.getZoom()||0,g=this.getMinZoom(),S=this.getMaxZoom(),P=o.getNorthWest(),B=o.getSouthEast(),D=this.getSize().subtract(c),K=I(this.project(B,f),this.project(P,f)).getSize(),oe=ce.any3d?this.options.zoomSnap:1,he=D.x/K.x,_e=D.y/K.y,on=s?Math.max(he,_e):Math.min(he,_e);return f=this.getScaleZoom(on,f),oe&&(f=Math.round(f/(oe/100))*(oe/100),f=s?Math.ceil(f/oe)*oe:Math.floor(f/oe)*oe),Math.max(g,Math.min(S,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new R(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new E(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var f=c.zoom(o*c.scale(s));return isNaN(f)?1/0:f},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(te(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(V(o),s)},layerPointToLatLng:function(o){var s=V(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project(te(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(te(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(q(o))},distance:function(o,s){return this.options.crs.distance(te(o),te(s))},containerPointToLayerPoint:function(o){return V(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return V(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(V(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(te(o)))},mouseEventToContainerPoint:function(o){return pm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=um(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");me(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&ce.any3d,ve(o,"leaflet-container"+(ce.touch?" leaflet-touch":"")+(ce.retina?" leaflet-retina":"")+(ce.ielt9?" leaflet-oldie":"")+(ce.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Zi(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),it(this._mapPane,new R(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ve(o.markerPane,"leaflet-zoom-hide"),ve(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){it(this._mapPane,new R(0,0));var f=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var g=this._zoom!==s;this._moveStart(g,c)._move(o,s)._moveEnd(g),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,f){s===void 0&&(s=this._zoom);var g=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),f?c&&c.pinch&&this.fire("zoom",c):((g||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ie(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){it(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?Fe:me;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),ce.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ie(this._resizeRequest),this._resizeRequest=J(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],f,g=s==="mouseout"||s==="mouseover",S=o.target||o.srcElement,P=!1;S;){if(f=this._targets[d(S)],f&&(s==="click"||s==="preclick")&&this._draggableMoved(f)){P=!0;break}if(f&&f.listens(s,!0)&&(g&&!Ac(S,o)||(c.push(f),g))||S===this._container)break;S=S.parentNode}return!c.length&&!P&&!g&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Oc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var f=i({},o);f.type="preclick",this._fireDOMEvent(f,f.type,c)}var g=this._findEventTargets(o,s);if(c){for(var S=[],P=0;P<c.length;P++)c[P].listens(s,!0)&&S.push(c[P]);g=S.concat(g)}if(g.length){s==="contextmenu"&&_t(o);var B=g[0],D={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var K=B.getLatLng&&(!B._radius||B._radius<=10);D.containerPoint=K?this.latLngToContainerPoint(B.getLatLng()):this.mouseEventToContainerPoint(o),D.layerPoint=this.containerPointToLayerPoint(D.containerPoint),D.latlng=K?B.getLatLng():this.layerPointToLatLng(D.layerPoint)}for(P=0;P<g.length;P++)if(g[P].fire(s,D,!0),D.originalEvent._stopped||g[P].options.bubblingMouseEvents===!1&&C(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return io(this._mapPane)||new R(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var f=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(f)},_latLngBoundsToNewLayerBounds:function(o,s,c){var f=this._getNewPixelOrigin(c,s);return I([this.project(o.getSouthWest(),s)._subtract(f),this.project(o.getNorthWest(),s)._subtract(f),this.project(o.getSouthEast(),s)._subtract(f),this.project(o.getNorthEast(),s)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var f=this.project(o,s),g=this.getSize().divideBy(2),S=new E(f.subtract(g),f.add(g)),P=this._getBoundsOffset(S,c,s);return P.round().equals([0,0])?o:this.unproject(f.add(P),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),f=new E(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(f,s))},_getBoundsOffset:function(o,s,c){var f=I(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),g=f.min.subtract(o.min),S=f.max.subtract(o.max),P=this._rebound(g.x,-S.x),B=this._rebound(g.y,-S.y);return new R(P,B)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),f=ce.any3d?this.options.zoomSnap:1;return f&&(o=Math.round(o/f)*f),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Oe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=xc,f=this._proxy.style[c];oo(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),f===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){qe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();oo(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(s),g=this._getCenterOffset(o)._divideBy(1-1/f);return c.animate!==!0&&!this.getSize().contains(g)?!1:(J(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,f){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,ve(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Hx(o,s){return new Ce(o,s)}var _n=X.extend({options:{position:"topright"},initialize:function(o){w(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),f=o._controlCorners[c];return ve(s,"leaflet-control"),c.indexOf("bottom")!==-1?f.insertBefore(s,f.firstChild):f.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(qe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),Gi=function(o){return new _n(o)};Ce.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Oe("div",s+"control-container",this._container);function f(g,S){var P=s+g+" "+s+S;o[g+S]=Oe("div",P,c)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)qe(this._controlCorners[o]);qe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var _m=_n.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,f){return c<f?-1:f<c?1:0}},initialize:function(o,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var f in o)this._addLayer(o[f],f);for(f in s)this._addLayer(s[f],f,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return _n.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){ve(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(ve(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):tt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Oe("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Ki(s),Bc(s);var f=this._section=Oe("section",o+"-list");c&&(this._map.on("click",this.collapse,this),me(s,{mouseenter:function(){me(f,"click",_t),this.expand(),setTimeout(function(){Fe(f,"click",_t)})},mouseleave:this.collapse},this));var g=this._layersLink=Oe("a",o+"-toggle",s);g.href="#",g.title="Layers",g.setAttribute("role","button"),me(g,"click",_t),me(g,"focus",this.expand,this),c||this.expand(),this._baseLayersList=Oe("div",o+"-base",f),this._separator=Oe("div",o+"-separator",f),this._overlaysList=Oe("div",o+"-overlays",f),s.appendChild(f)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(f,g){return this.options.sortFunction(f.layer,g.layer,f.name,g.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;xs(this._baseLayersList),xs(this._overlaysList),this._layerControlInputs=[];var o,s,c,f,g=0;for(c=0;c<this._layers.length;c++)f=this._layers[c],this._addItem(f),s=s||f.overlay,o=o||!f.overlay,g+=f.overlay?0:1;return this.options.hideSingleBase&&(o=o&&g>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=c,f.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),f;o.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=c):f=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(f),f.layerId=d(o.layer),me(f,"click",this._onInputClick,this);var g=document.createElement("span");g.innerHTML=" "+o.name;var S=document.createElement("span");s.appendChild(S),S.appendChild(f),S.appendChild(g);var P=o.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,f=[],g=[];this._handlingClick=!0;for(var S=o.length-1;S>=0;S--)s=o[S],c=this._getLayer(s.layerId).layer,s.checked?f.push(c):s.checked||g.push(c);for(S=0;S<g.length;S++)this._map.hasLayer(g[S])&&this._map.removeLayer(g[S]);for(S=0;S<f.length;S++)this._map.hasLayer(f[S])||this._map.addLayer(f[S]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,f=this._map.getZoom(),g=o.length-1;g>=0;g--)s=o[g],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&f<c.options.minZoom||c.options.maxZoom!==void 0&&f>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this}}),Ux=function(o,s,c){return new _m(o,s,c)},Ic=_n.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Oe("div",s+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,f,g){var S=Oe("a",c,f);return S.innerHTML=o,S.href="#",S.title=s,S.setAttribute("role","button"),S.setAttribute("aria-label",s),Ki(S),me(S,"click",so),me(S,"click",g,this),me(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";tt(this._zoomInButton,s),tt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(ve(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(ve(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ce.mergeOptions({zoomControl:!0}),Ce.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ic,this.addControl(this.zoomControl))});var Zx=function(o){return new Ic(o)},gm=_n.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Oe("div",s),f=this.options;return this._addScales(f,s+"-line",c),o.on(f.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Oe("div",s,c)),o.imperial&&(this._iScale=Oe("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,f,g;s>5280?(c=s/5280,f=this._getRoundNum(c),this._updateScale(this._iScale,f+" mi",f/c)):(g=this._getRoundNum(s),this._updateScale(this._iScale,g+" ft",g/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),Wx=function(o){return new gm(o)},Vx='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Nc=_n.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(ce.inlineSvg?Vx+" ":"")+"Leaflet</a>"},initialize:function(o){w(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Oe("div","leaflet-control-attribution"),Ki(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Ce.mergeOptions({attributionControl:!0}),Ce.addInitHook(function(){this.options.attributionControl&&new Nc().addTo(this)});var qx=function(o){return new Nc(o)};_n.Layers=_m,_n.Zoom=Ic,_n.Scale=gm,_n.Attribution=Nc,Gi.layers=Ux,Gi.zoom=Zx,Gi.scale=Wx,Gi.attribution=qx;var Mn=X.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Mn.addTo=function(o,s){return o.addHandler(s,this),this};var Kx={Events:U},vm=ce.touch?"touchstart mousedown":"mousedown",yr=ne.extend({options:{clickTolerance:3},initialize:function(o,s,c,f){w(this,f),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(me(this._dragStartTarget,vm,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(yr._dragging===this&&this.finishDrag(!0),Fe(this._dragStartTarget,vm,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!wc(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){yr._dragging===this&&this.finishDrag();return}if(!(yr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(yr._dragging=this,this._preventOutline&&Oc(this._element),Cc(),Wi(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=cm(this._element);this._startPoint=new R(s.clientX,s.clientY),this._startPos=io(this._element),this._parentScale=Tc(c);var f=o.type==="mousedown";me(document,f?"mousemove":"touchmove",this._onMove,this),me(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new R(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,_t(o),this._moved||(this.fire("dragstart"),this._moved=!0,ve(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ve(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),it(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Fe(document,"mousemove touchmove",this._onMove,this),Fe(document,"mouseup touchend touchcancel",this._onUp,this),Pc(),Vi(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,yr._dragging=!1}});function ym(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=Xx(o,c),o=Qx(o,c),o}function bm(o,s,c){return Math.sqrt(Qi(o,s,c,!0))}function Gx(o,s,c){return Qi(o,s,c)}function Qx(o,s){var c=o.length,f=typeof Uint8Array!=void 0+""?Uint8Array:Array,g=new f(c);g[0]=g[c-1]=1,Dc(o,g,s,0,c-1);var S,P=[];for(S=0;S<c;S++)g[S]&&P.push(o[S]);return P}function Dc(o,s,c,f,g){var S=0,P,B,D;for(B=f+1;B<=g-1;B++)D=Qi(o[B],o[f],o[g],!0),D>S&&(P=B,S=D);S>c&&(s[P]=1,Dc(o,s,c,f,P),Dc(o,s,c,P,g))}function Xx(o,s){for(var c=[o[0]],f=1,g=0,S=o.length;f<S;f++)Yx(o[f],o[g])>s&&(c.push(o[f]),g=f);return g<S-1&&c.push(o[S-1]),c}var xm;function wm(o,s,c,f,g){var S=f?xm:lo(o,c),P=lo(s,c),B,D,K;for(xm=P;;){if(!(S|P))return[o,s];if(S&P)return!1;B=S||P,D=Ps(o,s,B,c,g),K=lo(D,c),B===S?(o=D,S=K):(s=D,P=K)}}function Ps(o,s,c,f,g){var S=s.x-o.x,P=s.y-o.y,B=f.min,D=f.max,K,oe;return c&8?(K=o.x+S*(D.y-o.y)/P,oe=D.y):c&4?(K=o.x+S*(B.y-o.y)/P,oe=B.y):c&2?(K=D.x,oe=o.y+P*(D.x-o.x)/S):c&1&&(K=B.x,oe=o.y+P*(B.x-o.x)/S),new R(K,oe,g)}function lo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function Yx(o,s){var c=s.x-o.x,f=s.y-o.y;return c*c+f*f}function Qi(o,s,c,f){var g=s.x,S=s.y,P=c.x-g,B=c.y-S,D=P*P+B*B,K;return D>0&&(K=((o.x-g)*P+(o.y-S)*B)/D,K>1?(g=c.x,S=c.y):K>0&&(g+=P*K,S+=B*K)),P=o.x-g,B=o.y-S,f?P*P+B*B:new R(g,S)}function rn(o){return!k(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Sm(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),rn(o)}function km(o,s){var c,f,g,S,P,B,D,K;if(!o||o.length===0)throw new Error("latlngs not passed");rn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var oe=[];for(var he in o)oe.push(s.project(te(o[he])));var _e=oe.length;for(c=0,f=0;c<_e-1;c++)f+=oe[c].distanceTo(oe[c+1])/2;if(f===0)K=oe[0];else for(c=0,S=0;c<_e-1;c++)if(P=oe[c],B=oe[c+1],g=P.distanceTo(B),S+=g,S>f){D=(S-f)/g,K=[B.x-D*(B.x-P.x),B.y-D*(B.y-P.y)];break}return s.unproject(V(K))}var Jx={__proto__:null,simplify:ym,pointToSegmentDistance:bm,closestPointOnSegment:Gx,clipSegment:wm,_getEdgeIntersection:Ps,_getBitCode:lo,_sqClosestPointOnSegment:Qi,isFlat:rn,_flat:Sm,polylineCenter:km};function Cm(o,s,c){var f,g=[1,4,2,8],S,P,B,D,K,oe,he,_e;for(S=0,oe=o.length;S<oe;S++)o[S]._code=lo(o[S],s);for(B=0;B<4;B++){for(he=g[B],f=[],S=0,oe=o.length,P=oe-1;S<oe;P=S++)D=o[S],K=o[P],D._code&he?K._code&he||(_e=Ps(K,D,he,s,c),_e._code=lo(_e,s),f.push(_e)):(K._code&he&&(_e=Ps(K,D,he,s,c),_e._code=lo(_e,s),f.push(_e)),f.push(D));o=f}return o}function Pm(o,s){var c,f,g,S,P,B,D,K,oe;if(!o||o.length===0)throw new Error("latlngs not passed");rn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var he=[];for(var _e in o)he.push(s.project(te(o[_e])));var on=he.length;for(B=D=K=0,c=0,f=on-1;c<on;f=c++)g=he[c],S=he[f],P=g.y*S.x-S.y*g.x,D+=(g.x+S.x)*P,K+=(g.y+S.y)*P,B+=P*3;return B===0?oe=he[0]:oe=[D/B,K/B],s.unproject(V(oe))}var ew={__proto__:null,clipPolygon:Cm,polygonCenter:Pm},Mc={project:function(o){return new R(o.lng,o.lat)},unproject:function(o){return new Y(o.y,o.x)},bounds:new E([-180,-90],[180,90])},Fc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new E([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,f=o.lat*s,g=this.R_MINOR/c,S=Math.sqrt(1-g*g),P=S*Math.sin(f),B=Math.tan(Math.PI/4-f/2)/Math.pow((1-P)/(1+P),S/2);return f=-c*Math.log(Math.max(B,1e-10)),new R(o.lng*s*c,f)},unproject:function(o){for(var s=180/Math.PI,c=this.R,f=this.R_MINOR/c,g=Math.sqrt(1-f*f),S=Math.exp(-o.y/c),P=Math.PI/2-2*Math.atan(S),B=0,D=.1,K;B<15&&Math.abs(D)>1e-7;B++)K=g*Math.sin(P),K=Math.pow((1-K)/(1+K),g/2),D=Math.PI/2-2*Math.atan(S*K)-P,P+=D;return new Y(P*s,o.x*s/c)}},tw={__proto__:null,LonLat:Mc,Mercator:Fc,SphericalMercator:Ue},nw=i({},pe,{code:"EPSG:3395",projection:Fc,transformation:function(){var o=.5/(Math.PI*Fc.R);return Me(o,.5,-o,.5)}()}),Em=i({},pe,{code:"EPSG:4326",projection:Mc,transformation:Me(1/180,1,-1/180,.5)}),rw=i({},se,{projection:Mc,transformation:Me(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,f=s.lat-o.lat;return Math.sqrt(c*c+f*f)},infinite:!0});se.Earth=pe,se.EPSG3395=nw,se.EPSG3857=et,se.EPSG900913=Se,se.EPSG4326=Em,se.Simple=rw;var gn=ne.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ce.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?k(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var f in this._zoomBoundLayers){var g=this._zoomBoundLayers[f].options;o=g.minZoom===void 0?o:Math.min(o,g.minZoom),s=g.maxZoom===void 0?s:Math.max(s,g.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wo=gn.extend({initialize:function(o,s){w(this,s),this._layers={};var c,f;if(o)for(c=0,f=o.length;c<f;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,f;for(c in this._layers)f=this._layers[c],f[o]&&f[o].apply(f,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),ow=function(o,s){return new Wo(o,s)},uo=Wo.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),Wo.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),Wo.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new A;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),iw=function(o,s){return new uo(o,s)},Vo=X.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){w(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(f,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(o,s){var c=this.options,f=c[s+"Size"];typeof f=="number"&&(f=[f,f]);var g=V(f),S=V(s==="shadow"&&c.shadowAnchor||c.iconAnchor||g&&g.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),S&&(o.style.marginLeft=-S.x+"px",o.style.marginTop=-S.y+"px"),g&&(o.style.width=g.x+"px",o.style.height=g.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return ce.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function aw(o){return new Vo(o)}var Xi=Vo.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof Xi.imagePath!="string"&&(Xi.imagePath=this._detectIconPath()),(this.options.imagePath||Xi.imagePath)+Vo.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,f,g){var S=f.exec(c);return S&&S[g]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Oe("div","leaflet-default-icon-path",document.body),s=Zi(o,"background-image")||Zi(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Om=Mn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new yr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ve(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,f=this._marker.options.autoPanSpeed,g=this._marker.options.autoPanPadding,S=io(s._icon),P=c.getPixelBounds(),B=c.getPixelOrigin(),D=I(P.min._subtract(B).add(g),P.max._subtract(B).subtract(g));if(!D.contains(S)){var K=V((Math.max(D.max.x,S.x)-D.max.x)/(P.max.x-D.max.x)-(Math.min(D.min.x,S.x)-D.min.x)/(P.min.x-D.min.x),(Math.max(D.max.y,S.y)-D.max.y)/(P.max.y-D.max.y)-(Math.min(D.min.y,S.y)-D.min.y)/(P.min.y-D.min.y)).multiplyBy(f);c.panBy(K,{animate:!1}),this._draggable._newPos._add(K),this._draggable._startPos._add(K),it(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=J(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(ie(this._panRequest),this._panRequest=J(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,f=io(s._icon),g=s._map.layerPointToLatLng(f);c&&it(c,f),s._latlng=g,o.latlng=g,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){ie(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Es=gn.extend({options:{icon:new Xi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){w(this,s),this._latlng=te(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=te(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),f=!1;c!==this._icon&&(this._icon&&this._removeIcon(),f=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),ve(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&me(c,"focus",this._panOnFocus,this);var g=o.icon.createShadow(this._shadow),S=!1;g!==this._shadow&&(this._removeShadow(),S=!0),g&&(ve(g,s),g.alt=""),this._shadow=g,o.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),g&&S&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Fe(this._icon,"focus",this._panOnFocus,this),qe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&qe(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&it(this._icon,o),this._shadow&&it(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(ve(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Om)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Om(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&nn(this._icon,o),this._shadow&&nn(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?V(s.iconSize):V(0,0),f=s.iconAnchor?V(s.iconAnchor):V(0,0);o.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:c.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function sw(o,s){return new Es(o,s)}var br=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return w(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Os=br.extend({options:{fill:!0,radius:10},initialize:function(o,s){w(this,s),this._latlng=te(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=te(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return br.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),f=[o+c,s+c];this._pxBounds=new E(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function lw(o,s){return new Os(o,s)}var jc=Os.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),w(this,s),this._latlng=te(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new A(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:br.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,f=c.options.crs;if(f.distance===pe.distance){var g=Math.PI/180,S=this._mRadius/pe.R/g,P=c.project([s+S,o]),B=c.project([s-S,o]),D=P.add(B).divideBy(2),K=c.unproject(D).lat,oe=Math.acos((Math.cos(S*g)-Math.sin(s*g)*Math.sin(K*g))/(Math.cos(s*g)*Math.cos(K*g)))/g;(isNaN(oe)||oe===0)&&(oe=S/Math.cos(Math.PI/180*s)),this._point=D.subtract(c.getPixelOrigin()),this._radius=isNaN(oe)?0:D.x-c.project([K,o-oe]).x,this._radiusY=D.y-P.y}else{var he=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(he).x}this._updateBounds()}});function uw(o,s,c){return new jc(o,s,c)}var er=br.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){w(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,f=Qi,g,S,P=0,B=this._parts.length;P<B;P++)for(var D=this._parts[P],K=1,oe=D.length;K<oe;K++){g=D[K-1],S=D[K];var he=f(o,g,S,!0);he<s&&(s=he,c=f(o,g,S))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return km(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=te(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new A,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return rn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=rn(o),f=0,g=o.length;f<g;f++)c?(s[f]=te(o[f]),this._bounds.extend(s[f])):s[f]=this._convertLatLngs(o[f]);return s},_project:function(){var o=new E;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new R(o,o);this._rawPxBounds&&(this._pxBounds=new E([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var f=o[0]instanceof Y,g=o.length,S,P;if(f){for(P=[],S=0;S<g;S++)P[S]=this._map.latLngToLayerPoint(o[S]),c.extend(P[S]);s.push(P)}else for(S=0;S<g;S++)this._projectLatlngs(o[S],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,f,g,S,P,B,D;for(c=0,g=0,S=this._rings.length;c<S;c++)for(D=this._rings[c],f=0,P=D.length;f<P-1;f++)B=wm(D[f],D[f+1],o,f,!0),B&&(s[g]=s[g]||[],s[g].push(B[0]),(B[1]!==D[f+1]||f===P-2)&&(s[g].push(B[1]),g++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,f=o.length;c<f;c++)o[c]=ym(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,f,g,S,P,B,D=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,S=this._parts.length;c<S;c++)for(B=this._parts[c],f=0,P=B.length,g=P-1;f<P;g=f++)if(!(!s&&f===0)&&bm(o,B[g],B[f])<=D)return!0;return!1}});function cw(o,s){return new er(o,s)}er._flat=Sm;var qo=er.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=er.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof Y&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){er.prototype._setLatLngs.call(this,o),rn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return rn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new R(s,s);if(o=new E(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,g=this._rings.length,S;f<g;f++)S=Cm(this._rings[f],o,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,f,g,S,P,B,D,K;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(S=0,D=this._parts.length;S<D;S++)for(c=this._parts[S],P=0,K=c.length,B=K-1;P<K;B=P++)f=c[P],g=c[B],f.y>o.y!=g.y>o.y&&o.x<(g.x-f.x)*(o.y-f.y)/(g.y-f.y)+f.x&&(s=!s);return s||er.prototype._containsPoint.call(this,o,!0)}});function dw(o,s){return new qo(o,s)}var tr=uo.extend({initialize:function(o,s){w(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=k(o)?o:o.features,c,f,g;if(s){for(c=0,f=s.length;c<f;c++)g=s[c],(g.geometries||g.geometry||g.features||g.coordinates)&&this.addData(g);return this}var S=this.options;if(S.filter&&!S.filter(o))return this;var P=Ts(o,S);return P?(P.feature=Rs(o),P.defaultOptions=P.options,this.resetStyle(P),S.onEachFeature&&S.onEachFeature(o,P),this.addLayer(P)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function Ts(o,s){var c=o.type==="Feature"?o.geometry:o,f=c?c.coordinates:null,g=[],S=s&&s.pointToLayer,P=s&&s.coordsToLatLng||$c,B,D,K,oe;if(!f&&!c)return null;switch(c.type){case"Point":return B=P(f),Tm(S,o,B,s);case"MultiPoint":for(K=0,oe=f.length;K<oe;K++)B=P(f[K]),g.push(Tm(S,o,B,s));return new uo(g);case"LineString":case"MultiLineString":return D=zs(f,c.type==="LineString"?0:1,P),new er(D,s);case"Polygon":case"MultiPolygon":return D=zs(f,c.type==="Polygon"?1:2,P),new qo(D,s);case"GeometryCollection":for(K=0,oe=c.geometries.length;K<oe;K++){var he=Ts({geometry:c.geometries[K],type:"Feature",properties:o.properties},s);he&&g.push(he)}return new uo(g);case"FeatureCollection":for(K=0,oe=c.features.length;K<oe;K++){var _e=Ts(c.features[K],s);_e&&g.push(_e)}return new uo(g);default:throw new Error("Invalid GeoJSON object.")}}function Tm(o,s,c,f){return o?o(s,c):new Es(c,f&&f.markersInheritOptions&&f)}function $c(o){return new Y(o[1],o[0],o[2])}function zs(o,s,c){for(var f=[],g=0,S=o.length,P;g<S;g++)P=s?zs(o[g],s-1,c):(c||$c)(o[g]),f.push(P);return f}function Hc(o,s){return o=te(o),o.alt!==void 0?[h(o.lng,s),h(o.lat,s),h(o.alt,s)]:[h(o.lng,s),h(o.lat,s)]}function Ls(o,s,c,f){for(var g=[],S=0,P=o.length;S<P;S++)g.push(s?Ls(o[S],rn(o[S])?0:s-1,c,f):Hc(o[S],f));return!s&&c&&g.push(g[0]),g}function Ko(o,s){return o.feature?i({},o.feature,{geometry:s}):Rs(s)}function Rs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var Uc={toGeoJSON:function(o){return Ko(this,{type:"Point",coordinates:Hc(this.getLatLng(),o)})}};Es.include(Uc),jc.include(Uc),Os.include(Uc),er.include({toGeoJSON:function(o){var s=!rn(this._latlngs),c=Ls(this._latlngs,s?1:0,!1,o);return Ko(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),qo.include({toGeoJSON:function(o){var s=!rn(this._latlngs),c=s&&!rn(this._latlngs[0]),f=Ls(this._latlngs,c?2:s?1:0,!0,o);return s||(f=[f]),Ko(this,{type:(c?"Multi":"")+"Polygon",coordinates:f})}}),Wo.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),Ko(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",f=[];return this.eachLayer(function(g){if(g.toGeoJSON){var S=g.toGeoJSON(o);if(c)f.push(S.geometry);else{var P=Rs(S);P.type==="FeatureCollection"?f.push.apply(f,P.features):f.push(P)}}}),c?Ko(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function zm(o,s){return new tr(o,s)}var fw=zm,Bs=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=q(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ve(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){qe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Uo(this._image),this},bringToBack:function(){return this._map&&Zo(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=q(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Oe("img");if(ve(s,"leaflet-image-layer"),this._zoomAnimated&&ve(s,"leaflet-zoom-animated"),this.options.className&&ve(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;oo(this._image,c,s)},_reset:function(){var o=this._image,s=new E(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();it(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){nn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),pw=function(o,s,c){return new Bs(o,s,c)},Lm=Bs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Oe("video");if(ve(s,"leaflet-image-layer"),this._zoomAnimated&&ve(s,"leaflet-zoom-animated"),this.options.className&&ve(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),f=[],g=0;g<c.length;g++)f.push(c[g].src);this._url=c.length>0?f:[s.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var P=Oe("source");P.src=this._url[S],s.appendChild(P)}}});function hw(o,s,c){return new Lm(o,s,c)}var Rm=Bs.extend({_initImage:function(){var o=this._image=this._url;ve(o,"leaflet-image-layer"),this._zoomAnimated&&ve(o,"leaflet-zoom-animated"),this.options.className&&ve(o,this.options.className),o.onselectstart=_,o.onmousemove=_}});function mw(o,s,c){return new Rm(o,s,c)}var Fn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof L.LatLng||k(o))?(this._latlng=te(o),w(this,s)):(w(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&nn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&nn(this._container,1),this.bringToFront(),this.options.interactive&&(ve(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(nn(this._container,0),this._removeTimeout=setTimeout(l(qe,void 0,this._container),200)):qe(this._container),this.options.interactive&&(tt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=te(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Uo(this._container),this},bringToBack:function(){return this._map&&Zo(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof uo){s=null;var c=this._source._layers;for(var f in c)if(c[f]._map){s=c[f];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=V(this.options.offset),c=this._getAnchor();this._zoomAnimated?it(this._container,o.add(c)):s=s.add(o).add(c);var f=this._containerBottom=-s.y,g=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=f+"px",this._container.style.left=g+"px"}},_getAnchor:function(){return[0,0]}});Ce.include({_initOverlay:function(o,s,c,f){var g=s;return g instanceof o||(g=new o(f).setContent(s)),c&&g.setLatLng(c),g}}),gn.include({_initOverlay:function(o,s,c,f){var g=c;return g instanceof o?(w(g,f),g._source=this):(g=s&&!f?s:new o(f,this),g.setContent(c)),g}});var As=Fn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Fn.prototype.openOn.call(this,o)},onAdd:function(o){Fn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof br||this._source.on("preclick",ao))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof br||this._source.off("preclick",ao))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Oe("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Oe("div",o+"-content-wrapper",s);if(this._contentNode=Oe("div",o+"-content",c),Ki(s),Bc(this._contentNode),me(s,"contextmenu",ao),this._tipContainer=Oe("div",o+"-tip-container",s),this._tip=Oe("div",o+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Oe("a",o+"-close-button",s);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',me(f,"click",function(g){_t(g),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var f=o.offsetHeight,g=this.options.maxHeight,S="leaflet-popup-scrolled";g&&f>g?(s.height=g+"px",ve(o,S)):tt(o,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();it(this._container,s.add(c))},_adjustPan:function(o){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var s=this._map,c=parseInt(Zi(this._container,"marginBottom"),10)||0,f=this._container.offsetHeight+c,g=this._containerWidth,S=new R(this._containerLeft,-f-this._containerBottom);S._add(io(this._container));var P=s.layerPointToContainerPoint(S),B=V(this.options.autoPanPadding),D=V(this.options.autoPanPaddingTopLeft||B),K=V(this.options.autoPanPaddingBottomRight||B),oe=s.getSize(),he=0,_e=0;P.x+g+K.x>oe.x&&(he=P.x+g-oe.x+K.x),P.x-he-D.x<0&&(he=P.x-D.x),P.y+f+K.y>oe.y&&(_e=P.y+f-oe.y+K.y),P.y-_e-D.y<0&&(_e=P.y-D.y),(he||_e)&&s.fire("autopanstart").panBy([he,_e],{animate:o&&o.type==="moveend"})}},_getAnchor:function(){return V(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),_w=function(o,s){return new As(o,s)};Ce.mergeOptions({closePopupOnClick:!0}),Ce.include({openPopup:function(o,s,c){return this._initOverlay(As,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(As,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){so(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof br)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Is=Fn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Fn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Oe("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,f=this._map,g=this._container,S=f.latLngToContainerPoint(f.getCenter()),P=f.layerPointToContainerPoint(o),B=this.options.direction,D=g.offsetWidth,K=g.offsetHeight,oe=V(this.options.offset),he=this._getAnchor();B==="top"?(s=D/2,c=K):B==="bottom"?(s=D/2,c=0):B==="center"?(s=D/2,c=K/2):B==="right"?(s=0,c=K/2):B==="left"?(s=D,c=K/2):P.x<S.x?(B="right",s=0,c=K/2):(B="left",s=D+(oe.x+he.x)*2,c=K/2),o=o.subtract(V(s,c,!0)).add(oe).add(he),tt(g,"leaflet-tooltip-right"),tt(g,"leaflet-tooltip-left"),tt(g,"leaflet-tooltip-top"),tt(g,"leaflet-tooltip-bottom"),ve(g,"leaflet-tooltip-"+B),it(g,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&nn(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return V(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),gw=function(o,s){return new Is(o,s)};Ce.include({openTooltip:function(o,s,c){return this._initOverlay(Is,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Is,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this)),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(me(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),me(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,f;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),f=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(s)}});var Bm=Vo.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(xs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var f=V(c.bgPos);s.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function vw(o){return new Bm(o)}Vo.Default=Xi;var Yi=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ce.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){w(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),qe(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Uo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Zo(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof R?o:new R(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),f=0,g=s.length,S;f<g;f++)S=s[f].style.zIndex,s[f]!==this._container&&S&&(c=o(c,+S));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!ce.ielt9){nn(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var f in this._tiles){var g=this._tiles[f];if(!(!g.current||!g.loaded)){var S=Math.min(1,(o-g.loaded)/200);nn(g.el,S),S<1?s=!0:(g.active?c=!0:this._onOpaqueTile(g),g.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(ie(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=Oe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(qe(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var f=this._levels[o],g=this._map;return f||(f=this._levels[o]={},f.el=Oe("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=s,f.origin=g.project(g.unproject(g.getPixelOrigin()),o).round(),f.zoom=o,this._setZoomTransform(f,g.getCenter(),g.getZoom()),_(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var f=s.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)qe(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,f){var g=Math.floor(o/2),S=Math.floor(s/2),P=c-1,B=new R(+g,+S);B.z=+P;var D=this._tileCoordsToKey(B),K=this._tiles[D];return K&&K.active?(K.retain=!0,!0):(K&&K.loaded&&(K.retain=!0),P>f?this._retainParent(g,S,P,f):!1)},_retainChildren:function(o,s,c,f){for(var g=2*o;g<2*o+2;g++)for(var S=2*s;S<2*s+2;S++){var P=new R(g,S);P.z=c+1;var B=this._tileCoordsToKey(P),D=this._tiles[B];if(D&&D.active){D.retain=!0;continue}else D&&D.loaded&&(D.retain=!0);c+1<f&&this._retainChildren(g,S,c+1,f)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,f){var g=Math.round(s);this.options.maxZoom!==void 0&&g>this.options.maxZoom||this.options.minZoom!==void 0&&g<this.options.minZoom?g=void 0:g=this._clampZoom(g);var S=this.options.updateWhenZooming&&g!==this._tileZoom;(!f||S)&&(this._tileZoom=g,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),g!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var f=this._map.getZoomScale(c,o.zoom),g=o.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(s,c)).round();ce.any3d?oo(o.el,g,f):it(o.el,g)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),f=this._tileZoom,g=this._map.getPixelWorldBounds(this._tileZoom);g&&(this._globalTileRange=this._pxBoundsToTileRange(g)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],f).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],f).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],f).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],f).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),f=s.getZoomScale(c,this._tileZoom),g=s.project(o,this._tileZoom).floor(),S=s.getSize().divideBy(f*2);return new E(g.subtract(S),g.add(S))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(o),g=this._pxBoundsToTileRange(f),S=g.getCenter(),P=[],B=this.options.keepBuffer,D=new E(g.getBottomLeft().subtract([B,-B]),g.getTopRight().add([B,-B]));if(!(isFinite(g.min.x)&&isFinite(g.min.y)&&isFinite(g.max.x)&&isFinite(g.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var K in this._tiles){var oe=this._tiles[K].coords;(oe.z!==this._tileZoom||!D.contains(new R(oe.x,oe.y)))&&(this._tiles[K].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var he=g.min.y;he<=g.max.y;he++)for(var _e=g.min.x;_e<=g.max.x;_e++){var on=new R(_e,he);if(on.z=this._tileZoom,!!this._isValidTile(on)){var co=this._tiles[this._tileCoordsToKey(on)];co?co.current=!0:P.push(on)}}if(P.sort(function(xr,Zc){return xr.distanceTo(S)-Zc.distanceTo(S)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ds=document.createDocumentFragment();for(_e=0;_e<P.length;_e++)this._addTile(P[_e],Ds);this._level.el.appendChild(Ds)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(o);return q(this.options.bounds).overlaps(f)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),f=o.scaleBy(c),g=f.add(c),S=s.unproject(f,o.z),P=s.unproject(g,o.z);return[S,P]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new A(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new R(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(qe(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){ve(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=_,o.onmousemove=_,ce.ielt9&&this.options.opacity<1&&nn(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),f=this._tileCoordsToKey(o),g=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(g),this.createTile.length<2&&J(l(this._tileReady,this,o,null,g)),it(g,c),this._tiles[f]={el:g,coords:o,current:!0},s.appendChild(g),this.fire("tileloadstart",{tile:g,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var f=this._tileCoordsToKey(o);c=this._tiles[f],c&&(c.loaded=+new Date,this._map._fadeAnimated?(nn(c.el,0),ie(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(ve(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),ce.ielt9||!this._map._fadeAnimated?J(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new R(this._wrapX?m(o.x,this._wrapX):o.x,this._wrapY?m(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new E(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function yw(o){return new Yi(o)}var Go=Yi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=w(this,s),s.detectRetina&&ce.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return me(c,"load",l(this._tileOnLoad,this,s,c)),me(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:ce.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){ce.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var f=this.options.errorTileUrl;f&&s.getAttribute("src")!==f&&(s.src=f),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,f=this.options.zoomOffset;return c&&(o=s-o),o+f},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=_,s.onerror=_,!s.complete)){s.src=z;var c=this._tiles[o].coords;qe(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),Yi.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return Yi.prototype._tileReady.call(this,o,s,c)}});function Am(o,s){return new Go(o,s)}var Im=Go.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var f in s)f in this.options||(c[f]=s[f]);s=w(this,s);var g=s.detectRetina&&ce.retina?2:1,S=this.getTileSize();c.width=S.x*g,c.height=S.y*g,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Go.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,f=I(c.project(s[0]),c.project(s[1])),g=f.min,S=f.max,P=(this._wmsVersion>=1.3&&this._crs===Em?[g.y,g.x,S.y,S.x]:[g.x,g.y,S.x,S.y]).join(","),B=Go.prototype.getTileUrl.call(this,o);return B+O(this.wmsParams,B,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function bw(o,s){return new Im(o,s)}Go.WMS=Im,Am.wms=bw;var nr=gn.extend({options:{padding:.1},initialize:function(o){w(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&ve(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),g=this._map.project(this._center,s),S=f.multiplyBy(-c).add(g).subtract(this._map._getNewPixelOrigin(o,s));ce.any3d?oo(this._container,S,c):it(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new E(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Nm=nr.extend({options:{tolerance:0},getEvents:function(){var o=nr.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){nr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");me(o,"mousemove",this._onMouseMove,this),me(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),me(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){ie(this._redrawRequest),delete this._ctx,qe(this._container),Fe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nr.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),f=ce.retina?2:1;it(s,o.min),s.width=f*c.x,s.height=f*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",ce.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){nr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,f=s.prev;c?c.prev=f:this._drawLast=f,f?f.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],f,g;for(g=0;g<s.length;g++){if(f=Number(s[g]),isNaN(f))return;c.push(f)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||J(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new E,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)o=f.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,f,g,S,P=o._parts,B=P.length,D=this._ctx;if(B){for(D.beginPath(),c=0;c<B;c++){for(f=0,g=P[c].length;f<g;f++)S=P[c][f],D[f?"lineTo":"moveTo"](S.x,S.y);s&&D.closePath()}this._fillStroke(D,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,f=Math.max(Math.round(o._radius),1),g=(Math.max(Math.round(o._radiusY),1)||f)/f;g!==1&&(c.save(),c.scale(1,g)),c.beginPath(),c.arc(s.x,s.y/g,f,0,Math.PI*2,!1),g!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,f,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(f=c);this._fireEvent(f?[f]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(tt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,f,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(f=c);f!==this._hoveredLayer&&(this._handleMouseOut(o),f&&(ve(this._container,"leaflet-interactive"),this._fireEvent([f],o,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,f=s.prev;if(c)c.prev=f;else return;f?f.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,f=s.prev;if(f)f.next=c;else return;c?c.prev=f:f&&(this._drawLast=f),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Dm(o){return ce.canvas?new Nm(o):null}var Ji=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),xw={_initContainer:function(){this._container=Oe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(nr.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=Ji("shape");ve(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=Ji("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;qe(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,f=o.options,g=o._container;g.stroked=!!f.stroke,g.filled=!!f.fill,f.stroke?(s||(s=o._stroke=Ji("stroke")),g.appendChild(s),s.weight=f.weight+"px",s.color=f.color,s.opacity=f.opacity,f.dashArray?s.dashStyle=k(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=f.lineCap.replace("butt","flat"),s.joinstyle=f.lineJoin):s&&(g.removeChild(s),o._stroke=null),f.fill?(c||(c=o._fill=Ji("fill")),g.appendChild(c),c.color=f.fillColor||f.color,c.opacity=f.fillOpacity):c&&(g.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),f=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+f+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Uo(o._container)},_bringToBack:function(o){Zo(o._container)}},Ns=ce.vml?Ji:en,ea=nr.extend({_initContainer:function(){this._container=Ns("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ns("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){qe(this._container),Fe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nr.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),it(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Ns("path");o.options.className&&ve(s,o.options.className),o.options.interactive&&ve(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){qe(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,Mt(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),f=Math.max(Math.round(o._radiusY),1)||c,g="a"+c+","+f+" 0 1,0 ",S=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+g+c*2+",0 "+g+-c*2+",0 ";this._setPath(o,S)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Uo(o._path)},_bringToBack:function(o){Zo(o._path)}});ce.vml&&ea.include(xw);function Mm(o){return ce.svg||ce.vml?new ea(o):null}Ce.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Dm(o)||Mm(o)}});var Fm=qo.extend({initialize:function(o,s){qo.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=q(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function ww(o,s){return new Fm(o,s)}ea.create=Ns,ea.pointsToPath=Mt,tr.geometryToLayer=Ts,tr.coordsToLatLng=$c,tr.coordsToLatLngs=zs,tr.latLngToCoords=Hc,tr.latLngsToCoords=Ls,tr.getFeature=Ko,tr.asFeature=Rs,Ce.mergeOptions({boxZoom:!0});var jm=Mn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){me(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Fe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){qe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Wi(),Cc(),this._startPoint=this._map.mouseEventToContainerPoint(o),me(document,{contextmenu:so,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Oe("div","leaflet-zoom-box",this._container),ve(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new E(this._point,this._startPoint),c=s.getSize();it(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(qe(this._box),tt(this._container,"leaflet-crosshair")),Vi(),Pc(),Fe(document,{contextmenu:so,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new A(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ce.addInitHook("addHandler","boxZoom",jm),Ce.mergeOptions({doubleClickZoom:!0});var $m=Mn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),f=s.options.zoomDelta,g=o.originalEvent.shiftKey?c-f:c+f;s.options.doubleClickZoom==="center"?s.setZoom(g):s.setZoomAround(o.containerPoint,g)}});Ce.addInitHook("addHandler","doubleClickZoom",$m),Ce.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Hm=Mn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new yr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}ve(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=q(this._map.options.maxBounds);this._offsetLimit=I(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,f=this._draggable._newPos.x,g=(f-s+c)%o+s-c,S=(f+s+c)%o-s-c,P=Math.abs(g+c)<Math.abs(S+c)?g:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(o){var s=this._map,c=s.options,f=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),f)s.fire("moveend");else{this._prunePositions(+new Date);var g=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,P=c.easeLinearity,B=g.multiplyBy(P/S),D=B.distanceTo([0,0]),K=Math.min(c.inertiaMaxSpeed,D),oe=B.multiplyBy(K/D),he=K/(c.inertiaDeceleration*P),_e=oe.multiplyBy(-he/2).round();!_e.x&&!_e.y?s.fire("moveend"):(_e=s._limitOffset(_e,s.options.maxBounds),J(function(){s.panBy(_e,{duration:he,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});Ce.addInitHook("addHandler","dragging",Hm),Ce.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Um=Mn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),me(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Fe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,f=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(f,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,f,g;for(f=0,g=c.left.length;f<g;f++)s[c.left[f]]=[-1*o,0];for(f=0,g=c.right.length;f<g;f++)s[c.right[f]]=[o,0];for(f=0,g=c.down.length;f<g;f++)s[c.down[f]]=[0,o];for(f=0,g=c.up.length;f<g;f++)s[c.up[f]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,f,g;for(f=0,g=c.zoomIn.length;f<g;f++)s[c.zoomIn[f]]=o;for(f=0,g=c.zoomOut.length;f<g;f++)s[c.zoomOut[f]]=-o},_addHooks:function(){me(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Fe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,f;if(s in this._panKeys)(!c._panAnim||!c._panAnim._inProgress)&&(f=this._panKeys[s],o.shiftKey&&(f=V(f).multiplyBy(3)),c.panBy(f),c.options.maxBounds&&c.panInsideBounds(c.options.maxBounds));else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;so(o)}}});Ce.addInitHook("addHandler","keyboard",Um),Ce.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Zm=Mn.extend({addHooks:function(){me(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Fe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=hm(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var f=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),so(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),g=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,S=c?Math.ceil(g/c)*c:g,P=o._limitZoom(s+(this._delta>0?S:-S))-s;this._delta=0,this._startTime=null,P&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+P):o.setZoomAround(this._lastMousePos,s+P))}});Ce.addInitHook("addHandler","scrollWheelZoom",Zm);var Sw=600;Ce.mergeOptions({tapHold:ce.touchNative&&ce.safari&&ce.mobile,tapTolerance:15});var Wm=Mn.extend({addHooks:function(){me(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Fe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new R(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(me(document,"touchend",_t),me(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Sw),me(document,"touchend touchcancel contextmenu",this._cancel,this),me(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){Fe(document,"touchend",_t),Fe(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),Fe(document,"touchend touchcancel contextmenu",this._cancel,this),Fe(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new R(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Ce.addInitHook("addHandler","tapHold",Wm),Ce.mergeOptions({touchZoom:ce.touch,bounceAtZoomLimits:!0});var Vm=Mn.extend({addHooks:function(){ve(this._map._container,"leaflet-touch-zoom"),me(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),Fe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),f=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(f)._divideBy(2))),this._startDist=c.distanceTo(f),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),me(document,"touchmove",this._onTouchMove,this),me(document,"touchend touchcancel",this._onTouchEnd,this),_t(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),f=s.mouseEventToContainerPoint(o.touches[1]),g=c.distanceTo(f)/this._startDist;if(this._zoom=s.getScaleZoom(g,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&g<1||this._zoom>s.getMaxZoom()&&g>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,g===1)return}else{var S=c._add(f)._divideBy(2)._subtract(this._centerPoint);if(g===1&&S.x===0&&S.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),ie(this._animRequest);var P=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=J(P,this,!0),_t(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ie(this._animRequest),Fe(document,"touchmove",this._onTouchMove,this),Fe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ce.addInitHook("addHandler","touchZoom",Vm),Ce.BoxZoom=jm,Ce.DoubleClickZoom=$m,Ce.Drag=Hm,Ce.Keyboard=Um,Ce.ScrollWheelZoom=Zm,Ce.TapHold=Wm,Ce.TouchZoom=Vm,n.Bounds=E,n.Browser=ce,n.CRS=se,n.Canvas=Nm,n.Circle=jc,n.CircleMarker=Os,n.Class=X,n.Control=_n,n.DivIcon=Bm,n.DivOverlay=Fn,n.DomEvent=$x,n.DomUtil=Fx,n.Draggable=yr,n.Evented=ne,n.FeatureGroup=uo,n.GeoJSON=tr,n.GridLayer=Yi,n.Handler=Mn,n.Icon=Vo,n.ImageOverlay=Bs,n.LatLng=Y,n.LatLngBounds=A,n.Layer=gn,n.LayerGroup=Wo,n.LineUtil=Jx,n.Map=Ce,n.Marker=Es,n.Mixin=Kx,n.Path=br,n.Point=R,n.PolyUtil=ew,n.Polygon=qo,n.Polyline=er,n.Popup=As,n.PosAnimation=mm,n.Projection=tw,n.Rectangle=Fm,n.Renderer=nr,n.SVG=ea,n.SVGOverlay=Rm,n.TileLayer=Go,n.Tooltip=Is,n.Transformation=De,n.Util=fe,n.VideoOverlay=Lm,n.bind=l,n.bounds=I,n.canvas=Dm,n.circle=uw,n.circleMarker=lw,n.control=Gi,n.divIcon=vw,n.extend=i,n.featureGroup=iw,n.geoJSON=zm,n.geoJson=fw,n.gridLayer=yw,n.icon=aw,n.imageOverlay=pw,n.latLng=te,n.latLngBounds=q,n.layerGroup=ow,n.map=Hx,n.marker=sw,n.point=V,n.polygon=dw,n.polyline=cw,n.popup=_w,n.rectangle=ww,n.setOptions=w,n.stamp=d,n.svg=Mm,n.svgOverlay=mw,n.tileLayer=Am,n.tooltip=gw,n.transformation=Me,n.version=r,n.videoOverlay=hw;var kw=window.L;n.noConflict=function(){return window.L=kw,this},window.L=n})})(w3,Jf);var Pd,ep={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Pd={get exports(){return ep},set exports(e){ep=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Pd.exports?(t.default=t,Pd.exports=t):window.classNames=t}();var iv,av,sv,un=ep;function S3(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function tp(){return tp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tp.apply(this,arguments)}var lv,uv,cv,k3=function(e){return T.createElement("svg",tp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),iv||(iv=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),av||(av=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),sv||(sv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function np(){return np=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},np.apply(this,arguments)}var C3=function(e){return T.createElement("svg",np({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),lv||(lv=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),uv||(uv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),cv||(cv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function we(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ar,bn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};we(`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Panel-module_panel__4VWNp {
  width: 100%;
}

.Panel-module_panel__pointer__BETJ8 {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.Panel-module_panel__pointer-position__Zer8q {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.Panel-module_panel__content-wrapper--info__lrfgo,
.Panel-module_panel__pointer--info__5OaTN {
  background-color: var(--component-panel-color-background-default);
}

.Panel-module_panel__content-wrapper--success__k0JQD,
.Panel-module_panel__pointer--success__O-X6n {
  background-color: var(--component-panel-color-background-success);
}

.Panel-module_panel__content-wrapper--warning__vYY8E,
.Panel-module_panel__pointer--warning__l5Zf8 {
  background-color: var(--component-panel-color-background-warning);
}

.Panel-module_panel__content-wrapper--error__3LhKe,
.Panel-module_panel__pointer--error__4MGTF {
  background-color: var(--colors-red-200);
}

.Panel-module_panel__content-wrapper__oiWk8 {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.Panel-module_panel__icon-wrapper__631EQ {
  display: flex;
  flex: none;
}

.Panel-module_panel__content__U3cAc {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.Panel-module_panel__header__UJuRe {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.Panel-module_panel__body__gRd1x {
  font-size: var(--panel-body-font_size);
}
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Ar||(Ar={}));const P3=({size:e,variant:t})=>{switch(t){case Ar.Info:case Ar.Error:case Ar.Warning:return $.createElement(k3,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Ar.Success:return $.createElement(C3,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},E3=({children:e})=>$.createElement("div",{className:un(bn["panel__pointer-position"])},e),O3=({renderIcon:e=P3,title:t,children:n,variant:r=Ar.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=E3})=>{const d=(({forceMobileLayout:m})=>{const _=S3(`(max-width: ${v1})`);return!!m||_})({forceMobileLayout:l}),p=d?_1:g1;return $.createElement("div",{className:un(bn.panel,{[bn["panel--mobile-layout"]]:d})},i&&u({children:$.createElement("div",{"data-testid":"panel-pointer",className:un(bn.panel__pointer,bn[`panel__pointer--${r}`])})}),$.createElement("div",{"data-testid":"panel-content-wrapper",className:un(bn["panel__content-wrapper"],bn[`panel__content-wrapper--${r}`])},a&&$.createElement("div",{"data-testid":"panel-icon-wrapper",className:bn["panel__icon-wrapper"]},e({size:p,variant:r})),$.createElement("div",{className:bn.panel__content},t&&$.createElement("h2",{className:bn.panel__header},t),$.createElement("div",{className:bn.panel__body},n))))};we(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);we(`.CircularProgress-module_svg__TUYPH {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.CircularProgress-module_circleTransition__D9rut {
  transition: stroke-dashoffset 1s ease-in-out;
}

.CircularProgress-module_container__gVi97 {
  position: relative;
}

.CircularProgress-module_label__OgO-f {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`);we(`/**
 * Do not edit directly
 * Generated on Thu, 02 Feb 2023 08:15:46 GMT
 */

:root {
  --token-set-order-0: Base;
  --token-set-order-1: Components;
  --felles: [object Object];
  --altinn: [object Object];
  --component-icon-size-xs: 1.5rem;
  --component-icon-size-sm: 1.875rem;
  --component-icon-size-md: 2.25rem;
  --component-icon-size-lg: 3rem;
  --component-icon-size-xl: 3.75rem;
  --component-panel-color-background-default: #e6eff8;
  --component-panel-color-background-success: #d1f4e1;
  --component-panel-color-background-warning: #fffbe6;
  --component-panel-color-arrow-default: #e6eff8;
  --component-panel-color-arrow-success: #d1f4e1;
  --component-panel-color-arrow-warning: #fffbe6;
  --component-panel-font_size-header-breakpoint_sm: 1.5rem;
  --component-panel-font_size-header-breakpoint_md: 1.75rem;
  --component-panel-font_size-header-breakpoint_lg: 2.25rem;
  --component-panel-font_size-body-breakpoint_sm: 1rem;
  --component-panel-font_size-body-breakpoint_md: 1.125rem;
  --component-panel-space-padding-x-xs: 1.5rem;
  --component-panel-space-padding-x-md: 6rem;
  --component-panel-space-padding-y-xs: 1.5rem;
  --component-panel-space-padding-y-md: 2.25rem;
  --component-panel-space-gap-xs: 0.75rem;
  --component-panel-space-gap-md: 0.75rem;
  --component-panel-space-text_group-gap-xs: 0.375rem;
  --component-panel-space-arrow_left-md: 6.688rem;
  --component-panel-space-arrow_left-xs: 4rem;
  --component-panel-size-icon-xs: 2.25rem;
  --component-panel-size-icon-md: 3.75rem;
  --component-panel-typography-default-font-family: Altinn-DIN;
  --component-panel-typography-default-font-weight: Regular;
  --component-panel-typography-default-line-height: 1.5;
  --component-panel-typography-default-font-size: 1rem;
  --component-panel-typography-default-letter-spacing: 3%;
  --component-panel-typography-default-paragraph-spacing: 0;
  --component-panel-typography-default-text-decoration: none;
  --component-panel-typography-default-text-case: none;
  --component-panel-font_weight-heading: bold;
  --component-legend-font_weight-default: medium;
  --component-label-font_weight-default: medium;
  --component-expandable_row-color-border_top-default: #d2d5d8;
  --component-expandable_row-color-border_bottom-default: #d2d5d8;
  --component-expandable_row-space-padding-x-xs: 0.75rem;
  --component-expandable_row-space-padding-x-md: 1.5rem;
  --component-expandable_row-space-padding-top-xs: 0.25rem;
  --component-expandable_row-space-padding-bottom-xs: 0.5rem;
  --component-expandable_row-space-gap-title-xs: 0.75;
  --component-expandable_row-space-gap-title-md: 1.5rem;
  --component-expandable_row-size-icon-xs: 1.5rem;
  --component-expandable_row-font_weight-header: medium;
  --component-expandable_row-font_size-header-breakpoint_sm: 1rem;
  --component-expandable_row-font_size-header-breakpoint_md: 1.125rem;
  --component-expandable_row-border_width-default: 1px;
  --component-checkbox-space-gap-xsmall: 0.5rem;
  --component-checkbox-space-gap-small: 0.75rem;
  --component-checkbox-size-width-xsmall: 1.125rem;
  --component-checkbox-size-width-small: 1.5rem;
  --component-checkbox-size-height-xsmall: 1.125rem;
  --component-checkbox-size-height-small: 1.5rem;
  --component-checkbox-color-border-default: #1e2b3c;
  --component-checkbox-color-border-hover: #0062ba;
  --component-checkbox-color-border-checked: #0062ba;
  --component-checkbox-color-border-error: #b3253a;
  --component-checkbox-color-background-default: #ffffff;
  --component-checkbox-color-background-hover: #e6eff8;
  --component-checkbox-color-background-checked: #0062ba;
  --component-checkbox-color-background-error: #ffffff;
  --component-checkbox-color-text-default: #1e2b3c;
  --component-checkbox-color-text-hover: #0062ba;
  --component-checkbox-color-text-checked: #1e2b3c;
  --component-checkbox-color-text-error: #1e2b3c;
  --component-checkbox-border_width-xsmall: 2px;
  --component-checkbox-border_width-small: 2px;
  --component-checkbox-font_size-xs: 0.875rem;
  --component-checkbox-font_size-sm: 1rem;
  --component-fieldset-space-gap-y-xsmall: 0.75rem;
  --component-fieldset-space-gap-y-small: 1.125rem;
  --component-fieldset-space-gap-y-medium: 1.5rem;
  --component-fieldset-space-gap-y-large: 1.5rem;
  --component-field_description-color-text-default: #1e2b3c;
  --component-field_description-space-top-small: 0.5rem;
  --component-field_description-space-top-xsmall: 0.375rem;
  --component-textarea-border_width-normal: 2px;
  --component-textarea-color-border-default: #1e2b3c;
  --component-textarea-color-border-hover: #0062ba;
  --component-textarea-color-border-error: #b3253a;
  --component-textarea-color-background-default: #ffffff;
  --component-textarea-color-background-hover: #ffffff;
  --component-textarea-color-background-focus: #ffffff;
  --component-textarea-color-text-default: #1e2b3c;
  --component-textarea-space-padding-x: 0.75rem;
  --component-textarea-space-padding-y: 0.375rem;
  --component-textarea-size-min_height-xsmall: 6.25rem;
  --component-textarea-size-min_height-small: 9.375rem;
  --component-textarea-size-min_height-medium: 12.5rem;
  --component-textarea-size-min_height-large: 18.75rem;
  --component-textarea-size-min_height-xlarge: 25rem;
  --component-textarea-font_size-sm: 1rem;
  --component-checkbox-group-space-gap-x-xsmall: 1.5rem;
  --component-checkbox-group-space-gap-x-small: 2.25rem;
  --component-checkbox-group-space-gap-y-xsmall: 0.563rem;
  --component-checkbox-group-space-gap-y-small: 1.125rem;
  --component-toggle_button-font_size-sm: 1rem;
  --component-toggle_button-size-min_width-sm: 100%;
  --component-toggle_button-size-min_width-md: auto;
  --component-toggle_button-border_width-inactive: 2px;
  --component-toggle_button-color-background-active: #0062ba;
  --component-toggle_button-color-background-inactive: #ffffff;
  --component-toggle_button-color-text-active: #ffffff;
  --component-toggle_button-color-text-inactive: #1e2b3c;
  --component-toggle_button-color-border-inactive: #0062ba;
  --component-toggle_button-space-padding-x: 1.5rem;
  --component-toggle_button-space-padding-top: 0.125rem;
  --component-toggle_button-space-padding-bottom: 0.25rem;
  --component-icon_button-size-large-circle: 2.25rem;
  --component-icon_button-size-large-icon: 1.4rem;
  --component-icon_button-size-medium-circle: 1.5rem;
  --component-icon_button-size-medium-icon: 0.875rem;
  --component-icon_button-size-small-circle: 1.125rem;
  --component-icon_button-size-small-icon: 0.688rem;
  --component-icon_button-border_width-default: 1px;
  --component-button-filled-primary-color-background-default: #0062ba;
  --component-button-filled-primary-color-background-hover: #004e95;
  --component-button-filled-primary-color-background-pressed: #00315d;
  --component-button-filled-color-text-all: #ffffff;
  --component-button-filled-success-color-background-default: #118849;
  --component-button-filled-success-color-background-hover: #0c6536;
  --component-button-filled-success-color-background-pressed: #084826;
  --component-button-filled-danger-color-background-default: #e02e49;
  --component-button-filled-danger-color-background-hover: #b3253a;
  --component-button-filled-danger-color-background-pressed: #861c2c;
  --component-button-space-gap-small: 0.5rem;
  --component-button-space-gap-medium: 0.5rem;
  --component-button-space-gap-large: 0.5rem;
  --component-button-space-padding-x-small: 1.125rem;
  --component-button-space-padding-x-medium: 2.25rem;
  --component-button-space-padding-x-large: 3rem;
  --component-button-quiet-space-padding-x-small: 0.375rem;
  --component-button-quiet-space-padding-x-medium: 0.563rem;
  --component-button-quiet-space-padding-x-large: 0.563rem;
  --component-button-quiet-primary-color-text-default: #0062ba;
  --component-button-quiet-primary-color-text-pressed: #ffffff;
  --component-button-quiet-primary-color-background-hover: #e6eff8;
  --component-button-quiet-primary-color-background-pressed: #004e95;
  --component-button-outline-primary-color-text-default: #0062ba;
  --component-button-outline-primary-color-text-pressed: #ffffff;
  --component-button-outline-primary-color-border-default: #0062ba;
  --component-button-outline-primary-color-border-hover: #004e95;
  --component-button-outline-primary-color-background-default: #ffffff;
  --component-button-outline-primary-color-background-hover: #e6eff8;
  --component-button-outline-primary-color-background-pressed: #004e95;
  --component-button-border_width-default: 1px;
  --component-button-size-height-small: 2.25rem;
  --component-button-size-height-medium: 3rem;
  --component-button-size-height-large: 3.75rem;
  --component-button-size-icon-small: 1.5rem;
  --component-button-size-icon-medium: 1.875rem;
  --component-button-size-icon-large: 2.5rem;
  --component-input-color-border-default: #1e2b3c;
  --component-input-color-border-hover: #0062ba;
  --component-input-color-background-default: #ffffff;
  --component-input-color-background-hover: #ffffff;
  --component-input-color-background-focus: #ffffff;
  --component-input-error-color-border-default: #b3253a;
  --component-input-space-padding-x: 0.75rem;
  --component-input-space-padding-y: 0.375rem;
  --component-input-border_width-default: 2px;
  --component-input-border_width-focus: 4px;
  --component-input-read_only_info-color-border-default: #fff4b4;
  --component-input-read_only_info-color-background-default: #fff4b4;
  --component-input-read_only_confirm-color-background-default: #d1f4e1;
  --component-input-read_only_confirm-color-border-default: #d1f4e1;
  --component-input-size-min_height-default: 2.25rem;
  --component-input-font_size-sm: 1rem;
  --component-input-font_size-md: 1.125rem;
  --component-error_message-space-padding-top: 0.375rem;
  --component-error_message-color-text: #b3253a;
  --component-error_message-font_size-xs: 0.875rem;
  --border_width-thin: 1px;
  --border_width-standard: 2px;
  --space-half: 0.375;
  --space-base: 0.75;
  --space-x2: 1.5;
  --space-x3: 2.25;
  --space-x4: 3;
  --space-x5: 3.75;
  --space-x6: 4.5;
  --space-x7: 5.25;
  --space-x8: 6;
  --space-x16: 12;
  --interactive_components-border_radius-normal: 3px;
  --interactive_components-border_width-normal: 2px;
  --paragraph_space-default: 2.25rem;
  --font_size-100: 0.75rem;
  --font_size-200: 0.875rem;
  --font_size-300: 1rem;
  --font_size-400-breakpoint_sm: 1rem;
  --font_size-400-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_sm: 1rem;
  --font_size-500-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_lg: 1.25rem;
  --font_size-600-breakpoint_sm: 1.125rem;
  --font_size-600-breakpoint_md: 1.25rem;
  --font_size-600-breakpoint_lg: 1.5rem;
  --font_size-700-breakpoint_sm: 1.25rem;
  --font_size-700-breakpoint_md: 1.5rem;
  --font_size-700-breakpoint_lg: 1.75rem;
  --font_size-800-breakpoint_sm: 1.5rem;
  --font_size-800-breakpoint_md: 1.75rem;
  --font_size-800-breakpoint_lg: 2.25rem;
  --font_size-900-breakpoint_sm: 1.75rem;
  --font_size-900-breakpoint_md: 2.25rem;
  --font_size-900-breakpoint_lg: 2.75rem;
  --font_size-heading-h1-breakpoint_sm: 1.75rem;
  --font_size-heading-h1-breakpoint_md: 2.25rem;
  --font_size-heading-h1-breakpoint_lg: 2.75rem;
  --font_size-heading-h2-breakpoint_sm: 1.5rem;
  --font_size-heading-h2-breakpoint_md: 1.75rem;
  --font_size-heading-h2-breakpoint_lg: 2.25rem;
  --font_size-heading-h3-breakpoint_sm: 1.25rem;
  --font_size-heading-h3-breakpoint_md: 1.5rem;
  --font_size-heading-h3-breakpoint_lg: 1.75rem;
  --font_size-heading-h4-breakpoint_sm: 1.125rem;
  --font_size-heading-h4-breakpoint_md: 1.25rem;
  --font_size-heading-h4-breakpoint_lg: 1.5rem;
  --font_size-heading-h5-breakpoint_sm: 1rem;
  --font_size-heading-h5-breakpoint_md: 1.125rem;
  --font_size-heading-h5-breakpoint_lg: 1.25rem;
  --font_size-component-size-xs: 0.875rem;
  --font_size-component-size-sm: 1rem;
  --font_size-component-size-md: 1.125rem;
  --font_size-component-size-lg: 1.5rem;
  --font_size-body-medium: 1rem;
  --font_size-body-large-breakpoint_sm: 1rem;
  --font_size-body-large-breakpoint_md: 1.125rem;
  --font_size-label-small-breakpoint_sm: 1rem;
  --font_size-label-small-breakpoint_md: 1.125rem;
  --font_size-detail-default: 0.875rem;
  --font_size-ingress-small-breakpoint_sm: 1.125rem;
  --font_size-ingress-small-breakpoint_md: 1.25rem;
  --font_size-ingress-medium-breakpoint_sm: 1.25rem;
  --font_size-ingress-medium-breakpoint_md: 1.5rem;
  --font_family-default: Altinn-DIN;
  --font_family-heading: Altinn-DIN;
  --font_family-ingress: Altinn-DIN;
  --font_family-body: Altinn-DIN;
  --font_family-label: Altinn-DIN;
  --breakpoints-xs: 0px;
  --breakpoints-sm: 540px;
  --breakpoints-md: 768px;
  --breakpoints-lg: 960px;
  --breakpoints-xl: 1200px;
  --breakpoints-xxl: 1600px;
  --typography-default-font-family: Altinn-DIN;
  --typography-default-font-weight: Regular;
  --typography-default-line-height: 1.5;
  --typography-default-font-size: 1rem;
  --typography-default-letter-spacing: 0.3px;
  --typography-default-paragraph-spacing: 0;
  --typography-default-text-decoration: none;
  --typography-default-text-case: none;
  --size-base: 0.75rem;
  --size-x2: 1.5rem;
  --size-x3: 2.25rem;
  --size-x4: 3rem;
  --size-x5: 3.75rem;
  --size-x6: 4.5rem;
  --size-x7: 5.25rem;
  --size-x8: 6rem;
  --size-x10: 7.5rem;
  --size-x16: 12rem;
  --opacity-disabled: 30%;
  --colors-grey-100: #f4f5f6;
  --colors-grey-200: #e9eaec;
  --colors-grey-300: #d2d5d8;
  --colors-grey-400: #bcbfc5;
  --colors-grey-500: #a5aab1;
  --colors-grey-600: #68707c;
  --colors-grey-700: #4b5563;
  --colors-grey-800: #1e2b3c;
  --colors-grey-900: #141e29;
  --colors-white: #ffffff;
  --colors-black: #000000;
  --colors-red-100: #f9d5db;
  --colors-red-200: #f3abb6;
  --colors-red-300: #ec8292;
  --colors-red-400: #e6586d;
  --colors-red-500: #e02e49;
  --colors-red-600: #b3253a;
  --colors-red-700: #861c2c;
  --colors-red-800: #5a121d;
  --colors-red-900: #480e17;
  --colors-orange-100: #ffe8cd;
  --colors-orange-200: #ffd19b;
  --colors-orange-300: #ffba6a;
  --colors-orange-400: #ffa338;
  --colors-orange-500: #ff8c06;
  --colors-orange-600: #cc7005;
  --colors-orange-700: #995404;
  --colors-orange-800: #663802;
  --colors-orange-900: #522d02;
  --colors-yellow-100: #fffbe6;
  --colors-yellow-200: #fff4b4;
  --colors-yellow-300: #ffed83;
  --colors-yellow-400: #ffe551;
  --colors-yellow-500: #ffda06;
  --colors-yellow-600: #e6c405;
  --colors-yellow-700: #ccae05;
  --colors-yellow-800: #998304;
  --colors-yellow-900: #665702;
  --colors-green-100: #e8faf0;
  --colors-green-200: #d1f4e1;
  --colors-green-300: #8be4b5;
  --colors-green-400: #5dd997;
  --colors-green-500: #2ece7a;
  --colors-green-600: #15b560;
  --colors-green-700: #118849;
  --colors-green-800: #0c6536;
  --colors-green-900: #084826;
  --colors-blue-100: #e6eff8;
  --colors-blue-200: #b3d0ea;
  --colors-blue-300: #80b1dd;
  --colors-blue-400: #66a1d6;
  --colors-blue-500: #3381c8;
  --colors-blue-600: #1a72c1;
  --colors-blue-700: #0062ba;
  --colors-blue-800: #004e95;
  --colors-blue-900: #00315d;
  --colors-purple-100: #f5e8f2;
  --colors-purple-200: #e0b9d8;
  --colors-purple-300: #cc8bbf;
  --colors-purple-400: #b75da5;
  --colors-purple-500: #a22e8b;
  --colors-purple-600: #98177e;
  --colors-purple-700: #7a1265;
  --colors-purple-800: #5b0e4c;
  --colors-purple-900: #490b3d;
  --semantic-background-default: #ffffff;
  --semantic-background-subtle: #f4f5f6;
  --semantic-surface-neutral-default: #ffffff;
  --semantic-surface-neutral-subtle: #f4f5f6;
  --semantic-surface-neutral-subtle-hover: #e9eaec;
  --semantic-surface-neutral-selected: #e6eff8;
  --semantic-surface-neutral-inverted: #1e2b3c;
  --semantic-surface-action-subtle: #e6eff8;
  --semantic-surface-action-default: #0062ba;
  --semantic-surface-action-hover: #004e95;
  --semantic-surface-action-active: #00315d;
  --semantic-surface-success-subtle: #d1f4e1;
  --semantic-surface-success-default: #118849;
  --semantic-surface-success-hover: #0c6536;
  --semantic-surface-success-active: #084826;
  --semantic-surface-warning-subtle: #fffbe6;
  --semantic-surface-danger-subtle: #f9d5db;
  --semantic-surface-danger-default: #e02e49;
  --semantic-surface-danger-hover: #b3253a;
  --semantic-surface-danger-active: #861c2c;
  --semantic-surface-info-subtle: #e6eff8;
  --semantic-border-info-default: #004e95;
  --semantic-border-action-subtle: #e6eff8;
  --semantic-border-action-default: #0062ba;
  --semantic-border-action-hover: #004e95;
  --semantic-border-action-active: #00315d;
  --semantic-border-neutral-default: #68707c;
  --semantic-border-neutral-subtle: #d2d5d8;
  --semantic-border-neutral-strong: #1e2b3c;
  --semantic-border-neutral-divider: #bcbfc5;
  --semantic-border-success-default: #0c6536;
  --semantic-border-warning-default: #cc7005;
  --semantic-border-danger-default: #b3253a;
  --semantic-tab_focus-outline-color: #98177e;
  --semantic-tab_focus-outline-offset: 2px;
  --semantic-tab_focus-outline-width: 2px;
  --semantic-text-success-default: #0c6536;
  --semantic-text-success-on_success: #ffffff;
  --semantic-text-neutral-default: #1e2b3c;
  --semantic-text-neutral-subtle: #68707c;
  --semantic-text-neutral-on_inverted: #ffffff;
  --semantic-text-action-default: #0062ba;
  --semantic-text-action-on_action: #ffffff;
  --semantic-text-warning-default: #995404;
  --semantic-text-warning-on_warning: #663802;
  --semantic-text-warning-icon_warning: #cc7005;
  --semantic-text-danger-default: #b3253a;
  --semantic-text-danger-on_danger: #ffffff;
  --semantic-text-visited-default: #7a1265;
  --brand-default-first-100: #feefef;
  --brand-default-first-200: #fddfe0;
  --brand-default-first-300: #fbbfc1;
  --brand-default-first-400: #f89fa1;
  --brand-default-first-500: #f67f82;
  --brand-default-first-600: #f45f63;
  --brand-default-first-700: #dc5659;
  --brand-default-first-800: #c34c4f;
  --brand-default-second-100: #fcf7e9;
  --brand-default-second-200: #faeec2;
  --brand-default-second-300: #f5dda6;
  --brand-default-second-400: #efcc79;
  --brand-default-second-500: #eabb4d;
  --brand-default-second-600: #e5aa20;
  --brand-default-second-700: #ce991d;
  --brand-default-second-800: #b7881a;
  --brand-default-third-100: #e9f5ff;
  --brand-default-third-200: #d2eafd;
  --brand-default-third-300: #a5d6fb;
  --brand-default-third-400: #78c1f9;
  --brand-default-third-500: #4badf7;
  --brand-default-third-600: #1e98f5;
  --brand-default-third-700: #1b88dd;
  --brand-default-third-800: #156aac;
}
`);we(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);T.createContext(void 0);we(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: auto;
  }
}
`);we(`.ToggleButton-module_toggle-button__g4lb- {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.ToggleButton-module_toggle-button--selected__Gm7TD {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButton-module_toggle-button__g4lb-:not(.ToggleButton-module_toggle-button--selected__Gm7TD):hover {
  background-color: var(--colors-blue-200);
}
`);var Xa;(function(e){e.Primary="primary",e.Secondary="secondary"})(Xa||(Xa={}));const b1=T.createContext(void 0),Bh=()=>{const e=T.useContext(b1);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var T3="Accordion-module_accordion__LVhhv";we(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);const z3=({children:e,open:t,onClick:n,iconVariant:r=Xa.Primary})=>{const i=T.useId(),a=T.useId();return $.createElement("div",{className:T3},$.createElement(b1.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};var L3="AccordionHeader-module_accordion-header__QlYjQ",R3="AccordionHeader-module_accordion-header__subtitle__OSUoH",B3="AccordionHeader-module_accordion-header--subtitle__DNear",A3="AccordionHeader-module_accordion-header__title__ss-G6",I3="AccordionHeader-module_accordion-header__actions__eYrxF";we(`.AccordionHeader-module_accordion-header__QlYjQ {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    opacity: 60%;
    font-size: 0.9rem;
    display: block;
  }
  .AccordionHeader-module_accordion-header--subtitle__DNear {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }
}

.AccordionHeader-module_accordion-header__title__ss-G6 {
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.AccordionHeader-module_accordion-header__actions__eYrxF {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0 0.2rem;
}
`);var dv,fv={"accordion-icon":"AccordionIcon-module_accordion-icon__PWdLi","accordion-icon--opened":"AccordionIcon-module_accordion-icon--opened__Vv1Nk"};function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rp.apply(this,arguments)}we(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);var pv,N3=function(e){return T.createElement("svg",rp({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),dv||(dv=T.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))};function op(){return op=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},op.apply(this,arguments)}var D3=function(e){return T.createElement("svg",op({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),pv||(pv=T.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))};const M3=()=>{const{onClick:e,open:t,iconVariant:n}=Bh(),r={height:20,width:20,className:un([fv["accordion-icon"],{[fv["accordion-icon--opened"]]:t}]),"data-testid":n,onClick:e};switch(n){case Xa.Primary:return $.createElement(N3,Object.assign({},r));case Xa.Secondary:return $.createElement(D3,Object.assign({},r))}},F3=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Bh();return $.createElement("div",{className:un(L3,{[B3]:n})},$.createElement(M3,null),$.createElement("button",{className:un(A3),"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&$.createElement("div",{"data-testid":"accordion-header-subtitle",className:un(R3)},n)),$.createElement("div",{className:un(I3)},t))},j3=({children:e})=>{const{open:t,contentId:n,headerId:r}=Bh();return $.createElement("div",null,t&&$.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};function x1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const ip=e=>{var{svgIconComponent:t}=e,n=x1(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var ap,sp,lp,Hn={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};we(`.Button-module_altinn-button__66e22 {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Button-module_altinn-button__66e22:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Button-module_altinn-button__66e22:focus:not(:focus-visible) {
  outline: none;
}

.Button-module_altinn-button__66e22:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Button-module_icon__-43u5 {
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_altinn-button--small__Dgk-Q {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.Button-module_altinn-button--medium__bOVBh {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.Button-module_altinn-button--large__xStsn {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.Button-module_altinn-button--full-width__MAP1E {
  width: 100%;
}

.Button-module_altinn-button--dashed-border__qpC6S {
  border-style: dashed;
}

.Button-module_altinn-button--only-icon__dHhst {
  padding: 0.5rem !important;
}

.Button-module_altinn-button--filled__-w8IZ {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.Button-module_altinn-button--outline__NWnjl {
  border-radius: 3px;
  background-color: transparent;
}

.Button-module_altinn-button--quiet__2HgNN {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.Button-module_altinn-button--filled--primary__qR1t6 {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):active {
  background: var(--colors-blue-950);
}

.Button-module_altinn-button--filled--success__-hCDf {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_altinn-button--filled--danger__dshZU {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):active {
  background: var(--colors-red-800);
}

.Button-module_altinn-button--filled--inverted__B3H2y {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--filled--inverted__B3H2y:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_altinn-button--outline--primary__yrQtz {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_altinn-button--outline--secondary__NQPoO {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--success__oAdH7 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.Button-module_altinn-button--outline--inverted__opiJ3 {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--outline--inverted__opiJ3:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_altinn-button--quiet--primary__ym-xv {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_altinn-button--quiet--secondary__LschY {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--success__AvIPs {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.Button-module_altinn-button--quiet--danger__buvJM {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Button-module_altinn-button--quiet--inverted__-VC-B {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:focus-visible {
  outline-color: var(--colors-white);
}
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(ap||(ap={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(sp||(sp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(lp||(lp={}));var cu,Ya;T.forwardRef((e,t)=>{var{children:n,color:r=sp.Primary,variant:i=lp.Filled,size:a=ap.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:p,type:m="button",className:_}=e,h=x1(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},h,{ref:t,className:un(Hn["altinn-button"],Hn[`altinn-button--${a}`],Hn[`altinn-button--${i}`],Hn[`altinn-button--${r}`],Hn[`altinn-button--${i}--${r}`],{[Hn["altinn-button--full-width"]]:l},{[Hn["altinn-button--dashed-border"]]:u},{[Hn["altinn-button--only-icon"]]:!n&&p},_),type:m}),p&&d==="left"&&$.createElement(ip,{svgIconComponent:p,className:Hn.icon}),n,p&&d==="right"&&$.createElement(ip,{svgIconComponent:p,className:Hn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(cu||(cu={})),function(e){e.Small="small",e.Medium="medium"}(Ya||(Ya={}));const w1=T.createContext({color:cu.Primary,size:Ya.Medium});var $3="Page-module_page__THNNc";we(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const H3=({children:e,color:t=cu.Primary,size:n=Ya.Medium})=>$.createElement("div",{className:$3},$.createElement(w1.Provider,{value:{color:t,size:n}},e));var Ed={"page-header":"PageHeader-module_page-header__94GS1","page-header--primary":"PageHeader-module_page-header--primary__-DYm-","page-header--success":"PageHeader-module_page-header--success__JUNEP","page-header--small":"PageHeader-module_page-header--small__iSiFU","page-header--medium":"PageHeader-module_page-header--medium__TiCR6"};we(`.PageHeader-module_page-header__94GS1 {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.PageHeader-module_page-header--primary__-DYm- {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.PageHeader-module_page-header--success__JUNEP {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.PageHeader-module_page-header--small__iSiFU {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.PageHeader-module_page-header--medium__TiCR6 {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`);const U3=({children:e,icon:t})=>{const{color:n,size:r}=(()=>{const a=T.useContext(w1);if(a===void 0)throw new Error("usePageContext must be used within a PageContext");return a})(),i=r===Ya.Small?28:40;return $.createElement("header",{className:un(Ed["page-header"],Ed[`page-header--${n}`],Ed[`page-header--${r}`])},$.createElement(ip,{width:i,height:i,svgIconComponent:t}),$.createElement("span",null,e))};var Z3={"page-content":"PageContent-module_page-content__-sHWi"};we(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const hv=({children:e})=>$.createElement("div",{className:un(Z3["page-content"])},e);var up;we(`.List-module_list__9aWGq {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.List-module_list--solid__--Ld- {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.List-module_list--dashed__CDfmL {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`),function(e){e.Solid="solid",e.Dashed="dashed"}(up||(up={}));T.createContext({borderStyle:up.Solid});we(`.ListItem-module_list-item__OIENi {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.ListItem-module_list-item--solid__H4Nk8 {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ListItem-module_list-item--dashed__26PJV {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`);var mv,_v,gv;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(mv||(mv={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(_v||(_v={})),function(e){e.None="none",e.Error="error",e.Search="search"}(gv||(gv={}));we(`.InputWrapper-module_InputWrapper__us2BQ {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper-module_InputWrapper--with-focus-effect__24aF7:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper-module_InputWrapper--default__Lcj6I:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_InputWrapper--error__C8fG3 {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_InputWrapper--error__C8fG3:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper-module_InputWrapper--disabled__p0H70 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-info__u6Mi8 {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-confirm__Y-YY- {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_InputWrapper--search__1aIP8 {
  flex-direction: row-reverse;
}

.InputWrapper-module_InputWrapper--with-padding__o-H2V {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_InputWrapper__field__-Uwxu {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper-module_InputWrapper__icon__tbkEy {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper-module_InputWrapper__icon--disabled__mmqUt {
  opacity: 60%;
}

.InputWrapper-module_InputWrapper__label__tLifi {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);we(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);we(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var cp,vv;we(`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
}
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(cp||(cp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(vv||(vv={}));T.createContext(void 0);T.createContext({variantStandard:cp.Body});we(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);we(`.TableRow-module_TableRow__3GK6I {
  width: 1056px;
  height: 60px;
}

.TableRow-module_table-row--selected__0i2on {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.TableRow-module_table-row--body__CP23F:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);we(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);we(`.TableCell-module_header-table-cell__NOs4b {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_header-table-cell-radiobutton__I1mdW {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_body-table-cell__MhHfa {
  text-align: left;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_body-table-cell-radiobutton__kha-K {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_image__vWvwd {
  max-width: 45px;
  max-height: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0px 15px 0px 15px;
}
.TableCell-module_radio-button__FbSRH {
  margin: 0px 0px 0px 15px;
}

.TableCell-module_container-sortable__70xdN {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.TableCell-module_icon__ADG4G {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_icon-desc__do5N3 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_icon-asc__96gN7 {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}

.TableCell-module_header__HuaKn {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

.TableCell-module_property__k74rm {
  margin: 10px 10px 10px 0;
}
`);we(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var yv;we(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.CheckboxRadioTemplate-module_altinn-template--xsmall__oK4HN {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_altinn-template--small__AkNZO {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__ToryX {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__input__SiID4 {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__visible-box__qrEbd {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__jBhWL {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__label__p2F6D {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__description__vqkxP {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(yv||(yv={}));var bv;we(`.RadioButton-module_altinn-radio__iDfpf {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_altinn-radio--small__DK5Mw {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_altinn-radio--xsmall__pYclx {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_altinn-radio--error__-z3qC {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_altinn-radio--checked__LWN7U:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--error__-z3qC) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_altinn-radio__iDfpf:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--checked__LWN7U):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_altinn-radio__iDfpf:not(
    .RadioButton-module_altinn-radio--disabled__XCncL,
    .RadioButton-module_altinn-radio--error__-z3qC,
    .RadioButton-module_altinn-radio--checked__LWN7U
  ):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_altinn-radio--disabled__XCncL.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.RadioButton-module_altinn-visible-button__2nitf {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_altinn-visible-button__checkmark__U-wDg {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(bv||(bv={}));we(`.Checkbox-module_altinn-checkbox__UGXBu {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_altinn-checkbox--compact__GRWwc {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_altinn-checkbox--error__drS2Y {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-checkmark-display: inline-block;
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ:not(.Checkbox-module_altinn-checkbox--disabled__w-UgR) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--error__drS2Y,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_altinn-checkbox--disabled__w-UgR.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.Checkbox-module_altinn-checkbox--read-only__EJpNV {
  --cursor: auto;
}

.Checkbox-module_altinn-visible-box__MaStE {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_altinn-visible-box__checkmark__MP-Mb {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);we(`.TextArea-module_altinn-TextArea__lzLj9 {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.TextArea-module_altinn-TextArea--resize-none__N8fGA {
  resize: none;
}

.TextArea-module_altinn-TextArea--resize-both__EPavZ {
  resize: both;
}

.TextArea-module_altinn-TextArea--resize-horizontal__VRq3u {
  resize: horizontal;
}

.TextArea-module_altinn-TextArea--resize-vertical__qxnks {
  resize: vertical;
}
`);var xv;we(`.FieldSet-module_altinn-field-set__NebiS {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_altinn-field-set--xsmall__J07mi {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_altinn-field-set__NebiS:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.FieldSet-module_altinn-field-set__NebiS:disabled * {
  opacity: 1;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 {
  font-weight: bold;
  padding: 0;
}

.FieldSet-module_altinn-field-set__description__8AMj5 {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 + .FieldSet-module_altinn-field-set__description__8AMj5 {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_altinn-field-set__content__Q5V0v:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_altinn-field-set__error-message__rNV-5 {
  margin-top: var(--error_message-margin_top);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(xv||(xv={}));var wv;we(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_altinn-checkbox-group--compact__xSYGF {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_altinn-checkbox-group--vertical__s2AkE {
  flex-direction: column;
}

.CheckboxGroup-module_altinn-checkbox-group--horizontal__Wl42J {
  flex-direction: row;
}
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(wv||(wv={}));we(`.Pagination-module_pagination-icon__zVOLT {
  fill: rgb(0, 0, 0);
}

.Pagination-module_pagination-icon__zVOLT:not(:last-child) {
  margin-right: 20px;
}

.Pagination-module_pagination-icon__zVOLT:hover {
  cursor: pointer;
}

.Pagination-module_pagination-icon--disabled__IvaxN {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.Pagination-module_pagination-wrapper__cUN7w {
  display: flex;
  align-items: center;
  justify-content: right;
}

.Pagination-module_icon-button__uZQ12 {
  background-color: transparent;
  margin: 5px;
  border: none;
}

.Pagination-module_description-text__ondJh {
  margin-right: 64px;
}

.Pagination-module_select-pagination__mma1- {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .Pagination-module_pagination-wrapper__cUN7w {
    display: flex;
    flex-direction: column;
  }
  .Pagination-module_pagination-wrapper-row__yaNEB {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .Pagination-module_description-text__ondJh {
    margin-top: 10px;
    margin-right: 30px;
  }
  .Pagination-module_select-pagination__mma1- {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`);we(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4 {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__cross__tRRZX {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);we(`.Select-module_altinn-select__678hU {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_altinn-select--disabled__3ckBL {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Select-module_altinn-select--expanded__cA3tN {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_altinn-select__678hU:not(.Select-module_altinn-select--expanded__cA3tN) .Select-module_altinn-select__option-list__ZT-fJ {
  display: none;
}

.Select-module_altinn-select--using-keyboard__-6NMj {
  --option-outline-focus: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__button__2FWU3 {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_altinn-select__field__R4jZc {
  display: inline-flex;
  padding: 0;
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__R4jZc,
.Select-module_altinn-select--single__IapdF .Select-module_altinn-select__field__button__2FWU3 {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.Select-module_altinn-select--single__field__value__ywU8x {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.Select-module_altinn-select--multiple__field__values__oNU3G {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__button__2FWU3:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__arrow-wrapper__TqwIN {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_altinn-select__field__arrow-wrapper__arrow__4z33K {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6 {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  cursor: auto;
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.Select-module_altinn-select--multiple__field__delete-button__cross__PqK7N {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_altinn-select__option-list__ZT-fJ {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.Select-module_altinn-select__option-list__option__6b--t {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Select-module_altinn-select__option-list__option__6b--t:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk {
  background-color: var(--option-background_color-selected);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_altinn-select--multiple__option-list__option--focused__R36IO {
  outline: var(--option-outline-focus);
}
`);we(`.Tabs-module_altinn-tabs__YJ7fE {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.Tabs-module_altinn-tabs__tablist__iOp0D {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_altinn-tabs__tablist__tab--selected__zxZv4 {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.Tabs-module_altinn-tabs__divider__jmabD {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_altinn-tabs__tabpanel__RBbkH {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);var Sv,kv;we(`.RadioGroup-module_altinn-radio-group__Eje9Q {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_altinn-radio-group--xsmall__50AkM {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_altinn-radio-group--small__nFoFM {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_altinn-radio-group--vertical__uCqzM {
  flex-direction: column;
}

.RadioGroup-module_altinn-radio-group--horizontal__jACTG {
  flex-direction: row;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Sv||(Sv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(kv||(kv={}));let Cv=0;function W3(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Cv+=1,n(`aksel-icon-${Cv}`))},[t]),r}const Pv=$["useId"];function S1(e){var t;if(Pv!==void 0){const n=Pv();return e??n.replace(/(:)/g,"")}return(t=W3(e))!==null&&t!==void 0?t:""}var V3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const q3=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=V3(e,["title","titleId"]);let a=S1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),K3=q3;var G3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Q3=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=G3(e,["title","titleId"]);let a=S1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),X3=Q3;function Fi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Od,k1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Od=k1,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Od.exports?(t.default=t,Od.exports=t):window.classNames=t}();var It=k1.exports;const Ev=e=>{var{svgIconComponent:t}=e,n=Fi(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function xt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var dp,fp,pp,rr={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};xt(`.Button-module_button__2ZuB7 {\r
    --icon-size: var(--component-button-size-icon-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --border-radius: 3px;\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
    all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */\r
    align-items: center;\r
    border-radius: var(--border-radius);\r
    border: var(--component-button-border_width-default) solid transparent;\r
    box-sizing: border-box;\r
    color: var(--font-and-icon-color);\r
    cursor: pointer;\r
    display: flex;\r
    fill: var(--font-and-icon-color);\r
    font-family: inherit;\r
    justify-content: center;\r
    letter-spacing: var(--typography-default-letter-spacing);\r
    padding: 0 var(--button-vertical-padding);\r
    text-align: center;\r
}\r
\r
.Button-module_button__2ZuB7:focus-visible {\r
    outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
    outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Button-module_button__2ZuB7:focus:not(:focus-visible) {\r
    outline: none;\r
}\r
\r
.Button-module_button__2ZuB7:disabled {\r
    cursor: auto;\r
    opacity: var(--opacity-disabled);\r
}\r
\r
.Button-module_icon__-43u5 {\r
    height: var(--icon-size);\r
    width: var(--icon-size);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_small__l39oh {\r
    height: var(--component-button-size-height-small);\r
    font-size: var(--font_size-300);\r
    --icon-size: var(--component-button-size-icon-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
    height: var(--component-button-size-height-medium);\r
    min-width: var(--component-button-size-height-medium);\r
    font-size: var(--font_size-400-breakpoint_md);\r
    --icon-size: var(--component-button-size-icon-medium);\r
    --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
    gap: var(--component-button-space-gap-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
    height: var(--component-button-size-height-large);\r
    min-width: var(--component-button-size-height-large);\r
    font-size: var(--font_size-600-breakpoint_md);\r
    --icon-size: var(--component-button-size-icon-large);\r
    --button-vertical-padding: var(--component-button-space-padding-x-large);\r
    gap: var(--component-button-space-gap-large);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {\r
    width: 100%;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {\r
    border-style: dashed;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq- {\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {\r
    --border-radius: 50px;\r
    padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
    padding: 0.5rem;\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
    background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):hover {\r
    background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):active {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):active {\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
    background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):hover {\r
    background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):active {\r
    background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
    background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):hover {\r
    background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):active {\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-default);\r
    border-color: var(--component-button-outline-primary-color-border-default);\r
    background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-outline-primary-color-background-hover);\r
    border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);\r
    background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
    border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
    background: var(--colors-white);\r
    border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-500);\r
    background: var(--colors-white);\r
    border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-700);\r
    background: var(--colors-red-100);\r
    border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    border-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-neutral-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-800);\r
    background: var(--colors-red-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(dp||(dp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(fp||(fp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(pp||(pp={}));T.forwardRef((e,t)=>{var{children:n,color:r=fp.Primary,variant:i=pp.Filled,size:a=dp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:p,type:m="button",className:_}=e,h=Fi(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},h,{ref:t,className:It(rr.button,rr[a],rr[i],rr[r],{[rr.fullWidth]:l},{[rr.dashedBorder]:u},{[rr.onlyIcon]:!n&&p},_),type:m}),p&&d==="left"&&$.createElement(Ev,{svgIconComponent:p,className:rr.icon}),n,p&&d==="right"&&$.createElement(Ev,{svgIconComponent:p,className:rr.icon}))});var Y3="ErrorMessage-module_errorMessageWrapper__rSdCu";xt(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const J3=({id:e,children:t,ariaLabel:n})=>$.createElement("div",{"aria-label":n,className:Y3,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Ov(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Td(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function eA(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}const Ah=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function C1(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function P1(e){return e.length===new Set(e).size}var tA="Tabs-module_tabs__QzIkz",nA="Tabs-module_tablist__WR6ag",rA="Tabs-module_tab__IdDYc",oA="Tabs-module_selected__TxfYv",iA="Tabs-module_divider__-r5Cd",aA="Tabs-module_tabpanel__0vR1c";xt(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
\r
.Tabs-module_tabs__QzIkz {\r
  --divider-color: #c9c9c9;\r
  --divider-width: 1px;\r
  --tab-border_bottom_color-selected: var(--colors-blue-700);\r
  --tab-border_bottom_color: transparent;\r
  --tab-border_bottom_width: 4px;\r
  --tab-font_family: var(--font_family-default);\r
  --tab-font_size: var(--font_size-component-size-sm);\r
  --tab-font_weight: 500;\r
  --tab-height: 32px;\r
  --tab-text_color-hover: var(--colors-black);\r
  --tab-text_color-selected: var(--colors-blue-700);\r
  --tab-text_color: #68707c;\r
  --tablist-gap: 1.5rem;\r
  --tablist-margin_horizontal: 20px;\r
  --tabpanel-margin_horizontal: 20px;\r
  --tabpanel-margin_vertical: 20px;\r
  position: relative;\r
}\r
\r
.Tabs-module_tablist__WR6ag {\r
  display: flex;\r
  gap: var(--tablist-gap);\r
  margin: 0 var(--tablist-margin_horizontal);\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.Tabs-module_tab__IdDYc {\r
  background-color: transparent;\r
  border-bottom-color: var(--tab-border_bottom_color);\r
  border-bottom-style: solid;\r
  border-width: 0 0 var(--tab-border_bottom_width) 0;\r
  color: var(--tab-text_color);\r
  cursor: pointer;\r
  font-family: var(--tab-font_family);\r
  font-size: var(--tab-font_size);\r
  font-weight: var(--tab-font_weight);\r
  line-height: var(--tab-height);\r
  margin: 0;\r
  overflow: hidden;\r
  padding: 0;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {\r
  --tab-text_color: var(--tab-text_color-selected);\r
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\r
}\r
\r
.Tabs-module_tab__IdDYc:hover {\r
  --tab-text_color: var(--tab-text_color-hover);\r
}\r
\r
.Tabs-module_tab__IdDYc:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Tabs-module_divider__-r5Cd {\r
  border-color: var(--divider-color);\r
  border-style: solid;\r
  border-width: var(--divider-width) 0 0 0;\r
  height: var(--divider-width);\r
  margin: 0;\r
  position: absolute;\r
  top: var(--tab-height);\r
  width: 100%;\r
}\r
\r
.Tabs-module_tabpanel__0vR1c {\r
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\r
}\r
`);const Tv=e=>e.replace(/\s/,"_"),sA=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:w,content:O,value:y,tabId:b,panelId:k})=>{const C=y??w;return{name:w,content:O,value:C,tabId:b??r+Tv(C)+"-tab",panelId:k??r+Tv(C)+"-panel"}});if(!P1(i.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>i.findIndex(O=>O.value===w),l=e??i[0].value,[u,d]=T.useState(l),[p,m]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const _=T.useRef(null),h=i.length-1;Ah(()=>{var w;(w=_.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[p].focus()},[p]);const v=w=>{u!==w&&n&&n(w),d(w),m(a(w))},x=w=>O=>{switch(O.key){case"ArrowRight":p!==void 0&&m(p===h?0:p+1);break;case"ArrowLeft":p!==void 0&&m(p===0?h:p-1);break;case"Space":v(w)}};return $.createElement("div",{className:tA},$.createElement("div",{className:nA,ref:_,role:"tablist"},i.map((w,O)=>{const y=w.value===u;return $.createElement("button",{"aria-controls":w.panelId,"aria-selected":y,className:It(rA,y&&oA),id:w.tabId,key:w.value,onClick:()=>v(w.value),onKeyDown:x(w.value),role:"tab",tabIndex:p===O?0:-1},w.name)})),$.createElement("hr",{className:iA}),i.map(w=>$.createElement("div",{className:aA,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};function Ja(e){return e.split("-")[1]}function Ih(e){return e==="y"?"height":"width"}function Oo(e){return e.split("-")[0]}function hs(e){return["top","bottom"].includes(Oo(e))?"x":"y"}function zv(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=hs(t),d=Ih(u),p=r[d]/2-i[d]/2,m=u==="x";let _;switch(Oo(t)){case"top":_={x:a,y:r.y-i.height};break;case"bottom":_={x:a,y:r.y+r.height};break;case"right":_={x:r.x+r.width,y:l};break;case"left":_={x:r.x-i.width,y:l};break;default:_={x:r.x,y:r.y}}switch(Ja(t)){case"start":_[u]-=p*(n&&m?-1:1);break;case"end":_[u]+=p*(n&&m?-1:1)}return _}function E1(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function du(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function O1(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:_="floating",altBoundary:h=!1,padding:v=0}=t,x=E1(v),w=u[h?_==="floating"?"reference":"floating":_],O=du(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:p,rootBoundary:m,strategy:d})),y=_==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),k=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},C=du(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(O.top-C.top+x.top)/k.y,bottom:(C.bottom-O.bottom+x.bottom)/k.y,left:(O.left-C.left+x.left)/k.x,right:(C.right-O.right+x.right)/k.x}}const lA=Math.min,uA=Math.max;function hp(e,t,n){return uA(e,lA(t,n))}const Lv=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const p=E1(r),m={x:i,y:a},_=hs(l),h=Ih(_),v=await d.getDimensions(n),x=_==="y"?"top":"left",w=_==="y"?"bottom":"right",O=u.reference[h]+u.reference[_]-m[_]-u.floating[h],y=m[_]-u.reference[_],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let k=b?_==="y"?b.clientHeight||0:b.clientWidth||0:0;k===0&&(k=u.floating[h]);const C=O/2-y/2,z=p[x],N=k-v[h]-p[w],M=k/2-v[h]/2+C,F=hp(z,M,N),H=Ja(l)!=null&&M!=F&&u.reference[h]/2-(M<z?p[x]:p[w])-v[h]/2<0;return{[_]:m[_]-(H?M<z?z-M:N-M:0),data:{[_]:F,centerOffset:M-F}}}}),cA={left:"right",right:"left",bottom:"top",top:"bottom"};function ol(e){return e.replace(/left|right|bottom|top/g,t=>cA[t])}const dA={start:"end",end:"start"};function zd(e){return e.replace(/start|end/g,t=>dA[t])}const fA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:_,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...w}=e,O=Oo(r),y=Oo(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),k=_||(y||!x?[ol(l)]:function(j){const J=ol(j);return[zd(j),J,zd(J)]}(l));_||v==="none"||k.push(...function(j,J,ie,fe){const X=Ja(j);let le=function(U,ne,R){const re=["left","right"],V=["right","left"],E=["top","bottom"],I=["bottom","top"];switch(U){case"top":case"bottom":return R?ne?V:re:ne?re:V;case"left":case"right":return ne?E:I;default:return[]}}(Oo(j),ie==="start",fe);return X&&(le=le.map(U=>U+"-"+X),J&&(le=le.concat(le.map(zd)))),le}(l,x,v,b));const C=[l,...k],z=await O1(t,w),N=[];let M=((n=i.flip)==null?void 0:n.overflows)||[];if(p&&N.push(z[O]),m){const{main:j,cross:J}=function(ie,fe,X){X===void 0&&(X=!1);const le=Ja(ie),U=hs(ie),ne=Ih(U);let R=U==="x"?le===(X?"end":"start")?"right":"left":le==="start"?"bottom":"top";return fe.reference[ne]>fe.floating[ne]&&(R=ol(R)),{main:R,cross:ol(R)}}(r,a,b);N.push(z[j],z[J])}if(M=[...M,{placement:r,overflows:N}],!N.every(j=>j<=0)){var F;const j=(((F=i.flip)==null?void 0:F.index)||0)+1,J=C[j];if(J)return{data:{index:j,overflows:M},reset:{placement:J}};let ie="bottom";switch(h){case"bestFit":{var H;const fe=(H=M.map(X=>[X,X.overflows.filter(le=>le>0).reduce((le,U)=>le+U,0)]).sort((X,le)=>X[1]-le[1])[0])==null?void 0:H[0].placement;fe&&(ie=fe);break}case"initialPlacement":ie=l}if(r!==ie)return{reset:{placement:ie}}}return{}}}},pA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:p}=a,m=await(d.isRTL==null?void 0:d.isRTL(p.floating)),_=Oo(u),h=Ja(u),v=hs(u)==="x",x=["left","top"].includes(_)?-1:1,w=m&&v?-1:1,O=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:k}=typeof O=="number"?{mainAxis:O,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...O};return h&&typeof k=="number"&&(b=h==="end"?-1*k:k),v?{x:b*w,y:y*x}:{x:y*x,y:b*w}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function cn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gn(e){return cn(e).getComputedStyle(e)}function Yr(e){return z1(e)?(e.nodeName||"").toLowerCase():""}let il;function T1(){if(il)return il;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(il=e.brands.map(t=>t.brand+"/"+t.version).join(" "),il):navigator.userAgent}function hr(e){return e instanceof cn(e).HTMLElement}function zn(e){return e instanceof cn(e).Element}function z1(e){return e instanceof cn(e).Node}function Rv(e){return typeof ShadowRoot>"u"?!1:e instanceof cn(e).ShadowRoot||e instanceof ShadowRoot}function fc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Gn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function hA(e){return["table","td","th"].includes(Yr(e))}function mp(e){const t=/firefox/i.test(T1()),n=Gn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function L1(){return!/^((?!chrome|android).)*safari/i.test(T1())}function Nh(e){return["html","body","#document"].includes(Yr(e))}const Bv=Math.min,La=Math.max,fu=Math.round;function R1(e){const t=Gn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=fu(n)!==i||fu(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function B1(e){return zn(e)?e:e.contextElement}const A1={x:1,y:1};function xi(e){const t=B1(e);if(!hr(t))return A1;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=R1(t);let l=(a?fu(n.width):n.width)/r,u=(a?fu(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function No(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=B1(e);let d=A1;t&&(r?zn(r)&&(d=xi(r)):d=xi(e));const p=u?cn(u):window,m=!L1()&&n;let _=(l.left+(m&&((i=p.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,h=(l.top+(m&&((a=p.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,v=l.width/d.x,x=l.height/d.y;if(u){const w=cn(u),O=r&&zn(r)?cn(r):r;let y=w.frameElement;for(;y&&r&&O!==w;){const b=xi(y),k=y.getBoundingClientRect(),C=getComputedStyle(y);k.x+=(y.clientLeft+parseFloat(C.paddingLeft))*b.x,k.y+=(y.clientTop+parseFloat(C.paddingTop))*b.y,_*=b.x,h*=b.y,v*=b.x,x*=b.y,_+=k.x,h+=k.y,y=cn(y).frameElement}}return{width:v,height:x,top:h,right:_+v,bottom:h+x,left:_,x:_,y:h}}function Zr(e){return((z1(e)?e.ownerDocument:e.document)||window.document).documentElement}function pc(e){return zn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function I1(e){return No(Zr(e)).left+pc(e).scrollLeft}function mA(e,t,n){const r=hr(t),i=Zr(t),a=No(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((Yr(t)!=="body"||fc(i))&&(l=pc(t)),hr(t)){const d=No(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=I1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function es(e){if(Yr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Rv(e)?e.host:null)||Zr(e);return Rv(t)?t.host:t}function Av(e){return hr(e)&&Gn(e).position!=="fixed"?e.offsetParent:null}function Iv(e){const t=cn(e);let n=Av(e);for(;n&&hA(n)&&Gn(n).position==="static";)n=Av(n);return n&&(Yr(n)==="html"||Yr(n)==="body"&&Gn(n).position==="static"&&!mp(n))?t:n||function(r){let i=es(r);for(;hr(i)&&!Nh(i);){if(mp(i))return i;i=es(i)}return null}(e)||t}function N1(e){const t=es(e);return Nh(t)?e.ownerDocument.body:hr(t)&&fc(t)?t:N1(t)}function Wr(e,t){var n;t===void 0&&(t=[]);const r=N1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=cn(r);return i?t.concat(a,a.visualViewport||[],fc(r)?r:[]):t.concat(r,Wr(r))}function Nv(e,t,n){return t==="viewport"?du(function(r,i){const a=cn(r),l=Zr(r),u=a.visualViewport;let d=l.clientWidth,p=l.clientHeight,m=0,_=0;if(u){d=u.width,p=u.height;const h=L1();(h||!h&&i==="fixed")&&(m=u.offsetLeft,_=u.offsetTop)}return{width:d,height:p,x:m,y:_}}(e,n)):zn(t)?function(r,i){const a=No(r,!0,i==="fixed"),l=a.top+r.clientTop,u=a.left+r.clientLeft,d=hr(r)?xi(r):{x:1,y:1},p=r.clientWidth*d.x,m=r.clientHeight*d.y,_=u*d.x,h=l*d.y;return{top:h,left:_,right:_+p,bottom:h+m,x:_,y:h,width:p,height:m}}(t,n):du(function(r){var i;const a=Zr(r),l=pc(r),u=(i=r.ownerDocument)==null?void 0:i.body,d=La(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),p=La(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let m=-l.scrollLeft+I1(r);const _=-l.scrollTop;return Gn(u||a).direction==="rtl"&&(m+=La(a.clientWidth,u?u.clientWidth:0)-d),{width:d,height:p,x:m,y:_}}(Zr(e)))}const _A={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,p){const m=p.get(d);if(m)return m;let _=Wr(d).filter(w=>zn(w)&&Yr(w)!=="body"),h=null;const v=Gn(d).position==="fixed";let x=v?es(d):d;for(;zn(x)&&!Nh(x);){const w=Gn(x),O=mp(x);(v?O||h:O||w.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=w:_=_.filter(y=>y!==x),x=es(x)}return p.set(d,_),_}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,p)=>{const m=Nv(t,p,i);return d.top=La(m.top,d.top),d.right=Bv(m.right,d.right),d.bottom=Bv(m.bottom,d.bottom),d.left=La(m.left,d.left),d},Nv(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=hr(n),a=Zr(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((Yr(n)!=="body"||fc(a))&&(l=pc(n)),hr(n))){const p=No(n);u=xi(n),d.x=p.x+n.clientLeft,d.y=p.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:zn,getDimensions:function(e){return R1(e)},getOffsetParent:Iv,getDocumentElement:Zr,getScale:xi,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Iv,a=this.getDimensions;return{reference:mA(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Gn(e).direction==="rtl"};function gA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,p=d||a?[...zn(e)?Wr(e):e.contextElement?Wr(e.contextElement):[],...Wr(t)]:[];p.forEach(v=>{d&&v.addEventListener("scroll",n,{passive:!0}),a&&v.addEventListener("resize",n)});let m,_=null;if(l){let v=!0;_=new ResizeObserver(()=>{v||n(),v=!1}),zn(e)&&!u&&_.observe(e),zn(e)||!e.contextElement||u||_.observe(e.contextElement),_.observe(t)}let h=u?No(e):null;return u&&function v(){const x=No(e);!h||x.x===h.x&&x.y===h.y&&x.width===h.width&&x.height===h.height||n(),h=x,m=requestAnimationFrame(v)}(),n(),()=>{var v;p.forEach(x=>{d&&x.removeEventListener("scroll",n),a&&x.removeEventListener("resize",n)}),(v=_)==null||v.disconnect(),_=null,u&&cancelAnimationFrame(m)}}const vA=(e,t,n)=>{const r=new Map,i={platform:_A,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:p="bottom",strategy:m="absolute",middleware:_=[],platform:h}=d,v=_.filter(Boolean),x=await(h.isRTL==null?void 0:h.isRTL(u));let w=await h.getElementRects({reference:l,floating:u,strategy:m}),{x:O,y}=zv(w,p,x),b=p,k={},C=0;for(let z=0;z<v.length;z++){const{name:N,fn:M}=v[z],{x:F,y:H,data:j,reset:J}=await M({x:O,y,initialPlacement:p,placement:b,strategy:m,middlewareData:k,rects:w,platform:h,elements:{reference:l,floating:u}});O=F??O,y=H??y,k={...k,[N]:{...k[N],...j}},J&&C<=50&&(C++,typeof J=="object"&&(J.placement&&(b=J.placement),J.rects&&(w=J.rects===!0?await h.getElementRects({reference:l,floating:u,strategy:m}):J.rects),{x:O,y}=zv(w,b,x)),z=-1)}return{x:O,y,placement:b,strategy:m,middlewareData:k}})(e,t,{...i,platform:a})},yA=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?Lv({element:t.current,padding:n}).fn(r):{}:t?Lv({element:t,padding:n}).fn(r):{};var i}}};var al=typeof document<"u"?T.useLayoutEffect:T.useEffect;function pu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!pu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!pu(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function bA(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],whileElementsMounted:i,open:a}=e,[l,u]=T.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,p]=T.useState(r);pu(d,r)||p(r);const m=T.useRef(null),_=T.useRef(null),h=T.useRef(l),v=function(F){const H=T.useRef(F);return al(()=>{H.current=F}),H}(i),[x,w]=T.useState(null),[O,y]=T.useState(null),b=T.useCallback(F=>{m.current!==F&&(m.current=F,w(F))},[]),k=T.useCallback(F=>{_.current!==F&&(_.current=F,y(F))},[]),C=T.useCallback(()=>{m.current&&_.current&&vA(m.current,_.current,{middleware:d,placement:t,strategy:n}).then(F=>{const H={...F,isPositioned:!0};z.current&&!pu(h.current,H)&&(h.current=H,ki.flushSync(()=>{u(H)}))})},[d,t,n]);al(()=>{a===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(F=>({...F,isPositioned:!1})))},[a]);const z=T.useRef(!1);al(()=>(z.current=!0,()=>{z.current=!1}),[]),al(()=>{if(x&&O){if(v.current)return v.current(x,O,C);C()}},[x,O,C,v]);const N=T.useMemo(()=>({reference:m,floating:_,setReference:b,setFloating:k}),[b,k]),M=T.useMemo(()=>({reference:x,floating:O}),[x,O]);return T.useMemo(()=>({...l,update:C,refs:N,elements:M,reference:b,floating:k}),[l,C,N,M,b,k])}var D1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Ld=!1,xA=0;const Dv=()=>"floating-ui-"+xA++,Mv=Ba["useId".toString()]||function(){const[e,t]=T.useState(()=>Ld?Dv():void 0);return D1(()=>{e==null&&t(Dv())},[]),T.useEffect(()=>{Ld||(Ld=!0)},[]),e},wA=T.createContext(null),SA=T.createContext(null),M1=()=>T.useContext(SA);function F1(e){return e?.ownerDocument||document}function j1(e){return F1(e).defaultView||window}function ko(e){return!!e&&e instanceof j1(e).Element}function Dh(e){return!!e&&e instanceof j1(e).HTMLElement}function kA(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function CA(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Fv(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Rd(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const PA=Ba["useInsertionEffect".toString()]||(e=>e());function $1(e){const t=T.useRef(()=>{});return PA(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function jv(e){return Dh(e.target)&&e.target.tagName==="BUTTON"}function $v(e){return function(t){return Dh(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Bd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const EA={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},OA={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},TA=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:p=!0,escapeKey:m=!0,outsidePress:_=!0,outsidePressEvent:h="pointerdown",referencePress:v=!1,referencePressEvent:x="pointerdown",ancestorScroll:w=!1,bubbles:O=!0}=t===void 0?{}:t;const y=M1(),b=(((k=T.useContext(wA))==null?void 0:k.id)||null)!=null;var k;const C=$1(typeof _=="function"?_:()=>!1),z=typeof _=="function"?C:_,N=T.useRef(!1),{escapeKeyBubbles:M,outsidePressBubbles:F}=function(H){var j,J;return H===void 0&&(H=!0),{escapeKeyBubbles:typeof H=="boolean"?H:(j=H.escapeKey)==null||j,outsidePressBubbles:typeof H=="boolean"?H:(J=H.outsidePress)==null||J}}(O);return T.useEffect(()=>{if(!n||!p)return;function H(X){if(X.key==="Escape"){if(!M&&y&&Rd(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function j(X){const le=N.current;if(N.current=!1,le||typeof z=="function"&&!z(X))return;const U=function(R){return"composedPath"in R?R.composedPath()[0]:R.target}(X);if(Dh(U)&&d){const R=d.ownerDocument.defaultView||window,re=U.scrollWidth>U.clientWidth,V=U.scrollHeight>U.clientHeight;let E=V&&X.offsetX>U.clientWidth;if(V&&R.getComputedStyle(U).direction==="rtl"&&(E=X.offsetX<=U.offsetWidth-U.clientWidth),E||re&&X.offsetY>U.clientHeight)return}const ne=y&&Rd(y.nodesRef.current,a).some(R=>{var re;return Bd(X,(re=R.context)==null?void 0:re.elements.floating)});Bd(X,d)||Bd(X,u)||ne||!F&&y&&Rd(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:kA(X)||CA(X)}}),r(!1))}function J(){r(!1)}const ie=F1(d);m&&ie.addEventListener("keydown",H),z&&ie.addEventListener(h,j);let fe=[];return w&&(ko(u)&&(fe=Wr(u)),ko(d)&&(fe=fe.concat(Wr(d))),!ko(l)&&l&&l.contextElement&&(fe=fe.concat(Wr(l.contextElement)))),fe=fe.filter(X=>{var le;return X!==((le=ie.defaultView)==null?void 0:le.visualViewport)}),fe.forEach(X=>{X.addEventListener("scroll",J,{passive:!0})}),()=>{m&&ie.removeEventListener("keydown",H),z&&ie.removeEventListener(h,j),fe.forEach(X=>{X.removeEventListener("scroll",J)})}},[d,u,l,m,z,h,i,y,a,n,r,w,p,M,F,b]),T.useEffect(()=>{N.current=!1},[z,h]),T.useMemo(()=>p?{reference:{[EA[x]]:()=>{v&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[OA[h]]:()=>{N.current=!0}}}:{},[p,i,v,h,x,r])};function Mh(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function zA(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=bA(e),a=M1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,k){var C;(C=y.get(b))==null||C.forEach(z=>z(k))},on(b,k){y.set(b,[...y.get(b)||[],k])},off(b,k){y.set(b,(y.get(b)||[]).filter(C=>C!==k))}}}())[0],[p,m]=T.useState(null),_=T.useCallback(y=>{const b=ko(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),h=T.useCallback(y=>{(ko(y)||y===null)&&(l.current=y,m(y)),(ko(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!ko(y))&&i.refs.setReference(y)},[i.refs]),v=T.useMemo(()=>({...i.refs,setReference:h,setPositionReference:_,domReference:l}),[i.refs,h,_]),x=T.useMemo(()=>({...i.elements,domReference:p}),[i.elements,p]),w=$1(n),O=T.useMemo(()=>({...i,refs:v,elements:x,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[i,r,d,t,w,v,x]);return D1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=O)}),T.useMemo(()=>({...i,context:O,refs:v,reference:h,positionReference:_}),[i,v,O,h,_])}function Ad(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var p;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((p=r.get(u))==null||p.push(d),i[u]=function(){for(var m,_=arguments.length,h=new Array(_),v=0;v<_;v++)h[v]=arguments[v];(m=r.get(u))==null||m.forEach(x=>x(...h))})):i[u]=d}),i),{})}}var hu,_p={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function LA(e){var{variant:t=hu.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Fi(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[p,m]=T.useState(r),_=l??p,h=u??m,v=T.useRef(null),x=zA({placement:i,open:_,onOpenChange:h,whileElementsMounted:gA,middleware:[pA(a??(n?12:4)),fA({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(z){const{x:N,y:M,placement:F}=z,{mainAxis:H=!0,crossAxis:j=!1,limiter:J={fn:V=>{let{x:E,y:I}=V;return{x:E,y:I}}},...ie}=w,fe={x:N,y:M},X=await O1(z,ie),le=hs(Oo(F)),U=le==="x"?"y":"x";let ne=fe[le],R=fe[U];if(H){const V=le==="y"?"bottom":"right";ne=hp(ne+X[le==="y"?"top":"left"],ne,ne-X[V])}if(j){const V=U==="y"?"bottom":"right";R=hp(R+X[U==="y"?"top":"left"],R,R-X[V])}const re=J.fn({...z,[le]:ne,[U]:R});return{...re,data:{x:re.x-N,y:re.y-M}}}}),yA({element:v,padding:8})]});var w;const O=x.context,y=function(z,N){let{open:M,onOpenChange:F,dataRef:H,refs:j}=z,{enabled:J=!0,event:ie="click",toggle:fe=!0,ignoreMouse:X=!1,keyboardHandlers:le=!0}=N===void 0?{}:N;const U=T.useRef();return T.useMemo(()=>J?{reference:{onPointerDown(ne){U.current=ne.pointerType},onMouseDown(ne){ne.button===0&&(Fv(U.current,!0)&&X||ie!=="click"&&(M?!fe||H.current.openEvent&&H.current.openEvent.type!=="mousedown"||F(!1):(ne.preventDefault(),F(!0)),H.current.openEvent=ne.nativeEvent))},onClick(ne){H.current.__syncReturnFocus||(ie==="mousedown"&&U.current?U.current=void 0:Fv(U.current,!0)&&X||(M?!fe||H.current.openEvent&&H.current.openEvent.type!=="click"||F(!1):F(!0),H.current.openEvent=ne.nativeEvent))},onKeyDown(ne){U.current=void 0,le&&(jv(ne)||(ne.key!==" "||$v(j.domReference.current)||ne.preventDefault(),ne.key==="Enter"&&(M?fe&&F(!1):F(!0))))},onKeyUp(ne){le&&(jv(ne)||$v(j.domReference.current)||ne.key===" "&&(M?fe&&F(!1):F(!0)))}}}:{},[J,H,ie,X,le,j,fe,M,F])}(O,{enabled:l==null}),b=TA(O,{referencePress:!1}),k=function(z,N){let{open:M}=z,{enabled:F=!0,role:H="dialog"}=N===void 0?{}:N;const j=Mv(),J=Mv();return T.useMemo(()=>{const ie={id:j,role:H};return F?H==="tooltip"?{reference:{"aria-describedby":M?j:void 0},floating:ie}:{reference:{"aria-expanded":M?"true":"false","aria-haspopup":H==="alertdialog"?"dialog":H,"aria-controls":M?j:void 0,...H==="listbox"&&{role:"combobox"},...H==="menu"&&{id:J}},floating:{...ie,...H==="menu"&&{"aria-labelledby":J}}}:{}},[F,H,M,j,J])}(O),C=function(z){z===void 0&&(z=[]);const N=z,M=T.useCallback(j=>Ad(j,z,"reference"),N),F=T.useCallback(j=>Ad(j,z,"floating"),N),H=T.useCallback(j=>Ad(j,z,"item"),N);return T.useMemo(()=>({getReferenceProps:M,getFloatingProps:F,getItemProps:H}),[M,F,H])}([y,b,k]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:_,setOpen:h},C),x),d),{arrow:n,arrowRef:v,variant:t}),[_,h,C,x,d,n,v,t])}xt(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 2;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0 3px 6px 0 #00000033;\r
}\r
\r
.Popover-module_popover__E9K9X:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
  var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Popover-module_popover__E9K9X:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {\r
  background-color: #FFFFFF;\r
  border-color: #68707C;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #E6EFF8;\r
  border-color: #004C8F;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #FFFBE6;\r
  border-color: #CC7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #F9D5DB;\r
  border-color: #B3253A;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
  /* Set border color separately in order to make inheritance work. */\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="top"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0 #00000033;\r
  clip-path: inset(0px -10px -10px 0px);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="bottom"] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0 0 -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="left"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0 #00000033;\r
  clip-path: inset(-10px -10px 0 0);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="right"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0 #00000033;\r
  clip-path: inset(0 0 -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(hu||(hu={}));const H1=T.createContext(null),Fh=()=>{const e=T.useContext(H1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function RA(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Fi(e,["children","trigger","arrow","initialOpen"]);const l=LA(Object.assign({arrow:r,initialOpen:i},a));return $.createElement(H1.Provider,{value:l},$.createElement(BA,null,n),$.createElement(AA,null,t,l.arrow&&$.createElement(IA,null)))}const BA=T.forwardRef(function(e,t){var{children:n}=e,r=Fi(e,["children"]);const i=Fh(),a=n.ref,l=Mh([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),AA=T.forwardRef(function(e,t){var n,r;const i=Fh(),a=Mh([i.floating,t]);return i.open?$.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0,width:"max-content"},"data-placement":i.placement,className:It(_p.popover,_p[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null}),IA=T.forwardRef(function(e,t){var n,r;const i=Fh(),a=Mh([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return $.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:_p.arrow},e))});var NA="utility-module_visuallyHidden__R-C67";xt(`/**\r
 * Visually hide an element, but leave it available for screen readers\r
 */\r
.utility-module_visuallyHidden__R-C67 {\r
	border: 0;\r
	clip: rect(0 0 0 0);\r
	height: 1px;\r
	overflow: hidden;\r
	padding: 0;\r
	position: absolute;\r
	white-space: nowrap;\r
	width: 1px;\r
}\r
`);var Do,fo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};xt(`.HelpText-module_helpTextButton__Ir4Uk {\r
  all: initial;\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
  color: var(--colors-blue-700);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: var(--help_text-icon-width);\r
  height: var(--help_text-icon-height);\r
}\r
\r
.HelpText-module_helpTextContent__EDHac {\r
  font-size: var(--font_size-300);\r
  line-height: var(--typography-default-line-height);\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_small__Y44D4 {\r
  --help_text-icon-width: 24px;\r
  --help_text-icon-height: 24px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_xsmall__peaFV {\r
  --help_text-icon-width: 18px;\r
  --help_text-icon-height: 18px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Do||(Do={}));const U1=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Do.Small}=e,u=Fi(e,["className","children","title","placement","onClick","size"]);const[d,p]=T.useState(!1);return $.createElement(RA,{variant:hu.Info,placement:i,open:d,onOpenChange:p,className:fo.helpTextContent,trigger:$.createElement("button",Object.assign({},u,{className:It(fo.helpTextButton,t),onClick:m=>{p(_=>!_),a?.(m)}}),$.createElement(X3,{className:It(fo.helpTextIcon,fo.helpTextIconFilled,fo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),$.createElement(K3,{className:It(fo.helpTextIcon,fo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),$.createElement("span",{className:NA},r))},n)};var Bi,kr={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};xt(`.FieldSet-module_fieldSet__GgktD {\r
  --color: var(--component-checkbox-color-text-default);\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-color: var(--component-field_description-color-text-default);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --help_text-gap: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
\r
  color: var(--color);\r
  border: 0;\r
  font-size: var(--font_size);\r
  line-height: var(--typography-default-line-height);\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_xsmall__y9foq {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --help_text-gap: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled {\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled * {\r
  opacity: 1;\r
}\r
\r
.FieldSet-module_legendAndHelpText__WDZ-j {\r
  display: flex;\r
  gap: var(--help_text-gap);\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV {\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legendContent__nOeHK {\r
  font-weight: bold;\r
}\r
\r
.FieldSet-module_description__XKHS- {\r
  color: var(--description-color);\r
  margin: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {\r
  margin-top: var(--description-margin_top);\r
}\r
\r
.FieldSet-module_content__aZp-0:not(:first-child) {\r
  margin-top: var(--content-margin_top);\r
}\r
\r
.FieldSet-module_errorMessage__nDaJ7 {\r
  margin-top: var(--error_message-margin_top);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Bi||(Bi={}));const DA=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Bi.Small})=>{const p=d===Bi.Xsmall?Do.Xsmall:Do.Small;return $.createElement("fieldset",{className:It(kr.fieldSet,kr[d],t),disabled:i},u&&$.createElement("legend",{className:kr.legend},$.createElement("span",{className:kr.legendAndHelpText},$.createElement("span",{className:kr.legendContent},u),l&&$.createElement(U1,{size:p,title:`Help text for ${u}`},l))),r&&$.createElement("p",{className:kr.description},r),$.createElement("div",{className:It(kr.content,n)},e),a&&$.createElement("div",{className:kr.errorMessage},$.createElement(J3,null,a)))};var ts,xn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};xt(`.CheckboxRadioTemplate-module_template__CbnTf {\r
  --click-cursor: pointer;\r
  --description-color: var(--component-field_description-color-text-default);\r
  --label-color: var(--component-checkbox-color-text-default);\r
  --opacity: 1;\r
\r
  border-radius: var(--input_box-border_radius);\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-size: var(--font_size);\r
  gap: var(--gap);\r
  line-height: var(--typography-default-line-height);\r
  opacity: var(--opacity);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
  --gap: var(--component-checkbox-space-gap-xsmall);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
  --gap: var(--component-checkbox-space-gap-small);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {\r
  --label-color: var(--component-checkbox-color-text-hover);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {\r
  --click-cursor: auto;\r
  --opacity: var(--opacity-disabled);\r
}\r
\r
.CheckboxRadioTemplate-module_clickable__iw4S2  {\r
  cursor: var(--click-cursor);\r
}\r
\r
.CheckboxRadioTemplate-module_inputWrapper__K4Urn {\r
  display: inline-block;\r
  height: var(--input_box-size);\r
  position: relative;\r
}\r
\r
.CheckboxRadioTemplate-module_input__O2CzZ {\r
  height: 0;\r
  opacity: 0;\r
  position: absolute;\r
  width: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_visibleBox__mj4RB {\r
  display: inline-block;\r
  flex: 0 0 var(--input_box-size);\r
  height: var(--input_box-size);\r
  position: relative;\r
  width: var(--input_box-size);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndDescription__NcntT {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: var(--description-margin_top);\r
\r
  /* Center-align input box with the first line in the label */\r
  margin-top: calc(\r
    (\r
        var(--input_box-size) -\r
          (var(--typography-default-line-height) * var(--font_size))\r
      ) / 2\r
  );\r
}\r
\r
.CheckboxRadioTemplate-module_label__hsc7R {\r
  color: var(--label-color);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ {\r
  display: inline-flex;\r
  flex-direction: row;\r
  gap: var(--gap);\r
  align-items: center;\r
}\r
\r
.CheckboxRadioTemplate-module_description__FX9dz {\r
  color: var(--description-color);\r
}\r
\r
@supports not selector(:has(:focus-visible)) {\r
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):focus-within {\r
    outline: 2px solid var(--semantic-tab_focus-outline-color);\r
    outline-offset: 2px;\r
  }\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):not(:has(button:focus-visible)):has(:focus-visible) {\r
  outline: 2px solid var(--semantic-tab_focus-outline-color);\r
  outline-offset: 2px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ts||(ts={}));const MA=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:p,name:m,onChange:_,presentation:h,size:v,type:x,value:w})=>{const O=T.useId(),y=d??"input-"+O,b=p?`${y}-label`:void 0,k=r?`${y}-description`:void 0,C=p&&!u,z=!h||typeof p!="object"&&typeof r!="object",N=v===ts.Xsmall?Do.Xsmall:Do.Small;return $.createElement(Hv,{className:It(xn.template,xn[v],i&&xn.disabled,n),htmlFor:y,isLabel:z},!l&&$.createElement(Hv,{className:xn.inputWrapper,htmlFor:y,isLabel:!z},$.createElement("input",{"aria-describedby":k,"aria-label":C||typeof p!="string"?void 0:p,"aria-labelledby":C?b:void 0,checked:e!=null&&e,className:xn.input,disabled:i,id:y,name:m,onChange:i?void 0:_,role:h?"presentation":void 0,type:x,value:w}),$.createElement("span",{className:xn.visibleBox},t)),(C||r)&&$.createElement("span",{className:xn.labelAndDescription},C&&$.createElement("span",{className:xn.labelAndHelpText},$.createElement("span",{className:xn.label,id:b},p),a&&$.createElement(U1,{size:N,title:`Help text for ${p}`},a)),r&&$.createElement("span",{className:xn.description,id:k},r)))},Hv=({children:e,className:t,htmlFor:n,isLabel:r})=>r?$.createElement("label",{className:t+" "+xn.clickable,htmlFor:n},e):$.createElement("span",{className:t},e);var FA="Checkbox-module_checkbox__lSeQj",jA="Checkbox-module_compact__Cl41-",$A="Checkbox-module_error__E-bmD",HA="Checkbox-module_checked__3yAq6",UA="Checkbox-module_disabled__x7-eg",ZA="Checkbox-module_readOnly__FamUn",WA="Checkbox-module_visibleBox__G7q8H",VA="Checkbox-module_checkmark__ES9N8";xt(`.Checkbox-module_checkbox__lSeQj {\r
  /* Internal variables */\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-default\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-default);\r
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);\r
  --checkbox-border_width: var(--component-checkbox-border_width-small);\r
  --checkbox-checkmark-display: none;\r
  --checkbox-height: var(--component-checkbox-size-height-small);\r
  --checkbox-width: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-size: var(--checkbox-height);\r
  --input_box-border_radius: var(--checkbox-border_radius);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {\r
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);\r
  --checkbox-height: var(--component-checkbox-size-height-xsmall);\r
  --checkbox-width: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {\r
  --checkbox-background_color: var(--component-checkbox-color-background-error);\r
  --checkbox-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {\r
  --checkbox-checkmark-display: inline-block;\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-checked\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {\r
  --cursor: auto;\r
}\r
\r
.Checkbox-module_visibleBox__G7q8H {\r
  background-color: var(--checkbox-background_color);\r
  border-color: var(--checkbox-border_color);\r
  border-radius: var(--checkbox-border_radius);\r
  border-style: solid;\r
  border-width: var(--checkbox-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--checkbox-height);\r
  width: var(--checkbox-width);\r
}\r
\r
.Checkbox-module_checkmark__ES9N8 {\r
  background-color: white;\r
  clip-path: polygon(\r
    47.11% 56.51%,\r
    30.37% 38.94%,\r
    21.5% 48.09%,\r
    47.11% 74.54%,\r
    81.5% 39.16%,\r
    72.63% 30%\r
  );\r
  display: var(--checkbox-checkmark-display);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const kl=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:p,onChange:m,presentation:_,readOnly:h})=>$.createElement(MA,{checked:t,className:It(FA,t&&HA,a&&$A,i&&UA,n&&jA,h&&ZA),description:r,disabled:i,helpText:l,hideInput:h,hideLabel:u,inputId:e,label:d,name:p,onChange:m,presentation:_,size:n?ts.Xsmall:ts.Small,type:"checkbox"},$.createElement("span",{className:WA},$.createElement("span",{className:VA})));var ns,Id={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};xt(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {\r
  flex-direction: column;\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {\r
  flex-direction: row;\r
}\r
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ns||(ns={}));const qA=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Uv=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Zv=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:p=ns.Vertical})=>{if(!P1(a.map(v=>v.name)))throw Error("Each name in the checkbox group must be unique.");const[m,_]=T.useReducer(qA,Uv(a));T.useEffect(()=>_({type:"reset",state:Uv(a)}),[a]);const h=eA(m);return Ah(()=>{u&&!n&&!C1(h,m)&&u(m)},[m,u,n]),$.createElement(DA,{contentClassName:It(Id.checkboxGroup,Id[p],e&&Id.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Bi.Xsmall:Bi.Small},a.map(v=>$.createElement(kl,{checkboxId:v.checkboxId,checked:m.includes(v.name),compact:e,description:v.description,disabled:n||v.disabled,error:!!r,helpText:v.helpText,key:v.name,label:v.label,name:v.name,onChange:x=>{_({type:x.target.checked?"check":"uncheck",name:v.name})},presentation:d})))};var Wv;xt(`.RadioButton-module_radio__-lcP- {\r
  /* Internal variables */\r
  --radio-background_color: var(--component-checkbox-color-background-default);\r
  --radio-border_color: var(--component-checkbox-color-border-default);\r
  --radio-border_width: var(--component-checkbox-border_width-small);\r
  --radio-checkmark-color: var(--colors-blue-700);\r
  --radio-checkmark-display: none;\r
  --radio-size: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-border_radius: calc(var(--radio-size) / 2);\r
  --input_box-size: var(--radio-size);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {\r
  --radio-size: var(--component-checkbox-size-width-small);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {\r
  --radio-size: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {\r
  --radio-background_color: var(--component-checkbox-color-background-error);\r
  --radio-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {\r
  --radio-checkmark-display: inline-block;\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_error__WeFrR) {\r
  --radio-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.RadioButton-module_visibleButton__QmmNn {\r
  background-color: var(--radio-background_color);\r
  border-color: var(--radio-border_color);\r
  border-radius: 50%;\r
  border-style: solid;\r
  border-width: var(--radio-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--radio-size);\r
  width: var(--radio-size);\r
}\r
\r
.RadioButton-module_checkmark__fHNs0 {\r
  --radio-checkmark-size: 80%;\r
  background-color: var(--radio-checkmark-color);\r
  border-radius: 50%;\r
  display: var(--radio-checkmark-display);\r
  height: var(--radio-checkmark-size);\r
  margin: calc(\r
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -\r
      var(--radio-border_width)\r
  );\r
  width: var(--radio-checkmark-size);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Wv||(Wv={}));var Vv,qv;xt(`.RadioGroup-module_radioGroup__pO2pz {\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {\r
  flex-direction: column;\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {\r
  flex-direction: row;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Vv||(Vv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(qv||(qv={}));var vo,mu,To;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(vo||(vo={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(mu||(mu={})),function(e){e.None="none",e.Error="error",e.Search="search"}(To||(To={}));const KA=()=>$.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),GA=()=>$.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var Kv="Icon-module_icon__3YqoF",QA="Icon-module_disabled__e4-Yg";xt(`.Icon-module_icon__3YqoF {\r
    background: var(--icon-background);\r
    padding-right: var(--component-input-border_width-focus);\r
    padding-left: var(--component-input-border_width-default);\r
    display: flex;\r
    align-items: center;\r
    flex: none;\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
    opacity: 60%;\r
}`);const XA=({variant:e,disabled:t=!1})=>{switch(e){case To.Error:return $.createElement("div",{className:Kv,"data-testid":"input-icon-error"},$.createElement(KA,null));case To.Search:return $.createElement("div",{className:It(Kv,t&&QA),"data-testid":"input-icon-search"},$.createElement(GA,null));default:return null}};var po={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};xt(`.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-color: var(--component-input-color-border-default);\r
  --icon-background: transparent;\r
  --outline-color: var(--semantic-tab_focus-outline-color);\r
  --paddingX: 0;\r
  --paddingY: 0;\r
  align-items: stretch;\r
  background: var(--background);\r
  border-color: var(--border-color);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: var(--component-input-border_width-default);\r
  box-sizing: border-box;\r
  display: flex;\r
  min-height: var(--component-input-size-min_height-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withFocusEffect__9DobY:focus-within {\r
  outline: var(--outline-color) auto var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {\r
  --border-color: var(--component-input-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {\r
  --icon-background: var(--component-input-error-color-border-default);\r
  --border-color: var(--component-input-error-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {\r
  --background: repeating-linear-gradient(\r
    135deg,\r
    #efefef,\r
    #efefef 2px,\r
    #fff 3px,\r
    #fff 5px\r
  );\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {\r
  --background: var(--component-input-read_only_info-color-background-default);\r
  --border-color: var(--component-input-read_only_info-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {\r
  --background: var(\r
    --component-input-read_only_confirm-color-background-default\r
  );\r
  --border-color: var(--component-input-read_only_confirm-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {\r
  flex-direction: row-reverse;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {\r
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */\r
  --paddingY: calc(\r
    var(--component-input-space-padding-y) -\r
      var(--component-input-border_width-default)\r
  );\r
  --paddingX: var(--component-input-space-padding-x);\r
}\r
\r
.InputWrapper-module_field__UA-RS {\r
  background: var(--background);\r
  border: none;\r
  box-sizing: border-box;\r
  font-family: var(--font_family-default);\r
  outline: none;\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
`);const YA=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const p=T.useId(),m=t??p,{variant:_,iconVariant:h}=(({readOnly:v=!1,disabled:x=!1,isValid:w=!0,isSearch:O=!1}={})=>{let y=To.None;return O&&(y=To.Search),x?{variant:vo.Disabled,iconVariant:y}:v===!0||v===mu.ReadOnlyInfo?{variant:vo.ReadOnlyInfo,iconVariant:y}:v===mu.ReadOnlyConfirm?{variant:vo.ReadOnlyConfirm,iconVariant:y}:w===!1?{variant:vo.Error,iconVariant:To.Error}:{variant:vo.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return $.createElement($.Fragment,null,a&&$.createElement("label",{className:po.label,htmlFor:m},a),$.createElement("div",{"data-testid":"InputWrapper",className:It(po.inputWrapper,po[_],{[po.search]:r,[po.withFocusEffect]:!l,[po.withPadding]:!u})},$.createElement(XA,{variant:h,disabled:e}),n({className:po.field,inputId:m,variant:_})))};var JA="MultiSelectItem-module_multiSelectItem__tjklN",eI="MultiSelectItem-module_deleteButton__xRVRz",tI="MultiSelectItem-module_deleteButtonCross__yqZOX";xt(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
  align-items: center;\r
  background-color: var(--multiselect_item-background_color);\r
  border-radius: var(--border-radius);\r
  color: var(--multiselect_item-text_color);\r
  display: inline-flex;\r
  font-size: var(--font_size);\r
  gap: var(--multiselect_item-space_between);\r
  height: var(--multiselect_item-height);\r
  padding-left: var(--multiselect_item-space_left);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz {\r
  background-color: transparent;\r
  border-bottom-right-radius: inherit;\r
  border-top-right-radius: inherit;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  padding: calc(\r
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2\r
  );\r
  width: var(--multiselect_item-height);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {\r
  background-color: var(--delete_cross_box-color-hover);\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__yqZOX {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const nI=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>$.createElement("span",{className:JA},$.createElement("span",null,r),$.createElement("button",{"aria-label":e,className:eI,disabled:t,onClick:n},$.createElement("span",{className:tI})));var gt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",fieldValues:"Select-module_fieldValues__Xifsp",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};xt(`.Select-module_select__cjdcr {\r
  --delete_cross_box-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --delete_cross_box-color-hover: var(--colors-red-500);\r
  --delete_cross_box-size: 25px;\r
  --delete_cross-clip_path: polygon(\r
    14.29% 0%,\r
    50% 35.71%,\r
    85.71% 0%,\r
    100% 14.29%,\r
    64.29% 50%,\r
    100% 85.71%,\r
    85.71% 100%,\r
    50% 64.29%,\r
    14.29% 100%,\r
    0% 85.71%,\r
    35.71% 50%,\r
    0% 14.29%\r
  );\r
  --delete_cross-color: var(--colors-blue-900);\r
  --delete_cross-color-active: var(--colors-blue-700);\r
  --delete_cross-color-disabled: #022f5180;\r
  --delete_cross-color-hover: white;\r
  --delete_cross-size: 12px;\r
  --arrow-border_left: 1px solid #022f5180;\r
  --arrow-color: var(--colors-blue-900);\r
  --arrow-height_to_width_fraction: calc(8 / 14);\r
  --arrow-horizontal_padding: 6px;\r
  --arrow-size: 14px;\r
  --arrow_wrapper-margin: 4px;\r
  --field-height-inside: calc(\r
    var(--field-height) - var(--component-input-border_width-default) * 2\r
  );\r
  --field-height: var(--component-input-size-min_height-default);\r
  --font_size: 16px;\r
  --interactive_element-cursor: pointer;\r
  --line-height: 1.5;\r
  --multiselect_item-background_color: var(--colors-blue-900);\r
  --multiselect_item-height: 24px;\r
  --multiselect_item-space_between: 6px;\r
  --multiselect_item-space_left: 16px;\r
  --multiselect_item-text_color: white;\r
  --multiselect_item_delete_cross-color: white;\r
  --multiselect_items-gap: 4px;\r
  --multiselect_items-padding: calc(\r
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2\r
  );\r
  --option-background_color-default: transparent;\r
  --option-background_color-hover: var(--colors-blue-100);\r
  --option-background_color-selected: var(--colors-blue-200);\r
  --option-background_color-selected-hover: var(--colors-blue-500);\r
  --option-border_color: #022f5180;\r
  --option-border_width: 1px;\r
  --option-height: 36px;\r
  --option_list-background_color: white;\r
  --option_list-border: 1px solid #68707c;\r
  --option_list-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --option_list-number_of_visible_options: 7;\r
  --option_list-shadow: 1px 1px 3px #00000040;\r
  --option_list-z_index: 2;\r
  --option-outline-focus: none;\r
  --option-padding_horizontal: 12px;\r
  --singleselect_field-padding_left: 12px;\r
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto\r
    var(--semantic-tab_focus-outline-color);\r
\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_disabled__8YgjS {\r
  --interactive_element-cursor: auto;\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
\r
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionList__Lhg-F {\r
  display: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_usingKeyboard__RCPHw {\r
  --option-outline-focus: var(--focus_visible-outline);\r
}\r
\r
.Select-module_fieldButton__uKwX8 {\r
  background: transparent;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.Select-module_field__h-wBy {\r
  display: inline-flex;\r
  padding: 0;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_field__h-wBy,\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldButton__uKwX8 {\r
  align-items: center;\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--field-height-inside);\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {\r
  flex: 1;\r
  padding-left: var(--singleselect_field-padding_left);\r
  text-align: left;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldValues__Xifsp {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_arrowWrapper__meDQz {\r
  --arrow-height: calc(\r
    var(--arrow-size) * var(--arrow-height_to_width_fraction)\r
  );\r
  --arrow-vertical_padding: calc(\r
    (var(--field-height-inside) - var(--arrow-height)) / 2 -\r
      var(--arrow_wrapper-margin)\r
  );\r
  align-items: center;\r
  border-left: var(--arrow-border_left);\r
  box-sizing: border-box;\r
  display: flex;\r
  height: calc(100% - var(--arrow-vertical_padding));\r
  margin-bottom: var(--arrow_wrapper-margin);\r
  margin-left: var(--arrow_wrapper-margin);\r
  margin-top: var(--arrow_wrapper-margin);\r
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);\r
}\r
\r
.Select-module_arrow__w35wW {\r
  background-color: var(--arrow-color);\r
  clip-path: polygon(\r
    11.72% 9.93%,\r
    50% 67.28%,\r
    88.28% 9.93%,\r
    97.43% 29.13%,\r
    50% 96.79%,\r
    2.57% 29.13%\r
  );\r
  display: inline-block;\r
  height: var(--arrow-height);\r
  width: var(--arrow-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {\r
  background: none;\r
  border-radius: var(--delete_cross_box-border_radius);\r
  border: none;\r
  cursor: var(--interactive_element-cursor);\r
  height: var(--delete_cross_box-size);\r
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);\r
  width: var(--delete_cross_box-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  cursor: auto;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  --delete_cross-color: var(--delete_cross-color-disabled);\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {\r
  background-color: var(--delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
\r
.Select-module_optionList__Lhg-F {\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-direction: column;\r
  margin: 0;\r
  max-height: calc(\r
    var(--option-height) * var(--option_list-number_of_visible_options)\r
  );\r
  overflow-y: auto;\r
  padding: 0;\r
  position: absolute;\r
  z-index: var(--option_list-z_index);\r
}\r
\r
.Select-module_option__Hvo8n {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: var(--interactive_element-cursor);\r
  display: inline-block;\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc(\r
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2\r
  );\r
  text-align: left;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Select-module_option__Hvo8n:hover {\r
  background-color: var(--option-background_color-hover);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A {\r
  background-color: var(--option-background_color-selected);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A:hover {\r
  background-color: var(--option-background_color-selected-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_option__Hvo8n.Select-module_focused__joVjV {\r
  outline: var(--option-outline-focus);\r
}\r
`);const sl={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Gv=e=>{const{disabled:t,error:n,hideLabel:r,inputId:i,label:a,multiple:l,onChange:u,options:d,value:p}=e,m=d.map(U=>U.value);if(m.length!==new Set(m).size)throw Error("Each value in the option list must be unique.");const[_,h]=T.useState(l&&p!=null?p:[]),[v,x]=T.useState(l?void 0:p),w=d.findIndex(U=>U.value===v),[O,y]=T.useState(!1);Ov("click",()=>y(!1)),Ov("keydown",()=>y(!0));const[b,k]=T.useState(!1),C=T.useRef(null),z=T.useRef(null);Ah(()=>{l?C1(p,_)||h(p??[]):x(p)},[p]),T.useEffect(()=>{const U=C.current;if(U){const ne=U.offsetHeight,R=U.getElementsByTagName("li")[0].offsetHeight,re=U.scrollTop,V=w*R,E=V+R;V>=re&&E<=re+ne||(U.scrollTop=V<re?V:E-ne)}},[w]);const N=U=>{var ne;return(ne=d.find(R=>R.value===U))!==null&&ne!==void 0?ne:{label:"",value:""}},M=(U,ne)=>{_?.length||x(ne),h(U),u&&u(U)},F=U=>{var ne;l?_.includes(U)?H(U):M([..._,U],U):(x(ne=U),k(!1),u&&u(ne))},H=U=>{M(_.filter(ne=>ne!==U),U)},j=T.useCallback(()=>{if(v===void 0)x(d[0].value);else{const U=w+1;U>=0&&U<d.length&&x(d[U].value)}k(!0)},[v,w,x,d]),J=T.useCallback(()=>{if(v===void 0)x(d[d.length-1].value);else{const U=w-1;U>=0&&U<d.length&&x(d[U].value)}k(!0)},[v,w,x,d]);Td(sl.ArrowDown,()=>b&&j()),Td(sl.ArrowUp,()=>b&&J()),Td(sl.Enter,()=>b&&l&&v&&F(v));const ie=U=>v===U,fe=U=>l?_.includes(U):ie(U),X=T.useId(),le=z.current?`calc(${z.current.offsetWidth}px + 2 * ${y1.component.input.border_width.default.value})`:void 0;return $.createElement("div",{className:It(gt.select,gt[l?"multiple":"single"],b&&gt.expanded,t&&gt.disabled,O&&gt.usingKeyboard),"data-testid":"select-root"},$.createElement(YA,{disabled:t,inputId:i,inputRenderer:({className:U,inputId:ne})=>$.createElement("span",{className:U+" "+gt.field,ref:z},l&&$.createElement($.Fragment,null,$.createElement("span",{className:gt.fieldValues},_.map(N).map(R=>$.createElement(nI,{deleteButtonLabel:R.deleteButtonLabel,disabled:t!=null&&t,key:R.value,label:R.label,onDeleteButtonClick:()=>H(R.value)}))),$.createElement("button",{"aria-label":e.deleteButtonLabel,className:gt.deleteButton,disabled:!_.length||t,onClick:()=>{M([])}},$.createElement("span",{className:gt.deleteButtonCross}))),$.createElement("button",{"aria-controls":X,"aria-expanded":b,"aria-label":a,className:gt.fieldButton,disabled:t,id:ne,onBlur:()=>k(!1),onClick:()=>k(!b),onKeyDown:R=>{Object.values(sl).includes(R.key)&&(R.preventDefault(),k(!0))},role:"combobox",value:l?_:v},!l&&$.createElement("span",{className:gt.fieldValue},N(v).label),$.createElement("span",{className:gt.arrowWrapper},$.createElement("span",{className:gt.arrow})))),isSearch:!1,isValid:!n,label:r?void 0:a,noFocusEffect:l,noPadding:!0,readOnly:!1}),$.createElement("ul",{className:gt.optionList,id:X,ref:C,role:"listbox",style:{width:le}},d.map(U=>$.createElement("li",{"aria-selected":fe(U.value),className:It(gt.option,fe(U.value)&&gt.selected,l&&ie(U.value)&&gt.focused),key:U.value,onClick:()=>F(U.value),onMouseDown:ne=>ne.preventDefault(),onKeyDown:ne=>ne.preventDefault(),role:"option",value:U.value},U.label))))};xt(`.TextArea-module_textArea__Fp7-I {\r
  border: none;\r
  font-family: inherit;\r
  font-size: var(--component-textarea-font_size-sm);\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {\r
  resize: none;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {\r
  resize: both;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {\r
  resize: horizontal;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {\r
  resize: vertical;\r
}\r
`);const rI=/(\d*\.?\d+)rem(?=\W|$)/gim,oI=e=>typeof e=="string"?e.replace(rI,(t,n)=>`${((i,a=2)=>{const l=10**a;return Math.round((i+Number.EPSILON)*l)/l})(1.6*n)}rem`):e,jh={get:(e,t)=>{if(!(t in e))return;const n=e[t];return typeof n=="object"?new Proxy(n,jh):oI(n)}};new Proxy(o3,jh);new Proxy(y1,jh);const iI=e=>T.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",...e},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.517 11H4.483a2 2 0 0 0-1.987 2.227l.229 2A2 2 0 0 0 4.712 17h14.576a2 2 0 0 0 1.987-1.773l.229-2A2 2 0 0 0 19.517 11Zm-.947-6.109 1.66 4.172a4.001 4.001 0 0 1 3.26 4.391l-.228 2A4.001 4.001 0 0 1 20 18.937V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0v-1.563a4.001 4.001 0 0 1-3.262-3.483l-.229-2A4.001 4.001 0 0 1 3.77 9.063l1.66-4.172A3 3 0 0 1 8.217 3h7.566a3 3 0 0 1 2.787 1.891ZM18.052 9l-1.34-3.37a1 1 0 0 0-.93-.63H8.218a1 1 0 0 0-.929.63L5.948 9h12.104ZM7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:"currentColor"}));function Z1(e,t){return function(){return e.apply(t,arguments)}}const{toString:W1}=Object.prototype,{getPrototypeOf:$h}=Object,Hh=(e=>t=>{const n=W1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),gr=e=>(e=e.toLowerCase(),t=>Hh(t)===e),hc=e=>t=>typeof t===e,{isArray:ji}=Array,rs=hc("undefined");function aI(e){return e!==null&&!rs(e)&&e.constructor!==null&&!rs(e.constructor)&&Jr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const V1=gr("ArrayBuffer");function sI(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&V1(e.buffer),t}const lI=hc("string"),Jr=hc("function"),q1=hc("number"),Uh=e=>e!==null&&typeof e=="object",uI=e=>e===!0||e===!1,Cl=e=>{if(Hh(e)!=="object")return!1;const t=$h(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},cI=gr("Date"),dI=gr("File"),fI=gr("Blob"),pI=gr("FileList"),hI=e=>Uh(e)&&Jr(e.pipe),mI=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||W1.call(e)===t||Jr(e.toString)&&e.toString()===t)},_I=gr("URLSearchParams"),gI=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ms(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ji(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function K1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const G1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Q1=e=>!rs(e)&&e!==G1;function gp(){const{caseless:e}=Q1(this)&&this||{},t={},n=(r,i)=>{const a=e&&K1(t,i)||i;Cl(t[a])&&Cl(r)?t[a]=gp(t[a],r):Cl(r)?t[a]=gp({},r):ji(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ms(arguments[r],n);return t}const vI=(e,t,n,{allOwnKeys:r}={})=>(ms(t,(i,a)=>{n&&Jr(i)?e[a]=Z1(i,n):e[a]=i},{allOwnKeys:r}),e),yI=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bI=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xI=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&$h(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wI=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},SI=e=>{if(!e)return null;if(ji(e))return e;let t=e.length;if(!q1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kI=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$h(Uint8Array)),CI=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},PI=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},EI=gr("HTMLFormElement"),OI=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Qv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),TI=gr("RegExp"),X1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ms(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},zI=e=>{X1(e,(t,n)=>{if(Jr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Jr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},LI=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return ji(e)?r(e):r(String(e).split(t)),n},RI=()=>{},BI=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Nd="abcdefghijklmnopqrstuvwxyz",Xv="0123456789",Y1={DIGIT:Xv,ALPHA:Nd,ALPHA_DIGIT:Nd+Nd.toUpperCase()+Xv},AI=(e=16,t=Y1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function II(e){return!!(e&&Jr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const NI=e=>{const t=new Array(10),n=(r,i)=>{if(Uh(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=ji(r)?[]:{};return ms(r,(l,u)=>{const d=n(l,i+1);!rs(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},Z={isArray:ji,isArrayBuffer:V1,isBuffer:aI,isFormData:mI,isArrayBufferView:sI,isString:lI,isNumber:q1,isBoolean:uI,isObject:Uh,isPlainObject:Cl,isUndefined:rs,isDate:cI,isFile:dI,isBlob:fI,isRegExp:TI,isFunction:Jr,isStream:hI,isURLSearchParams:_I,isTypedArray:kI,isFileList:pI,forEach:ms,merge:gp,extend:vI,trim:gI,stripBOM:yI,inherits:bI,toFlatObject:xI,kindOf:Hh,kindOfTest:gr,endsWith:wI,toArray:SI,forEachEntry:CI,matchAll:PI,isHTMLForm:EI,hasOwnProperty:Qv,hasOwnProp:Qv,reduceDescriptors:X1,freezeMethods:zI,toObjectSet:LI,toCamelCase:OI,noop:RI,toFiniteNumber:BI,findKey:K1,global:G1,isContextDefined:Q1,ALPHABET:Y1,generateString:AI,isSpecCompliantForm:II,toJSONObject:NI};function Pe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Z.inherits(Pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J1=Pe.prototype,ex={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ex[e]={value:e}});Object.defineProperties(Pe,ex);Object.defineProperty(J1,"isAxiosError",{value:!0});Pe.from=(e,t,n,r,i,a)=>{const l=Object.create(J1);return Z.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Pe.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const DI=null;function vp(e){return Z.isPlainObject(e)||Z.isArray(e)}function tx(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}function Yv(e,t,n){return e?e.concat(t).map(function(i,a){return i=tx(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function MI(e){return Z.isArray(e)&&!e.some(vp)}const FI=Z.toFlatObject(Z,{},null,function(t){return/^is[A-Z]/.test(t)});function mc(e,t,n){if(!Z.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,O){return!Z.isUndefined(O[w])});const r=n.metaTokens,i=n.visitor||m,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(t);if(!Z.isFunction(i))throw new TypeError("visitor must be a function");function p(x){if(x===null)return"";if(Z.isDate(x))return x.toISOString();if(!d&&Z.isBlob(x))throw new Pe("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(x)||Z.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function m(x,w,O){let y=x;if(x&&!O&&typeof x=="object"){if(Z.endsWith(w,"{}"))w=r?w:w.slice(0,-2),x=JSON.stringify(x);else if(Z.isArray(x)&&MI(x)||(Z.isFileList(x)||Z.endsWith(w,"[]"))&&(y=Z.toArray(x)))return w=tx(w),y.forEach(function(k,C){!(Z.isUndefined(k)||k===null)&&t.append(l===!0?Yv([w],C,a):l===null?w:w+"[]",p(k))}),!1}return vp(x)?!0:(t.append(Yv(O,w,a),p(x)),!1)}const _=[],h=Object.assign(FI,{defaultVisitor:m,convertValue:p,isVisitable:vp});function v(x,w){if(!Z.isUndefined(x)){if(_.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));_.push(x),Z.forEach(x,function(y,b){(!(Z.isUndefined(y)||y===null)&&i.call(t,y,Z.isString(b)?b.trim():b,w,h))===!0&&v(y,w?w.concat(b):[b])}),_.pop()}}if(!Z.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Jv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Zh(e,t){this._pairs=[],e&&mc(e,this,t)}const nx=Zh.prototype;nx.append=function(t,n){this._pairs.push([t,n])};nx.toString=function(t){const n=t?function(r){return t.call(this,r,Jv)}:Jv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function rx(e,t,n){if(!t)return e;const r=n&&n.encode||jI,i=n&&n.serialize;let a;if(i?a=i(t,n):a=Z.isURLSearchParams(t)?t.toString():new Zh(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class $I{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Z.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ey=$I,ox={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},HI=typeof URLSearchParams<"u"?URLSearchParams:Zh,UI=FormData,ZI=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),WI=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:HI,FormData:UI,Blob},isStandardBrowserEnv:ZI,isStandardBrowserWebWorkerEnv:WI,protocols:["http","https","file","blob","url","data"]};function VI(e,t){return mc(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Vn.isNode&&Z.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function qI(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function KI(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function ix(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&Z.isArray(i)?i.length:l,d?(Z.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!Z.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&Z.isArray(i[l])&&(i[l]=KI(i[l])),!u)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){const n={};return Z.forEachEntry(e,(r,i)=>{t(qI(r),i,n,0)}),n}return null}const GI={"Content-Type":void 0};function QI(e,t,n){if(Z.isString(e))try{return(t||JSON.parse)(e),Z.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _c={transitional:ox,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=Z.isObject(t);if(a&&Z.isHTMLForm(t)&&(t=new FormData(t)),Z.isFormData(t))return i&&i?JSON.stringify(ix(t)):t;if(Z.isArrayBuffer(t)||Z.isBuffer(t)||Z.isStream(t)||Z.isFile(t)||Z.isBlob(t))return t;if(Z.isArrayBufferView(t))return t.buffer;if(Z.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VI(t,this.formSerializer).toString();if((u=Z.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return mc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),QI(t)):t}],transformResponse:[function(t){const n=this.transitional||_c.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&Z.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Pe.from(u,Pe.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Z.forEach(["delete","get","head"],function(t){_c.headers[t]={}});Z.forEach(["post","put","patch"],function(t){_c.headers[t]=Z.merge(GI)});const Wh=_c,XI=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),YI=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&XI[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ty=Symbol("internals");function fa(e){return e&&String(e).trim().toLowerCase()}function Pl(e){return e===!1||e==null?e:Z.isArray(e)?e.map(Pl):String(e)}function JI(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function eN(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Dd(e,t,n,r){if(Z.isFunction(r))return r.call(this,t,n);if(Z.isString(t)){if(Z.isString(r))return t.indexOf(r)!==-1;if(Z.isRegExp(r))return r.test(t)}}function tN(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nN(e,t){const n=Z.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class gc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,p){const m=fa(d);if(!m)throw new Error("header name must be a non-empty string");const _=Z.findKey(i,m);(!_||i[_]===void 0||p===!0||p===void 0&&i[_]!==!1)&&(i[_||d]=Pl(u))}const l=(u,d)=>Z.forEach(u,(p,m)=>a(p,m,d));return Z.isPlainObject(t)||t instanceof this.constructor?l(t,n):Z.isString(t)&&(t=t.trim())&&!eN(t)?l(YI(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=fa(t),t){const r=Z.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return JI(i);if(Z.isFunction(n))return n.call(this,i,r);if(Z.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=fa(t),t){const r=Z.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Dd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=fa(l),l){const u=Z.findKey(r,l);u&&(!n||Dd(r,r[u],u,n))&&(delete r[u],i=!0)}}return Z.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Dd(this,this[a],a,t))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return Z.forEach(this,(i,a)=>{const l=Z.findKey(r,a);if(l){n[l]=Pl(i),delete n[a];return}const u=t?tN(a):String(a).trim();u!==a&&delete n[a],n[u]=Pl(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return Z.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&Z.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[ty]=this[ty]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=fa(l);r[u]||(nN(i,l),r[u]=!0)}return Z.isArray(t)?t.forEach(a):a(t),this}}gc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.freezeMethods(gc.prototype);Z.freezeMethods(gc);const ur=gc;function Md(e,t){const n=this||Wh,r=t||n,i=ur.from(r.headers);let a=r.data;return Z.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function ax(e){return!!(e&&e.__CANCEL__)}function _s(e,t,n){Pe.call(this,e??"canceled",Pe.ERR_CANCELED,t,n),this.name="CanceledError"}Z.inherits(_s,Pe,{__CANCEL__:!0});function rN(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Pe("Request failed with status code "+n.status,[Pe.ERR_BAD_REQUEST,Pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const oN=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),Z.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),Z.isString(a)&&d.push("path="+a),Z.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function iN(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function aN(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function sx(e,t){return e&&!iN(t)?aN(e,t):t}const sN=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=Z.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function lN(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function uN(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const p=Date.now(),m=r[a];l||(l=p),n[i]=d,r[i]=p;let _=a,h=0;for(;_!==i;)h+=n[_++],_=_%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),p-l<t)return;const v=m&&p-m;return v?Math.round(h*1e3/v):void 0}}function ny(e,t){let n=0;const r=uN(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),p=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&p?(l-a)/d:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const cN=typeof XMLHttpRequest<"u",dN=cN&&function(e){return new Promise(function(n,r){let i=e.data;const a=ur.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}Z.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let p=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(v+":"+x))}const m=sx(e.baseURL,e.url);p.open(e.method.toUpperCase(),rx(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout;function _(){if(!p)return;const v=ur.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:v,config:e,request:p};rN(function(y){n(y),d()},function(y){r(y),d()},w),p=null}if("onloadend"in p?p.onloadend=_:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(_)},p.onabort=function(){p&&(r(new Pe("Request aborted",Pe.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new Pe("Network Error",Pe.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||ox;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Pe(x,w.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,e,p)),p=null},Vn.isStandardBrowserEnv){const v=(e.withCredentials||sN(m))&&e.xsrfCookieName&&oN.read(e.xsrfCookieName);v&&a.set(e.xsrfHeaderName,v)}i===void 0&&a.setContentType(null),"setRequestHeader"in p&&Z.forEach(a.toJSON(),function(x,w){p.setRequestHeader(w,x)}),Z.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),l&&l!=="json"&&(p.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&p.addEventListener("progress",ny(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",ny(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=v=>{p&&(r(!v||v.type?new _s(null,e,p):v),p.abort(),p=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const h=lN(m);if(h&&Vn.protocols.indexOf(h)===-1){r(new Pe("Unsupported protocol "+h+":",Pe.ERR_BAD_REQUEST,e));return}p.send(i||null)})},El={http:DI,xhr:dN};Z.forEach(El,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fN={getAdapter:e=>{e=Z.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=Z.isString(n)?El[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Pe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(Z.hasOwnProp(El,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!Z.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:El};function Fd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _s(null,e)}function ry(e){return Fd(e),e.headers=ur.from(e.headers),e.data=Md.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fN.getAdapter(e.adapter||Wh.adapter)(e).then(function(r){return Fd(e),r.data=Md.call(e,e.transformResponse,r),r.headers=ur.from(r.headers),r},function(r){return ax(r)||(Fd(e),r&&r.response&&(r.response.data=Md.call(e,e.transformResponse,r.response),r.response.headers=ur.from(r.response.headers))),Promise.reject(r)})}const oy=e=>e instanceof ur?e.toJSON():e;function Ai(e,t){t=t||{};const n={};function r(p,m,_){return Z.isPlainObject(p)&&Z.isPlainObject(m)?Z.merge.call({caseless:_},p,m):Z.isPlainObject(m)?Z.merge({},m):Z.isArray(m)?m.slice():m}function i(p,m,_){if(Z.isUndefined(m)){if(!Z.isUndefined(p))return r(void 0,p,_)}else return r(p,m,_)}function a(p,m){if(!Z.isUndefined(m))return r(void 0,m)}function l(p,m){if(Z.isUndefined(m)){if(!Z.isUndefined(p))return r(void 0,p)}else return r(void 0,m)}function u(p,m,_){if(_ in t)return r(p,m);if(_ in e)return r(void 0,p)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(p,m)=>i(oy(p),oy(m),!0)};return Z.forEach(Object.keys(e).concat(Object.keys(t)),function(m){const _=d[m]||i,h=_(e[m],t[m],m);Z.isUndefined(h)&&_!==u||(n[m]=h)}),n}const lx="1.3.2",Vh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Vh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const iy={};Vh.transitional=function(t,n,r){function i(a,l){return"[Axios v"+lx+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Pe(i(l," has been removed"+(n?" in "+n:"")),Pe.ERR_DEPRECATED);return n&&!iy[l]&&(iy[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function pN(e,t,n){if(typeof e!="object")throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Pe("option "+a+" must be "+d,Pe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Pe("Unknown option "+a,Pe.ERR_BAD_OPTION)}}const yp={assertOptions:pN,validators:Vh},Cr=yp.validators;class _u{constructor(t){this.defaults=t,this.interceptors={request:new ey,response:new ey}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ai(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&yp.assertOptions(r,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1),i!==void 0&&yp.assertOptions(i,{encode:Cr.function,serialize:Cr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&Z.merge(a.common,a[n.method]),l&&Z.forEach(["delete","get","head","post","put","patch","common"],x=>{delete a[x]}),n.headers=ur.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const p=[];this.interceptors.response.forEach(function(w){p.push(w.fulfilled,w.rejected)});let m,_=0,h;if(!d){const x=[ry.bind(this),void 0];for(x.unshift.apply(x,u),x.push.apply(x,p),h=x.length,m=Promise.resolve(n);_<h;)m=m.then(x[_++],x[_++]);return m}h=u.length;let v=n;for(_=0;_<h;){const x=u[_++],w=u[_++];try{v=x(v)}catch(O){w.call(this,O);break}}try{m=ry.call(this,v)}catch(x){return Promise.reject(x)}for(_=0,h=p.length;_<h;)m=m.then(p[_++],p[_++]);return m}getUri(t){t=Ai(this.defaults,t);const n=sx(t.baseURL,t.url);return rx(n,t.params,t.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(t){_u.prototype[t]=function(n,r){return this.request(Ai(r||{},{method:t,url:n,data:(r||{}).data}))}});Z.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Ai(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}_u.prototype[t]=n(),_u.prototype[t+"Form"]=n(!0)});const Ol=_u;class qh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new _s(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new qh(function(i){t=i}),cancel:t}}}const hN=qh;function mN(e){return function(n){return e.apply(null,n)}}function _N(e){return Z.isObject(e)&&e.isAxiosError===!0}const bp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bp).forEach(([e,t])=>{bp[t]=e});const gN=bp;function ux(e){const t=new Ol(e),n=Z1(Ol.prototype.request,t);return Z.extend(n,Ol.prototype,t,{allOwnKeys:!0}),Z.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ux(Ai(e,i))},n}const ft=ux(Wh);ft.Axios=Ol;ft.CanceledError=_s;ft.CancelToken=hN;ft.isCancel=ax;ft.VERSION=lx;ft.toFormData=mc;ft.AxiosError=Pe;ft.Cancel=ft.CanceledError;ft.all=function(t){return Promise.all(t)};ft.spread=mN;ft.isAxiosError=_N;ft.mergeConfig=Ai;ft.AxiosHeaders=ur;ft.formToJSON=e=>ix(Z.isHTMLForm(e)?new FormData(e):e);ft.HttpStatusCode=gN;ft.default=ft;const cx=ft;function Pn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function eo(e){return!!e&&!!e[We]}function mr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===PN}(e)||Array.isArray(e)||!!e[fy]||!!(!((t=e.constructor)===null||t===void 0)&&t[fy])||Kh(e)||Gh(e))}function Mo(e,t,n){n===void 0&&(n=!1),$i(e)===0?(n?Object.keys:Si)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function $i(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Kh(e)?2:Gh(e)?3:0}function wi(e,t){return $i(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function vN(e,t){return $i(e)===2?e.get(t):e[t]}function dx(e,t,n){var r=$i(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function fx(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Kh(e){return kN&&e instanceof Map}function Gh(e){return CN&&e instanceof Set}function go(e){return e.o||e.t}function Qh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=hx(e);delete t[We];for(var n=Si(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Xh(e,t){return t===void 0&&(t=!1),Yh(e)||eo(e)||!mr(e)||($i(e)>1&&(e.set=e.add=e.clear=e.delete=yN),Object.freeze(e),t&&Mo(e,function(n,r){return Xh(r,!0)},!0)),e}function yN(){Pn(2)}function Yh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Qn(e){var t=kp[e];return t||Pn(18,e),t}function bN(e,t){kp[e]||(kp[e]=t)}function xp(){return os}function jd(e,t){t&&(Qn("Patches"),e.u=[],e.s=[],e.v=t)}function gu(e){wp(e),e.p.forEach(xN),e.p=null}function wp(e){e===os&&(os=e.l)}function ay(e){return os={p:[],l:os,h:e,m:!0,_:0}}function xN(e){var t=e[We];t.i===0||t.i===1?t.j():t.O=!0}function $d(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Qn("ES5").S(t,e,r),r?(n[We].P&&(gu(t),Pn(4)),mr(e)&&(e=vu(t,e),t.l||yu(t,e)),t.u&&Qn("Patches").M(n[We].t,e,t.u,t.s)):e=vu(t,n,[]),gu(t),t.u&&t.v(t.u,t.s),e!==px?e:void 0}function vu(e,t,n){if(Yh(t))return t;var r=t[We];if(!r)return Mo(t,function(u,d){return sy(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return yu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Qh(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Mo(a,function(u,d){return sy(e,r,i,u,d,n,l)}),yu(e,i,!1),n&&e.u&&Qn("Patches").N(r,n,e.u,e.s)}return r.o}function sy(e,t,n,r,i,a,l){if(eo(i)){var u=vu(e,i,a&&t&&t.i!==3&&!wi(t.R,r)?a.concat(r):void 0);if(dx(n,r,u),!eo(u))return;e.m=!1}else l&&n.add(i);if(mr(i)&&!Yh(i)){if(!e.h.D&&e._<1)return;vu(e,i),t&&t.A.l||yu(e,i)}}function yu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Xh(t,n)}function Hd(e,t){var n=e[We];return(n?go(n):e)[t]}function ly(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Lr(e){e.P||(e.P=!0,e.l&&Lr(e.l))}function Ud(e){e.o||(e.o=Qh(e.t))}function Sp(e,t,n){var r=Kh(t)?Qn("MapSet").F(t,n):Gh(t)?Qn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:xp(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,p=is;l&&(d=[u],p=ya);var m=Proxy.revocable(d,p),_=m.revoke,h=m.proxy;return u.k=h,u.j=_,h}(t,n):Qn("ES5").J(t,n);return(n?n.A:xp()).p.push(r),r}function wN(e){return eo(e)||Pn(22,e),function t(n){if(!mr(n))return n;var r,i=n[We],a=$i(n);if(i){if(!i.P&&(i.i<4||!Qn("ES5").K(i)))return i.t;i.I=!0,r=uy(n,a),i.I=!1}else r=uy(n,a);return Mo(r,function(l,u){i&&vN(i.t,l)===u||dx(r,l,t(u))}),a===3?new Set(r):r}(e)}function uy(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qh(e)}function SN(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[We];return is.get(d,a)},set:function(d){var p=this[We];is.set(p,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][We];if(!u.P)switch(u.i){case 5:r(u)&&Lr(u);break;case 4:n(u)&&Lr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Si(u),p=d.length-1;p>=0;p--){var m=d[p];if(m!==We){var _=l[m];if(_===void 0&&!wi(l,m))return!0;var h=u[m],v=h&&h[We];if(v?v.t!==_:!fx(h,_))return!0}}var x=!!l[We];return d.length!==Si(l).length+(x?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};bN("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(m,_){if(m){for(var h=Array(_.length),v=0;v<_.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var x=hx(_);delete x[We];for(var w=Si(x),O=0;O<w.length;O++){var y=w[O];x[y]=e(y,m||!!x[y].enumerable)}return Object.create(Object.getPrototypeOf(_),x)}(u,a),p={i:u?5:4,A:l?l.A:xp(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,We,{value:p,writable:!0}),d},S:function(a,l,u){u?eo(l)&&l[We].A===a&&t(a.p):(a.u&&function d(p){if(p&&typeof p=="object"){var m=p[We];if(m){var _=m.t,h=m.k,v=m.R,x=m.i;if(x===4)Mo(h,function(k){k!==We&&(_[k]!==void 0||wi(_,k)?v[k]||d(h[k]):(v[k]=!0,Lr(m)))}),Mo(_,function(k){h[k]!==void 0||wi(h,k)||(v[k]=!1,Lr(m))});else if(x===5){if(r(m)&&(Lr(m),v.length=!0),h.length<_.length)for(var w=h.length;w<_.length;w++)v[w]=!1;else for(var O=_.length;O<h.length;O++)v[O]=!0;for(var y=Math.min(h.length,_.length),b=0;b<y;b++)h.hasOwnProperty(b)||(v[b]=!0),v[b]===void 0&&d(h[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var cy,os,Jh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kN=typeof Map<"u",CN=typeof Set<"u",dy=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",px=Jh?Symbol.for("immer-nothing"):((cy={})["immer-nothing"]=!0,cy),fy=Jh?Symbol.for("immer-draftable"):"__$immer_draftable",We=Jh?Symbol.for("immer-state"):"__$immer_state",PN=""+Object.prototype.constructor,Si=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,hx=Object.getOwnPropertyDescriptors||function(e){var t={};return Si(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},kp={},is={get:function(e,t){if(t===We)return e;var n=go(e);if(!wi(n,t))return function(i,a,l){var u,d=ly(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!mr(r)?r:r===Hd(e.t,t)?(Ud(e),e.o[t]=Sp(e.A.h,r,e)):r},has:function(e,t){return t in go(e)},ownKeys:function(e){return Reflect.ownKeys(go(e))},set:function(e,t,n){var r=ly(go(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Hd(go(e),t),a=i?.[We];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(fx(n,i)&&(n!==void 0||wi(e.t,t)))return!0;Ud(e),Lr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Hd(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ud(e),Lr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=go(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Pn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Pn(12)}},ya={};Mo(is,function(e,t){ya[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ya.deleteProperty=function(e,t){return ya.set.call(this,e,t,void 0)},ya.set=function(e,t,n){return is.set.call(this,e[0],t,n,e[0])};var EN=function(){function e(n){var r=this;this.g=dy,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(w){var O=this;w===void 0&&(w=u);for(var y=arguments.length,b=Array(y>1?y-1:0),k=1;k<y;k++)b[k-1]=arguments[k];return d.produce(w,function(C){var z;return(z=a).call.apply(z,[O,C].concat(b))})}}var p;if(typeof a!="function"&&Pn(6),l!==void 0&&typeof l!="function"&&Pn(7),mr(i)){var m=ay(r),_=Sp(r,i,void 0),h=!0;try{p=a(_),h=!1}finally{h?gu(m):wp(m)}return typeof Promise<"u"&&p instanceof Promise?p.then(function(w){return jd(m,l),$d(w,m)},function(w){throw gu(m),w}):(jd(m,l),$d(p,m))}if(!i||typeof i!="object"){if((p=a(i))===void 0&&(p=i),p===px&&(p=void 0),r.D&&Xh(p,!0),l){var v=[],x=[];Qn("Patches").M(i,p,v,x),l(v,x)}return p}Pn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(p){for(var m=arguments.length,_=Array(m>1?m-1:0),h=1;h<m;h++)_[h-1]=arguments[h];return r.produceWithPatches(p,function(v){return i.apply(void 0,[v].concat(_))})};var l,u,d=r.produce(i,a,function(p,m){l=p,u=m});return typeof Promise<"u"&&d instanceof Promise?d.then(function(p){return[p,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){mr(n)||Pn(8),eo(n)&&(n=wN(n));var r=ay(this),i=Sp(this,n,void 0);return i[We].C=!0,wp(r),i},t.finishDraft=function(n,r){var i=n&&n[We],a=i.A;return jd(a,r),$d(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!dy&&Pn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=Qn("Patches").$;return eo(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),Qt=new EN,mx=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function py(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function hy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?py(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):py(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var my=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Zd=function(){return Math.random().toString(36).substring(7).split("").join(".")},bu={INIT:"@@redux/INIT"+Zd(),REPLACE:"@@redux/REPLACE"+Zd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Zd()}};function ON(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function _x(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ct(1));return n(_x)(e,t)}if(typeof e!="function")throw new Error(Ct(2));var i=e,a=t,l=[],u=l,d=!1;function p(){u===l&&(u=l.slice())}function m(){if(d)throw new Error(Ct(3));return a}function _(w){if(typeof w!="function")throw new Error(Ct(4));if(d)throw new Error(Ct(5));var O=!0;return p(),u.push(w),function(){if(O){if(d)throw new Error(Ct(6));O=!1,p();var b=u.indexOf(w);u.splice(b,1),l=null}}}function h(w){if(!ON(w))throw new Error(Ct(7));if(typeof w.type>"u")throw new Error(Ct(8));if(d)throw new Error(Ct(9));try{d=!0,a=i(a,w)}finally{d=!1}for(var O=l=u,y=0;y<O.length;y++){var b=O[y];b()}return w}function v(w){if(typeof w!="function")throw new Error(Ct(10));i=w,h({type:bu.REPLACE})}function x(){var w,O=_;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Ct(11));function k(){b.next&&b.next(m())}k();var C=O(k);return{unsubscribe:C}}},w[my]=function(){return this},w}return h({type:bu.INIT}),r={dispatch:h,subscribe:_,getState:m,replaceReducer:v},r[my]=x,r}function TN(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:bu.INIT});if(typeof r>"u")throw new Error(Ct(12));if(typeof n(void 0,{type:bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ct(13))})}function zN(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{TN(n)}catch(u){l=u}return function(d,p){if(d===void 0&&(d={}),l)throw l;for(var m=!1,_={},h=0;h<a.length;h++){var v=a[h],x=n[v],w=d[v],O=x(w,p);if(typeof O>"u")throw p&&p.type,new Error(Ct(14));_[v]=O,m=m||O!==w}return m=m||a.length!==Object.keys(d).length,m?_:d}}function xu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function LN(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Ct(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=xu.apply(void 0,u)(i.dispatch),hy(hy({},i),{},{dispatch:a})}}}function gx(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var vx=gx();vx.withExtraArgument=gx;const _y=vx;var RN=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),BN=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(p){return function(m){return d([p,m])}}function d(p){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=p[0]&2?i.return:p[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,p[1])).done)return a;switch(i=0,a&&(p=[p[0]&2,a.value]),p[0]){case 0:case 1:a=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,i=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!a||p[1]>a[0]&&p[1]<a[3])){n.label=p[1];break}if(p[0]===6&&n.label<a[1]){n.label=a[1],a=p;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(p);break}a[2]&&n.ops.pop(),n.trys.pop();continue}p=t.call(e,n)}catch(m){p=[6,m],i=0}finally{r=a=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},wu=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},AN=Object.defineProperty,IN=Object.defineProperties,NN=Object.getOwnPropertyDescriptors,gy=Object.getOwnPropertySymbols,DN=Object.prototype.hasOwnProperty,MN=Object.prototype.propertyIsEnumerable,vy=function(e,t,n){return t in e?AN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Vr=function(e,t){for(var n in t||(t={}))DN.call(t,n)&&vy(e,n,t[n]);if(gy)for(var r=0,i=gy(t);r<i.length;r++){var n=i[r];MN.call(t,n)&&vy(e,n,t[n])}return e},Wd=function(e,t){return IN(e,NN(t))},FN=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(p){i(p)}},l=function(d){try{u(n.throw(d))}catch(p){i(p)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},jN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xu:xu.apply(null,arguments)};function $N(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var HN=function(e){RN(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wu([void 0],n[0].concat(this)))):new(t.bind.apply(t,wu([void 0],n.concat(this))))},t}(Array);function Cp(e){return mr(e)?mx(e,function(){}):e}function UN(e){return typeof e=="boolean"}function ZN(){return function(t){return WN(t)}}function WN(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new HN;return n&&(UN(n)?r.push(_y):r.push(_y.withExtraArgument(n.extraArgument))),r}var VN=!0;function qN(e){var t=ZN(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,p=n.preloadedState,m=p===void 0?void 0:p,_=n.enhancers,h=_===void 0?void 0:_,v;if(typeof i=="function")v=i;else if($N(i))v=zN(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=LN.apply(void 0,x),O=xu;d&&(O=jN(Vr({trace:!VN},typeof d=="object"&&d)));var y=[w];Array.isArray(h)?y=wu([w],h):typeof h=="function"&&(y=h(y));var b=O.apply(void 0,y);return _x(v,m,b)}function qr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return Vr(Vr({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function yx(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function KN(e){return typeof e=="function"}function GN(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?yx(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(KN(e))d=function(){return Cp(e())};else{var p=Cp(e);d=function(){return p}}function m(_,h){_===void 0&&(_=d());var v=wu([a[h.type]],l.filter(function(x){var w=x.matcher;return w(h)}).map(function(x){var w=x.reducer;return w}));return v.filter(function(x){return!!x}).length===0&&(v=[u]),v.reduce(function(x,w){if(w)if(eo(x)){var O=x,y=w(O,h);return y===void 0?x:y}else{if(mr(x))return mx(x,function(b){return w(b,h)});var y=w(x,h);if(y===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return x},_)}return m.getInitialState=d,m}function QN(e,t){return e+"/"+t}function XN(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Cp(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(m){var _=r[m],h=QN(t,m),v,x;"reducer"in _?(v=_.reducer,x=_.prepare):v=_,a[m]=v,l[h]=v,u[m]=x?qr(h,x):qr(h)});function d(){var m=typeof e.extraReducers=="function"?yx(e.extraReducers):[e.extraReducers],_=m[0],h=_===void 0?{}:_,v=m[1],x=v===void 0?[]:v,w=m[2],O=w===void 0?void 0:w,y=Vr(Vr({},h),l);return GN(n,function(b){for(var k in y)b.addCase(k,y[k]);for(var C=0,z=x;C<z.length;C++){var N=z[C];b.addMatcher(N.matcher,N.reducer)}O&&b.addDefaultCase(O)})}var p;return{name:t,reducer:function(m,_){return p||(p=d()),p(m,_)},actions:u,caseReducers:a,getInitialState:function(){return p||(p=d()),p.getInitialState()}}}var YN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",JN=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=YN[Math.random()*64|0];return t},eD=["name","message","stack","code"],Vd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),yy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),tD=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=eD;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},bx=function(){function e(t,n,r){var i=qr(t+"/fulfilled",function(p,m,_,h){return{payload:p,meta:Wd(Vr({},h||{}),{arg:_,requestId:m,requestStatus:"fulfilled"})}}),a=qr(t+"/pending",function(p,m,_){return{payload:void 0,meta:Wd(Vr({},_||{}),{arg:m,requestId:p,requestStatus:"pending"})}}),l=qr(t+"/rejected",function(p,m,_,h,v){return{payload:h,error:(r&&r.serializeError||tD)(p||"Rejected"),meta:Wd(Vr({},v||{}),{arg:_,requestId:m,rejectedWithValue:!!h,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function p(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return p.prototype.abort=function(){},p}();function d(p){return function(m,_,h){var v=r?.idGenerator?r.idGenerator(p):JN(),x=new u,w;function O(b){w=b,x.abort()}var y=function(){return FN(this,null,function(){var b,k,C,z,N,M,F;return BN(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,p,{getState:_,extra:h}),rD(z)?[4,z]:[3,2];case 1:z=H.sent(),H.label=2;case 2:if(z===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(j,J){return x.signal.addEventListener("abort",function(){return J({name:"AbortError",message:w||"Aborted"})})}),m(a(v,p,(k=r?.getPendingMeta)==null?void 0:k.call(r,{requestId:v,arg:p},{getState:_,extra:h}))),[4,Promise.race([N,Promise.resolve(n(p,{dispatch:m,getState:_,extra:h,requestId:v,signal:x.signal,abort:O,rejectWithValue:function(j,J){return new Vd(j,J)},fulfillWithValue:function(j,J){return new yy(j,J)}})).then(function(j){if(j instanceof Vd)throw j;return j instanceof yy?i(j.payload,v,p,j.meta):i(j,v,p)})])];case 3:return C=H.sent(),[3,5];case 4:return M=H.sent(),C=M instanceof Vd?l(null,v,p,M.payload,M.meta):l(M,v,p),[3,5];case 5:return F=r&&!r.dispatchConditionRejection&&l.match(C)&&C.meta.condition,F||m(C),[2,C]}})})}();return Object.assign(y,{abort:O,requestId:v,arg:p,unwrap:function(){return y.then(nD)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function nD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function rD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var em="listenerMiddleware";qr(em+"/add");qr(em+"/removeAll");qr(em+"/remove");var by;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);SN();const oD={loading:!0,brandloading:!0,evList:{evs:[]},search:{name:"",sortOrder:1,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"]},error:""},Pp=bx("evsearch/fetchEvs",async e=>await cx.post("https://api.evkx.net/api/Ev",e,{headers:{"Content-Type":"application/json"}}).then(t=>t.data).catch(t=>{console.error("error",t)})),Ep=bx("evsearch/fetchSearchOptions",async()=>await cx.get("https://api.evkx.net/api/searchoptions").then(e=>e.data).catch(e=>{console.error("error",e)})),xx=XN({name:"evsearch",initialState:oD,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{const n=t.payload;e.search.airSuspension=n}},extraReducers:e=>{e.addCase(Pp.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Pp.rejected,(t,n)=>{t.error=n.error.message}).addCase(Ep.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Ep.rejected,(t,n)=>{t.error=n.error.message})}}),iD=xx.reducer,{updateSortOrder:aD,updateEvType:sD,updateBrands:lD,updateSeatConfig:uD,updateAllWheelDrive:cD,updateNightVision:dD,updateAdaptiveDamping:fD,updateAdaptiveAirSuspension:ID}=xx.actions,ho=I2,pD=()=>eC(),hD="_line_x3q2g_1",mD={line:hD},_D=()=>ge("hr",{className:mD.line}),gD="_evsearchAccordionContent_xtp78_1",vD="_scopeText_xtp78_9",yD="_scopeItems_xtp78_17",bD="_line_xtp78_25",xD="_contentTexts_xtp78_35",wD="_bottomContentTexts_xtp78_45",ll={evsearchAccordionContent:gD,scopeText:vD,scopeItems:yD,line:bD,contentTexts:xD,bottomContentTexts:wD},SD=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""],maxPower:i=0,topSpeedKph:a=0})=>{const[l,u]=T.useState(!1);return ge("div",{children:Sn(z3,{open:l,onClick:()=>u(!l),children:[ge(F3,{subtitle:t,children:e}),ge(j3,{children:ge("div",{className:ll.newApiAccordionContent,children:i&&Sn("div",{children:[ge("p",{className:ll.scopeText,children:Cd("evsearch.specifications")}),ge("div",{className:ll.line,children:ge(_D,{})}),Sn("div",{className:ll.contentTexts,children:[Cd("evsearch.topspeed"),a,ge("br",{}),Cd("evsearch.maxpower"),i]})]})})})]})})},kD="_pageContent_r6jh1_1",CD="_page_r6jh1_1",pa={pageContent:kD,page:CD},PD=()=>{const{t:e}=o1("common"),t=ho(C=>C.evsearchResult.loading),n=pD(),r=async()=>await n(Ep()),i=ho(C=>C.evsearchResult.evList.evs),a=ho(C=>C.evsearchResult.searchOptions.brands),l=ho(C=>C.evsearchResult.searchOptions.bodyTypes),u=ho(C=>C.evsearchResult.searchOptions.seatConfiguration),d=ho(C=>C.evsearchResult.search),p=async C=>await n(Pp(C)),m=ho(C=>C.evsearchResult.error);T.useEffect(()=>{t&&(p(d),r())},[]),T.useEffect(()=>{p(d)},[d]);const _=C=>{n(aD(C))},h=C=>{n(lD(C))},v=a.map(C=>({label:C,value:C})),x=C=>{n(sD(C))},w=C=>{n(uD(C))},O=C=>{const z=C.target.checked;n(cD(z))},y=C=>{const z=C.target.checked;n(dD(z))},b=C=>{const z=C.target.checked;n(fD(z))},k=()=>m?ge(O3,{title:e("api_delegation.data_retrieval_failed"),variant:Ar.Error,forceMobileLayout:!0,children:Sn("div",{children:[e("api_delegation.error_message"),": ",m]})}):t?e("api_delegation.loading")+"...":i.map((C,z)=>ge(SD,{title:C.name,subtitle:C.sortValue+" "+C.sortParameter,topContentText:C.infoUri,maxPower:C.maxPowerKw,topSpeedKph:C.topSpeedKph},z));return ge("div",{className:pa.page,children:Sn(H3,{children:[ge(U3,{icon:ge(iI,{}),children:e("evsearch.title")}),Sn(hv,{children:[Sn("div",{className:pa.pageContent,children:[ge(Gv,{label:"Sortering",multiple:!1,onChange:_,options:[{label:"Merke,model",value:"1"},{label:"Rekkevidde WLTP minimum spesifikasjon",value:"2"},{label:"Netto batterystørrelse minst-størst",value:"3"},{label:"Netto batteristørrels størst-minst",value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"},{label:"Power more > less",value:"6"},{label:"Top speed more >less",value:"7"},{label:"Max DC Charging",value:"8"}]}),ge(Gv,{label:"Brands",multiple:!0,onChange:h,options:v}),ge("br",{}),ge(Zv,{"data-testid":"evsearch-evtype",variant:ns.Horizontal,onChange:C=>x(C),compact:!0,legend:"Select body type",items:l.map(C=>({label:C,name:C,checked:d.evType===void 0||d.evType.includes(C)}))}),ge("br",{}),ge(sA,{items:[{content:ge(Zv,{"data-testid":"evsearch-seatconfig",variant:ns.Horizontal,onChange:C=>w(C),compact:!0,legend:"Number of seats",items:u.map(C=>({label:C,name:C,checked:d.seatConfiguration===void 0||d.seatConfiguration.includes(C)}))}),name:"Seats"},{content:Sn(hv,{children:[ge(kl,{checked:d.allWheelDrive,label:"All wheel drive",onChange:O,compact:!0}),ge("br",{}),ge(kl,{checked:d.adaptiveSuspension,label:"Adaptive Suspension",onChange:b,compact:!0})]}),name:"Drivetrain"},{content:ge(kl,{checked:d.nightVision,label:"Nightvision",onChange:y,compact:!0}),name:"Driver Assistance"},{content:ge("h1",{children:"heisann"}),name:"Exterior"}]}),ge("br",{})]}),ge("div",{className:pa.pageContentAccordionsContainer,children:Sn("div",{className:pa.apiAccordions,children:[Sn("h4",{children:[e("evsearch.searchresult"),":"]}),ge("div",{className:pa.accordionScrollContainer,children:k()})]})})]})]})})},ED=eP([{path:"/",errorElement:ge(ov,{})},{path:"evsearch",element:ge(PD,{}),errorElement:ge(ov,{})}],{basename:"/"}),OD={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Tl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Tl)Tl[e]===void 0&&delete Tl[e];const TD={...OD,...Tl};function zD(e){return TD[e]}const LD=({children:e})=>{const{i18n:t}=o1("common"),r=`/public/localizations/${t.language}.json`,i=new URL(r,import.meta.url).href;return GP("Localizations",async()=>{const l=await(await fetch(i)).json();zt.addResourceBundle(t.language,"common",l)},{staleTime:1/0,suspense:!0}),ge(rS,{children:e})};var Su={},RD={get exports(){return Su},set exports(e){Su=e}};(function(e,t){(function(n,r){r(t)})(Jo,function(n){function r(E,I){E.super_=I,E.prototype=Object.create(I.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,I){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),I&&I.length&&Object.defineProperty(this,"path",{value:I,enumerable:!0})}function a(E,I,A){a.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:I,enumerable:!0}),Object.defineProperty(this,"rhs",{value:A,enumerable:!0})}function l(E,I){l.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:I,enumerable:!0})}function u(E,I){u.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:I,enumerable:!0})}function d(E,I,A){d.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:I,enumerable:!0}),Object.defineProperty(this,"item",{value:A,enumerable:!0})}function p(E,I,A){var q=E.slice((A||I)+1||E.length);return E.length=I<0?E.length+I:I,E.push.apply(E,q),E}function m(E){var I=typeof E>"u"?"undefined":le(E);return I!=="object"?I:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function _(E,I,A,q,Y,te,se){Y=Y||[],se=se||[];var pe=Y.slice(0);if(typeof te<"u"){if(q){if(typeof q=="function"&&q(pe,te))return;if((typeof q>"u"?"undefined":le(q))==="object"){if(q.prefilter&&q.prefilter(pe,te))return;if(q.normalize){var Xe=q.normalize(pe,te,E,I);Xe&&(E=Xe[0],I=Xe[1])}}}pe.push(te)}m(E)==="regexp"&&m(I)==="regexp"&&(E=E.toString(),I=I.toString());var Ue=typeof E>"u"?"undefined":le(E),De=typeof I>"u"?"undefined":le(I),Me=Ue!=="undefined"||se&&se[se.length-1].lhs&&se[se.length-1].lhs.hasOwnProperty(te),et=De!=="undefined"||se&&se[se.length-1].rhs&&se[se.length-1].rhs.hasOwnProperty(te);if(!Me&&et)A(new l(pe,I));else if(!et&&Me)A(new u(pe,E));else if(m(E)!==m(I))A(new a(pe,E,I));else if(m(E)==="date"&&E-I!==0)A(new a(pe,E,I));else if(Ue==="object"&&E!==null&&I!==null)if(se.filter(function(Ne){return Ne.lhs===E}).length)E!==I&&A(new a(pe,E,I));else{if(se.push({lhs:E,rhs:I}),Array.isArray(E)){var Se;for(E.length,Se=0;Se<E.length;Se++)Se>=I.length?A(new d(pe,Se,new u(void 0,E[Se]))):_(E[Se],I[Se],A,q,pe,Se,se);for(;Se<I.length;)A(new d(pe,Se,new l(void 0,I[Se++])))}else{var en=Object.keys(E),Mt=Object.keys(I);en.forEach(function(Ne,W){var G=Mt.indexOf(Ne);G>=0?(_(E[Ne],I[Ne],A,q,pe,Ne,se),Mt=p(Mt,G)):_(E[Ne],void 0,A,q,pe,Ne,se)}),Mt.forEach(function(Ne){_(void 0,I[Ne],A,q,pe,Ne,se)})}se.length=se.length-1}else E!==I&&(Ue==="number"&&isNaN(E)&&isNaN(I)||A(new a(pe,E,I)))}function h(E,I,A,q){return q=q||[],_(E,I,function(Y){Y&&q.push(Y)},A),q.length?q:void 0}function v(E,I,A){if(A.path&&A.path.length){var q,Y=E[I],te=A.path.length-1;for(q=0;q<te;q++)Y=Y[A.path[q]];switch(A.kind){case"A":v(Y[A.path[q]],A.index,A.item);break;case"D":delete Y[A.path[q]];break;case"E":case"N":Y[A.path[q]]=A.rhs}}else switch(A.kind){case"A":v(E[I],A.index,A.item);break;case"D":E=p(E,I);break;case"E":case"N":E[I]=A.rhs}return E}function x(E,I,A){if(E&&I&&A&&A.kind){for(var q=E,Y=-1,te=A.path?A.path.length-1:0;++Y<te;)typeof q[A.path[Y]]>"u"&&(q[A.path[Y]]=typeof A.path[Y]=="number"?[]:{}),q=q[A.path[Y]];switch(A.kind){case"A":v(A.path?q[A.path[Y]]:q,A.index,A.item);break;case"D":delete q[A.path[Y]];break;case"E":case"N":q[A.path[Y]]=A.rhs}}}function w(E,I,A){if(A.path&&A.path.length){var q,Y=E[I],te=A.path.length-1;for(q=0;q<te;q++)Y=Y[A.path[q]];switch(A.kind){case"A":w(Y[A.path[q]],A.index,A.item);break;case"D":Y[A.path[q]]=A.lhs;break;case"E":Y[A.path[q]]=A.lhs;break;case"N":delete Y[A.path[q]]}}else switch(A.kind){case"A":w(E[I],A.index,A.item);break;case"D":E[I]=A.lhs;break;case"E":E[I]=A.lhs;break;case"N":E=p(E,I)}return E}function O(E,I,A){if(E&&I&&A&&A.kind){var q,Y,te=E;for(Y=A.path.length-1,q=0;q<Y;q++)typeof te[A.path[q]]>"u"&&(te[A.path[q]]={}),te=te[A.path[q]];switch(A.kind){case"A":w(te[A.path[q]],A.index,A.item);break;case"D":te[A.path[q]]=A.lhs;break;case"E":te[A.path[q]]=A.lhs;break;case"N":delete te[A.path[q]]}}}function y(E,I,A){if(E&&I){var q=function(Y){A&&!A(E,I,Y)||x(E,I,Y)};_(E,I,q)}}function b(E){return"color: "+R[E].color+"; font-weight: bold"}function k(E){var I=E.kind,A=E.path,q=E.lhs,Y=E.rhs,te=E.index,se=E.item;switch(I){case"E":return[A.join("."),q,"→",Y];case"N":return[A.join("."),Y];case"D":return[A.join(".")];case"A":return[A.join(".")+"["+te+"]",se];default:return[]}}function C(E,I,A,q){var Y=h(E,I);try{q?A.groupCollapsed("diff"):A.group("diff")}catch{A.log("diff")}Y?Y.forEach(function(te){var se=te.kind,pe=k(te);A.log.apply(A,["%c "+R[se].text,b(se)].concat(U(pe)))}):A.log("—— no diff ——");try{A.groupEnd()}catch{A.log("—— diff end —— ")}}function z(E,I,A,q){switch(typeof E>"u"?"undefined":le(E)){case"object":return typeof E[q]=="function"?E[q].apply(E,U(A)):E[q];case"function":return E(I);default:return E}}function N(E){var I=E.timestamp,A=E.duration;return function(q,Y,te){var se=["action"];return se.push("%c"+String(q.type)),I&&se.push("%c@ "+Y),A&&se.push("%c(in "+te.toFixed(2)+" ms)"),se.join(" ")}}function M(E,I){var A=I.logger,q=I.actionTransformer,Y=I.titleFormatter,te=Y===void 0?N(I):Y,se=I.collapsed,pe=I.colors,Xe=I.level,Ue=I.diff,De=typeof I.titleFormatter>"u";E.forEach(function(Me,et){var Se=Me.started,en=Me.startedTime,Mt=Me.action,Ne=Me.prevState,W=Me.error,G=Me.took,ee=Me.nextState,de=E[et+1];de&&(ee=de.prevState,G=de.started-Se);var ue=q(Mt),Re=typeof se=="function"?se(function(){return ee},Mt,Me):se,ke=fe(en),ye=pe.title?"color: "+pe.title(ue)+";":"",be=["color: gray; font-weight: lighter;"];be.push(ye),I.timestamp&&be.push("color: gray; font-weight: lighter;"),I.duration&&be.push("color: gray; font-weight: lighter;");var ze=te(ue,ke,G);try{Re?pe.title&&De?A.groupCollapsed.apply(A,["%c "+ze].concat(be)):A.groupCollapsed(ze):pe.title&&De?A.group.apply(A,["%c "+ze].concat(be)):A.group(ze)}catch{A.log(ze)}var Ze=z(Xe,ue,[Ne],"prevState"),Lt=z(Xe,ue,[ue],"action"),wt=z(Xe,ue,[W,Ne],"error"),Ft=z(Xe,ue,[ee],"nextState");if(Ze)if(pe.prevState){var Yn="color: "+pe.prevState(Ne)+"; font-weight: bold";A[Ze]("%c prev state",Yn,Ne)}else A[Ze]("prev state",Ne);if(Lt)if(pe.action){var Jn="color: "+pe.action(ue)+"; font-weight: bold";A[Lt]("%c action    ",Jn,ue)}else A[Lt]("action    ",ue);if(W&&wt)if(pe.error){var tn="color: "+pe.error(W,Ne)+"; font-weight: bold;";A[wt]("%c error     ",tn,W)}else A[wt]("error     ",W);if(Ft)if(pe.nextState){var vr="color: "+pe.nextState(ee)+"; font-weight: bold";A[Ft]("%c next state",vr,ee)}else A[Ft]("next state",ee);Ue&&C(Ne,ee,A,Re);try{A.groupEnd()}catch{A.log("—— log end ——")}})}function F(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=Object.assign({},re,E),A=I.logger,q=I.stateTransformer,Y=I.errorTransformer,te=I.predicate,se=I.logErrors,pe=I.diffPredicate;if(typeof A>"u")return function(){return function(Ue){return function(De){return Ue(De)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(Ue){return function(De){return Ue(De)}}};var Xe=[];return function(Ue){var De=Ue.getState;return function(Me){return function(et){if(typeof te=="function"&&!te(De,et))return Me(et);var Se={};Xe.push(Se),Se.started=X.now(),Se.startedTime=new Date,Se.prevState=q(De()),Se.action=et;var en=void 0;if(se)try{en=Me(et)}catch(Ne){Se.error=Y(Ne)}else en=Me(et);Se.took=X.now()-Se.started,Se.nextState=q(De());var Mt=I.diff&&typeof pe=="function"?pe(De,et):I.diff;if(M(Xe,Object.assign({},I,{diff:Mt})),Xe.length=0,Se.error)throw Se.error;return en}}}}var H,j,J=function(E,I){return new Array(I+1).join(E)},ie=function(E,I){return J("0",I-E.toString().length)+E},fe=function(E){return ie(E.getHours(),2)+":"+ie(E.getMinutes(),2)+":"+ie(E.getSeconds(),2)+"."+ie(E.getMilliseconds(),3)},X=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},U=function(E){if(Array.isArray(E)){for(var I=0,A=Array(E.length);I<E.length;I++)A[I]=E[I];return A}return Array.from(E)},ne=[];H=(typeof Jo>"u"?"undefined":le(Jo))==="object"&&Jo?Jo:typeof window<"u"?window:{},j=H.DeepDiff,j&&ne.push(function(){typeof j<"u"&&H.DeepDiff===h&&(H.DeepDiff=j,j=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:_,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:x,enumerable:!0},revertChange:{value:O,enumerable:!0},isConflict:{value:function(){return typeof j<"u"},enumerable:!0},noConflict:{value:function(){return ne&&(ne.forEach(function(E){E()}),ne=null),h},enumerable:!0}});var R={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},re={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},V=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=E.dispatch,A=E.getState;return typeof I=="function"||typeof A=="function"?F()({dispatch:I,getState:A}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=re,n.createLogger=F,n.logger=V,n.default=V,Object.defineProperty(n,"__esModule",{value:!0})})})(RD,Su);Su.createLogger();const BD=qN({reducer:{evsearchResult:iD}}),AD=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};PE(fP).init({lng:AD("no_nb"),fallbackLng:zD("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new DP({defaultOptions:void 0});zb(document.getElementById("root")).render(ge(T.StrictMode,{children:ge(X2,{store:BD,children:ge(UP,{client:e,children:ge(LD,{children:ge(QC,{router:ED})})})})}))});
