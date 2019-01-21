$(function(){

//=======================//
//Media Query Conditions
//=======================//

    let tabPort = window.matchMedia("(max-width: 900px)");
    let phone = window.matchMedia("(max-width: 600px)");
    
//=======================//
//Scroll Functions
//=======================//

    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        
        //Select the element you want to affect
        $('.hero-logo').css({
            'transform' : 'translate(0px, '+ winScroll /3 +'%)'
        });

        $('.hero-watch').css({
            'transform' : 'translate(0px, -'+ winScroll /50 +'%)'
        });

        if(tabPort.matches) {
            $('.hero-logo').css({
                'transform' : 'translate(0px, '+ winScroll /3 +'%)'
            });            
        }
    });

//=======================//
//  Click Functions
//=======================//

    $(".toggle-btn").click(function(){
        $("#sidebar").toggleClass("active");
        $(".toggle-btn").toggleClass("noBg");
        $(".toggle-btn").toggleClass("activeToggle");
    });

    $("#sidebar a").click(function(){
        $("#sidebar").removeClass("active");
    });

    $(".exit-btn").click(function(){
        $("#contact").css("display", "none");
    });

    $(".contact-btn").click(function(){
        $("#contact").css("display", "block");
    });   


//=======================//
//Media Query functions
//=======================//

    //=*=*=*=- Phone: 600px -=*=*=*=//
    if(phone.matches) {
        $('#about-info').html("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi repudiandae in labore illum amet accusantium! Eum, illum accusantium iure unde fuga dolorum aliquam nesciunt facilis aperiam veritatis itaque culpa.");
    }
    
//=======================//
//Media Query functions
//=======================//

    //Watch Specials
    $("#catalogue-watches").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },

            900: {
                items: 3
            },

            1200: {
                items: 4
            }
        }
    });

    //watch Categories
    
});