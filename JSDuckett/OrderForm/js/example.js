// Variables and Welcome message
var greeting = "Hello";
var name = 'Marissa'; //create a prompt for the user name?
var message =', please check your order:';

var welcome = greeting + name + message;

//Creating details to hold variables of the sign
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//id of the greeting

var greet = document.getElementById('greeting');
greet.textContent = welcome;

//get the element that has the id of userSign, add to the content

var theSign = document.getElementById('userSign');
theSign.textContent = sign;

//get the element that has the id of tiles, add to the content
var theTiles = document.getElementById('tiles');
theTiles.textContent = tiles;

//get the element with the id of subTotal, add to the content
var theSubTotal = document.getElementById('subTotal');
theSubTotal.textContent = '$' + subTotal;

//get the element for shipping, add to the content
var theSubTotal = document.getElementById('shipping');
theSubTotal.textContent = '$' + shipping;

//get the element for grandTotal, add to the content
var theGrandTotal = document.getElementById('grandTotal');
theGrandTotal.textContent = '$' + grandTotal;



