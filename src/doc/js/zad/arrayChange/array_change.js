// You are given an array of integers. On each move you are allowed to increase 
// exactly one of its element by one. Find the minimal number of moves required 
// to obtain a strictly increasing sequence from the input.

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.

function arrayChange(arr) {
    let res = 0;
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i] + res) {
            continue;
        } else {
            if (arr[i + 1]) {
                diff = arr[i] - arr[i + 1];
                res = res + arr[i] - arr[i + 1] + 1;
            }
        }
    }
    return res;
}

console.log(arrayChange([1, 1, 1]))