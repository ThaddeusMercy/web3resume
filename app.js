const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


// Skewed On scroll Images

let currentPixel = window.pageYOffset;

function skew() {
  let newPixel = window.pageYOffset;
  let increment = newPixel - currentPixel;
  let speed = increment * 0.50;
  document.querySelector('.skewed').style.transform = "skewY(" + speed + "deg)";

  currentPixel = newPixel;
  requestAnimationFrame(skew);
}

skew();