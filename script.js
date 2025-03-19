
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
}, 3000);
 
//  Add to cart

document.addEventListener("DOMContentLoaded", function () {
  let cartIcon = document.getElementById("cart-count");

  // 🔄 Pehle se saved cart load kare
  let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount(savedCart);

  document.querySelectorAll(".cart-btn").forEach((button) => {
      button.addEventListener("click", function (event) {
          event.preventDefault();

          // 🛒 Product details lena
          let productCard = this.closest(".items-cart");
          let productName = productCard.querySelector(".detail p").textContent;
          let productPrice = productCard.querySelector(".price h6:last-child").textContent;
          let productImage = productCard.querySelector("img").src; // 🔥 Image src le raha hai

          // 🛍 Cart me add karna
          let newItem = { name: productName, price: productPrice, image: productImage };
          savedCart.push(newItem);

          // 📝 Local Storage me save karna
          localStorage.setItem("cart", JSON.stringify(savedCart));

          // 🔄 UI Update karna
          updateCartCount(savedCart);
          
          alert(`"${productName}" added to cart! 🛒`);
      });
  });

  // 🔄 Cart Count Update Function
  function updateCartCount(cartItems) {
      cartIcon.textContent = cartItems.length; // Cart count update kare
  }
});
