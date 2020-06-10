const mongoose = require('mongoose');

const MagsSchema = new mongoose.Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
});

const Mags = mongoose.model("Mag", MagsSchema);
module.exports = Mags;
