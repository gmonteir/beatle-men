<template>
  <div class="columns">
    <div class="column is-3" id="column">
      <h1 class="title is-4">{{user.firstName}} {{user.lastName}}</h1>
    </div>
    <div class="column is-3" id="column">
      <h1 class="title is-4">{{user.email}}</h1>
    </div>
    <div class="column is-3" id="column">
      <h1 class="title is-4">{{user.accountType}}</h1>
    </div>
    <div class="column is-3" id="column">
      <a class="delete is-medium" id="delete" v-on:click="deleteUser"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteUser() {
      axios.delete('/api/useraccounts/' + this.user.id).then(success => {
        axios.get('/api/useraccounts').then((res) => {
          this.$store.commit('addUsers', res.data.users);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";
#column {
  text-align: center;
}
#delete {
  margin-top: 5px;
}
</style>
