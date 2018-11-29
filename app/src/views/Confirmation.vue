<!-- eslint-disable max-len -->
<template>
<div>
  <body>
    <div class="columns is-multiline">
      <div class="column is-full sectionLarge">
        Thank you for your order!
      </div>
      <div class="column is-full is-narrow sectionSamll">
        <div class="sectionSmall">
          You can check the status of your order when logged in by going to your Orders page in the Account dropdown.
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.sectionLarge {
  margin-top: 40px;
  text-align: center;
  font-size: 50px;
}

.sectionSmall {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  width: 400px;
  word-wrap: break-word;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
