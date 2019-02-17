$(document).ready(function () {
    $('.header').height($(window).height());
    getNames();
});

function getNames() {
    var first;
      chrome.storage.local.get(['firstname'], function(result) {
         first = result;
    
          console.log('Value currently is ' + result.firstname);
        });
      
      chrome.storage.local.get(['lastname'], function(result) {
            $('#name').empty();
            $('#name').append("Hello, " + first.firstname + " " + result.lastname);
          //document.getElementById('name').value = "Hello " +  first + " " + result;
    
          console.log('Value currently is ' + result.lastname);
        });
}
