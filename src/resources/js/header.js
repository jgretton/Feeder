$(window).scroll(function(){
    
    if ($(document).scrollTop() > 80){
      $('.header').addClass('scrolled');
      $('.bar').addClass('black');
      $('.mobile__menu').css('top', '30px');
    }

    else{
      $('.header').removeClass('scrolled');
      $('.bar').removeClass('black');
      $('.mobile__menu').css('top', '45px');
    }   
    });

  $('.side-bar__nav ul li a').on('click',function(e){
    $('.side-bar__nav').toggleClass("open");
    $('.content').toggleClass("open-2");
  });