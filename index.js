// Your code here
$(document).ready(function () {
    let clock = setInterval(time, 1000) //will execute the function once every 1 second, just like a digital watch

    function time() {
        let dayTime = new Date().toLocaleTimeString() //only way to create a new JavaScript Date object is to use the new operator
        $('#clock').html(dayTime)
    }
    
});
