<template>
  <div class="container">
    <div class="products" v-if="products.length !== 0">
      <div class="product" v-for="(product, index) in products" :key="index">
        <h2>{{ product.name }}</h2>
        <img class="img" v-if="product.image" :src="product.image"/>
        <div class="img" v-else><p>No image</p></div>
        <p v-if="product.description">{{ product.description }}</p>
        <p v-if="product.price">Price: {{ product.price }} Caps</p>
      </div>
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
    const products = ref([]);
    const retrieveData = async () => {
     try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'product');
        response.data.forEach(product => {
          products.value.push(product);
        });
      } catch (error) {
        console.log(error);
         setTimeout(retrieveData, 4000);
      };
    }

    onMounted(async () => {
      await retrieveData();
    });

    return {
        products,
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.products {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin: 0 auto;
}

.product {
  width: 250px;
  height: 250px;
  border: 2px solid white;
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  background: white;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: transform 0.1s ease-out;
}

.product:hover {
  transform: scale(1.02);
  cursor: pointer;
}

h2 {
  width: 100%;
  margin: 2px;
  font-size: 120%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p {
  margin: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.img {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
