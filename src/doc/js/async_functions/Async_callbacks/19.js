const a = [1, 2, 3, 4];

async function makeRequest(r) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, r);  
  });
}

(async function asyncFunc(a) {
  // b будет массивом промисов  
  const b = a.map(async e => {
    const result = await makeRequest(e);
    return result;
  });
  return await Promise.all(b);
})(a).then(data => console.log(data));  // (after 2 sec) [1, 2, 3, 4]