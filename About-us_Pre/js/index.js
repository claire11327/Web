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

    if(isScrolledIntoViewHzl($('#About'))){
        $('.nav-items a[href="#About"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#About"]').removeClass('scrolling');
    }

})

function isScrolledIntoViewVtl(elem) {
    var docViewTop = $(window).scrollTop()-$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()*2/3);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isScrolledIntoViewHzl(elem) {
    var docViewTop = $(window).scrollTop()-$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()*2/3);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



function isScrolledIntoViewVtl(elem) {
    var docViewTop = $(window).scrollTop()-$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()*2/3);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}







$("nav a[href='#Use']").on("click", function(e){
    var offset = $('#Home').outerHeight() + $('#Intro').outerHeight();
    $('html, body').animate({scrollTop:offset}, 70);
    return false;
} )
