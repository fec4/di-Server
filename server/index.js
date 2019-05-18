const mongoose = require('mongoose'); // mongoose is a module for mongodb, it allows us to talk to mongoDb
mongoose.connect('mongodb://localhost/fetcher');
const express = require('express');
const bodyParser = require('body-parser');
const controller=require('../db/controll.js');
let app = express();

app.use(express.static(__dirname + '/../public'));
let port = 1128;
app.get('/data',(req,res)=>{
  console.log('hi');
  controller.fetchData((data)=>{
    res.json(data);
  })
})
app.get('/data/:title',(req,res)=>{
  console.log(req.params);
  console.log('hi');
  controller.findOne(req.params,(data)=>{
    res.json(data);
  })
})
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

