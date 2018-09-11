// Given a string, replace each its character by the next one in the English 
// alphabet (z would be replaced by a).

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    return inputString.split('').map(item =>
        item == 'z' ? 'a' : String.fromCharCode(item.charCodeAt() + 1)
    ).join('');
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('z'));
console.log(alphabeticShift('aaaabbbccd'));
console.log(alphabeticShift('fuzzy'));
console.log(alphabeticShift('codesignal'));
