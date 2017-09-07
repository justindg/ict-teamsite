$('.interlock_carousel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 8000,
  pauseOnHover: false
});

var closeStartHelper = function() {
  if ($('.helper_start').is(':visible')) {
    $('.helper_start').fadeOut(100);
  }
}

$('#pillar_ic').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').hide();
  // $('.content_ic').fadeIn(200);
  $('.content_ic').show();
  // $(this)[0].scrollIntoView(true);
});

$('#pillar_ui').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').hide();
  // $('.content_ui').fadeIn(200);
  $('.content_ui').show();
  // $(this)[0].scrollIntoView(true);
});

$('#pillar_rp').on('click', function() {
  closeStartHelper();
  $('.pillar_container').removeClass('pillar_container_active');
  $(this).addClass('pillar_container_active');
  $('.content').hide();
  // $('.content_rp').fadeIn(200);
  $('.content_rp').show();
  // $(this)[0].scrollIntoView(true);
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

$('.get_quote').on('click', function() {
  $('.modal-contact').show();
  $('body').addClass('modal-open');
});

$('.banner_get_quote').on('click', function() {
  $('.modal-contact').show();
  $('body').addClass('modal-open');
});

$('.cs_hololens').on('click', function() {
  $('.modal-hololens').show();
  $('body').addClass('modal-open');
});

$('.cs_jumpstart').on('click', function() {
  $('.modal-jumpstart').show();
  $('body').addClass('modal-open');
});

$('.cs_unleashing').on('click', function() {
  $('.modal-unleashing').show();
  var url = "http://commnet2.cba/businessunits/IBM/Main/people/the-intrapreneur/Pages/default.aspx?s_rank=1&s_type=bestbets"
  window.open(url);
});

$('.icon_close').on('click', function() {
  $('.modal').parent().hide();
  $('body').removeClass('modal-open');
});

// $('body').on('click', function() {
//
//   $('.modal').parent().hide();
// })

$('.avatar').on('mouseenter', function() {
  $(this).find('.avatar-title').slideDown(200);
});

$('.avatar').on('mouseleave', function() {
  $(this).find('.avatar-title').slideUp(200);
});
