<template>
  <div>
    <h1>Enter your details</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
      <form @submit.prevent="register">
        <div class="form-group row">
          <label for="username" class="col-4 col-form-label">Username:</label>
          <div class="col-8">
            <input id="username" class="form-control" v-model="username" placeholder="Ex. Tester">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-4 col-form-label">Email:</label>
          <div class="col-8">
            <input id="email" class="form-control" v-model="email" placeholder="Ex. test@test.com">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-4 col-form-label">Password:</label>
          <div class="col-8">
            <input id="password" class="form-control" type="password" v-model="password"
            placeholder="Ex. VerySecureP4ssword!">
          </div>
        </div>

        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
    </div>
  </div>
</template>

<script>

import { Api } from '@/Api'

export default {
  name: 'addauser',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      showDismissibleAlert: false,
      showDismissibleSuccess: false,
      message: ''
    }
  },
  methods: {
    register() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      Api.post('/users', user)
        .then(response => {
          this.message = 'User registered!'
          this.username = ''
          this.email = ''
          this.password = ''
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not create user, please try again later'
            this.showDismissibleAlert = true
            this.users = []
          }
        })
        .then(() => {
        })
    }
  }
}
</script>
