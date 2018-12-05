<template>
  <div class="modal is-active">
    <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Enter Address</label>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="Street"
            v-model="street1"
            v-bind:class="{'is-success': addAddressSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input"
            type="text"
            placeholder="Apt, Suite."
            v-model="street2"
            v-bind:class="{'is-success': addAddressSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">City</label>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="San Luis Obispo"
            v-model="city"
            v-bind:class="{'is-success': addAddressSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">State</label>
        <div id="name" class="control">
          <input class="input"
            type="text"
            placeholder="California"
            v-model="state"
            v-bind:class="{'is-success': addAddressSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Zipcode</label>
        <div id="name" class="control">
          <input class="input"
            type="number"
            placeholder="12345"
            v-model="zip"
            v-bind:class="{'is-success': addAddressSuccess}"
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
            v-bind:class="{'is-success': addAddressSuccess}"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="content has-text-success is-pulled-left"
            v-if="addAddressSuccess">
            Add Address Successful!
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="addAddressFail">
            Fail to Add Address
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="isFormMissing">
            Missing Information
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

export default {
  name: 'changeNameModal',
  data() {
    return {
      street1: null,
      street2: '',
      city: null,
      state: null,
      zip: null,
      password: null,
      isFormMissing: null,
      addAddressSuccess: null,
      addAddressFail: null,
    };
  },
  methods: {
    submit() {
      if (!this.street1 || !this.city || !this.state || !this.zip ||
      !this.password) {
        this.isFormMissing = true;
      } else {
        axios.post('/api/addresses', {
          email: this.$store.state.email,
          password: this.password,
          street1: this.street1,
          street2: this.street2,
          city: this.city,
          state: this.state,
          zip: this.zip,
        }).then((successRes) => {
          this.addAddressSuccess = true;
          console.log(successRes);
          this.$store.commit('addAddress', successRes.data)
        }, (failRes) => {
          this.addAddressFail = true;
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
