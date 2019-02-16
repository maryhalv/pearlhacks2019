var firstname;
var lastname;

 $(document).ready(function () {

            startRemember();

        });

function startRemember(){

    console.log('reached');

    $('body').append(getTime());
    $('body').append(getDate());

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

fucntion getDate() {
  var m = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("demo").innerHTML = months[m.getMonth()];
  var d = new Date();
  document.getElementById("demo").innerHTML = d.getDay();
  var y = new Date();
  document.getElementById("demo").innerHTML = y.getFullYear();
  return (m + " " + d + ", " + y);
}

function getTime() {
  var hour = new Date();
  document.getElementById("demo").innerHTML = hour.getHours();
  var minutes = new Date();
  document.getElementById("demo").innerHTML = minutes.getMinutes();
  return (hour + ":" + minutes);
}
