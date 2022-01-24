"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[674],{4533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={title:"The format of when commands",description:"How to format when commands as set of listener and actions"},s=void 0,m={unversionedId:"formatting",id:"formatting",title:"The format of when commands",description:"How to format when commands as set of listener and actions",source:"@site/internal/automations/formatting.md",sourceDirName:".",slug:"/formatting",permalink:"/comfyai_docs_build/automations/formatting",editUrl:"test/internal/automations/formatting.md",tags:[],version:"current",lastUpdatedAt:1643058442,formattedLastUpdatedAt:"1/24/2022",frontMatter:{title:"The format of when commands",description:"How to format when commands as set of listener and actions"},sidebar:"build",previous:{title:"Introduction to automation",permalink:"/comfyai_docs_build/automations/what-are-when-commands"},next:{title:"What is a Discord Snowflake",permalink:"/comfyai_docs_build/automations/what-is-a-snowflake"}},c=[{value:"Formatting &quot;When Commands&quot;",id:"formatting-when-commands",children:[{value:"A Complete Example",id:"a-complete-example",children:[],level:3},{value:"Command breakdown",id:"command-breakdown",children:[{value:"Listener breakdown",id:"listener-breakdown",children:[],level:4},{value:"Action breakdown",id:"action-breakdown",children:[],level:4}],level:3},{value:"Additional information",id:"additional-information",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"formatting-when-commands"},'Formatting "When Commands"'),(0,r.kt)("p",null,"When commands are simple statements that declare which actions run in response to some event happening."),(0,r.kt)("p",null,"If you haven't read the Introduction to automation yet, read that first."),(0,r.kt)("h3",{id:"a-complete-example"},"A Complete Example"),(0,r.kt)("p",null,"Before we break down the parts of a When Command let's look at a real one that could be used."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo of when command formatting",src:n(2023).Z})),(0,r.kt)("p",null,"Now here's how that command looks when it's actually processed by Comfy. Notice how the actual role names were converted to strange numbers. You don't need to worry about that, but we just wanted to point it out so you don't get confused."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'when role has= <@&869466780156964915>, <@&869683374619508736> -> message content= "{listener.username} has triggered the listener!" channel= <#918390434848464907>')),(0,r.kt)("h3",{id:"command-breakdown"},"Command breakdown"),(0,r.kt)("p",null,"At the highest level, every command has two parts, a listener and an action."),(0,r.kt)("p",null,"Listeners and actions are seperated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"->")," text. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when listener -> action")),(0,r.kt)("p",null,"In the first example command ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," is our listener and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is our action:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when role -> message")),(0,r.kt)("p",null,'Almost every listener and action take "arguments", arguments are special words followed by an equals sign ',(0,r.kt)("inlineCode",{parentName:"p"},"=")," that indicate additional information about the listener or action."),(0,r.kt)("h4",{id:"listener-breakdown"},"Listener breakdown"),(0,r.kt)("p",null,"In the first example command our listener ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," has one argument ",(0,r.kt)("inlineCode",{parentName:"p"},"has"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"has= <@&869466780156964915>, <@&869683374619508736>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"has")," argument takes role mentions as values to tell the role listener specifically what to listen for, rather than listening for all role changes."),(0,r.kt)("h4",{id:"action-breakdown"},"Action breakdown"),(0,r.kt)("p",null,"Our action in the example command has two arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'content= "{listener.username} has triggered the listener!" channel= <#918390434848464907>')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"content")," indicates the textual content that will be posted in the message, and ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," indicates which channel the message will be posted to."),(0,r.kt)("p",null,"Pretty simple right!? Using these simple commands you can pretty much automate everything you need to on your Discord server."),(0,r.kt)("h3",{id:"additional-information"},"Additional information"),(0,r.kt)("p",null,"You may have noticed the ",(0,r.kt)("inlineCode",{parentName:"p"},"{listener.username}")," text inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),' action. This is called a template. Templates can be used to suck information out of the listener\'s "caller". A caller is the thing that initiated some event. For example the caller of a message, role change, or reaction is the person that did that action or had that action done upon them.'),(0,r.kt)("p",null,"The caller in this case is the person that had their roles updated. This listener makes this value available to ComfyAI by sending listener.username, which let's us replace that template with the user's actual username."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2023:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_20220124_145313-63caed1a0808e9f737c5d08954eafc59.png"}}]);