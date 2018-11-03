<template>
  <div class="shop">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Shop</h1>
      </div>
    </section>
    <aside class="menu">
      <h1 class="title is-3">Filter By:</h1>
      <p class="menu-label">Bikes</p>
      <ul class="menu-list">
        <li><a>Road</a></li>
        <li><a>Mountain</a></li>
        <li><a>Electric</a></li>
      </ul>
      <p class="menu-label">Parts & Accessories</p>
      <ul class="menu-list">
        <li><a>Parts</a></li>
        <li><a>Accessories</a></li>
      </ul>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
  @import "node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .menu {
    width: 20%;
    border-right: 1px gainsboro solid;
    margin-left: 20px;
  }
</style>
