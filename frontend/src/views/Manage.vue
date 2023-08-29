<template>
  <div class="manage">
    <div class="form">
      <form @submit.prevent="handleSubmit">
      <h1>Add a new product to the database</h1>
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
    </div>
    <div class="preview">
      <h1>Preview your product</h1>     
      <Details :details="product" :preview="true" />
    </div>
    <div class="image">
      <img :src="require('@/assets/delivery.png')" alt="Delivery Image">
    </div>
  </div>

</template>

<script>
import { ref, getCurrentInstance, computed } from 'vue'
import axios from 'axios'
import Details from '../components/Details.vue'

export default {
  components: { Details },
  setup() {
    const name = ref('');
    const product = ref({
      name: null,
      price: null,
      company: null,
      releaseDate: null,
      image: null,
      description: null
    });

    product.value.name = computed({
      get: () => name.value,
      set: newValue => {
        return newValue;
      }
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

<style lang="scss" scoped>
@import '../assets/styles/manage.scss'
</style>