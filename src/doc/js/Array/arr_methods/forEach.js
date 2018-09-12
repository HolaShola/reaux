let arr_1 = ['Яблоко', 'Апельсин', 'Груша'];
let arr_2 = [3, 1, 4];
let arr_3 = ['b', 'a', 'c'];

let x = arr_1.forEach((item, i, arr) => {
    console.log(i + ': ' + item + ' (массив:' + arr + ')' );
});

arr_2.forEach(item => console.log(item));
arr_3.forEach(item => console.log(item));

// console.log(x);
// console.log(arr);