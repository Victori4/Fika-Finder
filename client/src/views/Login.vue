<template>
  <div>
    <h1>Please log in</h1>
    <form @submit.prevent="login">
     <p>
        <label for="email">Email:</label>
        <input id="email" v-model="email" placeholder="email">
      </p>
      <p>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" placeholder="password">
      </p>
      <p>
        <input type="submit" value="Login" />
      </p>
    </form>
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
              this.$router.push({ path: '/updatepassword/' + response.data.users[i]._id }) // add the id
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
