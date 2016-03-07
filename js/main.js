// function welcomeWindow() {

//   var windowHeight = $(window).height();
//   $('.intro').css('height', windowHeight);

// }

function detechtTouch(){

  if (Modernizr.touch) {
    $('.work').addClass('touch');
  } else {
    console.log('no-touch');
  }
}


function stickyNav(){

  $('section.item').each(function(){

    var sectionTop = $(this).offset().top;
    var bottomWindow = $(window).height() + $(window).scrollTop();
    var scrollTop = $(window).scrollTop();
    var header = $('.intro').height() + 100;


    if(scrollTop >= header ){
      $('.sticky').addClass('visible');
    } else {
      $('.sticky').removeClass('visible');
    }

  });
}

function stickyBG(){

  var section = $('section.item');

  if(section.length){
    var statlerSectionStart = $('section.item.statler').offset().top;
    var statlerSectionHeight = $('section.item.statler').height();
    var statlerSection = statlerSectionStart + statlerSectionHeight;
    var iuxdSectionStart = $('section.item.iuxd').offset().top;
    var iuxdSectionHeight = $('section.item.iuxd').height();
    var iuxdSection = iuxdSectionStart + iuxdSectionHeight;
    var scrollTop = $(window).scrollTop() + 73;


    if(scrollTop >= statlerSectionStart && scrollTop <= statlerSection){
      $('.sticky').addClass('dark');
    } else if(scrollTop >= iuxdSectionStart && scrollTop <= iuxdSection){
      $('.sticky').addClass('dark');
    } else{
      $('.sticky').removeClass('dark');
    }
  }
}

function transparentNav(){

  var scrollTop = $(window).scrollTop();
  var headerHeight = $('article header').height();

  console.log(scrollTop, headerHeight);

  if(scrollTop >= headerHeight){
    $('nav').removeClass('top');
  } else {
    $('nav').addClass('top');
  }
}

$('.hamburger').click(function(){

  $('.mobile-nav').toggleClass('visible');
  $('.mobile-nav nav').toggleClass('visible');
  $('.hamburger').toggleClass('animate');

});

function sizeMobileNav(){
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  $('.mobile-nav').height(windowHeight).width(windowWidth);
}

function sizeFrame() {

  var containerWidth = $('.wrapper').width();
  var frameWidth = containerWidth*0.7864406779661;
  var frameHeight = 0.5786637931*frameWidth;

  var displayWidth = frameWidth*0.7650862069;
  var displayRatio = 0.6267605634;
  var displayHeight = displayWidth*displayRatio;
  var displayTop = 0.03556034483*frameWidth;

  $('.frame').width(frameWidth);
  $('.frame').height(frameHeight);

  $('.interface').width(displayWidth);
  $('.interface').height(displayHeight);
  $('.interface').css('top', displayTop);

}

function articleWindow() {

  var windowHeight = $(window).height();
  $('article header').css('height', windowHeight - 60);
  // console.log(windowHeight);

}

$(document).ready(function(){

  // welcomeWindow();
  articleWindow();
  sizeFrame();
  stickyNav();
  stickyBG();
  transparentNav();
  sizeMobileNav();
  detechtTouch();

});

$(window).resize(function(){

  // welcomeWindow();
  articleWindow();
  sizeFrame();
  stickyNav();
  stickyBG();
  transparentNav();
  sizeMobileNav();
});

$(window).scroll(function(){

  stickyNav();
  stickyBG();
  transparentNav();

});