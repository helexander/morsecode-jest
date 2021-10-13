import { convertToMorse, convertToEnglish } from "../modules/non-dom-manipulate.js";

const userInput = document.getElementById("input_english");
const form = document.getElementById("form_morse");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputStr = userInput.value;

    console.log(convertToMorse(inputStr));
    console.log(convertToEnglish(inputStr));
});