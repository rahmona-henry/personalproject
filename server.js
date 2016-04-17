var express = require('express');
var app = express();
var beers = require('./beers.js');
var fs = require('fs');
var bodyParser = require('body-parser');


app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/beers', function (req, res){
  fs.readFile('beers.js', 'utf8', function(err,data){
    if (err) {
      console.log ('error')
    }
    res.json(JSON.parse(data))
  })
});

app.get('/beers/:id', function (req, res){
  res.json(beers[req.params.id-1])
});


app.get('/new', function (req, res){
  res.render('addNewBeerProfile')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
