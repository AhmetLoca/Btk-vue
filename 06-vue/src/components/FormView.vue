<template>
  <h3>Keyboard Events</h3>
  <input type="text" v-model="student" @keydown.enter="addStudent" />
  <div v-for="student in students" :key="student">
    <span @click="deleteStudent(student)">{{ student }}</span>
  </div>
  <br />
  <button @click.prevent="sendData">Submit</button>
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
    deleteStudent(student) {
      this.students = this.students.filter((item) => item !== student);
    },
    sendData() {
      console.log("Veriler gönderildi");
    },
  },
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let odd = numbers.filter((number) => {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
});
console.log(odd);
</script>

<style></style>
