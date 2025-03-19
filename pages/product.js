
//  toggle
 
 document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}); 

// login
document.getElementById("login").addEventListener("click", function(){
  document.getElementById("login-form").style.display = "block";
  document.getElementById("login-overlay").style.display = "block"
  
  document.getElementById("form-close").addEventListener("click",function(){
  document.getElementById("login-form").style.display =  "none";
  document.getElementById("login-overlay").style.display = "none"
  })
  })
  

// filter container

function toggleCategory(element) {
    let subcategories = element.nextElementSibling;
    let isOpen = subcategories.style.display === "block";
    subcategories.style.display = isOpen ? "none" : "block";
    element.classList.toggle("open", !isOpen);
  }

  function showMore(element) {
    let extras = element.parentElement.querySelectorAll(".extra");
    extras.forEach(item => item.style.display = "block");
    element.style.display = "none";
  }

//   add to cart

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



// whislist
 


// function addToWishlist(event) {
//   let button = event.target;
  
//   // Pehle se active hai toh remove kar, warna add kar
//   if (button.classList.contains("active")) {
//       button.classList.remove("active");
//   } else {
//       button.classList.add("active");
//   }

//   let rect = button.getBoundingClientRect();

//   for (let i = 0; i < 6; i++) {
//       let heart = document.createElement("div");
//       heart.classList.add("heart");

//       heart.style.left = `${rect.left + window.scrollX + 10}px`;
//       heart.style.top = `${rect.top + window.scrollY + 10}px`;

//       heart.style.setProperty("--x", `${Math.random() * 80 - 40}px`);
//       heart.style.setProperty("--y", `${Math.random() * -60 - 30}px`);

//       document.body.appendChild(heart);
//       setTimeout(() => heart.remove(), 800);
//   }
// }

 

 