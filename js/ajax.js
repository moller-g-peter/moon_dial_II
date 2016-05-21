




$.ajax({
  url: 'json/zodiac.json',
  dataType: 'json',
  type: 'get',
  // cache: false,
  success: function(data){
    $(data).each(function(){
      console.log("data", data.Aquarius.jan.date[1]);
    });
  }
});


// function iterateZodiacJS (data){
//   $(data.zodiac).each(function(){
//     console.log("gsdfg");
//   });
// }

// $.getJSON('json/zodiac.json', function(data){
//   console.log('kjshdgf');
// });




// function iterateZodiacJSON (zodiacData){
//   for(var i = 0; i < zodiacData.length; i++){
//     console.log("good");
//   }
// }

// $.each(data.dates, function(index, element) {
//     alert(element.timeStamp);
// });

// $.each(data, function(i, item) {
//     alert(data[i].PageName);
// });





// function(zodiac){
//     // console.log(data);
//     $(zodiac).each(function(index, value) {
      
//       console.log(index);
//     });
//   }