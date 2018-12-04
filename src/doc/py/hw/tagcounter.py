import requests
from bs4 import BeautifulSoup
import sys

def main():
    # web_page_address = sys.argv[1]

    try:
        # response = requests.get("https://" + web_page_address)
        response = requests.get("https://ya.ru")
    except:
        return print("Wrong webpage address!!!")
    
    soup = BeautifulSoup(response["text"], "html.parser")
    tags_dict = {}

    for tag in soup.findAll():
        if tags_dict.get(tag.name):
            tags_dict[tag.name] += 1
        else:
            tags_dict[tag.name] = 1 

    print(tags_dict)

    return tags_dict

if __name__ == '__main__':
    main()
