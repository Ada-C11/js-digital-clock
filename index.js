// Your code heres
// let date = new Date().toLocaleTimeString();

const fetchLocalTime = () => {
    let date = new Date;

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    date = date.toDateString();
    const time = `${hour}:${minutes}:${seconds}`;
  
    $(".local-time").html(time);
    $(".local-date").html(date);
}

const fetchTokyoTime = () => {
    let tokyoTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    tokyoTime = new Date(tokyoTime);

    const hour = tokyoTime.getHours();
    const minutes = tokyoTime.getMinutes();
    const seconds = tokyoTime.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`;
    const date = tokyoTime.toDateString();

    $('.tokyo-time').html(time);
    $(".tokyo-date").html(date);
}

const fetchLondonTime = () => {
    let londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    londonTime = new Date(londonTime);

    const hour = londonTime.getHours();
    const minutes = londonTime.getMinutes();
    const seconds = londonTime.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`;
    const date = londonTime.toDateString();

    $('.london-time').html(time);
    $(".london-date").html(date);
}

const fetchNewYorkTime = () => {
    let newYorkTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    newYorkTime = new Date(newYorkTime);

    const hour = newYorkTime.getHours();
    const minutes = newYorkTime.getMinutes();
    const seconds = newYorkTime.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`;
    const date = newYorkTime.toDateString();

    $('.new-york-time').html(time);
    $(".new-york-date").html(date);
}

// const helper = function helper(date) {
//     const hour = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     const time = `${hour}:${minutes}:${seconds}`;
//     return time;
// }

const interval = setInterval(() => {
    fetchLocalTime();
    fetchTokyoTime();
    fetchLondonTime();
    fetchNewYorkTime();
}, 1000);
