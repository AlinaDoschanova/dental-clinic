svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  // Включение слайдера в промоблоке на главной странице
  $('#promo-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
  });

  // Включение слайдера в блоке отзывов на главной странице
  $('#review-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
  });

  // Слайдер в блоке Действующие акции

  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    if ( $(window).width() < 768 ){
      $('#promotions-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
      });
    }
    else {
      $('#promotions-slider').trigger('destroy.owl.carousel');
    }
  }

  // Функциональность списка услуг в сайдбаре
  $('.services-sidebar__item:not(.services-sidebar__item--active) .services-sidebar__lvl-2').hide();
  $('.services-sidebar__lvl-2').closest('.services-sidebar__item:not(.services-sidebar__item--active)').find('.services-sidebar__link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.services-sidebar__item').find('.services-sidebar__lvl-2').slideToggle();0
  });

  // Работа главного меню
  $('#menu-toggler').on('click', function(){
    $('#menu').toggleClass('main-nav__inner--shown');
    $(this).toggleClass('burger--close');
  });
});
