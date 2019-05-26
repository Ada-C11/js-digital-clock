function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;
  
  document.getElementById("clock").textContent = time;
  
  //call function clock every second
  setInterval(clock, 1000);
}

clock();