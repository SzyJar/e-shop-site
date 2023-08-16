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
      </div>
  </div>
</template>

<script>
export default {
    props: ['details'],
    setup(props, { emit }) {
        const close = () => {
            emit('close');
        }
        return {
            close
        }
    }
}
</script>

<style scoped>
.backdrop {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
}
.product {
    width: 700px;
    max-width: 700px;
    height: 80%;
    border-radius: 20px;
    margin: 10px;
    padding: 5px;
    background: white;
    color: black;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    flex: 1;
    overflow: auto;
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
    width: 500px;
    height: 500px;
    display: flex;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
}
</style>