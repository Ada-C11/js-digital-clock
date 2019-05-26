// Your code here
let currentTime = new Date();

let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();

currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
