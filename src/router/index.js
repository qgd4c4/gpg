import { createRouter, createWebHistory } from 'vue-router'
import PlaylistView from '../views/PlaylistView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PlaylistView
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlaylistView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
