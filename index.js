const clock = () => {
  let time = new Date();
  let nowHours = time.getHours();
  let nowMinutes = time.getMinutes();
  let nowSeconds = time.getSeconds();
  let currentTime = `${nowHours}` + ':' + `${nowMinutes}` + ':' + `${nowSeconds}`;
  document.getElementById("clock").innerHTML = currentTime;
}

setInterval(clock, 1000);