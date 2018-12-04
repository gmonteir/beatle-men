<template>
<body>
  <login-warning-modal v-if="showLoginWarning" v-on:close="showLoginWarning = false"/>
  <section class="hero is-info is-bold">
    <div class="hero-body">
      <h1 class="title is-1">Shopping Cart</h1>
    </div>
  </section>
  <section class="section" id="cart-info">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="box">
            <p class="subtitle is-4">
              Total Number of Items: {{this.$store.state.cart.totalQuantity}}
            </p>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="box">
            <p class="subtitle is-4">
              Subtotal: ${{this.$store.state.cart.subtotal}}
            </p>
          </div>
        </div>
        <div class="level-item">
          <router-link to="/checkout" v-if="this.$store.state.isLoggedIn">
            <button class="button is-primary is-medium">Checkout</button>
          </router-link>
          <button class="button is-primary is-medium" v-else v-on:click="showLoginWarning = true">Checkout</button>
        </div>

      </div>
    </div>
  </section>
  <section class="section">
    <div class="columns">
      <div class="column is-6" id="column">
        <h1 class="title is-4">Product</h1>
      </div>
      <div class="column is-2" id="column-centered">
        <h1 class="title is-4">Price</h1>
      </div>
      <div class="column is-2" id="column-centered">
        <h1 class="title is-4">Quantity</h1>
      </div>
      <div class="column is-2" id="column-centered">
        <h1 class="title is-4">Total</h1>
      </div>
    </div>
  </section>
  <section class="section">
    <cart-item
      v-for="item in this.$store.state.cart.items"
      v-bind:key="item.id"
      v-bind:item="item"
    />
  </section>
</body>
</template>

<script>
import CartItem from './../components/CartItem.vue';
import LoginWarningModal from './../components/LoginWarningModal.vue';

export default {
  name: 'cart',
  components: {
    CartItem,
    LoginWarningModal,
  },
  data() {
    return {
      showLoginWarning: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables";
$section-padding:  2rem 15rem;
$box-padding: 0.4rem;
@import "../../node_modules/bulma/bulma.sass";
.hero {
  margin-top: 10px;
  text-align: center;
}
#column{
  border-bottom-style: solid;
  border-color: gray;
}
#column-centered{
  text-align: center;
  border-bottom-style: solid;
  border-color: gray;
}
#remove-btn {
  margin-top: 1rem;
}
</style>
