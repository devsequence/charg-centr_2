AOS.init({disable: 'mobile'});
$('.header-nav a, .footer-nav a').on('click', function (e) {
   e.preventDefault();
   var $this = $(this);
   var thisHref = $this.data('href');
    $('html, body').animate({
        scrollTop: $('#' + thisHref).offset().top - 90
    }, 2000);
    $('.header-btn, .header-nav, .header-overlay').removeClass('active')
});
$('.header-logo, .footer-logo').on('click', function (e) {
   e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active');
    $this.prev().toggleClass('active');
    $('.header-overlay').toggleClass('active');
});
$('.header-overlay').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active');
    $('.header-nav, .header-btn').toggleClass('active');
});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 250) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
