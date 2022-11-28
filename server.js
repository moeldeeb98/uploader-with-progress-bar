const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ test: "test" });
});

app.post("/api/uploadFile", multer().single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.json("Done");
});

app.listen(3500, () => {
  console.log("server is running on http://localhost:3500");
});
