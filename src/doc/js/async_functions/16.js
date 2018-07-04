async function makeRequest(r) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, r);  
  });
}

(async function asyncFunc() {
  // which is correct?
  return await makeRequest(1);
  // or
  // return makeRequest(2);  
})().then(data => console.log(data));