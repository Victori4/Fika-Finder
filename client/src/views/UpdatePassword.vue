<template>
    <div>
        <h1>Update Password</h1>
        <form @submit.prevent="updatePassword">
        <p>
            <label for="password">Password:</label>
            <input id="password" type="password" v-model="password" placeholder="password">
        </p>
        <p>
            <input type="submit" value="Update password" />
        </p>
        </form>
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
