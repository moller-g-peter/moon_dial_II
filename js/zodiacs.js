var date = new Date().getDate();
var month = new Date().getMonth() + 1;

console.log(date);

if((month == 1 && date <= 20) || (month == 12 && date >=22)) {
    // return zodiacSigns.capricorn;
    console.log("capricorn");
  } else if ((month == 1 && date >= 21) || (month == 2 && date <= 18)) {
    // return zodiacSigns.aquarius;
    console.log("aquarius");
  } else if((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
    // return zodiacSigns.pisces;
    console.log("pisces");
  } else if((month == 3 && date >= 21) || (month == 4 && date <= 20)) {
    // return zodiacSigns.aries;
    console.log("aries");
  } else if((month == 4 && date >= 21) || (month == 5 && date <= 20)) {
    // return zodiacSigns.taurus;
    console.log("taurus");
  } else if((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
    // return zodiacSigns.gemini;
    console.log("gemini");
  } else if((month == 6 && date >= 22) || (month == 7 && date <= 22)) {
    // return zodiacSigns.cancer;
    console.log("cancer");
  } else if((month == 7 && date >= 23) || (month == 8 && date <= 23)) {
    // return zodiacSigns.leo;
    console.log("leo");
  } else if((month == 8 && date >= 24) || (month == 9 && date <= 23)) {
    // return zodiacSigns.virgo;
    console.log("virgo");
  } else if((month == 9 && date >= 24) || (month == 10 && date <= 23)) {
    // return zodiacSigns.libra;
    console.log("libra");
  } else if((month == 10 && date >= 24) || (month == 11 && date <= 22)) {
    // return zodiacSigns.scorpio;
    console.log("scorpio");
  } else if((month == 11 && date >= 23) || (month == 12 && date <= 21)) {
    // return zodiacSigns.sagittarius;
    console.log("sagittarius");
  }