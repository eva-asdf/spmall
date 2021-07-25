import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Details = () => import('../views/Details/Details')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  }, 
  {
    path: '/category',
    component: Category
  }, 
  {
    path: '/cart',
    component: Cart
  }, 
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/details/:iid',
    component: Details
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
