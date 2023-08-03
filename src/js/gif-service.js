import onRecieve_API_Response from "./utility-function";'utility-function.js'
export default class gifService {  
  static getGif(description) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${description}&api_key=dlWU7u5WFvSSxMzFOcp8p6Z1Rek1gdaq&limit=1`)
      .then(response => onRecieve_API_Response(response))      
      .catch(function(error) {
        return error;
      });
  }

}