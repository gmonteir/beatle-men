<template>
    <div class="card" id="container">
      <div class="card-image">
        <figure class="image is-3by3">
            <img v-bind:src="'api/' + employee.image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
            <p class="title is-4">{{employee.firstName}}  {{employee.lastName}}</p>
            <p class="subtitle is-6">{{employee.accountType}}<br>{{employee.email}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";

#container {
  width: 400px;
  margin: 10px;
}

#employees-header {
  text-align: center;
}
#employees-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
