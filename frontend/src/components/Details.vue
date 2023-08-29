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
@import '../assets/styles/details.scss'
</style>