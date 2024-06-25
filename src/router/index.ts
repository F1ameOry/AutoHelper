import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/SignupView.vue'),
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/MyCars.vue'),
    },
    {
      path: '/car/id1',
      name: 'car-id1',
      component: () => import('../views/CarView.vue'),
    },
    {
      path: '/car/id2',
      name: 'car-id2',
      component: () => import('../views/CarView2.vue'),
    },
    {
      path: '/car/id3',
      name: 'car-id3',
      component: () => import('../views/CarView3.vue'),
    },
    {
      path: '/car/id1/mileage',
      name: 'car-id-mileage',
      component: () => import('../views/CarMileage.vue'),
    },
    {
      path: '/carlist',
      name: 'car-list',
      component: () => import('../views/MyCarsEmpty.vue'),
    },
    {
      path: '/cars/add',
      name: 'AddCars',
      component: () => import('../views/AddCar.vue'),
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import('../views/InvoiceView.vue')
    }
  ]
})

export default router
