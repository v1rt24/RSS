<template>
  <div class="post">
    <time>{{ post.pubDate | FilterDate('datetime') }}</time>
    <h1>
      <NuxtLink :to="{name: 'post-id', params: {id: post.guid}}">{{ post.title }}</NuxtLink>
    </h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
import FilterDate from 'xmlProd/filters/data.filter';

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  filters: {
    FilterDate,
  },
};
</script>

<style scoped>
.post {
  width: 300px;
  border: 1px solid #cccccc;
  padding: 20px;
}

.post time {
  font-size: 12px;
}

.post h1 {
  font-size: 16px;
  padding: 10px 0;
}

.post a {
  line-height: 1.3em;
}

.post p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.9em;
}
</style>
