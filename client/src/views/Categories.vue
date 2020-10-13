<template>
    <div>
      <h1>Categories</h1>
      <b-button href="/addacategory" size="sm" class="button-spacer">Add a category</b-button>
      <b-button v-on:click="deleteCategories" variant="danger" size="sm" class="button-spacer">Delete all categories</b-button>
      <b-container class="list">
        <b-row class="listheading">
          <b-col cols="4">Name</b-col>
          <b-col cols="8">Description</b-col>
        </b-row>
        <b-row v-for="category in categories" v-bind:key="category._id" class="listitem">
          <b-col cols="4">{{ category.name }}</b-col>
          <b-col cols="8">{{ category.description }}</b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'categories',

  mounted() {
    console.log('PAGE is loaded')
    // Load the real categories from the server
    Api.get('/categories')
      .then(response => {
        // console.log(response.data)
        this.categories = response.data.categories
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
      categories: [],
      message: '',
      text: ''
    }
  },
  methods: {
    deleteCategories() {
      Api.delete('/categories')
        .then(response => {
          this.message = response.data
          this.categories = []
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
