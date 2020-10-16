<template>
  <div>
    <h1>Add Review</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
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
      cafe: '',
      showDismissibleAlert: false,
      showDismissibleSuccess: false,
      message: ''
    }
  },
  methods: {
    createReview() {
      const review = {
        author: this.author,
        rating: this.rating,
        comment: this.comment,
        cafe: this.$route.params.id // Get the cafe id from the url
      }
      Api.post('/cafes/' + this.$route.params.id + '/reviews', review)
        .then(response => {
          this.message = 'Review added!'
          this.author = ''
          this.rating = null
          this.comment = ''
          this.cafe = ''
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not add review, please try again later'
            this.showDismissibleAlert = true
            this.cafes = {}
          }
        })
    }
  }
}
</script>
