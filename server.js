var express = require('express');
var app = express();
var beers = require('./beers.js');
var bodyParser = require('body-parser')

app.use(express.static('client'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended:true}))
// app.use(bodyParser.json())
// type:'application/x-www-form-urlencoded',

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true
})


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

app.get('/search', function (req, res){
  res.render('search')
})

app.post('/foo', function (req, res){
  knex('beer').insert({name:req.body.name}, {style:req.body.style}, {inventory:req.body.inventory})
  .then(function(data){
    res.send('success')
  })
})

app.post('/boo', function (req, res){
  // console.log('this is req.body:', req.body)
  knex.select({name:req.body.name}).from('beer')
  console.log(req.body.name)
  // .then(function(data){
  //   console.log(data)
  // })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});




