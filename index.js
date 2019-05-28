// Your code here
const padNum = (num) => {
    result= (num < 10) ?  '0' + num.toString() : num.toString();
    return result;
};

const displayTime = () => {
    const currTime = new Date(Date.now());
    const currTimeString = `${padNum(currTime.getHours())} ` +
    `: ${padNum(currTime.getMinutes())} : ${padNum(currTime.getSeconds())}`;
    $('#clock').html(currTimeString);
    return currTimeString;
};
$(document).ready(function() {
    setInterval(displayTime, 1000);
});
