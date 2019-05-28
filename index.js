// Your code here
// console.log("this is a test")


 
function updateClock() {
  let clockNow = document.getElementById('clock');
  let now = new Date(Date.now())
  let min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
  let second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()
  let clockTime = hour + ":" + min + ":" + second
  clockNow.innerHTML = clockTime
}


setInterval(updateClock, 1000);
