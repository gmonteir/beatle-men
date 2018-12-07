<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background" v-on:click="$emit('close')"></div>
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
            <p class="subtitle" v-show="reviews != null && reviews.length > 0">
              Rating:
              <span class="icon" id="stars" v-for="stars in overallRating" v-bind:key="stars.id">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon" id="stars"
                v-for="stars in (5 - overallRating)"
                v-bind:key="stars.id">
                <i class="far fa-star"></i>
              </span>
            </p>
            <a class="button is-primary is-rounded right" id="add-btn"
              v-on:click="addToCart">
              Add To Cart
            </a>
            <p class="help is-success" v-if="isAddedToCart">Added to Cart Successfully!</p>
            <p class="help is-danger" v-if="isOutOfStock">Sorry, this item is out of stock</p>
          </div>
          <div class="review-section">
            <label class="label" v-show="reviews != null && reviews.length > 0">Reviews</label>
            <ul>
              <li v-for="review in reviews" v-bind:key="review.id">
                <article class="message">
                  <div class="message-header">
                    <p>
                      {{review.firstName}}
                      <span class="icon" id="stars"
                        v-for="stars in review.rating"
                        v-bind:key="stars.id">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="icon" id="stars"
                        v-for="stars in (5 - review.rating)"
                        v-bind:key="stars.id">
                        <i class="far fa-star"></i>
                      </span>
                    </p>
                  </div>
                  <div class="message-body">
                    {{review.description}}
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  </div>
  <div>
    <button class="modal-close is-large" aria-label="close" v-on:click="$emit('close')"></button>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      reviews: [],
      isAddedToCart: false,
      isOutOfStock: false,
      overallRating: null,
    };
  },
  mounted() {
    axios.get('/api/reviews', {
      params: {
        ItemId: this.item.id,
      },
    }).then((res) => {
      this.reviews = res.data.reviews;
      if (res.data.reviews != null && res.data.reviews.length > 0) {
        this.getOverallRating(res.data.reviews);
      }
    });
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
      if (!this.isAddedToCart && this.item.quantity > 0) {
        this.$store.commit('addToCart', newItem);
        this.isAddedToCart = true;
      } else if (this.item.quantity <= 0) {
        this.isOutOfStock = true;
      }
      axios.get('/api/categories').then((categories) => {
        categories.data.categories.forEach((category) => {
          if (category.label.toLowerCase() === 'bike' ||
            category.label.toLowerCase() === 'bikes' ||
            category.label.toLowerCase() === 'bicycle' ||
            category.label.toLowerCase() === 'bicycles') {
            const categoryId = category.label.id;
            axios.get('/api/productcategories').then((productCategories) => {
              productCategories.data.productCategories.forEach((productCategory) => {
                if (productCategory.itemId === this.item.id &&
                  productCategory.categoryId === categoryId) {
                  this.$store.commit('changeCartBikeStatus', true);
                }
              });
            });
          }
        });
      });
    },
    getOverallRating(reviews) {
      let total = 0;
      for (let i = 0; i < reviews.length; i += 1) {
        total += reviews[i].rating;
      }
      this.overallRating = Math.floor(total / reviews.length);
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
.review-section {
  height: 200px;
  overflow: auto;
}
#modal-container {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}
#heading {
  margin-bottom: 30px;
}
#close-btn {
  margin-right: 10px;
}
#item-content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 5%;
  text-align: left;
}
#close-div {
  display: flex;
  flex-direction: row-reverse;
}
#stars {
  color: gold;
}
</style>
