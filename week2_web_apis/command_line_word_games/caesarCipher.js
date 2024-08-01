const args = process.argv.slice(2);

if (args.length !== 2) {
    return console.error(
        'Please enter your phrase surrounded by quotes, followed by a number'
    );
}
const phraseArray = args[0].split(' ');
const shift = parseFloat(args[1]);

if (isNaN(shift)) {
    console.error('Second argument must be a number');
}
// console.log(phraseArray);
const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
const shiftedPhraseArray = phraseArray.map((word) => {
    const wordArray = word.toLowerCase().split('');
    // console.log(wordArray);
    const shiftedWordArray = wordArray.map((letter) => {
        const i = alphabet.findIndex((alpha) => alpha === letter);
        const shiftedI = i + shift;
        const remainder = shiftedI - (alphabet.length - 1);
        // console.log('shiftedI', shiftedI);
        // console.log('remainder', remainder);
        // return alphabet[shiftedI];
        if (shiftedI < 0) {
            return alphabet[alphabet.length + shiftedI];
        } else if (remainder > 0) {
            return alphabet[remainder - 1];
        } else {
            return alphabet[shiftedI];
        }
    });
    // console.log(shiftedArray);
    return shiftedWordArray.join('');
});

console.log(shiftedPhraseArray.join(' '));
