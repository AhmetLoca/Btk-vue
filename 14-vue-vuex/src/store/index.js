import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "Run", done: false },
      { id: 2, todo: "Work", done: false },
      { id: 3, todo: "Drive", done: false },
    ],
  },
  getters: {
    todoTotalCount(state){
      return state.todos.length
    },
    todoDoneCount(state){
      return state.todos.filter(x => x.done == true).length
    },
    todoNotDoneCount(state){
      return state.todos.filter(x => x.done != true).length
    }
  },
  mutations: {
    /* 
    İçerisine iki şey alacak. 

    Birincisi state.
    İkincisi payload.
    */
    addTodoStore(state, { newTodo, done }) {
      let add = {
        id: Math.floor(Math.random() * 10000),
        todo: newTodo,
        done: done,
      };
      state.todos.push(add);
    },
  },
  actions: {
    /* Mutation'a action ile erismeye calisacagiz. addTodoStore'dan önce başka 
    işlemler yapacaksam onu araya sokabilmek için action'i kullanabilirim. Örneğin,
    authentication işlemimiz varsa arada authentication kontrolunu yaptırabiliriz.*/

    /* 
    Actions içerisine bir context alıyor.
    Bir de obje alacak
     */
    addTodoAction(context,todoObject){
      console.log(context)
      context.commit('addTodoStore', todoObject)
      /* actions'a dispatch ile ulasiyoruz. */
    }

  },
  modules: {},
});

/*
 todos: [
      { id: 1, todo: "Run", done: false },
      { id: 2, todo: "Work", done: true },
      { id: 3, todo: "Drive", done: true },
    ],


      addTodoStore(state, { newTodo, done }) {
      let add = {
        id: Math.floor(Math.random() * 10000),
        todo: newTodo,
        done,
      };
      state.todos.push(add);
    },
*/
