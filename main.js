const navbar = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
  hamburger.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImage = 0;

function slideImages() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(slideImages, 3000); // change image every 3 seconds

//Registration button
const registerBtn=document.getElementById("registerBtn");
registerBtn.addEventListener('click', function(){
window.location.href="Registration.html";
});