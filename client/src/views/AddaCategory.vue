<template>
  <div>
    <h1>Add Category</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
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
      description: '',
      showDismissibleAlert: false,
      showDismissibleSuccess: false,
      message: ''
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
          this.message = 'Category added!'
          this.name = ''
          this.description = ''
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not add catergory, please try again later'
            this.showDismissibleAlert = true
            this.categories = []
          }
        })
    }
  }
}
</script>
