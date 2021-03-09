$(document).ready(function() {

    // COMPORTAMENTO MENU A TENDINA
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

    // COMPORTAMENTO PER CHEVRON UP/DOWN MENU
    $('ul.language li.nav_item').each(function() {
        $(this).mouseover(function() {
            $(this).find('.nav_menu').addClass('active');
            $(this).find('i').removeClass('fa-chevron-down');
            $(this).find('i').addClass('fa-chevron-up');

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
        $(this).mouseout(function() {
            $(this).find('i').removeClass('fa-chevron-up');
            $(this).find('i').addClass('fa-chevron-down');
        })
    })

});