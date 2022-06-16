<template>
  <div class="event p-5">
    <img :src="eventData.img_url">
    <h1 class="text-3xl font-bold underline text-center	">
    {{eventData.name}}
    </h1>
    <h2>
       Start Date: {{eventData.startDate}}
    </h2>
    <h2>
       End Date:  {{eventData.endDate}}
    </h2>
    <h1>
        Event Description : {{eventData.description}}
    </h1>
  </div>
</template>

<script setup>  
import { ref } from "vue"
import { useRoute } from 'vue-router'
const route = useRoute()
const eventData = ref(route.params)
</script>
