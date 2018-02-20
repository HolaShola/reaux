"""
Отыскивает наибольший файл с исходным программным кодом в дереве каталогов.
"""

import os, sys, pprint

dirname = r'D:\REACT\react_redux\src\doc\pp' # path to the directory
file_extension = '.js'

all_files = []
all_sizes = []

def lister(root_dir):
    for(thisdir, dirnames, filenames) in os.walk(root_dir):
        # pprint.pprint(thisdir)
        # pprint.pprint(dirnames)
        # pprint.pprint(filenames)
        for file in filenames:
            if file.endswith == file_extension:
                all_files.append(file)
    pprint.pprint(all_files)

lister(dirname)

