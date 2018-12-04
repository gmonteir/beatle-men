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
              <select>
                <option disabled>Choose Credit Card</option>
                <option>John Mayor 4598</option>
                <option>Kobe Bryant 1234</option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Card:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Cardholder Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Card Number: '1234567890123456'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Exp Month (1-12): '7'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Exp Year (xxxx): '2020'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="CCV (xxx): '789' ">
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Shipping Address Information:</h1>
        <div class="field is-hoverable topMargin centered">
          <div class="control centered">
            <div class="select is-primary">
              <select>
                <option disabled>Choose Credit Card</option>
                <option>John Mayor 4598</option>
                <option>Kobe Bryant 1234</option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Address:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Shipping Address Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 1: '123 Main Street Apt #14'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 2: 'San Luis Obispo'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="State: 'CA'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Zip: '93401' ">
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Billing Address Information:</h1>
        <div class="field is-hoverable topMargin centered">
          <div class="control centered">
            <div class="select is-primary">
              <select>
                <option disabled>Choose Credit Card</option>
                <option>John Mayor 4598</option>
                <option>Kobe Bryant 1234</option>
              </select>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Card:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Billing Address Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 1: '123 Main Street'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 2: 'San Luis Obispo'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="State: 'CA'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Zip: '93401' ">
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
      <div>
        Shipping: ${{shippingCost}}
      </div>
      <div>
        Total: ${{total}}
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
    };
  },
  computed: {
    total() {
      return this.$store.state.cart.subtotal + this.shippingCost;
    },
  },
  methods: {
    createOrder() {
      let itemIDs = [];
      let userQuantities = [];
      this.$store.state.cart.items.forEach(item => {
        itemIDs.push(item.id);
        userQuantities.push(item.userQuantity);
      });
      axios.post('/api/orders', {
          userId: this.$store.state.userId,
          info: {
            items: itemIDs,
            quantities: userQuantities,
          },
      }).then((successRes) => {
        this.$store.commit('clearCart');
      });
    }
  }
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
