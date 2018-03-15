"use strict";

let $ = require('jquery'),
    home = require('./homePage'),
    women = require('./womenInITpage'),
    money = require('./moneyPage'),
    code = require('./codePage'),
    info = require('./infoPage');

$("#home").addClass("active-nav");
home.buildHomeOnDOM();

$('#women, #money, #code, #info, #home').click((e) => {
    $(".container").html("");
    $('#money, #code, #info, #women, #home').removeClass("active-nav");
    let clicked = e.currentTarget.id;

    switch (clicked) {
        case 'home':
            $("#home").addClass("active-nav");
            home.buildHomeOnDOM();
            break;
        case 'women':
            $("#women").addClass("active-nav");
            women.buildWomenOnDOM();
            break;
        case 'money':
            $("#money").addClass("active-nav");
            money.buildMoneyOnDOM();
            break;
        case 'code':
            $("#code").addClass("active-nav");
            code.buildCodeOnDOM();
            break;
        case 'info':
            $("#info").addClass("active-nav");
            info.buildInfoOnDOM();
            break;
        default:
            console.log("Default");
    }
});