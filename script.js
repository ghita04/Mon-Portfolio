const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperMontage = new Swiper(".swipermontage", {
  direction: "horizontal",
  slidesPerView: 1,




  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperProcessus = new Swiper(".processus", {
  direction: "horizontal",
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },





});
