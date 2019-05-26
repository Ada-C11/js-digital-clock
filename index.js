$(document).ready(() => {

  const digitalClock = () => {
    let currentTime = new Date();
    let month = currentTime.getMonth();
    let date = currentTime.getDate();
    let year = currentTime.getFullYear();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day = weekday[currentTime.getDay()];
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let amPm = "AM";

    if (hour === 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour = hour - 12;
      amPm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let dayOfWeek = document.getElementById('day-of-week')
    let fullDateContainer = document.getElementById('full-date');
    let clockContainer = document.getElementById('clock-display');
    dayOfWeek.innerText = day;
    fullDateContainer.innerText = month + " " + date + " " + year;
    clockContainer.innerText = hour + ":" + minute + ":" + second + " " + amPm;

    setInterval(digitalClock, 1000);
  }
  digitalClock();
});

