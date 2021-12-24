/*===================================
            preloader
===================================*/
$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});


$(function () {
    new WOW().init();
    $(".back-btn0").on("click", prevSlide);
});




function prevSlide() {
    nSlide = 5;
    sessionStorage.setItem("slideNum", nSlide);
    var isBack = true;
    sessionStorage.setItem("isBack", isBack);
    window.location.href = "index4.html";
}