
$(document).ready(function() {
    const time = () => {
        const clock = document.getElementById('now');
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let now = `${hours}:${minutes}:${seconds}`;
        $('#now').html(time);
        console.log(now);
        return clock
    }
    setInterval(time, 1000);
});