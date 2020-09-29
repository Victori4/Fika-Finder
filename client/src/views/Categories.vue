<template>
    <div>
      <b-button v-on:click="deleteCategories" >Delete all categories</b-button>
      <ul>
          <li v-for="category in categories" v-bind:key="category._id">
            {{ category.name }}
          </li>
      </ul>
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
