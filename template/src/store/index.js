import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: '',
  },
  mutations: {
    UPDATE_TEXT(state, { text }) {
      state.text = text;
    },
  },
});
