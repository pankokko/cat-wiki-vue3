<template>
  <section class="section">
    <div class="columns is-mobile">
      {{ cat.data }}
      <div class="card">
        <catImage :catImage="cat.data.image"></catImage>
        <div class="card-content container">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ cat.data.name }}</p>
            </div>
          </div>
          <div class="content">
            {{ cat.data.description }}
            <br />
          </div>
          <p>Temparment: {{ cat.data.temperament }}</p>
          <p>Origin: {{ cat.data.origin }}</p>
          <p>Life Spane {{ cat.data.life_span }}</p>
          <Status
            statusName="Adaptability"
            :catStatus="cat.data.adaptability"
          ></Status>
          <Status
            statusName="Child Friendly"
            :catStatus="cat.data.child_friendly"
          ></Status>
          <Status statusName="Grooming" :catStatus="cat.data.grooming"></Status>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import catImage from "../components/cats/Image.vue";
import Status from "../components/cats/Status.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breedId: String = String(route.params.catId); //id = abys or java
const cat = reactive({
  data: {
    image: "url",
    name: "",
    description: "",
    temperament: "",
    origin: "",
    life_span: "",
    adaptability: 5,
    child_friendly: 3,
    dog_friendly: 4,
    energy_level: 5,
    grooming: 1,
  },
});

const catDetail = async function (): Promise<void> {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`,
    { headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY } }
  );
  let a: Array<any> = await response.json();
  cat.data = a[0].breeds[0];
  cat.data.image = a[0].url;
};
catDetail();
</script>
