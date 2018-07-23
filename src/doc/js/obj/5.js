let task = {
    id: 1
};

Object.preventExtensions(task);

task.id = 2;

console.log(task.id);

task.action = 'create';

console.log(task.action); // undefined