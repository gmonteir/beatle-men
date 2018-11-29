<template>
<body>
  <add-user-modal
    v-if="isAddUserModalOpen"
    v-on:close="isAddUserModalOpen = false"
  />
  <section class="hero is-info is-bold">
    <div class="hero-body">
      <h1 class="title is-1">Users</h1>
    </div>
  </section>
  <section class="section">
    <div class="columns">
      <div class="column is-3" id="column">
        <h1 class="title is-4">Name</h1>
      </div>
      <div class="column is-3" id="column">
        <h1 class="title is-4">Email</h1>
      </div>
      <div class="column is-3" id="column">
        <h1 class="title is-4">Account Type</h1>
      </div>
      <div class="column is-3" id="column">
        <button class="button is-outlined" v-on:click="openAddUserModal">
          <span>Add User</span>
        </button>
      </div>
    </div>
  </section>
  <section class="section">
    <user-item
      v-for="user in this.$store.state.users"
      v-bind:key="user.id"
      v-bind:user="user"
    />
  </section>
</body>
</template>

<script>
import UserItem from './../components/UserItem.vue';
import AddUserModal from './../components/AddUserModal.vue';

export default {
  name: 'users',
  data() {
    return {
      isAddUserModalOpen: false,
    };
  },
  components: {
    UserItem,
    AddUserModal,
  },
  methods: {
    openAddUserModal() {
      this.isAddUserModalOpen = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables";
$section-padding:  2rem 15rem;
$box-padding: 0.4rem;
@import "../../node_modules/bulma/bulma.sass";
.hero {
  margin-top: 10px;
  text-align: center;
}
#column{
  text-align: center;
  border-bottom-style: solid;
  border-color: gray;
}
#remove-btn {
  margin-top: 1rem;
}
</style>
