var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]


//asign a random number from the array to each card
//when user clicks on card, return the value 
//when user clicks on another card, return the value 
//do the values match? 
//if yes, remove
//if no, no values are removed

var cards = $('.card')

cards.on('click', function(){
  $(this).append(values.splice(Math.floor(Math.random() * values.length ), 1))
})





