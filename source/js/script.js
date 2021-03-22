$('.header-burger').click(function () {
   $('.header-burger, .menu-body').toggleClass('act');
   $('body').toggleClass('lock');
});

$('.menu-body').click(function () {
   $('.header-burger, .menu-body').removeClass('act');
   $('body').removeClass('lock');
});



const swiper = new Swiper('.swiper-container', {
   speed: 400,
   spaceBetween: 100,
   autoHeight: true,
   slidesPerView: 5,
   spaceBetween: 0,
   loop: true,
   keyboard: {
      enable: true,
      onlyInViewport: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },


});

function up() {
   var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
   if (top > 0) {
      window.scrollBy(0, ((top + 100) / -5));
      t = setTimeout('up()', 50);
   } else clearTimeout(t);
   return false;
}