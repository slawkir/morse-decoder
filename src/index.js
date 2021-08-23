const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letterArr = [];
    let reverceMorse = {};
    for (let name in MORSE_TABLE) {
        reverceMorse[Object.values(MORSE_TABLE[name])] = name;
    }
    for(let letter in reverceMorse) {
        let zeros = 10 - reverceMorse[letter].length *2 ;
        let str = '0';
        str = str.repeat(zeros);
        reverceMorse[letter] = str + reverceMorse[letter].split('').map(item => {
            return item == '.' ? item =  '10' : item =  '11';
        }).join('');
    }  
    reverceMorse[' '] = '**********';
    console.log(reverceMorse);
    for(let i = 0; i < expr.length; i = i + 10){
        letterArr.push(expr.slice(i, i+ 10));
    }
    let result = '';
    
        letterArr.map(item => {
            for (let i in reverceMorse) {
                if (reverceMorse[i] == item)  {
                    result += i;
                }
            }
        });
        return result;
    


}
console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));
module.exports = {
    decode
}