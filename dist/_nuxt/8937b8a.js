(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(t,e,c){"use strict";c.r(e);c(15);var r=c(2),n={name:"Contact",head:function(){return{title:"Amanda Graham - Contact"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var c,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$prismic,r=t.error,e.prev=1,e.next=4,c.api.getSingle("contact");case 4:return n=e.sent.data,e.abrupt("return",{contact:n});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},o=c(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"columns is-centered"},[c("div",{staticClass:"column is-four-fifths box"},[t._m(0),t._v(" "),c("section",{staticClass:"hero"},[c("img",{attrs:{"data-src":t.contact.image.url,width:"",height:"","uk-img":""}})]),t._v(" "),c("div",{staticClass:"container info"},[c("prismic-rich-text",{attrs:{field:t.contact.fee}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.payment}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.cancellation}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.offer}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.offer-t.details}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.email}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.telephone}}),t._v(" "),c("prismic-rich-text",{attrs:{field:t.contact.location}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[e("h1",[this._v("Information")])])])}],!1,null,null,null);e.default=component.exports}}]);