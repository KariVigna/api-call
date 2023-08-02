import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic


/*
  In place of the XMLHttpRequest, implement promises

  - plan out what the resolved and reject functions will be
  - separating promise logic; -> weather-service; 

*/


// promise initialized, its pending
// its fulfilled or rejected -> doesSomething

function getWeather(city) {
  let promise = new Promise(function(resolve,reject) {
  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=$bd9f598b5f654c407cc0f903fa3ad97a`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      resolve([response]);
    } else {
      reject([response]);
    }
  });

  request.open("GET", url, true);
  request.send();
});

  promise.then(function onResolve(response) { //automically assumes that the first function passed the resolved code, second an optional param for handling errors
    printElements(response);
  }, function onReject(errorMessage) {
    printError(errorMessage);
  }
  );
}

//promise.then(onResolve, onReject);


function add(a,b){
  //a is always negative
  console.log(a<0);
}


function getMoreWeather(lat, lon) {
  let request = new XMLHttpRequest();
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bd9f598b5f654c407cc0f903fa3ad97a`

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response);
    } else {
      printError(this, response);
    }
  });
  
  request.open("GET", url, true);
  request.send();
}

// UI Logic
//print elements lat/lon
function printElements(apiResponse) {
  //todo
  const tempFah = ((apiResponse[0].main.temp - 273.15) * 9/5 + 32);
  document.querySelector('#showResponse').innerText = `The humidity where you are is ${apiResponse.main.humidity}%. 
  The temperature in Fahrenheit is ${tempFah} degrees.
  It feels like ${apiResponse[0].main.feels_like} degrees.`;
}


function printError(apiResponse) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data: ${apiResponse[0].cod}: ${apiResponse[0].message}`;
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