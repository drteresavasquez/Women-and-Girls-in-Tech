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
    <h3 class="page-heading">Fun with MadLibs!</h3>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Code MadLibs</a>
                
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Play MadLibs!</a>
            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active codepen" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>

            <div class="tab-pane fade code-app" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
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
                $(".word-inputs").append(`
            <input type="text" class="form-control madlib-inputs" id="word${item}" placeholder="${selected[item]}">`);
            });
        });
}

//create card element to place on DOM
function madlibsStart() {
    $(".code-app").html("");
    $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <div class="card-body">
            <h5 class="card-title">Enter Your Words...</h5>
            <p class="card-text word-inputs"> 
                  
            </p>
            <a href="#" id="code-button" class="btn btn-primary">Get MadLib!</a>
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
    $(".codepen").append(`<p data-height="682" data-theme-id="light" data-slug-hash="b5dbe71d47493033f5dccba7a8f543b8" data-default-tab="result" data-user="drtechmom" data-embed-version="2" data-pen-title="MadLibs" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/drtechmom/pen/b5dbe71d47493033f5dccba7a8f543b8/">MadLibs</a> by Dr. Tech Mom (<a href="https://codepen.io/drtechmom">@drtechmom</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`);
}

module.exports = {
    buildCodeOnDOM
};