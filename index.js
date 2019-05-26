function clock() {
  let now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  $("#clock").text(`${time}`);
}

window.setInterval(clock, 500);

//Create a function which will do all of the work to calculate and show the time
//Update your clock to have world clock functionality which will show four different clocks in four different timezones of your choice
//Update your clock to show the full date with the day of the week, and the month, day and year
