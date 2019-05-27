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

const fetchAsiaTime = () => {
    let asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    asiaTime = new Date(asiaTime);

    const hour = asiaTime.getHours();
    const minutes = asiaTime.getMinutes();
    const seconds = asiaTime.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`;
    const date = asiaTime.toDateString();

    $('.tokyo-time').html(time);
    $(".tokyo-date").html(date);
}

const fetchEuropeTime = () => {
    let europeTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    europeTime = new Date(europeTime);

    const hour = europeTime.getHours();
    const minutes = europeTime.getMinutes();
    const seconds = europeTime.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`;
    const date = europeTime.toDateString();

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

const intervalID = setInterval(() => {
    fetchLocalTime();
    fetchAsiaTime();
    fetchEuropeTime();
    fetchNewYorkTime();
}, 1000);
