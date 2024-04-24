// function toggleNav() {
//   var navLinks = document.querySelector(".nav-links");
//   navLinks.classList.toggle("active");
// }

function toggleNav() {
  var navLinks = document.querySelector(".nav-links");
  var hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("cross");
  
  if (hamburger.classList.contains("cross")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
    hamburger.style.transform = "rotate(45deg)";
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.style.transform = "rotate(0deg)";
  }
}