"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[619],{5407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=["components"],o={title:"Ticket",description:"The ticket action creates a ticket for the user."},c="Ticket",s={unversionedId:"action/ticket",id:"action/ticket",title:"Ticket",description:"The ticket action creates a ticket for the user.",source:"@site/internal/automations/action/ticket.md",sourceDirName:"action",slug:"/action/ticket",permalink:"/comfyai_docs_build/automations/action/ticket",editUrl:"test/internal/automations/action/ticket.md",tags:[],version:"current",lastUpdatedAt:1644896370,formattedLastUpdatedAt:"2/14/2022",frontMatter:{title:"Ticket",description:"The ticket action creates a ticket for the user."},sidebar:"build",previous:{title:"Role",permalink:"/comfyai_docs_build/automations/action/role"}},u=[{value:"Action expression",id:"action-expression",children:[],level:4},{value:"Possible arguments",id:"possible-arguments",children:[{value:"Mode",id:"mode",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Channel",id:"channel",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"Message",id:"message",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"Roles",id:"roles",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3}],level:2},{value:"Additional examples",id:"additional-examples",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ticket"},"Ticket"),(0,r.kt)("h4",{id:"action-expression"},"Action expression"),(0,r.kt)("p",null,"The ticket action creates a ticket for the user."),(0,r.kt)("h2",{id:"possible-arguments"},"Possible arguments"),(0,r.kt)("h3",{id:"mode"},"Mode"),(0,r.kt)("p",null,"Defines if the ticket will use Discord channels or threads. Threads are superior because of native archiving, search features, and channels are limited to 500 per server. Unfortunately, thread mode requires the server to be boosted, because Discord does not allow private threads in unboosted servers (reeeee)."),(0,r.kt)("p",null,"This argument takes a keyword value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thread"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets created tickets to spawn threads under the ticket channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets created tickets to spawn channels under the ticket channel")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when button channel=<#827599705285459999> -> ticket channel=<#827599705285459999>")),(0,r.kt)("p",null,"This will trigger when a user has the specified set of roles. It will send a message with the username of the user that triggered the listener to the specified channel."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"channel"},"Channel"),(0,r.kt)("p",null,"Defines which channel the threads or channels will be attached to. If channel mode is used channels will appear directly below the defined channel."),(0,r.kt)("p",null,"This argument takes a channel mention value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Channel Mention"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Example: #channel-name (interpreted as <#822510327911546890>)")))),(0,r.kt)("p",null,"You do not need to follow a special procedure to get the snowflake like you do for messages. While typing your command simply type # and a list of channels will appear. Select one and Discord will highlight the channel name so you know it is richly linked. ComfyAI will always rich links as a Snowflake."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when button channel=<#827599705285459999> -> ticket channel=<#827599705285459999>")),(0,r.kt)("p",null,"When the button is pressed a ticket is created."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"message"},"Message"),(0,r.kt)("p",null,"Defines the default message that is posted at the top of each ticket."),(0,r.kt)("p",null,"This argument takes a String value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Example: Welcome to your new ticket. Please write why you are contacting us!")))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'when button channel=<#827599705285459999> -> ticket channel=<#827599705285459999> message="Welcome to your new ticket. Please write why you are contacting us!"')),(0,r.kt)("p",null,"When the button is pressed a ticket is created with the defined message."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("p",null,"Defines the roles that have access to the ticket system. For example you could include @moderator here to be able to see newly opened tickets."),(0,r.kt)("p",null,"This argument takes a role mention value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Role Mention"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Example: @testrole (interpreted as <@&929204504572862537>)")))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'when button channel=<#827599705285459999> -> ticket channel=<#827599705285459999> message="Welcome to your new ticket. Please write why you are contacting us!" role=<@&929204504572862537>')),(0,r.kt)("p",null,"When the button is pressed a ticket is created with the defined message and roles mentioned."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-examples"},"Additional examples"),(0,r.kt)("p",null,"None"))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=l,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);