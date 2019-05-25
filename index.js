// Your code here
$(document).ready(function() {
  setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds;
    $('#clock').html(time);
}, 1000);
});