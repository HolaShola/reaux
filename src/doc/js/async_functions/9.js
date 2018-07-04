async function asyncFunc() {
  return Promise.resolve(1);
}

const p = asyncFunc();
// p.then(console.log); // ???
p.then(data => console.log(data)); // 1

async function asyncFunc2() {
  return Promise.reject('Error123');
}

const m = asyncFunc2();
m.catch(err => console.log(err)); // 'Error123'

async function asyncFunc3() {
  throw new Error('Error42');
  return 123;
}
  
const c = asyncFunc3();
c.catch(console.log); // Error: Error42
                      // at asyncFunc3 (9.js:17)
                      // at 9.js:21