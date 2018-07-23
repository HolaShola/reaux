let task = {};

Object.defineProperty(task, 'action', { value: 'dog' });

for(let field in task)
  console.log(field);