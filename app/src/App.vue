<template>
  <div id="app">
    <div id="header">
        <img id="logo" alt="store logo" src="./assets/store-logo.png"/>
    </div>
    <div id="nav">
      <router-link to="/home">HOME</router-link>
      <router-link to="/shop">SHOP</router-link>
      <router-link to="/services">SERVICES</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  background-color: #1B2222;
  display: flex; /* enable flex box style */
  flex-direction: row;
  justify-content: flex start;
  #logo {
    height: 30%;
    width: 30%;
    margin-left: 5px;
  }
}
#nav {
  padding-bottom: 10px;
  background-color: #1B2222;
  a {
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
    color: white;
    text-decoration: none; /* removes underline from address link */
    &.router-link-exact-active {
      color: #FCC215;
    }
  }
}
</style>
