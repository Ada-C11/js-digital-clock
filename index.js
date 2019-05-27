
$(document).ready(function () {
  setAllClocks()
  setInterval(setAllClocks, 1000)

});

function setClock(timeZone, city) {
  let now = new Date().toLocaleString('en-US', { timeZone });

  $(`#clock-${city}`).html(`${now}`)

}

function setAllClocks() {
  setClock('America/Los_Angeles', 'seattle')
  setClock('Africa/Accra', 'accra')
  setClock('Asia/Tokyo', 'tokyo')
  setClock('America/Toronto', 'toronto')

}


  







