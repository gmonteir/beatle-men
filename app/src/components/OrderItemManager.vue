<template>
  <div class="order-item-manager">
    <div class="columns">
      <div class="column is-2">
        <figure class="image is-128x128">
          <img v-bind:src="item.image">
        </figure>
      </div>
      <div class="column is-4" id="product-column">
        <h1 class="title is-4">{{item.name}}</h1>
        <h2 class="subtitle is-6">{{item.description}}
        </h2>
      </div>
      <div class="column is-2" id="price-column">
        <h1 class="title is-5">${{item.price}}</h1>
      </div>
      <div class="column is-2" id="quantity-column">
        <h3 class="title is-5" id="user-quantity-container">{{item.userQuantity}}</h3>
      </div>
      <div class="column is-2" id="price-column">
        <h1 class="title is-5">${{item.total}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-item-manager',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAtMaxQuantity: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

#price-column {
  text-align: center;
}
#quantity-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#remove-btn {
  margin-top: 0.25rem;
}
#user-quantity-container {
  margin-bottom: 0.5rem;
}
</style>