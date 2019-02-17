var firstname;
var lastname;

$(document).ready(function () {
            
            startRemember();
            
        });

function startRemember(){
    
    console.log('reached');
    
    $('.questions').append("<p>What is your first name?</p>");
    $('body').append("<div class = 'form-group'><form><input id='first' type = 'text'></input></form></div>");
    
    $('body').append("<p>What is your last name?</p>");
    $('body').append("<div class = 'form-group'><form><input id='last' type = 'text'></input></form></div>");
    
    $('body').append("<p>What is your birthdate?</p>");
    $('body').append("<div class = 'form-group'><form><input id='last' type = 'text'></input></form></div>");
    
        $('body').append("<p>Who is your Emergency Contact?</p>");
    $('body').append("<div class = 'form-group'><form><input id='last' type = 'text'></input></form></div>");
    
    // "firstname": document.getElementById('first').value,
    //"lastname": document.getElementById('last').value
    
    $('body').append("<button id ='myButton'>Enter Information</button>");
    
    document.getElementById("myButton").addEventListener("click", assignFields);
    
}

function assignFields() {
    
   window.location.href = 'newtab.html';
    
    console.log('reached');
    
     chrome.storage.local.set({firstname: document.getElementById('first').value}, function() {
          console.log('Value is set to ' + value);
        });
     
     chrome.storage.local.set({firstname: document.getElementById('last').value}, function() {
          console.log('Value is set to ' + value);
        });
      
      
       /*$.ajax({
            url: 'https://maryhalv.github.io/pearlhacks2019/manifest.json',
  type: 'GET',
  dataType: 'json',
   success: (response) => {
    console.log('reached');
    console.log(response.person.firstname);
    console.log(response.person.lastname);
               let first = response.person.firstname;
               let last = response.person.lastname;
                 
                 if (first.localeCompare('empty') === 0 && last.localeCompare('empty') === 0) {
 $.ajax({
    url: 'https://maryhalv.github.io/pearlhacks2019/manifest.json',
    type: 'PUT',
  dataType: 'json',
  data: {
  "person" : {
   "firstname": document.getElementById('first').value,
    "lastname": document.getElementById('last').value
  }
  },
   success: () => {
   console.log('success');
  
   }
        });
                 }
               }
            
       }); */
}