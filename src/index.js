var allBeers = require('../views/allBeers.hbs');
var beerProfile = require('../views/beerProfile.hbs');
var handlebars = require('handlebars');
var request = require('superagent');
var $ = require('jQuery');

request
.get('http://localhost:3000/api/v1/beers')
.end(function(err, res){

  document.body.innerHTML = allBeers({ beers: res.body });
  $('.myBtn').click(function(event){

    request
    .get('http://localhost:3000/api/v1/beers/'+$(this).data('id'))
    .end(function(err, res){
      $('#profile').html(beerProfile(res.body))

    });
  })

});
