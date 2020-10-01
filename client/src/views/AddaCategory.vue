<template>
  <div>
    <h1>Please enter category name and description</h1>
    <form @submit.prevent="createCategory">
     <p>
        <label for="name">Category name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      <p>
        <label for="description">Description:</label>
        <input id="description" type="description" v-model="description" placeholder="description">
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
  name: 'addacategory',
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    createCategory() {
      const category = {
        name: this.name,
        description: this.description
      }
      Api.post('/categories', category)
        .then(response => {
          console.log(response.data)
          this.name = ''
          this.description = ''
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
    }
  }
}
</script>
