<template>
<div>
    <h1>Put A Cafe</h1>
    <CafeForm v-on:submitted-cafe="updateCafe" :cafe="cafe"/>
</div>
</template>

<script>

import { Api } from '@/Api'
import CafeForm from '@/components/CafeForm.vue'

export default {
  name: 'updatecafe',
  components: { CafeForm },
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
      cafe: {
        name: '',
        openingHours: '',
        location: '',
        price: null, // ?
        categories: [],
        contact: {
          email: '',
          website: '',
          phoneNumber: ''
        }
      }
    }
  },
  methods: {
    updateCafe(cafeInstance) {
      console.log(cafeInstance)
      const cafe = {
        name: cafeInstance.name,
        openingHours: cafeInstance.openingHours,
        location: cafeInstance.location,
        price: cafeInstance.price, // ?
        categories: cafeInstance.categories,
        contact: {
          email: cafeInstance.contact.email,
          website: cafeInstance.contact.website,
          phoneNumber: cafeInstance.contact.phoneNumber
        }
      }
      Api.put('/cafes/' + this.$route.params.id, cafe)
        .then(response => {
          console.log(response.data)
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
    }
  }
}
</script>
