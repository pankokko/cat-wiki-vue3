<template>
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="catImage" alt="Placeholder image" />
    </figure>
  </div>
</template>
<script setup>
defineProps({
  catImage: {
    type: String,
    required: false,
  },
});
</script>
