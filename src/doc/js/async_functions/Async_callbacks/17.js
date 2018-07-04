const a = [1, 2, 3, 4];

async function makeRequest(r) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, r);  
  });
}

(async function asyncFunc(a) {
  return a.map(e => {
    const result = await makeRequest(e); // Uncaught SyntaxError: await is only valid in async function
    return result;  
  });
})(a).then(data => console.log(data));