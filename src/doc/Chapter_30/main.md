Сырые строки - в них спецсимволы никак не обрабатываются. 

                        >>>print(r'hello \n world')
                        'hello \n world'

многострочные строки - используются три двойных кавычки(именно двойных, а не одинарных)

кортеж - неизменяемый тип данных, но если кортеж содержит список, то этот список изменять можно.

range(x, y) - создание последовательности

dir(object) - посмотреть список методов объекта
dir(list), dir(dict)

help(object) - список методов с пояснениями
help(list), help(dict)

namedtuple

type(type)
type(object)

type и object - два базовых класса от которых все наследуется

модуль -> инструкции -> выражения -> объекты

функция id - уникальный идентификатор объекта(его адрес)

L2 is L1   # посути id(L2) == id(L1)

трехместное выражение if/else
A = Y if X else Z

enumerate

>>>s = 'spam'
>>> for (offset, item) in enumerate(s):
        print(item, 'appears at offset', offset)

s appears at offset 0
p appears at offset 1
a appears at offset 2
m appears at offset 3