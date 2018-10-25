import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: null,
    lastName: null,
    email: null,
  },
  mutations: {
    modifyName(state, payload) {
      // eslint-disable-next-line
      state.firstName = payload.firstName;
      // eslint-disable-next-line
      state.lastName = payload.lastName;
    },
    modifyEmail(state, payload) {
      // eslint-disable-next-line
      state.email = payload.email;
    },
  },
  actions: {

  },
});
