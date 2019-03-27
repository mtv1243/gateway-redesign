let programsDrop = $('#programsDrop');
let resourcesDrop = $('#resourcesDrop');

//   popup window after 3 seconds
  setTimeout(function() {
     $('.modal-wrapper').toggleClass('open');
    $('#container').toggleClass('blur');
     return false;
  }, 3000);
  
  // close popup window whe you click the X
  $('.trigger').click(function() {
     $('.modal-wrapper').toggleClass('open');
    $('#container').toggleClass('blur');
     return false;
  });

// only runs when you resize the window, not all the time.
// $(window).resize(function goes here);

// drops down the menus if screen is wider than 768px
//   function dropDownsBig() {
  
//   if ($(window).width() > 768) {

  // mouseover resources
  $('#resourcesMouseMove').hover(function() {
    console.log('moused over resources!');
    resourcesDrop.slideDown(200).css('display', 'flex');
  }, function() {
    resourcesDrop.slideUp(200).css('display', 'flex');
  });
    
    // mouseover programs
  $('#programsMouseMove').hover(function() {
    console.log('moused over programs!');
    programsDrop.slideDown().css('display', 'flex');
  }, function() {
    programsDrop.slideUp().css('display', 'flex');
  });


// when click on hamburger, slide nav
$('.fa-bars').click(function() {
  $('#navSlideToggle').slideToggle();
  $('.programsDropHide').hide();
  $('.resourcesDropHide').hide();
  $('#darkBG').addClass('fadeIn');
});

$(window).resize(function() {
  $('#navSlideToggle').removeAttr('style');
  $('.programsDropHide').removeAttr('style');
  $('.resourcesDropHide').removeAttr('style');
});

// ===========================
// scrolling NAV
// ===========================
// $(document).on('scroll',function(){
//   if($(document).scrollTop() > 50 ) {
//     $('.nav_wrapper').css('position', 'fixed');
//   } else {
//     $('.nav_wrapper').removeAttr('style');
//   }
// });

// ===========================
// scrolling fadeIns
// ===========================

// when user has scrolled a certian amount, add class to programs sections
$(document).on('scroll',function(){
  if($(document).scrollTop() > 800 ) {
    // console.log($(document).scrollTop());
  $('.programs_section_wrapper').addClass('fadeIn').css('visibility', 'visible');
  };
});

// when user has scrolled a certian amount, add class to resources sections
$(document).on('scroll',function(){
  if($(document).scrollTop() > 1400 ) {
    // console.log($(document).scrollTop());
  $('.resources_section_wrapper').addClass('fadeIn').css('visibility', 'visible');
  };
});

// when user has scrolled a certian amount, add class to get_involved sections
$(document).on('scroll',function(){
  if($(document).scrollTop() > 1900 ) {
    // console.log($(document).scrollTop());
  $('.get_involved_section_wrapper').addClass('fadeIn').css('visibility', 'visible');
  };
});

// Scrolling sticky nav
$(document).on('scroll',function(){
  if($(document).scrollTop() > 50 ) {
    // console.log($(document).scrollTop());
  $('.nav_wrapper').addClass('nav_wrapper_small');
    $('.nav_item').addClass('nav_item_small');
    $('#navSlideToggle').css('top', '30px');
  } 
  else {
    $('.nav_wrapper').removeClass('nav_wrapper_small');
    $('.nav_item').removeClass('nav_item_small');
    $('#navSlideToggle').removeAttr('style');
  }
});