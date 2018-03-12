"use strict";

let $ = require('jquery');

$('#women, #money, #code, #info').click((e) => {
    let clicked = e.currentTarget.id;
    $(".container").html("");

    switch (clicked) {
        case 'women':
            console.log(clicked);
            break;
        case 'money':
            console.log(clicked);
            break;
        case 'code':
            console.log(clicked);
            break;
        case 'info':
            console.log(clicked);
            break;
        default:
            console.log("Default");
    }
});