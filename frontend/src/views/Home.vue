<template>
  <div class="home">
    <p>This is demo project of online shop.</p>
    <div class="slideshow">
      <Carousel v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require(`../assets/${slide}.png`)" alt="">
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Slide from '../components/Slide'


export default {
  name: 'Home',
  components: { Carousel, Slide },
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
  margin-top: 30px;
}
.slideshow {
  display: inline-flex;
  overflow: hidden;
  background: white;
  width: 90%;
  height: 500px;
  max-width: 950px;
  border-radius: 20px;
  
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