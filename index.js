$(document).ready(function() { 
    const zero = number => {
        if (number.toString().length === 1) {
            number = "0" + number;
        }
        return number;
    }

    const twelveHour = time => {
        time = time % 12;
        time = time ? time : 12;
        return time;
    }

    const clock = () => {
    const current = new Date();
    const hour = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    return $('#clock').text(`${twelveHour(hour)}:${zero(minutes)}:${zero(seconds)}`);
    }
    
    const interval = window.setInterval(clock, 500);
      
    module.exports = index;
});
