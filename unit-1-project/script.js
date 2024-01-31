"use strict";

const $ = selector => document.querySelector(selector);

const processForm = (event) => {
    event.preventDefault();

    let name = $("#name").value;
    $("#output").classList.remove("error");

    if (name == "") {
        $("#output").textContent = "Please enter a name.";
        $("#output").classList.add("error");
        return;
    }

    $("#output").textContent = `Hello, ${name}!\n\n`;
    for (let i = 1; i <= name.length; i++) {
        $("#output").textContent += `${name.substr(0, i)}\n`;
    }

    $("#name").focus();
    $("#name").select();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#go").addEventListener("click", processForm);
});
