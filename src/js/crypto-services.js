export default class CryptoService {  
  static getWeather(currency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.coinranking.com/v2/coins?-H=&x-access-token:${process.env.API_KEY}&search=${currency}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
