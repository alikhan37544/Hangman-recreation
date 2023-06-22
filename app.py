from flask import Flask, render_template, request
import pymysql
import random

app = Flask(__name__)

# MySQL database connection configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'admin',
    'database': 'hangman_game'
}

def get_db_connection():
    connection = pymysql.connect(**db_config)
    return connection

def close_db_connection(connection):
    if connection:
        connection.close()

@app.route('/')
def hangman():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT word FROM words ORDER BY RAND() LIMIT 1')
    words = [row[0] for row in cursor.fetchall()]
    close_db_connection(connection)
    return render_template('hangman.html', words=words)


if __name__ == '__main__':
    app.run(debug=True)
