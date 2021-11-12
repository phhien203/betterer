"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1612],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=o,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6434:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return b}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],p={id:"betterer.betterercontext.options",title:"BettererContext.options()",sidebar_label:"BettererContext.options()",slug:"/betterer.betterercontext.options"},c=void 0,l={unversionedId:"api/betterer.betterercontext.options",id:"api/betterer.betterercontext.options",isDocsHomePage:!1,title:"BettererContext.options()",description:"API &gt; @betterer/betterer &gt; BettererContext &gt; options",source:"@site/docs/api/betterer.betterercontext.options.md",sourceDirName:"api",slug:"/betterer.betterercontext.options",permalink:"/betterer/docs/betterer.betterercontext.options",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.betterercontext.options.md",tags:[],version:"current",frontMatter:{id:"betterer.betterercontext.options",title:"BettererContext.options()",sidebar_label:"BettererContext.options()",slug:"/betterer.betterercontext.options"}},s=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2}],u={toc:s};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterercontext"},"BettererContext")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterercontext.options"},"options")),(0,a.kt)("p",null,"Make changes to the context config. The updated config will be used for the next run."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"options(optionsOverride: BettererOptionsOverride): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"optionsOverride"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsoverride"},"BettererOptionsOverride")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"filters")),", ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsignores"},(0,a.kt)("inlineCode",{parentName:"a"},"ignores")),", and ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsreporters"},(0,a.kt)("inlineCode",{parentName:"a"},"reporters"))," to use for the next run.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise","<","void",">"))}b.isMDXComponent=!0}}]);