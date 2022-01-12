"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[610],{2100:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),l=a(8746),n=a(7542),o=a(955),s=a(1614),i=a(8865);function m(e){var t,a=e.metadata,m=e.items,c=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return r.createElement(n.Z,{title:h,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},955:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),l=a(5697),n=a.n(l),o=a(6010),s=a(3905),i=a(1614),m=a(8746),c=a(1402),u=a(8865),d=a(3117),g=a(102),p=a(1300),h=a(4369),b=a(8676),E=a(4593),f=a(650),P=["mdxType","originalType"];var v={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,n=(l.mdxType,l.originalType,(0,g.Z)(l,P));return r.createElement(e.props.originalType,n)}return e}(e)}));return r.createElement(p.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(h.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(m.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(a)&&(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:r.createElement(h.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(f.Z,(0,d.Z)({},e,{summary:a}),l)},h1:(0,b.Z)("h1"),h2:(0,b.Z)("h2"),h3:(0,b.Z)("h3"),h4:(0,b.Z)("h4"),h5:(0,b.Z)("h5"),h6:(0,b.Z)("h6"),img:function(e){return r.createElement(E.Z.Source,e)}};a(8584),a(6725);function T(e){e.editUrl;return r.createElement(r.Fragment,null)}T.propTypes={editUrl:n().string};var Z=T,y={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},_=a(1921),w=a(6729);function N(e){var t,a,l,n,d=(l=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return l(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=(0,c.C)().withBaseUrl,p=e.children,h=e.frontMatter,b=e.assets,E=e.metadata,f=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,N=E.date,k=E.formattedDate,M=E.permalink,D=E.tags,x=E.readingTime,C=E.title,F=E.editUrl,U=E.authors,B=null!=(t=b.image)?t:h.image,j=h.url;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(n=T?"h1":"h2",r.createElement("header",{className:y.blogHeader},r.createElement(n,{className:y.blogPostTitle,itemProp:"headline"},T?C:r.createElement(m.Z,{itemProp:"url",to:j||M},C)),r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col"},r.createElement(w.Z,{authors:U,assets:b})),r.createElement("div",{className:(0,o.Z)(y.blogPostData,"margin-vert--md","col")},r.createElement("div",{className:y.blogPostDataContainer},r.createElement("time",{dateTime:N,itemProp:"datePublished"},k),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",d(x))))))),B&&r.createElement("meta",{itemProp:"image",content:g(B,{absolute:!0})}),r.createElement("div",{className:(0,o.Z)("markdown",[y.blogPost__body]),itemProp:"articleBody"},r.createElement(s.Zo,{components:v},p)),(D.length>0||f)&&r.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(a={},a[y.blogPostDetailsFull]=T,a))},D.length>0&&r.createElement("div",{className:(0,o.Z)("col",{"col--9":!T})},r.createElement("div",{className:y.tagsList},r.createElement(_.Z,{tags:D}))),T&&F&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(Z,{editUrl:F})),!T&&f&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(m.Z,{to:E.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}N.propTypes={children:n().node,frontMatter:n().object,assets:n().object,metadata:n().shape({date:n().string,formattedDate:n().string,permalink:n().string,tags:n().arrayOf(n().object),readingTime:n().string,title:n().string,editUrl:n().string,authors:n().arrayOf(n().object)}),truncated:n().bool,isBlogPostPage:n().bool},N.defaultProps={isBlogPostPage:!1};var k=N}}]);