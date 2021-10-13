import { convertToMorse, convertToEnglish, allowedChar } from "../modules/non-dom-manipulate.js";
import { displayAlert } from "../modules/dom-manipulate.js";

const userInput = document.getElementById("input_english");
const form = document.getElementById("form_morse");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputStr = userInput.value;

    const validCheck = allowedChar(inputStr);

    if (validCheck)
        displayAlert();

    console.log(convertToMorse(inputStr));
    console.log(convertToEnglish(inputStr));
});