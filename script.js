
// login

document.getElementById("login").addEventListener("click", function(){
document.getElementById("login-form").style.display = "block";
document.getElementById("login-overlay").style.display = "block"

document.getElementById("form-close").addEventListener("click",function(){
document.getElementById("login-form").style.display =  "none";
document.getElementById("login-overlay").style.display = "none"
})
})
 


// slider

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));

  // Make sure index is within the bounds of the slides array
  if (index >= slides.length) {
    currentSlide = 0; // Go back to the first slide
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Go to the last slide
  } else {
    currentSlide = index;
  }

  // Show the current slide
  slides[currentSlide].classList.add('active');
}

// Show next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Show previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);

//   Automatic slide change every 3 seconds
setInterval(() => {
  nextSlide();
}, 10000);
 
 