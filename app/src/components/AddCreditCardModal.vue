<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Full Name</label>
        <div id="name" class="control">
          <input class="input"
          type="text"
          placeholder="Jane"
          v-model="firstName"
          v-bind:class="{'is-danger': isFirstNameInvalid, 'is-success': addCreditCardSuccess}"
          />
        </div>
        <div id="name" class="control">
          <input class="input"
          type="text"
          placeholder="Smith"
          v-model="lastName"
          v-bind:class="{'is-danger': isLastNameInvalid,'is-success': addCreditCardSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isFirstNameInvalid || isLastNameInvalid">Invalid Name</p>
      </div>
      <div class="field">
        <label class="label">Card Number</label>
        <div class="control">
          <input class="input"
            type="number"
            placeholder="12345678"
            v-model="number"
            v-bind:class="{'is-success': addCreditCardSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Expiration Date</label>
        <div id="name" class="control">
          <input class="input"
          type="number"
          placeholder="07"
          v-model="month"
          v-bind:class="{'is-success': addCreditCardSuccess}"
          />
        </div>
        <div id="name" class="control">
          <input class="input"
          type="number"
          placeholder="2018"
          v-model="year"
          v-bind:class="{'is-success': addCreditCardSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">CVV</label>
        <div id="name" class="control">
          <input class="input"
            type="number"
            placeholder="12345"
            v-model="cvv"
            v-bind:class="{'is-success': addCreditCardSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Current Password</label>
        <div class="control">
          <input class="input"
            type="password"
            placeholder="******"
            v-model="password"
            v-bind:class="{'is-success': addCreditCardSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="content has-text-success is-pulled-left"
            v-if="addCreditCardSuccess">
            Change Successful!
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="addAddressFail">
            Change Fail
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="isFormMissing">
            Missing Information
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
function validateName(name) {
  if (name === null) {
    return true;
  }
  /* use a regular expression to check if 'name' is valid */
  const regex = /^[a-zA-Z ]+$/;
  return !regex.test(String(name));
}
export default {
  name: 'addCreditCardModal',
  data() {
    return {
      firstName: null,
      lastName: null,
      number: null,
      cvv: null,
      month: null,
      year: null,
      password: null,
      isFormMissing: null,
      isFirstNameInvalid: null,
      isLastNameInvalid: null,
      addCreditCardSuccess: null,
      addCreditCardFail: null,
    };
  },
  methods: {
    submit() {
      this.isFirstNameInvalid = validateName(this.firstName);
      this.isLastNameInvalid = validateName(this.lastName);
      if (!this.isFirstNameInvalid || !this.isLastNameInvalid || !this.number
        || !this.month || !this.year || !this.cvv|| !this.password) {
        this.isFormMissing = true;
      } else {
        // axios api call here
        /* axios.post('/api/addcreditcard', {
          email: this.$store.state.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          number: this.number,
          cvv: this.cvv,
          month: this.month,
          year: this.year,
        }).then((successRes) => {
          this.isChangeSuccess = true;
          this.$store.commit('addCreditCard', successRes.data.creditcard)
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
