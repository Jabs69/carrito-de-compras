from collections import namedtuple
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import sqlite3

origins = ['http://localhost:5173']


app = FastAPI()
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=True,allow_methods=['*'],allow_headers=['*'])
conn = sqlite3.connect('base.db')
cur = conn.cursor()

@app.get("/")
async def root():
    products = list()
    ListOfProducts = namedtuple('ListOfProducts', 'product_id, name, description, price, stock, image_url')
    cursor = cur.execute('SELECT * from products')

    for row in cursor.fetchall():
        product = ListOfProducts(*row)
        products.append(product._asdict())

    return products 
    

