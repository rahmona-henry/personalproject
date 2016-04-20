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
  // }) //close listener
  // $('#addBtn').click(function () {
  // addBeer()
  // $('#searchBtn').click(function () {
  // searchBeer()
  }) // close listener
}) // close document ready
// close homePage function()


function showAllBeers() {
  request
  .get('/beers')
  .end(function(err, res){
    document.body.innerHTML = allBeers({ beers: res.body })
    $('.viewBtn').click(function(){
      getAndShowProfile($(this).data("id"))
    }) // close click listener
  }) // close end
} //close function showAllBeers

function getAndShowProfile(id) {
  request
  .get('/beers/'+id)
  .end(function(err, res){
    var htmlFromTemplate = beerProfile(res.body)
    document.body.innerHTML = htmlFromTemplate;
    $('#backBtn').click(function(){
      showAllBeers()
    }) // close click listener
  }) // close end
} //close function getAndShowProfile

// function createNewBeer(givenName, givenDate, givenStyle, givenRecipe) {
//   var newBeer = {}
//   newBeer.name = givenName
//   newBeer.date = givenDate
//   newBeer.style = givenStyle
//   newBeer.recipe = givenRecipe
//   return newBeer
// }

// fs.readFile('beer.js', utf8, function (err,data){

//   var dataObject = JSON.parse(data)
//   var obj = createNewBeer(req.body[0].value, req.body[1].value, req.body[2].value, req.body[3].value)

//   fs.writeFile('beer.js', JSON.stringify(dataToSave),function(err){
//     if (err) {
//       console.log('oh nooo error')
//     } //close if
//     else{
//       console.log('ok')
//     } //close else
//   }) //close fswrite )}
// }) //close fs.read )}








