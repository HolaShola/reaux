let task = {
    id: 1
};

Object.seal(task);

Object.defineProperty(task, 'id', {
    value: 2,
    enumerable: false
});

console.log(task);