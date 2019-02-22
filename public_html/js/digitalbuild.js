/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    helloWord();
    }
);


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