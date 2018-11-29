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
      <a class="delete is-medium" id="delete"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
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
