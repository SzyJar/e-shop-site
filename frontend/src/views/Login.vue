<template>
  <div class="login">
    <h1>Please log in to access your Account</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" v-model="userData.name" maxlength="30" required>
      <div v-if="userError" class="error">{{ userError }}</div>

      <label>Password:</label>
      <input type="password" v-model="userData.password" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button>Log In</button>
      </div>
    </form>
    <div class="submit">
      <button>Create new Account</button>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const userData = ref({
      name: '',
      password: '',
    });

    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;

    const passwordError = ref('');
    const userError = ref('');

    const handleSubmit = async () => {
      try {
        const res = await axios.post(process.env.VUE_APP_API_URL + 'login', userData.value);
        localStorage.setItem('jwt', res.accessToken);
        router.push({ name: 'product' });
      } catch (error) {
        if(!error.request) {
          console.log(error);
          passwordError.value = 'An error has occurred';
          userError.value = 'An error has occurred';
        } else if (error.request.status === 401) {
          passwordError.value = 'Invalid password';
          userError.value = '';
        } else if (error.request.status === 404) {
          userError.value = 'Invalid user name';
          passwordError.value = '';
        };
      };

    };

    return {
      userData,
      passwordError,
      userError,
      handleSubmit
    }
  }
}
</script>