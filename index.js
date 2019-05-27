const getCurrentTime = () => {
  const date = new Date;
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')
  const seconds = `${date.getSeconds()}`.padStart(2, '0')
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').innerHTML = time;
}

setInterval(getCurrentTime, 1000);