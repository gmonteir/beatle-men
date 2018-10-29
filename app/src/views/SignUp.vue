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
          v-model="firstName"
          v-bind:class="{'is-danger': isFirstNameInvalid}"
        />
      </div>
      <div id="name" class="control">
        <input class="input"
          type="text"
          placeholder="Smith"
          v-model="lastName"
          v-bind:class="{'is-danger': isLastNameInvalid}"
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
          v-model="email"
          v-bind:class="{'is-danger': isEmailInvalid}"
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
          v-model="password"
          v-bind:class="{'is-danger': isPasswordInvalid}"
        />
      </div>
      <p class="help is-danger"
        v-if="isPasswordInvalid">
        Password length must be greater than 6 characters
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="content has-text-success is-pulled-left"
          v-if="isSignupSuccess">Registration Successful!
        </div>
        <div class="buttons is-right">
          <button class="button" v-on:click="close">Close</button>
          <button class="button is-link" v-on:click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
/*
<script>
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
    };
  },
  methods: {
    /* function is called when the 'close' button is clicked */
    close() {
      this.$router.go(-1); /* router goes back one step in user history */
    },
    /* function is called when the 'submit' button is clicked */
    submit() {
      this.isEmailInvalid = validateEmail(this.email);
      this.isPasswordInvalid = validatePassword(this.password);
      this.isFirstNameInvalid = validateName(this.firstName);
      this.isLastNameInvalid = validateName(this.lastName);
      this.isSignupSuccess = !this.isFirstNameInvalid &&
        !this.isLastNameInvalid &&
        !this.isEmailInvalid &&
        !this.isPasswordInvalid &&
        (this.firstName != null) &&
        (this.lastName != null) &&
        (this.email != null) &&
        (this.password != null);
      /* change vuex store state with mutations */
      if (this.isSignupSuccess) {
        this.$store.commit('modifyName', {
          firstName: this.firstName,
          lastName: this.lastName,
        });
        this.$store.commit('modifyEmail', {
          email: this.email,
        });
      }
    },
  },
};
</script>
*/

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
@Component()
export default class SignUp extends Vue {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  accountType: string = 'customer';

  submit() {
    /*debugger*/
    axios.post('/api/useraccounts', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      accountType: this.accountType,
    }).then((res) => {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.accountType = '';
    });
  } 
}
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
