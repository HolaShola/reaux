import tkinter as tk
import tkinter.ttk as ttk

def gui():
    root = tk.Tk()
    
    cb = ttk.Combobox(root, values=("ya.ru", "yandex.ru", "google.com"), width=30)
    bc = tk.Button(root, text="Выбрать")
    e = tk.Entry(root, width=50)
    load_button = tk.Button(root, text="Загрузить")
    view_from_db = tk.Button(root, text="Показать из базы")
    
    cb.pack()
    bc.pack()
    e.pack()
    load_button.pack()
    view_from_db.pack()
    
    root.mainloop()
