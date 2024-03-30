import { createRouter, createWebHistory } from 'vue-router'
import ProductSection from '@/components/ProductSection.vue'
import UnavailableSection from '@/components/UnavailableSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: ProductSection
    },
    {
      path: '/',
      name: 'unavailable-section',
      component: UnavailableSection
    }
  ]
})

export default router
