<template>
  <div id="content-wrap">
    <b-jumbotron header="Fika Finder" lead="Slogan">
    </b-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/img/FIKA.svg" alt="Line drawing of a Swedish cinnamon bun, coffee cup and spoon on a plate" id="welcomeimg" class="img-fluid">
          </div>
        <div class="col-md-8">
          <h1>Welcome to Fika Finder!</h1>
          <p>Use this to find cafes, review them and become a user</p>
          <p>Fika Finder was developed by Team 22 for DIT341 of the SEM BSc programme at Gothenburg University</p>
          <p>Jennifer Nord, Victoria Vu, Fayona Cowperthwaite, Gothenburg, 2020</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
