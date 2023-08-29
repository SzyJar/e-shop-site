<template>
  <div v-if="!jwt" class="login">
    <h1>Register new Account</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" v-model="userData.name" maxlength="30" required>
      <div v-if="userError" class="error">{{ userError }}</div>

      <label>Password:</label>
      <input type="password" v-model="userData.password" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Repeat password:</label>
      <input type="password" v-model="repeatPassword" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button>Register</button>
      </div>
    </form>
    <div class="submit">
      <router-link to="/login"><button>Use existing Account instead</button></router-link>
    </div>
  </div>
  <div v-else class="success">
    <h1>Successfully Registered!</h1>
    <p>You are now ready to manage products!</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const userData = ref({
      name: '',
      password: '',
    });
    const jwt = ref(localStorage.getItem('jwt'));
    const repeatPassword = ref('');
    const passwordError = ref('');
    const userError = ref('');

    const signupUser = async () => {
      try {
        const res = await axios.post(process.env.VUE_APP_API_URL + 'signup', userData.value);
        localStorage.setItem('jwt', JSON.parse(res.request.response).accessToken);
        location.reload();
      } catch (error) {
        if(!error.request) {
          console.log(error);
          passwordError.value = 'An error has occurred';
          userError.value = 'An error has occurred';
        } else if (error.request.status === 409) {
          userError.value = 'Username already exists';
          passwordError.value = '';
        };
      };
    };

    const handleSubmit = () => {
      if (userData.value.password.length < 8) {
          passwordError.value = 'Passwords should be at least 8 characters long';
      } else if (userData.value.password !== repeatPassword.value) {
          passwordError.value = 'Password does not match';
      } else {
          passwordError.value = null;
          signupUser();
      };
    };

    return {
      userData,
      passwordError,
      repeatPassword,
      userError,
      jwt,
      handleSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/register.scss'
</style>