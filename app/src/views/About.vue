<template>
<div>
  <section class="hero is-info is-bold">
  <div class="hero-body">
    <h1 class="title is-1">About</h1>
  </div>
  </section>
  <body>
    <section id="about" class="section">
      <div class="content">
        <h1 class="title is-2">Information and History</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
          unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
          on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
          eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
          d est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
          unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
          on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
          eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
          d est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
          unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
          on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
          eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
          d est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
          unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
          on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
          eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
          d est laborum.
        </p>
      </div>
    </section>
    <section class="section">
      <div id="store-info">
        <store-hours/>
      </div>
    </section>
    <section id="employees" class="section">
      <p class="title is-2" id="employees-header">Staff</p>
      <div class="columns">
        <employee-card
          v-for="employee in employees"
          v-bind:key="employee.id"
          v-bind:employee="employee"
        />
      </div>
    </section>
  </body>
</div>
</template>

<script>
import EmployeeCard from './../components/EmployeeCard.vue';
import axios from 'axios';

export default {
  name: 'about',
  components: {
    EmployeeCard,
  },
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    axios.get('/api/useraccounts')
      .then((res) => {
        for (let i = 0; i < res.data.users.length; i += 1) {
          if (res.data.users[i].accountType !== 'customer') {
            this.employees.push(res.data.users[i]);
          }
        }
      });
  },
};
</script>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
.hero {
  margin-top: 10px;
  text-align: center;
}
#about {
  background-color: rgba(220, 220, 220, 0.2);
}
#store-info {
  display: flex;
  justify-content: center;
}
#employees-header {
  text-align: center;
}
#employees-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
