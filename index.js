// Your code here
console.log("this is a test")


 
function updateClock() {
  let clockNow = document.getElementById('clock');
  let now = new Date(Date.now())
  let min = now.getMinutes()
  let hour = now.getHours()
  let second = now.getSeconds()
  let clockTime = hour + ":" + min + ":" + second
  clockNow.innerHTML = clockTime
}


setInterval(updateClock, 1000);
