<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Enter New Email</label>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="email@domain"
            v-model="email"
            v-bind:class="{'is-danger': isEmailInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isEmailInvalid">Invalid Email</p>
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
            <button class="button" v-on:click="$emit('close')">Close</button>
            <button class="button is-link" v-on:click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* true if invalid, false if valid */
function validateEmail(email) {
  if (email === null) {
    return true;
  }
  /* use a regular expression to check if 'email' is valid */
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regex.test(String(email).toLowerCase());
}
export default {
  name: 'changeNameModal',
  data() {
    return {
      email: null,
      password: null,
      isEmailInvalid: null,
      isPasswordMissing: null,
      isChangeSuccess: null,
      isChangeFail: null,
    };
  },
  methods: {
    submit() {
      this.isEmailInvalid = validateEmail(this.email);
      this.isPasswordMissing = !this.password || this.password.length() < 1;
      this.isChangeSuccess = false;
      this.isChangeFail = false;

      if (!this.isEmailInvalid && !this.isPasswordMissing) {
        // axios api call here
        /* axios.post('/api/changeemail', {
          currentEmail: this.$store.state.email,
          newEmail: this.email,
          password: this.password,
        }).then((successRes) => {
          this.isChangeSuccess = true;
          successRes.data should contain 'email: theNewEmail@address'
          this.$store.commit('changeEmail', {successRes.data})
        }, (failRes) => {
          this.isChangeFail = true;
        });
        */
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
