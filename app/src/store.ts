/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
    accountType: 'customer',
    addresses: [],
    cart: {
      items: [],
      subtotal: 0,
      totalQuantity: 0,
    },
    users: [],
    cards: [],
    storeInfo: {
      title: 'Foxcycle San Luis Obispo',
      addressLine1: '123 Higuera St',
      addressLine2: 'San Luis Obispo, CA 93405',
      phone: '(805) 123-4567',
      email: 'customers@foxcycle.com',
      mondayOpen: '10:00AM',
      mondayClose: '8:00PM',
      tuesdayOpen: '10:00AM',
      tuesdayClose: '8:00PM',
      wednesdayOpen: '10:00AM',
      wednesdayClose: '8:00PM',
      thursdayOpen: '10:00AM',
      thursdayClose: '8:00PM',
      fridayOpen: '10:00AM',
      fridayClose: '8:00PM',
      saturdayOpen: '10:00AM',
      saturdayClose: '6:00PM',
      sundayOpen: '10:00AM',
      sundayClose: '6:00PM',
    },
  },
  mutations: {
    changeAccount(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.userId = payload.userId;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.accountType = payload.accountType;
    },
    changeName(state, payload) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    changeEmail(state, payload) {
      state.email = payload.email;
    },
    addAddresses(state, payload) {
      state.addresses = payload;
    },
    addAddress(state, payload) {
      state.addresses.push(payload);
    },
    removeAddress(state, payload) {
      let newAddresses = state.addresses.filter((address) => {
        return address.id != payload.id;
      });
      state.addresses = newAddresses;
    },
    addCards(state, payload) {
      state.cards = payload;
    },
    addCard(state, payload) {
      state.cards.push(payload);
    },
    removeCard(state, payload) {
      let newCreditCards = state.cards.filter((card) => {
        return card.id != payload.id;
      });
      state.cards = newCreditCards;
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
    },
    addToCart(state, payload) {
      const foundItem = state.cart.items.find((item) => {
        return item.id == payload.id;
      });

      if (!foundItem) {
        state.cart.items.push(payload);
        state.cart.totalQuantity += 1;
        state.cart.subtotal += payload.price;
      }
    },
    clearCart(state) {
      state.cart.items = [];
      state.cart.totalQuantity = 0;
      state.cart.subtotal = 0;
    },
    addUsers(state, payload) {
      state.users = payload;
    },
    changeStoreInfo(state, payload) {
      state.storeInfo.title = payload.title;
      state.storeInfo.addressLine1 = payload.addressLine1;
      state.storeInfo.addressLine2 = payload.addressLine2;
      state.storeInfo.phone = payload.phone;
      state.storeInfo.email = payload.email;
      state.storeInfo.mondayOpen = payload.mondayOpen;
      state.storeInfo.mondayClose = payload.mondayClose;
      state.storeInfo.tuesdayOpen = payload.tuesdayOpen;
      state.storeInfo.tuesdayClose = payload.tuesdayClose;
      state.storeInfo.wednesdayOpen = payload.wednesdayOpen;
      state.storeInfo.wednesdayClose = payload.wednesdayClose;
      state.storeInfo.thursdayOpen = payload.thursdayOpen;
      state.storeInfo.thursdayClose = payload.thursdayClose;
      state.storeInfo.fridayOpen = payload.fridayOpen;
      state.storeInfo.fridayClose = payload.fridayClose;
      state.storeInfo.saturdayOpen = payload.saturdayOpen;
      state.storeInfo.saturdayClose = payload.saturdayClose;
      state.storeInfo.sundayOpen = payload.sundayOpen;
      state.storeInfo.sundayClose = payload.sundayClose;
    }
  },
  actions: {

  },
});
