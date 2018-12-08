<template>
  <div class="announcement">
    <h1 class="subtitle is-4">{{announcement.title}}</h1>
    <h2 class="subtitle is-6">{{announcement.message}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    announcement: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.announcement {
  text-align: left;
}

h1 {
  margin: 5px;
}

h2 {
  margin: 5px;
  margin-top: -20px;
}

</style>

