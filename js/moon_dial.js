
$('.sunY_high').hide();



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


// equation for the disc (halfspeed)
  var halfDegree = hours * 30 + (mins / 2) / 2;
  var halfRotate = "rotate(" + halfDegree + "deg)";
  $("#gradientDisc").css({ "transform": halfRotate });
  // console.log("halfDegree :", halfDegree);
  // console.log("halfRotate :", halfRotate);
  // console.log("hrotate :", hrotate);


  $("#hour").css({ "transform": hrotate});
    
}, 1000 );
// -----------------------------------------------



setInterval( function() {
  var mins = new Date().getMinutes();
  var mdegree = mins * 6;
  var mrotate = "rotate(" + mdegree + "deg)";

// equation for the disc (halfspeed)
  // var halfDegree = mins * 12 / 2;
  // var halfRotate = "rotate(" + halfDegree + "deg)";

  $("#min").css({ "transform" : mrotate });
  // $("#gradientDisc").css({ "transform": halfRotate });
  // console.log('number :', number);

}, 1000 );
// -----------------------------------------------



setInterval( function() {
  var mins = new Date().getMinutes();
  var mdegree = mins * 6;
  var mrotate = "rotate(" + mdegree + "deg)";

   // remove string from 'mrotate' and keep the integer
  var number = mrotate.replace(/[^0-9]/g, '');

  if (number >= 120 && number <= 270){
    $(".shootingStar").animate({left: '-100', top: '140'}, 700, 'linear', function(){
      $('.shootingStar').css({left:467, top:437});
    });
  }
}, 20000 );





function setStarTwinkleInterval (starClass, fadeTime) {
  setInterval( function () {
    // console.log('it works');
    twinkleStar(starClass, fadeTime);
  }, fadeTime);
}

function twinkleStar(starClass, fadeTime) {
  // console.log(starClass, fadeTime);
  // console.log('it works');
  var starPart1 = $('.' + starClass + '_1');
  var starPart2 = $('.' + starClass + '_2');

  // console.log(starPart1.css('z-index'));
  // console.log(starPart2.css('z-index'));

  if (starPart1.css('z-index') == 1) {
    starPart1.css('z-index', '2').fadeOut(fadeTime);
    starPart2.css('z-index', '1').fadeIn(fadeTime);
  }
  else if (starPart1.css('z-index') == 2) {
    starPart1.css('z-index', '1').fadeIn(fadeTime);
    starPart2.css('z-index', '2').fadeOut(fadeTime);
  }
  else {
    starPart1.css('z-index', '2').fadeOut(fadeTime);
    starPart2.css('z-index', '1').fadeIn(fadeTime);
  }
  // console.log('fart');
}

// ------------------------------------------

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



// function setCloudAnimation(cloudClass, animateTime){
//   setInterval(function(){
//     animateClouds(cloudClass, animateTime);
//   }, animateTime);
// }

// function animateClouds(){
//   var bigCloud = $('.' + cloudClass + '_big');
//   var mediumCloud = $('.' + cloudClass + '_medium');
//   var smallCloud = $('.' + cloudClass + '_small');
//   var microCloud = $('.' + cloudClass + '_micro');
// }


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

 
// -----------------------------------------------

var Aquarius = [];
var Pisces;
var Aries;
var Taurus;
var Gemini;
var Cancer;
var Leo;
var Virgo;
var Libra;
var Scorpio;
var Sagittarius;
var Capricorn;



var date = new Date().getDate();
var month = new Date().getMonth() + 1;
console.log(date);
console.log(month);


// if (true) {

// } else if {

// };




// window.requestAnimationFrame = window.requestAnimationFrame
//                                || window.mozRequestAnimationFrame
//                                || window.webkitRequestAnimationFrame
//                                || window.msRequestAnimationFrame
//                                || function(f){return setTimeout(f, 1000/60)};

// function updateclock(){
//  // var curdate = new Date();
//  var hour_as_degree = ( new Date().getHours() + new Date().getMinutes()/60 ) / 12 * 360;
//  var minute_as_degree = ( new Date().getMinutes() + new Date().getSeconds()/60 ) / 60 * 360;
//  var second_as_degree = ( new Date().getSeconds() + new Date().getMilliseconds()/1000 ) /60 * 360;
//  $('#hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' });
//  $('#min').css({transform: 'rotate(' + minute_as_degree + 'deg)' });
//  $('#gradientDisc').css({transform: 'rotate(' + hour_as_degree + 'deg)' });
//  $('#sec').css({transform: 'rotate(' + second_as_degree + 'deg)' });
//  // console.log(second_as_degree);
//  requestAnimationFrame(updateclock); //
// }

// requestAnimationFrame(updateclock);





setStarTwinkleInterval('star1', 1000);
setStarTwinkleInterval('star2', 1300);
setStarTwinkleInterval('star3', 700);
setStarTwinkleInterval('star4', 500);
setStarTwinkleInterval('star5', 1500);
setStarTwinkleInterval('star6', 2000);
setStarTwinkleInterval('star7', 1800);
// setStarTwinkleInterval('star8', 1400);
setStarTwinkleInterval('star9', 1400);



// setCloudAnimation('.cloud_big', 27000);
// setCloudAnimation('.cloud_medium', 35000);
// setCloudAnimation('.cloud_small', 50000);
// setCloudAnimation('.cloud_micro', 70000);




sunY_high();
animatedCloudBig();
animatedCloudSmall();
animatedCloudMedium();
animatedCloudMicro();
// shootingStar();


