const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const app = express();
const upload = multer({ dest: "public/uploads/" });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3005, function() {
  console.log("Example app listening on port 3005!\n");
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.post("/upload", upload.single("picture"), async (req, res) => {
  await sharp(req.file.path)
    .webp({ quality: 60 })
    .toFile(`${req.file.path}.webp`);
  res.send({ source: `/uploads/${req.file.filename}.webp` });
});
