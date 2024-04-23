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

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
    if(scroller.scrollLeft != 0)
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}