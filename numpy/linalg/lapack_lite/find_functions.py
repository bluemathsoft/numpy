# find_functions.py
#
# Extract routine signatures from a C++ module
import re
import sys

def loadtxt(filename):
    # Load text file into a string. Ignore FILE exceptions.
    f = open(filename)
    txt = ''.join(f.readlines())
    f.close()
    return txt

# regex group1, name group2, arguments group3
rproc = r"((?<=[\s:~])(\w+)\s*\(([\w\s,<>\[\].=&':/*]*?)\)\s*(const)?\s*(?={))"
file = sys.argv[1]
code = loadtxt(file)

cppwords = ['if', 'while', 'do', 'for', 'switch']
fn_names = [(i.group(2)) for i in re.finditer(rproc, code) \
 if i.group(2) not in cppwords]
fn_sig = [(i.group(1)) for i in re.finditer(rproc, code) \
 if i.group(2) not in cppwords]

for i in fn_names:
    print i
