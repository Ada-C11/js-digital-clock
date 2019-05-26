

$(document).ready(() => {
  let intervalID = window.setInterval(clock, 1000);
});

const clock = () => {
  let now = new Date();
  let date = now.toDateString();
  let hour = formatZero(now.getHours());
  let min = formatZero(now.getMinutes());
  let sec = formatZero(now.getSeconds());
  console.log(now);
  let dateString = `<div>${date}</div>`;
  let time = `<div>${hour}:${min}:${sec}</div>`;
  $('#clock').html(dateString)
  $('#clock').append(time)
}

const formatZero = (num) => {
   if (num < 10) return `0${num}` ; 
   else return `${num}`;
}