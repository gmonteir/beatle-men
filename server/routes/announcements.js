const express = require('express');
const app = require('../app');
const { Announcements } = require('../models');
const router = express.Router();

router

  .route('/')
  // get all announcements
  .get((req, res) => {
    Announcements.findAll().then((announcements) => {
      res.json({
        announcements: announcements || [],
      });
    });
  })

  // create an announcement
  .post((req, res) => {
    // title and message are both passed as strings
    const { title, message } = req.body;
    Announcements.build({
      title,
      message,
    }).save().then((announcement) => {
      res.json(announcement);
    });
  });


router
.route('/:id')
// get a specific announcement
.get((req, res) => {
  const givenId = req.params.id;
  Announcements.findById(givenId).then((announcement) => {
    res.json(announcement);
  });
})

// update a given announcement
.put((req, res) => {
  const { title, message } = req.body;
  Announcements.findById(req.params.id).then((announcement) => {
    const announcementToUpdate = announcement;
    announcementToUpdate.title = title;
    announcementToUpdate.message = message;
    announcementToUpdate.save().then((updatedAnnouncement) => {
      res.json(updatedAnnouncement);
    });
  });
})

// delete a given announcement
.delete((req, res) => {
  const idToDelete = req.params.id;
  Announcements.findById(idToDelete).then((announcement) => {
    announcement.destroy().then(() => {
      res.json({ delete: true });
    });
  });
});

module.exports = router;