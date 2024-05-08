// let slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   updateSlide();
// }

// function updateSlide() {
//   let offset = -currentSlide * 50;
//   slides.forEach(slide => {
//     slide.style.transform = `translateX(${offset}%)`;
//   });
// }

// setInterval(nextSlide, 2000);
  AOS.init();