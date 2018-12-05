<template>
  <div class="content" id="card-container">
    <div>
      <h3 class="title is-5">Credit Card</h3>
      <h3 class="subtitle is-6" id="card-info">
        {{firstName}} {{lastName}}<br>
        {{card.number}}<br>
        {{card.expMonth}}/{{card.expYear}}<br>
        {{card.cvv}}
      </h3>
    </div>
    <a class="delete is-medium" id="delete" v-on:click="removeCreditCard"/>
  </div>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios';

export default {
  name: 'credit-card-item',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeCreditCard() {
      axios.delete('/api/paymentinfo/' + this.card.id, {// eslint-disable-line prefer-template
        email: this.$store.state.email,
        password: this.password,
      }).then((successRes) => {
        this.$store.commit('removeCard', { id: this.card.id });
      }, (failRes) => {
        console.log('fail to delete credit card');
      });
    },
  },
  computed: {
    firstName() {
      return this.card.name.split(' ')[0];
    },
    lastName() {
      return this.card.name.split(' ')[1];
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../../node_modules/bulma/bulma.sass";
#card-container {
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
#card-info {
  margin-left: 10px;
}
#delete {
  margin-right: 10px;
}
</style>
