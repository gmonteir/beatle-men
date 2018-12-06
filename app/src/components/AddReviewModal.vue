<template>
  <div class="modal is-active">
    <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-card" id="modal-container">
      <div class="field">
        <label class="label">Enter Rating</label>
        <div id="rating" class="control">
          <input class="input"
            type="number"
            placeholder="1-5"
            v-model="rating"
            v-bind:class="{'is-danger': isRatingInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isRatingInvalid">Invalid Rating</p>
      </div>
      <div class="field">
        <label class="label">Enter Description</label>
        <div class="control">
          <textarea class="textarea"
            type="text"
            maxlength="255"
            v-model="description"
            v-bind:class="{'is-danger': isDescriptionInvalid, 'is-success': isChangeSuccess}"
          />
        </div>
        <p class="help is-danger" v-if="isDescriptionInvalid">Invalid Description</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="content has-text-success is-pulled-left"
            v-if="isChangeSuccess">Review Submitted!
          </div>
          <div class="content has-text-danger is-pulled-left"
            v-if="isChangeFail">Submit Failed
          </div>
          <div class="buttons is-right">
            <button class="button is-link" v-on:click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div>
    <button class="modal-close is-large" aria-label="close" v-on:click="$emit('close')"></button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'changeNameModal',
  data() {
    return {
      rating: null,
      description: null,
      isRatingInvalid: null,
      isDescriptionInvalid: null,
      isChangeSuccess: null,
      isChangeFail: null,
    };
  },
  props: {
    itemId: {
      type: Object,
    },
  },
  methods: {
    submit() {
      this.isRatingInvalid = !this.rating || (this.rating === '') || this.rating < 1 || this.rating > 5;
      this.isDescriptionInvalid = !this.description || (this.description === '');
      this.isChangeSuccess = false;
      this.isChangeFail = false;

      if (!this.isRatingInvalid && !this.isDescriptionInvalid) {
        axios.post('/api/reviews', {
          firstName: this.$store.state.firstName,
          rating: this.rating,
          description: this.description,
          itemId: this.itemId,
        }).then((successRes) => {
          this.isChangeSuccess = true;
        }, (failRes) => {
          this.isChangeFail = true;
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../../node_modules/bulma/bulma.sass";

#modal-container {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}
#header-title {
  font-size: 26px;
  text-align: center;
}
</style>
