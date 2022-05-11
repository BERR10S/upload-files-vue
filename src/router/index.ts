import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Content from '../views/Content.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Content',
    component: Content
  }
]

const router = new VueRouter({
  routes
})

export default router
