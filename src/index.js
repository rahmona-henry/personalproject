var allBeers = require('../views/allBeers.hbs')
var beerProfile = require('../views/beerProfile.hbs')


request
  .get('http://localhost:3000/api/v1/beers')
  .end(function(err,res){
    document.body.innerHTML = allBeers({beers: res.body});
  })
