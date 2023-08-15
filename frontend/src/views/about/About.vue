<template>
  <div class="about">
    <h1>Online shop with over a hundred years of history</h1>
    <div class="text">
      <Text />
    </div>
    <h1>What our customers say</h1>
    <div v-for="(review, index) in reviews" :key="index"
    :class="['review', { 'review-even': index % 2 === 0, 'review-odd': index % 2 === 1 }]">
      <Review :img="require(`../../assets/about/${review.img}.png`)"
              :text="review.text"
              :rating="review.rating" />
    </div>
  </div>
</template>
<script>
import Text from './Text'
import Review from '../../components/Review'


export default ({
  components: { Text, Review },
  setup() {
    const reviews = [
      {
        img: 'profile1',
        text: 'Fantastic shopping experience! What truly stood out to me was the exceptional'
        +' customer service. From the moment I reached out with a question to the swift and'
        +' friendly assistance throughout my purchase, the support team went above and beyond.'
        +' It\'s a refreshing change to encounter such dedication to customers. This online'
        +' shop has definitely earned my trust, and I\'m looking forward to shopping here again.',
        rating: 10
      },
      {
        img: 'profile1',
        text: 'Wow, I\'m incredibly impressed with the service from this online store!'
        +' I recently ordered a product, and I must say, the delivery was lightning fast.'
        +' I placed my order in the morning, and by the afternoon, I had it in my hands.'
        +' The speed at which they handled my order was beyond my expectations.'
        +' I\'ve shopped with many online retailers, but this level of efficiency'
        +' is truly exceptional. Kudos to the team for their dedication to fast and reliable delivery.'
        +' I\'m definitely going to be a returning customer!',
        rating: 11
      },
      {
        img: 'profile1',
        text: 'Great shop!',
        rating: 8
      },
      {
        img: 'profile1',
        text: 'Great shop!',
        rating: 6
      },
    ]
    return {
      reviews,
    }
  }
})
</script>

<style scoped>
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

.review {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: justify;
  width: 100%;
}
.review-even {
  flex-direction: row-reverse;
}
.review-odd {
  background: white;
  color: black;
}
</style>
