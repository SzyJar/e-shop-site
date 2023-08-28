<template>
  <div class="container">
    <Details v-if="detailsOn" @close="detailsClose" :details="productDetails" />
    <h1>{{ header || 'Choose from the variety of our products!'}}</h1>
    <div class="products" v-if="products.length !== 0">
      <div @click="showDetails(product)" class="product" v-for="(product, index) in products" :key="index">
        <h2>{{ product.name }}</h2>
        <v-lazy-image class="img" v-if="product.image" :src="product.image"/>
        <div class="img" v-else><p>No image</p></div>
        <p v-if="product.description">{{ product.description }}</p>
        <p v-if="product.price">Price: {{ product.price.toFixed(2) }} Caps</p>
      </div>
    </div>
    <div v-else>
      <LoadingSpinner  />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import VLazyImage from "v-lazy-image";
import axios from 'axios'
import LoadingSpinner from '../components/Loading.vue';
import Details from '../components/Details.vue';


export default ({
  components: {
    LoadingSpinner, Details, VLazyImage
  },
  props: ['size', 'header'],
  setup(props) {
    const listSize = ref(null)
    if (props.size) {
      listSize.value = parseInt(props.size);
    }
    
    const products = ref([]);
    const retrieveData = async () => {
     try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'product');
        response.data.forEach(product => {
          if (listSize.value) {
            if (listSize.value > products.value.length) {
              products.value.push(product);
            }
          } else {
            products.value.push(product);
          }
        });
      } catch (error) {
        console.log(error);
        setTimeout(retrieveData, 4000);
      };
    }

    onMounted(async () => {
      await retrieveData();
    });

    const detailsOn = ref(false);
    const productDetails = ref({
      name: '',
      image: '',
      description: '',
      releaseDate: '',
      company:'',
      price:'',
    });

    const showDetails = (product) => {
      productDetails.value = {
        name: product.name,
        image: product.image,
        description: product.description,
        releaseDate: product.releaseDate,
        company: product.company,
        price: product.price,
      };
      detailsOn.value = true;
    };

    const detailsClose = () => {
      detailsOn.value = false;
    };

    return {
        products,
        detailsOn,
        productDetails,
        showDetails,
        detailsClose
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    zoom: 0.7;
  }
}

.products {
  display: flex;
  justify-content: center;
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
}

.product:hover {
  cursor: pointer;
  box-shadow: 5px 5px 18px rgba(255, 255, 255, 0.7);
}

h1 {
  margin: 0;
  margin-bottom: 20px;
  padding: 20px;
  background: transparent;
  color: white;
  width: 100%;
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
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.img {
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
</style>
