// Your code here
// let string = "hi";
// let date = new Date().toLocaleTimeString();
let date = new Date;
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let time = `${hour}:${minutes}:${seconds}`;


$('<p>' + time + '</p>').appendTo('#clock');