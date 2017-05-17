$('.banner_carousel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: false
});

$('.interlock_carousel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false
});

var closeStartHelper = function() {
  if ($('.helper_start').is(':visible')) {
    $('.helper_start').fadeOut(100);
  }
}

$('.pillar_ic').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').slideUp(300);
  $('.content_ic').slideDown(500);
});

$('.pillar_ui').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').slideUp(300);
  $('.content_ui').slideDown(500);
});

$('.pillar_rp').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').slideUp(300);
  $('.content_rp').slideDown(500);
});

$('.service').on('mouseenter', function() {
  $(this).find('.service_container').hide();
  $(this).find('.service_container_back').show();
  $(this).find('.service_container_back').find('.service_back_item').slideDown(300);
});

$('.service').on('mouseleave', function() {
  $(this).find('.service_container').show();
  $(this).find('.service_container_back').hide();
  $(this).find('.service_container_back').find('.service_back_item').slideUp(100);
});

$('.service_ui').on('click', function() {
  window.location.href = 'innovation.html';
});

$('.service_ic').on('click', function() {
  window.location.href = 'coaching.html';
});

$('.service_rp').on('click', function() {
  window.location.href = 'prototyping.html';
});
