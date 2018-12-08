<template>
  <div id="location-hours">
    <div id="hours-header">
      <h1 class="title is-3">{{title}}</h1>
      <p class="subtitle is-5">
        {{addressLine1}}<br>
        {{addressLine2}}<br>
        {{phone}}<br>
        {{email}}
      </p>
      <h3 class="title is-4" id="store-hours-text">Store Hours</h3>
    </div>
    <table id="hours">
      <tr>
        <td>Monday</td>
        <td>{{mondayOpen}}</td>
        <td>{{mondayClose}}</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>{{tuesdayOpen}}</td>
        <td>{{tuesdayClose}}</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>{{wednesdayOpen}}</td>
        <td>{{wednesdayClose}}</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>{{thursdayOpen}}</td>
        <td>{{thursdayClose}}</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>{{fridayOpen}}</td>
        <td>{{fridayClose}}</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>{{saturdayOpen}}</td>
        <td>{{saturdayClose}}</td>
      </tr>
      <tr>
        <td>Sunday</td>
        <td>{{sundayOpen}}</td>
        <td>{{sundayClose}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'store-hours',
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
}
</script>


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
