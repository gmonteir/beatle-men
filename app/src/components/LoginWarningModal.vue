<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-card" id="modal-container">
      <p id="header-title">Please Sign up or Log in!</p>
    </div>
  <div>
    <button class="modal-close is-large" aria-label="close" v-on:click="$emit('close')"></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'loginWarning',
};
</script>

<style scoped lang="scss">
@import "./../../node_modules/bulma/bulma.sass";
#modal-container {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}
#header-title {
  font-size: 26px;
  text-align: center;
}
</style>
