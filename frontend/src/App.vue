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
        const res = await axios.post(process.env.VUE_APP_API_URL + `logout`, {}, { headers });
        localStorage.removeItem('jwt');
        jwt.value = null;
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
@import '~@fortawesome/fontawesome-free/css/all.css';
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: 1.3rem;
}

body {
  --primary-color: #333399;
  --secondary-color: #262673;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color));
  min-width: 500px;
  margin: 0;
  margin-top: 100px;
}

h1 {
  font-family: 'Didot', serif;
  margin: 30px;
  margin-top: 50px;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color));
  width: 100%;
  z-index: 999;
  
  @media (max-width: 800px) {
    zoom: 0.7;
  }
}

.nav-links {
  display: flex;
  gap: 80px;
  margin-left: 50px;
}

.login-link {
  display: flex;
  margin-left: auto;
  gap: 40px;
  margin-right: 70px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.2s ease-out;
}

nav a:hover {
  color: #C7C7FF;
}

nav a.router-link-exact-active {
  color: white;
  transform: scale(1.2);
}
</style>
