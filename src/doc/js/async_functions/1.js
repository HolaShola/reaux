async function asyncFunc() {
  console.log('async FDS');  
}

asyncFunc();

console.log(asyncFunc[Symbol.toStringTag]);
