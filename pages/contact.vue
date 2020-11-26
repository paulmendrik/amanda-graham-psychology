<template>
<div class="columns is-centered">
<div class="column is-four-fifths box">

<div class="container">
<div class="title"><h1>Information</h1></div>
</div>
<section class="hero"><img :data-src="contact.image.url" width="" height="" uk-img></section>
<div class="container info">
 <div class="intro">
<prismic-rich-text :field="contact.intro"/>
 </div>

<div class="membership">
<prismic-rich-text :field="contact.membership"/>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="T8FVRQ7LCF4S2">
<button type="submit" class="uk-button uk-button-secondary">Pay Now</button>
</form>
</div>

<div class="counselling">
<prismic-rich-text :field="contact.counselling"/>

<form class="uk-form-stacked uk-width-medium" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="9A9ZPHHM7VRF8">
<input type="hidden" name="on0" value="Options">
<div class="uk-margin">
<label class="uk-form-label">Select An Option</label>
<div class="uk-form-controls">
<select class="uk-select" name="os0">
<option value="Per Session">Per Session £120.00 GBP</option>
<option value="6 Sessions">6 Sessions £690.00 GBP</option>
</select>
</div>
</div>
<input type="hidden" name="currency_code" value="GBP">
<button type="submit" class="uk-button uk-button-secondary">Pay Now</button>
</form>



</div>

<div class="support">
<prismic-rich-text :field="contact.support"/>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="KH8LTK2N6TCKS">
<button type="submit" class="uk-button uk-button-secondary">Pay Now</button>
</form>

</div>

<div class="adolescents">

<prismic-rich-text :field="contact.adolescents"/>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="GEHG6AHW27BDC">
<button type="submit" class="uk-button uk-button-secondary">Pay Now</button>
</form>

</div>

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
