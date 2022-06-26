<template>
  <div class="event mt-12 px-8">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg"
      v-for="i in events.value"
      :key="i.id"
    >
      <img
        class="w-full object-contain"
        :src="i.image"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ i.name }}</div>
        <p class="text-gray-700 text-base">
          Start: {{ Date(i.startDate).slice(4, 15) }}
        </p>
        <p class="text-gray-700 text-base">
          End: {{ Date(i.endDate).slice(4, 15) }}
        </p>
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
  <div class="flex justify-center m-5">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li class="page-item" v-on:click="pageBackward">
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="i of numOfPages"
          :key="i"
          v-on:click="onNavClicked(i)"
        >
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded"
            :class="[
              i == curr
                ? 'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
                : 'bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
            ]"
            >{{ i }}
          </a>
        </li>
        <li class="page-item" v-on:click="pageForward">
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { getEvents } from "../api/Connection.js";
import Swal from "sweetalert2";
const router = useRouter();
const events = reactive([]);
const numOfPages = ref(1);
const curr = ref(1);
const prev = ref("");
const next = ref("");
onMounted(() => {
  updatePageContents();
});
function onPress(i) {
  console.log(i);
  router.push({ name: "EventDetails", params: i });
}
function updatePageContents(i) {
  const eventsData = getEvents(i);
  eventsData
    .then((response) => {
      console.log(response.data.links, response.data.meta);
      prev.value = response.data.links.prev;
      next.value = response.data.links.next;
      numOfPages.value = response.data.meta.last_page;
      events.value = response.data.data;
      curr.value = response.data.meta.current_page;
    })
    .then(() => {
      console.log(events.value);
    });
}
function onNavClicked(i) {
  updatePageContents(i);
}
function pageForward() {
  const pagenum = next.value;
  if (pagenum === null) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Next Page not available",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    updatePageContents(pagenum.slice(-1));
  }
}
function pageBackward() {
  const pagenum = prev.value;
  if (pagenum === null) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Previous Page not available",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    updatePageContents(pagenum.slice(-1));
  }
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
