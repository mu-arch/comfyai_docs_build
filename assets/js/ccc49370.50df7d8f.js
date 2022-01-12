"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[103],{5926:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(7294),l=a(7027),r=a(7542),i=a(955),o=a(1614),s=a(8746);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(8865),d=a(3117),g=a(102),u=a(6010),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function v(e){var t=e.toc,a=e.className,l=e.linkClassName,r=e.isChild;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(v,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function b(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,r=e.linkClassName,i=void 0===r?"table-of-contents__link":r,o=e.linkActiveClassName,s=void 0===o?void 0:o,m=e.minHeadingLevel,u=e.maxHeadingLevel,b=(0,g.Z)(e,p),h=(0,c.LU)(),E=null!=m?m:h.tableOfContents.minHeadingLevel,f=null!=u?u:h.tableOfContents.maxHeadingLevel,_=(0,c.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,n.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:E,maxHeadingLevel:f}}),[i,s,E,f]);return(0,c.Si)(N),n.createElement(v,(0,d.Z)({toc:_,className:l,linkClassName:i},b))}var h="tableOfContents_35-E",E=["className"];var f=function(e){var t=e.className,a=(0,g.Z)(e,E);return n.createElement("div",{className:(0,u.Z)(h,"thin-scrollbar",t)},n.createElement(b,(0,d.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))};var _=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,d=a.assets,g=a.metadata,u=g.title,p=g.description,v=g.nextItem,b=g.prevItem,h=g.date,E=g.tags,_=g.authors,N=s.hide_table_of_contents,P=s.keywords,Z=s.toc_min_heading_level,k=s.toc_max_heading_level,y=null!=(t=d.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(f,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:k}):void 0},n.createElement(l.Z,{title:u,description:p,keywords:P,image:y},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:d,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(v||b)&&n.createElement(m,{nextItem:v,prevItem:b}))}},955:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),l=a(5697),r=a.n(l),i=a(6010),o=a(3905),s=a(1614),m=a(8746),c=a(1402),d=a(8865),g=a(3117),u=a(102),p=a(1300),v=a(4369),b=a(8676),h=a(4593),E=a(650),f=["mdxType","originalType"];var _={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,r=(l.mdxType,l.originalType,(0,u.Z)(l,f));return n.createElement(e.props.originalType,r)}return e}(e)}));return n.createElement(p.Z,e,t)},code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(v.Z,e):n.createElement("code",e)},a:function(e){return n.createElement(m.Z,e)},pre:function(e){var t,a=e.children;return(0,n.isValidElement)(a)&&(0,n.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:n.createElement(v.Z,(0,n.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(E.Z,(0,g.Z)({},e,{summary:a}),l)},h1:(0,b.Z)("h1"),h2:(0,b.Z)("h2"),h3:(0,b.Z)("h3"),h4:(0,b.Z)("h4"),h5:(0,b.Z)("h5"),h6:(0,b.Z)("h6"),img:function(e){return n.createElement(h.Z.Source,e)}};a(8584),a(6725);function N(e){e.editUrl;return n.createElement(n.Fragment,null)}N.propTypes={editUrl:r().string};var P=N,Z={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},k=a(1921),y=a(6729);function T(e){var t,a,l,r,g=(l=(0,d.c2)().selectMessage,function(e){var t=Math.ceil(e);return l(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=(0,c.C)().withBaseUrl,p=e.children,v=e.frontMatter,b=e.assets,h=e.metadata,E=e.truncated,f=e.isBlogPostPage,N=void 0!==f&&f,T=h.date,C=h.formattedDate,x=h.permalink,w=h.tags,L=h.readingTime,H=h.title,D=h.editUrl,M=h.authors,I=null!=(t=b.image)?t:v.image,A=v.url;return n.createElement("article",{className:N?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(r=N?"h1":"h2",n.createElement("header",{className:Z.blogHeader},n.createElement(r,{className:Z.blogPostTitle,itemProp:"headline"},N?H:n.createElement(m.Z,{itemProp:"url",to:A||x},H)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(y.Z,{authors:M,assets:b})),n.createElement("div",{className:(0,i.Z)(Z.blogPostData,"margin-vert--md","col")},n.createElement("div",{className:Z.blogPostDataContainer},n.createElement("time",{dateTime:T,itemProp:"datePublished"},C),void 0!==L&&n.createElement(n.Fragment,null," \xb7 ",g(L))))))),I&&n.createElement("meta",{itemProp:"image",content:u(I,{absolute:!0})}),n.createElement("div",{className:(0,i.Z)("markdown",[Z.blogPost__body]),itemProp:"articleBody"},n.createElement(o.Zo,{components:_},p)),(w.length>0||E)&&n.createElement("footer",{className:(0,i.Z)("row docusaurus-mt-lg",(a={},a[Z.blogPostDetailsFull]=N,a))},w.length>0&&n.createElement("div",{className:(0,i.Z)("col",{"col--9":!N})},n.createElement("div",{className:Z.tagsList},n.createElement(k.Z,{tags:w}))),N&&D&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(P,{editUrl:D})),!N&&E&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(m.Z,{to:h.permalink,"aria-label":"Read more about "+H},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}T.propTypes={children:r().node,frontMatter:r().object,assets:r().object,metadata:r().shape({date:r().string,formattedDate:r().string,permalink:r().string,tags:r().arrayOf(r().object),readingTime:r().string,title:r().string,editUrl:r().string,authors:r().arrayOf(r().object)}),truncated:r().bool,isBlogPostPage:r().bool},T.defaultProps={isBlogPostPage:!1};var C=T}}]);