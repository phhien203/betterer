"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3501],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),b=a,m=c["".concat(i,".").concat(b)]||c[b]||d[b]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1354:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],s={id:"betterer.bettereroptionsresults",title:"BettererOptionsResults",sidebar_label:"BettererOptionsResults",slug:"/betterer.bettereroptionsresults"},i=void 0,p={unversionedId:"api/betterer.bettereroptionsresults",id:"api/betterer.bettereroptionsresults",isDocsHomePage:!1,title:"BettererOptionsResults",description:"API &gt; @betterer/betterer &gt; BettererOptionsResults",source:"@site/docs/api/betterer.bettereroptionsresults.md",sourceDirName:"api",slug:"/betterer.bettereroptionsresults",permalink:"/betterer/docs/betterer.bettereroptionsresults",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettereroptionsresults.md",tags:[],version:"current",frontMatter:{id:"betterer.bettereroptionsresults",title:"BettererOptionsResults",sidebar_label:"BettererOptionsResults",slug:"/betterer.bettereroptionsresults"}},u=[{value:"Signature",id:"signature",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],d={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettereroptionsresults"},"BettererOptionsResults")),(0,o.kt)("p",null,"Options for when you create a ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererresultssummary"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererResultsSummary"))," via the ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.results"},(0,o.kt)("inlineCode",{parentName:"a"},"betterer.results()")," API"),"."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface BettererOptionsResults \n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The options object will be validated by ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," and turned into a ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererConfig")),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.configpaths"},"configPaths?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionspaths"},"BettererOptionsPaths")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A path to a ",(0,o.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/test-definition-file"},"test definition file")," containing ",(0,o.kt)("strong",{parentName:"td"},"Betterer")," tests, or an array of them. All ",(0,o.kt)("code",null,"configPaths")," should be relative to the ",(0,o.kt)("code",null,"cwd"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.cwd"},"cwd?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The current working directory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.excludes"},"excludes?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsexcludes"},"BettererOptionsExcludes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A string or ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match file paths that should be excluded from the ",(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultssummary"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererResultsSummary")),", or an array of them. Will be converted into ",(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigexcludes"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererConfigExcludes")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.filters"},"filters?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsfilters"},"BettererOptionsFilters")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A string or ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match the names of relevant tests, or an array of them. Will be converted into ",(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigfilters"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererConfigFilters")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.includes"},"includes?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsincludes"},"BettererOptionsIncludes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A ",(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," pattern to match file paths that should be included in the ",(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultssummary"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererResultsSummary")),", or an array of them.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults.resultspath"},"resultsPath?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The path to the ",(0,o.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/results-file"},"results file"),". The ",(0,o.kt)("code",null,"resultsPath")," should be relative to the ",(0,o.kt)("code",null,"cwd"),".")))))}c.isMDXComponent=!0}}]);