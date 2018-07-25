https://learn-reactjs.ru/basics/introduction-to-jsx  
https://reactjs.org/docs/introducing-jsx.html  
https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BD%D0%B3  

https://reactjs.org/docs/jsx-in-depth.html  
https://learn-reactjs.ru/core/jsx-in-depth  

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

