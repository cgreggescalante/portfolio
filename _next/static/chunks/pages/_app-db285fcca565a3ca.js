(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(7294),o=n(5893);let a=["as","disabled"];function i({tagName:e,disabled:t,href:n,target:r,rel:o,role:a,onClick:i,tabIndex:l=0,type:s}){e||(e=null!=n||null!=r||null!=o?"a":"button");let u={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},u];let c=r=>{var o;if(!t&&("a"!==e||(o=n)&&"#"!==o.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)},f=e=>{" "===e.key&&(e.preventDefault(),c(e))};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:f},u]}let l=r.forwardRef((e,t)=>{let{as:n,disabled:r}=e,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a),[s,{tagName:u}]=i(Object.assign({tagName:n,disabled:r},l));return(0,o.jsx)(u,Object.assign({},l,s,{ref:t}))});l.displayName="Button",t.ZP=l},4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,i,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,i,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(924)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),i=n(1003),l=n(7795),s=n(4465),u=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let v=new Set;function h(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(v.has(a))return;v.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let g=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:v,children:g,prefetch:y,passHref:x,replace:b,shallow:E,scroll:C,locale:O,onClick:j,onMouseEnter:w,onTouchStart:N,legacyBehavior:k=!1}=e,R=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let T=!1!==y,S=a.default.useContext(u.RouterContext),_=a.default.useContext(c.AppRouterContext),P=null!=S?S:_,L=!S,{href:M,as:D}=a.default.useMemo(()=>{if(!S){let e=m(l);return{href:e,as:v?m(v):e}}let[t,n]=i.resolveHref(S,l,!0);return{href:t,as:v?i.resolveHref(S,v):n||t}},[S,l,v]),$=a.default.useRef(M),I=a.default.useRef(D);k&&(r=a.default.Children.only(n));let A=k?r&&"object"==typeof r&&r.ref:t,[B,F,K]=f.useIntersection({rootMargin:"200px"}),U=a.default.useCallback(e=>{(I.current!==D||$.current!==M)&&(K(),I.current=D,$.current=M),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[D,A,M,K,B]);a.default.useEffect(()=>{P&&F&&T&&h(P,M,D,{locale:O})},[D,M,F,O,T,null==S?void 0:S.locale,P]);let W={ref:U,onClick(e){k||"function"!=typeof j||j(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,o,l,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:u,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(v):v()}(e,P,M,D,b,E,C,O,L,T)},onMouseEnter(e){k||"function"!=typeof w||w(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(T||!L)&&h(P,M,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof N||N(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(T||!L)&&h(P,M,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||x||"a"===r.type&&!("href"in r.props)){let H=void 0!==O?O:null==S?void 0:S.locale,Z=(null==S?void 0:S.isLocaleDomain)&&d.getDomainLocale(D,H,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);W.href=Z||p.addBasePath(s.addLocale(D,H,null==S?void 0:S.defaultLocale))}return k?a.default.cloneElement(r,W):a.default.createElement("a",Object.assign({},R,W),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!a,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(a){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let t=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&l.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,u,n,t,c]);let v=r.useCallback(()=>{f(!1)},[]);return[p,c,v]};var r=n(7294),o=n(4686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},924:function(e,t,n){"use strict";let r,o;n.r(t),n.d(t,{default:function(){return tp}});var a,i=n(5893);n(6821);var l=n(9008),s=n.n(l),u=n(1664),c=n.n(u),f=n(4184),d=n.n(f),p=n(7294);let v=p.createContext(null),h=(e,t=null)=>null!=e?String(e):t||null;function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function y(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){return Object.keys(t).reduce(function(n,r){var o,a,i,l,s,u,c,f,d=n[y(r)],v=n[r],h=g(n,[y(r),r].map(x)),b=t[r],E=(o=e[b],a=(0,p.useRef)(void 0!==v),l=(i=(0,p.useState)(d))[0],s=i[1],u=void 0!==v,c=a.current,a.current=u,!u&&c&&l!==d&&s(d),[u?v:l,(0,p.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o&&o.apply(void 0,[e].concat(n)),s(e)},[o])]),C=E[0],O=E[1];return m({},h,((f={})[r]=C,f[b]=O,f))},e)}n(1143);var E=n(6611),C=n(6792);let O=p.forwardRef(({bsPrefix:e,className:t,as:n,...r},o)=>{e=(0,C.vE)(e,"navbar-brand");let a=n||(r.href?"a":"span");return(0,i.jsx)(a,{...r,ref:o,className:d()(t,e)})});function j(e){return e&&e.ownerDocument||document}O.displayName="NavbarBrand";var w=/([A-Z])/g,N=/^ms-/;function k(e){return e.replace(w,"-$1").toLowerCase().replace(N,"-ms-")}var R=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,T=function(e,t){var n,r="",o="";if("string"==typeof t)return e.style.getPropertyValue(k(t))||((n=j(e))&&n.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(k(t));Object.keys(t).forEach(function(n){var a=t[n];a||0===a?n&&R.test(n)?o+=n+"("+a+") ":r+=k(n)+": "+a+";":e.style.removeProperty(k(n))}),o&&(r+="transform: "+o+";"),e.style.cssText+=";"+r};function S(e,t){return(S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var _=n(3935),P={disabled:!1},L=p.createContext(null),M="unmounted",D="exited",$="entering",I="entered",A="exiting",B=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=D,r.appearStatus=$):o=I:o=t.unmountOnExit||t.mountOnEnter?M:D,r.state={status:o},r.nextCallback=null,r}(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,S(n,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===M?{status:D}:null};var n,r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==$&&n!==I&&(t=$):(n===$||n===I)&&(t=A)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===$){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:_.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===D&&this.setState({status:M})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[_.findDOMNode(this),r],a=o[0],i=o[1],l=this.getTimeouts(),s=r?l.appear:l.enter;if(!e&&!n||P.disabled){this.safeSetState({status:I},function(){t.props.onEntered(a)});return}this.props.onEnter(a,i),this.safeSetState({status:$},function(){t.props.onEntering(a,i),t.onTransitionEnd(s,function(){t.safeSetState({status:I},function(){t.props.onEntered(a,i)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:_.findDOMNode(this);if(!t||P.disabled){this.safeSetState({status:D},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:A},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:D},function(){e.props.onExited(r)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:_.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===M)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,g(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return p.createElement(L.Provider,{value:null},"function"==typeof n?n(e,r):p.cloneElement(p.Children.only(n),r))},t}(p.Component);function F(){}B.contextType=L,B.propTypes={},B.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:F,onEntering:F,onEntered:F,onExit:F,onExiting:F,onExited:F},B.UNMOUNTED=M,B.EXITED=D,B.ENTERING=$,B.ENTERED=I,B.EXITING=A;var K=!!("undefined"!=typeof window&&window.document&&window.document.createElement),U=!1,W=!1;try{var H={get passive(){return U=!0},get once(){return W=U=!0}};K&&(window.addEventListener("test",H,H),window.removeEventListener("test",H,!0))}catch(Z){}var V=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!W){var o=r.once,a=r.capture,i=n;!W&&o&&(i=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=i),e.addEventListener(t,i,U?r:a)}e.addEventListener(t,n,r)},G=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)},X=function(e,t,n,r){return V(e,t,n,r),function(){G(e,t,n,r)}};function q(e,t){let n=T(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Y(e,t){var n,r,o,a,i,l,s,u,c,f,d,p;let v=q(e,"transitionDuration"),h=q(e,"transitionDelay"),m=(n=e,r=n=>{n.target===e&&(m(),t(n))},null==(o=v+h)&&(l=-1===(i=T(n,"transitionDuration")||"").indexOf("ms")?1e3:1,o=parseFloat(i)*l||0),d=(u=!1,c=setTimeout(function(){u||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(n,"transitionend",!0)},o+5),f=X(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),f()}),p=X(n,"transitionend",r),function(){d(),p()})}var z=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}},null)};function J(e){e.offsetHeight}var Q=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e},ee=function(e,t){return(0,p.useMemo)(function(){var n,r;return n=Q(e),r=Q(t),function(e){n&&n(e),r&&r(e)}},[e,t])};let et=p.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:a,addEndListener:l,children:s,childRef:u,...c},f)=>{let d=(0,p.useRef)(null),v=ee(d,u),h=e=>{v(e&&"setState"in e?_.findDOMNode(e):null!=e?e:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},g=(0,p.useCallback)(m(e),[e]),y=(0,p.useCallback)(m(t),[t]),x=(0,p.useCallback)(m(n),[n]),b=(0,p.useCallback)(m(r),[r]),E=(0,p.useCallback)(m(o),[o]),C=(0,p.useCallback)(m(a),[a]),O=(0,p.useCallback)(m(l),[l]);return(0,i.jsx)(B,{ref:f,...c,onEnter:g,onEntered:x,onEntering:y,onExit:b,onExited:C,onExiting:E,addEndListener:O,nodeRef:d,children:"function"==typeof s?(e,t)=>s(e,{...t,ref:h}):p.cloneElement(s,{ref:h})})}),en={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function er(e,t){let n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],o=en[e];return r+parseInt(T(t,o[0]),10)+parseInt(T(t,o[1]),10)}let eo={[D]:"collapse",[A]:"collapsing",[$]:"collapsing",[I]:"collapse show"},ea=p.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:a,children:l,dimension:s="height",getDimensionValue:u=er,...c},f)=>{let v="function"==typeof s?s():s,h=(0,p.useMemo)(()=>z(e=>{e.style[v]="0"},e),[v,e]),m=(0,p.useMemo)(()=>z(e=>{let t=`scroll${v[0].toUpperCase()}${v.slice(1)}`;e.style[v]=`${e[t]}px`},t),[v,t]),g=(0,p.useMemo)(()=>z(e=>{e.style[v]=null},n),[v,n]),y=(0,p.useMemo)(()=>z(e=>{e.style[v]=`${u(v,e)}px`,J(e)},r),[r,u,v]),x=(0,p.useMemo)(()=>z(e=>{e.style[v]=null},o),[v,o]);return(0,i.jsx)(et,{ref:f,addEndListener:Y,...c,"aria-expanded":c.role?c.in:null,onEnter:h,onEntering:m,onEntered:g,onExit:y,onExiting:x,childRef:l.ref,children:(e,t)=>p.cloneElement(l,{...t,className:d()(a,l.props.className,eo[e],"width"===v&&"collapse-horizontal")})})});ea.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:er};let ei=p.createContext(null);ei.displayName="NavbarContext";let el=p.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=(0,C.vE)(t,"navbar-collapse");let o=(0,p.useContext)(ei);return(0,i.jsx)(ea,{in:!!(o&&o.expanded),...n,children:(0,i.jsx)("div",{ref:r,className:t,children:e})})});el.displayName="NavbarCollapse";var es=function(e){var t=(0,p.useRef)(e);return(0,p.useEffect)(function(){t.current=e},[e]),t};function eu(e){var t=es(e);return(0,p.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}let ec=p.forwardRef(({bsPrefix:e,className:t,children:n,label:r,as:o="button",onClick:a,...l},s)=>{e=(0,C.vE)(e,"navbar-toggler");let{onToggle:u,expanded:c}=(0,p.useContext)(ei)||{},f=eu(e=>{a&&a(e),u&&u()});return"button"===o&&(l.type="button"),(0,i.jsx)(o,{...l,ref:s,onClick:f,"aria-label":r,className:d()(t,e,!c&&"collapsed"),children:n||(0,i.jsx)("span",{className:`${e}-icon`})})});ec.displayName="NavbarToggle",ec.defaultProps={label:"Toggle navigation"};var ef=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,ed="undefined"!=typeof document||ef?p.useLayoutEffect:p.useEffect,ep=new WeakMap,ev=function(e,t){if(e&&t){var n=ep.get(t)||new Map;ep.set(t,n);var r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r}},eh=function(e){var t=Object.keys(e);function n(e,t){return e===t?t:e?e+" and "+t:t}return function(r,o,a){var i,l,s,u,c,f,d,v;return"object"==typeof r?(i=r,a=o,o=!0):(o=o||!0,(l={})[r]=o,i=l),s=(0,p.useMemo)(function(){return Object.entries(i).reduce(function(r,o){var a,i,l=o[0],s=o[1];return("up"===s||!0===s)&&(r=n(r,("number"==typeof(a=e[l])&&(a+="px"),"(min-width: "+a+")"))),("down"===s||!0===s)&&(r=n(r,"(max-width: "+(i="number"==typeof(i=e[t[Math.min(t.indexOf(l)+1,t.length-1)]])?i-.2+"px":"calc("+i+" - 0.2px)")+")")),r},"")},[JSON.stringify(i)]),void 0===(u=a)&&(u="undefined"==typeof window?void 0:window),c=ev(s,u),d=(f=(0,p.useState)(function(){return!!c&&c.matches}))[0],v=f[1],ed(function(){var e=ev(s,u);if(!e)return v(!1);var t=ep.get(u),n=function(){v(e.matches)};return e.refCount++,e.addListener(n),n(),function(){e.removeListener(n),e.refCount--,e.refCount<=0&&(null==t||t.delete(e.media)),e=void 0}},[s]),d}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function em(e){void 0===e&&(e=j());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(n){return e.body}}function eg(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ey(e){return`data-rr-ui-${e}`}let ex=ey("modal-open");var eb=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(T(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(ex,""),T(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(ex),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};let eE=(0,p.createContext)(K?window:void 0);function eC(){return(0,p.useContext)(eE)}eE.Provider;let eO=(e,t)=>K?null==e?(t||j()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null,ej=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"],ew=(0,p.forwardRef)((e,t)=>{var n,o,a,l,s;let{show:u=!1,role:c="dialog",className:f,style:d,children:v,backdrop:h=!0,keyboard:m=!0,onBackdropClick:g,onEscapeKeyDown:y,transition:x,backdropTransition:b,autoFocus:E=!0,enforceFocus:C=!0,restoreFocus:O=!0,restoreFocusOptions:j,renderDialog:w,renderBackdrop:N=e=>(0,i.jsx)("div",Object.assign({},e)),manager:k,container:R,onShow:T,onHide:S=()=>{},onExit:P,onExited:L,onExiting:M,onEnter:D,onEntering:$,onEntered:I}=e,A=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,ej),B=function(e,t){let n=eC(),[r,o]=(0,p.useState)(()=>eO(e,null==n?void 0:n.document));if(!r){let a=eO(e);a&&o(a)}return(0,p.useEffect)(()=>{t&&r&&t(r)},[t,r]),(0,p.useEffect)(()=>{let t=eO(e);t!==r&&o(t)},[e,r]),r}(R),F=function(e){let t=eC(),n=e||(r||(r=new eb({ownerDocument:null==t?void 0:t.document})),r),o=(0,p.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,p.useCallback)(e=>{o.current.dialog=e},[]),setBackdropRef:(0,p.useCallback)(e=>{o.current.backdrop=e},[])})}(k),U=(n=(0,p.useRef)(!0),o=(0,p.useRef)(function(){return n.current}),(0,p.useEffect)(function(){return n.current=!0,function(){n.current=!1}},[]),o.current),W=(a=(0,p.useRef)(null),(0,p.useEffect)(function(){a.current=u}),a.current),[H,Z]=(0,p.useState)(!u),V=(0,p.useRef)(null);(0,p.useImperativeHandle)(t,()=>F,[F]),K&&!W&&u&&(V.current=em()),x||u||H?u&&H&&Z(!1):Z(!0);let G=eu(()=>{if(F.add(),ee.current=X(document,"keydown",J),Q.current=X(document,"focus",()=>setTimeout(Y),!0),T&&T(),E){let e=em(document);F.dialog&&e&&!eg(F.dialog,e)&&(V.current=e,F.dialog.focus())}}),q=eu(()=>{if(F.remove(),null==ee.current||ee.current(),null==Q.current||Q.current(),O){var e;null==(e=V.current)||null==e.focus||e.focus(j),V.current=null}});(0,p.useEffect)(()=>{u&&B&&G()},[u,B,G]),(0,p.useEffect)(()=>{H&&q()},[H,q]),l=()=>{q()},(s=(0,p.useRef)(l)).current=l,(0,p.useEffect)(function(){return function(){return s.current()}},[]);let Y=eu(()=>{if(!C||!U()||!F.isTopModal())return;let e=em();F.dialog&&e&&!eg(F.dialog,e)&&F.dialog.focus()}),z=eu(e=>{e.target===e.currentTarget&&(null==g||g(e),!0===h&&S())}),J=eu(e=>{m&&27===e.keyCode&&F.isTopModal()&&(null==y||y(e),e.defaultPrevented||S())}),Q=(0,p.useRef)(),ee=(0,p.useRef)(),et=(...e)=>{Z(!0),null==L||L(...e)};if(!B||!(u||x&&!H))return null;let en=Object.assign({role:c,ref:F.setDialogRef,"aria-modal":"dialog"===c||void 0},A,{style:d,className:f,tabIndex:-1}),er=w?w(en):(0,i.jsx)("div",Object.assign({},en,{children:p.cloneElement(v,{role:"document"})}));x&&(er=(0,i.jsx)(x,{appear:!0,unmountOnExit:!0,in:!!u,onExit:P,onExiting:M,onExited:et,onEnter:D,onEntering:$,onEntered:I,children:er}));let eo=null;return h&&(eo=N({ref:F.setBackdropRef,onClick:z}),b&&(eo=(0,i.jsx)(b,{appear:!0,in:!!u,children:eo}))),(0,i.jsx)(i.Fragment,{children:_.createPortal((0,i.jsxs)(i.Fragment,{children:[eo,er]}),B)})});ew.displayName="Modal";var eN=Object.assign(ew,{Manager:eb});let ek={[$]:"show",[I]:"show"},eR=p.forwardRef(({className:e,children:t,transitionClasses:n={},...r},o)=>{let a=(0,p.useCallback)((e,t)=>{J(e),null==r.onEnter||r.onEnter(e,t)},[r]);return(0,i.jsx)(et,{ref:o,addEndListener:Y,...r,onEnter:a,childRef:t.ref,children:(r,o)=>p.cloneElement(t,{...o,className:d()("fade",e,t.props.className,ek[r],n[r])})})});eR.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},eR.displayName="Fade";var eT=(0,E.Z)("offcanvas-body");let eS={[$]:"show",[I]:"show"},e_=p.forwardRef(({bsPrefix:e,className:t,children:n,...r},o)=>(e=(0,C.vE)(e,"offcanvas"),(0,i.jsx)(et,{ref:o,addEndListener:Y,...r,childRef:n.ref,children:(r,o)=>p.cloneElement(n,{...o,className:d()(t,n.props.className,(r===$||r===A)&&`${e}-toggling`,eS[r])})})));e_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},e_.displayName="OffcanvasToggling";let eP=p.createContext({onHide(){}});var eL=n(5697),eM=n.n(eL);let eD={"aria-label":eM().string,onClick:eM().func,variant:eM().oneOf(["white"])},e$=p.forwardRef(({className:e,variant:t,...n},r)=>(0,i.jsx)("button",{ref:r,type:"button",className:d()("btn-close",t&&`btn-close-${t}`,e),...n}));e$.displayName="CloseButton",e$.propTypes=eD,e$.defaultProps={"aria-label":"Close"};let eI=p.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...a},l)=>{let s=(0,p.useContext)(eP),u=eu(()=>{null==s||s.onHide(),null==r||r()});return(0,i.jsxs)("div",{ref:l,...a,children:[o,n&&(0,i.jsx)(e$,{"aria-label":e,variant:t,onClick:u})]})});eI.defaultProps={closeLabel:"Close",closeButton:!1};let eA=p.forwardRef(({bsPrefix:e,className:t,...n},r)=>(e=(0,C.vE)(e,"offcanvas-header"),(0,i.jsx)(eI,{ref:r,...n,className:d()(t,e)})));eA.displayName="OffcanvasHeader",eA.defaultProps={closeLabel:"Close",closeButton:!1};var eB=n(9602);let eF=(0,eB.Z)("h5");var eK=(0,E.Z)("offcanvas-title",{Component:eF}),eU=Function.prototype.bind.call(Function.prototype.call,[].slice);function eW(e,t){return eU(e.querySelectorAll(t))}function eH(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}let eZ={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class eV extends eb{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,T(t,{[e]:`${parseFloat(T(t,e))+n}px`})}restore(e,t){let n=t.dataset[e];void 0!==n&&(delete t.dataset[e],T(t,{[e]:n}))}setContainerStyle(e){var t,n;super.setContainerStyle(e);let r=this.getElement();if(n="modal-open",(t=r).classList?t.classList.add(n):(t.classList?n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" "))||("string"==typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)),!e.scrollBarWidth)return;let o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";eW(r,eZ.FIXED_CONTENT).forEach(t=>this.adjustAndStore(o,t,e.scrollBarWidth)),eW(r,eZ.STICKY_CONTENT).forEach(t=>this.adjustAndStore(a,t,-e.scrollBarWidth)),eW(r,eZ.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(a,t,e.scrollBarWidth))}removeContainerStyle(e){var t,n;super.removeContainerStyle(e);let r=this.getElement();n="modal-open",(t=r).classList?t.classList.remove(n):"string"==typeof t.className?t.className=eH(t.className,n):t.setAttribute("class",eH(t.className&&t.className.baseVal||"",n));let o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";eW(r,eZ.FIXED_CONTENT).forEach(e=>this.restore(o,e)),eW(r,eZ.STICKY_CONTENT).forEach(e=>this.restore(a,e)),eW(r,eZ.NAVBAR_TOGGLER).forEach(e=>this.restore(a,e))}}function eG(e){return(0,i.jsx)(e_,{...e})}function eX(e){return(0,i.jsx)(eR,{...e})}let eq=p.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a,responsive:l,show:s,backdrop:u,keyboard:c,scroll:f,onEscapeKeyDown:v,onShow:h,onHide:m,container:g,autoFocus:y,enforceFocus:x,restoreFocus:b,restoreFocusOptions:E,onEntered:O,onExit:j,onExiting:w,onEnter:N,onEntering:k,onExited:R,backdropClassName:T,manager:S,renderStaticNode:_,...P},L)=>{let M=(0,p.useRef)();e=(0,C.vE)(e,"offcanvas");let{onToggle:D}=(0,p.useContext)(ei)||{},[$,I]=(0,p.useState)(!1),A=eh(l||"xs","up");(0,p.useEffect)(()=>{I(l?s&&!A:s)},[s,l,A]);let B=eu(()=>{null==D||D(),null==m||m()}),F=(0,p.useMemo)(()=>({onHide:B}),[B]),K=(e,...t)=>{e&&(e.style.visibility="visible"),null==N||N(e,...t)},U=(e,...t)=>{e&&(e.style.visibility=""),null==R||R(...t)},W=(0,p.useCallback)(t=>(0,i.jsx)("div",{...t,className:d()(`${e}-backdrop`,T)}),[T,e]),H=o=>(0,i.jsx)("div",{...o,...P,className:d()(t,l?`${e}-${l}`:e,`${e}-${a}`),"aria-labelledby":r,children:n});return(0,i.jsxs)(i.Fragment,{children:[!$&&(l||_)&&H({}),(0,i.jsx)(eP.Provider,{value:F,children:(0,i.jsx)(eN,{show:$,ref:L,backdrop:u,container:g,keyboard:c,autoFocus:y,enforceFocus:x&&!f,restoreFocus:b,restoreFocusOptions:E,onEscapeKeyDown:v,onShow:h,onHide:B,onEnter:K,onEntering:k,onEntered:O,onExit:j,onExiting:w,onExited:U,manager:S||(f?(M.current||(M.current=new eV({handleContainerOverflow:!1})),M.current):(o||(o=new eV(void 0)),o)),transition:eG,backdropTransition:eX,renderBackdrop:W,renderDialog:H})})]})});eq.displayName="Offcanvas",eq.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var eY=Object.assign(eq,{Body:eT,Header:eA,Title:eK});let ez=p.forwardRef((e,t)=>{let n=(0,p.useContext)(ei);return(0,i.jsx)(eY,{ref:t,show:!!(null!=n&&n.expanded),...e,renderStaticNode:!0})});ez.displayName="NavbarOffcanvas";let eJ=(0,E.Z)("navbar-text",{Component:"span"}),eQ=p.forwardRef((e,t)=>{let{bsPrefix:n,expand:r,variant:o,bg:a,fixed:l,sticky:s,className:u,as:c="nav",expanded:f,onToggle:h,onSelect:m,collapseOnSelect:g,...y}=b(e,{expanded:"onToggle"}),x=(0,C.vE)(n,"navbar"),E=(0,p.useCallback)((...e)=>{null==m||m(...e),g&&f&&(null==h||h(!1))},[m,g,f,h]);void 0===y.role&&"nav"!==c&&(y.role="navigation");let O=`${x}-expand`;"string"==typeof r&&(O=`${O}-${r}`);let j=(0,p.useMemo)(()=>({onToggle:()=>null==h?void 0:h(!f),bsPrefix:x,expanded:!!f,expand:r}),[x,f,r,h]);return(0,i.jsx)(ei.Provider,{value:j,children:(0,i.jsx)(v.Provider,{value:E,children:(0,i.jsx)(c,{ref:t,...y,className:d()(u,x,r&&O,o&&`${x}-${o}`,a&&`bg-${a}`,s&&`sticky-${s}`,l&&`fixed-${l}`)})})})});eQ.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},eQ.displayName="Navbar";var e0=Object.assign(eQ,{Brand:O,Collapse:el,Offcanvas:ez,Text:eJ,Toggle:ec});n(4391);let e1=p.createContext(null);e1.displayName="NavContext";let e2=p.createContext(null);var e4=n(861);let e6=["as","active","eventKey"];function e9({key:e,onClick:t,active:n,id:r,role:o,disabled:a}){let i=(0,p.useContext)(v),l=(0,p.useContext)(e1),s=(0,p.useContext)(e2),u=n,c={role:o};if(l){o||"tablist"!==l.role||(c.role="tab");let f=l.getControllerId(null!=e?e:null),d=l.getControlledId(null!=e?e:null);c[ey("event-key")]=e,c.id=f||r,((u=null==n&&null!=e?l.activeKey===e:n)||!(null!=s&&s.unmountOnExit)&&!(null!=s&&s.mountOnEnter))&&(c["aria-controls"]=d)}return"tab"===c.role&&(c["aria-selected"]=u,u||(c.tabIndex=-1),a&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=eu(n=>{a||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))}),[c,{isActive:u}]}let e7=p.forwardRef((e,t)=>{let{as:n=e4.ZP,active:r,eventKey:o}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,e6),[l,s]=e9(Object.assign({key:h(o,a.href),active:r},a));return l[ey("active")]=s.isActive,(0,i.jsx)(n,Object.assign({},a,l,{ref:t}))});e7.displayName="NavItem";let e8=["as","onSelect","activeKey","role","onKeyDown"],e3=()=>{},e5=ey("event-key"),te=p.forwardRef((e,t)=>{let n,r,{as:o="div",onSelect:a,activeKey:l,role:s,onKeyDown:u}=e,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,e8),f=(0,p.useReducer)(function(e){return!e},!1)[1],d=(0,p.useRef)(!1),m=(0,p.useContext)(v),g=(0,p.useContext)(e2);g&&(s=s||"tablist",l=g.activeKey,n=g.getControlledId,r=g.getControllerId);let y=(0,p.useRef)(null),x=e=>{let t=y.current;if(!t)return null;let n=eW(t,`[${e5}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;let o=n.indexOf(r);if(-1===o)return null;let a=o+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},b=(e,t)=>{null!=e&&(null==a||a(e,t),null==m||m(e,t))},E=e=>{let t;if(null==u||u(e),g){switch(e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),b(t.dataset.rrUiEventKey||null,e),d.current=!0,f())}};(0,p.useEffect)(()=>{if(y.current&&d.current){let e=y.current.querySelector(`[${e5}][aria-selected=true]`);null==e||e.focus()}d.current=!1});let C=ee(t,y);return(0,i.jsx)(v.Provider,{value:b,children:(0,i.jsx)(e1.Provider,{value:{role:s,activeKey:h(l),getControlledId:n||e3,getControllerId:r||e3},children:(0,i.jsx)(o,Object.assign({},c,{onKeyDown:E,ref:C,role:s}))})})});te.displayName="Nav";var tt=Object.assign(te,{Item:e7}),tn=n(9059),tr=(0,E.Z)("nav-item");new WeakMap;let to=["onKeyDown"],ta=p.forwardRef((e,t)=>{var n;let{onKeyDown:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,to),[a]=(0,e4.FT)(Object.assign({tagName:"a"},o)),l=eu(e=>{a.onKeyDown(e),null==r||r(e)});return(n=o.href)&&"#"!==n.trim()&&"button"!==o.role?(0,i.jsx)("a",Object.assign({ref:t},o,{onKeyDown:r})):(0,i.jsx)("a",Object.assign({ref:t},o,a,{onKeyDown:l}))});ta.displayName="Anchor";let ti=p.forwardRef(({bsPrefix:e,className:t,as:n=ta,active:r,eventKey:o,...a},l)=>{e=(0,C.vE)(e,"nav-link");let[s,u]=e9({key:h(o,a.href),active:r,...a});return(0,i.jsx)(n,{...a,...s,ref:l,className:d()(t,e,a.disabled&&"disabled",u.isActive&&"active")})});ti.displayName="NavLink",ti.defaultProps={disabled:!1};let tl=p.forwardRef((e,t)=>{let n,r;let{as:o="div",bsPrefix:a,variant:l,fill:s,justify:u,navbar:c,navbarScroll:f,className:v,activeKey:h,...m}=b(e,{activeKey:"onSelect"}),g=(0,C.vE)(a,"nav"),y=!1,x=(0,p.useContext)(ei),E=(0,p.useContext)(tn.Z);return x?(n=x.bsPrefix,y=null==c||c):E&&({cardHeaderBsPrefix:r}=E),(0,i.jsx)(tt,{as:o,ref:t,activeKey:h,className:d()(v,{[g]:!y,[`${n}-nav`]:y,[`${n}-nav-scroll`]:y&&f,[`${r}-${l}`]:!!r,[`${g}-${l}`]:!!l,[`${g}-fill`]:s,[`${g}-justified`]:u}),...m})});tl.displayName="Nav",tl.defaultProps={justify:!1,fill:!1};var ts=Object.assign(tl,{Item:tr,Link:ti});let tu=e=>{let{links:t}=e;return(0,i.jsx)(e0,{className:"bg-primary",children:(0,i.jsx)(ts,{children:t.map((e,t)=>(0,i.jsx)(ti,{as:c(),href:e.path,children:e.name},t))})})},tc=p.forwardRef(({bsPrefix:e,fluid:t,as:n="div",className:r,...o},a)=>{let l=(0,C.vE)(e,"container"),s="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:a,...o,className:d()(r,t?`${l}${s}`:l)})});tc.displayName="Container",tc.defaultProps={fluid:!1};let tf=(a=[{path:"/",name:"Home"},{path:"/projects",name:"Projects"}],e=>{let{children:t}=e;return(0,i.jsxs)("div",{className:" bg-secondary vh-100",children:[(0,i.jsx)(tu,{links:a}),(0,i.jsx)(tc,{style:{width:"75%",paddingTop:"3%"},children:(0,i.jsx)("main",{children:t})})]})}),td=e=>{let{Component:t,pageProps:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"Conor Gregg Escalante"})}),(0,i.jsx)(tf,{children:(0,i.jsx)(t,{...n})})]})};var tp=td},6821:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach(function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}}),o})};var r,o=(r=n(2613))&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,i){var l=o||"<<anonymous>>",s=i||r;if(null==n[r])return t?Error("Required "+a+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,l,a,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9059:function(e,t,n){"use strict";var r=n(7294);let o=r.createContext(null);o.displayName="CardHeaderContext",t.Z=o},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return s},vE:function(){return l},zG:function(){return u}});var r=n(7294);n(5893);let o=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:i}=o;function l(e,t){let{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}function s(){let{breakpoints:e}=(0,r.useContext)(o);return e}function u(){let{minBreakpoint:e}=(0,r.useContext)(o);return e}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4184),o=n.n(r),a=/-(.)/g,i=n(7294),l=n(6792),s=n(5893);let u=e=>e[0].toUpperCase()+e.replace(a,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=u(e),Component:n,defaultProps:r}={}){let a=i.forwardRef(({className:t,bsPrefix:r,as:a=n||"div",...i},u)=>{let c=(0,l.vE)(r,e);return(0,s.jsx)(a,{ref:u,className:o()(t,c),...i})});return a.defaultProps=r,a.displayName=t,a}},9602:function(e,t,n){"use strict";var r=n(7294),o=n(4184),a=n.n(o),i=n(5893);t.Z=e=>r.forwardRef((t,n)=>(0,i.jsx)("div",{...t,ref:n,className:a()(t.className,e)}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);