// Your code here
const padWithZeros = num => {
  if (num < 10) return `0${num}`
  return num;
}

$(document).ready(() => {
  const clock = () => {
    const rightNow = new Date(Date.now());
    const dateString = rightNow.toDateString();
    const formattedDate = `<section>${dateString}</section>`;
    $('#clock').html(formattedDate);

    const hr = padWithZeros(rightNow.getHours());
    const min = padWithZeros(rightNow.getMinutes());
    const sec = padWithZeros(rightNow.getSeconds());
    const formattedTime = `<section>${hr}:${min}:${sec}</section>`;
    $('#clock').append(formattedTime);
  }
  window.setInterval(clock, 1000);
});