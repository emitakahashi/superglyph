$(document).ready(function(){
    $('#para').hover(function(){
        $(this).addClass('blur');
    }).mouseout(function(){
        $(this).removeClass('blur');
    });
});