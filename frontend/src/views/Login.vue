<template>
  <div v-if="!jwt" class="login">
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
      <router-link to="/register"><button>Create new Account instead</button></router-link>
    </div>
  </div>
  <div v-else class="success">
    <h1>Successfully logged in!</h1>
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
    const passwordError = ref('');
    const userError = ref('');

    const handleSubmit = async () => {
      try {
        const res = await axios.post(process.env.VUE_APP_API_URL + 'login', userData.value);
        localStorage.setItem('jwt', JSON.parse(res.request.response).accessToken);
        location.reload();
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
      jwt,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 100px;
}
form {
  width: 500px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: white;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  margin-top: 20px;
  background: white;
  border: 0;
  color: black;
  text-transform: uppercase;
  transition: transform 0.2s ease-out;
}
button:hover {
  background: rgb(190, 190, 190);
  cursor: pointer;
}
.error {
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

.success {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
}
h1, p {
    margin: 0;
    padding: 20px;
    background: white;
    color: black;
    width: 100%;
}
</style>