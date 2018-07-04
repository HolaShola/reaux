async function makeRequest(r) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000, r);  
    });
  }
    
(async function asyncFunc() {
  const result1 = await makeRequest(1);
  console.log(result1);  // (after 2 sec) 1

  const result2 = await makeRequest(2);
  console.log(result2);  // (after 2 sec) 2
})();