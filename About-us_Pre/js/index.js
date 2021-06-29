$(window).on('load',IntroRWD())

$(window).on('scroll', function() {
    if(isScrolledIntoViewVtl($('#Home'))){
        $('.nav-items a[href="#Home"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Home"]').removeClass('scrolling');
    }

    if(isScrolledIntoViewVtl($('#Intro'))){
        $('.nav-items a[href="#Intro"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Intro"]').removeClass('scrolling');
    }
    
    if(isScrolledIntoViewVtl($('#Use'))){
        $('.nav-items a[href="#Use"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Use"]').removeClass('scrolling');
    }

    if(isScrolledIntoViewVtl($('#About'))){
        $('.nav-items a[href="#About"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#About"]').removeClass('scrolling');
    }

})


$('#Intro-imgs').on('scroll', isScrolledIntoViewHzl($('#Intro-imgs')))

function isScrolledIntoViewVtl(elem) {
    var docViewTop = $(window).scrollTop()-$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()*2/3);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isScrolledIntoViewHzl(elem) {
    console.log($(window).width())
    if($(window).width() < 750) {    
        var position = $(elem).scrollLeft()/$(elem)[0].scrollWidth
        console.log($(elem).scrollLeft() +"\\" + $(elem)[0].scrollWidth)

        if(position < 0.17){
            console.log("first")

            $("#Intro-texts h3:nth-child(1)").css('display', 'block')
            $("#Intro-texts p:nth-child(2)").css('display', 'block')

            $("#Intro-texts h3:nth-child(3)").css('display', 'none')
            $("#Intro-texts p:nth-child(4)").css('display', 'none')

            $("#Intro-texts h3:nth-child(5)").css('display', 'none')
            $("#Intro-texts p:nth-child(6)").css('display', 'none')
        }
        else if(position > 0.66){
            console.log("last")
            $("#Intro-texts h3:nth-child(1)").css('display', 'none')
            $("#Intro-texts p:nth-child(2)").css('display', 'none')

        $("#Intro-texts h3:nth-child(3)").css('display', 'none')
        $("#Intro-texts p:nth-child(4)").css('display', 'none')

        $("#Intro-texts h3:nth-child(5)").css('display', 'block')
        $("#Intro-texts p:nth-child(6)").css('display', 'block')
        }
        else{
            console.log("middle")

            $("#Intro-texts h3:nth-child(1)").css('display', 'none')
            $("#Intro-texts p:nth-child(2)").css('display', 'none')

        $("#Intro-texts h3:nth-child(3)").css('display', 'block')
        $("#Intro-texts p:nth-child(4)").css('display', 'block')

        $("#Intro-texts h3:nth-child(5)").css('display', 'none')
        $("#Intro-texts p:nth-child(6)").css('display', 'none')
        }}
}




function IntroRWD() {
    console.log($(window).width())
    if($(window).width() <= 750){
        $('#Intro .col-xs-5').addClass("order-1")
        $('#Intro .col-xs-7').addClass("order-2")
    }
}



$("nav a[href='#Use']").on("click", function(e){
    var offset = $('#Home').outerHeight() + $('#Intro').outerHeight();
    $('html, body').animate({scrollTop:offset}, 70);
    return false;
} )
