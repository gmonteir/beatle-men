<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">My Orders</h1>
      </div>
    </section>
    <show-orders/>
  </div>
</template>

<script>

import ShowOrders from './../components/ShowManageOrders.vue';

export default {
  name: 'showManageOrder',
  components: {
    ShowOrders,
  },
};
</script>

<style>
@import "../../node_modules/bulma/bulma.sass";

.hero {
    margin: 10px 0;
    text-align: center;
}

.bottomMargin {
  margin-bottom: 20px;
}

.smallMargin {
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
}

.columnOne{
  text-align: left;
  margin-left: 20px;
}

#address-info {
  border-style: solid;
  border-color: rgb(150, 150, 150);
  border-radius: 5px;
  padding-bottom: 15px;
}

#column{
  border-bottom-style: solid;
  border-color: gray;
}
#column-centered{
  text-align: center;
  border-bottom-style: solid;
  border-color: gray;
}

</style>
