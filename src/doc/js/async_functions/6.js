async function asyncFunc() {
  console.log('async FDS');  
}

console.log(Object.getPrototypeOf(asyncFunc));

const asyncProto = Object.getPrototypeOf(asyncFunc);

console.log(Object.getPrototypeOf(asyncProto) === Function.prototype);