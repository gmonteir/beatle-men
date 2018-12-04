<template>
  <div class="add-announcement">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title is-1">Add Announcement</h1>
      </div>
    </section>

    <div class="announcements-list">
      <ul>
        <li v-for="announcement in announcements" v-bind:key="announcement.id">
          <div class="current-announcement">
            <div class="notification" id="announcement">
              <Announcement v-bind:announcement="announcement"/>
              <button class="delete" v-on:click="removeAnnouncement(announcement)"></button>
            </div>
            <button class="button is-warning button-announcement" id="announcement" v-on:click="editAnnouncement(announcement)">Edit</button>
          </div>
        </li>
      </ul>
    </div>

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
        <button class="button is-success" v-if="!edit" v-on:click="submit()">Submit</button>
        <button class="button is-success" v-else v-on:click="submitEdit()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Announcement from './../components/Announcement.vue';

export default {
  name: 'add-announcement',
  components: {
    Announcement,
  },
  data() {
    return {
      title: null,
      message: null,
      announcements: [],
      currentAnnouncement: null,
      edit: false,

      titleInvalid: null,
      messageInvalid: null,
    };
  },
  mounted() {
    this.getAnnouncements();
  },
  methods: {
    submit() {
      if (this.formIsValid()) {
        axios.post('/api/announcements', {
          title: this.title,
          message: this.message,
        }).then((res) => {
          this.announcements.reverse();
          this.announcements.push(res.data);
          this.announcements.reverse();
          this.title = null;
          this.message = null;
        });
      }
      this.findInvalidField();
    },
    formIsValid() {
      return (this.title != null && this.title !== '')
        && (this.message != null && this.message !== '');
    },
    findInvalidField() {
      if (this.title == null || this.title === '') {
        this.titleInvalid = true;
      } else {
        this.titleInvalid = false;
      }
      if (this.message == null || this.message === '') {
        this.messageInvalid = true;
      } else {
        this.messageInvalid = false;
      }
    },
    editAnnouncement(announcement) {
      this.title = announcement.title;
      this.message = announcement.message;
      this.currentAnnouncement = announcement;
      this.edit = true;
    },
    removeAnnouncement(announcement) {
      axios.delete(`/api/announcements/${announcement.id}`)
        .then((res) => {
          for (let i = 0; i < this.announcements.length; i += 1) {
            if (this.announcements[i].id === announcement.id) {
              this.announcements.splice(i, 1);
            }
          }
        });
    },
    submitEdit() {
      axios.put(`/api/announcements/${this.currentAnnouncement.id}`, {
        title: this.title,
        message: this.message,
      }).then((res) => {
        this.getAnnouncements();
        this.title = null;
        this.message = null;
        this.currentAnnouncement = null;
        this.edit = false;
      })
    },
    getAnnouncements() {
      axios.get('/api/announcements')
        .then((res) => {
          this.announcements = res.data.announcements.reverse();
        });
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";

  .hero {
    margin: 10px 0;
    text-align: center;
  }

  .announcements-list {
    margin: 0 20%;
    margin-bottom: 20px;
    height: 300px;
    border: 1px solid black;
    overflow: auto;
  }

  .notification {
    margin: 5px;
    width: 90%;
  }

  .field {
    padding: 0 20%;
  }

  #buttons {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  #announcement {
    display: inline-block;
  }

  .button-announcement {
    margin: 5px;
  }

</style>
