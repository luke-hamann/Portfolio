"use strict";

let container = document.querySelector("div");

for (let i = 0; i < 5; i++) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello, world!";
    container.appendChild(newParagraph);
}

function changeColors() {
    document.body.style.background = "pink";
    container.style.background = "lightblue";
}
