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
    
    // "firstname": document.getElementById('first').value,
    //"lastname": document.getElementById('last').value
    
    $('body').append("<button onclick = 'assignFields();'>Enter Information</button>");
    
}

function assignFields() {
    
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

function getTime() {
  var hour = new Date();
  document.getElementById("demo").innerHTML = hour.getHours();
  var minutes = new Date();
  document.getElementById("demo").innerHTML = minutes.getMinutes();
  return (hour + ":" + minutes);
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

fucntion getDate() {
  var m = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("demo").innerHTML = months[m.getMonth()];
  var d = new Date();
  document.getElementById("demo").innerHTML = d.getDay();
  var y = new Date();
  document.getElementById("demo").innerHTML = y.getFullYear();
  return (m + " " + d + ", " + y);
// time (clock and date)
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ startTime() }, 500);
}