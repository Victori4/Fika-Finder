<template>
    <div>
      <h1>Cafes</h1>
      <img src="../assets/img/cafe.svg" alt="Clipart image of a cafe exterior" class="img-fluid img-resize">
      <b-button href="/addacafe" size="sm" class="cafebuttons btn-primary">Add cafe</b-button>
      <b-container class="list">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          {{ message }}
        </b-alert>
        <b-row class="listheading">
          <b-col>Name</b-col>
          <b-col>Location</b-col>
          <b-col>Price</b-col>
        </b-row>
        <b-row id="loading" v-bind:class="isLoading">
          <b-col>
            <b-iconstack font-scale="4" animation="spin">
              <b-icon stacked icon="cup" scale="1" ></b-icon>
              <b-icon stacked icon="droplet-fill" animation="throb" scale="0.5" shift-v="8.5" shift-h="4" rotate="220" id="dropletspill"></b-icon>
            </b-iconstack>
          </b-col>
        </b-row>
        <p v-if="!cafes.length && isLoading === 'hideLoading'">There are no cafes yet.</p>
        <b-row v-for="cafe in cafes" v-bind:key="cafe._id" class="listitem">
          <b-col><a :href="'/cafes/' + cafe._id">{{ cafe.name }}</a></b-col>
          <b-col>{{ cafe.location }}</b-col>
          <b-col>
            <p v-if= "cafe.price !=null">
              <span v-for="index in parseInt(cafe.price)" :key="index">$</span>
            </p>
          </b-col>
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
    Api.get('/cafes')
      .then(response => {
        this.isLoading = 'hideLoading'
        this.cafes = response.data.cafes
      })
      .catch(error => {
        this.isLoading = 'hideLoading'
        if (error.response) {
          if (error.response.status === 404) {
            this.message = 'Could not find any cafes'
          }
        } else {
          this.message = 'Could not load the cafes, please try again later'
        }
        this.cafes = []
        this.showDismissibleAlert = true
      })
  },
  data() {
    return {
      cafes: [],
      message: '',
      text: '',
      showDismissibleAlert: false,
      isLoading: ''
    }
  }
}
</script>
