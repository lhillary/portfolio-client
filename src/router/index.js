import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import FourOFour from '../veiws/404.vue';
import { authGuard } from "../auth/authenticationGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/projects',
    name: 'Projects',
    component: Projects,
    beforeEnter: authGuard
  },{
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/*',
    component: FourOFour
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
