
$('.sunY_high').hide();



function star1_1(){
  $('.star1_1').css('z-index','2');
  $('.star1_2').css('z-index','1').fadeIn(1000);
  $('.star1_1').fadeOut(1000, function(){
    star1_2();
  });
}
function star1_2(){
  $('.star1_2').css('z-index','2');
  $('.star1_1').css('z-index','1').fadeIn(1000);
  $('.star1_2').fadeOut(1000, function(){
    star1_1();
  });
}
function star2_1(){
  $('.star2_1').css('z-index','2');
  $('.star2_2').css('z-index','1').fadeIn(1300);
  $('.star2_1').fadeOut(1300, function(){
    star2_2();
  });
}
function star2_2(){
  $('.star2_2').css('z-index','2');
  $('.star2_1').css('z-index','1').fadeIn(1300);
  $('.star2_2').fadeOut(1300, function(){
    star2_1();
  });
}
function star3_1(){
  $('.star3_1').css('z-index','2');
  $('.star3_2').css('z-index','1').fadeIn(700);
  $('.star3_1').fadeOut(700, function(){
    star3_2();
  });
}
function star3_2(){
  $('.star3_2').css('z-index','2');
  $('.star3_1').css('z-index','1').fadeIn(700);
  $('.star3_2').fadeOut(700, function(){
    star3_1();
  });
}
function star4_1(){
  $('.star4_1').css('z-index','2');
  $('.star4_2').css('z-index','1').fadeIn(500);
  $('.star4_1').fadeOut(500, function(){
    star4_2();
  });
}
function star4_2(){
  $('.star4_2').css('z-index','2');
  $('.star4_1').css('z-index','1').fadeIn(500);
  $('.star4_2').fadeOut(500, function(){
    star4_1();
  });
}
function star5_1(){
  $('.star5_1').css('z-index','2');
  $('.star5_2').css('z-index','1').fadeIn(1500);
  $('.star5_1').fadeOut(1500, function(){
    star5_2();
  });
}
function star5_2(){
  $('.star5_2').css('z-index','2');
  $('.star5_1').css('z-index','1').fadeIn(1500);
  $('.star5_2').fadeOut(1500, function(){
    star5_1();
  });
}
function star6_1(){
  $('.star6_1').css('z-index','2');
  $('.star6_2').css('z-index','1').fadeIn(2000);
  $('.star6_1').fadeOut(2000, function(){
    star6_2();
  });
}
function star6_2(){
  $('.star6_2').css('z-index','2');
  $('.star6_1').css('z-index','1').fadeIn(2000);
  $('.star6_2').fadeOut(2000, function(){
    star6_1();
  });
}
function star7_1(){
  $('.star7_1').css('z-index','2');
  $('.star7_2').css('z-index','1').fadeIn(1800);
  $('.star7_1').fadeOut(1800, function(){
    star7_2();
  });
}
function star7_2(){
  $('.star7_2').css('z-index','2');
  $('.star7_1').css('z-index','1').fadeIn(1800);
  $('.star7_2').fadeOut(1800, function(){
    star7_1();
  });
}
function star9_1(){
  $('.star9_1').css('z-index','2');
  $('.star9_2').css('z-index','1').fadeIn(1400);
  $('.star9_1').fadeOut(1400, function(){
    star9_2();
  });
}
function star9_2(){
  $('.star9_2').css('z-index','2');
  $('.star9_1').css('z-index','1').fadeIn(1400);
  $('.star9_2').fadeOut(1400, function(){
    star9_1();
  });
}
function sunY_high(){
  $('.sunY_low').fadeOut(2000);
  $('.sunY_high').fadeIn(2000, function(){
    sunY_low();
  });
}
function sunY_low(){
    $('.sunY_high').fadeOut(2000);
  $('.sunY_low').fadeIn(2000, function(){
    sunY_high();
  });
}

function animatedCloudBig(){
  $(".cloud_big").animate({left: '500px'}, 27000, 'linear', function(){
    $('.cloud_big').css({left:-200});
    animatedCloudBig();
  });
}
function animatedCloudMedium(){
  $(".cloud_medium").animate({left: '500px'}, 35000, 'linear', function(){
    $('.cloud_medium').css({left:-150});
    animatedCloudMedium();
  });
}
function animatedCloudSmall(){
  $(".cloud_small").animate({left: '500px'}, 50000, 'linear', function(){
    $('.cloud_small').css({left:-50});
    animatedCloudSmall();
  });
}
function animatedCloudMicro(){
  $(".cloud_micro").animate({left: '500px'}, 70000, 'linear', function(){
    $('.cloud_micro').css({left:-150});
    animatedCloudMicro();
  });
}


 
setInterval( function() {
  var seconds = new Date().getSeconds();
  var sdegree = seconds * 6;
  var srotate = "rotate(" + sdegree + "deg)";
  // console.log("srotate :", srotate);
  $("#sec").css({ "transform": srotate });
    
}, 1000 );
// -----------------------------------------------

setInterval( function() {
  var hours = new Date().getHours();
  var mins = new Date().getMinutes();
  var hdegree = hours * 30 + (mins / 2);
  var hrotate = "rotate(" + hdegree + "deg)";

  $("#hour").css({ "transform": hrotate});
    
}, 1000 );
// -----------------------------------------------

setInterval( function() {
  var mins = new Date().getMinutes();
  var mdegree = mins * 6;
  var mrotate = "rotate(" + mdegree + "deg)";

  $("#min").css({ "transform" : mrotate });
  $("#gradientDisc").css({ "transform": mrotate });
    
}, 1000 );
 
// -----------------------------------------------


star1_1();
star2_1();
star3_1();
star4_1();
star5_1();
star6_1();
star7_1();
star9_1();
sunY_high();
animatedCloudBig();
animatedCloudSmall();
animatedCloudMedium();
animatedCloudMicro();


