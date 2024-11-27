import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import CosplayProjects from '../views/CosplayProjects.vue'
import Galery from '../views/Galery.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe
    },
    {
      path: '/cosplayprojects',
      name: 'cosplayprojects',
      component: CosplayProjects
    },
    {
      path: '/galery',
      name: 'galery',
      component: Galery
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
    
export default router