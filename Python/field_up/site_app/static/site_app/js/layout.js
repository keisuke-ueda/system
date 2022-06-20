$(function(){
    $('.movie-1').on('ended', function(){
        $('.movie-1').addClass('d-none');
        $('.movie-2').removeClass('d-none');
        $('.movie-2').get(0).play();
    })
    $('.movie-2').on('ended', function(){
        $('.movie-2').addClass('d-none');
        $('.movie-3').removeClass('d-none');
        $('.movie-3').get(0).play();
    })
});