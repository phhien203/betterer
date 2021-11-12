"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4750],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},278:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={id:"workflow",title:"Workflow",slug:"/workflow"},s=void 0,p={unversionedId:"workflow",id:"workflow",isDocsHomePage:!1,title:"Workflow",description:'There is not a perfect "one-size-fits-all" workflow for all teams, but here\'s a few recommendations:',source:"@site/docs/workflow.md",sourceDirName:".",slug:"/workflow",permalink:"/betterer/docs/workflow",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/workflow.md",tags:[],version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1636753986,formattedLastUpdatedAt:"11/12/2021",frontMatter:{id:"workflow",title:"Workflow",slug:"/workflow"},sidebar:"docs",previous:{title:"Running Betterer",permalink:"/betterer/docs/running-betterer"},next:{title:"Test definition file",permalink:"/betterer/docs/test-definition-file"}},u=[],c={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'There is not a perfect "one-size-fits-all" workflow for all teams, but here\'s a few recommendations:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should commit the results file (e.g. ",(0,a.kt)("a",{parentName:"p",href:"./results-file"},(0,a.kt)("inlineCode",{parentName:"a"},".betterer.results")),") to source control. You should think of this file like a ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"Jest Snapshot file"),", and review any changes carefully.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should run ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," in Pre-commit mode (",(0,a.kt)("a",{parentName:"p",href:"./running-betterer#pre-commit-mode"},(0,a.kt)("inlineCode",{parentName:"a"},"betterer precommit")),") as a pre-commit hook - perhaps using ",(0,a.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky"},"husky")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," as part of a build pipeline along with other static analysis tools and tests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should run ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," in CI mode (",(0,a.kt)("a",{parentName:"p",href:"./running-betterer#ci-mode-run-your-tests-and-throw-on-changes"},(0,a.kt)("inlineCode",{parentName:"a"},"betterer ci")),") when running on a build server. When ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," runs in CI mode, it will throw an error when the tests results do not exactly match whatever is in the results file. This ensures that the ",(0,a.kt)("a",{parentName:"p",href:"./results-file"},"results file")," accurately reflects the state of the codebase.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should let ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," resolve merge conflicts in the ",(0,a.kt)("a",{parentName:"p",href:"./results-file"},"results file")," for you. You can run ",(0,a.kt)("a",{parentName:"p",href:"./results-file#merge"},(0,a.kt)("inlineCode",{parentName:"a"},"betterer merge"))," when you have a conflict and ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," will fix them for you."))))}f.isMDXComponent=!0}}]);