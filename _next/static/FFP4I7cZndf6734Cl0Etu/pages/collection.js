(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=r(n("Xuae")),o=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?i=!1:(f.add(l),r[s]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=i.default();function h(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},TvfF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection",function(){return n("uUOK")}])},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),i=n("i2R6"),o=n("48fX"),u=n("tCBg"),c=n("T0f4"),s=n("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){o(s,u);var c=l(s);function s(e){var i;return r(this,s),i=c.call(this,e),f&&(t.add(a(i)),n(a(i))),i}return i(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(d.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||i()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},uUOK:function(e,t,n){"use strict";n.r(t);var r=n("K2NN"),a=n("q1tI"),i=n.n(a),o=n("dRp5"),u=n("8Kt/"),c=n.n(u),s=i.a.createElement;t.default=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(a.useState)(1),u=i[0],l=i[1];return s("div",{className:"pageLayout"},s(c.a,null,s("title",null,"NextJS sample project - Collection")),s(o.a,null),s(r.g,null,s(r.h,{size:"12"},s(r.i,{variant:"headline-4"},"Buttons")),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},t?s(r.i,{variant:"headline-4"},"Hello"):"",s(r.a,{type:"submit",onClick:function(e){return function(e){e.preventDefault(),n(!0)}(e)}},"Submit")),s(r.h,{className:"contentWrapperSmall"},s(r.b,{type:"submit",onClick:function(e){return function(e){e.preventDefault(),n(!1)}(e)}},"Dismiss")),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},s(r.i,{variant:"headline-4"},"Links")),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},s("a",{href:"https://www.porsche.com",className:"removeLinkStyle"},s(r.k,null,"porsche.com"))),s(r.h,{size:"12",className:"contentWrapperBig"},s("a",{href:"#hashTest",className:"removeLinkStyle"},s(r.l,null,"Test PLinkPure")),s(r.l,{href:"#propHashTest"},"Test propHash")),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},s(r.i,{variant:"headline-4"},"Icons")),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},s(r.p,{size:"small"})),s(r.h,{size:"12"},s(r.j,{size:"medium",name:"highway",role:"img"})),s(r.h,{size:"12"},s(r.d,{className:"divider"})),s(r.h,{size:"12"},s(r.i,{variant:"headline-4"},"You are on Page ",u," Page")),s(r.h,{size:"12"},s(r.m,{"data-testid":"pagination",totalItemsCount:11,itemsPerPage:3,activePage:u,onPageChange:function(e){l(e.detail.page)}}))))}}},[["TvfF",1,2,4,0,3]]]);