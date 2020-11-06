<template>
  <vk-offcanvas-content>
    <a @click="push = true"><vk-icon icon="menu" ratio="1.65"></vk-icon></a>

    <vk-offcanvas  :show.sync="push">
      <vk-offcanvas-bar class="uk-flex uk-flex-column">
        <vk-offcanvas-close @click="push = false"></vk-offcanvas-close>
        <vk-nav type="primary" center class="uk-margin-auto-vertical">
          <li @click="push = false" ><a href="/" n>Home</a></li>
          <li @click="push = false" ><a href="/blog" >Blog</a></li>
          <li @click="push = false" ><a href="/praana" >Praana Wellness</a></li>
          <li @click="push = false" ><a href="/contact" >Info & Prices</a></li>
        </vk-nav>
      </vk-offcanvas-bar>
    </vk-offcanvas>
  </vk-offcanvas-content>
</template>

<script>
export default {
  data() {
    return {
      push: false
    };
  }
};
</script>
