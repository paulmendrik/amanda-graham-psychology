<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths box">
      <div  v-for="post in posts" :key="post.id" >
        <posts :post="post"></posts>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "~/components/Posts.vue";

export default {
  name: "Blog",
  components: { Posts },
  head () {
    return {
      title: 'Amanda Graham - Blog',
    }
  },
  async asyncData({ $prismic, error }) {
    try {

      const posts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'blog'),
        { orderings: '[my.blog.date desc]' }
      )
      return {
        posts: posts.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

