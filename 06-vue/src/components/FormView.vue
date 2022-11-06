<template>
  <form>
    <input type="checkbox" id="vue" v-model="checked" />
    <label for="vue">Confirm</label>
    <p>Conclusion: {{ checked ? "I confirm" : "I don't confirm" }}</p>
  </form>

  <div>
    <input type="checkbox" id="vue1" value="Vue" v-model="frameworks" />
    <label for="vue1">Vue</label>
  </div>
  <div>
    <input type="checkbox" id="react" value="React" v-model="frameworks" />
    <label for="react">React</label>
  </div>
  <div>
    <input type="checkbox" id="angular" value="Angular" v-model="frameworks" />
    <label for="angular">Angular</label>
  </div>

  <p>Selected frameworks : {{ frameworks }}</p>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      frameworks: [],
    };
  },
};
</script>

<style></style>
