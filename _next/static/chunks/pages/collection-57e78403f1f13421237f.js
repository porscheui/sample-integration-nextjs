_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}},"5fIB":function(e,t,n){var a=n("7eYB");e.exports=function(e){if(Array.isArray(e))return a(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var d=r.props[c],l=a[c]||new Set;l.has(d)?i=!1:(l.add(d),a[c]=l)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},TvfF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection",function(){return n("uUOK")}])},Xuae:function(e,t,n){"use strict";var a=n("mPvQ"),r=n("/GRZ"),i=n("i2R6"),o=n("qXWd"),u=n("48fX"),s=n("tCBg"),c=n("T0f4");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=!1,p=function(e){u(n,e);var t=d(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,f&&i._hasHeadManager&&(i.props.headManager.mountedInstances.add(o(i)),i.emitChange()),i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var a=n("5fIB"),r=n("rlHP"),i=n("KckH"),o=n("kG2m");e.exports=function(e){return a(e)||r(e)||i(e)||o()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},uUOK:function(e,t,n){"use strict";n.r(t);var a=n("K2NN"),r=n("q1tI"),i=n.n(r),o=n("dRp5"),u=n("8Kt/"),s=n.n(u),c=i.a.createElement;t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=Object(r.useState)(1),u=i[0],d=i[1];return c("div",{className:"pageLayout"},c(s.a,null,c("title",null,"NextJS sample project - Collection")),c(o.a,null),c(a.g,null,c(a.h,{size:"12"},c(a.i,{variant:"headline-4"},"Buttons")),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},t?c(a.i,{variant:"headline-4"},"Hello"):"",c(a.a,{type:"submit",onClick:function(e){return function(e){e.preventDefault(),n(!0)}(e)}},"Submit")),c(a.h,{className:"contentWrapperSmall"},c(a.b,{type:"submit",onClick:function(e){return function(e){e.preventDefault(),n(!1)}(e)}},"Dismiss")),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},c(a.i,{variant:"headline-4"},"Links")),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},c("a",{href:"https://www.porsche.com",className:"removeLinkStyle"},c(a.k,null,"porsche.com"))),c(a.h,{size:"12",className:"contentWrapperBig"},c("a",{href:"#hashTest",className:"removeLinkStyle"},c(a.l,null,"Test PLinkPure")),c(a.l,{href:"#propHashTest"},"Test propHash")),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},c(a.i,{variant:"headline-4"},"Icons")),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},c(a.p,{size:"small"})),c(a.h,{size:"12"},c(a.j,{size:"medium",name:"highway",role:"img"})),c(a.h,{size:"12"},c(a.d,{className:"divider"})),c(a.h,{size:"12"},c(a.i,{variant:"headline-4"},"You are on Page ",u," Page")),c(a.h,{size:"12"},c(a.m,{"data-testid":"pagination",totalItemsCount:11,itemsPerPage:3,activePage:u,onPageChange:function(e){d(e.detail.page)}}))))}}},[["TvfF",1,2,0,3]]]);