$(document).ready(function(){

    function tickTock() {
        let city = 'Seattle'
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
    
        let h = time.getHours();
        let m = ((time.getMinutes()<10?'0':'') + time.getMinutes())
        let s = ((time.getSeconds()<10?'0':'') + time.getSeconds())
        let clock = `${h}:${m}:${s}`;
        let date = `${weekdays[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
        $("#clock").html(`<p class='city'>${city}:</p><p>${clock}</p><p class='date'>${date}</p>`);
    }
    setInterval(tickTock, 1000);
});