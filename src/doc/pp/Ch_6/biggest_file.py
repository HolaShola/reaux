import os, sys, glob

dirname = r'***' # path to the directory

list_of_files = glob.glob(dirname + os.sep + '*.py')
all_sizes = []

for filename in list_of_files:
    filesize = os.path.getsize(filename)
    all_sizes.append((filesize, filename))

all_sizes.sort()
print(all_sizes[-1])