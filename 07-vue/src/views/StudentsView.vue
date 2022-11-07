<template>
  <div>
    <h1>Students</h1>
    <div v-for="student in students" :key="student.id">
      <p>{{ student.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Ahmet", not: 60 },
        { id: 2, name: "Mehmet", not: 40 },
        { id: 3, name: "Ali", not: 80 },
      ],
    };
  },
};
</script>

<style></style>
