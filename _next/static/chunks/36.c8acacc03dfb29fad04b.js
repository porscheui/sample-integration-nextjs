(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Srx6:function(t,e,o){"use strict";o.r(e),o.d(e,"p_text_list_item",(function(){return s}));var i=o("/MJ/"),n=o("NMfP"),r=o("uGxy"),s=function(){function t(t){Object(i.j)(this,t)}return t.prototype.componentDidLoad=function(){this.addSlottedStyles()},t.prototype.render=function(){var t,e=Object(r.a)(Object(i.d)("text-list-item"),Object(i.d)("text-list-item--"+this.typeOfList),((t={})[Object(i.d)("text-list-item--ordered-"+this.typeOfOrderedList)]="ordered"===this.typeOfList,t[Object(i.d)("text-list-item--nested")]=this.isNestedList,t));return Object(i.h)(i.a,{role:"listitem",class:e},Object(i.h)("slot",null))},Object.defineProperty(t.prototype,"typeOfList",{get:function(){return this.host.closest(Object(i.d)("text-list")).getAttribute("list-type")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"typeOfOrderedList",{get:function(){return this.host.closest(Object(i.d)("text-list")).getAttribute("order-type")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isNestedList",{get:function(){return!!this.host.closest(Object(i.d)("text-list[nested]"))},enumerable:!1,configurable:!0}),t.prototype.addSlottedStyles=function(){var t=this.host.tagName.toLowerCase(),e=t+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+t+" a:hover {\n      color: #d5001c;\n    }\n\n    "+t+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";Object(n.a)(this.host,e)},Object.defineProperty(t.prototype,"host",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),t}();s.style=':host{position:relative !important;display:list-item !important;color:inherit !important;list-style-type:none !important}:host(.p-text-list-item--unordered){padding-left:1.5rem !important}:host(.p-text-list-item--unordered)::before{content:"" !important;position:absolute !important;left:0 !important;top:calc(1.5em / 2 - 0.125em) !important;width:0.25rem !important;height:0.25rem !important;background-color:currentColor !important}:host(.p-text-list-item--unordered.p-text-list-item--nested)::before{height:1px !important;width:0.5rem !important;top:calc(1.5em / 2) !important}:host(.p-text-list-item--ordered){padding-left:2.5rem !important}:host(.p-text-list-item--ordered)::before{position:absolute !important;right:calc(100% - 24px) !important;top:0 !important;counter-increment:section !important;text-align:right !important;font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400}:host(.p-text-list-item--ordered-numbered)::before{content:counters(section, ".", decimal) "." !important}:host(.p-text-list-item--ordered-alphabetically)::before{content:counters(section, ".", lower-latin) "." !important}:host(.p-text-list-item--ordered-numbered.p-text-list-item--nested)::before{content:counters(section, ".", decimal) !important}:host(.p-text-list-item--ordered-alphabetically.p-text-list-item--nested)::before{content:counters(section, ".", lower-latin) !important}'}}]);