_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,o=void 0!==c&&c;return n||a&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var u=f[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),r[u]=p):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var j=h;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),c=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),y=O&&"object"===typeof O&&O.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),g=r(x,2),w=g[0],M=g[1],S=c.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,c.useEffect)((function(){var e=M&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof m?m:n&&n.locale,a=l[f+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,f,p,{locale:r})}),[p,f,M,m,t,n]);var _={ref:S,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,f,p,j,b,v,m)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var C="undefined"!==typeof m?m:n&&n.locale,P=(0,o.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);_.href=P||(0,o.addBasePath)((0,o.addLocale)(p,C,n&&n.defaultLocale))}return c.default.cloneElement(O,_)};t.default=d},dRp5:function(e,t,n){"use strict";var r=n("nKUr"),a=n("PTj2"),c=(n("q1tI"),n("rePB"));function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=n("YFqc"),s=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t,n=e.href,c=o(e,["href"]);return Object(r.jsx)(a.l,{children:Object(r.jsx)(s.a,u({href:n,as:"".concat(null!==(t="/sample-integration-nextjs")?t:"").concat(n)},c))})};t.a=function(){return Object(r.jsxs)(a.g,{children:[Object(r.jsx)(a.h,{size:12,children:Object(r.jsx)(a.i,{variant:"headline-2",align:"center",children:"Example usage of the Porsche-Design-System NextJS"})}),Object(r.jsx)(a.h,{size:12,children:Object(r.jsx)(a.d,{className:"divider"})}),Object(r.jsxs)(a.h,{size:12,children:[Object(r.jsx)(d,{href:"/collection",children:"Components Collection"}),Object(r.jsx)(d,{href:"/forms",children:"Forms"}),Object(r.jsx)(d,{href:"/utilities",children:"Utilities"}),Object(r.jsx)(d,{href:"/phn-header",children:"Phn Header"})]}),Object(r.jsx)(a.h,{size:12,children:Object(r.jsx)(a.d,{className:"divider"})})]})}},dXFA:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("PTj2"),c=n("q1tI"),o=n("dRp5"),i=n("g4pe"),s=n.n(i);t.default=function(){var e=Object(c.useState)("Change this Headline by selecting"),t=e[0],n=e[1],i=Object(c.useState)(!1),l=i[0],u=i[1],d=Object(c.useState)(!1),f=d[0],p=d[1],h=Object(c.useState)("Change this Headline by typing"),j=h[0],b=h[1],v=function(e){b(e.target.value)};return Object(r.jsxs)("div",{className:"pageLayout",children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("title",{children:"NextJS sample project - Forms"})}),Object(r.jsx)(o.a,{}),Object(r.jsxs)(a.e,{direction:"column",children:[Object(r.jsx)(a.f,{children:Object(r.jsx)(a.i,{variant:"headline-3",children:"Form examples"})}),Object(r.jsx)(a.f,{children:Object(r.jsx)(a.d,{className:"divider"})}),Object(r.jsxs)(a.f,{children:[Object(r.jsx)(a.i,{variant:"headline-4",children:t}),Object(r.jsx)("form",{children:Object(r.jsx)(a.o,{children:Object(r.jsxs)("select",{"data-testid":"select",value:t,onChange:function(e){return function(e){n(e.target.value)}(e)},children:[Object(r.jsx)("option",{value:"Headline A",children:"A"}),Object(r.jsx)("option",{value:"Headline B",children:"B"}),Object(r.jsx)("option",{value:"Headline C",children:"C"})]})})})]}),Object(r.jsx)(a.f,{children:Object(r.jsx)(a.d,{className:"divider"})}),Object(r.jsxs)(a.f,{children:[l?Object(r.jsx)(a.i,{variant:"headline-4",children:"Checkbox Works"}):"",Object(r.jsx)(a.c,{label:"Some label",hideLabel:!1,children:Object(r.jsx)("input",{"data-testid":"checkbox",type:"checkbox",name:"TestBox",onInput:function(e){u(!l)}})})]}),Object(r.jsxs)(a.f,{className:"contentWrapperSmall",children:[f?Object(r.jsx)(a.i,{variant:"headline-4",children:"Radio Works"}):"",Object(r.jsx)(a.n,{label:"Some label",hideLabel:!1,children:Object(r.jsx)("input",{"data-testid":"radiobutton",type:"radio",name:"RadioButton",onInput:function(e){p(!0)}})})]}),Object(r.jsx)(a.f,{children:Object(r.jsx)(a.d,{className:"divider"})}),Object(r.jsx)(a.f,{children:Object(r.jsx)("form",{children:Object(r.jsx)(a.s,{label:"Test TextArea",hideLabel:!1,children:Object(r.jsx)("textarea",{name:"Testarea"})})})}),Object(r.jsxs)(a.f,{className:"contentWrapperSmall",children:[Object(r.jsx)(a.i,{variant:"headline-4",children:j}),Object(r.jsx)(a.r,{label:"Test TextField",hideLabel:!1,children:Object(r.jsx)("input",{"data-testid":"input",type:"text",name:"Textfield",onChange:function(e){return v(e)}})})]}),Object(r.jsx)(a.f,{className:"contentWrapperSmall",children:Object(r.jsx)("form",{children:Object(r.jsx)(a.f,{children:Object(r.jsxs)(a.r,{children:[Object(r.jsxs)("span",{slot:"label",children:["Some label with a"," ",Object(r.jsx)("a",{"data-testid":"slottedHref",href:"https://designsystem.porsche.com",children:"Slotted Link"}),"."]}),Object(r.jsx)("input",{"data-testid":"slottedInput",type:"text","aria-invalid":!0,name:"some-name",onChange:function(e){return v(e)}})]})})})})]})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mGli:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return n("dXFA")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){i||d||(0,o.default)((function(){return f(!0)}))}),[d]),[p,d]};var c=n("q1tI"),o=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}},[["mGli",0,2,1,3]]]);