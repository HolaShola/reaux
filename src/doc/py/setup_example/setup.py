from setuptools import setup

setup(
    name='foobar',
    version='1.0',
    author='Authorrr',
    py_modules=['foobar'],
    description='Description',
    entry_points={'console_scripts': ['foobar = foobar:main']},
)
