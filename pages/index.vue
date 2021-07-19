<template>
  <div>
    <FilterProducts
      v-model="filterInputs"
    />

    <div class="wrapperPosts">
      <Post
        v-for="post in arrayItem"
        :key="post.guid"
        :post="post"
      />
    </div>

    <Paginate
      v-if="pageCount > 1"

      v-model="page"
      :pageCount="pageCount"
      prevText="Назад"
      nextText="Вперёд"
      containerClass="pagination"
      pageClass="waves-effect"
      :clickHandler="clickHandler"
    />
  </div>
</template>

<script>
import Post from 'xmlProd/components/Post';
import FilterProducts from 'xmlProd/components/FilterProducts';
import FilterDate from 'xmlProd/filters/data.filter';

export default {
  name: 'index',
  data () {
    return {
      page: +this.$route.query.page || 1,
      pageCount: 0,
      allArray: [],
      arrayItem: [],

      filterInputs: {},
    };
  },
  computed: {
    posts () {
      return this.$store.getters['posts/getPosts'];
    },
  },
  methods: {
    paginateHandler (arr, crash) {
      this.allArray = this.chunk(arr, crash);
      this.pageCount = this.allArray.length;
      this.arrayItem = this.allArray[this.page - 1] || this.allArray[0];
    },
    chunk (arr, crash) {
      const subArr = [];
      for (let i = 0; i < Math.ceil(arr.length / crash); i++) {
        subArr[i] = arr.slice((i * crash), (i * crash) + crash);
      }
      return subArr;
    },
    clickHandler (page) {
      this.arrayItem = this.allArray[page - 1] || this.allArray[0];

      this.$router.push({
        query: {
          page: page,
        },
      });
    },
  },
  mounted () {
    this.paginateHandler(this.posts, 5);
  },
  watch: {
    filterInputs (val) {
      const {titleN, dateN} = val;

      const posts = this.posts.
        filter(post => {
          if (titleN) {
            return post.title.toLowerCase().includes(titleN.toLowerCase());
          }

          return post;
        }).
        filter(post => {
          if (dateN) {
            return FilterDate(post.pubDate) === FilterDate(dateN);
          }

          return post;
        });

      this.paginateHandler(posts, 5);
    },
  },
  components: {FilterProducts, Post},
  filters: {
    FilterDate,
  },
};
</script>

<style scoped>
.wrapperPosts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
}

.pagination {
  display: flex;
  align-items: center;
  margin: 30px 0;
}
</style>
