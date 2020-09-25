<template>
    <div>
        <ul>
            <li v-for="cafe in cafes" v-bind:key="cafe._id">{{ cafe.name }}</li>
        </ul>
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
