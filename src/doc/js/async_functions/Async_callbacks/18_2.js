const a = [1, 2, 3, 4];

async function makeRequest(r) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, r);  
  });
}

(async function asyncFunc(a) {
  return Promise.all(a.map(async e => {
    const result = await makeRequest(e);
    return result;  
  }));
})(a).then(data => console.log(data)); // (after 2 sec) [1, 2, 3, 4]