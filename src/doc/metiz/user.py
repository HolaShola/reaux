user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi'
}

for key in user_0:
    print(key)

for key, value in user_0.items():
    print(key + ' => ' + value)

print(user_0.items())

print(user_0.keys())

print(user_0.values())
