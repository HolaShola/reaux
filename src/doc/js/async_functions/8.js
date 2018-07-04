async function asyncFunc1() {}

const p = asyncFunc1();
if (p instanceof Promise) {
  console.log(true);  // true
}

async function asyncFunc2() {
  return 1;
}

const num = asyncFunc2();
if (num instanceof Promise) {
  console.log(true);  // true
}

async function asyncFunc3() {
  return Promise.resolve(1);
}
  
const promise = asyncFunc3();
if (promise instanceof Promise) {
  console.log(true);  // true
}