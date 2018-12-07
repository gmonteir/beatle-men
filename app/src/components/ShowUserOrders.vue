<template>
  <div>
    <add-review-modal
      v-bind:itemId="reviewItemId"
      v-if="isAddReviewModalOpen"
      v-on:close="isAddReviewModalOpen = false"
    />
    <section class="smallMargin">
      <div class="columns">
        <div class="column is-2 columnOne">
          <h1 class="title is-4">Order ID: {{order.id}}</h1>
        </div>
        <div class="column is-2 columnOne">
          <h1 class="title is-4">Order Total: {{orderTotal}}</h1>
        </div>
        <div class="column is-2 columnOne">
          <h1 class="title is-4">Date: {{order.createdAt}}</h1>
        </div>
      </div>
    </section>
    <section class="section smallMargin" id="address-info">
      <ul>
        <li v-for="item in displayedItems" v-bind:key="item.id">
          <section class="bottomMargin">
            <div class="columns">
              <div class="column is-3" id="column">
                <h1 class="title is-4">{{item.name}}</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">{{item.price}}</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">{{item.quantity}}</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <h1 class="title is-4">{{item.price * item.quantity}}</h1>
              </div>
              <div class="column is-2" id="column-centered">
                <button
                  class="button is-outlined"
                  id="edit-btn"
                  v-on:click="openAddReviewModal(item)">
                  Add Review
                </button>
              </div>
            </div>
          </section>
        </li>
      </ul>
    </section>    
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
    }
  },
  components: {
    AddReviewModal,
  },
  data() {
    return {
      relevantItems: [],
      displayedItems: [],
      reviewItemId: null,
      orderTotal: 0,
      isAddReviewModalOpen: null,
    };
  },
  mounted() {
    console.log('mounted: ' + this.items);
    for (let i = 0; i < this.items.length; i += 1) {
      console.log('in for');
      if (this.items[i][0] === this.order.id) {
        this.relevantItems = this.items[i];
        this.relevantItems.splice(0, 1);
        console.log('in if: ' + this.relevantItems);
      }
    }
    for (let i = 0; i < this.relevantItems.length; i += 1) {
      axios.get(`/api/items/${this.relevantItems[i].id}`)
        .then((res) => {
          console.log('displayedItems: ' + res.data);
          this.displayedItems.push(res.data);
          this.orderTotal += res.data.price * res.data.quantity;
        });
    }
  },
  methods: {
    openAddReviewModal(item) {
      this.reviewItemId = item.id;
      this.isAddReviewModalOpen = true;
    },
  }
}
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