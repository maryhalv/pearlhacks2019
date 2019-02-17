$(document).ready(function () {
    $('.header').height($(window).height());
    getNames();
});

function getNames() {
    var first;
    var place;

    //$('#closebtn').addEventListener("click", addToDo);
    
     document.getElementById("closebtn").addEventListener("click", addToDo);
     
    var today = new Date();
    today.toDateString();
    $('#age').empty();
    $('#age').append('Today is ' + today);
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

       chrome.storage.local.get(['place'], function(result) {

          //  $('.info').append("<h4 id = 'place'>Feeling scared? Call " + result.num + "</h4>");
          place = result.place;
          console.log('Was born in ' + result.place);
        });

        chrome.storage.local.get(['year'], function(result) {

            $('.info').append("<h4 id = 'year'>You were born in " + place + " in the year " + result.year +  ".</h4>");
          console.log('Was born in the year ' + result.year);
        });

      chrome.storage.local.get(['num'], function(result) {

            $('.info').append("<h5 id = 'number'>Feeling scared? Call " + result.num + "</h5>");
          console.log('Emergency contact number is ' + result.num);
        });

}

function addToDo() {
    $('#myUL').append('<dt>' + document.getElementById('input').value +' </dt>');
    
   /* chrome.storage.local.set({listitems: document.getElementById('input2').value}, function() {
          console.log('Value is set to ' + document.getElementById('first').value);
        }); */
}

function removeToDo () {
    
}