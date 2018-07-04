async function makeRequest(r) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 2000, r);  
  });
}
  
(async function asyncFunc() {
  let result;
  try {
    result = await makeRequest(3);
    console.log(result);    // 
  } catch(e) {
    console.log(`error: ${e}`);  
  } 
})();