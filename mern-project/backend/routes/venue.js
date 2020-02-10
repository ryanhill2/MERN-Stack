const router = require("express").Router();
let Venue = require("../models/venue.model");

router.route("/").get((req, res) => {
  Venue.find()
    .then(venues => res.json(venues))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const venue = req.body.venue;
  const newVenue = new Venue({ venue });

  newVenue
    .save()
    .then(() => res.json("Venue added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
