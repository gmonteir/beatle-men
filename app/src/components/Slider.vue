<template>
  <div class="slideshow">
    <img :src="images[currentNumber % images.length]" class="img"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  images: string[] = [
    "assets/home-slideshow-1.jpg",
    "assets/home-slideshow-2.jpg",
    "assets/home-slideshow-3.jpg",
    "assets/home-slideshow-4.jpg"
  ];
  currentNumber: number = 0;
  timer: number = 0;

  mounted() {
    this.startRotation();
  }

  startRotation() {
    this.timer = setInterval(this.next, 7000);
  }

  stopRotation() {
    clearTimeout(this.timer);
    this.timer = 0;
  }

  next() {
    this.currentNumber += 1;
  }
}
</script>

<style lang="scss" scoped>
  .slideshow {
    width: 100%;
    height: 400px;
    overflow: hidden;
    padding: 10px 0px;
  }

  .img {
    width: 100%;
    height: auto;
  }
</style>
