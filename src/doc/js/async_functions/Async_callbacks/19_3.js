const a = [1, 2, 3, 4];

async function makeRequest(r) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, r);  
  });
}

(function asyncFunc(a) {
  const b = a.map(e => {
    const result = makeRequest(e);
    return result;
  });
  return Promise.all(b);
})(a).then(data => console.log(data));  // (after 2 sec) [1, 2, 3, 4]