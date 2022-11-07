<template>
  <h3>Keyboard Events</h3>
  <input type="text" v-model="student" @keydown.enter="addStudent" />
  <div v-for="student in students" :key="student">
    <span>{{ student }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: "",
      students: [],
    };
  },
  methods: {
    addStudent(e) {
      if (!this.students.includes(this.student)) {
        this.students.push(this.student);
      }
      this.student = "";
    },
  },
};
</script>

<style></style>
