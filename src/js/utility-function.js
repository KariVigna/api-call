
import gifService from './gif-service.js'
export default function onRecieve_API_Response(response) {
    if (!response.ok) { //if status !== 200
      const errorMessage = `${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    } else {

      let weather = response.json();
      let gif = gifService.getGif(weather.main.description);
      return [weather, [gif.images.original.url, gif.images.original.height, gif.images.original.width]]; //todo: trace response and update index.js

    }
  }     