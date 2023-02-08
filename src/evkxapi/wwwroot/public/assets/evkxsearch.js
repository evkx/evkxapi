function Zw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ey(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Za={},Hw={get exports(){return Za},set exports(e){Za=e}},Bu={},R={},Ww={get exports(){return R},set exports(e){R=e}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),qw=Symbol.for("react.fragment"),Kw=Symbol.for("react.strict_mode"),Qw=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Xw=Symbol.for("react.context"),Jw=Symbol.for("react.forward_ref"),Yw=Symbol.for("react.suspense"),ek=Symbol.for("react.memo"),tk=Symbol.for("react.lazy"),i_=Symbol.iterator;function nk(e){return e===null||typeof e!="object"?null:(e=i_&&e[i_]||e["@@iterator"],typeof e=="function"?e:null)}var Oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ty=Object.assign,Ly={};function Wi(e,t,n){this.props=e,this.context=t,this.refs=Ly,this.updater=n||Oy}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ry(){}Ry.prototype=Wi.prototype;function Ip(e,t,n){this.props=e,this.context=t,this.refs=Ly,this.updater=n||Oy}var Mp=Ip.prototype=new Ry;Mp.constructor=Ip;Ty(Mp,Wi.prototype);Mp.isPureReactComponent=!0;var a_=Array.isArray,zy=Object.prototype.hasOwnProperty,Dp={current:null},Ay={key:!0,ref:!0,__self:!0,__source:!0};function Ny(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)zy.call(t,r)&&!Ay.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:gs,type:e,key:a,ref:l,props:i,_owner:Dp.current}}function rk(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function ok(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var s_=/\/+/g;function rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ok(""+e.key):t.toString(36)}function yl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case gs:case Vw:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+rd(l,0):r,a_(i)?(n="",e!=null&&(n=e.replace(s_,"$&/")+"/"),yl(i,t,n,"",function(f){return f})):i!=null&&(Fp(i)&&(i=rk(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(s_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",a_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+rd(a,u);l+=yl(a,t,n,d,i)}else if(d=nk(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+rd(a,u++),l+=yl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qs(e,t,n){if(e==null)return e;var r=[],i=0;return yl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ik(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},bl={transition:null},ak={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Dp};Pe.Children={map:Qs,forEach:function(e,t,n){Qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qs(e,function(){t++}),t},toArray:function(e){return Qs(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=Wi;Pe.Fragment=qw;Pe.Profiler=Qw;Pe.PureComponent=Ip;Pe.StrictMode=Kw;Pe.Suspense=Yw;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ak;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ty({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)zy.call(t,d)&&!Ay.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:gs,type:e.type,key:i,ref:a,props:r,_owner:l}};Pe.createContext=function(e){return e={$$typeof:Xw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gw,_context:e},e.Consumer=e};Pe.createElement=Ny;Pe.createFactory=function(e){var t=Ny.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:Jw,render:e}};Pe.isValidElement=Fp;Pe.lazy=function(e){return{$$typeof:tk,_payload:{_status:-1,_result:e},_init:ik}};Pe.memo=function(e,t){return{$$typeof:ek,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=bl.transition;bl.transition={};try{e()}finally{bl.transition=t}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(e,t){return Dt.current.useCallback(e,t)};Pe.useContext=function(e){return Dt.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Dt.current.useEffect(e,t)};Pe.useId=function(){return Dt.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Dt.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Dt.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Dt.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Dt.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Dt.current.useReducer(e,t,n)};Pe.useRef=function(e){return Dt.current.useRef(e)};Pe.useState=function(e){return Dt.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Dt.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Dt.current.useTransition()};Pe.version="18.2.0";(function(e){e.exports=Pe})(Ww);const Z=Ey(R),Ha=Zw({__proto__:null,default:Z},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sk=R,lk=Symbol.for("react.element"),uk=Symbol.for("react.fragment"),ck=Object.prototype.hasOwnProperty,dk=sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fk={key:!0,ref:!0,__self:!0,__source:!0};function By(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ck.call(t,r)&&!fk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lk,type:e,key:a,ref:l,props:i,_owner:dk.current}}Bu.Fragment=uk;Bu.jsx=By;Bu.jsxs=By;(function(e){e.exports=Bu})(Hw);const pk=Za.Fragment,ve=Za.jsx,sn=Za.jsxs;var Ni={},hk={get exports(){return Ni},set exports(e){Ni=e}},Yt={},rf={},mk={get exports(){return rf},set exports(e){rf=e}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,re){var V=I.length;I.push(re);e:for(;0<V;){var O=V-1>>>1,B=I[O];if(0<i(B,re))I[O]=re,I[V]=B,V=O;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var re=I[0],V=I.pop();if(V!==re){I[0]=V;e:for(var O=0,B=I.length,N=B>>>1;O<N;){var K=2*(O+1)-1,Y=I[K],te=K+1,ue=I[te];if(0>i(Y,V))te<B&&0>i(ue,Y)?(I[O]=ue,I[te]=V,O=te):(I[O]=Y,I[K]=V,O=K);else if(te<B&&0>i(ue,V))I[O]=ue,I[te]=V,O=te;else break e}}return re}function i(I,re){var V=I.sortIndex-re.sortIndex;return V!==0?V:I.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],_=1,m=null,h=3,g=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(I){for(var re=n(f);re!==null;){if(re.callback===null)r(f);else if(re.startTime<=I)r(f),re.sortIndex=re.expirationTime,t(d,re);else break;re=n(f)}}function P(I){if(w=!1,S(I),!x)if(n(d)!==null)x=!0,$(z);else{var re=n(f);re!==null&&ee(P,re.startTime-I)}}function z(I,re){x=!1,w&&(w=!1,y(j),j=-1),g=!0;var V=h;try{for(S(re),m=n(d);m!==null&&(!(m.expirationTime>re)||I&&!Q());){var O=m.callback;if(typeof O=="function"){m.callback=null,h=m.priorityLevel;var B=O(m.expirationTime<=re);re=e.unstable_now(),typeof B=="function"?m.callback=B:m===n(d)&&r(d),S(re)}else r(d);m=n(d)}if(m!==null)var N=!0;else{var K=n(f);K!==null&&ee(P,K.startTime-re),N=!1}return N}finally{m=null,h=V,g=!1}}var M=!1,F=null,j=-1,W=5,T=-1;function Q(){return!(e.unstable_now()-T<W)}function ae(){if(F!==null){var I=e.unstable_now();T=I;var re=!0;try{re=F(!0,I)}finally{re?he():(M=!1,F=null)}}else M=!1}var he;if(typeof b=="function")he=function(){b(ae)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,de=ne.port2;ne.port1.onmessage=ae,he=function(){de.postMessage(null)}}else he=function(){C(ae,0)};function $(I){F=I,M||(M=!0,he())}function ee(I,re){j=C(function(){I(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,$(z))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var re=3;break;default:re=h}var V=h;h=re;try{return I()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,re){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=h;h=I;try{return re()}finally{h=V}},e.unstable_scheduleCallback=function(I,re,V){var O=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?O+V:O):V=O,I){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,I={id:_++,callback:re,priorityLevel:I,startTime:V,expirationTime:B,sortIndex:-1},V>O?(I.sortIndex=V,t(f,I),n(d)===null&&I===n(f)&&(w?(y(j),j=-1):w=!0,ee(P,V-O))):(I.sortIndex=B,t(d,I),x||g||(x=!0,$(z))),I},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(I){var re=h;return function(){var V=h;h=re;try{return I.apply(this,arguments)}finally{h=V}}}})(Iy);(function(e){e.exports=Iy})(mk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=R,Xt=rf;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,Wa={};function qo(e,t){Bi(e,t),Bi(e+"Capture",t)}function Bi(e,t){for(Wa[e]=t,e=0;e<t.length;e++)Dy.add(t[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,_k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,l_={},u_={};function vk(e){return of.call(u_,e)?!0:of.call(l_,e)?!1:_k.test(e)?u_[e]=!0:(l_[e]=!0,!1)}function gk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yk(e,t,n,r){if(t===null||typeof t>"u"||gk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ft(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){St[e]=new Ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];St[t]=new Ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){St[e]=new Ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){St[e]=new Ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){St[e]=new Ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){St[e]=new Ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){St[e]=new Ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){St[e]=new Ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){St[e]=new Ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function $p(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jp,$p);St[t]=new Ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jp,$p);St[t]=new Ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jp,$p);St[t]=new Ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){St[e]=new Ft(e,1,!1,e.toLowerCase(),null,!1,!1)});St.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){St[e]=new Ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function Up(e,t,n,r){var i=St.hasOwnProperty(t)?St[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yk(t,n,i,r)&&(n=null),r||i===null?vk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var br=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),ci=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),c_=Symbol.iterator;function fa(e){return e===null||typeof e!="object"?null:(e=c_&&e[c_]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Object.assign,od;function Pa(e){if(od===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||""}return`
`+od+e}var id=!1;function ad(e,t){if(!e||id)return"";id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{id=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pa(e):""}function bk(e){switch(e.tag){case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return e=ad(e.type,!1),e;case 11:return e=ad(e.type.render,!1),e;case 1:return e=ad(e.type,!0),e;default:return""}}function uf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case di:return"Fragment";case ci:return"Portal";case af:return"Profiler";case Zp:return"StrictMode";case sf:return"Suspense";case lf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jy:return(e.displayName||"Context")+".Consumer";case Fy:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wp:return t=e.displayName||null,t!==null?t:uf(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return uf(e(t))}catch{}}return null}function xk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(t);case 8:return t===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function to(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wk(e){var t=Uy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=wk(e))}function Zy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cf(e,t){var n=t.checked;return Xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function d_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=to(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hy(e,t){t=t.checked,t!=null&&Up(e,"checked",t,!1)}function df(e,t){Hy(e,t);var n=to(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ff(e,t.type,n):t.hasOwnProperty("defaultValue")&&ff(e,t.type,to(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function f_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ff(e,t,n){(t!=="number"||jl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ca=Array.isArray;function ki(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+to(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function p_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Ca(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:to(n)}}function Wy(e,t){var n=to(t.value),r=to(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function h_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,qy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kk=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(e){kk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ra[t]=Ra[e]})});function Ky(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ra.hasOwnProperty(e)&&Ra[e]?(""+t).trim():t+"px"}function Qy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ky(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sk=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(e,t){if(t){if(Sk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function _f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function Vp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gf=null,Si=null,Pi=null;function m_(e){if(e=xs(e)){if(typeof gf!="function")throw Error(J(280));var t=e.stateNode;t&&(t=ju(t),gf(e.stateNode,e.type,t))}}function Gy(e){Si?Pi?Pi.push(e):Pi=[e]:Si=e}function Xy(){if(Si){var e=Si,t=Pi;if(Pi=Si=null,m_(e),t)for(e=0;e<t.length;e++)m_(t[e])}}function Jy(e,t){return e(t)}function Yy(){}var sd=!1;function e0(e,t,n){if(sd)return e(t,n);sd=!0;try{return Jy(e,t,n)}finally{sd=!1,(Si!==null||Pi!==null)&&(Yy(),Xy())}}function qa(e,t){var n=e.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var yf=!1;if(hr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){yf=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{yf=!1}function Pk(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(_){this.onError(_)}}var za=!1,$l=null,Ul=!1,bf=null,Ck={onError:function(e){za=!0,$l=e}};function Ek(e,t,n,r,i,a,l,u,d){za=!1,$l=null,Pk.apply(Ck,arguments)}function Ok(e,t,n,r,i,a,l,u,d){if(Ek.apply(this,arguments),za){if(za){var f=$l;za=!1,$l=null}else throw Error(J(198));Ul||(Ul=!0,bf=f)}}function Ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function __(e){if(Ko(e)!==e)throw Error(J(188))}function Tk(e){var t=e.alternate;if(!t){if(t=Ko(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return __(i),e;if(a===r)return __(i),t;a=a.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function n0(e){return e=Tk(e),e!==null?r0(e):null}function r0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=r0(e);if(t!==null)return t;e=e.sibling}return null}var o0=Xt.unstable_scheduleCallback,v_=Xt.unstable_cancelCallback,Lk=Xt.unstable_shouldYield,Rk=Xt.unstable_requestPaint,rt=Xt.unstable_now,zk=Xt.unstable_getCurrentPriorityLevel,qp=Xt.unstable_ImmediatePriority,i0=Xt.unstable_UserBlockingPriority,Zl=Xt.unstable_NormalPriority,Ak=Xt.unstable_LowPriority,a0=Xt.unstable_IdlePriority,Iu=null,qn=null;function Nk(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Iu,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Mk,Bk=Math.log,Ik=Math.LN2;function Mk(e){return e>>>=0,e===0?32:31-(Bk(e)/Ik|0)|0}var Ys=64,el=4194304;function Ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Ea(u):(a&=l,a!==0&&(r=Ea(a)))}else l=n&~i,l!==0?r=Ea(l):a!==0&&(r=Ea(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function Dk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-En(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Dk(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function xf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function s0(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function ld(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function jk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ie=0;function l0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var u0,Qp,c0,d0,f0,wf=!1,tl=[],Ur=null,Zr=null,Hr=null,Ka=new Map,Qa=new Map,Ir=[],$k="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g_(e,t){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(t.pointerId)}}function ha(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xs(t),t!==null&&Qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Uk(e,t,n,r,i){switch(t){case"focusin":return Ur=ha(Ur,e,t,n,r,i),!0;case"dragenter":return Zr=ha(Zr,e,t,n,r,i),!0;case"mouseover":return Hr=ha(Hr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ka.set(a,ha(Ka.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Qa.set(a,ha(Qa.get(a)||null,e,t,n,r,i)),!0}return!1}function p0(e){var t=Co(e.target);if(t!==null){var n=Ko(t);if(n!==null){if(t=n.tag,t===13){if(t=t0(n),t!==null){e.blockedOn=t,f0(e.priority,function(){c0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return t=xs(n),t!==null&&Qp(t),e.blockedOn=n,!1;t.shift()}return!0}function y_(e,t,n){xl(e)&&n.delete(t)}function Zk(){wf=!1,Ur!==null&&xl(Ur)&&(Ur=null),Zr!==null&&xl(Zr)&&(Zr=null),Hr!==null&&xl(Hr)&&(Hr=null),Ka.forEach(y_),Qa.forEach(y_)}function ma(e,t){e.blockedOn===t&&(e.blockedOn=null,wf||(wf=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,Zk)))}function Ga(e){function t(i){return ma(i,e)}if(0<tl.length){ma(tl[0],e);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ur!==null&&ma(Ur,e),Zr!==null&&ma(Zr,e),Hr!==null&&ma(Hr,e),Ka.forEach(t),Qa.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)p0(n),n.blockedOn===null&&Ir.shift()}var Ci=br.ReactCurrentBatchConfig,Wl=!0;function Hk(e,t,n,r){var i=Ie,a=Ci.transition;Ci.transition=null;try{Ie=1,Gp(e,t,n,r)}finally{Ie=i,Ci.transition=a}}function Wk(e,t,n,r){var i=Ie,a=Ci.transition;Ci.transition=null;try{Ie=4,Gp(e,t,n,r)}finally{Ie=i,Ci.transition=a}}function Gp(e,t,n,r){if(Wl){var i=kf(e,t,n,r);if(i===null)gd(e,t,r,Vl,n),g_(e,r);else if(Uk(i,e,t,n,r))r.stopPropagation();else if(g_(e,r),t&4&&-1<$k.indexOf(e)){for(;i!==null;){var a=xs(i);if(a!==null&&u0(a),a=kf(e,t,n,r),a===null&&gd(e,t,r,Vl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else gd(e,t,r,null,n)}}var Vl=null;function kf(e,t,n,r){if(Vl=null,e=Vp(r),e=Co(e),e!==null)if(t=Ko(e),t===null)e=null;else if(n=t.tag,n===13){if(e=t0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vl=e,null}function h0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zk()){case qp:return 1;case i0:return 4;case Zl:case Ak:return 16;case a0:return 536870912;default:return 16}default:return 16}}var Fr=null,Xp=null,wl=null;function m0(){if(wl)return wl;var e,t=Xp,n=t.length,r,i="value"in Fr?Fr.value:Fr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return wl=i.slice(e,1<r?1-r:void 0)}function kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function b_(){return!1}function en(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nl:b_,this.isPropagationStopped=b_,this}return Xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=en(Vi),bs=Xe({},Vi,{view:0,detail:0}),Vk=en(bs),ud,cd,_a,Mu=Xe({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&e.type==="mousemove"?(ud=e.screenX-_a.screenX,cd=e.screenY-_a.screenY):cd=ud=0,_a=e),ud)},movementY:function(e){return"movementY"in e?e.movementY:cd}}),x_=en(Mu),qk=Xe({},Mu,{dataTransfer:0}),Kk=en(qk),Qk=Xe({},bs,{relatedTarget:0}),dd=en(Qk),Gk=Xe({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Xk=en(Gk),Jk=Xe({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yk=en(Jk),eS=Xe({},Vi,{data:0}),w_=en(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rS[e])?!!t[e]:!1}function Yp(){return oS}var iS=Xe({},bs,{key:function(e){if(e.key){var t=tS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aS=en(iS),sS=Xe({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k_=en(sS),lS=Xe({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),uS=en(lS),cS=Xe({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=en(cS),fS=Xe({},Mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=en(fS),hS=[9,13,27,32],eh=hr&&"CompositionEvent"in window,Aa=null;hr&&"documentMode"in document&&(Aa=document.documentMode);var mS=hr&&"TextEvent"in window&&!Aa,_0=hr&&(!eh||Aa&&8<Aa&&11>=Aa),S_=String.fromCharCode(32),P_=!1;function v0(e,t){switch(e){case"keyup":return hS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function _S(e,t){switch(e){case"compositionend":return g0(t);case"keypress":return t.which!==32?null:(P_=!0,S_);case"textInput":return e=t.data,e===S_&&P_?null:e;default:return null}}function vS(e,t){if(fi)return e==="compositionend"||!eh&&v0(e,t)?(e=m0(),wl=Xp=Fr=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _0&&t.locale!=="ko"?null:t.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function C_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gS[e.type]:t==="textarea"}function y0(e,t,n,r){Gy(r),t=ql(t,"onChange"),0<t.length&&(n=new Jp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Na=null,Xa=null;function yS(e){L0(e,0)}function Du(e){var t=mi(e);if(Zy(t))return e}function bS(e,t){if(e==="change")return t}var b0=!1;if(hr){var fd;if(hr){var pd="oninput"in document;if(!pd){var E_=document.createElement("div");E_.setAttribute("oninput","return;"),pd=typeof E_.oninput=="function"}fd=pd}else fd=!1;b0=fd&&(!document.documentMode||9<document.documentMode)}function O_(){Na&&(Na.detachEvent("onpropertychange",x0),Xa=Na=null)}function x0(e){if(e.propertyName==="value"&&Du(Xa)){var t=[];y0(t,Xa,e,Vp(e)),e0(yS,t)}}function xS(e,t,n){e==="focusin"?(O_(),Na=t,Xa=n,Na.attachEvent("onpropertychange",x0)):e==="focusout"&&O_()}function wS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Du(Xa)}function kS(e,t){if(e==="click")return Du(t)}function SS(e,t){if(e==="input"||e==="change")return Du(t)}function PS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rn=typeof Object.is=="function"?Object.is:PS;function Ja(e,t){if(Rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(t,i)||!Rn(e[i],t[i]))return!1}return!0}function T_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L_(e,t){var n=T_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T_(n)}}function w0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?w0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function k0(){for(var e=window,t=jl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jl(e.document)}return t}function th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function CS(e){var t=k0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&w0(n.ownerDocument.documentElement,n)){if(r!==null&&th(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=L_(n,a);var l=L_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ES=hr&&"documentMode"in document&&11>=document.documentMode,pi=null,Sf=null,Ba=null,Pf=!1;function R_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||pi==null||pi!==jl(r)||(r=pi,"selectionStart"in r&&th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&Ja(Ba,r)||(Ba=r,r=ql(Sf,"onSelect"),0<r.length&&(t=new Jp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pi)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hi={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},hd={},S0={};hr&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Fu(e){if(hd[e])return hd[e];if(!hi[e])return e;var t=hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in S0)return hd[e]=t[n];return e}var P0=Fu("animationend"),C0=Fu("animationiteration"),E0=Fu("animationstart"),O0=Fu("transitionend"),T0=new Map,z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lo(e,t){T0.set(e,t),qo(t,[e])}for(var md=0;md<z_.length;md++){var _d=z_[md],OS=_d.toLowerCase(),TS=_d[0].toUpperCase()+_d.slice(1);lo(OS,"on"+TS)}lo(P0,"onAnimationEnd");lo(C0,"onAnimationIteration");lo(E0,"onAnimationStart");lo("dblclick","onDoubleClick");lo("focusin","onFocus");lo("focusout","onBlur");lo(O0,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function A_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ok(r,t,void 0,e),e.currentTarget=null}function L0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;A_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;A_(i,u,f),a=d}}}if(Ul)throw e=bf,Ul=!1,bf=null,e}function Ze(e,t){var n=t[Lf];n===void 0&&(n=t[Lf]=new Set);var r=e+"__bubble";n.has(r)||(R0(t,e,2,!1),n.add(r))}function vd(e,t,n){var r=0;t&&(r|=4),R0(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ya(e){if(!e[ol]){e[ol]=!0,Dy.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||vd(n,!1,e),vd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,vd("selectionchange",!1,t))}}function R0(e,t,n,r){switch(h0(t)){case 1:var i=Hk;break;case 4:i=Wk;break;default:i=Gp}n=i.bind(null,t,n,e),i=void 0,!yf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Co(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}e0(function(){var f=a,_=Vp(n),m=[];e:{var h=T0.get(e);if(h!==void 0){var g=Jp,x=e;switch(e){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":g=aS;break;case"focusin":x="focus",g=dd;break;case"focusout":x="blur",g=dd;break;case"beforeblur":case"afterblur":g=dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=x_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uS;break;case P0:case C0:case E0:g=Xk;break;case O0:g=dS;break;case"scroll":g=Vk;break;case"wheel":g=pS;break;case"copy":case"cut":case"paste":g=Yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=k_}var w=(t&4)!==0,C=!w&&e==="scroll",y=w?h!==null?h+"Capture":null:h;w=[];for(var b=f,S;b!==null;){S=b;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,y!==null&&(P=qa(b,y),P!=null&&w.push(es(b,P,S)))),C)break;b=b.return}0<w.length&&(h=new g(h,x,null,n,_),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==vf&&(x=n.relatedTarget||n.fromElement)&&(Co(x)||x[mr]))break e;if((g||h)&&(h=_.window===_?_:(h=_.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=f,x=x?Co(x):null,x!==null&&(C=Ko(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=f),g!==x)){if(w=x_,P="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=k_,P="onPointerLeave",y="onPointerEnter",b="pointer"),C=g==null?h:mi(g),S=x==null?h:mi(x),h=new w(P,b+"leave",g,n,_),h.target=C,h.relatedTarget=S,P=null,Co(_)===f&&(w=new w(y,b+"enter",x,n,_),w.target=S,w.relatedTarget=C,P=w),C=P,g&&x)t:{for(w=g,y=x,b=0,S=w;S;S=ai(S))b++;for(S=0,P=y;P;P=ai(P))S++;for(;0<b-S;)w=ai(w),b--;for(;0<S-b;)y=ai(y),S--;for(;b--;){if(w===y||y!==null&&w===y.alternate)break t;w=ai(w),y=ai(y)}w=null}else w=null;g!==null&&N_(m,h,g,w,!1),x!==null&&C!==null&&N_(m,C,x,w,!0)}}e:{if(h=f?mi(f):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var z=bS;else if(C_(h))if(b0)z=SS;else{z=wS;var M=xS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=kS);if(z&&(z=z(e,f))){y0(m,z,n,_);break e}M&&M(e,h,f),e==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&ff(h,"number",h.value)}switch(M=f?mi(f):window,e){case"focusin":(C_(M)||M.contentEditable==="true")&&(pi=M,Sf=f,Ba=null);break;case"focusout":Ba=Sf=pi=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,R_(m,n,_);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":R_(m,n,_)}var F;if(eh)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else fi?v0(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(_0&&n.locale!=="ko"&&(fi||j!=="onCompositionStart"?j==="onCompositionEnd"&&fi&&(F=m0()):(Fr=_,Xp="value"in Fr?Fr.value:Fr.textContent,fi=!0)),M=ql(f,j),0<M.length&&(j=new w_(j,e,null,n,_),m.push({event:j,listeners:M}),F?j.data=F:(F=g0(n),F!==null&&(j.data=F)))),(F=mS?_S(e,n):vS(e,n))&&(f=ql(f,"onBeforeInput"),0<f.length&&(_=new w_("onBeforeInput","beforeinput",null,n,_),m.push({event:_,listeners:f}),_.data=F))}L0(m,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ql(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=qa(e,n),a!=null&&r.unshift(es(e,a,i)),a=qa(e,t),a!=null&&r.push(es(e,a,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function N_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=qa(n,a),d!=null&&l.unshift(es(n,d,u))):i||(d=qa(n,a),d!=null&&l.push(es(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var RS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function B_(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(zS,"")}function il(e,t,n){if(t=B_(t),B_(e)!==t&&n)throw Error(J(425))}function Kl(){}var Cf=null,Ef=null;function Of(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(e){return I_.resolve(null).then(e).catch(BS)}:Tf;function BS(e){setTimeout(function(){throw e})}function yd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(t)}function Wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function M_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Hn="__reactFiber$"+qi,ts="__reactProps$"+qi,mr="__reactContainer$"+qi,Lf="__reactEvents$"+qi,IS="__reactListeners$"+qi,MS="__reactHandles$"+qi;function Co(e){var t=e[Hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mr]||n[Hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=M_(e);e!==null;){if(n=e[Hn])return n;e=M_(e)}return t}e=n,n=e.parentNode}return null}function xs(e){return e=e[Hn]||e[mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function ju(e){return e[ts]||null}var Rf=[],_i=-1;function uo(e){return{current:e}}function He(e){0>_i||(e.current=Rf[_i],Rf[_i]=null,_i--)}function Ue(e,t){_i++,Rf[_i]=e.current,e.current=t}var no={},Rt=uo(no),Ht=uo(!1),Do=no;function Ii(e,t){var n=e.type.contextTypes;if(!n)return no;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(e){return e=e.childContextTypes,e!=null}function Ql(){He(Ht),He(Rt)}function D_(e,t,n){if(Rt.current!==no)throw Error(J(168));Ue(Rt,t),Ue(Ht,n)}function z0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(J(108,xk(e)||"Unknown",i));return Xe({},n,r)}function Gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||no,Do=Rt.current,Ue(Rt,e),Ue(Ht,Ht.current),!0}function F_(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=z0(e,t,Do),r.__reactInternalMemoizedMergedChildContext=e,He(Ht),He(Rt),Ue(Rt,e)):He(Ht),Ue(Ht,n)}var ur=null,$u=!1,bd=!1;function A0(e){ur===null?ur=[e]:ur.push(e)}function DS(e){$u=!0,A0(e)}function co(){if(!bd&&ur!==null){bd=!0;var e=0,t=Ie;try{var n=ur;for(Ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ur=null,$u=!1}catch(i){throw ur!==null&&(ur=ur.slice(e+1)),o0(qp,co),i}finally{Ie=t,bd=!1}}return null}var vi=[],gi=0,Xl=null,Jl=0,ln=[],un=0,Fo=null,cr=1,dr="";function wo(e,t){vi[gi++]=Jl,vi[gi++]=Xl,Xl=e,Jl=t}function N0(e,t,n){ln[un++]=cr,ln[un++]=dr,ln[un++]=Fo,Fo=e;var r=cr;e=dr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var a=32-En(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,cr=1<<32-En(t)+i|n<<i|r,dr=a+e}else cr=1<<a|n<<i|r,dr=e}function nh(e){e.return!==null&&(wo(e,1),N0(e,1,0))}function rh(e){for(;e===Xl;)Xl=vi[--gi],vi[gi]=null,Jl=vi[--gi],vi[gi]=null;for(;e===Fo;)Fo=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null,cr=ln[--un],ln[un]=null}var Gt=null,Qt=null,Ve=!1,Pn=null;function B0(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function j_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Qt=Wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fo!==null?{id:cr,overflow:dr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Qt=null,!0):!1;default:return!1}}function zf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Af(e){if(Ve){var t=Qt;if(t){var n=t;if(!j_(e,t)){if(zf(e))throw Error(J(418));t=Wr(n.nextSibling);var r=Gt;t&&j_(e,t)?B0(r,n):(e.flags=e.flags&-4097|2,Ve=!1,Gt=e)}}else{if(zf(e))throw Error(J(418));e.flags=e.flags&-4097|2,Ve=!1,Gt=e}}}function $_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function al(e){if(e!==Gt)return!1;if(!Ve)return $_(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Of(e.type,e.memoizedProps)),t&&(t=Qt)){if(zf(e))throw I0(),Error(J(418));for(;t;)B0(e,t),t=Wr(t.nextSibling)}if($_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qt=Wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qt=null}}else Qt=Gt?Wr(e.stateNode.nextSibling):null;return!0}function I0(){for(var e=Qt;e;)e=Wr(e.nextSibling)}function Mi(){Qt=Gt=null,Ve=!1}function oh(e){Pn===null?Pn=[e]:Pn.push(e)}var FS=br.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yl=uo(null),eu=null,yi=null,ih=null;function ah(){ih=yi=eu=null}function sh(e){var t=Yl.current;He(Yl),e._currentValue=t}function Nf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t){eu=e,ih=yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Zt=!0),e.firstContext=null)}function pn(e){var t=e._currentValue;if(ih!==e)if(e={context:e,memoizedValue:t,next:null},yi===null){if(eu===null)throw Error(J(308));yi=e,eu.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var Eo=null;function lh(e){Eo===null?Eo=[e]:Eo.push(e)}function M0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lh(t)):(n.next=i.next,i.next=n),t.interleaved=n,_r(e,r)}function _r(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_r(e,n)}return i=r.interleaved,i===null?(t.next=t,lh(r)):(t.next=i.next,i.next=t),r.interleaved=t,_r(e,n)}function Sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}function U_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tu(e,t,n,r){var i=e.updateQueue;Nr=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var _=e.alternate;_!==null&&(_=_.updateQueue,u=_.lastBaseUpdate,u!==l&&(u===null?_.firstBaseUpdate=f:u.next=f,_.lastBaseUpdate=d))}if(a!==null){var m=i.baseState;l=0,_=f=d=null,u=a;do{var h=u.lane,g=u.eventTime;if((r&h)===h){_!==null&&(_=_.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(h=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(g,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(g,m,h):x,h==null)break e;m=Xe({},m,h);break e;case 2:Nr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else g={eventTime:g,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},_===null?(f=_=g,d=m):_=_.next=g,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(_===null&&(d=m),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=_,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);$o|=l,e.lanes=l,e.memoizedState=m}}function Z_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var F0=new My.Component().refs;function Bf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uu={isMounted:function(e){return(e=e._reactInternals)?Ko(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=Kr(e),a=fr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=Kr(e),a=fr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),r=Kr(e),i=fr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,r),t!==null&&(On(t,e,r,n),Sl(t,e,r))}};function H_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ja(n,r)||!Ja(i,a):!0}function j0(e,t,n){var r=!1,i=no,a=t.contextType;return typeof a=="object"&&a!==null?a=pn(a):(i=Wt(t)?Do:Rt.current,r=t.contextTypes,a=(r=r!=null)?Ii(e,i):no),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function W_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uu.enqueueReplaceState(t,t.state,null)}function If(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=F0,uh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=pn(a):(a=Wt(t)?Do:Rt.current,i.context=Ii(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Bf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uu.enqueueReplaceState(i,i.state,null),tu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===F0&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function V_(e){var t=e._init;return t(e._payload)}function $0(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Qr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,P){return b===null||b.tag!==6?(b=Ed(S,y.mode,P),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,P){var z=S.type;return z===di?_(y,b,S.props.children,P,S.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&V_(z)===b.type)?(P=i(b,S.props),P.ref=va(y,b,S),P.return=y,P):(P=Ll(S.type,S.key,S.props,null,y.mode,P),P.ref=va(y,b,S),P.return=y,P)}function f(y,b,S,P){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Od(S,y.mode,P),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function _(y,b,S,P,z){return b===null||b.tag!==7?(b=Ao(S,y.mode,P,z),b.return=y,b):(b=i(b,S),b.return=y,b)}function m(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Ed(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gs:return S=Ll(b.type,b.key,b.props,null,y.mode,S),S.ref=va(y,null,b),S.return=y,S;case ci:return b=Od(b,y.mode,S),b.return=y,b;case Ar:var P=b._init;return m(y,P(b._payload),S)}if(Ca(b)||fa(b))return b=Ao(b,y.mode,S,null),b.return=y,b;sl(y,b)}return null}function h(y,b,S,P){var z=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:u(y,b,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gs:return S.key===z?d(y,b,S,P):null;case ci:return S.key===z?f(y,b,S,P):null;case Ar:return z=S._init,h(y,b,z(S._payload),P)}if(Ca(S)||fa(S))return z!==null?null:_(y,b,S,P,null);sl(y,S)}return null}function g(y,b,S,P,z){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(S)||null,u(b,y,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Gs:return y=y.get(P.key===null?S:P.key)||null,d(b,y,P,z);case ci:return y=y.get(P.key===null?S:P.key)||null,f(b,y,P,z);case Ar:var M=P._init;return g(y,b,S,M(P._payload),z)}if(Ca(P)||fa(P))return y=y.get(S)||null,_(b,y,P,z,null);sl(b,P)}return null}function x(y,b,S,P){for(var z=null,M=null,F=b,j=b=0,W=null;F!==null&&j<S.length;j++){F.index>j?(W=F,F=null):W=F.sibling;var T=h(y,F,S[j],P);if(T===null){F===null&&(F=W);break}e&&F&&T.alternate===null&&t(y,F),b=a(T,b,j),M===null?z=T:M.sibling=T,M=T,F=W}if(j===S.length)return n(y,F),Ve&&wo(y,j),z;if(F===null){for(;j<S.length;j++)F=m(y,S[j],P),F!==null&&(b=a(F,b,j),M===null?z=F:M.sibling=F,M=F);return Ve&&wo(y,j),z}for(F=r(y,F);j<S.length;j++)W=g(F,y,j,S[j],P),W!==null&&(e&&W.alternate!==null&&F.delete(W.key===null?j:W.key),b=a(W,b,j),M===null?z=W:M.sibling=W,M=W);return e&&F.forEach(function(Q){return t(y,Q)}),Ve&&wo(y,j),z}function w(y,b,S,P){var z=fa(S);if(typeof z!="function")throw Error(J(150));if(S=z.call(S),S==null)throw Error(J(151));for(var M=z=null,F=b,j=b=0,W=null,T=S.next();F!==null&&!T.done;j++,T=S.next()){F.index>j?(W=F,F=null):W=F.sibling;var Q=h(y,F,T.value,P);if(Q===null){F===null&&(F=W);break}e&&F&&Q.alternate===null&&t(y,F),b=a(Q,b,j),M===null?z=Q:M.sibling=Q,M=Q,F=W}if(T.done)return n(y,F),Ve&&wo(y,j),z;if(F===null){for(;!T.done;j++,T=S.next())T=m(y,T.value,P),T!==null&&(b=a(T,b,j),M===null?z=T:M.sibling=T,M=T);return Ve&&wo(y,j),z}for(F=r(y,F);!T.done;j++,T=S.next())T=g(F,y,j,T.value,P),T!==null&&(e&&T.alternate!==null&&F.delete(T.key===null?j:T.key),b=a(T,b,j),M===null?z=T:M.sibling=T,M=T);return e&&F.forEach(function(ae){return t(y,ae)}),Ve&&wo(y,j),z}function C(y,b,S,P){if(typeof S=="object"&&S!==null&&S.type===di&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gs:e:{for(var z=S.key,M=b;M!==null;){if(M.key===z){if(z=S.type,z===di){if(M.tag===7){n(y,M.sibling),b=i(M,S.props.children),b.return=y,y=b;break e}}else if(M.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&V_(z)===M.type){n(y,M.sibling),b=i(M,S.props),b.ref=va(y,M,S),b.return=y,y=b;break e}n(y,M);break}else t(y,M);M=M.sibling}S.type===di?(b=Ao(S.props.children,y.mode,P,S.key),b.return=y,y=b):(P=Ll(S.type,S.key,S.props,null,y.mode,P),P.ref=va(y,b,S),P.return=y,y=P)}return l(y);case ci:e:{for(M=S.key;b!==null;){if(b.key===M)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=Od(S,y.mode,P),b.return=y,y=b}return l(y);case Ar:return M=S._init,C(y,b,M(S._payload),P)}if(Ca(S))return x(y,b,S,P);if(fa(S))return w(y,b,S,P);sl(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=Ed(S,y.mode,P),b.return=y,y=b),l(y)):n(y,b)}return C}var Di=$0(!0),U0=$0(!1),ws={},Kn=uo(ws),ns=uo(ws),rs=uo(ws);function Oo(e){if(e===ws)throw Error(J(174));return e}function ch(e,t){switch(Ue(rs,t),Ue(ns,e),Ue(Kn,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hf(t,e)}He(Kn),Ue(Kn,t)}function Fi(){He(Kn),He(ns),He(rs)}function Z0(e){Oo(rs.current);var t=Oo(Kn.current),n=hf(t,e.type);t!==n&&(Ue(ns,e),Ue(Kn,n))}function dh(e){ns.current===e&&(He(Kn),He(ns))}var Qe=uo(0);function nu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xd=[];function fh(){for(var e=0;e<xd.length;e++)xd[e]._workInProgressVersionPrimary=null;xd.length=0}var Pl=br.ReactCurrentDispatcher,wd=br.ReactCurrentBatchConfig,jo=0,Ge=null,ct=null,ht=null,ru=!1,Ia=!1,os=0,jS=0;function Ct(){throw Error(J(321))}function ph(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rn(e[n],t[n]))return!1;return!0}function hh(e,t,n,r,i,a){if(jo=a,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?HS:WS,e=n(r,i),Ia){a=0;do{if(Ia=!1,os=0,25<=a)throw Error(J(301));a+=1,ht=ct=null,t.updateQueue=null,Pl.current=VS,e=n(r,i)}while(Ia)}if(Pl.current=ou,t=ct!==null&&ct.next!==null,jo=0,ht=ct=Ge=null,ru=!1,t)throw Error(J(300));return e}function mh(){var e=os!==0;return os=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ge.memoizedState=ht=e:ht=ht.next=e,ht}function hn(){if(ct===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=ht===null?Ge.memoizedState:ht.next;if(t!==null)ht=t,ct=e;else{if(e===null)throw Error(J(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ht===null?Ge.memoizedState=ht=e:ht=ht.next=e}return ht}function is(e,t){return typeof t=="function"?t(e):t}function kd(e){var t=hn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=ct,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var _=f.lane;if((jo&_)===_)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:_,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=m,l=r):d=d.next=m,Ge.lanes|=_,$o|=_}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,Rn(r,t.memoizedState)||(Zt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ge.lanes|=a,$o|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sd(e){var t=hn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Rn(a,t.memoizedState)||(Zt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function H0(){}function W0(e,t){var n=Ge,r=hn(),i=t(),a=!Rn(r.memoizedState,i);if(a&&(r.memoizedState=i,Zt=!0),r=r.queue,_h(K0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,as(9,q0.bind(null,n,r,i,t),void 0,null),mt===null)throw Error(J(349));jo&30||V0(n,t,i)}return i}function V0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function q0(e,t,n,r){t.value=n,t.getSnapshot=r,Q0(t)&&G0(e)}function K0(e,t,n){return n(function(){Q0(t)&&G0(e)})}function Q0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rn(e,n)}catch{return!0}}function G0(e){var t=_r(e,1);t!==null&&On(t,e,1,-1)}function q_(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=ZS.bind(null,Ge,e),[t.memoizedState,e]}function as(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function X0(){return hn().memoizedState}function Cl(e,t,n,r){var i=Zn();Ge.flags|=e,i.memoizedState=as(1|t,n,void 0,r===void 0?null:r)}function Zu(e,t,n,r){var i=hn();r=r===void 0?null:r;var a=void 0;if(ct!==null){var l=ct.memoizedState;if(a=l.destroy,r!==null&&ph(r,l.deps)){i.memoizedState=as(t,n,a,r);return}}Ge.flags|=e,i.memoizedState=as(1|t,n,a,r)}function K_(e,t){return Cl(8390656,8,e,t)}function _h(e,t){return Zu(2048,8,e,t)}function J0(e,t){return Zu(4,2,e,t)}function Y0(e,t){return Zu(4,4,e,t)}function eb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tb(e,t,n){return n=n!=null?n.concat([e]):null,Zu(4,4,eb.bind(null,t,e),n)}function vh(){}function nb(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ph(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rb(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ph(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ob(e,t,n){return jo&21?(Rn(n,t)||(n=s0(),Ge.lanes|=n,$o|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=n)}function $S(e,t){var n=Ie;Ie=n!==0&&4>n?n:4,e(!0);var r=wd.transition;wd.transition={};try{e(!1),t()}finally{Ie=n,wd.transition=r}}function ib(){return hn().memoizedState}function US(e,t,n){var r=Kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ab(e))sb(t,n);else if(n=M0(e,t,n,r),n!==null){var i=Mt();On(n,e,r,i),lb(n,t,r)}}function ZS(e,t,n){var r=Kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ab(e))sb(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,Rn(u,l)){var d=t.interleaved;d===null?(i.next=i,lh(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=M0(e,t,i,r),n!==null&&(i=Mt(),On(n,e,r,i),lb(n,t,r))}}function ab(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function sb(e,t){Ia=ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}var ou={readContext:pn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},HS={readContext:pn,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:pn,useEffect:K_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4194308,4,eb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=US.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:q_,useDebugValue:vh,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=q_(!1),t=e[0];return e=$S.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Zn();if(Ve){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),mt===null)throw Error(J(349));jo&30||V0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,K_(K0.bind(null,r,a,e),[e]),r.flags|=2048,as(9,q0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Zn(),t=mt.identifierPrefix;if(Ve){var n=dr,r=cr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WS={readContext:pn,useCallback:nb,useContext:pn,useEffect:_h,useImperativeHandle:tb,useInsertionEffect:J0,useLayoutEffect:Y0,useMemo:rb,useReducer:kd,useRef:X0,useState:function(){return kd(is)},useDebugValue:vh,useDeferredValue:function(e){var t=hn();return ob(t,ct.memoizedState,e)},useTransition:function(){var e=kd(is)[0],t=hn().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:W0,useId:ib,unstable_isNewReconciler:!1},VS={readContext:pn,useCallback:nb,useContext:pn,useEffect:_h,useImperativeHandle:tb,useInsertionEffect:J0,useLayoutEffect:Y0,useMemo:rb,useReducer:Sd,useRef:X0,useState:function(){return Sd(is)},useDebugValue:vh,useDeferredValue:function(e){var t=hn();return ct===null?t.memoizedState=e:ob(t,ct.memoizedState,e)},useTransition:function(){var e=Sd(is)[0],t=hn().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:W0,useId:ib,unstable_isNewReconciler:!1};function ji(e,t){try{var n="",r=t;do n+=bk(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Pd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function ub(e,t,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){au||(au=!0,qf=r),Mf(e,t)},n}function cb(e,t,n){n=fr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Mf(e,t),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Q_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s2.bind(null,e,t,n),t.then(e,e))}function G_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function X_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fr(-1,1),t.tag=2,Vr(n,t,1))),n.lanes|=1),e)}var KS=br.ReactCurrentOwner,Zt=!1;function It(e,t,n,r){t.child=e===null?U0(t,null,n,r):Di(t,e.child,n,r)}function J_(e,t,n,r,i){n=n.render;var a=t.ref;return Ei(t,i),r=hh(e,t,n,r,a,i),n=mh(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vr(e,t,i)):(Ve&&n&&nh(t),t.flags|=1,It(e,t,r,i),t.child)}function Y_(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ph(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,db(e,t,a,r,i)):(e=Ll(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(l,r)&&e.ref===t.ref)return vr(e,t,i)}return t.flags|=1,e=Qr(a,r),e.ref=t.ref,e.return=t,t.child=e}function db(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ja(a,r)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Zt=!0);else return t.lanes=e.lanes,vr(e,t,i)}return Df(e,t,n,r,i)}function fb(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(xi,Kt),Kt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(xi,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ue(xi,Kt),Kt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ue(xi,Kt),Kt|=r;return It(e,t,i,n),t.child}function pb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Df(e,t,n,r,i){var a=Wt(n)?Do:Rt.current;return a=Ii(t,a),Ei(t,i),n=hh(e,t,n,r,a,i),r=mh(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vr(e,t,i)):(Ve&&r&&nh(t),t.flags|=1,It(e,t,n,i),t.child)}function ev(e,t,n,r,i){if(Wt(n)){var a=!0;Gl(t)}else a=!1;if(Ei(t,i),t.stateNode===null)El(e,t),j0(t,n,r),If(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=pn(f):(f=Wt(n)?Do:Rt.current,f=Ii(t,f));var _=n.getDerivedStateFromProps,m=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&W_(t,l,r,f),Nr=!1;var h=t.memoizedState;l.state=h,tu(t,r,l,i),d=t.memoizedState,u!==r||h!==d||Ht.current||Nr?(typeof _=="function"&&(Bf(t,n,_,r),d=t.memoizedState),(u=Nr||H_(t,n,u,r,h,d,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,D0(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:kn(t.type,u),l.props=f,m=t.pendingProps,h=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=pn(d):(d=Wt(n)?Do:Rt.current,d=Ii(t,d));var g=n.getDerivedStateFromProps;(_=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||h!==d)&&W_(t,l,r,d),Nr=!1,h=t.memoizedState,l.state=h,tu(t,r,l,i);var x=t.memoizedState;u!==m||h!==x||Ht.current||Nr?(typeof g=="function"&&(Bf(t,n,g,r),x=t.memoizedState),(f=Nr||H_(t,n,f,r,h,x,d)||!1)?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ff(e,t,n,r,a,i)}function Ff(e,t,n,r,i,a){pb(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&F_(t,n,!1),vr(e,t,a);r=t.stateNode,KS.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Di(t,e.child,null,a),t.child=Di(t,null,u,a)):It(e,t,u,a),t.memoizedState=r.state,i&&F_(t,n,!0),t.child}function hb(e){var t=e.stateNode;t.pendingContext?D_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&D_(e,t.context,!1),ch(e,t.containerInfo)}function tv(e,t,n,r,i){return Mi(),oh(i),t.flags|=256,It(e,t,n,r),t.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function $f(e){return{baseLanes:e,cachePool:null,transitions:null}}function mb(e,t,n){var r=t.pendingProps,i=Qe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ue(Qe,i&1),e===null)return Af(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Vu(l,r,0,null),e=Ao(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$f(n),t.memoizedState=jf,e):gh(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return QS(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Qr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Qr(u,a):(a=Ao(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?$f(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=jf,r}return a=e.child,e=a.sibling,r=Qr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gh(e,t){return t=Vu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ll(e,t,n,r){return r!==null&&oh(r),Di(t,e.child,null,n),e=gh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function QS(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Pd(Error(J(422))),ll(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Vu({mode:"visible",children:r.children},i,0,null),a=Ao(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Di(t,e.child,null,l),t.child.memoizedState=$f(l),t.memoizedState=jf,a);if(!(t.mode&1))return ll(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(J(419)),r=Pd(a,r,void 0),ll(e,t,l,r)}if(u=(l&e.childLanes)!==0,Zt||u){if(r=mt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,_r(e,i),On(r,e,i,-1))}return Sh(),r=Pd(Error(J(421))),ll(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Qt=Wr(i.nextSibling),Gt=t,Ve=!0,Pn=null,e!==null&&(ln[un++]=cr,ln[un++]=dr,ln[un++]=Fo,cr=e.id,dr=e.overflow,Fo=t),t=gh(t,r.children),t.flags|=4096,t)}function nv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nf(e.return,t,n)}function Cd(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function _b(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(It(e,t,r.children,n),r=Qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nv(e,n,t);else if(e.tag===19)nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ue(Qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cd(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cd(t,!0,n,null,a);break;case"together":Cd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function El(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$o|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Qr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function GS(e,t,n){switch(t.tag){case 3:hb(t),Mi();break;case 5:Z0(t);break;case 1:Wt(t.type)&&Gl(t);break;case 4:ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ue(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?mb(e,t,n):(Ue(Qe,Qe.current&1),e=vr(e,t,n),e!==null?e.sibling:null);Ue(Qe,Qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _b(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Qe,Qe.current),r)break;return null;case 22:case 23:return t.lanes=0,fb(e,t,n)}return vr(e,t,n)}var vb,Uf,gb,yb;vb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};gb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Oo(Kn.current);var a=null;switch(n){case"input":i=cf(e,i),r=cf(e,r),a=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),a=[];break;case"textarea":i=pf(e,i),r=pf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kl)}mf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Wa.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ze("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};yb=function(e,t,n,r){n!==r&&(t.flags|=4)};function ga(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function XS(e,t,n){var r=t.pendingProps;switch(rh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return Wt(t.type)&&Ql(),Et(t),null;case 3:return r=t.stateNode,Fi(),He(Ht),He(Rt),fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Gf(Pn),Pn=null))),Uf(e,t),Et(t),null;case 5:dh(t);var i=Oo(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)gb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return Et(t),null}if(e=Oo(Kn.current),al(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Hn]=t,r[ts]=a,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":d_(r,a),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ze("invalid",r);break;case"textarea":p_(r,a),Ze("invalid",r)}mf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),i=["children",""+u]):Wa.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Ze("scroll",r)}switch(n){case"input":Xs(r),f_(r,a,!0);break;case"textarea":Xs(r),h_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Hn]=t,e[ts]=r,vb(e,t,!1,!1),t.stateNode=e;e:{switch(l=_f(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),i=r;break;case"iframe":case"object":case"embed":Ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],e);i=r;break;case"source":Ze("error",e),i=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),i=r;break;case"details":Ze("toggle",e),i=r;break;case"input":d_(e,r),i=cf(e,r),Ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":p_(e,r),i=pf(e,r),Ze("invalid",e);break;default:i=r}mf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?Qy(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&qy(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Va(e,d):typeof d=="number"&&Va(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wa.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Ze("scroll",e):d!=null&&Up(e,a,d,l))}switch(n){case"input":Xs(e),f_(e,r,!1);break;case"textarea":Xs(e),h_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+to(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ki(e,!!r.multiple,a,!1):r.defaultValue!=null&&ki(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Et(t),null;case 6:if(e&&t.stateNode!=null)yb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Oo(rs.current),Oo(Kn.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[Hn]=t,(a=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=t,t.stateNode=r}return Et(t),null;case 13:if(He(Qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Qt!==null&&t.mode&1&&!(t.flags&128))I0(),Mi(),t.flags|=98560,a=!1;else if(a=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[Hn]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Et(t),a=!1}else Pn!==null&&(Gf(Pn),Pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?dt===0&&(dt=3):Sh())),t.updateQueue!==null&&(t.flags|=4),Et(t),null);case 4:return Fi(),Uf(e,t),e===null&&Ya(t.stateNode.containerInfo),Et(t),null;case 10:return sh(t.type._context),Et(t),null;case 17:return Wt(t.type)&&Ql(),Et(t),null;case 19:if(He(Qe),a=t.memoizedState,a===null)return Et(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ga(a,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=nu(e),l!==null){for(t.flags|=128,ga(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(Qe,Qe.current&1|2),t.child}e=e.sibling}a.tail!==null&&rt()>$i&&(t.flags|=128,r=!0,ga(a,!1),t.lanes=4194304)}else{if(!r)if(e=nu(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ga(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ve)return Et(t),null}else 2*rt()-a.renderingStartTime>$i&&n!==1073741824&&(t.flags|=128,r=!0,ga(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=rt(),t.sibling=null,n=Qe.current,Ue(Qe,r?n&1|2:n&1),t):(Et(t),null);case 22:case 23:return kh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Kt&1073741824&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function JS(e,t){switch(rh(t),t.tag){case 1:return Wt(t.type)&&Ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(),He(Ht),He(Rt),fh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dh(t),null;case 13:if(He(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Qe),null;case 4:return Fi(),null;case 10:return sh(t.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var ul=!1,Lt=!1,YS=typeof WeakSet=="function"?WeakSet:Set,le=null;function bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Zf(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var rv=!1;function e2(e,t){if(Cf=Wl,e=k0(),th(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,_=0,m=e,h=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(u=l+i),m!==a||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===n&&++f===i&&(u=l),h===a&&++_===r&&(d=l),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:e,selectionRange:n},Wl=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),C);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(P){Ye(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return x=rv,rv=!1,x}function Ma(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Zf(t,n,a)}i=i.next}while(i!==r)}}function Hu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bb(e){var t=e.alternate;t!==null&&(e.alternate=null,bb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hn],delete t[ts],delete t[Lf],delete t[IS],delete t[MS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xb(e){return e.tag===5||e.tag===3||e.tag===4}function ov(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kl));else if(r!==4&&(e=e.child,e!==null))for(Wf(e,t,n),e=e.sibling;e!==null;)Wf(e,t,n),e=e.sibling}function Vf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vf(e,t,n),e=e.sibling;e!==null;)Vf(e,t,n),e=e.sibling}var bt=null,Sn=!1;function Er(e,t,n){for(n=n.child;n!==null;)wb(e,t,n),n=n.sibling}function wb(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:Lt||bi(n,t);case 6:var r=bt,i=Sn;bt=null,Er(e,t,n),bt=r,Sn=i,bt!==null&&(Sn?(e=bt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Sn?(e=bt,n=n.stateNode,e.nodeType===8?yd(e.parentNode,n):e.nodeType===1&&yd(e,n),Ga(e)):yd(bt,n.stateNode));break;case 4:r=bt,i=Sn,bt=n.stateNode.containerInfo,Sn=!0,Er(e,t,n),bt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Zf(n,t,l),i=i.next}while(i!==r)}Er(e,t,n);break;case 1:if(!Lt&&(bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ye(n,t,u)}Er(e,t,n);break;case 21:Er(e,t,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Er(e,t,n),Lt=r):Er(e,t,n);break;default:Er(e,t,n)}}function iv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new YS),t.forEach(function(r){var i=u2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:bt=u.stateNode,Sn=!1;break e;case 3:bt=u.stateNode.containerInfo,Sn=!0;break e;case 4:bt=u.stateNode.containerInfo,Sn=!0;break e}u=u.return}if(bt===null)throw Error(J(160));wb(a,l,i),bt=null,Sn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){Ye(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kb(t,e),t=t.sibling}function kb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),jn(e),r&4){try{Ma(3,e,e.return),Hu(3,e)}catch(w){Ye(e,e.return,w)}try{Ma(5,e,e.return)}catch(w){Ye(e,e.return,w)}}break;case 1:yn(t,e),jn(e),r&512&&n!==null&&bi(n,n.return);break;case 5:if(yn(t,e),jn(e),r&512&&n!==null&&bi(n,n.return),e.flags&32){var i=e.stateNode;try{Va(i,"")}catch(w){Ye(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Hy(i,a),_f(u,l);var f=_f(u,a);for(l=0;l<d.length;l+=2){var _=d[l],m=d[l+1];_==="style"?Qy(i,m):_==="dangerouslySetInnerHTML"?qy(i,m):_==="children"?Va(i,m):Up(i,_,m,f)}switch(u){case"input":df(i,a);break;case"textarea":Wy(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ki(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?ki(i,!!a.multiple,a.defaultValue,!0):ki(i,!!a.multiple,a.multiple?[]:"",!1))}i[ts]=a}catch(w){Ye(e,e.return,w)}}break;case 6:if(yn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(J(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Ye(e,e.return,w)}}break;case 3:if(yn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(w){Ye(e,e.return,w)}break;case 4:yn(t,e),jn(e);break;case 13:yn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=rt())),r&4&&iv(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(Lt=(f=Lt)||_,yn(t,e),Lt=f):yn(t,e),jn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!_&&e.mode&1)for(le=e,_=e.child;_!==null;){for(m=le=_;le!==null;){switch(h=le,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ma(4,h,h.return);break;case 1:bi(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Ye(r,n,w)}}break;case 5:bi(h,h.return);break;case 22:if(h.memoizedState!==null){sv(m);continue}}g!==null?(g.return=h,le=g):sv(m)}_=_.sibling}e:for(_=null,m=e;;){if(m.tag===5){if(_===null){_=m;try{i=m.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Ky("display",l))}catch(w){Ye(e,e.return,w)}}}else if(m.tag===6){if(_===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){Ye(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;_===m&&(_=null),m=m.return}_===m&&(_=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yn(t,e),jn(e),r&4&&iv(e);break;case 21:break;default:yn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xb(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Va(i,""),r.flags&=-33);var a=ov(e);Vf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ov(e);Wf(e,u,l);break;default:throw Error(J(161))}}catch(d){Ye(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t2(e,t,n){le=e,Sb(e)}function Sb(e,t,n){for(var r=(e.mode&1)!==0;le!==null;){var i=le,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ul;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Lt;u=ul;var f=Lt;if(ul=l,(Lt=d)&&!f)for(le=i;le!==null;)l=le,d=l.child,l.tag===22&&l.memoizedState!==null?lv(i):d!==null?(d.return=l,le=d):lv(i);for(;a!==null;)le=a,Sb(a),a=a.sibling;le=i,ul=u,Lt=f}av(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,le=a):av(e)}}function av(e){for(;le!==null;){var t=le;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Lt||Hu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Z_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Z_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var _=f.memoizedState;if(_!==null){var m=_.dehydrated;m!==null&&Ga(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Lt||t.flags&512&&Hf(t)}catch(h){Ye(t,t.return,h)}}if(t===e){le=null;break}if(n=t.sibling,n!==null){n.return=t.return,le=n;break}le=t.return}}function sv(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var n=t.sibling;if(n!==null){n.return=t.return,le=n;break}le=t.return}}function lv(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hu(4,t)}catch(d){Ye(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ye(t,i,d)}}var a=t.return;try{Hf(t)}catch(d){Ye(t,a,d)}break;case 5:var l=t.return;try{Hf(t)}catch(d){Ye(t,l,d)}}}catch(d){Ye(t,t.return,d)}if(t===e){le=null;break}var u=t.sibling;if(u!==null){u.return=t.return,le=u;break}le=t.return}}var n2=Math.ceil,iu=br.ReactCurrentDispatcher,yh=br.ReactCurrentOwner,fn=br.ReactCurrentBatchConfig,Le=0,mt=null,lt=null,wt=0,Kt=0,xi=uo(0),dt=0,ss=null,$o=0,Wu=0,bh=0,Da=null,Ut=null,xh=0,$i=1/0,ar=null,au=!1,qf=null,qr=null,cl=!1,jr=null,su=0,Fa=0,Kf=null,Ol=-1,Tl=0;function Mt(){return Le&6?rt():Ol!==-1?Ol:Ol=rt()}function Kr(e){return e.mode&1?Le&2&&wt!==0?wt&-wt:FS.transition!==null?(Tl===0&&(Tl=s0()),Tl):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:h0(e.type)),e):1}function On(e,t,n,r){if(50<Fa)throw Fa=0,Kf=null,Error(J(185));ys(e,n,r),(!(Le&2)||e!==mt)&&(e===mt&&(!(Le&2)&&(Wu|=n),dt===4&&Mr(e,wt)),Vt(e,r),n===1&&Le===0&&!(t.mode&1)&&($i=rt()+500,$u&&co()))}function Vt(e,t){var n=e.callbackNode;Fk(e,t);var r=Hl(e,e===mt?wt:0);if(r===0)n!==null&&v_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&v_(n),t===1)e.tag===0?DS(uv.bind(null,e)):A0(uv.bind(null,e)),NS(function(){!(Le&6)&&co()}),n=null;else{switch(l0(r)){case 1:n=qp;break;case 4:n=i0;break;case 16:n=Zl;break;case 536870912:n=a0;break;default:n=Zl}n=zb(n,Pb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pb(e,t){if(Ol=-1,Tl=0,Le&6)throw Error(J(327));var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var r=Hl(e,e===mt?wt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lu(e,r);else{t=r;var i=Le;Le|=2;var a=Eb();(mt!==e||wt!==t)&&(ar=null,$i=rt()+500,zo(e,t));do try{i2();break}catch(u){Cb(e,u)}while(1);ah(),iu.current=a,Le=i,lt!==null?t=0:(mt=null,wt=0,t=dt)}if(t!==0){if(t===2&&(i=xf(e),i!==0&&(r=i,t=Qf(e,i))),t===1)throw n=ss,zo(e,0),Mr(e,r),Vt(e,rt()),n;if(t===6)Mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!r2(i)&&(t=lu(e,r),t===2&&(a=xf(e),a!==0&&(r=a,t=Qf(e,a))),t===1))throw n=ss,zo(e,0),Mr(e,r),Vt(e,rt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:ko(e,Ut,ar);break;case 3:if(Mr(e,r),(r&130023424)===r&&(t=xh+500-rt(),10<t)){if(Hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tf(ko.bind(null,e,Ut,ar),t);break}ko(e,Ut,ar);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-En(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n2(r/1960))-r,10<r){e.timeoutHandle=Tf(ko.bind(null,e,Ut,ar),r);break}ko(e,Ut,ar);break;case 5:ko(e,Ut,ar);break;default:throw Error(J(329))}}}return Vt(e,rt()),e.callbackNode===n?Pb.bind(null,e):null}function Qf(e,t){var n=Da;return e.current.memoizedState.isDehydrated&&(zo(e,t).flags|=256),e=lu(e,t),e!==2&&(t=Ut,Ut=n,t!==null&&Gf(t)),e}function Gf(e){Ut===null?Ut=e:Ut.push.apply(Ut,e)}function r2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~bh,t&=~Wu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function uv(e){if(Le&6)throw Error(J(327));Oi();var t=Hl(e,0);if(!(t&1))return Vt(e,rt()),null;var n=lu(e,t);if(e.tag!==0&&n===2){var r=xf(e);r!==0&&(t=r,n=Qf(e,r))}if(n===1)throw n=ss,zo(e,0),Mr(e,t),Vt(e,rt()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ko(e,Ut,ar),Vt(e,rt()),null}function wh(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&($i=rt()+500,$u&&co())}}function Uo(e){jr!==null&&jr.tag===0&&!(Le&6)&&Oi();var t=Le;Le|=1;var n=fn.transition,r=Ie;try{if(fn.transition=null,Ie=1,e)return e()}finally{Ie=r,fn.transition=n,Le=t,!(Le&6)&&co()}}function kh(){Kt=xi.current,He(xi)}function zo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,AS(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:Fi(),He(Ht),He(Rt),fh();break;case 5:dh(r);break;case 4:Fi();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:sh(r.type._context);break;case 22:case 23:kh()}n=n.return}if(mt=e,lt=e=Qr(e.current,null),wt=Kt=t,dt=0,ss=null,bh=Wu=$o=0,Ut=Da=null,Eo!==null){for(t=0;t<Eo.length;t++)if(n=Eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Eo=null}return e}function Cb(e,t){do{var n=lt;try{if(ah(),Pl.current=ou,ru){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(jo=0,ht=ct=Ge=null,Ia=!1,os=0,yh.current=null,n===null||n.return===null){dt=1,ss=t,lt=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=wt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,_=u,m=_.tag;if(!(_.mode&1)&&(m===0||m===11||m===15)){var h=_.alternate;h?(_.updateQueue=h.updateQueue,_.memoizedState=h.memoizedState,_.lanes=h.lanes):(_.updateQueue=null,_.memoizedState=null)}var g=G_(l);if(g!==null){g.flags&=-257,X_(g,l,u,a,t),g.mode&1&&Q_(a,f,t),t=g,d=f;var x=t.updateQueue;if(x===null){var w=new Set;w.add(d),t.updateQueue=w}else x.add(d);break e}else{if(!(t&1)){Q_(a,f,t),Sh();break e}d=Error(J(426))}}else if(Ve&&u.mode&1){var C=G_(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),X_(C,l,u,a,t),oh(ji(d,u));break e}}a=d=ji(d,u),dt!==4&&(dt=2),Da===null?Da=[a]:Da.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=ub(a,d,t);U_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qr===null||!qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=cb(a,u,t);U_(a,P);break e}}a=a.return}while(a!==null)}Tb(n)}catch(z){t=z,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(1)}function Eb(){var e=iu.current;return iu.current=ou,e===null?ou:e}function Sh(){(dt===0||dt===3||dt===2)&&(dt=4),mt===null||!($o&268435455)&&!(Wu&268435455)||Mr(mt,wt)}function lu(e,t){var n=Le;Le|=2;var r=Eb();(mt!==e||wt!==t)&&(ar=null,zo(e,t));do try{o2();break}catch(i){Cb(e,i)}while(1);if(ah(),Le=n,iu.current=r,lt!==null)throw Error(J(261));return mt=null,wt=0,dt}function o2(){for(;lt!==null;)Ob(lt)}function i2(){for(;lt!==null&&!Lk();)Ob(lt)}function Ob(e){var t=Rb(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Tb(e):lt=t,yh.current=null}function Tb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=JS(n,t),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,lt=null;return}}else if(n=XS(n,t,Kt),n!==null){lt=n;return}if(t=t.sibling,t!==null){lt=t;return}lt=t=e}while(t!==null);dt===0&&(dt=5)}function ko(e,t,n){var r=Ie,i=fn.transition;try{fn.transition=null,Ie=1,a2(e,t,n,r)}finally{fn.transition=i,Ie=r}return null}function a2(e,t,n,r){do Oi();while(jr!==null);if(Le&6)throw Error(J(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(jk(e,a),e===mt&&(lt=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,zb(Zl,function(){return Oi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=fn.transition,fn.transition=null;var l=Ie;Ie=1;var u=Le;Le|=4,yh.current=null,e2(e,n),kb(n,e),CS(Ef),Wl=!!Cf,Ef=Cf=null,e.current=n,t2(n),Rk(),Le=u,Ie=l,fn.transition=a}else e.current=n;if(cl&&(cl=!1,jr=e,su=i),a=e.pendingLanes,a===0&&(qr=null),Nk(n.stateNode),Vt(e,rt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,e=qf,qf=null,e;return su&1&&e.tag!==0&&Oi(),a=e.pendingLanes,a&1?e===Kf?Fa++:(Fa=0,Kf=e):Fa=0,co(),null}function Oi(){if(jr!==null){var e=l0(su),t=fn.transition,n=Ie;try{if(fn.transition=null,Ie=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,su=0,Le&6)throw Error(J(331));var i=Le;for(Le|=4,le=e.current;le!==null;){var a=le,l=a.child;if(le.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(le=f;le!==null;){var _=le;switch(_.tag){case 0:case 11:case 15:Ma(8,_,a)}var m=_.child;if(m!==null)m.return=_,le=m;else for(;le!==null;){_=le;var h=_.sibling,g=_.return;if(bb(_),_===f){le=null;break}if(h!==null){h.return=g,le=h;break}le=g}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}le=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,le=l;else e:for(;le!==null;){if(a=le,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ma(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,le=y;break e}le=a.return}}var b=e.current;for(le=b;le!==null;){l=le;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,le=S;else e:for(l=b;le!==null;){if(u=le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Hu(9,u)}}catch(z){Ye(u,u.return,z)}if(u===l){le=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,le=P;break e}le=u.return}}if(Le=i,co(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Iu,e)}catch{}r=!0}return r}finally{Ie=n,fn.transition=t}}return!1}function cv(e,t,n){t=ji(n,t),t=ub(e,t,1),e=Vr(e,t,1),t=Mt(),e!==null&&(ys(e,1,t),Vt(e,t))}function Ye(e,t,n){if(e.tag===3)cv(e,e,n);else for(;t!==null;){if(t.tag===3){cv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){e=ji(n,e),e=cb(t,e,1),t=Vr(t,e,1),e=Mt(),t!==null&&(ys(t,1,e),Vt(t,e));break}}t=t.return}}function s2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Mt(),e.pingedLanes|=e.suspendedLanes&n,mt===e&&(wt&n)===n&&(dt===4||dt===3&&(wt&130023424)===wt&&500>rt()-xh?zo(e,0):bh|=n),Vt(e,t)}function Lb(e,t){t===0&&(e.mode&1?(t=el,el<<=1,!(el&130023424)&&(el=4194304)):t=1);var n=Mt();e=_r(e,t),e!==null&&(ys(e,t,n),Vt(e,n))}function l2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lb(e,n)}function u2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),Lb(e,n)}var Rb;Rb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Zt=!1,GS(e,t,n);Zt=!!(e.flags&131072)}else Zt=!1,Ve&&t.flags&1048576&&N0(t,Jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;El(e,t),e=t.pendingProps;var i=Ii(t,Rt.current);Ei(t,n),i=hh(null,t,r,e,i,n);var a=mh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wt(r)?(a=!0,Gl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uh(t),i.updater=Uu,t.stateNode=i,i._reactInternals=t,If(t,r,e,n),t=Ff(null,t,r,!0,a,n)):(t.tag=0,Ve&&a&&nh(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(El(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=d2(r),e=kn(r,e),i){case 0:t=Df(null,t,r,e,n);break e;case 1:t=ev(null,t,r,e,n);break e;case 11:t=J_(null,t,r,e,n);break e;case 14:t=Y_(null,t,r,kn(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Df(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),ev(e,t,r,i,n);case 3:e:{if(hb(t),e===null)throw Error(J(387));r=t.pendingProps,a=t.memoizedState,i=a.element,D0(e,t),tu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ji(Error(J(423)),t),t=tv(e,t,r,n,i);break e}else if(r!==i){i=ji(Error(J(424)),t),t=tv(e,t,r,n,i);break e}else for(Qt=Wr(t.stateNode.containerInfo.firstChild),Gt=t,Ve=!0,Pn=null,n=U0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){t=vr(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return Z0(t),e===null&&Af(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Of(r,i)?l=null:a!==null&&Of(r,a)&&(t.flags|=32),pb(e,t),It(e,t,l,n),t.child;case 6:return e===null&&Af(t),null;case 13:return mb(e,t,n);case 4:return ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Di(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),J_(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ue(Yl,r._currentValue),r._currentValue=l,a!==null)if(Rn(a.value,l)){if(a.children===i.children&&!Ht.current){t=vr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=fr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var _=f.pending;_===null?d.next=d:(d.next=_.next,_.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Nf(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(J(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Nf(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ei(t,n),i=pn(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),Y_(e,t,r,i,n);case 15:return db(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),El(e,t),t.tag=1,Wt(r)?(e=!0,Gl(t)):e=!1,Ei(t,n),j0(t,r,i),If(t,r,i,n),Ff(null,t,r,!0,e,n);case 19:return _b(e,t,n);case 22:return fb(e,t,n)}throw Error(J(156,t.tag))};function zb(e,t){return o0(e,t)}function c2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new c2(e,t,n,r)}function Ph(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d2(e){if(typeof e=="function")return Ph(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Wp)return 14}return 2}function Qr(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ll(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Ph(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case di:return Ao(n.children,i,a,t);case Zp:l=8,i|=8;break;case af:return e=cn(12,n,t,i|2),e.elementType=af,e.lanes=a,e;case sf:return e=cn(13,n,t,i),e.elementType=sf,e.lanes=a,e;case lf:return e=cn(19,n,t,i),e.elementType=lf,e.lanes=a,e;case $y:return Vu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fy:l=10;break e;case jy:l=9;break e;case Hp:l=11;break e;case Wp:l=14;break e;case Ar:l=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=cn(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ao(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Vu(e,t,n,r){return e=cn(22,e,r,t),e.elementType=$y,e.lanes=n,e.stateNode={isHidden:!1},e}function Ed(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function Od(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,a,l,u,d){return e=new f2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(a),e}function p2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ab(e){if(!e)return no;e=e._reactInternals;e:{if(Ko(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Wt(n))return z0(e,n,t)}return t}function Nb(e,t,n,r,i,a,l,u,d){return e=Ch(n,r,!0,e,i,a,l,u,d),e.context=Ab(null),n=e.current,r=Mt(),i=Kr(n),a=fr(r,i),a.callback=t??null,Vr(n,a,i),e.current.lanes=i,ys(e,i,r),Vt(e,r),e}function qu(e,t,n,r){var i=t.current,a=Mt(),l=Kr(i);return n=Ab(n),t.context===null?t.context=n:t.pendingContext=n,t=fr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vr(i,t,l),e!==null&&(On(e,i,l,a),Sl(e,i,l)),l}function uu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eh(e,t){dv(e,t),(e=e.alternate)&&dv(e,t)}function h2(){return null}var Bb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oh(e){this._internalRoot=e}Ku.prototype.render=Oh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));qu(e,t,null,null)};Ku.prototype.unmount=Oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uo(function(){qu(null,e,null,null)}),t[mr]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=d0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&p0(e)}};function Th(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fv(){}function m2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=uu(l);a.call(f)}}var l=Nb(t,r,e,0,null,!1,!1,"",fv);return e._reactRootContainer=l,e[mr]=l.current,Ya(e.nodeType===8?e.parentNode:e),Uo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=uu(d);u.call(f)}}var d=Ch(e,0,!1,null,null,!1,!1,"",fv);return e._reactRootContainer=d,e[mr]=d.current,Ya(e.nodeType===8?e.parentNode:e),Uo(function(){qu(t,d,n,r)}),d}function Gu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=uu(l);u.call(d)}}qu(t,l,e,i)}else l=m2(n,t,e,i,r);return uu(l)}u0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ea(t.pendingLanes);n!==0&&(Kp(t,n|1),Vt(t,rt()),!(Le&6)&&($i=rt()+500,co()))}break;case 13:Uo(function(){var r=_r(e,1);if(r!==null){var i=Mt();On(r,e,1,i)}}),Eh(e,1)}};Qp=function(e){if(e.tag===13){var t=_r(e,134217728);if(t!==null){var n=Mt();On(t,e,134217728,n)}Eh(e,134217728)}};c0=function(e){if(e.tag===13){var t=Kr(e),n=_r(e,t);if(n!==null){var r=Mt();On(n,e,t,r)}Eh(e,t)}};d0=function(){return Ie};f0=function(e,t){var n=Ie;try{return Ie=e,t()}finally{Ie=n}};gf=function(e,t,n){switch(t){case"input":if(df(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ju(r);if(!i)throw Error(J(90));Zy(r),df(r,i)}}}break;case"textarea":Wy(e,n);break;case"select":t=n.value,t!=null&&ki(e,!!n.multiple,t,!1)}};Jy=wh;Yy=Uo;var _2={usingClientEntryPoint:!1,Events:[xs,mi,ju,Gy,Xy,wh]},ya={findFiberByHostInstance:Co,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},v2={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n0(e),e===null?null:e.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||h2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Iu=dl.inject(v2),qn=dl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_2;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(t))throw Error(J(200));return p2(e,t,null,n)};Yt.createRoot=function(e,t){if(!Th(e))throw Error(J(299));var n=!1,r="",i=Bb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[mr]=t.current,Ya(e.nodeType===8?e.parentNode:e),new Oh(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=n0(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return Uo(e)};Yt.hydrate=function(e,t,n){if(!Qu(t))throw Error(J(200));return Gu(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Th(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=Bb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nb(t,null,e,1,n??null,i,!1,a,l),e[mr]=t.current,Ya(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ku(t)};Yt.render=function(e,t,n){if(!Qu(t))throw Error(J(200));return Gu(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Qu(e))throw Error(J(40));return e._reactRootContainer?(Uo(function(){Gu(null,null,e,!1,function(){e._reactRootContainer=null,e[mr]=null})}),!0):!1};Yt.unstable_batchedUpdates=wh;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qu(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Gu(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Yt})(hk);const g2=Ey(Ni);var Ib,pv=Ni;Ib=pv.createRoot,pv.hydrateRoot;var Xf={},y2={get exports(){return Xf},set exports(e){Xf=e}},Mb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=R;function b2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var x2=typeof Object.is=="function"?Object.is:b2,w2=Ui.useState,k2=Ui.useEffect,S2=Ui.useLayoutEffect,P2=Ui.useDebugValue;function C2(e,t){var n=t(),r=w2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return S2(function(){i.value=n,i.getSnapshot=t,Td(i)&&a({inst:i})},[e,n,t]),k2(function(){return Td(i)&&a({inst:i}),e(function(){Td(i)&&a({inst:i})})},[e]),P2(n),n}function Td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!x2(e,n)}catch{return!0}}function E2(e,t){return t()}var O2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?E2:C2;Mb.useSyncExternalStore=Ui.useSyncExternalStore!==void 0?Ui.useSyncExternalStore:O2;(function(e){e.exports=Mb})(y2);var Jf={},T2={get exports(){return Jf},set exports(e){Jf=e}},Db={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=R,L2=Xf;function R2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z2=typeof Object.is=="function"?Object.is:R2,A2=L2.useSyncExternalStore,N2=Xu.useRef,B2=Xu.useEffect,I2=Xu.useMemo,M2=Xu.useDebugValue;Db.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=N2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=I2(function(){function d(g){if(!f){if(f=!0,_=g,g=r(g),i!==void 0&&l.hasValue){var x=l.value;if(i(x,g))return m=x}return m=g}if(x=m,z2(_,g))return x;var w=r(g);return i!==void 0&&i(x,w)?x:(_=g,m=w)}var f=!1,_,m,h=n===void 0?null:n;return[function(){return d(t())},h===null?void 0:function(){return d(h())}]},[t,n,r,i]);var u=A2(e,a[0],a[1]);return B2(function(){l.hasValue=!0,l.value=u},[u]),M2(u),u};(function(e){e.exports=Db})(T2);function D2(e){e()}let Fb=D2;const F2=e=>Fb=e,j2=()=>Fb,ro=R.createContext(null);function jb(){return R.useContext(ro)}const $2=()=>{throw new Error("uSES not initialized!")};let $b=$2;const U2=e=>{$b=e},Z2=(e,t)=>e===t;function H2(e=ro){const t=e===ro?jb:()=>R.useContext(e);return function(r,i=Z2){const{store:a,subscription:l,getServerState:u}=t(),d=$b(l.addNestedSub,a.getState,u||a.getState,r,i);return R.useDebugValue(d),d}}const W2=H2();function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(this,arguments)}var Yf={},V2={get exports(){return Yf},set exports(e){Yf=e}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _t=typeof Symbol=="function"&&Symbol.for,Lh=_t?Symbol.for("react.element"):60103,Rh=_t?Symbol.for("react.portal"):60106,Ju=_t?Symbol.for("react.fragment"):60107,Yu=_t?Symbol.for("react.strict_mode"):60108,ec=_t?Symbol.for("react.profiler"):60114,tc=_t?Symbol.for("react.provider"):60109,nc=_t?Symbol.for("react.context"):60110,zh=_t?Symbol.for("react.async_mode"):60111,rc=_t?Symbol.for("react.concurrent_mode"):60111,oc=_t?Symbol.for("react.forward_ref"):60112,ic=_t?Symbol.for("react.suspense"):60113,q2=_t?Symbol.for("react.suspense_list"):60120,ac=_t?Symbol.for("react.memo"):60115,sc=_t?Symbol.for("react.lazy"):60116,K2=_t?Symbol.for("react.block"):60121,Q2=_t?Symbol.for("react.fundamental"):60117,G2=_t?Symbol.for("react.responder"):60118,X2=_t?Symbol.for("react.scope"):60119;function tn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lh:switch(e=e.type,e){case zh:case rc:case Ju:case ec:case Yu:case ic:return e;default:switch(e=e&&e.$$typeof,e){case nc:case oc:case sc:case ac:case tc:return e;default:return t}}case Rh:return t}}}function Ub(e){return tn(e)===rc}Me.AsyncMode=zh;Me.ConcurrentMode=rc;Me.ContextConsumer=nc;Me.ContextProvider=tc;Me.Element=Lh;Me.ForwardRef=oc;Me.Fragment=Ju;Me.Lazy=sc;Me.Memo=ac;Me.Portal=Rh;Me.Profiler=ec;Me.StrictMode=Yu;Me.Suspense=ic;Me.isAsyncMode=function(e){return Ub(e)||tn(e)===zh};Me.isConcurrentMode=Ub;Me.isContextConsumer=function(e){return tn(e)===nc};Me.isContextProvider=function(e){return tn(e)===tc};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lh};Me.isForwardRef=function(e){return tn(e)===oc};Me.isFragment=function(e){return tn(e)===Ju};Me.isLazy=function(e){return tn(e)===sc};Me.isMemo=function(e){return tn(e)===ac};Me.isPortal=function(e){return tn(e)===Rh};Me.isProfiler=function(e){return tn(e)===ec};Me.isStrictMode=function(e){return tn(e)===Yu};Me.isSuspense=function(e){return tn(e)===ic};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ju||e===rc||e===ec||e===Yu||e===ic||e===q2||typeof e=="object"&&e!==null&&(e.$$typeof===sc||e.$$typeof===ac||e.$$typeof===tc||e.$$typeof===nc||e.$$typeof===oc||e.$$typeof===Q2||e.$$typeof===G2||e.$$typeof===X2||e.$$typeof===K2)};Me.typeOf=tn;(function(e){e.exports=Me})(V2);var Zb=Yf,J2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hb={};Hb[Zb.ForwardRef]=J2;Hb[Zb.Memo]=Y2;var hv={},eP={get exports(){return hv},set exports(e){hv=e}},De={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=Symbol.for("react.element"),Nh=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),tP=Symbol.for("react.server_context"),pc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),nP=Symbol.for("react.offscreen"),Wb;Wb=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ah:switch(e=e.type,e){case lc:case cc:case uc:case hc:case mc:return e;default:switch(e=e&&e.$$typeof,e){case tP:case fc:case pc:case vc:case _c:case dc:return e;default:return t}}case Nh:return t}}}De.ContextConsumer=fc;De.ContextProvider=dc;De.Element=Ah;De.ForwardRef=pc;De.Fragment=lc;De.Lazy=vc;De.Memo=_c;De.Portal=Nh;De.Profiler=cc;De.StrictMode=uc;De.Suspense=hc;De.SuspenseList=mc;De.isAsyncMode=function(){return!1};De.isConcurrentMode=function(){return!1};De.isContextConsumer=function(e){return mn(e)===fc};De.isContextProvider=function(e){return mn(e)===dc};De.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ah};De.isForwardRef=function(e){return mn(e)===pc};De.isFragment=function(e){return mn(e)===lc};De.isLazy=function(e){return mn(e)===vc};De.isMemo=function(e){return mn(e)===_c};De.isPortal=function(e){return mn(e)===Nh};De.isProfiler=function(e){return mn(e)===cc};De.isStrictMode=function(e){return mn(e)===uc};De.isSuspense=function(e){return mn(e)===hc};De.isSuspenseList=function(e){return mn(e)===mc};De.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lc||e===cc||e===uc||e===hc||e===mc||e===nP||typeof e=="object"&&e!==null&&(e.$$typeof===vc||e.$$typeof===_c||e.$$typeof===dc||e.$$typeof===fc||e.$$typeof===pc||e.$$typeof===Wb||e.getModuleId!==void 0)};De.typeOf=mn;(function(e){e.exports=De})(eP);function rP(){const e=j2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const mv={notify(){},get:()=>[]};function oP(e,t){let n,r=mv;function i(m){return d(),r.subscribe(m)}function a(){r.notify()}function l(){_.onStateChange&&_.onStateChange()}function u(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=rP())}function f(){n&&(n(),n=void 0,r.clear(),r=mv)}const _={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return _}const iP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aP=iP?R.useLayoutEffect:R.useEffect;function sP({store:e,context:t,children:n,serverState:r}){const i=R.useMemo(()=>{const u=oP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=R.useMemo(()=>e.getState(),[e]);aP(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||ro;return Z.createElement(l.Provider,{value:i},n)}function Vb(e=ro){const t=e===ro?jb:()=>R.useContext(e);return function(){const{store:r}=t();return r}}const lP=Vb();function uP(e=ro){const t=e===ro?lP:Vb(e);return function(){return t().dispatch}}const cP=uP();U2(Jf.useSyncExternalStoreWithSelector);F2(Ni.unstable_batchedUpdates);/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const _v="popstate";function dP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return ls("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return pP(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fP(){return Math.random().toString(36).substr(2,8)}function vv(e,t){return{usr:e.state,key:e.key,idx:t}}function ls(e,t,n,r){return n===void 0&&(n=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xr(t):t,{state:n,key:t&&t.key||r||fP()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=st.Pop,d=null,f=_();f==null&&(f=0,l.replaceState(Ae({},l.state,{idx:f}),""));function _(){return(l.state||{idx:null}).idx}function m(){u=st.Pop;let C=_(),y=C==null?null:C-f;f=C,d&&d({action:u,location:w.location,delta:y})}function h(C,y){u=st.Push;let b=ls(w.location,C,y);n&&n(b,C),f=_()+1;let S=vv(b,f),P=w.createHref(b);try{l.pushState(S,"",P)}catch{i.location.assign(P)}a&&d&&d({action:u,location:w.location,delta:1})}function g(C,y){u=st.Replace;let b=ls(w.location,C,y);n&&n(b,C),f=_();let S=vv(b,f),P=w.createHref(b);l.replaceState(S,"",P),a&&d&&d({action:u,location:w.location,delta:0})}function x(C){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof C=="string"?C:Zo(C);return ke(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let w={get action(){return u},get location(){return e(i,l)},listen(C){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(_v,m),d=C,()=>{i.removeEventListener(_v,m),d=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let y=x(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:g,go(C){return l.go(C)}};return w}var xt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xt||(xt={}));function hP(e){return e.index===!0}function qb(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return ke(r.index!==!0||!r.children,"Cannot specify children on an index route"),ke(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),hP(r)?Ae({},r,{id:l}):Ae({},r,{id:l,children:r.children?qb(r.children,a,n):void 0})})}function Ta(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?xr(t):t,i=Gb(r.pathname||"/",n);if(i==null)return null;let a=Kb(e);mP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=SP(a[u],EP(i));return l}function Kb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(ke(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=No([r,d.relativePath]),_=n.concat(d);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Kb(a.children,t,_,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:wP(f,a.index),routesMeta:_})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of Qb(a.path))i(a,l,d)}),t}function Qb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=Qb(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function mP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _P=/^:\w+$/,vP=3,gP=2,yP=1,bP=10,xP=-2,gv=e=>e==="*";function wP(e,t){let n=e.split("/"),r=n.length;return n.some(gv)&&(r+=xP),t&&(r+=gP),n.filter(i=>!gv(i)).reduce((i,a)=>i+(_P.test(a)?vP:a===""?yP:bP),r)}function kP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function SP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",_=PP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!_)return null;Object.assign(r,_.params);let m=u.route;a.push({params:r,pathname:No([i,_.pathname]),pathnameBase:zP(No([i,_.pathnameBase])),route:m}),_.pathnameBase!=="/"&&(i=No([i,_.pathnameBase]))}return a}function PP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=CP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,_,m)=>{if(_==="*"){let h=u[m]||"";l=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return f[_]=OP(u[m]||"",_),f},{}),pathname:a,pathnameBase:l,pattern:e}}function CP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),us(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function EP(e){try{return decodeURI(e)}catch(t){return us(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function OP(e,t){try{return decodeURIComponent(e)}catch(n){return us(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gb(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function us(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?xr(e):e;return{pathname:n?n.startsWith("/")?n:LP(n,t):t,search:AP(r),hash:NP(i)}}function LP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ld(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function RP(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xr(e):(i=Ae({},e),ke(!i.pathname||!i.pathname.includes("?"),Ld("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Ld("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Ld("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let m=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}u=m>=0?t[m]:"/"}let d=TP(i,u),f=l&&l!=="/"&&l.endsWith("/"),_=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||_)&&(d.pathname+="/"),d}const No=e=>e.join("/").replace(/\/\/+/g,"/"),zP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),AP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,NP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class yv extends Error{}class BP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ke(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new yv("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof yv?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ke(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:MP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function IP(e){return e instanceof Promise&&e._tracked===!0}function MP(e){if(!IP(e))return e;if(e._error)throw e._error;return e._data}class Bh{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Jb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yb=["post","put","patch","delete"],DP=new Set(Yb),FP=["get",...Yb],jP=new Set(FP),$P=new Set([301,302,303,307,308]),UP=new Set([307,308]),Rd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ZP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},bv={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},e1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HP=!t1;function WP(e){ke(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=qb(e.routes),n=null,r=new Set,i=null,a=null,l=null,u=e.hydrationData!=null,d=Ta(t,e.history.location,e.basename),f=null;if(d==null){let U=zr(404,{pathname:e.history.location.pathname}),{matches:H,route:G}=Cv(t);d=H,f={[G.id]:U}}let _=!d.some(U=>U.route.loader)||e.hydrationData!=null,m,h={historyAction:e.history.action,location:e.history.location,matches:d,initialized:_,navigation:Rd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},g=st.Pop,x=!1,w,C=!1,y=!1,b=[],S=[],P=new Map,z=0,M=-1,F=new Map,j=new Set,W=new Map,T=new Map,Q=new Map,ae=!1;function he(){return n=e.history.listen(U=>{let{action:H,location:G,delta:se}=U;if(ae){ae=!1;return}us(Q.size===0||se!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=Bn({currentLocation:h.location,nextLocation:G,historyAction:H});if(oe&&se!=null){ae=!0,e.history.go(se*-1),Pt(oe,{state:"blocked",location:G,proceed(){Pt(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),e.history.go(se)},reset(){ze(oe),$({blockers:new Map(m.state.blockers)})}});return}return V(H,G)}),h.initialized||V(st.Pop,h.location),m}function ne(){n&&n(),r.clear(),w&&w.abort(),h.fetchers.forEach((U,H)=>Fe(H)),h.blockers.forEach((U,H)=>ze(H))}function de(U){return r.add(U),()=>r.delete(U)}function $(U){h=Ae({},h,U),r.forEach(H=>H(h))}function ee(U,H){var G,se;let oe=h.actionData!=null&&h.navigation.formMethod!=null&&sr(h.navigation.formMethod)&&h.navigation.state==="loading"&&((G=U.state)==null?void 0:G._isRedirect)!==!0,_e;H.actionData?Object.keys(H.actionData).length>0?_e=H.actionData:_e=null:oe?_e=h.actionData:_e=null;let fe=H.loaderData?Pv(h.loaderData,H.loaderData,H.matches||[],H.errors):h.loaderData;for(let[pe]of Q)ze(pe);let ye=x===!0||h.navigation.formMethod!=null&&sr(h.navigation.formMethod)&&((se=U.state)==null?void 0:se._isRedirect)!==!0;$(Ae({},H,{actionData:_e,loaderData:fe,historyAction:g,location:U,initialized:!0,navigation:Rd,revalidation:"idle",restoreScrollPosition:kr(U,H.matches||h.matches),preventScrollReset:ye,blockers:new Map(h.blockers)})),C||g===st.Pop||(g===st.Push?e.history.push(U,U.state):g===st.Replace&&e.history.replace(U,U.state)),g=st.Pop,x=!1,C=!1,y=!1,b=[],S=[]}async function I(U,H){if(typeof U=="number"){e.history.go(U);return}let{path:G,submission:se,error:oe}=xv(U,H),_e=h.location,fe=ls(h.location,G,H&&H.state);fe=Ae({},fe,e.history.encodeLocation(fe));let ye=H&&H.replace!=null?H.replace:void 0,pe=st.Push;ye===!0?pe=st.Replace:ye===!1||se!=null&&sr(se.formMethod)&&se.formAction===h.location.pathname+h.location.search&&(pe=st.Replace);let ot=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,xe=Bn({currentLocation:_e,nextLocation:fe,historyAction:pe});if(xe){Pt(xe,{state:"blocked",location:fe,proceed(){Pt(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:fe}),I(U,H)},reset(){ze(xe),$({blockers:new Map(h.blockers)})}});return}return await V(pe,fe,{submission:se,pendingError:oe,preventScrollReset:ot,replace:H&&H.replace})}function re(){if(Je(),$({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){V(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}V(g||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function V(U,H,G){w&&w.abort(),w=null,g=U,C=(G&&G.startUninterruptedRevalidation)===!0,At(h.location,h.matches),x=(G&&G.preventScrollReset)===!0;let se=G&&G.overrideNavigation,oe=Ta(t,H,e.basename);if(!oe){let je=zr(404,{pathname:H.pathname}),{matches:Nt,route:vt}=Cv(t);$t(),ee(H,{matches:Nt,loaderData:{},errors:{[vt.id]:je}});return}if(GP(h.location,H)&&!(G&&G.submission&&sr(G.submission.formMethod))){ee(H,{matches:oe});return}w=new AbortController;let _e=xa(e.history,H,w.signal,G&&G.submission),fe,ye;if(G&&G.pendingError)ye={[wi(oe).route.id]:G.pendingError};else if(G&&G.submission&&sr(G.submission.formMethod)){let je=await O(_e,H,G.submission,oe,{replace:G.replace});if(je.shortCircuited)return;fe=je.pendingActionData,ye=je.pendingActionError,se=Ae({state:"loading",location:H},G.submission),_e=new Request(_e.url,{signal:_e.signal})}let{shortCircuited:pe,loaderData:ot,errors:xe}=await B(_e,H,oe,se,G&&G.submission,G&&G.replace,fe,ye);pe||(w=null,ee(H,Ae({matches:oe},fe?{actionData:fe}:{},{loaderData:ot,errors:xe})))}async function O(U,H,G,se,oe){Je();let _e=Ae({state:"submitting",location:H},G);$({navigation:_e});let fe,ye=Lv(se,H);if(!ye.route.action)fe={type:xt.error,error:zr(405,{method:U.method,pathname:H.pathname,routeId:ye.route.id})};else if(fe=await ba("action",U,ye,se,m.basename),U.signal.aborted)return{shortCircuited:!0};if(Ti(fe)){let pe;return oe&&oe.replace!=null?pe=oe.replace:pe=fe.location===h.location.pathname+h.location.search,await ue(h,fe,{submission:G,replace:pe}),{shortCircuited:!0}}if(ja(fe)){let pe=wi(se,ye.route.id);return(oe&&oe.replace)!==!0&&(g=st.Push),{pendingActionData:{},pendingActionError:{[pe.route.id]:fe.error}}}if(To(fe))throw zr(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:fe.data}}}async function B(U,H,G,se,oe,_e,fe,ye){let pe=se;pe||(pe=Ae({state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},oe));let ot=oe||(pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0),[xe,je]=wv(e.history,h,G,ot,H,y,b,S,fe,ye,W);if($t(pt=>!(G&&G.some(nn=>nn.route.id===pt))||xe&&xe.some(nn=>nn.route.id===pt)),xe.length===0&&je.length===0)return ee(H,Ae({matches:G,loaderData:{},errors:ye||null},fe?{actionData:fe}:{})),{shortCircuited:!0};if(!C){je.forEach(nn=>{let er=h.fetchers.get(nn.key),Xo={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(nn.key,Xo)});let pt=fe||h.actionData;$(Ae({navigation:pe},pt?Object.keys(pt).length===0?{actionData:null}:{actionData:pt}:{},je.length>0?{fetchers:new Map(h.fetchers)}:{}))}M=++z,je.forEach(pt=>P.set(pt.key,w));let{results:Nt,loaderResults:vt,fetcherResults:fo}=await me(h.matches,G,xe,je,U);if(U.signal.aborted)return{shortCircuited:!0};je.forEach(pt=>P.delete(pt.key));let Qo=Ev(Nt);if(Qo)return await ue(h,Qo,{replace:_e}),{shortCircuited:!0};let{loaderData:po,errors:Yn}=Sv(h,G,xe,vt,ye,je,fo,T);T.forEach((pt,nn)=>{pt.subscribe(er=>{(er||pt.done)&&T.delete(nn)})}),Oe();let Go=qt(M);return Ae({loaderData:po,errors:Yn},Go||je.length>0?{fetchers:new Map(h.fetchers)}:{})}function N(U){return h.fetchers.get(U)||ZP}function K(U,H,G,se){if(HP)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(U)&&Be(U);let oe=Ta(t,G,e.basename);if(!oe){qe(U,H,zr(404,{pathname:G}));return}let{path:_e,submission:fe}=xv(G,se,!0),ye=Lv(oe,_e);if(x=(se&&se.preventScrollReset)===!0,fe&&sr(fe.formMethod)){Y(U,H,_e,ye,oe,fe);return}W.set(U,{routeId:H,path:_e,match:ye,matches:oe}),te(U,H,_e,ye,oe,fe)}async function Y(U,H,G,se,oe,_e){if(Je(),W.delete(U),!se.route.action){let _n=zr(405,{method:_e.formMethod,pathname:G,routeId:H});qe(U,H,_n);return}let fe=h.fetchers.get(U),ye=Ae({state:"submitting"},_e,{data:fe&&fe.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(U,ye),$({fetchers:new Map(h.fetchers)});let pe=new AbortController,ot=xa(e.history,G,pe.signal,_e);P.set(U,pe);let xe=await ba("action",ot,se,oe,m.basename);if(ot.signal.aborted){P.get(U)===pe&&P.delete(U);return}if(Ti(xe)){P.delete(U),j.add(U);let _n=Ae({state:"loading"},_e,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(U,_n),$({fetchers:new Map(h.fetchers)}),ue(h,xe,{isFetchActionRedirect:!0})}if(ja(xe)){qe(U,H,xe.error);return}if(To(xe))throw zr(400,{type:"defer-action"});let je=h.navigation.location||h.location,Nt=xa(e.history,je,pe.signal),vt=h.navigation.state!=="idle"?Ta(t,h.navigation.location,e.basename):h.matches;ke(vt,"Didn't find any matches after fetcher action");let fo=++z;F.set(U,fo);let Qo=Ae({state:"loading",data:xe.data},_e,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(U,Qo);let[po,Yn]=wv(e.history,h,vt,_e,je,y,b,S,{[se.route.id]:xe.data},void 0,W);Yn.filter(_n=>_n.key!==U).forEach(_n=>{let Yi=_n.key,Ts=h.fetchers.get(Yi),Lc={state:"loading",data:Ts&&Ts.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Yi,Lc),P.set(Yi,pe)}),$({fetchers:new Map(h.fetchers)});let{results:Go,loaderResults:pt,fetcherResults:nn}=await me(h.matches,vt,po,Yn,Nt);if(pe.signal.aborted)return;F.delete(U),P.delete(U),Yn.forEach(_n=>P.delete(_n.key));let er=Ev(Go);if(er)return ue(h,er);let{loaderData:Xo,errors:Xi}=Sv(h,h.matches,po,pt,void 0,Yn,nn,T),Tc={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(U,Tc);let Ji=qt(fo);h.navigation.state==="loading"&&fo>M?(ke(g,"Expected pending action"),w&&w.abort(),ee(h.navigation.location,{matches:vt,loaderData:Xo,errors:Xi,fetchers:new Map(h.fetchers)})):($(Ae({errors:Xi,loaderData:Pv(h.loaderData,Xo,vt,Xi)},Ji?{fetchers:new Map(h.fetchers)}:{})),y=!1)}async function te(U,H,G,se,oe,_e){let fe=h.fetchers.get(U),ye=Ae({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},_e,{data:fe&&fe.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(U,ye),$({fetchers:new Map(h.fetchers)});let pe=new AbortController,ot=xa(e.history,G,pe.signal);P.set(U,pe);let xe=await ba("loader",ot,se,oe,m.basename);if(To(xe)&&(xe=await i1(xe,ot.signal,!0)||xe),P.get(U)===pe&&P.delete(U),ot.signal.aborted)return;if(Ti(xe)){await ue(h,xe);return}if(ja(xe)){let Nt=wi(h.matches,H);h.fetchers.delete(U),$({fetchers:new Map(h.fetchers),errors:{[Nt.route.id]:xe.error}});return}ke(!To(xe),"Unhandled fetcher deferred data");let je={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(U,je),$({fetchers:new Map(h.fetchers)})}async function ue(U,H,G){var se;let{submission:oe,replace:_e,isFetchActionRedirect:fe}=G===void 0?{}:G;H.revalidate&&(y=!0);let ye=ls(U.location,H.location,Ae({_isRedirect:!0},fe?{_isFetchActionRedirect:!0}:{}));if(ke(ye,"Expected a location on the redirect navigation"),e1.test(H.location)&&t1&&typeof((se=window)==null?void 0:se.location)<"u"){let vt=e.history.createURL(H.location).origin;if(window.location.origin!==vt){_e?window.location.replace(H.location):window.location.assign(H.location);return}}w=null;let pe=_e===!0?st.Replace:st.Push,{formMethod:ot,formAction:xe,formEncType:je,formData:Nt}=U.navigation;!oe&&ot&&xe&&Nt&&je&&(oe={formMethod:ot,formAction:xe,formEncType:je,formData:Nt}),UP.has(H.status)&&oe&&sr(oe.formMethod)?await V(pe,ye,{submission:Ae({},oe,{formAction:H.location}),preventScrollReset:x}):await V(pe,ye,{overrideNavigation:{state:"loading",location:ye,formMethod:oe?oe.formMethod:void 0,formAction:oe?oe.formAction:void 0,formEncType:oe?oe.formEncType:void 0,formData:oe?oe.formData:void 0},preventScrollReset:x})}async function me(U,H,G,se,oe){let _e=await Promise.all([...G.map(pe=>ba("loader",oe,pe,H,m.basename)),...se.map(pe=>ba("loader",xa(e.history,pe.path,oe.signal),pe.match,pe.matches,m.basename))]),fe=_e.slice(0,G.length),ye=_e.slice(G.length);return await Promise.all([Ov(U,G,fe,oe.signal,!1,h.loaderData),Ov(U,se.map(pe=>pe.match),ye,oe.signal,!0)]),{results:_e,loaderResults:fe,fetcherResults:ye}}function Je(){y=!0,b.push(...$t()),W.forEach((U,H)=>{P.has(H)&&(S.push(H),Be(H))})}function qe(U,H,G){let se=wi(h.matches,H);Fe(U),$({errors:{[se.route.id]:G},fetchers:new Map(h.fetchers)})}function Fe(U){P.has(U)&&Be(U),W.delete(U),F.delete(U),j.delete(U),h.fetchers.delete(U)}function Be(U){let H=P.get(U);ke(H,"Expected fetch controller: "+U),H.abort(),P.delete(U)}function tt(U){for(let H of U){let se={state:"idle",data:N(H).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(H,se)}}function Oe(){let U=[];for(let H of j){let G=h.fetchers.get(H);ke(G,"Expected fetcher: "+H),G.state==="loading"&&(j.delete(H),U.push(H))}tt(U)}function qt(U){let H=[];for(let[G,se]of F)if(se<U){let oe=h.fetchers.get(G);ke(oe,"Expected fetcher: "+G),oe.state==="loading"&&(Be(G),F.delete(G),H.push(G))}return tt(H),H.length>0}function jt(U,H){let G=h.blockers.get(U)||bv;return Q.get(U)!==H&&Q.set(U,H),G}function ze(U){h.blockers.delete(U),Q.delete(U)}function Pt(U,H){let G=h.blockers.get(U)||bv;ke(G.state==="unblocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="proceeding"||G.state==="blocked"&&H.state==="unblocked"||G.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+H.state),h.blockers.set(U,H),$({blockers:new Map(h.blockers)})}function Bn(U){let{currentLocation:H,nextLocation:G,historyAction:se}=U;if(Q.size===0)return;Q.size>1&&us(!1,"A router only supports one blocker at a time");let oe=Array.from(Q.entries()),[_e,fe]=oe[oe.length-1],ye=h.blockers.get(_e);if(!(ye&&ye.state==="proceeding")&&fe({currentLocation:H,nextLocation:G,historyAction:se}))return _e}function $t(U){let H=[];return T.forEach((G,se)=>{(!U||U(se))&&(G.cancel(),H.push(se),T.delete(se))}),H}function Jn(U,H,G){if(i=U,l=H,a=G||(se=>se.key),!u&&h.navigation===Rd){u=!0;let se=kr(h.location,h.matches);se!=null&&$({restoreScrollPosition:se})}return()=>{i=null,l=null,a=null}}function At(U,H){if(i&&a&&l){let G=H.map(oe=>Tv(oe,h.loaderData)),se=a(U,G)||U.key;i[se]=l()}}function kr(U,H){if(i&&a&&l){let G=H.map(_e=>Tv(_e,h.loaderData)),se=a(U,G)||U.key,oe=i[se];if(typeof oe=="number")return oe}return null}return m={get basename(){return e.basename},get state(){return h},get routes(){return t},initialize:he,subscribe:de,enableScrollRestoration:Jn,navigate:I,fetch:K,revalidate:re,createHref:U=>e.history.createHref(U),encodeLocation:U=>e.history.encodeLocation(U),getFetcher:N,deleteFetcher:Fe,dispose:ne,getBlocker:jt,deleteBlocker:ze,_internalFetchControllers:P,_internalActiveDeferreds:T},m}function VP(e){return e!=null&&"formData"in e}function xv(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Zo(e);if(!t||!VP(t))return{path:r};if(t.formMethod&&!JP(t.formMethod))return{path:r,error:zr(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:o1(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},sr(i.formMethod)))return{path:r,submission:i};let a=xr(r),l=r1(t.formData);return n&&a.search&&a1(a.search)&&l.append("index",""),a.search="?"+l,{path:Zo(a),submission:i}}function qP(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function wv(e,t,n,r,i,a,l,u,d,f,_){let m=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,h=e.createURL(t.location),g=e.createURL(i),x=a||h.toString()===g.toString()||h.search!==g.search,w=f?Object.keys(f)[0]:void 0,y=qP(n,w).filter((S,P)=>{if(S.route.loader==null)return!1;if(KP(t.loaderData,t.matches[P],S)||l.some(F=>F===S.route.id))return!0;let z=t.matches[P],M=S;return kv(S,Ae({currentUrl:h,currentParams:z.params,nextUrl:g,nextParams:M.params},r,{actionResult:m,defaultShouldRevalidate:x||n1(z,M)}))}),b=[];return _&&_.forEach((S,P)=>{if(n.some(z=>z.route.id===S.routeId))u.includes(P)?b.push(Ae({key:P},S)):kv(S.match,Ae({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:x}))&&b.push(Ae({key:P},S));else return}),[y,b]}function KP(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function n1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function kv(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ba(e,t,n,r,i,a,l,u){i===void 0&&(i="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let d,f,_,m=new Promise((g,x)=>_=x),h=()=>_();t.signal.addEventListener("abort",h);try{let g=n.route[e];ke(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await Promise.race([g({request:t,params:n.params,context:u}),m]),ke(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){d=xt.error,f=g}finally{t.signal.removeEventListener("abort",h)}if(XP(f)){let g=f.status;if($P.has(g)){let C=f.headers.get("Location");if(ke(C,"Redirects returned/thrown from loaders/actions must have a Location header"),e1.test(C)){if(!a){let y=new URL(t.url),b=C.startsWith("//")?new URL(y.protocol+C):new URL(C);b.origin===y.origin&&(C=b.pathname+b.search+b.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),b=Xb(y).map(P=>P.pathnameBase),S=RP(C,b,new URL(t.url).pathname);if(ke(Zo(S),"Unable to resolve redirect location: "+C),i){let P=S.pathname;S.pathname=P==="/"?i:No([i,P])}C=Zo(S)}if(a)throw f.headers.set("Location",C),f;return{type:xt.redirect,status:g,location:C,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||xt.data,response:f};let x,w=f.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?x=await f.json():x=await f.text(),d===xt.error?{type:d,error:new Bh(g,f.statusText,x),headers:f.headers}:{type:xt.data,data:x,statusCode:f.status,headers:f.headers}}return d===xt.error?{type:d,error:f}:f instanceof BP?{type:xt.deferred,deferredData:f}:{type:xt.data,data:f}}function xa(e,t,n,r){let i=e.createURL(o1(t)).toString(),a={signal:n};if(r&&sr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?r1(d):d}return new Request(i,a)}function r1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function QP(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((_,m)=>{let h=t[m].route.id;if(ke(!Ti(_),"Cannot handle redirect results in processLoaderData"),ja(_)){let g=wi(e,h),x=_.error;r&&(x=Object.values(r)[0],r=void 0),l=l||{},l[g.route.id]==null&&(l[g.route.id]=x),a[h]=void 0,d||(d=!0,u=Jb(_.error)?_.error.status:500),_.headers&&(f[h]=_.headers)}else To(_)?(i.set(h,_.deferredData),a[h]=_.deferredData.data):a[h]=_.data,_.statusCode!=null&&_.statusCode!==200&&!d&&(u=_.statusCode),_.headers&&(f[h]=_.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Sv(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=QP(t,n,r,i,u);for(let _=0;_<a.length;_++){let{key:m,match:h}=a[_];ke(l!==void 0&&l[_]!==void 0,"Did not find corresponding fetcher result");let g=l[_];if(ja(g)){let x=wi(e.matches,h.route.id);f&&f[x.route.id]||(f=Ae({},f,{[x.route.id]:g.error})),e.fetchers.delete(m)}else if(Ti(g))ke(!1,"Unhandled fetcher revalidation redirect");else if(To(g))ke(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,x)}}return{loaderData:d,errors:f}}function Pv(e,t,n,r){let i=Ae({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function wi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Cv(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function zr(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Bh(e||500,l,new Error(u),!0)}function Ev(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ti(n))return n}}function o1(e){let t=typeof e=="string"?xr(e):e;return Zo(Ae({},t,{hash:""}))}function GP(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function To(e){return e.type===xt.deferred}function ja(e){return e.type===xt.error}function Ti(e){return(e&&e.type)===xt.redirect}function XP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function JP(e){return jP.has(e)}function sr(e){return DP.has(e)}async function Ov(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l],f=e.find(m=>m.route.id===d.route.id),_=f!=null&&!n1(f,d)&&(a&&a[d.route.id])!==void 0;To(u)&&(i||_)&&await i1(u,r,i).then(m=>{m&&(n[l]=m||n[l])})}}async function i1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xt.error,error:i}}return{type:xt.data,data:e.deferredData.data}}}function a1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Tv(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Lv(e,t){let n=typeof t=="string"?xr(t).search:t.search;if(e[e.length-1].route.index&&a1(n||""))return e[e.length-1];let r=Xb(e);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function YP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const eC=typeof Object.is=="function"?Object.is:YP,{useState:tC,useEffect:nC,useLayoutEffect:rC,useDebugValue:oC}=Ha;function iC(e,t,n){const r=t(),[{inst:i},a]=tC({inst:{value:r,getSnapshot:t}});return rC(()=>{i.value=r,i.getSnapshot=t,zd(i)&&a({inst:i})},[e,r,t]),nC(()=>(zd(i)&&a({inst:i}),e(()=>{zd(i)&&a({inst:i})})),[e]),oC(r),r}function zd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!eC(n,r)}catch{return!0}}function aC(e,t,n){return t()}const sC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lC=!sC,uC=lC?aC:iC,cC="useSyncExternalStore"in Ha?(e=>e.useSyncExternalStore)(Ha):uC,Ih=R.createContext(null),Mh=R.createContext(null),s1=R.createContext(null),gc=R.createContext(null),yc=R.createContext({outlet:null,matches:[]}),l1=R.createContext(null);function Dh(){return R.useContext(gc)!=null}function dC(){return Dh()||ke(!1),R.useContext(gc).location}function fC(e,t){Dh()||ke(!1);let{navigator:n}=R.useContext(s1),r=R.useContext(Mh),{matches:i}=R.useContext(yc),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=dC(),f;if(t){var _;let w=typeof t=="string"?xr(t):t;u==="/"||(_=w.pathname)!=null&&_.startsWith(u)||ke(!1),f=w}else f=d;let m=f.pathname||"/",h=u==="/"?m:m.slice(u.length)||"/",g=Ta(e,{pathname:h}),x=_C(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:No([u,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:No([u,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&x?R.createElement(gc.Provider,{value:{location:cu({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:st.Pop}},x):x}function pC(){let e=bC(),t=Jb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,a)}class hC extends R.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.createElement(yc.Provider,{value:this.props.routeContext},R.createElement(l1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mC(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(Ih);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(yc.Provider,{value:t},r)}function _C(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||ke(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=n?l.route.errorElement||R.createElement(pC,null):null,_=t.concat(r.slice(0,u+1)),m=()=>R.createElement(mC,{match:l,routeContext:{outlet:a,matches:_}},d?f:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||u===0)?R.createElement(hC,{location:n.location,component:f,error:d,children:m(),routeContext:{outlet:null,matches:_}}):m()},null)}var Rv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Rv||(Rv={}));var du;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(du||(du={}));function vC(e){let t=R.useContext(Mh);return t||ke(!1),t}function gC(e){let t=R.useContext(yc);return t||ke(!1),t}function yC(e){let t=gC(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function bC(){var e;let t=R.useContext(l1),n=vC(du.UseRouteError),r=yC(du.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xC(e){let{fallbackElement:t,router:n}=e,r=cC(n.subscribe,()=>n.state,()=>n.state),i=R.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d?.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return R.createElement(R.Fragment,null,R.createElement(Ih.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},R.createElement(Mh.Provider,{value:r},R.createElement(kC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?R.createElement(SC,null):t))),null)}function wC(e){ke(!1)}function kC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:a,static:l=!1}=e;Dh()&&ke(!1);let u=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=xr(r));let{pathname:f="/",search:_="",hash:m="",state:h=null,key:g="default"}=r,x=R.useMemo(()=>{let w=Gb(f,u);return w==null?null:{pathname:w,search:_,hash:m,state:h,key:g}},[u,f,_,m,h,g]);return x==null?null:R.createElement(s1.Provider,{value:d},R.createElement(gc.Provider,{children:n,value:{location:x,navigationType:i}}))}function SC(e){let{children:t,location:n}=e,r=R.useContext(Ih),i=r&&!t?r.router.routes:ep(t);return fC(i,n)}var zv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(zv||(zv={}));new Promise(()=>{});function ep(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;if(r.type===R.Fragment){n.push.apply(n,ep(r.props.children,t));return}r.type!==wC&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=ep(r.props.children,a)),n.push(l)}),n}function u1(e){return e.map(t=>{let n=cu({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=u1(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tp(){return tp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tp.apply(this,arguments)}function PC(e,t){return WP({basename:t?.basename,history:dP({window:t?.window}),hydrationData:t?.hydrationData||CC(),routes:u1(e)}).initialize()}function CC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=tp({},t,{errors:EC(t.errors)})),t}function EC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Bh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Av;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Av||(Av={}));var Nv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nv||(Nv={}));function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function OC(e,t){if(Tn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function c1(e){var t=OC(e,"string");return Tn(t)==="symbol"?t:String(t)}function zn(e,t,n){return t=c1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Bv={};function np(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Bv[t[0]]||(typeof t[0]=="string"&&(Bv[t[0]]=new Date),TC.apply(void 0,t))}function Iv(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function LC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var _=t.services.backendConnector.state["".concat(d,"|").concat(f)];return _===-1||_===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function RC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return np("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):LC(e,t,n)}var zC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,AC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},NC=function(t){return AC[t]},BC=function(t){return t.replace(zC,NC)};function Mv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mv(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var rp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:BC};function IC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};rp=Dv(Dv({},rp),e)}function MC(){return rp}var d1;function DC(e){d1=e}function FC(){return d1}function An(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c1(r.key),r)}}function Nn(e,t,n){return t&&Fv(e.prototype,t),n&&Fv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var jC={type:"3rdParty",init:function(t){IC(t.options.react),DC(t)}},$C=R.createContext(),UC=function(){function e(){An(this,e),this.usedNamespaces={}}return Nn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function f1(e){if(Array.isArray(e))return e}function ZC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(_){f=!0,i=_}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function jv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p1(e,t){if(e){if(typeof e=="string")return jv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jv(e,t)}}function h1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HC(e,t){return f1(e)||ZC(e,t)||p1(e,t)||h1()}function $v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ad(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$v(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var WC=function(t,n){var r=R.useRef();return R.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function m1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=R.useContext($C)||{},i=r.i18n,a=r.defaultNS,l=n||i||FC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new UC),!l){np("You will need to pass in an i18next instance by using initReactI18next");var u=function(W){return Array.isArray(W)?W[W.length-1]:W},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&np("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Ad(Ad(Ad({},MC()),l.options.react),t),_=f.useSuspense,m=f.keyPrefix,h=e||a||l.options&&l.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(h);var g=(l.isInitialized||l.initializedStoreOnce)&&h.every(function(j){return RC(j,l,f)});function x(){return l.getFixedT(null,f.nsMode==="fallback"?h:h[0],m)}var w=R.useState(x),C=HC(w,2),y=C[0],b=C[1],S=h.join(),P=WC(S),z=R.useRef(!0);R.useEffect(function(){var j=f.bindI18n,W=f.bindI18nStore;z.current=!0,!g&&!_&&Iv(l,h,function(){z.current&&b(x)}),g&&P&&P!==S&&z.current&&b(x);function T(){z.current&&b(x)}return j&&l&&l.on(j,T),W&&l&&l.store.on(W,T),function(){z.current=!1,j&&l&&j.split(" ").forEach(function(Q){return l.off(Q,T)}),W&&l&&W.split(" ").forEach(function(Q){return l.store.off(Q,T)})}},[l,S]);var M=R.useRef(!0);R.useEffect(function(){z.current&&!M.current&&b(x),M.current=!1},[l,m]);var F=[y,l,g];if(F.t=y,F.i18n=l,F.ready=g,g||!g&&!_)return F;throw new Promise(function(j){Iv(l,h,function(){j()})})}function fu(e,t){return fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fu(e,t)}function ks(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fu(e,t)}var Ss=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),pu=typeof window>"u";function Tt(){}function VC(e,t){return typeof e=="function"?e(t):e}function op(e){return typeof e=="number"&&e>=0&&e!==1/0}function hu(e){return Array.isArray(e)?e:[e]}function _1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Rl(e,t,n){return bc(e)?typeof t=="function"?Ne({},n,{queryKey:e,queryFn:t}):Ne({},t,{queryKey:e}):e}function Br(e,t,n){return bc(e)?[Ne({},t,{queryKey:e}),n]:[e||{},t]}function qC(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Uv(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(bc(u)){if(r){if(t.queryHash!==Fh(u,t.options))return!1}else if(!mu(t.queryKey,u))return!1}var f=qC(n,a);if(f==="none")return!1;if(f!=="all"){var _=t.isActive();if(f==="active"&&!_||f==="inactive"&&_)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Zv(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(bc(a)){if(!t.options.mutationKey)return!1;if(n){if(Lo(t.options.mutationKey)!==Lo(a))return!1}else if(!mu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Fh(e,t){var n=t?.queryKeyHashFn||Lo;return n(e)}function Lo(e){var t=hu(e);return KC(t)}function KC(e){return JSON.stringify(e,function(t,n){return ip(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function mu(e,t){return v1(hu(e),hu(t))}function v1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!v1(e[n],t[n])}):!1}function _u(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||ip(e)&&ip(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=_u(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function QC(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function ip(e){if(!Hv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Hv(n)||!n.hasOwnProperty("isPrototypeOf"))}function Hv(e){return Object.prototype.toString.call(e)==="[object Object]"}function bc(e){return typeof e=="string"||Array.isArray(e)}function GC(e){return new Promise(function(t){setTimeout(t,e)})}function Wv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function g1(){if(typeof AbortController=="function")return new AbortController}var XC=function(e){ks(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!pu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Ss),$a=new XC,JC=function(e){ks(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!pu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Ss),zl=new JC;function YC(e){return Math.min(1e3*Math.pow(2,e),3e4)}function vu(e){return typeof e?.cancel=="function"}var y1=function(t){this.revert=t?.revert,this.silent=t?.silent};function Al(e){return e instanceof y1}var b1=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(h){return i?.(h)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(h,g){l=h,u=g});var d=function(g){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(g),a?.(),l(g))},f=function(g){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(g),a?.(),u(g))},_=function(){return new Promise(function(g){a=g,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},m=function h(){if(!n.isResolved){var g;try{g=t.fn()}catch(x){g=Promise.reject(x)}i=function(w){if(!n.isResolved&&(f(new y1(w)),n.abort==null||n.abort(),vu(g)))try{g.cancel()}catch{}},n.isTransportCancelable=vu(g),Promise.resolve(g).then(d).catch(function(x){var w,C;if(!n.isResolved){var y=(w=t.retry)!=null?w:3,b=(C=t.retryDelay)!=null?C:YC,S=typeof b=="function"?b(n.failureCount,x):b,P=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,x);if(r||!P){f(x);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,x),GC(S).then(function(){if(!$a.isFocused()||!zl.isOnline())return _()}).then(function(){r?f(x):h()})}})}};m()},eE=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Wv(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Wv(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),et=new eE,x1=console;function gu(){return x1}function tE(e){x1=e}var nE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Ne({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),op(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=VC(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=_u(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Tt).catch(Tt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!_1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var _=this.observers.find(function(b){return b.options.queryFn});_&&this.setOptions(_.options)}var m=hu(this.queryKey),h=g1(),g={queryKey:m,pageParam:void 0,meta:this.meta};Object.defineProperty(g,"signal",{enumerable:!0,get:function(){if(h)return a.abortSignalConsumed=!0,h.signal}});var x=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(g)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:m,state:this.state,fetchFn:x,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=w.fetchOptions)==null?void 0:y.meta})}return this.retryer=new b1({fn:w.fetchFn,abort:h==null||(d=h.abort)==null?void 0:d.bind(h),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Al(S)&&S.silent||a.dispatch({type:"error",error:S}),Al(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),gu().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),et.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Ne({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ne({},r,{isPaused:!0});case"continue":return Ne({},r,{isPaused:!1});case"fetch":return Ne({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ne({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Al(u)&&u.revert&&this.revertState?Ne({},this.revertState):Ne({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ne({},r,{isInvalidated:!0});case"setState":return Ne({},r,i.state);default:return r}},e}(),rE=function(e){ks(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:Fh(d,a),_=this.get(f);return _||(_=new nE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(_)),_},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;et.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Br(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Uv(u,d)})},n.findAll=function(i,a){var l=Br(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Uv(u,d)}):this.queries},n.notify=function(i){var a=this;et.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;et.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;et.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Ss),oE=function(){function e(n){this.options=Ne({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||iE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Tt).catch(Tt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),gu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new b1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=aE(this.state,r),et.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function iE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function aE(e,t){switch(t.type){case"failed":return Ne({},e,{failureCount:e.failureCount+1});case"pause":return Ne({},e,{isPaused:!0});case"continue":return Ne({},e,{isPaused:!1});case"loading":return Ne({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ne({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ne({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ne({},e,t.state);default:return e}}var sE=function(e){ks(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new oE({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;et.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Zv(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Zv(i,a)})},n.notify=function(i){var a=this;et.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return et.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Tt)})},Promise.resolve())})},t}(Ss);function lE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,_=f?.pageParam,m=f?.direction==="forward",h=f?.direction==="backward",g=((l=t.state.data)==null?void 0:l.pages)||[],x=((u=t.state.data)==null?void 0:u.pageParams)||[],w=g1(),C=w?.signal,y=x,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},P=function(ne,de,$,ee){return y=ee?[de].concat(y):[].concat(y,[de]),ee?[$].concat(ne):[].concat(ne,[$])},z=function(ne,de,$,ee){if(b)return Promise.reject("Cancelled");if(typeof $>"u"&&!de&&ne.length)return Promise.resolve(ne);var I={queryKey:t.queryKey,signal:C,pageParam:$,meta:t.meta},re=S(I),V=Promise.resolve(re).then(function(B){return P(ne,$,B,ee)});if(vu(re)){var O=V;O.cancel=re.cancel}return V},M;if(!g.length)M=z([]);else if(m){var F=typeof _<"u",j=F?_:Vv(t.options,g);M=z(g,F,j)}else if(h){var W=typeof _<"u",T=W?_:uE(t.options,g);M=z(g,W,T,!0)}else(function(){y=[];var he=typeof t.options.getNextPageParam>"u",ne=d&&g[0]?d(g[0],0,g):!0;M=ne?z([],he,x[0]):Promise.resolve(P([],x[0],g[0]));for(var de=function(I){M=M.then(function(re){var V=d&&g[I]?d(g[I],I,g):!0;if(V){var O=he?x[I]:Vv(t.options,re);return z(re,he,O)}return Promise.resolve(P(re,x[I],g[I]))})},$=1;$<g.length;$++)de($)})();var Q=M.then(function(he){return{pages:he,pageParams:y}}),ae=Q;return ae.cancel=function(){b=!0,w?.abort(),vu(M)&&M.cancel()},Q}}}}function Vv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function uE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var cE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new rE,this.mutationCache=n.mutationCache||new sE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=$a.subscribe(function(){$a.isFocused()&&zl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=zl.subscribe(function(){$a.isFocused()&&zl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Br(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ne({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Rl(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return et.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Br(r,i),l=a[0],u=this.queryCache;et.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],_=this.queryCache,m=Ne({},d,{active:!0});return et.batch(function(){return _.findAll(d).forEach(function(h){h.reset()}),l.refetchQueries(m,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],_=f===void 0?{}:f;typeof _.revert>"u"&&(_.revert=!0);var m=et.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.cancel(_)})});return Promise.all(m).then(Tt).catch(Tt)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,_=Br(r,i,a),m=_[0],h=_[1],g=Ne({},m,{active:(l=(u=m.refetchActive)!=null?u:m.active)!=null?l:!0,inactive:(d=m.refetchInactive)!=null?d:!1});return et.batch(function(){return f.queryCache.findAll(m).forEach(function(x){x.invalidate()}),f.refetchQueries(g,h)})},t.refetchQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],_=et.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.fetch(void 0,Ne({},f,{meta:{refetchPage:d?.refetchPage}}))})}),m=Promise.all(_).then(Tt);return f?.throwOnError||(m=m.catch(Tt)),m},t.fetchQuery=function(r,i,a){var l=Rl(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Tt).catch(Tt)},t.fetchInfiniteQuery=function(r,i,a){var l=Rl(r,i,a);return l.behavior=lE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Tt).catch(Tt)},t.cancelMutations=function(){var r=this,i=et.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Tt).catch(Tt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return Lo(r)===Lo(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return mu(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return Lo(r)===Lo(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return mu(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Ne({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Fh(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ne({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),dE=function(e){ks(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),qv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return ap(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return ap(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Kv(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(_){l.trackedProps.includes(_)||l.trackedProps.push(_)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Ne({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Tt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(pu||this.currentResult.isStale||!op(this.options.staleTime))){var a=_1(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(pu||this.options.enabled===!1||!op(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||$a.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,_=this.currentResultOptions,m=i!==l,h=m?i.state:this.currentQueryInitialState,g=m?this.currentResult:this.previousQueryResult,x=i.state,w=x.dataUpdatedAt,C=x.error,y=x.errorUpdatedAt,b=x.isFetching,S=x.status,P=!1,z=!1,M;if(a.optimisticResults){var F=this.hasListeners(),j=!F&&qv(i,a),W=F&&Kv(i,l,a,u);(j||W)&&(b=!0,w||(S="loading"))}if(a.keepPreviousData&&!x.dataUpdateCount&&g?.isSuccess&&S!=="error")M=g.data,w=g.dataUpdatedAt,S=g.status,P=!0;else if(a.select&&typeof x.data<"u")if(d&&x.data===f?.data&&a.select===this.selectFn)M=this.selectResult;else try{this.selectFn=a.select,M=a.select(x.data),a.structuralSharing!==!1&&(M=_u(d?.data,M)),this.selectResult=M,this.selectError=null}catch(ae){gu().error(ae),this.selectError=ae}else M=x.data;if(typeof a.placeholderData<"u"&&typeof M>"u"&&(S==="loading"||S==="idle")){var T;if(d?.isPlaceholderData&&a.placeholderData===_?.placeholderData)T=d.data;else if(T=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof T<"u")try{T=a.select(T),a.structuralSharing!==!1&&(T=_u(d?.data,T)),this.selectError=null}catch(ae){gu().error(ae),this.selectError=ae}typeof T<"u"&&(S="success",M=T,z=!0)}this.selectError&&(C=this.selectError,M=this.selectResult,y=Date.now(),S="error");var Q={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:M,dataUpdatedAt:w,error:C,errorUpdatedAt:y,failureCount:x.fetchFailureCount,errorUpdateCount:x.errorUpdateCount,isFetched:x.dataUpdateCount>0||x.errorUpdateCount>0,isFetchedAfterMount:x.dataUpdateCount>h.dataUpdateCount||x.errorUpdateCount>h.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&x.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:P,isRefetchError:S==="error"&&x.dataUpdatedAt!==0,isStale:jh(i,a),refetch:this.refetch,remove:this.remove};return Q},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(_){var m=_,h=i[m]!==a[m],g=f?.some(function(w){return w===_}),x=d?.some(function(w){return w===_});return h&&!x&&(!f||g)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!QC(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ne({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Al(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;et.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Ss);function fE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function qv(e,t){return fE(e,t)||e.state.dataUpdatedAt>0&&ap(e,t,t.refetchOnMount)}function ap(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&jh(e,t)}return!1}function Kv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&jh(e,n)}function jh(e,t){return e.isStaleByTime(t.staleTime)}var pE=g2.unstable_batchedUpdates;et.setBatchNotifyFunction(pE);var hE=console;tE(hE);var Qv=Z.createContext(void 0),w1=Z.createContext(!1);function k1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Qv),window.ReactQueryClientContext):Qv}var mE=function(){var t=Z.useContext(k1(Z.useContext(w1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},_E=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;Z.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=k1(i);return Z.createElement(w1.Provider,{value:i},Z.createElement(l.Provider,{value:n},a))};function vE(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var gE=Z.createContext(vE()),yE=function(){return Z.useContext(gE)};function bE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function xE(e,t){var n=Z.useRef(!1),r=Z.useState(0),i=r[1],a=mE(),l=yE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=et.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=et.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=et.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=Z.useState(function(){return new t(a,u)}),f=d[0],_=f.getOptimisticResult(u);if(Z.useEffect(function(){n.current=!0,l.clearReset();var m=f.subscribe(et.batchCalls(function(){n.current&&i(function(h){return h+1})}));return f.updateResult(),function(){n.current=!1,m()}},[l,f]),Z.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&_.isLoading)throw f.fetchOptimistic(u).then(function(m){var h=m.data;u.onSuccess==null||u.onSuccess(h),u.onSettled==null||u.onSettled(h,null)}).catch(function(m){l.clearReset(),u.onError==null||u.onError(m),u.onSettled==null||u.onSettled(void 0,m)});if(_.isError&&!l.isReset()&&!_.isFetching&&bE(u.suspense,u.useErrorBoundary,[_.error,f.getCurrentQuery()]))throw _.error;return u.notifyOnChangeProps==="tracked"&&(_=f.trackResult(_,u)),_}function wE(e,t,n){var r=Rl(e,t,n);return xE(r,dE)}function Gr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function Ps(e,t){if(t&&(Tn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gr(e)}function Xn(e){return Xn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xn(e)}function kE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function SE(e){return f1(e)||kE(e)||p1(e)||h1()}function Gv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gv(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var PE={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},CE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.init(t,n)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||PE,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Xv(Xv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Wn=new CE,oo=function(){function e(){An(this,e),this.observers={}}return Nn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function wa(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function Jv(e){return e==null?"":""+e}function EE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function $h(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function Yv(e,t,n){var r=$h(e,t,Object),i=r.obj,a=r.k;i[a]=n}function OE(e,t,n,r){var i=$h(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function yu(e,t){var n=$h(e,t),r=n.obj,i=n.k;if(r)return r[i]}function eg(e,t,n){var r=yu(e,n);return r!==void 0?r:yu(t,n)}function S1(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):S1(e[r],t[r],n):e[r]=t[r]);return e}function si(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var TE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function LE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return TE[t]}):e}var wc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,RE=[" ",",","?","!",";"];function zE(e,t,n){t=t||"",n=n||"";var r=RE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function tg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AE(e){var t=NE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function NE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?P1(d,f,n):void 0}i=i[r[a]]}return i}}var BE=function(e){xc(n,e);var t=AE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return An(this,n),i=t.call(this),wc&&oo.call(Gr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Nn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,_=[i,a];l&&typeof l!="string"&&(_=_.concat(l)),l&&typeof l=="string"&&(_=_.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(_=i.split("."));var m=yu(this.data,_);return m||!f||typeof l!="string"?m:P1(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var _=[i,a];l&&(_=_.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(_=i.split("."),u=a,a=_[1]),this.addNamespaces(a),Yv(this.data,_,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},_=[i,a];i.indexOf(".")>-1&&(_=i.split("."),u=l,l=a,a=_[1]),this.addNamespaces(a);var m=yu(this.data,_)||{};u?S1(m,l,d):m=fl(fl({},m),l),Yv(this.data,_,m),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?fl(fl({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(oo),C1={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function ng(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ng(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ng(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IE(e){var t=ME();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function ME(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var rg={},og=function(e){xc(n,e);var t=IE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return An(this,n),i=t.call(this),wc&&oo.call(Gr(i)),EE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Gr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Wn.create("translator"),i}return Nn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,_=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!zE(i,l,u);if(f&&!_){var m=i.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:i,namespaces:d};var h=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(h[0])>-1)&&(d=h.shift()),i=h.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(Tn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,_=this.extractFromKey(i[i.length-1],a),m=_.key,h=_.namespaces,g=h[h.length-1],x=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(x&&x.toLowerCase()==="cimode"){if(w){var C=a.nsSeparator||this.options.nsSeparator;return d?(y.res="".concat(g).concat(C).concat(m),y):"".concat(g).concat(C).concat(m)}return d?(y.res=m,y):m}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||m,P=y&&y.exactUsedKey||m,z=Object.prototype.toString.apply(b),M=["[object Number]","[object Function]","[object RegExp]"],F=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,W=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&W&&M.indexOf(z)<0&&!(typeof F=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,Bt(Bt({},a),{},{ns:h})):"key '".concat(m," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=T,y):T}if(f){var Q=z==="[object Array]",ae=Q?[]:{},he=Q?P:S;for(var ne in b)if(Object.prototype.hasOwnProperty.call(b,ne)){var de="".concat(he).concat(f).concat(ne);ae[ne]=this.translate(de,Bt(Bt({},a),{joinArrays:!1,ns:h})),ae[ne]===de&&(ae[ne]=b[ne])}b=ae}}else if(j&&typeof F=="string"&&z==="[object Array]")b=b.join(F),b&&(b=this.extendTranslation(b,i,a,l));else{var $=!1,ee=!1,I=a.count!==void 0&&typeof a.count!="string",re=n.hasDefaultValue(a),V=I?this.pluralResolver.getSuffix(x,a.count,a):"",O=a["defaultValue".concat(V)]||a.defaultValue;!this.isValidLookup(b)&&re&&($=!0,b=O),this.isValidLookup(b)||(ee=!0,b=m);var B=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,N=B&&ee?void 0:b,K=re&&O!==b&&this.options.updateMissing;if(ee||$||K){if(this.logger.log(K?"updateKey":"missingKey",x,g,m,K?O:b),f){var Y=this.resolve(m,Bt(Bt({},a),{},{keySeparator:!1}));Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var te=[],ue=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ue&&ue[0])for(var me=0;me<ue.length;me++)te.push(ue[me]);else this.options.saveMissingTo==="all"?te=this.languageUtils.toResolveHierarchy(a.lng||this.language):te.push(a.lng||this.language);var Je=function(Fe,Be,tt){var Oe=re&&tt!==b?tt:N;u.options.missingKeyHandler?u.options.missingKeyHandler(Fe,g,Be,Oe,K,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Fe,g,Be,Oe,K,a),u.emit("missingKey",Fe,g,Be,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&I?te.forEach(function(qe){u.pluralResolver.getSuffixes(qe,a).forEach(function(Fe){Je([qe],m+Fe,a["defaultValue".concat(Fe)]||O)})}):Je(te,m,O))}b=this.extendTranslation(b,i,a,y,l),ee&&b===m&&this.options.appendNamespaceToMissingKey&&(b="".concat(g,":").concat(m)),(ee||$)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(g,":").concat(m):m,$?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,Bt(Bt({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Bt(Bt({},l),{interpolation:Bt(Bt({},this.options.interpolation),l.interpolation)}));var _=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),m;if(_){var h=i.match(this.interpolator.nestingRegexp);m=h&&h.length}var g=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(g=Bt(Bt({},this.options.interpolation.defaultVariables),g)),i=this.interpolator.interpolate(i,g,l.lng||this.language,l),_){var x=i.match(this.interpolator.nestingRegexp),w=x&&x.length;m<w&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),P=0;P<b;P++)S[P]=arguments[P];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var C=l.postProcess||this.options.postProcess,y=typeof C=="string"?[C]:C;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=C1.handle(y,i,a,this.options&&this.options.postProcessPassResolved?Bt({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,_,m;return typeof i=="string"&&(i=[i]),i.forEach(function(h){if(!a.isValidLookup(u)){var g=a.extractFromKey(h,l),x=g.key;d=x;var w=g.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var C=l.count!==void 0&&typeof l.count!="string",y=C&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(P){a.isValidLookup(u)||(m=P,!rg["".concat(S[0],"-").concat(P)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(m)&&(rg["".concat(S[0],"-").concat(P)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(m,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(z){if(!a.isValidLookup(u)){_=z;var M=[x];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(M,x,z,P,l);else{var F;C&&(F=a.pluralResolver.getSuffix(z,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(C&&(M.push(x+F),y&&M.push(x+j)),b){var W="".concat(x).concat(a.options.contextSeparator).concat(l.context);M.push(W),C&&(M.push(W+F),y&&M.push(W+j))}}for(var T;T=M.pop();)a.isValidLookup(u)||(f=T,u=a.getResource(z,P,T,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:_,usedNS:m}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(oo);function Nd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ig=function(){function e(t){An(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Wn.create("languageUtils")}return Nn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Nd(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Nd(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Nd(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),DE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],FE={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},jE=["v1","v2","v3"],ag={zero:0,one:1,two:2,few:3,many:4,other:5};function $E(){var e={};return DE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:FE[t.fc]}})}),e}var UE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.languageUtils=t,this.options=n,this.logger=Wn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=$E()}return Nn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return ag[l]-ag[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!jE.includes(this.options.compatibilityJSON)}}]),e}();function sg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ZE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Wn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Nn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:LE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?si(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?si(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?si(r.nestingPrefix):r.nestingPrefixEscaped||si("$t("),this.nestingSuffix=r.nestingSuffix?si(r.nestingSuffix):r.nestingSuffixEscaped||si(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,_=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function m(C){return C.replace(/\$/g,"$$$$")}var h=function(y){if(y.indexOf(l.formatSeparator)<0){var b=eg(r,_,y);return l.alwaysFormat?l.format(b,void 0,i,bn(bn(bn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),P=S.shift().trim(),z=S.join(l.formatSeparator).trim();return l.format(eg(r,_,P),z,i,bn(bn(bn({},a),r),{},{interpolationkey:P}))};this.resetRegExp();var g=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,x=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(y){return m(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?m(l.escape(y)):m(y)}}];return w.forEach(function(C){for(f=0;u=C.regex.exec(n);){var y=u[1].trim();if(d=h(y),d===void 0)if(typeof g=="function"){var b=g(n,u,a);d=typeof b=="string"?b:""}else if(a&&a.hasOwnProperty(y))d="";else if(x){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=Jv(d));var S=C.safeValue(d);if(n=n.replace(u[0],S),x?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(g,x){var w=this.nestingOptionsSeparator;if(g.indexOf(w)<0)return g;var C=g.split(new RegExp("".concat(w,"[ ]*{"))),y="{".concat(C[1]);g=C[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),x&&(d=bn(bn({},x),d))}catch(P){return this.logger.warn("failed parsing options string in nesting for key ".concat(g),P),"".concat(g).concat(w).concat(y)}return delete d.defaultValue,g}for(;l=this.nestingRegexp.exec(n);){var _=[];d=bn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var m=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var h=l[1].split(this.formatSeparator).map(function(g){return g.trim()});l[1]=h.shift(),_=h,m=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=Jv(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),m&&(u=_.reduce(function(g,x){return i.format(g,x,a.lng,bn(bn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function lg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Or(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HE(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=SE(u),f=d[0],_=d.slice(1),m=_.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=m),m==="false"&&(n[f.trim()]=!1),m==="true"&&(n[f.trim()]=!0),isNaN(m)||(n[f.trim()]=parseInt(m,10))}})}}return{formatName:t,formatOptions:n}}function li(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var WE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Wn.create("formatter"),this.options=t,this.formats={number:li(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:li(function(n,r){var i=new Intl.NumberFormat(n,Or(Or({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:li(function(n,r){var i=new Intl.DateTimeFormat(n,Or({},r));return function(a){return i.format(a)}}),relativetime:li(function(n,r){var i=new Intl.RelativeTimeFormat(n,Or({},r));return function(a){return i.format(a,r.range||"day")}}),list:li(function(n,r){var i=new Intl.ListFormat(n,Or({},r));return function(a){return i.format(a)}})},this.init(t)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=li(r)}},{key:"format",value:function(n,r,i,a){var l=this,u=r.split(this.formatSeparator),d=u.reduce(function(f,_){var m=HE(_),h=m.formatName,g=m.formatOptions;if(l.formats[h]){var x=f;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},C=w.locale||w.lng||a.locale||a.lng||i;x=l.formats[h](f,C,Or(Or(Or({},g),a),w))}catch(y){l.logger.warn(y)}return x}else l.logger.warn("there was no format function for ".concat(h));return f},n);return d}}]),e}();function ug(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ug(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ug(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VE(e){var t=qE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function qE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function KE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var QE=function(e){xc(n,e);var t=VE(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return An(this,n),l=t.call(this),wc&&oo.call(Gr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Wn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Nn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},_={},m={},h={};return i.forEach(function(g){var x=!0;a.forEach(function(w){var C="".concat(g,"|").concat(w);!l.reload&&d.store.hasResourceBundle(g,w)?d.state[C]=2:d.state[C]<0||(d.state[C]===1?_[C]===void 0&&(_[C]=!0):(d.state[C]=1,x=!1,_[C]===void 0&&(_[C]=!0),f[C]===void 0&&(f[C]=!0),h[w]===void 0&&(h[w]=!0)))}),x||(m[g]=!0)}),(Object.keys(f).length||Object.keys(_).length)&&this.queue.push({pending:_,pendingCount:Object.keys(_).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(_),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var _={};this.queue.forEach(function(m){OE(m.loaded,[d],f),KE(m,i),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(function(h){_[h]||(_[h]={});var g=m.loaded[h];g.length&&g.forEach(function(x){_[h][x]===void 0&&(_[h][x]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",_),this.queue=this.queue.filter(function(m){return!m.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,_=arguments.length>5?arguments[5]:void 0;if(!i.length)return _(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:_});return}this.readingCalls++;var m=function(w,C){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(w&&C&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,_)},f);return}_(w,C)},h=this.backend[l].bind(this.backend);if(h.length===2){try{var g=h(i,a);g&&typeof g.then=="function"?g.then(function(x){return m(null,x)}).catch(m):m(null,g)}catch(x){m(x)}return}return h(i,a,m)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(_){l.loadOne(_)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(_,m){_&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),_),!_&&m&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),m),a.loaded(i,_,m)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},_=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var m=cg(cg({},f),{},{isUpdate:d}),h=this.backend.create.bind(this.backend);if(h.length<6)try{var g;h.length===5?g=h(i,a,l,u,m):g=h(i,a,l,u),g&&typeof g.then=="function"?g.then(function(x){return _(null,x)}).catch(_):_(null,g)}catch(x){_(x)}else h(i,a,l,u,_,m)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(oo);function dg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Tn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Tn(t[2])==="object"||Tn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function fg(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function pg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GE(e){var t=XE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function XE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pl(){}function JE(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var bu=function(e){xc(n,e);var t=GE(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(An(this,n),r=t.call(this),wc&&oo.call(Gr(r)),r.options=fg(i),r.services={},r.logger=Wn,r.modules={external:[]},JE(Gr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Ps(r,Gr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Nn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=dg();this.options=$n($n($n({},u),this.options),fg(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=$n($n({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Wn.init(d(this.modules.logger),this.options):Wn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=WE);var _=new ig(this.options);this.store=new BE(this.options.resources,this.options);var m=this.services;m.logger=Wn,m.resourceStore=this.store,m.languageUtils=_,m.pluralResolver=new UE(_,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(m.formatter=d(f),m.formatter.init(m,this.options),this.options.interpolation.format=m.formatter.format.bind(m.formatter)),m.interpolator=new ZE(this.options),m.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},m.backendConnector=new QE(d(this.modules.backend),m.resourceStore,m,this.options),m.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(m.languageDetector=d(this.modules.languageDetector),m.languageDetector.init&&m.languageDetector.init(m,this.options.detection,this.options)),this.modules.i18nFormat&&(m.i18nFormat=d(this.modules.i18nFormat),m.i18nFormat.init&&m.i18nFormat.init(this)),this.translator=new og(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=pl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var g=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];g.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var x=["addResource","addResources","addResourceBundle","removeResourceBundle"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var w=wa(),C=function(){var b=function(P,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),w.resolve(z),l(P,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?C():setTimeout(C,0),w}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pl,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],_=function(g){if(g){var x=a.services.languageUtils.toResolveHierarchy(g);x.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)_(d);else{var m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.forEach(function(h){return _(h)})}this.options.preload&&this.options.preload.forEach(function(h){return _(h)}),this.services.backendConnector.load(f,this.options.ns,function(h){!h&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(h)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=wa();return i||(i=this.languages),a||(a=this.options.ns),l||(l=pl),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&C1.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=wa();this.emit("languageChanging",i);var d=function(h){l.language=h,l.languages=l.services.languageUtils.toResolveHierarchy(h),l.resolvedLanguage=void 0,l.setResolvedLanguage(h)},f=function(h,g){g?(d(g),l.translator.changeLanguage(g),l.isLanguageChangingTo=void 0,l.emit("languageChanged",g),l.logger.log("languageChanged",g)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(h,function(){return l.t.apply(l,arguments)})},_=function(h){!i&&!h&&l.services.languageDetector&&(h=[]);var g=typeof h=="string"?h:l.services.languageUtils.getBestMatchFromCodes(h);g&&(l.language||d(g),l.translator.language||l.translator.changeLanguage(g),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(g)),l.loadResources(g,function(x){f(x,g)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?_(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(_):this.services.languageDetector.detect(_):_(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(_,m){var h;if(Tn(m)!=="object"){for(var g=arguments.length,x=new Array(g>2?g-2:0),w=2;w<g;w++)x[w-2]=arguments[w];h=u.options.overloadTranslationOptionHandler([_,m].concat(x))}else h=$n({},m);h.lng=h.lng||f.lng,h.lngs=h.lngs||f.lngs,h.ns=h.ns||f.ns,h.keyPrefix=h.keyPrefix||l||f.keyPrefix;var C=u.options.keySeparator||".",y;return h.keyPrefix&&Array.isArray(_)?y=_.map(function(b){return"".concat(h.keyPrefix).concat(C).concat(b)}):y=h.keyPrefix?"".concat(h.keyPrefix).concat(C).concat(_):_,u.t(y,h)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var _=function(g,x){var w=a.services.backendConnector.state["".concat(g,"|").concat(x)];return w===-1||w===2};if(l.precheck){var m=l.precheck(this,_);if(m!==void 0)return m}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||_(u,i)&&(!d||_(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=wa();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=wa();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new ig(dg());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pl,u=$n($n($n({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(_){d[_]=i[_]}),d.services=$n({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new og(d.services,d.options),d.translator.on("*",function(_){for(var m=arguments.length,h=new Array(m>1?m-1:0),g=1;g<m;g++)h[g-1]=arguments[g];d.emit.apply(d,[_].concat(h))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(oo);zn(bu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new bu(e,t)});var zt=bu.createInstance();zt.createInstance=bu.createInstance;zt.createInstance;zt.dir;zt.init;zt.loadResources;zt.reloadResources;var YE=zt.use;zt.changeLanguage;zt.getFixedT;var Bd=zt.t;zt.exists;zt.setDefaultNamespace;zt.hasLoadedNamespace;zt.loadNamespaces;zt.loadLanguages;const hg=()=>sn("div",{children:[ve("h1",{children:"Det skjedde en feil"}),ve("p",{children:ve("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),eO="2.25rem",tO="3.75rem",nO="540px",rO="#000000",oO="#0062ba",iO={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},aO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},sO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},lO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},uO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},cO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},dO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},fO={default:{value:"2.25rem",type:"paragraphSpacing"}},pO={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},hO={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},mO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},_O={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},vO={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},gO={disabled:{value:"30%",type:"opacity"}},yO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},bO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},xO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
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
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},wO={tokenSetOrder:iO,Felles:aO,Altinn:sO,component:lO,border_width:uO,space:cO,interactive_components:dO,paragraph_space:fO,font_size:pO,font_family:hO,breakpoints:mO,typography:_O,size:vO,opacity:gO,colors:yO,semantic:bO,brand:xO};var sp={},kO={get exports(){return sp},set exports(e){sp=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(ui,function(n){var r="1.9.3";function i(o){var s,c,p,v;for(c=1,p=arguments.length;c<p;c++){v=arguments[c];for(s in v)o[s]=v[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var p=c.call(arguments,2);return function(){return o.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var p,v,k,E;return E=function(){p=!1,v&&(k.apply(c,v),v=!1)},k=function(){p?v=arguments:(o.apply(c,arguments),setTimeout(E,s),p=!0)},k}function _(o,s,c){var p=s[1],v=s[0],k=p-v;return o===p&&c?o:((o-v)%k+k)%k+v}function m(){return!1}function h(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function g(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function x(o){return g(o).split(/\s+/)}function w(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function C(o,s,c){var p=[];for(var v in o)p.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(o[v]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,p){var v=s[p];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(s)),v})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function P(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function M(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var F=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-F));return F=s+c,window.setTimeout(o,c)}var W=window.requestAnimationFrame||M("RequestAnimationFrame")||j,T=window.cancelAnimationFrame||M("CancelAnimationFrame")||M("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function Q(o,s,c){if(c&&W===j)o.call(s);else return W.call(window,l(o,s))}function ae(o){o&&T.call(window,o)}var he={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:_,falseFn:m,formatNum:h,trim:g,splitWords:x,setOptions:w,getParamString:C,template:b,isArray:S,indexOf:P,emptyImageUrl:z,requestFn:W,cancelFn:T,requestAnimFrame:Q,cancelAnimFrame:ae};function ne(){}ne.extend=function(o){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=a(c);p.constructor=s,s.prototype=p;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return o.statics&&i(s,o.statics),o.includes&&(de(o.includes),i.apply(null,[p].concat(o.includes))),i(p,o),delete p.statics,delete p.includes,p.options&&(p.options=c.options?a(c.options):{},i(p.options,o.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,E=p._initHooks.length;k<E;k++)p._initHooks[k].call(this)}},s},ne.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},ne.mergeOptions=function(o){return i(this.prototype.options,o),this},ne.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function de(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var $={on:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var p in o)this._off(p,o[p],s);else{o=x(o);for(var v=arguments.length===1,k=0,E=o.length;k<E;k++)v?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var v={fn:s,ctx:c};p&&(v.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(v)}},_off:function(o,s,c){var p,v,k;if(this._events&&(p=this._events[o],!!p)){if(arguments.length===1){if(this._firingCount)for(v=0,k=p.length;v<k;v++)p[v].fn=m;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var E=this._listens(o,s,c);if(E!==!1){var A=p[E];this._firingCount&&(A.fn=m,this._events[o]=p=p.slice()),p.splice(E,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var p=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[o];if(v){this._firingCount=this._firingCount+1||1;for(var k=0,E=v.length;k<E;k++){var A=v[k],D=A.fn;A.once&&this.off(o,D,A.ctx),D.call(A.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(o,s,c,p){typeof o!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(p=!!s,v=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,v,c)!==!1)return!0;if(p){for(var E in this._eventParents)if(this._eventParents[E].listens(o,s,c,p))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var p=this._events[o]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var v=0,k=p.length;v<k;v++)if(p[v].fn===s&&p[v].ctx===c)return v;return!1},once:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s,!0);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};$.addEventListener=$.on,$.removeEventListener=$.clearAllEventListeners=$.off,$.addOneTimeEventListener=$.once,$.fireEvent=$.fire,$.hasEventListeners=$.listens;var ee=ne.extend($);function I(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var re=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};I.prototype={clone:function(){return new I(this.x,this.y)},add:function(o){return this.clone()._add(V(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(V(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new I(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new I(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=re(this.x),this.y=re(this.y),this},distanceTo:function(o){o=V(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=V(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=V(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+h(this.x)+", "+h(this.y)+")"}};function V(o,s,c){return o instanceof I?o:S(o)?new I(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new I(o.x,o.y):new I(o,s,c)}function O(o,s){if(o)for(var c=s?[o,s]:o,p=0,v=c.length;p<v;p++)this.extend(c[p])}O.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof I||typeof o[0]=="number"||"x"in o)s=c=V(o);else if(o=B(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return V((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return V(this.min.x,this.max.y)},getTopRight:function(){return V(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof I?o=V(o):o=B(o),o instanceof O?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=B(o);var s=this.min,c=this.max,p=o.min,v=o.max,k=v.x>=s.x&&p.x<=c.x,E=v.y>=s.y&&p.y<=c.y;return k&&E},overlaps:function(o){o=B(o);var s=this.min,c=this.max,p=o.min,v=o.max,k=v.x>s.x&&p.x<c.x,E=v.y>s.y&&p.y<c.y;return k&&E},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*o,v=Math.abs(s.y-c.y)*o;return B(V(s.x-p,s.y-v),V(c.x+p,c.y+v))},equals:function(o){return o?(o=B(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function B(o,s){return!o||o instanceof O?o:new O(o,s)}function N(o,s){if(o)for(var c=s?[o,s]:o,p=0,v=c.length;p<v;p++)this.extend(c[p])}N.prototype={extend:function(o){var s=this._southWest,c=this._northEast,p,v;if(o instanceof Y)p=o,v=o;else if(o instanceof N){if(p=o._southWest,v=o._northEast,!p||!v)return this}else return o?this.extend(te(o)||K(o)):this;return!s&&!c?(this._southWest=new Y(p.lat,p.lng),this._northEast=new Y(v.lat,v.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*o,v=Math.abs(s.lng-c.lng)*o;return new N(new Y(s.lat-p,s.lng-v),new Y(c.lat+p,c.lng+v))},getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof Y||"lat"in o?o=te(o):o=K(o);var s=this._southWest,c=this._northEast,p,v;return o instanceof N?(p=o.getSouthWest(),v=o.getNorthEast()):p=v=o,p.lat>=s.lat&&v.lat<=c.lat&&p.lng>=s.lng&&v.lng<=c.lng},intersects:function(o){o=K(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>=s.lat&&p.lat<=c.lat,E=v.lng>=s.lng&&p.lng<=c.lng;return k&&E},overlaps:function(o){o=K(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>s.lat&&p.lat<c.lat,E=v.lng>s.lng&&p.lng<c.lng;return k&&E},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=K(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function K(o,s){return o instanceof N?o:new N(o,s)}function Y(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}Y.prototype={equals:function(o,s){if(!o)return!1;o=te(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+h(this.lat,o)+", "+h(this.lng,o)+")"},distanceTo:function(o){return me.distance(this,te(o))},wrap:function(){return me.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return K([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};function te(o,s,c){return o instanceof Y?o:S(o)&&typeof o[0]!="object"?o.length===3?new Y(o[0],o[1],o[2]):o.length===2?new Y(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new Y(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new Y(o,s,c)}var ue={latLngToPoint:function(o,s){var c=this.projection.project(o),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(o,s){var c=this.scale(s),p=this.transformation.untransform(o,c);return this.projection.unproject(p)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),p=this.transformation.transform(s.min,c),v=this.transformation.transform(s.max,c);return new O(p,v)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?_(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?_(o.lat,this.wrapLat,!0):o.lat,p=o.alt;return new Y(c,s,p)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,v=s.lng-c.lng;if(p===0&&v===0)return o;var k=o.getSouthWest(),E=o.getNorthEast(),A=new Y(k.lat-p,k.lng-v),D=new Y(E.lat-p,E.lng-v);return new N(A,D)}},me=i({},ue,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,p=o.lat*c,v=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),E=Math.sin((s.lng-o.lng)*c/2),A=k*k+Math.cos(p)*Math.cos(v)*E*E,D=2*Math.atan2(Math.sqrt(A),Math.sqrt(1-A));return this.R*D}}),Je=6378137,qe={R:Je,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,o.lat),-c),v=Math.sin(p*s);return new I(this.R*o.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(o){var s=180/Math.PI;return new Y((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Je*Math.PI;return new O([-o,-o],[o,o])}()};function Fe(o,s,c,p){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=p}Fe.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new I((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Be(o,s,c,p){return new Fe(o,s,c,p)}var tt=i({},me,{code:"EPSG:3857",projection:qe,transformation:function(){var o=.5/(Math.PI*qe.R);return Be(o,.5,-o,.5)}()}),Oe=i({},tt,{code:"EPSG:900913"});function qt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function jt(o,s){var c="",p,v,k,E,A,D;for(p=0,k=o.length;p<k;p++){for(A=o[p],v=0,E=A.length;v<E;v++)D=A[v],c+=(v?"L":"M")+D.x+" "+D.y;c+=s?ce.svg?"z":"x":""}return c||"M0 0"}var ze=document.documentElement.style,Pt="ActiveXObject"in window,Bn=Pt&&!document.addEventListener,$t="msLaunchUri"in navigator&&!("documentMode"in document),Jn=In("webkit"),At=In("android"),kr=In("android 2")||In("android 3"),U=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),H=At&&In("Google")&&U<537&&!("AudioNode"in window),G=!!window.opera,se=!$t&&In("chrome"),oe=In("gecko")&&!Jn&&!G&&!Pt,_e=!se&&In("safari"),fe=In("phantom"),ye="OTransition"in ze,pe=navigator.platform.indexOf("Win")===0,ot=Pt&&"transition"in ze,xe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!kr,je="MozPerspective"in ze,Nt=!window.L_DISABLE_3D&&(ot||xe||je)&&!ye&&!fe,vt=typeof orientation<"u"||In("mobile"),fo=vt&&Jn,Qo=vt&&xe,po=!window.PointerEvent&&window.MSPointerEvent,Yn=!!(window.PointerEvent||po),Go="ontouchstart"in window||!!window.TouchEvent,pt=!window.L_NO_TOUCH&&(Go||Yn),nn=vt&&G,er=vt&&oe,Xo=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",m,s),window.removeEventListener("testPassiveEventSupport",m,s)}catch{}return o}(),Tc=function(){return!!document.createElement("canvas").getContext}(),Ji=!!(document.createElementNS&&qt("svg").createSVGRect),_n=!!Ji&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Yi=!Ji&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Ts=navigator.platform.indexOf("Mac")===0,Lc=navigator.platform.indexOf("Linux")===0;function In(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var ce={ie:Pt,ielt9:Bn,edge:$t,webkit:Jn,android:At,android23:kr,androidStock:H,opera:G,chrome:se,gecko:oe,safari:_e,phantom:fe,opera12:ye,win:pe,ie3d:ot,webkit3d:xe,gecko3d:je,any3d:Nt,mobile:vt,mobileWebkit:fo,mobileWebkit3d:Qo,msPointer:po,pointer:Yn,touch:pt,touchNative:Go,mobileOpera:nn,mobileGecko:er,retina:Xo,passiveEvents:Xi,canvas:Tc,svg:Ji,vml:Yi,inlineSvg:_n,mac:Ts,linux:Lc},cm=ce.msPointer?"MSPointerDown":"pointerdown",dm=ce.msPointer?"MSPointerMove":"pointermove",fm=ce.msPointer?"MSPointerUp":"pointerup",pm=ce.msPointer?"MSPointerCancel":"pointercancel",Rc={touchstart:cm,touchmove:dm,touchend:fm,touchcancel:pm},hm={touchstart:Zx,touchmove:Ls,touchend:Ls,touchcancel:Ls},Jo={},mm=!1;function Dx(o,s,c){return s==="touchstart"&&Ux(),hm[s]?(c=hm[s].bind(this,c),o.addEventListener(Rc[s],c,!1),c):(console.warn("wrong event specified:",s),m)}function Fx(o,s,c){if(!Rc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Rc[s],c,!1)}function jx(o){Jo[o.pointerId]=o}function $x(o){Jo[o.pointerId]&&(Jo[o.pointerId]=o)}function _m(o){delete Jo[o.pointerId]}function Ux(){mm||(document.addEventListener(cm,jx,!0),document.addEventListener(dm,$x,!0),document.addEventListener(fm,_m,!0),document.addEventListener(pm,_m,!0),mm=!0)}function Ls(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Jo)s.touches.push(Jo[c]);s.changedTouches=[s],o(s)}}function Zx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&gt(s),Ls(o,s)}function Hx(o){var s={},c,p;for(p in o)c=o[p],s[p]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Wx=200;function Vx(o,s){o.addEventListener("dblclick",s);var c=0,p;function v(k){if(k.detail!==1){p=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var E=xm(k);if(!(E.some(function(D){return D instanceof HTMLLabelElement&&D.attributes.for})&&!E.some(function(D){return D instanceof HTMLInputElement||D instanceof HTMLSelectElement}))){var A=Date.now();A-c<=Wx?(p++,p===2&&s(Hx(k))):p=1,c=A}}}return o.addEventListener("click",v),{dblclick:s,simDblclick:v}}function qx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var zc=As(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ea=As(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),vm=ea==="webkitTransition"||ea==="OTransition"?ea+"End":"transitionend";function gm(o){return typeof o=="string"?document.getElementById(o):o}function ta(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(o,null);c=p?p[s]:null}return c==="auto"?null:c}function Re(o,s,c){var p=document.createElement(o);return p.className=s||"",c&&c.appendChild(p),p}function Ke(o){var s=o.parentNode;s&&s.removeChild(o)}function Rs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Yo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function ei(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Ac(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=zs(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function we(o,s){if(o.classList!==void 0)for(var c=x(s),p=0,v=c.length;p<v;p++)o.classList.add(c[p]);else if(!Ac(o,s)){var k=zs(o);Nc(o,(k?k+" ":"")+s)}}function nt(o,s){o.classList!==void 0?o.classList.remove(s):Nc(o,g((" "+zs(o)+" ").replace(" "+s+" "," ")))}function Nc(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function zs(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function rn(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&Kx(o,s)}function Kx(o,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+p+"(opacity="+s+")"}function As(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function ho(o,s,c){var p=s||new I(0,0);o.style[zc]=(ce.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function it(o,s){o._leaflet_pos=s,ce.any3d?ho(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function mo(o){return o._leaflet_pos||new I(0,0)}var na,ra,Bc;if("onselectstart"in document)na=function(){be(window,"selectstart",gt)},ra=function(){$e(window,"selectstart",gt)};else{var oa=As(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);na=function(){if(oa){var o=document.documentElement.style;Bc=o[oa],o[oa]="none"}},ra=function(){oa&&(document.documentElement.style[oa]=Bc,Bc=void 0)}}function Ic(){be(window,"dragstart",gt)}function Mc(){$e(window,"dragstart",gt)}var Ns,Dc;function Fc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Bs(),Ns=o,Dc=o.style.outline,o.style.outline="none",be(window,"keydown",Bs))}function Bs(){Ns&&(Ns.style.outline=Dc,Ns=void 0,Dc=void 0,$e(window,"keydown",Bs))}function ym(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function jc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var Qx={__proto__:null,TRANSFORM:zc,TRANSITION:ea,TRANSITION_END:vm,get:gm,getStyle:ta,create:Re,remove:Ke,empty:Rs,toFront:Yo,toBack:ei,hasClass:Ac,addClass:we,removeClass:nt,setClass:Nc,getClass:zs,setOpacity:rn,testProp:As,setTransform:ho,setPosition:it,getPosition:mo,get disableTextSelection(){return na},get enableTextSelection(){return ra},disableImageDrag:Ic,enableImageDrag:Mc,preventOutline:Fc,restoreOutline:Bs,getSizedParentNode:ym,getScale:jc};function be(o,s,c,p){if(s&&typeof s=="object")for(var v in s)Uc(o,v,s[v],c);else{s=x(s);for(var k=0,E=s.length;k<E;k++)Uc(o,s[k],c,p)}return this}var Mn="_leaflet_events";function $e(o,s,c,p){if(arguments.length===1)bm(o),delete o[Mn];else if(s&&typeof s=="object")for(var v in s)Zc(o,v,s[v],c);else if(s=x(s),arguments.length===2)bm(o,function(A){return P(s,A)!==-1});else for(var k=0,E=s.length;k<E;k++)Zc(o,s[k],c,p);return this}function bm(o,s){for(var c in o[Mn]){var p=c.split(/\d/)[0];(!s||s(p))&&Zc(o,p,null,null,c)}}var $c={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Uc(o,s,c,p){var v=s+d(c)+(p?"_"+d(p):"");if(o[Mn]&&o[Mn][v])return this;var k=function(A){return c.call(p||o,A||window.event)},E=k;!ce.touchNative&&ce.pointer&&s.indexOf("touch")===0?k=Dx(o,s,k):ce.touch&&s==="dblclick"?k=Vx(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener($c[s]||s,k,ce.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(A){A=A||window.event,Wc(o,A)&&E(A)},o.addEventListener($c[s],k,!1)):o.addEventListener(s,E,!1):o.attachEvent("on"+s,k),o[Mn]=o[Mn]||{},o[Mn][v]=k}function Zc(o,s,c,p,v){v=v||s+d(c)+(p?"_"+d(p):"");var k=o[Mn]&&o[Mn][v];if(!k)return this;!ce.touchNative&&ce.pointer&&s.indexOf("touch")===0?Fx(o,s,k):ce.touch&&s==="dblclick"?qx(o,k):"removeEventListener"in o?o.removeEventListener($c[s]||s,k,!1):o.detachEvent("on"+s,k),o[Mn][v]=null}function _o(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Hc(o){return Uc(o,"wheel",_o),this}function ia(o){return be(o,"mousedown touchstart dblclick contextmenu",_o),o._leaflet_disable_click=!0,this}function gt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function vo(o){return gt(o),_o(o),this}function xm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function wm(o,s){if(!s)return new I(o.clientX,o.clientY);var c=jc(s),p=c.boundingClientRect;return new I((o.clientX-p.left)/c.x-s.clientLeft,(o.clientY-p.top)/c.y-s.clientTop)}var Gx=ce.linux&&ce.chrome?window.devicePixelRatio:ce.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function km(o){return ce.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/Gx:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Wc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var Xx={__proto__:null,on:be,off:$e,stopPropagation:_o,disableScrollPropagation:Hc,disableClickPropagation:ia,preventDefault:gt,stop:vo,getPropagationPath:xm,getMousePosition:wm,getWheelDelta:km,isExternalTarget:Wc,addListener:be,removeListener:$e},Sm=ee.extend({run:function(o,s,c,p){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=mo(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Q(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),it(this._el,c),this.fire("step")},_complete:function(){ae(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Ee=ee.extend({options:{crs:tt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(te(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ea&&ce.any3d&&!ce.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),be(this._proxy,vm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter(te(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(ce.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(ce.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var p=this.getZoomScale(s),v=this.getSize().divideBy(2),k=o instanceof I?o:this.latLngToContainerPoint(o),E=k.subtract(v).multiplyBy(1-1/p),A=this.containerPointToLatLng(v.add(E));return this.setView(A,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():K(o);var c=V(s.paddingTopLeft||s.padding||[0,0]),p=V(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(o,!1,c.add(p));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:o.getCenter(),zoom:v};var k=p.subtract(c).divideBy(2),E=this.project(o.getSouthWest(),v),A=this.project(o.getNorthEast(),v),D=this.unproject(E.add(A).divideBy(2).add(k),v);return{center:D,zoom:v}},fitBounds:function(o,s){if(o=K(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=V(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Sm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){we(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!ce.any3d)return this.setView(o,s,c);this._stop();var p=this.project(this.getCenter()),v=this.project(o),k=this.getSize(),E=this._zoom;o=te(o),s=s===void 0?E:s;var A=Math.max(k.x,k.y),D=A*this.getZoomScale(E,s),X=v.distanceTo(p)||1,ie=1.42,ge=ie*ie;function Se(at){var Ks=at?-1:1,Fw=at?D:A,jw=D*D-A*A+Ks*ge*ge*X*X,$w=2*Fw*ge*X,nd=jw/$w,o_=Math.sqrt(nd*nd+1)-nd,Uw=o_<1e-9?-18:Math.log(o_);return Uw}function an(at){return(Math.exp(at)-Math.exp(-at))/2}function yo(at){return(Math.exp(at)+Math.exp(-at))/2}function qs(at){return an(at)/yo(at)}var Cr=Se(0);function td(at){return A*(yo(Cr)/yo(Cr+ie*at))}function Bw(at){return A*(yo(Cr)*qs(Cr+ie*at)-an(Cr))/ge}function Iw(at){return 1-Math.pow(1-at,1.5)}var Mw=Date.now(),n_=(Se(1)-Cr)/ie,Dw=c.duration?1e3*c.duration:1e3*n_*.8;function r_(){var at=(Date.now()-Mw)/Dw,Ks=Iw(at)*n_;at<=1?(this._flyToFrame=Q(r_,this),this._move(this.unproject(p.add(v.subtract(p).multiplyBy(Bw(Ks)/X)),E),this.getScaleZoom(A/td(Ks),E),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),r_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=K(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,K(o));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=V(s.paddingTopLeft||s.padding||[0,0]),p=V(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),k=this.project(o),E=this.getPixelBounds(),A=B([E.min.add(c),E.max.subtract(p)]),D=A.getSize();if(!A.contains(k)){this._enforcingBounds=!0;var X=k.subtract(A.getCenter()),ie=A.extend(k).getSize().subtract(D);v.x+=X.x<0?-ie.x:ie.x,v.y+=X.y<0?-ie.y:ie.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),v=c.divideBy(2).round(),k=p.subtract(v);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,p=new Y(s,c),v=p.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var E=this.getBoundsZoom(v);this.setView(p,k.maxZoom?Math.min(E,k.maxZoom):E)}var A={latlng:p,bounds:v,timestamp:o.timestamp};for(var D in o.coords)typeof o.coords[D]=="number"&&(A[D]=o.coords[D]);this.fire("locationfound",A)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ke(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ae(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Ke(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),p=Re("div",c,s||this._mapPane);return o&&(this._panes[o]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new N(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=K(o),c=V(c||[0,0]);var p=this.getZoom()||0,v=this.getMinZoom(),k=this.getMaxZoom(),E=o.getNorthWest(),A=o.getSouthEast(),D=this.getSize().subtract(c),X=B(this.project(A,p),this.project(E,p)).getSize(),ie=ce.any3d?this.options.zoomSnap:1,ge=D.x/X.x,Se=D.y/X.y,an=s?Math.max(ge,Se):Math.min(ge,Se);return p=this.getScaleZoom(an,p),ie&&(p=Math.round(p/(ie/100))*(ie/100),p=s?Math.ceil(p/ie)*ie:Math.floor(p/ie)*ie),Math.max(v,Math.min(k,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new I(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(o*c.scale(s));return isNaN(p)?1/0:p},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(te(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(V(o),s)},layerPointToLatLng:function(o){var s=V(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project(te(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(te(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(K(o))},distance:function(o,s){return this.options.crs.distance(te(o),te(s))},containerPointToLayerPoint:function(o){return V(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return V(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(V(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(te(o)))},mouseEventToContainerPoint:function(o){return wm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=gm(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");be(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&ce.any3d,we(o,"leaflet-container"+(ce.touch?" leaflet-touch":"")+(ce.retina?" leaflet-retina":"")+(ce.ielt9?" leaflet-oldie":"")+(ce.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=ta(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),it(this._mapPane,new I(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(we(o.markerPane,"leaflet-zoom-hide"),we(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){it(this._mapPane,new I(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,c)._move(o,s)._moveEnd(v),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,p){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),p?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ae(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){it(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?$e:be;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),ce.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ae(this._resizeRequest),this._resizeRequest=Q(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],p,v=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,E=!1;k;){if(p=this._targets[d(k)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){E=!0;break}if(p&&p.listens(s,!0)&&(v&&!Wc(k,o)||(c.push(p),v))||k===this._container)break;k=k.parentNode}return!c.length&&!E&&!v&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Fc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var p=i({},o);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var v=this._findEventTargets(o,s);if(c){for(var k=[],E=0;E<c.length;E++)c[E].listens(s,!0)&&k.push(c[E]);v=k.concat(v)}if(v.length){s==="contextmenu"&&gt(o);var A=v[0],D={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var X=A.getLatLng&&(!A._radius||A._radius<=10);D.containerPoint=X?this.latLngToContainerPoint(A.getLatLng()):this.mouseEventToContainerPoint(o),D.layerPoint=this.containerPointToLayerPoint(D.containerPoint),D.latlng=X?A.getLatLng():this.layerPointToLatLng(D.layerPoint)}for(E=0;E<v.length;E++)if(v[E].fire(s,D,!0),D.originalEvent._stopped||v[E].options.bubblingMouseEvents===!1&&P(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return mo(this._mapPane)||new I(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return B([this.project(o.getSouthWest(),s)._subtract(p),this.project(o.getNorthWest(),s)._subtract(p),this.project(o.getSouthEast(),s)._subtract(p),this.project(o.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var p=this.project(o,s),v=this.getSize().divideBy(2),k=new O(p.subtract(v),p.add(v)),E=this._getBoundsOffset(k,c,s);return Math.abs(E.x)<=1&&Math.abs(E.y)<=1?o:this.unproject(p.add(E),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),p=new O(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(o,s,c){var p=B(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),v=p.min.subtract(o.min),k=p.max.subtract(o.max),E=this._rebound(v.x,-k.x),A=this._rebound(v.y,-k.y);return new I(E,A)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),p=ce.any3d?this.options.zoomSnap:1;return p&&(o=Math.round(o/p)*p),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){nt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Re("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=zc,p=this._proxy.style[c];ho(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ke(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();ho(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),v=this._getCenterOffset(o)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(v)?!1:(Q(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,we(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&nt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Jx(o,s){return new Ee(o,s)}var vn=ne.extend({options:{position:"topright"},initialize:function(o){w(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),p=o._controlCorners[c];return we(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ke(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),aa=function(o){return new vn(o)};Ee.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Re("div",s+"control-container",this._container);function p(v,k){var E=s+v+" "+s+k;o[v+k]=Re("div",E,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Ke(this._controlCorners[o]);Ke(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Pm=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(o,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var p in o)this._addLayer(o[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return vn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){we(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(we(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):nt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return nt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Re("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),ia(s),Hc(s);var p=this._section=Re("section",o+"-list");c&&(this._map.on("click",this.collapse,this),be(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Re("a",o+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),be(v,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){gt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Re("div",o+"-base",p),this._separator=Re("div",o+"-separator",p),this._overlaysList=Re("div",o+"-overlays",p),s.appendChild(p)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(p,v){return this.options.sortFunction(p.layer,v.layer,p.name,v.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Rs(this._baseLayersList),Rs(this._overlaysList),this._layerControlInputs=[];var o,s,c,p,v=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,o=o||!p.overlay,v+=p.overlay?0:1;return this.options.hideSingleBase&&(o=o&&v>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),p;o.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(p),p.layerId=d(o.layer),be(p,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(p),k.appendChild(v);var E=o.overlay?this._overlaysList:this._baseLayersList;return E.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,p=[],v=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||v.push(c);for(k=0;k<v.length;k++)this._map.hasLayer(v[k])&&this._map.removeLayer(v[k]);for(k=0;k<p.length;k++)this._map.hasLayer(p[k])||this._map.addLayer(p[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,p=this._map.getZoom(),v=o.length-1;v>=0;v--)s=o[v],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;be(o,"click",gt),this.expand(),setTimeout(function(){$e(o,"click",gt)})}}),Yx=function(o,s,c){return new Pm(o,s,c)},Vc=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Re("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,p,v){var k=Re("a",c,p);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),ia(k),be(k,"click",vo),be(k,"click",v,this),be(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";nt(this._zoomInButton,s),nt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(we(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(we(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ee.mergeOptions({zoomControl:!0}),Ee.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Vc,this.addControl(this.zoomControl))});var ew=function(o){return new Vc(o)},Cm=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Re("div",s),p=this.options;return this._addScales(p,s+"-line",c),o.on(p.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Re("div",s,c)),o.imperial&&(this._iScale=Re("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,p,v;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),tw=function(o){return new Cm(o)},nw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',qc=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(ce.inlineSvg?nw+" ":"")+"Leaflet</a>"},initialize:function(o){w(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Re("div","leaflet-control-attribution"),ia(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Ee.mergeOptions({attributionControl:!0}),Ee.addInitHook(function(){this.options.attributionControl&&new qc().addTo(this)});var rw=function(o){return new qc(o)};vn.Layers=Pm,vn.Zoom=Vc,vn.Scale=Cm,vn.Attribution=qc,aa.layers=Yx,aa.zoom=ew,aa.scale=tw,aa.attribution=rw;var Dn=ne.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Dn.addTo=function(o,s){return o.addHandler(s,this),this};var ow={Events:$},Em=ce.touch?"touchstart mousedown":"mousedown",Sr=ee.extend({options:{clickTolerance:3},initialize:function(o,s,c,p){w(this,p),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(be(this._dragStartTarget,Em,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Sr._dragging===this&&this.finishDrag(!0),$e(this._dragStartTarget,Em,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Ac(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Sr._dragging===this&&this.finishDrag();return}if(!(Sr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Sr._dragging=this,this._preventOutline&&Fc(this._element),Ic(),na(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=ym(this._element);this._startPoint=new I(s.clientX,s.clientY),this._startPos=mo(this._element),this._parentScale=jc(c);var p=o.type==="mousedown";be(document,p?"mousemove":"touchmove",this._onMove,this),be(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new I(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,gt(o),this._moved||(this.fire("dragstart"),this._moved=!0,we(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),we(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),it(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){nt(document.body,"leaflet-dragging"),this._lastTarget&&(nt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),$e(document,"mousemove touchmove",this._onMove,this),$e(document,"mouseup touchend touchcancel",this._onUp,this),Mc(),ra(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Sr._dragging=!1}});function Om(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=sw(o,c),o=aw(o,c),o}function Tm(o,s,c){return Math.sqrt(sa(o,s,c,!0))}function iw(o,s,c){return sa(o,s,c)}function aw(o,s){var c=o.length,p=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new p(c);v[0]=v[c-1]=1,Kc(o,v,s,0,c-1);var k,E=[];for(k=0;k<c;k++)v[k]&&E.push(o[k]);return E}function Kc(o,s,c,p,v){var k=0,E,A,D;for(A=p+1;A<=v-1;A++)D=sa(o[A],o[p],o[v],!0),D>k&&(E=A,k=D);k>c&&(s[E]=1,Kc(o,s,c,p,E),Kc(o,s,c,E,v))}function sw(o,s){for(var c=[o[0]],p=1,v=0,k=o.length;p<k;p++)lw(o[p],o[v])>s&&(c.push(o[p]),v=p);return v<k-1&&c.push(o[k-1]),c}var Lm;function Rm(o,s,c,p,v){var k=p?Lm:go(o,c),E=go(s,c),A,D,X;for(Lm=E;;){if(!(k|E))return[o,s];if(k&E)return!1;A=k||E,D=Is(o,s,A,c,v),X=go(D,c),A===k?(o=D,k=X):(s=D,E=X)}}function Is(o,s,c,p,v){var k=s.x-o.x,E=s.y-o.y,A=p.min,D=p.max,X,ie;return c&8?(X=o.x+k*(D.y-o.y)/E,ie=D.y):c&4?(X=o.x+k*(A.y-o.y)/E,ie=A.y):c&2?(X=D.x,ie=o.y+E*(D.x-o.x)/k):c&1&&(X=A.x,ie=o.y+E*(A.x-o.x)/k),new I(X,ie,v)}function go(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function lw(o,s){var c=s.x-o.x,p=s.y-o.y;return c*c+p*p}function sa(o,s,c,p){var v=s.x,k=s.y,E=c.x-v,A=c.y-k,D=E*E+A*A,X;return D>0&&(X=((o.x-v)*E+(o.y-k)*A)/D,X>1?(v=c.x,k=c.y):X>0&&(v+=E*X,k+=A*X)),E=o.x-v,A=o.y-k,p?E*E+A*A:new I(v,k)}function on(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function zm(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),on(o)}function Am(o,s){var c,p,v,k,E,A,D,X;if(!o||o.length===0)throw new Error("latlngs not passed");on(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ie=[];for(var ge in o)ie.push(s.project(te(o[ge])));var Se=ie.length;for(c=0,p=0;c<Se-1;c++)p+=ie[c].distanceTo(ie[c+1])/2;if(p===0)X=ie[0];else for(c=0,k=0;c<Se-1;c++)if(E=ie[c],A=ie[c+1],v=E.distanceTo(A),k+=v,k>p){D=(k-p)/v,X=[A.x-D*(A.x-E.x),A.y-D*(A.y-E.y)];break}return s.unproject(V(X))}var uw={__proto__:null,simplify:Om,pointToSegmentDistance:Tm,closestPointOnSegment:iw,clipSegment:Rm,_getEdgeIntersection:Is,_getBitCode:go,_sqClosestPointOnSegment:sa,isFlat:on,_flat:zm,polylineCenter:Am};function Nm(o,s,c){var p,v=[1,4,2,8],k,E,A,D,X,ie,ge,Se;for(k=0,ie=o.length;k<ie;k++)o[k]._code=go(o[k],s);for(A=0;A<4;A++){for(ge=v[A],p=[],k=0,ie=o.length,E=ie-1;k<ie;E=k++)D=o[k],X=o[E],D._code&ge?X._code&ge||(Se=Is(X,D,ge,s,c),Se._code=go(Se,s),p.push(Se)):(X._code&ge&&(Se=Is(X,D,ge,s,c),Se._code=go(Se,s),p.push(Se)),p.push(D));o=p}return o}function Bm(o,s){var c,p,v,k,E,A,D,X,ie;if(!o||o.length===0)throw new Error("latlngs not passed");on(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ge=[];for(var Se in o)ge.push(s.project(te(o[Se])));var an=ge.length;for(A=D=X=0,c=0,p=an-1;c<an;p=c++)v=ge[c],k=ge[p],E=v.y*k.x-k.y*v.x,D+=(v.x+k.x)*E,X+=(v.y+k.y)*E,A+=E*3;return A===0?ie=ge[0]:ie=[D/A,X/A],s.unproject(V(ie))}var cw={__proto__:null,clipPolygon:Nm,polygonCenter:Bm},Qc={project:function(o){return new I(o.lng,o.lat)},unproject:function(o){return new Y(o.y,o.x)},bounds:new O([-180,-90],[180,90])},Gc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,p=o.lat*s,v=this.R_MINOR/c,k=Math.sqrt(1-v*v),E=k*Math.sin(p),A=Math.tan(Math.PI/4-p/2)/Math.pow((1-E)/(1+E),k/2);return p=-c*Math.log(Math.max(A,1e-10)),new I(o.lng*s*c,p)},unproject:function(o){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,v=Math.sqrt(1-p*p),k=Math.exp(-o.y/c),E=Math.PI/2-2*Math.atan(k),A=0,D=.1,X;A<15&&Math.abs(D)>1e-7;A++)X=v*Math.sin(E),X=Math.pow((1-X)/(1+X),v/2),D=Math.PI/2-2*Math.atan(k*X)-E,E+=D;return new Y(E*s,o.x*s/c)}},dw={__proto__:null,LonLat:Qc,Mercator:Gc,SphericalMercator:qe},fw=i({},me,{code:"EPSG:3395",projection:Gc,transformation:function(){var o=.5/(Math.PI*Gc.R);return Be(o,.5,-o,.5)}()}),Im=i({},me,{code:"EPSG:4326",projection:Qc,transformation:Be(1/180,1,-1/180,.5)}),pw=i({},ue,{projection:Qc,transformation:Be(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,p=s.lat-o.lat;return Math.sqrt(c*c+p*p)},infinite:!0});ue.Earth=me,ue.EPSG3395=fw,ue.EPSG3857=tt,ue.EPSG900913=Oe,ue.EPSG4326=Im,ue.Simple=pw;var gn=ee.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ee.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var v=this._zoomBoundLayers[p].options;o=v.minZoom===void 0?o:Math.min(o,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ti=gn.extend({initialize:function(o,s){w(this,s),this._layers={};var c,p;if(o)for(c=0,p=o.length;c<p;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[o]&&p[o].apply(p,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),hw=function(o,s){return new ti(o,s)},tr=ti.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),ti.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),ti.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new N;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),mw=function(o,s){return new tr(o,s)},ni=ne.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){w(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(o,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var v=V(p),k=V(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),v&&(o.style.width=v.x+"px",o.style.height=v.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return ce.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function _w(o){return new ni(o)}var la=ni.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof la.imagePath!="string"&&(la.imagePath=this._detectIconPath()),(this.options.imagePath||la.imagePath)+ni.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,p,v){var k=p.exec(c);return k&&k[v]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Re("div","leaflet-default-icon-path",document.body),s=ta(o,"background-image")||ta(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Mm=Dn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Sr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),we(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&nt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,k=mo(s._icon),E=c.getPixelBounds(),A=c.getPixelOrigin(),D=B(E.min._subtract(A).add(v),E.max._subtract(A).subtract(v));if(!D.contains(k)){var X=V((Math.max(D.max.x,k.x)-D.max.x)/(E.max.x-D.max.x)-(Math.min(D.min.x,k.x)-D.min.x)/(E.min.x-D.min.x),(Math.max(D.max.y,k.y)-D.max.y)/(E.max.y-D.max.y)-(Math.min(D.min.y,k.y)-D.min.y)/(E.min.y-D.min.y)).multiplyBy(p);c.panBy(X,{animate:!1}),this._draggable._newPos._add(X),this._draggable._startPos._add(X),it(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=Q(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(ae(this._panRequest),this._panRequest=Q(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,p=mo(s._icon),v=s._map.layerPointToLatLng(p);c&&it(c,p),s._latlng=v,o.latlng=v,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){ae(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Ms=gn.extend({options:{icon:new la,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){w(this,s),this._latlng=te(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=te(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),we(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(c,"focus",this._panOnFocus,this);var v=o.icon.createShadow(this._shadow),k=!1;v!==this._shadow&&(this._removeShadow(),k=!0),v&&(we(v,s),v.alt=""),this._shadow=v,o.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&$e(this._icon,"focus",this._panOnFocus,this),Ke(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ke(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&it(this._icon,o),this._shadow&&it(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(we(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Mm)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Mm(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&rn(this._icon,o),this._shadow&&rn(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?V(s.iconSize):V(0,0),p=s.iconAnchor?V(s.iconAnchor):V(0,0);o.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function vw(o,s){return new Ms(o,s)}var Pr=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return w(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ds=Pr.extend({options:{fill:!0,radius:10},initialize:function(o,s){w(this,s),this._latlng=te(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=te(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return Pr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),p=[o+c,s+c];this._pxBounds=new O(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function gw(o,s){return new Ds(o,s)}var Xc=Ds.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),w(this,s),this._latlng=te(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:Pr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===me.distance){var v=Math.PI/180,k=this._mRadius/me.R/v,E=c.project([s+k,o]),A=c.project([s-k,o]),D=E.add(A).divideBy(2),X=c.unproject(D).lat,ie=Math.acos((Math.cos(k*v)-Math.sin(s*v)*Math.sin(X*v))/(Math.cos(s*v)*Math.cos(X*v)))/v;(isNaN(ie)||ie===0)&&(ie=k/Math.cos(Math.PI/180*s)),this._point=D.subtract(c.getPixelOrigin()),this._radius=isNaN(ie)?0:D.x-c.project([X,o-ie]).x,this._radiusY=D.y-E.y}else{var ge=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ge).x}this._updateBounds()}});function yw(o,s,c){return new Xc(o,s,c)}var nr=Pr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){w(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,p=sa,v,k,E=0,A=this._parts.length;E<A;E++)for(var D=this._parts[E],X=1,ie=D.length;X<ie;X++){v=D[X-1],k=D[X];var ge=p(o,v,k,!0);ge<s&&(s=ge,c=p(o,v,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Am(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=te(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new N,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return on(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=on(o),p=0,v=o.length;p<v;p++)c?(s[p]=te(o[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(o[p]);return s},_project:function(){var o=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new I(o,o);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var p=o[0]instanceof Y,v=o.length,k,E;if(p){for(E=[],k=0;k<v;k++)E[k]=this._map.latLngToLayerPoint(o[k]),c.extend(E[k]);s.push(E)}else for(k=0;k<v;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,v,k,E,A,D;for(c=0,v=0,k=this._rings.length;c<k;c++)for(D=this._rings[c],p=0,E=D.length;p<E-1;p++)A=Rm(D[p],D[p+1],o,p,!0),A&&(s[v]=s[v]||[],s[v].push(A[0]),(A[1]!==D[p+1]||p===E-2)&&(s[v].push(A[1]),v++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,p=o.length;c<p;c++)o[c]=Om(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,p,v,k,E,A,D=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(A=this._parts[c],p=0,E=A.length,v=E-1;p<E;v=p++)if(!(!s&&p===0)&&Tm(o,A[v],A[p])<=D)return!0;return!1}});function bw(o,s){return new nr(o,s)}nr._flat=zm;var ri=nr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Bm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=nr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof Y&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){nr.prototype._setLatLngs.call(this,o),on(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return on(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new I(s,s);if(o=new O(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,v=this._rings.length,k;p<v;p++)k=Nm(this._rings[p],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,p,v,k,E,A,D,X;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,D=this._parts.length;k<D;k++)for(c=this._parts[k],E=0,X=c.length,A=X-1;E<X;A=E++)p=c[E],v=c[A],p.y>o.y!=v.y>o.y&&o.x<(v.x-p.x)*(o.y-p.y)/(v.y-p.y)+p.x&&(s=!s);return s||nr.prototype._containsPoint.call(this,o,!0)}});function xw(o,s){return new ri(o,s)}var rr=tr.extend({initialize:function(o,s){w(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,p,v;if(s){for(c=0,p=s.length;c<p;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var E=Fs(o,k);return E?(E.feature=Us(o),E.defaultOptions=E.options,this.resetStyle(E),k.onEachFeature&&k.onEachFeature(o,E),this.addLayer(E)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function Fs(o,s){var c=o.type==="Feature"?o.geometry:o,p=c?c.coordinates:null,v=[],k=s&&s.pointToLayer,E=s&&s.coordsToLatLng||Jc,A,D,X,ie;if(!p&&!c)return null;switch(c.type){case"Point":return A=E(p),Dm(k,o,A,s);case"MultiPoint":for(X=0,ie=p.length;X<ie;X++)A=E(p[X]),v.push(Dm(k,o,A,s));return new tr(v);case"LineString":case"MultiLineString":return D=js(p,c.type==="LineString"?0:1,E),new nr(D,s);case"Polygon":case"MultiPolygon":return D=js(p,c.type==="Polygon"?1:2,E),new ri(D,s);case"GeometryCollection":for(X=0,ie=c.geometries.length;X<ie;X++){var ge=Fs({geometry:c.geometries[X],type:"Feature",properties:o.properties},s);ge&&v.push(ge)}return new tr(v);case"FeatureCollection":for(X=0,ie=c.features.length;X<ie;X++){var Se=Fs(c.features[X],s);Se&&v.push(Se)}return new tr(v);default:throw new Error("Invalid GeoJSON object.")}}function Dm(o,s,c,p){return o?o(s,c):new Ms(c,p&&p.markersInheritOptions&&p)}function Jc(o){return new Y(o[1],o[0],o[2])}function js(o,s,c){for(var p=[],v=0,k=o.length,E;v<k;v++)E=s?js(o[v],s-1,c):(c||Jc)(o[v]),p.push(E);return p}function Yc(o,s){return o=te(o),o.alt!==void 0?[h(o.lng,s),h(o.lat,s),h(o.alt,s)]:[h(o.lng,s),h(o.lat,s)]}function $s(o,s,c,p){for(var v=[],k=0,E=o.length;k<E;k++)v.push(s?$s(o[k],on(o[k])?0:s-1,c,p):Yc(o[k],p));return!s&&c&&v.push(v[0].slice()),v}function oi(o,s){return o.feature?i({},o.feature,{geometry:s}):Us(s)}function Us(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var ed={toGeoJSON:function(o){return oi(this,{type:"Point",coordinates:Yc(this.getLatLng(),o)})}};Ms.include(ed),Xc.include(ed),Ds.include(ed),nr.include({toGeoJSON:function(o){var s=!on(this._latlngs),c=$s(this._latlngs,s?1:0,!1,o);return oi(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ri.include({toGeoJSON:function(o){var s=!on(this._latlngs),c=s&&!on(this._latlngs[0]),p=$s(this._latlngs,c?2:s?1:0,!0,o);return s||(p=[p]),oi(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),ti.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),oi(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(v){if(v.toGeoJSON){var k=v.toGeoJSON(o);if(c)p.push(k.geometry);else{var E=Us(k);E.type==="FeatureCollection"?p.push.apply(p,E.features):p.push(E)}}}),c?oi(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Fm(o,s){return new rr(o,s)}var ww=Fm,Zs=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=K(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(we(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ke(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Yo(this._image),this},bringToBack:function(){return this._map&&ei(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=K(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Re("img");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;ho(this._image,c,s)},_reset:function(){var o=this._image,s=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();it(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){rn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),kw=function(o,s,c){return new Zs(o,s,c)},jm=Zs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Re("video");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),p=[],v=0;v<c.length;v++)p.push(c[v].src);this._url=c.length>0?p:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var E=Re("source");E.src=this._url[k],s.appendChild(E)}}});function Sw(o,s,c){return new jm(o,s,c)}var $m=Zs.extend({_initImage:function(){var o=this._image=this._url;we(o,"leaflet-image-layer"),this._zoomAnimated&&we(o,"leaflet-zoom-animated"),this.options.className&&we(o,this.options.className),o.onselectstart=m,o.onmousemove=m}});function Pw(o,s,c){return new $m(o,s,c)}var Fn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof Y||S(o))?(this._latlng=te(o),w(this,s)):(w(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&rn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&rn(this._container,1),this.bringToFront(),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(rn(this._container,0),this._removeTimeout=setTimeout(l(Ke,void 0,this._container),200)):Ke(this._container),this.options.interactive&&(nt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=te(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Yo(this._container),this},bringToBack:function(){return this._map&&ei(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof tr){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=V(this.options.offset),c=this._getAnchor();this._zoomAnimated?it(this._container,o.add(c)):s=s.add(o).add(c);var p=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});Ee.include({_initOverlay:function(o,s,c,p){var v=s;return v instanceof o||(v=new o(p).setContent(s)),c&&v.setLatLng(c),v}}),gn.include({_initOverlay:function(o,s,c,p){var v=c;return v instanceof o?(w(v,p),v._source=this):(v=s&&!p?s:new o(p,this),v.setContent(c)),v}});var Hs=Fn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Fn.prototype.openOn.call(this,o)},onAdd:function(o){Fn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Pr||this._source.on("preclick",_o))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Pr||this._source.off("preclick",_o))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Re("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Re("div",o+"-content-wrapper",s);if(this._contentNode=Re("div",o+"-content",c),ia(s),Hc(this._contentNode),be(s,"contextmenu",_o),this._tipContainer=Re("div",o+"-tip-container",s),this._tip=Re("div",o+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Re("a",o+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',be(p,"click",function(v){gt(v),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=o.offsetHeight,v=this.options.maxHeight,k="leaflet-popup-scrolled";v&&p>v?(s.height=v+"px",we(o,k)):nt(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();it(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(ta(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,v=new I(this._containerLeft,-c-this._containerBottom);v._add(mo(this._container));var k=o.layerPointToContainerPoint(v),E=V(this.options.autoPanPadding),A=V(this.options.autoPanPaddingTopLeft||E),D=V(this.options.autoPanPaddingBottomRight||E),X=o.getSize(),ie=0,ge=0;k.x+p+D.x>X.x&&(ie=k.x+p-X.x+D.x),k.x-ie-A.x<0&&(ie=k.x-A.x),k.y+c+D.y>X.y&&(ge=k.y+c-X.y+D.y),k.y-ge-A.y<0&&(ge=k.y-A.y),(ie||ge)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ie,ge]))}},_getAnchor:function(){return V(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Cw=function(o,s){return new Hs(o,s)};Ee.mergeOptions({closePopupOnClick:!0}),Ee.include({openPopup:function(o,s,c){return this._initOverlay(Hs,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(Hs,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){vo(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof Pr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Ws=Fn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Fn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Re("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,p=this._map,v=this._container,k=p.latLngToContainerPoint(p.getCenter()),E=p.layerPointToContainerPoint(o),A=this.options.direction,D=v.offsetWidth,X=v.offsetHeight,ie=V(this.options.offset),ge=this._getAnchor();A==="top"?(s=D/2,c=X):A==="bottom"?(s=D/2,c=0):A==="center"?(s=D/2,c=X/2):A==="right"?(s=0,c=X/2):A==="left"?(s=D,c=X/2):E.x<k.x?(A="right",s=0,c=X/2):(A="left",s=D+(ie.x+ge.x)*2,c=X/2),o=o.subtract(V(s,c,!0)).add(ie).add(ge),nt(v,"leaflet-tooltip-right"),nt(v,"leaflet-tooltip-left"),nt(v,"leaflet-tooltip-top"),nt(v,"leaflet-tooltip-bottom"),we(v,"leaflet-tooltip-"+A),it(v,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&rn(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return V(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ew=function(o,s){return new Ws(o,s)};Ee.include({openTooltip:function(o,s,c){return this._initOverlay(Ws,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ws,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(be(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),be(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,p;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Um=ni.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Rs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=V(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Ow(o){return new Um(o)}ni.Default=la;var ua=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ce.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){w(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Ke(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Yo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ei(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof I?o:new I(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),p=0,v=s.length,k;p<v;p++)k=s[p].style.zIndex,s[p]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!ce.ielt9){rn(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var p in this._tiles){var v=this._tiles[p];if(!(!v.current||!v.loaded)){var k=Math.min(1,(o-v.loaded)/200);rn(v.el,k),k<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(ae(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=Re("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Ke(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[o],v=this._map;return p||(p=this._levels[o]={},p.el=Re("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=v.project(v.unproject(v.getPixelOrigin()),o).round(),p.zoom=o,this._setZoomTransform(p,v.getCenter(),v.getZoom()),m(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Ke(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,p){var v=Math.floor(o/2),k=Math.floor(s/2),E=c-1,A=new I(+v,+k);A.z=+E;var D=this._tileCoordsToKey(A),X=this._tiles[D];return X&&X.active?(X.retain=!0,!0):(X&&X.loaded&&(X.retain=!0),E>p?this._retainParent(v,k,E,p):!1)},_retainChildren:function(o,s,c,p){for(var v=2*o;v<2*o+2;v++)for(var k=2*s;k<2*s+2;k++){var E=new I(v,k);E.z=c+1;var A=this._tileCoordsToKey(E),D=this._tiles[A];if(D&&D.active){D.retain=!0;continue}else D&&D.loaded&&(D.retain=!0);c+1<p&&this._retainChildren(v,k,c+1,p)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,p){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var k=this.options.updateWhenZooming&&v!==this._tileZoom;(!p||k)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var p=this._map.getZoomScale(c,o.zoom),v=o.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();ce.any3d?ho(o.el,v,p):it(o.el,v)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),v=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(p*2);return new O(v.subtract(k),v.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(o),v=this._pxBoundsToTileRange(p),k=v.getCenter(),E=[],A=this.options.keepBuffer,D=new O(v.getBottomLeft().subtract([A,-A]),v.getTopRight().add([A,-A]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var X in this._tiles){var ie=this._tiles[X].coords;(ie.z!==this._tileZoom||!D.contains(new I(ie.x,ie.y)))&&(this._tiles[X].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ge=v.min.y;ge<=v.max.y;ge++)for(var Se=v.min.x;Se<=v.max.x;Se++){var an=new I(Se,ge);if(an.z=this._tileZoom,!!this._isValidTile(an)){var yo=this._tiles[this._tileCoordsToKey(an)];yo?yo.current=!0:E.push(an)}}if(E.sort(function(Cr,td){return Cr.distanceTo(k)-td.distanceTo(k)}),E.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var qs=document.createDocumentFragment();for(Se=0;Se<E.length;Se++)this._addTile(E[Se],qs);this._level.el.appendChild(qs)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(o);return K(this.options.bounds).overlaps(p)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),p=o.scaleBy(c),v=p.add(c),k=s.unproject(p,o.z),E=s.unproject(v,o.z);return[k,E]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new N(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new I(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Ke(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){we(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=m,o.onmousemove=m,ce.ielt9&&this.options.opacity<1&&rn(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),p=this._tileCoordsToKey(o),v=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(v),this.createTile.length<2&&Q(l(this._tileReady,this,o,null,v)),it(v,c),this._tiles[p]={el:v,coords:o,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var p=this._tileCoordsToKey(o);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(rn(c.el,0),ae(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(we(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),ce.ielt9||!this._map._fadeAnimated?Q(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new I(this._wrapX?_(o.x,this._wrapX):o.x,this._wrapY?_(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new O(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Tw(o){return new ua(o)}var ii=ua.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=w(this,s),s.detectRetina&&ce.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return be(c,"load",l(this._tileOnLoad,this,s,c)),be(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:ce.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){ce.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(o=s-o),o+p},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=m,s.onerror=m,!s.complete)){s.src=z;var c=this._tiles[o].coords;Ke(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),ua.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return ua.prototype._tileReady.call(this,o,s,c)}});function Zm(o,s){return new ii(o,s)}var Hm=ii.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=w(this,s);var v=s.detectRetina&&ce.retina?2:1,k=this.getTileSize();c.width=k.x*v,c.height=k.y*v,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,ii.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,p=B(c.project(s[0]),c.project(s[1])),v=p.min,k=p.max,E=(this._wmsVersion>=1.3&&this._crs===Im?[v.y,v.x,k.y,k.x]:[v.x,v.y,k.x,k.y]).join(","),A=ii.prototype.getTileUrl.call(this,o);return A+C(this.wmsParams,A,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+E},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Lw(o,s){return new Hm(o,s)}ii.WMS=Hm,Zm.wms=Lw;var or=gn.extend({options:{padding:.1},initialize:function(o){w(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&we(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),k=p.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(o,s));ce.any3d?ho(this._container,k,c):it(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new O(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Wm=or.extend({options:{tolerance:0},getEvents:function(){var o=or.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){or.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");be(o,"mousemove",this._onMouseMove,this),be(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),be(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){ae(this._redrawRequest),delete this._ctx,Ke(this._container),$e(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),p=ce.retina?2:1;it(s,o.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",ce.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){or.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],p,v;for(v=0;v<s.length;v++){if(p=Number(s[v]),isNaN(p))return;c.push(p)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||Q(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)o=p.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,p,v,k,E=o._parts,A=E.length,D=this._ctx;if(A){for(D.beginPath(),c=0;c<A;c++){for(p=0,v=E[c].length;p<v;p++)k=E[c][p],D[p?"lineTo":"moveTo"](k.x,k.y);s&&D.closePath()}this._fillStroke(D,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,p=Math.max(Math.round(o._radius),1),v=(Math.max(Math.round(o._radiusY),1)||p)/p;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,p,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,p,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(nt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,p,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(o),p&&(we(this._container,"leaflet-interactive"),this._fireEvent([p],o,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Vm(o){return ce.canvas?new Wm(o):null}var ca=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Rw={_initContainer:function(){this._container=Re("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(or.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=ca("shape");we(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=ca("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Ke(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,p=o.options,v=o._container;v.stroked=!!p.stroke,v.filled=!!p.fill,p.stroke?(s||(s=o._stroke=ca("stroke")),v.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=S(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(v.removeChild(s),o._stroke=null),p.fill?(c||(c=o._fill=ca("fill")),v.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(v.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),p=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Yo(o._container)},_bringToBack:function(o){ei(o._container)}},Vs=ce.vml?ca:qt,da=or.extend({_initContainer:function(){this._container=Vs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Vs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ke(this._container),$e(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),it(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Vs("path");o.options.className&&we(s,o.options.className),o.options.interactive&&we(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Ke(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,jt(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),p=Math.max(Math.round(o._radiusY),1)||c,v="a"+c+","+p+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Yo(o._path)},_bringToBack:function(o){ei(o._path)}});ce.vml&&da.include(Rw);function qm(o){return ce.svg||ce.vml?new da(o):null}Ee.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Vm(o)||qm(o)}});var Km=ri.extend({initialize:function(o,s){ri.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=K(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function zw(o,s){return new Km(o,s)}da.create=Vs,da.pointsToPath=jt,rr.geometryToLayer=Fs,rr.coordsToLatLng=Jc,rr.coordsToLatLngs=js,rr.latLngToCoords=Yc,rr.latLngsToCoords=$s,rr.getFeature=oi,rr.asFeature=Us,Ee.mergeOptions({boxZoom:!0});var Qm=Dn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){$e(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ke(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),na(),Ic(),this._startPoint=this._map.mouseEventToContainerPoint(o),be(document,{contextmenu:vo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Re("div","leaflet-zoom-box",this._container),we(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new O(this._point,this._startPoint),c=s.getSize();it(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ke(this._box),nt(this._container,"leaflet-crosshair")),ra(),Mc(),$e(document,{contextmenu:vo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ee.addInitHook("addHandler","boxZoom",Qm),Ee.mergeOptions({doubleClickZoom:!0});var Gm=Dn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,v=o.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(o.containerPoint,v)}});Ee.addInitHook("addHandler","doubleClickZoom",Gm),Ee.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Xm=Dn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Sr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}we(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){nt(this._map._container,"leaflet-grab"),nt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=K(this._map.options.maxBounds);this._offsetLimit=B(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,v=(p-s+c)%o+s-c,k=(p+s+c)%o-s-c,E=Math.abs(v+c)<Math.abs(k+c)?v:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=E},_onDragEnd:function(o){var s=this._map,c=s.options,p=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),p)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,E=c.easeLinearity,A=v.multiplyBy(E/k),D=A.distanceTo([0,0]),X=Math.min(c.inertiaMaxSpeed,D),ie=A.multiplyBy(X/D),ge=X/(c.inertiaDeceleration*E),Se=ie.multiplyBy(-ge/2).round();!Se.x&&!Se.y?s.fire("moveend"):(Se=s._limitOffset(Se,s.options.maxBounds),Q(function(){s.panBy(Se,{duration:ge,easeLinearity:E,noMoveStart:!0,animate:!0})}))}}});Ee.addInitHook("addHandler","dragging",Xm),Ee.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Jm=Dn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),be(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),$e(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,p=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,p,v;for(p=0,v=c.left.length;p<v;p++)s[c.left[p]]=[-1*o,0];for(p=0,v=c.right.length;p<v;p++)s[c.right[p]]=[o,0];for(p=0,v=c.down.length;p<v;p++)s[c.down[p]]=[0,o];for(p=0,v=c.up.length;p<v;p++)s[c.up[p]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,p,v;for(p=0,v=c.zoomIn.length;p<v;p++)s[c.zoomIn[p]]=o;for(p=0,v=c.zoomOut.length;p<v;p++)s[c.zoomOut[p]]=-o},_addHooks:function(){be(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){$e(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],o.shiftKey&&(p=V(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(V(p),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(v)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;vo(o)}}});Ee.addInitHook("addHandler","keyboard",Jm),Ee.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ym=Dn.extend({addHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){$e(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=km(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),p),vo(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,k=c?Math.ceil(v/c)*c:v,E=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,E&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+E):o.setZoomAround(this._lastMousePos,s+E))}});Ee.addInitHook("addHandler","scrollWheelZoom",Ym);var Aw=600;Ee.mergeOptions({tapHold:ce.touchNative&&ce.safari&&ce.mobile,tapTolerance:15});var e_=Dn.extend({addHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){$e(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new I(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(be(document,"touchend",gt),be(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Aw),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){$e(document,"touchend",gt),$e(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),$e(document,"touchend touchcancel contextmenu",this._cancel,this),$e(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new I(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Ee.addInitHook("addHandler","tapHold",e_),Ee.mergeOptions({touchZoom:ce.touch,bounceAtZoomLimits:!0});var t_=Dn.extend({addHooks:function(){we(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){nt(this._map._container,"leaflet-touch-zoom"),$e(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),gt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]),v=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var k=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(v===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),ae(this._animRequest);var E=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Q(E,this,!0),gt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ae(this._animRequest),$e(document,"touchmove",this._onTouchMove,this),$e(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ee.addInitHook("addHandler","touchZoom",t_),Ee.BoxZoom=Qm,Ee.DoubleClickZoom=Gm,Ee.Drag=Xm,Ee.Keyboard=Jm,Ee.ScrollWheelZoom=Ym,Ee.TapHold=e_,Ee.TouchZoom=t_,n.Bounds=O,n.Browser=ce,n.CRS=ue,n.Canvas=Wm,n.Circle=Xc,n.CircleMarker=Ds,n.Class=ne,n.Control=vn,n.DivIcon=Um,n.DivOverlay=Fn,n.DomEvent=Xx,n.DomUtil=Qx,n.Draggable=Sr,n.Evented=ee,n.FeatureGroup=tr,n.GeoJSON=rr,n.GridLayer=ua,n.Handler=Dn,n.Icon=ni,n.ImageOverlay=Zs,n.LatLng=Y,n.LatLngBounds=N,n.Layer=gn,n.LayerGroup=ti,n.LineUtil=uw,n.Map=Ee,n.Marker=Ms,n.Mixin=ow,n.Path=Pr,n.Point=I,n.PolyUtil=cw,n.Polygon=ri,n.Polyline=nr,n.Popup=Hs,n.PosAnimation=Sm,n.Projection=dw,n.Rectangle=Km,n.Renderer=or,n.SVG=da,n.SVGOverlay=$m,n.TileLayer=ii,n.Tooltip=Ws,n.Transformation=Fe,n.Util=he,n.VideoOverlay=jm,n.bind=l,n.bounds=B,n.canvas=Vm,n.circle=yw,n.circleMarker=gw,n.control=aa,n.divIcon=Ow,n.extend=i,n.featureGroup=mw,n.geoJSON=Fm,n.geoJson=ww,n.gridLayer=Tw,n.icon=_w,n.imageOverlay=kw,n.latLng=te,n.latLngBounds=K,n.layerGroup=hw,n.map=Jx,n.marker=vw,n.point=V,n.polygon=xw,n.polyline=bw,n.popup=Cw,n.rectangle=zw,n.setOptions=w,n.stamp=d,n.svg=qm,n.svgOverlay=Pw,n.tileLayer=Zm,n.tooltip=Ew,n.transformation=Be,n.version=r,n.videoOverlay=Sw;var Nw=window.L;n.noConflict=function(){return window.L=Nw,this},window.L=n})})(kO,sp);var Id,lp={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Id={get exports(){return lp},set exports(e){lp=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Id.exports?(t.default=t,Id.exports=t):window.classNames=t}();var mg,_g,vg,Bo=lp;function SO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=R.useState(t(e)),i=()=>{r(t(e))};return R.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function up(){return up=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},up.apply(this,arguments)}var gg,yg,bg,PO=function(e){return R.createElement("svg",up({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),mg||(mg=R.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),_g||(_g=R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),vg||(vg=R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function cp(){return cp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cp.apply(this,arguments)}var CO=function(e){return R.createElement("svg",cp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),gg||(gg=R.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),yg||(yg=R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),bg||(bg=R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Ce(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var $r,xn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ce(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}($r||($r={}));const EO=({size:e,variant:t})=>{switch(t){case $r.Info:case $r.Error:case $r.Warning:return Z.createElement(PO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case $r.Success:return Z.createElement(CO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},OO=({children:e})=>Z.createElement("div",{className:Bo(xn["panel__pointer-position"])},e),TO=({renderIcon:e=EO,title:t,children:n,variant:r=$r.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=OO})=>{const d=(({forceMobileLayout:_})=>{const m=SO(`(max-width: ${nO})`);return!!_||m})({forceMobileLayout:l}),f=d?eO:tO;return Z.createElement("div",{className:Bo(xn.panel,{[xn["panel--mobile-layout"]]:d})},i&&u({children:Z.createElement("div",{"data-testid":"panel-pointer",className:Bo(xn.panel__pointer,xn[`panel__pointer--${r}`])})}),Z.createElement("div",{"data-testid":"panel-content-wrapper",className:Bo(xn["panel__content-wrapper"],xn[`panel__content-wrapper--${r}`])},a&&Z.createElement("div",{"data-testid":"panel-icon-wrapper",className:xn["panel__icon-wrapper"]},e({size:f,variant:r})),Z.createElement("div",{className:xn.panel__content},t&&Z.createElement("h2",{className:xn.panel__header},t),Z.createElement("div",{className:xn.panel__body},n))))};Ce(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Ce(`.CircularProgress-module_svg__TUYPH {
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
`);Ce(`/**
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
`);Ce(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);R.createContext(void 0);Ce(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
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
`);Ce(`.ToggleButton-module_toggle-button__g4lb- {
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
`);var xg;(function(e){e.Primary="primary",e.Secondary="secondary"})(xg||(xg={}));R.createContext(void 0);Ce(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Ce(`.AccordionHeader-module_accordion-header__QlYjQ {
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
`);Ce(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function E1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const dp=e=>{var{svgIconComponent:t}=e,n=E1(e,["svgIconComponent"]);return R.isValidElement(t)?R.cloneElement(t,Object.assign({},n)):null};var fp,pp,hp,Un={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ce(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(fp||(fp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(pp||(pp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(hp||(hp={}));var xu,cs;R.forwardRef((e,t)=>{var{children:n,color:r=pp.Primary,variant:i=hp.Filled,size:a=fp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:_="button",className:m}=e,h=E1(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},h,{ref:t,className:Bo(Un["altinn-button"],Un[`altinn-button--${a}`],Un[`altinn-button--${i}`],Un[`altinn-button--${r}`],Un[`altinn-button--${i}--${r}`],{[Un["altinn-button--full-width"]]:l},{[Un["altinn-button--dashed-border"]]:u},{[Un["altinn-button--only-icon"]]:!n&&f},m),type:_}),f&&d==="left"&&Z.createElement(dp,{svgIconComponent:f,className:Un.icon}),n,f&&d==="right"&&Z.createElement(dp,{svgIconComponent:f,className:Un.icon}))});(function(e){e.Primary="primary",e.Success="success"})(xu||(xu={})),function(e){e.Small="small",e.Medium="medium"}(cs||(cs={}));const O1=R.createContext({color:xu.Primary,size:cs.Medium});var LO="Page-module_page__THNNc";Ce(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const RO=({children:e,color:t=xu.Primary,size:n=cs.Medium})=>Z.createElement("div",{className:LO},Z.createElement(O1.Provider,{value:{color:t,size:n}},e));var Md={"page-header":"PageHeader-module_page-header__94GS1","page-header--primary":"PageHeader-module_page-header--primary__-DYm-","page-header--success":"PageHeader-module_page-header--success__JUNEP","page-header--small":"PageHeader-module_page-header--small__iSiFU","page-header--medium":"PageHeader-module_page-header--medium__TiCR6"};Ce(`.PageHeader-module_page-header__94GS1 {
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
`);const zO=({children:e,icon:t})=>{const{color:n,size:r}=(()=>{const a=R.useContext(O1);if(a===void 0)throw new Error("usePageContext must be used within a PageContext");return a})(),i=r===cs.Small?28:40;return Z.createElement("header",{className:Bo(Md["page-header"],Md[`page-header--${n}`],Md[`page-header--${r}`])},Z.createElement(dp,{width:i,height:i,svgIconComponent:t}),Z.createElement("span",null,e))};var AO={"page-content":"PageContent-module_page-content__-sHWi"};Ce(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const wg=({children:e})=>Z.createElement("div",{className:Bo(AO["page-content"])},e);var mp;Ce(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(mp||(mp={}));R.createContext({borderStyle:mp.Solid});Ce(`.ListItem-module_list-item__OIENi {
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
`);var kg,Sg,Pg;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(kg||(kg={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Sg||(Sg={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Pg||(Pg={}));Ce(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);Ce(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ce(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var _p,Cg;Ce(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(_p||(_p={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Cg||(Cg={}));R.createContext(void 0);R.createContext({variantStandard:_p.Body});Ce(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Ce(`.TableRow-module_TableRow__3GK6I {
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
`);Ce(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Ce(`.TableCell-module_header-table-cell__NOs4b {
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
`);Ce(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var Eg;Ce(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Eg||(Eg={}));var Og;Ce(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Og||(Og={}));Ce(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);Ce(`.TextArea-module_altinn-TextArea__lzLj9 {
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
`);var Tg;Ce(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Tg||(Tg={}));var Lg;Ce(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Lg||(Lg={}));Ce(`.Pagination-module_pagination-icon__zVOLT {
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
`);Ce(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
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
`);Ce(`.Select-module_altinn-select__678hU {
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
`);Ce(`.Tabs-module_altinn-tabs__YJ7fE {
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
`);var Rg,zg;Ce(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Rg||(Rg={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(zg||(zg={}));let Ag=0;function NO(e){const[t,n]=R.useState(e),r=e||t;return R.useEffect(()=>{t==null&&(Ag+=1,n(`aksel-icon-${Ag}`))},[t]),r}const Ng=Z["useId"];function T1(e){var t;if(Ng!==void 0){const n=Ng();return e??n.replace(/(:)/g,"")}return(t=NO(e))!==null&&t!==void 0?t:""}var BO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const IO=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=BO(e,["title","titleId"]);let a=T1();return a=n?r||"title-"+a:void 0,R.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?R.createElement("title",{id:a},n):null,R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),MO=IO;var DO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const FO=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=DO(e,["title","titleId"]);let a=T1();return a=n?r||"title-"+a:void 0,R.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?R.createElement("title",{id:a},n):null,R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),jO=FO;function Ki(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Dd,L1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Dd=L1,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Dd.exports?(t.default=t,Dd.exports=t):window.classNames=t}();var kt=L1.exports;const vp=e=>{var{svgIconComponent:t}=e,n=Ki(e,["svgIconComponent"]);return R.isValidElement(t)?R.cloneElement(t,Object.assign({},n)):null};function ut(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}vp.displayName="SvgIcon";var gp,yp,bp,ir={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};ut(`.Button-module_button__2ZuB7 {\r
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
    background: var(--colors-grey-300);\r
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
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(gp||(gp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(yp||(yp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(bp||(bp={}));const R1=(e,t)=>{var{children:n,color:r=yp.Primary,variant:i=bp.Filled,size:a=gp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:_="button",className:m}=e,h=Ki(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},h,{ref:t,className:kt(ir.button,ir[a],ir[i],ir[r],{[ir.fullWidth]:l},{[ir.dashedBorder]:u},{[ir.onlyIcon]:!n&&f},m),type:_}),f&&d==="left"&&Z.createElement(vp,{svgIconComponent:f,className:ir.icon}),n,f&&d==="right"&&Z.createElement(vp,{svgIconComponent:f,className:ir.icon}))};R1.displayName="Button";R.forwardRef(R1);var $O="ErrorMessage-module_errorMessageWrapper__rSdCu";ut(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const z1=({id:e,children:t,ariaLabel:n})=>Z.createElement("div",{"aria-label":n,className:$O,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Bg(e,t){R.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Fd(e,t){R.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function UO(e){const t=R.useRef();return R.useEffect(()=>{t.current=e},[e]),t.current}z1.displayName="ErrorMessage";const Uh=(e,t)=>{const n=R.useRef(!0);R.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function A1(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function N1(e){return e.length===new Set(e).size}var ZO="Tabs-module_tabs__QzIkz",HO="Tabs-module_tablist__WR6ag",WO="Tabs-module_tab__IdDYc",VO="Tabs-module_selected__TxfYv",qO="Tabs-module_divider__-r5Cd",KO="Tabs-module_tabpanel__0vR1c";ut(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
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
`);const Ig=e=>e.replace(/\s/,"_"),B1=({activeTab:e,items:t,onChange:n})=>{const r=R.useId(),i=t.map(({name:w,content:C,value:y,tabId:b,panelId:S})=>{const P=y??w;return{name:w,content:C,value:P,tabId:b??r+Ig(P)+"-tab",panelId:S??r+Ig(P)+"-panel"}});if(!N1(i.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>i.findIndex(C=>C.value===w),l=e??i[0].value,[u,d]=R.useState(l),[f,_]=R.useState(a(l));R.useEffect(()=>d(l),[l]);const m=R.useRef(null),h=i.length-1;Uh(()=>{var w;(w=m.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const g=w=>{u!==w&&n&&n(w),d(w),_(a(w))},x=w=>C=>{switch(C.key){case"ArrowRight":f!==void 0&&_(f===h?0:f+1);break;case"ArrowLeft":f!==void 0&&_(f===0?h:f-1);break;case"Space":g(w)}};return Z.createElement("div",{className:ZO},Z.createElement("div",{className:HO,ref:m,role:"tablist"},i.map((w,C)=>{const y=w.value===u;return Z.createElement("button",{"aria-controls":w.panelId,"aria-selected":y,className:kt(WO,y&&VO),id:w.tabId,key:w.value,onClick:()=>g(w.value),onKeyDown:x(w.value),role:"tab",tabIndex:f===C?0:-1},w.name)})),Z.createElement("hr",{className:qO}),i.map(w=>Z.createElement("div",{className:KO,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};function ds(e){return e.split("-")[1]}function Zh(e){return e==="y"?"height":"width"}function Io(e){return e.split("-")[0]}function Cs(e){return["top","bottom"].includes(Io(e))?"x":"y"}function Mg(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Cs(t),d=Zh(u),f=r[d]/2-i[d]/2,_=u==="x";let m;switch(Io(t)){case"top":m={x:a,y:r.y-i.height};break;case"bottom":m={x:a,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:l};break;case"left":m={x:r.x-i.width,y:l};break;default:m={x:r.x,y:r.y}}switch(ds(t)){case"start":m[u]-=f*(n&&_?-1:1);break;case"end":m[u]+=f*(n&&_?-1:1)}return m}B1.displayName="Tabs";function I1(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function wu(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function M1(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:_="viewport",elementContext:m="floating",altBoundary:h=!1,padding:g=0}=t,x=I1(g),w=u[h?m==="floating"?"reference":"floating":m],C=wu(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:_,strategy:d})),y=m==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},P=wu(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(C.top-P.top+x.top)/S.y,bottom:(P.bottom-C.bottom+x.bottom)/S.y,left:(C.left-P.left+x.left)/S.x,right:(P.right-C.right+x.right)/S.x}}const QO=Math.min,GO=Math.max;function xp(e,t,n){return GO(e,QO(t,n))}const Dg=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=I1(r),_={x:i,y:a},m=Cs(l),h=Zh(m),g=await d.getDimensions(n),x=m==="y"?"top":"left",w=m==="y"?"bottom":"right",C=u.reference[h]+u.reference[m]-_[m]-u.floating[h],y=_[m]-u.reference[m],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?m==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[h]);const P=C/2-y/2,z=f[x],M=S-g[h]-f[w],F=S/2-g[h]/2+P,j=xp(z,F,M),W=ds(l)!=null&&F!=j&&u.reference[h]/2-(F<z?f[x]:f[w])-g[h]/2<0;return{[m]:_[m]-(W?F<z?z-F:M-F:0),data:{[m]:j,centerOffset:F-j}}}}),XO={left:"right",right:"left",bottom:"top",top:"bottom"};function hl(e){return e.replace(/left|right|bottom|top/g,t=>XO[t])}const JO={start:"end",end:"start"};function jd(e){return e.replace(/start|end/g,t=>JO[t])}const YO=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:_=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...w}=e,C=Io(r),y=Io(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=m||(y||!x?[hl(l)]:function(T){const Q=hl(T);return[jd(T),Q,jd(Q)]}(l));m||g==="none"||S.push(...function(T,Q,ae,he){const ne=ds(T);let de=function($,ee,I){const re=["left","right"],V=["right","left"],O=["top","bottom"],B=["bottom","top"];switch($){case"top":case"bottom":return I?ee?V:re:ee?re:V;case"left":case"right":return ee?O:B;default:return[]}}(Io(T),ae==="start",he);return ne&&(de=de.map($=>$+"-"+ne),Q&&(de=de.concat(de.map(jd)))),de}(l,x,g,b));const P=[l,...S],z=await M1(t,w),M=[];let F=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&M.push(z[C]),_){const{main:T,cross:Q}=function(ae,he,ne){ne===void 0&&(ne=!1);const de=ds(ae),$=Cs(ae),ee=Zh($);let I=$==="x"?de===(ne?"end":"start")?"right":"left":de==="start"?"bottom":"top";return he.reference[ee]>he.floating[ee]&&(I=hl(I)),{main:I,cross:hl(I)}}(r,a,b);M.push(z[T],z[Q])}if(F=[...F,{placement:r,overflows:M}],!M.every(T=>T<=0)){var j;const T=(((j=i.flip)==null?void 0:j.index)||0)+1,Q=P[T];if(Q)return{data:{index:T,overflows:F},reset:{placement:Q}};let ae="bottom";switch(h){case"bestFit":{var W;const he=(W=F.map(ne=>[ne,ne.overflows.filter(de=>de>0).reduce((de,$)=>de+$,0)]).sort((ne,de)=>ne[1]-de[1])[0])==null?void 0:W[0].placement;he&&(ae=he);break}case"initialPlacement":ae=l}if(r!==ae)return{reset:{placement:ae}}}return{}}}},eT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,_=await(d.isRTL==null?void 0:d.isRTL(f.floating)),m=Io(u),h=ds(u),g=Cs(u)==="x",x=["left","top"].includes(m)?-1:1,w=_&&g?-1:1,C=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return h&&typeof S=="number"&&(b=h==="end"?-1*S:S),g?{x:b*w,y:y*x}:{x:y*x,y:b*w}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function dn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qn(e){return dn(e).getComputedStyle(e)}function io(e){return F1(e)?(e.nodeName||"").toLowerCase():""}let ml;function D1(){if(ml)return ml;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(ml=e.brands.map(t=>t.brand+"/"+t.version).join(" "),ml):navigator.userAgent}function gr(e){return e instanceof dn(e).HTMLElement}function Ln(e){return e instanceof dn(e).Element}function F1(e){return e instanceof dn(e).Node}function Fg(e){return typeof ShadowRoot>"u"?!1:e instanceof dn(e).ShadowRoot||e instanceof ShadowRoot}function kc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function tT(e){return["table","td","th"].includes(io(e))}function wp(e){const t=/firefox/i.test(D1()),n=Qn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function j1(){return!/^((?!chrome|android).)*safari/i.test(D1())}function Hh(e){return["html","body","#document"].includes(io(e))}const jg=Math.min,Ua=Math.max,ku=Math.round;function $1(e){const t=Qn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=ku(n)!==i||ku(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function U1(e){return Ln(e)?e:e.contextElement}const Z1={x:1,y:1};function Li(e){const t=U1(e);if(!gr(t))return Z1;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=$1(t);let l=(a?ku(n.width):n.width)/r,u=(a?ku(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Ho(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=U1(e);let d=Z1;t&&(r?Ln(r)&&(d=Li(r)):d=Li(e));const f=u?dn(u):window,_=!j1()&&n;let m=(l.left+(_&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,h=(l.top+(_&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,g=l.width/d.x,x=l.height/d.y;if(u){const w=dn(u),C=r&&Ln(r)?dn(r):r;let y=w.frameElement;for(;y&&r&&C!==w;){const b=Li(y),S=y.getBoundingClientRect(),P=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(P.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(P.paddingTop))*b.y,m*=b.x,h*=b.y,g*=b.x,x*=b.y,m+=S.x,h+=S.y,y=dn(y).frameElement}}return{width:g,height:x,top:h,right:m+g,bottom:h+x,left:m,x:m,y:h}}function Xr(e){return((F1(e)?e.ownerDocument:e.document)||window.document).documentElement}function Sc(e){return Ln(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function H1(e){return Ho(Xr(e)).left+Sc(e).scrollLeft}function nT(e,t,n){const r=gr(t),i=Xr(t),a=Ho(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((io(t)!=="body"||kc(i))&&(l=Sc(t)),gr(t)){const d=Ho(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=H1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function fs(e){if(io(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Fg(e)?e.host:null)||Xr(e);return Fg(t)?t.host:t}function $g(e){return gr(e)&&Qn(e).position!=="fixed"?e.offsetParent:null}function Ug(e){const t=dn(e);let n=$g(e);for(;n&&tT(n)&&Qn(n).position==="static";)n=$g(n);return n&&(io(n)==="html"||io(n)==="body"&&Qn(n).position==="static"&&!wp(n))?t:n||function(r){let i=fs(r);for(;gr(i)&&!Hh(i);){if(wp(i))return i;i=fs(i)}return null}(e)||t}function W1(e){const t=fs(e);return Hh(t)?e.ownerDocument.body:gr(t)&&kc(t)?t:W1(t)}function Jr(e,t){var n;t===void 0&&(t=[]);const r=W1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=dn(r);return i?t.concat(a,a.visualViewport||[],kc(r)?r:[]):t.concat(r,Jr(r))}function Zg(e,t,n){return t==="viewport"?wu(function(r,i){const a=dn(r),l=Xr(r),u=a.visualViewport;let d=l.clientWidth,f=l.clientHeight,_=0,m=0;if(u){d=u.width,f=u.height;const h=j1();(h||!h&&i==="fixed")&&(_=u.offsetLeft,m=u.offsetTop)}return{width:d,height:f,x:_,y:m}}(e,n)):Ln(t)?function(r,i){const a=Ho(r,!0,i==="fixed"),l=a.top+r.clientTop,u=a.left+r.clientLeft,d=gr(r)?Li(r):{x:1,y:1},f=r.clientWidth*d.x,_=r.clientHeight*d.y,m=u*d.x,h=l*d.y;return{top:h,left:m,right:m+f,bottom:h+_,x:m,y:h,width:f,height:_}}(t,n):wu(function(r){var i;const a=Xr(r),l=Sc(r),u=(i=r.ownerDocument)==null?void 0:i.body,d=Ua(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),f=Ua(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let _=-l.scrollLeft+H1(r);const m=-l.scrollTop;return Qn(u||a).direction==="rtl"&&(_+=Ua(a.clientWidth,u?u.clientWidth:0)-d),{width:d,height:f,x:_,y:m}}(Xr(e)))}const rT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const _=f.get(d);if(_)return _;let m=Jr(d).filter(w=>Ln(w)&&io(w)!=="body"),h=null;const g=Qn(d).position==="fixed";let x=g?fs(d):d;for(;Ln(x)&&!Hh(x);){const w=Qn(x),C=wp(x);(g?C||h:C||w.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=w:m=m.filter(y=>y!==x),x=fs(x)}return f.set(d,m),m}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const _=Zg(t,f,i);return d.top=Ua(_.top,d.top),d.right=jg(_.right,d.right),d.bottom=jg(_.bottom,d.bottom),d.left=Ua(_.left,d.left),d},Zg(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=gr(n),a=Xr(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((io(n)!=="body"||kc(a))&&(l=Sc(n)),gr(n))){const f=Ho(n);u=Li(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Ln,getDimensions:function(e){return $1(e)},getOffsetParent:Ug,getDocumentElement:Xr,getScale:Li,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Ug,a=this.getDimensions;return{reference:nT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Qn(e).direction==="rtl"};function oT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Ln(e)?Jr(e):e.contextElement?Jr(e.contextElement):[],...Jr(t)]:[];f.forEach(g=>{d&&g.addEventListener("scroll",n,{passive:!0}),a&&g.addEventListener("resize",n)});let _,m=null;if(l){let g=!0;m=new ResizeObserver(()=>{g||n(),g=!1}),Ln(e)&&!u&&m.observe(e),Ln(e)||!e.contextElement||u||m.observe(e.contextElement),m.observe(t)}let h=u?Ho(e):null;return u&&function g(){const x=Ho(e);!h||x.x===h.x&&x.y===h.y&&x.width===h.width&&x.height===h.height||n(),h=x,_=requestAnimationFrame(g)}(),n(),()=>{var g;f.forEach(x=>{d&&x.removeEventListener("scroll",n),a&&x.removeEventListener("resize",n)}),(g=m)==null||g.disconnect(),m=null,u&&cancelAnimationFrame(_)}}const iT=(e,t,n)=>{const r=new Map,i={platform:rT,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:_="absolute",middleware:m=[],platform:h}=d,g=m.filter(Boolean),x=await(h.isRTL==null?void 0:h.isRTL(u));let w=await h.getElementRects({reference:l,floating:u,strategy:_}),{x:C,y}=Mg(w,f,x),b=f,S={},P=0;for(let z=0;z<g.length;z++){const{name:M,fn:F}=g[z],{x:j,y:W,data:T,reset:Q}=await F({x:C,y,initialPlacement:f,placement:b,strategy:_,middlewareData:S,rects:w,platform:h,elements:{reference:l,floating:u}});C=j??C,y=W??y,S={...S,[M]:{...S[M],...T}},Q&&P<=50&&(P++,typeof Q=="object"&&(Q.placement&&(b=Q.placement),Q.rects&&(w=Q.rects===!0?await h.getElementRects({reference:l,floating:u,strategy:_}):Q.rects),{x:C,y}=Mg(w,b,x)),z=-1)}return{x:C,y,placement:b,strategy:_,middlewareData:S}})(e,t,{...i,platform:a})},aT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?Dg({element:t.current,padding:n}).fn(r):{}:t?Dg({element:t,padding:n}).fn(r):{};var i}}};var _l=typeof document<"u"?R.useLayoutEffect:R.useEffect;function Su(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Su(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Su(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function sT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],whileElementsMounted:i,open:a}=e,[l,u]=R.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,f]=R.useState(r);Su(d,r)||f(r);const _=R.useRef(null),m=R.useRef(null),h=R.useRef(l),g=function(j){const W=R.useRef(j);return _l(()=>{W.current=j}),W}(i),[x,w]=R.useState(null),[C,y]=R.useState(null),b=R.useCallback(j=>{_.current!==j&&(_.current=j,w(j))},[]),S=R.useCallback(j=>{m.current!==j&&(m.current=j,y(j))},[]),P=R.useCallback(()=>{_.current&&m.current&&iT(_.current,m.current,{middleware:d,placement:t,strategy:n}).then(j=>{const W={...j,isPositioned:!0};z.current&&!Su(h.current,W)&&(h.current=W,Ni.flushSync(()=>{u(W)}))})},[d,t,n]);_l(()=>{a===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(j=>({...j,isPositioned:!1})))},[a]);const z=R.useRef(!1);_l(()=>(z.current=!0,()=>{z.current=!1}),[]),_l(()=>{if(x&&C){if(g.current)return g.current(x,C,P);P()}},[x,C,P,g]);const M=R.useMemo(()=>({reference:_,floating:m,setReference:b,setFloating:S}),[b,S]),F=R.useMemo(()=>({reference:x,floating:C}),[x,C]);return R.useMemo(()=>({...l,update:P,refs:M,elements:F,reference:b,floating:S}),[l,P,M,F,b,S])}var V1=typeof document<"u"?R.useLayoutEffect:R.useEffect;let $d=!1,lT=0;const Hg=()=>"floating-ui-"+lT++,Wg=Ha["useId".toString()]||function(){const[e,t]=R.useState(()=>$d?Hg():void 0);return V1(()=>{e==null&&t(Hg())},[]),R.useEffect(()=>{$d||($d=!0)},[]),e},uT=R.createContext(null),cT=R.createContext(null),q1=()=>R.useContext(cT);function K1(e){return e?.ownerDocument||document}function Q1(e){return K1(e).defaultView||window}function Ro(e){return!!e&&e instanceof Q1(e).Element}function Wh(e){return!!e&&e instanceof Q1(e).HTMLElement}function dT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function fT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Vg(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Ud(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const pT=Ha["useInsertionEffect".toString()]||(e=>e());function G1(e){const t=R.useRef(()=>{});return pT(()=>{t.current=e}),R.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function qg(e){return Wh(e.target)&&e.target.tagName==="BUTTON"}function Kg(e){return function(t){return Wh(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Zd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const hT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},mT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},_T=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:_=!0,outsidePress:m=!0,outsidePressEvent:h="pointerdown",referencePress:g=!1,referencePressEvent:x="pointerdown",ancestorScroll:w=!1,bubbles:C=!0}=t===void 0?{}:t;const y=q1(),b=(((S=R.useContext(uT))==null?void 0:S.id)||null)!=null;var S;const P=G1(typeof m=="function"?m:()=>!1),z=typeof m=="function"?P:m,M=R.useRef(!1),{escapeKeyBubbles:F,outsidePressBubbles:j}=function(W){var T,Q;return W===void 0&&(W=!0),{escapeKeyBubbles:typeof W=="boolean"?W:(T=W.escapeKey)==null||T,outsidePressBubbles:typeof W=="boolean"?W:(Q=W.outsidePress)==null||Q}}(C);return R.useEffect(()=>{if(!n||!f)return;function W(ne){if(ne.key==="Escape"){if(!F&&y&&Ud(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function T(ne){const de=M.current;if(M.current=!1,de||typeof z=="function"&&!z(ne))return;const $=function(I){return"composedPath"in I?I.composedPath()[0]:I.target}(ne);if(Wh($)&&d){const I=d.ownerDocument.defaultView||window,re=$.scrollWidth>$.clientWidth,V=$.scrollHeight>$.clientHeight;let O=V&&ne.offsetX>$.clientWidth;if(V&&I.getComputedStyle($).direction==="rtl"&&(O=ne.offsetX<=$.offsetWidth-$.clientWidth),O||re&&ne.offsetY>$.clientHeight)return}const ee=y&&Ud(y.nodesRef.current,a).some(I=>{var re;return Zd(ne,(re=I.context)==null?void 0:re.elements.floating)});Zd(ne,d)||Zd(ne,u)||ee||!j&&y&&Ud(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:dT(ne)||fT(ne)}}),r(!1))}function Q(){r(!1)}const ae=K1(d);_&&ae.addEventListener("keydown",W),z&&ae.addEventListener(h,T);let he=[];return w&&(Ro(u)&&(he=Jr(u)),Ro(d)&&(he=he.concat(Jr(d))),!Ro(l)&&l&&l.contextElement&&(he=he.concat(Jr(l.contextElement)))),he=he.filter(ne=>{var de;return ne!==((de=ae.defaultView)==null?void 0:de.visualViewport)}),he.forEach(ne=>{ne.addEventListener("scroll",Q,{passive:!0})}),()=>{_&&ae.removeEventListener("keydown",W),z&&ae.removeEventListener(h,T),he.forEach(ne=>{ne.removeEventListener("scroll",Q)})}},[d,u,l,_,z,h,i,y,a,n,r,w,f,F,j,b]),R.useEffect(()=>{M.current=!1},[z,h]),R.useMemo(()=>f?{reference:{[hT[x]]:()=>{g&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[mT[h]]:()=>{M.current=!0}}}:{},[f,i,g,h,x,r])};function Vh(e){return R.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function vT(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=sT(e),a=q1(),l=R.useRef(null),u=R.useRef({}),d=R.useState(()=>function(){const y=new Map;return{emit(b,S){var P;(P=y.get(b))==null||P.forEach(z=>z(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(P=>P!==S))}}}())[0],[f,_]=R.useState(null),m=R.useCallback(y=>{const b=Ro(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),h=R.useCallback(y=>{(Ro(y)||y===null)&&(l.current=y,_(y)),(Ro(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!Ro(y))&&i.refs.setReference(y)},[i.refs]),g=R.useMemo(()=>({...i.refs,setReference:h,setPositionReference:m,domReference:l}),[i.refs,h,m]),x=R.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),w=G1(n),C=R.useMemo(()=>({...i,refs:g,elements:x,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[i,r,d,t,w,g,x]);return V1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=C)}),R.useMemo(()=>({...i,context:C,refs:g,reference:h,positionReference:m}),[i,g,C,h,m])}function Hd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var _,m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];(_=r.get(u))==null||_.forEach(x=>x(...h))})):i[u]=d}),i),{})}}var Pu,kp={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function gT(e){var{variant:t=Pu.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Ki(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,_]=R.useState(r),m=l??f,h=u??_,g=R.useRef(null),x=vT({placement:i,open:m,onOpenChange:h,whileElementsMounted:oT,middleware:[eT(a??(n?12:4)),YO({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(z){const{x:M,y:F,placement:j}=z,{mainAxis:W=!0,crossAxis:T=!1,limiter:Q={fn:V=>{let{x:O,y:B}=V;return{x:O,y:B}}},...ae}=w,he={x:M,y:F},ne=await M1(z,ae),de=Cs(Io(j)),$=de==="x"?"y":"x";let ee=he[de],I=he[$];if(W){const V=de==="y"?"bottom":"right";ee=xp(ee+ne[de==="y"?"top":"left"],ee,ee-ne[V])}if(T){const V=$==="y"?"bottom":"right";I=xp(I+ne[$==="y"?"top":"left"],I,I-ne[V])}const re=Q.fn({...z,[de]:ee,[$]:I});return{...re,data:{x:re.x-M,y:re.y-F}}}}),aT({element:g,padding:8})]});var w;const C=x.context,y=function(z,M){let{open:F,onOpenChange:j,dataRef:W,refs:T}=z,{enabled:Q=!0,event:ae="click",toggle:he=!0,ignoreMouse:ne=!1,keyboardHandlers:de=!0}=M===void 0?{}:M;const $=R.useRef();return R.useMemo(()=>Q?{reference:{onPointerDown(ee){$.current=ee.pointerType},onMouseDown(ee){ee.button===0&&(Vg($.current,!0)&&ne||ae!=="click"&&(F?!he||W.current.openEvent&&W.current.openEvent.type!=="mousedown"||j(!1):(ee.preventDefault(),j(!0)),W.current.openEvent=ee.nativeEvent))},onClick(ee){W.current.__syncReturnFocus||(ae==="mousedown"&&$.current?$.current=void 0:Vg($.current,!0)&&ne||(F?!he||W.current.openEvent&&W.current.openEvent.type!=="click"||j(!1):j(!0),W.current.openEvent=ee.nativeEvent))},onKeyDown(ee){$.current=void 0,de&&(qg(ee)||(ee.key!==" "||Kg(T.domReference.current)||ee.preventDefault(),ee.key==="Enter"&&(F?he&&j(!1):j(!0))))},onKeyUp(ee){de&&(qg(ee)||Kg(T.domReference.current)||ee.key===" "&&(F?he&&j(!1):j(!0)))}}}:{},[Q,W,ae,ne,de,T,he,F,j])}(C,{enabled:l==null}),b=_T(C,{referencePress:!1}),S=function(z,M){let{open:F}=z,{enabled:j=!0,role:W="dialog"}=M===void 0?{}:M;const T=Wg(),Q=Wg();return R.useMemo(()=>{const ae={id:T,role:W};return j?W==="tooltip"?{reference:{"aria-describedby":F?T:void 0},floating:ae}:{reference:{"aria-expanded":F?"true":"false","aria-haspopup":W==="alertdialog"?"dialog":W,"aria-controls":F?T:void 0,...W==="listbox"&&{role:"combobox"},...W==="menu"&&{id:Q}},floating:{...ae,...W==="menu"&&{"aria-labelledby":Q}}}:{}},[j,W,F,T,Q])}(C),P=function(z){z===void 0&&(z=[]);const M=z,F=R.useCallback(T=>Hd(T,z,"reference"),M),j=R.useCallback(T=>Hd(T,z,"floating"),M),W=R.useCallback(T=>Hd(T,z,"item"),M);return R.useMemo(()=>({getReferenceProps:F,getFloatingProps:j,getItemProps:W}),[F,j,W])}([y,b,S]);return R.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:m,setOpen:h},P),x),d),{arrow:n,arrowRef:g,variant:t}),[m,h,P,x,d,n,g,t])}ut(`.Popover-module_popover__E9K9X {\r
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
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Pu||(Pu={}));const X1=R.createContext(null),qh=()=>{const e=R.useContext(X1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function J1(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Ki(e,["children","trigger","arrow","initialOpen"]);const l=gT(Object.assign({arrow:r,initialOpen:i},a));return Z.createElement(X1.Provider,{value:l},Z.createElement(yT,null,n),Z.createElement(bT,null,t,l.arrow&&Z.createElement(xT,null)))}J1.displayName="Popover";const yT=R.forwardRef(function(e,t){var{children:n}=e,r=Ki(e,["children"]);const i=qh(),a=n.ref,l=Vh([i.reference,t,a]);return R.isValidElement(n)?R.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),bT=R.forwardRef(function(e,t){var n,r;const i=qh(),a=Vh([i.floating,t]);return i.open?Z.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0,width:"max-content"},"data-placement":i.placement,className:kt(kp.popover,kp[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null}),xT=R.forwardRef(function(e,t){var n,r;const i=qh(),a=Vh([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return Z.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:kp.arrow},e))});var wT="utility-module_visuallyHidden__R-C67";ut(`/**\r
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
`);var Wo,bo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};ut(`.HelpText-module_helpTextButton__Ir4Uk {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Wo||(Wo={}));const Kh=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Wo.Small}=e,u=Ki(e,["className","children","title","placement","onClick","size"]);const[d,f]=R.useState(!1);return Z.createElement(J1,{variant:Pu.Info,placement:i,open:d,onOpenChange:f,className:bo.helpTextContent,trigger:Z.createElement("button",Object.assign({},u,{className:kt(bo.helpTextButton,t),onClick:_=>{f(m=>!m),a?.(_)}}),Z.createElement(jO,{className:kt(bo.helpTextIcon,bo.helpTextIconFilled,bo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement(MO,{className:kt(bo.helpTextIcon,bo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement("span",{className:wT},r))},n)};Kh.displayName="HelpText";var Zi,Tr={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};ut(`.FieldSet-module_fieldSet__GgktD {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Zi||(Zi={}));const Y1=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Zi.Small})=>{const f=d===Zi.Xsmall?Wo.Xsmall:Wo.Small;return Z.createElement("fieldset",{className:kt(Tr.fieldSet,Tr[d],t),disabled:i},u&&Z.createElement("legend",{className:Tr.legend},Z.createElement("span",{className:Tr.legendAndHelpText},Z.createElement("span",{className:Tr.legendContent},u),l&&Z.createElement(Kh,{size:f,title:`Help text for ${u}`},l))),r&&Z.createElement("p",{className:Tr.description},r),Z.createElement("div",{className:kt(Tr.content,n)},e),a&&Z.createElement("div",{className:Tr.errorMessage},Z.createElement(z1,null,a)))};Y1.displayName="FieldSet";var ps,wn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};ut(`.CheckboxRadioTemplate-module_template__CbnTf {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ps||(ps={}));const kT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:_,onChange:m,presentation:h,size:g,type:x,value:w})=>{const C=R.useId(),y=d??"input-"+C,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,P=f&&!u,z=!h||typeof f!="object"&&typeof r!="object",M=g===ps.Xsmall?Wo.Xsmall:Wo.Small;return Z.createElement(Qg,{className:kt(wn.template,wn[g],i&&wn.disabled,n),htmlFor:y,isLabel:z},!l&&Z.createElement(Qg,{className:wn.inputWrapper,htmlFor:y,isLabel:!z},Z.createElement("input",{"aria-describedby":S,"aria-label":P||typeof f!="string"?void 0:f,"aria-labelledby":P?b:void 0,checked:e!=null&&e,className:wn.input,disabled:i,id:y,name:_,onChange:i?void 0:m,role:h?"presentation":void 0,type:x,value:w}),Z.createElement("span",{className:wn.visibleBox},t)),(P||r)&&Z.createElement("span",{className:wn.labelAndDescription},P&&Z.createElement("span",{className:wn.labelAndHelpText},Z.createElement("span",{className:wn.label,id:b},f),a&&Z.createElement(Kh,{size:M,title:`Help text for ${f}`},a)),r&&Z.createElement("span",{className:wn.description,id:S},r)))},Qg=({children:e,className:t,htmlFor:n,isLabel:r})=>r?Z.createElement("label",{className:t+" "+wn.clickable,htmlFor:n},e):Z.createElement("span",{className:t},e);var ST="Checkbox-module_checkbox__lSeQj",PT="Checkbox-module_compact__Cl41-",CT="Checkbox-module_error__E-bmD",ET="Checkbox-module_checked__3yAq6",OT="Checkbox-module_disabled__x7-eg",TT="Checkbox-module_readOnly__FamUn",LT="Checkbox-module_visibleBox__G7q8H",RT="Checkbox-module_checkmark__ES9N8";ut(`.Checkbox-module_checkbox__lSeQj {\r
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
`);const lr=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:_,presentation:m,readOnly:h})=>Z.createElement(kT,{checked:t,className:kt(ST,t&&ET,a&&CT,i&&OT,n&&PT,h&&TT),description:r,disabled:i,helpText:l,hideInput:h,hideLabel:u,inputId:e,label:d,name:f,onChange:_,presentation:m,size:n?ps.Xsmall:ps.Small,type:"checkbox"},Z.createElement("span",{className:LT},Z.createElement("span",{className:RT})));lr.displayName="Checkbox";var Ri,Wd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};ut(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ri||(Ri={}));const zT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Gg=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Nl=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f=Ri.Vertical})=>{if(!N1(a.map(g=>g.name)))throw Error("Each name in the checkbox group must be unique.");const[_,m]=R.useReducer(zT,Gg(a));R.useEffect(()=>m({type:"reset",state:Gg(a)}),[a]);const h=UO(_);return Uh(()=>{u&&!n&&!A1(h,_)&&u(_)},[_,u,n]),Z.createElement(Y1,{contentClassName:kt(Wd.checkboxGroup,Wd[f],e&&Wd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Zi.Xsmall:Zi.Small},a.map(g=>Z.createElement(lr,{checkboxId:g.checkboxId,checked:_.includes(g.name),compact:e,description:g.description,disabled:n||g.disabled,error:!!r,helpText:g.helpText,key:g.name,label:g.label,name:g.name,onChange:x=>{m({type:x.target.checked?"check":"uncheck",name:g.name})},presentation:d})))};Nl.displayName="CheckboxGroup";var Xg;ut(`.RadioButton-module_radio__-lcP- {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Xg||(Xg={}));var Jg,Yg;ut(`.RadioGroup-module_radioGroup__pO2pz {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Jg||(Jg={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Yg||(Yg={}));var Po,Cu,Mo;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(Po||(Po={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Cu||(Cu={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Mo||(Mo={}));const AT=()=>Z.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),NT=()=>Z.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var ey="Icon-module_icon__3YqoF",BT="Icon-module_disabled__e4-Yg";ut(`.Icon-module_icon__3YqoF {\r
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
}`);const IT=({variant:e,disabled:t=!1})=>{switch(e){case Mo.Error:return Z.createElement("div",{className:ey,"data-testid":"input-icon-error"},Z.createElement(AT,null));case Mo.Search:return Z.createElement("div",{className:kt(ey,t&&BT),"data-testid":"input-icon-search"},Z.createElement(NT,null));default:return null}};var xo={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};ut(`.InputWrapper-module_inputWrapper__I-Tcb {\r
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
`);const MT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=R.useId(),_=t??f,{variant:m,iconVariant:h}=(({readOnly:g=!1,disabled:x=!1,isValid:w=!0,isSearch:C=!1}={})=>{let y=Mo.None;return C&&(y=Mo.Search),x?{variant:Po.Disabled,iconVariant:y}:g===!0||g===Cu.ReadOnlyInfo?{variant:Po.ReadOnlyInfo,iconVariant:y}:g===Cu.ReadOnlyConfirm?{variant:Po.ReadOnlyConfirm,iconVariant:y}:w===!1?{variant:Po.Error,iconVariant:Mo.Error}:{variant:Po.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return Z.createElement(Z.Fragment,null,a&&Z.createElement("label",{className:xo.label,htmlFor:_},a),Z.createElement("div",{"data-testid":"InputWrapper",className:kt(xo.inputWrapper,xo[m],{[xo.search]:r,[xo.withFocusEffect]:!l,[xo.withPadding]:!u})},Z.createElement(IT,{variant:h,disabled:e}),n({className:xo.field,inputId:_,variant:m})))};var DT="MultiSelectItem-module_multiSelectItem__tjklN",FT="MultiSelectItem-module_deleteButton__xRVRz",jT="MultiSelectItem-module_deleteButtonCross__yqZOX";ut(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
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
`);const ex=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>Z.createElement("span",{className:DT},Z.createElement("span",null,r),Z.createElement("button",{"aria-label":e,className:FT,disabled:t,onClick:n},Z.createElement("span",{className:jT})));ex.displayName="MultiSelectItem";var yt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",fieldValues:"Select-module_fieldValues__Xifsp",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};ut(`.Select-module_select__cjdcr {\r
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
`);const vl={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Sp=e=>{const{disabled:t,error:n,hideLabel:r,inputId:i,label:a,multiple:l,onChange:u,options:d,value:f}=e,_=d.map($=>$.value);if(_.length!==new Set(_).size)throw Error("Each value in the option list must be unique.");const[m,h]=R.useState(l&&f!=null?f:[]),[g,x]=R.useState(l?void 0:f),w=d.findIndex($=>$.value===g),[C,y]=R.useState(!1);Bg("click",()=>y(!1)),Bg("keydown",()=>y(!0));const[b,S]=R.useState(!1),P=R.useRef(null),z=R.useRef(null);Uh(()=>{l?A1(f,m)||h(f??[]):x(f)},[f]),R.useEffect(()=>{const $=P.current;if($){const ee=$.offsetHeight,I=$.querySelectorAll("li");if(!I.length)return;const re=I[0].offsetHeight,V=$.scrollTop,O=w*re,B=O+re;O>=V&&B<=V+ee||($.scrollTop=O<V?O:B-ee)}},[w]);const M=$=>{var ee;return(ee=d.find(I=>I.value===$))!==null&&ee!==void 0?ee:{label:"",value:""}},F=($,ee)=>{m?.length||x(ee),h($),u&&u($)},j=$=>{var ee;l?m.includes($)?W($):F([...m,$],$):(x(ee=$),S(!1),u&&u(ee))},W=$=>{F(m.filter(ee=>ee!==$),$)},T=R.useCallback(()=>{if(g===void 0)x(d[0].value);else{const $=w+1;$>=0&&$<d.length&&x(d[$].value)}S(!0)},[g,w,x,d]),Q=R.useCallback(()=>{if(g===void 0)x(d[d.length-1].value);else{const $=w-1;$>=0&&$<d.length&&x(d[$].value)}S(!0)},[g,w,x,d]);Fd(vl.ArrowDown,()=>b&&T()),Fd(vl.ArrowUp,()=>b&&Q()),Fd(vl.Enter,()=>b&&l&&g&&j(g));const ae=$=>g===$,he=$=>l?m.includes($):ae($),ne=R.useId(),de=z.current?`calc(${z.current.offsetWidth}px + 2 * ${wO.component.input.border_width.default.value})`:void 0;return Z.createElement("div",{className:kt(yt.select,yt[l?"multiple":"single"],b&&yt.expanded,t&&yt.disabled,C&&yt.usingKeyboard),"data-testid":"select-root"},Z.createElement(MT,{disabled:t,inputId:i,inputRenderer:({className:$,inputId:ee})=>Z.createElement("span",{className:$+" "+yt.field,ref:z},l&&Z.createElement(Z.Fragment,null,Z.createElement("span",{className:yt.fieldValues},m.map(M).map(I=>Z.createElement(ex,{deleteButtonLabel:I.deleteButtonLabel,disabled:t!=null&&t,key:I.value,label:I.label,onDeleteButtonClick:()=>W(I.value)}))),Z.createElement("button",{"aria-label":e.deleteButtonLabel,className:yt.deleteButton,disabled:!m.length||t,onClick:()=>{F([])}},Z.createElement("span",{className:yt.deleteButtonCross}))),Z.createElement("button",{"aria-controls":ne,"aria-expanded":b,"aria-label":a,className:yt.fieldButton,disabled:t,id:ee,onBlur:()=>S(!1),onClick:()=>S(!b),onKeyDown:I=>{Object.values(vl).includes(I.key)&&(I.preventDefault(),S(!0))},role:"combobox",value:l?m:g},!l&&Z.createElement("span",{className:yt.fieldValue},M(g).label),Z.createElement("span",{className:yt.arrowWrapper},Z.createElement("span",{className:yt.arrow})))),isSearch:!1,isValid:!n,label:r?void 0:a,noFocusEffect:l,noPadding:!0,readOnly:!1}),Z.createElement("ul",{className:yt.optionList,id:ne,ref:P,role:"listbox",style:{width:de}},d.map($=>Z.createElement("li",{"aria-selected":he($.value),className:kt(yt.option,he($.value)&&yt.selected,l&&ae($.value)&&yt.focused),key:$.value,onClick:()=>j($.value),onMouseDown:ee=>ee.preventDefault(),onKeyDown:ee=>ee.preventDefault(),role:"option",value:$.value},$.label))))};Sp.displayName="Select";ut(`.TextArea-module_textArea__Fp7-I {\r
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
`);var hs;(function(e){e.Primary="primary",e.Secondary="secondary"})(hs||(hs={}));const tx=R.createContext(void 0),Qh=()=>{const e=R.useContext(tx);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var $T="Accordion-module_accordion__LVhhv";ut(`.Accordion-module_accordion__LVhhv {\r
  --component-accordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
  background-color: var(--component-accordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const nx=({children:e,open:t,onClick:n,iconVariant:r=hs.Primary})=>{const i=R.useId(),a=R.useId();return Z.createElement("div",{className:$T},Z.createElement(tx.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};nx.displayName="Accordion";const rx=({children:e})=>{const{open:t,contentId:n,headerId:r}=Qh();return Z.createElement("div",null,t&&Z.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};rx.displayName="AccordionContent";var UT="AccordionHeader-module_accordionHeader__nap0Y",ty="AccordionHeader-module_subtitle__CpDh7",ZT="AccordionHeader-module_title__3VVAA",HT="AccordionHeader-module_actions__WCBkS";ut(`.AccordionHeader-module_accordionHeader__nap0Y {\r
  --component-accordion_header-border_top_color: var(--colors-grey-200);\r
  --component-accordion_header-border_top_style: solid;\r
  --component-accordion_header-border_top_width: var(--border_width-thin);\r
  --component-accordion_header-color-background: var(--colors-white);\r
  background-color: var(--component-accordion_header-color-background);\r
  border-top-color: var(--component-accordion_header-border_top_color);\r
  border-top-style: var(--component-accordion_header-border_top_style);\r
  border-top-width: var(--component-accordion_header-border_top_width);\r
  display: flex;\r
}\r
\r
/* breakpoints-xs */\r
@media only screen and (min-width: 0) {\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: none;\r
  }\r
}\r
\r
/* breakpoints-sm */\r
@media only screen and (min-width: 540px) {\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: inline-block;\r
    font-size: 0.9rem;\r
    opacity: 60%;\r
    padding-bottom: 0.2rem;\r
    padding-right: 0.2rem;\r
    padding-top: 0.2rem;\r
  }\r
}\r
\r
.AccordionHeader-module_title__3VVAA {\r
  --component-accordion_header_title-border_bottom_style: none;\r
  --component-accordion_header_title-border_left_style: none;\r
  --component-accordion_header_title-border_right_style: none;\r
  --component-accordion_header_title-border_top_style: none;\r
  --component-accordion_header_title-color-background: none;\r
  --component-accordion_header_title-font_size: var(--font_size-300);\r
  --component-accordion_header_title-font_weight: var(--component-panel-font_weight-heading);\r
  --component-accordion_header_title-spacing-margin_left: 1.6rem;\r
  background-color: var(--component-accordion_header_title-color-background);\r
  border-bottom-style: var(--component-accordion_header_title-border_bottom_style);\r
  border-left-style: var(--component-accordion_header_title-border_left_style);\r
  border-right-style: var(--component-accordion_header_title-border_right_style);\r
  border-top-style: var(--component-accordion_header_title-border_top_style);\r
  cursor: pointer;\r
  flex: 1 1 auto;\r
  font-family: inherit;\r
  font-size: var(--component-accordion_header_title-font_size);\r
  font-weight: var(--component-accordion_header_title-font_weight);\r
  line-height: 16px;\r
  margin-left: var(--component-accordion_header_title-spacing-margin_left);\r
  text-align: left;\r
}\r
\r
.AccordionHeader-module_actions__WCBkS {\r
  align-items: center;\r
  column-gap: 0.3rem;\r
  display: grid;\r
  grid-auto-flow: column;\r
  padding: 0 0.2rem;\r
}\r
`);var WT="AccordionIcon-module_accordionIcon__C4yU3",VT="AccordionIcon-module_opened__jWTPV";ut(`.AccordionIcon-module_accordionIcon__C4yU3 {\r
  --size: 20px;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  height: var(--size);\r
  margin-bottom: 0.6rem;\r
  margin-left: 0.6rem;\r
  margin-top: 0.6rem;\r
  width: var(--size);\r
}\r
\r
.AccordionIcon-module_accordionIcon__C4yU3.AccordionIcon-module_opened__jWTPV {\r
  transform: rotate(90deg);\r
}\r
`);const qT=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:rO})),KT=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 18   34\r
        C 26.8 34    34   26.8 34 18\r
        C 34    9.2  26.8  2   18  2\r
        C  9.2  2     2    9.2  2 18\r
        C  2   26.8   9.2 34   18 34\r
        Z\r
        M 14.3556 11.1556\r
        L 16.0444 9.37778\r
        L 24.2222 17.5556\r
        L 16.0444 25.7333\r
        L 14.3556 23.9556\r
        L 20.8444 17.5556\r
        L 14.3556 11.1556\r
        Z\r
      `,fill:oO})),ox=()=>{const{onClick:e,open:t,iconVariant:n}=Qh(),r={className:kt(WT,t&&VT),onClick:e};switch(n){case hs.Primary:return Z.createElement(qT,Object.assign({},r));case hs.Secondary:return Z.createElement(KT,Object.assign({},r))}};ox.displayName="AccordionIcon";const ix=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Qh();return Z.createElement("div",{className:kt(UT,{[ty]:n})},Z.createElement(ox,null),Z.createElement("button",{className:ZT,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&Z.createElement("span",{"data-testid":"accordion-header-subtitle",className:ty},n)),Z.createElement("div",{className:HT},t))};ix.displayName="AccordionHeader";const QT=e=>R.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",...e},R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.517 11H4.483a2 2 0 0 0-1.987 2.227l.229 2A2 2 0 0 0 4.712 17h14.576a2 2 0 0 0 1.987-1.773l.229-2A2 2 0 0 0 19.517 11Zm-.947-6.109 1.66 4.172a4.001 4.001 0 0 1 3.26 4.391l-.228 2A4.001 4.001 0 0 1 20 18.937V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0v-1.563a4.001 4.001 0 0 1-3.262-3.483l-.229-2A4.001 4.001 0 0 1 3.77 9.063l1.66-4.172A3 3 0 0 1 8.217 3h7.566a3 3 0 0 1 2.787 1.891ZM18.052 9l-1.34-3.37a1 1 0 0 0-.93-.63H8.218a1 1 0 0 0-.929.63L5.948 9h12.104ZM7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:"currentColor"}));function ax(e,t){return function(){return e.apply(t,arguments)}}const{toString:sx}=Object.prototype,{getPrototypeOf:Gh}=Object,Xh=(e=>t=>{const n=sx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),wr=e=>(e=e.toLowerCase(),t=>Xh(t)===e),Pc=e=>t=>typeof t===e,{isArray:Qi}=Array,ms=Pc("undefined");function GT(e){return e!==null&&!ms(e)&&e.constructor!==null&&!ms(e.constructor)&&ao(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const lx=wr("ArrayBuffer");function XT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&lx(e.buffer),t}const JT=Pc("string"),ao=Pc("function"),ux=Pc("number"),Jh=e=>e!==null&&typeof e=="object",YT=e=>e===!0||e===!1,Bl=e=>{if(Xh(e)!=="object")return!1;const t=Gh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},eL=wr("Date"),tL=wr("File"),nL=wr("Blob"),rL=wr("FileList"),oL=e=>Jh(e)&&ao(e.pipe),iL=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||sx.call(e)===t||ao(e.toString)&&e.toString()===t)},aL=wr("URLSearchParams"),sL=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Es(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function cx(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const dx=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fx=e=>!ms(e)&&e!==dx;function Pp(){const{caseless:e}=fx(this)&&this||{},t={},n=(r,i)=>{const a=e&&cx(t,i)||i;Bl(t[a])&&Bl(r)?t[a]=Pp(t[a],r):Bl(r)?t[a]=Pp({},r):Qi(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Es(arguments[r],n);return t}const lL=(e,t,n,{allOwnKeys:r}={})=>(Es(t,(i,a)=>{n&&ao(i)?e[a]=ax(i,n):e[a]=i},{allOwnKeys:r}),e),uL=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cL=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dL=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&Gh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fL=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pL=e=>{if(!e)return null;if(Qi(e))return e;let t=e.length;if(!ux(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hL=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Gh(Uint8Array)),mL=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},_L=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vL=wr("HTMLFormElement"),gL=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ny=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yL=wr("RegExp"),px=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Es(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},bL=e=>{px(e,(t,n)=>{if(ao(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ao(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xL=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Qi(e)?r(e):r(String(e).split(t)),n},wL=()=>{},kL=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Vd="abcdefghijklmnopqrstuvwxyz",ry="0123456789",hx={DIGIT:ry,ALPHA:Vd,ALPHA_DIGIT:Vd+Vd.toUpperCase()+ry},SL=(e=16,t=hx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function PL(e){return!!(e&&ao(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const CL=e=>{const t=new Array(10),n=(r,i)=>{if(Jh(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Qi(r)?[]:{};return Es(r,(l,u)=>{const d=n(l,i+1);!ms(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},q={isArray:Qi,isArrayBuffer:lx,isBuffer:GT,isFormData:iL,isArrayBufferView:XT,isString:JT,isNumber:ux,isBoolean:YT,isObject:Jh,isPlainObject:Bl,isUndefined:ms,isDate:eL,isFile:tL,isBlob:nL,isRegExp:yL,isFunction:ao,isStream:oL,isURLSearchParams:aL,isTypedArray:hL,isFileList:rL,forEach:Es,merge:Pp,extend:lL,trim:sL,stripBOM:uL,inherits:cL,toFlatObject:dL,kindOf:Xh,kindOfTest:wr,endsWith:fL,toArray:pL,forEachEntry:mL,matchAll:_L,isHTMLForm:vL,hasOwnProperty:ny,hasOwnProp:ny,reduceDescriptors:px,freezeMethods:bL,toObjectSet:xL,toCamelCase:gL,noop:wL,toFiniteNumber:kL,findKey:cx,global:dx,isContextDefined:fx,ALPHABET:hx,generateString:SL,isSpecCompliantForm:PL,toJSONObject:CL};function Te(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}q.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mx=Te.prototype,_x={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_x[e]={value:e}});Object.defineProperties(Te,_x);Object.defineProperty(mx,"isAxiosError",{value:!0});Te.from=(e,t,n,r,i,a)=>{const l=Object.create(mx);return q.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Te.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const EL=null;function Cp(e){return q.isPlainObject(e)||q.isArray(e)}function vx(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function oy(e,t,n){return e?e.concat(t).map(function(i,a){return i=vx(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function OL(e){return q.isArray(e)&&!e.some(Cp)}const TL=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function Cc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!q.isUndefined(C[w])});const r=n.metaTokens,i=n.visitor||_,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw new TypeError("visitor must be a function");function f(x){if(x===null)return"";if(q.isDate(x))return x.toISOString();if(!d&&q.isBlob(x))throw new Te("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(x)||q.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function _(x,w,C){let y=x;if(x&&!C&&typeof x=="object"){if(q.endsWith(w,"{}"))w=r?w:w.slice(0,-2),x=JSON.stringify(x);else if(q.isArray(x)&&OL(x)||(q.isFileList(x)||q.endsWith(w,"[]"))&&(y=q.toArray(x)))return w=vx(w),y.forEach(function(S,P){!(q.isUndefined(S)||S===null)&&t.append(l===!0?oy([w],P,a):l===null?w:w+"[]",f(S))}),!1}return Cp(x)?!0:(t.append(oy(C,w,a),f(x)),!1)}const m=[],h=Object.assign(TL,{defaultVisitor:_,convertValue:f,isVisitable:Cp});function g(x,w){if(!q.isUndefined(x)){if(m.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(x),q.forEach(x,function(y,b){(!(q.isUndefined(y)||y===null)&&i.call(t,y,q.isString(b)?b.trim():b,w,h))===!0&&g(y,w?w.concat(b):[b])}),m.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return g(e),t}function iy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yh(e,t){this._pairs=[],e&&Cc(e,this,t)}const gx=Yh.prototype;gx.append=function(t,n){this._pairs.push([t,n])};gx.toString=function(t){const n=t?function(r){return t.call(this,r,iy)}:iy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function LL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yx(e,t,n){if(!t)return e;const r=n&&n.encode||LL,i=n&&n.serialize;let a;if(i?a=i(t,n):a=q.isURLSearchParams(t)?t.toString():new Yh(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class RL{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ay=RL,bx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zL=typeof URLSearchParams<"u"?URLSearchParams:Yh,AL=FormData,NL=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),BL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:zL,FormData:AL,Blob},isStandardBrowserEnv:NL,isStandardBrowserWebWorkerEnv:BL,protocols:["http","https","file","blob","url","data"]};function IL(e,t){return Cc(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Vn.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function ML(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function DL(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function xx(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&q.isArray(i)?i.length:l,d?(q.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!q.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&q.isArray(i[l])&&(i[l]=DL(i[l])),!u)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,i)=>{t(ML(r),i,n,0)}),n}return null}const FL={"Content-Type":void 0};function jL(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ec={transitional:bx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=q.isObject(t);if(a&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return i&&i?JSON.stringify(xx(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return IL(t,this.formSerializer).toString();if((u=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Cc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),jL(t)):t}],transformResponse:[function(t){const n=this.transitional||Ec.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&q.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Te.from(u,Te.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(t){Ec.headers[t]={}});q.forEach(["post","put","patch"],function(t){Ec.headers[t]=q.merge(FL)});const em=Ec,$L=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UL=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&$L[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},sy=Symbol("internals");function ka(e){return e&&String(e).trim().toLowerCase()}function Il(e){return e===!1||e==null?e:q.isArray(e)?e.map(Il):String(e)}function ZL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function HL(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function qd(e,t,n,r){if(q.isFunction(r))return r.call(this,t,n);if(q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function WL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function VL(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class Oc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const _=ka(d);if(!_)throw new Error("header name must be a non-empty string");const m=q.findKey(i,_);(!m||i[m]===void 0||f===!0||f===void 0&&i[m]!==!1)&&(i[m||d]=Il(u))}const l=(u,d)=>q.forEach(u,(f,_)=>a(f,_,d));return q.isPlainObject(t)||t instanceof this.constructor?l(t,n):q.isString(t)&&(t=t.trim())&&!HL(t)?l(UL(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ka(t),t){const r=q.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZL(i);if(q.isFunction(n))return n.call(this,i,r);if(q.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ka(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||qd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=ka(l),l){const u=q.findKey(r,l);u&&(!n||qd(r,r[u],u,n))&&(delete r[u],i=!0)}}return q.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||qd(this,this[a],a,t))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return q.forEach(this,(i,a)=>{const l=q.findKey(r,a);if(l){n[l]=Il(i),delete n[a];return}const u=t?WL(a):String(a).trim();u!==a&&delete n[a],n[u]=Il(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[sy]=this[sy]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=ka(l);r[u]||(VL(i,l),r[u]=!0)}return q.isArray(t)?t.forEach(a):a(t),this}}Oc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(Oc.prototype);q.freezeMethods(Oc);const pr=Oc;function Kd(e,t){const n=this||em,r=t||n,i=pr.from(r.headers);let a=r.data;return q.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function wx(e){return!!(e&&e.__CANCEL__)}function Os(e,t,n){Te.call(this,e??"canceled",Te.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(Os,Te,{__CANCEL__:!0});function qL(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Te("Request failed with status code "+n.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const KL=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),q.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),q.isString(a)&&d.push("path="+a),q.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function QL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function GL(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function kx(e,t){return e&&!QL(t)?GL(e,t):t}const XL=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=q.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function JL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function YL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),_=r[a];l||(l=f),n[i]=d,r[i]=f;let m=a,h=0;for(;m!==i;)h+=n[m++],m=m%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const g=_&&f-_;return g?Math.round(h*1e3/g):void 0}}function ly(e,t){let n=0;const r=YL(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const _={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};_[t?"download":"upload"]=!0,e(_)}}const eR=typeof XMLHttpRequest<"u",tR=eR&&function(e){return new Promise(function(n,r){let i=e.data;const a=pr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}q.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(g+":"+x))}const _=kx(e.baseURL,e.url);f.open(e.method.toUpperCase(),yx(_,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const g=pr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:e,request:f};qL(function(y){n(y),d()},function(y){r(y),d()},w),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new Te("Request aborted",Te.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Te("Network Error",Te.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||bx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Te(x,w.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,e,f)),f=null},Vn.isStandardBrowserEnv){const g=(e.withCredentials||XL(_))&&e.xsrfCookieName&&KL.read(e.xsrfCookieName);g&&a.set(e.xsrfHeaderName,g)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&q.forEach(a.toJSON(),function(x,w){f.setRequestHeader(w,x)}),q.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",ly(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",ly(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=g=>{f&&(r(!g||g.type?new Os(null,e,f):g),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const h=JL(_);if(h&&Vn.protocols.indexOf(h)===-1){r(new Te("Unsupported protocol "+h+":",Te.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Ml={http:EL,xhr:tR};q.forEach(Ml,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nR={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=q.isString(n)?Ml[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Te(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Ml,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ml};function Qd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Os(null,e)}function uy(e){return Qd(e),e.headers=pr.from(e.headers),e.data=Kd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nR.getAdapter(e.adapter||em.adapter)(e).then(function(r){return Qd(e),r.data=Kd.call(e,e.transformResponse,r),r.headers=pr.from(r.headers),r},function(r){return wx(r)||(Qd(e),r&&r.response&&(r.response.data=Kd.call(e,e.transformResponse,r.response),r.response.headers=pr.from(r.response.headers))),Promise.reject(r)})}const cy=e=>e instanceof pr?e.toJSON():e;function Hi(e,t){t=t||{};const n={};function r(f,_,m){return q.isPlainObject(f)&&q.isPlainObject(_)?q.merge.call({caseless:m},f,_):q.isPlainObject(_)?q.merge({},_):q.isArray(_)?_.slice():_}function i(f,_,m){if(q.isUndefined(_)){if(!q.isUndefined(f))return r(void 0,f,m)}else return r(f,_,m)}function a(f,_){if(!q.isUndefined(_))return r(void 0,_)}function l(f,_){if(q.isUndefined(_)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,_)}function u(f,_,m){if(m in t)return r(f,_);if(m in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,_)=>i(cy(f),cy(_),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),function(_){const m=d[_]||i,h=m(e[_],t[_],_);q.isUndefined(h)&&m!==u||(n[_]=h)}),n}const Sx="1.3.2",tm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dy={};tm.transitional=function(t,n,r){function i(a,l){return"[Axios v"+Sx+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Te(i(l," has been removed"+(n?" in "+n:"")),Te.ERR_DEPRECATED);return n&&!dy[l]&&(dy[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function rR(e,t,n){if(typeof e!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Te("option "+a+" must be "+d,Te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Te("Unknown option "+a,Te.ERR_BAD_OPTION)}}const Ep={assertOptions:rR,validators:tm},Lr=Ep.validators;class Eu{constructor(t){this.defaults=t,this.interceptors={request:new ay,response:new ay}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Hi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Ep.assertOptions(r,{silentJSONParsing:Lr.transitional(Lr.boolean),forcedJSONParsing:Lr.transitional(Lr.boolean),clarifyTimeoutError:Lr.transitional(Lr.boolean)},!1),i!==void 0&&Ep.assertOptions(i,{encode:Lr.function,serialize:Lr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&q.merge(a.common,a[n.method]),l&&q.forEach(["delete","get","head","post","put","patch","common"],x=>{delete a[x]}),n.headers=pr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let _,m=0,h;if(!d){const x=[uy.bind(this),void 0];for(x.unshift.apply(x,u),x.push.apply(x,f),h=x.length,_=Promise.resolve(n);m<h;)_=_.then(x[m++],x[m++]);return _}h=u.length;let g=n;for(m=0;m<h;){const x=u[m++],w=u[m++];try{g=x(g)}catch(C){w.call(this,C);break}}try{_=uy.call(this,g)}catch(x){return Promise.reject(x)}for(m=0,h=f.length;m<h;)_=_.then(f[m++],f[m++]);return _}getUri(t){t=Hi(this.defaults,t);const n=kx(t.baseURL,t.url);return yx(n,t.params,t.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(t){Eu.prototype[t]=function(n,r){return this.request(Hi(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Hi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Eu.prototype[t]=n(),Eu.prototype[t+"Form"]=n(!0)});const Dl=Eu;class nm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new Os(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new nm(function(i){t=i}),cancel:t}}}const oR=nm;function iR(e){return function(n){return e.apply(null,n)}}function aR(e){return q.isObject(e)&&e.isAxiosError===!0}const Op={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Op).forEach(([e,t])=>{Op[t]=e});const sR=Op;function Px(e){const t=new Dl(e),n=ax(Dl.prototype.request,t);return q.extend(n,Dl.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Px(Hi(e,i))},n}const ft=Px(em);ft.Axios=Dl;ft.CanceledError=Os;ft.CancelToken=oR;ft.isCancel=wx;ft.VERSION=Sx;ft.toFormData=Cc;ft.AxiosError=Te;ft.Cancel=ft.CanceledError;ft.all=function(t){return Promise.all(t)};ft.spread=iR;ft.isAxiosError=aR;ft.mergeConfig=Hi;ft.AxiosHeaders=pr;ft.formToJSON=e=>xx(q.isHTMLForm(e)?new FormData(e):e);ft.HttpStatusCode=sR;ft.default=ft;const Cx=ft;function Cn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function so(e){return!!e&&!!e[We]}function yr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_R}(e)||Array.isArray(e)||!!e[gy]||!!(!((t=e.constructor)===null||t===void 0)&&t[gy])||rm(e)||om(e))}function Vo(e,t,n){n===void 0&&(n=!1),Gi(e)===0?(n?Object.keys:Ai)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Gi(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:rm(e)?2:om(e)?3:0}function zi(e,t){return Gi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function lR(e,t){return Gi(e)===2?e.get(t):e[t]}function Ex(e,t,n){var r=Gi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ox(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function rm(e){return hR&&e instanceof Map}function om(e){return mR&&e instanceof Set}function So(e){return e.o||e.t}function im(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Lx(e);delete t[We];for(var n=Ai(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function am(e,t){return t===void 0&&(t=!1),sm(e)||so(e)||!yr(e)||(Gi(e)>1&&(e.set=e.add=e.clear=e.delete=uR),Object.freeze(e),t&&Vo(e,function(n,r){return am(r,!0)},!0)),e}function uR(){Cn(2)}function sm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Gn(e){var t=zp[e];return t||Cn(18,e),t}function cR(e,t){zp[e]||(zp[e]=t)}function Tp(){return _s}function Gd(e,t){t&&(Gn("Patches"),e.u=[],e.s=[],e.v=t)}function Ou(e){Lp(e),e.p.forEach(dR),e.p=null}function Lp(e){e===_s&&(_s=e.l)}function fy(e){return _s={p:[],l:_s,h:e,m:!0,_:0}}function dR(e){var t=e[We];t.i===0||t.i===1?t.j():t.O=!0}function Xd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Gn("ES5").S(t,e,r),r?(n[We].P&&(Ou(t),Cn(4)),yr(e)&&(e=Tu(t,e),t.l||Lu(t,e)),t.u&&Gn("Patches").M(n[We].t,e,t.u,t.s)):e=Tu(t,n,[]),Ou(t),t.u&&t.v(t.u,t.s),e!==Tx?e:void 0}function Tu(e,t,n){if(sm(t))return t;var r=t[We];if(!r)return Vo(t,function(u,d){return py(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Lu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=im(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Vo(a,function(u,d){return py(e,r,i,u,d,n,l)}),Lu(e,i,!1),n&&e.u&&Gn("Patches").N(r,n,e.u,e.s)}return r.o}function py(e,t,n,r,i,a,l){if(so(i)){var u=Tu(e,i,a&&t&&t.i!==3&&!zi(t.R,r)?a.concat(r):void 0);if(Ex(n,r,u),!so(u))return;e.m=!1}else l&&n.add(i);if(yr(i)&&!sm(i)){if(!e.h.D&&e._<1)return;Tu(e,i),t&&t.A.l||Lu(e,i)}}function Lu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&am(t,n)}function Jd(e,t){var n=e[We];return(n?So(n):e)[t]}function hy(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(e){e.P||(e.P=!0,e.l&&Dr(e.l))}function Yd(e){e.o||(e.o=im(e.t))}function Rp(e,t,n){var r=rm(t)?Gn("MapSet").F(t,n):om(t)?Gn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:Tp(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=vs;l&&(d=[u],f=La);var _=Proxy.revocable(d,f),m=_.revoke,h=_.proxy;return u.k=h,u.j=m,h}(t,n):Gn("ES5").J(t,n);return(n?n.A:Tp()).p.push(r),r}function fR(e){return so(e)||Cn(22,e),function t(n){if(!yr(n))return n;var r,i=n[We],a=Gi(n);if(i){if(!i.P&&(i.i<4||!Gn("ES5").K(i)))return i.t;i.I=!0,r=my(n,a),i.I=!1}else r=my(n,a);return Vo(r,function(l,u){i&&lR(i.t,l)===u||Ex(r,l,t(u))}),a===3?new Set(r):r}(e)}function my(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return im(e)}function pR(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[We];return vs.get(d,a)},set:function(d){var f=this[We];vs.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][We];if(!u.P)switch(u.i){case 5:r(u)&&Dr(u);break;case 4:n(u)&&Dr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Ai(u),f=d.length-1;f>=0;f--){var _=d[f];if(_!==We){var m=l[_];if(m===void 0&&!zi(l,_))return!0;var h=u[_],g=h&&h[We];if(g?g.t!==m:!Ox(h,m))return!0}}var x=!!l[We];return d.length!==Ai(l).length+(x?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};cR("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(_,m){if(_){for(var h=Array(m.length),g=0;g<m.length;g++)Object.defineProperty(h,""+g,e(g,!0));return h}var x=Lx(m);delete x[We];for(var w=Ai(x),C=0;C<w.length;C++){var y=w[C];x[y]=e(y,_||!!x[y].enumerable)}return Object.create(Object.getPrototypeOf(m),x)}(u,a),f={i:u?5:4,A:l?l.A:Tp(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,We,{value:f,writable:!0}),d},S:function(a,l,u){u?so(l)&&l[We].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var _=f[We];if(_){var m=_.t,h=_.k,g=_.R,x=_.i;if(x===4)Vo(h,function(S){S!==We&&(m[S]!==void 0||zi(m,S)?g[S]||d(h[S]):(g[S]=!0,Dr(_)))}),Vo(m,function(S){h[S]!==void 0||zi(h,S)||(g[S]=!1,Dr(_))});else if(x===5){if(r(_)&&(Dr(_),g.length=!0),h.length<m.length)for(var w=h.length;w<m.length;w++)g[w]=!1;else for(var C=m.length;C<h.length;C++)g[C]=!0;for(var y=Math.min(h.length,m.length),b=0;b<y;b++)h.hasOwnProperty(b)||(g[b]=!0),g[b]===void 0&&d(h[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var _y,_s,lm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",hR=typeof Map<"u",mR=typeof Set<"u",vy=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Tx=lm?Symbol.for("immer-nothing"):((_y={})["immer-nothing"]=!0,_y),gy=lm?Symbol.for("immer-draftable"):"__$immer_draftable",We=lm?Symbol.for("immer-state"):"__$immer_state",_R=""+Object.prototype.constructor,Ai=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Lx=Object.getOwnPropertyDescriptors||function(e){var t={};return Ai(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},zp={},vs={get:function(e,t){if(t===We)return e;var n=So(e);if(!zi(n,t))return function(i,a,l){var u,d=hy(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!yr(r)?r:r===Jd(e.t,t)?(Yd(e),e.o[t]=Rp(e.A.h,r,e)):r},has:function(e,t){return t in So(e)},ownKeys:function(e){return Reflect.ownKeys(So(e))},set:function(e,t,n){var r=hy(So(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Jd(So(e),t),a=i?.[We];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ox(n,i)&&(n!==void 0||zi(e.t,t)))return!0;Yd(e),Dr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Jd(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Yd(e),Dr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=So(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Cn(12)}},La={};Vo(vs,function(e,t){La[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),La.deleteProperty=function(e,t){return La.set.call(this,e,t,void 0)},La.set=function(e,t,n){return vs.set.call(this,e[0],t,n,e[0])};var vR=function(){function e(n){var r=this;this.g=vy,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(w){var C=this;w===void 0&&(w=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(w,function(P){var z;return(z=a).call.apply(z,[C,P].concat(b))})}}var f;if(typeof a!="function"&&Cn(6),l!==void 0&&typeof l!="function"&&Cn(7),yr(i)){var _=fy(r),m=Rp(r,i,void 0),h=!0;try{f=a(m),h=!1}finally{h?Ou(_):Lp(_)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return Gd(_,l),Xd(w,_)},function(w){throw Ou(_),w}):(Gd(_,l),Xd(f,_))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===Tx&&(f=void 0),r.D&&am(f,!0),l){var g=[],x=[];Gn("Patches").M(i,f,g,x),l(g,x)}return f}Cn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var _=arguments.length,m=Array(_>1?_-1:0),h=1;h<_;h++)m[h-1]=arguments[h];return r.produceWithPatches(f,function(g){return i.apply(void 0,[g].concat(m))})};var l,u,d=r.produce(i,a,function(f,_){l=f,u=_});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){yr(n)||Cn(8),so(n)&&(n=fR(n));var r=fy(this),i=Rp(this,n,void 0);return i[We].C=!0,Lp(r),i},t.finishDraft=function(n,r){var i=n&&n[We],a=i.A;return Gd(a,r),Xd(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!vy&&Cn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=Gn("Patches").$;return so(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),Jt=new vR,Rx=Jt.produce;Jt.produceWithPatches.bind(Jt);Jt.setAutoFreeze.bind(Jt);Jt.setUseProxies.bind(Jt);Jt.applyPatches.bind(Jt);Jt.createDraft.bind(Jt);Jt.finishDraft.bind(Jt);function yy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function by(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yy(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ot(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var xy=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ef=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ru={INIT:"@@redux/INIT"+ef(),REPLACE:"@@redux/REPLACE"+ef(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ef()}};function gR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function zx(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ot(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ot(1));return n(zx)(e,t)}if(typeof e!="function")throw new Error(Ot(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function _(){if(d)throw new Error(Ot(3));return a}function m(w){if(typeof w!="function")throw new Error(Ot(4));if(d)throw new Error(Ot(5));var C=!0;return f(),u.push(w),function(){if(C){if(d)throw new Error(Ot(6));C=!1,f();var b=u.indexOf(w);u.splice(b,1),l=null}}}function h(w){if(!gR(w))throw new Error(Ot(7));if(typeof w.type>"u")throw new Error(Ot(8));if(d)throw new Error(Ot(9));try{d=!0,a=i(a,w)}finally{d=!1}for(var C=l=u,y=0;y<C.length;y++){var b=C[y];b()}return w}function g(w){if(typeof w!="function")throw new Error(Ot(10));i=w,h({type:Ru.REPLACE})}function x(){var w,C=m;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Ot(11));function S(){b.next&&b.next(_())}S();var P=C(S);return{unsubscribe:P}}},w[xy]=function(){return this},w}return h({type:Ru.INIT}),r={dispatch:h,subscribe:m,getState:_,replaceReducer:g},r[xy]=x,r}function yR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ru.INIT});if(typeof r>"u")throw new Error(Ot(12));if(typeof n(void 0,{type:Ru.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ot(13))})}function bR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{yR(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var _=!1,m={},h=0;h<a.length;h++){var g=a[h],x=n[g],w=d[g],C=x(w,f);if(typeof C>"u")throw f&&f.type,new Error(Ot(14));m[g]=C,_=_||C!==w}return _=_||a.length!==Object.keys(d).length,_?m:d}}function zu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function xR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Ot(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=zu.apply(void 0,u)(i.dispatch),by(by({},i),{},{dispatch:a})}}}function Ax(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var Nx=Ax();Nx.withExtraArgument=Ax;const wy=Nx;var wR=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(_){return d([f,_])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(_){f=[6,_],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Au=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},SR=Object.defineProperty,PR=Object.defineProperties,CR=Object.getOwnPropertyDescriptors,ky=Object.getOwnPropertySymbols,ER=Object.prototype.hasOwnProperty,OR=Object.prototype.propertyIsEnumerable,Sy=function(e,t,n){return t in e?SR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Yr=function(e,t){for(var n in t||(t={}))ER.call(t,n)&&Sy(e,n,t[n]);if(ky)for(var r=0,i=ky(t);r<i.length;r++){var n=i[r];OR.call(t,n)&&Sy(e,n,t[n])}return e},tf=function(e,t){return PR(e,CR(t))},TR=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},LR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zu:zu.apply(null,arguments)};function RR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var zR=function(e){wR(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Au([void 0],n[0].concat(this)))):new(t.bind.apply(t,Au([void 0],n.concat(this))))},t}(Array);function Ap(e){return yr(e)?Rx(e,function(){}):e}function AR(e){return typeof e=="boolean"}function NR(){return function(t){return BR(t)}}function BR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new zR;return n&&(AR(n)?r.push(wy):r.push(wy.withExtraArgument(n.extraArgument))),r}var IR=!0;function MR(e){var t=NR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,_=f===void 0?void 0:f,m=n.enhancers,h=m===void 0?void 0:m,g;if(typeof i=="function")g=i;else if(RR(i))g=bR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=xR.apply(void 0,x),C=zu;d&&(C=LR(Yr({trace:!IR},typeof d=="object"&&d)));var y=[w];Array.isArray(h)?y=Au([w],h):typeof h=="function"&&(y=h(y));var b=C.apply(void 0,y);return zx(g,_,b)}function eo(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return Yr(Yr({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Bx(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function DR(e){return typeof e=="function"}function FR(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Bx(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(DR(e))d=function(){return Ap(e())};else{var f=Ap(e);d=function(){return f}}function _(m,h){m===void 0&&(m=d());var g=Au([a[h.type]],l.filter(function(x){var w=x.matcher;return w(h)}).map(function(x){var w=x.reducer;return w}));return g.filter(function(x){return!!x}).length===0&&(g=[u]),g.reduce(function(x,w){if(w)if(so(x)){var C=x,y=w(C,h);return y===void 0?x:y}else{if(yr(x))return Rx(x,function(b){return w(b,h)});var y=w(x,h);if(y===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return x},m)}return _.getInitialState=d,_}function jR(e,t){return e+"/"+t}function $R(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ap(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(_){var m=r[_],h=jR(t,_),g,x;"reducer"in m?(g=m.reducer,x=m.prepare):g=m,a[_]=g,l[h]=g,u[_]=x?eo(h,x):eo(h)});function d(){var _=typeof e.extraReducers=="function"?Bx(e.extraReducers):[e.extraReducers],m=_[0],h=m===void 0?{}:m,g=_[1],x=g===void 0?[]:g,w=_[2],C=w===void 0?void 0:w,y=Yr(Yr({},h),l);return FR(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var P=0,z=x;P<z.length;P++){var M=z[P];b.addMatcher(M.matcher,M.reducer)}C&&b.addDefaultCase(C)})}var f;return{name:t,reducer:function(_,m){return f||(f=d()),f(_,m)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var UR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ZR=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=UR[Math.random()*64|0];return t},HR=["name","message","stack","code"],nf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Py=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),WR=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=HR;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Ix=function(){function e(t,n,r){var i=eo(t+"/fulfilled",function(f,_,m,h){return{payload:f,meta:tf(Yr({},h||{}),{arg:m,requestId:_,requestStatus:"fulfilled"})}}),a=eo(t+"/pending",function(f,_,m){return{payload:void 0,meta:tf(Yr({},m||{}),{arg:_,requestId:f,requestStatus:"pending"})}}),l=eo(t+"/rejected",function(f,_,m,h,g){return{payload:h,error:(r&&r.serializeError||WR)(f||"Rejected"),meta:tf(Yr({},g||{}),{arg:m,requestId:_,rejectedWithValue:!!h,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(_,m,h){var g=r?.idGenerator?r.idGenerator(f):ZR(),x=new u,w;function C(b){w=b,x.abort()}var y=function(){return TR(this,null,function(){var b,S,P,z,M,F,j;return kR(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,f,{getState:m,extra:h}),qR(z)?[4,z]:[3,2];case 1:z=W.sent(),W.label=2;case 2:if(z===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return M=new Promise(function(T,Q){return x.signal.addEventListener("abort",function(){return Q({name:"AbortError",message:w||"Aborted"})})}),_(a(g,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:g,arg:f},{getState:m,extra:h}))),[4,Promise.race([M,Promise.resolve(n(f,{dispatch:_,getState:m,extra:h,requestId:g,signal:x.signal,abort:C,rejectWithValue:function(T,Q){return new nf(T,Q)},fulfillWithValue:function(T,Q){return new Py(T,Q)}})).then(function(T){if(T instanceof nf)throw T;return T instanceof Py?i(T.payload,g,f,T.meta):i(T,g,f)})])];case 3:return P=W.sent(),[3,5];case 4:return F=W.sent(),P=F instanceof nf?l(null,g,f,F.payload,F.meta):l(F,g,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(P)&&P.meta.condition,j||_(P),[2,P]}})})}();return Object.assign(y,{abort:C,requestId:g,arg:f,unwrap:function(){return y.then(VR)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function VR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function qR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var um="listenerMiddleware";eo(um+"/add");eo(um+"/removeAll");eo(um+"/remove");var Cy;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);pR();const KR={loading:!0,brandloading:!0,evList:{evs:[]},search:{name:"",sortOrder:1,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[]},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Np=Ix("evsearch/fetchEvs",async e=>await Cx.post("https://localhost:7033/api/Ev",e,{headers:{"Content-Type":"application/json"}}).then(t=>t.data).catch(t=>{console.error("error",t)})),Bp=Ix("evsearch/fetchSearchOptions",async()=>await Cx.get("https://localhost:7033/api/searchoptions").then(e=>e.data).catch(e=>{console.error("error",e)})),Mx=$R({name:"evsearch",initialState:KR,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{const n=t.payload;e.search.airSuspension=n},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n}},extraReducers:e=>{e.addCase(Np.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Np.rejected,(t,n)=>{t.error=n.error.message}).addCase(Bp.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Bp.rejected,(t,n)=>{t.error=n.error.message})}}),QR=Mx.reducer,{updateSortOrder:GR,updateEvType:XR,updateBrands:JR,updateSeatConfig:YR,updateAllWheelDrive:ez,updateNightVision:tz,updateAdaptiveDamping:nz,updateAdaptiveAirSuspension:Lz,updateInstrumentCluster:rz,updateHeadUpDisplay:oz,updateAndroidAuto:iz,updateAppleCarPlay:az,updateColors:sz}=Mx.actions,Rr=W2,lz=()=>cP(),uz="_line_x3q2g_1",cz={line:uz},dz=()=>ve("hr",{className:cz.line}),fz="_evsearchAccordionContent_xtp78_1",pz="_scopeText_xtp78_9",hz="_scopeItems_xtp78_17",mz="_line_xtp78_25",_z="_contentTexts_xtp78_35",vz="_bottomContentTexts_xtp78_45",gl={evsearchAccordionContent:fz,scopeText:pz,scopeItems:hz,line:mz,contentTexts:_z,bottomContentTexts:vz},gz=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""],maxPower:i=0,topSpeedKph:a=0})=>{const[l,u]=R.useState(!1);return ve("div",{children:sn(nx,{open:l,onClick:()=>u(!l),children:[ve(ix,{subtitle:t,children:e}),ve(rx,{children:ve("div",{className:gl.newApiAccordionContent,children:i&&sn("div",{children:[ve("p",{className:gl.scopeText,children:Bd("evsearch.specifications")}),ve("div",{className:gl.line,children:ve(dz,{})}),sn("div",{className:gl.contentTexts,children:[Bd("evsearch.topspeed"),a,ve("br",{}),Bd("evsearch.maxpower"),i]})]})})})]})})},yz="_pageContent_r6jh1_1",bz="_page_r6jh1_1",Sa={pageContent:yz,page:bz},xz=()=>{const{t:e}=m1("common"),t=Rr(T=>T.evsearchResult.loading),n=lz(),r=async()=>await n(Bp()),i=Rr(T=>T.evsearchResult.evList.evs),a=Rr(T=>T.evsearchResult.searchOptions.brands),l=Rr(T=>T.evsearchResult.searchOptions.bodyTypes),u=Rr(T=>T.evsearchResult.searchOptions.colors),d=Rr(T=>T.evsearchResult.searchOptions.seatConfiguration),f=Rr(T=>T.evsearchResult.search),_=async T=>await n(Np(T)),m=Rr(T=>T.evsearchResult.error);R.useEffect(()=>{t&&(_(f),r())},[]),R.useEffect(()=>{_(f)},[f]);const h=T=>{n(GR(T))},g=T=>{n(JR(T))},x=a.map(T=>({label:T,value:T})),w=T=>{n(XR(T))},C=T=>{n(YR(T))},y=T=>{const Q=T.target.checked;n(ez(Q))},b=T=>{const Q=T.target.checked;n(tz(Q))},S=T=>{const Q=T.target.checked;n(nz(Q))},P=T=>{const Q=T.target.checked;n(rz(Q))},z=T=>{const Q=T.target.checked;n(oz(Q))},M=T=>{const Q=T.target.checked;n(az(Q))},F=T=>{const Q=T.target.checked;n(iz(Q))},j=T=>{n(sz(T))},W=()=>m?ve(TO,{title:e("api_delegation.data_retrieval_failed"),variant:$r.Error,forceMobileLayout:!0,children:sn("div",{children:[e("api_delegation.error_message"),": ",m]})}):t?e("api_delegation.loading")+"...":i.map((T,Q)=>ve(gz,{title:T.name,subtitle:T.sortValue+" "+T.sortParameter,topContentText:T.infoUri,maxPower:T.maxPowerKw,topSpeedKph:T.topSpeedKph},Q));return ve("div",{className:Sa.page,children:sn(RO,{children:[ve(zO,{icon:ve(QT,{}),children:e("evsearch.title")}),sn(wg,{children:[sn("div",{className:Sa.pageContent,children:[ve(Sp,{label:"Sortering",multiple:!1,onChange:h,options:[{label:"Merke,model",value:"1"},{label:"Rekkevidde WLTP minimum spesifikasjon",value:"2"},{label:"Netto batterystørrelse minst-størst",value:"3"},{label:"Netto batteristørrels størst-minst",value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"},{label:"Power more > less",value:"6"},{label:"Top speed more >less",value:"7"},{label:"Max DC Charging",value:"8"}]}),ve(Sp,{label:"Brands",multiple:!0,onChange:g,options:x}),ve("br",{}),ve(Nl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:T=>w(T),compact:!0,legend:"Select body type",items:l.map(T=>({label:T,name:T,checked:f.evType===void 0||f.evType.includes(T)}))}),ve("br",{}),ve(B1,{items:[{content:ve(Nl,{"data-testid":"evsearch-seatconfig",variant:Ri.Horizontal,onChange:T=>C(T),compact:!0,legend:"Number of seats",items:d.map(T=>({label:T,name:T,checked:f.seatConfiguration===void 0||f.seatConfiguration.includes(T)}))}),name:"Seats"},{content:sn(wg,{children:[ve(lr,{checked:f.allWheelDrive,label:"All wheel drive",onChange:y,compact:!0}),ve("br",{}),ve(lr,{checked:f.adaptiveSuspension,label:"Adaptive Suspension",onChange:S,compact:!0})]}),name:"Drivetrain"},{content:ve(lr,{checked:f.nightVision,label:"Nightvision",onChange:b,compact:!0}),name:"Driver Assistance"},{content:ve(Nl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:T=>j(T),compact:!0,legend:"Select body type",items:u.map(T=>({label:T,name:T,checked:f.colors===void 0||f.colors.includes(T)}))}),name:"Exterior"},{content:sn("div",{children:[ve(lr,{checked:f.headUpDisplay,label:"Head Up Display",onChange:z,compact:!0}),ve("br",{}),ve(lr,{checked:f.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:P,compact:!0}),ve("br",{}),ve(lr,{checked:f.androidAuto,label:"Android Auto Support",onChange:F,compact:!0}),ve("br",{}),ve(lr,{checked:f.appleCarPlay,label:"Apple Car Play Support",onChange:M,compact:!0})]}),name:"UI & Interface"}]}),ve("br",{})]}),ve("div",{className:Sa.pageContentAccordionsContainer,children:sn("div",{className:Sa.apiAccordions,children:[sn("h4",{children:[e("evsearch.searchresult"),":"]}),ve("div",{className:Sa.accordionScrollContainer,children:W()})]})})]})]})})},wz=PC([{path:"/",errorElement:ve(hg,{})},{path:"evsearch",element:ve(xz,{}),errorElement:ve(hg,{})}],{basename:"/"}),kz={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Fl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Fl)Fl[e]===void 0&&delete Fl[e];const Sz={...kz,...Fl};function Pz(e){return Sz[e]}const Cz=({children:e})=>{const{i18n:t}=m1("common"),r=`/public/localizations/${t.language}.json`,i=new URL(r,import.meta.url).href;return wE("Localizations",async()=>{const l=await(await fetch(i)).json();zt.addResourceBundle(t.language,"common",l)},{staleTime:1/0,suspense:!0}),ve(pk,{children:e})};var Nu={},Ez={get exports(){return Nu},set exports(e){Nu=e}};(function(e,t){(function(n,r){r(t)})(ui,function(n){function r(O,B){O.super_=B,O.prototype=Object.create(B.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function i(O,B){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),B&&B.length&&Object.defineProperty(this,"path",{value:B,enumerable:!0})}function a(O,B,N){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0}),Object.defineProperty(this,"rhs",{value:N,enumerable:!0})}function l(O,B){l.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:B,enumerable:!0})}function u(O,B){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0})}function d(O,B,N){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:B,enumerable:!0}),Object.defineProperty(this,"item",{value:N,enumerable:!0})}function f(O,B,N){var K=O.slice((N||B)+1||O.length);return O.length=B<0?O.length+B:B,O.push.apply(O,K),O}function _(O){var B=typeof O>"u"?"undefined":de(O);return B!=="object"?B:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function m(O,B,N,K,Y,te,ue){Y=Y||[],ue=ue||[];var me=Y.slice(0);if(typeof te<"u"){if(K){if(typeof K=="function"&&K(me,te))return;if((typeof K>"u"?"undefined":de(K))==="object"){if(K.prefilter&&K.prefilter(me,te))return;if(K.normalize){var Je=K.normalize(me,te,O,B);Je&&(O=Je[0],B=Je[1])}}}me.push(te)}_(O)==="regexp"&&_(B)==="regexp"&&(O=O.toString(),B=B.toString());var qe=typeof O>"u"?"undefined":de(O),Fe=typeof B>"u"?"undefined":de(B),Be=qe!=="undefined"||ue&&ue[ue.length-1].lhs&&ue[ue.length-1].lhs.hasOwnProperty(te),tt=Fe!=="undefined"||ue&&ue[ue.length-1].rhs&&ue[ue.length-1].rhs.hasOwnProperty(te);if(!Be&&tt)N(new l(me,B));else if(!tt&&Be)N(new u(me,O));else if(_(O)!==_(B))N(new a(me,O,B));else if(_(O)==="date"&&O-B!==0)N(new a(me,O,B));else if(qe==="object"&&O!==null&&B!==null)if(ue.filter(function(ze){return ze.lhs===O}).length)O!==B&&N(new a(me,O,B));else{if(ue.push({lhs:O,rhs:B}),Array.isArray(O)){var Oe;for(O.length,Oe=0;Oe<O.length;Oe++)Oe>=B.length?N(new d(me,Oe,new u(void 0,O[Oe]))):m(O[Oe],B[Oe],N,K,me,Oe,ue);for(;Oe<B.length;)N(new d(me,Oe,new l(void 0,B[Oe++])))}else{var qt=Object.keys(O),jt=Object.keys(B);qt.forEach(function(ze,Pt){var Bn=jt.indexOf(ze);Bn>=0?(m(O[ze],B[ze],N,K,me,ze,ue),jt=f(jt,Bn)):m(O[ze],void 0,N,K,me,ze,ue)}),jt.forEach(function(ze){m(void 0,B[ze],N,K,me,ze,ue)})}ue.length=ue.length-1}else O!==B&&(qe==="number"&&isNaN(O)&&isNaN(B)||N(new a(me,O,B)))}function h(O,B,N,K){return K=K||[],m(O,B,function(Y){Y&&K.push(Y)},N),K.length?K:void 0}function g(O,B,N){if(N.path&&N.path.length){var K,Y=O[B],te=N.path.length-1;for(K=0;K<te;K++)Y=Y[N.path[K]];switch(N.kind){case"A":g(Y[N.path[K]],N.index,N.item);break;case"D":delete Y[N.path[K]];break;case"E":case"N":Y[N.path[K]]=N.rhs}}else switch(N.kind){case"A":g(O[B],N.index,N.item);break;case"D":O=f(O,B);break;case"E":case"N":O[B]=N.rhs}return O}function x(O,B,N){if(O&&B&&N&&N.kind){for(var K=O,Y=-1,te=N.path?N.path.length-1:0;++Y<te;)typeof K[N.path[Y]]>"u"&&(K[N.path[Y]]=typeof N.path[Y]=="number"?[]:{}),K=K[N.path[Y]];switch(N.kind){case"A":g(N.path?K[N.path[Y]]:K,N.index,N.item);break;case"D":delete K[N.path[Y]];break;case"E":case"N":K[N.path[Y]]=N.rhs}}}function w(O,B,N){if(N.path&&N.path.length){var K,Y=O[B],te=N.path.length-1;for(K=0;K<te;K++)Y=Y[N.path[K]];switch(N.kind){case"A":w(Y[N.path[K]],N.index,N.item);break;case"D":Y[N.path[K]]=N.lhs;break;case"E":Y[N.path[K]]=N.lhs;break;case"N":delete Y[N.path[K]]}}else switch(N.kind){case"A":w(O[B],N.index,N.item);break;case"D":O[B]=N.lhs;break;case"E":O[B]=N.lhs;break;case"N":O=f(O,B)}return O}function C(O,B,N){if(O&&B&&N&&N.kind){var K,Y,te=O;for(Y=N.path.length-1,K=0;K<Y;K++)typeof te[N.path[K]]>"u"&&(te[N.path[K]]={}),te=te[N.path[K]];switch(N.kind){case"A":w(te[N.path[K]],N.index,N.item);break;case"D":te[N.path[K]]=N.lhs;break;case"E":te[N.path[K]]=N.lhs;break;case"N":delete te[N.path[K]]}}}function y(O,B,N){if(O&&B){var K=function(Y){N&&!N(O,B,Y)||x(O,B,Y)};m(O,B,K)}}function b(O){return"color: "+I[O].color+"; font-weight: bold"}function S(O){var B=O.kind,N=O.path,K=O.lhs,Y=O.rhs,te=O.index,ue=O.item;switch(B){case"E":return[N.join("."),K,"→",Y];case"N":return[N.join("."),Y];case"D":return[N.join(".")];case"A":return[N.join(".")+"["+te+"]",ue];default:return[]}}function P(O,B,N,K){var Y=h(O,B);try{K?N.groupCollapsed("diff"):N.group("diff")}catch{N.log("diff")}Y?Y.forEach(function(te){var ue=te.kind,me=S(te);N.log.apply(N,["%c "+I[ue].text,b(ue)].concat($(me)))}):N.log("—— no diff ——");try{N.groupEnd()}catch{N.log("—— diff end —— ")}}function z(O,B,N,K){switch(typeof O>"u"?"undefined":de(O)){case"object":return typeof O[K]=="function"?O[K].apply(O,$(N)):O[K];case"function":return O(B);default:return O}}function M(O){var B=O.timestamp,N=O.duration;return function(K,Y,te){var ue=["action"];return ue.push("%c"+String(K.type)),B&&ue.push("%c@ "+Y),N&&ue.push("%c(in "+te.toFixed(2)+" ms)"),ue.join(" ")}}function F(O,B){var N=B.logger,K=B.actionTransformer,Y=B.titleFormatter,te=Y===void 0?M(B):Y,ue=B.collapsed,me=B.colors,Je=B.level,qe=B.diff,Fe=typeof B.titleFormatter>"u";O.forEach(function(Be,tt){var Oe=Be.started,qt=Be.startedTime,jt=Be.action,ze=Be.prevState,Pt=Be.error,Bn=Be.took,$t=Be.nextState,Jn=O[tt+1];Jn&&($t=Jn.prevState,Bn=Jn.started-Oe);var At=K(jt),kr=typeof ue=="function"?ue(function(){return $t},jt,Be):ue,U=he(qt),H=me.title?"color: "+me.title(At)+";":"",G=["color: gray; font-weight: lighter;"];G.push(H),B.timestamp&&G.push("color: gray; font-weight: lighter;"),B.duration&&G.push("color: gray; font-weight: lighter;");var se=te(At,U,Bn);try{kr?me.title&&Fe?N.groupCollapsed.apply(N,["%c "+se].concat(G)):N.groupCollapsed(se):me.title&&Fe?N.group.apply(N,["%c "+se].concat(G)):N.group(se)}catch{N.log(se)}var oe=z(Je,At,[ze],"prevState"),_e=z(Je,At,[At],"action"),fe=z(Je,At,[Pt,ze],"error"),ye=z(Je,At,[$t],"nextState");if(oe)if(me.prevState){var pe="color: "+me.prevState(ze)+"; font-weight: bold";N[oe]("%c prev state",pe,ze)}else N[oe]("prev state",ze);if(_e)if(me.action){var ot="color: "+me.action(At)+"; font-weight: bold";N[_e]("%c action    ",ot,At)}else N[_e]("action    ",At);if(Pt&&fe)if(me.error){var xe="color: "+me.error(Pt,ze)+"; font-weight: bold;";N[fe]("%c error     ",xe,Pt)}else N[fe]("error     ",Pt);if(ye)if(me.nextState){var je="color: "+me.nextState($t)+"; font-weight: bold";N[ye]("%c next state",je,$t)}else N[ye]("next state",$t);qe&&P(ze,$t,N,kr);try{N.groupEnd()}catch{N.log("—— log end ——")}})}function j(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=Object.assign({},re,O),N=B.logger,K=B.stateTransformer,Y=B.errorTransformer,te=B.predicate,ue=B.logErrors,me=B.diffPredicate;if(typeof N>"u")return function(){return function(qe){return function(Fe){return qe(Fe)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(qe){return function(Fe){return qe(Fe)}}};var Je=[];return function(qe){var Fe=qe.getState;return function(Be){return function(tt){if(typeof te=="function"&&!te(Fe,tt))return Be(tt);var Oe={};Je.push(Oe),Oe.started=ne.now(),Oe.startedTime=new Date,Oe.prevState=K(Fe()),Oe.action=tt;var qt=void 0;if(ue)try{qt=Be(tt)}catch(ze){Oe.error=Y(ze)}else qt=Be(tt);Oe.took=ne.now()-Oe.started,Oe.nextState=K(Fe());var jt=B.diff&&typeof me=="function"?me(Fe,tt):B.diff;if(F(Je,Object.assign({},B,{diff:jt})),Je.length=0,Oe.error)throw Oe.error;return qt}}}}var W,T,Q=function(O,B){return new Array(B+1).join(O)},ae=function(O,B){return Q("0",B-O.toString().length)+O},he=function(O){return ae(O.getHours(),2)+":"+ae(O.getMinutes(),2)+":"+ae(O.getSeconds(),2)+"."+ae(O.getMilliseconds(),3)},ne=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},$=function(O){if(Array.isArray(O)){for(var B=0,N=Array(O.length);B<O.length;B++)N[B]=O[B];return N}return Array.from(O)},ee=[];W=(typeof ui>"u"?"undefined":de(ui))==="object"&&ui?ui:typeof window<"u"?window:{},T=W.DeepDiff,T&&ee.push(function(){typeof T<"u"&&W.DeepDiff===h&&(W.DeepDiff=T,T=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:m,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:x,enumerable:!0},revertChange:{value:C,enumerable:!0},isConflict:{value:function(){return typeof T<"u"},enumerable:!0},noConflict:{value:function(){return ee&&(ee.forEach(function(O){O()}),ee=null),h},enumerable:!0}});var I={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},re={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},V=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=O.dispatch,N=O.getState;return typeof B=="function"||typeof N=="function"?j()({dispatch:B,getState:N}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=re,n.createLogger=j,n.logger=V,n.default=V,Object.defineProperty(n,"__esModule",{value:!0})})})(Ez,Nu);Nu.createLogger();const Oz=MR({reducer:{evsearchResult:QR}}),Tz=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};YE(jC).init({lng:Tz("no_nb"),fallbackLng:Pz("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new cE({defaultOptions:void 0});Ib(document.getElementById("root")).render(ve(R.StrictMode,{children:ve(sP,{store:Oz,children:ve(_E,{client:e,children:ve(Cz,{children:ve(xC,{router:wz})})})})}))});