<template>
    <div>
        <h1>Update Password</h1>
        <div class="container">
          <form @submit.prevent="updatePassword">
          <div class="form-group row">
              <label for="password" class="col-4 col-form-label">Password:</label>
              <div class="col-8">
                <input id="password" type="password" class="form-control" v-model="password"
                placeholder="Ex. VerySecuryP4ssword!">
              </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Update password" />
          </form>
        </div>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'updatepassword',
  mounted() {
    // Load the real cafes from the server
    Api.get('/users/' + this.$route.params.id)
      .then(response => {
        console.log(response.data)
        this.username = response.data.username
        this.email = response.data.email
        this.password = response.data.password
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.username = ''
        this.email = ''
        this.password = ''
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    updatePassword() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      Api.patch('/users/' + this.$route.params.id, user)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.username = ''
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
