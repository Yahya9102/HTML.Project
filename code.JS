

const images = document.querySelectorAll('#room1, #room2, #room3, #room4');
const url = 'http://127.0.0.1:5500/booking.HtML';

images.forEach(function(image) {
  image.addEventListener('click', function() {
    window.location.href = url;
  });
});






  function toggleMenu() {
  

    var menu = document.querySelector('.menu');
   const opEl = document.getElementById('linkbackground')

   
    if (menu.style.display === "none") {
      menu.style.display = "block";
      opEl.style.opacity = "60%";
     
    } else {
      menu.style.display = "none";
      opEl.style.opacity = "0%";
    
    }
    
    

  
 

   }











