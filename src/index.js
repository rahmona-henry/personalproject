var allBeers = require('../views/allBeers.hbs');
var beerProfile = require('../views/beerProfile.hbs');
var addNewBeer = require('../views/addNewBeerProfile.hbs');
var handlebars = require('handlebars');
var request = require('superagent');
var $ = require('jquery');


$(document).ready(function(){
  $('#showBtn').click(function () {
  showAllBeers()
  }) //close listener
  $('#addBtn').click(function () {
  addBeer()
  }) // close listener
}) // close document ready
// close homePage function()



function showAllBeers() {
  request
  .get('/api/v1/beers')
  .end(function(err, res){
    document.body.innerHTML = allBeers({ beers: res.body })
    $('.viewBtn').click(function(){
      getAndShowProfile($(this).data("id"))
    }) // close click listener
  }) // close end
} //close function showAllBeers

function getAndShowProfile(id) {
  request
  .get('/api/v1/beers/'+id)
  .end(function(err, res){
    var htmlFromTemplate = beerProfile(res.body)
    document.body.innerHTML = htmlFromTemplate;
    $('#backBtn').click(function(){
      showAllBeers()
    }) // close click listener
  }) // close end
} //close function getAndShowProfile

function addBeer() {
  request
  .post('/api/v1/new')
  .end(function(err, res){
    var newBeer = req.body
    newBeer.id = beer.length
    beer.push(newBeer)

})
}

function updateBeerFile(){
  fs.writeFile(__dirname + './beers.json', JSON.stringify(beers), 'utf8', function(err, data){
      if (err) throw err;
      console.log('It\'s saved!');
    });
}


