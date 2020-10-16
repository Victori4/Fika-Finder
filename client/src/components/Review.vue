<template>
  <div class="container reviewsitem">
    <div class="row" >
      <div class="col-6">
        <p><b-icon-person alt="Author"></b-icon-person> {{ review.author }}</p>
      </div>
      <div class="col-6">
        <p>
          <span v-for="index in parseInt(review.rating)" :key="index">
            <b-icon-cup alt="Rating"></b-icon-cup>
          </span>
        </p>
      </div>
      <div class="col-12">
        <p><b-icon-pencil-square alt="Comment"></b-icon-pencil-square> {{ review.comment }}</p>
      </div>
      <div class="col-12">
        <b-button variant="danger" v-on:click="$emit('delete-review', review._id)">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviewItem',
  props: ['review']
}
</script>
