<template>
  <div class="shop-item">
    <div class="image">
      <img src="assets/home-slideshow-4.jpg"/>
    </div>
    <div class="title is-4">
      <p><router-link to="#">{{item.name}}</router-link></p>
    </div>
    <div class="subtitle is-5">
      <p>${{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.image {
  width: 300px;
  margin: 0 auto;
}

.shop-item {
  text-align: center;
}

</style>
