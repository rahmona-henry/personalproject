module.exports = function(beers, selector){

  for(var i=0; i<beers.length; i++){
    //console.log(beers)
    var rootElement = document.querySelector(selector)
    var ul = document.createElement('ul')
    rootElement.appendChild(ul)
    document.body.appendChild(ul)
  }


}
