<template>
  <div class="shop">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Shop</h1>
      </div>
    </section>
    <div class="columns">
      <div class="column is-one-quarter">
        <aside class="menu">
          <div id="filtered">
            <h1 class="title is-3">Filter By:</h1>
            <ul>
              <li v-for="category in chosenCategories" v-bind:key="category.id">
                <div class="block">
                  <span class="tag subtitle is-6">
                    {{category.label}}
                    <button class="delete is-small" v-on:click="removeChosenCategory(category)"/>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div v-for="category in categories" v-bind:key="category.id">
            <div v-for="subcategory in category" v-bind:key="subcategory.id">
              <div v-if="subcategory.parentID === -1">
                <p class="title is-4" id="category" v-on:click="filterCategory(subcategory)"><a>{{subcategory.label}}</a></p>
              </div>
              <div v-else>
                <ul class="menu-list">
                  <li class="subtitle is-5" v-on:click="filterCategory(subcategory)"><a>{{subcategory.label}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="column">
        <div>
          <ul>
            <li class="subtitle is-4 is-active bread-crumb">Shop</li>
            <li class="subtitle is-4 is-active bread-crumb" v-for="category in chosenCategories" :key="category.id">> {{category.label}}</li>
          </ul>
          <h1 class="title is-3 shop-title">{{getShopTitle()}}</h1>
        </div>
        <ul class="item-grid" v-if="items.length">
          <li v-for="item in filteredItems" :key="item ? item.id : ''"><ShopItem class="item"
            v-bind:item="item"
          /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ShopItem from './../components/ShopItem.vue';

export default {
  name: 'shop',
  components: {
    ShopItem,
  },
  data() {
    return {
      items: [],
      filteredItems: [],
      categories: [],
      chosenCategories: [],
    };
  },
  mounted() {
    axios.get('/api/categories')
      .then((response) => {
        const list = [];
        let k = 0;
        for (let i = 0; i < response.data.categories.length; i += 1) {
          if (response.data.categories[i].parentID === -1) {
            list.push([]);
            list[k].push(response.data.categories[i]);
            for (let j = 0; j < response.data.categories.length; j += 1) {
              if (response.data.categories[j].parentID === response.data.categories[i].id) {
                list[k].push(response.data.categories[j]);
              }
            }
            k += 1;
          }
        }
        this.categories = list;
      });
    axios.get('/api/items')
      .then((response) => {
        this.items = response.data.items;
        this.filteredItems = response.data.items;
      });
  },
  methods: {
    isInPath(str) {
      if (this.$route.path.includes(str)) {
        return true;
      }
      return false;
    },
    getShopTitle() {
      return this.$route.name;
    },
    filterCategory(category) {
      const itemsIdList = [];
      this.setChosenCategories(category);
      axios.get('/api/productcategories')
        .then((res) => {
          for (let i = 0; i < res.data.productCategories.length; i += 1) {
            if (category.id === res.data.productCategories[i].categoryId) {
              itemsIdList.push(res.data.productCategories[i].itemId);
            }
          }
          this.doFilter(itemsIdList);
        });
    },
    doFilter(itemIds) {
      const items = [];
      for (let i = 0; i < itemIds.length; i += 1) {
        for (let j = 0; j < this.items.length; j += 1) {
          if (this.items[i].id === itemIds[j]) {
            items.push(this.items[i]);
          }
        }
      }
      this.filteredItems = items;
    },
    setChosenCategories(category) {
      if (category.parentID === -1) {
        if (this.chosenCategories) {
          this.chosenCategories.splice(0, this.chosenCategories.length);
        }
        this.chosenCategories.push(category);
      } else {
        for (let i = 0; i < this.categories.length; i += 1) {
          if (this.categories[i][0].id === category.parentID) {
            if (this.chosenCategories) {
              this.chosenCategories.splice(0, this.chosenCategories.length);
            }
            this.chosenCategories.push(this.categories[i][0]);
            this.chosenCategories.push(category);
          }
        }
      }
    },
    removeChosenCategory(category) {
      for (let i = 0; i < this.chosenCategories.length; i += 1) {
        if (this.chosenCategories[i].label === category.label) {
          if (category.parentID === -1) {
            this.chosenCategories.splice(i, 2);
            this.filteredItems = this.items;
          } else {
            this.chosenCategories.splice(i, 1);
            this.filterCategory(this.chosenCategories[0]);
          }
          break;
        }
      }
    },
  },
  watch: {
    $route: (to, from) => {
      getShopTitle();
    },
  },
};
</script>


<style lang="scss" scoped>
  @import "node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .menu {
    border-right: 1px gainsboro solid;
    margin-left: 40px;
    padding-right: 10px;
  }

  .bread-crumb {
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 25px;
  }

  .shop-title {
    padding-bottom: 20px;
    border-bottom: 1px solid gainsboro;
    margin-right: 20px;
  }

  .item {
    width: 30%;
    display: inline-block;
    padding-right: 20px;
    padding-top: 50px;
  }

  #category {
    margin-top: 30px;
  }

  #filtered {
    padding-bottom: 10px;
    border-bottom: 1px solid gainsboro;
  }

</style>
