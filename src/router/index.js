import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'dashboard',
    children:[{
      path:'dashboard',
      name:'Dashboard',
      component:()=>import('../views/main/Dashboard.vue')
    },{
      path:'tools',
      name:'Tools',
      component:()=>import('../views/main/Tools.vue'),
      
    },{
      path:'setting',
      name:'Setting',
      component:()=>import('../views/main/Setting.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
  
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
