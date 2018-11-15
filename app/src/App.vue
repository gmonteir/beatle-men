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
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item navbar-link is-arrowless" to="/shop">Shop</router-link>
          <div class="navbar-dropdown is-boxed">
            <router-link
              class="navbar-item is-size-6 has-text-weight-semibold"
              to="/shop/bikes">Bikes
            </router-link>
            <ul class="menu-list">
              <li>
                <router-link class="navbar-item" to="/shop/bikes/road">Road</router-link>
              </li>
              <li>
                <router-link class="navbar-item" to="/shop/bikes/mountain">Mountain</router-link>
              </li>
              <li>
                <router-link class="navbar-item" to="/shop/bikes/electric">Electric</router-link>
              </li>
            </ul>
            <hr class="navbar-divider">
            <router-link
              class="navbar-item is-size-6 has-text-weight-semibold"
              to="/shop/parts">Parts
            </router-link>
            <hr class="navbar-divider">
            <router-link
              class="navbar-item is-size-6 has-text-weight-semibold"
              to="/shop/accessories">Accessories
            </router-link>
          </div>
        </div>
        <router-link class="navbar-item" to="/services">Services</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/add-item">Add Item</router-link>
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
              <router-link to="/signup">
                <button class="button is-primary">Sign Up</button>
              </router-link>
            </p>
            <p class="control">
              <router-link to="/login">
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

<style lang="scss">
$navbar-item-img-max-height: 2.50rem;
@import "./../node_modules/bulma/bulma.sass";
@import "./../node_modules/@fortawesome/fontawesome-free/css/all.css"
</style>
