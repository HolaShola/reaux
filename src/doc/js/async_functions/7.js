async function asyncFunc() {
  console.log('async FDS');  
}

console.log(asyncFunc[Symbol.toStringTag]);

console.log(Object.prototype.toString.call(asyncFunc));