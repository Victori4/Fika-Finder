<template>
  <div>
    <h1>Please enter the appropriate information</h1>
    <form @submit.prevent="register">
     <p>
        <label for="email">Email:</label>
        <input id="email" v-model="email" placeholder="email">
      </p>
      <p>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" placeholder="password">
      </p>
      <p>
        <input type="submit" value="Register" />
      </p>
    </form>
  </div>
</template>

<script>

import { Api } from '@/Api'

export default {
  name: 'addauser',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      const user = {
        email: this.email,
        password: this.password
      }
      Api.post('/users', user)
        .then(response => {
          console.log(response.data)
          this.email = ''
          this.password = ''
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.users = []
        // TODO: display error message
        })
        .then(() => {
        //   This code is always executed at the end. After success or failure.
        })
    }
  }
}
</script>
