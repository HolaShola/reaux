let arr = [1, 2, 3, 4, 5];

let leftResult = arr.reduce((sum, currentValue) => {
    console.log(sum);
    return sum + currentValue;
});

let rightResult = arr.reduceRight((sum, currentValue) => {
    console.log(sum);
    return sum + currentValue;
});

console.log(`left - ${leftResult}`);
console.log(`right - ${rightResult}`);