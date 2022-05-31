$(document).ready(function () {

 let Today = moment().format("LL"); 
 let weatherdata = document.querySelector("#weather-data")  
let submit = document.querySelector("#submit")

runfiveday = function(){
    event.preventDefault();
    weatherdata.setAttribute("style", "display: block;");

}
















 submit.addEventListener("click", runfiveday)

 });
