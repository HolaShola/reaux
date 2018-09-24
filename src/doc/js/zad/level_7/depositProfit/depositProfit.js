function depositProfit(deposit, rate, threshold) {
    let years = 0;

    while(deposit < threshold) {
        deposit *= (1 + rate / 100);
        years++;
    }
    
    return years;
}

console.log(depositProfit(100, 20, 170));
console.log(depositProfit(100, 1, 101));
console.log(depositProfit(1, 100, 64));
console.log(depositProfit(20, 20, 50));
console.log(depositProfit(50, 25, 100));
    