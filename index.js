// Your code here


$(document).ready(function () {
    let now = new Date();
    $('#clock').html(now.toLocaleTimeString());
    window.setInterval(clockTick, 1000);


});

const clockTick = () => {
    let now = new Date();
    let dayOfWeek = new Date().toLocaleDateString('en-us', { weekday: 'long' }); 



    $('#clock').html(`${now.toLocaleTimeString()} ${dayOfWeek} ${now.getMonth()}/${now.getDay()}/${now.getFullYear()}` );
}

