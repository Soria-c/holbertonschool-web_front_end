"use strict";

function divideBy(firstNumber) {
    return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
    return (secondNumber) => secondNumber + firstNumber;
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
