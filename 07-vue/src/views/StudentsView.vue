<template>
  <div>
    <h1>Students</h1>
    <div v-for="student in students" :key="student.id">
      <router-link :to="{ name: 'studentInfo', params: { id: student.id } }">{{
        student.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "ahmet", not: 75 },
        { id: 2, name: "varol", not: 89 },
        { id: 3, name: "mehmet", not: 34 },
      ],
    };
  },
};
</script>

<style></style>
