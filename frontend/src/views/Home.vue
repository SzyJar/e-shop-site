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
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  .featured {
    width: 100%;
  }
}
.slideshow {
  overflow: hidden;
  background: white;
  width: 100%;
  height: 500px;

  @media (max-width: 900px) {
    zoom: 0.5;
  }
  
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

.slide-enter-active,
.slide-leave-active {
    transition: opacity 1s ease-in-out, transform 1s;  
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
</style>