while True:
    reply = input('Enter text: ')
    if reply == 'stop': break
    try:
        num = int(reply)
    except:
        print('Bad ' * 3)    
    else:
        print(int(reply) ** 2)
print('Bye')
    