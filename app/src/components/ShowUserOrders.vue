<template>
  <div class="show-user-orders">
    <add-review-modal
      v-bind:itemId="reviewItemId"
      v-if="isAddReviewModalOpen"
      v-on:close="isAddReviewModalOpen = false"
    />
    <ul>
      <li v-for="item in displayedItems" v-bind:key="item.id">
        <div class="columns">
          <div class="column is-3">
            <h1 class="subtitle is-4">{{item.name}}</h1>
          </div>
          <div class="column is-2" style="text-align: center">
            <h1 class="subtitle is-4">${{item.price}}</h1>
          </div>
          <div class="column is-2" style="text-align: center">
            <h1 class="subtitle is-4">{{item.quantity}}</h1>
          </div>
          <div class="column is-2" style="text-align: center">
            <h1 class="subtitle is-4">${{item.price * item.quantity}}</h1>
          </div>
          <div class="column is-3" style="text-align: center">
            <button
              class="button"
              v-on:click="openAddReviewModal(item)">
              New Review
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import AddReviewModal from './AddReviewModal.vue';

export default {
  name: 'show-user-orders',
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
  components: {
    AddReviewModal,
  },
  data() {
    return {
      displayedItems: [],
      reviewItemId: null,
      isAddReviewModalOpen: null,
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
  methods: {
    openAddReviewModal(item) {
      this.reviewItemId = item.id;
      console.log(item.id);
      this.isAddReviewModalOpen = true;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

</style>
