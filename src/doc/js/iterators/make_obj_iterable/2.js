const iterableObj = {
    0: 'Hello',
    1: 'World of',
    2: 'Iterators',
    [Symbol.iterator]() {
      const length = Object.keys(this).length;
      let index = 0;
      return {
        next: () => {
          const done = index >= length;
          const value = this[index++];
          return { value, done };
        }
      };
    }
  }
  
for (const i of iterableObj) {
  console.log(i);  // Hello   World of   Iterators  
}