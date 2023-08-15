<template>
  <div class="about">
    <h1>Online shop with over a hundred years of history</h1>
    <div class="text">
      <Text />
    </div>    
  </div>
</template>
<script>
import Text from './Text'
import Review from '../../components/Review'
export default ({
  components: { Text, Review },
  setup() {

  }
})
</script>

<style scoped>
h1 {
  font-family: 'Didot', serif;
}
.about {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;
}
.text {
  padding: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
