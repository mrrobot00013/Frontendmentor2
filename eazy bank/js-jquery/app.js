
// preloader

setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 1000);

//////////


// scroll up function with fixed icon/////////////

$('.scrollupbtn').on('click',function(){
    $('html, body').animate({scrollTop:0}, 600, 'linear');
    return false;
});


// scroll top when refreshing page
$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });

  ///////////////

//   toggle responsive menu 
  $(document).ready(function(){
    $('.resp-nav').hide();
  });

  $('.nav-toggle').on('click', function(){
      var resNav = $('.resp-nav');
      resNav.slideToggle(700, 'swing');
      $('body').toggleClass('overflow')
  });



//   popup for request 

   $(document).ready(function(){
    $('.request-popup').hide();
    $('.success').hide();

       var btns = $('.nav-btn, .intro-btn, .footer-btn');
       var popup = $('.request-popup');
       var exit = $('.exit-email');
       var send = $('.send-email');
       var field = $('.email-field')
       var email = $('.popup-email');
       var suc = $('.success');

       btns.on('click',function(){
           popup.css('visibility', 'visible');
           popup.slideToggle(400,'swing');
           $('body').addClass('overflow');
           suc.hide();
           email.show();
           

       });

       exit.on('click', function(){
        popup.slideToggle(400,'swing');
        popup.css('visibility', 'visible');
        $('body').removeClass('overflow');
       });  

       send.on('click', function(){
           if( field.val() == "" ){
               field.addClass('error');
               field.attr('placeholder', 'Fill Out this field ')

           }else{
               field.removeClass('error');
               field.attr('placeholder','Enter your email')
               field.val('');
               email.delay(100).slideToggle();
               suc.delay(800).slideToggle();
               popup.delay(3500).slideToggle();
               $('body').removeClass('overflow');
           }
       });

   });

   /////////////////////////////////////