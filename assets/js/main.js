//AOS Init
AOS.init();


jQuery(window).on('scroll', function() {
    if (jQuery(window).scrollTop() > 250) {
        jQuery('.header').addClass('scroll-header')
    } else {
        jQuery('.header').removeClass('scroll-header')
    }
})