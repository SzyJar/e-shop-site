<template>
    <div v-if="cart.length > 0" class="cart">
    <h1>Your products</h1>
    <div class="container">
        <table class="products">
            <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in cart" :key="index">
                <td>{{ product.name }}</td>
                <td>
                <img class="img" v-if="product.image" :src="product.image" />
                <div class="img" v-else>No image</div>
                </td>
                <td v-if="product.description"><div class="text">{{ product.description }}</div></td>
                <td v-else>-</td>
                <td v-if="product.price">{{ product.price.toFixed(2) }} Caps</td>
                <td v-else>-</td>
                <td><button @click="deleteOne(index)"> X </button></td>
            </tr>
            </tbody>
        </table>
        <div class="summary"> 
            <p></p>
            <p>Cart value:</p>
            <p :class="{ 'shaking-number': isShaking }">{{ sum.toFixed(2) }} Caps</p>
            <p>Cart value after tax:</p>
            <p :class="{ 'shaking-number': isShaking }">{{ (sum * 4).toFixed(2) }} Caps</p>
            <p v-if="sum > 500">Free shipping on all orders</p>
            <div class="buttons">
              <button class="discount" @click="applyDiscount">Apply discount code</button>
              <button >Go to checkout</button>
              <button @click="deleteAll">Empty your cart</button>
            </div>
        </div>
    </div>
    </div>
  <div v-else>
    <h1>Your cart is empty. </h1>
    <p>Go to the products page and add items to your cart.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const cart = ref([]);
        const sum = ref(0);
        const isShaking = ref(false)
        const calcSum = () => {
            sum.value = cart.value.reduce((total, product) => {
                if (product.price !== null) {
                    return total + product.price;
                }
                return total;
            }, 0);
        };

        onMounted(async () => {
            try {
                const cartString = await localStorage.getItem('cart');
                const cartArray = JSON.parse(cartString) || [];
                cart.value = cartArray;
                calcSum();
            } catch (error) {
                console.log(error);
                localStorage.removeItem('cart');
            };
        });
        
        const deleteAll = () => {
            localStorage.removeItem('cart');
            cart.value = [];
            calcSum();
        };

        const deleteOne = (index) => {
            cart.value.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart.value));
            calcSum();
        };

        const applyDiscount = () => {
            if (sum.value > 0.01) {
                sum.value = sum.value - 0.01;
                isShaking.value = true;
                setTimeout(() => {
                    isShaking.value = false;
                }, 100);
            };
        };

        return {
            cart,
            sum,
            isShaking ,
            deleteAll,
            deleteOne,
            applyDiscount
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/cart.scss'
</style>