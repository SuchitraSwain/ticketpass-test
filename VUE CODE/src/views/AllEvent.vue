<template>
  <div class="event mt-12 px-8">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg"
      v-for="i in eventsList"
      :key="i.id"
    >
      <img
        class="w-full object-contain"
        :src="i.img_url"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ i.name }}</div>
        <p class="text-gray-700 text-base">Start:{{ i.startDate }}</p>
        <p class="text-gray-700 text-base">End:{{ i.endDate }}</p>
      </div>

      <button
        @click="onPress(i)"
        class="my-5 block mx-auto w-52 shadow bg-[#34cc98] hover:bg-[#34cc98] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
        type="submit"
      >
        View
      </button>
    </div>
  </div>
</template>
<script setup>
import { eventsList } from "../components/events";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
function onPress(i) {
  console.log(i);
  router.push({ name: "EventDetails", params: i });
}
</script>
<style scoped>
.event {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1em;
}

button {
  align-self: center;
}
</style>
