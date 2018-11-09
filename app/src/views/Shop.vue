<template>
  <div class="shop">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Shop</h1>
      </div>
    </section>
    <div class="columns">
      <div class="column is-one-quarter">
        <aside class="menu">
          <h1 class="title is-3">Filter By:</h1>
          <p class="menu-label">Bikes</p>
          <ul class="menu-list">
            <li><router-link to="/shop/bikes/road">Road</router-link></li>
            <li><router-link to="/shop/bikes/mountain">Mountain</router-link></li>
            <li><router-link to="/shop/bikes/electric">Electric</router-link></li>
          </ul>
          <p class="menu-label">Parts & Accessories</p>
          <ul class="menu-list">
            <li><router-link to="/shop/parts">Parts</router-link></li>
            <li><router-link to="/shop/accessories">Accessories</router-link></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div>
          <ul>
            <li class="subtitle is-4 is-active bread-crumb"><router-link to="/shop">Shop</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('bikes')">> <router-link to="/shop/bikes">Bikes</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('road')">> <router-link to="/shop/bikes/road">Road</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('mountain')">> <router-link to="/shop/bikes/mountain">Mountain</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('electric')">> <router-link to="/shop/bikes/electric">Electric</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('parts')">> <router-link to="/shop/bikes/parts">Parts</router-link></li>
            <li class="subtitle is-4 bread-crumb" v-show="isInPath('accessories')">> <router-link to="/shop/bikes/accessories">Accessories</router-link></li>
          </ul>
        </div>
        <div>
          <h1 class="title is-3">{{getShopTitle()}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  methods: {
    isInPath(str) {
      if (this.$route.path.includes(str)) {
        return true;
      }
      return false;
    },
    getShopTitle() {
      return this.$route.name;
    },
  },
  watch: {
    '$route'(to, from) {
      getShopTitle();
    },
  },
};
</script>


<style lang="scss" scoped>
  @import "node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .menu {
    border-right: 1px gainsboro solid;
    margin-left: 40px;
    padding-right: 10px;
  }

  .bread-crumb {
    display: inline-block;
    margin-left: 5px;
  }

</style>
