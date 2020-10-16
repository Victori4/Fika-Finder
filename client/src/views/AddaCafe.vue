<template>
  <div>
      <h1>Add Cafe</h1>
      <b-container>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            {{ message }}
        </b-alert>
        <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
            {{ message }}
        </b-alert>
      </b-container>
      <cafeForm v-on:submitted-cafe="createCafe" :cafe="cafe"/>
  </div>
</template>

<script>
import { Api } from '@/Api'
import cafeForm from '@/components/CafeForm.vue'

export default {
  name: 'addacafe',
  components: { cafeForm },
  data() {
    return {
      cafe: {
        name: '',
        openingHours: '',
        location: '',
        price: null,
        categories: [],
        contact: {
          email: '',
          website: '',
          phoneNumber: ''
        }
      },
      showDismissibleAlert: false,
      showDismissibleSuccess: false,
      message: ''
    }
  },
  methods: {
    createCafe(cafeInstance) {
      const cafe = {
        name: cafeInstance.name,
        openingHours: cafeInstance.openingHours,
        location: cafeInstance.location,
        price: cafeInstance.price,
        categories: cafeInstance.categories,
        contact: {
          email: cafeInstance.contact.email,
          website: cafeInstance.contact.website,
          phoneNumber: cafeInstance.contact.phoneNumber
        }
      }
      Api.post('/cafes', cafe)
        .then(response => {
          this.message = 'Cafe added!'
          this.cafe.name = ''
          this.cafe.openingHours = ''
          this.cafe.location = ''
          this.cafe.price = null
          this.cafe.categories = []
          this.cafe.contact.email = ''
          this.cafe.contact.website = ''
          this.cafe.contact.phoneNumber = ''
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not add cafe, please try again later'
            this.showDismissibleAlert = true
            this.cafes = []
          }
        })
    }
  }
}
</script>
