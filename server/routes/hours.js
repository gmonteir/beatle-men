const express = require('express');
const { Hours } = require('../models');

const router = express.Router();

router
  .route('/')
  // get hours
  .get((req, res) => {
    Hours.findAll().then((hours) => {
      res.json({
        hours,
      });
    });
  });


router
  .route('/:id')

  .put((req, res) => {
    const {
      title,
      addressLine1,
      addressLine2,
      phone,
      email,
      mondayOpen,
      mondayClose,
      tuesdayOpen,
      tuesdayClose,
      wednesdayOpen,
      wednesdayClose,
      thursdayOpen,
      thursdayClose,
      fridayOpen,
      fridayClose,
      saturdayOpen,
      saturdayClose,
      sundayOpen,
      sundayClose,
    } = req.body;

    Hours.findById(req.params.id).then((hours) => {
      const hoursToUpdate = hours;
      hoursToUpdate.title = title;
      hoursToUpdate.addressLine1 = addressLine1;
      hoursToUpdate.addressLine2 = addressLine2;
      hoursToUpdate.phone = phone;
      hoursToUpdate.email = email;
      hoursToUpdate.mondayOpen = mondayOpen;
      hoursToUpdate.mondayClose = mondayClose;
      hoursToUpdate.tuesdayOpen = tuesdayOpen;
      hoursToUpdate.tuesdayClose = tuesdayClose;
      hoursToUpdate.wednesdayOpen = wednesdayOpen;
      hoursToUpdate.wednesdayClose = wednesdayClose;
      hoursToUpdate.thursdayOpen = thursdayOpen;
      hoursToUpdate.thursdayClose = thursdayClose;
      hoursToUpdate.fridayOpen = fridayOpen;
      hoursToUpdate.fridayClose = fridayClose;
      hoursToUpdate.saturdayOpen = saturdayOpen;
      hoursToUpdate.saturdayClose = saturdayClose;
      hoursToUpdate.sundayOpen = sundayOpen;
      hoursToUpdate.sundayClose = sundayClose;
      hoursToUpdate.save().then((updatedHours) => {
        res.json(updatedHours);
      });
    });
  });

module.exports = router;
