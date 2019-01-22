import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    isUserLoggedIn: false,
    isClicked: false,
  },
  getters: {
    isClicked: state => {
      return state.isClicked;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setClick (state, isClicked) {
      state.isClicked = !state.isClicked;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setClick ({commit}, isClicked) {
      commit('setClick', isClicked);
    },
  },
});
