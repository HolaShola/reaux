let s1 = 'aabcc';
let s2 = 'adcaa';

let s3 = 'zzzz';
let s4 = 'zzzzzzz';

let s5 = 'abca';
let s6 = 'xyzbac';

let s7 = 'a';
let s8 = 'b';

let s9 = 'a';
let s10 = 'aaa';

// function commonCharacterCount(str1, str2) {
//     let result = 0;
//     let currentIndex = 0;
//     let str3 = str1.split('').sort().join('');
//     let str4 = str2.split('').sort().join('');
    
//     for(let i = 0; i < str3.length; i++) {
//         if(str4.indexOf(str3[i], currentIndex) == -1) {
//             continue;
//         } else {
//             currentIndex = str4.indexOf(str3[i]);
//             result += 1;
//             currentIndex++;
//         }
//     }
//     return result;
// }

function commonCharacterCount(s1, s2) {
    let firstLength = s2.length;
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], '');
    }
    return firstLength - s2.length;
}

console.log(commonCharacterCount(s1, s2));
console.log(commonCharacterCount(s3, s4));
console.log(commonCharacterCount(s5, s6));
console.log(commonCharacterCount(s7, s8));
console.log(commonCharacterCount(s9, s10));