$(window).on('scroll', function() {
    if(isScrolledIntoView($('#Home'))){
        $('.nav-items a[href="#Home"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Home"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#Intro'))){
        $('.nav-items a[href="#Intro"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Intro"]').removeClass('scrolling');
    }
    
    if(isScrolledIntoView($('#Use'))){
        $('.nav-items a[href="#Use"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Use"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#About'))){
        $('.nav-items a[href="#About"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#About"]').removeClass('scrolling');
    }

})

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop()-$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()*2/3);
    console.log(elemTop , docViewTop,elemBottom , docViewBottom);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$("nav a[href='#Use']").on("click", function(e){
    var offset = $('#Home').outerHeight() + $('#Intro').outerHeight() + $('nav').height();
    if($('#Use').height()*3 < $(window).height()*2){
        offset -= $('#Use').outerHeight()/3;
    }
    $('html, body').animate({scrollTop:offset}, 700);
    return false;
} )