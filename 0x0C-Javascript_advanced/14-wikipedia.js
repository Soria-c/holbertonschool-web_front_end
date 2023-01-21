"use strict";

function createElement(data) {
    const  p = document.createElement("p");
    p.innerText = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    document.body.innerText = "";
    xhr.responseType = "json";
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhr.send();
    xhr.onload = function () {
        callback(xhr.response.query.pages[21721040].extract);
    }
}
queryWikipedia(createElement);
