<template>
<div id="app">
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="assets/foxcycle.png"/>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/shop">Shop</router-link>
        <router-link class="navbar-item" to="/services">Services</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/cart">
                <button class="button is-light is-outlined">
                  <span class="icon">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>Cart</span>
                </button>
              </router-link>
            </p>
            <p class="control">
              <router-link to="/account" v-if="isLoggedIn">
                <button class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-user"></i>
                  </span>
                  <span>Account</span>
                </button>
              </router-link>
              <router-link to="/signup" v-else>
                <button class="button is-primary">Sign Up</button>
              </router-link>
            </p>
            <p class="control">
              <button class="button is-light" v-if="isLoggedIn" v-on:click="logout">Logout</button>
              <router-link to="/login" v-else>
                <button class="button is-light">Log In</button>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    logout() {
      axios.post('/api/login/logout', {
        email: this.$store.state.email,
      }).then((successRes) => {
        this.$store.commit('changeAccount', {
          isLoggedIn: false,
          firstName: null,
          lastName: null,
          email: null,
          accountType: 'customer',
        });
      }, (failRes) => {
        console.log('fail to logout');
      });
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>


<style lang="scss">
$navbar-item-img-max-height: 2.50rem;
@import "./../node_modules/bulma/bulma.sass";
@import "./../node_modules/@fortawesome/fontawesome-free/css/all.css";
</style>
