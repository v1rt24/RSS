const xml2js = require('xml2js');

export const state = () => ({
  rbk: null,
  posts: null,
});

export const getters = {
  getRbk: state => state.rbk,
  getPosts: state => state.posts,
  getPostId: state => id => state.posts.find(p => p.guid === id),
};

export const mutations = {
  setRbk (state, data) {
    state.rbk = data;
  },
  setPosts (state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async posts ({commit}) {
    try {
      const postsXml = await this.$axios.$get('news.rss');
      const posts = await xml2js.parseStringPromise(
        postsXml,
        {explicitArray: false, explicitRoot: false},
      );

      const {link, image: {url, title}} = posts.channel;
      commit('setRbk', {link, url, title});
      commit('setPosts', posts.channel.item);
      // console.log(posts);
    }
    catch (error) {
      throw error;
    }
  },
};
