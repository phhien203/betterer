"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2171],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return b}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),s=p(t),b=i,d=s["".concat(c,".").concat(b)]||s[b]||u[b]||o;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var f={};for(var c in r)hasOwnProperty.call(r,c)&&(f[c]=r[c]);f.originalType=e,f.mdxType="string"==typeof e?e:i,a[1]=f;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7695:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return f},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],f={id:"betterer.bettererdiffer",title:"BettererDiffer",sidebar_label:"BettererDiffer",slug:"/betterer.bettererdiffer"},c=void 0,p={unversionedId:"api/betterer.bettererdiffer",id:"api/betterer.bettererdiffer",isDocsHomePage:!1,title:"BettererDiffer",description:"API &gt; @betterer/betterer &gt; BettererDiffer",source:"@site/docs/api/betterer.bettererdiffer.md",sourceDirName:"api",slug:"/betterer.bettererdiffer",permalink:"/betterer/docs/betterer.bettererdiffer",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererdiffer.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererdiffer",title:"BettererDiffer",sidebar_label:"BettererDiffer",slug:"/betterer.bettererdiffer"}},l=[{value:"Signature",id:"signature",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:l};function s(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererdiffer"},"BettererDiffer")),(0,o.kt)("p",null,"A function that compares two test results."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type BettererDiffer<DeserialisedType, DiffType> = (expected: DeserialisedType, result: DeserialisedType) => BettererDiff<DiffType>;\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererdiff"},"BettererDiff")))}s.isMDXComponent=!0}}]);