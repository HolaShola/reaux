в множестве уникальные значения.  
size - получить кол-во элементов в Set

                        const set = new Set();
                        set
                          .add('button')
                          .add('head')

                        console.log(set.size) // 2

has - проверить имеется ли значение в Set. При проверке наличия объекта сохранять ссылку на объект.

                        console.log(set.has('head)); // true

delete - удаление элемента из множества. Возвращает true или false

                        set.delete('head');

clear - полностью очистить множество

values() - возвращает объект типа SetIterator, который итерируется по значениям;
entries(), keys() - аналогично

если нужно из множества сделать массив:

                        [...set];
                     Array.from(set);     

перебрать значения монжо с помощью for...of

Элементы в множестве располагаются в том порядке, в котором они были добавлены и нет возможности поменять этот порядок.