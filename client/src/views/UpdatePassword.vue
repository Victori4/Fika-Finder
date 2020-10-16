<template>
  <div>
    <h1>Update Password</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
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
    Api.get('/users/' + this.$route.params.id)
      .then(response => {
        this.username = response.data.username
        this.email = response.data.email
        this.password = response.data.password
      })
      .catch(error => {
        this.message = error.message
        this.username = ''
        this.email = ''
        this.password = ''
      })
  },
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
    updatePassword() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      Api.patch('/users/' + this.$route.params.id, user)
        .then(response => {
          this.message = 'Password updated!'
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not update cafe, please try again later'
            this.showDismissibleAlert = true
            this.username = ''
            this.email = ''
            this.password = ''
          }
        })
    }
  }
}
</script>
