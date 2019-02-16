var firstname;
var lastname;

 $(document).ready(function () {
            
            startRemember();
            
        });

function startRemember(){
    
    console.log('reached');
    
    $('.questions').append("<p>What is your first name?</p>");
    $('body').append("<form><input id='first' type = 'text'></input></form>");
    
    $('body').append("<p>What is your last name?</p>");
    $('body').append("<form><input id='last' type = 'text'></input></form>");
    
    $('body').append("<button onclick = ''>Enter Information</button>");
    
   $.ajax({
            url: 'https://github.com/maryhalv/pearlhacks2019/blob/master/manifest.json',
  type: 'GET',
  dataType: 'json',
   success: (response) => {
               let first = response.person.firstname;
               let last = response.person.lastname;
                 
                 if (first.localeCompare('empty') === 0 && last.localeCompare('empty') === 0) {
 $.ajax({
    url: 'https://github.com/maryhalv/pearlhacks2019/blob/master/manifest.json',
    type: 'POST',
  dataType: 'json',
  person: {
    "firstname": document.getElementById('first').value,
    "lastname": document.getElementById('last').value
  },
   success: () => {
   console.log('success');
  
   }
        });
                 }
               }
            
       }); 
    
    
       
}