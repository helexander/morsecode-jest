import { convertToMorse, convertToEnglish, allowedChar } from "../modules/non-dom-manipulate.js";

const userInput = document.getElementById("input_english");
const form = document.getElementById("form_morse");

// userInput.addEventListener("onkeyup", (event) => {

// })

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputStr = userInput.value;

    allowedChar(inputStr);

    console.log(convertToMorse(inputStr));
    console.log(convertToEnglish(inputStr));
});