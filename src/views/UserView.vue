<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  hobby: String,
}); //propsのバリュー名はrouter内に指定されたparamsと同じ値になる。

console.log(props);

let user = ref({});
const id = parseInt(route.params.id);

const init = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  user.value = data;
};

init();
</script>

<template>
  <div>
    <h2>User詳細</h2>
    <p>User Id: {{ user.id }}</p>
    <p>User Name: {{ user.name }}</p>
  </div>
</template>
