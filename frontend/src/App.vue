<template>
  <nav class="nav-bar">
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
      <router-link v-if="jwt" to="/manage">Manage</router-link>
    </div>
    <div class="login-link">
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
  <router-view/>
</template>
<script>
import { ref, onMounted } from 'vue'

export default ({
  setup() {

    const jwt = ref(null)
    onMounted(() => {
      jwt.value = localStorage.getItem('jwt');
    });
    
    return {
      jwt
    }
  },
})
</script>

<style>
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
  --secondary-color: #2d2d86;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color));
  min-width: 700px;
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
}

.nav-links {
  display: flex;
  gap: 80px;
  margin-left: 50px;
}

.login-link {
  margin-left: auto;
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
