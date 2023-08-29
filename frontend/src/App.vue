<template>
  <nav class="nav-bar">
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
      <router-link v-if="hasToken" to="/manage">Manage</router-link>
    </div>
    <div class="login-link">
      <router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
      <router-link @click="logout" v-if="hasToken" to="/logout">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
  <router-view/>
</template>
<script>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

export default ({
  setup() {
    onMounted(async () => {
      // wake up replit server
      try {
        const repsonse = await axios.get(process.env.VUE_APP_API_URL);
        console.log('server response:', repsonse.status);
      } catch (error) {
        console.log(error);
      };
    });
    
    const jwt = ref(localStorage.getItem('jwt'));

    const logout = async () => {
      try {
        const jwtToken = localStorage.getItem('jwt');
        const headers = {
            Authorization: jwtToken
        };
        localStorage.removeItem('jwt');
        jwt.value = null;
        const res = await axios.post(process.env.VUE_APP_API_URL + `logout`, {}, { headers });
      } catch (error) {
        console.log(error);
      };
    };

    const hasToken = computed(() => jwt.value !== null);

    return {
      jwt,
      hasToken,
      logout,
    }
  },
})
</script>

<style lang="scss">
@import './assets/styles/app.scss'
</style>
