function add_border(arr) {
    let first_and_last_string = '*'.repeat(arr[0].length + 2);
    let newArr = arr.map(item => '*' + item + '*');
    let res = [];
    return res.concat(first_and_last_string, newArr, first_and_last_string);
}

function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

addBorder = p => [(t = p[0].replace(/./g, '*')+'**'), ...p.map(v => `*${v}*`), t]

console.log(add_border(['11111', '22222', '33333']));