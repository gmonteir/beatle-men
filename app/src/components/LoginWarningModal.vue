<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" id="modal-container">
    <p id="header-title">Please Sign up or Log in!</p>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button" id="close-btn" v-on:click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
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
