$(document).ready(function(){
    $('.nav-dots').click(function(){
    $('.dropdown-wrapper').toggleClass("hidden");
  });
});





$(document).ready(function(){
  $('.search-btn').click(function(){
    $('.search-section').animate({left: '0px'}, "slow");
  });

  $('.close-btn-slide').click(function(){
    $('.search-section').animate({left: '100%'}, "slow");
  });
});


$(document).ready(function(){
  $('.nav-inner-hamburger-container').click(function(){
    $('.top').toggleClass("center");
    $('.bottom').toggleClass("center");
  });
});



$(document).ready(function(){
  $('.nav-inner-hamburger-container').click(function(){
  $('.nav-hamburger-dropdown').toggleClass("hidden");
});
});


$(document).ready(function(){
  $('#copy-link-btn').click(function(){
  $('#copy-link').toggleClass("hidden");
});
});

