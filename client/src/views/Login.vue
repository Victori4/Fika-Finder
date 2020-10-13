<template>
  <div>
    <h1>Please log in</h1>
    <div class="container">
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
          <div class="col-6">
            <b-button href="/addauser">Register</b-button>
          </div>
          <div class="col-6">
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
      password: ''
    }
  },
  methods: {
    login() {
      Api.get('/users')
        .then(response => {
          for (var i = 0; i < response.data.users.length; i++) {
            if (response.data.users[i].email === this.email &&
            response.data.users[i].password === this.password) {
              this.$router.push({ path: '/userpage/' + response.data.users[i]._id }) // add the id
              this.email = ''
              this.password = ''
            }
          }
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.email = ''
          this.password = ''
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    }
  }
}
</script>
