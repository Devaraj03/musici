
const express = require("express");
const path = require("path");
const db = require("./config/db");
const apiRoutes = require("./routes/api");
const app = express();
const PORT = 3000;

// Connect to the database
db();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api", apiRoutes);

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
