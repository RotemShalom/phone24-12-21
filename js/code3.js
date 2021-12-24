/*===================================
            preloader
===================================*/
$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');

});


/*===================================
                הרחבות
===================================*/
var nSlide;


$(function () {
    new WOW().init();
    console.log('sessionStorage.getItem("isBack"): ' + sessionStorage.getItem("isBack"));;

    if (sessionStorage.getItem("isBack") == "true") {
        console.log("in if");
        $(".section0").hide();
        $(".section1").show();
        nSlide = 1;
    } else {
        $(".section1").hide();
        nSlide = 0;
        $(".back-btn").hide();
    }
    /*sessionStorage.setItem("slideNum", nSlide);
    
    for(var i = 1; i<=1; i++)
    {
        $(".section" + i).hide();
    }*/
    sessionStorage.setItem("isBack", false);
    $(".next-btn").on("click", nextSlide);
    $(".back-btn").on("click", prevSlide);

});


function nextSlide() {
    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 0) {
        $(".back-btn").show();
        $(".back-btn").on("click", prevSlide);
    }
    $(".section" + nSlide).hide();
    nSlide++;
    sessionStorage.setItem("slideNum", nSlide);
    showSlide();
}

function prevSlide() {
    $(".section" + nSlide).hide();
    nSlide--;
    sessionStorage.setItem("slideNum", nSlide);
    showSlide();
}

function showSlide() {

    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 0) {
        $(".back-btn").hide();
    } else {
        $(".next-btn").show();
        $(".back-btn").show();
    }

    $(".section" + Number(sessionStorage.getItem("slideNum", nSlide))).show();

}

function showDefinition() {
    $(".definition").removeClass("hidden");
    if (Number(sessionStorage.getItem("slideNum", nSlide)) < 7) {
        $(".next-btn").show();
    }

    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 0) {
        $(".back-btn").hide();
    }
}