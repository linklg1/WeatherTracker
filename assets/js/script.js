$(document).ready(function () { 
 
    // Global variables //

//momemt//
let Today = moment().format("LL"); 

let day1 = moment().add(1, "days").format("LL");
let day2 = moment().add(2, "days").format("LL");
let day3 = moment().add(3, "days").format("LL");
let day4 = moment().add(4, "days").format("LL");
let day5 = moment().add(5, "days").format("LL");

//other//
let city;
let cities; 
let weatherdata = document.getElementById("weather-data")  
let submit = document.getElementById("submit")




 //Functions//

 
 // display 5 days cards //

runfiveday = function() {
   weatherdata.setAttribute("style", "display: block;");
    





//Event Listeners //
 submit.addEventListener("click", runfiveday);


});