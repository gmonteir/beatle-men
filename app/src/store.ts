/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    firstName: null,
    lastName: null,
    email: null,
    accountType: 'customer',
    cart: {
      items: [
        {
          id: 1,
          name: 'Product Name 1',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          description: 'Lorem ipsum dolor sit amet, consectetur',
          price: 50.00,
          total: 50.00,
          userQuantity: 1,
          quantity: 5,
        },
        {
          id: 2,
          name: 'Product Name 2',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          description: 'Lorem ipsum dolor sit amet, consectetur',
          price: 50.00,
          total: 100.00,
          userQuantity: 2,
          quantity: 5,
        },
        {
          id: 3,
          name: 'Product Name 3',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          description: 'Lorem ipsum dolor sit amet, consectetur',
          price: 10.00,
          total: 40.00,
          userQuantity: 4,
          quantity: 5,
        },
        {
          id: 4,
          name: 'Product Name 4',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          description: 'Lorem ipsum dolor sit amet, consectetur',
          price: 10.00,
          total: 20.00,
          userQuantity: 2,
          quantity: 3,
        },
      ],
      subtotal: 190.00,
      totalQuantity: 7
    },
  },
  mutations: {
    changeAccount(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.accountType = payload.accountType;
    },
    removeItem(state, payload) {
      let quantity = 0;
      let subtotal = 0;
      let newItems = state.cart.items.filter((item) => {
        if (item.id == payload.itemId) {
          quantity = item.userQuantity;
          subtotal = item.userQuantity * item.price;
        }
        return item.id != payload.itemId;
      });
      state.cart.items = newItems;
      state.cart.subtotal = state.cart.subtotal - subtotal;
      state.cart.totalQuantity = state.cart.totalQuantity - quantity;
    },
    addItemQuantity(state, payload) {
      const index = state.cart.items.findIndex(item => item.id == payload.itemId);
      state.cart.items[index].userQuantity += 1;
      state.cart.items[index].total += state.cart.items[index].price;
      state.cart.subtotal += state.cart.items[index].price;
      state.cart.totalQuantity += 1;
    },
    removeItemQuantity(state, payload) {
      const index = state.cart.items.findIndex(item => item.id == payload.itemId);
      state.cart.items[index].userQuantity -= 1;
      state.cart.items[index].total -= state.cart.items[index].price;
      state.cart.subtotal -= state.cart.items[index].price;
      state.cart.totalQuantity -= 1;
      if (state.cart.items[index].userQuantity == 0) {
        state.cart.items.splice(index, 1);
      }
    }
  },
  actions: {

  },
});
