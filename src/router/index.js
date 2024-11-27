import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import CosplayProjects from '../views/CosplayProjects.vue'
import Contact from '../views/Contact.vue'
import NewsFromFB from '../views/NewsFromFB.vue'
import NewsFromIG from '../views/NewsFromIG.vue'

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
      path: '/contactme',
      name: 'contactme',
      component: Contact
    },
    {
      path: '/newsfromfb',
      name: 'newsfromfb',
      component: NewsFromFB
    },
    {
      path: '/newsfromig',
      name: 'newsfromig',
      component: NewsFromIG
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
    
export default router