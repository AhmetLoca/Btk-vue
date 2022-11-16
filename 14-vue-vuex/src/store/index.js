import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, myTodo: "Run" },
      { id: 2, myTodo: "Work" },
      { id: 3, myTodo: "Drive" },
    ],
  },
  getters: {},
  mutations: {
    
  },
  actions: {},
  modules: {},
});
