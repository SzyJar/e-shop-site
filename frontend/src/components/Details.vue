<template>
  <div :class="{'backdrop': !preview}" @click="close">
    <div class="product" @click.stop>
        <h2>{{ details.name }}</h2>
        <div class="img-container">
          <v-lazy-image class="img" v-if="details.image" :src="details.image" />
          <div class="img" v-else><p>No image</p></div>
        </div>
        <p v-if="details.description">{{ details.description }}</p>
        <p v-if="details.company"><b>Manufactured by:</b> {{ details.company }}</p>
        <p v-if="details.releaseDate"><b>Released on:</b> {{ new Date(details.releaseDate).toLocaleDateString() }}</p>
        <p v-if="details.price"><b>Price:</b> {{ details.price.toFixed(2) }} Caps</p>
        <button v-if="!preview" @click="addItem" :class="inCart ? 'cursor-block' : ''"> {{ inCart ? 'Already in cart' : 'Add to cart' }}</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import VLazyImage from "v-lazy-image";

export default {
    components: { VLazyImage },
    props: ['details', 'preview'],
    setup(props, { emit }) {
        const close = () => {
            emit('close');
        };

        const inCart = ref(false);

        onMounted(() =>{
          const cartString = localStorage.getItem('cart');
          const cartArray = JSON.parse(cartString) || [];
          if (cartArray[0] && cartArray.some(item => item.name === props.details.name)) {
            inCart.value = true;
          }
        })

        const cart = ref();
        const addItem = () => {
            const cartString = localStorage.getItem('cart');
            try {
                const cartArray = JSON.parse(cartString) || [];
                if (!cartArray[0] || !cartArray.some(item => item.name === props.details.name)) {
                  cartArray.push(props.details);
                  localStorage.setItem('cart', JSON.stringify(cartArray));
                  cart.value = cartArray;
                }
                emit('close');
            } catch (error) {
                console.log(error);
                localStorage.removeItem('cart');
            };
        };

        return {
            inCart,
            close,
            addItem
        }
    }
}
</script>

<style lang="scss" scoped>
.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    z-index: 10001;
    @media (max-width: 800px), (max-height: 800px) {
    zoom: 0.7;
  }
}
.product {
    width: 700px;
    max-width: 700px;
    margin: 10% auto;
    padding: 5px;
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 10003;
    
    &::-webkit-scrollbar {
    width: 12px;
    }

    &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    }
}

h1 {
    margin: 0;
    margin-bottom: 20px;
    padding: 20px;
    background: white;
    color: black;
    width: 100%;
}

h2 {
    width: 100%;
    margin: 20px auto;
    font-size: 140%;
}

p {
    margin: 20px auto;
    width: 90%;
    text-align: left;
    white-space: pre-wrap;
}

.img-container {
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.img {
    max-width: 400px;
    max-height: 400px;
    display: flex;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
}

button {
    padding: 10px 20px;
    margin: 20px auto;
    margin-top: auto;
    border: 2px solid #000000;
    background: #ccc;
    color: black;
    text-transform: uppercase;
    width: calc(100% - 10px);
}

button:hover {
    background: #b3d9ff;
    cursor: pointer;
}

.cursor-block:hover {
    cursor: not-allowed;
    background: #ccc;
}
</style>