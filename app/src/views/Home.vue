<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div id="location-hours">
      <div id="hours-header">
        <h1>Foxcycle San Luis Obispo</h1>
        <body>123 Higuera St</body>
        <body>San Luis Obispo, CA 93405</body>
        <h3>Store Hours</h3>
      </div>
      <table id="hours">
        <tr>
          <td>Monday</td>
          <td>10:00 AM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>10:00 AM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>10:00 AM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>10:00 AM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>10:00 AM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>10:00 AM</td>
          <td>6:00 PM</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>10:00 AM</td>
          <td>6:00 PM</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  HelloWorld,
  },
  })
export default class Home extends Vue {}
</script>

<style>
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

