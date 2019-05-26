// Your code here
// let string = "hi";
// let date = new Date().toLocaleTimeString();

const fetchLocalTime = function fetchTime() {
  let date = new Date;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let time = `${hour}:${minutes}:${seconds}`;
  let displayTime = time;

  $(".clock").html(displayTime);
}

// const fetchAsiaTime = function fetchAsiaTime() {
//     let asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
//     asiaTime = new Date(asiaTime);

//     let hour = asiaTime.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     let time = `${hour}:${minutes}:${seconds}`;
//     let displayAsiaTime = time;

//     $(".asia-clock").append(displayAsiaTime);
// }

const intervalID = window.setInterval(fetchLocalTime, 1000);
// const asiaIntervalID = window.setInterval(fetchAsiaTime, 1000);
