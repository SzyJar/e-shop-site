<template>
  <div class="product">
    <div v-if="products">
      
    </div>
    <div v-else>
      <LoadingSpinner  />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import LoadingSpinner from '../components/Loading.vue';

export default ({
  components: {
    LoadingSpinner
  },
  setup() {
    const products = ref(null);
    const getProducts = async () => {
      try {
        const products = await axios.post(process.env.VUE_APP_API_URL + 'product');
      } catch (error) {
        console.log(error);
      };
    };
    return {
        products,
    }
  }
})
</script>

<style scoped>

</style>
