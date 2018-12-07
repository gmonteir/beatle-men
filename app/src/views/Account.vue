<template>
  <body>
    <change-name-modal
      v-if="isChangeNameModalOpen"
      v-on:close="isChangeNameModalOpen = false"
    />
    <change-email-modal
      v-if="isChangeEmailModalOpen"
      v-on:close="isChangeEmailModalOpen = false"
    />
    <change-password-modal
      v-if="isChangePasswordModalOpen"
      v-on:close="isChangePasswordModalOpen = false"
    />
    <add-address-modal
      v-if="isAddAddressModalOpen"
      v-on:close="isAddAddressModalOpen = false"
    />
    <add-credit-card-modal
      v-if="isAddCreditCardModalOpen"
      v-on:close="isAddCreditCardModalOpen = false"
    />
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Account</h1>
      </div>
    </section>
    <section class="section">
      <router-link to="/users" v-if="this.$store.state.accountType == 'admin'">
        <button class="button is-outlined" id="top-btn">
          <span>Manage Users</span>
        </button>
      </router-link>
      <router-link to="/inventory" v-if="this.$store.state.accountType == 'admin'
        || this.$store.state.accountType == 'employee'">
        <button class="button is-outlined" id="top-btn">
          <span>Inventory</span>
        </button>
      </router-link>
      <router-link to="/add-announcement" v-if="this.$store.state.accountType == 'admin'
        || this.$store.state.accountType == 'employee'">
        <button class="button is-outlined" id="top-btn">
          <span>Change Announcements</span>
        </button>
      </router-link>
      <router-link to="/manageorders" v-if="this.$store.state.accountType == 'admin'
        || this.$store.state.accountType == 'employee'">
        <button class="button is-outlined" id="top-btn">
          <span>Manage Orders</span>
        </button>
      </router-link>
      <router-link to="/change-store-info" v-if="this.$store.state.accountType == 'admin'
        || this.$store.state.accountType == 'employee'">
        <button class="button is-outlined" id="top-btn">
          <span>Change Store Info</span>
        </button>
      </router-link>
    </section>
    <section class="section">
      <div id="account-info">
        <div id="left-heading">
          <h2 class="title is-4">Name:</h2>
          <h3 class="subtitle is-5">{{firstName}} {{lastName}}</h3>
        </div>
        <button
          class="button is-outlined"
          id="edit-btn"
          v-on:click="openChangeNameModal">
          Change Name
        </button>
      </div>
    </section>
    <section class="section">
      <div id="account-info">
        <div id="left-heading">
          <h2 class="title is-4">Email:</h2>
          <h3 class="subtitle is-5">{{email}}</h3>
        </div>
        <button
          class="button is-outlined"
          id="edit-btn"
          v-on:click="openChangeEmailModal">
          Change Email
        </button>
      </div>
    </section>
    <section class="section">
      <div id="account-info">
        <div id="left-heading">
          <h2 class="title is-4">Password:</h2>
          <h3 class="subtitle is-5">**********</h3>
        </div>
        <button
          class="button is-outlined"
          id="edit-btn"
          v-on:click="openChangePasswordModal">
          Change Password
        </button>
      </div>
    </section>
    <section class="section">
      <div id="address-info">
        <div id = "address-header">
          <span id="left-heading">
            <h2 class="title is-4">Orders</h2>
          </span>
          <router-link to="/userorders">
            <button class="button is-outlined" id="edit-btn">View</button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="section">
      <div id="address-info">
        <div id = "address-header">
          <span id="left-heading">
            <h2 class="title is-4">Addresses</h2>
            <button
              class="button is-outlined"
              id="edit-btn"
              v-on:click="toggleAddressesShown">
              View
            </button>
          </span>
          <button
            class="button is-outlined"
            id="edit-btn"
            v-on:click="openAddAddressModal">
            Add an Address
          </button>
        </div>
        <address-item
          v-if="isAddressesShown"
          v-for="address in addresses"
          v-bind:key="address.id"
          v-bind:address="address"
        />
      </div>
    </section>
    <section class="section">
      <div id="address-info">
        <div id = "address-header">
          <span id="left-heading">
            <h2 class="title is-4">Credit Cards</h2>
            <button
              class="button is-outlined"
              id="edit-btn"
              v-on:click="toggleCreditCardsShown">
              View
            </button>
          </span>
          <button
            class="button is-outlined"
            id="edit-btn"
            v-on:click="openAddCreditCardModal">
            Add a Credit Card
          </button>
        </div>
        <credit-card-item
          v-if="isCreditCardsShown"
          v-for="card in cards"
          v-bind:key="card.id"
          v-bind:card="card"
        />
      </div>
    </section>
  </body>
</template>

<script>
import axios from 'axios';
import ChangeNameModal from './../components/ChangeNameModal.vue';
import ChangeEmailModal from './../components/ChangeEmailModal.vue';
import ChangePasswordModal from './../components/ChangePasswordModal.vue';
import AddressItem from './../components/AddressItem.vue';
import AddAddressModal from './../components/AddAddressModal.vue';
import CreditCardItem from './../components/CreditCardItem.vue';
import AddCreditCardModal from './../components/AddCreditCardModal.vue';

export default {
  name: 'account',
  components: {
    ChangeNameModal,
    ChangeEmailModal,
    ChangePasswordModal,
    AddressItem,
    AddAddressModal,
    CreditCardItem,
    AddCreditCardModal,
  },
  data() {
    return {
      isChangeNameModalOpen: null,
      isChangeEmailModalOpen: null,
      isChangePasswordModalOpen: null,
      isAddAddressModalOpen: null,
      isAddressesShown: null,
      isAddCreditCardModalOpen: null,
      isCreditCardsShown: null,
    };
  },
  methods: {
    openChangeNameModal() {
      this.isChangeNameModalOpen = true;
    },
    openChangeEmailModal() {
      this.isChangeEmailModalOpen = true;
    },
    openChangePasswordModal() {
      this.isChangePasswordModalOpen = true;
    },
    openAddAddressModal() {
      this.isAddAddressModalOpen = true;
    },
    openAddCreditCardModal() {
      this.isAddCreditCardModalOpen = true;
    },
    toggleAddressesShown() {
      this.isAddressesShown = !this.isAddressesShown;
    },
    toggleCreditCardsShown() {
      this.isCreditCardsShown = !this.isCreditCardsShown;
    },
  },
  computed: {
    firstName() {
      return this.$store.state.firstName;
    },
    lastName() {
      return this.$store.state.lastName;
    },
    email() {
      return this.$store.state.email;
    },
    addresses() {
      return this.$store.state.addresses;
    },
    cards() {
      return this.$store.state.cards;
    },
  },
  mounted() {
    axios.get('/api/addresses/' + this.$store.state.userId + '/customer').then((success) => {
      this.$store.commit('addAddresses', success.data.addresses);
    });
    axios.get('/api/paymentinfo/' + this.$store.state.userId + '/customer').then((success) => {
      this.$store.commit('addCards', success.data.cards);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/sass/utilities/initial-variables";
$section-padding:  2rem 25rem;
@import "./../../node_modules/bulma/bulma.sass";

.hero {
  margin-top: 10px;
  text-align: center;
}
#account-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-color: rgb(150, 150, 150);
  border-radius: 5px;
}
#address-info {
  border-style: solid;
  border-color: rgb(150, 150, 150);
  border-radius: 5px;
  padding-bottom: 15px;
}
#address-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#left-heading {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
}
#edit-btn {
  margin-right: 1rem;
}
#top-btn {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
