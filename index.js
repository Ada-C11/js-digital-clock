$(document).ready(function(){

    const tickTock = function tickTock() {
        const time = new Date();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
            'January', 
            'February', 
            'March', 
            'April', 
            'May', 
            'June', 
            'July', 
            'August', 
            'September', 
            'October', 
            'November', 
            'December'
        ];

        const timeZone = function timeZone(city, offset) {
            let localTime = time.getTime();
            let localOffset = time.getTimezoneOffset() * 60000;
            let utc = localTime + localOffset;
            let localDate = new Date(utc + (3600000*offset));
            let h = localDate.getHours();
            let m = ((localDate.getMinutes()<10?'0':'') + localDate.getMinutes())
            let s = ((localDate.getSeconds()<10?'0':'') + localDate.getSeconds())
            let clock = `${h}:${m}:${s}`;
            let date = `${weekdays[localDate.getDay()]}, ${months[localDate.getMonth()]} ${localDate.getDate()}, ${localDate.getFullYear()}`;
            return `<p class='city'>${city}:</p><p>${clock}</p><p class='date'>${date}</p>`;
        }
        $('#clock').html(timeZone('Seattle', '-7'));
        $('#clock2').html(timeZone('Bora Bora', '-10'));
        $('#clock3').html(timeZone('Kirkenes', '+2'));
        $('#clock4').html(timeZone('Singapore', '+8')); 
    }
    setInterval(tickTock, 1000);
});