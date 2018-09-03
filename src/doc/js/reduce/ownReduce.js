let myArray = [1, 2, 3, 4, 5];

let myReduce = (func, seq, initialValue = 0) => {
    let currentResult = initialValue;

    seq.map(x => {
        currentResult = func(x, currentResult);
        console.log(currentResult);
    });

    return currentResult;
};


let myReduceRight = (func, seq, initialValue = 0) => {
    let currentResult = initialValue;
    seq.reverse();

    seq.map(x => {
        currentResult = func(x, currentResult);
        console.log(currentResult);
    });

    return currentResult;
}

let res = myReduce((x, y) => x + y, myArray);

myReduceRight((x, y) => x + y, myArray, 1);