from fastapi import FastAPI
import mysql.connector

app = FastAPI()

def get_db_connection():
    return mysql.connector.connect(
        host="shopping-db",
        user="root",
        password="password123",
        database="shopping"
    )

@app.get("/products")
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price FROM products")
    items = [{"id": row[0], "name": row[1], "price": float(row[2])} for row in cursor.fetchall()]
    conn.close()
    return {"products": items}
