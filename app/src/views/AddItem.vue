<template>
  <div class="add-item">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Add Item</h1>
      </div>
    </section>
    <div class="container">
      <div class="field">
        <label class="label">Name</label>
        <div id="name" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="name"
            v-bind:class="{'is-danger': nameInvalid === true, 'is-normal': nameInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Brand</label>
        <div id="brand" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="brand"
            v-bind:class="{'is-danger': brandInvalid === true, 'is-normal': brandInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div id="price" class="control">
          <input class="input"
            id="input"
            type="number"
            v-model="price"
            v-bind:class="{'is-danger': priceInvalid === true, 'is-normal': priceInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Quantity</label>
        <div id="quantity" class="control">
          <input class="input"
            id="input"
            type="number"
            v-model="quantity"
            v-bind:class="{'is-danger': quantityInvalid === true, 'is-normal': quantityInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div id="quantity" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="categories"
            v-bind:class="{'is-danger': categoriesInvalid === true, 'is-normal': categoriesInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Image</label>
        <div class="file is-fullwidth" v-bind:class="{'is-danger': imageInvalid === true, 'is-normal': imageInvalid === false}">
          <label class="file-label">
            <input class="file-input"
              id="input"
              type="file"
              @change="onFileChange"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span v-if="image" class="file-name">
              {{image.name}}
            </span>
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div id="description" class="control">
          <textarea class="textarea"
            id = "input"
            v-model="description"
            v-bind:class="{'is-danger': descriptionInvalid === true, 'is-normal': descriptionInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Specifications</label>
        <div id="specifications" class="control">
          <textarea class="textarea"
            id = "input"
            v-model="specifications"
            v-bind:class="{'is-danger': specificationsInvalid === true, 'is-normal': specificationsInvalid === false}"
          />
        </div>
      </div>
      <div class="buttons">
        <button class="button is-success" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'add-item',
  data() {
    return {
      name: null,
      brand: null,
      price: null,
      quantity: null,
      categories: null,
      image: null,
      specifications: null,
      description: null,

      nameInvalid: null,
      brandInvalid: null,
      priceInvalid: null,
      quantityInvalid: null,
      categoriesInvalid: null,
      imageInvalid: null,
      specificationsInvalid: null,
      descriptionInvalid: null,
    };
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }

      this.image = files[0];
      console.log(this.image);
    },
    submit() {
      if (this.isFormValid()) {
        const form = new FormData();
        form.append('image', this.image, this.image.name);
        form.append('name', this.name);
        form.append('price', this.price);
        form.append('quantity', this.quantity);
        form.append('description', this.description);
        form.append('specifications', this.specifications);
        form.append('labels', this.categories);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
        console.log(form);
        axios.post('/api/items', form, config)
        .then((res) => {
          this.name = null;
          this.brand = null;
          this.price = null;
          this.quantity = null;
          this.categories = null;
          this.image = null;
          this.specifications = null;
          this.description = null;
        });
      }
      this.findInvalidField();
    },
    isFormValid() {
      return (this.name != null && this.name !== '') &&
        (this.brand != null && this.brand !== '') &&
        (this.price != null && this.price !== '') &&
        (this.quantity != null && this.quantity !== '') &&
        (this.categories != null && this.categories !== '') &&
        (this.image != null && this.image !== '') &&
        (this.description != null && this.description !== '');
    },
    findInvalidField() {
      if (this.name == null || this.name === '') {
        this.nameInvalid = true;
      } else {
        this.nameInvalid = false;
      }
      if (this.brand == null || this.brand === '') {
        this.brandInvalid = true;
      } else {
        this.brandInvalid = false;
      }
      if (this.price == null || this.price === '') {
        this.priceInvalid = true;
      } else {
        this.priceInvalid = false;
      }
      if (this.quantity == null || this.quantity === '') {
        this.quantityInvalid = true;
      } else {
        this.quantityInvalid = false;
      }
      if (this.categories == null || this.categories === '') {
        this.categoriesInvalid = true;
      } else {
        this.categoriesInvalid = false;
      }
      if (this.image == null || this.image === '') {
        this.imageInvalid = true;
      } else {
        this.imageInvalid = false;
      }
      if (this.specifications == null || this.specifications === '') {
        this.specificationsInvalid = true;
      } else {
        this.specificationsInvalid = false;
      }
      if (this.description == null || this.description === '') {
        this.descriptionInvalid = true;
      } else {
        this.descriptionInvalid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .field {
    padding: 0 20%;
  }

  .buttons {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

</style>
