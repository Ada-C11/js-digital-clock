// Your code here
$(document).ready(function() {
  setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ':' + minutes + ':' + seconds;
    $('#clock').html(time);
}, 1000);
});