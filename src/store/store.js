import { createStore } from "vuex";
import increment from "../service/increment";
// import { decrement } from "../service/decrement";

export const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { increment },
});
