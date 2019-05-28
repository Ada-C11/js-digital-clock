$(document).ready(function() {

  setInterval(dateTime, 1000);
  
  function dateTime() {
  const dateTime = new Date();
  const weekday = dayOfTheWeek(dateTime);
  const month = getMonth(dateTime);
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();
  const time = dateTime.toLocaleTimeString();

  $('#clock').html(`<p>${weekday}, ${month} ${date}, ${year}</p> <p>${time}</p>`);
  }

  function dayOfTheWeek(date) {
    const weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday"; 
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[date.getDay()];
  }

  function getMonth(date) {
    const months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    return months[date.getMonth()];
  }
});
