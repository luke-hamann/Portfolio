"use strict";

const $ = selector => document.querySelector(selector);

let container = $("div");

for (let i = 0; i < 5; i++) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello, world!";
    container.appendChild(newParagraph);
}

function changeColors() {
    document.body.classList.toggle("pink");
    container.classList.toggle("blue");
}

$("button").onclick = changeColors;
