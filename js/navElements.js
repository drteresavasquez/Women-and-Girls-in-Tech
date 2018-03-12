"use strict";
console.log("DOMelements Connected");

let $ = require('jquery');

$('#women, #money, #code, #info').click((e) => {
    let clicked = e.currentTarget.id;
    $(".container").html("");
    $(".container").append(clicked.toUpperCase());

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
    }
});