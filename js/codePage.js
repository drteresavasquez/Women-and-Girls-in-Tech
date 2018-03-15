"use strict";

let $ = require('jquery'),
    lib;

function getMadLibsData() {
    return $.ajax({
        url: "./js/madlibs.json"
    });
}

let buildCodeOnDOM = () => {
    $(".container").append(`
    <h3 class="page-heading">Code a MadLibs App!</h3>
    <div class="row">
        <div class="col-md code-app">            
        </div>
        <div class="col-md codepen">
        </div>
    </div>`);

    //append madlibs app to DOM
    madlibsStart();

    //append codepen area to DOM
    codepenArea();
};

//randomly select madlibs from JSON and create input fields for DOM
function generateMadlibs() {
    getMadLibsData()
        .then((data) => {
            var selected = data[Math.floor(Math.random() * data.length)];
            let keys = Object.keys(selected);
            let full = keys.pop();
            let value = selected[full];
            //break the solution on "," to create array
            lib = value.split("/");
            keys.forEach((item) => {
                $(".word-inputs").append(`<label for="word${item}">${selected[item]}</label>
            <input type="text" class="form-control" id="word${item}" placeholder="placeholder">`);
            });
        });
}

//create card element to place on DOM
function madlibsStart() {
    $(".code-app").html("");
    $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <img class="card-img-top" src="./images/madlibs.jpeg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Enter Your Words...</h5>
            <p class="card-text word-inputs"> 
            
            </p>
            <a href="#" id="code-button" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`);

    //randomly select a madlib from JSON file and add to DOM $(".word-inputs")
    generateMadlibs();

    //get all user values and pass to printMadlibs() along with last element from JSON file (madlibs solution)
    $("#code-button").on("click", () => {
        let array = [
            $("#word1").val() ? $("#word1").val() : "",
            $("#word2").val() ? $("#word2").val() : "",
            $("#word3").val() ? $("#word3").val() : "",
            $("#word4").val() ? $("#word4").val() : "",
            $("#word5").val() ? $("#word5").val() : "",
            $("#word6").val() ? $("#word6").val() : "",
            $("#word7").val() ? $("#word7").val() : "",
            $("#word8").val() ? $("#word8").val() : "",
            $("#word9").val() ? $("#word9").val() : "",
            $("#word10").val() ? $("#word10").val() : "",
            ""
        ];
        printMadlibs(array, lib);
    });
}

//accepts array of user input and array of the solution to merge and print to DOM
function printMadlibs(array, lib) {
    $(".code-app").html("");
    $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <div class="card-body">
            <h5 class="card-title">Your Results</h5>
            <p class="card-text">
            
            </p>
            <a href="#" id="play-again-button" class="btn btn-primary">Play Again</a>
        </div>
    </div>`);

    lib.forEach((item, index) => {
        $(".card-text").append(`${item} <strong><u>${array[index]}<u></strong>`);
    });

    $("#play-again-button").on("click", () => {
        //start a new random madlib
        madlibsStart();
    });
}

function codepenArea() {
    $(".codepen").append(`This is where the codepen goes`);
}

module.exports = {
    buildCodeOnDOM
};