exports.ids = [3];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=a660a0e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column is-four-fifths box\">","</div>",[_vm._ssrNode("<div class=\"container\"><div class=\"title\"><h1>Information</h1></div></div> <section class=\"hero\"><img"+(_vm._ssrAttr("data-src",_vm.contact.image.url))+" width height uk-img></section> "),_vm._ssrNode("<div class=\"container info\">","</div>",[_c('prismic-rich-text',{attrs:{"field":_vm.contact.fee}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.payment}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.cancellation}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.offer}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.offer-_vm.details}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.email}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.telephone}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.contact.location}})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=a660a0e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: "Contact",

  head() {
    return {
      title: 'Amanda Graham - Contact'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const contact = (await $prismic.api.getSingle('contact')).data;
      return {
        contact
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "461aa180"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map