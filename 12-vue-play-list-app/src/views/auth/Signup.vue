<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <p v-if="isPending">Loading..</p>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
export default {
  setup() {
    //composables
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      /* istedigimizi atacagiz.  */
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("User signed up");
      }
    };
    return {
      email,
      password,
      displayName,
      handleSubmit,
      isPending,
      error,
    };
  },
};
</script>

<style></style>
