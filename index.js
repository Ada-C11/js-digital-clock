// Your code here
const displayTime = () => {
    const currTime = new Date(Date.now());
    const currTimeString = `${currTime.getHours()} : ${currTime.getMinutes()} : ${currTime.getSeconds()}`;
    $('#clock').html(currTimeString);
    return currTimeString;
};
$(document).ready(function() {
    setInterval(displayTime, 1000);
});
