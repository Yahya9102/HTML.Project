

const images = document.querySelectorAll('#room1, #room2, #room3, #room4');
const url = 'https://seasidehotel.netlify.app/booking';

images.forEach(function(image) {
  image.addEventListener('click', function() {
    window.location.href = url;
  });
});









function toggleMenu() {
  var menu = document.querySelector('.menu');
  const opEl = document.getElementById('linkbackground');
  const linkbackground = document.getElementById('linkbackground');

  if (menu.style.display === "block") {
    menu.style.display = "none";
    opEl.style.opacity = "0%";
    linkbackground.style.display = "none";
  } else {
    menu.style.display = "block";
    opEl.style.opacity = "60%";
    linkbackground.style.display = "block";
  }
}












   document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();  

    if (document.getElementById('email').checkValidity()) {

      document.getElementById('roombooking').style.display = 'none';
      document.getElementById('confirmation').style.display = 'block';
      

    }
  });
  
  document.getElementById('confirmation').addEventListener('click', function() {

    document.getElementById('roombooking').style.display = 'block';
    document.getElementById('confirmation').style.display = 'none';
    document.querySelector('form').submit();
  });
  


  


  
  
  











