$(document).ready(function(){
    function tickTock() {
        const time = new Date();
        let h = time.getHours();
        let m = ((time.getMinutes()<10?'0':'') + time.getMinutes())
        let s = ((time.getSeconds()<10?'0':'') + time.getSeconds())
        let clock = `${h}:${m}:${s}`;
        $("#clock").html(clock);
    }
    setInterval(tickTock, 1000);
});