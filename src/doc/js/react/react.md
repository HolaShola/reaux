https://learn-reactjs.ru/basics/state-and-lifecycle  


ReactDOM.render(<Timer/>, document.getElementById('root'));  

1. Когда <Timer/> передан в ReactDOM.render(), React **вызывает конструктор** компонента Timer. 

2. Далее React вызывает метод render() компонента Timer. Далее React обновляет DOM,    в соответствии с результатом отрисовки Timer.  

3. Когда результат отрисовки Timer вставлен в DOM, React вызывает метод      componentDidMount() жизненного цикла.

4. Благодаря вызову setState(), React знает, что состояние изменилось, и вызывает метод render() снова, чтобы узнать, что должно быть на экране.  

5. Если компонент Timer в какой-то момент удалён из DOM, React вызывает метод componentWillUnmount() жизненного цикла, из-за чего таймер останавливается.