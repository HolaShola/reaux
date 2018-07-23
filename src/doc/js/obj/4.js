let task = {};

Object.defineProperty(task, 'action', {
    value: 'create'
});

if (task.action) {
    console.log(true);   // true
}

console.log(task.hasOwnProperty('action')); // true

console.log('action' in task); // true

if (task.toString) {
    console.log(true);   // true
}

console.log(task.hasOwnProperty('toString')); // false

console.log('toString' in task); // true
