<template>
  <div class="filter">
    <input type="text" placeholder="Введите название новости" v-model.trim="titleN">
    <input type="date" v-model="dateN">
  </div>
</template>

<script>
export default {
  name: 'FilterProducts',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      titleN: '',
      dateN: '',
    };
  },
  watch: {
    titleN (val) {
      this.$emit('input', {titleN: val, dateN: this.dateN});
    },
    dateN (val) {
      this.$emit('input', {titleN: this.titleN, dateN: val});
    },
  },
};
</script>

<style scoped>
.filter {
  margin-bottom: 30px;
}
</style>
