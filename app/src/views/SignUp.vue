<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" id="modal-container">
    <p id="header-title">
      Sign Up
    </p>
    <div class="field">
      <label class="label">Full Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Jane Smith"/>
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" placeholder="name@email"/>
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" placeholder="************"/>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button is-link">
            <strong>Submit</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click="close"></button>
</div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    close() {
      this.$router.go(-1); /* router goes back one step in history */
    },
  },
};
</script>

<style lang="scss">
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
