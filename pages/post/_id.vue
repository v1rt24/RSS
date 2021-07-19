<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div>
      <time>{{ post.pubDate | FilterDate('datetime') }}</time>
      <p v-if="postAuthor">{{ postAuthor }}</p>
    </div>
    <p>{{ post.description }}</p>

    <client-only v-if="sliderShow.length">
      <swiper>
        <swiper-slide
          v-for="slide in sliderShow"
          :key="slide"
        >
          <a :href="slide" data-fancybox="gallery">
            <img :src="slide" :alt="slide">
          </a>
        </swiper-slide>
      </swiper>
    </client-only>

    <a :href="post.link">Посмотреть оригинал</a>
  </div>
</template>

<script>
import FilterDate from 'xmlProd/filters/data.filter';

export default {
  name: 'PostOne',
  async asyncData ({route, store}) {
    const post = store.getters['posts/getPostId'](route.params.id);
    return {post};
  },
  head () {
    return {
      title: this.post.title,
    };
  },
  data: () => ({}),
  computed: {
    postAuthor () {
      return this.post.author || '';
    },
    sliderShow () {
      const itemsSlider = [];

      if (this.post.enclosure) {
        if (Array.isArray(this.post.enclosure)) {
          for (const item of this.post.enclosure) {
            const ext = item.$.url.substring(item.$.url.lastIndexOf('.'));

            if (ext === '.jpg') {
              itemsSlider.push(item.$.url);
            }

          }
        }
        else {
          itemsSlider.push(this.post.enclosure.$.url);
        }
      }

      return itemsSlider;
    },
  },
  filters: {
    FilterDate,
  },
};
</script>

<style scoped>
.swiper-slide img {
  /*width: 300px;*/
  max-width: 100%;
  height: auto;
}
</style>
