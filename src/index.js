var allBeers = require('../views/allBeers.hbs');
var beerProfile = require('../views/beerProfile.hbs');
var addNewBeer = require('../views/addNewBeerProfile.hbs')
var searchBeer = require('../views/search.hbs')
var handlebars = require('handlebars');
var request = require('superagent');
var $ = require('jquery');


$(document).ready(function(){
  $('#showBtn').click(function () {
  showAllBeers()
  }) // close listener
}) // close document ready



function showAllBeers() {
  request.get('/beers')
  .end(function(err, res){
    document.body.innerHTML = allBeers({ beers: res.body })
    $('.viewBtn').click(function(){
      getAndShowProfile($(this).data("id"))
    }) // close click listener
  }) // close end
} //close function showAllBeers

function getAndShowProfile(id) {
  request.get('/beers/'+id)
  .end(function(err, res){
    var htmlFromTemplate = beerProfile(res.body)
    document.body.innerHTML = htmlFromTemplate;
    $('#backBtn').click(function(){
      showAllBeers()
    }) // close click listener
  }) // close end
} //close function getAndShowProfile
