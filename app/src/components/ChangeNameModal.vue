<template>
  <div class="modal is-active">
    <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Enter New Name</label>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="Jane"
            v-model="firstName"
            v-bind:class="{'is-danger': isFirstNameInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="Smith"
            v-model="lastName"
            v-bind:class="{'is-danger': isLastNameInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isFirstNameInvalid || isLastNameInvalid">Invalid Name</p>
      </div>
      <div class="field">
        <label class="label">Current Password</label>
        <div class="control">
          <input class="input"
            type="password"
            placeholder="******"
            v-model="password"
            v-bind:class="{'is-danger': isPasswordMissing, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isPasswordMissing">Missing Password</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="content has-text-success is-pulled-left"
            v-if="isChangeSuccess">Change Successful!
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="isChangeFail">Change Fail
          </div>
          <div class="buttons is-right">
            <button class="button is-link" v-on:click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div>
    <button class="modal-close is-large" aria-label="close" v-on:click="$emit('close')"></button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

function validateName(name) {
  if (name === null) {
    return true;
  }
  /* use a regular expression to check if 'name' is valid */
  const regex = /^[a-zA-Z ]+$/;
  return !regex.test(String(name));
}
export default {
  name: 'changeNameModal',
  data() {
    return {
      firstName: null,
      lastName: null,
      password: null,
      isFirstNameInvalid: null,
      isLastNameInvalid: null,
      isPasswordMissing: null,
      isChangeSuccess: null,
      isChangeFail: null,
    };
  },
  methods: {
    submit() {
      this.isFirstNameInvalid = validateName(this.firstName);
      this.isLastNameInvalid = validateName(this.lastName);
      this.isPasswordMissing = !this.password || this.password.length < 1;

      if (!this.isFirstNameInvalid && !this.isLastNameInvalid && !this.isPasswordMissing) {
        axios.put('/api/useraccounts/changename', {
          currentEmail: this.$store.state.email,
          newFirstName: this.firstName,
          newLastName: this.lastName,
          currentPassword: this.password,
        }).then((successRes) => {
          this.isChangeSuccess = true;
          this.$store.commit('changeName', successRes.data);
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
#name {
  display: inline-block;
  margin-inline-end: 10px;
}
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
