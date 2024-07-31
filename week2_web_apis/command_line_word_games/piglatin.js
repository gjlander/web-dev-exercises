const args = process.argv.slice(2);

if (args.length !== 1) {
    return console.error('Please enter your phrase surrounded by quotes.');
}
const phraseArray = args[0].split(' ');

// console.log(phraseArray);

const vowels = ['a', 'e', 'i', 'o', 'u'];

const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
];
const pigLatinArray = phraseArray.map((word) => {
    //checking if starts with a vowel
    if (vowels.some((vowel) => word.toLowerCase().startsWith(vowel))) {
        return (word += 'way');
        //checking if starts with a consonant
    } else if (consonants.some((con) => word.toLowerCase().startsWith(con))) {
        //checking if second letter is also a consonant
        if (consonants.some((con) => word.toLowerCase().charAt(1) === con)) {
            const pigWord = word.slice(2) + word.slice(0, 2) + 'ay';
            return pigWord;
        }
        //check if second letter is a vowel
        if (vowels.some((vowel) => word.toLowerCase().charAt(1) === vowel)) {
            const pigWord = word.slice(1) + word.charAt(0) + 'ay';
            return pigWord;
        }
        //return word as normal if it has symbols or numbers
        return word;
        //return word if it is a number or a symbol
    } else {
        return word;
    }
});

console.log(pigLatinArray.join(' '));
