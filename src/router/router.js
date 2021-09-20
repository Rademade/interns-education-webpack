import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import BaseLayout from '@/components/base/BaseLayout.vue';

const routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: '/about', name: 'About', component: About },
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
