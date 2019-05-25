
$(document).ready(function() {
  const time = () => {
    const clock = document.getElementById('clock');

    let d = new Date();
    let s = d.getSeconds();
    let h = d.getHours();
    let m = d.getMinutes();

    return clock.textContent = h + ":" + m + ":" + s;
  }

  window.setInterval(time, 1000);
});
