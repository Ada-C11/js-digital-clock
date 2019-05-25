// Your code here
$(document).ready(() => {
    setInterval(function(){
    let date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    if (minute<10) {
        minute = '0'+ minute
    }
    let seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (hour > 12) {
        hour = hour - 12
    }

    if (hour < 10) {
        hour = '0' + hour
    }

    const content = hour + ":" + minute+ ":" + seconds
    $('#clock').html(content);


}, 1000);
});