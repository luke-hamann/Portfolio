/*
Name: Luke Hamann
Date: 2024-01-28
*/
"use strict";

let myArray = [3, 8, 7, 13];

let myExpression = function(parameter) {
    parameter++;
    console.log(parameter);
};

function checkEvenOdd(someFunction, someNumber) {
    if (someNumber % 2 == 0) {
        someFunction(someNumber)
    } else {
        console.log("the number is odd");
    }
}

for (let i in myArray) {
    checkEvenOdd(myExpression, parseInt(i));
}
