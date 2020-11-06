exports.ids = [1];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_uid.vue?vue&type=template&id=5bca60a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column is-four-fifths box\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-image\">","</div>",[_c('prismic-image',{attrs:{"field":_vm.post.image}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-full-content\">","</div>",[_vm._ssrNode("<header>","</header>",[_c('prismic-rich-text',{staticClass:"title",attrs:{"field":_vm.post.title}}),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"subtitle",attrs:{"field":_vm.post.sub_title}}),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(_vm.formattedDate))+"</p>")],2),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.post.content}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"button",attrs:{"to":"/blog"}},[_vm._v("Back Home")])],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_uid.vue?vue&type=template&id=5bca60a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_uid.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var _uidvue_type_script_lang_js_ = ({
  name: "Post",

  head() {
    return {
      title: 'Amanda Graham - Blog'
    };
  },

  async asyncData({
    $prismic,
    params,
    error
  }) {
    try {
      const post = (await $prismic.api.getByUID('blog', params.uid)).data;
      return {
        post,
        formattedDate: Intl.DateTimeFormat('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(new Date(post.date))
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/blog/_uid.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_uidvue_type_script_lang_js_ = (_uidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_uid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_uidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "551e663e"
  
)

/* harmony default export */ var _uid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_uid.js.map