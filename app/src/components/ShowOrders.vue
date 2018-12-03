<template>
  <div>
    <section class="smallMargin">
      <div class="columns">
        <div class="column is-one-fifth columnOne">
          <h1 class="title is-4">Order ID: 1</h1>
        </div>
        <div class="column is-one-fifth columnOne">
          <h1 class="title is-4">Order Total: $190</h1>
        </div>
        <div class="column is-one-fifth columnOne">
          <h1 class="title is-4">Date: 11-28-2018</h1>
        </div>
      </div>
    </section>
    <section class="section smallMargin" id="address-info">
      <section class="bottomMargin">
        <div class="columns">
          <div class="column is-6" id="column">
            <h1 class="title is-4">Product</h1>
          </div>
          <div class="column is-2" id="column-centered">
            <h1 class="title is-4">Price</h1>
          </div>
          <div class="column is-2" id="column-centered">
            <h1 class="title is-4">Quantity</h1>
          </div>
          <div class="column is-2" id="column-centered">
            <h1 class="title is-4">Total</h1>
          </div>
        </div>
      </section>
    </section>    
  </div>
</template>

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