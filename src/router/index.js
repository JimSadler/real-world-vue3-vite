import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import EventLayout from '@/views/event/Layout'
import EventDetails from '@/views/event/Details'
import EventEdit from '@/views/event/Edit'
import EventRegister from '@/views/event/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
