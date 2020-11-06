import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d9c457c8 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _91fb92a2 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _497f2cf4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7963da5f = () => interopDefault(import('../pages/praana.vue' /* webpackChunkName: "pages/praana" */))
const _37f244c4 = () => interopDefault(import('../pages/blog/_uid.vue' /* webpackChunkName: "pages/blog/_uid" */))
const _7a95be90 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _d9c457c8,
    name: "prismic-preview"
  }, {
    path: "/blog",
    component: _91fb92a2,
    name: "blog"
  }, {
    path: "/contact",
    component: _497f2cf4,
    name: "contact"
  }, {
    path: "/praana",
    component: _7963da5f,
    name: "praana"
  }, {
    path: "/blog/:uid",
    component: _37f244c4,
    name: "blog-uid"
  }, {
    path: "/",
    component: _7a95be90,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
