def describe_pet(animal_type, pet_name):
    print('I have a ' + animal_type)
    print('My ' + animal_type + "'s name is " + pet_name + '.')

describe_pet('dog', 'Shadow')

describe_pet(animal_type = 'cat', pet_name = 'Joe')

describe_pet(pet_name = 'Joe', animal_type = 'cat')