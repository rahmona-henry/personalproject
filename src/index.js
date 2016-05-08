var allBeers = require('../views/allBeers.hbs');
var beerProfile = require('../views/beerProfile.hbs');
var addNewBeer = require('../views/addNewBeerProfile.hbs')
var beerList = require('../views/beerList.js')
var handlebars = require('handlebars');
var request = require('superagent');
var $ = require('jquery');


$(document).ready(function(){
  $('#showBtn').click(function () {
  showAllBeers()
  })
})

function showAllBeers() {
  request.get('/allBeers')
  .end(function(err, res){
    console.log('this is res.body',res.body[0].name)
    var list = allBeers({beer:res.body})
    document.body.innerHTML = list
    // var list = beerList(res.body,'#content')
    // $('#content').html(list)
      $('.viewBtn').click(function(){
      getAndShowProfile()
    })
  })
}

function getAndShowProfile(id) {
  request.get('/beers/'+id)
  .end(function(err, res){
    var htmlFromTemplate = beerProfile(res.body)
    document.body.innerHTML = htmlFromTemplate;
    $('#backBtn').click(function(){
      showAllBeers()
    })
  })
}
