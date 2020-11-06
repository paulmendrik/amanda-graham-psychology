exports.ids = [4];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5092260a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column is-four-fifths box\">","</div>",[_vm._ssrNode("<article class=\"columns\">","</article>",[_vm._ssrNode("<div class=\"column is-one-third\"><img"+(_vm._ssrAttr("data-src",_vm.intro.image.url))+" width height uk-img></div> "),_vm._ssrNode("<div class=\"column is-two-third\">","</div>",[_vm._ssrNode("<h1>","</h1>",[_c('prismic-rich-text',{attrs:{"field":_vm.intro.title}})],1),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.intro.intro}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-full\">","</div>",[_c('prismic-rich-text',{attrs:{"field":_vm.intro.about}})],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5092260a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Intro",

  head() {
    return {
      title: 'Amanda Graham - About Me'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const intro = (await $prismic.api.getSingle('intro')).data;
      return {
        intro
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44d10f32"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map