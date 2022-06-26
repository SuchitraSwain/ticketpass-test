<template>
  <div class="event p-5">
    <div class="flex justify-center">
      <img :src="image.value" />
    </div>

    <h1 class="text-3xl font-bold underline text-center">
      {{ name.value }}
    </h1>
    <h2>Start Date: {{ Date(startDate.value).slice(4, 15) }}</h2>
    <br />
    <h2>End Date: {{ Date(endDate.value).slice(4, 15) }}</h2>
    <br />
    <h1>Event Description : {{ description.value }}</h1>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { getEvent } from "../api/Connection.js";

const route = useRoute();
const eventNum = ref(route.params);
const image = reactive({});
const name = reactive({});
const startDate = reactive({});
const endDate = reactive({});
const description = reactive({});
onMounted(() => {
  const eventData = getEvent(eventNum.value.id);
  eventData.then((response) => {
    image.value = response.data.data.image;
    name.value = response.data.data.name;
    startDate.value = response.data.data.startDate;
    endDate.value = response.data.data.endDate;
    description.value = response.data.data.description;
  });
});
</script>
