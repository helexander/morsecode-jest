import { morseCode } from "../js/data.js";

export const convertToMorse = (str) => {
    return str
        .toLowerCase()
        .split("")
        .map(el => {
            return morseCode[el] ? morseCode[el] : el;
        })
        .join(" ");
};
