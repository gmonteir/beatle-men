<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">My Orders</h1>
      </div>
    </section>
    <show-orders
      v-for="order in orders"
      v-bind:key="order.id"
      v-bind:order="order"
      v-bind:items="items"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ShowOrders from './../components/ShowUserOrders.vue';

export default {
  name: 'showUserOrder',
  components: {
    ShowOrders,
  },
  mounted() {
    axios.get(`/api/orders/${this.$store.state.userId}/customer`)
      .then((res) => {
        console.log('orders:' + res.data.orders);
        this.orders = res.data.orders;
        this.getOrderContents(res.data.orders);
      });
  },
  data() {
    return {
      orders: [],
      items: [],
    };
  },
  methods: {
    getOrderContents(orders) {
      for (let i = 0; i < orders.length; i += 1) {
        console.log('orderid:' + orders[i].id);
        axios.get('/api/orderitems', {
          params: {
            orderId: orders[i].id,
          }
        }).then((res) => {
          this.items.push([]);
          this.items[i].push(orders[i].id);
          for (let j = 0; j < res.data.orderItems.length; j += 1) {
            const item = {
              id: res.data.orderItems[j].ItemId,
              price: res.data.orderItems[j].price,
              quantity: res.data.orderItems[j].quantity,
            }
            this.items[i].push(item);
          }
          console.log(this.items);
        });
      }
    },
  }
};
</script>

<style>
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
