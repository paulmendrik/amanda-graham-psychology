(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(t,e,r){"use strict";var n=r(3),o=r(212);n({target:"String",proto:!0,forced:r(213)("link")},{link:function(t){return o(this,"a","href",t)}})},212:function(t,e,r){var n=r(16),o=/"/g;t.exports=function(t,e,r,c){var l=String(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(c).replace(o,"&quot;")+'"'),d+">"+l+"</"+e+">"}},213:function(t,e,r){var n=r(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},214:function(t,e,r){"use strict";r.r(e);r(15);var n=r(2),o=(r(211),r(62)),c={props:["post"],name:"posts",created:function(){this.link=Object(o.a)(this.post),this.formattedDate=Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(this.post.data.date))}},l=r(10),d={name:"Blog",components:{Posts:Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("prismic-image",{attrs:{field:t.post.data.image}})],1),t._v(" "),r("div",{staticClass:"card-content"},[r("header",[r("prismic-rich-text",{staticClass:"title",attrs:{field:t.post.data.title}}),t._v(" "),r("prismic-rich-text",{staticClass:"subtitle",attrs:{field:t.post.data.sub_title}}),t._v(" "),r("p",[t._v(t._s(t.formattedDate))])],1),t._v(" "),r("prismic-rich-text",{attrs:{field:t.post.data.content}}),t._v(" "),r("div",{staticClass:"card-footer"},[r("NuxtLink",{staticClass:"button",attrs:{to:t.link,prefetch:!1}},[t._v("Read More")])],1)],1)])}),[],!1,null,null,null).exports},head:function(){return{title:"Amanda Graham - Blog"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,n=t.error,e.prev=1,e.next=4,r.api.query(r.predicates.at("document.type","blog"),{orderings:"[my.blog.date desc]"});case 4:return o=e.sent,e.abrupt("return",{posts:o.results});case 8:e.prev=8,e.t0=e.catch(1),n({statusCode:404,message:"Page not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},f=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-four-fifths box"},this._l(this.posts,(function(t){return e("div",{key:t.id},[e("posts",{attrs:{post:t}})],1)})),0)])}),[],!1,null,null,null);e.default=f.exports}}]);