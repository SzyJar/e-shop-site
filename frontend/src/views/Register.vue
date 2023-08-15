<template>
  <div class="login">
    <h1>This is a login page</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" v-model="userData.name" maxlength="30" required>
      <div v-if="userError" class="error">{{ userError }}</div>

      <label>Password:</label>
      <input type="password" v-model="userData.password" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Repeat password:</label>
      <input type="password" v-model="password2" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button>Register</button>
      </div>
    </form>
  </div>
</template>