import { swapObj, convertToMorse, convertToEnglish, allowedChar } from "../modules/non-dom-manipulate";

describe("Valid input check", () => {
    it("Checks for invalid characters", () => {
        expect(allowedChar("There are no invalid characters")).toBe(false);
        expect(allowedChar("This_is_an_invalid+input")).toBe(true);
        expect(allowedChar("123 morse code")).toBe(false);
    });
})

describe("Object key-value swap function", () => {
    const animalSounds = {
        "cat": "meow",
        "dog": "woof",
        "sheep": "baa"
    };

    const basicMorse = {
        a: '.-', b: '-...',
        1: '.----', 2: '..---',
        ' ': '/', '?': '..--..',
    };

    it("Swap key value pairs", () => {
        expect(swapObj(animalSounds)).toStrictEqual({
            "meow": "cat",
            "woof": "dog",
            "baa": "sheep"
        });
    });

    it("Swaps Morse code to English", () => {
        expect(swapObj(basicMorse)).toStrictEqual({
            '.-': 'a',
            '-...': 'b',
            '.----': '1',
            '..---': '2',
            '/': ' ',
            '..--..': '?'
        });
    });
});

describe("Conversion from English to Morse", () => {
    it("Converts English characters to Morse code", () => {
        expect(convertToMorse("ABC")).toBe(".- -... -.-.");
        expect(convertToMorse("ONETWOTHREE")).toBe("--- -. . - .-- --- - .... .-. . .");
    });

    it("Converts numbers to Morse code", () => {
        expect(convertToMorse("123987")).toBe(".---- ..--- ...-- ----. ---.. --...");
        expect(convertToMorse("012")).toBe("----- .---- ..---");
    });

    it("Converts English sentences to Morse code", () => {
        expect(convertToMorse("This is a sentence")).toBe("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .");
        expect(convertToMorse("SOS. Coords 123 401. South.")).toBe("... --- ... .-.-.- / -.-. --- --- .-. -.. ... / .---- ..--- ...-- / ....- ----- .---- .-.-.- / ... --- ..- - .... .-.-.-");
    });
});

describe("Conversion from Morse to English", () => {
    it("Converts Morse code to English", () => {
        expect(convertToEnglish(".- -... -.-.")).toBe("abc");
        expect(convertToEnglish(".---- ..--- ...-- ----. ---.. --...")).toBe("123987");
    });

    it("Converts Morse code to English sentences", () => {
        expect(convertToEnglish("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .")).toBe("this is a sentence");
        expect(convertToEnglish("... --- ... .-.-.- / -.-. --- --- .-. -.. ... / .---- ..--- ...-- / ....- ----- .---- .-.-.- / ... --- ..- - .... .-.-.-")).toBe("sos. coords 123 401. south.");
    });
});