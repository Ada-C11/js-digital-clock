// Your code here
const padWithZeros = (num) => {
  if (num < 10) return `0${num}`
  return num;
}

$(document).ready(() => {
  const clock = () => {
    const rightNow = new Date(Date.now());
    const dateString = rightNow.toDateString();
    const formattedDate = `<div>${dateString}</div>`;
    $('#clock').html(formattedDate);

    const hr = padWithZeros(rightNow.getHours());
    const min = padWithZeros(rightNow.getMinutes());
    const sec = padWithZeros(rightNow.getSeconds());
    const formattedTime = `<div>${hr}:${min}:${sec}</div>`;
    $('#clock').append(formattedTime);
  }
  window.setInterval(clock, 1000);
});