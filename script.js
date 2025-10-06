"use strict";

/**
 * Helper function to initialize Swiper carousels with shared config.
 * @param {string} selector - CSS selector for Swiper instance
 */
function createSwiper(selector) {
  return new Swiper(selector, {
    autoplay: { delay: 5000 },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      425: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
    spaceBetween: 20,
  });
}

// Initialize all Swiper carousels
createSwiper(".hero-swiper");
createSwiper(".latest-products-swiper");
createSwiper(".popular-products-swiper");
createSwiper(".testimonials-swiper");

// Set current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();