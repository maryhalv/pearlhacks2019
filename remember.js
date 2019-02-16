var firstname;
var lastname;

 $(document).ready(function () {

            startRemember();

        });

function startRemember(){

    console.log('reached');

    $('body').append(startTime());

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
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
