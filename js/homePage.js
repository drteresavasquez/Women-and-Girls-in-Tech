"use strict";

let $ = require('jquery');

let buildHomeOnDOM = () =>{
    $(".container").append(`
    <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/code-screen.jpeg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-info">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/creative.jpeg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-info">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/vr.jpeg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-info">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `);
};

module.exports = {
    buildHomeOnDOM
};