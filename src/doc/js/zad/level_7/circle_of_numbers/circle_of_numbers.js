// Consider integer numbers from 0 to n - 1 written down along the circle 
// in such a way that the distance between any two neighboring numbers is equal 
// (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially 
// opposite position to firstNumber.  

function circleOfNumbers(n, firstNumber) {
    let res = firstNumber + n / 2;
    if (res > n) {
        return res - n;
    } else if (res == n) {
        return 0;
    }

    return res;
}

function circleOfNumbers(n, firstNumber) {
    return (n/2+firstNumber)%n
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbers(4, 1));
console.log(circleOfNumbers(6, 3));