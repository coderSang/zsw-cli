import Vue from 'vue'
import VueRouter from 'vue-router'

const Map = () => import("../views/map/MyMap")
const Profile = () => import("../views/profile/Profile")
const Report = () => import("../views/report/Report")
const Upload = () => import("../views/upload/Upload")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/map'
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
