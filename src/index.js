import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-services.js';

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    console.log("hello");
    let currency = $('#location').val();
    clearFields();
    let promise = CryptoService.getWeather(currency);
    console.log(promise);
    // promise.then(function(response) {
    //   const body = JSON.parse(response);
      // $('.showHumidity').text(`The name of the cryptocurrency in ${currency} is ${body.data.coins[0]}`);
    //   $('.showTemp').text(`The ranking of this currency is ${body.data.coins[0].rank}.`);
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
// }); 

