<template>
  <div class="add-announcement">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Add Announcement</h1>
      </div>
    </section>
    <div class="container">
      <div class="field">
        <label class="label">Title</label>
        <div id="title" class="control">
          <input class="input"
            id="input"
            type="text"
            v-model="title"
            v-bind:class="{'is-danger': titleInvalid === true, 'is-normal': titleInvalid === false}"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div id="message" class="control">
          <textarea class="textarea"
            id = "input"
            v-model="message"
            v-bind:class="{'is-danger': messageInvalid === true, 'is-normal': messageInvalid === false}"
          />
        </div>
      </div>
      <div class="buttons" id="buttons">
        <button class="button is-success" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'add-announcement',
  data() {
    return {
      title: null,
      message: null,

      titleInvalid: null,
      messageInvalid: null,
    };
  },
  methods: {
    submit() {
      if (this.formIsValid()) {
        /*
        axios.post('/api/announcements', () => {
          title: this.title;
          message: this.message;
        }).then((res) => {
          this.title = null;
          this.message = null;
        });
        */
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .field {
    padding: 0 20%;
  }

  #buttons {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

</style>
