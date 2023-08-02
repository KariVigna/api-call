## OpenWeather API

1. Follow along with the weekend homework to build out a basic application that works with the OpenWeather API. Once you've finished the weekend homework, incorporate the following functionality in your application:

- "the sky is ${apiResponse.weather[0].main}" -> 
The weather: 
  - scattered clouds (new)
  - Temperature
  - Humidity
  - windSpeed (if speed>10, "Windy" else display the speed) (new)




3. Allow users to search by other options beyond city.

zipcode?


4. Check out other OpenWeather API endpoints and add additional code to your application so that users can query the API for other interesting data.

5. Use the DevTools Network tab to look at the API response object.

Optional: Try adding a try...catch block to handle API errors. Don't look at future lessons on how to do this. A big part of being a developer is figuring out how to combine different tools in an application. This is a good opportunity to practice! Hint: You'll want to throw an error if the API call is not successful.