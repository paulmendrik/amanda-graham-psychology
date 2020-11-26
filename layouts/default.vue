<template>
<div class="columns is-multiline is-centered">
<div class="column is-four-fifths box">
<Header />
<nuxt />
<Bottom />
</div>
</div>
</template>

<script>
import Header from "~/components/Header.vue";
import Bottom from "~/components/Bottom.vue";

export default {
  components: {
    Header,
    Bottom
  }
};
</script>
