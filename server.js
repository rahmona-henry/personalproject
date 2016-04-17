var express = require('express');
var app = express();
var beers = require('./beers.js');


app.use(express.static('client'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/beers', function (req, res){
  res.json(beers)
});

app.get('/beers/:id', function (req, res){
  res.json(beers[req.params.id-1])
})


app.get('/new', function (req, res){
  res.render('addNewBeerProfile')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
