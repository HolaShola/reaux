let myArr = [4, 2, 1, 5, 8, 7, 3, 6];
let myArr2 = [4, 2, 1, 5, 8, 7, 3, 6];

function bubbleSort(arr) {
    let x;
    for (let i = 0, end = arr.length - 1; i < end; i++) {
        for (let j = 0; j < end - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }
}

const bubbleSort_2 = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

console.log(myArr);
bubbleSort(myArr);
console.log(myArr);

console.log(myArr2);
bubbleSort_2(myArr2);
console.log(myArr2);