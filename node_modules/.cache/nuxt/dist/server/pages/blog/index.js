exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=8a4315a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column is-four-fifths box\">","</div>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<div>","</div>",[_c('posts',{attrs:{"post":post}})],1)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=8a4315a6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts.vue?vue&type=template&id=f22e3ba6&
var Postsvue_type_template_id_f22e3ba6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<div class=\"card-image\">","</div>",[_c('prismic-image',{attrs:{"field":_vm.post.data.image}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<header>","</header>",[_c('prismic-rich-text',{staticClass:"title",attrs:{"field":_vm.post.data.title}}),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"subtitle",attrs:{"field":_vm.post.data.sub_title}}),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(_vm.formattedDate))+"</p>")],2),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.post.data.content}}),_vm._ssrNode(" <div class=\"card-footer\"><a"+(_vm._ssrAttr("href",_vm.link))+" class=\"button\">Read More</a></div>")],2)],2)}
var Postsvue_type_template_id_f22e3ba6_staticRenderFns = []


// CONCATENATED MODULE: ./components/Posts.vue?vue&type=template&id=f22e3ba6&

// EXTERNAL MODULE: ./plugins/link-resolver.js
var link_resolver = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Postsvue_type_script_lang_js_ = ({
  props: ["post"],
  name: "posts",
  data: function () {
    return {
      link: "",
      formattedDate: ""
    };
  },

  created() {
    this.link = Object(link_resolver["a" /* default */])(this.post), this.formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(this.post.data.date));
  }

});
// CONCATENATED MODULE: ./components/Posts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Postsvue_type_script_lang_js_ = (Postsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Posts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Postsvue_type_script_lang_js_,
  Postsvue_type_template_id_f22e3ba6_render,
  Postsvue_type_template_id_f22e3ba6_staticRenderFns,
  false,
  null,
  null,
  "28b54f9f"
  
)

/* harmony default export */ var Posts = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  name: "Blog",
  components: {
    Posts: Posts
  },

  head() {
    return {
      title: 'Amanda Graham - Blog'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const posts = await $prismic.api.query($prismic.predicates.at('document.type', 'blog'), {
        orderings: '[my.blog.date desc]'
      });
      return {
        posts: posts.results
      };
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var blog_component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f5a4475"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (blog_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map