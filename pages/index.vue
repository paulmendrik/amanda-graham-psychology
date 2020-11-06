<template>
<div class="columns is-centered">
<div class="column is-four-fifths box">

<article class="columns">
<div class="column is-one-third">
<img :data-src="intro.image.url" width="" height="" uk-img>
</div>
<div class="column is-two-third">
<h1><prismic-rich-text :field="intro.title"/></h1>
<prismic-rich-text :field="intro.intro"/>
</div>
</article>
<div class="column is-full">
  <prismic-rich-text :field="intro.about"/>
</div>

</div>
</div>
</template>

<script>
export default {
  name: "Intro",
  head () {
    return {
      title: 'Amanda Graham - About Me',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const intro = (await $prismic.api.getSingle('intro')).data

      return {
        intro
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>

