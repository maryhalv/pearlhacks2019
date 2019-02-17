var firstname;
var lastname;

$(document).ready(function () {
            /*if(chrome.storage.local.hasOwnProperty('firstname')) {
                        console.log('checked');
                        window.location.href = 'newtab.html';
            } else {
                        startRemember();
            }*/
            chrome.storage.local.get(['firstname'], function(result) {
                                 if(result.hasOwnProperty('firstname')) {
                                         console.log('firstname is' + result.firstname);
                                     window.location.href = 'newtab.html';
                                 }  else {
                                  startRemember();
                                 }
            
        });
            

            
        });

function startRemember(){
    
    console.log('reached');
    
    $('body').append("<p>What is your first name?</p>");
    $('body').append("<div class = 'form-group'><form><input id='first' type = 'text'></input></form></div>");
    
    $('body').append("<p>What is your last name?</p>");
    $('body').append("<div class = 'form-group'><form><input id='last' type = 'text'></input></form></div>");
    
   $('body').append("<p>What is your Emergency Contact number?</p>");
    $('body').append("<div class = 'form-group'><form><input id='num' type = 'text'></input></form></div>");
    
    
    // "firstname": document.getElementById('first').value,
    //"lastname": document.getElementById('last').value
        
    
 //  $('body').append('<p>When were you born?: <input type="text" id="datepicker"></p>');    
    
    $('body').append("<button id ='myButton'>Enter Information</button>");
    
    document.getElementById("myButton").addEventListener("click", assignFields);
    
}

function assignFields() {
    
    
    console.log('reached');
    
    if(document.getElementById('first').value !== null ) {
     chrome.storage.local.set({firstname: document.getElementById('first').value}, function() {
          console.log('Value is set to ' + document.getElementById('first').value);
        });
    }
     
     if(document.getElementById('last').value !== null ) {
     chrome.storage.local.set({lastname: document.getElementById('last').value}, function() {
          console.log('Value is set to ' + document.getElementById('last').value);
        });
     }
     
     if(document.getElementById('num').value !== null ) {
     chrome.storage.local.set({num: document.getElementById('num').value}, function() {
          console.log('Value is set to ' + document.getElementById('num').value);
        });
     }
    
        window.location.href = 'newtab.html';
       
}