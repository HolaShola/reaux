const getTask = task => () => task;
const specialGetTask = getTask('Create');
const result = specialGetTask();

console.log(result);