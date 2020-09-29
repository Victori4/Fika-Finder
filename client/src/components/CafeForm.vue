<template>
<div>
    <form @submit.prevent="$emit('submitted-cafe', cafe)">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="cafe.name" placeholder="name">
      </p>
      <p>
        <label for="openingHours">Opening hours:</label>
        <input id="openingHours" v-model="cafe.openingHours" placeholder="openingHours">
      </p>
      <p>
        <label for="location">Location:</label>
        <input id="location" v-model="cafe.location" placeholder="location">
      </p>
      <p>
        <label for="price">Price:</label>
        <select id="price" v-model.number="cafe.price">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>

      <p>
        <label for="categories">Categories:</label>
        <select id="categories" v-model="cafe.categories">
         <option v-for="category in categoryOptions"
        :key="category._id" :value="category._id">{{ category.name }}</option>
      </select>
      </p>

       <p>
        <label for="phoneNumber">Phone number:</label>
        <input id="phoneNumber" v-model="cafe.contact.phoneNumber" placeholder="phoneNumber">
      </p>
      <p>
        <label for="website">Website:</label>
        <input id="website" v-model="cafe.contact.website" placeholder="website">
      </p>
      <p>
        <label for="email">Email:</label>
        <input id="email" v-model="cafe.contact.email" placeholder="email">
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
  props: ['cafe'],

  mounted() {
    console.log('FORM is loaded')
    // Load the real cafes from the server
    Api.get('/categories')
      .then(response => {
        console.log(response.data.categories)
        this.categoryOptions = response.data.categories
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

  data() {
    return {
      name: '',
      openingHours: '',
      location: '',
      price: null, // ?
      categories: [],
      categoryOptions: [],
      contact: {
        email: '',
        website: '',
        phoneNumber: ''
      }
    }
  }
}
</script>
