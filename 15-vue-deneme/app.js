const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "task1", completed: false },
        { id: 2, text: "task2", completed: false },
        { id: 3, text: "task3", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: Date.now(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todo) {
      this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");
