<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Manage Orders</h1>
      </div>
    </section>
    <ul>
      <li v-for="order in orders" v-bind:key="order.id">
        <section class="smallMargin">
          <div class="columns">
            <div class="column is-2 columnOne">
              <h1 class="title is-4">Order ID: {{order.id}}</h1>
            </div>
            <div class="column is-3 columnOne">
              <h1 class="title is-4">Order Total: ${{getOrderTotal(order)}}</h1>
            </div>
            <div class="column is-4 columnOne">
              <h1 class="title is-4">Date: {{getFormattedDate(order.createdAt)}}</h1>
            </div>
            <div class="column is-3 columnOne">
              <h1 class="title is-4">User Email: {{getUserEmail(order)}}</h1>
            </div>
            <div class="column is-2 columnOne">
              <div class="control">
                <label class="radio">
                  <input type="radio">
                  Fulfilled
                </label>
                <label class="radio">
                  <input type="radio">
                  Unfulfilled
                </label>
              </div>
            </div>
          </div>
        </section>
        <section class="section smallMargin" id="address-info">
          <section class="bottomMargin">
            <div class="columns">
              <div class="column is-6" id="column">
                <h1 class="title is-4">Product</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">Price</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">Quantity</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">Total</h1>
              </div>
            </div>
          </section>
          <show-orders
            v-bind:order="order"
            v-bind:orderItems="orderItems"
            v-bind:items="items"
          />
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ShowOrders from './../components/ShowManageOrders.vue';

export default {
  name: 'manage-orders',
  components: {
    ShowOrders,
  },
  data() {
    return {
      orders: [],
      items: [],
      orderItems: [],
    };
  },
  mounted() {
    /*
    axios.get('/api/orders')
      .then((res) => {
        this.orders = res.data.orders;
        this.orderItems = res.data.orderItemsArr;
        this.items = res.data.itemsArr;
      });
    */
  },
  methods: {
    getOrderTotal(order) {
      let total = 0;
      for (let i = 0; i < this.orderItems.length; i += 1) {
        if (this.orderItems[i][0].OrderId === order.id) {
          for (let j = 0; j < this.orderItems[i].length; j += 1) {
            total += (this.orderItems[i][j].price * this.orderItems[i][j].quantity);
          }
        }
      }
      total = +total.toFixed(2);
      return total;
    },
    getFormattedDate(date) {
      return date.substring(0, date.indexOf('T'));
    },
    getUserEmail(order) {
      return "TEMP@TEMP";
    },
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
