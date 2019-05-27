// Your code here
// let string = "hi";
// let date = new Date().toLocaleTimeString();

const fetchLocalTime = function fetchTime() {
  let date = new Date;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  date = date.toDateString();

  let time = `${hour}:${minutes}:${seconds}`;
  let displayTime = time;

  $(".local-time").html(displayTime);
  $(".local-date").html(date);
}

const fetchAsiaTime = function fetchAsiaTime() {
    let asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    asiaTime = new Date(asiaTime);
    let asiaDate = asiaTime.toDateString();

    let hour = asiaTime.getHours();
    let minutes = asiaTime.getMinutes();
    let seconds = asiaTime.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;

    $('.tokyo-time').html(time);
    $(".tokyo-date").html(asiaDate);
}

const fetchEuropeTime = function fetchEuropeTime() {
    let europeTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    europeTime = new Date(europeTime);
    let europeDate = europeTime.toDateString();

    let hour = europeTime.getHours();
    let minutes = europeTime.getMinutes();
    let seconds = europeTime.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;

    $('.london-time').html(time);
    $(".london-date").html(europeDate);
}

const fetchNewYorkTime = function fetchNewYorkTime() {
    let newYorkTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    newYorkTime = new Date(newYorkTime);
    date = newYorkTime.toDateString();

    let hour = newYorkTime.getHours();
    let minutes = newYorkTime.getMinutes();
    let seconds = newYorkTime.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;

    $('.new-york-time').html(time);
    $(".new-york-date").html(date);
}


const intervalID = setInterval(function () {
    fetchLocalTime();
    fetchAsiaTime();
    fetchEuropeTime();
    fetchNewYorkTime();
}, 1000);
