<template>
<div>
    <h1>Cafe Form</h1>
    <form @submit.prevent="createCafe">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      <p>
        <label for="openingHours">Opening hours:</label>
        <input id="openingHours" v-model="openingHours" placeholder="openingHours">
      </p>
      <p>
        <label for="location">Location:</label>
        <input id="location" v-model="location" placeholder="location">
      </p>
      <p>
        <label for="price">Price:</label>
        <select id="price" v-model.number="price">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>

      <p>
        <label for="categories">Categories:</label>
        <b-form-select value-field="_id" :options="categories" text-field="name"></b-form-select>
      </p>

       <p>
        <label for="phoneNumber">Phone number:</label>
        <input id="phoneNumber" v-model="contact.phoneNumber" placeholder="phoneNumber">
      </p>
      <p>
        <label for="website">Website:</label>
        <input id="website" v-model="contact.website" placeholder="website">
      </p>
      <p>
        <label for="email">Email:</label>
        <input id="email" v-model="contact.email" placeholder="email">
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
  name: 'cafeform',
  // mount get /categories
  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/categories')
      .then(response => {
        // console.log(response.data)
        this.categories = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.categories = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },

  // template: v-for through categories key=_id display name for user

  data() {
    return {
      name: '',
      openingHours: '',
      location: '',
      price: null, // ?
      categories: [],
      contact: {
        email: '',
        website: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    createCafe() {
      const cafe = {
        name: this.name,
        openingHours: this.openingHours,
        location: this.location,
        price: this.price, // ?
        categories: this.categories,
        contact: {
          email: this.contact.email,
          website: this.contact.website,
          phoneNumber: this.contact.phoneNumber
        }
      }
      Api.post('/cafes', cafe)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.cafes = []
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    }
  }
}
</script>
