import { morseCode } from "../js/data.js";
import { displayAlert } from "./dom-manipulate.js";

export const allowedChar = (input) => {
    const regex = /[^a-z0-9 !,.?]/gi;

    if ((regex.test(input)))
        displayAlert();

    return regex.test(input);

}

export const swapObj = (objectToSwap) => {
    const swappedObj = {};
    Object.keys(objectToSwap).forEach((key) => {
        swappedObj[objectToSwap[key]] = key;
    });
    return swappedObj;
}

export const convertToMorse = (str) => {
    return str
        .toLowerCase()
        .split("")
        .map(el => {
            return morseCode[el];
        })
        .join(" ");
};

export const convertToEnglish = (str) => {
    const convertedMorseFormat = swapObj(morseCode);

    return str
        .split(" ")
        .map(el => {
            return convertedMorseFormat[el];
        })
        .join(""); // to remove whitespace from both side of the string
}

