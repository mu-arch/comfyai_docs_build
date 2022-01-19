"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[723],{8147:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Introduction to automation",description:"When commands allow you to automate Discord when events happen"},l=void 0,c={unversionedId:"what-are-when-commands",id:"what-are-when-commands",title:"Introduction to automation",description:"When commands allow you to automate Discord when events happen",source:"@site/internal/automations/what-are-when-commands.md",sourceDirName:".",slug:"/what-are-when-commands",permalink:"/comfyai_docs/automations/what-are-when-commands",editUrl:"test/internal/automations/what-are-when-commands.md",tags:[],version:"current",frontMatter:{title:"Introduction to automation",description:"When commands allow you to automate Discord when events happen"},sidebar:"build",next:{title:"Join",permalink:"/comfyai_docs/automations/join"}},u=[{value:"What is this?",id:"what-is-this",children:[],level:3},{value:"Introductory examples",id:"introductory-examples",children:[],level:3},{value:"Real examples",id:"real-examples",children:[],level:3},{value:"Formatting your &quot;when listeners&quot;",id:"formatting-your-when-listeners",children:[],level:3}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the automation documentation for ComfyAI."),(0,a.kt)("h3",{id:"what-is-this"},"What is this?"),(0,a.kt)("p",null,"Here you'll learn about real advantage ComfyAI offers over other bots: the ability to automate anything."),(0,a.kt)("p",null,'Comfy can automate any action on Discord and the internet to help you manage your server. The way this works is Comfy "listens" for an event to happen, then runs an action in response.'),(0,a.kt)("p",null,'You choose the "events" and the "actions" by defining short snippets of instructions we call "when listeners". That\'s a mouthful, but think of it as "I\'m listening for when something happens, then I want to do something in response".'),(0,a.kt)("h3",{id:"introductory-examples"},"Introductory examples"),(0,a.kt)("p",null,"Let's create a comparison to ensure you understand the principal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"When my dog scratches at the door, I let him into the house"')),(0,a.kt)("p",null,"The event is your dog scratching at the door, and the action is letting him in. Now imagine these examples on Discord:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When a user reacts to a specific message, give them a role"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When a user joins my server, send a welcome message in the welcome channel"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When a user sends a message with profanity, block the message, and warn that user to stop"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When a user joins my Valheim server, give them a role in Discord"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When the price of Bitcoin reaches $100k, post a message in a specific channel in Discord"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"When a user sends a message in a specific channel, post it inside my Minecraft server\'s in-game chat window"'))),(0,a.kt)("p",null,'This should be making more sense now. The first part of the sentence starting with "when" is the "event" that Comfy "listens" for. When it sees it, it performs an action in response.'),(0,a.kt)("p",null,'In the following section we\'re going to show you how simple it is to use Comfy to create these "when listeners".'),(0,a.kt)("h3",{id:"real-examples"},"Real examples"),(0,a.kt)("p",null,"show how they look with discord screen shots"),(0,a.kt)("h3",{id:"formatting-your-when-listeners"},'Formatting your "when listeners"'),(0,a.kt)("p",null,"what are keywords, arguments, argument values"))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,d=h["".concat(l,".").concat(p)]||h[p]||m[p]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);