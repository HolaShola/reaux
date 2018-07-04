function makeRequest(r) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, r);  
  });
}

(async function asyncFunc() {
  const result = makeRequest(1);
  console.log(result);    // Promise {<pending>}
})();