// var swiper = new Swiper(".HomepageSwiperInit", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop:true,
//     grabCursor:'true',
//     pagination: {
//       el: "hp-pagination-init",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: '.hp-next-init',
//         prevEl: '.hp-prev-init',
//       },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView:3,
//         spaceBetween: 40,
//       },
//       1024: {
//         grabCursor:false,
//         slidesPerView: 4,
//         loop:false,
//         allowTouchMove: false, //switch off on desktop

//       },
//     },
//   });

  //swiper
(function () {
  let swiper = Swiper;
  let init = false;

  function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 991px)");
    let desktop = window.matchMedia("(min-width: 991px) and (max-width: 40000px)");

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

      swiperMode();
    window.addEventListener("resize", function () {
      swiperMode();
    });
  }
}
)
();