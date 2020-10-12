<template>
<div class="container">
    <form @submit.prevent="$emit('submitted-cafe', cafe)">
      <div class="form-group row">
        <label for="name" class="col-4 col-form-label">Name:</label>
        <div class="col-8">
        <input id="name" class="form-control" v-model="cafe.name" placeholder="Ex. John's Cafe">
        </div>
      </div>

      <div class="form-group row">
        <label for="openingHours" class="col-4 col-form-label">Opening hours:</label>
        <div class="col-8">
        <input id="openingHours" class="form-control" v-model="cafe.openingHours" placeholder="Ex. 9:00-18:00">
        </div>
      </div>
      <div class="form-group row">
        <label for="location" class="col-4 col-form-label">Location:</label>
        <div class="col-8">
        <input id="location" class="form-control" v-model="cafe.location" placeholder="Ex. Gothenburg">
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-4 col-form-label">Price:</label>
        <div class="col-8">
        <select id="price" class="form-control" v-model.number="cafe.price">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="categories" class="col-4 col-form-label">Categories:</label>
        <div class="col-8">
        <select id="categories" class="form-control" v-model="cafe.categories">
         <option v-for="category in categoryOptions"
        :key="category._id" :value="category._id">{{ category.name }}</option>
      </select>
        </div>
      </div>

       <div class="form-group row">
        <label for="phoneNumber" class="col-4 col-form-label">Phone number:</label>
        <div class="col-8">
        <input id="phoneNumber" class="form-control" v-model="cafe.contact.phoneNumber" placeholder="Ex. 031-674 38 90">
        </div>
      </div>
      <div class="form-group row">
        <label for="website" class="col-4 col-form-label">Website:</label>
        <div class="col-8">
        <input id="website" class="form-control" v-model="cafe.contact.website" placeholder="Ex. www.johnscafe.com">
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email:</label>
        <div class="col-8">
        <input id="email" class="form-control" v-model="cafe.contact.email" placeholder="Ex. johnscafe@cafe.com">
        </div>
      </div>

      <input type="submit"  class="btn btn-primary" value="Submit" />
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
