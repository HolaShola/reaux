У компонента свойство data должно быть функцией, чтобы каждый экземпляр компонента мог управлять собственной независимой копией возвращаемого объекта данных:

                                    data: function () {
                                        return {
                                            count: 0
                                        }
                                    }

Если бы у Vue не было этого правила, нажатие на одну кнопку повлияло бы на данные всех других экземпляров.  

Чтобы использовать компоненты в шаблонах, они должны быть зарегистрированы, чтобы Vue узнал о них. Есть два типа регистрации компонентов: глобальная и локальная.  

регистрировать компонент глобально можно используя Vue.component:

                                    Vue.component('my-component-name', {
                                    // ... опции ...
                                    })

Компоненты зарегистрированные глобально могут использоваться в шаблоне любого корневого экземпляра Vue (new Vue) созданного после регистрации — и даже внутри всех компонентов, расположенных в дереве компонентов этого экземпляра Vue.  

                                    Vue.component('component-a', { /* ... */ })
                                    Vue.component('component-b', { /* ... */ })
                                    Vue.component('component-c', { /* ... */ })

                                    new Vue({ el: '#app' })

                                    <div id="app">
                                        <component-a></component-a>
                                        <component-b></component-b>
                                        <component-c></component-c>
                                    </div>

При регистрации компонента у него всегда будет имя. Именем компонента будет первый аргумент Vue.component.  

глобальная регистрация должна происходить до создания корневого экземпляра Vue (с помощью new Vue)

**Локальная регистрация**  
можно определить свои компоненты как обычные объекты JavaScript:

                                    var ComponentA = { /* ... */ }
                                    var ComponentB = { /* ... */ }
                                    var ComponentC = { /* ... */ }

Затем укажите компоненты которые вы хотите использовать в опции components:

                                    new Vue({
                                        el: '#app',
                                        components: {
                                            'component-a': ComponentA,
                                            'component-b': ComponentB
                                        }
                                    })

Для каждого свойства в объекте components, ключ будет именем пользовательского элемента, в то время как значение будет объектом, содержащим опции компонента.

локально зарегистрированные компоненты не будут доступны в дочерних компонентах. Например, если вы хотите, чтобы ComponentA был доступен в ComponentB, вам нужно будет использовать:

                                    var ComponentA = { /* ... */ }

                                    var ComponentB = {
                                        components: {
                                            'component-a': ComponentA
                                        },
                                        // ...
                                    }

                                    import ComponentA from './ComponentA.vue'

                                    export default {
                                        components: {
                                            ComponentA
                                        },
                                        // ...
                                    }

**Передача данных в дочерние компоненты через входные параметры**  

                        Vue.component('blog-post', {
                            props: ['title'],
                            template: '<h3>{{ title }}</h3>'
                        })  

После объявления входного параметра можно передавать данные в него через пользовательский атрибут, например:

                        <blog-post title="My journey with Vue"></blog-post>
                        <blog-post title="Blogging with Vue"></blog-post>
                        <blog-post title="Why Vue is so fun"></blog-post>

