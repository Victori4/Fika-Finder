<template>
  <div>
    <h1>Welcome, {{ user.username }}!</h1>
    <img src="../assets/img/cafe-waitress.svg" class="img-fluid small-image">
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
    </b-alert>
    <b-button class="btn-primary button-spacer" :href="'/updatepassword/' + user._id">Update password</b-button>
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
        username: '',
        email: '',
        password: ''
      },
      showDismissibleAlert: false,
      message: ''
    }
  },
  mounted() {
    console.log('PAGE is loaded')
    Api.get('/users/' + this.$route.params.id)
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            this.message = 'Could not find any cafes'
          }
        } else {
          this.message = 'Could not load the cafes, please try again later'
        }
        this.showDismissibleAlert = true
        this.user = {}
      })
      .then(() => {
      })
  }
}
</script>
