while True:
    reply = input('Enter text: ')
    if reply == 'stop':
        break
    elif not reply.isdigit():
        print('Bad! ' * 3)
    else:
        num = int(reply)
        if num < 20:
            print('Less than 20')
        else:    
            print(num ** 2)
print('Bye')
    