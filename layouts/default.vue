<template>
  <div>
    <Header/>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import Header from 'xmlProd/components/Header';

export default {
  name: 'default',
  components: {Header},
};
</script>

<style scoped>
main {
  padding: 0 30px;
}
</style>
