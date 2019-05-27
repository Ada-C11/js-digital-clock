// Your code here


const updateClock = function updateClock() {
     let currentTime = new Date();
     let londonTime = new Date
     let currentHoures = currentTime.getHours();
     let currentMinutes = currentTime.getMinutes();
     let currentSeconds = currentTime.getSeconds();

     currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
     currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
     let timeOfDay = (currentHoures < 12) ? "AM" : "PM";
     currentHoures = (currentHoures > 12) ? currentHoures - 12 : currentHoures;

     let currentTimeString = currentHoures + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
      
    //  let intervalID = scope.setInterval(new Date(), 1000);
     $('#clock').html(currentTimeString);

    }
    $(document).ready(function() {
      setInterval('updateClock()', 1000);
    })  
 
