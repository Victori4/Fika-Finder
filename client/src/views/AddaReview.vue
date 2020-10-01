<template>
    <div>
    <h1>Add A Review</h1>
    <form @submit.prevent="createReview">
      <p>
        <label for="author">Your name:</label>
        <input id="author" v-model="author" placeholder="author">
      </p>
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>
      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="comment"></textarea>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
</div>
</template>

<script>

import { Api } from '@/Api'

export default {
  name: 'addreview',
  data() {
    return {
      author: '',
      rating: null,
      comment: '',
      cafe: ''
    }
  },
  methods: {
    createReview() {
      const review = {
        author: this.author,
        rating: this.rating,
        comment: this.comment,
        cafe: this.$route.params.id
      }
      Api.post('/cafes/' + this.$route.params.id + '/reviews', review)
        .then(response => {
          console.log(response.data)
          this.author = ''
          this.rating = null
          this.comment = ''
          this.cafe = ''
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.cafes = {}
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    }
  }
}
</script>
