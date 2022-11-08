<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
/* bu router-link'ler html'e dönüştürüldüğünde a tag'leri olusuyor. */
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #6812c5;
  font-size: 20px;
  font-weight: 700;
}
/* vue'deki active link class'i */
a.router-link-active {
  border: 1px solid #6c3042;
  border-radius: 10px;
  padding: 3px 3px;
}
</style>
