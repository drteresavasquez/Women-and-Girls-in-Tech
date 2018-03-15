"use strict";

let $ = require('jquery');

let buildCodeOnDOM = () => {
    $(".container").append(`
    <h3 class="page-heading">Code a MadLibs App!</h3>
    <div class="row">
        <div class="col-md code-app">            
        </div>
        <div class="col-md codepen">
        </div>
    </div>`);

    madlibsStart();
    codepenArea();

};

function madlibsStart(){
    $(".code-app").html("");
        $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <img class="card-img-top" src="./images/madlibs.jpeg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Enter Your Words...</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" id="code-button" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`);

    $("#code-button").on("click", () => {
        printMadlibs();
    });
}

function printMadlibs() {
    $(".code-app").html("");
    $(".code-app").append(`<a href="#" id="play-again-button" class="btn btn-primary">Go somewhere</a>`);
    console.log("Button Clicked");

    $("#play-again-button").on("click", () => {
        console.log("OTHER Button Clicked");
        madlibsStart();
    });
}

function codepenArea(){
    $(".codepen").append(`This is where the codepen goes`);
}

module.exports = {
    buildCodeOnDOM
};