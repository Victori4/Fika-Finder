<template>
  <div>
    <h1>Welcome, {{ user.email }}!</h1>
    <b-button :href="'/updatepassword/' + user._id">Update password</b-button>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'userpage',
  data() {
    return {
      user: {
        id: '',
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/users/' + this.$route.params.id)
      .then(response => {
        // console.log(response.data)
        this.user = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.user = {}
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  }
}
</script>
