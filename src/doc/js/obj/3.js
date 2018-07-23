let task = {};

// Object.defineProperty(
//     task,
//     'action',
//     { value: 'dog' }
// );

// Object.defineProperty(
//     task,
//     'action',
//     { value: 'cat' }
// );

//console.log(task.action); // Uncaught TypeError: Cannot redefine property: action

// Если же добавить флаг configurable: true, то можно будет переопределить

Object.defineProperty(
    task,
    'action',
    { value: 'dog', configurable: true }
);

Object.defineProperty(
    task,
    'action',
    { value: 'cat' }
);

console.log(task.action);

// следующий раз опять нельзя переопределить свойство. т.е. каждый раз нужно указывать
// этот флаг.
