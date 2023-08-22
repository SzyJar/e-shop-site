<template>
  <div class="backdrop" @click="close">
    <div class="product" @click.stop>
        <h2>{{ details.name }}</h2>
        <img class="img" v-if="details.image" :src="details.image"/>
        <div class="img" v-else><p>No image</p></div>
        <p v-if="details.description">{{ details.description }}</p>
        <p v-if="details.company"><b>Manufactured by:</b> {{ details.company }}</p>
        <p v-if="details.releaseDate"><b>Released on:</b> {{ new Date(details.releaseDate).toLocaleDateString() }}</p>
        <p v-if="details.price"><b>Price:</b> {{ details.price }} Caps</p>
        <button @click="addItem">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['details'],
    setup(props, { emit }) {
        const close = () => {
            emit('close');
        };

        const cart = ref();
        const addItem = () => {
            const cartString = localStorage.getItem('cart');
            try {
                const cartArray = JSON.parse(cartString) || [];
                cartArray.push(props.details);
                localStorage.setItem('cart', JSON.stringify(cartArray));
                cart.value = cartArray;
                emit('close');
            } catch (error) {
                console.log(error);
                localStorage.removeItem('cart');
            };
        };

        return {
            close,
            addItem
        }
    }
}
</script>

<style lang="scss" scoped>
.backdrop {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    z-index: 10001;
}
.product {
    width: 700px;
    max-width: 700px;
    height: 90%;
    margin: 10px auto;
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
</style>