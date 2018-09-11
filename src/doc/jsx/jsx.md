https://learn-reactjs.ru/basics/introduction-to-jsx  
https://reactjs.org/docs/introducing-jsx.html  
https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BD%D0%B3  

https://reactjs.org/docs/jsx-in-depth.html  
https://learn-reactjs.ru/core/jsx-in-depth  

JSX сам является выражением - после компиляции JSX-выражения становятся регулярными JavaScript-объектами.

Это означает, что вы можете использовать JSX внутри условного оператора if и оператора цикла for, присваивать его переменным, принимать как аргумент и возвращать из функций. В общем, делать все, что и с обычным JavaScript-объектом.  

Указание атрибутов с помощью JSX - Мы можем использовать двойные кавычки для указания строковых литералов как атрибутов:

                        const element = <div tabIndex="0"></div>;

Наравне с кавычками мы можем использовать фигурные скобки, чтобы встроить JavaScript-выражение в атрибут:
    
                        const element = <img src={user.avatarUrl}></img>;

Не вставляйте кавычки вокруг фигурных скобок, когда встраиваете JavaScript-выражение в атрибут. В противном случае JSX будет воспринимать значение атрибута как строковый литерал, а не как выражение. В одном атрибуте можно использовать либо двойные кавычки, либо фигурные скобки, но не всё вместе.  

Если тег пустой, можно сразу же закрыть его с помощью /> как в XML:
    
                        const element = <img src={user.avatarUrl}/>;

По умолчанию React DOM избегает любых значений, встроенных в JSX перед их отрисовкой. Таким образом он гарантирует, что вы никогда не сможете внедрить что-либо, что не явно написано, в ваше приложение. Все преобразуется в строку, перед тем как будет отрисовано. Это помогает избежать XSS атак.  

JSX представляет собой JavaScript-объекты.  
Эти два примера эквивалентны:  

                        const element = (
                            <h1 className="greeting">
                                Hello, world!
                            </h1>
                        );

                        const element = React.createElement(
                            'h1',
                            {className: 'greeting'},
                            'Hello, world!'
                        );

React.createElement() выполняет несколько проверок, чтобы помочь вам написать свободный от багов код, но по существу он создает объект, наподобие следующего:

                        // Обратите внимание: эта структура упрощена
                            const element = {
                            type: 'h1',
                            props: {
                                className: 'greeting',
                                children: 'Hello, world'
                            }
                            };
    
А если зайти в исходники, то этот объект будет выглядеть так:

                        var element = {
                            // This tag allow us to uniquely identify this as a React Element
                            $$typeof: REACT_ELEMENT_TYPE,

                            // Built-in properties that belong on the element
                            type: type,
                            key: key,
                            ref: ref,
                            props: props,

                            // Record the component responsible for creating this element.
                            _owner: owner,
                        };


Вы можете передавать строковый литерал как свойство. Эти два JSX-выражения эквивалентны:

                        <MyComponent message="Привет мир!" />
                        <MyComponent message={'Привет мир!'} />

If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

                        <MyTextBox autocomplete />
                        <MyTextBox autocomplete={true} />

### spread attributes  
These two components are equivalent:  

                        function App1() {
                            return <Greeting firstName="Ben" lastName="Hector" />;
                        }

                        function App2() {
                            const props = {firstName: 'Ben', lastName: 'Hector'};
                            return <Greeting {...props} />;
                        }  

Строковые литералы
Вы можете заключить строку между открывающим и закрывающим тегами, тогда свойство props.children будет равно этой строке. Это полезно для многих встроенных HTML-элементов. К примеру:
    
                        <MyComponent>Привет, мир!</MyComponent>
  
Это валидный JSX, и свойство props.children в MyComponent будет просто строкой «Привет, мир!». HTML будет не экранирован, поэтому вы можете писать на JSX также, как если бы вы писали на обычном HTML:
    
                        <div>Это валидный HTML & JSX одновременно.</div>  

JSX удаляет пробелы вначале и конце строки. Он также удаляет пустые строки. Новая строка, прилегающая к тегу будет удалена. Новые строки, находящиеся по середине строковых литералов, сжимаются в единичный пробел. Все это отрисуется в то же самое:
                            
                        <div>Привет, мир!</div>

                        <div>
                            Привет, мир!
                        </div>

                        <div>
                            Привет,
                            мир!
                        </div>

                        <div>

                            Привет, мир!
                        </div>  

false, null, undefined, и true – валидные потомки, но они не отрисовываются. Эти JSX-выражения будут отрисованы одинаково:


                        <div />
                        <div></div>
                        <div>{false}</div>
                        <div>{null}</div>
                        <div>{undefined}</div>
                        <div>{true}</div>  

Один нюанс заключается в том, что “ложные” значения, такие как число 0, будут по-прежнему отрисовываться React.