/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import {
  Autoplay,
  Grid,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/
// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".main-block__slider--1")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".main-block__slider--1", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 32,
      centeredSlides: true,
      speed: 4000,
      autoplay: {
        delay: 5,
      },
      loop: true,
      direction: "vertical",
      allowTouchMove: false,
      disableOnInteraction: false,
      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        pagination: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Брейкпоінти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        breakpoints: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            640: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                autoHeight: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            768: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            992: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 3,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            1268: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 4,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
      // Події
      on: {},
    });
  }
  if (document.querySelector(".main-block__slider--2")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".main-block__slider--2", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 32,
      centeredSlides: true,
      speed: 4000,
      autoplay: {
        delay: 5,
        reverseDirection: true,
      },
      loop: true,
      direction: "vertical",
      allowTouchMove: false,
      disableOnInteraction: false,
      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        pagination: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Брейкпоінти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        breakpoints: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            640: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                autoHeight: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            768: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            992: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 3,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            1268: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 4,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
      // Події
      on: {},
    });
  }
  if (document.querySelector(".hear__slider")) {
    const slider = document.querySelector(".hear__slider");
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(slider, {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination, Grid, Virtual],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 33,
      activeIndex: 2,

      //autoHeight: true,
      speed: 800,
      grid: {
        rows: 2,
      },

      navigation: {
        prevEl: ".hear__prev",
        nextEl: ".hear__next",
      },
      on: {
        init: function (sw) {
          const textInner = slider
            .closest(".hear")
            .querySelector(".hear__pagination");
          textInner.textContent = `${sw.realIndex + 1}/${(
            sw.slides.length / 2
          ).toFixed(0)}`;
        },
        slideChange: function (sw) {
          const textInner = slider
            .closest(".hear")
            .querySelector(".hear__pagination");
          textInner.textContent = `${sw.realIndex + 1}/${(
            sw.slides.length / 2
          ).toFixed(0)}`;
        },
      },
    });
  }
  if (document.querySelector(".swiper2")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".swiper", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        pagination: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Брейкпоінти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        breakpoints: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            640: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                autoHeight: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            768: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            992: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 3,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            1268: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                slidesPerView: 4,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spaceBetween: 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
      // Події
      on: {},
    });
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
