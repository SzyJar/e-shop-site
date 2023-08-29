<template>
    <div>
        <img :src="img"/>
    </div>
    <div>
        <p><i class="fas fa-quote-left"></i> {{ text }} <i class="fas fa-quote-right"></i>
        <br><br>
        rating: {{ rating }}/10 <i class="fas fa-star"></i></p>
    </div>
</template>

<script>
export default {
props: [ 'img', 'text', 'rating' ],

}
</script>

<style scoped>
@import '~@fortawesome/fontawesome-free/css/all.css';
img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
}
div {
    padding: 10px;
    margin: 20px;
    text-align: center;
}
.space {
    margin: 100px;
}
p {
    width: 500px; 
}
</style>