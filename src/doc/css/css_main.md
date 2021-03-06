 * Высота блока не может быть задана с помощью процентов; высота блока всегда принимает значение высоты контента, если только не задана абсолютная высота, например, в пикселях или em;  
 * Границы также не могут быть заданы в процентах.
 *  полная ширина блока включет в себя сумму свойств width, padding-right, padding-left, border-right и border-left. В некоторых случаях это может быть неудобно (для примера когда нужно чтобы вся ширина блока была равна строго 50% включая границы и внутренние отступы заданные в пикселях). Для того чтобы избежать таких проблем, необходимо настроить блочную модель используя свойство box-sizing. Значение border-box меняет блочную модель следующим образом.  

**в CSS как свойства, так и их значения не чувствительны к регистру**  

 Если свойство неизвестно или приписанное значение не является допустимым для данного свойства, то все объявление считается недопустимым и полностью игнорируется движком браузера.

Если в цепочке или группе есть хотя бы один ошибочный селектор, что бывает, например, при использовании неизвестного псевдо-элемента или псевдо-класса, то вся эта цепочка или группа считается ошибочной и игнорируется.  



### Связывание таблиц стилей с HTML-кодом:  

<link rel="stylesheet" href="css/styles.css">  

Для всех типов документов необходимы два атрибута:
 * rel="stylesheet" — указывает тип ссылки; в данном случае это ссылка на таблицу стилей;
 * href — задает местонахождение внешнего CSS-файла на сайте.  

### Прикрепление таблиц стилей с использованием CSS  

CSS имеет встроенный способ привязки внешних таблиц стилей к коду HTML —
правило @import. Его нужно добавить в HTML-тег <style>. Например:

                                        <style type="text/css">
                                            @import url(css/styles.css);
                                        </style>

В отличие от HTML-тега <link> правило @import — языковая конструкция CSS, обладающая некоторыми несвойственными HTML качествами.

 * Чтобы выполнить привязку к внешнему файлу CSS, нужно использовать url вместо href и заключать путь к CSS-файлу в круглые скобки. Так, в рассмотренном выше примере css/styles.css — путь к внешнему CSS-файлу. Кавычки, в которые заключен URL, не обязательны. Таким образом, url(css/styles.css) и url("css/styles.css") будут работать одинаково.
 
 * Посредством нескольких правил @import, как и с помощью нескольких тегов
<link>, можно присоединить любое количество внешних таблиц стилей:  

                                        <style type="text/css">
                                            @import url(css/styles.css);
                                            @import url(css/forms.css);
                                        </style>  

 * После правила @import можно добавлять обычные CSS-стили

                                        <style type="text/css">
                                            @import url(css/styles.css);
                                            @import url(css/forms.css);
                                            p { color:red; }
                                        </style> 

Нужно поместить все правила @import перед CSS-стилями, как показано в примере. Веб-браузеры игнорируют любые таблицы стилей, импортируемые после CSS-правила, поэтому если изменить порядок показанного выше кода на обратный и стиль p появится первым, то браузер проигнорирует любые стили в таблицах стилей style.css или form.css.  

#### именование классов:  
 * при именовании стилевых классов разрешается использование только букв алфавита, чисел, дефисов, знаков подчеркивания.
 * Название после точки всегда должно начинаться с символа — буквы алфавита. Например, .9lives — неправильное имя класса, а .crazy8 — правильное. Можно называть классы, например, именами .copy-right и .banner_image, но не .-bad или ._as_bad. 
 * Имена стилевых классов чувствительны к регистру. Например, .SIDEBAR и .sidebar
рассматриваются языком CSS по-разному, как различные классы.  

### Ограничения наследования  
Многие CSS-свойства вообще не наследуются, например border.  
Ниже описаны конкретные случаи, когда наследование точно не применяется:  
 * Как правило, свойства, которые затрагивают размещение элементов на странице (отступы (поля), границы (рамки) элементов), не наследуются. Было бы не очень приятно, если бы у body был отступ и его наследовали все элементы вложенные в body.  




**Единственный способ перекрыть инструкцию !important - это включить в исходный код другую инструкцию !important с такой же специфичностью, но позднее.**  

Специфичность измеряет то, селектор специфичен — то есть скольким элементам он может соответствовать.  

Величину специфичности селектора измеряют согласно четырем разным величинам (или компонентам), которые можно представить как тысячи, сотни, десятки и единицы — четыре цифры в четырех столбцах:
 * Тысячи: Ставит единицу в этот столбец, если селектор внутри элемента <style> или объявление находится внутри атрибута style (такие объявления не имеют селекторов, и их специфичность всегда равна 1000.) В противном случае ставьте 0.
 * Сотни: Добавляет единицу в этот столбец за каждый селектор ID, содержащийся внутри составного селектора.
 * Десятки: Добавляет единицу в этот столбец за каждый селектор класса, атрибута или псевдо-класса, содержащийся в составном селекторе.
 * Единицы: Добавляет единицу в этот столбец за каждый селектор элемента или псевдо-элемента, содержащийся в составном селекторе.

**Примечание: Универсальный селектор(*), комбинаторы (+, >, ~, ' ') и псевдо-класс отрицания (:not) на специфичность не влияют.**

**Примечание: Если несколько селекторов имеют одну и ту же важность и специфичность, то побеждает тот, что идет позднее в исходном коде**  

важно помнить, что все переопределение происходит на уровне свойств — одни свойства переопределяют другие свойства, но целые правила не переопределяют другие правила. Если некоторому элементу отвечают несколько CSS правил, они все применяются к нему. И только после этого выявляются отдельные конфликтующие свойства и определяется, какие именно стили победят.  

                                    <p>I'm <strong>important</strong></p>

                                    /* специфичность: 0002 */
                                    p strong {
                                      background-color: khaki;
                                      color: green;
                                    }

                                    /* специфичность: 0001 */
                                    strong {
                                      text-decoration: underline;
                                      color: red;
                                    }

В данном примере, в силу большей специфичности, свойство цвета (color) из первого правила переопределит аналогичное свойство второго правила. Однако свойства background-color из первого правила и text-decoration из второго оба применяются к элементу <strong>.

https://developer.mozilla.org/ru/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance  

### float  
Плавающие элементы могут быть расположены у левого или правого края окна
содержащего их элемента-контейнера. В некоторых случаях это просто означает,
что элемент перемещается к левому или правому краю окна браузера. Однако если
вы перемещаете элемент, находящийся внутри другого тега, для которого установлены значения ширины или позиции на веб-странице, то перемещение будет осуществлено к левому или правому краю этого тега, который является контейнером для плавающего элемента. Например, на веб-странице может быть блочный элемент шириной 300 пикселов, который прилегает к правому краю окна браузера.
Внутри может располагаться изображение, которое выровнено по левому краю.
Иными словами, изображение примыкает к краю этого блока шириной 300 пикселов, а не к окну браузера.  

Вы можете применять свойство float к линейным элементам, например <img>.  
Браузер обрабатывает линейные элементы точно так же, как блочные.  

При использовании свойства float для блочных элементов рекомендуется установить свойство width для них (на самом деле правила CSS требуют установки ширины плавающим элементам для всех тегов, кроме изображений).  

https://learn.javascript.ru/float  

### Осуществление преобразований, переходов и анимации  
## преобразования  
В CSS3 представлены несколько свойств, связанных с преобразованиями элемента веб-страницы, будь то вращение, масштабирование, перемещение этого элемента или его перекашивание вдоль горизонтальной или вертикальной оси (которое называется наклоном).

Основным CSS-свойством для получения любого из этих изменений является transform. Оно используется с предоставлением типа желаемого преобразования и добавлением значения, указывающего на степень преобразования элемента. Например, для вращения элемента предоставляется ключевое слово rotate, за которым следует количество градусов поворота:  
                                    
                                    transform: rotate(10deg);

У CSS-преобразований есть одна странность: они не касаются окружающих элементов.То есть, если повернуть элемент на 45°, он может наложиться на те элементы, которые находятся выше, ниже его или по бокам. Сначала веб-браузеры выделяют элементу то пространство, которое он занимал бы при обычных обстоятельствах (до преобразования), а затем они занимаются преобразованием элемента (его вращением, увеличением или наклоном).  

                                    transform: scale(2);

Число, представляемое в скобках, является коэффициентом масштабирования — числом, на которое умножаются текущие размеры элемента. На это число происходит масштабирование элемента и всего, что в нем находится. Например, если масштабировать <div>-контейнер с коэффициентом 2, то
вдвое шире и выше станет не только сам контейнер, но также и текст внутри него. Это же касается и находящихся внутри изображений.  

Можно даже проводить раздельное горизонтальное и вертикальное масштабирование. Для этого внутри скобок нужно представить два значения, разделенных запятой. Первое число будет относиться к горизонтальному, а второе — к вертикальному масштабированию. Например, чтобы сделать элемент вдвое меньше по ширине, но вдвое выше, используется следующее объявление:

                                    transform: scale(.5,2);  

В CSS3 также предоставлены отдельные функции для горизонтального и вертикального масштабирования: scaleX проводит масштабирование по горизонтальной оси, а scaleY — по вертикальной:

                                    transform: scaleY(2);
                                    transform: scaleX(3.5);  


