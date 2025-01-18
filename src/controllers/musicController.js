
const Music = require("../models/music");

// Fetch all music
exports.getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.json(music);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Upload new music
exports.uploadMusic = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const newMusic = new Music({ title, artist, album, genre, fileUrl });
    await newMusic.save();

    res.status(201).json({ message: "Music uploaded successfully", music: newMusic });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
