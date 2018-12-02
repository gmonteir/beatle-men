<template>
  <div class="announcement">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    announcement: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

</style>

