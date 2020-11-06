<template>
<div class="columns is-centered">
<div class="column is-four-fifths box">

<div class="container"><img :data-src="praana.title.url" width="" height="" uk-img></div>
<section class="hero"><img :data-src="praana.image.url" width="" height="" uk-img></section>
<div class="container">
<div class="content">
<prismic-rich-text :field="praana.content"/>
</div>
</div>

</div>
</div>
</template>

<script>
export default {
  name: "Intro",
  head () {
    return {
      title: 'Amanda Graham - Praana Wellness',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const praana = (await $prismic.api.getSingle('praana')).data

      return {
        praana
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>
