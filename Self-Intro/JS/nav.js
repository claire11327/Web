$(window).on('scroll', function() {
    if(isScrolledIntoView($('#Home'))){
        $('.nav-items a[href="#Home"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Home"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#About'))){
        $('.nav-items a[href="#About"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#About"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#Skill'))){
        $('.nav-items a[href="#Skill"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Skill"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#Portfolio'))){
        $('.nav-items a[href="#Portfolio"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Portfolio"]').removeClass('scrolling');
    }

    if(isScrolledIntoView($('#Contact'))){
        $('.nav-items a[href="#Contact"]').addClass('scrolling');
    }else{
        $('.nav-items a[href="#Contact"]').removeClass('scrolling');
    }
})

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop()+$('nav').height();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    console.log(elemTop , docViewTop,elemBottom , docViewBottom);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }