$(document).ready(function() { 
    const zero = number => {
        if (number.toString().length === 1) {
            number = "0" + number;
        }
        return number;
    }

    const clock = () => {
    let current = new Date();
    const hour = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    return $('#clock').text(`${hour}:${zero(minutes)}:${zero(seconds)}`);
    }
    
    const interval = window.setInterval(clock, 500);
      
    module.exports = index;
});
