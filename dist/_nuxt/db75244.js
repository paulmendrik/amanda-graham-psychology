(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(t,r,e){"use strict";e.r(r);e(15);var n=e(2),c={name:"Intro",head:function(){return{title:"Amanda Graham - About Me"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$prismic,n=t.error,r.prev=1,r.next=4,e.api.getSingle("intro");case 4:return c=r.sent.data,r.abrupt("return",{intro:c});case 8:r.prev=8,r.t0=r.catch(1),n({statusCode:404,message:"Page not found"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},o=e(10),component=Object(o.a)(c,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-four-fifths box"},[r("article",{staticClass:"columns"},[r("div",{staticClass:"column is-one-third"},[r("img",{attrs:{"data-src":this.intro.image.url,width:"",height:"","uk-img":""}})]),this._v(" "),r("div",{staticClass:"column is-two-third"},[r("h1",[r("prismic-rich-text",{attrs:{field:this.intro.title}})],1),this._v(" "),r("prismic-rich-text",{attrs:{field:this.intro.intro}})],1)]),this._v(" "),r("div",{staticClass:"column is-full"},[r("prismic-rich-text",{attrs:{field:this.intro.about}})],1)])])}),[],!1,null,null,null);r.default=component.exports}}]);