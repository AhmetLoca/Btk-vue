import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "Run", done: false },
      { id: 2, todo: "Work", done: true },
      { id: 3, todo: "Drive", done: true },
    ],
  },
  getters: {},
  /* veri ekleme ve veri güncelleme gibi işlemleri mutations ile yapiyoruz. */
  mutations: {
    //mutation değişkeni içerisine 2 tane şey alır
    //1.state 2.payload
    //payload içerisinde ekleyecegim property'ler olacak.

    addTodoStore(state, { newTodo, done }) {
      let add = {
        id: Math.floor(Math.random() * 1000),
        todo: newTodo,
        done: done,
      };
      state.todos.push(add);
    },
  },
  actions: {},
  modules: {},
});
