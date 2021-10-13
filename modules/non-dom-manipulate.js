import { morseCode } from "../js/data.js";

const swapObj = (objectToSwap) => {
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

