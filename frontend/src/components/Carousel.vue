<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const currentSlide = ref(1);
        const slideCount = ref(null);

        const nextSlide = () => {
            if (currentSlide.value < slideCount.value) {
                currentSlide.value += 1;
            } else {
                currentSlide.value = 1;
            };
        };

        onMounted(() => {
            slideCount.value = document.querySelectorAll('.slide').length;
            setInterval(nextSlide, 3000);
        });

        return { currentSlide }
    }
}
</script>

<style>

</style>