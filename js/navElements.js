"use strict";

let $ = require('jquery'),
    home = require('./homePage'),
    women = require('./womenInITpage'),
    money = require('./moneyPage'),
    code = require('./codePage'),
    info = require('./infoPage');

$("#home").addClass("active");
home.buildHomeOnDOM();

$('#women, #money, #code, #info, #home').click((e) => {
    $(".container").html("");
    $('#money, #code, #info, #women, #home').removeClass("active");
    let clicked = e.currentTarget.id;

    switch (clicked) {
        case 'home':
            $("#home").addClass("active");
            home.buildHomeOnDOM();
            break;
        case 'women':
            $("#women").addClass("active");
            women.buildWomenOnDOM();
            break;
        case 'money':
            $("#money").addClass("active");
            money.buildMoneyOnDOM();
            break;
        case 'code':
            $("#code").addClass("active");
            code.buildCodeOnDOM();
            break;
        case 'info':
            $("#info").addClass("active");
            info.buildInfoOnDOM();
            break;
        default:
            console.log("Default");
    }
});