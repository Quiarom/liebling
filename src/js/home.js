import $ from 'jquery';
import shave from 'shave';
import Swiper, { Navigation, A11y } from 'swiper';

$(() => {
  const $featuredSlider = $('.js-featured-slider');

  if ($featuredSlider.length > 0) {
    const numSlides = $featuredSlider.find('.swiper-slide').length;
    const featuredSwiper = new Swiper('.js-featured-slider', {
      modules: [Navigation, A11y],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: true,
      on: {
        init: function() {
          shave('.js-featured-article-title', 200);
        }
      }
    });

    if (numSlides === 1) {
      $featuredSlider.find('.js-featured-slider-button').remove();
    }
  }

  shave('.js-featured-article-title', 200);
});
//-------------------------------LAZY LOAD-------------------------

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})