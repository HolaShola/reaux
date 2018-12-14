import pickle
import sqlite3
from datetime import datetime
from tagcounter import tag_counter
from const import tag_info_filename, db_name
from config import default_entry_message
from check_synonyms import check_synonyms

def read_data_from_file(filename):
    with open(filename, 'rb') as k:
        data = pickle.load(k)
    return data

def write_data_to_file(filename, data):
    with open(filename, 'wb') as d:
        pickle.dump(str(data), d)

def read_data_from_db(web_page_address):
    if web_page_address:
        if web_page_address == default_entry_message:
            print("Enter correct webpage name, please")
        else:
            web_page_address = check_synonyms(web_page_address)
            conn = sqlite3.connect(db_name)
            c = conn.cursor()
            
            c.execute("SELECT taginfo FROM tagcounter WHERE site_name=?", (web_page_address,))
            data = c.fetchone()

            conn.commit()
            conn.close()
            print(data)
            return data[0]
    else:
        print("Enter webpage name, please")

def write_data_to_db(web_page_address):
    if web_page_address:
        if web_page_address == default_entry_message:
            print("Enter correct webpage name, please")
        else:
            web_page_address = check_synonyms(web_page_address)
            tags_dict = tag_counter(web_page_address)
            write_data_to_file(tag_info_filename, tags_dict)
            tag_info_str = read_data_from_file(tag_info_filename)    

            conn = sqlite3.connect(db_name)
            c = conn.cursor()

            url = "https://" + web_page_address

            c.execute("""CREATE TABLE IF NOT EXISTS tagcounter
                (site_name text, url text, date text, taginfo text)""")
            c.execute("INSERT INTO tagcounter VALUES (?,?,?,?)",
                (web_page_address, url, str(datetime.now()), tag_info_str))

            conn.commit()
            conn.close()

            print("Data loaded")
    else:
        print("Enter webpage name, please")