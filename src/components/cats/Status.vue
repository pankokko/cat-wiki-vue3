<template>
  <div>
    <p>{{ statusName }}</p>
    <div>
      <b-badge v-for="n of catStatus" variant="primary">★</b-badge>
      <!-- <b-badge variant="secondary">★</b-badge> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps({
  catStatus: {
    type: Number,
    required: true,
  },
  statusName: {
    type: String,
    required: true,
  },
});
const statuslevel = ref(1);
</script>
