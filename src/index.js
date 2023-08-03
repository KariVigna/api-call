import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/weather-service';


// Business Logic

/*
  In place of the XMLHttpRequest, implement promises

  Use case for casual internet usage
  - plan out what the resolved and reject functions will be
  - separating promise logic; -> weather-service; 
  - browser sends a GET request to the server that is named 'learnhowtoprogram.com/'
  - response: HTML, JS  -> UI that we can browse and experience
  - the browser displays the webpage and we browse around

  utilize technology and communicate with computers to communicate ideas, solve problems
  - Integrated Development Environment - computer doesn't know difference between characters, but uses binary to make calculation
  - Compilation 
  - logic gates. 
        - 1 0 1 0 ->   (1 & 0) -> 0, or, not -> a wesbite or a program shows on our page
  
   - the goal of APIs is to simplify communication between servers and our programs



   GIPHY API - returns preset # of .gif files

  fun Amazon - subsidiary that accesses amazon's product list and can process an order

  productsDisplay  - GET request to Amazon products API

  Stripe - API processes credit card data to allow for transactions

  GIPHY api on purchase, display a random API


  redundancy: successful outcomes seperate from external servers
    - in house api that is more specific to the problem
    - placeholder information - if api fails, display weather data from last successful call (hopefully recent)
    

    UI Logic


    Business Logic  -> modules 


    Persistence Logic (SQL, Database)


    try 
     let promise = new fetch..... -> database api call determine functionality !!!
     let redundant =  fetch(''); -> sucess 

    NULL
    NaN

    catch

   - weather data

   1. go outside and collect it ourselves
   2. use someone else's pre-collected data

   simplify our code

*/ 

//goal: implement the fetch API


// promise initialized, its pending
// its fulfilled or rejected -> doesSomething
function getWeather(city) {
  WeatherService.getWeather(city)
    .then(function(response) {
      if (response.main) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

//getMoreWeather
function getMoreWeather(lat, lon){
  WeatherService.getLatLonWeather(lat, lon)
  .then(function(response) {
    if (response.main) {
      printElements(response);
    } else {
      printError(response);
    }
  });

}

//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

//https://openweathermap.org/api/geocoding-api

// UI Logic
//print elements lat/lon
function printElements(response) {
  //todo
  const tempFah = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(2);
  const feelsLike = ((response.main.feels_like - 273.15) * 9/5 + 32).toFixed(2);
  document.querySelector('#showResponse').innerText = `The humidity where you are is ${response.main.humidity}%. 
  The temperature in Fahrenheit is ${tempFah} degrees.
  It feels like ${feelsLike} degrees.`; 
}


function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data: ${error}`;
}

function displayGif(gifInfoArr){
  let height =  gifInfoArr[1];
  let width = gifInfoArr[2];
  let url = gifInforArr[0];

  const img = document.querySelector('#weather-gif');

  img.setAttribute('height', height);
  img.setAttribute('width', width);
  img.setAttribute('src', url);
}

function handleFormCity(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

function handleFormLatLon(event) {
  event.preventDefault();
  const lat = document.querySelector('#latitude').value;
  const lon = document.querySelector('#longitude').value;
  document.querySelector('#latitude').value = null;
  document.querySelector('#longitude').value = null;
  getMoreWeather(lat, lon);
}


window.addEventListener("load", function() {
  document.querySelector('#cityName').addEventListener("submit", handleFormCity);
  document.querySelector('#latLon').addEventListener("submit", handleFormLatLon);

});