<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" id="modal-container">
  <body>
    <div class="columns">
      <div class="column">
        <section class="section">
          <div class="title">
            <h1 class="title is-2">{{item.name}}</h1>
            <div class="image">
              <img :src="'api/' + item.image"/>
            </div>
            <h1 class="title is-4 spacing">Quantity Available: {{item.quantity}}</h1>
          </div>
        </section>
      </div>
      <div class="column" id="item-content">
        <div>
          <h1 class="title is-8" id="heading">Description</h1>
          <h2 class="subtitle">{{item.description}}</h2>
          <h1 class="title is-8" id="heading">Specifications</h1>
          <h2 class="subtitle">{{item.specifications}}</h2>
          <h1 class="title is-8" id="heading">Price: ${{item.price}}</h1>
          <a class="button is-primary is-rounded right" v-on:click="addToCart">Add To Cart</a>
          <p class="help is-success"
            v-if="isAddedToCart">
            Added to Cart Successfully!
          </p>
        </div>
        <div id="close-div">
          <a class="button is-rounded right" id="close-btn" v-on:click="$emit('close')">Close</a>
        </div>
      </div>
    </div>
  </body>
  </div>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isAddedToCart: false,
    };
  },
  methods: {
    addToCart() {
      const newItem = {
        id: this.item.id,
        name: this.item.name,
        image: this.item.image,
        description: this.item.description,
        specifications: this.item.specifications,
        price: this.item.price,
        total: this.item.price,
        userQuantity: 1,
        quantity: this.item.quantity,
      };
      if (!this.isAddedToCart) {
        this.$store.commit('addToCart', newItem);
        this.isAddedToCart = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/sass/utilities/initial-variables";
$modal-content-width: 1500px;
@import "../../node_modules/bulma/bulma.sass";

.image {
  width: 600px;
  top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.section {
  text-align: center;
}
.spacing {
  margin-top: 40px;
}
#modal-container {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}
#heading {
  margin-top: 30px;
}
#close-btn {
  margin-right: 10px;
}
#item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#close-div {
  display: flex;
  flex-direction: row-reverse;
}
</style>
