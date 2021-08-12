"use strict"
const body =document.querySelector("body");
const html=document.querySelector("html");
const header=document.querySelector(".header");
const navBtn=document.querySelector(".nav__btn");
 
window.onload= function(){
  pagescroll(); 
}  ;
 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js')
      @@include('modules/fetch-inst.js')

 

//preloader
if (document.querySelector(".preloader")) {
  
  function hidescroll() {
    body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
    body.style.overflow = "hidden";
  }
  
  function showscroll() {
    body.style.paddingRight = 0;
    body.style.overflow = "visible";
  }

  const loader = document.querySelector(".preloader");
  loader.style.top = document.querySelector(".header").clientHeight + "px";
  hidescroll();

  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    showscroll();
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 300);
  };
  setTimeout(function() {
    document.body.classList.remove("loaded_hiding");
  }, 5000)
}
//preloader

//swiper
(function () {
  let swiper = Swiper;
  let init = false;

  function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 991px)");
    let desktop = window.matchMedia(
      "(min-width: 991px) and (max-width: 40000px)"
    );

    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper(".swiper-categories", {
          slidesPerView: 1,
          autoplay: {
            delay: 5000,
          },
          loop: true,
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            415: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          },
        });
      }
    } else if (desktop.matches) {
      init && swiper.destroy();
      init = false;
    }
  }

  if (document.querySelector(".swiper-categories")) {
    window.addEventListener("load", function () {
      swiperMode();
    });

    window.addEventListener("resize", function () {
      swiperMode();
    });
  }
})();