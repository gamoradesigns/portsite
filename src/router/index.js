import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrandingMenu from "../views/menu/BrandingMenu.vue"
import AgileBrandPageOutline from "../components/branding/agile/AgileBrandPageOutline.vue"
import AltaBrandPageOutline from "../components/branding/alta/AltaBrandPageOutline.vue"
import Package from "../components/branding/pack/Package.vue"
import Business from "../components/branding/bus/Business.vue"
import VectorMenu from "../views/menu/VectorMenu"
import MagMenu from "../views/menu/MagMenu"


Vue.use(VueRouter)

const routes = [
 





  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brandingMenu',
    name: 'BrandingMenu',
    component: BrandingMenu
  },
  {
    path: '/magMenu',
    name: 'MagMenu',
    component: MagMenu
  },
  {
    path: '/vectorMenu',
    name: 'VectorMenu',
    component: VectorMenu
  },
  {
    path: '/agileBrandPageOutline',
    name: 'AgileBrandPageOutline',
    component: AgileBrandPageOutline
  },
  {
    path: '/altaBrandPageOutline',
    name: 'AltaBrandPageOutline',
    component: AltaBrandPageOutline
  },
  {
    path: '/package',
    name: 'Package',
    component: Package
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
