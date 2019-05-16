const express = require('express');
const bodyParser = require('body-parser');

let app = express();
console.log(__dirname + '/../public');
app.use(express.static(__dirname + '/../public'));
let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

