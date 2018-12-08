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
            v-model="title"
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
            v-model="addressLine1"
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
            v-model="addressLine2"
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
            v-model="phone"
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
            v-model="email"
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
                v-model="mondayOpen"
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
                v-model="tuesdayOpen"
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
                v-model="wednesdayOpen"
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
                v-model="thursdayOpen"
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
                v-model="fridayOpen"
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
                v-model="saturdayOpen"
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
                v-model="sundayOpen"
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
                v-model="mondayClose"
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
                v-model="tuesdayClose"
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
                v-model="wednesdayClose"
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
                v-model="thursdayClose"
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
                v-model="fridayClose"
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
                v-model="saturdayClose"
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
                v-model="sundayClose"
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
import axios from 'axios';

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
      title: null,
      addressLine1: null,
      addressLine2: null,
      phone: null,
      email: null,
      mondayOpen: null,
      mondayClose: null,
      tuesdayOpen: null,
      tuesdayClose: null,
      wednesdayOpen: null,
      wednesdayClose: null,
      thursdayOpen: null,
      thursdayClose: null,
      fridayOpen: null,
      fridayClose: null,
      saturdayOpen: null,
      saturdayClose: null,
      sundayOpen: null,
      sundayClose: null,

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
  mounted() {
    axios.get('/api/hours')
      .then((res) => {
        console.log(res.data.hours);
        this.title = res.data.hours[0].title;
        this.addressLine1 = res.data.hours[0].addressLine1;
        this.addressLine2 = res.data.hours[0].addressLine2;
        this.phone = res.data.hours[0].phone;
        this.email = res.data.hours[0].email;
        this.mondayOpen = res.data.hours[0].mondayOpen;
        this.mondayClose = res.data.hours[0].mondayClose;
        this.tuesdayOpen = res.data.hours[0].tuesdayOpen;
        this.tuesdayClose = res.data.hours[0].tuesdayClose;
        this.wednesdayOpen = res.data.hours[0].wednesdayOpen;
        this.wednesdayClose = res.data.hours[0].wednesdayClose;
        this.thursdayOpen = res.data.hours[0].thursdayOpen;
        this.thursdayClose = res.data.hours[0].thursdayClose;
        this.fridayOpen = res.data.hours[0].fridayOpen;
        this.fridayClose = res.data.hours[0].fridayClose;
        this.saturdayOpen = res.data.hours[0].saturdayOpen;
        this.saturdayClose = res.data.hours[0].saturdayClose;
        this.sundayOpen = res.data.hours[0].sundayOpen;
        this.sundayClose = res.data.hours[0].sundayClose;
      });
  },
  methods: {
    submit() {
      if (this.isFormValid()) {
        axios.put('/api/hours/1', {
          title: this.title,
          addressLine1: this.addressLine1,
          addressLine2: this.addressLine2,
          phone: this.phone,
          email: this.email,
          mondayOpen: this.mondayOpen,
          mondayClose: this.mondayClose,
          tuesdayOpen: this.tuesdayOpen,
          tuesdayClose: this.tuesdayClose,
          wednesdayOpen: this.wednesdayOpen,
          wednesdayClose: this.wednesdayClose,
          thursdayOpen: this.thursdayOpen,
          thursdayClose: this.thursdayClose,
          fridayOpen: this.fridayOpen,
          fridayClose: this.fridayClose,
          saturdayOpen: this.saturdayOpen,
          saturdayClose: this.saturdayClose,
          sundayOpen: this.sundayOpen,
          sundayClose: this.sundayClose,
        }).then((res) => {
          this.title = null;
          this.addressLine1 = null;
          this.addressLine2 = null;
          this.phone = null;
          this.email = null;
          this.mondayOpen = null;
          this.mondayClose = null;
          this.tuesdayOpen = null;
          this.tuesdayClose = null;
          this.wednesdayOpen = null;
          this.wednesdayClose = null;
          this.thursdayOpen = null;
          this.thursdayClose = null;
          this.fridayOpen = null;
          this.fridayClose = null;
          this.saturdayOpen = null;
          this.saturdayClose = null;
          this.sundayOpen = null;
          this.sundayClose = null;

          this.isEmailInvalid = null;
        });
        this.findInvalidForm();
      } else {
        this.findInvalidForm();
      }
    },
    isFormValid() {
      this.isEmailInvalid = validateEmail(this.email);

      return !this.isEmailInvalid &&
        (this.title != null && this.title !== '') &&
        (this.addressLine1 != null && this.addressLine1 !== '') &&
        (this.addressLine2 != null && this.addressLine2 !== '') &&
        (this.phone != null && this.phone !== '') &&
        (this.email != null && this.email !== '') &&
        (this.mondayOpen != null && this.mondayOpen !== '') &&
        (this.mondayClose != null && this.mondayClose !== '') &&
        (this.tuesdayOpen != null && this.tuesdayOpen !== '') &&
        (this.tuesdayClose != null && this.tuesdayClose !== '') &&
        (this.wednesdayOpen != null && this.wednesdayOpen !== '') &&
        (this.wednesdayClose != null && this.wednesdayClose !== '') &&
        (this.thursdayOpen != null && this.thursdayOpen !== '') &&
        (this.thursdayClose != null && this.thursdayClose !== '') &&
        (this.fridayOpen != null && this.fridayOpen !== '') &&
        (this.fridayClose != null && this.fridayClose !== '') &&
        (this.saturdayOpen != null && this.saturdayOpen !== '') &&
        (this.saturdayClose != null && this.saturdayClose !== '') &&
        (this.sundayOpen != null && this.sundayOpen !== '') &&
        (this.sundayClose != null && this.sundayClose !== '');
    },
    findInvalidForm() {
      if (this.title == null || this.title === '') {
        this.isTitleInvalid = true;
      } else {
        this.isTitleInvalid = false;
      }
      if (this.addressLine1 == null || this.addressLine1 === '') {
        this.isAddressLine1Invalid = true;
      } else {
        this.isAddressLine1Invalid = false;
      }
      if (this.addressLine2 == null || this.addressLine2 === '') {
        this.isAddressLine2Invalid = true;
      } else {
        this.isAddressLine2Invalid = false;
      }
      if (this.phone == null || this.phone === '') {
        this.isPhoneInvalid = true;
      } else {
        this.isPhoneInvalid = false;
      }
      if (this.email == null || this.email === '') {
        this.isEmailInvalid = true;
      } else {
        this.isEmailInvalid = false;
      }
      if (this.mondayOpen == null || this.mondayOpen === '') {
        this.isMondayOpenInvalid = true;
      } else {
        this.isMondayOpenInvalid = false;
      }
      if (this.mondayClose == null || this.mondayClose === '') {
        this.isMondayCloseInvalid = true;
      } else {
        this.isMondayCloseInvalid = false;
      }
      if (this.tuesdayOpen == null || this.tuesdayOpen === '') {
        this.isTuesdayOpenInvalid = true;
      } else {
        this.isTuesdayOpenInvalid = false;
      }
      if (this.tuesdayClose == null || this.tuesdayClose === '') {
        this.isTuesdayCloseInvalid = true;
      } else {
        this.isTuesdayCloseInvalid = false;
      }
      if (this.wednesdayOpen == null || this.wednesdayOpen === '') {
        this.isWednesdayOpenInvalid = true;
      } else {
        this.isWednesdayOpenInvalid = false;
      }
      if (this.wednesdayClose == null || this.wednesdayClose === '') {
        this.isWednesdayCloseInvalid = true;
      } else {
        this.isWednesdayCloseInvalid = false;
      }
      if (this.thursdayOpen == null || this.thursdayOpen === '') {
        this.isThursdayOpenInvalid = true;
      } else {
        this.isThursdayOpenInvalid = false;
      }
      if (this.thursdayClose == null || this.thursdayClose === '') {
        this.isThursdayCloseInvalid = true;
      } else {
        this.isThursdayCloseInvalid = false;
      }
      if (this.fridayOpen == null || this.fridayOpen === '') {
        this.isFridayOpenInvalid = true;
      } else {
        this.isFridayOpenInvalid = false;
      }
      if (this.fridayClose == null || this.fridayClose === '') {
        this.isFridayCloseInvalid = true;
      } else {
        this.isFridayCloseInvalid = false;
      }
      if (this.saturdayOpen == null || this.saturdayOpen === '') {
        this.isSaturdayOpenInvalid = true;
      } else {
        this.isSaturdayOpenInvalid = false;
      }
      if (this.saturdayClose == null || this.saturdayClose === '') {
        this.isSaturdayCloseInvalid = true;
      } else {
        this.isSaturdayCloseInvalid = false;
      }
      if (this.sundayOpen == null || this.sundayOpen === '') {
        this.isSundayOpenInvalid = true;
      } else {
        this.isSundayOpenInvalid = false;
      }
      if (this.sundayClose == null || this.sundayClose === '') {
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

