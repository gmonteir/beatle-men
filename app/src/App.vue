<template>
<div>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="./assets/foxcycle.png" display="blocked"/>
        <!-- <img id="logo" alt="store logo" src="./assets/bulma-logo.png"/> -->
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/home">HOME</router-link>
        <router-link class="navbar-item" to="/shop">SHOP</router-link>
        <router-link class="navbar-item" to="/services">SERVICES</router-link>
        <router-link class="navbar-item" to="/about">ABOUT</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view id="home"></router-view>
</div>
</template>

<style lang="scss">
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
