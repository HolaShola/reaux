@staticmethod
@property

дескриптор

методы словарей get() и setdefault()

>>> d = {'a': 1, 'b': 2}
>>> d.get('a')
1
>>> d.get('c') # в лучае отсутствия ключа не возникает ошибка а возвращается None
None
>>> d['c']
Error

setdefault('c', 3) - если значения нет, то присваивает, иначе - не трогает


L = [3, 1, 4, 2]
L.sort()
sorted(L)

reversed(L)
L.reverse()


профилирование и отладка
import time
start = time.time()

timeit

#profile
import cProfile

#pdb

#Тестирование кода
import unittest

#pytest
#nose
#tox

pylint

#перезагрузка модулей
import importlib
importlib.reload

#пути поиска модулей
import sys
sys.path

site-packages

