import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quem-somos',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/produtos',
    name: 'products',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/admin/pedidos',
    name: 'pedidos',
    component: () => import('../views/PedidosView.vue')
  },
  {
    path: '/admin/produtos',
    name: 'GerenciarProdutos',
    component: () => import('../views/ManagerProductsView.vue')
  },
  {
    path: '/sucesso',
    name: 'Sucesso',
    component: () => import('../views/SuccessView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
