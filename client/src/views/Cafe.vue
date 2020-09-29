<template>
<div>
    <h1>{{ cafe.name }}</h1>
    <b-button :href="'/updatecafe/' + cafe._id">Update cafe</b-button>
    <b-button :href="'/addareview/' + cafe._id">Add a review</b-button>
    <p>{{ cafe._id }}</p>
    <h2>Reviews</h2>
    <ul>
      <li v-for="review in reviews" v-bind:key="review._id">
            Rating: {{ review.rating }}, Comment: {{ review.comment }}
            <b-button variant="danger" v-on:click="deleteReview">Delete</b-button>
          </li>
    </ul>
</div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'cafe',
  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/cafes/' + this.$route.params.id)
      .then(response => {
        // console.log(response.data)
        this.cafe = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.cafe = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })

    Api.get('/cafes/' + this.$route.params.id + '/reviews')
      .then(response => {
        console.log(response.data)
        this.reviews = response.data.reviews
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.reviews = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },
  data() {
    return {
      cafe: '',
      reviews: [],
      message: '',
      text: ''
    }
  },
  methods: {
    deleteReview() {
      Api.delete('/cafes/' + this.$route.params.id + '/reviews') // Get the review ID somehow
        .then(response => {
          this.message = response.data
          // Remove review from reviews array on line 58
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
