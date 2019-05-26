// Your code here
// let string = "hi";
// let date = new Date().toLocaleTimeString();

// $('.asia-time').append("HEllo");

const fetchLocalTime = function fetchTime() {
  let date = new Date;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let time = `${hour}:${minutes}:${seconds}`;
  let displayTime = time;

  $(".local-time").html(displayTime);
}

const fetchAsiaTime = function fetchAsiaTime() {
    let asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    asiaTime = new Date(asiaTime);

    let hour = asiaTime.getHours();
    let minutes = asiaTime.getMinutes();
    let seconds = asiaTime.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;

    $('.tokyo-time').html(time);
}

const fetchEuropeTime = function fetchEuropeTime() {
    let europeTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    europeTime = new Date(europeTime);

    let hour = europeTime.getHours();
    let minutes = europeTime.getMinutes();
    let seconds = europeTime.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;

    $('.london-time').html(time);
}


const intervalID = setInterval(function () {
    fetchLocalTime();
    fetchAsiaTime();
    fetchEuropeTime();
    // functionB();
}, 1000);
