<template>
<div>
  <body>
    <nav class="breadcrumb" aria-label="breadcrumbs">
     <ul>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/shop/bikes">Bikes</a></li>
        <li><a href="/shop/bikes/mountain">Mountain</a></li>
        <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column outline">
       <section class="section">
          <div class="title">
            <h1 class="title is-2">Product Item 1</h1>
            <div class="image">
              <img src="assets/home-slideshow-4.jpg"/>
            </div>
            <h1 class="title is-4 spacing">Quantity Available: 16</h1>
          </div>
        </section>
      </div>
      <div class="column">
        <div class="columns is-multiline is-gapless">
          <div class="column is-full section">
            <h1 class="title is-8 spacing">Description</h1>
              <div class="text">
                Dutch-style city bikes a modern spin with charming design details and best-in-class features. 
                We took the PUBLIC C7 (one of their most popular frames) and added sporty stripes we designed ourselves to bring you a custom, 
                limited-edition look you won’t find anywhere else. The 7-speed step-through frame is not all good looks, either. 
                It rides like a dream. It has dual-pivot brakes with quick release for safe stops, curved handlebars with comfy handgrips, 
                and a coordinating antique brown saddle seat that keeps you in a posture-friendly, upright position as you cycle around town.
              </div>
          </div>
          <div class="column is-full section">
            <h1 class="title is-8 spacing">Specifications</h1>
              <div class="text">
                Dutch-style city bikes a modern spin with charming design details and best-in-class features. 
                We took the PUBLIC C7 (one of their most popular frames) and added sporty stripes we designed ourselves to bring you a custom, 
                limited-edition look you won’t find anywhere else. The 7-speed step-through frame is not all good looks, either. 
                It rides like a dream. It has dual-pivot brakes with quick release for safe stops, curved handlebars with comfy handgrips, 
                and a coordinating antique brown saddle seat that keeps you in a posture-friendly, upright position as you cycle around town.
              </div>
          </div>
          <div class="columns spacing">
            <div class="column is-full right">
              <h1 class="title is-8">Price: $50.00</h1>
            </div>
            <div class="column is-full">
              <a class="button is-primary is-rounded right">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import EmployeeCard from './../components/EmployeeCard.vue';

export default {
};

</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.image {
  width: 600px;
  top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.outline {
  border-right: 1px gainsboro solid;
  margin-left: 40px;
  padding-right: 10px;
}

.section {
  text-align: center;
}

.text {
  width: 700px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.right {
  text-align: right;
  float: right;
}

.spacing {
  margin-top: 40px;
}

</style>
