let arr = [3, 4, 2, -6, 4, 8, 3, -1, 2, 5];
let max = -Infinity;

for(let i = 0; i < arr.length - 1; i++) {
    let result = arr[i] * arr[i + 1];
    if (result > max) {
        max = result;
    }
}

let myArr = [1, 2, 3, 4, 5, 10, 11];
let firstSum = 0;
let secondSum = 0;

for(let i = 0; i < myArr.length; i += 2) {
    firstSum = myArr[i + 1] ? myArr[i] + myArr[i + 1] + firstSum : myArr[i] + firstSum;
}

for(let i = 0; i < myArr.length; i++) {
    secondSum += myArr[i];
}

console.log(firstSum);
console.log(secondSum);
console.log(max);