"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[320],{3905:function(e,t,r){r.d(t,{Zo:function(){return b},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return r?n.createElement(m,a(a({ref:t},b),{},{components:r})):n.createElement(m,a({ref:t},b))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4554:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return b},default:function(){return u}});var n=r(3117),o=r(102),l=(r(7294),r(3905)),a=["components"],i={id:"betterer.bettererfileglobs",title:"BettererFileGlobs",sidebar_label:"BettererFileGlobs",slug:"/betterer.bettererfileglobs"},c=void 0,s={unversionedId:"api/betterer.bettererfileglobs",id:"api/betterer.bettererfileglobs",isDocsHomePage:!1,title:"BettererFileGlobs",description:"API &gt; @betterer/betterer &gt; BettererFileGlobs",source:"@site/docs/api/betterer.bettererfileglobs.md",sourceDirName:"api",slug:"/betterer.bettererfileglobs",permalink:"/betterer/docs/betterer.bettererfileglobs",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererfileglobs.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererfileglobs",title:"BettererFileGlobs",sidebar_label:"BettererFileGlobs",slug:"/betterer.bettererfileglobs"}},b=[{value:"Signature",id:"signature",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:b};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfileglobs"},"BettererFileGlobs")),(0,l.kt)("p",null,"An array of ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," patterns that match file paths that will be included in an operation. All globs should be relative to the current ."),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type BettererFileGlobs = ReadonlyArray<string | ReadonlyArray<string>>;\n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Can contain nested arrays, which will be ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"},"flattened"),".")))}u.isMDXComponent=!0}}]);