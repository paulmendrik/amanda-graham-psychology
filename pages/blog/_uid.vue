<template>
<div class="columns is-centered">
<div class="column is-four-fifths box">

<div class="card">
<div class="card-image"><prismic-image :field="post.image" /></div>
<div class="card-full-content">
<header>
  <prismic-rich-text class="title" :field="post.title" />
  <prismic-rich-text class="subtitle" :field="post.sub_title" />
  <p>{{ formattedDate }}</p>
</header>
<prismic-rich-text :field="post.content" />
<div class="card-footer">
  <a class="button" href="/blog" >Back Home</a>
</div>
</div>
</div>

</div>
</div>
</template>

<script>


export default {
  name: "Post",
  head () {
    return {
      title: 'Amanda Graham - Blog',
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      const post = (await $prismic.api.getByUID('blog', params.uid)).data

      return {
        post,
        formattedDate: Intl.DateTimeFormat('en-GB', { day: 'numeric',  month: 'long', year: 'numeric' }).format(new Date(post.date)),
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
