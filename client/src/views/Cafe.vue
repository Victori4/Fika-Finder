<template>
<div>
    <h1>Cafe page {{ $route.params.id }}</h1>
    <p> {{ cafe.name }}</p>
</div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'cafe',

  mounted() {
    console.log('PAGE is loaded')
    // Load the real cafes from the server
    Api.get('/cafes/' + this.$route.params.id)
      .then(response => {
        // console.log(response.data)
        this.cafe = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.cafe = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },
  data() {
    return {
      cafe: '',
      message: '',
      text: ''
    }
  }
}
</script>
