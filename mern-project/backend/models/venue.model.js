const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueSchema = new Schema(
  {
    venue: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
