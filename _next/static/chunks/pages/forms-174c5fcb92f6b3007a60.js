_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),u=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var c=f[u];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var s=r.props[c],d=a[c]||new Set;d.has(s)?o=!1:(d.add(s),a[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){i(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},dXFA:function(e,t,n){"use strict";n.r(t);var a=n("K2NN"),r=n("q1tI"),o=n.n(r),i=n("dRp5"),u=n("8Kt/"),l=n.n(u),c=o.a.createElement;t.default=function(){var e=Object(r.useState)("Change this Headline by selecting"),t=e[0],n=e[1],o=Object(r.useState)(!1),u=o[0],s=o[1],d=Object(r.useState)(!1),f=d[0],p=d[1],h=Object(r.useState)("Change this Headline by typing"),m=h[0],v=h[1],y=function(e){v(e.target.value)};return c("div",{className:"pageLayout"},c(l.a,null,c("title",null,"NextJS sample project - Forms")),c(i.a,null),c(a.e,{direction:"column"},c(a.f,null,c(a.i,{variant:"headline-3"},"Form examples")),c(a.f,null,c(a.d,{className:"divider"})),c(a.f,null,c(a.i,{variant:"headline-4"},t),c("form",null,c(a.o,null,c("select",{"data-testid":"select",value:t,onChange:function(e){return function(e){n(e.target.value)}(e)}},c("option",{value:"Headline A"},"A"),c("option",{value:"Headline B"},"B"),c("option",{value:"Headline C"},"C"))))),c(a.f,null,c(a.d,{className:"divider"})),c(a.f,null,u?c(a.i,{variant:"headline-4"},"Checkbox Works"):"",c(a.c,{label:"Some label",hideLabel:!1},c("input",{"data-testid":"checkbox",type:"checkbox",name:"TestBox",onInput:function(e){s(!u)}}))),c(a.f,{className:"contentWrapperSmall"},f?c(a.i,{variant:"headline-4"},"Radio Works"):"",c(a.n,{label:"Some label",hideLabel:!1},c("input",{"data-testid":"radiobutton",type:"radio",name:"RadioButton",onInput:function(e){p(!0)}}))),c(a.f,null,c(a.d,{className:"divider"})),c(a.f,null,c("form",null,c(a.s,{label:"Test TextArea",hideLabel:!1},c("textarea",{name:"Testarea"})))),c(a.f,{className:"contentWrapperSmall"},c(a.i,{variant:"headline-4"},m),c(a.r,{label:"Test TextField",hideLabel:!1},c("input",{"data-testid":"input",type:"text",name:"Textfield",onChange:function(e){return y(e)}}))),c(a.f,{className:"contentWrapperSmall"},c("form",null,c(a.f,null,c(a.r,null,c("span",{slot:"label"},"Some label with a"," ",c("a",{"data-testid":"slottedHref",href:"https://designsystem.porsche.com"},"Slotted Link"),"."),c("input",{"data-testid":"slottedInput",type:"text","aria-invalid":!0,name:"some-name",onChange:function(e){return y(e)}})))))))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},mGli:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return n("dXFA")}])}},[["mGli",1,2,0,3]]]);