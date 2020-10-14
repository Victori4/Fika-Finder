<template>
<div id="cafepage">
    <h1>{{ cafe.name }}</h1>
    <b-button :href="'/updatecafe/' + cafe._id" size="sm" class="cafebuttons">Update cafe</b-button>
    <b-alert v-model="showDismissibleAlert1" variant="danger" dismissible>
        {{ message.cafe }}
    </b-alert>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <p><b-icon-geo-alt alt="Location"></b-icon-geo-alt> {{ cafe.location }}</p>
          <p><b-icon-clock alt="Opening hours"></b-icon-clock> {{ cafe.openingHours }}</p>
          <p v-if= "cafe.price !=null">
            <span v-for="index in parseInt(cafe.price)" :key="index">
              $
            </span>
          </p>
          <p>
            <b-icon-tags alt="Categories"></b-icon-tags>
            <ul id="categoriesList">
              <li v-for="category in cafe.categories" v-bind:key="category._id">{{ category.name }}</li>
            </ul>
          </p>
        </div>
        <div class="col-md">
        <h2 id="contactheading">Contact</h2>
          <p><b-icon-globe alt="Website"></b-icon-globe> {{ cafe.contact.website }}</p>
          <p><b-icon-telephone alt="Phone number"></b-icon-telephone> {{ cafe.contact.phoneNumber }}</p>
          <p><b-icon-envelope alt="Email"></b-icon-envelope> {{ cafe.contact.email }}</p>
        </div>
      </div>
    </div>

    <h2>Reviews</h2>
    <b-button :href="'/addareview/' + cafe._id" size="sm" class="cafebuttons">Add review</b-button>
    <b-alert v-model="showDismissibleAlert2" variant="danger" dismissible>
        {{ message.reviews }}
      </b-alert>

    <p v-if="!reviews.length && message === ''">There are no reviews yet.</p>

    <div v-for="review in reviews" v-bind:key="review._id" id="reviewscontainer">
      <reviewItem :review="review" v-on:delete-review="deleteReview"></reviewItem>
    </div>
</div>
</template>

<script>
import { Api } from '@/Api'
import reviewItem from '@/components/Review.vue'

export default {
  name: 'cafe',
  components: { reviewItem },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/cafes/' + this.$route.params.id)
      .then(response => {
        // console.log(response.data)
        this.cafe = response.data
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            this.message.cafe = 'Could not find the cafe'
          }
        } else {
          this.message.cafe = 'Could not load the cafe, please try again later'
        }
        this.showDismissibleAlert1 = true
        this.cafe = {}
      })
      .then(() => {
      })

    Api.get('/cafes/' + this.$route.params.id + '/reviews')
      .then(response => {
        // console.log(response.data)
        this.reviews = response.data.reviews
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            this.message.reviews = 'Could not find any reviews'
          }
        } else {
          this.message.reviews = 'Could not load the reviews, please try again later'
        }
        this.showDismissibleAlert2 = true
        this.reviews = []
      })
      .then(() => {
      })
  },
  data() {
    return {
      cafe: '',
      reviews: [],
      message: { reviews: '', cafe: '' },
      text: '',
      showDismissibleAlert1: false,
      showDismissibleAlert2: false
    }
  },
  methods: {
    deleteReview(id) {
      Api.delete('/cafes/' + this.$route.params.id + `/reviews/${id}`)
        .then(response => {
          this.message = response.data
          const index = this.reviews.findIndex(review => review._id === id)
          this.reviews.splice(index, 1)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
