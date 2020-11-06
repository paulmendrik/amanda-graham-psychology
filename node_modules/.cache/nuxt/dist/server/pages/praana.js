exports.ids = [5];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/praana.vue?vue&type=template&id=08c4a390&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column is-four-fifths box\">","</div>",[_vm._ssrNode("<div class=\"container\"><img"+(_vm._ssrAttr("data-src",_vm.praana.title.url))+" width height uk-img></div> <section class=\"hero\"><img"+(_vm._ssrAttr("data-src",_vm.praana.image.url))+" width height uk-img></section> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_c('prismic-rich-text',{attrs:{"field":_vm.praana.content}})],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/praana.vue?vue&type=template&id=08c4a390&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/praana.vue?vue&type=script&lang=js&
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
/* harmony default export */ var praanavue_type_script_lang_js_ = ({
  name: "Intro",

  head() {
    return {
      title: 'Amanda Graham - Praana Wellness'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const praana = (await $prismic.api.getSingle('praana')).data;
      return {
        praana
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/praana.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_praanavue_type_script_lang_js_ = (praanavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/praana.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_praanavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ac5bb25"
  
)

/* harmony default export */ var praana = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=praana.js.map