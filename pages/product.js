
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

//   function showMore(element) {
//     let extras = element.parentElement.querySelectorAll(".extra");
//     extras.forEach(item => item.style.display = "block");
//     element.style.display = "none";
//   }

 
 
 



// parfect cart


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
            let productImage = productCard.querySelector("img").src;

            // 🛍 Cart me duplicate check karna
            let isAlreadyInCart = savedCart.some(item => item.name === productName);

            if (!isAlreadyInCart) {
                // ✅ Agar product cart me nahi hai tab add kare
                let newItem = { name: productName, price: productPrice, image: productImage };
                savedCart.push(newItem);

                // 📝 Local Storage me save karna
                localStorage.setItem("cart", JSON.stringify(savedCart));

                // 🔄 UI Update karna
                updateCartCount(savedCart);
                
                alert(`"${productName}" added to cart! 🛒`);
            } else {
                alert(`"${productName}" is already in the cart! ❌`);
            }
        });
    });

    // 🔄 Cart Count Update Function
    function updateCartCount(cartItems) {
        cartIcon.textContent = cartItems.length; // Cart count update kare
    }
});




// prfect wishlist


document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded!");

    let wishlistIcon = document.getElementById("wishlist-count");

    function getWishlist() {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    function saveWishlist(wishlist) {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    function updateUI() {
        let wishlist = getWishlist();
        updatewishlistCount(wishlist);

        document.querySelectorAll(".wishlist-btn").forEach((button) => {
            let productCard = button.closest(".items-cart");
            if (!productCard) return;

            let productName = productCard.querySelector(".detail p").textContent.trim();

            if (wishlist.some(item => item.name === productName)) {
                button.classList.add("active");  // ✅ Wishlist me hai to RED
            } else {
                button.classList.remove("active"); // ❌ Wishlist me nahi hai to DEFAULT
            }
        });
    }

    updateUI(); // ✅ Page load hote hi UI update

    document.body.addEventListener("click", function (event) {
        let button = event.target.closest(".wishlist-btn");
        if (!button) return;  // ❌ Agar button nahi hai to ignore

        console.log("✅ Wishlist Button Clicked!");

        event.preventDefault();

        let productCard = button.closest(".items-cart");
        if (!productCard) {
            console.log("❌ Product card not found.");
            return;
        }

        let productName = productCard.querySelector(".detail p").textContent.trim();
        let productPrice = productCard.querySelector(".price h6:last-child").textContent.trim();
        let productImage = productCard.querySelector("img").src;

        let wishlist = getWishlist();
        let existingIndex = wishlist.findIndex(item => item.name === productName);

        console.log("📋 Wishlist Before:", wishlist);

        if (existingIndex === -1) {
            if (wishlist.length >= 30) {  
                alert("Wishlist full! Remove an item first.");
                return;
            }
            wishlist.push({ name: productName, price: productPrice, image: productImage });
            button.classList.add("active"); // ✅ Click pe RED ho jayega
            console.log("✅ Added to Wishlist!");
        } else {
            wishlist.splice(existingIndex, 1);
            button.classList.remove("active"); // ❌ Click pe DEFAULT ho jayega
            console.log("❌ Removed from Wishlist!");
        }

        saveWishlist(wishlist);
        updatewishlistCount(wishlist);
        updateUI();  // ✅ UI ko turant refresh kar diya (AB PAKKA CHALEGA!)
    });

    function updatewishlistCount(wishlistItems) {
        if (wishlistIcon) {
            wishlistIcon.textContent = wishlistItems.length;
        }
    }
});



// 3 dots menu bar

document.getElementById("three-dots").addEventListener("click", function() {
    document.getElementById("menu-items").style.display = "flex";
  });
  
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("menu-items").style.display = "none";
  });
  
  
  document.addEventListener("click", function (event) {
    let menuToggle = document.getElementById("menu-toggle");
 
  });
 

document.getElementById("filter-btn").addEventListener("click", function() {
    document.querySelector(".filter-container").classList.toggle("show");
});

document.getElementById("filter-close-btn").addEventListener("click", function() {
    document.querySelector(".filter-container").classList.remove("show");
});


 
 



 