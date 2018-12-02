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
      name: 'Store',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes',
      name: 'Bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/road',
      name: 'Road Bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/mountain',
      name: 'Mountain Bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/bikes/electric',
      name: 'Electric Bikes',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/parts',
      name: 'Parts',
      component: () => import('@/views/Shop.vue'),
    },
    {
      path: '/shop/accessories',
      name: 'Accessories',
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
    {
      path: '/add-item',
      name: 'add-item',
      component: () => import('@/views/AddItem.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/Account.vue'),
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('@/views/Item.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('@/views/Confirmation.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/Checkout.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/Orders.vue'),
    },
  ],
});
