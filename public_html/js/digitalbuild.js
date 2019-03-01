/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
  $('#error').html("Estamos actualizando la geolocalizacion...");
  helloWordGps();
  helloWord();
    
}
);

function helloWordGps () {
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
	$('#error').html('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    function onError(error) {
        alert('Error al buscar la geolocalizacion: code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


function helloWord() {
    $.ajax({
        url: "https://digitalbuildonline.000webhostapp.com/insert.php",
        type: "POST",
        data: {
            user_param: "json"
        },
        dataType: "json",
        success: function (data) {
            
        },
        error: function (request) {
            
        },
        async: false,
        timeout: 6000000 // sets timeout to 3 seconds
    });
}