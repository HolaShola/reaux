async function makeRequest(r) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, r);  
  });
}
    
(async function asyncFunc() {
  const [result1, result2] = await Promise.all([
    makeRequest(1),
    makeRequest(2)
  ]); 
  console.log(result1, result2);  // (after 2 sec) 1 2
})();