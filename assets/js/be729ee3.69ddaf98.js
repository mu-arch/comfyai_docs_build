"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[616],{6117:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Join",description:"The join listener executes an action when a user joins your server."},s="Join",u={unversionedId:"join",id:"join",title:"Join",description:"The join listener executes an action when a user joins your server.",source:"@site/internal/automations/join.md",sourceDirName:".",slug:"/join",permalink:"/comfyai_docs_build/automations/join",editUrl:"test/internal/automations/join.md",tags:[],version:"current",lastUpdatedAt:1642629601,formattedLastUpdatedAt:"1/19/2022",frontMatter:{title:"Join",description:"The join listener executes an action when a user joins your server."},sidebar:"build",previous:{title:"Introduction to automation",permalink:"/comfyai_docs_build/automations/what-are-when-commands"},next:{title:"Restore",permalink:"/comfyai_docs_build/automations/restore"}},c=[{value:"Listener expression",id:"listener-expression",children:[],level:4},{value:"Possible arguments",id:"possible-arguments",children:[{value:"State",id:"state",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Additional examples",id:"additional-examples",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"join"},"Join"),(0,a.kt)("h4",{id:"listener-expression"},"Listener expression"),(0,a.kt)("p",null,"The join listener executes an action when a user joins your server."),(0,a.kt)("h2",{id:"possible-arguments"},"Possible arguments"),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("p",null,"Allows you granular control over the historic join state of the user joining your server."),(0,a.kt)("p",null,"This argument takes a keyword value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"join"),(0,a.kt)("td",{parentName:"tr",align:null},"Matches any join type. Is the default value if state is not defined.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejoin"),(0,a.kt)("td",{parentName:"tr",align:null},"Matches rejoins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"firstjoin"),(0,a.kt)("td",{parentName:"tr",align:null},"Matches first time joins")))),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"when join state=rejoin -> restore")),(0,a.kt)("p",null,"This will trigger when a user rejoins the server after having already been inside it. It will restore the user's roles and nickname to their state when the user left the server."),(0,a.kt)("h2",{id:"additional-examples"},"Additional examples"),(0,a.kt)("p",null,"None"))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);