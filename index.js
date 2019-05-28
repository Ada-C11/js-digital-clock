// Your code here


$(document).ready(function() {
    // answer that works
    const placeHolding = setInterval(timer, 1000);

    function timer() {
        let d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
          $("#clock").html(d.toLocaleTimeString());
      }

    // answer that works for a static clock
    // const time = function time() {
    //     let date = new Date();
    //     return date.toLocaleTimeString()
    // }
    // let p = $(`<p>${time()}</p>`);
    // $('#clock').html(p);

    // another static clock that works
    // let d = new Date();
    // let p = $(`<p>${d.toLocaleTimeString()}</p>`);
    // $('#clock').html(p);
      
    // a non static one that works as well 
    // const timerId = setInterval(time, 1000);
    // const time = function time() {
    //     let d = new Date();
//     $('#clock').html(d.toLocaleTimeString());
// }

    // yet this below doesn't work
    // const timerId = setInterval(time, 1000);

    // const time = function time() {
    //     let d = new Date();
    //     let p = $(`<p>${d.toLocaleTimeString()}</p>`);
    //     $('#clock').html(p);
    // }
});



// $(document).ready(function() {
//     let p = $(`<p>${time}</p>`);

// why does this just display the function time() { let date = new Date(); return date }