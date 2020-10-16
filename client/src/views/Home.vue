<template>
  <div id="content-wrap">
    <b-jumbotron header="Fika Finder" lead="Find your new favourite fika cafe"></b-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/img/cup-of-coffee.svg" alt="Clipart of a cup of coffee" id="welcomeimg" class="img-fluid">
        </div>
        <div class="col-md-8">
          <h1 id="homepageHeader">Welcome to Fika Finder!</h1>
          <p>Find your new favourite fika spot by visiting the cafes page and choosing to view a cafe from the list.
            Want to tell everyone about an amazing cafe you just visited? If it's not already on the cafes page, add it to our list!
            Leave a review so that everyone can enjoy it just as much as you did.</p>
            <p>Had a bad experience and want to make sure no one else's fika is less than fab? Leave the cafe a negative review.
            Can't see a category your cafe fits into? Create a new one!</p>
          <h4>Dev team</h4>
          <p>Fika Finder was developed by fika fanatics Jennifer Nord, Victoria Vu and Fayona Cowperthwaite.
            They make up Team 22 for the DIT341 course in the second year of the SEM BSc programme at Gothenburg University.</p>
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
