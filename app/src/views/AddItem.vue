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
            type="text"
            v-model="name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Brand</label>
        <div id="brand" class="control">
          <input class="input"
            type="text"
            v-model="brand"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div id="price" class="control">
          <input class="input"
            type="number"
            v-model="price"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Quantity</label>
        <div id="quantity" class="control">
          <input class="input"
            type="number"
            v-model="quantity"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div id="quantity" class="control">
          <input class="input"
            type="text"
            v-model="categories"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Image</label>
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" @change="onFileChange">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span v-if="image" class="file-name">
              {{image}}
            </span>
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div id="description" class="control">
          <textarea class="textarea"
            type="text"
            v-model="description"
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
      description: null,
    };
  },
  methods: {
    onFileChange(newFile) {
      const files = newFile.target.files || newFile.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.image = files[0].name;
    },
    submit() {
      if (this.isFormValid()) {
        axios.post('/api/item', {
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          description: this.description,
          image: this.image,
        });

      }
    },
    isFormValid() {
      return (this.name != null) &&
        (this.brand != null) &&
        (this.price != null) &&
        (this.quantity != null) &&
        (this.categories != null) &&
        (this.image != null) &&
        (this.description != null);
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
