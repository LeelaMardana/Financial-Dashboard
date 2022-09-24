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

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

//Навбар
const navbar = (function () {
  const btn = document.querySelector('.burger span');
  const menu = document.querySelector('.sidebar');
  const body = document.querySelector('body');

  // если ширина экрана >= 992 тогда выполнить код
  const width = document.documentElement.clientWidth;
  if (width >= 992) return;

  body.addEventListener('click', e => {
    // Код идет дальше только если есть актив и клик был на бургер
    if (!btn.classList.contains('active') && !e.target.closest('.burger')) {
      return;
    }

    // 1 открытие или закрытие по нажатию // 2 закрытие по клику на элементы // 3 закрытие по клику запределы
    if (
      e.target.closest('.burger') ||
      e.target.closest('a') ||
      !e.target.closest('.sidebar')
    ) {
      btn.classList.toggle('active');
      menu.classList.toggle('animate');
    }
  });
})();
