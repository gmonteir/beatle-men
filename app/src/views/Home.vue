<template>
  <div class="home">
    <Slider/>
    <div class="home-columns">
      <store-hours class="store-hours"/>
      <div class="announcements">
        <h1 class="title is-3" id="announcements-title">Announcements</h1>
        <ul>
          <li v-for="announcement in announcements" v-bind:key="announcement.id">
            <Announcement v-bind:announcement="announcement"/>
          </li>
        </ul>
      </div>
      <table class="sponsors">
        <h1 class="title is-3">Sponsors</h1>
        <tr>
          <td><img class="sponsors-img" src="assets/specialized-logo.png"/></td>
        </tr>
        <tr>
          <td><img class="sponsors-img" src="assets/santa-cruz-logo.png"/></td>
        </tr>
        <tr>
          <td><img class="sponsors-img" src="assets/trek-logo.png"/></td>
        </tr>
        <tr>
          <td><img class="sponsors-img" src="assets/giant-logo.png"/></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from './../components/Slider.vue';
import Announcement from './../components/Announcement.vue';

export default {
  name: 'home',
  components: {
    Slider,
    Announcement,
  },
  data() {
    return {
      announcements: [],
    };
  },
  mounted() {
    axios.get('/api/announcements')
      .then((res) => {
        this.announcements = res.data.announcements.reverse();
      });
  },
}
</script>


<style lang="scss" scoped>
  .home-columns {
    justify-content: center;
    text-align: center;
    display: flex;
    margin: 50px 0;
  }

  .announcements, .sponsors {
    border: 1px solid black;
    margin-left: 3%;
    width: 30%;
    height: 400px;
    overflow: auto;
  }

  .sponsors-img {
    display: block;
    width: 50%;
    margin: auto;
  }

  .scrollable {
    overflow: auto;
  }

  #announcements-title {
    margin-bottom: 10px;
  }

  li {
    width: 95%;
    display: inline-block;
    justify-content: center;
  }

  li:nth-child(odd)  {
    background-color: #f2f2f2;
  }

</style>
