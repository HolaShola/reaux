function alt_sum(arr) {
    let sum_1 = 0;
    let sum_2 = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            sum_2 += arr[i];
        } else {
            sum_1 += arr[i];
        }
    }
    
    return [sum_1, sum_2];
}

// alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])

console.log(alt_sum([10, 20, 30, 55, 30, 25]));
console.log(alt_sum([50, 60, 60, 45, 70]));
console.log(alt_sum([100, 50]));
console.log(alt_sum([80]));  //[80, 0]
console.log(alt_sum([100, 50, 50, 100]));
console.log(alt_sum([100, 51, 50, 100]));

