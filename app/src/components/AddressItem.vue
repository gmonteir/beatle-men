<template>
  <div class="content" id="address-container">
    <div>
      <h3 class="title is-5">Address</h3>
      <h3 class="subtitle is-6" id="address-info">
        {{address.street1}}<br>
        {{address.street2}}<br>
        {{address.city}}<br>
        {{address.state}}<br>
        {{address.zip}}<br>
      </h3>
    </div>
    <a class="delete is-medium" id="delete" v-on:click="removeAddress"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'address-item',
  props: {
    address: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeAddress() {
        axios.post('/api/addresses/${this.address.id}', {
          email: this.$store.state.email,
          password: this.password
        }).then((successRes) => {
          this.$store.commit('removeAddress', { id: this.address.id });
        }, (failRes) => {
          console.log('fail to delete address');
        });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../../node_modules/bulma/bulma.sass";
#address-container {
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-radius: 5px;
  border-color: rgba(150, 150, 150, 0.5);
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 10px;
  padding-left: 10px;
}
#address-info {
  margin-left: 10px;
}
#delete {
  margin-right: 10px;
}
</style>
