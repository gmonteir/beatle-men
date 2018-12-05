<template>
  <div id="location-hours">
    <div id="hours-header">
      <h1 class="title is-3">{{this.$store.state.storeInfo.title}}</h1>
      <p class="subtitle is-5">
        {{this.$store.state.storeInfo.addressLine1}}<br>
        {{this.$store.state.storeInfo.addressLine2}}<br>
        {{this.$store.state.storeInfo.phone}}<br>
        {{this.$store.state.storeInfo.email}}
      </p>
      <h3 class="title is-4" id="store-hours-text">Store Hours</h3>
    </div>
    <table id="hours">
      <tr>
        <td>Monday</td>
        <td>{{this.$store.state.storeInfo.mondayOpen}}</td>
        <td>{{this.$store.state.storeInfo.mondayClose}}</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>{{this.$store.state.storeInfo.tuesdayOpen}}</td>
        <td>{{this.$store.state.storeInfo.tuesdayClose}}</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>{{this.$store.state.storeInfo.wednesdayOpen}}</td>
        <td>{{this.$store.state.storeInfo.wednesdayClose}}</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>{{this.$store.state.storeInfo.thursdayOpen}}</td>
        <td>{{this.$store.state.storeInfo.thursdayClose}}</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>{{this.$store.state.storeInfo.fridayOpen}}</td>
        <td>{{this.$store.state.storeInfo.fridayClose}}</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>{{this.$store.state.storeInfo.saturdayOpen}}</td>
        <td>{{this.$store.state.storeInfo.saturdayClose}}</td>
      </tr>
      <tr>
        <td>Sunday</td>
        <td>{{this.$store.state.storeInfo.sundayOpen}}</td>
        <td>{{this.$store.state.storeInfo.sundayClose}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  #store-hours-text {
    margin-top: 0px;
    margin-bottom: 5px;
  }

  #location-hours {
    border: 1px solid #1B2222;
    text-align: left;
    padding: 10px;
    width: 30%;
  }

  #hours {
    width: 100%;
  }

  tr:nth-child(odd)  {
    background-color: #f2f2f2;
  }
</style>
