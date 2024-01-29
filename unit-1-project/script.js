"use strict";

const $ = selector => document.querySelector(selector);

const txtName = $("#name");
const btnGo = $("#go");
const elmOutput = $("pre");

btnGo.addEventListener("click", event => {
    event.preventDefault();

    let name = txtName.value;
    elmOutput.classList.remove("error");

    if (name == "") {
        elmOutput.textContent = "Please enter a name.";
        elmOutput.classList.add("error");
        return;
    }

    elmOutput.textContent = `Hello, ${name}!\n\n`;
    for (let i = 1; i <= name.length; i++) {
        elmOutput.textContent += `${name.substr(0, i)}\n`;
    }

    txtName.select();
});
