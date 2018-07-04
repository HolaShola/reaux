function makeRequest(r) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, r);  
    });
  }
  
  (async function asyncFunc() {
    const result = await makeRequest(2);
    console.log(result);    // (after 2 sec) 2
  })();