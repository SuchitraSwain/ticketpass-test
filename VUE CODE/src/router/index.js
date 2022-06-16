import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import AllEvent from '../views/AllEvent.vue'
import EventDetails from '../views/EventDetails.vue'
import CreateEvent from '../views/CreateEvent.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/all-event',
    name: 'AllEvent',
    component: AllEvent
  },
  {
    path: '/event-details',
    name: 'EventDetails',
    component: EventDetails
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    component: CreateEvent
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
