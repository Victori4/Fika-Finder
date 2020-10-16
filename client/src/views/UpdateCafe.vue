<template>
  <div>
    <h1>Update Cafe</h1>
    <b-container>
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
    </b-container>
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
    Api.get('/cafes/' + this.$route.params.id)
      .then(response => {
        this.cafe = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.cafe = []
      })
  },
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
    updateCafe(cafeInstance) {
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
      Api.put('/cafes/' + this.$route.params.id, cafe)
        .then(response => {
          this.message = 'Cafe updated!'
          this.showDismissibleSuccess = true
        })
        .catch(error => {
          if (error) {
            this.message = 'Could not update cafe, please try again later'
            this.showDismissibleAlert = true
            this.cafes = []
          }
        })
    }
  }
}
</script>
