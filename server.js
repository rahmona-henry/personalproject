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

app.get('/api/v1/beers/:id', function (req, res){
  res.json(beers[req.params.id-1])
  //console.log('this is beers.id: ', beers.id)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
