<template>
  <div class="home">
    <h1>This is demo project of online shop.</h1>
    <div class="slideshow">
      <transition :name="transitionName" mode="out-in">
        <div :key="currentSlide" class="slide-info">
          <img :src="require(`../assets/${slides[currentSlide]}.png`)" alt="">
        </div>
      </transition>
    </div>
    <h1></h1>
    <div class="featured">
      <Products header='Take a look at our featured products!' size="3" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Products from './Products.vue'


export default {
  name: 'Home',
  components: { Products },
  setup() {
    const slides = ['img1', 'img2', 'img3'];
    const currentSlide = ref(0);
    const transitionName = ref('slide');

    const startSlideshow = () => {
      setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.length;
      }, 4000);
    };

    onMounted(startSlideshow);
    return {
      slides,
      currentSlide,
      transitionName
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/home.scss'
</style>