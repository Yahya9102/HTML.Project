

const images = document.querySelectorAll('#room1, #room2, #room3, #room4');
const url = 'http://127.0.0.1:5500/booking.HtML';

images.forEach(function(image) {
  image.addEventListener('click', function() {
    window.location.href = url;
  });
});


// const imageEl = document.getElementById("room1","room2","room3","room4")

// imageEl.addEventListener('click',function(){
// window.location.href = "http://127.0.0.1:5500/booking.HtML"
// });
