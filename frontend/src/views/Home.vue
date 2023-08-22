<template>
  <div class="home">
    <h1>This is demo project of online shop.</h1>
    <div class="slideshow">
      <Carousel v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require(`../assets/${slide}.png`)" alt="">
          </div>
        </Slide>
      </Carousel>
    </div>
    <h1></h1>
    <div class="featured">
      <Products header='Take a look at our featured products!' size="3" />
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Slide from '../components/Slide'
import Products from './Products.vue'


export default {
  name: 'Home',
  components: { Carousel, Slide, Products },
  setup() {
    const slides = ['img1', 'img2', 'img3']

    return {
      slides
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.slideshow {
  overflow: hidden;
  background: white;
  width: 100%;
  height: 500px;
  
  .slide-info {
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;

  .img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
}

</style>