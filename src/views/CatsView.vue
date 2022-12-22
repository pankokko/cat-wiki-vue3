<template>
  <section class="hero is-light is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Search Cats</h1>
        <b-card>
          <b-form-input
            v-model="catName"
            placeholder="Enter cat name"
            @keyup.enter="search"
          ></b-form-input>
          <div class="mt-2">名前で検索: {{ catName }}</div>
        </b-card>
      </div>
    </div>
    <div></div>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

let data = reactive({});

const catName = ref("");

const fillterCats = function (cats) {
  let array = [];
  cats.forEach((c) => {
    array.push({
      id: c.id,
      name: c.name,
    });
  });
  return array;
};

const init = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY },
  });
  const a = await response.json();

  data.value = fillterCats(a);
};

const router = useRouter();
const search = () => {
  router.push({ name: "cat", params: { catId: catName.value } });
};

init();
</script>
