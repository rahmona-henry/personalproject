var express = require('express');
var app = express();
var beers = require('./beers.js');
var bodyParser = require('body-parser')

app.use(express.static('client'));
app.set('view engine', 'hbs');

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '.dev.sqlite3'
  },
  useNullAsDefault: true
})

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
  // console.log(req.body) //grab the data we are posting to this url and save it to a variable
  var data = req.body

  //then we want to create a knex statement, to put that data into the database
  // knex.(DO SOMETHING) hint: insert
  knex('beer').insert({name:data.name},{style:data.style},{inventory:data.inventory})
  // console.log('data-name:', data.name)
  // console.log('data-style:', data.style)
  // console.log('data-inventory:', data.inventory)

  // work out where you want to go next, weather its rendering a new pages saying 'tahnks' or the berrs page, or a specific beer page
  res.send('success')


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
// go back to server - create a insert statment that inserts info into db
// redirect - to that the specfic page - that you want

