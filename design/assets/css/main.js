$(document).ready(function(){
    $(window).on('load scroll',function() {
        if($(windown).scrollTop() > 30){
            $('.header').css({'background':'#6C5CE7','box-shadow':'0.2rem .5rem rgba(0, 0,.4)'});
        }else{
            $('.header').css({'background':'none','box-shadow':'none'});
        }
       });
});
