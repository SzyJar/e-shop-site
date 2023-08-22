<template>
  <div class="manage">
    <h1>Add a new product to the database</h1>
    <form @submit.prevent="handleSubmit">

    <label>Name:</label>
    <input type="text" v-model="name" maxlength="30" required placeholder="Enter product name (required)">
    <div v-if="nameError" class="error">{{ nameError }}</div>

    <h1>Additional product data (optional)</h1>
    <label>Price:</label>
    <input type="number" step="0.01" v-model="product.price" placeholder=0.00>

    <label>Image link:</label>
    <input type="url" v-model="product.image" placeholder="https://images.unsplash.com/photo-1573376670774-4427757f7963">

    <label>Description:</label>
    <textarea id="description" v-model="product.description" placeholder="Enter some information about the product"></textarea>

    <label>Release date:</label>
    <input type="date" v-model="product.releaseDate">

    <label>Producer:</label>
    <input type="text" v-model="product.company" placeholder="Enter company name">

    <div class="submit">
      <button>SUBMIT</button>
    </div>
    </form>
    <div class="image">
      <img :src="require('@/assets/delivery.png')" alt="Delivery Image">
    </div>
  </div>

</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import axios from 'axios'


export default {
setup() {
  const name = ref('');
  const product = ref({
    price: null,
    company: null,
    releaseDate: null,
    image: null,
    description: null
  });

  const nameError = ref(null);

  const instance = getCurrentInstance();
  const router = instance.appContext.config.globalProperties.$router;

  const handleSubmit = async () => {
    try {
      const jwtToken = localStorage.getItem('jwt');
      const headers = {
        Authorization: jwtToken
      };
      const res = await axios.post(process.env.VUE_APP_API_URL + `product/${name.value}`, product.value, { headers });
      router.push({ name: 'products' });
    } catch (error) {
      if(!error.request) {
        console.log(error);
        nameError.value = '';
      } else if (error.request.status === 409) {
        nameError.value = 'Product already exist';
      } else if (error.request.status === 401) {
        localStorage.removeItem('jwt');
        nameError.value = 'You are not authorized, please log in or register';
        setTimeout(router.push({ name: 'login' }), 1000);
      }
    };
  };

  return {
    name,
    product,
    nameError,
    handleSubmit
  }
}
}
</script>

<style scoped>
.image {
  text-align: center;
  position: absolute;
  width: 50%;
  height: 100vh;
  border-radius: 50%;
  top: 0;
  left: 20%;
  z-index: -99;
}
img {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  margin-top: 350px;
  margin-left: 80%;
  padding-right: 200px;
}
form {
  width: 700px;
  margin: 10px auto;
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
input, textarea, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  resize: none;
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
</style>