
// intro Animation./////

$(window).ready(function(){
    $('.intro-inner').delay(800).animate({left:'0px'},700)
});



///////scroll  fixed header ///

$(window).scroll(function(){
    var whiteLogo = $('.logo1')
    var darkLogo = $('.logo')
    var nav = $('nav,ul,li,a');
    var sticky = $('header'),
        scroll = $(window).scrollTop();
        if(scroll >= 50){
            darkLogo.css({display:'none'})
            whiteLogo.css({display:'block'})
            sticky.addClass('active');
            nav.addClass('active');
        }else{
            whiteLogo.css({display:'none'})
            darkLogo.css({display:'block'})
            sticky.removeClass('active');
            nav.removeClass('active')
        }
   
  });



//////////////////left/right animation//////////

   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
         if(scroll >= 350){
            $('.services-icons').animate({right:'0'},1000);
    }

});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 750){
        $('.articles-news').animate({left:'0'},1000);
    }

});


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 350){
        $('.scrollupbtn').css({display:'block'});
    }else{
        $('.scrollupbtn').css({display:'none'});
    }

});

