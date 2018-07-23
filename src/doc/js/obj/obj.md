Если задавать свойство как свойство обычного литерала объекта, то оно доступно и на чтение и на запись. Если же задавать свойство через Object.defineProperty, то такое свойство доступно только на чтение.

                        let task = {};

                        Object.defineProperty(task, 'action', { value: 'dog' });

                        task.action = `${task.action} now!`;
                        console.log(task.action); // dog

В данном примере ошибки не возникнет, но в строгом режиме будет TypeError  

Можно сделать свойство доступным для записи:  

                        Object.defineProperty(
                            task,
                            'action',
                            {
                                value: 'dog',
                                writable: true    
                            }
                        );

for in работает с перечисляемыми свойствами(enumerable). При создании свойства через Object.defineProperty оно **не является перечисляемым**. При создании объекта и свойств через обычный литерал, свойства по умолчанию являются перечисляемыми.  

                        let task = {};

                        Object.defineProperty(
                            task,
                            'action',
                            { value: 'dog' }
                        );

                        for(let field in task)
                            console.log(field); // nothing


                        let task = {
                            action: 'doIt'
                        };

                        for(let field in task)
                            console.log(field); // action  

Чтобы исправить эту ситуацию (сделать свойство перечисляемым):  

                        Object.defineProperty(
                            task,
                            'action',
                            {
                                value: 'dog',
                                enumerable: true    
                            }
                        );

**Если свойство объекта уже было сконфигурировано с помощью Object.defineProperty, то второй раз сконфигурировать его уже не получится**

                        let task = {};

                        Object.defineProperty(
                            task,
                            'action',
                            { value: 'dog' }
                        );

                        Object.defineProperty(
                            task,
                            'action',
                            { value: 'cat' }
                        );

console.log(task.action); // Uncaught TypeError: Cannot redefine property: action  

Если же при первом определении свойства определить флаг configurable, то будет разрешено переопределить значение свойства через Object.defineProperty  


Object.getOwnPropertyDescriptor - позволяет показать настройки для указанного свойства объекта.

                        let task = {
                            action: 5
                        };

                        Object.getOwnPropertyDescriptor(obj, "action");

                        {
                            value: 5,
                            writable: true,
                            enumerable: true,
                            configurable: true
                        }

-----------------------

                        let task = {};

                        Object.defineProperty(
                            task,
                            'action',
                            { value: 'cat' }
                        );

                        Object.getOwnPropertyDescriptor(obj, "action");
                        {
                            value: "cat",
                            writable: false,
                            enumerable: false,
                            configurable: false
                        }

ES2017 - появился метод Object.getOwnPropertyDescriptors(task)

По умолчанию объект является расширяемым

let task = {
    id: 1
};

Object.isExtensible(task); // true

Object.preventExtensions(obj) - запрещает расширение объекта новыми свойствами

Object.freeze(obj) - нельзя изменять значения свойств, нельзя добавлять свойства, нельзя определять свойства через defineProperty. Но это заморозка только верхнего уровня. Но если значения будут объектами, то можно работать с этими объектами и изменять их.

Object.isSealed(obj) - по умолчанию объект не запакован
Object.seal(obj) - можем только менять значения текущих полей

После применения к объекту Object.seal(obj) нельзя применять Object.defineProperty т.к. это уже переконфигурирование свойств.

