const a = [1, 2, 3, 4];

async function makeRequest(r) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, r);  
  });
}

(async function asyncFunc(a) {
  return a.map(async e => {
    const result = await makeRequest(e);
    return result;  
  });
})(a).then(data => console.log(data)); // [Promise, Promise, Promise, Promise]


// эта конструкция возвращает промис того, что идет после return
// (т.е. заворачивает в промис то что идет после return)
// async function asyncFunc(a) {
//   return ...  
// }
// а после return идет массив промисов
// следовательно asyncFunc возвращает промис массива промисов