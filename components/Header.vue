<template>
  <header>
    <h1 class="title">
      <span>Amanda Graham MSc.</span>
    </h1>
    <h2 class="subtitle">Counselling Psychologist</h2>
    <Menu class="is-pulled-left" />
    <Social class="is-pulled-right" />
  </header>
</template>

<script>
import Menu from "~/components/Menu.vue";
import Social from "~/components/Social.vue";

export default {
  components: {
    Menu,
    Social
  }
};
</script>
