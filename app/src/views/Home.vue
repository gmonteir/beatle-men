<template>
  <div class="home">
    <Slider/>
    <div class="home-columns">
      <store-hours class="store-hours"/>
      <table class="announcements">
        <h1 class="title is-3">Announcements</h1>
      </table>
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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue';

@Component({ components: { Slider }})
export default class Home extends Vue {
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
  }

  .sponsors-img {
    display: block;
    width: 50%;
    margin: auto;
  }
</style>
