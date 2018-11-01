<template>
<div id="login-modal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" id="modal-container">
    <p id="header-title">Login</p>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input"
          type="email"
          placeholder="name@domain"
          v-model="email"
          v-bind:class="{'is-danger': isEmailInvalid}"
        />
        <p class="help is-danger" v-if="isEmailInvalid">Invalid Email</p>
      </div>
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
        <p class="help is-danger"
          v-if="isPasswordInvalid">
          Invalid Password
        </p>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="content has-text-success is-pulled-left"
          v-if="isLoginSuccess">Login Successful!
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

/* true if invalid, false if valid */
function validatePassword(password) {
  if (password === null) {
    return true;
  }
  return password.length === 0;
}

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null,
      isEmailInvalid: null,
      isPasswordInvalid: null,
      isLoginSuccess: null,
    };
  },
  methods: {
    /* function is called when the 'close' button is clicked */
    close() {
      this.$router.go(-1); /* router goes back one step in user history */
    },
    /* function is called when the 'submit' button is clicked */
    submit() {
      document.body.style.cursor='wait';
      if (this.isFormValid()) {
        axios.post('/api/login', {
          email: this.email,
          password: this.password,
        }).then((successRes) => {
          console.log(successRes);
          this.isLoginSuccess = true;
          this.$store.commit('changeAccount', {...successRes.data, isLoggedIn: true})
          document.body.style.cursor = 'default';
        }, (failRes) => {
          console.error(failRes);
          this.isLoginSuccess = false;
          document.body.style.cursor = 'default';
        });
      }
    },
    isFormValid() {
      this.isEmailInvalid = validateEmail(this.email);
      this.isPasswordInvalid = validatePassword(this.password);
      return !this.isEmailInvalid &&
        !this.isPasswordInvalid &&
        (this.email != null) &&
        (this.password != null);
    },
  },
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
