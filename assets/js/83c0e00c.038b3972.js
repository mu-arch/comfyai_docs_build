"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[626],{1578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen"},l="What are Snowflakes",c={unversionedId:"what-is-a-snowflake",id:"what-is-a-snowflake",title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen",source:"@site/internal/automations/what-is-a-snowflake.md",sourceDirName:".",slug:"/what-is-a-snowflake",permalink:"/comfyai_docs_build/automations/what-is-a-snowflake",editUrl:"test/internal/automations/what-is-a-snowflake.md",tags:[],version:"current",lastUpdatedAt:1642804196,formattedLastUpdatedAt:"1/21/2022",frontMatter:{title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen"},sidebar:"build",previous:{title:"Introduction to automation",permalink:"/comfyai_docs_build/automations/what-are-when-commands"},next:{title:"Join",permalink:"/comfyai_docs_build/automations/listener/join"}},u=[{value:"Quick explanation",id:"quick-explanation",children:[],level:2},{value:"Explanation for programmers",id:"explanation-for-programmers",children:[{value:"Format",id:"format",children:[],level:3},{value:"How to display snowflakes in Discord",id:"how-to-display-snowflakes-in-discord",children:[],level:3}],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-are-snowflakes"},"What are Snowflakes"),(0,o.kt)("p",null,"ComfyAI talks about snowflakes everywhere! So what the heck are they?"),(0,o.kt)("h2",{id:"quick-explanation"},"Quick explanation"),(0,o.kt)("p",null,"Snowflakes are a series of numbers that serve as backing IDs for Discord servers, messages, channels, reactions, etc. Pretty much everything on Discord has a number ID that can be used to lookup that item in a database. It is similar to a SKU of an item in a store."),(0,o.kt)("h2",{id:"explanation-for-programmers"},"Explanation for programmers"),(0,o.kt)("p",null,"Snowflake IDs, or snowflakes, are a form of unique identifier used in distributed computing. The format was created by Twitter and is used for the IDs of tweets. The format has been adopted by other companies, including Discord, and Instagram, which uses a modified version. "),(0,o.kt)("h3",{id:"format"},"Format"),(0,o.kt)("p",null,"Snowflakes are 64 bits. (Only 63 are used to fit in a signed integer.) The first 41 bits are a timestamp, representing milliseconds since the chosen epoch. The next 10 bits represent a machine ID, preventing clashes. Twelve more bits represent a per-machine sequence number, to allow creation of multiple snowflakes in the same millisecond."),(0,o.kt)("p",null,"Snowflakes are sortable by time, because they are based on the time they were created. Additionally, the time a snowflake was created can be calculated from the snowflake. This can be used to get snowflakes (and their associated objects) that were created before or after a particular date."),(0,o.kt)("p",null,"Discord uses snowflakes, with their epoch set to the first second of the year 2015."),(0,o.kt)("h3",{id:"how-to-display-snowflakes-in-discord"},"How to display snowflakes in Discord"),(0,o.kt)("p",null,"Visit your user settings panel in Discord, found by clicking the cogwheel in the bottom left of the app."),(0,o.kt)("p",null,'At the bottom of the left hand menu, select "Advanced".'),(0,o.kt)("p",null,'Toggle the "Developer mode" on.'),(0,o.kt)("p",null,'You can now right click on messages, channels, servers, etc and select "Copy ID" to get the backing snowflake for that resource.'))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);