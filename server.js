var express = require('express');
var app = express();
var beers = require('./beers.js')

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/api/v1/beers', function (req, res){
  res.json(beers)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
