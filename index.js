// Your code here

setInterval(myClock, 1000)

function myClock() {
  let time = new Date();
  let seattleTime = time.toLocaleTimeString()
  document.getElementById('clock').innerHTML =  seattleTime
}

