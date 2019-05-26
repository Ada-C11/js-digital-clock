function clock() {
  let now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  const dayIndex = now.getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfMonth = now.getDate();
  const monthIndex = now.getMonth();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = now.getFullYear();
  const date = `${dayNames[dayIndex]} ${monthNames[monthIndex]} ${dayOfMonth} ${year}`;

  $("#date").text(`${date}`);
  $("#clock").text(`${time}`);
}

window.setInterval(clock, 500);
