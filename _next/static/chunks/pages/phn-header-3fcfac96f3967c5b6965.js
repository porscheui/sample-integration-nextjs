_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Bcl":function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return Ie})),n.d(t,"c",(function(){return ge})),n.d(t,"d",(function(){return we})),n.d(t,"e",(function(){return te})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ue})),n.d(t,"h",(function(){return le})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return ke}));var r,o,a,s=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{l(r.next(e))}catch(t){a(t)}}function i(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},c=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r},u="porsche-navigation",f=!1,$=!1,d=!1,h=null,p=0,m=!1,v="undefined"!==typeof window?window:{},y=v.CSS,g=v.document||{head:{}},w={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)}},b=function(){return(g.head.attachShadow+"").indexOf("[native")>-1}(),S=function(e){return Promise.resolve(e)},k=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),x=function(e,t,n,r){n&&n.map((function(n){var r=n[0],o=n[1],a=n[2],s=e,i=M(t,a),l=R(r);w.ael(s,o,i,l),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return w.rel(s,o,i,l)}))}))},M=function(e,t){return function(n){256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}},R=function(e){return 0!==(2&e)},E=function(e,t){return void 0===t&&(t=""),function(){}},N=new WeakMap,O=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=E(0,t.$tagName$),a=function(e,t,n,r){var o=T(t),a=Oe.get(o);if(e=11===e.nodeType?e:g,a)if("string"===typeof a){e=e.head||e;var s=N.get(e),i=void 0;if(s||N.set(e,s=new Set),!s.has(o)){if(w.$cssShim$){var l=(i=w.$cssShim$.createHostStyle(r,o,a,!!(10&t.$flags$)))["s-sc"];l&&(o=l,s=null)}else(i=g.createElement("style")).innerHTML=a;e.insertBefore(i,e.querySelector("link")),s&&s.add(o)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=c(e.adoptedStyleSheets,[a]));return o}(b&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h"),2&r&&n.classList.add(a+"-s")),o()},T=function(e,t){return"sc-"+e.$tagName$},C={},A=function(e){return"object"===(e=typeof e)||"function"===e},_=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,a=null,s=!1,i=!1,l=[],c=function(t){for(var n=0;n<t.length;n++)o=t[n],Array.isArray(o)?c(o):null!=o&&"boolean"!==typeof o&&((s="function"!==typeof e&&!A(o))&&(o=String(o)),s&&i?l[l.length-1].$text$+=o:l.push(s?H(null,o):o),i=s)};if(c(n),t){t.name&&(a=t.name);var u=t.className||t.class;u&&(t.class="object"!==typeof u?u:Object.keys(u).filter((function(e){return u[e]})).join(" "))}var f=H(e,null);return f.$attrs$=t,l.length>0&&(f.$children$=l),f.$name$=a,f},H=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$name$:null};return n},P={},L=function(e,t,n,r,o,a){if(n!==r){var s=Me(e,t),i=t.toLowerCase();if("class"===t){var l=e.classList,c=I(n),u=I(r);l.remove.apply(l,c.filter((function(e){return e&&!u.includes(e)}))),l.add.apply(l,u.filter((function(e){return e&&!c.includes(e)})))}else if("ref"===t)r&&r(e);else if(s||"o"!==t[0]||"n"!==t[1]){var f=A(r);if((s||f&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var $=null==r?"":r;"list"===t?s=!1:null!=n&&e[t]==$||(e[t]=$)}}catch(d){}null==r||!1===r?e.removeAttribute(t):(!s||4&a||o)&&!f&&(r=!0===r?"":r,e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Me(v,i)?i.slice(2):i[2]+t.slice(3),n&&w.rel(e,t,n,!1),r&&w.ael(e,t,r,!1)}},j=/\s/,I=function(e){return e?e.split(j):[]},D=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||C,s=t.$attrs$||C;for(r in a)r in s||L(o,r,a[r],void 0,n,t.$flags$);for(r in s)L(o,r,a[r],s[r],n,t.$flags$)},B=function(e,t,n,s){var i,l,c,u=t.$children$[n],$=0;if(f||(d=!0,"slot"===u.$tag$&&(r&&s.classList.add(r+"-s"),u.$flags$|=u.$children$?2:1)),null!==u.$text$)i=u.$elm$=g.createTextNode(u.$text$);else if(1&u.$flags$)i=u.$elm$=g.createTextNode("");else if(i=u.$elm$=g.createElement(2&u.$flags$?"slot-fb":u.$tag$),D(null,u,!1),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),u.$children$)for($=0;$<u.$children$.length;++$)(l=B(e,u,$,i))&&i.appendChild(l);return i["s-hn"]=a,3&u.$flags$&&(i["s-sr"]=!0,i["s-cr"]=o,i["s-sn"]=u.$name$||"",(c=e&&e.$children$&&e.$children$[n])&&c.$tag$===u.$tag$&&e.$elm$&&q(e.$elm$,!1)),i},q=function(e,t){w.$flags$|=1;for(var n=e.childNodes,r=n.length-1;r>=0;r--){var o=n[r];o["s-hn"]!==a&&o["s-ol"]&&(z(o).insertBefore(o,X(o)),o["s-ol"].remove(),o["s-ol"]=void 0,d=!0),t&&q(o,t)}w.$flags$&=-2},F=function(e,t,n,r,o,s){var i,l=e["s-cr"]&&e["s-cr"].parentNode||e;for(l.shadowRoot&&l.tagName===a&&(l=l.shadowRoot);o<=s;++o)r[o]&&(i=B(null,n,o,e))&&(r[o].$elm$=i,l.insertBefore(i,X(t)))},U=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,Y(r),$=!0,o["s-ol"]?o["s-ol"].remove():q(o,!0),o.remove())},W=function(e,t){return e.$tag$===t.$tag$&&("slot"!==e.$tag$||e.$name$===t.$name$)},X=function(e){return e&&e["s-ol"]||e},z=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode},K=function(e,t){var n,r=t.$elm$=e.$elm$,o=e.$children$,a=t.$children$,s=t.$tag$,i=t.$text$;null===i?("slot"===s||D(e,t,!1),null!==o&&null!==a?function(e,t,n,r){for(var o,a=0,s=0,i=t.length-1,l=t[0],c=t[i],u=r.length-1,f=r[0],$=r[u];a<=i&&s<=u;)null==l?l=t[++a]:null==c?c=t[--i]:null==f?f=r[++s]:null==$?$=r[--u]:W(l,f)?(K(l,f),l=t[++a],f=r[++s]):W(c,$)?(K(c,$),c=t[--i],$=r[--u]):W(l,$)?("slot"!==l.$tag$&&"slot"!==$.$tag$||q(l.$elm$.parentNode,!1),K(l,$),e.insertBefore(l.$elm$,c.$elm$.nextSibling),l=t[++a],$=r[--u]):W(c,f)?("slot"!==l.$tag$&&"slot"!==$.$tag$||q(c.$elm$.parentNode,!1),K(c,f),e.insertBefore(c.$elm$,l.$elm$),c=t[--i],f=r[++s]):(o=B(t&&t[s],n,s,e),f=r[++s],o&&z(l.$elm$).insertBefore(o,X(l.$elm$)));a>i?F(e,null==r[u+1]?null:r[u+1].$elm$,n,r,s,u):s>u&&U(t,a,i)}(r,o,t,a):null!==a?(null!==e.$text$&&(r.textContent=""),F(r,null,t,a,0,a.length-1)):null!==o&&U(o,0,o.length-1)):(n=r["s-cr"])?n.parentNode.textContent=i:e.$text$!==i&&(r.data=i)},V=function(e){var t,n,r,o,a,s,i=e.childNodes;for(n=0,r=i.length;n<r;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"])for(a=t["s-sn"],t.hidden=!1,o=0;o<r;o++)if(i[o]["s-hn"]!==t["s-hn"])if(s=i[o].nodeType,""!==a){if(1===s&&a===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===s||3===s&&""!==i[o].textContent.trim()){t.hidden=!0;break}V(t)}},G=[],Q=function(e){for(var t,n,r,o,a,s,i=0,l=e.childNodes,c=l.length;i<c;i++){if((t=l[i])["s-sr"]&&(n=t["s-cr"]))for(r=n.parentNode.childNodes,o=t["s-sn"],s=r.length-1;s>=0;s--)(n=r[s])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(J(n,o)?(a=G.find((function(e){return e.$nodeToRelocate$===n})),$=!0,n["s-sn"]=n["s-sn"]||o,a?a.$slotRefNode$=t:G.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&G.map((function(e){J(e.$nodeToRelocate$,n["s-sn"])&&(a=G.find((function(e){return e.$nodeToRelocate$===n})))&&!e.$slotRefNode$&&(e.$slotRefNode$=a.$slotRefNode$)}))):G.some((function(e){return e.$nodeToRelocate$===n}))||G.push({$nodeToRelocate$:n}));1===t.nodeType&&Q(t)}},J=function(e,t){return 1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t},Y=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Y)},Z=function(e,t){var n,s=e.$hostElement$,i=e.$cmpMeta$,l=e.$vnode$||H(null,null),c=(n=t)&&n.$tag$===P?t:_(null,null,t);if(a=s.tagName,i.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},i.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return c.$attrs$[n]=s[t]}))),c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=l.$elm$=s.shadowRoot||s,r=s["s-sc"],o=s["s-cr"],f=b&&0!==(1&i.$flags$),$=!1,K(l,c),w.$flags$|=1,d){Q(c.$elm$);for(var u=void 0,h=void 0,p=void 0,m=void 0,v=void 0,y=void 0,S=0;S<G.length;S++)(h=(u=G[S]).$nodeToRelocate$)["s-ol"]||((p=g.createTextNode(""))["s-nr"]=h,h.parentNode.insertBefore(h["s-ol"]=p,h));for(S=0;S<G.length;S++)if(h=(u=G[S]).$nodeToRelocate$,u.$slotRefNode$){for(m=u.$slotRefNode$.parentNode,v=u.$slotRefNode$.nextSibling,p=h["s-ol"];p=p.previousSibling;)if((y=p["s-nr"])&&y["s-sn"]===h["s-sn"]&&m===y.parentNode&&(!(y=y.nextSibling)||!y["s-nr"])){v=y;break}(!v&&m!==h.parentNode||h.nextSibling!==v)&&h!==v&&(!h["s-hn"]&&h["s-ol"]&&(h["s-hn"]=h["s-ol"].parentNode.nodeName),m.insertBefore(h,v))}else 1===h.nodeType&&(h.hidden=!0)}$&&V(c.$elm$),w.$flags$&=-2,G.length=0},ee=function(e){return Se(e).$hostElement$},te=function(e,t,n){var r=ee(e);return{emit:function(e){return ne(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ne=function(e,t,n){var r=new CustomEvent(t,n);return e.dispatchEvent(r),r},re=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},oe=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){re(e,e.$ancestorComponent$);return je((function(){return ae(e,t)}))}e.$flags$|=512},ae=function(e,t){var n,r=E(0,e.$cmpMeta$.$tagName$),o=e.$lazyInstance$;return t?(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return $e(o,t,n)})),e.$queuedListeners$=null),n=$e(o,"componentWillLoad")):n=$e(o,"componentWillUpdate"),r(),de(n,(function(){return se(e,o,t)}))},se=function(e,t,n){var r=e.$hostElement$,o=E(0,e.$cmpMeta$.$tagName$),a=r["s-rc"];n&&O(e);var s=E(0,e.$cmpMeta$.$tagName$);Z(e,ie(e,t)),w.$cssShim$&&w.$cssShim$.updateHost(r),a&&(a.map((function(e){return e()})),r["s-rc"]=void 0),s(),o();var i=r["s-p"],l=function(){return ce(e)};0===i.length?l():(Promise.all(i).then(l),e.$flags$|=4,i.length=0)},ie=function(e,t){try{h=t,t=t.render(),e.$flags$&=-17,e.$flags$|=2}catch(n){Re(n)}return h=null,t},le=function(){return h},ce=function(e){var t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=E(0,t),o=e.$lazyInstance$,a=e.$ancestorComponent$;64&e.$flags$?($e(o,"componentDidUpdate"),r()):(e.$flags$|=64,he(n),$e(o,"componentDidLoad"),r(),e.$onReadyResolve$(n),a||fe()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Le((function(){return oe(e,!1)})),e.$flags$&=-517},ue=function(e){var t=Se(e),n=t.$hostElement$.isConnected;return n&&2===(18&t.$flags$)&&oe(t,!1),n},fe=function(e){he(g.documentElement),w.$flags$|=2,Le((function(){return ne(v,"appload",{detail:{namespace:u}})}))},$e=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Re(r)}},de=function(e,t){return e&&e.then?e.then(t):t()},he=function(e){return e.classList.add("hydrated")},pe=function(e,t,n,r){var o,a,s=Se(e),i=s.$instanceValues$.get(t),l=s.$flags$,c=s.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||A(o)?o:4&a?"false"!==o&&(""===o||!!o):2&a?parseFloat(o):1&a?String(o):o,(!(8&l)||void 0===i)&&n!==i&&(s.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&l){var u=r.$watchers$[t];u&&u.map((function(e){try{c[e](n,i,t)}catch(r){Re(r)}}))}2===(18&l)&&oe(s,!1)}},me=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],a=e[1][0];31&a||2&n&&32&a?Object.defineProperty(o,r,{get:function(){return e=r,Se(this).$instanceValues$.get(e);var e},set:function(e){pe(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Se(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;w.jmp((function(){var t=a.get(e);r[t]=(null!==n||"boolean"!==typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],r=e[1],o=r[1]||n;return a.set(o,n),512&r[0]&&t.$attrsToReflect$.push([n,o]),o}))}}return e},ve=function(e,t,r,o,a){return i(void 0,void 0,void 0,(function(){var e,o,s,i,c,u,f;return l(this,(function(l){switch(l.label){case 0:return 0!==(32&t.$flags$)?[3,5]:(t.$flags$|=32,(a=Ne(r)).then?(e=function(){},[4,a]):[3,2]);case 1:a=l.sent(),e(),l.label=2;case 2:a.isProxied||(r.$watchers$=a.watchers,me(a,r,2),a.isProxied=!0),o=E(0,r.$tagName$),t.$flags$|=8;try{new a(t)}catch($){Re($)}return t.$flags$&=-9,t.$flags$|=128,o(),s=T(r),Oe.has(s)||!a.style?[3,5]:(i=E(0,r.$tagName$),c=a.style,8&r.$flags$?[4,n.e(43).then(n.bind(null,"ziXE")).then((function(e){return e.scopeCss(c,s,!1)}))]:[3,4]);case 3:c=l.sent(),l.label=4;case 4:!function(e,t,n){var r=Oe.get(e);k&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Oe.set(e,r)}(s,c,!!(1&r.$flags$)),i(),l.label=5;case 5:return u=t.$ancestorComponent$,f=function(){return oe(t,!0)},u&&u["s-rc"]?u["s-rc"].push(f):f(),[2]}}))}))},ye=function(e){var t=e["s-cr"]=g.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ge=function(e,t){void 0===t&&(t={});var n,r=E(),o=[],a=t.exclude||[],i=v.customElements,l=g.head,c=l.querySelector("meta[charset]"),u=g.createElement("style"),f=[],$=!0;Object.assign(w,t),w.$resourcesUrl$=new URL(t.resourcesUrl||"./",g.baseURI).href,t.syncQueue&&(w.$flags$|=4),e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],r.$listeners$=t[3],r.$attrsToReflect$=[],r.$watchers$={},!b&&1&r.$flags$&&(r.$flags$|=8);var l=r.$tagName$,c=function(e){function t(t){var n=e.call(this,t)||this;return xe(t=n,r),1&r.$flags$&&(b?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),n}return s(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),$?f.push(this):w.jmp((function(){return function(e){if(0===(1&w.$flags$)){var t=Se(e),n=t.$cmpMeta$,r=E(0,n.$tagName$);if(1&t.$flags$)x(e,t,n.$listeners$);else{t.$flags$|=1,12&n.$flags$&&ye(e);for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){re(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}})),Le((function(){return ve(0,t,n)}))}r()}}(e)}))},t.prototype.disconnectedCallback=function(){var e=this;w.jmp((function(){return function(e){if(0===(1&w.$flags$)){var t=Se(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0),w.$cssShim$&&w.$cssShim$.removeHost(e)}}(e)}))},t.prototype.forceUpdate=function(){ue(this)},t.prototype.componentOnReady=function(){return Se(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleIds$=e[0],a.includes(l)||i.get(l)||(o.push(l),i.define(l,me(c,r,1)))}))})),u.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),l.insertBefore(u,c?c.nextSibling:l.firstChild),$=!1,f.length?f.map((function(e){return e.connectedCallback()})):w.jmp((function(){return n=setTimeout(fe,30)})),r()},we=function(e){var t=new URL(e,w.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname},be=new WeakMap,Se=function(e){return be.get(e)},ke=function(e,t){return be.set(t.$lazyInstance$=e,t)},xe=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],x(e,n,t.$listeners$),be.set(e,n)},Me=function(e,t){return t in e},Re=function(e){return console.error(e)},Ee=new Map,Ne=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleIds$,s=Ee.get(a);return s?s[o]:n("gb5O")("./"+a+".entry.js").then((function(e){return Ee.set(a,e),e[o]}),Re)},Oe=new Map,Te=[],Ce=[],Ae=[],_e=function(e,t){return function(n){e.push(n),m||(m=!0,t&&4&w.$flags$?Le(Pe):w.raf(Pe))}},He=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(o){Re(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Pe=function(){p++,function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Re(n)}e.length=0}(Te);var e=2===(6&w.$flags$)?performance.now()+14*Math.ceil(.1*p):1/0;He(Ce,e),He(Ae,e),Ce.length>0&&(Ae.push.apply(Ae,Ce),Ce.length=0),(m=Te.length+Ce.length+Ae.length>0)?w.raf(Pe):p=0},Le=function(e){return S().then(e)},je=_e(Ce,!0),Ie=function(){return y&&y.supports&&y.supports("color","var(--c)")?S():n.e(15).then(n.t.bind(null,"j51f",7)).then((function(){return(w.$cssShim$=v.__cssshim)?w.$cssShim$.i():0}))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),i=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var $=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,l=$.length;i<l;i++){var c=$[i];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=o.props[c],f=r[c]||new Set;f.has(u)?a=!1:(f.add(u),r[c]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}h.rewind=function(){};var p=h;t.default=p},VFiF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/phn-header",function(){return n("dME+")}])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),s=n("qXWd"),i=n("48fX"),l=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),$=!1,d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,$&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(s(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},"dME+":function(e,t,n){"use strict";n.r(t);var r=n("K2NN");var o=n("8Bcl");!function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var a=n("q1tI"),s=n.n(a),i=n("dRp5"),l=n("8Kt/"),c=n.n(l),u=s.a.createElement;(function(){var e=[];if("undefined"!==typeof window){var t=window;t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(n.e(16).then(n.t.bind(null,"x0Xq",7))),"function"===typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}()&&"undefined"!=typeof WeakMap||e.push(n.e(14).then(n.t.bind(null,"Xr7b",7)))}return Promise.all(e)})().then((function(){var e;window,"undefined"===typeof window?Promise.resolve():Object(o.b)().then((function(){return Object(o.c)([["phn-back-button_43",[[1,"phn-header",{accessToken:[1,"access-token"],locale:[1],env:[1],accessTokenState:[32]},[[0,"accessTokenFetched","handleAccessTokenFetchedEvent"],[0,"accessTokenFetchError","handleAccessTokenFetchErrorEvent"],[0,"menuOverlayOpen","handleMenuOverlayOpen"],[0,"menuOverlayClose","handleMenuOverlayClose"]]],[2,"phn-mobile-layout"],[2,"phn-menu-desktop-level-1"],[2,"phn-menu-drawer-level-1",{show:[64]},[[0,"closeEvent","handleClose"]]],[2,"phn-crest"],[2,"phn-preview-badge",{versionString:[1,"version-string"]}],[2,"phn-menu-mobile-level-1"],[2,"phn-mobile-car-series-list",{carSeries:[16],setActiveDrawer:[16],closeActiveDrawer:[16],env:[1],hideAll:[64]}],[2,"phn-car-series-list",{showOverlayHandler:[16],hideOverlayHandler:[16],keyboardShowOverlayHandler:[16],keyboardHideOverlayHandler:[16]}],[2,"phn-mobile-shops-and-more",{setActiveDrawer:[16],closeActiveDrawer:[16],env:[1]}],[2,"phn-shops-and-more",{showOverlayHandler:[8,"show-overlay-handler"],hideOverlayHandler:[8,"hide-overlay-handler"],keyboardShowOverlayHandler:[16],keyboardHideOverlayHandler:[16]}],[6,"phn-menu-drawer",{showContent:[64],hideContent:[64]},[[0,"slotUpdated","slotChange"],[0,"keydown","keyDownListener"]]],[2,"phn-burger-button"],[2,"phn-drawer-car-series-model-overview",{series:[16],closeActiveDrawer:[16]},[[0,"keydown","keyDownHandler"]]],[2,"phn-mobile-car-series-list-2",{carSeries:[16]}],[2,"phn-mobile-shops-and-more-2"],[2,"phn-car-series-model-overview",{series:[16],triggerAnalyticsEvent:[64]}],[2,"phn-shops-and-more-overview",{item:[16],triggerAnalyticsEvent:[64]}],[2,"phn-drawer-shops-and-more",{env:[1],item:[16],backButtonText:[1,"back-button-text"],backButtonId:[1,"back-button-id"],headline:[1],level:[2],setActiveDrawer:[16],closeActiveDrawer:[16]},[[0,"closeEvent","hide"]]],[2,"phn-drawer-car-series-model-overview-2",{series:[16]}],[6,"phn-mega-fly-out-overlay",{showOverlayHandler:[16],hideOverlayHandler:[16],keyboardShowOverlayHandler:[16],keyboardHideOverlayHandler:[16],active:[32],showOverlay:[64],deactivateState:[64],hideOverlay:[64]}],[2,"phn-meta-functionalities",{closeActiveDrawer:[16],setActiveDrawer:[16]}],[2,"phn-drawer-shops-and-more-2",{item:[16],headline:[1]}],[2,"phn-myporsche",{myporscheLink:[1,"myporsche-link"],myporscheText:[1,"myporsche-text"],sendMetaFunctionClickAnalyticsEvent:[16],loggedInStatusTranslations:[16],closeActiveDrawer:[16],setActiveDrawer:[16]}],[2,"phn-dealer-search",{dealerSearchText:[1,"dealer-search-text"],dealerSearchLink:[1,"dealer-search-link"],sendMetaFunctionClickAnalyticsEvent:[16]}],[2,"phn-myporsche-drawer",{loginStatus:[1,"login-status"],myPorscheText:[1,"my-porsche-text"],closeActiveDrawer:[16],setActiveDrawer:[16],env:[1],unreadMessagesCount:[2,"unread-messages-count"]}],[2,"phn-myporsche-drawer-2",{loginStatus:[1,"login-status"],myPorscheText:[1,"my-porsche-text"],unreadMessagesCount:[2,"unread-messages-count"]}],[2,"phn-myporsche-flyout",{myPorscheText:[1,"my-porsche-text"],loginStatus:[1,"login-status"],env:[1],unreadMessagesCount:[2,"unread-messages-count"],isActive:[32]},[[1,"mouseenter","mouseEnterHandler"],[1,"mouseleave","mouseLeaveHandler"]]],[2,"phn-myporsche-items-drawer",{closeActiveDrawer:[16]},[[0,"closeEvent","hideDrawer"],[0,"keydown","keyDownHandler"]]],[2,"phn-myporsche-items-drawer-2",{myPorscheText:[1,"my-porsche-text"]}],[2,"phn-shops-and-more-item",{item:[16]}],[2,"phn-car-series",{text:[1],image:[1]}],[2,"phn-car-model-list",{series:[16]}],[2,"phn-car-further-links",{items:[16]}],[2,"phn-car-meta-functionalities",{name:[1],items:[16]}],[2,"phn-myporsche-items",{myPorscheCloseHandler:[16]}],[2,"phn-car-model",{text:[513],image:[513],link:[1]}],[2,"phn-messages-link",{item:[16]}],[2,"phn-back-button",{text:[1],buttonId:[1,"button-id"]}],[2,"phn-close-button",{env:[1]}],[2,"phn-list-item",{item:[16]}],[6,"phn-button-extended",{icon:[1],cancelTabIndex:[4,"cancel-tab-index"]}],[2,"phn-headline",{text:[513]}]]]],e)}))}));t.default=function(){return u("div",{className:"pageLayout"},u(c.a,null,u("title",null,"NextJS sample project - PHN Header")),u("phn-header",{env:"preview",style:{position:"absolute",left:0,right:0}}),u("div",{style:{paddingTop:180}},u(i.a,null),u("div",null,u(r.a,null,"Some PButton")),u("div",null,u(r.l,null,"Some PLinkPure")),u("div",null,u(r.j,{name:"configurate"}),u(r.j,{name:"compare"}),u(r.j,{name:"search"}))))}},gb5O:function(e,t,n){var r={"./phn-back-button_43.entry.js":["cXV3",42]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="gb5O",e.exports=o},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),s=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||s()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["VFiF",1,2,0,3]]]);