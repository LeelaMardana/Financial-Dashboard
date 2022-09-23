const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'flip',
  autoplay: {
    delay: 2500,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

const swiper2 = new Swiper('.swiper-goals', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 1500,
  },
  speed: 2000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-goals-btn-next',
    prevEl: '.swiper-goals-btn-prev',
  },
});
