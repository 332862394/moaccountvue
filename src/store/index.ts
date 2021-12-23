import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //把store绑到Vue.prototype.$store=store

const store = new Vuex.Store({
  state: {
    //data
    count: 0,
  },
  mutations: {
    //method
    increment(state, n: number) {
      state.count += n;
    },
  },
});

export default store;
