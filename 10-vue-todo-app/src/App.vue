<template>
  <form @submit.prevent>
    <div class="container">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Add todo"
            v-model="todo"
          />
        </div>
      </div>
      <button @click="addTodo" type="submit" class="button is-success">
        Add
      </button>

      <!-- Card Start !-->
      <div v-for="todo in todos" :key="todo.id" class="card m-2 px-2 py-4">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p
              
                :class="{ done: todo.done }"
                class="title is-4 cursor"
              >
                {{ todo.content }}
              </p>
              <p class="subtitle is-6">{{ todo.done }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Card End !-->
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    /* add todo */
    function addTodo() {
      todos.value.push({
        content: this.todo,
        done: false,
        id: Date.now(),
      });
      todo.value = "";
    }
    /* done */
    function done(todo) {
      todo.done = !todo.done;
    }

    const todo = ref("");
    const todos = ref([]);

    return {
      todo,
      todos,
      addTodo,
      done,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done {
  text-decoration: line-through;
}
.cursor {
  cursor: pointer;
}
</style>
