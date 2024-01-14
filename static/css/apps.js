$(document).ready(function(){
    $('.nav-dots').click(function(){
    $('.dropdown-wrapper').toggleClass("hidden"); 
  });
});

$(document).click(function(e) {
  $('.dropdown-wrapper')
    .not($('.dropdown-wrapper').has($(e.target)))
    .removeClass('.hidden');
});



// window.onclick = function(event) {
//   if (!event.target.matches('.nav-dots')) {
//     var dropdowns = document.getElementsByClassName("dropdown-wrapper");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('hidden')) {
//         openDropdown.classList.add('hidden');
//       }
//     }
//   }
// }




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
  var screen_width=$(window).width();
  $('.right-arrow').click(function(){
    // $('#scroll-container').animate({left: '-100%'}, "slow");
    // $('#scroll-container').animate({ scrollLeft: '+=1000' }, 500);
    $('#scroll-container').animate({ scrollLeft: "+=" + screen_width }, 500);
    $("#first-slide").css({"left": "-100%", "position": "absolute"});

    // var firstScroll = document.getElementById('#first-slide');
    // firstScroll.style.left ='-300%';

    // if (screen_width == $(window).width()) {
    // }
  });
});

// $(document).ready(function(){
//   $('.load-more').click(function(){
//   $('#hidden-blogs').css({"margin-top": "200px"});
//   $('#hidden-blogs').toggleClass("hidden");
//   $('#hidden-blogs').slideUp(300);
//   // $('#hidden-blogs').slideDown(0);
//   $('#hidden-blogs').animate({scrollDown: "100px"});
//   // $('#hidden-blogs').slideUp(300);
//   $('.load-more').hide();

// });
// });




$(document).ready(function(){
  $('.load-more').click(function(){
    $("#hidden-blogs").toggleClass("hidden")
  $('.load-more').hide();
});
});


$(document).ready(function(){
  $('.sub-btn').click(function(){
    $(".processing").removeClass("hidden");
  $('.sub-btn').hide();
});
});
