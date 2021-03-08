$(document).ready(function() {
    $('li.nav_item').each(function() {
        $(this).mouseover(function() {
            $(this).find('.nav_menu').addClass('active');

            $(this).find('.nav_menu').mouseover(function() {
                $(this).find('.nav_menu').addClass('active');
            })
            $(this).mouseout(function() {
                $(this).find('.nav_menu').removeClass('active');

            })
            $(this).find('.nav_menu').mouseout(function() {
                $(this).removeClass('active');
            })
        })
    })
});