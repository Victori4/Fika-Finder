<template>
    <div>
      <h1>Cafes</h1>
      <b-button href="/addacafe" size="sm">Add cafe</b-button>
      <b-container id="cafelist">
        <b-row id="cafelistheading">
          <b-col>Name</b-col>
          <b-col>Location</b-col>
          <b-col>Price</b-col>
        </b-row>
        <b-row v-for="cafe in cafes" v-bind:key="cafe._id" class="cafelistitem">
          <b-col><a :href="'/cafes/' + cafe._id">{{ cafe.name }}</a></b-col>
          <b-col>{{ cafe.location }}</b-col>
          <b-col>{{ cafe.price }}</b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'cafes',

  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/cafes')
      .then(response => {
        // console.log(response.data)
        this.cafes = response.data.cafes
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.cafes = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },
  data() {
    return {
      cafes: [],
      message: '',
      text: ''
    }
  }
}
</script>
