Как узнать что мы работаем с асинхронной функцией? Есть такой символ Symbol.toStringTag и с помощью него определяется асинхронная ли функция или нет.

Еще один способ узнать асинхронная ли функция - Object.prototype.toString.call(asyncFunc) - если вернется [object AsyncFunction] то очевидно.

В отличие от обычных функций, асинхронные функции возвращают промис независимо от того что мы возвращаем и возвращаем ли вообще. Если же мы возвращаем промис(return Promise.resolve(1)) то по идее должны вернуть промис от возвращаемого промиса))) но все-равно возвращается просто промис, т.к. в данном случае функция не будет оборачивать промис во внешний промис.

Если асинхронная функция ничего не возвращает, то она возвращает промис, а какое же значение будет у этого промиса? - undefined  

            async function asyncFunc() {
            console.log('async FDS');  
            }

            Object.getPrototypeOf(asyncFunc) === Function.prototype;  // false

            const asyncProto = Object.getPrototypeOf(asyncFunc);

            Object.getPrototypeOf(asyncProto) === Function.prototype;  // true

Это значит что прототип асинхронной функции основан на прототипе функции.  

### await  
Ключевое слово await позволяет из промиса достать значение.  

Await можно прописать только в асинхронных функциях.

Можно ли, что бы после await стоял не промис?  

            (async function asyncFunc() {
              const result = await 3;
              console.log(result);     // 3
            })();

Если несколько await присутствуют в асинхронной функции, то код будет выполняться последовательно!!!  

return await - признак что что-то неправильно. вместе они не должны фигурировать, т.к. они выполняют противоположные операции. Если же они все-таки встречаются, то возвращается промис.

            const a = [1, 2, 3, 4];

            async function makeRequest(r) {
            return new Promise(resolve => {
                setTimeout(resolve, 2000, r);  
            });
            }

            (async function asyncFunc(a) {
            return a.map(async e => {
                const result = await makeRequest(e);
                return result;  
            });
            })(a).then(data => console.log(data));

пройдем по шагам:
 1. Функция makeRequest возвращает промис.
 2. await - резолвит, т.е. достает значение и помещает его в result
 3. потом идет return result
 4. т.к. мы находимся в асинхронной функции:
        
        async e => {
          const result = await makeRequest(e);
          return result;  
        }
    
    и известно что асинхронные функции возвращают промис независимо от того что мы возвращаем и возвращаем ли вообще, следовательно получаем промис(заворачиваем result в промис).
 5. в итоге функция asyncFunc возвращает массив промисов.

 ### Limitations  
async
function asyncFunc() {
  console.log('async FDS');  
}

async должен находиться в той же строчке где и функция. Это ограничение похоже на ограничение для стрелочной функции - стрелка должна быть на той же строке где и список параметров функции.  

async function asyncFunc() {
  console.log('async FDS');  
}

console.log(async.hasOwnProperty('prototype'));  // false

У функции нет прототипа, следовательно мы не можем использовать асинхронную функцию как функцию-конструктор.

(async function asyncFunc() {
  await;
})();

Если после await ничего не поставить то получим syntaxError

- мы не можем для асинхронной функции в качестве параметра по умолчанию использовать выражение с await:  

(async function asyncFunc(a = await Promise.resolve(1)) {
  console.log(a);
})();

т.к. **await должно находиться в теле асинхронной функции**, не в списке параметров.