Стрелочные функции не могут быть конструкторами т.к. у них нет прототипа:

                        let getTaskId = () => 1;
                        console.log(getTaskId.hasOwnProperty('prototype')); // false

Если отсутствуют фигурные скобки, то неявно присутствует оператор return, если присутствуют фигурные скобки, то оператор return отсутствует(возвращает undefined)

                                    let getFunc = () => {
                                        id: 1
                                    };

                                    console.log(getFunc()) // undefined

В js есть понятие label, и в данном случае id - label  

-------------------------
document.addEventListener('click', function() {
    console.log(this);  // document
});

(function() {
    'use strict'
    document.addEventListener('click', () => {
        console.log(this);  // undefined
    });
})();

В стрелочной функции this будет указывать на контекст, в котором стрелочная функция объявлена.

Стрелочные функции не реагируют на bind, call, apply  

                                    let task = {
                                        id: 123,
                                        done: function() {
                                            return () => console.log(this.id);
                                        }
                                    };

                                    let anotherTask = {
                                        id: 987
                                    };

                                    task.done().bind(anotherTask)(); // 123
                                    task.done().call(anotherTask);   // 123
                                    task.done().apply(anotherTask);  // 123

У стрелочных функций нет объекта arguments, но есть rest параметры
