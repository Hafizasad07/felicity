// Carousel
jQuery(".carousel0").owlCarousel({
  autoplay: true,
  rewind: false,
  loop: true,
  /* use rewind if you don't want loop */
  margin: 0, 
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  dots: true,
  items: 1,
});
jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items:1
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
$( ".carousel3 .owl-prev").html('<i class="fa fa-play"></i>');
$( ".carousel3 .owl-next").html('<i class="fa fa-play"></i>');