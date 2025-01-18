
const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  fileUrl: String,
});

module.exports = mongoose.model("Music", MusicSchema);
