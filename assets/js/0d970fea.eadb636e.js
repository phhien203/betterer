"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1109],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,f=d["".concat(s,".").concat(b)]||d[b]||l[b]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8940:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={id:"betterer.bettereroptionsexcludes",title:"BettererOptionsExcludes",sidebar_label:"BettererOptionsExcludes",slug:"/betterer.bettereroptionsexcludes"},s=void 0,p={unversionedId:"api/betterer.bettereroptionsexcludes",id:"api/betterer.bettereroptionsexcludes",isDocsHomePage:!1,title:"BettererOptionsExcludes",description:"API &gt; @betterer/betterer &gt; BettererOptionsExcludes",source:"@site/docs/api/betterer.bettereroptionsexcludes.md",sourceDirName:"api",slug:"/betterer.bettereroptionsexcludes",permalink:"/betterer/docs/betterer.bettereroptionsexcludes",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettereroptionsexcludes.md",tags:[],version:"current",frontMatter:{id:"betterer.bettereroptionsexcludes",title:"BettererOptionsExcludes",sidebar_label:"BettererOptionsExcludes",slug:"/betterer.bettereroptionsexcludes"}},u=[{value:"Signature",id:"signature",children:[],level:2}],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettereroptionsexcludes"},"BettererOptionsExcludes")),(0,i.kt)("p",null,"A string or ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match file paths that should be excluded from an operation, or an array of them."),(0,i.kt)("h2",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type BettererOptionsExcludes = Array<string | RegExp> | string | RegExp;\n")))}d.isMDXComponent=!0}}]);