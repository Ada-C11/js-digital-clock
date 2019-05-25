// Your code here
const clock = function clock() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  // let hours = now.getHours();
  // let minutes = now.getMinutes();
  // let seconds = now.getSeconds();
  // let time;
  // if (hours <= 12){
  //   time = `${hours}:${minutes}:${seconds} AM`
  // } else {
  //   time = `${hours%12}:${minutes}:${seconds} PM`
  // }
  return time
}

const showTime = function showTime(){
  $('#clock').html(clock());
}

setInterval(showTime, 1000);

