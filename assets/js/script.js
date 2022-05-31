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
let weatherdata = document.querySelector("#weather-data")  
let submit = document.querySelector("#submit")



 //Functions//

 //Load history from local storage re: city searched//
 function loadRecentsone() {
    let lastSearch = localStorage.getItem("Recents");
    if (lastSearch) {
      city = lastSearch;
      search();
    } else {
      city = "Toronto";
      search();
    }
  };

  loadRecentsone()

//Load history from local storage re: cities searched//

  function loadRecentsmany() {
    let recentCities = JSON.parse(localStorage.getItem("cities"));

    if (recentCities) {
      cities = recentCities;
    } else {
      cities = [];
    }
  };

  loadRecentsmany()

// display 5 days cards //
runfiveday = function(){
    event.preventDefault();
    weatherdata.setAttribute("style", "display: block;");
    getCity();
    search();
    document.querySelector("#city-input").val("");
    listCities();

};


// save searched cities to local storage
  function saveToLocalStorage() {
    localStorage.setItem("Recents", city);
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  };


  // retrieve user input
  function getCity() {
    city = document.querySelector("#city-input").val();
    if (city && cities.includes(city) === false) {
      saveToLocalStorage();
      return city;
    
  }};

//Run API
function search () {}








//Event Listeners //
 submit.addEventListener("click", runfiveday)


});