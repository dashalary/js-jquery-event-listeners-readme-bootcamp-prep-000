function getIt() {
  $('p').on('click', function() {
   alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    alert('img' + '.tasty')
  })
}



$(document).ready(function(){

// call functions here

});
