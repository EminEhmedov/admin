import { createRouter, createWebHistory } from 'vue-router'
import AdminVue from "../components/Admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/admin',
    name :'Admin',
    component: AdminVue
   }
  ]
})

export default router
