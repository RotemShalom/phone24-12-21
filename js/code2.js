/*===================================
            preloader
===================================*/
$(window).on('load', function () { //makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});


/*===================================
                הרחבות
===================================*/
var nSlide = 0;


$(function () {
    new WOW().init();
    sessionStorage.setItem("slideNum", nSlide);

    for (var i = 1; i <= 6; i++) {
        $("#definition" + i).hide();
        $("#term" + i).on("click", showDefinition);
    }

    // $(".next-btn").on("click", nextSlide);
    // $(".back-btn").on("click", nextSlide);
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

    if (Number(sessionStorage.getItem("slideNum", nSlide)) != 0) {
        $(".definition").addClass("hidden");
        $(".next-btn").hide();
        $(".term").on("click", showDefinition);
    } else {
        $(".next-btn").show();
        $(".back-btn").hide();
    }

    $(".section" + Number(sessionStorage.getItem("slideNum", nSlide))).show();

}

function showDefinition() {
    var name = ($(this).attr("id").charAt(4));


    for (var i = 1; i <= 6; i++) {
        $("#definition" + i).hide();
    }

    $("#definition" + name).show();

    /*if(Number(sessionStorage.getItem("slideNum", nSlide)) < 7)
    {
       $(".next-btn").show();
    }
    
    if(Number(sessionStorage.getItem("slideNum", nSlide)) == 0)
    {
        $(".back-btn").hide();
    } */
}