if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const { cloudinary, storage } = require("./cloudinary");
const upload = multer({ storage });
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});
app.get("/api", (req, res) => {
  res.send("Node & React connected");
});
app.post("/api/image/upload", upload.single("image"), (req, res) => {
  res.send(req.file);
});
app.listen("4000", (req, res) => {
  console.log("Listening");
});
