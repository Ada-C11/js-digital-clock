const clock = () => {
  let time = new Date();
  let nowHours = time.getHours();
  if (nowHours < 10) {
  nowHours = 0 + `${nowHours}`;
  }

  let nowMinutes = time.getMinutes();
  if (nowMinutes < 10) {
    nowMinutes = 0 + `${nowMinutes}`;
    }

  let nowSeconds = time.getSeconds();
  if (nowSeconds < 10) {
    nowSeconds = 0 + `${nowSeconds}`;
    }

  let currentTime = `${nowHours}` + ':' + `${nowMinutes}` + ':' + `${nowSeconds}`;
  let localTime = new Date();
  document.getElementById("clock").innerHTML = currentTime;
  
  if ($("#clock").hasClass("military")) {
    document.getElementById("clock").innerHTML = currentTime;
  } else {
    document.getElementById("clock").innerHTML = `${localTime.toLocaleTimeString()}`;
    }
  }

setInterval(clock, 1000);

$("button").click( function() {
  if ($(this).hasClass('black')) {
    if ($("#clock").hasClass("red")) {
      $("#clock").removeClass("red");
    } else if ($("#clock").hasClass("orange")) {
      $("#clock").removeClass("orange"); 
    };
    $("#clock").addClass('black'); 
  };

  if ($(this).hasClass('orange')) {
    if ($("#clock").hasClass("red")) {
      $("#clock").removeClass("red");
    } else if ($("#clock").hasClass("black")) {
      $("#clock").removeClass("black"); 
    };
    $("#clock").addClass('orange'); 
  };

  if ($(this).hasClass('red')) {
    if ($("#clock").hasClass("orange")) {
      $("#clock").removeClass("orange");
    } else if ($("#clock").hasClass("black")) {
      $("#clock").removeClass("black"); 
    };
    $("#clock").addClass('red'); 
  };

  if ($(this).hasClass('left')) { 
    $("#clock").removeClass('right');
    $("#clock").addClass('left'); 
  };

  if ($(this).hasClass('right')) { 
    $("#clock").removeClass('left');
    $("#clock").addClass('right'); 
  };

  if ($(this).hasClass('arial')) { 
    $("#clock").removeClass('courier');
    $("#clock").addClass('arial'); 
  };

  if ($(this).hasClass('courier')) { 
    $("#clock").removeClass('arial');
    $("#clock").addClass('courier'); 
  };

  if ($(this).hasClass('change-display')) { 
    $("#clock").toggleClass('military');
  };

})