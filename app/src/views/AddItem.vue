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
            v-bind:class="{'is-danger': quantityInvalid === true,
              'is-normal': quantityInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label" v-if="!editItem">Category</label>
        <label class="label" v-else>Category (Disabled)</label>
        <div class="columns" style="width:50%" v-if="!editItem">
          <div class="column">
            <div id="dropdown" class="control">
              <div class="select"
                v-bind:class="{'is-danger': categoryInvalid === true,
                  'is-normal': categoryInvalid === false}">
                <select v-model="chosenCategory">
                  <option disabled>Select</option>
                  <option
                    v-for="category in categoryList"
                    v-bind:key="category.id">
                    {{category.label}}
                  </option>
                </select>
              </div>
            </div>
            <a id="dropdown"
              class="button is-small"
              v-on:click="categoryButton = true">
              Add a Category
            </a>
            <input class="input"
              id="dropdown"
              type="text"
              v-show="categoryButton"
              v-model="categoryButtonInput"
            />
            <a
              class="button is-small is-success"
              v-show="categoryButton" v-on:click="submitCategory()">
              Submit Category
            </a>
          </div>
          <div class="column">
            <div id="dropdown"
              class="control"
              v-show="subcategoryList && subcategoryList.length > 0">
              <div class="select"
                v-bind:class="{'is-danger': subcategoryInvalid === true,
                  'is-normal': subcategoryInvalid === false}">
                <select v-model="chosenSubcategory">
                  <option disabled>Select</option>
                  <option
                    v-for="subcategory in subcategoryList"
                    v-bind:key="subcategory.id">{{subcategory.label}}
                  </option>
                </select>
              </div>
            </div>
            <a id="dropdown"
              class="button is-small"
              v-show="chosenCategory !== 'Select'" v-on:click="subcategoryButton = true">
              Add a Subcategory
            </a>
            <input class="input"
              id="dropdown"
              type="text"
              v-show="subcategoryButton"
              v-model="subcategoryButtonInput"
            />
            <a class="button is-small is-success"
              v-show="subcategoryButton"
              v-on:click="submitSubcategory()">
              Submit Subcategory
            </a>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label" v-if="!editItem">Image</label>
        <label class="label" v-else>Image (Disabled)</label>
        <div class="file is-fullwidth" v-if="!editItem"
          v-bind:class="{'is-danger': imageInvalid === true, 'is-normal': imageInvalid === false}">
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
            maxlength="255"
            v-model="description"
            v-bind:class="{'is-danger': descriptionInvalid === true,
              'is-normal': descriptionInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Specifications</label>
        <div id="specifications" class="control">
          <textarea class="textarea"
            id = "input"
            maxlength="255"
            v-model="specifications"
            v-bind:class="{'is-danger': specificationsInvalid === true,
              'is-normal': specificationsInvalid === false}"
          />
        </div>
      </div>
      <div class="buttons" id="buttons">
        <button class="button is-success" v-on:click="submit">Submit</button>
        <router-link to="/inventory">
          <button class="button">Return to Inventory</button>
        </router-link>
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
      price: null,
      quantity: null,
      chosenCategory: 'Select',
      chosenSubcategory: 'Select',
      categoryParentID: -1,
      categoryList: null,
      subcategoryList: null,
      categoryButton: false,
      subcategoryButton: false,
      categoryButtonInput: null,
      subcategoryButtonInput: null,
      image: null,
      specifications: null,
      description: null,

      editItem: false,
      nameInvalid: null,
      priceInvalid: null,
      quantityInvalid: null,
      categoryInvalid: null,
      subcategoryInvalid: null,
      imageInvalid: null,
      specificationsInvalid: null,
      descriptionInvalid: null,
    };
  },
  mounted() {
    this.categoryList = this.getCategories(this.categoryParentID);
    if (this.$store.state.editItem.id) {
      this.name = this.$store.state.editItem.name;
      this.price = this.$store.state.editItem.price;
      this.quantity = this.$store.state.editItem.quantity;
      this.description = this.$store.state.editItem.description;
      this.specifications = this.$store.state.editItem.specifications;
      this.editItem = true;
    }
  },
  watch: {
    chosenCategory() {
      this.getCategoryID(this.chosenCategory);
    },
  },
  methods: {
    getCategoryID(category) {
      axios.get('/api/categories')
        .then((res) => {
          for (let i = 0; i < res.data.categories.length; i += 1) {
            if (res.data.categories[i].label === category) {
              this.categoryParentID = res.data.categories[i].id;
              this.subcategoryList = this.getCategories(this.categoryParentID);
              break;
            }
          }
        });
    },
    getCategories(id) {
      const list = [];
      axios.get('/api/categories')
        .then((res) => {
          for (let i = 0; i < res.data.categories.length; i += 1) {
            if (res.data.categories[i].parentID === id) {
              list.push(res.data.categories[i]);
            }
          }
        });
      return list;
    },
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.image = files[0];
    },
    submitCategory() {
      if (this.categoryButton && this.checkCategory()) {
        axios.post('/api/categories', {
          label: this.categoryButtonInput,
          parentID: -1,
        }).then((res) => {
          const input = this.categoryButtonInput;
          this.categoryList = this.getCategories(-1);
          this.categoryButtonInput = null;
        });
      }
    },
    checkCategory() {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].label.toLowerCase() === this.categoryButtonInput.toLowerCase()) {
          return false;
        }
      }
      return true;
    },
    submitSubcategory() {
      if (this.subcategoryButton && this.checkSubcategory()) {
        axios.post('/api/categories', {
          label: this.subcategoryButtonInput,
          parentID: this.categoryParentID,
        }).then((res) => {
          this.subcategoryList = this.getCategories(this.categoryParentID);
          this.subcategoryButtonInput = null;
        });
      }
    },
    checkSubcategory() {
      for (let i = 0; i < this.subcategoryList.length; i += 1) {
        if (this.subcategoryList[i].label.toLowerCase() === this.subcategoryButtonInput.toLowerCase()) {
          return false;
        }
      }
      return true;
    },
    submit() {
      if (this.isFormValid()) {
        if (this.editItem) {
          axios.put(`/api/items/${this.$store.state.editItem.id}`, {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            description: this.description,
            specifications: this.specifications,
          }).then((res) => {
            this.name = null;
            this.price = null;
            this.quantity = null;
            this.description = null;
            this.specifications = null;
            this.$store.state.editItem.id = null;
            this.$store.state.editItem.name = null;
            this.$store.state.editItem.price = null;
            this.$store.state.editItem.quantity = null;
            this.$store.state.editItem.description = null;
            this.$store.state.editItem.specifications = null;
          });
        } else {
          const form = new FormData();
          form.append('image', this.image, this.image.name);
          form.append('name', this.name);
          form.append('price', this.price);
          form.append('quantity', this.quantity);
          form.append('description', this.description);
          form.append('specifications', this.specifications);

          if (this.subcategoryList != null && this.subcategoryList.length > 0) {
            const temp = this.chosenCategory + ',' + this.chosenSubcategory; // eslint-disable-line prefer-template
            form.append('labels', temp);
          } else {
            form.append('labels', this.chosenCategory);
          }

          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };
          axios.post('/api/items', form, config)
            .then((res) => {
              this.name = null;
              this.price = null;
              this.quantity = null;
              this.chosenCategory = 'Select';
              this.chosenSubcategory = 'Select';
              this.categoryParentID = -1;
              this.categoryList = this.getCategories(this.categoryParentID);
              this.subcategoryList = null;
              this.categoryButton = false;
              this.subcategoryButton = false;
              this.image = null;
              this.specifications = null;
              this.description = null;
            });
        }
      }
      this.findInvalidField();
    },
    isFormValid() {
      return (this.name != null && this.name !== '') &&
        (this.price != null && this.price !== '') &&
        (this.quantity != null && this.quantity !== '') &&
        (this.chosenCategory !== 'Select' || this.editItem) &&
        (this.chosenSubcategory !== 'Select' || this.subcategoryList == null || this.subcategoryList.length === 0 || this.editItem) &&
        ((this.image != null && this.image !== '') || this.editItem) &&
        (this.description != null && this.description !== '') &&
        (this.specifications != null && this.specifications !== '');
    },
    findInvalidField() {
      if (this.name == null || this.name === '') {
        this.nameInvalid = true;
      } else {
        this.nameInvalid = false;
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
      if (this.chosenCategory === 'Select') {
        if (this.editItem) {
          this.categoryInvalid = false;
        } else {
          this.categoryInvalid = true;
        }
      } else {
        this.categoryInvalid = false;
      }
      if (this.chosenSubcategory === 'Select' && this.subcategoryList != null && this.subcategoryList.length > 0) {
        if (this.editItem) {
          this.subCategoryInvalid = false;
        } else {
          this.subCategoryInvalid = true;
        }
      } else {
        this.subcategoryInvalid = false;
      }
      if (this.image == null || this.image === '') {
        if (this.editItem) {
          this.imageInvalid = false;
        } else {
          this.imageInvalid = true;
        }
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
@import "../../node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .field {
    padding: 0 20%;
  }

  #buttons {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  #dropdown {
    margin-bottom: 10px;
  }

</style>
