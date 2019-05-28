// Your code here
const padNum = (num) => {
    result= (num < 10) ?  '0' + num.toString() : num.toString();
    return result;
};

const displayTime = () => {
    const currTime = new Date(Date.now());
    let hours = currTime.getHours();
    let timePeriod = (currTime.getHours() > 12) ? " PM": " AM";
    if ($('#clock').hasClass("12-hour")){
        hours = padNum(hours % 12);
    } else {
        hours = padNum(hours);
    }
    let currTimeString = `${hours} ` +
    `: ${padNum(currTime.getMinutes())} : ${padNum(currTime.getSeconds())}`;
 
    if ($('#clock').hasClass("12-hour")) {
        currTimeString += timePeriod;
    }
    $('#clock').html(currTimeString);
    return currTimeString;
};

$(document).ready(function() {
    setInterval(displayTime, 1000);
    clock = $('#clock');
    $("#colors").on('click', 'button', function(event) {
        clock.removeClass("black white yellow");
        clock.addClass($(this).attr('class'));
    });
    $("#alignment").on('click', 'button', function(event) {
        clock.removeClass("left right center");
        clock.addClass($(this).attr('class'));
    });
    $("#font").on('click', 'button', function(event) {
        clock.removeClass("monospace serif sans-serif");
        clock.addClass($(this).attr('class'));
    });
    $("#toggle-hours").click( function(event) {
        if ($(clock).hasClass("12-hour")) {
            $(clock).removeClass('12-hour');
            $(this).html("12 Hour Mode");
        } else {
            $(clock).addClass('12-hour');
            $(this).html("24 Hour Mode");
        }
    });
});