$(document).ready(function(){

    const tickTock = function tickTock() {
        const time = new Date();

        const timeZone = function timeZone(city, offset) {
            const localTime = time.getTime();
            const localOffset = time.getTimezoneOffset() * 60000;
            const utc = localTime + localOffset;
            const localDate = new Date(utc + (3600000*offset));
            const h = ((localDate.getHours()<10?'0':'') + localDate.getHours());
            const m = ((localDate.getMinutes()<10?'0':'') + localDate.getMinutes());
            const s = ((localDate.getSeconds()<10?'0':'') + localDate.getSeconds());
            const clock = `${h}:${m}:${s}`;
            const date = `${localDate.toDateString()}`;
            return `<p class='city'>${city}:</p><p>${clock}</p><p class='date'>${date}</p>`;
        }
        $('#clock').html(timeZone('Seattle', '-7'));
        $('#clock2').html(timeZone('Bora Bora', '-10'));
        $('#clock3').html(timeZone('Kirkenes', '+2'));
        $('#clock4').html(timeZone('Singapore', '+8')); 
    }
    setInterval(tickTock, 1000);

    const buttons = ['lavender', 'rose', 'ecru', 'left', 'center'];

    buttons.forEach( name => {
        $(`.${name}__button`).click(function() {
            $('#clock').removeClass().addClass(name);
        })
    })
    
    $('.courier').click(function() {
        $('#clock').removeClass().addClass('courier');
    })

    $('.digital').click(function() {
        $('#clock').removeClass().addClass('digital');
    })
});

// $(document).ready(function() {
// $('ul').on('click', 'li', function() {
//     alert(`Clicked on ${(this).html()}`);
// })
// for (let i = 0; i < 5; i++) {
//     let listItem = $('<li>' + i + '</li>');
//     $('.dynamic-list').append(listItem);
// }
// });


// const COLORS = ['blue', 'green', 'orange'];
// let colorIndex = 0;

// const nextColor = function nextColor() {
//   let color = COLORS[colorIndex];
//   colorIndex += 1;
//   colorIndex %= COLORS.length;
//   return color;
// };

// $(document).ready(function() {
//   $('body').keydown((event) => {
//     if (event.key === ' ') {
//     let color = nextColor();
//     $('#color-box').removeClass();
//     $('#color-box').addClass(color);
//   }
// }
// )}); 


// const pixels = [
//     0,0,0,0,0,0,0,1,0,0,1,0,0,
//     0,0,0,0,0,0,1,0,0,1,0,0,0,
//     1,1,0,0,0,0,0,0,0,0,
//   ];
  
  
//   $(document).ready( () => {
//     const container = $('.pixels__container');
//     pixels.forEach((pixel) => {
//       const div = $('<div>');
//       if (pixel === 1) div.addClass('on');
//       if (pixel === 0) div.addClass('off');
//       container.append(div);       
//     });
  
//   });


// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const months = [
//             'January', 
//             'February', 
//             'March', 
//             'April', 
//             'May', 
//             'June', 
//             'July', 
//             'August', 
//             'September', 
//             'October', 
//             'November', 
//             'December'
//         ];

// const date = `${weekdays[localDate.getDay()]} ${months[localDate.getMonth()]} ${localDate.getDate()}, ${localDate.getFullYear()}`;
