$(document).ready(function() { 
  const clock = () => {
  let current = new Date();
  const hour = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  return $('#clock').text(`${hour}:${minutes}:${seconds}`);
  }
  const interval = window.setInterval(clock, 500);
      
  module.exports = index;
});
