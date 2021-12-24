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
var nSlide = 0;
var isBack = false;


$(function () {
    new WOW().init();

    if (sessionStorage.getItem("isBack") == "true") {
        for (var i = 0; i <= 4; i++) {
            $(".section" + i).hide();
        }

        nSlide = 5;
        $(".section5").show();
        $(".correctAns").on("click", showCorrect);
        $(".wrongAns").on("click", showWrong);
        $(".next-btn-scroll").addClass("hide");
    } else {
        for (var i = 1; i <= 5; i++) {
            $(".section" + i).hide();
        }
    }

    sessionStorage.setItem("slideNum", nSlide);
    sessionStorage.setItem("isBack", false);

    $(".next-btn-scroll").on("click", nextSlide);
    $(".back-btn0-scroll").on("click", prevSlide);
});


function nextSlide() {
    console.log("in next quest");
    console.log('slide: ' + nSlide);
    $(".section" + nSlide).hide();
    $(".next-btn-scroll").addClass("hide");
    nSlide++;
    sessionStorage.setItem("slideNum", nSlide);

    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 6) {
        window.location.href = "index5.html";
    } else {
        showSlide();
    }

}

function prevSlide() {
    console.log("in prevslide");

    console.log(sessionStorage.getItem("slideNum", nSlide));
    if (Number(sessionStorage.getItem("slideNum", nSlide)) == 0) {
        nSlide = 1;
        sessionStorage.setItem("slideNum", nSlide);
        isBack = true;
        sessionStorage.setItem("isBack", isBack);
        window.location.href = "index3.html";
    } else if (Number(sessionStorage.getItem("slideNum", nSlide)) == 1) {
        showData();
    } else {
        $(".section" + nSlide).hide();
        nSlide--;
        sessionStorage.setItem("slideNum", nSlide);
        showSlide();
    }

}

function showSlide() {

    console.log("in show slide");
    $(".correctAns").on("click", showCorrect);
    $(".wrongAns").on("click", showWrong);
    $(".wrongAns").removeClass("wrong");
    $(".correctAns").removeClass("correct");
    $(".FBwrong").addClass("hide");
    $(".FBcorrect").addClass("hide");


    console.log("nSlide: " + Number(sessionStorage.getItem("slideNum", nSlide)));
    $(".section" + Number(sessionStorage.getItem("slideNum", nSlide))).show();
}

function showCorrect() {
    $(".correctAns").addClass("correct");
    $(".FBcorrect").removeClass("hide");

    $(".correctAns").off("click", showCorrect);
    $(".wrongAns").off("click", showWrong);


    $(".next-btn-scroll").removeClass("hide");

}

function showWrong() {
    $(".wrongAns").addClass("wrong");
    $(".FBwrong").removeClass("hide");

    $(".correctAns").off("click", showCorrect);
    $(".wrongAns").off("click", showWrong);



    $(".next-btn-scroll").removeClass("hide");

}


function showData() {
    console.log('in show data');
    nSlide = 0;
    sessionStorage.setItem("slideNum", nSlide);

    for (var i = 1; i <= 5; i++) {
        $(".section" + i).hide();
    }


    $(".section0").show();
    $(".next-btn-scroll").removeClass("hide");
}