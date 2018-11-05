import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // redirect this path to '/home'
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes',
      name: 'bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/road',
      name: 'road-bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/mountain',
      name: 'mountain-bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/electric',
      name: 'electric-bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/parts',
      name: 'parts',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/accessories',
      name: 'accessories',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUp.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
    },
  ],
});
