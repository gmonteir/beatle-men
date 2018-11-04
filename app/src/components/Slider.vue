<template>
  <div class="slideshow">
    <transition-group name='fade' tag='div'>
      <div v-for="number in [currentNumber]" :key='number'>
        <img :src="images[Math.abs(currentNumber) % images.length]" class="img"/>
      </div>
    </transition-group>
    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  images: string[] = [
    'assets/home-slideshow-1.jpg',
    'assets/home-slideshow-2.jpg',
    'assets/home-slideshow-3.jpg',
    'assets/home-slideshow-4.jpg',
  ];
  currentNumber: number = 0;
  timer: number = 0;

  mounted() {
    this.startRotation();
  }

  startRotation() {
    this.timer = setInterval(this.next, 10000);
  }

  stopRotation() {
    clearTimeout(this.timer);
    this.timer = 0;
  }

  next() {
    this.currentNumber += 1;
    this.stopRotation();
    this.startRotation();
  }

  prev() {
    this.currentNumber -= 1;
    this.stopRotation();
    this.startRotation();
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

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 225px;
    width: auto;
    padding: 0 20px;
    color: white;
    font-weight: bold;
    font-size: 30px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    visibility: hidden;
  }

</style>
