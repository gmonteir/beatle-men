<!-- eslint-disable max-len -->
<template>
<div>
  <body>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1 centered">Checkout</h1>
      </div>
    </section>
    <div class="columns">
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Credit Card Information:</h1>
        <div class="dropdown is-hoverable topMargin">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Choose Credit Card</span>
              <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Card:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Cardholder Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Card Number: '1234567890123456'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Exp Month (1-12): '7'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Exp Year (xxxx): '2020'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="CCV (xxx): '789' ">
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Shipping Address Information:</h1>
        <div class="dropdown is-hoverable topMargin">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Choose Shipping Address</span>
              <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Address:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Shipping Address Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 1: '123 Main Street Apt #14'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 2: 'San Luis Obispo'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="State: 'CA'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Zip: '93401' ">
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
      <div class="column is-one-third centered">
        <h1 class="topMargin bigFont">Billing Address Information:</h1>
        <div class="dropdown is-hoverable topMargin">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Choose Billing Address</span>
              <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
        </div>
        <h1 class="topMargin">Save New Card:</h1>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Billing Address Name: 'John Smith'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 1: '123 Main Street'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Street Line 2: 'San Luis Obispo'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="State: 'CA'">
          </div>
        </div>
        <div class="field sectionSmall">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Zip: '93401' ">
          </div>
        </div>
        <a href="#" class="button is-success">Save</a>
      </div>
    </div>
    <div class="columns">
    <div class="column is-half right topMargin bigFont">
      Final Total: $119.99
    </div>
    <div class="column is-half left topMargin bigFont">
      <router-link to="/confirmation">
        <a class="button is-success">Place My Order</a>
      </router-link>
    </div>
    </div>
  </body>
</div>
</template>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

.hero {
  margin: 10px 0;
  text-align: center;
}

.centered {
  text-align: center;
}

.left {
  text-align: left;
  margin-left: 100px;
}

.right {
  text-align: right;
  padding-right: 100px;
}

.topMargin {
  margin-top: 40px;
}

.bigFont {
  font-size: 30px;
}

.sectionSmall {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  width: 360px;
  word-wrap: break-word;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
