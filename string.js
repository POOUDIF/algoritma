function reverseAlphabet(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result ='';
    let numberPart = '';

    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if (alphabet.includes(char.toUpperCase())) {
            result += char;
        } else {
            numberPart += char;
        }
    }
    return result.split('').reverse().join('') + numberPart;
}

const inputStr = "NEGIE1";
const reversedStr = reverseAlphabet(inputStr);
console.log("Hasil =", reversedStr);