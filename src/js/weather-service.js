import onRecieve_API_Response from "./utility-function";


export default class WeatherService {  
  static getWeather(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
      .then(response => onRecieve_API_Response(response))      
      .catch(function(error) {
        return error;
      });
  }
  static getLatLonWeather(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
    .then(response => onRecieve_API_Response(response))
    .catch(function(error) {
        return error;
    });
  }
}
