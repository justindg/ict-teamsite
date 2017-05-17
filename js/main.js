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
