<template>
<div>
     <p>Rating: {{ review.rating }}, Comment: {{ review.comment }}</p>
            <b-button variant="danger" v-on:click="$emit('delete-review', review._id)">Delete</b-button>
</div>
</template>

<script>

export default {
  name: 'reviewItem',
  props: ['review']

}
</script>
