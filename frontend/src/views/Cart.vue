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
                <td v-if="product.description">{{ product.description }}</td>
                <td v-else>-</td>
                <td v-if="product.price">{{ product.price.toFixed(2) }} Caps</td>
                <td v-else>-</td>
                <td><button @click="deleteOne(index)"> X </button></td>
            </tr>
            </tbody>
        </table>
        <div class="summary">
            <button @click="deleteAll">DELETE ALL</button>
            <p></p>
            <p>Cart value:</p>
            <p :class="{ 'shaking-number': isShaking }">{{ sum.toFixed(2) }} Caps</p>
            <p>Cart value after tax:</p>
            <p :class="{ 'shaking-number': isShaking }">{{ (sum * 4).toFixed(2) }} Caps</p>
            <p v-if="sum > 500">Free shipping on all orders</p>
            <button class="discount" @click="applyDiscount">Apply discount code</button>
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
h1, p {
    margin: 0;
    margin-bottom: 20px;
    padding: 20px;
    background: white;
    color: black;
    width: 100%;
}

.container {
    display: flex;
    align-content: space-between;
    gap: 40px;
    width: 100%;
    margin: 0;
}

.cart {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 100px;   
}

.summary {
    border: 2px solid white;
    width: 30%;
    height: 380px;
    p {
        width: 90%;
        color: white;
        background: transparent;
        text-align: left;
        margin: 0;
        padding: 0;
        padding-left: 15px;
        margin-top: 15px;
    }
}

.products {
    margin-left: 10px;
    width: 65%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}

.products th,
.products td {
    padding: 10px;
    border: 1px solid white;
    color: white;
    height: 100px;
}

.products th {
    background-color: white;
    font-weight: bold;
    color: black;
    height: 40px;
}

.products img {
    max-width: 100px;
    max-height: 100px;
}

button {
    padding: 10px 20px;
    margin: 20px auto;
    font-size: 150%;
    background: white;
    border: 0;
    color: black;
    text-transform: uppercase;
    transition: ease;
}

.discount {
     font-size: 70%;
}

.shaking-number {
      animation: shake 0.1s 1;
}

@keyframes shake {
    0%, 100% {
        transform: translate(0);
    }
    25%, 75% {
        transform: translate(-2px, -2px);
    }
    50% {
        transform: translate(2px, 2px);
    }
}

button:hover {
    background: rgb(190, 190, 190);
    cursor: pointer;
}
button:active {
    background: rgb(150, 150, 150);
    transform: scale(0.99);
    cursor: pointer;
}
</style>