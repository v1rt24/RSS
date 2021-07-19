export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit (store) {
    await store.dispatch('posts/posts');
  },
};
