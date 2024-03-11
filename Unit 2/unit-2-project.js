"use strict";

class Car {
    constructor(description) {
        this.description = description;
    }

    getPrintOut() {
        return `${this.description} car`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let txtDescription = document.querySelector("#description");
    let btnSubmit = document.querySelector("#submit");
    let elmOutput = document.querySelector("#output");

    function clearAndFocusInput() {
        txtDescription.value = "";
        txtDescription.focus();
    }

    btnSubmit.addEventListener("click", (event) => {
        event.preventDefault();

        let description = txtDescription.value.trim();

        if (description == "") {
            elmOutput.innerText = "Please enter a description.";
            clearAndFocusInput();
            return;
        }

        let myCar = new Car(description);
        elmOutput.innerText = myCar.getPrintOut();
        clearAndFocusInput();
    });
});
