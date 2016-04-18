var express = require('express');
var app = express();
var beers = require('./beers.js');
var bodyParser = require('body-parser')

app.use(express.static('client'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

app.post('/foo', function (req, res){
  console.log(req.body)
  debugger
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});


// get a route - that gives a body - check form  -- DONE
// make a db -- DONE
// tables - cols, data types in cols -- DONE
// install knex -- DONE
// create a migration - which creates a new table - with above info --DONE
// create a seed file - with test data --DONE
// go back to server - create a insert statment taht inserts info into db
// redirect - to that the specfic page - that you want

