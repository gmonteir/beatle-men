<template>
  <div id="location-hours">
    <div id="hours-header">
      <h1 class="title is-3">Foxcycle San Luis Obispo</h1>
      <p class="subtitle is-5">123 Higuera St <br> San Luis Obispo, CA 93405</p>
      <h3 class="title is-4" id="store-hours-text">Store Hours</h3>
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
