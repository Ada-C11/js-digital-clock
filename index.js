// Your code here


$(document).ready(function() {
    // my earlier thing didn't work because OF HOISTING
    // when I had a const timez = function timez() I was calling timez that was calling the function itself (block of code)
    // instead of timez() which would be invoking it, and the reason it worked in the other one was because just function gets
    // hoisted up, but my one with the cosnt (HOW WE WERE TOLD TO DO IT) needs to be below the function, cause the const is
    // is that considered lazy loaded?
    window.setInterval(timer, 1000);

    function timer() {
      let d = new Date();
      $('#clock-face').text(d.toLocaleTimeString());
    }

    const butts = ['Lavender', 'MediumPurple', 'DarkSlateBlue', 'left', 'center', 'right']
    // string.substring(1) would get rid of the first character

    butts.forEach(function(butt) {
        $( "#clock" ).append( `<button type=\"button\" class=\"btn btn-primary\" id=\"` + butt + `\">` + butt + `</button>`);
        let classy = `#` + butt;
        $(classy).click( function(event) {
            $('#clock-face').css('color', butt);
            $('#clock-face').css('text-align', butt);
        });
    }
    
    )

    // similar to mine but better structure from Elise
    // $('#buttons').on('click', 'button', function() {
    //     $('#clock').css('color', $(this).css('background-color'));
    //   });
    
    //   const colors = ['blue', 'green', 'orange'];
    
    //   for (let i = 1; i <= 3; i++) {
    //     $('#buttons').append($('<button>'));
    //     $('button').addClass('btn btn-lg');
    //     $(`#buttons button:nth-child(${i})`).css('background-color', colors[i - 1]);
    //   }
    // below is Jessica's, with some stuff taken out, and all the buttons were pyhsically added to the html file, and one little css thing
    // $(document).ready(function () {
    //     const getTime = (isTwelveHour, timeZone) => {
    //       const dateNow = new Date(Date.now());
      
    //       const options = {
    //         hour12: isTwelveHour,
    //         timeZone: timeZone
    //       }
      
    //       const fullTime = dateNow.toLocaleTimeString('en-US', options);
      
    //       return `${fullTime}`;
    //     }
      
    //     const getDate = (timeZone) => {
    //       const dateNow = new Date(Date.now());
      
    //       const options = {
    //         weekday: 'short',
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //         timeZone: timeZone
    //       };
      
    //       const fullDate = dateNow.toLocaleDateString('en-US', options);
      
    //       return `${fullDate}`;
    //     }
      
    //     const tickClock = () => {
    //       $('#clock').html(`<p>${getTime(isTwelveHour, timeZone)} <div class="date">${getDate()}</div></p>`);
    //     }
      
    //     setInterval(tickClock, 1000);
      
    //     let isTwelveHour = true;
    //     let timeZone = "America/Los_Angeles";
    //     tickClock(isTwelveHour, timeZone);
      
    //     $('.button-green').click(() => {
    //       $('#clock').removeClass().addClass('green')
    //     });
      
      
    //     $('.button-left').click(() => {
    //       $('#clock').css({
    //         "text-align": "left"
    //       })
    //     });
      
    //     $('.button-font-1').click(() => {
    //       $('#clock').css({
    //         "font-family": "Courier"
    //       })
    //     });
      
    //     $('.toggle-time').click(() => {
    //       if (isTwelveHour) {
    //         isTwelveHour = false;
    //       } else {
    //         isTwelveHour = true;
    //       }
    //       tickClock(isTwelveHour, timeZone);
    //     });
      
    //     $('.pst').click(() => {
    //       timeZone = "America/Los_Angeles";
    //       tickClock(isTwelveHour, timeZone);
    //       $('.est').removeClass('active');
    //       $('.pst').addClass('active');
    //     });
      
    //     $('.est').click(() => {
    //       timeZone = "America/New_York";
    //       tickClock(isTwelveHour, timeZone);
    //       $('.pst').removeClass('active')
    //       $('.est').addClass('active')
    //     });
    //   })



    
    // $('#align-buttons').on('click', 'button', function(event) {
    //     $('#clock').css('text-align', `${$(this).html()}`);
    //   });

    // $('#Lavender').click( function(event) {
    //     $('#clock-face').css('color', 'Lavender')
    // });

    // $('#MediumPurple').click( function(event) {
    //     $('#clock-face').css('color', 'MediumPurple')
    // });

    // $('#DarkSlateBlue').click( function(event) {
    //     $('#clock-face').css('color', 'DarkSlateBlue')
    // });

    
    // $( "#clock" ).append( "<button type=\"button\" class=\"btn btn-primary\" id=\"left\">LEFT</button>" );
    // $( "#clock" ).append( "<button type=\"button\" class=\"btn btn-primary\" id=\"center\">CENTER</button>" );
    // $( "#clock" ).append( "<button type=\"button\" class=\"btn btn-primary\" id=\"right\">RIGHT</button>" );

    // $('#left').click( function(event) {
    //     $('#clock-face').css('text-align',`${$(this).html()}`);
    // });

    // $('#center').click( function(event) {
    //     $('#clock-face').css('text-align','center');
    // });

    // $('#right').click( function(event) {
    //     $('#clock-face').css('text-align','right');
    // });

    // <button type="button" class="btn btn-primary" id="Lavender">Lavender</button>
    // <button type="button" class="btn btn-primary" id="MediumPurple">MediumPurple</button>
    // <button type="button" class="btn btn-primary" id="DarkSlateBlue">DarkSlateBlue</button>
    // $('#clock').on('click', 'li', function(event) {
    //     alert(`Got a click on an <li> containing "${$(this).html()}"`);
    //   });
    
    //   $('#clock').append($('<li>Herbie Hancock</li>'));

});


