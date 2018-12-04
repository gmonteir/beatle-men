<template>
  <div class="shop">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Inventory</h1>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-2" id="column">
          <h1 class="title is-4">Product</h1>
        </div>
        <div class="column is-2" id="column-centered">
          <h1 class="title is-4">Description</h1>
        </div>
        <div class="column is-2" id="column-centered">
          <h1 class="title is-4">Specifications</h1>
        </div>
        <div class="column is-2" id="column-centered">
          <h1 class="title is-4">Price</h1>
        </div>
        <div class="column is-2" id="column-centered">
          <h1 class="title is-4">Quantity</h1>
        </div>
        <div class="column is-2" id="column-centered">
          <router-link to="/add-item">
            <button class="button is-outlined" id="edit-btn">
              <span>Add New Item</span>
            </button>
          </router-link>
        </div>
      </div>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <div class="columns itemColumns">
            <div class="column is-2">
              <p v-if="item.name.length < 30">{{item.name}}</p>
              <p v-else>{{getShorterString(item.name)}}</p>
            </div>
            <div class="column is-2" id="center">
              <p v-if="item.description.length < 30">{{item.description}}</p>
              <p v-else>{{getShorterString(item.description)}}</p>
            </div>
            <div class="column is-2" id="center">
              <p v-if="item.specifications.length < 30">{{item.specifications}}</p>
              <p v-else>{{getShorterString(item.specifications)}}</p>
            </div>
            <div class="column is-2" id="center">
              <p>{{item.price}}</p>
            </div>
            <div class="column is-2" id="center">
              <p>{{item.quantity}}</p>
            </div>
            <div class="column is-1" id="center">
              <button class="button is-warning" v-on:click="editItem(item)">Edit</button>
            </div>
            <div class="column is-1" id="center">
              <button class="delete" v-on:click="removeItem(item)"></button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'inventory',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get('/api/items')
      .then((res) => {
        this.items = res.data.items;
      });
  },
  methods: {
    getShorterString(str) {
      return str.substring(0, 30) + '...';
    },
    editItem(item) {
      /*
      axios.put(`/api/items/${item.id}`, {

      }).then((res) => {

        });
      */
    },
    removeItem(item) {
      axios.delete(`/api/items/${item.id}`)
        .then((res) => {
          for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].id === item.id) {
              this.items.splice(i, 1);
            }
          }
        });
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

.section {
  margin: 0 10%;
}

.itemColumns:hover {
  background-color: gainsboro;
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

#center {
  text-align: center;
}

#edit-btn {
  margin: 0 10%;
  margin-right: 1rem;
}

</style>
