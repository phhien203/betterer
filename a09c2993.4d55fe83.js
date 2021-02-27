(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(115)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/introduction"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is Betterer?",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/betterer/docs/introduction",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/introduction.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614386429,sidebar_label:"Introduction",sidebar:"docs",next:{title:"Installation",permalink:"/betterer/docs/installation"}},s=[{value:"What is <strong>Betterer</strong>?",id:"what-is-betterer",children:[]},{value:"How does <strong>Betterer</strong> work?",id:"how-does-betterer-work",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-betterer"},"What is ",Object(a.b)("strong",{parentName:"h2"},"Betterer"),"?"),Object(a.b)("p",null,"Making widespread changes to a codebase can be really hard! When trying to make a radical improvement to a lot of code, one of two things often happens:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"You start a really long-lived branch that is difficult to maintain and often impossible to merge."),Object(a.b)("li",{parentName:"ol"},"You and your team have some agreement to make the improvement slowly over time, but it is forgotten about and never really happens.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Betterer")," is designed to solve this problem! ",Object(a.b)("strong",{parentName:"p"},"Betterer")," will help you make ",Object(a.b)("em",{parentName:"p"},"incremental")," improvements to your codebase, and stop you from moving further away from your goals."),Object(a.b)("h2",{id:"how-does-betterer-work"},"How does ",Object(a.b)("strong",{parentName:"h2"},"Betterer")," work?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Betterer")," is built upon an idea popularised by snapshot testing, where the result of a test is saved in a file in your codebase. However, instead of a static value, ",Object(a.b)("strong",{parentName:"p"},"Betterer")," keeps track of a value as it changes over time, and makes sure that the value changes how you want it to change!"),Object(a.b)("p",null,"When you want to make an improvement to your codebase, start by making a new test, defined in a ",Object(a.b)("a",{parentName:"p",href:"./test-definition-file"},Object(a.b)("inlineCode",{parentName:"a"},".betterer.ts"))," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { smaller } from '@betterer/constraints';\n\nexport default {\n  'thing you want to improve': {\n    test: () => runMyTest(),\n    constraint: smaller,\n    goal: 0\n  }\n};\n")),Object(a.b)("p",null,"When you run ",Object(a.b)("strong",{parentName:"p"},"Betterer")," for the first time it will store the result of your tests in a ",Object(a.b)("a",{parentName:"p",href:"./results-file"},Object(a.b)("inlineCode",{parentName:"a"},".betterer.results"))," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// BETTERER RESULTS V2.\nexports[`thing you want to improve`] = {\n  value: `12345\n`\n};\n")),Object(a.b)("p",null,"Whenever your tests run again, ",Object(a.b)("strong",{parentName:"p"},"Betterer")," will compare the new result against the expected result."),Object(a.b)("p",null,"If it gets better, the ",Object(a.b)("a",{parentName:"p",href:"./results-file"},Object(a.b)("inlineCode",{parentName:"a"},".betterer.results"))," file will be updated with the new result \u2705! If it gets worse, your test will fail and ",Object(a.b)("strong",{parentName:"p"},"Betterer")," will throw an error \u274c!"))}p.isMDXComponent=!0}}]);