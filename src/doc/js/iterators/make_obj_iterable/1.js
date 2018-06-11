// Обычные объекты не являются итерируемыми, но их можно сделать итерируемыми
const iterableObj = {
  0: 'Hello',
  1: 'World of',
  2: 'Iterators'
}

// обязательно нужны квадратные скобки т.к. 
// iterator не является свойством Symbol
// свойством является сущность Symbol.iterator
iterableObj[Symbol.iterator] = function() {
    // console.log(this);  iterableObj
    const length = Object.keys(this).length;
    let index = 0;
    return {
        next: () => {
            const done = index >= length;
            const value = this[index++];
            return { value, done };
        }
    };
};

for (const i of iterableObj) {
    console.log(i);  // Hello   World of   Iterators  
}