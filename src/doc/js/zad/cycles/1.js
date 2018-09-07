let inner = ['a', 'b', 'c', 'd', 'e'];
let inner_2 = ['a', 'b'];
let output = ['e', 1, 'd', 2, 'c', 3, 'b', 4, 'a'];

let myFunc = (arr) => {
    let x = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        x.push(arr[i]);
        if (i) {
            x.push(arr.length - i);
        } else {
            continue;
        }
    }

    return x;
}

console.log(myFunc(inner));
console.log(myFunc(inner_2));