<template>
  <div class="navbar">
    <nav>
      <div>
        <router-link :to="{ name: 'home' }"
          ><img src="@/assets/logo.png"
        /></router-link>
        <h1><router-link :to="{ name: 'home' }">Playlist</router-link></h1>
      </div>
      <div class="links">
        <div v-if="user">
          <router-link class="btn" :to="{ name: 'createplaylist' }"
            >Create Playlist</router-link
          >
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({
        name: "login",
      });
    };
    return {
      user,
      handleClick,
    };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav .links  {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 18px;
  font-size: 15px;
}

nav img {
  max-height: 60px;
  cursor: pointer;
}
</style>
