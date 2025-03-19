
// login
document.getElementById("login").addEventListener("click", function(){
    document.getElementById("login-form").style.display = "block";
    document.getElementById("login-overlay").style.display = "block"
    
    document.getElementById("form-close").addEventListener("click",function(){
    document.getElementById("login-form").style.display =  "none";
    document.getElementById("login-overlay").style.display = "none"
    })
    })


// specefication

document.getElementById("openSpecs").addEventListener("click", function () {
    document.getElementById("specificationsModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("closeSpecs").addEventListener("click", function () {
    document.getElementById("specificationsModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});



// zoom in

document.addEventListener("DOMContentLoaded", function () {
    let thumbnails = document.querySelectorAll(".thumb");
    let mainImage = document.getElementById("mainImage");
    let zoomedImage = document.getElementById("zoomedImage");
    let rightContainer = document.querySelector(".right-container");
    let centerContainer = document.querySelector(".center-container");

    function updateZoomedImage() {
        zoomedImage.src = mainImage.src;
    }

    updateZoomedImage();

    thumbnails.forEach(img => {
        img.addEventListener("mouseover", function () {
            mainImage.src = this.src;
            updateZoomedImage();
        });
    });

    centerContainer.addEventListener("mousemove", function (e) {
        let rect = this.getBoundingClientRect();
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        let y = ((e.clientY - rect.top) / rect.height) * 100;

        zoomedImage.style.display = "block";
        zoomedImage.style.left = `${-(x * 3)}px`;
        zoomedImage.style.top = `${-(y * 3)}px`;
        zoomedImage.style.transformOrigin = `${x}% ${y}%`;
    });

    centerContainer.addEventListener("mouseleave", function () {
        zoomedImage.style.display = "none";
    });
});


//   add to cart

// document.addEventListener("DOMContentLoaded", function () {
//     let cartIcon = document.getElementById("cart-count");

//     // 🔄 Pehle se saved cart load kare
//     let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     updateCartCount(savedCart);

//     document.querySelectorAll(".cart-btn").forEach((button) => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();

//             // 🛒 Product details lena
//             let productCard = this.closest(".items-cart");
//             let productName = productCard.querySelector(".detail p").textContent;
//             let productPrice = productCard.querySelector(".price h6:last-child").textContent;
//             let productImage = productCard.querySelector("img").src; // 🔥 Image src le raha hai

//             // 🛍 Cart me add karna
//             let newItem = { name: productName, price: productPrice, image: productImage };
//             savedCart.push(newItem);

//             // 📝 Local Storage me save karna
//             localStorage.setItem("cart", JSON.stringify(savedCart));

//             // 🔄 UI Update karna
//             updateCartCount(savedCart);
            
//             alert(`"${productName}" added to cart! 🛒`);
//         });
//     });

//     // 🔄 Cart Count Update Function
//     function updateCartCount(cartItems) {
//         cartIcon.textContent = cartItems.length; // Cart count update kare
//     }
// });

// chatgpt

// document.addEventListener("DOMContentLoaded", function () {
//     let cartIcon = document.getElementById("cart-count");

//     // 🔄 Pehle se saved cart load kare
//     let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     updateCartCount(savedCart);

//     document.querySelectorAll(".cart-btn").forEach((button) => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();

//             // 🏷 Product details lena
//             let productCard = this.closest(".items-cart");
//             // let productName = productCard.querySelector(".detail p").textContent;
//             document.querySelector(".detail p")

//             // let productPrice = productCard.querySelector(".price h6:last-child").textContent;
//             document.querySelector(".price h6:last-child")
//             // 
//             let productImageElement = productCard.querySelector("img");
// let productImage = productImageElement ? productImageElement.src : "";


//             // 🛍 Cart me add karna
//             let newItem = { name: productName, price: productPrice, image: productImage };
//             savedCart.push(newItem);

//             // 📝 Local Storage me save karna
//             localStorage.setItem("cart", JSON.stringify(savedCart));

//             // 🔄 UI Update karna
//             updateCartCount(savedCart);

//             alert(`"${productName}" added to cart! 🛒`);
//         });
//     });

//     // 🛒 Cart Count Update Function
//     function updateCartCount(cartItems) {
//         cartIcon.textContent = cartItems.length; // Header me cart count update kare
//     }
// });





