// Step one: created hotel object
 var hotel = {
    name: 'Park',
    roomRate: 240, // in dollars
    discount: 15, // as a percentage
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
 }
  // Step two: get elements from HTML and return rates
  
var hotelName = document.getElementById('hotelName');
var roomRate = document.getElementById('roomRate');
var specialRate = document.getElementById('specialRate');
  
  // Step three: write the rates to the HTML
hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();

// Step four: Calculate and write the expiration details
var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
  
  //Add 7 days time in milliseconds
	weekFromToday = newDate(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  // the array to hold the days and month
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];
  
  // get parts of the date
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();
  
  // create the expiration message
  var expiryMsg = 'Offer expires next ';
  expiryMsg += day + ' <br/>(' + date + '' + month + '' + year + ')';
  return expiryMsg;
}


var today = new Date();
var elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
  