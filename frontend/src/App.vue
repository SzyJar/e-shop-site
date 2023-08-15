<template>
  <nav class="nav-bar">
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/product">Products</router-link>
    </div>
    <div class="login-link">
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  --primary-color: #333399;
  --secondary-color: #2d2d86;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color));
  min-width: 700px;
  margin: 0;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: transparent;
  margin-top: 20px;
}

.nav-links {
  display: flex;
  gap: 80px;
  margin-left: 50px;
}

.login-link {
  margin-left: auto;
  margin-right: 50px;
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
