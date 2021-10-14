import { convertToMorse, convertToEnglish, allowedChar } from "../modules/non-dom-manipulate.js";
import { displayAlert, displayResult } from "../modules/dom-manipulate.js";

const userInput = document.getElementById("input_english");
const form = document.getElementById("form_morse");
const radioBtnMorseToEnglish = document.getElementById("convertToEnglish");
const radioBtnEnglishToMorse = document.getElementById("convertToMorse");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputStr = userInput.value;

    const validCheck = allowedChar(inputStr);

    // Displays an alert if the user enters an invalid character or leaves the input empty
    if (validCheck || inputStr === "")
        displayAlert();

    // If input is valid, display translated results 
    else {
        if (radioBtnEnglishToMorse.checked) {
            let morseText = convertToMorse(inputStr);
            console.log(morseText);
            displayResult(morseText);
        }
        else if (radioBtnMorseToEnglish.checked) {
            let englishText = convertToEnglish(inputStr);
            console.log(englishText);
            displayResult(englishText);
        }
    }


});