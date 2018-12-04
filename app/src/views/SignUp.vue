<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" id="modal-container">
    <p id="header-title">
      Sign Up
    </p>
    <div class="field">
      <label class="label">Full Name</label>
      <div id="name" class="control">
        <input class="input"
          type="text"
          placeholder="Jane"
          id="first-name-input"
          v-model="firstName"
          v-bind:class="{'is-danger': isFirstNameInvalid, 'is-success': isSignupSuccess}"
        />
      </div>
      <div id="name" class="control">
        <input class="input"
          type="text"
          placeholder="Smith"
          id="last-name-input"
          v-model="lastName"
          v-bind:class="{'is-danger': isLastNameInvalid, 'is-success': isSignupSuccess}"
        />
      </div>
      <p class="help is-danger" v-if="isFirstNameInvalid || isLastNameInvalid">Invalid Name</p>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input"
          type="text"
          placeholder="name@domain"
          id="email-input"
          v-model="email"
          v-bind:class="{'is-danger': isEmailInvalid, 'is-success': isSignupSuccess}"
        />
      </div>
      <p class="help is-danger"
        v-if="isEmailInvalid">
        Invalid Email
      </p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input"
          type="password"
          placeholder="******"
          id="password-input"
          v-model="password"
          v-bind:class="{'is-danger': isPasswordInvalid, 'is-success': isSignupSuccess}"
        />
      </div>
      <p class="help is-danger"
        v-if="isPasswordInvalid">
        Password length must be greater than 5 characters
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="content has-text-success is-pulled-left"
          v-if="isSignupSuccess">Registration Successful!
        </div>
        <div class="content has-text-danger is-pulled-left"
          v-if="isSignupFail">Registration Fail (Network Error)
        </div>
        <div class="buttons is-right">
          <button class="button" v-on:click="close">Close</button>
          <button class="button is-link" id="submit-btn" v-on:click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
/* true if invalid, false if valid */
function validateName(name) {
  if (name === null) {
    return true;
  }
  /* use a regular expression to check if 'name' is valid */
  const regex = /^[a-zA-Z ]+$/;
  return !regex.test(String(name));
}
/* true if invalid, false if valid */
function validateEmail(email) {
  if (email === null) {
    return true;
  }
  /* use a regular expression to check if 'email' is valid */
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regex.test(String(email).toLowerCase());
}
/* true if invalid, false if valid */
function validatePassword(password) {
  if (password === null) {
    return true;
  }
  return password.length < 6;
}
export default {
  name: 'signup',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      isEmailInvalid: null,
      isPasswordInvalid: null,
      isFirstNameInvalid: null,
      isLastNameInvalid: null,
      isSignupSuccess: null,
      isSignupFail: null,
    };
  },
  methods: {
    /* function is called when the 'close' button is clicked */
    close() {
      this.$router.go(-1); /* router goes back one step in user history */
    },
    /* function is called when the 'submit' button is clicked */
    submit() {
      this.isSignupSuccess = false;
      this.isSignupFail = false;
      if (this.isFormValid()) {
        document.body.style.cursor='wait';
        axios.post('/api/useraccounts/', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          accountType: 'customer',
          image: null,
        }).then((successRes) => {
          this.isSignupSuccess = true;
          document.body.style.cursor = 'default';
        }, (failRes) => {
          this.isSignupFail = true;
          document.body.style.cursor = 'default';
        });
      }
    },
    isFormValid() {
      this.isEmailInvalid = validateEmail(this.email);
      this.isPasswordInvalid = validatePassword(this.password);
      this.isFirstNameInvalid = validateName(this.firstName);
      this.isLastNameInvalid = validateName(this.lastName);
      return !this.isFirstNameInvalid &&
        !this.isLastNameInvalid &&
        !this.isEmailInvalid &&
        !this.isPasswordInvalid &&
        (this.firstName != null) &&
        (this.lastName != null) &&
        (this.email != null) &&
        (this.password != null);
    },
  },
};
</script>

<style scoped lang="scss">
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
