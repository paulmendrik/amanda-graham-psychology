<template>
<div class="card">
<div class="card-image">
<prismic-image  :field="post.data.image" />
</div>
<div class="card-content">
<header>
<prismic-rich-text class="title" :field="post.data.title" />
<prismic-rich-text class="subtitle" :field="post.data.sub_title" />
<p>{{ formattedDate }}</p>
</header>
<prismic-rich-text :field="post.data.content" />
<div class="card-footer">
<a class="button" :href="link" >Read More</a>
</div>
</div>
</div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post"],
  name: "posts",
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  created() {
    (this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post.data.date)));
  }
};
</script>
