const quickSort = list => {
    if (list.length < 2) {
        return list;
    }

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i = 1, len = list.length; i < len; i++) {
        if (list[i] < pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return [
        ...quickSort(left), 
        pivot, 
        ...quickSort(right)
    ];
}

console.log(quickSort([5, 3, 6, 1, 8, 2, 4, 7]));