// Your code here
const findTime = () => { 
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    document.getElementById('clock').innerHTML = formattedTime;
}

setInterval(findTime, 1000);

$('button').click( function () {
    if ($(this).hasClass('color')) {
        $('#clock').removeClass('purple pink red');
    } else if ($(this).hasClass('alignment')) {
        $('#clock').removeClass('left center right');
    } else if ($(this).hasClass('font')) {
        $('#clock').removeClass('helvetica courier comic');
    }
    $('#clock').addClass(this.getAttribute("class"));
})

