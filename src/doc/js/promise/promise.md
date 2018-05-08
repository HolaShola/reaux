### Links :books:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise  
https://habr.com/company/mailru/blog/269465/  
https://learn.javascript.ru/fetch  
https://learn.javascript.ru/promise  

                                    let promise = applyForVisa();

Т.к. applyForVisa это асинхронная функция, то она вернет обещание.

                                    promise.then(resolve, reject);

у обещания есть метод then(), данный метод принимает два аргумента:
 - resolve - функция которая сработает, если обещание выполняется
 - reject - функция которая сработает, если обещание не будет выполнено

promise.then(bookHotel, cancelVacation);

т.к. applyForVisa вернет обещание, то можно сразу записать таким образом:
                                    
                                    applyForVisa()
                                        .then(resolve, reject)
                                        
В метод then не обязательно отправлять два аргумента, достаточно отправлять только один, на тот случай если обещание будет выполнено.

Если же обещание не будет выполнено, то мы можем использовать другой метод у объекта promise:

                                    applyForVisa()
                                        .then(resolve)
                                        .catch(reject)






