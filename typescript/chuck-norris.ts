const MESSAGE: string = readline()
var result: string  = '';
var lastChar: string = ' '

function charToBin(char: string): string {
    var result = (char[0].charCodeAt(0) >>> 0).toString(2);
    while ((result.length % 7))
        result = '0' + result;
    return result;
}

for (const letter of MESSAGE) {
    const binary: string = charToBin(letter)

    for (const value of binary) {
        if (value != lastChar) {
            result += value == '0' ? ' 00 0' : ' 0 0'
        } else {
            result += '0'
        }
        lastChar = value;
    }
}
console.log(result.trim())
