var express = require('express');
var app = express();
var beers = require('./beers.js');
var bodyParser = require('body-parser')

app.use(express.static('client'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended:true}))
// app.use(bodyParser.json())
// type:'application/x-www-form-urlencoded',

// var knex = require('knex')
// ({
//   client: 'pg',
//   connection: {
//      filename: './dev.sqlite3'
//   },
//   useNullAsDefault: true
// })


var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(knexConfig[env]);

/////////GET ROUTES////////////////

app.get('/', function(req, res) {
  res.send('index.html');
});


app.get('/allBeers', function (req, res) {
  knex.select().table('beer')
    .then(function(beers) {
     res.json(beers)
  })
})

app.get('/new', function (req, res){
  res.render('addNewBeerProfile')
})


app.get('/beers/:id', function (req, res) {
  knex('beer').where('id', req.params.id)
    .then(function(data) {
      var beer = data[0]
      res.json(beer)
      // console.log('this is data', data)
      // console.log('this is name:', data[0].name)
      // res.render('beerProfile', {
      //   name: beer.name,
      //   style: beer.style,
      //   inventory: beer.inventory
      // })
    })
})





////////POST ROUTES/////////////

app.post('/add', function (req, res){
  knex('beer').insert({name:req.body.name, style:req.body.style, inventory:req.body.inventory,
  brewDate:req.body.brewDate, bottlingDate:req.body.bottlingDate, ingredients:req.body.ingredients,
  process:req.body.process, tasting:req.body.tasting})
  .then(function(data){
    res.send('success')
  })
})

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
