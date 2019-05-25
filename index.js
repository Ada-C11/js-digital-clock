// // Your code here
$(document).ready(function () {
    let clock = setInterval(time, 1000)

    function time() {
        let otherTime = new Date().toLocaleTimeString()
        $('#clock').html(otherTime)
    }
    
});

