<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Enter New Password</label>
        <div id="name" class="control">
          <input class="input"
            type="password"
            placeholder="*******"
            v-model="newPassword"
            v-bind:class="{'is-danger': isNewPasswordInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isNewPasswordInvalid">Invalid Password</p>
      </div>
      <div class="field">
        <label class="label">Current Password</label>
        <div class="control">
          <input class="input"
            type="password"
            placeholder="*******"
            v-model="currentPassword"
            v-bind:class="{'is-danger': isCurrentPasswordMissing, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isCurrentPasswordMissing">Missing Password</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="content has-text-success is-pulled-left"
            v-if="isChangeSuccess">
            Change Successful!
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="isChangeFail">
            Change Fail
          </div>
          <div class="buttons is-right">
            <button class="button" v-on:click="$emit('close')">Close</button>
            <button class="button is-link" v-on:click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

/* true if invalid, false if valid */
function validatePassword(password) {
  if (password === null) {
    return true;
  }
  return password.length < 6;
}
export default {
  name: 'changeNameModal',
  data() {
    return {
      newPassword: null,
      currentPassword: null,
      isNewPasswordInvalid: null,
      isCurrentPasswordMissing: null,
      isChangeSuccess: null,
      isChangeFail: null,
    };
  },
  methods: {
    submit() {
      this.isNewPasswordInvalid = validatePassword(this.newPassword);
      this.isCurrentPasswordMissing = !this.currentPassword || this.currentPassword.length < 1;

      if (!this.isNewPasswordInvalid && !this.isCurrentPasswordMissing) {
        axios.post('/api/useraccounts/changepassword', {
          currentEmail: this.$store.state.email,
          newPassword: this.newPassword,
          currentPassword: this.currentPassword,
        }).then((successRes) => {
          this.isChangeSuccess = true;
        }, (failRes) => {
          this.isChangeFail = true;
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
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
