<template>
  <div>
    <h1>Please log in</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          {{ message }}
      </b-alert>
      <form @submit.prevent="login">
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
        <div class="row">
          <div class="col-6 col-md-4 order-md-2">
            <b-button href="/addauser">Register</b-button>
          </div>
          <div class="col-6 col-md-4 order-md-1 offset-md-4">
            <input type="submit" class="btn btn-primary" value="Login" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      showDismissibleAlert: false,
      message: ''
    }
  },
  methods: {
    login() {
      // This is a fake login method, please do not do this at home
      Api.get('/users')
        .then(response => {
          // Looping through all users of the database to find the user that matches the email
          // and password from the form
          for (var i = 0; i < response.data.users.length; i++) {
            if (response.data.users[i].email === this.email &&
                response.data.users[i].password === this.password) {
              // A user with matching email and password has been found so we are redirecting the user
              this.$router.push({ path: '/userpage/' + response.data.users[i]._id })
            }
          }
          this.email = ''
          this.password = ''

          if (this.email === '' && this.password === '') {
            this.message = 'Please enter the correct credentials'
            this.showDismissibleAlert = true
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 404) {
              this.message = 'Could not find any users'
            }
          } else {
            this.message = 'Could not load the user, please try again later'
          }
          this.showDismissibleAlert = true
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>
