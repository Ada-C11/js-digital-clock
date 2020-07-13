
$(document).ready(function() {
    const time = () => {
        const clock = document.getElementById('clock');
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let now = `${hours}:${minutes}:${seconds}`;
        $('#clock').html(now);
        console.log(now);
        return clock
    }
    setInterval(time, 1000);
});