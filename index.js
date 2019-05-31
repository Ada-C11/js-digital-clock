function clock() {
  let now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  const dayIndex = now.getDay();
  const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const dayOfMonth = now.getDate();
  const monthIndex = now.getMonth();
  const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const year = now.getFullYear();
  const date = `${dayNames[dayIndex]} ${monthNames[monthIndex]} ${dayOfMonth} ${year}`;

  $("#date").text(`${date}`);
  $("#clock").text(`${time}`);
}
window.setInterval(clock, 500);

function setColor(color){
  ['clock', 'date'].forEach(function(element) {
    document.getElementById(element).style.color = color;
  })
  // document.getElementById('color').style.color = color;
}

function setAllignment(textAlign){
  ['clock', 'date'].forEach(function(element) {
    document.getElementById(element).style.textAlign = textAlign;
  })
  // document.getElementById('clock').style.textAlign = textAlign;
  // document.getElementById('clock').style.textAlign = textAlign;
}

//jquery way
function setText(fontFamily){
  ['#clock', '#date'].forEach(function(element){ 
    $(element).css('font-family', fontFamily);
  })
}