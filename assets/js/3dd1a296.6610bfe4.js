"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8270],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2974:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={id:"angular.angular",title:"angular()",sidebar_label:"angular()",slug:"/angular.angular"},p=void 0,u={unversionedId:"api/angular.angular",id:"api/angular.angular",isDocsHomePage:!1,title:"angular()",description:"API &gt; @betterer/angular &gt; angular",source:"@site/docs/api/angular.angular.md",sourceDirName:"api",slug:"/angular.angular",permalink:"/betterer/docs/angular.angular",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/angular.angular.md",tags:[],version:"current",frontMatter:{id:"angular.angular",title:"angular()",sidebar_label:"angular()",slug:"/angular.angular"}},c=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Exceptions",id:"exceptions",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/angular"},"@betterer/angular")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/angular.angular"},"angular")),(0,l.kt)("p",null,"Use this test to incrementally introduce ",(0,l.kt)("a",{parentName:"p",href:"https://angular.io/guide/angular-compiler-options"},(0,l.kt)("strong",{parentName:"a"},"Angular")," compiler configuration")," to your codebase."),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function angular(configFilePath: string, extraCompilerOptions: CompilerOptions): BettererFileTest;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The relative path to a tsconfig.json file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extraCompilerOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"CompilerOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional ",(0,l.kt)("a",{parentName:"td",href:"https://angular.io/guide/angular-compiler-options"},(0,l.kt)("strong",{parentName:"a"},"Angular")," compiler configuration")," to enable.")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest"},"BettererFileTest")),(0,l.kt)("h2",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/errors.betterererror"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererError"))," Will throw if the user doesn't pass ",(0,l.kt)("inlineCode",{parentName:"p"},"configFilePath")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"extraCompilerOptions"),"."),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/angular.angular"},(0,l.kt)("inlineCode",{parentName:"a"},"angular"))," is a ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest")),", so you can use ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest.include"},(0,l.kt)("inlineCode",{parentName:"a"},"include()")),", ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest.exclude"},(0,l.kt)("inlineCode",{parentName:"a"},"exclude()")),", ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest.only"},(0,l.kt)("inlineCode",{parentName:"a"},"only()")),", and ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfiletest.skip"},(0,l.kt)("inlineCode",{parentName:"a"},"skip()")),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { angular } from '@betterer/angular';\n\nexport default {\n  'stricter template compilation': () =>\n    angular('./tsconfig.json', {\n      strictTemplates: true\n    })\n    .include('./src/*.ts', './src/*.html')\n};\n")))}m.isMDXComponent=!0}}]);