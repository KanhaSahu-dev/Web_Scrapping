from flask import Flask, render_template
import csv
import threading
import webbrowser
import os

app = Flask(__name__)

def read_csv(csv_file):
    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        # Skip the first row
        next(csv_reader)
        data = list(csv_reader)
    return data


@app.route('/')
def display_table():
    csv_file = 'amazon_products.csv'  
    data = read_csv(csv_file)
    rendered_template = render_template('table.html', data=data)
    
    return rendered_template

def open_browser():
    response = webbrowser.open('http://127.0.0.1:5000/')
    
    # After displaying the template, schedule the server shutdown after 1 second
    threading.Timer(1, stop_server).start()

def stop_server():
    # Send a SIGINT signal to stop the server
    os.kill(os.getpid(), 2)

if __name__ == '__main__':
    # Start the Flask application in a separate thread
    threading.Thread(target=open_browser).start()
    app.run(debug=True, threaded=True, use_reloader=False)
