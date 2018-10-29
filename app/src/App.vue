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
</style>
