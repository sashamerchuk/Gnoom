const express = require('express');
const app = express();
const harp = require('sharp');
//const body_parser = require('body-parser');
//const scale = require('express-sharp');

app.listen(3005, function() {
console.log("Example app listening on port 3000!\n"); });

app.get('/', function(req, res){
  res.send("Hello world");
});

app.post('/upload', function(req, res) {
  console.log(req.file);
  sharp()//тут повине бути аргумент, який приймає shar
    .jpeg({quality: 80})
    .toFile('new1.jpg')
    res.send('Successfully uploaded!');
});
