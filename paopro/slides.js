const slides = [...document.querySelectorAll(".slide")];
const progressBar = document.querySelector("#progress-bar");
const previousButton = document.querySelector("#previous-slide");
const nextButton = document.querySelector("#next-slide");
const printButton = document.querySelector("#print-slides");
let currentSlide = 0;
let touchStartX = null;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
    slide.setAttribute("aria-hidden", String(slideIndex !== currentSlide));
  });
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  previousButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
}

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
printButton.addEventListener("click", () => window.print());

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    showSlide(currentSlide + 1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    showSlide(currentSlide - 1);
  } else if (event.key === "Home") {
    showSlide(0);
  } else if (event.key === "End") {
    showSlide(slides.length - 1);
  }
});

document.querySelector(".slide-deck").addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

document.querySelector(".slide-deck").addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) showSlide(currentSlide + (distance < 0 ? 1 : -1));
  touchStartX = null;
}, { passive: true });

showSlide(0);
