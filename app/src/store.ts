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
      containsBike: false,
      shippingAddress: {
        id: null,
        UserAccountId: null,
        name: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        zip: null,
      },
      billingAddress: {
        id: null,
        UserAccountId: null,
        name: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        zip: null,
      },
      creditCard: {
        id: null,
        name: null,
        number: null,
        expMonth: null,
        expYear: null,
        cvv: null,
      },
    },
    users: [],
    cards: [],
    editItem: {
      id: null,
      name: null,
      price: null,
      quantity: null,
      description: null,
      specifications: null,
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
      state.cart.containsBike = false;
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].isBike) {
          state.cart.containsBike = true;
          break;
        }
      }
      state.cart.items = newItems;
      state.cart.subtotal = state.cart.subtotal - subtotal;
      state.cart.totalQuantity = state.cart.totalQuantity - quantity;
      state.cart.subtotal = +state.cart.subtotal.toFixed(2);
    },
    addItemQuantity(state, payload) {
      const index = state.cart.items.findIndex(item => item.id == payload.itemId);
      state.cart.items[index].userQuantity += 1;
      state.cart.items[index].total += state.cart.items[index].price;
      state.cart.subtotal += state.cart.items[index].price;
      state.cart.totalQuantity += 1;
      state.cart.subtotal = +state.cart.subtotal.toFixed(2);
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
      state.cart.subtotal = +state.cart.subtotal.toFixed(2);
    },
    addToCart(state, payload) {
      const foundItem = state.cart.items.find((item) => {
        return item.id == payload.id;
      });

      if (!foundItem) {
        state.cart.items.push(payload);
        state.cart.totalQuantity += 1;
        state.cart.subtotal += payload.price;
        state.cart.subtotal = +state.cart.subtotal.toFixed(2);
      }
    },
    clearCart(state) {
      state.cart.items = [];
      state.cart.totalQuantity = 0;
      state.cart.subtotal = 0;
      state.cart.containsBike = false;
    },
    addUsers(state, payload) {
      state.users = payload;
    },
    changeShippingAddress(state, payload) {
      state.cart.shippingAddress.id = payload.id;
      state.cart.shippingAddress.UserAccountId = payload.UserAccountId;
      state.cart.shippingAddress.street1 = payload.street1;
      state.cart.shippingAddress.street2 = payload.street2;
      state.cart.shippingAddress.city = payload.city;
      state.cart.shippingAddress.state = payload.state;
      state.cart.shippingAddress.zip = payload.zip;
    },
    changeShippingAddressName(state, payload) {
      state.cart.shippingAddress.name = payload.firstName + " " + payload.lastName;
    },
    changeBillingAddress(state, payload) {
      state.cart.billingAddress.id = payload.id;
      state.cart.billingAddress.UserAccountId = payload.UserAccountId;
      state.cart.billingAddress.street1 = payload.street1;
      state.cart.billingAddress.street2 = payload.street2;
      state.cart.billingAddress.city = payload.city;
      state.cart.billingAddress.state = payload.state;
      state.cart.billingAddress.zip = payload.zip;
    },
    changeBillingAddressName(state, payload) {
      state.cart.billingAddress.name = payload.firstName + " " + payload.lastName;
    },
    changeCardInCart(state, payload) {
      state.cart.creditCard.id = payload.id;
      state.cart.creditCard.name = payload.name;
      state.cart.creditCard.number = payload.number;
      state.cart.creditCard.expMonth = payload.expMonth;
      state.cart.creditCard.expYear = payload.expYear;
      state.cart.creditCard.cvv = payload.cvv;
    },
    changeCartBikeStatus(state, payload) {
      state.cart.containsBike = payload;
    }
  },
  actions: {

  },
});
