
const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadMusic, getAllMusic } = require("../controllers/musicController");

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

// Initialize multer
const upload = multer({ storage });

// API Routes
router.get("/music", getAllMusic);
router.post("/music", upload.single("musicFile"), uploadMusic);

module.exports = router;
