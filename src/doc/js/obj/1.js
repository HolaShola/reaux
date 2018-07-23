let task = {};

Object.defineProperty(task, 'action', { value: 'dog' });

task.action = `${task.action} now!`;
console.log(task.action);