$(document).ready(function() {

    // MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var expanded = $('.js--nav-icon');
        
        nav.slideToggle(200);

        // change button icon on click
        if(icon.hasClass('fa-bars')) {
            expanded.attr('aria-expanded', 'true');
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
            
        } else {
            expanded.attr('aria-expanded', 'false');
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }



    });



});