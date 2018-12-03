import requests
from bs4 import BeautifulSoup
import sys

# action = sys.argv[1]
web_page_address = sys.argv[1]

response = requests.get("https://" + web_page_address)

soup = BeautifulSoup(response.text, "html.parser")

tags_dict = {}

for tag in soup.findAll():
    if tags_dict.get(tag.name):
        tags_dict[tag.name].append(tag.name)
    else:
        tags_dict[tag.name] = [] 
        tags_dict[tag.name].append(tag.name)

for i, j in tags_dict.items():
    print(i + ' -', len(j))