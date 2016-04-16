var allBeers = require('../views/allBeers.hbs');
var beerProfile = require('../views/beerProfile.hbs');
var handlebars = require('handlebars');
var request = require('superagent');
var $ = require('jquery');


$(document).ready(function(){
  $('#showBtn, #backBtn').click(function () {
  showAllBeers()
  }) // close listener
}) // close document ready
// close homePage function()


function showAllBeers() {
  request
  .get('http://localhost:3000/api/v1/beers')
  .end(function(err, res){
    document.body.innerHTML = allBeers({ beers: res.body });
    $('.myBtn').click(function(){
      // console.log('this is this: ', this, 'this is $this', $(this))
      getAndShowProfile($(this).data("id"))
    }) // close click listener
  }) // close end
}

function getAndShowProfile(id) {
  request
  .get('http://localhost:3000/api/v1/beers/'+id)
  .end(function(err, res){
    var htmlFromTemplate = beerProfile(res.body)
    // $('body').html(htmlFromTemplate)
    document.body.innerHTML = htmlFromTemplate;
    $('#backBtn').click(function(){
      // console.log('back button')
      showAllBeers()
    })
  });

}
