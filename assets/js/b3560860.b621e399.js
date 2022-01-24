"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[871],{1602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Count",description:"The count action increments a counter key."},u="Count",c={unversionedId:"action/count",id:"action/count",title:"Count",description:"The count action increments a counter key.",source:"@site/internal/automations/action/count.md",sourceDirName:"action",slug:"/action/count",permalink:"/comfyai_docs_build/automations/action/count",editUrl:"test/internal/automations/action/count.md",tags:[],version:"current",frontMatter:{title:"Count",description:"The count action increments a counter key."},sidebar:"build",previous:{title:"Restore",permalink:"/comfyai_docs_build/automations/action/restore"}},s=[{value:"Action expression",id:"action-expression",children:[],level:4},{value:"Possible arguments",id:"possible-arguments",children:[{value:"Key",id:"key",children:[],level:3},{value:"Trigger",id:"trigger",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Roles",id:"roles",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"Duration (Not implemented)",id:"duration-not-implemented",children:[],level:3}],level:2},{value:"Limitations",id:"limitations",children:[],level:2},{value:"Additional examples",id:"additional-examples",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"count"},"Count"),(0,i.kt)("h4",{id:"action-expression"},"Action expression"),(0,i.kt)("p",null,"The count action increments a counter key."),(0,i.kt)("p",null,"A counter has two parts, the ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," action and the ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," listener. When a count action increments the count of a specific key to the set amount, the counter listener triggers an action."),(0,i.kt)("p",null,"The Count required to trigger the Counter Listener's action is always set with this Count Action. This means different counts can be used to trigger the Counter Listener."),(0,i.kt)("h2",{id:"possible-arguments"},"Possible arguments"),(0,i.kt)("h3",{id:"key"},"Key"),(0,i.kt)("p",null,"Defines the key name of the count action to trigger the counter listener."),(0,i.kt)("p",null,'This argument takes a string (raw text surrounded by "") value.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The same name as the counter listener to connect the action")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,"Defines the count that must be achieved to trigger the counter listener."),(0,i.kt)("p",null,"This argument takes a number value."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The count you want to trigger the Counter Listener's action at")))),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"when reaction emote= <:UwU:840311365813010492> -> count key= my_uwu_counter trigger= 10")),(0,i.kt)("p",null,'When the reaction listener fires, the count for "my_uwu_counter" is incremented by one.'),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Defines the roles that can increment the counter."),(0,i.kt)("p",null,"This argument takes a role mention value."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Max Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Role Mention"),(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null},"Example: @testrole (interpreted as <@&929204504572862537>)")))),(0,i.kt)("p",null,"When entering the command into Discord you do not need to type the snowflake manually. Simply type @ and a list of roles will appear, continue typing a character or two and then pick the role you want from the list. Discord will transmit the snowflake behind the scenes in a way Comfy can interpret."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"when reaction emote= <:UwU:840311365813010492> -> count key= my_uwu_counter trigger= 10 roles= <@&929204504572862537>")),(0,i.kt)("p",null,'When the reaction listener fires, the count for "my_uwu_counter" is incremented by one IF the reaction author had the role <@&929204504572862537>.'),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"duration-not-implemented"},"Duration (Not implemented)"),(0,i.kt)("p",null,"Defines a duration on the listener resource being counted, for when it will no longer increment the counter."),(0,i.kt)("p",null,"This argument takes a duration value."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Max Duration"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Duration"),(0,i.kt)("td",{parentName:"tr",align:null},"1 Month"),(0,i.kt)("td",{parentName:"tr",align:null},"Example: 10s (10 seconds) 1m (60 seconds) 3d (3 days) 1w (1 week) 1m (1 month)")))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Currently, the count action can only be tied to a reaction listener. In the future this limitation will be removed."),(0,i.kt)("h2",{id:"additional-examples"},"Additional examples"),(0,i.kt)("p",null,"None"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);