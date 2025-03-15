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