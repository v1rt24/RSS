<template>
  <header>
    <a :href="rbk.link" target="_blank"><img :src="rbk.url" :alt="rbk.title"></a>
    <h4>{{ rbk.title }}</h4>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    rbk () {
      return this.$store.getters['posts/getRbk'];
    },
  },
};
</script>

<style scoped>
header {
  height: 60px;
  background-color: #b3d4fc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

header a {
  margin-right: 15px;
}
</style>
