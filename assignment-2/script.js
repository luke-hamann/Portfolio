/*
Name: Luke Hamann
Date: 2024-01-21
*/
"use strict";

function myFunc(value) {
    if (value % 2 != 0) {
        console.log(value);
    }
    value++;
    return value;
}

let myNumber = 3;

for (let i = 0; i < 5; i++) {
    myNumber = myFunc(myNumber);
}
