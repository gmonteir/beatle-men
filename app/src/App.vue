<template>
<div id="app">
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="./assets/foxcycle.png"/>
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
          <div class="buttons">
            <button class="button is-primary">
              <router-link id="button-signup" to="/signup">
                Sign Up
              </router-link>
            </button>
            <button class="button is-light">
              <router-link id="button-login" to="/login">
                Log In
              </router-link>
            </button>
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
#button-signup {
  color: white;
}
#button-login {
  color: black,
}
</style>
