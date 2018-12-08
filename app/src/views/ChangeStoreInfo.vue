<template>
  <div class="change-store-info">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Change Store Info</h1>
      </div>
    </section>
    <div class="container">
      <div class="field">
        <label class="label">Title</label>
        <div id="name" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="storeInfo.title"
            v-bind:class="{'is-danger': isTitleInvalid === true,
              'is-normal': isTitleInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Address Line 1</label>
        <div id="addressLine1" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="storeInfo.addressLine1"
            v-bind:class="{'is-danger': isAddressLine1Invalid === true,
              'is-normal': isAddressLine1Invalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Address Line 2</label>
        <div id="addressLine2" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="storeInfo.addressLine2"
            v-bind:class="{'is-danger': isAddressLine2Invalid === true,
              'is-normal': isAddressLine2Invalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Phone Number</label>
        <div id="phone" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="storeInfo.phone"
            v-bind:class="{'is-danger': isPhoneInvalid === true,
              'is-normal': isPhoneInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div id="email" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="storeInfo.email"
            v-bind:class="{'is-danger': isEmailInvalid === true,
              'is-normal': isEmailInvalid === false}"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Monday Open Time</label>
            <div id="mondayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.mondayOpen"
                v-bind:class="{'is-danger': isMondayOpenInvalid === true,
                  'is-normal': isMondayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Tuesday Open Time</label>
            <div id="tuesdayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.tuesdayOpen"
                v-bind:class="{'is-danger': isTuesdayOpenInvalid === true,
                  'is-normal': isTuesdayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Wednesday Open Time</label>
            <div id="wednesdayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.wednesdayOpen"
                v-bind:class="{'is-danger': isWednesdayOpenInvalid === true,
                  'is-normal': isWednesdayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Thursday Open Time</label>
            <div id="thursdayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.thursdayOpen"
                v-bind:class="{'is-danger': isThursdayOpenInvalid === true,
                  'is-normal': isThursdayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Friday Open Time</label>
            <div id="fridayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.fridayOpen"
                v-bind:class="{'is-danger': isFridayOpenInvalid === true,
                  'is-normal': isFridayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Saturday Open Time</label>
            <div id="saturdayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.saturdayOpen"
                v-bind:class="{'is-danger': isSaturdayOpenInvalid === true,
                  'is-normal': isSaturdayOpenInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Sunday Open Time</label>
            <div id="sundayOpen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.sundayOpen"
                v-bind:class="{'is-danger': isSundayOpenInvalid === true,
                  'is-normal': isSundayOpenInvalid === false}"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Monday Close Time</label>
            <div id="mondayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.mondayClose"
                v-bind:class="{'is-danger': isMondayCloseInvalid === true,
                  'is-normal': isMondayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Tuesday Close Time</label>
            <div id="tuesdayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.tuesdayClose"
                v-bind:class="{'is-danger': isTuesdayCloseInvalid === true,
                  'is-normal': isTuesdayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Wednesday Close Time</label>
            <div id="wednesdayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.wednesdayClose"
                v-bind:class="{'is-danger': isWednesdayCloseInvalid === true,
                  'is-normal': isWednesdayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Thursday Close Time</label>
            <div id="thursdaClosen" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.thursdayClose"
                v-bind:class="{'is-danger': isThursdayCloseInvalid === true,
                  'is-normal': isThursdayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Friday Close Time</label>
            <div id="fridayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.fridayClose"
                v-bind:class="{'is-danger': isFridayCloseInvalid === true,
                  'is-normal': isFridayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Saturday Close Time</label>
            <div id="saturdayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.saturdayClose"
                v-bind:class="{'is-danger': isSaturdayCloseInvalid === true,
                  'is-normal': isSaturdayCloseInvalid === false}"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Sunday Close Time</label>
            <div id="sundayClose" class="control">
              <input class="input"
                id="input"
                type="text"
                v-model="storeInfo.sundayClose"
                v-bind:class="{'is-danger': isSundayCloseInvalid === true,
                  'is-normal': isSundayCloseInvalid === false}"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="buttons" id="buttons">
        <button class="button is-success" v-on:click="submit">Submit</button>
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
  name: 'change-store-info',
  data() {
    return {
      storeInfo: {
        title: this.$store.state.storeInfo.title,
        addressLine1: this.$store.state.storeInfo.addressLine1,
        addressLine2: this.$store.state.storeInfo.addressLine2,
        phone: this.$store.state.storeInfo.phone,
        email: this.$store.state.storeInfo.email,
        mondayOpen: this.$store.state.storeInfo.mondayOpen,
        mondayClose: this.$store.state.storeInfo.mondayClose,
        tuesdayOpen: this.$store.state.storeInfo.tuesdayOpen,
        tuesdayClose: this.$store.state.storeInfo.tuesdayClose,
        wednesdayOpen: this.$store.state.storeInfo.wednesdayOpen,
        wednesdayClose: this.$store.state.storeInfo.wednesdayClose,
        thursdayOpen: this.$store.state.storeInfo.thursdayOpen,
        thursdayClose: this.$store.state.storeInfo.thursdayClose,
        fridayOpen: this.$store.state.storeInfo.fridayOpen,
        fridayClose: this.$store.state.storeInfo.fridayClose,
        saturdayOpen: this.$store.state.storeInfo.saturdayOpen,
        saturdayClose: this.$store.state.storeInfo.saturdayClose,
        sundayOpen: this.$store.state.storeInfo.sundayOpen,
        sundayClose: this.$store.state.storeInfo.sundayClose,
      },

      isTitleInvalid: null,
      isAddressLine1Invalid: null,
      isAddressLine2Invalid: null,
      isPhoneInvalid: null,
      isEmailInvalid: null,
      isMondayOpenInvalid: null,
      isMondayCloseInvalid: null,
      isTuesdayOpenInvalid: null,
      isTuesdayCloseInvalid: null,
      isWednesdayOpenInvalid: null,
      isWednesdayCloseInvalid: null,
      isThursdayOpenInvalid: null,
      isThursdayCloseInvalid: null,
      isFridayOpenInvalid: null,
      isFridayCloseInvalid: null,
      isSaturdayOpenInvalid: null,
      isSaturdayCloseInvalid: null,
      isSundayOpenInvalid: null,
      isSundayCloseInvalid: null,
    };
  },
  methods: {
    submit() {
      if (this.isFormValid()) {
        /*
        axios.put('/api/storeinfo', {

        }).then(successRes => {

        });
        */
        this.$store.commit('changeStoreInfo', this.storeInfo);
        this.findInvalidForm();
        this.storeInfo.title = null;
        this.storeInfo.addressLine1 = null;
        this.storeInfo.addressLine2 = null;
        this.storeInfo.phone = null;
        this.storeInfo.email = null;
        this.storeInfo.mondayOpen = null;
        this.storeInfo.mondayClose = null;
        this.storeInfo.tuesdayOpen = null;
        this.storeInfo.tuesdayClose = null;
        this.storeInfo.wednesdayOpen = null;
        this.storeInfo.wednesdayClose = null;
        this.storeInfo.thursdayOpen = null;
        this.storeInfo.thursdayClose = null;
        this.storeInfo.fridayOpen = null;
        this.storeInfo.fridayClose = null;
        this.storeInfo.saturdayOpen = null;
        this.storeInfo.saturdayClose = null;
        this.storeInfo.sundayOpen = null;
        this.storeInfo.sundayClose = null;

        this.isEmailInvalid = null;
      } else {
        this.findInvalidForm();
      }
    },
    isFormValid() {
      this.isEmailInvalid = validateEmail(this.storeInfo.email);

      return !this.isEmailInvalid &&
        (this.storeInfo.title != null && this.storeInfo.title !== '') &&
        (this.storeInfo.addressLine1 != null && this.storeInfo.addressLine1 !== '') &&
        (this.storeInfo.addressLine2 != null && this.storeInfo.addressLine2 !== '') &&
        (this.storeInfo.phone != null && this.storeInfo.phone !== '') &&
        (this.storeInfo.email != null && this.storeInfo.email !== '') &&
        (this.storeInfo.mondayOpen != null && this.storeInfo.mondayOpen !== '') &&
        (this.storeInfo.mondayClose != null && this.storeInfo.mondayClose !== '') &&
        (this.storeInfo.tuesdayOpen != null && this.storeInfo.tuesdayOpen !== '') &&
        (this.storeInfo.tuesdayClose != null && this.storeInfo.tuesdayClose !== '') &&
        (this.storeInfo.wednesdayOpen != null && this.storeInfo.wednesdayOpen !== '') &&
        (this.storeInfo.wednesdayClose != null && this.storeInfo.wednesdayClose !== '') &&
        (this.storeInfo.thursdayOpen != null && this.storeInfo.thursdayOpen !== '') &&
        (this.storeInfo.thursdayClose != null && this.storeInfo.thursdayClose !== '') &&
        (this.storeInfo.fridayOpen != null && this.storeInfo.fridayOpen !== '') &&
        (this.storeInfo.fridayClose != null && this.storeInfo.fridayClose !== '') &&
        (this.storeInfo.saturdayOpen != null && this.storeInfo.saturdayOpen !== '') &&
        (this.storeInfo.saturdayClose != null && this.storeInfo.saturdayClose !== '') &&
        (this.storeInfo.sundayOpen != null && this.storeInfo.sundayOpen !== '') &&
        (this.storeInfo.sundayClose != null && this.storeInfo.sundayClose !== '');
    },
    findInvalidForm() {
      if (this.storeInfo.title == null || this.storeInfo.title === '') {
        this.isTitleInvalid = true;
      } else {
        this.isTitleInvalid = false;
      }
      if (this.storeInfo.addressLine1 == null || this.storeInfo.addressLine1 === '') {
        this.isAddressLine1Invalid = true;
      } else {
        this.isAddressLine1Invalid = false;
      }
      if (this.storeInfo.addressLine2 == null || this.storeInfo.addressLine2 === '') {
        this.isAddressLine2Invalid = true;
      } else {
        this.isAddressLine2Invalid = false;
      }
      if (this.storeInfo.phone == null || this.storeInfo.phone === '') {
        this.isPhoneInvalid = true;
      } else {
        this.isPhoneInvalid = false;
      }
      if (this.storeInfo.email == null || this.storeInfo.email === '') {
        this.isEmailInvalid = true;
      } else {
        this.isEmailInvalid = false;
      }
      if (this.storeInfo.mondayOpen == null || this.storeInfo.mondayOpen === '') {
        this.isMondayOpenInvalid = true;
      } else {
        this.isMondayOpenInvalid = false;
      }
      if (this.storeInfo.mondayClose == null || this.storeInfo.mondayClose === '') {
        this.isMondayCloseInvalid = true;
      } else {
        this.isMondayCloseInvalid = false;
      }
      if (this.storeInfo.tuesdayOpen == null || this.storeInfo.tuesdayOpen === '') {
        this.isTuesdayOpenInvalid = true;
      } else {
        this.isTuesdayOpenInvalid = false;
      }
      if (this.storeInfo.tuesdayClose == null || this.storeInfo.tuesdayClose === '') {
        this.isTuesdayCloseInvalid = true;
      } else {
        this.isTuesdayCloseInvalid = false;
      }
      if (this.storeInfo.wednesdayOpen == null || this.storeInfo.wednesdayOpen === '') {
        this.isWednesdayOpenInvalid = true;
      } else {
        this.isWednesdayOpenInvalid = false;
      }
      if (this.storeInfo.wednesdayClose == null || this.storeInfo.wednesdayClose === '') {
        this.isWednesdayCloseInvalid = true;
      } else {
        this.isWednesdayCloseInvalid = false;
      }
      if (this.storeInfo.thursdayOpen == null || this.storeInfo.thursdayOpen === '') {
        this.isThursdayOpenInvalid = true;
      } else {
        this.isThursdayOpenInvalid = false;
      }
      if (this.storeInfo.thursdayClose == null || this.storeInfo.thursdayClose === '') {
        this.isThursdayCloseInvalid = true;
      } else {
        this.isThursdayCloseInvalid = false;
      }
      if (this.storeInfo.fridayOpen == null || this.storeInfo.fridayOpen === '') {
        this.isFridayOpenInvalid = true;
      } else {
        this.isFridayOpenInvalid = false;
      }
      if (this.storeInfo.fridayClose == null || this.storeInfo.fridayClose === '') {
        this.isFridayCloseInvalid = true;
      } else {
        this.isFridayCloseInvalid = false;
      }
      if (this.storeInfo.saturdayOpen == null || this.storeInfo.saturdayOpen === '') {
        this.isSaturdayOpenInvalid = true;
      } else {
        this.isSaturdayOpenInvalid = false;
      }
      if (this.storeInfo.saturdayClose == null || this.storeInfo.saturdayClose === '') {
        this.isSaturdayCloseInvalid = true;
      } else {
        this.isSaturdayCloseInvalid = false;
      }
      if (this.storeInfo.sundayOpen == null || this.storeInfo.sundayOpen === '') {
        this.isSundayOpenInvalid = true;
      } else {
        this.isSundayOpenInvalid = false;
      }
      if (this.storeInfo.sundayClose == null || this.storeInfo.sundayClose === '') {
        this.isSundayCloseInvalid = true;
      } else {
        this.isSundayCloseInvalid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .container {
    padding: 0 20%;
  }

  #buttons {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

</style>

