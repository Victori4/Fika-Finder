<template>
    <div>
    <h1>Add A Review</h1>
    <div class="container">
      <form @submit.prevent="createReview">
        <div class="form-group row">
          <label for="author" class="col-4 col-form-label">Your name:</label>
          <div class="col-8">
            <input id="author" class="form-control" v-model="author" placeholder="author">
          </div>
        </div>
        <div class="form-group row">
          <label for="rating" class="col-4 col-form-label">Rating:</label>
          <div class="col-8">
            <select id="rating" v-model.number="rating" class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="review" class="col-4 col-form-label">Review:</label>
          <div class="col-8">
            <textarea id="review" v-model="comment" class="form-control"></textarea>
          </div>
        </div>

        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
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
