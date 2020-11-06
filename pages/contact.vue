<template>
<div class="columns is-centered">
<div class="column is-four-fifths box">

<div class="container">
<div class="title"><h1>Information</h1></div>
</div>
<section class="hero"><img :data-src="contact.image.url" width="" height="" uk-img></section>
<div class="container info">
<prismic-rich-text :field="contact.fee"/>
<prismic-rich-text :field="contact.payment"/>
<prismic-rich-text :field="contact.cancellation"/>
<prismic-rich-text :field="contact.offer"/>
<prismic-rich-text :field="contact.offer-details"/>
<prismic-rich-text :field="contact.email"/>
<prismic-rich-text :field="contact.telephone"/>
<prismic-rich-text :field="contact.location"/>
</div>

</div>
</div>
</template>

<script>
export default {
  name: "Contact",
  head () {
    return {
      title: 'Amanda Graham - Contact',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const contact = (await $prismic.api.getSingle('contact')).data

      return {
        contact
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>
