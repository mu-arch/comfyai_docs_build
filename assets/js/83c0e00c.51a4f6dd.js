"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[626],{1578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen"},s="What are Snowflakes",c={unversionedId:"what-is-a-snowflake",id:"what-is-a-snowflake",title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen",source:"@site/internal/automations/what-is-a-snowflake.md",sourceDirName:".",slug:"/what-is-a-snowflake",permalink:"/comfyai_docs_build/automations/what-is-a-snowflake",editUrl:"test/internal/automations/what-is-a-snowflake.md",tags:[],version:"current",lastUpdatedAt:1642817248,formattedLastUpdatedAt:"1/21/2022",frontMatter:{title:"What is a Discord Snowflake",description:"When commands allow you to automate Discord when events happen"},sidebar:"build",previous:{title:"The format of when commands",permalink:"/comfyai_docs_build/automations/formatting"},next:{title:"Join",permalink:"/comfyai_docs_build/automations/listener/join"}},p=[{value:"Quick explanation",id:"quick-explanation",children:[],level:2},{value:"Explanation for programmers",id:"explanation-for-programmers",children:[{value:"Format",id:"format",children:[],level:3},{value:"How to display snowflakes in Discord",id:"how-to-display-snowflakes-in-discord",children:[{value:"To enable right click &quot;Copy ID&quot;",id:"to-enable-right-click-copy-id",children:[],level:4},{value:"To view emote IDs, and get channel/mention IDs in the chatbox",id:"to-view-emote-ids-and-get-channelmention-ids-in-the-chatbox",children:[],level:4}],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-are-snowflakes"},"What are Snowflakes"),(0,r.kt)("p",null,"ComfyAI talks about snowflakes everywhere! So what the heck are they?"),(0,r.kt)("h2",{id:"quick-explanation"},"Quick explanation"),(0,r.kt)("p",null,"Snowflakes are a series of numbers that serve as backing IDs for Discord servers, messages, channels, reactions, etc. Pretty much everything on Discord has a number ID that can be used to lookup that item in a database. It is similar to a SKU of an item in a store."),(0,r.kt)("h2",{id:"explanation-for-programmers"},"Explanation for programmers"),(0,r.kt)("p",null,"Snowflake IDs, or snowflakes, are a form of unique identifier used in distributed computing. The format was created by Twitter and is used for the IDs of tweets. The format has been adopted by other companies, including Discord, and Instagram, which uses a modified version. "),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,"Snowflakes are 64 bits. (Only 63 are used to fit in a signed integer.) The first 41 bits are a timestamp, representing milliseconds since the chosen epoch. The next 10 bits represent a machine ID, preventing clashes. Twelve more bits represent a per-machine sequence number, to allow creation of multiple snowflakes in the same millisecond."),(0,r.kt)("p",null,"Snowflakes are sortable by time, because they are based on the time they were created. Additionally, the time a snowflake was created can be calculated from the snowflake. This can be used to get snowflakes (and their associated objects) that were created before or after a particular date."),(0,r.kt)("p",null,"Discord uses snowflakes, with their epoch set to the first second of the year 2015."),(0,r.kt)("h3",{id:"how-to-display-snowflakes-in-discord"},"How to display snowflakes in Discord"),(0,r.kt)("h4",{id:"to-enable-right-click-copy-id"},'To enable right click "Copy ID"'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit your user settings panel in Discord, found by clicking the cogwheel in the bottom left of the app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'At the bottom of the left hand menu, select "Advanced".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Toggle the "Developer mode" on.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can now right click on messages, channels, servers, etc and select "Copy ID" to get the backing snowflake for that resource.'))),(0,r.kt)("h4",{id:"to-view-emote-ids-and-get-channelmention-ids-in-the-chatbox"},"To view emote IDs, and get channel/mention IDs in the chatbox"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type your emote, channel, or mention.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure it became highlighted or posted which means it is richly linked.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move the cursor in front of the richly linked emote, channel, or mention.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," and hit enter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Discord will display the backing ID instead of the richly formatted link."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo of backing IDs",src:n(9488).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Unicode emotes will not have snowflakes.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9488:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_20220123_181303-d40cb36bccd434d53f81a23825cf07d1.png"}}]);