document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const interval = 3000; // 3 seconds

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, interval);
});
