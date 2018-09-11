function chessBoardCellColor(cell1, cell2) {
    let s1 = ' ABCDEFGH';
    let s2 = ' 12345678';
    
    let firstAlphaIndex = s1.match(cell1[0]).index;
    let firstNumberIndex =  s2.match(cell1[1]).index;

    let secondAlphaIndex = s1.match(cell2[0]).index;
    let secondNumberIndex = s2.match(cell2[1]).index;
    
    let res1 = firstAlphaIndex % 2 == firstNumberIndex % 2 ? 'black' : 'white';
    let res2 = secondAlphaIndex % 2 == secondNumberIndex % 2 ? 'black' : 'white';
    
    if (res1 === res2) {
        return true;
    }

    return false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

console.log(chessBoardCellColor('A1', 'A2'));
console.log(chessBoardCellColor('A1', 'B2'));

console.log(chessBoardCellColor('B3', 'H8'));
console.log(chessBoardCellColor('C3', 'B5'));

console.log(chessBoardCellColor('G5', 'E7'));
console.log(chessBoardCellColor('C8', 'H8'));

console.log(chessBoardCellColor('D2', 'D2'));
console.log(chessBoardCellColor('A2', 'A5'));