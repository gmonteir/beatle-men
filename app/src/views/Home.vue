<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Slider/>
    <store-hours class="store-hours"/>
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
  .store-hours {
    margin: 50px;
  }
</style>
