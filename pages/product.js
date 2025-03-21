
//  toggle
 
//  document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("mobile-menu");
//   const navLinks = document.querySelector(".nav-links");
//   menuToggle.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//   });
// }); 

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

 

//  wislish add perfect


// document.addEventListener("DOMContentLoaded", function () {
//   let wishlistIcon = document.getElementById("wishlist-count");

//   let savedwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   updatewishlistCount(savedwishlist);

//   document.querySelectorAll(".wishlist-btn").forEach((button) => {
//       button.addEventListener("click", function (event) {
//           event.preventDefault();

//           let productCard = this.closest(".items-cart");  // ✅ Fixed class name
//           let productName = productCard.querySelector(".detail p").textContent;
//           let productPrice = productCard.querySelector(".price h6:last-child").textContent;
//           let productImage = productCard.querySelector("img").src;

//           let newItem = { name: productName, price: productPrice, image: productImage };

//           let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//           let existingItem = wishlist.find(item => item.name === productName);

//           if (!existingItem) {
//               wishlist.push(newItem);
//               localStorage.setItem("wishlist", JSON.stringify(wishlist));
//               updatewishlistCount(wishlist);
//               alert(`"${productName}" added to wishlist! ❤️`);
//           } else {
//               alert(`"${productName}" is already in wishlist!`);
//           }
//       });
//   });

//   function updatewishlistCount(wishlistItems) {
//       if (wishlistIcon) { // ✅ Null check
//           wishlistIcon.textContent = wishlistItems.length;
//       }
//   }
// });

 

// wishlist perfect

// document.addEventListener("DOMContentLoaded", function () {
//   let wishlistIcon = document.getElementById("wishlist-count");

//   let savedwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   updatewishlistCount(savedwishlist);

//   document.querySelectorAll(".wishlist-btn").forEach((button) => {
//       button.addEventListener("click", function (event) {
//           event.preventDefault();

//           let productCard = this.closest(".items-cart");  
//           let productName = productCard.querySelector(".detail p").textContent;
//           let productPrice = productCard.querySelector(".price h6:last-child").textContent;
//           let productImage = productCard.querySelector("img").src;

//           let newItem = { name: productName, price: productPrice, image: productImage };

//           let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//           let existingIndex = wishlist.findIndex(item => item.name === productName);

//           if (existingIndex === -1) {
//               // ✅ Add to wishlist
//               wishlist.push(newItem);
//               this.classList.add("active"); // 🔴 Red Color
//           } else {
//               // ❌ Remove from wishlist
//               wishlist.splice(existingIndex, 1);
//               this.classList.remove("active"); // ⚫ Default Color
//           }

//           localStorage.setItem("wishlist", JSON.stringify(wishlist));
//           updatewishlistCount(wishlist);
//       });
//   });

//   function updatewishlistCount(wishlistItems) {
//       if (wishlistIcon) { 
//           wishlistIcon.textContent = wishlistItems.length;
//       }
//   }
// });

// no perfect

document.addEventListener("DOMContentLoaded", function () {
  let wishlistIcon = document.getElementById("wishlist-count");

  let savedwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  updatewishlistCount(savedwishlist);

  document.querySelectorAll(".wishlist-btn").forEach((button) => {
      let productCard = button.closest(".items-cart");  
      let productName = productCard.querySelector(".detail p").textContent;

      // 🔄 **Refresh hone par check kare ki item wishlist me hai ya nahi**
      if (savedwishlist.some(item => item.name === productName)) {
          button.classList.add("active"); // 🔴 Red Color if in wishlist
      }

      button.addEventListener("click", function (event) {
          event.preventDefault();

          let productPrice = productCard.querySelector(".price h6:last-child").textContent;
          let productImage = productCard.querySelector("img").src;

          let newItem = { name: productName, price: productPrice, image: productImage };

          let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          let existingIndex = wishlist.findIndex(item => item.name === productName);

          if (existingIndex === -1) {
              // ✅ Add to wishlist
              wishlist.push(newItem);
              button.classList.add("active"); // 🔴 Button Red
          } else {
              // ❌ Remove from wishlist
              wishlist.splice(existingIndex, 1);
              button.classList.remove("active"); // ⚫ Button Default
          }

          localStorage.setItem("wishlist", JSON.stringify(wishlist));
          updatewishlistCount(wishlist);
      });
  });

  function updatewishlistCount(wishlistItems) {
      if (wishlistIcon) { 
          wishlistIcon.textContent = wishlistItems.length;
      }
  }
});


