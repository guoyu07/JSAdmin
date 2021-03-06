import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Home from './views/Home.vue'
import Simple from './views/Simple.vue'
import Baz from './views/Baz'
import Blog from './views/Blog'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/admin/myblog', name: '/admin/myblog', component: Blog },
    { path: '/admin/baz', name: '/admin/baz', component: Baz },
    { path: '/Simple', name: '/Simple', component: Simple }
  ]
})

export default router
