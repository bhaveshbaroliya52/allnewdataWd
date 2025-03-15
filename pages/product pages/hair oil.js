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