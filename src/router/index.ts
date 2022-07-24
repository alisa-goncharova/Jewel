import { createRouter, createWebHistory } from 'vue-router'
import CurrentView from '../views/СurrenciesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'currencies',
      component: CurrentView
    }
  ]
})

export default router
