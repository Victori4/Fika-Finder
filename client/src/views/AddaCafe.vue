<template>
<div>
    <h1>Add Cafe</h1>
    <cafeForm v-on:submitted-cafe="createCafe" :cafe="cafe"/>
</div>
</template>

<script>

import { Api } from '@/Api'
import cafeForm from '@/components/CafeForm.vue'

export default {
  name: 'addacafe',
  components: { cafeForm },
  // mount get /categories
  // template: v-for through categories key=_id display name for user

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
    createCafe(cafeInstance) {
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
      Api.post('/cafes', cafe)
        .then(response => {
          console.log(response.data)
          this.cafe.name = ''
          this.cafe.openingHours = ''
          this.cafe.location = ''
          this.cafe.price = null
          this.cafe.categories = []
          this.cafe.contact.email = ''
          this.cafe.contact.website = ''
          this.cafe.contact.phoneNumber = ''
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
