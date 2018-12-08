<template>
  <div class="show-manage-orders">
    <ul>
      <li v-for="item in displayedItems" v-bind:key="item.id">
        <div class="columns">
          <div class="column is-4">
            <h1 class="subtitle is-4">{{item.name}}</h1>
          </div>
          <div class="column is-3" style="text-align: center">
            <h1 class="subtitle is-4">${{item.price}}</h1>
          </div>
          <div class="column is-3" style="text-align: center">
            <h1 class="subtitle is-4">{{item.quantity}}</h1>
          </div>
          <div class="column is-2" style="text-align: center">
            <h1 class="subtitle is-4">${{item.price * item.quantity}}</h1>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'show-manage-orders',
  props: {
    order: {
      type: Object,
    },
    items: {
      type: Array,
    },
    orderItems: {
      type: Array,
    },
  },
  data() {
    return {
      displayedItems: [],
    };
  },
  mounted() {
    for (let i = 0; i < this.orderItems.length; i += 1) {
      if (this.orderItems[i][0].OrderId === this.order.id) {
        for (let j = 0; j < this.orderItems[i].length; j += 1) {
          const displayItem = {
            id: null,
            name: null,
            price: null,
            quantity: null,
            total: null,
          };
          displayItem.id = this.items[i][j].id;
          displayItem.name = this.items[i][j].name;
          displayItem.price = this.orderItems[i][j].price;
          displayItem.quantity = this.orderItems[i][j].quantity;
          displayItem.total = this.orderItems[i][j].price * this.orderItems[i][j].quantity;
          this.displayedItems.push(displayItem);
        }
      }
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.hero {
    margin: 10px 0;
    text-align: center;
}

.bottomMargin {
  margin-bottom: 20px;
}

.smallMargin {
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
}

.columnOne{
  text-align: left;
  margin-left: 20px;
}

#address-info {
  border-style: solid;
  border-color: rgb(150, 150, 150);
  border-radius: 5px;
  padding-bottom: 15px;
}

#column{
  border-bottom-style: solid;
  border-color: gray;
}
#column-centered{
  text-align: center;
  border-bottom-style: solid;
  border-color: gray;
}

</style>
