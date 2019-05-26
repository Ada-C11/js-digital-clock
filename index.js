// Your code here
// let string = "hi";
// let date = new Date().toLocaleTimeString();

const fetchTime = function fetchTime() {
  let date = new Date;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let time = `${hour}:${minutes}:${seconds}`;
  let displayTime = time;

  $("#clock").html(displayTime);
}

const intervalID = window.setInterval(fetchTime, 1000);
