<template>
  <div>
    <h1>Add Category</h1>
    <div class="container">
      <form @submit.prevent="createCategory">
        <div class="form-group row">
          <label for="name" class="col-4 col-form-label">Category name:</label>
          <div class="col-8">
            <input id="name" class="form-control" v-model="name" placeholder="Ex. cat friendly">
          </div>
        </div>
        <div class="form-group row">
          <label for="description" class="col-4 col-form-label">Description:</label>
          <div class="col-8">
            <input id="description" class="form-control" type="description" v-model="description" placeholder="Ex. you can bring your cat">
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
