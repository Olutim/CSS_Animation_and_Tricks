// This file contains little jQuery snippet to control the animations
$('.menu-icon').bind('click', function(){
    $(this).toggleClass('active');
    $(this).find('div').removeClass('no-animation');
});
