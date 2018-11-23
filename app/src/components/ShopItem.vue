<template>
  <div class="shop-item">
    <div class="image">
      <router-link to="#"><img id="image"/></router-link>
    </div>
    <div class="title is-4">
      <p><router-link to="#">{{item.name}}</router-link></p>
    </div>
    <div class="subtitle is-5">
      <p>${{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const image = document.getElementById('image');

    //image.src = `data:image/jpeg;base64,${btoa(this.item.image.data)}`;
    //console.log( `data:image/jpeg;base64,${this.item.image.data.toBinary()}`);

    //const blob = new Blob([this.item.image.data], {type: 'image/*'});
    console.log(this.item.image);
    //const url = URL.createObjectURL(blob);

    //image.src = url;
    
    // image.src = URL.createObjectURL(this.item.image);
    // console.log(image);

    /*
    const arrayBuffer = this.item.image.data;
    const bytes = new Uint8Array(arrayBuffer);
    const blob = new Blob([bytes.buffer]);

    const reader = new FileReader();
    reader.onload = (e) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(blob);
    */
  },
};
</script>


<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.image {
  //width: 300px;
  margin: 0 auto;
}

.shop-item {
  text-align: center;
}

</style>
