let slideIndex = 0;
let autoPlay = true;

showSlides();

function plusSlides(n) {
  autoPlay = false;
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  autoPlay = false;
  showSlides(slideIndex = n);
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex].className += " active";

  if (autoPlay) {
    slideIndex++;
    setTimeout(showSlides, 3000);
  }
}

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    autoPlay = true;
    showSlides();
  }
});