"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    let txtName = $("#name");
    let btnGo = $("#go");
    let elmOutput = $("#output");

    btnGo.addEventListener("click", event => {
        event.preventDefault();

        let name = txtName.value;

        if (name == "") {
            elmOutput.textContent = "Please enter a name.";
            return;
        }

        elmOutput.textContent = `Hello, ${name}!\n\n`;

        for (let i = 1; i <= name.length; i++) {
            let fragment = name.substr(0, i);
            elmOutput.textContent += fragment + "\n";
        }
    })
});
