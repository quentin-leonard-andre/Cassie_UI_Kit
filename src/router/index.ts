import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import BasicsView from '../views/BasicsView.vue';
import FormsView from '../views/FormsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basics',
      name: 'basics',
      component: BasicsView
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormsView
    }
  ]
})

export default router
