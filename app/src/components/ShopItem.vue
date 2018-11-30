<template>
  <div class="shop-item">
    <item-modal v-if="showModal" v-on:close="showModal = false" v-bind:item="this.item"/>
    <div class="image">
      <a v-on:click="showItemModel">
        <img :src="'api/' + this.item.image"/>
      </a>
    </div>
    <div class="title is-4">
      <a
        id="item-name"
        v-on:click="showItemModel">
        {{item.name}}
      </a>
    </div>
    <div class="subtitle is-5">
      <p>${{item.price}}</p>
    </div>
  </div>
</template>

<script>
import ItemModal from './../views/ItemModal.vue';

export default {
  components: {
    ItemModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showItemModel() {
      this.showModal = true;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.image {
  //width: 300px;
  margin: 0 auto;
}

.shop-item {
  text-align: center;
}

</style>
