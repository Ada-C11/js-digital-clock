// Your code here
$(document).ready(function() {
  const clock = function clock() {
    let date = new Date();
    const weekday =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']  

    const calcTime = function calcTime(city, offset) {
      let localTime = date.getTime();
      let localOffset = date.getTimezoneOffset() * 60000;
      let utc = localTime + localOffset;
      let localDate = new Date(utc + (3600000*offset));

      return  `${city}: ${weekday[localDate.getDay()]}, ${localDate.toLocaleString()}`;
    }

    $('#clock1').html(calcTime('Seattle', '-7'));
    $('#clock2').html(calcTime('Paris', '+2'));
    $('#clock3').html(calcTime('Sydney', '+10'));
    $('#clock4').html(calcTime('Tokyo', '+9'));  
  }
  setInterval(clock, 1000);
});
