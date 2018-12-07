<!-- eslint-disable max-len -->
<template>
<div>
  <body>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1 centered">Checkout</h1>
      </div>
    </section>
    <div class="columns">
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Credit Card Information:</h1>
        <div class="field is-hoverable topMargin centered">
          <div class="control centered">
            <div class="select is-primary">
              <select v-model="tempCreditCard" v-on:change="changeCreditCard(tempCreditCard)">
                <option disabled>Choose Credit Card</option>
                <option
                  v-for="card in cards"
                  v-bind:value="card"
                  v-bind:key="card.id">
                  {{card.name}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Card:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Cardholder Name: 'John Smith'"
              v-model="tempCreditCard.name"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Card Number: '1234567890123456'"
              v-model="tempCreditCard.number"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Exp Month (1-12): '7'"
              v-model="tempCreditCard.expMonth"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Exp Year (xxxx): '2020'"
              v-model="tempCreditCard.expYear"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="CVV (xxx): '789'"
              v-model="tempCreditCard.cvv"
            >
          </div>
        </div>
        <a href="#" class="button is-success" v-on:click="saveCreditCard">Save</a>
      </div>
      <div class="column is-one-third centered" v-if="containsBike">
        <h1 class="topMargin bigFont">Shipping Address Information:</h1>
        <div class="field is-hoverable topMargin centered">
          <div class="control centered">
            <div class="select is-primary">
              <select v-model="tempShippingAddress" v-on:change="changeShippingAddress(tempShippingAddress)">
                <option disabled>Choose Shipping Address</option>
                <option
                  v-for="address in addresses"
                  v-bind:value="address"
                  v-bind:key="address.id">
                  {{address.street1}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Address:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Shipping Address Name: 'John Smith'"
              v-model="tempShippingAddress.name"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Street Line 1: '123 Main Street Apt #14'"
              v-model="tempShippingAddress.street1">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Street Line 2: 'San Luis Obispo'"
              v-model="tempShippingAddress.street2"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="City: 'San Luis Obispo'"
              v-model="tempShippingAddress.city"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="State: 'CA'"
              v-model="tempShippingAddress.state"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Zip: '93401'"
              v-model="tempShippingAddress.zip">
          </div>
        </div>
        <a href="#" class="button is-success" v-on:click="saveShippingAddress">Save</a>
      </div>
      <div class="column is-one-third centered" v-if="containsBike">
        <h1 class="topMargin bigFont">Billing Address Information:</h1>
        <div class="field is-hoverable topMargin centered">
          <div class="control centered">
            <div class="select is-primary">
              <select v-model="tempBillingAddress" v-on:change="changeBillingAddress(tempBillingAddress)">
                <option disabled>Choose Billing Address</option>
                <option
                  v-for="address in addresses"
                  v-bind:value="address"
                  v-bind:key="address.id">
                  {{address.street1}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Address::</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Billing Address Name: 'John Smith'"
              v-model="billingAddress.name"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Street Line 1: '123 Main Street'"
              v-model="billingAddress.street1"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Street Line 2: 'San Luis Obispo'"
              v-model="billingAddress.street2"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="City: 'San Luis Obispo'"
              v-model="billingAddress.city"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="State: 'CA'"
              v-model="billingAddress.state"
            >
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input
              class="input is-primary"
              type="text" placeholder="Zip: '93401'"
              v-model="billingAddress.zip"
            >
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
    </div>
    <div class="columns">
    <div class="column is-half right topMargin bigFont">
      <div>
        Subtotal: ${{this.$store.state.cart.subtotal}}
      </div>
      <div v-if="containsBike">
        Shipping: ${{shippingCost}}
      </div>
      <div v-else>
        Shipping: $0 (pick-up at store)
      </div>
      <div v-if="containsBike">
        Total: ${{total}}
      </div>
      <div v-else>
        Total: ${{this.$store.state.cart.subtotal}}
      </div>
    </div>
    <div class="column is-half left topMargin bigFont">
      <router-link to="/confirmation">
        <a class="button is-success" v-on:click="createOrder">Place My Order</a>
      </router-link>
    </div>
    </div>
  </body>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      shippingCost: 5,
      tempShippingAddress: {
        id: null,
        UserAccountId: null,
        name: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        zip: null,
      },
      tempBillingAddress: {
        id: null,
        UserAccountId: null,
        name: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        zip: null,
      },
      tempCreditCard: {
        id: null,
        name: null,
        number: null,
        expMonth: null,
        expYear: null,
        cvv: null,
      },
    };
  },
  computed: {
    total() {
      return this.$store.state.cart.subtotal + this.shippingCost;
    },
    addresses() {
      return this.$store.state.addresses;
    },
    cards() {
      return this.$store.state.cards;
    },
    shippingAddress() {
      return this.$store.state.cart.shippingAddress;
    },
    billingAddress() {
      return this.$store.state.cart.billingAddress;
    },
    creditCard() {
      return this.$store.state.cart.creditCard;
    },
    containsBike() {
      return this.$store.state.cart.containsBike;
    },
  },
  methods: {
    createOrder() {
      const itemIDs = [];
      const userQuantities = [];
      let addressId = 1
      if (!this.containsBike) {
        addressId = this.tempShippingAddress.id;
      }
      this.$store.state.cart.items.forEach((item) => {
        itemIDs.push(item.id);
        userQuantities.push(item.userQuantity);
      });
      axios.post('/api/orders', {
        userId: this.$store.state.userId,
        info: {
          items: itemIDs,
          quantities: userQuantities,
        },
        PaymentInfoId: this.tempCreditCard.id,
        AddressId: addressId,
      }).then((successRes) => {
        this.$store.commit('clearCart');
      });
    },
    changeShippingAddress(address) {
      this.$store.commit('changeShippingAddress', address);
      axios.get('/api/useraccounts/' + address.UserAccountId).then((res) => {
        this.$store.commit('changeShippingAddressName', res.data);
        this.tempShippingAddress = this.$store.state.cart.shippingAddress;
      });
    },
    changeBillingAddress(address) {
      this.$store.commit('changeBillingAddress', address);
      axios.get('/api/useraccounts/' + address.UserAccountId).then((res) => {
        this.$store.commit('changeBillingAddressName', res.data);
      });
    },
    changeCreditCard(card) {
      this.$store.commit('changeCardInCart', card);
      this.tempCreditCard = card;
    },
    saveCreditCard() {
      const nameArray = this.tempCreditCard.name.split(' ');
      axios.get('/api/useraccounts/' + this.$store.state.userId).then((res) => {
        axios.post('/api/paymentinfo', {
          email: this.$store.state.email,
          password: res.data.password,
          firstName: nameArray[0],
          lastName: nameArray[1],
          number: this.tempCreditCard.number,
          cvv: this.tempCreditCard.cvv,
          month: this.tempCreditCard.expMonth,
          year: this.tempCreditCard.expYear,
        }).then((cardRes) => {
          this.$store.commit('changeCardInCart', cardRes.data);
          this.tempCreditCard = cardRes.data;
        });
      });
    },
    saveShippingAddress() {
      axios.get('/api/useraccounts/' + this.$store.state.userId).then((res) => {
        axios.post('/api/addresses', {
          email: this.$store.state.email,
          password: res.data.password,
          street1: this.tempShippingAddress.street1,
          street2: this.tempShippingAddress.street2,
          city: this.tempShippingAddress.city,
          state: this.tempShippingAddress.state,
          zip: this.tempShippingAddress.zip,
        }).then((addrRes) => {
          this.$store.commit('changedShippingAddress', addrRes.data);
          this.$store.commit('changeShippingAddressName', {
            firstName: this.$store.state.firstName,
            lastName: this.$store.state.lastName,
          });
          this.tempShippingAddress.id = addrRes.data.id;
        });
      });
    },
    saveBillingAddress() {
      axios.get('/api/useraccounts/' + this.$store.state.userId).then((res) => {
        axios.post('/api/addresses', {
          email: this.$store.state.email,
          password: res.data.password,
          street1: this.tempBillingAddress.street1,
          street2: this.tempBillingAddress.street2,
          city: this.tempBillingAddress.city,
          state: this.tempBillingAddress.state,
          zip: this.tempBillingAddress.zip,
        }).then((addrRes) => {
          this.$store.commit('changeBillingAddress', addrRes.data);
          this.$store.commit('changeBillingAddressName', {
            firstName: this.$store.state.firstName,
            lastName: this.$store.state.lastName,
          });
          this.tempBillingAddress.id = addrRes.data.id;
        });
      });
    },
  },
  mounted() {
    axios.get('/api/paymentinfo').then((success) => {
      this.$store.commit('addCards', success.data.cards);
    });
    axios.get('/api/addresses').then((success) => {
      this.$store.commit('addAddresses', success.data.addresses);
    });
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.hero {
  margin: 10px 0;
  text-align: center;
}

.centered {
  text-align: center;
}

.left {
  text-align: left;
  margin-left: 100px;
}

.right {
  text-align: right;
  padding-right: 100px;
}

.topMargin {
  margin-top: 30px;
}

.bigFont {
  font-size: 30px;
}

.sectionSmall {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  width: 360px;
  word-wrap: break-word;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
